import React, { useState,useEffect, useRef } from "react";
import "./index.scss";
import { Menu } from "antd";
import { useParams } from 'react-router-dom';
import Header from "../../components/header/index";
import Footer from "../../components/footer/index";
import AppliContent from './detail/index';
const { SubMenu } = Menu;
function Application(props) {
  let { id = '1' } = useParams();
  const [current,setCurrent] = useState('1');
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];
  // var location =props.match.params.id;
  useEffect(() => {
    setCurrent(id);
    if( 9 <= +id && +id <= 13) {
      setOpenKeys(['sub2']);
    }
  },[])
  const handleClick = e => {
    setCurrent(e.key);
  };
  const onOpenChange = item => {
    const latestOpenKey = item.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(item);
    } else {
        let openKeys = latestOpenKey ? [latestOpenKey] : []
        setOpenKeys(openKeys);
    }
  };
    return (
      <div>
        <Header img={require('../../assets/img/application/tit-bg.png')}/>
        <div className="layout application-con">
          <div className='application-con-menu'>
            <Menu
              onClick={handleClick}
              style={{ width: 217 }}
              selectedKeys={current}
              // defaultOpenKeys={["sub1"]}
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              mode="inline"
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <span>数据中台</span>
                  </span>
                }
              >
                <Menu.Item key="1">企业短信</Menu.Item>
                {/* <Menu.Item key="2">ID Mapping</Menu.Item> */}
                <Menu.Item key="3">携号转网</Menu.Item>
                {/* <Menu.Item key="4">网关取号</Menu.Item> */}
                {/* <Menu.Item key="5">RCS</Menu.Item> */}
                <Menu.Item key="6" disabled={true}>代收</Menu.Item>
                {/* <Menu.Item key="7" disabled={true}>运营商数据</Menu.Item> */}
                {/* <Menu.Item key="8" disabled={true}>腾讯系标签</Menu.Item> */}
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <span>权益中台</span>
                  </span>
                }
              >
                <Menu.Item key="9">定向流量</Menu.Item>
                <Menu.Item key="10">游戏王卡</Menu.Item>
                <Menu.Item key="12">积分兑换</Menu.Item>
                <Menu.Item key="13">话费支付</Menu.Item>
                <Menu.Item key="11" disabled={true}>海外流量</Menu.Item>
                <Menu.Item key="14" disabled={true}>游戏道具</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <span>应用中台</span>
                  </span>
                }
                selectable={false}
              >
                <Menu.Item key="15" disabled={true}>云游戏</Menu.Item>
                <Menu.Item key="16" disabled={true}>高清显示</Menu.Item>
                <Menu.Item key="17" disabled={true}>车路协同</Menu.Item>
                <Menu.Item key="18" disabled={true}>视频</Menu.Item>
                <Menu.Item key="19" disabled={true}>电竞</Menu.Item>
                <Menu.Item key="20" disabled={true}>直播</Menu.Item>
                <Menu.Item key="21" disabled={true}>AR/VR</Menu.Item>
                <Menu.Item key="22" disabled={true}>物联网连接管理能力</Menu.Item>
              </SubMenu>
            </Menu>
            <AppliContent current={current}/>
          </div>
        </div>
        <Footer />
      </div>
    );
}
export default Application;
