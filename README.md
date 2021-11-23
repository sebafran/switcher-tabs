# switcher-tabs
simple switcher tabs in js

**Note**: I made this switcher just for fun, and to learn how do it. So, maybe it's not perfect and my english either.

## Description

You can have unlimited number of switches on your website

Just add the class `.switcher` to each container containing buttons and items marked with class `.sw-item`

You can also add the `data-start` attribute to the `.switcher` container 
and indicate which item should be active by default as a value.

Choose integral between 2 and number of items.

**Note** Setting it to 1 will make the first item active 
and is tantamount to not including the attribute.

### example
make the second item active by default
```html
<div class="switcher" data-start="2">
```

Have fun!
