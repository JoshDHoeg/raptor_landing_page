function hello(){
  console.log("bfo");
  $('#hello').toggleClass('fadeOut');
  $('body').toggleClass('nav-no-scroll');
};

setTimeout(hello, 4000);
