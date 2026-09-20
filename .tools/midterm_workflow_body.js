const PAGES = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19"];

const CLUSTER = {
  "01": "A", "02": "A", "03": "A",
  "04": "B", "05": "B", "06": "B", "07": "B", "08": "B", "09": "B",
  "10": "B", "11": "B", "12": "B", "13": "B",
  "14": "C", "15": "C", "16": "C", "17": "C", "18": "C", "19": "C"
};

function contextFor(id) {
  const c = CLUSTER[id];
  const lines = [
    "CONTEXT ABOUT THIS SCAN (a 19-page PDF named 「计组期中 三年合集（19 21）」):",
    "- It is a CamScanner scan. There is NO text layer, so your reading is the only source of text.",
    "- Pages 01-03: scans of a PRINTED exam paper plus a lecture slide. IMPORTANT: the test-paper images on these pages are rotated 180 degrees (upside down). Mentally rotate them before reading.",
    "- Pages 04-13: photos of a projector screen during a Zoom online exam. The exam header reads 2021年10月27日, so this is the 2021 exam.",
    "- Pages 14-19: photos of a projector screen of a DIFFERENT year's exam. No header, no visible year."
  ];
  if (c === "A") lines.push("- The same exam also appears at pages 04-13, but the printed scan on this page is usually SHARPER. Prefer the sharpest region on this page.");
  if (c === "B") lines.push("- These screen photos have glare, moire, perspective skew and zoom-slider overlays. Read carefully.");
  if (c === "C") lines.push("- These pages have NO exam header and no year. Question numbering overlaps the 2021 exam but the question CONTENT differs.");
  return lines.join("\n");
}

const RULES = [
  "HARD RULES:",
  "1. Transcribe the Japanese text EXACTLY as printed. Do NOT translate. Do NOT rewrite or 'fix' the Japanese. Keep the original kanji/kana, punctuation and full-width characters.",
  "2. Do NOT invent text for anything you cannot read. Never guess a character you cannot see. Report it as unreadable instead.",
  "3. IGNORE all hand-written answer marks: red or purple pen circles around (A)(B)(C)(D), tick marks, handwritten kana such as ア, side-margin calculations, arrows and underlines. These are a student's answers, NOT part of the exam. Never transcribe them.",
  "4. IGNORE all screenshot and photo artefacts: the Zoom side panel, participant video tiles, room labels B204 / b203, the taskbar clock and date, Snap buttons, ドキュメントビューアー, 'Scanned with CamScanner', page-edge shadows, fingers and glare. NEVER put these in the markdown.",
  "5. Keep the printed question numbering exactly, e.g. (1) (2) (10) (21).",
  "6. Preserve the printed line breaks of question stems. Preserve the 得点 box and section headings such as 一、... 二、...",
  "7. Layout conversion: multiple-choice options printed in two columns A/B and C/D become a 2-column markdown table, with A beside B on the first row and C beside D on the second. Assembly-code and C source code become fenced code blocks."
].join("\n");

const auditSchema = {
  type: "object", additionalProperties: false,
  required: ["path", "page_verdict", "regions", "summary"],
  properties: {
    path: { type: "string" },
    page_verdict: { type: "string", enum: ["A", "B", "C"] },
    summary: { type: "string" },
    regions: {
      type: "array",
      items: {
        type: "object", additionalProperties: false,
        required: ["region", "kind", "readability", "content_summary", "notes"],
        properties: {
          region: { type: "string" },
          kind: { type: "string", enum: ["stem", "choices", "code_block", "table", "header", "heading", "page_number", "out_of_scope", "scan_artifact", "screenshot_noise"] },
          readability: { type: "string", enum: ["A", "B", "C"] },
          content_summary: { type: "string" },
          notes: { type: "string" }
        }
      }
    }
  }
};

const transcribeSchema = {
  type: "object", additionalProperties: false,
  required: ["path", "markdown", "unreadable_spans", "page_verdict"],
  properties: {
    path: { type: "string" },
    page_verdict: { type: "string", enum: ["A", "B", "C"] },
    markdown: { type: "string" },
    unreadable_spans: { type: "array", items: { type: "string" } }
  }
};

const reconcileSchema = {
  type: "object", additionalProperties: false,
  required: ["path", "page_verdict", "markdown", "unreadable_spans", "disagreements"],
  properties: {
    path: { type: "string" },
    page_verdict: { type: "string", enum: ["A", "B", "C"] },
    markdown: { type: "string" },
    unreadable_spans: { type: "array", items: { type: "string" } },
    disagreements: { type: "array", items: { type: "string" } }
  }
};

phase("audit");
log("auditing 19 pages for legibility");

