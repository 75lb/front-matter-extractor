var fme = require("./front-matter-extractor");

module.exports = function(handlebars){
    handlebars.registerHelper("front-matter", function(content, property){
        return fme.extract(content)[property];
    });
};
