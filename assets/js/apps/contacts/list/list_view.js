ContactManager.module("ContactsApp.List", function (List, ContactManager,
    Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        tagName: "li",
        template: Handlebars.compile($("#contact-list-item").html()),
    });

    List.Contacts = Marionette.CollectionView.extend({
        tagName: "ul",
        childView: List.Contact
    });
});