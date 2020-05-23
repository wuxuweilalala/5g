import React, { Component } from "react";
import "./index.scss";
import { Route, withRouter } from "react-router-dom";

import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";
import { Menu } from "antd";
import ProjectCase from "./anli/index";
import FirstStudent from "./student/index";

class FourAssis extends Component {
  state = {
    current: "index",
  };
  handleClick = (e) => {
    // this.props.history.push(`/fourassis/${e.key}`);
    this.setState({
      current: e.key,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="fourassis-box">
          <div className="fourassis-title">
            <p className="title-p">
              {/* 首页 > <span className="title-span">腾讯5G生态计划</span> >
              <strong className="title-strong">四重助力</strong> */}
            </p>
          </div>
          <div className="four-left-list">
            <div className="menu-left">
              <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={[this.state.current]}
                mode="inline"
              >
                <Menu.Item key="index">四重助力</Menu.Item>
                <Menu.Item key="stu">首期学员</Menu.Item>
                <Menu.Item key="anli">项目案例</Menu.Item>
                <Menu.Item key="trends">相关动态</Menu.Item>
              </Menu>
            </div>
            {this.state.current === "index" ? (
              <div className="four-right-box" ref="index" data-warp="index">
                <div className="layout clearfix">
                  <h1>产品能力</h1>
                  <ul className="four-right-ul">
                    <li className="four-right-box list-bg-1 hvr-bob">
                      <div className="right-box">
                        <h3>腾讯未来网络实验室</h3>
                        <p>
                          腾讯未来网络实验室是中国互联网公司第一支5G技术和应用研究团队，以打造中国互联网界Top网络技术团队为愿景，发挥腾讯应用服务优势，通过能力输出，实现应用驱动5G网络演进的目标
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-2 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>腾讯多媒体实验室</h3>
                        <p>
                          腾讯旗下顶尖的音视频通信和处理研发团队，专注于实时音视频通信、音视编解码前沿算法研究、音视频国际标准、计算机视觉图像处理、端到端音视频质量评测。在实时音视频通信和处理技术、音视频国际标准等领域积累了完整的解决方案和领先的技术水平。
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-3 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>腾讯START</h3>
                        <p>
                          让好玩触手可及，降低用户玩游戏的门槛，把好游戏带给更多的用户。结合腾讯与英伟达双方优势，共同打造腾讯
                          START云游戏平台和构建未来超大型游戏渲染集群系统，给玩家带来更好的游戏体验。
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-4 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>Tencent AI Lab</h3>
                        <p>
                          腾讯企业级人工智能实验室，于2016年4月在深圳成立，目前在中国和美国有70位世界级研究科学家及300余位经验丰富的应用工程师致力于不断提升AI的理解、决策与创造力，向“
                          Make Al Everywhere”的愿景迈进。
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-5 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>Tencent Robotics X</h3>
                        <p>
                          腾讯设立的机器人研发实验室( Robotics X)。Robotics X和
                          AI
                          Lab将会成为腾讯AI产业的双基础支撑部门，进一步探索虚拟世界与真实世界的连接。
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-6 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>腾讯网络平台部</h3>
                        <p>
                          负责腾讯基础网络、云网络、无线与物联oT网络、4G/5G移动网络能力、卫星网络能力的规划设计、产品研发与创新、建设及运营相关工作。
                        </p>
                      </div>
                    </li>
                    <li className="four-right-box list-bg-7 hvr-bob">
                      <div className="right-box hvr-wobble-bottom">
                        <h3>腾讯网络平台部</h3>
                        <p>
                          作为技术工程事业群的核心部门，在整个公司业务中发挥着水和电一般不可或缺的重要作用，肩负着当今互联网时代发展最前端的海量信息存储与接入（云服务）的艰巨任务。
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
            {this.state.current === "stu" ? <FirstStudent /> : null}
            {this.state.current === "anli" ? <ProjectCase /> : null}
          </div>
        </div>
        {this.state.current === "index" ? (
          <div className="fourassis-btm-list" ref="index" data-warp="index">
            <div className="layout">
              <div className="btm-box">
                <div className="btm-bottom">
                  <span className="box-line"></span>
                  <h3>用户流量</h3>
                </div>
                <ol>
                  <li className="btm-box-list">
                    背靠三大5G中台，提供数据共享、用户增长、增值服务与权益
                  </li>
                </ol>
              </div>
              <div className="btm-box">
                <div className="btm-bottom">
                  <span className="box-line"></span>
                  <h3>渠道资源</h3>
                </div>
                <ol>
                  <li className="btm-box-list">
                    全球知名通信服务商，终端厂商，腾讯丰富应用与多媒体内容无缝对接
                  </li>
                </ol>
              </div>
              <div className="btm-box">
                <div className="btm-bottom">
                  <span className="box-line"></span>
                  <h3>品牌曝光</h3>
                </div>
                <ol>
                  <li className="btm-box-list">
                    MWC世界通信大会、 移动/联通/电信等运营商5G大会曝光
                  </li>
                </ol>
              </div>
            </div>
          </div>
        ) : null}
        {/* {
          this.state.current === 'trends' ? <ProjectCase /> : null
        } */}
        {/* <Route
              path={`${this.props.match.path}/anli`}
              component={ProjectCase}
            />
            <Route
              path={`${this.props.match.path}/stu`}
              component={FirstStudent}
            /> */}
        <Footer />
      </div>
    );
  }
}

export default withRouter(FourAssis);
