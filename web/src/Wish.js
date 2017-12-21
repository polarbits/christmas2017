import React from 'react';
import SyncanoClient from 'syncano-client'

class Wish extends React.Component {
  constructor() {
    super();

    this.state = {
      wish: ''
    }
  }

  componentDidMount() { 
    const wishId = this.props.match.params.id;
    const s = new SyncanoClient('icy-bush-5836'); 
    s.get('Christmas2017/get-wishes/', {wish: wishId})
    .then(items => {
      this.setState({wish: items.wishes[0]});
    })
  }

  render() {
    return (
      <div className="container">
        <h1>{ this.state.wish.sender }</h1>
      </div>
    );
  }
}

export default Wish;