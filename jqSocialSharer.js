;(function($){
  $.fn.jqSocialSharer = function(options){
    
    //settings
    var settings = $.extend({
      "popUpWidth" : 550,               /*Width of the Pop-Up Window*/
      "popUpHeight": 450,               /*Height of the Pop-Up Window*/
      "popUpTop"   : 100,               /*Top value for Pop-Up Window*/
      "useCurrentLocation" : false      /*Whether or not use current location for sharing*/
    }, options);
    
    /*Attach this plugin to each element in the DOM selected by jQuery Selector and retain statement chaining*/
    return this.each(function(index, value){
      
      /*Respond to click event*/
      $(this).bind("click", function(evt){
        
        evt.preventDefault();
        
        /*Define*/
        var social = $(this).data('social'),
            width=settings.popUpWidth,
            height=settings.popUpHeight,
            sHeight=screen.height, 
            sWidth=screen.width, 
            left=Math.round((sWidth/2)-(width/2)), 
            top=settings.popUpTop, 
            url,
            useCurrentLoc = settings.useCurrentLocation,
            socialURL = (useCurrentLoc) ? window.location : encodeURIComponent(social.url),
            socialText = social.text;
        
        switch(social.type){
            case 'facebook':
                url = 'http://www.facebook.com/sharer.php?u='+ socialURL + '&t=' + socialText;
                break;
            case 'twitter':
                url = 'http://twitter.com/share?url='+ socialURL + '&text=' + socialText;
                break;
            case 'plusone':
                url = 'https://plusone.google.com/_/+1/confirm?hl=en&url=' + socialURL;
                break;
        }
   
        /*Finally fire the Pop-up*/    
        window.open(url, '', 'left='+left+' , top='+top+', width='+width+', height='+height+', personalbar=0, toolbar=0, scrollbars=1, resizable=1');         
      });
    });
  };
}(jQuery));
