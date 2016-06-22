ContactManager.module("ContactsApp.List", function (List, ContactManager,
    Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        tagName: "tr",
        template: Handlebars.compile($("#contact-list-item").html()),
        events: {
            "click": "highlightName"
        },

        highlightName: function (e) {
            e.preventDefault();
            this.$el.toggleClass("warning");
        }
    });

    List.Contacts = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-hover",
        childView: List.Contact,
        template: Handlebars.compile($("#contact-list").html()),
        itemViewContainer: "tbody"
    });
});