window.onload = function () {
    document.body.classList.add('preloader');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('preloader');
    }, 2650);
}

let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

function smoothScroll(event) {
    if (event.target.hash !== '') { //Check if tag is an anchor
        event.preventDefault()
        const hash = event.target.hash.replace("#", "")
        const link = document.getElementsByName(hash)
        //Find the where you want to scroll
        const position = link[0].getBoundingClientRect().y
        let top = 0

        let smooth = setInterval(() => {
            let leftover = position - top
            if (top === position) {
                clearInterval(smooth)
            } else if (position > top && leftover < 10) {
                top += leftover
                window.scrollTo(0, top)
            } else if (position > (top - 10)) {
                top += 10
                window.scrollTo(0, top)
            }

        }, 6) //6 milliseconds is the faster chrome runs setInterval
    }
}

AOS.init();

var button = document.querySelector('#stop');
var shouldKeepAnimating = true;
var addClassTimeouts = [];
var containers = document.querySelectorAll('.container-social');
containers = Array.prototype.slice.call(containers, 0);

setTimeout(setActiveClasses, 500)

function setActiveClasses() {
    var time = 0;

    if (!shouldKeepAnimating) {
        return;
    }

    addClassTimeouts = [];

    containers
        .forEach(function (container) {

            time += 500;
            var timeoutId = setTimeout(function () {

                container.classList.add('active')
            }, time);
            addClassTimeouts.push(timeoutId)
        });

    setTimeout(function () {
        clearActiveClasses();
        setTimeout(setActiveClasses, 1000);
    }, time + 1500)
}

function clearActiveClasses() {
    containers.forEach(function (container) {
        container.classList.remove('active');
    });
}