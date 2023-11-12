const preloader = document.getElementById("myPreloader");

setTimeout(function () {
    preloader.classList.add("preloader_disable");
    document.body.style.overflow = 'auto';
}, 2000);

