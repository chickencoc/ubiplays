document.getElementById("ball").addEventListener("click", () => {
    anime({
        targets: '#ball',
        translateY: -250,
        duration: 700,
        easing: 'easeInOutQuad'
    });
})