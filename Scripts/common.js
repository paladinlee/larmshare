function CheckDateFormat(objID) {
    var data = $("#" + objID).val();

    //檢查日期長度是否正確
    if (data.length == 6 || data.length == 7 || data.length == 8) {
    }
    else {
        alert('日期不正確');
        $("#" + objID).val('');
        return;
    }

    //檢查日期格式是否正確
    var re = /^\d+$/g;;
    if (!re.test(data)) {
        alert('日期不正確');
        $("#" + objID).val('');
        return;
    }

   
    if (data.length == 8) {
        //西元年
        var vYear = data.substr(0, 4);
        var vMD = data.substr(4, 4);

        var vCYear = (parseInt(vYear) - 1911).toString();

        $("#" + objID).val(vCYear + vMD);
    }

}