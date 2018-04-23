ItemTemplateButtonClick.Index = function(params) {
    var viewModel = {
        listDataSource: ko.observableArray([
            { Id: 1, Name: 'Name1' },
            { Id: 2, Name: 'Name2' },
            { Id: 3, Name: 'Name3' }
        ]),
        buttonClick: function (e, itemData) {
            alert('Click for Id=' + itemData.Id.toString() + ', Name=' + itemData.Name);
        }
    };
    return viewModel;
};