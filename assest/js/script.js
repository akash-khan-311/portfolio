/* =================Typing Animation============ */

var typed = new Typed('.typing', {
    strings: ['', 'Web Designer', 'Web Developer', 'Facebook Marketer', 'React Js Developer', 'Redux Developer'],
    typeSpeed: 100,
    backSpeed: 50,
    startDelay: 1000,
    backDelay: 1500,
    loop: true,
})

/* =================Aside Animation============ */

const nav = document.querySelector('.nav');
const navList = nav.querySelectorAll('li');
const totalNavList = navList.length;
const allSection = document.querySelectorAll('.section');
const totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector('a');
    a.addEventListener('click', () => {
        removeBackSection();

        for (let j = 0; j < totalNavList; j++) {

            if (navList[j].querySelector('a').classList.contains('active')) {
                addBackSection(j);

            } else {

                allSection[i].classList.remove('back-section')

            }
            navList[j].querySelector('a').classList.remove('active');
        }

        a.classList.add('active');
        showSection(a);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn()
        }

    })
}
function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('back-section')
    }
}
function addBackSection(num) {
    allSection[num].classList.add('back-section')
}
function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove('active')
    }
    const target = element.getAttribute('href').split('#')[1];

    document.querySelector('#' + target).classList.add('active');



}
function updateNav(element) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector('a').classList.remove('active')
        const target = element.getAttribute('href').split('#')[1];
        if (target === navList[i].querySelector('a').getAttribute('href').split('#')[1]) {
            navList[i].querySelector('a').classList.add('active')
        }
    }
}
document.querySelector('.hire-me').addEventListener('click', function () {
    const sectionIndex = this.getAttribute('data-section-index')
    console.log(sectionIndex)
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex)
})

const navTogglerBtn = document.querySelector('.nav-toggle');
const aside = document.querySelector('.aside');

navTogglerBtn.addEventListener('click', () => {
    asideSectionTogglerBtn();
})
function asideSectionTogglerBtn() {
    aside.classList.toggle('open');
    navTogglerBtn.classList.toggle('open')
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle('open');
    }

}