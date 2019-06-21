//adjust for bootstarp style

$(function () {

    

    $("input[type=file]").each(function () {
    

        if ($(this).hasClass("multi")) {
            //console.log($(this).prop("id"),'has mulit');
            $(this).hide().wrap(function () { return "<label class='btn btn-default btn-file input-group-addon'> <span class='glyphicon glyphicon-folder-open'> <span class='glyphicon glyphicon-folder-open'> <span class='glyphicon glyphicon-option-horizontal'>  </span></label>" }).parent().css("color", "#e5d290");
            $(this).parent().prop("title", "挑選多個上傳檔案");
        }
        else {
            //console.log($(this).prop("id"), 'no mulit');
            $(this).hide().wrap(function () { return "<label class='btn btn-default btn-file input-group-addon'> <span class='glyphicon glyphicon-folder-open'> </span></label>" }).parent().css("color", "#e5d290");
            $(this).parent().prop("title", "挑選上傳檔案");
        }
    });

    
});


function FileUploadAfterShow() {
    //適用於挑選檔案後，沒有觸發 PostBack
    $("input[type=file]").change(function () {
        $(this).parent().parent().find(".form-control").first().html($(this).val().split('\\').slice(-1)[0]);
    });
}