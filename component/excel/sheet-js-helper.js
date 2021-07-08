var sheetJsHelper = (function () {

  function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf);  //create uint8array as viewer
    for (var i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF; //convert to octet
    return buf;
  }

  return {
    csvDownload : function (fileName, data) {
      var worksheet = XLSX.utils.json_to_sheet(data);
      var targetData = XLSX.utils.sheet_to_csv(worksheet);
      saveAs(new Blob([targetData], {encoding: 'UTF-8', type:'text/plain;charset=UTF-8'}), fileName + '.csv');
    },
    xlsxDownload : function (fileName, data) {
      var sheetName = 'sheet1';
      var workbook = XLSX.utils.book_new();
      var worksheet = XLSX.utils.json_to_sheet(data);
      XLSX.utils.book_append_sheet(workbook, worksheet, sheetName);
      var targetData = XLSX.write(workbook, {bookType: 'xlsx', type: 'binary'});
      saveAs(new Blob([s2ab(targetData)], {type:'application/octet-stream'}), fileName + '.xlsx');
    }
  }
}());
