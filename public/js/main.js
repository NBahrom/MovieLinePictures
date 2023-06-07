if (window.scrollY >= 100) {
    document.querySelector('header').classList.add('scroll')   
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function functiondisable() {
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    LeftScroll = window.pageXOffset || document.documentElement.scrollLeft,
    
    // if scroll happens, set it to the previous value
    window.onscroll = function() {
        window.scrollTo(LeftScroll, TopScroll);
    };
}
    
function functionenable() {
    window.onscroll = function() {};
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.3;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'flex';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

if (document.querySelector('[data-openMenu]')) {
    document.querySelector('[data-openMenu]').addEventListener('click', () => {
        document.querySelector('[data-modal]').classList.add('appear')
    })

    document.querySelectorAll('[data-closeModal]').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('[data-modal]').classList.remove('appear')
        })
    })
}

if (document.querySelector('[data-bannerButton]')) {
    const bannerTop = document.querySelector('[data-bannerTop]')
    const bannerBottom = document.querySelector('[data-bannerBottom ]')
    document.querySelector('[data-bannerButton]').addEventListener('mouseover', () => {
        bannerTop.classList.add('onhover')
        bannerBottom.classList.add('onhover')
        bannerTop.classList.remove('removehover')
        bannerBottom.classList.remove('removehover')
    })

    document.querySelector('[data-bannerButton]').addEventListener('mouseleave', () => {
        bannerTop.classList.remove('onhover')
        bannerBottom.classList.remove('onhover')
        bannerTop.classList.add('removehover')
        bannerBottom.classList.add('removehover')
    })
}

if (document.querySelector('[data-apply]')) {
    const apply = document.querySelector('[data-apply]')
    const apply2 = document.querySelector('[data-apply-black]')
    const closeModalForm = document.querySelector('[data-closeModalForm]')
    const back = document.querySelector('.back_block')

    apply.addEventListener('click',() => {
        functiondisable()
        unfade(closeModalForm)
        unfade(back)
        closeModalForm.classList.remove('black')
    })

    apply2.addEventListener('click', () => {
        functiondisable()
        unfade(closeModalForm)
        unfade(back)
        closeModalForm.classList.add('black')
    })

    back.addEventListener('click', async () => {
        functionenable()
        await fade(closeModalForm)
        await fade(back)
    })


}


window.addEventListener('scroll',(e) => {
    if (window.scrollY >= 100) {
        document.querySelector('header').classList.add('scroll')   
    }
    else{
        document.querySelector('header').classList.remove('scroll')   
    }
})

async function startSlider() {
    let splide = await new Splide( '.splide', {
        type: 'slide',
        perPage: 1,
        padding: '300px',
        start  : 1,
        focus    : 'center',
        pagination: false,
        breakpoints: {
            1200: {
                padding: '200px',
            },
            768: {
                padding: '48px',
            }
        }
    } );  

    await splide.mount();

    document.querySelector('.slider .splide__arrow--prev').innerHTML = `<img src="img/patterns/Button Show more.png" alt="">    `
    document.querySelector('.slider .splide__arrow--next').innerHTML = `<img src="img/patterns/Button Show more2.png" alt="">    `

}

startSlider()


// document.querySelector('.slider .splide__arrow--prev').innerHTML = `<svg width="38" height="88" viewBox="0 0 38 88" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M23.7547 14.3066L14.5768 43.2185L23.7547 73.6931" stroke="white" stroke-width="3.77914"/>
// </svg>
// `


if (window.matchMedia("(max-width: 768px)").matches) {
    const value = document.querySelector('#modalPlaceholder').dataset.placeholder1
    document.querySelector('#modalPlaceholder').setAttribute('placeholder', value)
}
else{
    const value = document.querySelector('#modalPlaceholder').dataset.placeholder2
    document.querySelector('#modalPlaceholder').setAttribute('placeholder', value)
}


const dropDown = document.querySelector('#language_dropdown')
const allOptions = document.querySelectorAll('#language_dropdown .language_icons')

dropDown.addEventListener('mouseover', () => {
    allOptions.forEach(item => {
        item.classList.remove('hidden')
    })
})


dropDown.addEventListener('mouseout', () => {
    allOptions.forEach((item, index) => {
        if (index == 0) {
            item.classList.remove('hidden')
        }
        else{
            item.classList.add('hidden')
        }
    })
})