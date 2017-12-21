import React from 'react';
import SyncanoClient from 'syncano-client'

const Wish = () => {
  const s = new SyncanoClient('icy-bush-5836');
  s.get('Christmas2017/get-wishes/', {wish: '6538'})
  .then(wish => {
    console.log(wish)
  })
  return (
    <div className="container">
      <h1>Home!!</h1>
    </div>
  );
}

export default Wish;