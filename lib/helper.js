var fme = require("./front-matter-extractor");

module.exports = function(handlebars){
    handlebars.registerHelper("front-matter", function(content, property){
        var result = fme.extract(content)[property];
        return result;
    });
};
