import React, { Component } from 'react';
import Confetti from 'react-confetti';
import ImageGallery from 'react-image-gallery';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      images : [
       {
         original: 'http://res.cloudinary.com/dzmavimlg/image/upload/v1485315916/DSC02376_v8spdq.jpg',
         thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/v1485315916/DSC02376_v8spdq.jpg'
       }
     ]
   }
   this.handleImageLoad = this.handleImageLoad.bind(this);
   this.clickShip = this.clickShip.bind(this);
   this.clickWine = this.clickWine.bind(this);
   this.clickFamily = this.clickFamily.bind(this);
  }
  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }
  clickShip(){
    this.setState({images : [
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315916/DSC02376_v8spdq.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315916/DSC02376_v8spdq.jpg'
      }
    ]});
  }
  clickWine(){
    this.setState({images : [
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315847/DSC01350_rqfvzh.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315847/DSC01350_rqfvzh.jpg'
      },
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315834/DSC01318_qvdh5y.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315834/DSC01318_qvdh5y.jpg'
      }
    ]});
  }
  clickFamily(){
    this.setState({images : [
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315860/DSC01420_o02uxb.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315860/DSC01420_o02uxb.jpg'
      },
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315905/DSC01881_tjqsib.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315905/DSC01881_tjqsib.jpg'
      },
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315894/DSC01715_yuoddk.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315894/DSC01715_yuoddk.jpg'
      },
      {
        original: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315872/DSC01524_tigscd.jpg',
        thumbnail: 'http://res.cloudinary.com/dzmavimlg/image/upload/q_auto:good/v1485315872/DSC01524_tigscd.jpg'
      }
    ]});
  }
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className='bubbly'><i>Happy Birthday Grandma !!!!!</i></div>
        </div>
        <div className='gallery-container'>
          <ImageGallery
          items={this.state.images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
        </div>
        <br></br>
        <div className='flex-row'>
          <img onClick={this.clickShip} className='icon' src={require('./imgs/ship.png')}></img>
          <img onClick={this.clickFamily} className='icon' src={require('./imgs/people.png')}></img>
          <img onClick={this.clickWine} className='icon' src={require('./imgs/wine.png')}></img>
        </div>
        <Confetti/>
      </div>
    );
  }
}

export default App;
