/*
    Student United Coordinating Conference
    The Forward
*/


/* Pause the slogan when the mouse is over it */

const marquee =
    document.querySelector(".marquee");


if (marquee) {

    marquee.addEventListener(
        "mouseenter",
        () => {

            marquee.style.animationPlayState =
                "paused";

        }
    );


    marquee.addEventListener(
        "mouseleave",
        () => {

            marquee.style.animationPlayState =
                "running";

        }
    );

}


/*
    Current year in footer
*/

const year =
    document.querySelector(".current-year");


if (year) {

    year.textContent =
        new Date().getFullYear();

}
