import React, { useEffect } from "react";

function MapLink() {
  return (
    <div className="mapLink">
      <div className="banner-link">
        <a className="err-disable">
            <p>2019.12</p>
          <p>腾讯5G生态计划启动</p>
        </a>
      </div>
      <div className="banner-link">
        <a className="err-disable">
            <p>2020.4</p>
          <p>接入45个5G行业应用</p>
        </a>
      </div>
      <div className="banner-link">
        <a className="err-disable">
            <p>2020.5</p>
          <p>接入车辆识别能力</p>
        </a>
      </div>
      <div className="banner-link">
        <a className="err-disable">
          <p>敬请期待</p>
        </a>
      </div>
    </div>
  );
}
export default MapLink;