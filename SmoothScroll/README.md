Smooth Scroll
-------
<br/>

Smooth Scroll allows you to smoothly scroll to a section of the current page. This plugin is ideal for FAQs where instead of jumping straight to the question/answer your user will slowly scroll there and keep their sense of location on the page.

### How To Use
<br/>
Call the <code>.smoothScroll();</code> method on any anchor tag that links to an id. (Ex: <code>#header</code>);

    $('#back-to-top').smoothScroll();
    
Optional transition speed parameter (in ms). Default is 500ms
    
    $('#back-to-top').smoothScroll(1000);

Target every anchor tag that links to an id.

    $('a[href^=#]').smoothScroll();