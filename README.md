## <template>: The Content Template element

### The <template> HTML element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.

### Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the <template> element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

#### Clone the new row and insert it into the table
#### const card = userCardTemplate.content.cloneNode(true);

#### Getting the templete's content and cloning it with cloneNode(true)
#### This is returning a "document fragment". To use the content inside of this document fragment we get the very first child with const card = userCardTemplate.content.cloneNode(true).children[0];

##### Avoiding DocumentFragment pitfall
##### A DocumentFragment is not a valid target for various events, as such it is often preferable to clone or refer to the elements within it.

##### The template tag is an HTML tag that allows you to create a group of HTML elements that are not rendered to the page. You can think of it kind of like a div with display none that has HTML inside of it, but the template tag has a few handy features that make it easier to work with than a div with display none.

##### First of all, using a template tag makes it very clear that the HTML inside of it is used in JavaScript in order to render dynamic content. Secondly, the template tag has very handy methods for copying the content inside of it so it can be added to the DOM repeatedly.