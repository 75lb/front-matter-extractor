var yaml = require("js-yaml");

module.exports = function FrontMatterExtractor(input){
    var matter = /^---$([\s\S]*)^---$/m;
    this.frontMatter = null;
    this.remainder = input;
    if (input && typeof input === "string"){
        var matches = input.match(matter);
        if (matches){
            this.frontMatter = yaml.safeLoad(matches[1]);
            this.remainder = input.replace(matches[0], "").trim();
        }
    } 
}
