$(function () {
    $(".ControlSelect").change(function () {
        var vSMust = '';
        var res = $(this).attr("id").split("_");

        var Name_n0 = res[res.length - 3];
        var Name_n1 = res[res.length - 2];
        var Name_n2 = res[res.length - 1];



        var ddl_select = $(".ControlSelect[id$=" + Name_n0 + "_ddl_ControlType] option:selected").val();
        var describe = $(".ColumnDescribe[id$=" + Name_n0 + "_tbx_ColumnDescribe]").val();
        var columnName = $(".ColumnName[id$=" + Name_n0 + "_lb_ColumnName]").text();

        var vCode = "";
        var vPre = $("input[id$=tbxPre]").val();
        var vAppend = $("input[id$=tbxAppendLase]").val();

        switch (ddl_select) {
            case "TextBoxSingle":
                //處理 Client 端程式
                vCode = vCode + "//檢查" + describe;
                vCode = vCode + "\n";
                vCode = vCode + "if(jQuery.trim($(\"input[id$=tbx_" + vPre + columnName + vAppend + "]\").val())=='')";
                vCode = vCode + "\n";
                vCode = vCode + "    v_must+='" + describe + ",';";

                //處理 Server 端程式
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;//檢查" + describe + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;if (tbx_" + vPre + columnName + vAppend + ".Text.Trim() == \"\"){" + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.Append(\"" + describe + "  不可空白\\\\n\"); }" + "<br /><br />";
                
                break;

            case "TextBoxMulti":
                //處理 Client 端程式
                vCode = vCode + "//檢查" + describe;
                vCode = vCode + "\n";
                vCode = vCode + "if(jQuery.trim($(\"textarea[id$=tbx_" + vPre + columnName + vAppend + "]\").val())=='')";
                vCode = vCode + "\n";
                vCode = vCode + "    v_must+='" + describe + ",';";

                //處理 Server 端程式
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;//檢查" + describe + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;if (tbx_" + vPre + columnName + vAppend + ".Text.Trim() == \"\"){" + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.Append(\"" + describe + "  不可空白\\\\n\"); }" + "<br /><br />";
            
                break;

            case "RadioButtonList":
                //處理 Client 端程式
                vCode = vCode + "//檢查" + describe;
                vCode = vCode + "\n";
                vCode = vCode + "if($(\"input[name*=rbl_" + vPre + columnName + vAppend + "]:checked\").val()==undefined)";
                vCode = vCode + "\n";
                vCode = vCode + "    v_must+='" + describe + ",';";

                //處理 Server 端程式
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;//檢查" + describe + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;if (rbl_" + vPre + columnName + vAppend + ".SelectedValue == \"\"){" + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.Append(\"" + describe + "  不可空白\\\\n\"); }" + "<br /><br />";
            
                break;


        }

        $(".ControlCode[id$=" + Name_n0 + "_tbx_ControlCode]").val(vCode);
        $("#span_must_server_" + vPre + columnName + vAppend).html(vSMust);
    });
});