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
logo.setAttribute('src', siteContent["nav"]["img-src"])

 let domIsAwesome = document.querySelector('h1');
 domIsAwesome.textContent = siteContent["cta"]["h1"];

 let button = document.querySelector('button');
 button.textContent = siteContent["cta"]["button"];

 let navOne = document.querySelectorAll('a')[0];
 navOne.textContent = siteContent["nav"]["nav-item-1"];
 navOne.style.color = 'green';

 let navTwo = document.querySelectorAll('a')[1];
 navTwo.textContent = siteContent["nav"]["nav-item-2"];
 navTwo.style.color = 'green';

 let navThree = document.querySelectorAll('a')[2];
 navThree.textContent = siteContent["nav"]["nav-item-3"];
 navThree.style.color = 'green';

 let navFour = document.querySelectorAll('a')[3];
 navFour.textContent = siteContent["nav"]["nav-item-4"];
 navFour.style.color = 'green';

 let navFive = document.querySelectorAll('a')[4];
 navFive.textContent = siteContent["nav"]["nav-item-5"];
 navFive.style.color = 'green';

 let navSix = document.querySelectorAll('a')[5];
 navSix.textContent = siteContent["nav"]["nav-item-6"];
 navSix.style.color = 'green';

 let ctaImage = document.querySelector('#cta-img');
 ctaImage.setAttribute('src', 'img/header-img.png');

 let topContent = document.querySelector('.top-content');
 let topText = topContent.querySelectorAll('h4')[0];
 topText.textContent = siteContent["main-content"]["features-h4"]
 let topTextTwo = topContent.querySelectorAll('h4')[1];
 topTextTwo.textContent = siteContent["main-content"]["about-h4"]
 let topParagraph = topContent.querySelectorAll('p')[0];
 topParagraph.textContent = siteContent["main-content"]["features-content"]
 let topParagraphTwo = topContent.querySelectorAll('p')[1];
 topParagraphTwo.textContent = siteContent["main-content"]["about-content"]

 let middleImage = document.querySelector('#middle-img');
 middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

 let bottomContent = document.querySelector('.bottom-content');
 let bottomText = bottomContent.querySelectorAll('h4')[0];
 bottomText.textContent = siteContent["main-content"]["services-h4"]
 let bottomTextTwo = bottomContent.querySelectorAll('h4')[1];
 bottomTextTwo.textContent = siteContent["main-content"]["product-h4"]
 let bottomTextThree = bottomContent.querySelectorAll('h4')[2];
 bottomTextThree.textContent = siteContent["main-content"]["vision-h4"]
 let bottomParagraph = bottomContent.querySelectorAll('p')[0];
 bottomParagraph.textContent = siteContent["main-content"]["services-content"]
 let bottomParagraphTwo = bottomContent.querySelectorAll('p')[1];
 bottomParagraphTwo.textContent = siteContent["main-content"]["product-content"]
 let bottomParagraphThree = bottomContent.querySelectorAll('p')[2];
 bottomParagraphThree.textContent = siteContent["main-content"]["vision-content"]

 let contactSection = document.querySelector('.contact');
 let contactMain = contactSection.querySelector('h4');
 contactMain.textContent = siteContent["contact"]["contact-h4"]
 let contactParaOne = contactSection.querySelectorAll('p')[0];
 contactParaOne.textContent = siteContent["contact"]["address"]
 let contactPhone = contactSection.querySelectorAll('p')[1];
 contactPhone.textContent = siteContent["contact"]["phone"]
 let contactEmail = contactSection.querySelectorAll('p')[2];
 contactEmail.textContent = siteContent["contact"]["email"]

 let footerInfo = document.querySelector('footer');
 let copyRightInfo = footerInfo.querySelector('p');
 copyRightInfo.textContent = siteContent["footer"]["copyright"]

 









