/**
 * Function makes an image breath with body scroll
 * @author Stu Mason <stu@stuartmason.co.uk>
 * @link www.wearedarkblue.com
 * @param {string} me ID of the image you would like to break
 * HTML of img required the following data attributes:
 * data-breathStart="" - The size of the image on page load (largest size)
 * data-breathEnd="" - The size of the image at the end of scroll action (smallest size)
 * data-exhale="" - When the image should start exhaling / stop inhaling (gets smaller)
 * data-inhale="" - When the image should start inhaling / stop exheling (gets bigger)
 * Example: <img id="logo" src="logo.jpg" data-breathStart="300" data-breathEnd="100" data-exhale="30" data-inhale="300"  />
 */
 function breath(me) {
  if(!document.getElementById(me)) console.log('element with ID '+me+' cannot be found :(')
  else {
    var logo = document.getElementById(me)
   logo.style.height = logo.getAttribute('data-breathStart') + 'px';
    document.addEventListener('scroll', function (event) {
      if(document.body.scrollTop >= logo.getAttribute('data-exhale') && document.body.scrollTop <= logo.getAttribute('data-inhale')) {
        logo.style.height = logo.getAttribute('data-breathStart') - 
        (document.body.scrollTop - logo.getAttribute('data-exhale')) * 
        ((logo.getAttribute('data-breathStart') - logo.getAttribute('data-breathEnd')) /
        ((logo.getAttribute('data-inhale') - logo.getAttribute('data-exhale')))) + 
        'px';
      }
    });    
  }
}