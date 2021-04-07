/** 
Execute this function to "explode" all combined cells in selected sheet | @equisele
*/
function unMergeAllCells() {
  // Get current active sheet
  var as = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()
  // get a range of all cells with data in current sheet
  var cellsWithData = as.getDataRange()
  // explode all of them
  cellsWithData.breakApart()
}
