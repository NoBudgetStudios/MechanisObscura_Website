////TEXTS
const productName = "Mechanis Obscura";

const newsletter_button_text = "Join the Newsletter";
const download_button_text = "Download the Rules";

//const youtubeVideoUrl = "https://www.youtube.com/embed/wDd_-Wi-rPs?autoplay=1&mute=1";

const section_1_button_text = "Introduction";
const section_2_button_text = "About";
const section_3_button_text = "More";
const section_4_button_text = "Newsletter";

const heading_1_1 = "Mechanis Obscura"
const heading_2_1 = "Introduction"
const section_text_1 = `What if your only way out was to understand the mind of someone who lost theirs? 
Mechanis Obscura is a psychological escape-room thriller where you explore a twisted mansion filled with deadly puzzles, 
haunting live-action sequences, and secrets that spill beyond the screen. Solve your way through the madness, if you dare to understand it.​`;

const heading_2_2 = "About"
const section_text_2 = `What if your only way out was to understand the mind of someone who lost theirs? Mechanis Obscura is a psychological escape-room thriller that challenges not only your logic but your perception of reality. It invites players to dive into the fractured legacy of an eccentric genius with a tragic past, where each puzzle is more than a test — it is a piece of a broken soul. 

Trapped in a labyrinthine mansion built entirely from gears, traps, and secrets, players must solve mechanical enigmas, explore hidden chambers, and uncover a haunting narrative told through unconventional live-action storytelling. 

The game fuses psychological tension, puzzle-solving, and storytelling into a deeply immersive and atmospheric experience. Through first-person gameplay, Mechanis Obscura offers 
• Unconventional live-action storytelling that blends seamlessly with gameplay 
• Interesting and advanced puzzles integrated into environmental design
• A deeply immersive and atmospheric experience that grips the player from start to finish 
• An ARG layer with out-of-game puzzles that unlock additional in-game content, offering players a chance to dive even deeper into the mystery.
`;

const heading_2_3 = "More"
const section_text_3 = ""

const heading_2_4 = "Newsletter"
const section_text_4 = "Stay tuned for more!"

const footer_copyright = "Mechanis Obscura by Konstantinos Klimantakis - 2025 All rights reserved. v2025.08.12.1"   

////Image URLS

//const og_image = "./images/promo-material/qr_promo_image.png";
//const twitter_image = "./images/promo-material/qr_promo_image.png";

const backgroundImage = "./images/background.png";

const promo_image = "./images/promo_image (0).gif";

const promoImage1 = "./images/promo_image (1).png";
const promoImage2 = "./images/promo_image (2).png";
const promoImage3 = "./images/promo_image (3).png";
const promoImage4 = "./images/promo_image (4).png";
const promoImage5 = "./images/promo_image (5).png";
const promoImage6 = "./images/promo_image (6).png";
const promoImage7 = "./images/promo_image (7).png";
const promoImage8 = "./images/promo_image (8).png";
const promoImage9 = "./images/promo_image (9).png";
const promoImage10 = "./images/promo_image (10).png";

//URLS
const pdfDownloadLink = "https://drive.google.com/uc?export=download&id=1fD4jNnqPQdFvUG-S7dabRZjniTqf6_o5";


function updatePageContent() {
    ////IMAGES
    //document.querySelector('meta[property="og:image"]').setAttribute("content", og_image);
    //document.querySelector('meta[name="twitter:image"]').setAttribute("content", twitter_image);

    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";

    document.getElementById('intro-image').src = promo_image;
    document.getElementById('promo-img-1').src = promoImage1;
    document.getElementById('promo-img-2').src = promoImage2;
    document.getElementById('promo-img-3').src = promoImage3;
    document.getElementById('promo-img-4').src = promoImage4;
    document.getElementById('promo-img-5').src = promoImage5;
    document.getElementById('promo-img-6').src = promoImage6;
    document.getElementById('promo-img-7').src = promoImage7;
    document.getElementById('promo-img-8').src = promoImage8;
    document.getElementById('promo-img-9').src = promoImage9;
    document.getElementById('promo-img-10').src = promoImage10;


    ////TEXTS

    document.getElementById('page-title').textContent = productName;
    document.getElementById('header-title').textContent = productName;

    document.getElementById('heading-1-1').textContent = heading_1_1;

    //document.getElementById('heading-2-1').textContent = heading_2_1;
    document.getElementById('section-text-1').textContent = section_text_1;
    document.getElementById('heading-2-2').textContent = heading_2_2;
    document.getElementById('section-text-2').innerHTML = section_text_2;
    document.getElementById('heading-2-3').textContent = heading_2_3;
    //document.getElementById('section-text-3').textContent = section_text_3;
    document.getElementById('heading-2-4').textContent = heading_2_4;
    document.getElementById('section-text-4').textContent = section_text_4;

    document.getElementById('footer-copyright').textContent = footer_copyright;    
    
    ////BUTTONS
    
    document.getElementById('section-1-button').textContent = section_1_button_text;
    document.getElementById('section-2-button').textContent = section_2_button_text;
    document.getElementById('section-3-button').textContent = section_3_button_text;
    document.getElementById('section-4-button').textContent = section_4_button_text;

    document.getElementById('rules-download-button').innerHTML = `<i class="fas fa-download"></i> ${download_button_text}`;

    document.getElementById('rules-download-button').href = pdfDownloadLink;
    document.getElementById('newsletter-button').innerHTML = `<i class="fas fa-envelope"></i> ${newsletter_button_text}`;

    ////URLS
    document.getElementById('rules-download-button').href = pdfDownloadLink;
    //document.getElementById('youtube-video-iframe').src = youtubeVideoUrl;

}

updatePageContent();
