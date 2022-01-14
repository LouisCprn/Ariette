function navSlide() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLink = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', function () {
        burger.classList.toggle('show-x');
        nav.classList.toggle('show');
    })

    navLink.forEach((link, index) =>  {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        console.log(index)
    })

}

navSlide()
