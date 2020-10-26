document.body.onload = function () {
    setTimeout(function () {
        let preloader = document.querySelector('#page-preloader');
        if ( !preloader.classList.contains('done')) {
            preloader.classList.add('preloader__done');
        }
    }, 1000)
}