// adding a popup window that can close when clicked in
var popupClose = document.getElementById('popupClose');
var popup = document.getElementById('popup');
popupClose.addEventListener('click', function(e){
	popup.style.display = 'none';
});


// adding color change when scrolling
function getScrollPercent()
{
  let scrollRange = document.body.offsetHeight - window.innerHeight;
  return window.scrollY / scrollRange;
}

window.addEventListener('scroll', function(e){
  //console.log(window.scrollY, getScrollPercent());
  let percent = getScrollPercent();
  document.body.style.backgroundColor = 'rgb('+ 255 * percent +', '+ 255 * (1.0 - percent) +', 150)';
});

// cursor
var cursor = document.getElementById('cursor');

document.addEventListener('mousemove', function (e) {
	var x = e.clientX;
	var y = e.clientY;
	cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
});
