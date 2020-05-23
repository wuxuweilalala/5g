import React, { Component } from "react";
import classnames from "classnames";
import "./index.scss";
import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";

export default class deveFile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true,
    };

    // 这个绑定是必要的，使`this`在回调中起作用
    this.handleMore = this.handleMore.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }
  render() {
    return (
      <div>
        <Header />
        <Banner img="../../assets/deveFile/img/top.png" />
        <div className="guide">
          <div className="layout">
            <h2>用户指南</h2>
            <div className="guide-container">
              <div className="guide-container-box err-disable">
                <div className="guide-logo">
                  <i className="guide-icon-1"></i>
                </div>
                <div className="guide-content">
                  <h3>新手指南</h3>
                  <i></i>
                  <span></span>
                </div>
              </div>
              <div className="guide-container-box guide-bg-2 err-disable">
                <div className="guide-logo">
                  <i className="guide-icon-1"></i>
                </div>
                <div className="guide-content">
                  <h3>SDK下载</h3>
                  <i></i>
                  <span></span>
                </div>
              </div>
              <div className="guide-container-box guide-bg-3 no-margin err-disable">
                <div className="guide-logo">
                  <i className="guide-icon-1"></i>
                </div>
                <div className="guide-content">
                  <h3>常见问题</h3>
                  <i></i>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="secDe sec-deveFile">
          <div className="layout">
            <h2 className="secDe-tit">接口文档</h2>
            <div className="secDe-cont">
              <div className="deveFile-row">
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-1"></i>
                    <p className="deveFile-group-wrap__title">人脸识别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a
                      href="/fileDetail/21"
                      className="deveFile-group-wrap__item"
                    >
                      人脸识别
                    </a>
                    <a
                      href="/fileDetail/22"
                      className="deveFile-group-wrap__item"
                    >
                      人脸核身
                    </a>
                    <a className="deveFile-group-wrap__item err-disable">人脸支付</a>
                    <a className="deveFile-group-wrap__item err-disable">换脸甄别</a>
                    {/* <a href="/" className="deveFile-group-wrap__item">
                      人脸对比
                    </a> */}
                    {/* <a
                      href="javascript:void(0);"
                      className={classnames(
                        "deveFile-group-more jmod-capa-more",
                        {
                          hide: !this.state.isShow,
                        }
                      )}
                      onClick={this.handleMore}
                    >
                      <i className="ico-more"></i>
                      展开更多
                    </a>
                    <div
                      className={classnames("hide-wrap", {
                        show: !this.state.isShow,
                      })}
                    >
                      <a href="/" className="deveFile-group-wrap__item">
                        人脸搜索
                      </a>
                      <a
                        href="/"
                        className="deveFile-group-wrap__item no-border"
                      >
                        手势识别
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="deveFile-group-more jmod-capa-hide"
                        onClick={this.handleHide}
                      >
                        <i
                          className="ico-more"
                          style={{
                            transform: "rotate(180deg)",
                            height: "12px",
                          }}
                        ></i>
                        收起
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-2"></i>
                    <p className="deveFile-group-wrap__title">人脸特效</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a
                      href="/fileDetail/23"
                      className="deveFile-group-wrap__item"
                    >
                      人脸融合
                    </a>
                    <a
                      href="/fileDetail/24"
                      className="deveFile-group-wrap__item"
                    >
                      人脸试妆
                    </a>
                    <a
                      href="/fileDetail/25"
                      className="deveFile-group-wrap__item"
                    >
                      人像变换
                    </a>
                    {/* <a href="/" className="deveFile-group-wrap__item">
                      人脸变妆
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      大头贴
                    </a> */}
                    {/* <a
                      href="javascript:void(0);"
                      className={classnames(
                        "deveFile-group-more jmod-capa-more",
                        {
                          hide: !this.state.isShow,
                        }
                      )}
                      onClick={this.handleMore}
                    >
                      <i className="ico-more"></i>
                      展开更多
                    </a>
                    <div
                      className={classnames("hide-wrap", {
                        show: !this.state.isShow,
                      })}
                    >
                      <a
                        href="/"
                        className="deveFile-group-wrap__item no-border"
                      >
                        颜龄检测
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="deveFile-group-more jmod-capa-hide"
                        onClick={this.handleHide}
                      >
                        <i
                          className="ico-more"
                          style={{
                            transform: "rotate(180deg)",
                            height: "12px",
                          }}
                        ></i>
                        收起
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-3"></i>
                    <p className="deveFile-group-wrap__title">人体识别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="javascript:void(0);"
                      className="deveFile-group-wrap__item err-disable"
                    >
                      手势识别
                    </a>
                  </div>
                </div>
                <div className="deveFile-group  no-margin">
                  <div className="deveFile-group-logo">
                    <i className="capa-4"></i>
                    <p className="deveFile-group-wrap__title">文字识别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a
                      href="/fileDetail/26"
                      className="deveFile-group-wrap__item"
                    >
                      通用文字OCR
                    </a>
                    <a
                      href="/fileDetail/27"
                      className="deveFile-group-wrap__item"
                    >
                      卡证文字OCR
                    </a>
                    <a
                      href="/fileDetail/28"
                      className="deveFile-group-wrap__item"
                    >
                      车牌识别OCR
                    </a>
                    {/* <a href="/" className="deveFile-group-wrap__item">
                      营业执照OCR
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      银行卡OCR
                    </a> */}
                    {/* <a
                      href="javascript:void(0);"
                      className={classnames(
                        "deveFile-group-more jmod-capa-more",
                        {
                          hide: !this.state.isShow,
                        }
                      )}
                      onClick={this.handleMore}
                    >
                      <i className="ico-more"></i>展开更多
                    </a>
                    <div
                      className={classnames("hide-wrap", {
                        show: !this.state.isShow,
                      })}
                    >
                      <a href="/" className="deveFile-group-wrap__item">
                        手写体OCR
                      </a>
                      <a href="/" className="deveFile-group-wrap__item">
                        车牌OCR
                      </a>
                      <a
                        href="/"
                        className="deveFile-group-wrap__item no-border"
                      >
                        名片OCR
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="deveFile-group-more jmod-capa-hide"
                        onClick={this.handleHide}
                      >
                        <i
                          className="ico-more"
                          style={{
                            transform: "rotate(180deg)",
                          }}
                        ></i>
                        收起
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="deveFile-row">
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-5"></i>
                    <p className="deveFile-group-wrap__title">敏感信息甄别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item">
                      暴恐识别
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      图片鉴黄
                    </a>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      音频鉴黄
                    </a>
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-7"></i>
                    <p className="deveFile-group-wrap__title">机器翻译</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item">
                      文本翻译
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      语音翻译
                    </a>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      图片翻译
                    </a>
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-8"></i>
                    <p className="deveFile-group-wrap__title">基础文本分析</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item">
                      分词/词性
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      专有名词
                    </a>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      同义词
                    </a>
                  </div>
                </div>
                <div className="deveFile-group  no-margin">
                  <div className="deveFile-group-logo">
                    <i className="capa-6"></i>
                    <p className="deveFile-group-wrap__title">智能闲聊</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      智能闲聊
                    </a>
                  </div>
                </div>
              </div> */}
              <div className="deveFile-row">
                {/* <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-10"></i>
                    <p className="deveFile-group-wrap__title">语音识别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item">
                      语音识别
                    </a>
                    <a href="/" className="deveFile-group-wrap__item">
                      长语音识别
                    </a>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      关键词检索
                    </a>
                  </div>
                </div> */}
                {/* <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-10"></i>
                    <p className="deveFile-group-wrap__title">语音合成</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      语音合成
                    </a>
                  </div>
                </div> */}
                {/* <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-11"></i>
                    <p className="deveFile-group-wrap__title">
                      语言处理基础技术
                    </p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a href="/" className="deveFile-group-wrap__item">
                      语义意图成分
                    </a>
                    <a href="/" className="deveFile-group-wrap__item no-border">
                      语义情感分析
                    </a>
                  </div>
                </div> */}
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-5"></i>
                    <p className="deveFile-group-wrap__title">图像识别</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a
                      href="/fileDetail/29"
                      className="deveFile-group-wrap__item"
                    >
                      图像分析
                    </a>
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-6"></i>
                    <p className="deveFile-group-wrap__title">合作伙伴能力</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a className="deveFile-group-wrap__item err-disable">敬请期待</a>
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-12"></i>
                    <p className="deveFile-group-wrap__title">音视频技术</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                      实时音视频传输
                    </a>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                      音频处理
                    </a>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                      音视频通信质量评估
                    </a>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                      视频处理
                    </a>
                  </div>
                </div>
                <div className="deveFile-group no-margin">
                  <div className="deveFile-group-logo">
                    <i className="capa-13"></i>
                    <p className="deveFile-group-wrap__title">多媒体应用</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a className="deveFile-group-wrap__item err-disable">沉浸式媒体</a>
                    <a className="deveFile-group-wrap__item err-disable">智慧媒体</a>
                  </div>
                </div>
              </div>
              <div className="deveFile-row">
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-14"></i>
                    <p className="deveFile-group-wrap__title">5G通信能力</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                      物联网连接管理平台
                    </a>
                  </div>
                </div>
                <div className="deveFile-group">
                  <div className="deveFile-group-logo">
                    <i className="capa-14"></i>
                    <p className="deveFile-group-wrap__title">5G区块链能力</p>
                  </div>
                  <div className="deveFile-group-wrap">
                    <span className="deveFile-group-wrap_line"></span>
                    <a className="deveFile-group-wrap__item no-border err-disable">
                    5G区块链能力
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  handleMore(event) {
    // event.stopPropagation();
    this.setState({
      isShow: false,
    });
  }
  handleHide() {
    this.setState({
      isShow: true,
    });
  }
}
