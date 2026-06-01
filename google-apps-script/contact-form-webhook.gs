const SPREADSHEET_ID = "1czndC9g9GVHwkuDFXbiK58u3c3WJS7RLx4V6aKO80fQ";
const SHEET_NAME = "Form Responses";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");

    const lock = LockService.getScriptLock();
    lock.tryLock(30000);

    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = spreadsheet.getSheetByName(SHEET_NAME);

    if (!sheet) {
      sheet = spreadsheet.insertSheet(SHEET_NAME);
      sheet.appendRow([
        "Timestamp",
        "Name",
        "Email",
        "Enquiry Type",
        "Message",
        "Source",
      ]);
    }

    sheet.appendRow([
      payload.timestamp || new Date().toISOString(),
      payload.name || "",
      payload.email || "",
      payload.enquiryType || "General Inquiry",
      payload.message || "",
      payload.source || "NHF Website Contact Form",
    ]);

    lock.releaseLock();

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(error) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput("NHF contact webhook is running")
    .setMimeType(ContentService.MimeType.TEXT);
}
