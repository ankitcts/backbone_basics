var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: '#main-region'
});

ContactManager.Contact = Backbone.Model.extend({
    defaults: {
        phoneNumber: '+91-9999-xxx'
    }
});
ContactManager.ContactCollection = Backbone.Collection.extend({
    model: ContactManager.Contact
    //comparator: "firstName"
});

ContactManager.on("start", function () {
    var data = new ContactManager.ContactCollection([{
            firstName: 'XYZ',
            lastName: 'Globalmarket',
            phoneNumber: '+91-997162xxxx'
        }, {
            firstName: 'Sapient-1',
            lastName: 'Globalmarket-1'
        }, {
            firstName: 'Sapient-2',
            lastName: 'Globalmarket-2',
            phoneNumber: '+91-997162xxxx'
        }]);

    var listView = new ContactManager.ContactsView({
        collection: data
    })
    ContactManager.mainRegion.show(listView);
});


ContactManager.ContactItemView = Marionette.ItemView.extend({
    template: Handlebars.compile($("#contact-list-item").html()),
    tagName: "li",
    events: {
        "click p": "_alertPhone"
    },
    _alertPhone: function () {
        alert(this.model.get("phoneNumber"));
    }
});

ContactManager.ContactsView = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: ContactManager.ContactItemView
});