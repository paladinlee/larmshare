function GetCode() {


    var vResult = "";
    //函數宣告開始
    vResult = "public " + $("select[id$=ddlReturnType]").val() + " SomeMethod() \r\n";
    vResult += "{\r\n";
    vResult += "   #region SQL\r\n";
    vResult += "   string strSQL = @\"\r\n";
    vResult += "\";\r\n";
    vResult += "   #endregion \r\n";

    vResult += "\r\n";
    vResult += "\r\n";


    //判斷是否有參數
    var vParArray = GetParaArray();
    if (vParArray.length > 0) {
        vResult += "   SqlCommand cmd = new SqlCommand(strSQL); \r\n";

        for (i = 0; i < vParArray.length; i++) {
            vResult += "   cmd.Parameters.AddWithValue(\"@"+vParArray[i]+"\", "+vParArray[i]+");\r\n";
        }
    }


    //判斷函數回傳方式
    vResult += "\r\n";
    switch ($("select[id$=ddlReturnType]").val())
    {
        case "void":
            vResult += "   Common.Data_energyexpense.runParaCmd1(cmd);\r\n";
            break;

        case "DataSet":
            vResult += "   Common.Data_energyexpense.runParaCmdDS(cmd);\r\n";
            break;

        case "int":
            vResult += "   int.Parse(Common.Data_energyexpense.runScalar(cmd).ToString());\r\n";
            break;

        case "string":
            vResult += "   Common.Data_energyexpense.runScalar(cmd).ToString();\r\n";
            break;

        default:
    }    

    //函數宣告結束
    vResult += "}\r\n";

    //更新結果
    $("textarea[id$=tbxResult]").val(vResult);

}

//取得目前畫面上有效的參數宣告
function GetParaArray() {
    var vResult = [];
    var vValidParm = $("input[id$=tbxParameter").filter(function () { return $(this).val() != "" });

    $(vValidParm).each(function () {
        vResult.push($(this).val());
    });
        
    return vResult;
    
}