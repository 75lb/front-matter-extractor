var fme = require("./front-matter-extractor");

function escapeForJSON (str) {
    return str
      .replace(/[\"]/g, '\\"')
      .replace(/[\\]/g, '\\\\')
      .replace(/[\/]/g, '\\/')
      .replace(/[\b]/g, '\\b')
      .replace(/[\f]/g, '\\f')
      .replace(/[\n]/g, '\\n')
      .replace(/[\r]/g, '\\r')
      .replace(/[\t]/g, '\\t')
    ; 
};

module.exports = function(handlebars){
    handlebars.registerHelper("front-matter", function(content, property, escape){
        var result = fme.extract(content)[property];
        if (escape === true) result = escapeForJSON(result);
        return result;
    });
};
