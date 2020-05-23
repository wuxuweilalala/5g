import React, { Component } from "react";
import { Carousel } from "antd";
import '../../../node_modules/antd/dist/antd.css';
import './index.scss';

export default class Banner extends Component {
  render() {
    const {
      img = ""
    } = this.props;
    return (
      // autoplay
        <Carousel autoplay>
          {/* <div className='banner-bg'  style={{ backgroundImage: "url(" + img + ")"}}>
          </div> */}
          <div className='banner-bg'>
            <img src={require('./img/bg-2.png')}></img>
          </div>
          <div className='banner-bg'>
          <img src={require('./img/bg-3.png')}></img>
          </div>
          <div className='banner-bg'>
          <img src={require('./img/bg-4.png')}></img>
          </div>
        </Carousel>
    );
  }
}
