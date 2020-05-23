import React, { Component } from "react";
import "./index.scss";
import "../index.scss";
import { Pagination } from "antd";

export default class ProActive extends Component {
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
      <div className="con con-box">
        <div className="con-index">
          <div className="right-container">
            <div className="content-box clearfix">
              <p className="box-time">2020年4月19日</p>
              <div className="article-box">
                <div className="article-box-left">
                  <h1 className="box-left-title">
                    5G消息（RCS），到底是什么？
                  </h1>
                  <p className="box-left-text">
                    RCS，也被称为融合通信。所谓“融合”，既可以理解为多种媒体形式融合，也可以理解为IP业务和传统电信网业务的融合。
                  </p>
                </div>
                <div className="article-box-right">
                  <a href="https://mp.weixin.qq.com/s/H5wfpdSBl82lRFelVn_T-g">
                    <img
                      src={require("../../../assets/img/consultation/rcs.png")}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="content-box clearfix">
              <p className="box-time">2020年4月11日</p>
              <div className="article-box">
                <div className="article-box-left">
                  <h1 className="box-left-title">
                    腾讯希望借5G实现内外打通，从松散的联盟体向生态体过渡
                  </h1>
                  <p className="box-left-text">
                    几乎没有巨头能够凭一己之力参与这场游戏，5G产业的竞争实际上是产业生态体系的竞争。
                  </p>
                </div>
                <div className="article-box-right">
                  <a href="https://mp.weixin.qq.com/s/jncxcpaCTbwCJVioXQIKBg">
                    <img
                      src={require("../../../assets/img/consultation/tation.png")}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="content-box clearfix">
              <p className="box-time">2020年4月10日</p>
              <div className="article-box">
                <div className="article-box-left">
                  <h1 className="box-left-title">5G前夜，腾讯已就位</h1>
                  <p className="box-left-text">
                    虽然腾讯最为大众所熟知的是社交产品，但稍微回顾腾讯发展历程就会知道，腾讯创办、快速崛起和每次面临挑战，背后都有通信技术变革的影子。
                  </p>
                </div>
                <div className="article-box-right">
                  <a href="https://mp.weixin.qq.com/s/TpYhQzfdj6wrq0Zrf0zwIQ">
                    <img
                      src={require("../../../assets/img/consultation/5g.png")}
                    ></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="content-box clearfix">
              <p className="box-time">2020年3月3日</p>
              <div className="article-box">
                <div className="article-box-left">
                  <h1 className="box-left-title">
                    5G大爆炸：一切的重构，颠覆想象！
                  </h1>
                  <p className="box-left-text">
                    5G到底会如何拓展数字经济发展新空间？对媒体及娱乐行业，会产生怎样的颠覆式影响？5G时代，对营销行业又意味着什么？
                  </p>
                </div>
                <div className="article-box-right">
                  <a href="https://mp.weixin.qq.com/s/vw3dPJwZPAKEnzpUfFr0HQ">
                    <img
                      src={require("../../../assets/img/consultation/vr.png")}
                    ></img>
                  </a>
                </div>
              </div>
              <div className="active-bottom">
                <p className="active-bottom-title">更多精彩资讯</p>
                <p className="active-bottom-text">扫码获取</p>
                <div className="active-bottom-wx">
                  <a>
                    <img
                      src={require("../../../assets/img/consultation/wx.png")}
                    ></img>
                  </a>
                </div>
                <div className="cleaxfix" style={{width:'10px',height:'10px'}}></div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <Pagination
              onChange={this.onChange}
              total={5}
              itemRender={this.itemRender}
            />
          </div>
        </div>
      </div>
    );
  }
}
