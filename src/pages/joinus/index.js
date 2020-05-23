import React, { Component } from "react";
import "./index.scss";
import { Route, withRouter } from "react-router-dom";

import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";
import { Menu } from "antd";

class JoinUs extends Component {
  state = {
    current: "contactus",
  };
  handleClick = (e) => {
    this.props.history.push(`/contact/${e.key}`);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="posit">
          <div className="contact-us">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <Menu.Item key="contactus">联系我们</Menu.Item>
              <Menu.Item key="joinus">加入我们</Menu.Item>
            </Menu>
          </div>
          <div className="layout clearfix">
            <div className="contactus-list">
              <ul>
                <li className="content-list">
                  <h1>微信公众号</h1>
                  <span className="content-list-text">
                    <i className="icon-1"></i>
                    xxxxxxxxxxxx
                  </span>
                </li>
                <li className="content-list">
                  <h1>邮箱</h1>
                  <span className="content-list-text">
                    <i className="icon-2"></i>
                    xxxxxxxxxxxx
                  </span>
                </li>
                <li className="content-list">
                  <h1>新浪微博</h1>
                  <span className="content-list-text">
                    <i className="icon-3"></i>
                    xxxxxxxxxxxx
                  </span>
                </li>
                <li className="content-list">
                  <h1>电话</h1>
                  <span className="content-list-text">
                    <i className="icon-4"></i>
                    xxxxxxxxxxxx
                  </span>
                </li>
              </ul>
            </div>
            <div className="contactus-list-btom">
              <h1>xxxxx职位</h1>
              <ol className="list-btom-ol">
                <li className="list-btom-box">
                  <p className="btom-text">
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作 介绍工作介绍工作介绍
                  </p>
                  <a href="">查看职位<i className="icon-more"></i></a>
                </li>
              </ol>
            </div>
            <div className="contactus-list-btom">
              <h1>xxxxx职位</h1>
              <ol className="list-btom-ol">
                <li className="list-btom-box">
                  <p className="btom-text">
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作 介绍工作介绍工作介绍
                  </p>
                  <a href="">查看职位<i className="icon-more"></i></a>
                </li>
              </ol>
            </div>
            <div className="contactus-list-btom">
              <h1>xxxxx职位</h1>
              <ol className="list-btom-ol">
                <li className="list-btom-box">
                  <p className="btom-text">
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作
                    工作介绍工作介绍工作介绍工作介绍工作 介绍工作介绍工作介绍
                  </p>
                  <a href="">查看职位<i className="icon-more"></i></a>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(JoinUs);
