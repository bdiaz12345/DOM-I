const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navbar = document.querySelectorAll('a');
navbar[0].textContent = siteContent.nav['nav-item-1'];
navbar[1].textContent = siteContent.nav['nav-item-2'];
navbar[2].textContent = siteContent.nav['nav-item-3'];
navbar[3].textContent = siteContent.nav['nav-item-4'];
navbar[4].textContent = siteContent.nav['nav-item-5'];
navbar[5].textContent = siteContent.nav['nav-item-6'];
navbar.forEach(a => a.style.color = 'green');

const nav = document.querySelector('nav');
const firstNewLink = document.createElement('a');
firstNewLink.textContent = 'Asian Massage';
firstNewLink.href = '#';
nav.prepend(firstNewLink);
const secondNewLink = document.createElement('a');
secondNewLink.textContent = 'Fried Chicken';
secondNewLink.href = '#';
nav.appendChild(secondNewLink);


const h1 = document.querySelector('h1');
h1.innerHTML = siteContent.cta['h1'].split(' ').join('<br/>');


const button = document.querySelector('button');
button.textContent = siteContent.cta['button'];
const topImage = document.querySelector('#cta-img');
topImage.src = siteContent.cta['img-src'];

const h4 = document.querySelectorAll('h4');
const content = document.querySelectorAll('p');

const features = h4[0];
features.textContent = siteContent["main-content"]['features-h4'];
const about = h4[1];
about.textContent = siteContent["main-content"]['about-h4'];

const featuresContent = content[0];
featuresContent.textContent = siteContent["main-content"]['features-content'];
const aboutContent = content[1];
aboutContent.textContent = siteContent["main-content"]['about-content'];

const middleImage = document.querySelector('.middle-img');
middleImage.src = siteContent["main-content"]['middle-img-src'];

const services = h4[2];
services.textContent = siteContent["main-content"]['services-h4'];
const product = h4[3];
product.textContent = siteContent["main-content"]['product-h4'];
const vision = h4[4];
vision.textContent = siteContent["main-content"]['vision-h4'];

const servicesContent = content[2];
servicesContent.textContent = siteContent["main-content"]['services-content'];
const productContent = content[3];
productContent.textContent = siteContent["main-content"]['product-content'];
const visionContent = content[4];
visionContent.textContent = siteContent["main-content"]['vision-content'];

const contactTitle = h4[5];
contactTitle.textContent = siteContent.contact['contact-h4'];
const address = content[5];
address.textContent = siteContent.contact['address'];
const phone = content[6];
phone.textContent = siteContent.contact['phone'];
const email = content[7];
email.textContent = siteContent.contact['email'];

const footer = content[8];
footer.textContent = siteContent.footer['copyright'];






