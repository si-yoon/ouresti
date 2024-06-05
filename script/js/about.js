//마우스
const cursor = document.querySelector('#cursor');
const cursorCircle = cursor.querySelector('.cursor__circle');

const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
const pos = { x: 0, y: 0 }; // cursor's coordinates
const speed = 0.1; // between 0 and 1

const updateCoordinates = e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener('mousemove', updateCoordinates);

function getAngle(diffX, diffY) {
    return Math.atan2(diffY, diffX) * 180 / Math.PI;
}

function getSqueeze(diffX, diffY) {
    const distance = Math.sqrt(
        Math.pow(diffX, 2) + Math.pow(diffY, 2)
    );
    const maxSqueeze = 0.15;
    const accelerator = 1500;
    return Math.min(distance / accelerator, maxSqueeze);
}

const updateCursor = () => {
    const translate = 'translate3d(' + mouse.x + 'px ,' + mouse.y + 'px, 0)';

    cursor.style.transform = translate;
};

function loop() {
    updateCursor();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll('[cursor-class]');

cursorModifiers.forEach(curosrModifier => {
    curosrModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
    });

    curosrModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
    });
});
// 마우스

// aos
AOS.init({
    duration: 2000 //aos 나타나는 속도
});
// aos

// scroll_css
document.addEventListener('DOMContentLoaded', () => {
    const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('on');
            } else {
                entry.target.classList.remove('on');
            }
        });
    }, {
        threshold: 0.1
    });

    const boxElList = document.querySelectorAll('.con5_left');
    boxElList.forEach((el) => {
        io.observe(el);
    });
});
// scroll_css


// 큐브
document.addEventListener('DOMContentLoaded', function () {
    new Swiper('.myswiper', {
        direction: 'horizontal', // 수평 방향으로 슬라이드
        effect: 'cube', // 큐브 효과 사용
        loop: true,
        mousewheel: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
// 큐브

// 메뉴창
console.clear();

const { gsap } = window;

const btn = document.querySelector(".menu-btn");

btn.addEventListener("click", () => {
    if (btn.classList.contains("active")) {
        btn.classList.remove("active");
        hide();


    } else {
        btn.classList.add("active");
        show();
    }
});
function show() {
    let tl = gsap.timeline();

    gsap.set(".nav__inner, .menu-btn", {
        pointerEvents: "none",
    });

    tl.fromTo(
        ".nav--transition-slide",
        {
            scaleX: 0,
            transformOrigin: "left center",
        },
        {
            duration: 0.5,
            scaleX: 1,
            ease: "Expo.inOut",
        }
    )
        .set(".nav__inner, .menu-btn", {
            pointerEvents: "all",
        })
        .fromTo(
            ".nav--item-line",
            {
                scaleX: 0,
                transformOrigin: "left center",
            },
            {
                duration: 0.65,
                scaleX: 1,
                ease: "Expo.inOut",
                stagger: 0.15,
            }
        )
        .fromTo(
            ".nav--link",
            {
                translateY: "100%",
            },
            {
                duration: 2.25,
                translateY: 0,
                ease: "elastic.inOut",
                stagger: 0.15,
            },
            "-=1.65"
        );
}

function hide() {
    let tl = gsap.timeline();

    gsap.set(".nav__inner, .menu-btn", {
        pointerEvents: "none",
    });

    tl.to(".nav--item-line", {
        duration: 0.6,
        scaleX: 0,
        transformOrigin: "right center",
        ease: "Expo.inOut",
        stagger: -0.15,
    })
        .to(
            ".nav--link",
            {
                duration: 0.35,
                translateY: "100%",
                ease: "Expo.inOut",
                stagger: -0.15,
            },
            0
        )
        .to(".nav--transition-slide", {
            duration: 0.5,
            transformOrigin: "right center",
            scaleX: 0,
            ease: "Expo.inOut",
        })
        .set(" .menu-btn", {
            pointerEvents: "all",
        });
}

$(function () {
    $('.text').click(function () {
        $('.nav').toggle();
    });
});
// 메뉴창

// 검색창
$(function () {
    $('.nav1 .no_hover').click(function () {
        $('.search_wrap').fadeIn();
    });
    $('.btn').click(function () {
        $('.search_wrap').fadeOut();
    });
    $('.search_wrap a').click(function () {
        $('.search_wrap').fadeOut();
    });
});
// 검색창

// 팝업 문의
$(function () {
    $('.popup_box a').click(function () {
        $('.popup').fadeIn(); // .show(); 도 가능
        $('.popup_box a').fadeOut();
    });

    $('.pop_btn').click(function () {
        $('.popup').fadeOut(); //  .hide(); 도 가능
        $('.popup_box a').fadeIn();
    });
});
// 팝업 문의