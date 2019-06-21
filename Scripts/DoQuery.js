$(function () {
    $(".ControlSelect").change(function () {


        var vColumnType = $(this).attr("ColumnType");
        var vColumnLength = $(this).attr("ColumnLength");

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
                vCode = vCode + "<asp:TextBox ID=\"tbx_" + vPre + columnName + vAppend + "\"";

                if (vColumnType == "nvarchar" || vColumnType == "varchar") {
                    vCode = vCode + " MaxLength=\"" + vColumnLength + "\" ";
                }

                vCode = vCode + "Width=\"100px\" runat=\"server\"></asp:TextBox>";
                vCode = vCode + "\n";


                //處理 Server 端程式
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;//檢查" + describe + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;if (tbx_" + vPre + columnName + vAppend + ".Text.Trim() == \"\"){" + "<br />";
                vSMust = vSMust + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sb.Append(\"" + describe + "  不可空白\\\\n\"); }" + "<br /><br />";

                break;

            case "DropDownList":
                //處理 Client 端程式
                vCode = vCode + "*** 前端程式 ***";
                vCode = vCode + "\n";
                vCode = vCode + "<asp:DropDownList ID=\"ddl_" + vPre + columnName + vAppend + "\" Width=\"100px\" runat=\"server\">";
                vCode = vCode + "\n";
                vCode = vCode + "<asp:ListItem Value=\"-1\">全部</asp:ListItem>";
                vCode = vCode + "\n";
                vCode = vCode + "<asp:ListItem Value=\"20\">送件</asp:ListItem>";
                vCode = vCode + "\n";
                vCode = vCode + "</asp:DropDownList>";
                vCode = vCode + "\n";
                vCode = vCode + "\n";
                vCode = vCode + "*** 後端程式 ***";
                vCode = vCode + "\n";
                vCode = vCode + "protected void Page_Load(object sender, EventArgs e)\n";
                vCode = vCode + "{\n";
                vCode = vCode + "    if (!IsPostBack)\n";
                vCode = vCode + "    {\n";
                vCode = vCode + "        //繫結 ddl_" + vPre + columnName + vAppend + "\n";
                vCode = vCode + "        Bind_ddl_" + vPre + columnName + vAppend + "();\n";
                vCode = vCode + "    }\n";
                vCode = vCode + "}\n";
                vCode = vCode + "\n";
                vCode = vCode + "private void Bind_ddl_" + vPre + columnName + vAppend + "()\n";                
                vCode = vCode + "{\n";
                vCode = vCode + "    SettlementContactorClass oS = new SettlementContactorClass();\n";
                vCode = vCode + "    oS.q_compidno = EnCode(GetAgentIDNo());\n";
                vCode = vCode + "    DataSet ds=oS.GetContactorWindowByCompidno();\n";
                vCode = vCode + "\n";
                vCode = vCode + "    ddl_" + vPre + columnName + vAppend + ".DataSource = ds;\n";
                vCode = vCode + "    ddl_" + vPre + columnName + vAppend + ".DataTextField = \"ai_username\";\n";
                vCode = vCode + "    ddl_" + vPre + columnName + vAppend + ".DataValueField = \"ai_account\";\n";
                vCode = vCode + "    ddl_" + vPre + columnName + vAppend + ".DataBind();\n";
                vCode = vCode + "\n";
                vCode = vCode + "    //第一筆預設空白\n";
                vCode = vCode + "    ddl_" + vPre + columnName + vAppend + ".Items.Insert(0, new ListItem(\"\", \"\"));\n";
                vCode = vCode + "}\n";


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