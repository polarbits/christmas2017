const SyncanoClient = require('syncano-client');

require('aframe-text-geometry-component');

function isFacebookApp() {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1);
}


if (document.querySelector('.sender-ar--js')){ 
    const wishId = window.location.hash.substring(1);
    let senderPlaceholder = document.querySelector('.sender-ar--js');
    let receiverPlaceholder = document.querySelector('.receiver-ar--js'); 
    let wishesPlaceholder = document.querySelector('.wishes-ar--js'); 
    const s = new SyncanoClient('icy-bush-5836');  
    s.get('Christmas2017/get-wishes/', {wish: wishId})
    .then(items => {
      console.log(items);
      const wish = items.wishes[0]; 
      console.log(wish);
      senderPlaceholder.setAttribute('text', `value:from: ${wish.sender};  font: /assets/fonts/raleway/raleway.fnt; fontImage: /assets/fonts/raleway/raleway.png; color: #000000`);
      receiverPlaceholder.setAttribute('text', `value:Hey ${wish.receiver}!;  width: 0.7; align:center; font: /assets/fonts/raleway/raleway.fnt; fontImage: /assets/fonts/raleway/raleway.png`);
      wishesPlaceholder.setAttribute('text', `value:${wish.wishes};  font: /assets/fonts/raleway/raleway.fnt; width: 0.7; fontImage: /assets/fonts/raleway/raleway.png`);
    })
    if (isFacebookApp()) {
      const facebookOverlay = document.querySelector('.facebook');
      facebookOverlay.classList.add('facebook--visible');
    }
  }