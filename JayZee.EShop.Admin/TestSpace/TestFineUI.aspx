<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestFineUI.aspx.cs" Inherits="JayZee.EShop.Admin.TestSpace.TestFineUI" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
        <f:PageManager ID="PageManager1" runat="server" />
        <f:Button Text="点击弹出对话框" runat="server" ID="btnHello" OnClick="btnHello_Click">
        </f:Button>
        <br />
        <br />
        <f:Button Text="在顶层窗口弹出对话框" runat="server" ID="btnHello2" OnClick="btnHello2_Click">
        </f:Button>
    </div>
    </form>
</body>
</html>
