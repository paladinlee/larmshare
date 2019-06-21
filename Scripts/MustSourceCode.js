function HtmlIdToCShopName(HtmlId, HtmlType, vSource) {
    var v_Result = "";

    switch (HtmlType) {
        case "textbox":
            /*
            透由 Html 裡的 element ID，取得 html 裡的 elenment Name。                      
            */
            var v_tb_name = $(vSource).find("input[id=" + HtmlId + "]").prop("name");
            v_Result = v_tb_name;
            break;

        case "textarea":
            /*
            透由 Html 裡的 element ID，取得 html 裡的 elenment Name。                        
            */
            var v_ta_name = $(vSource).find("textarea[id=" + HtmlId + "]").prop("name");            
            v_Result = v_ta_name;
            break;

        case "select":
            /*
            透由 Html 裡的 element ID，取得 html 裡的 elenment Name。                        
            */
            var v_select_name = $(vSource).find("select[id=" + HtmlId + "]").prop("name");
            v_Result = v_select_name;
            break;
    }

    return v_Result;

}