import React, { Component } from "react";
import "./index.scss";
import { Route, withRouter } from "react-router-dom";

import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";
import { Menu, Button } from "antd";

class CityPlan extends Component {
  state = {
    current: "middle",
    two: "contest",
  };
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  };
  twoClick = (e) => {
    this.setState({
      two: e.key,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="city-container">
          <div className="layout clearfix">
            <h1>5G城市应用标杆</h1>
            <div className="title-list">
              <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
              >
                <Menu.Item key="north">华北地区</Menu.Item>
                <Menu.Item key="east">华东地区</Menu.Item>
                <Menu.Item key="south">华南地区</Menu.Item>
                <Menu.Item key="middle">华中地区</Menu.Item>
                <Menu.Item key="west">西部地区</Menu.Item>
              </Menu>
            </div>
            <div className="top-list">
              <div className="list-left">
                <h3>5G城市计划-武汉站</h3>
                <p className="list-text">
                  介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍。
                </p>
                <Button type="primary">了解更多</Button>
              </div>
              <div className="list-right">
                <img src={require("../../assets/img/cityPlan/img.png")}></img>
              </div>
            </div>
            <div className="top-list">
              <div className="list-left">
                <h3 className="list-left-title">5G城市特色应用</h3>
                <div className="list-left-item">
                  <Menu
                    onClick={this.twoClick}
                    selectedKeys={[this.state.two]}
                    mode="horizontal"
                  >
                    <Menu.Item key="contest">电竞</Menu.Item>
                    <Menu.Item key="live">直播</Menu.Item>
                  </Menu>
                </div>
                <p className="list-text">
                  介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍。
                </p>
              </div>
              <div className="list-right">
                <img src={require("../../assets/img/cityPlan/img.png")}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-container">
          <div className="layout clearfix">
            <h1>城市四大“发展痛点”</h1>
            <div className="middle-list">
                <ul>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item no-margin">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                </ul>
            </div>
            <h1>助力打造“发展支点”</h1>
            <div className="middle-list">
                <ul>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                    <li className="middle-list-item no-margin">
                        <img src={require('../../assets/img/cityPlan/icon-1.png')}></img>
                        <p className="list-item-text">痛点1</p>
                    </li>
                </ul>
            </div>
          </div>
        </div>
        <div className="bottom-container">
            <h1>腾讯5G城市计划XXXXXXX</h1>
            <Button>商业合作</Button>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(CityPlan);
