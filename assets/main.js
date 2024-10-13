let isDone = false;
const txtEl = document.getElementById('ball-txt');

const ballAnime = anime({
    targets: '#ball',
    autoplay: false,
    rotateX: -10,
    rotateY: 10,
    translateY: {
        value: -325,
        duration: 700,
        easing:	'easeInOutBack'
    },
    scale: {
        value: 2.5,
        duration: 550,
        delay: 300,
        easing: 'easeInOutQuart'
    },
    width: {
        value: "125px",
        duration: 500,
        delay: 500,
        easing: 'easeInOutQuart'
    },
    borderRadius: {
        value: '5px',
        duration: 700,
        delay: 300,
        easing: 'easeInOutQuart'
    }
});
const cubeAnime = anime({
    targets: '#cube',
    autoplay: false,
    rotateX: [-10, -10],
    rotateY: {
        value: [-10, -1810],
        duration: 1000
    },
    easing: 'easeOutQuart'
})

console.log(cubeAnime)

function getResult() {
    if(isDone) return;
    else isDone = true;

    cubeAnime.play();
    cubeAnime.complete = () => ballAnime.play();
    ballAnime.complete = () => {
        txtEl.style.display = 'inherit';
    }
}

function resetGame() {
    isDone = false;
    ballAnime.reset();
    txtEl.style.display = 'none';
}