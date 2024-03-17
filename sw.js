const CACHE_NAME = 'mon-portfolio-v1';
const urlsToCache = [
  '/',
  './index.html',
  './Galerie.html',
  './MonCV.html',
  './Contact.html',

  './MessagesStyle.css',
  './MonCV.css',
  './MonCVMobile.css',
  './MonCVMobile.css',
  './style.css',
  './StyleContact.css',
  './StyleContactMobile.css',
  './StyleGalerie.css',
  './StyleGalerieMobile.css',
  './StyleMobile.css',
  './sw.js',
  //Header Images
  './ImagesHeaders/go-3-logo-png-transparent.png',
  //Galerie image
  './ImagesGalerie/_ (1).jpeg',
  './ImagesGalerie/_ (2).jpeg',
  './ImagesGalerie/_ (3).jpeg',
  './ImagesGalerie/_ (4).jpeg',
  './ImagesGalerie/_ (5).jpeg',
  './ImagesGalerie/_.jpeg',
  './ImagesGalerie/4c8c4c2b-1cac-4c7b-ba94-9a49025c9f23.jpeg',
  './ImagesGalerie/7.jpeg',
  './ImagesGalerie/33e6100b-76ab-481f-82ee-771dbdd42180.jpeg',
  './ImagesGalerie/46bd4cd3-1bf1-4ced-91c0-be21f60c3a11.jpeg',
  './ImagesGalerie/78ba4eec-c22f-4b00-b60c-d662a0af413b.jpeg',
  './ImagesGalerie/5725aa7b-18b1-4bd4-b758-f075f6b8c3e9.jpeg',
  './ImagesGalerie/42037d88-076d-4d6a-8adc-af3d9b6073ed.jpeg',
  './ImagesGalerie/Andre Sanchez.jpeg',
  './ImagesGalerie/bde893cc-b381-4b83-bd1f-253cd368f114.jpeg',
  './ImagesGalerie/CLIPPING MASK AND DESGIN MAKING IN PHOTOSHOP _ WINTERWONDERLAND.jpeg',
  './ImagesGalerie/dada22.jpeg',
  './ImagesGalerie/Digital Collages Vol_ 1.jpeg',
  './ImagesGalerie/Digital Collages Vol_ 3.jpeg',
  './ImagesGalerie/Marcelo Monreal.jpeg',
  './ImagesGalerie/Natalie Portman.jpeg',
  './ImagesGalerie/Trend Watch_ Floral, Tropical, and Botanical Design _ Envato Tuts+.jpeg',
  './ImagesGalerie/Verano.jpeg',
    //Footer Images
    './ImagesFooter/googlePlus.jpeg',
    './ImagesFooter/icons8-facebook-f.jpeg',
    './ImagesFooter/googlePlus.jpeg',
    './ImagesFooter/icons8-linkedin-2.jpeg',
    './ImagesFooter/icons8-twitter.jpeg',
    //CV Images
    './ImagesCV/icons8-accueil-50.png',
    './ImagesCV/icons8-behance-32.png',
    './ImagesCV/icons8-email-50.png',
    './ImagesCV/icons8-github-30.png',
    './ImagesCV/icons8-téléphone-50.png',
    './ImagesCV/profil.png',
    './ImagesCV/user.png',
    './ImagesCV/utilisateur.png',
    //images contact
    './ImagesContact/5193701.jpg',
     //images Body
     './ImagesBody/4554896.jpg',
     './ImagesBody/5118825.jpg',
     './ImagesBody/Resume-(1).jpg',
     './ImagesBody/sight-sense-plants-collage-min.jpg',
     './ImagesBody/smelling-sense-lemons-collage-min.jpg',
     './ImagesBody/touch-sense-heart-collage-min.jpg',


     // Ajoutez d'autres ressources à mettre en cache
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.add('index.html');
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});












