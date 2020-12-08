window.ItemTemplateButtonClick = window.ItemTemplateButtonClick || {};

$(function() {
    app = new DevExpress.framework.html.HtmlApplication({
        ns: ItemTemplateButtonClick,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: ItemTemplateButtonClick.config.defaultLayout,
        navigation: ItemTemplateButtonClick.config.navigation
    });
    app.router.register(":view/:id", { view: "Index", id: undefined });
});
