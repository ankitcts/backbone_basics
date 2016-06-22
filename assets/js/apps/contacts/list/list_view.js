ContactManager.module("ContactsApp.List", function (List, ContactManager,
    Backbone, Marionette, $, _) {
    List.Contact = Marionette.ItemView.extend({
        tagName: "tr",
        template: Handlebars.compile($("#contact-list-item").html()),
        events: {
            "click": "highlightName",
            "click button.js-delete": 'deleteClicked'
        },

        highlightName: function (e) {
            e.preventDefault();
            this.$el.toggleClass("warning");
        },
        deleteClicked: function (e) {
            e.stopPropagation();
            // this.model.collection.remove(this.model);
            this.trigger("contact:delete", this.model);
        },
        remove: function () {
            var self = this;
            this.$el.fadeOut(function () {
                Marionette.ItemView.prototype.remove.call(self);
            });
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