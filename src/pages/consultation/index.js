import React, { Component } from "react";
import "./index.scss";
import { Route, withRouter } from "react-router-dom";

import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";
import ProActive from "./active";
import { Menu, Pagination } from "antd";

class Consultation extends Component {
  state = {
    current: "proact",
  };
  handleClick = (e) => {
    // console.log("click ", e);
    // this.props.history.push(`/consultation/${e.key}`);
    this.setState({
      current: e.key,
    });
  };
  onChange = (page) => {
    // console.log(page);
  };
  itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return <a>上一页</a>;
    }
    if (type === "next") {
      return <a>下一页</a>;
    }
    return originalElement;
  };
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="consultation  layout">
          <p className="top-content">{/* 首页 > <span>最新资讯</span> */}</p>
          <div className="left-list">
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              <Menu.Item key="proact">项目动态</Menu.Item>
              {/* <Menu.Item key="2">案例新闻</Menu.Item> */}
              <Menu.Item key="active">行业资讯</Menu.Item>
            </Menu>
          </div>
          {this.state.current === "proact" ? (
            <div className="con con-box">
              <div className="con-index">
                <div className="right-container">
                  <div className="content-box clearfix">
                    <p className="box-time">2020年4月18日</p>
                    <div className="article-box">
                      <div className="article-box-left">
                        <h1 className="box-left-title">
                          「追光者-5G创新者线上开放日」第二期：产业投资专场
                        </h1>
                        <p className="box-left-text">
                          「追光者-5G创新者线上开放日」，作为腾讯5G生态计划主办的系列线上活动，腾讯5G生态计划将邀请5G创新者、运营商、投资机构、5G产业上下游、行业专家等，立足新基建，面向复工复产，链接内外部能力和资源，一起开启5G时代的生产、办公、生活、娱乐的创新未来。
                        </p>
                      </div>
                      <div className="article-box-right">
                        <a href="https://mp.weixin.qq.com/s/QkFEzqG3UPmkJye0TYYHzw">
                          <img
                            src={require("../../assets/img/consultation/img_1.png")}
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div className="content-box clearfix">
                    <p className="box-time">2020年4月8日</p>
                    <div className="article-box">
                      <div className="article-box-left">
                        <h1 className="box-left-title">
                          腾讯5G生态计划落地12大5G场景，吸引首批45个行业应用接入
                        </h1>
                        <p className="box-left-text">
                          2019年12月，腾讯5G生态计划正式启动，目前已接入45个5G行业应用，覆盖12大5G场景，包括多媒体内容、音视频技术、虚拟/增强现实、交通出行、工业互联网、生活民生、能源管理、城市管理、智能交互、智能物联、未来网络和通信感知。
                        </p>
                      </div>
                      <div className="article-box-right">
                        <a href="https://mp.weixin.qq.com/s/0JFJe9-8ArNW7RghC4lrsw">
                          <img
                            src={require("../../assets/img/consultation/img_2.png")}
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div className="content-box clearfix">
                    <p className="box-time">2020年3月31日</p>
                    <div className="article-box">
                      <div className="article-box-left">
                        <h1 className="box-left-title">
                          「追光者-5G创新者线上开放日」首期：22位5G创新者、150位投资人眼中的5G机会与应用
                        </h1>
                        <p className="box-left-text">
                          在全面复工复产大背景之下，腾讯5G生态计划策划了「追光者-5G创新者线上开放日」系列活动，希望聚集5G生态链的参与方，共同探究5G时代的新生产、新生活方式，同时也为5G生态企业的复工复产提供合作支持机会。
                        </p>
                      </div>
                      <div className="article-box-right">
                        <a href="https://mp.weixin.qq.com/s/vGfrEZHyQ2iaCHRnjxbSgQ">
                          <img
                            src={require("../../assets/img/consultation/img_3.png")}
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="right-container">
                  <div className="content-box clearfix">
                    <p className="box-time">2020年2月28日</p>
                    <div className="article-box">
                      <div className="article-box-left">
                        <h1 className="box-left-title">
                          「追光者-5G引领数字化」首期：智能制造
                        </h1>
                        <p className="box-left-text">
                          「追光者-5G引领数字化」第一季，我们邀请10个领域的5G创新者，讲述他们的探索、行动、思考和预测，开启5G引领下的数字化变革畅想。
                        </p>
                      </div>
                      <div className="article-box-right">
                        <a href="https://mp.weixin.qq.com/s/Fk3PNAmruufimZXozezOiw">
                          <img
                            src={require("../../assets/img/consultation/img_4.png")}
                          ></img>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <Pagination
                    onChange={this.onChange}
                    total={4}
                    itemRender={this.itemRender}
                  />
                </div>
              </div>
              {/* <Route
              path={`${this.props.match.path}/proact`}
              component={ProActive}
            /> */}
            </div>
          ) : null}
          {this.state.current === "active" ? <ProActive /> : null}
        </div>
        <Footer />
      </div>
    );
  }
}
export default withRouter(Consultation);
