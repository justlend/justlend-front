(this["webpackJsonpjustlend-front"]=this["webpackJsonpjustlend-front"]||[]).push([[1],{605:function(e,a,t){"use strict";var l,n=t(5),o=t(6),i=t(13),s=t(12),c=t(0),r=t.n(c),m=t(149),g=t(24),p=t.n(g),d=t(129),u=t(153),E=t(823),v=t(822),h=t(566),b=t(1172),w=t(564),N=t(11),f=(t(669),t(8)),k=t(670),C=t.n(k),_=t(671),x=t.n(_),A=t(672),y=t.n(A),P=t(646),S=t.n(P),M=t(673),j=t.n(M),L=t(674),z=t.n(L),D=t(675),O=t.n(D),T=t(676),U=t.n(T),W=t(677),B=t.n(W),I=t(678),V=t.n(I),F=E.a.Option,q=(v.a.SubMenu,Object(d.b)("network")(l=Object(d.c)(l=function(e){Object(i.a)(t,e);var a=Object(s.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).setLanguage=function(e){l.props.network.setData({lang:e}),l.setState({lang:e}),window.localStorage.setItem("lang",e),window.location.search="?lang=".concat(e)},l.handleCancel=function(){l.props.network.setData({loginModalVisible:!1})},l.goBack=function(){l.props.network.setData({loginModalStep:1})},l.showLoginModal=function(e){l.props.network.connectWallet()},l.loginWallet=function(e,a){l.props.network.setData({loginModalStep:2}),l.props.network.initTronLinkWallet((function(){l.props.network.isConnected&&(l.props.network.setData({loginModalStep:2}),l.props.mountedActions&&l.props.mountedActions())}),(function(){l.props.unmountedActions&&l.props.unmountedActions()}))},l.showAccountInfo=function(){l.setState({accountModal:!0})},l.handleCancelAccount=function(){l.setState({accountModal:!1})},l.hideSecondPop=function(){l.props.network.setData({noSupport:!1}),l.onClose()},l.openDrawer=function(){l.setState({drawerVisible:!0})},l.onClose=function(){l.setState({drawerVisible:!1})},l.renderMobileHeader=function(){var e=l.props.network,a=e.isConnected,t=e.defaultAccount,n=e.routeName,o=l.state,i=o.lang,s=o.mobile;return r.a.createElement("div",{className:"menu-content wallet-content"},r.a.createElement("div",{className:""},r.a.createElement("div",{className:"mobile-drawer-logo"},r.a.createElement("img",{src:V.a})),r.a.createElement("div",{className:"connect-wallet"},a?r.a.createElement("div",{className:s?"account-basic-info-m":"account-basic-info"},r.a.createElement("div",{onClick:function(){l.showAccountInfo()},className:"mobile-address-text pointer"},r.a.createElement("div",{className:"flex-between"},r.a.createElement("img",{src:C.a,alt:""}),r.a.createElement("span",null,Object(N.f)(t,4,4))))):r.a.createElement("div",{onClick:function(e){l.showLoginModal(e)},className:"mobile-address-text pointer"},r.a.createElement("div",{className:"flex-between"},r.a.createElement("img",{src:x.a,alt:""}),r.a.createElement("span",null,p.a.get("navi.wallet_linkbtn"))))),r.a.createElement(u.b,{className:"mobile-link logos big-logo index-logo",to:"/home"},r.a.createElement("span",{id:"home"===n?"active-bg":""}),r.a.createElement("span",{id:"home"===n?"m-active-menu-text":""},p.a.get("navi.index_btn"))),r.a.createElement(u.b,{className:"mobile-link logos big-logo market-logo",to:"/market"},r.a.createElement("span",{id:"market"===n?"active-bg":""}),r.a.createElement("span",{id:"market"===n?"m-active-menu-text":""},p.a.get("navi.market_btn"))),r.a.createElement(u.b,{className:"mobile-link logos big-logo liquidity-logo",to:"/miningPool"},r.a.createElement("span",{id:"miningPool"===n?"active-bg":""}),r.a.createElement("span",null,p.a.get("navi.liquidity"))),r.a.createElement(u.b,{className:"mobile-link logos big-logo vote-logo",to:"/vote"},r.a.createElement("span",{id:"vote"===n?"active-bg":""}),r.a.createElement("span",{id:"vote"===n?"m-active-menu-text":""},p.a.get("navi.vote_btn")))),r.a.createElement("div",{className:"horizontal-line menu"}),r.a.createElement("div",null,r.a.createElement("span",{className:"mobile-link mobile-language-link logos small-logo language-logo new-menu"+("zh-CN"===i?" ch-logo":"")},r.a.createElement(E.a,{defaultValue:i,style:{width:120},onChange:l.setLanguage,dropdownClassName:"lang-select"},r.a.createElement(F,{value:"en-US"},"English"),r.a.createElement(F,{value:"zh-TC"},"\u7e41\u4f53\u4e2d\u6587"),r.a.createElement(F,{value:"zh-CN"},"\u7b80\u4f53\u4e2d\u6587"))),r.a.createElement("a",{className:"mobile-link logos small-logo white-logo",href:"en-US"===i?f.a.whitePaperEn:"zh-CN"===i?f.a.whitePaperCn:f.a.whitePaperTc,target:"whitePaper"},r.a.createElement("span",null),r.a.createElement("span",{className:"fs14"},p.a.get("navi.white_paper"))),r.a.createElement("a",{className:"mobile-link logos small-logo audit-logo",href:f.a.auditEn,target:"audit"},r.a.createElement("span",null),r.a.createElement("span",null,p.a.get("navi.audit"))),r.a.createElement("a",{className:"mobile-link logos small-logo github-logo",href:f.a.github,target:"github"},r.a.createElement("span",null),r.a.createElement("span",null,p.a.get("navi.github"))),r.a.createElement("a",{className:"mobile-link logos small-logo help-logo",href:"en-US"===i?f.a.helpEn:f.a.helpCn,target:"report"},r.a.createElement("span",null),r.a.createElement("span",null,p.a.get("navi.help"))),r.a.createElement("div",{className:"mobile-drawer-footer"},r.a.createElement("a",{className:"mobile-link footer-logo",href:f.a.twitter,target:"twitter"},r.a.createElement("span",{className:"mobile-twitter-logo"}),r.a.createElement("span",null,p.a.get("navi.twitter"))),r.a.createElement("a",{className:"mobile-link footer-logo",href:f.a.telegram,target:"telegram"},r.a.createElement("span",{className:"mobile-telegram-logo"}),r.a.createElement("span",null,p.a.get("navi.telegram"))))))},l.setWidth=function(){l.props.network.changeMenuWidth()},l.state={lang:window.localStorage.getItem("lang")||p.a.options.currentLocale,visible:!1,step:1,accountModal:!1,drawerVisible:!1,mobile:Object(m.a)(window.navigator).any},l}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.instantActions&&this.props.instantActions(),this.props.network.isConnected?this.props.mountedActions&&this.props.mountedActions():this.props.network.initTronLinkWallet((function(){e.props.mountedActions&&e.props.mountedActions()}),(function(){e.props.unmountedActions&&e.props.unmountedActions()}),!1),this.props.network.listenTronLink()}},{key:"render",value:function(){var e=this,a=this.state,t=a.accountModal,l=a.lang,n=a.drawerVisible,o=a.mobile,i=this.props.network,s=i.isConnected,c=i.defaultAccount,m=i.defaultSelectedKeys,g=i.loginModalVisible,d=i.loginModalStep,v=i.routeName,k=i.menuFlag;return r.a.createElement(r.a.Fragment,null,o?r.a.createElement("div",{className:"mobile-header"},r.a.createElement("div",{className:"flex-between"},r.a.createElement("div",{className:"mobile-logo flex-between"},r.a.createElement("span",null)),r.a.createElement("div",{className:"mobile-category",onClick:function(a){e.openDrawer()}})),r.a.createElement(b.a,{title:null,placement:"right",className:"m-menu-drawer mobile-menu-drawer",closable:!0,onClose:this.onClose,visible:n,closeIcon:r.a.createElement("img",{src:S.a,alt:"close",className:"closeIconMobile"})},this.renderMobileHeader())):r.a.createElement("div",{className:"header-container "+(k?"":"minWid"),id:"language-area"},r.a.createElement("div",{className:"menu-scroll-frame"},r.a.createElement("div",{className:"menu-scroll"},r.a.createElement("div",{className:"logos header-logos"},r.a.createElement("span",{className:"header-text"},r.a.createElement("span",null))),r.a.createElement("div",{className:"menu-content"},r.a.createElement("div",{className:"features"},r.a.createElement("div",{className:"connect-wallet"},s?r.a.createElement("div",{className:o?"account-basic-info-m":"account-basic-info"},r.a.createElement("div",{onClick:function(){e.showAccountInfo()},className:"address-text pointer"},r.a.createElement("img",{src:C.a,alt:""}),r.a.createElement("span",{className:"addr-span"},Object(N.f)(c,4,4)))):r.a.createElement("div",{onClick:function(a){e.showLoginModal(a)},className:"address-text pointer"},r.a.createElement("img",{src:x.a,alt:""}),r.a.createElement("span",{className:"addr-span"},p.a.get("navi.wallet_linkbtn")))),r.a.createElement("div",{className:"horizontal-line menu"}),r.a.createElement(u.b,{className:"logos big-logo index-logo",to:"/home"},k?r.a.createElement("span",{id:"home"===v?"active-bg":""}):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.index_btn"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",{id:"home"===v?"active-bg":""})),r.a.createElement("span",{id:"home"===v?"active-menu-text":"",title:p.a.get("navi.index_btn")},p.a.get("navi.index_btn"))),r.a.createElement(u.b,{className:"logos big-logo market-logo",to:"/market"},k?r.a.createElement("span",{id:"market"===v?"active-bg":""}):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.market_btn"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",{id:"market"===v?"active-bg":""})),r.a.createElement("span",{id:"market"===v?"active-menu-text":"",title:p.a.get("navi.market_btn")},p.a.get("navi.market_btn"))),r.a.createElement(u.b,{className:"logos big-logo liquidity-logo",to:"/miningPool"},k?r.a.createElement("span",{id:"miningPool"===v?"active-bg":""}):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.liquidity"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",{id:"miningPool"===v?"active-bg":""})),r.a.createElement("span",{id:"miningPool"===v?"active-menu-text":"",title:p.a.get("navi.liquidity")},p.a.get("navi.liquidity"))),r.a.createElement(u.b,{className:"logos big-logo vote-logo",to:"/vote"},k?r.a.createElement("span",{id:"vote"===v?"active-bg":""}):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.vote_btn"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",{id:"vote"===v?"active-bg":""})),r.a.createElement("span",{id:"vote"===v?"active-menu-text":"",title:p.a.get("navi.vote_btn")},p.a.get("navi.vote_btn")))),r.a.createElement("div",{className:"horizontal-line menu"}),r.a.createElement("div",{className:"links"},r.a.createElement("span",{className:"lg-mobile logos small-logo language-logo new-menu"+(["zh-CN","zh-TC"].includes(l)?" ch-logo":"")},r.a.createElement(E.a,{defaultValue:l,style:{width:120},onChange:this.setLanguage,dropdownClassName:"lang-select",getPopupContainer:function(){return document.getElementById("language-area")}},r.a.createElement(F,{value:"en-US"},"English"),r.a.createElement(F,{value:"zh-TC"},"\u7e41\u4f53\u4e2d\u6587"),r.a.createElement(F,{value:"zh-CN"},"\u7b80\u4f53\u4e2d\u6587"))),r.a.createElement("a",{className:"logos small-logo white-logo",href:"en-US"===l?f.a.whitePaperEn:"zh-CN"===l?f.a.whitePaperCn:f.a.whitePaperTc,target:"whitePaper"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.white_paper"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.white_paper"))),r.a.createElement("a",{className:"logos small-logo audit-logo",href:f.a.auditEn,target:"audit"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.audit"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.audit"))),r.a.createElement("a",{className:"logos small-logo github-logo",href:f.a.github,target:"github"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.github"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.github"))),r.a.createElement("a",{className:"logos small-logo help-logo",href:"en-US"===l?f.a.helpEn:f.a.helpCn,target:"report"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.help"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.help"))))))),r.a.createElement("div",{className:"menu-footer"},r.a.createElement("a",{className:"logos mini-logo twitter-logo",href:f.a.twitter,target:"twitter"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.twitter"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.twitter"))),r.a.createElement("a",{className:"logos mini-logo telegram-logo",href:f.a.telegram,target:"telegram"},k?r.a.createElement("span",null):r.a.createElement(h.a,{className:"logos-tooltip",overlayClassName:"logos-tooltip-dropdown",title:p.a.get("navi.telegram"),placement:"right",arrowPointAtCenter:"center"},r.a.createElement("span",null)),r.a.createElement("span",null,p.a.get("navi.telegram"))),r.a.createElement("div",{className:"arrow",onClick:function(){return e.setWidth()}},r.a.createElement("img",{src:k?U.a:B.a})))),r.a.createElement(w.a,{title:p.a.get("navi.wallet_linkbtn"),visible:g,onCancel:this.handleCancel,footer:null,className:"login-modal custom-modal",width:320},1===d?r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("div",{className:"mt20 fs12 c-5A5E89"},p.a.get("wallet.use_justlend")),r.a.createElement("div",{className:"wallet-list"},r.a.createElement("div",{className:"wallet-item",onClick:function(a){e.loginWallet(a,1)}},r.a.createElement("span",null,r.a.createElement("img",{src:j.a,className:"tronlink-logo",alt:""})),r.a.createElement("div",null,r.a.createElement("span",{className:"wallet-txt"},p.a.get("login_modal.tronlink")),r.a.createElement("img",{src:O.a,className:"tronlink-right-arrow-logo",alt:""})))),r.a.createElement("div",{className:"tronlink-tips"},r.a.createElement("span",null,p.a.get("wallet.accept_tips")," "),r.a.createElement("a",{href:"".concat(f.a.fileLink,"JustLend_Terms_of_Use_").concat("en-US"===l?"en":"zh-CN"===l?"cn":"tc",".pdf"),target:"walletService"},p.a.get("wallet.service")),"\xa0",r.a.createElement("a",{href:"".concat(f.a.fileLink,"JustLend_Privacy_Policy_").concat("en-US"===l?"en":"zh-CN"===l?"cn":"tc",".pdf"),target:"walletPrivacy"},p.a.get("wallet.privacy")))):r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("div",{className:"mt20 fs12 c-5A5E89"},p.a.get("wallet.authorize_justlend")),r.a.createElement("div",{className:"wallet-list"},r.a.createElement("div",{className:"wallet-item flex-justify-center"},r.a.createElement("div",{className:"points"},r.a.createElement("span",{className:"point"}),r.a.createElement("span",{className:"point"}),r.a.createElement("span",{className:"point"})))),r.a.createElement("div",{className:"tronlink-tips"},r.a.createElement("span",null,p.a.get("wallet.no_wallet")," "),r.a.createElement("a",{href:"https://chrome.google.com/webstore/detail/tronlink%EF%BC%88%E6%B3%A2%E5%AE%9D%E9%92%B1%E5%8C%85%EF%BC%89/ibnejdfjmmkpcnlpebklmnkoeoihofec"},p.a.get("wallet.click_to_get"))))),r.a.createElement(w.a,{title:p.a.get("account_modal.account"),footer:null,onCancel:this.handleCancelAccount,className:"login-modal custom-modal",visible:t,style:"1"===m,width:320},r.a.createElement("div",null,r.a.createElement("img",{className:"mb16",src:z.a}),r.a.createElement("div",{className:"address-con"},r.a.createElement("div",{className:"tip-text mb16 fs12 c-5A5E89"},p.a.get("account_modal.connect_with_tronlink")),r.a.createElement("div",{className:"address-tex mb16"},r.a.createElement("div",{className:"c-0F134F fs12"},c),r.a.createElement("div",{className:"pointer c-3D56D6 fs12",title:c,id:"copySpan",onClick:function(e){Object(N.e)(e,"","copySpan")}},p.a.get("account_modal.copy")))))))}}]),t}(r.a.Component))||l)||l);a.a=q},646:function(e,a,t){e.exports=t.p+"static/media/closeBlack.a968c3b4.svg"},669:function(e,a,t){},670:function(e,a,t){e.exports=t.p+"static/media/walletSuccess.abb8324e.svg"},671:function(e,a,t){e.exports=t.p+"static/media/walletFail.ce8b20dd.svg"},672:function(e,a,t){e.exports=t.p+"static/media/mainLogo.2a33100e.svg"},673:function(e,a,t){e.exports=t.p+"static/media/tronlinkLogo.5b031fbe.svg"},674:function(e,a,t){e.exports=t.p+"static/media/tronlinkBlue.a0d1fdfc.svg"},675:function(e,a,t){e.exports=t.p+"static/media/tronlinkRightArrow.6021c8fd.svg"},676:function(e,a,t){e.exports=t.p+"static/media/menuLeft.32868c37.svg"},677:function(e,a,t){e.exports=t.p+"static/media/menuRight.67fa27b7.svg"},678:function(e,a,t){e.exports=t.p+"static/media/justLend.7ad1f086.svg"}}]);