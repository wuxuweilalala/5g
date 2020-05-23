export const handleIp = (ipObj) => {
    try {
        var userAgent = navigator.userAgent;
        var isEdge = userAgent.indexOf("Edge") > -1;
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
        if(!isEdge && !isIE) {
          window.RTCPeerConnection =
          window.RTCPeerConnection ||
          window.mozRTCPeerConnection ||
          window.webkitRTCPeerConnection; //compatibility for Firefox and chrome
        var pc = new RTCPeerConnection({ iceServers: [] }),
          noop = function () {};
        pc.createDataChannel(""); //create a bogus data channel
        pc.createOffer(pc.setLocalDescription.bind(pc), noop); // create offer and set local description
        pc.onicecandidate = function (ice) {
            try {
                if (ice && ice.candidate && ice.candidate.candidate) {
                    ipObj.value = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(
                      ice.candidate.candidate
                    )[1];
                    pc.onicecandidate = noop;
                  }
            } catch (error) {
                console.log('error', error);
            }
        };
        }
      } catch (error) {
        console.log('err', error);
      }
  }

  export const handleIsIe = () => {

    var userAgent = navigator.userAgent;
    var isEdge = userAgent.indexOf("Edge") > -1;
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera;
    if(isEdge || isIE) {
        return true;
    } else {
        return false;
    }
  }

  export const IEVersion = () => {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if(isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
         if(fIEVersion <= 9) {
            return alert('本网站暂不支持IE9以下浏览器，请更换其他浏览器再进行访问！');
        }
    } else if(isEdge) {
        return 'edge';//edge
    } else if(isIE11) {
        return 11; //IE11  
    }else{
        return -1;//不是ie浏览器
    }
}