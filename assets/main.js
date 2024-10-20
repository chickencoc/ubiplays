let isDone = false;
const txtEl = document.getElementById('ball-txt');

const cubeAnime = anime({
    targets: '#cube',
    autoplay: false,
    rotateX: [-10, -2],
    rotateY: {
        value: [-10, -1800],
        duration: 1000
    },
    easing: 'easeInBack'
});
const ballAnime = anime({
    targets: '#ball',
    autoplay: false,
    rotateX: -2,
    translateY: {
        value: -325,
        duration: 700,
        easing:	'easeOutElastic'
    },
    scale: {
        value: 2.5,
        duration: 550,
        delay: 200,
        easing: 'easeInOutQuart'
    },
    width: {
        value: "125px",
        duration: 500,
        delay: 350,
        easing: 'easeInOutQuart'
    },
    borderRadius: {
        value: '5px',
        duration: 700,
        delay: 400,
        easing: 'easeOutQuart'
    }
});

function returnGuest() {
    // choose type
    let list = [];
    let rn = getRandomInt(0, 1000);
    const ratio = getItem(guestChance);
    console.log(rn)

    if(ratio[0] >= rn) {
        list = getGuestList('내부');
    } else {
        list = getGuestList('외부');
    }

    rn = getRandomInt(0, list.length - 1)

    return list[rn];
}

function getResult() {
    try {
        if(isDone) return;
        else isDone = true;

        const gusetObj = returnGuest();
        txtEl.innerText = gusetObj.name;
        console.log(gusetObj)

        cubeAnime.play();
        cubeAnime.complete = () => ballAnime.play();
        setTimeout(() => {
            txtEl.style.display = 'inherit';
        }, 1875);
    }
    catch (e) {
        alert('사람 목록 없음')
    }
}

function resetGame() {
    isDone = false;
    ballAnime.reset();
    cubeAnime.reset();
    txtEl.style.display = 'none';
}