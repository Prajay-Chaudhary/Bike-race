import "./Gallary.css"
import React, {Component} from "react"

class Gallary extends Component {
  constructor() {
    super();
    this.state = {
      pictures: [],
    };
  }
  componentDidMount()
  {
    fetch(
      'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=d2e7dfec4591bf56092752c9584afc3a&tags=bikerace%2C+BoulderBikeTour&per_page=40&page="+page+"&format=json&nojsoncallback=1'
    )
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      alert(JSON.stringify(j));
      let pickArray = j.photos.photo.map((pic) => {
      var farmId = pic.farm;
      var serverId = pic.server;
      var id = pic.id;
      var secret = pic.secret;
      var srcPath = 'https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg';
      return(
        <img src={srcPath} alt="bikes"></img>
      )
      })
      this.setState({ pictures: pickArray });
    }.bind(this))
    
  }
  render(){
    return <div>{this.state.pictures}</div>;
  }
}

export default Gallary

