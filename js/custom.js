function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();
$(window).on('load', function () {
    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })
});

$(document).ready(function() {
    $('select').niceSelect();
  });


$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


function allowDrop(event) {
    event.preventDefault();
  }
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }



  
  var pizzaImages = document.querySelectorAll('.rotatingPizza');
  var rotationAngle = 0;
  function rotatePizzas() {

    rotationAngle += 1;

    pizzaImages.forEach(function (pizzaImage) {
      pizzaImage.style.transform = 'rotate(' + rotationAngle + 'deg)';
    });


    requestAnimationFrame(rotatePizzas);
  }

  rotatePizzas();