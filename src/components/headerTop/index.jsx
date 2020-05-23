// blog-frontend/src/components/Home.tsx

import React from "react";
import "./index.scss";
import classnames from 'classnames';

function HeaderTop(props) {
  return (
    <div className={classnames(`header-top ${props.className ||  ''}`)}>
      {props.children}
      <div className={classnames(`header-box`, { hide: props.hide})}>
        <a href='/'><i className="header-logo"></i></a>
        <p className="title">帮助与支持 欢迎你，{props.userName}</p>
      </div>
    </div>
  );
}

export default HeaderTop;
