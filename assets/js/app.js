var ContactManager = new Marionette.Application();

ContactManager.addRegions({
    mainRegion: '#main-region'
});

ContactManager.on("start", function () {
   var contacts = ContactManager.request("contact:entities");

    var listView = new ContactManager.ContactsView({
        collection: contacts
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