let homePage = [
    {
        img: 'images/desktop-image-hero-1.jpg',
        text:' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your  own style with our collection and make your property a reflection of you and what you love.',
        info:'Discover innovative ways to decorate'
    },
    {
        img: 'images/desktop-image-hero-2.jpg',
        text:" With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
        info:'We are available all across the globe'
    },
    {
        img: 'images/desktop-image-hero-3.jpg',
        text:' Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        info:'Manufactured with the best materials'
    }
]



// select items
const navHeader = document.querySelector('.nav-header');
const img = document.querySelector('.nav-image');
const text = document.querySelector('.text');
const note = document.querySelector('.note');
const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const prevBtn = document.querySelectorAll('.left-btn');
const nextBtn = document.querySelectorAll('.right-btn');

// set starting item
let currentItem = 0;


// show person based on item
function showPerson(person) {
    const item = homePage[person];
    img.src = item.img;
    note.textContent = item.info;
    text.textContent = item.text;
  }

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    currentItem = 0;
    showPerson(currentItem);
});

// show next person
nextBtn.forEach( function (btn) {

    btn.addEventListener('click', function () {
    currentItem++;
    
    showPerson(currentItem);
    });
});
// show prev person
prevBtn.forEach( function (btn) {

    btn.addEventListener('click', function () {
    currentItem--;
    
    showPerson(currentItem);
    });
});

hamburger.addEventListener('click', function () {
    navHeader.classList.add('show-nav')
});

close.addEventListener('click', function () {
    navHeader.classList.remove('show-nav')
});