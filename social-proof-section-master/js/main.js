document.body.addEventListener('mousemove', () => {
    console.log(window.innerWidth)
    const topLeftPattern = document.querySelector('.top-left-bg-pattern')
    const bottomRightPattern = document.querySelector('.bottom-right-bg-pattern')
    if (window.innerWidth >= 1050) {
        topLeftPattern.setAttribute('src', 'images/bg-pattern-top-desktop.svg')
        bottomRightPattern.setAttribute('src', 'images/bg-pattern-bottom-desktop.svg')
    } else {
        topLeftPattern.setAttribute('src', 'images/bg-pattern-top-mobile.svg')
        bottomRightPattern.setAttribute('src', 'images/bg-pattern-bottom-mobile.svg')
    }
})