const author = document.querySelector('.author')
const share = document.querySelector('.share')
author.addEventListener('click', e => {
    console.log(e.target)

    if (e.target.className == 'share-btn') {
        share.classList.toggle('animate');
    }
})







document.body.addEventListener('mousemove', (event) => {

    console.log(window.innerWidth)
})