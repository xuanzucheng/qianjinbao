document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       Highlight current navigation page
       ========================================= */

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-inner a");

    navLinks.forEach(function (link) {

        const linkPath = new URL(
            link.href,
            window.location.origin
        ).pathname;

        if (currentPath === linkPath) {
            link.classList.add("active");
        }

    });


    /* =========================================
       Simple scroll effect
       ========================================= */

    const header = document.querySelector(".site-header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    });

});
