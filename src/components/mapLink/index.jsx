import React, { useEffect,useState } from "react";

function MapLink() {
    const [mapLinkList] = useState(
        [
            {
                time:'2019.12',
                detail:'腾讯5G生态计划启动'
            },
            {
                time:'2020.4',
                detail:'接入45个5G行业应用'
            },
            {
                time:'2020.5',
                detail:'接入车辆识别能力'
            },
            {
                time:'',
                detail:'敬请期待'
            },
        ]
    );
    const [activeTime,setActiveTime] = useState(0);
   /*setInterval(()=>{
        setActiveTime(activeTime+1)
       console.log(activeTime);
   },3000);*/
  return (
    <div className="mapLink">
        {
            mapLinkList.map((item,index)=>(
                <div className={['banner-link',activeTime === index ? 'active-link' : null].join(' ')}>
                    <a className="err-disable">
                        <p>{item.time}</p>
                        <p>{item.detail}</p>
                    </a>
                </div>
            ))
        }
  {/*    <div className="banner-link">
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
      </div>*/}
    </div>
  );
}
export default React.memo(MapLink) ;