




var btn = document.getElementById('btnone');

btn.onclick = function () {
    // alert('ghbdtnssdfsd');
    //document.querySelector("#btnone").classList.add("animate__animated", "animate__bounce");
    document.querySelector(".cta__title").classList.remove("animate__zoomInDown");
    document.querySelector(".cta__title").classList.add("animate__bounce");
    document.querySelector(".ctapic").classList.remove("animate__fadeInRightBig");
    document.querySelector(".ctapic").classList.add("animate__flip");
    document.querySelector(".cta__text").classList.remove("animate__lightSpeedInLeft animate__slow animate__delay-1s");
    document.querySelector(".cta__text").classList.add("animate__pulse animate__delay-3s");





}


