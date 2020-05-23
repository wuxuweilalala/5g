import React, { Component, useState } from "react";
import "./index.scss";
import { Menu } from "antd";
// const { SubMenu } = Menu;

function HeadList() {
  const [current, setCurrent] = useState('1');
  const handleClick = (e) => {
    // this.props.history.push(`/consultation/${e.key}`);
    setCurrent(e.key);
  };
    return (
      <div>
        <div className="layout">
          <div>
            <div className="cat">
              <div className="cat-box" data-cat="capability">
                <div className="layout">
                  <Menu
                    onClick={handleClick}
                    style={{ width: 169 }}
                    defaultSelectedKeys={[current]}
                    defaultOpenKeys={["sub1"]}
                    mode="inline"
                  >
                    <Menu.Item key="1">AI能力</Menu.Item>
                    <Menu.Item key="2">5G通信能力</Menu.Item>
                    <Menu.Item key="3">5G多媒体能力</Menu.Item>
                    <Menu.Item key="4">5G区块链能力</Menu.Item>
                  </Menu>
                  {+current === 1 ? (
                    <div className="cat-col">
                      <div className="cat-group top-row">
                        <p className="cat-tit" style={{ width: "247px" }}>
                          <i className="cat-tag ico-1"></i>人脸识别
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/hr"
                            >
                              人脸识别
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/facenucleus"
                            >
                              人脸核身
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/facepayment"
                            >
                              人脸支付
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/facechange"
                            >
                              换脸甄别
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-2"></i>人脸特效
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/facefusion"
                            >
                              人脸融合
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_multiface"
                              href="/ability/facetest"
                            >
                              人脸试妆
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_multiface"
                              href="/ability/portrait"
                            >
                              人像变换
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-3"></i>人体识别
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/gesture"
                            >
                              手势识别
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-4"></i>文字识别
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="ocr_card"
                              href="/ability/wordsocr"
                            >
                              通用文字OCR
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="ocr_card"
                              href="/ability/idocr"
                            >
                              卡证文字OCR
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="ocr_card"
                              href="/ability/carocr"
                            >
                              汽车相关OCR
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* <div className="cat-group top-row no-marginTop">
                      <p className="cat-tit">
                        <i className="cat-tag ico-5"></i>语音技术
                      </p>
                      <div className="cat-list">
                        <div className="cat-item">
                          <a
                            _stat_click_id="header_demonav"
                            _stat_action_obj="face_detect"
                            href="/product/face.shtml#detect"
                          >
                            语音识别
                          </a>
                        </div>
                        <div className="cat-item">
                          <a
                            _stat_click_id="header_demonav"
                            _stat_action_obj="face_multiface"
                            href="/product/face.shtml#multiface"
                          >
                            语音合成
                          </a>
                        </div>
                      </div>
                    </div> */}
                      <div className="cat-group top-row no-marginTop">
                        <p className="cat-tit">
                          <i className="cat-tag ico-6"></i>图像识别
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              href="/ability/imganalysis"
                            >
                              图像分析
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="cat-group top-row no-marginTop">
                        <p className="cat-tit">
                          <i className="cat-tag ico-7"></i>合作伙伴能力
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              // href="#"
                              className="err-disable"
                            >
                              敬请期待
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  {+current === 2 ? (
                    <div className="cat-col">
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-10"></i>5G物联网能力
                        </p>
                        <div className="cat-list">
                          {/* <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                            >
                              5G消息
                            </a>
                          </div> */}
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              className="err-disable"
                            >
                              物联网连接管理平台
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {+current === 3 ? (
                    <div className="cat-col">
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-8"></i>音视频技术
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              className="err-disable"
                            >
                              实时音视频传输
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_multiface"
                              className="err-disable"
                            >
                              音频处理
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_multiface"
                              className="err-disable"
                            >
                              视音频通信质量评估
                            </a>
                          </div>
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_multiface"
                              className="err-disable"
                            >
                              视频处理
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-9"></i>多媒体应用
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              className="err-disable"
                            >
                              沉浸式媒体
                            </a>
                          </div>
                        </div>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              className="err-disable"
                            >
                              智慧媒体
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                  {+current === 4 ? (
                    <div className="cat-col">
                      <div className="cat-group top-row">
                        <p className="cat-tit">
                          <i className="cat-tag ico-10"></i>5G区块链能力
                        </p>
                        <div className="cat-list">
                          <div className="cat-item">
                            <a
                              _stat_click_id="header_demonav"
                              _stat_action_obj="face_detect"
                              className="err-disable"
                            >
                              5G区块链能力
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
export default HeadList;