<<<<<<< HEAD
let toggleButton = document.getElementById('toggleButton');
let navbarLinks = document.getElementById('navBarLinks');

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// }); 
function  muFunc(x){
  if(navbarLinks.style.display === "block"){
    navbarLinks.style.display = "none";
  }
  else{
    navbarLinks.style.display = "block";
  } 
  x.classList.toggle('change') 
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// sclick car slider 
$('.slide-show').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide-show',
  dots: true,
  centerMode: true,
  focusOnSelect: true
  });    
  
  // 360 degree car img
  setInterval(work,100);
function work(){
    var range = document.getElementById("range").value;
    var maini = document.getElementById("main");
    maini.innerHTML='<img src="360degree/'+range+'.png">';
}
// counting number
let valueDisplays = document.querySelectorAll(".num");
let interval = 40;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
 startValue += 1;
 valueDisplay.textContent = startValue;
 if (startValue == endValue) {
   clearInterval(counter);
 }
}, duration);
});
// grid car filter **********************************************************************
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
 // owl carusel in menu list*****************************************
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
loop:true,
margin:10,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:false
    }
}
})
 });
  AOS.init();
 //*/***************************runong car */
 		var $ = jQuery.noConflict();

		//Car Appear In View
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top + 180;
			var elemBottom = elemTop + $(elem).height() - 500;

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}

		$(window).scroll(function () {
		   $('.running-car').each(function () {
				if (isScrolledIntoView(this) === true) {
					$(this).addClass('in-view');
				} else {
					$(this).removeClass('in-view');
				}
			});
		});

 
=======
let toggleButton = document.getElementById('toggleButton');
let navbarLinks = document.getElementById('navBarLinks');

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// }); 
function  muFunc(x){
  if(navbarLinks.style.display === "block"){
    navbarLinks.style.display = "none";
  }
  else{
    navbarLinks.style.display = "block";
  } 
  x.classList.toggle('change') 
}

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

// sclick car slider 
$('.slide-show').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slide-show',
  dots: true,
  centerMode: true,
  focusOnSelect: true
  });    
  
  // 360 degree car img
  setInterval(work,100);
function work(){
    var range = document.getElementById("range").value;
    var maini = document.getElementById("main");
    maini.innerHTML='<img src="360degree/'+range+'.png">';
}
// counting number
let valueDisplays = document.querySelectorAll(".num");
let interval = 40;

valueDisplays.forEach((valueDisplay) => {
let startValue = 0;
let endValue = parseInt(valueDisplay.getAttribute("data-val"));
let duration = Math.floor(interval / endValue);
let counter = setInterval(function () {
 startValue += 1;
 valueDisplay.textContent = startValue;
 if (startValue == endValue) {
   clearInterval(counter);
 }
}, duration);
});
// grid car filter **********************************************************************
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
 // owl carusel in menu list*****************************************
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
loop:true,
margin:10,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:true
    },
    600:{
        items:3,
        nav:false
    },
    1000:{
        items:5,
        nav:true,
        loop:false
    }
}
})
 });
  AOS.init();
 //*/***************************runong car */
 		var $ = jQuery.noConflict();

		//Car Appear In View
		function isScrolledIntoView(elem) {
			var docViewTop = $(window).scrollTop();
			var docViewBottom = docViewTop + $(window).height();

			var elemTop = $(elem).offset().top + 180;
			var elemBottom = elemTop + $(elem).height() - 500;

			return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}

		$(window).scroll(function () {
		   $('.running-car').each(function () {
				if (isScrolledIntoView(this) === true) {
					$(this).addClass('in-view');
				} else {
					$(this).removeClass('in-view');
				}
			});
		});

 
>>>>>>> 378a4a82d46ccf60852790a579dd0beb96d0f991
 