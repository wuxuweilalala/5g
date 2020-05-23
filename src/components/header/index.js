import React, { Component, useState, useEffect } from "react";
import "../../assets/css/global.scss";
import HeadList from './components/5g-overView/index';
import classnames from 'classnames';
import cookie from '../../assets/libs/cookie';
// import '../../assets/js/common';


let userInfoValue = JSON.parse(cookie.get('userInfoValue')) || '';
function Header(props) {
  const [showElem, setShowElem] = useState(true);
  useEffect(() =>{
   const handleMount = () => {
  if(userInfoValue) {
    setShowElem(false);
  }
  }
  handleMount();
  },[])
  const handleClick = () => {
    cookie.del('userInfoValue');
    cookie.del('userInfo');
    cookie.del('userInfoValue', '/', '5g.sparta.html5.qq.com','-1');
    cookie.del('userInfo', '/', '5g.sparta.html5.qq.com', '-1');
    // document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }
    return (
      <div
        className={classnames(`mod-header head-cr ${props.className ||  ''}`)}
        style={{ height: props.height || '77px'}}
      >
        <HeadList />
        <div className="layout clearfix">
          <a
            href="/"
            className="mod-header-logo"
            _stat_click_id="header_logo"
          ></a>
          <div className={showElem ? "mod-header-nav" : 'mod-header-nav userRig'}>
            <ul id="jmod-header-nav">
              <li
                id="nav-header-serv"
                className="top-cat hassub"
                data-cat="capability"
              >
                <h2>
                  <a href="/ability/hr">5G技术能力</a>
                </h2>
              </li>
              <li
                id="nav-header-case"
                className="top-cat hassub"
                data-cat="case"
              >
                <h2>
                  <a href="/industry">5G行业应用</a>
                </h2>
              </li>
              <li id="nav-header-info" className="top-cat">
                <h2>
                  <a href="/ecology" _stat_click_id="header_info">
                    5G生态计划
                  </a>
                </h2>
              </li>
              <li id="nav-header-accelerator" className="top-cat">
                <h2>
                  <a
                    href="/deveFile"
                    _stat_click_id="header_accelerator"
                  >
                    开发文档
                  </a>
                </h2>
              </li>
              {/* <li id="nav-header-hr" className="top-cat">
                <h2>
                  <a href="/ctiyPlan" _stat_click_id="header_hr">
                    5G城市计划
                  </a>
                </h2>
              </li> */}
              <li id="nav-header-join" className="top-cat">
                <h2>
                  <a href="/consultation" _stat_click_id="header_joinus">
                    最新资讯
                  </a>
                </h2>
              </li>
            </ul>
            <i className="jmod-nav-slider slider hidden" style={{transform: "translateX(0px)"}}></i>
          </div>

          <div className="mod-header-user">
            <a
              href="/login"
              target="_blank"
              className={showElem ? 'try jmod-header-try' : 'try jmod-header-try hide'}
              _stat_click_id="header_console"
            >
              控制台
            </a>
            <a
              href="/admin"
              target="_blank"
              className={showElem ? 'console jmod-header-console hidden' : 'console jmod-header-console'}
              _stat_click_id="header_console"
            >
              控制台
            </a>
            <div className={showElem ? 'jmod-header-user user  hidden' : 'jmod-header-user user'}>
            <em className="jmod-header-name">{userInfoValue.name || 12345678}</em>
              <i className="icon-btom"></i>
              <div className="dropdown">
                <a
                  href="/admin"
                  target="__blank"
                  _stat_click_id="header_userinfo"
                >
                  帐号信息
                </a>
                <a href="" _stat_click_id="header_logout" onClick={handleClick}>
                  退出
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Header;
