// 로딩페이지
$(function () {
    const loader = document.querySelector('.spinner');
    const html = document.querySelector('html');
    html.style.overflow = 'hidden'; //로딩 중 스크롤 방지

    window.addEventListener('load', () => {

        setTimeout(() => { //로딩속도 구현

            loader.style.opacity = '0';
            html.style.overflow = 'auto'; //스크롤 방지 해제

            setTimeout(() => {
                loader.style.display = 'none';
            }, 400);

        }, 3800);

    });
});
// 로딩페이지

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


// 비디오
// 랜덤한 비디오를 선택하고 배경으로 설정하는 함수입니다.
var videoSources = {
    "Our": ["./videos/v1.mp4", "./videos/v2.mp4", "./videos/v3.mp4"],
    "Rest": ["./videos/v4.mp4", "./videos/v5.mp4", "./videos/v6.mp4"],
    "Tea": ["./videos/v7.mp4", "./videos/v8.mp4", "./videos/v9.mp4"]
};

var currentVideoIndex = 0;

function playRandomVideo(category) {
    var videoList = videoSources[category];
    currentVideoIndex = Math.floor(Math.random() * videoList.length);
    var randomVideoSource = videoList[currentVideoIndex];

    var videoElement = document.getElementById('randomVideo');
    var sourceElement = document.getElementById('videoSource');

    sourceElement.src = randomVideoSource;
    videoElement.load();
    videoElement.style.display = 'block';

    // 비디오가 종료되었을 때 다음 비디오를 자동으로 재생
    // videoElement.addEventListener('timeupdate', function () {
    //     if (videoElement.currentTime >= videoElement.duration - 1) { 
    //         // 비디오의 재생 시간이 끝에 다다를 때
    //         currentVideoIndex = (currentVideoIndex + 1) % videoList.length;
    //         var nextVideoSource = videoList[currentVideoIndex];
    //         sourceElement.src = nextVideoSource;
    //         videoElement.load();
    //         videoElement.play();
    //     }
    // });
}

function hideVideo() {
    var videoElement = document.getElementById('randomVideo');
    if (videoElement) {
        videoElement.style.display = 'none';
    }
}
// 비디오


// 검색창
$(function () {
    $('.side_menu .no_hover').click(function () {
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