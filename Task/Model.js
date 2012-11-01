﻿var Model = function (data) {
    "use strict";
    var nameField;
    for (nameField in data) {
        this[nameField] = data[nameField];
    }
};
/**
 * @param {Object} attributes
 *
 * @example
 *     item.set({title: "March 20", content: "In his eyes she eclipses..."});
 */
Model.prototype.set = function (attributes) {
    "use strict";
    var nameAttr;
    for (nameAttr in attributes) {
        if (attributes.hasOwnProperty(nameAttr)) {
            if (typeof this[nameAttr] !== "undefined") {
                this[nameAttr] = attributes[nameAttr];
            }
        }
    }
};
/**
 * @param {String} attribute
 */
Model.prototype.get = function (attribute) {
    "use strict";
    if (typeof attribute !== 'string' || typeof this[attribute] === "undefined") {
        return; //return undefined;
    }
    return this[attribute];
};
/**
 * @param {Object} attributes
 */
Model.prototype.validate = function (attributes) {
    "use strict";
    throw new Error('this is Abstract method');
};