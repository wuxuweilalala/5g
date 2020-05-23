import React, { Component } from "react";
import "./index.scss";
import Header from "../../../components/header/index";
import Banner from "../../../components/banner/index";
import Footer from "../../../components/footer/index";
import { Menu } from "antd";
// const { SubMenu } = Menu;

export default class induDeatail extends Component {
  state = {
    current: "mail"
  };
  handleClick = e => {
    this.setState({
      current: e.key
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="induDeatail">
          <div className="indu-Container layout">
            <div className='indu-info-list-spot'>
                <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                mode="horizontal"
                >
                <Menu.Item key="spot">行业痛点</Menu.Item>
                <Menu.Item key="cost">方案价值</Menu.Item>
                <Menu.Item key="programme">方案介绍</Menu.Item>
                <Menu.Item key="process" className="no-margin">植入流程</Menu.Item>
                </Menu>
                <div className='indu-info-list'>
                    <span>介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍。</span>
                    <img src={require('../../../assets/img/industry/detail/icon-img.png')}></img>
                    <span>介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍。</span>
                </div>
                <div className='indu-info-list list-top'>
                    <span>介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍。</span>
                    <img src={require('../../../assets/img/industry/detail/icon-img.png')}></img>
                    <span>介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍内容介绍。</span>
                </div>
            </div>
            <span className='line'></span>
            <div className='indu-recommend'>
                <h1>相关应用推荐</h1>
                <div className='indu-flex'>
                    <div className='indu-flex-child'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                    <div className='indu-flex-child no-margin'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                    <div className='indu-flex-child'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                    <div className='indu-flex-child no-margin'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                    <div className='indu-flex-child'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                    <div className='indu-flex-child no-margin'>
                        <img src={require('../../../assets/img/industry/detail/icon-1.png')} />
                        <span>应用名称</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
