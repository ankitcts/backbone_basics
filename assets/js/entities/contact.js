'use strict';
ContactManager.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {
    //callback - 6 default arguments
    Entities.Contact = Backbone.Model.extend({
        defaults: {
            phoneNumber: '+91-9999-xxx'
        }
    });

    Entities.ContactCollection = Backbone.Collection.extend({
        model: Entities.Contact,
        comparator: "firstName"
    });

    var contacts;

    var initializeContacts = function () {
        contacts = new Entities.ContactCollection([
            {
                id: 1, firstName: "Sapient", lastName: "GM",
                phoneNumber: "000-9999"
            },
            {
                id: 2, firstName: "Sapient", lastName: "Nitro",
                phoneNumber: "555-xxxx"
            },
            {
                id: 3, firstName: "Sapient", lastName: "Publicis",
                phoneNumber: "555-xxxx"
            }
        ]);
    };
    var API = {
        getContactEntities: function () {
            if (contacts === undefined) {
                initializeContacts();
            }
            return contacts;
        }
    };
    ContactManager.reqres.setHandler("contact:entities", function () {
        return API.getContactEntities();
    });
});