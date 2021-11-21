$( document ).ready(function(){


//------------------------------------------------
//header script
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(window).scroll(function() {
	var height = $(window).scrollTop();
  if(height > 100) {
		$('header').addClass('sticky');
	} else {
		$('header').removeClass('sticky');
	}
});
const $header = document.querySelectorAll('header')[0];
let lastKnownScrollTop = 0;
let headerTop = 0;
let headerHeight = $header.offsetHeight;

window.addEventListener('scroll', function(event){
  console.log( event.target.scrollingElement.scrollTop )
  console.log(event)
  let scrollTop = event.target.scrollingElement.scrollTop;
  let offset = scrollTop - lastKnownScrollTop;
  headerTop-= offset;
  headerTop = headerTop > 0? 0: headerTop;
  headerTop = headerTop < -1 * headerHeight? -1 * headerHeight: headerTop;
  $header.style.transform = `translateY(${headerTop}px)`;
  lastKnownScrollTop = scrollTop;
})
    //active floating animation   ------------
    AOS.init(); 

    //Number counting acitvation ----------
    $(function(){
      $('.count-num').rCounter({
        duration: 40
      });
    });

    //FAQ section script for faq--------------
    $(function() {
      var Accordion = function(el, multiple) {
          this.el = el || {};
          this.multiple = multiple || false;
  
          var links = this.el.find('.article-title');
          links.on('click', {
              el: this.el,
              multiple: this.multiple
          }, this.dropdown)
      }
  
      Accordion.prototype.dropdown = function(e) {
          var $el = e.data.el;
          $this = $(this),
              $next = $this.next();
  
          $next.slideToggle();
          $this.parent().toggleClass('open');
  
          if (!e.data.multiple) {
              $el.find('.accordion-content').not($next).slideUp().parent().removeClass('open');
          };
      }
      var accordion = new Accordion($('.accordion-container'), false);
  });






    
//------------------------------------------------
    
});
 //Pricing section script------------------
let slider = document.getElementById("slider");
let price = document.getElementById("price");
let pageviews = document.getElementById("pageviews");

let toggle = document.getElementById("toggle");
let text = document.getElementById("period");

const DISCOUNT = 0.25;

var prices = [8, 12, 16, 24, 36];

pageviews.innerHTML = "500";

function discount() {
  text.innerHTML = "";

  if (toggle.checked) {
    text.innerHTML = "year";
    for (let i = 0; i < prices.length; i++) {
      prices[i] = prices[i] - prices[i] * DISCOUNT;
    }
    listener();
  } else {
    text.innerHTML = "month";
    prices = [8, 12, 16, 24, 36];
    listener();
  }
}

var listener = function () {
  window.requestAnimationFrame(function () {
    switch (slider.value) {
      case "1":
        price.innerHTML = Number(prices[0]).toFixed(2);
        pageviews.innerHTML = "100";
        break;
      case "2":
        price.innerHTML = Number(prices[1]).toFixed(2);
        pageviews.innerHTML = "200";
        break;
      case "3":
        price.innerHTML = Number(prices[2]).toFixed(2);
        pageviews.innerHTML = "500";
        break;
      case "4":
        price.innerHTML = Number(prices[3]).toFixed(2);
        pageviews.innerHTML = "1000";
        break;
      case "5":
        price.innerHTML = Number(prices[4]).toFixed(2);
        pageviews.innerHTML = "10,000";
    }
  });
};

slider.addEventListener("mousedown", function () {
  listener();
  slider.addEventListener("mousemove", listener);
});
slider.addEventListener("mouseup", function () {
  slider.removeEventListener("mousemove", listener);
});

slider.addEventListener("keydown", listener);

slider.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #5f2781 0%, #5f2781 " +
    value +
    "%, #b4b4b4 " +
    value +
    "%, #b4b4b4 100%)";
};
