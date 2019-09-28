// Find all info button containers
var locationInfo = document.querySelectorAll('.location--info');
// Loop through 'em all!
locationInfo.forEach(info => {
  // There is only one button in each container so there's no need for a new loop, let's capture click events!
  info.querySelector('.btn').onclick = function(e) {
    // Oh whoops, no functionality found
    alert('Error 404 - There\'s simply no content here.\nSure would\'ve been cool if I had made my own dialog, huh? Next time!');
  }
});