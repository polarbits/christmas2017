const SyncanoClient = require('syncano-client');


if (document.querySelector('.sender-ar--js')){ 



    const wishId = window.location.hash.substring(1);
    let senderPlaceholder = document.querySelector('.sender-ar--js');
    let receiverPlaceholder = document.querySelector('.receiver-ar--js'); 
    let wishesPlaceholder = document.querySelector('.wishes-ar--js'); 
    const s = new SyncanoClient('icy-bush-5836');  
    s.get('Christmas2017/get-wishes/', {wish: 6538})
    .then(items => {
      console.log(items);
      const wish = items.wishes[0]; 
      console.log(wish);
      senderPlaceholder.setAttribute('value', 'from: '+ wish.sender);
      receiverPlaceholder.setAttribute('value', `hey ${wish.receiver}!`);
      wishesPlaceholder.setAttribute('value', wish.wishes+' asd as das d asda sd asd asd as das d asd asd as da sd asdasdas da sd a sda sd asd a sd ajsd jalk jlkasdjlkasj dlkajsdlkajsdjlka');
    })


  }