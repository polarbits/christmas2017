const SyncanoClient = require('syncano-client');

    const wishId = window.location.hash.substring(1);
    let senderPlaceholder = document.querySelector('.sender-ar--js');
    let receiverPlaceholder = document.querySelector('.receiver-ar--js'); 
    let wishesPlaceholder = document.querySelector('.wishes-ar--js'); 
    const s = new SyncanoClient('icy-bush-5836');  
    s.get('Christmas2017/get-wishes/', {wish: 6538})
    .then(items => {
      const wish = items.wishes[0]; 
      senderPlaceholder.setAttribute('value', wish.sender);
      receiverPlaceholder.setAttribute('value', wish.receiver);
      wishesPlaceholder.setAttribute('value', wish.wishes);
    })