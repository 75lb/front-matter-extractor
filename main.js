var yaml = require("js-yaml");

module.exports = function FrontMatterExtractor(input){
    var matter = /^---$([\s\S]*)^---\s/m;
    this.frontMatter = {};
    this.content = input;
    if (input && typeof input === "string"){
        var matches = input.match(matter);
        if (matches){
            this.frontMatter = yaml.safeLoad(matches[1]);
            this.content = input.replace(matches[0], "");
        }
    } 
}
