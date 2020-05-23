import React, { Component } from "react";
import "./index.scss";
import '../../../assets/js/common';

export default class projectCase extends Component {
  render() {
    return (
      <div className="project-case-box" ref="anli" data-warp="anli">
        <div className="layout clearfix">
          <p className="pro-case-title">项目领域-项目名称</p>
          <p className="pro-case-txt">公司名称</p>
          <div className="pro-conBox">
            <p className="pro-content">
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍
              <img
              src={require("../../../assets/img/fourassis/bg-img.png")}
              align="right"
              className="img-bg"
            ></img>
            </p>
          </div>
          <div className="anli-line"></div>
          <div className="anli-jump">
            <a href="#" className="anli-result">
              <i className="icon-lf"></i>上一篇：标题标题标题
            </a>
            <a href="#" className="anli-result">
              下一篇：标题标题标题<i className="icon-rg"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
