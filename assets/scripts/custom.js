function hello(){
  $('#hello, #welcome').toggleClass('fadeOut fadeIn');
  // $('body').toggleClass('nav-no-scroll');
};

function stats(){
  $('#welcome').toggleClass('fadeOut fadeIn');
  // $('body').toggleClass('nav-no-scroll');
};

function intro(){
  $('#intro').toggleClass('drop');
}

setTimeout(hello, 400);
setTimeout(stats, 800);
setTimeout(intro, 850);

// setTimeout(hello, 4000);
// setTimeout(stats, 10000);


function menu(){
  $('#nav, #shade').toggleClass('show');
  $('#menu-btn').toggleClass('drop');
  $('body').toggleClass('nav-no-scroll');
};



window.onload = function () {

var parallaxBox = document.getElementById ( 'intro' );
var c4left = document.getElementById ( 'layer' ).offsetLeft,
c4top = document.getElementById ( 'layer' ).offsetTop;

parallaxBox.onmousemove = function ( event ) {
  event = event || window.event;
  var x = event.clientX - parallaxBox.offsetLeft,
  y = event.clientY - parallaxBox.offsetTop;

  mouseParallax ( 'layer', c4left, c4top, x, y, 65 );
}

}

function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
var obj = document.getElementById ( id );
var parentObj = obj.parentNode,
containerWidth = parseInt( parentObj.offsetWidth ),
containerHeight = parseInt( parentObj.offsetHeight );
obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
}
