import React from 'react';
import SyncanoClient from 'syncano-client'; 



class Wish extends React.Component {
  constructor() {
    super();

    this.state = {
      wish: '',
      html: {__html: 'loading'}
    }

  }

  componentDidMount() { 
    const wishId = this.props.match.params.id;
    const s = new SyncanoClient('icy-bush-5836');  
    s.get('Christmas2017/get-wishes/', {wish: wishId})
    .then(items => {
      let wish = items.wishes[0];
      let markup = { __html: `
        <a-scene embedded  arjs="sourceType: webcam;">      
          <a-assets>
            <a-asset-item id="tree" src="/assets/scene.gltf">
          </a-assets>
          <a-marker preset="custom" type="pattern" url="/assets/pattern-marker.patt">
            <a-plane position="0 -0.5 0 " rotation="-90 0 0" width="2" height="2" color="#0B486B"></a-plane>
            <a-entity position="0 0 0.7" scale="0.0022 0.0022 0.0022" rotation="-90 0 0" gltf-model="#tree"></a-entity>
            <a-text position="-0.5 -0.2 -0.5 " rotation="-90 0 0" value="${wish.sender}!"></a-text>
          </a-marker>
          <a-entity camera></a-entity>
        </a-scene>`};
      this.setState({html: markup});
    })
  }
  render() {
    return (  
      <div dangerouslySetInnerHTML={this.state.html}/>
   
    );
  }
}

export default Wish;