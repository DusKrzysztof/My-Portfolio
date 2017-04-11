/* jshint browser: true */

/*funkction menu-target*/
document.addEventListener('click', function (event) {
    var all = document.querySelectorAll('.small')
    var collaps = document.getElementById('bs-example-navbar-collapse-1')
    for (var i = 0; i < all.length; i++) {
        all[i].classList.remove('active')
        if (event.target === all[i]) {
            collaps.classList.remove('in')
            collaps.style.height = "1px";

        }
    }
    event.target.classList.add('active')
})


/*funkcion load */


function scrollIt(destination, duration = 200, easing = 'linear', callback) {
    const easings = {
        linear(t) {
            return t;
        },
        easeInQuad(t) {
            return t * t;
        },
        easeOutQuad(t) {
            return t * (2 - t);
        },
        easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
            return t * t * t;
        },
        easeOutCubic(t) {
            return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
            return t * t * t * t;
        },
        easeOutQuart(t) {
            return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
            return t * t * t * t * t;
        },
        easeOutQuint(t) {
            return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);



    if ('requestAnimationFrame' in window === false) {
        window.scroll(0, destinationOffsetToScroll);
        if (callback) {
            callback();
        }
        return;
    }

    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / duration));
        const timeFunction = easings[easing](time);
        window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));


        if (window.pageYOffset === destinationOffsetToScroll) {
            if (callback) {
                callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

    scroll();
}


document.querySelector('.about').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#about'),
        300,
        'easeOutQuad'
    );
});

document.querySelector('.skills').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#skills'),
        300,
         'easeOutQuad'
    );
});

document.querySelector('.projects').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#projects'),
        300,
        'easeOutQuad'
    );
});

document.querySelector('.home').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#home'),
        300,
        'easeOutQuad'
    );
});


document.querySelector('.experience').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#time'),
        300,
        'easeOutQuad'
    );
});

document.querySelector('.contact').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#footer'),
        300,
        'easeOutQuad'
    );
});
document.querySelector('.click-arrow').addEventListener('click', () => {
    scrollIt(
        document.querySelector('#about'),
        300,
        'easeOutQuad'
    );
});
