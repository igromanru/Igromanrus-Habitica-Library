/**
 * Author: Igromanru
 * Source: https://github.com/igromanru/Igromanrus-Habitica-Library
 */

/**
 * Resets filter for each column to reapply filters
 */
function resetSheetFilter(sheet) {
    if (sheet) {
      const filter = sheet.getFilter();
      if (filter) {
        const range = filter.getRange();
        for (let i = range.getColumn(), maxCol = range.getLastColumn(); i <= maxCol; i++) {
          const filterCriteria = filter.getColumnFilterCriteria(i);
          if (filterCriteria) {
            filter.setColumnFilterCriteria(i, filterCriteria);
          }
        }
      }
    }
  }
  
  /**
   * Runs through all sheets in the spreadsheet and resets filter for each column to reapply filters
   */
  function resetAllSpreadsheetFilters(spreadsheet) {
    for (const sheet of spreadsheet.getSheets()) {
      resetSheetFilter(sheet);
    }
  }
  
  /**
   * Converts a JS Date object to Google Sheet's date time format
   */
  function dateToSpreadsheetDate(dateTime) {
    if (isDate(dateTime)) {
      const googleZeroDate = new Date(Date.UTC(1899,11,30,0,0,0,0));
      return ((dateTime.getTime()  - googleZeroDate.getTime()) / 60000 - dateTime.getTimezoneOffset()) / 1440;
    }
  }