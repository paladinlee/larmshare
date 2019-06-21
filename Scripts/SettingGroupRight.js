$(function () {
    vType = $("input[id$=h_user_group]").val();    
    if (vType == 'A') {
        $(".r_user").hide();
        $(".r_adm").show();
    }
    else {
        $(".r_user").show();
        $(".r_adm").hide();
    }
})