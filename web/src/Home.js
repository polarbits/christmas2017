import React from 'react';

const Home = () => {
  return (
    <div className="container" >
      <form method="post" action="https://icy-bush-5836.syncano.space/Christmas2017/post-wishes/">
        <label>
          Sender:
      <input type="text" name="sender" />
      </label>
      <label>
          Receiver:
      <input type="text" name="receiver" />
      </label>
      <label>
      wishes:
      <input type="text" name="wishes" />
      </label>
      <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;