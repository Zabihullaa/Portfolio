const navBurger = document.querySelector('.nav__burger'),
    navList = document.querySelector('.nav__list'),
    navItem = document.querySelectorAll('.nav__link'),
    navClose = document.querySelector('.nav__close'),
    item = document.querySelectorAll('.skills__item'),
    itemNum = document.querySelectorAll('.skills__item-num'),
    skillsItemLength = document.querySelectorAll('.skills__item-length'),
    skills = document.querySelector('.nav__close');

navBurger.addEventListener('click', () => {
    navList.classList.add('active');
})
navClose.addEventListener('click', () => {
    navList.classList.remove('active');
})
navItem.forEach(el => {
    el.addEventListener('click', () => {
        navList.classList.remove('active');
    })
});

function skill() {
    itemNum.forEach((el, i) => {
        let itemAttr = el.getAttribute('data-num')
        function scrollCount(k = 0) {
            el.innerHTML = k
            k++
            if (k <= itemAttr) {
                setTimeout(() => {
                    scrollCount(k)
                }, 30);
            }
            
            skillsItemLength.forEach(element => {
                element .classList.add('active');
            });
        }
        scrollCount()
    });
}
window.addEventListener('scroll', function onScroll(e) {
    if ((window.scrollY + window.innerHeight) > skills.offsetTop) {

        skill()
        window.removeEventListener('scroll', onScroll)
    }
})