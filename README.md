front-matter-extractor
======================
this code:

```js
var FrontMatterExtractor = require("front-matter-extractor");
var extracted = new FrontMatterExtractor(input);
```
where `input` is a string containing:

    ---
    title: something
    date: 2013-10-20
    words:
        - this
        - that
    ---
    blah blah blah

sets `extracted` to the following object:

```js
{
    frontMatter: {
        title: "something",
        date: Mon Oct 20 2013 00:00:00 GMT+0000 (GMT),
        words: [ 'this', 'that' ]
    },
    content: "blah blah blah"
}
```
