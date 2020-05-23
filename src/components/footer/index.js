import React, { Component } from "react";
import "./index.scss";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="layout clearfix">
          <ul>
            <li className="footer-list">
              <i className="footer-icon-1"></i>
              <span>关于我们</span>
            </li>
            <li className="footer-list">
              <i className="footer-icon-2"></i>
              <span>友情链接</span>
            </li>
            <li className="footer-list">
              <i className="footer-icon-3"></i>
              <span>客服帮助</span>
            </li>
            <li className="footer-list">
              <i className="footer-icon-4"></i>
              <span>服务支持</span>
            </li>
            <li className="footer-list no-margin">
              <i className="footer-icon-5"></i>
              <span>服务支持</span>
            </li>
          </ul>
          <p className="footer-container-line"></p>
          <p className="clearfix footer-p"></p>
          <div className="footer-content">
            <div className="footer-about">
              <a href="/consultation">关于腾讯5G中台</a>
              <a href="/ecology">关于腾讯5G生态计划</a>
              {/* <a href="/ctiyPlan">关于腾讯5G城市计划</a> */}
              <a href="javascript:void(0);" className="err-disable">联系我们</a>
            </div>
            <div className="footer-about">
              {/* <a>腾讯未来网络实验室</a> */}
              <a href="http://medialab.qq.com" target="_blank" className='text-rig'>腾讯多媒体实验室</a>
              <a href='http://ai.qq.com' target="_blank">Tecent AI Lab</a>
            </div>
            <div className="footer-about footer-marRight">
              <a href="javascript:void(0);" className="err-disable">QQ号:</a>
              <a href="javascript:void(0);" className="err-disable">1706409061</a>
            </div>
            <div className="footer-about footer-marLeft">
              <a href="/deveFile">开发文档</a>
            </div>
            <div>
              <i className="footer-wx"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
