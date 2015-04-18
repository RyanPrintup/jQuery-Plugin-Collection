Ajaxify
-------
<br/>

With ajaxify you can submit any form with ajax when javascript is supported. When javascript is not supported the default form action and method will be used.

### How To Use
<br/>
Call the <code>.ajaxify()</code> method on any form

    $('form').ajaxify();

Optional callback parameter when the form is done. Returns "data" parameter containg the response.
    
    $('form').ajaxify(function(data) {
       // Process data here
    });