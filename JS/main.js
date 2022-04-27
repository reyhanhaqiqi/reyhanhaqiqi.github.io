/* Preloader Start */
function preloader() {
    $(() => {

        setInterval(() => {

            let p = $('.preloader');
            p.css('opacity', 0);

            setInterval(
                () => p.remove(),
                parseInt(p.css('--duration')) * 1000
            );

        }, 1000)

    });
}
setInterval(() => preloader(), 800);
/* PreLoader End */


/* Typed-Text Start*/
(function ($) {
    "use strict"

    /* Typed Initiate */
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
})(jQuery);
/* Typed-Text End */


/* AOS Start */
AOS.init({
    once: true,
});
/* AOS End */


/* Toast Trigger Start */
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}
/* Toast Trigger End */