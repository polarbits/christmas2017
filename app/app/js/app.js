const wishes = require('./wishes.js');


if (document.querySelector('[name=sender]')){ 

const url = 'https://icy-bush-5836.syncano.space/Christmas2017/post-wishes/'; 
const button = document.querySelector('.send--js'); 
button.addEventListener('click', (e) => { 
  e.preventDefault(); 
  const senderValue = document.querySelector('[name=sender]').value; 
  const receiverValue = document.querySelector('[name=receiver]').value; 
  const wishesValue = document.querySelector('[name=wishes]').value; 
 
  const apiUrl = new URL(url),  
    params = {sender: senderValue, receiver: receiverValue, wishes: wishesValue } 
  Object.keys(params).forEach(key=>apiUrl.searchParams.append(key, params[key])); 
 
  let cryptoId; 
  fetch(apiUrl) 
    .then(function(resp) { 
      console.log(resp); 
      return resp.json(); 
    }) 
    .then(function(json){ 
      console.log(json) 
      return json; 
    }) 
    .then(function(crypto){ 
      const inputLink = document.querySelector('.form__link'); 
      inputLink.value = 'https://xmas2017.polarbits.co/wish/#'+crypto; 
      const form = document.querySelector('.form__form'); 
      form.classList.add('form--disabled'); 
      const inputLinkDiv = document.querySelector('.form__input'); 
      inputLinkDiv.classList.remove('form--disabled'); 
    }) 
}); 

}