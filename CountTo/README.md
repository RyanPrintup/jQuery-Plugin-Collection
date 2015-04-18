Count To
-------
<br/>

Count To will smoothly count from your starting number to your ending number. This is a great plugin for onLoad animations.

### How To Use
<br/>
Call the <code>.countTo();</code> method on any tag.

    $('.statistics').countTo();

### Optional parameters:
 - start - Starting number. Default: 0
 - end - Ending number. Default 100
 - duration - How long the animation takes in ms. Default 1000
 - easing - The easing equation to use. Default: swing
 - complete - Callback function. Default: None

Example of passing in parameters.

    $('.statistics').countTo({
    	end: 1986,
    	duration: 1500,
    	complete: function()
    	{
    		alert('Done');
    	}
    });

<br/>
<br/>