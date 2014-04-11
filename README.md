jQuery Plugin Collection
========================
<br/>

jQuery Plugin Collection is a collection of jQuery plugins that I have written throughout the course of many websites.

### Current Plugin List:

  - [Ajaxify](#ajaxify) - Submit any form with ajax
  - [Smooth Scroll](#smooth-scroll) - Smoothly scroll to a section of the current page

<br/>
<br/>

Ajaxify
-------
<br/>

With ajaxify you can submit any form with ajax when javascript is supported. When javascript is not supported the default form action and method will be used.

### How To Use
<br/>
Call the <code>.ajaxify()</code> method on any form

    $('form').ajaxify();
Optional callback parameter when the form is done. Returns "data" parameter.
    
    $('form'),ajaxify(function(data) {
       // Process data here
    });

<br/>
<br/>

Smooth Scroll
-------
<br/>

Smooth Scroll allows you to smoothly scroll to a section of the current page. This plugin is ideally for FAQs so that instead of jumping straight to the question/answer your user will slowly scroll there and keep their sense of location on the page.

### How To Use
<br/>
Call the <code>.smoothScroll();</code> method on any anchor tag that links to an id. (Ex: <code>#header</code>);

    $('#back-to-top').smoothScroll();
Optional transition speed parameter (in ms). Default is 500ms
    
    $('#back-to-top').smoothScroll(1000);

Target every anchor tag that links to an id.

    $('a[href^=#]').smoothScroll();
<br/>
<br/>

Author
------
<br/>

#### Ryan Printup
  * [Github](https://github.com/ryanprintup)

<br/>
<br/>

Copyright and License
---------------------
<br/>

Code &copy; 2014 Ryan Printup.

Code released under the [MIT License](https://github.com/RyanPrintup/jQuery-Plugin-Collection/blob/master/LICENSE.md).