const results = await pipeline(
  PAGES,

  async (_prev, id) => {
    const img = "D:\\trans-for-CS\\.tools\\midterm_read\\p" + id + ".jpg";
    const p = [
      "You are auditing ONE page (page " + id + ") of a scanned Japanese university exam paper for legibility.",
      "",
      "STEP 1: Call the read_image tool on this exact path:",
      "  " + img,
      "You MUST actually call read_image. Never answer from imagination.",
      "",
      contextFor(id),
      "",
      "STEP 2: Inventory every distinct content region on the page, top to bottom and left to right: question stems, choice lists, code blocks, tables, headers and headings, the printed page number, and any non-exam content.",
      "For EVERY region assign a readability grade:",
      "  A = completely readable, every character unambiguous",
      "  B = readable but some characters uncertain - give the specific location in notes",
      "  C = genuinely unreadable, blurred, covered by handwriting, or cut off by the page edge",
      "Grade the question STEM and the CHOICE LIST separately; choices are often blurrier than stems.",
      "If a region is cut off at a page edge or covered by handwriting, mark it C and state exactly what is missing.",
      "Do NOT reconstruct unreadable content. Only report which printed regions are unreadable and exactly where they sit.",
      "In page_verdict give the worst grade affecting printed exam text.",
      "得点 boxes are printed structure, not noise. A lecture slide listing 試験範囲 is NOT exam paper: kind it as out_of_scope."
    ].join("\n");
    return await agent(p, { label: "audit-p" + id, phase: "audit", schema: auditSchema });
  },

  async (audit, id) => {
    if (!audit) return null;
    const img = "D:\\trans-for-CS\\.tools\\midterm_read\\p" + id + ".jpg";
    const auditJson = JSON.stringify({ page_verdict: audit.page_verdict, regions: audit.regions, summary: audit.summary });
    const p = [
      "You are transcribing ONE page (page " + id + ") of a scanned Japanese university exam paper into Markdown.",
      "",
      "A previous agent produced this legibility audit of the same page:",
      auditJson,
      "",
      "STEP 1: Call the read_image tool on this exact path:",
      "  " + img,
      "You MUST actually call read_image and read the page yourself. Do not simply trust the audit above; it is a hint, not a substitute for looking.",
      "",
      contextFor(id),
      "",
      RULES,
      "",
      "STEP 2: Output the markdown.",
      "- Start with the line: <!-- page " + id + " -->",
      "- Then transcribe every readable printed region in page order.",
      "- Insert the literal token [[UNREADABLE]] wherever printed content genuinely cannot be read.",
      "- If a printed region is covered by handwriting or cut off by the page edge, use [[UNREADABLE]] rather than guessing.",
      "- Content of kind out_of_scope, such as a lecture slide listing the exam scope, must NOT be transcribed; mention it in unreadable_spans as skipped non-exam content.",
      "- End the markdown with the line: <!-- end page " + id + " -->",
      "In unreadable_spans list every span you could not fully read, with its location. Use an empty array if the page is fully readable."
    ].join("\n");
    return await agent(p, { label: "transcribe-p" + id, phase: "transcribe", schema: transcribeSchema });
  },

  async (_prev, id) => {
    const img = "D:\\trans-for-CS\\.tools\\midterm_verify\\p" + id + ".jpg";
    const p = [
      "Independently transcribe page " + id + " of a scanned Japanese university exam paper. This is a SECOND, independent reading used to cross-check another agent's work, so do NOT look for or assume any other transcript.",
      "",
      "STEP 1: Call the read_image tool on this exact path:",
      "  " + img,
      "You MUST actually call read_image. This is a lower-resolution copy of the same page, so read it carefully and slowly.",
      "",
      contextFor(id),
      "",
      RULES,
      "",
      "STEP 2: Output your own markdown transcription, starting with <!-- page " + id + " --> and ending with <!-- end page " + id + " -->.",
      "Use [[UNREADABLE]] for anything you genuinely cannot read.",
      "In unreadable_spans list what you could not read, with locations. Be especially careful about digits such as 0/6/8/9, the letter O versus digit 0, 1 versus l versus I, and B versus 8, since these are easy to misread."
    ].join("\n");
    return await agent(p, { label: "verify-p" + id, phase: "verify", schema: transcribeSchema });
  },

  async (verify, id, primary) => {
    if (!primary || !verify) {
      return {
        path: "p" + id,
        page_verdict: "C",
        markdown: "",
        unreadable_spans: ["Reconciliation could not run: one of the two independent readings failed for this page."],
        disagreements: ["stage failure"]
      };
    }
    const p = [
      "Two agents independently transcribed page " + id + " of the same scanned Japanese exam paper. Reconcile them into ONE final markdown transcription.",
      "",
      "READING 1 (primary):",
      primary.markdown,
      "",
      "READING 1 unreadable spans: " + JSON.stringify(primary.unreadable_spans),
      "",
      "READING 2 (independent verification):",
      verify.markdown,
      "",
      "READING 2 unreadable spans: " + JSON.stringify(verify.unreadable_spans),
      "",
      "RECONCILIATION RULES:",
      "- Compare the two readings character by character, including every digit and option letter.",
      "- Where both agree, keep it.",
      "- Where they DISAGREE, do NOT pick one arbitrarily. Use [[UNREADABLE]] and record the disagreement in the disagreements list with both candidate readings, naming the location, e.g. 'p12 (29) choice C: reading1 has 01001010, reading2 has 01001011'.",
      "- Exception: a pure whitespace, line-break or table-formatting difference is not a content disagreement. Normalise it and do not report it.",
      "- Where one reading has content and the other marks it unreadable, use [[UNREADABLE]] and report the disagreement.",
      "- If BOTH readings agree a span is unreadable, keep [[UNREADABLE]] and list it once.",
      "- Never fabricate content to fill a gap. Never add answer marks or screenshot artefacts. Keep all Japanese verbatim.",
      "- Keep the format: start with <!-- page " + id + " --> and end with <!-- end page " + id + " -->.",
      "",
      "Output the final reconciled markdown, the merged unreadable_spans, and the disagreements list.",
      "page_verdict must be the worst grade affecting printed exam text: A only if everything is fully and confidently read, B if some parts are uncertain, C if a printed region is genuinely unreadable or cut off."
    ].join("\n");
    return await agent(p, { label: "reconcile-p" + id, phase: "reconcile", schema: reconcileSchema });
  }
);

const ok = results.filter(Boolean);
log("reconciled " + ok.length + "/" + PAGES.length + " pages");

return {
  pages: ok,
  failed_pages: PAGES.filter(function (id, i) { return !results[i]; }),
  verdicts: ok.map(function (r) {
    return {
      path: r.path,
      verdict: r.page_verdict,
      unreadable: (r.unreadable_spans || []).length,
      disagreements: (r.disagreements || []).length
    };
  })
};
