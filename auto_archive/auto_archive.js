function archiveTasks() {

  var limit = 16;
  var loop_count = 0;
  var sheet1 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet 1');
  var sheet2 = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet 2');
  var archive = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Archive');
  var task_sheets = [sheet1, sheet2];

  for (var i=0; i<=1; i++) {
    SpreadsheetApp.setActiveSheet(task_sheets[i]);
    var is_created_range = task_sheets[i].getRange('B2:B');
    SpreadsheetApp.setActiveRange(is_created_range);
    var is_completed = is_created_range.getValues();

    //Plus 2 for header offset
    for (var row = is_created_range.getLastRow(); row > 0; row--){
      if (is_completed[row] == "true"){
        task_sheets[i].getRange(row+2,1).setFormula("=now()");
        var completed_range = task_sheets[i].getRange(row+2,1, 1, task_sheets[i].getLastColumn());
        var completed_values = completed_range.getValues();
        archive.appendRow(completed_values[0]);
        task_sheets[i].deleteRow(row + 2);
      }
    }
  }
}
