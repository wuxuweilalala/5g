import React, { Component } from "react";
import "./index.scss";
import { Route, withRouter } from "react-router-dom";

import Header from "../../components/header/index";
import Banner from "../../components/banner/index";
import Footer from "../../components/footer/index";
import { Menu, Table } from "antd";
const { SubMenu } = Menu;

const columns = [
  {
    title: "主机计费模式",
    dataIndex: "pattern",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "包年包月",
    dataIndex: "year",
  },
  {
    title: "按量计费",
    dataIndex: "amount",
  },
];

const data = [
  {
    key: "1",
    pattern: "付款方式",
    year: "预付费",
    amount: "购买时冻结费用，每小时结算",
  },
  {
    key: "2",
    pattern: "计费单位",
    year: "元/月，至少使用一个月",
    amount: "元/秒按秒计费，按小时结算，随时购买随时释放",
  },
  {
    key: "3",
    pattern: "单价",
    year: "单价较低",
    amount: "初始单价较高，阶梯降价连续使用 15 天后，单价基本接近包年包月 ",
  },
  {
    key: "4",
    pattern: "网络计费模式",
    year: "单价较低",
    amount: "支持按带宽计费和按使用流量计费两种方式",
  },
  {
    key: "5",
    pattern: "调整实例配置",
    year: "随时升降配置，升配无限制，每台云服务器实例最多可进行 5 次降配",
    amount: "随时升级配置，无限制 ",
  },
  {
    key: "6",
    pattern: "使用场景",
    year: "适用于设备需求量长期稳定的成熟业务",
    amount:
      "在业务发展有较大波动性，且无法进行准确预测，或 资源使用有临时性和突发性的情况下建议选择后付费",
  },
];

const columns1 = [
  {
    title: "计费项目",
    dataIndex: "charing",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "计费周期",
    dataIndex: "cycle",
  },
  {
    title: "计费单价（元/GB）",
    dataIndex: "unitPrice",
  },
  {
    title: "封顶价（元/网关实例/日）",
    dataIndex: "capping",
  },
];
const data1 = [
  {
    key: "1",
    charing: "写流量",
    cycle: "日",
    unitPrice: "0.2",
    capping: "15 (每个网关实例每日封顶价15元)",
  },
  {
    key: "2",
    charing: "读流量",
    cycle: "日",
    unitPrice: "0.2",
    capping: "无",
  },
];

class Price extends Component {
  // submenu keys of first level
  rootSubmenuKeys = ["computerEgg", "robotStudy", "sub4"];

  state = {
    openKeys: ["computerEgg"],
  };

  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(
      (key) => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Banner />
        <div className="price">
          <div className="layout clearfix">
            <div className="price-left">
              <Menu
                mode="inline"
                openKeys={this.state.openKeys}
                onOpenChange={this.onOpenChange}
                style={{ width: 256 }}
              >
                <Menu.Item key="price" className="price-title">
                  定价
                </Menu.Item>
                <SubMenu
                  key="computerEgg"
                  title={
                    <span>
                      <span>计算机视觉</span>
                    </span>
                  }
                >
                  <Menu.Item key="1">OCR</Menu.Item>
                  <Menu.Item key="2">人体与人脸识别</Menu.Item>
                  <Menu.Item key="3">图片识别</Menu.Item>
                  <Menu.Item key="4">图片特效</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="robotStudy"
                  title={
                    <span>
                      <span>机器学习</span>
                    </span>
                  }
                >
                  <Menu.Item key="5">Option 5</Menu.Item>
                  <Menu.Item key="6">Option 6</Menu.Item>
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <span>智能语言</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <span>自然语言处理</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <span>多媒体工具</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={
                    <span>
                      <span>未来网络技术</span>
                    </span>
                  }
                >
                  <Menu.Item key="9">Option 9</Menu.Item>
                  <Menu.Item key="10">Option 10</Menu.Item>
                  <Menu.Item key="11">Option 11</Menu.Item>
                  <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
              </Menu>
            </div>
            <div className="price-right  clearfix">
              <div className="price-box">
                <h1>XXXXX定价</h1>
                <p className="price-box-content">
                  <img
                    src={require("../../assets/img/price/icon-1.png")}
                    style={{ marginRight: "6px" }}
                  ></img>
                  介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍介绍。
                </p>
                <div className="table-box">
                  <Table
                    columns={columns}
                    dataSource={data}
                    pagination={false}
                    bordered
                    className="magnitude commonColor"
                    title={() => (
                      <strong className="ff-color">
                        <i className="shu-line"></i>按量计费与包年包月比较
                        <span className="small-size">
                          （关于按量计费与包年包月在云服务器单价，配置升降调整等方面的区别，见如下表格的对比)
                        </span>
                      </strong>
                    )}
                  />
                  <Table
                    columns={columns1}
                    dataSource={data1}
                    pagination={false}
                    bordered
                    className="charing commonColor"
                    title={() => (
                      <strong className="ff-color">
                        <i className="shu-line"></i>XXX定价
                      </strong>
                    )}
                  />
                  <div className="product-box commonColor">
                    <h3 className="ff-color ant-table-title">
                      <i className="shu-line"></i>相关产品
                    </h3>
                    <div className="product-box-list">
                      <div className="box-left commonBox">
                        <h5>
                          <i className="icon-file comIcon"></i>文件储存CFS
                        </h5>
                        <p>
                          安全可靠、集成化、容量可扩展低成本共享 文件存储服务
                        </p>
                      </div>
                      <div className="box-right commonBox">
                        <h5>
                          <i className="icon-obj comIcon"></i>对象存储COS
                        </h5>
                        <p>
                          安全可靠、集成化、容量可扩展低成本共享 文件存储服务
                        </p>
                      </div>
                    </div>
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
}
export default withRouter(Price);
