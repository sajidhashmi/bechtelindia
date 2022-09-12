function openTab(evt, tabName, heading) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    if (tabName == 'vision') {
        document.getElementById('top-main-image').src = "./content/images/vision.jpg";
    } else if (tabName == 'resource') {
        document.getElementById('top-main-image').src = "./content/images/resource.jpg";
    } else if (tabName == 'partners') {
        document.getElementById('top-main-image').src = "./content/images/partners.png";
    } if (tabName == 'diverse-colleagues') {
        document.getElementById('top-main-image').src = "./content/images/diverse.png";
    }

    if (tabName == 'diverse-colleagues') {

        document.getElementById('contactus').style.display = "none";

    } else {
        document.getElementById('contactus').style.display = "block";
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById('tab-heading').textContent = heading;
    evt.currentTarget.className += " active";
}

$(document).ready(function () {

    $('#carouselExample').carousel({
        interval: 20000000,
        pause: 'hover'
    })
    $('#carouselExample').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('#carouselExample .carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
                }
                else {
                    $('#carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
                }
            }
        }
    });
    $('#carouselExample').carousel({
        interval: 20000,
        pause: 'hover'
    });
    $('#carouselExample').on('slide.bs.carousel', function (e) {

        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('#carouselExample .carousel-item').length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
                }
                else {
                    $('#carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
                }
            }
        }
    });



});
$('#goToPrevSlide').click(function () {
    if ($('#carouselExample').is(':visible')) {
        $('#carouselExample').carousel('prev');
    }
    else {
        $('#carouselExample').carousel('prev')
    }
});
$('#goToNextSlide').click(function () {
    if ($('#carouselExample').is(':visible')) {
        $('#carouselExample').carousel('next');
    }
    else {
        $('#carouselExample').carousel('next');
    }
});
