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

  // click smoth
  (function () {
      $.fn.smint = function (options) {

          // 사용자 div에 클래스 추가
          $(this).addClass('smint')

          var settings = $.extend({
              'scrollSpeed ': 100
          }, options);


          return $('.smint a').each(function () {


              if (settings.scrollSpeed) {

                  var scrollSpeed = settings.scrollSpeed

              }
              $(this).on('click', function (e) {


                  // 사용자 div의 높이를 가져옵니다. 이것은 스크롤을 해제하는 데 사용되므로 emenu가 처음 스크롤 한 div의 내용과 겹치지 않습니다.
                  var selectorHeight = $('.smint').height();

                  // 클릭하면 페이지 점프를 만드는 빈 hrefs 중지
                  e.preventDefault();

                  // 방금 클릭 한 버튼의 ID를 가져옵니다.
                  var id = $(this).attr('id');

                  // 버튼 ID에서 탐색 메뉴의 높이를 뺀 것과 일치하는 div 클래스의 상단에서 거리를 가져옵니다. 이것은 탐색이 처음에 내용과 겹치지 않음을 의미합니다.
                  var goTo = $('div.' + id).offset().top - selectorHeight;

                  // 페이지를 원하는 위치로 스크롤하십시오!
                  $("html, body").animate({ scrollTop: goTo }, scrollSpeed);
              });
          });
      }
  })();

  $(document).ready(function () {
      $('.spot').smint({
          'scrollSpeed': 100, //스크롤 속도
      });
  });
  // click smoth

  
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
        $('.search_wrap').show();
    });
    $('.btn').click(function () {
        $('.search_wrap').hide();
    });
    $('.search_wrap a').click(function () {
        $('.search_wrap').hide();
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