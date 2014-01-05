front-matter-extractor
======================

this code:

var FrontMatterExtractor = require("front-matter-extractor");
var extractor = new FrontMatterExtractor(input);

where `input` is a string containing:

    ---
    title: something
    date: 2013-10-20
    words:
        - this
        - that
    ---
    blah blah blah

sets `extractor` to the following object:

    {
        frontMatter: {
            title: "something",
            date: Mon Oct 20 2013 00:00:00 GMT+0000 (GMT),
            words: [ 'this', 'that' ]
        },
        remainder: "blah blah blah"
    }
