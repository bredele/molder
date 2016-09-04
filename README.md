# molder

Subsitute elements with a custom element syntax.

## Usage

[Custom elements](http://webcomponents.org/articles/introduction-to-custom-elements/) are probably the next big thing in HTML. 

```html
<my-carousel>
  <div>slide 1</div>
  <div>slide 2</div>
</my-carousel>
```

It is unfortunately not available in all browsers currently but you can start using the syntax (content, select, etc) today using `molder`. 


```js
var molder = require('molder')
molder(document.querySelector('my-carousel', component))
```

