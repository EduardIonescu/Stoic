window.onscroll = function() {stickNav()};

var navbar = document.querySelector('#title');

var sticky = navbar.offsetTop;

function stickNav() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add('sticky');
    }else {
        navbar.classList.remove('sticky');
    }
}

const QUOTES = [[
                'Like happy memories, good friends grow more and more precious with the passing of time. So glad we are friends.',
                "I like you, Uncle. Not only because you are family, but also because I have never met such a great friend, philosopher, and guide.",
                "I hope you sit back and relax . . . more so than usual. You deserve it. Enjoy the day, and I hope you have an amazing year.",
                'You shine like a bright light in our family. You have guided us with your brightness and led us to the path of success. Happy birthday to a great man!',
                "My dearest brother, thank you for motivating and inspiring me. You always have my best interests at heart and it means the world!",
                "I am following your footsteps from my childhood and you never put me the wrong track. I am so lucky to have a brother like you. May you enjoy every moment of your special day. ",
                "When I was a little kid, I only saw an elder brother in you. Now when I am a grown up, I got it – you are not only my elder brother, you are my best friend, you are my support and inspiration. "
                ],
            [
                'From your one and only, Eduardinho',
                'From your one and only, Ioane',
                'From your one and only, Tzap',
                'From your one and only, Gabi',
                'From your one and only, Celalalt Gabi',
                'From your one and only, Fabi',
                'From your one and only, Eduardissimo'
            ]];

var counterText = 0;
var text = document.querySelector('.changing-quote');
var whoseText = document.querySelector('.changing-quote-footer');
let intervalText = setInterval(changeQuote, 3000);

function changeQuote() {
    text.innerHTML = QUOTES[0][counterText];
    whoseText.innerHTML = QUOTES[1][counterText];
    counterText ++;
    if (counterText >= QUOTES[0].length) {
        counterText = 0;
    }
}

const IMAGES = [
    'confusedStoic.jpg',
    'vikingStoic.jpg',
    'youngStoic.png',
    'elegantStoic.jpg'
];

var counterImage = 0;
var image = document.querySelector('.changing-img');
let intervaImage = setInterval(changeImage, 9000);

function changeImage() {
    image.src = IMAGES[counterImage];
    counterImage ++;
    if (counterImage >= IMAGES.length) {
        counterImage = 0;
    }
}
