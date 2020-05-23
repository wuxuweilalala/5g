import React, { useEffect, useState } from "react";
import "./index.scss";
import { queryUserInfo } from '../../assets/api';
import { Layout, Menu, message, notification } from "antd";
import { SiderBox } from "./style";
import HeaderTop from "../../components/headerTop";
import UpdateUser from '../updateUser/updateUser';
import cookie from "../../assets/libs/cookie";


let data = JSON.parse(cookie.get("userInfo")) || '';

const { Content } = Layout;
function Admin() {

  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    queryUserInfo(data).then(res => {
      if(+res.code === 0) {
        setUserInfo(res.userInfoValue);
      } else if(+res.code === 20003) {
        message.error('登录态过期，请重新登录');
        setTimeout(() => {
          window.location = '/login';
        },2000)
      }
    }).catch(err => {
      console.log('err', err);
    })
  }, [])
  useEffect(() => {
    notification.open({
      message: '公告',
      description:
        '腾讯5G中台正在灰度测试中，功能需审核后开通。',
      onClick: () => {
        console.log('Notification Clicked!');
      },
      duration: 0,
      style: {
        top: 109
      },
    });
  },[])
  return (
    <div>
      <HeaderTop userName={userInfo.name || "张三"} />
      <Layout>
        <SiderBox
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            // console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            // console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.ItemGroup title="AI能力" key="1">
              <Menu.Item  disabled={true}>车牌识别</Menu.Item>
              <Menu.Item  disabled={true}>人脸识别</Menu.Item>
              <Menu.Item  disabled={true}>人脸特效</Menu.Item>
              <Menu.Item  disabled={true}>人体识别</Menu.Item>
              <Menu.Item  disabled={true}>文字识别</Menu.Item>
              <Menu.Item  disabled={true}>图像识别</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="5G通信技术" key="3">
              <Menu.Item  disabled={true}>5G物联网能力</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="5G大数据能力" key="4">
            </Menu.ItemGroup>
            <Menu.ItemGroup title="5G区块链能力" key="5">
            </Menu.ItemGroup>
            <Menu.ItemGroup title="用户中心" key="6">
              <Menu.Item  disabled={true}>账号信息</Menu.Item>
            </Menu.ItemGroup>
          </Menu>
        </SiderBox>
        <Layout>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <UpdateUser userInfo= {userInfo}/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default Admin;
