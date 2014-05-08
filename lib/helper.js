var fme = require("./front-matter-extractor"),
    w = require("wodge");

module.exports = function(handlebars){
    handlebars.registerHelper("front-matter", function(content, property, escape){
        var result = fme.extract(content)[property];
        if (escape === true) result = w.escapeForJSON(result);
        return result;
    });
};
