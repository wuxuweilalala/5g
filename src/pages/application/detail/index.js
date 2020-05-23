import React, { useState } from "react";
import "./index.scss";

function AppliContent(props) {
  return (
    <div>
      {+props.current === 1 ? (
        <div className="appli-Container" id='appli-1'>
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>企业短信</span>
            </div>
            <ol>
              <li className="appli-content-text">
                自2008年开始提供一站式的短信投放服务，包括验证码短信、营销推广等，承载微信、微信
                支付、财付通、微众银行、富途证券等350款以上产品。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支持功能验证码、营销短信、视频彩信等多样化内容触达用户。
              </li>
              <li className="appli-content-text">
                支持接口化调用平台或通过平台批量群发的方式，实现快速触达全国三网用户。
              </li>
              <li className="appli-content-text">
                支持产品在同一时间内高并发量的短信发送活动。
              </li>
              <li className="appli-content-text">
                支持短信签名自定义，强化产品品牌概念。
              </li>
              <li className="appli-content-text">
                支持系统实时自动优选高价性比的通道触达用户，节省成本的同时提升整体短信下发质量。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                接口化服务： 汇集三网各省运营商优质资源 ，实现一点接入三网覆盖。
              </li>
              <li className="appli-content-text">
                按成功计费，不扣量：可提供真实有效的状态报告，按用户手机成功触达计费。
              </li>
              <li className="appli-content-text">
                支持高并发量：支持过微信红包，吃鸡游戏等高发并量活动发送，网关成功率99.99，用户手机状态报
                告返回成功率，功能类约98。
              </li>
              <li className="appli-content-text">
                系统监控自动化：系统实现自动监控有效报文、通过端口自动优选高质量端口自动分化。
              </li>
              <li className="appli-content-text">
                产品规范化管理保证投诉可控及短信通过率：营销短信真实回T退订，短信内容分级管理与报备，敏感
                内容自动有效屏蔽。  
              </li>
              <li className="appli-content-text">
                多样化客户需求： 通过视频彩信的方式补充短信营销需求，帮助用户通过视频，图片等富媒体内容，
                对产品建立全方位立体化的认知，激发使用兴趣。
              </li>
              <li className="appli-content-text">
                拥有最即时携号转网数据，保证发送准确。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 2 ? (
        <div className="appli-Container" id='appli-2'>
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>ID mapping</span>
            </div>
            <ol>
              <li className="appli-content-text">
                依托13亿月活设备及帐号的关系，构建统一ID，实现IDmapping。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                产品能力：支撑统一身份标识实现多ID互转，服务支持IMEI
                、IDFA、安卓ID、WIFI mac、应用宝guid、手管guid等ID的灵活互转。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">转化率较高</li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 3 ? (
        <div className="appli-Container" id='appli-3'>
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>携号转网</span>
            </div>
            <ol>
              <li className="appli-content-text">
                手机号码归属地数据库，为腾讯公司各业务提供号段查询服务。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支持运营商：移动、电信、联通三网实体运营商及全国所有虚商号段查询。
              </li>
              <li className="appli-content-text">
                查询输出结果：归属运营商信息，省份信息，地市信息
                ，虚商名称信息。
              </li>
              <li className="appli-content-text">
                支持携号转网手机号码实时查询。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                业内数据最全，更新速度最快（携号转网号码实时更新）。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 5 ? (
        <div className="appli-Container" id='appli-6'>
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>5G消息</span>
            </div>
            <ol>
              <li className="appli-content-text">
                5G消息（RCS）是手机短信升级服务，支持在短信界面使用流量发送多样化内容，包括文本，图片，语音小视频，位置等，实现品牌与用户的多维度互动。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支持富媒体消息推送：基于原生短信入口，可按手机号进行文本，图片，视频，多图文，Chatbot（聊天机器人）等多样化富媒体消息推送。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                短信升级，全面提升企业营销服务能力。
                基于原生短信入口，进行多样化富媒体消息推送，让用户可以直接在消息对聊页获取资讯，领取福利，实现高效快捷转化。
              </li>
              <li className="appli-content-text">
                直达用户，降低成本。基于运营商网络，以手机号直接进行推送，无需引到用户下载App或关注公众号。
              </li>
              <li className="appli-content-text">
                发送方认证，展示企业名称及logo，增强品牌认知，提升用户信任度。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 4 ? (
        <div className="appli-Container" id='appli-4'>
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>网关取号</span>
            </div>
            <ol>
              <li className="appli-content-text">
                新一代验证解决方案，一步校验手机号与当前SIM卡号一致性或直接获取手机号，优化注册/登录/支付等场景验证流程，有效提升拉新转化率和用户留存率。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                调用方式：支持app、浏览器调用。
              </li>
              <li className="appli-content-text">
                支持运营商：移动、电信、联通三网运营商手机号均支持。
              </li>
              <li className="appli-content-text">
                应用场景：手机一键登陆、验证本机、获取用户手机号码等场景。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">速度快（2-4秒）。</li>
              <li className="appli-content-text">
                价格低，较传统短信低20左右。
              </li>
              <li className="appli-content-text">
                操作简单用户体验感好，转化率高。
              </li>
              <li className="appli-content-text">
                安全可靠，规避短信黑名单、短信轰炸、验证码转发、短信嗅探等问题。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 9 ? (
        <div className="appli-Container">
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>定向流量</span>
            </div>
            <ol>
              <li className="appli-content-text">
                专用于限定APP内的流量包，在订购后，用户在游戏客户端内所用的流量不会从原本套餐或叠加包等内扣除。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                免流能力：在使用定向流量时（不超过限额的情况下），所用的流量不会从原本套餐流量或流量叠加包等流量包内扣除。同时提供运营商首月免费体验流量包，用于游戏促活，留存运营活动。
              </li>
              <li className="appli-content-text">
                为合作方提供每月定制化的推广活动。
              </li>
              <li className="appli-content-text">
                可为合作方提供腾讯流量等公众号和短彩信等推广资源。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                免除用户流量：使用定向流量后，用户可放心的在4G环境下使用应用，降低使用门槛。
              </li>
              <li className="appli-content-text">
                增加用户归属感和投入感：定向流量包为首月0元，用户产生订购决策较容易。在订购定向流量包后，用户产生了对游戏付出感，较容易接受首充付费。
              </li>
              <li className="appli-content-text">
                个性化流量福利活动：订购定向流量包的新用户可获得对应游戏的礼包权益与抽奖机会等，增强用户粘性与归属感，提升新游用户留存与活跃。
              </li>
              <li className="appli-content-text">
                为游戏提供专属回流活动：游戏专属回流活动，定期推送，提升游戏回流活跃。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 10 ? (
        <div className="appli-Container">
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>游戏王卡</span>
            </div>
            <ol>
              <li className="appli-content-text">
                以王卡通用套餐为基础，针对游戏用户，推出叠加游戏特权包的非标准化定制卡，用户可通过签到领取游戏月礼包、半年礼包、抽奖资格等，以及享受运营商加速包、5G体验等福利。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                产品权益：游戏王卡用户每月可领取超出叠加包价值的游戏与运营商权益。
              </li>
              <li className="appli-content-text">
                个性化页面展示：产品二期计划上线权益包或叠加包服务，为王卡老用户提供该服务。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                提升用户活跃：通过权益形式的设计（权益叠加、签到机制）、端外权益领取提醒/触达机制的建立等，以权益作为纽带，
                将王卡用户与游戏内容深度结合，提升用户在游戏的活跃度、增加用户产品粘性
                ；提升王卡订购转化。
              </li>
              <li className="appli-content-text">
                推广资源的利用最大化：接入王卡取号能力，对王卡存量用户与新用户展示不同的活动页面，
                提升王卡在游戏客户端内资源位的转化。
              </li>
              <li className="appli-content-text">
                游戏用户回流：针对低活、退游用户，结合游戏回流活动及合作资源，建立在端外进行推广回流的长效机制。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 12 ? (
        <div className="appli-Container">
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>积分兑换</span>
            </div>
            <ol>
              <li className="appli-content-text">
                数字积分统一管理及兑换平台，为企业积分兑换提供丰富的商品库及兑换场景，提升用户价值感知，为企业产品销售提供优质的销售渠道，提高产品销量。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支持通信、航空、银行等多种数字积分接入；支持会员权益、游戏道等多种数字产品接入；支持搭建完整的线上积分兑换场景。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                一方面腾讯及合作方可提供丰富的数字产品，为积分提供兑换场景，另一方面腾讯及合作方覆盖大量用户，为产品提供优质的销售渠道。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
      {+props.current === 13 ? (
        <div className="appli-Container">
          <div className="appli-content">
            <div className="appli-content-title oneLeft">
              <i className="icon-1"></i>
              <span>话费支付</span>
            </div>
            <ol>
              <li className="appli-content-text">
                汇集三大运营商话费支付能力，为合作方数字产品提供话费支付选项，覆盖话费报销等用户群体，助力产品增收。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品能力</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支持三大运营商，一点接入；多计费通道备份，灵活配置。
              </li>
            </ol>
          </div>
          <div className="appli-content">
            <div className="appli-content-title marLeft">
              <i className="line"></i>
              <span>产品优势</span>
            </div>
            <ol>
              <li className="appli-content-text">
                支撑腾讯内部QQ会员、腾讯视频、QQ音乐、王者荣耀等产品的话费支付服务，稳定的计费能力，成熟的风控系统，具备领先行业的可用性。
              </li>
            </ol>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
export default AppliContent;
