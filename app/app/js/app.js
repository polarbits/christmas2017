const wishes = require('./wishes.js');
const Vivus = require('vivus');


if (document.querySelector('[name=sender]')){  
  
  const logo = new Vivus('bear', {
    type: 'delayed',
    duration: 1500,
    animTimingFunction: Vivus.LINEAR,
  });

const url = 'https://icy-bush-5836.syncano.space/Christmas2017/post-wishes/'; 
const sendWishesButton = document.querySelector('.send--js'); 
sendWishesButton.addEventListener('click', (e) => { 
  e.preventDefault();
  const form = document.querySelector('form'); 

  if (!form.checkValidity()){
    const formInputs = form.getElementsByTagName("input");
    for (let input of formInputs) {
      input.classList.remove('invalid');
      if (!input.checkValidity()){
        input.classList.add('invalid');
      }
    }
    return;
  }

  const senderValue = document.querySelector('[name=sender]').value; 
  const receiverValue = document.querySelector('[name=receiver]').value; 
  const wishesValue = document.querySelector('[name=wishes]').value; 

  const apiUrl = new URL(url),  
    params = {sender: senderValue, receiver: receiverValue, wishes: wishesValue } 
  Object.keys(params).forEach(key=>apiUrl.searchParams.append(key, params[key])); 
 
  let cryptoId; 
  fetch(apiUrl) 
    .then(function(resp) {  
      return resp.json(); 
    }) 
    .then(function(json){  
      return json; 
    }) 
    .then(function(crypto){
      const textareaMessage = document.querySelector('.form__message'); 
      textareaMessage.value = `Hey ${receiverValue}!
I have a special message for you!
Open this link on your mobile phone (safari/chrome)
📱 : https://xmas2017.polarbits.co/wish/#${crypto} 
Allow webpage to access your camera!
Open the second link on your computer
💻 : https://xmas2017.polarbits.co/marker/
Point your phone's camera at the bear marker!
Merry Christmas 🎄!`
      const form = document.querySelector('.form'); 
      form.classList.add('form--disabled');
      const message = document.querySelector('.message'); 
      message.classList.remove('message--disabled');
    }) 
}); 

const copyTextareaBtn = document.querySelector('.textareacopybtn--js');

copyTextareaBtn.addEventListener('click', function(event) {
  const copyTextarea = document.querySelector('.form__message');
  copyTextarea.select();

  try {
    const successful = document.execCommand('copy');
    copyTextareaBtn.textContent = 'Message is in your clipboard!';
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});


const newWishesButton = document.querySelector('.new--js'); 
newWishesButton.addEventListener('click', (e) => { 
  e.preventDefault();
  const form = document.querySelector('.form');
  form.classList.remove('form--disabled');
  const message = document.querySelector('.message'); 
  message.classList.add('message--disabled');
  copyTextareaBtn.textContent = 'Copy to clipboard';
  document.querySelector('[name=receiver]').value = '';
});

const form = document.querySelector('form');
form.addEventListener('input', (e)=>{
  const element = e.srcElement;
  if (element.checkValidity()){
    element.classList.remove('invalid');
  }
});
}

