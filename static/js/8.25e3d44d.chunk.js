(this["webpackJsonpjustlend-front"]=this["webpackJsonpjustlend-front"]||[]).push([[8],{1415:function(e,t,a){"use strict";var n,o=a(8),r=a(14),l=a(17),s=a(16),c=a(0),i=a.n(c),m=(a(63),a(21)),d=a(3),v=a(213),p=a(2),u=a.n(p),b=(a(695),a(395)),f=a.n(b),h=a(396),g=a.n(h),E=(a(1416),a(155)),w=a.n(E),N=a(154),j=a.n(N),x=Object(m.b)("network")(n=Object(m.b)("lend")(n=Object(m.b)("system")(n=Object(m.c)(n=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).close=function(){e.props.system.setData({transModalInfo:{visible:!1}})},e.state={},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props.system.transModalInfo,a=t.visible,n=t.step,o=t.txId,r=t.title,l=t.obj,s=t.title2,c=t.title3,m=t.title4;return i.a.createElement(v.a,{title:"",visible:a,closable:!0,icon:null,onCancel:function(){return e.props.system.hideTransModal()},footer:null,width:345,className:"trans-modal"},i.a.createElement("div",{className:"trans-modal-body center"},1==n?i.a.createElement(i.a.Fragment,{key:"step1"},r&&i.a.createElement("div",{className:"trans-modal-title"},u.a.get(m||r,l)),i.a.createElement("div",{className:"trans-modal-icon"},i.a.createElement("img",{src:j.a,className:"authorizeIcon"}),i.a.createElement("div",{className:"points"},i.a.createElement("span",{className:"point"}),i.a.createElement("span",{className:"point"}),i.a.createElement("span",{className:"point"}))),i.a.createElement("div",{className:"trans-modal-status trans-modal-wait-confirm"},u.a.get("deposit.signTronlink"))):null,2==n?i.a.createElement(i.a.Fragment,{key:"step2"},i.a.createElement("div",{className:"trans-modal-title"},u.a.get(s||"deposit.transactionsent",l)),i.a.createElement("div",{className:"trans-modal-icon"},i.a.createElement("img",{src:g.a,alt:"",style:{width:"40px"}})),i.a.createElement("div",{className:"trans-modal-tips trans-modal-submit-tips"},Object(d.ib)(u.a.get("deposit.explanation4"),o)),i.a.createElement("div",{className:"modal-btn border-btn",onClick:this.props.system.hideTransModal,style:{marginTop:"20px"}},u.a.get("deposit.closed"))):null,3==n?i.a.createElement(i.a.Fragment,{key:"step3"},i.a.createElement("div",{className:"trans-modal-title"},u.a.get(c||"toast.ex_failed",l)),i.a.createElement("div",{className:"trans-modal-icon"},i.a.createElement("img",{src:f.a,alt:"",style:{width:"40px"}})),i.a.createElement("div",{className:"trans-modal-status trans-modal-cancel"},u.a.get("deposit.explanation3"))):null,4==n?i.a.createElement(i.a.Fragment,{key:"step1"},r&&i.a.createElement("div",{className:"trans-modal-title"},u.a.get(m||r,l)),i.a.createElement("div",{className:"trans-modal-icon"},i.a.createElement("img",{src:w.a,className:"authorizeIcon"}),i.a.createElement("div",{className:"points"},i.a.createElement("span",{className:"point"}),i.a.createElement("span",{className:"point"}),i.a.createElement("span",{className:"point"}))),i.a.createElement("div",{className:"trans-modal-status trans-modal-wait-confirm"},u.a.get("deposit.signWalletConnect"))):null))}}]),a}(i.a.Component))||n)||n)||n)||n;t.a=x},1416:function(e,t,a){e.exports=a.p+"static/media/authorize.6f2e8e85.svg"},1418:function(e,t,a){},1426:function(e,t,a){"use strict";var n,o=a(1),r=a.n(o),l=a(4),s=a(8),c=a(14),i=a(17),m=a(16),d=a(0),v=a.n(d),p=(a(63),a(21)),u=a(3),b=a(213),f=a(2),h=a.n(f),g=a(9),E=(a(695),Object(p.b)("network")(n=Object(p.b)("lend")(n=Object(p.b)("system")(n=Object(p.c)(n=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).startInterval=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timerInterval||(e.timerInterval=setInterval(Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),3e3));case 1:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.startInterval()},e.withdrawVotes=function(){var t=Object(l.a)(r.a.mark((function t(a){var n,o,l,s,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=g.b.oldVoteLastId,o=a<=n?g.b.contract.oldWJSTAddress:g.b.contract.WJSTAddress,s={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:(l={proposalId:a,contractAddr:o}).votes,token:l.proposalId||""}},t.next=6,e.props.system.withdrawVotes(l,s);case 6:(c=t.sent)&&(console.log("withdrawVotes complete:",c),e.props.lend.setData({redeemFromVotePop:!1}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderVoting=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.props.lend.voteSourceData,o=e.state.lang;if((null===t||void 0===t?void 0:t.length)>0)return null===t||void 0===t?void 0:t.map((function(t,r){var l;return v.a.createElement("div",{className:"vote-detail-item",key:r},v.a.createElement("div",{className:"point "+("en-US"===o?"":"zh")},v.a.createElement("div",{className:"title"},"#",null===t||void 0===t?void 0:t.proposalId," ",n&&(null===(l=n[null===t||void 0===t?void 0:t.proposalId])||void 0===l?void 0:l.title)?"en-US"===o?n[t.proposalId].title.split("&&")[1]:n[t.proposalId].title.split("&&")[0]:""),v.a.createElement("div",{className:"amount"},v.a.createElement("span",null,Object(u.j)(t.allVotes,0))," JST")),a&&v.a.createElement("span",{className:"link",onClick:function(){return e.withdrawVotes(t.proposalId)}},h.a.get("vote.retrieve")))}))},e.timerInterval=null,e.state={lang:window.localStorage.getItem("lang")||h.a.options.currentLocale,visible:!1},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.timerInterval=null}},{key:"render",value:function(){var e=this,t=this.props.lend,a=t.userCanRedeemVoteList,n=t.userVotingVote,o=t.voteDetailModalVisible;return v.a.createElement(b.a,{title:h.a.get("vote.vote_details"),maskClosable:!1,visible:o,closable:!0,onCancel:function(){return e.props.lend.setData({voteDetailModalVisible:!1})},footer:null,width:400,className:"vote-detail-modal"},n&&(null===n||void 0===n?void 0:n.length)>0||a&&(null===a||void 0===a?void 0:a.length)>0?v.a.createElement("div",{className:"vote-detail-container"},n.length>0&&v.a.createElement("div",{className:"box full"},this.renderVoting(n)),a&&(null===a||void 0===a?void 0:a.length)>0&&v.a.createElement(v.a.Fragment,null,v.a.createElement("div",{className:"tip"},h.a.get("vote.can_withdraw")),v.a.createElement("div",{className:"box"},this.renderVoting(a,!0)))):v.a.createElement("div",{className:"no-data"},h.a.get("vote.no_data")))}}]),a}(v.a.Component))||n)||n)||n)||n);t.a=E},1427:function(e,t,a){"use strict";var n,o=a(1),r=a.n(o),l=a(4),s=a(8),c=a(14),i=a(17),m=a(16),d=a(0),v=a.n(d),p=(a(63),a(21)),u=a(3),b=a(213),f=a(2),h=a.n(f),g=a(9),E=(a(695),Object(p.b)("network")(n=Object(p.b)("lend")(n=Object(p.b)("system")(n=Object(p.c)(n=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).startInterval=Object(l.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timerInterval||(e.timerInterval=setInterval(Object(l.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),3e3));case 1:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.startInterval()},e.closeOldAndOpenNewModal=function(){var t=e.props.lend.voteInfo;e.props.lend.setData({voteOldWithdrawModalVisible:!1}),t&&t.success&&(null===t||void 0===t?void 0:t.surplusVotes.gt(0))&&e.props.lend.setData({withdrawPop:!0})},e.toWithdraw=function(){var t=Object(l.a)(r.a.mark((function t(a){var n,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={collateralAddress:g.b.contract.JST,jtokenAddress:g.b.contract.oldWJSTAddress,amount:Object(u.a)(a).times(g.b.tokenDefaultPrecision)._toHex()},o={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:n.collateralSymbol}},e.setState({isSuccess:!1,txID:""}),t.next=5,e.props.system.voteWithdraw(n,o);case 5:t.sent&&e.props.lend.setData({voteOldWithdrawModalVisible:!1});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.timerInterval=null,e.state={lang:window.localStorage.getItem("lang")||h.a.options.currentLocale,visible:!1},e}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.timerInterval=null}},{key:"render",value:function(){var e=this,t=this.props.lend,a=t.oldVoteInfo,n=t.voteOldWithdrawModalVisible,o=this.state.lang;return v.a.createElement(b.a,{title:h.a.get("vote.invalid_vote"),maskClosable:!1,visible:n,closable:!0,onCancel:function(){return e.closeOldAndOpenNewModal()},footer:null,width:400,className:"vote-old-withdraw-modal"},v.a.createElement("div",{className:"vote-old-withdraw-content"},v.a.createElement("div",{className:"title"},h.a.get("vote.as_jst")),v.a.createElement("div",{className:"content"},v.a.createElement("div",{className:"point"},h.a.get("vote.update_description")),v.a.createElement("div",{className:"point flex-sp"},h.a.getHTML("vote.will_receive",{amount:a&&a.success&&(null===a||void 0===a?void 0:a.surplusVotes.div(g.b.tokenDefaultPrecision).toString())}),v.a.createElement("a",{target:"vote-notice",href:"en-US"===o?g.b.voteNoticeEn:g.b.voteNoticeZn,className:"link"},h.a.get("vote.details")))),v.a.createElement("div",{className:"withdraw-btn",onClick:function(){return e.toWithdraw(a&&a.success&&(null===a||void 0===a?void 0:a.surplusVotes.div(g.b.tokenDefaultPrecision)))}},h.a.get("vote.withdraw"))))}}]),a}(v.a.Component))||n)||n)||n)||n);t.a=E},1485:function(e,t,a){},1496:function(e,t,a){"use strict";a.r(t);var n,o,r,l=a(8),s=a(14),c=a(17),i=a(16),m=a(0),d=a.n(m),v=a(21),p=a(397),u=a(398),b=a(37),f=a(1),h=a.n(f),g=a(4),E=a(43),w=a(6),N=a(7),j=a(12),x=a.n(j),O=a(111),k=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(a[n[o]]=e[n[o]])}return a},y=function(e){return m.createElement(O.a,null,(function(t){var a,n=t.getPrefixCls,o=t.direction,r=e.prefixCls,l=e.type,s=void 0===l?"horizontal":l,c=e.orientation,i=void 0===c?"center":c,d=e.className,v=e.children,p=e.dashed,u=e.plain,b=k(e,["prefixCls","type","orientation","className","children","dashed","plain"]),f=n("divider",r),h=i.length>0?"-".concat(i):i,g=!!v,E=x()(f,"".concat(f,"-").concat(s),(a={},Object(N.a)(a,"".concat(f,"-with-text"),g),Object(N.a)(a,"".concat(f,"-with-text").concat(h),g),Object(N.a)(a,"".concat(f,"-dashed"),!!p),Object(N.a)(a,"".concat(f,"-plain"),!!u),Object(N.a)(a,"".concat(f,"-rtl"),"rtl"===o),a),d);return m.createElement("div",Object(w.a)({className:E},b,{role:"separator"}),v&&m.createElement("span",{className:"".concat(f,"-inner-text")},v))}))},V=a(319),_=a(89),S=a(213),I=a(2),D=a.n(I),M=(a(1485),a(9)),P=a(3),C=a(1427),T=a(1415),F=a(1426),A=function(){return d.a.createElement("div",{className:"step-container"},d.a.createElement("div",{className:"left-steps"},Object(E.a)(Array(3).keys()).map((function(e){return e++,d.a.createElement("div",{className:"step",key:e},d.a.createElement("div",{className:"step-number"},e),d.a.createElement("div",{className:"step-text-box"},d.a.createElement("div",{className:"step-title"},D.a.get("v2.vote.step".concat(e,"_title"))),d.a.createElement("div",{className:"step-desc"},D.a.get("v2.vote.step".concat(e,"_desc")))),e<=2&&d.a.createElement("div",{className:"step-arrow"}))}))),d.a.createElement("div",{className:"right-forum"},d.a.createElement("div",{className:"forum-title"},D.a.get("v2.vote.forum_title")),d.a.createElement("span",null,d.a.createElement("a",{href:"https://forum.justlend.org",target:"_blank",className:"forum-desc"},D.a.get("v2.vote.forum_desc")),d.a.createElement("div",{className:"purple-right-arrow"}))))},W=function(e){var t=e.lang,a="en-US"===t,n="zh-TC"===t;return d.a.createElement("div",{className:"faq-container"},d.a.createElement("div",{className:"faq-header"},d.a.createElement("div",{className:"faq-title"},D.a.get("v2.vote.faq")),d.a.createElement("a",{target:"_blank",href:"https://justlendorg.zendesk.com/hc/".concat(a?"en-us":"zh-cn","/sections/360011296312"),className:"faq-more"},D.a.get("more"))),d.a.createElement(y,null),d.a.createElement("div",{className:"faq-body"},d.a.createElement("ul",null,[{url:function(e){return"https://justlendorg.zendesk.com/hc/".concat(e?"en-us":"zh-cn","/articles/360053116731")},title:function(e,t){return e?"How to redeem votes?":t?"\u5982\u4f55\u514c\u63db\u9078\u7968\uff1f":"\u5982\u4f55\u5151\u6362\u9009\u7968\uff1f"}},{url:function(e){return"https://justlendorg.zendesk.com/hc/".concat(e?"en-us":"zh-cn","/articles/360053116751")},title:function(e,t){return e?"How to vote?":t?"\u5982\u4f55\u9032\u884c\u6295\u7968\uff1f":"\u5982\u4f55\u8fdb\u884c\u6295\u7968\uff1f"}},{url:function(e){return"https://justlendorg.zendesk.com/hc/".concat(e?"en-us":"zh-cn","/articles/360052662212")},title:function(e,t){return e?"How to withdraw JST?":t?"\u5982\u4f55\u63d0\u73feJST\uff1f":"\u5982\u4f55\u63d0\u73b0JST\uff1f"}}].map((function(e,t){return d.a.createElement("li",{key:t},d.a.createElement("a",{href:e.url(a),target:"_blank"},e.title(a,n)))})))))},z=function(e){var t=e.forVotes,a=e.againstVotes,n=(t=parseInt(t))+(a=parseInt(a));return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"p-vote-bar hide-md"},d.a.createElement("div",{className:"p-for hide-md "},0===n?"0%":(t/n*100).toFixed(2)+"%"),d.a.createElement("div",{className:"p-for-bar hide-md ",style:{width:"".concat(22+t/n*128,"px")}}),d.a.createElement("div",{className:"p-against-bar hide-md ",style:{width:"".concat(22+a/n*128,"px")}}),d.a.createElement("div",{className:"p-against hide-md "},0===n?"0%":(a/n*100).toFixed(2)+"%")),d.a.createElement("div",{className:"p-vote-bar hide-lg"},d.a.createElement("div",{className:"bar-first-row hide-lg"},d.a.createElement("div",{className:"p-for"},0===n?"0%":(t/n*100).toFixed(2)+"%"),d.a.createElement("div",{className:"p-against"},0===n?"0%":(a/n*100).toFixed(2)+"%")),d.a.createElement("div",{className:"bar-second-row"},d.a.createElement("div",{className:"p-for-bar hide-lg",style:{width:"".concat(12.5+t/n*105,"px")}}),d.a.createElement("div",{className:"p-against-bar hide-lg",style:{width:"".concat(12.5+a/n*105,"px")}}))))},J=Object(v.b)("network")(n=Object(v.b)("system")(n=Object(v.b)("lend")(n=Object(v.c)(n=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(g.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return document.title="Vote - JustLend DAO",e.prev=1,n.getMountedData(),e.next=5,n.props.lend.getCurrentBlock();case 5:return t=e.sent,e.next=8,n.props.lend.getVoteList(t);case 8:a=e.sent,n.setState({dataList:a.arr}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log("getVoteList: ",e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),n.getMountedData=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.getApprove();case 3:t=e.sent,n.setState({approveStatus:t},(function(){n.props.lend.getBalanceForVote(),n.props.lend.getOldWjstBalanceForVote(),n.startInterval()})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("getVoteDataError: ",e.t0);case 10:return e.next=12,n.props.lend.getUserWithdrawInfo();case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))),n.startInterval=Object(g.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.timerInterval||(n.timerInterval=setInterval(Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getApprove();case 2:return t=e.sent,n.setState({approveStatus:t}),e.next=6,n.props.lend.getBalanceForVote();case 6:return e.next=8,n.props.lend.getOldWjstBalanceForVote();case 8:return e.next=10,n.props.lend.getUserWithdrawInfo();case 10:case"end":return e.stop()}}),e)}))),6e4));case 1:case"end":return e.stop()}}),e)}))),n.getApprove=Object(g.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={collateralAddress:M.b.contract.JST,jtokenAddress:M.b.contract.WJSTAddress,precision:M.b.tokenDefaultPrecision},e.next=4,n.props.lend.getVoteBalanceOf(t);case 4:return a=e.sent,e.abrupt("return",Object(P.a)(a).gt(0));case 8:return e.prev=8,e.t0=e.catch(0),console.log("getApprove, ",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.toggleShowProposalSectionForMobile=function(e){1===e&&n.state.showProposalSectionForMobile||(2!==e||n.state.showProposalSectionForMobile)&&n.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{showProposalSectionForMobile:!e.showProposalSectionForMobile})}))},n.openModal=function(){var e=n.props.network.isConnected,t=n.state.approveStatus;e?t?n.props.lend.setData({authorizePop:!0}):n.authorize():n.props.network.connectWallet()},n.withdrawClick=function(){var e=n.props.network.isConnected,t=n.props.lend.oldVoteInfo;e?(n.setState({exchangeVoteValue:"",withdrawValue:""}),t&&t.success&&(null===t||void 0===t?void 0:t.surplusVotes.gt(0))?n.props.lend.setData({voteOldWithdrawModalVisible:!0}):n.props.lend.setData({withdrawPop:!0})):n.props.network.connectWallet()},n.authorize=function(){n.setState({exchangeVoteValue:""}),n.props.lend.setData({exchangeVotePop:!0,authorizePop:!1})},n.toApprove=Object(g.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={collateralAddress:M.b.contract.JST,jtokenAddress:M.b.contract.WJSTAddress},{title:"deposit.confirm_approve",obj:{value:t.collateralSymbol}},n.setState({isSuccess:!1,txID:""}),e.next=5,n.props.system.approveToken(t,[["lend/hideAuthorizePop"]]);case 5:e.sent&&n.setState({approveStatus:!0},(function(){n.authorize()}));case 7:case"end":return e.stop()}}),e)}))),n.renderApprovePop=function(){return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"v-title"},D.a.get("deposit.confirm_approve")),d.a.createElement(y,null),d.a.createElement("div",{className:"vote-authorize-logo"}),d.a.createElement("div",{className:"v-desc"},D.a.get("vote.approve_text")),d.a.createElement("div",{className:"modal-btn is-valid",onClick:n.toApprove},D.a.get("vote.approve_btn")))},n.chooseMax=function(){var e=n.props.lend.voteInfo,t=Object(P.j)(e.jstBalance.div(M.b.tokenDefaultPrecision),3,{per:!0});n.setState({exchangeVoteValue:t})},n.chooseWithdrawMax=function(){var e=n.props.lend.voteInfo,t=Object(P.j)(e.surplusVotes.div(M.b.tokenDefaultPrecision),3,{per:!0});n.setState({withdrawValue:t})},n.maxRender=function(e){return 1===e?d.a.createElement("div",{className:"v-max-btn",onClick:n.chooseMax},D.a.get("vote.voteto_input_max")):2===e?d.a.createElement("div",{className:"v-max-btn",onClick:n.chooseWithdrawMax},D.a.get("vote.voteto_input_max")):void 0},n.exchangeVoteChange=function(e){var t=Object(P.U)(e.target.value,3),a=t.valid,o=t.str;a&&n.setState({exchangeVoteValue:o})},n.toDeposit=Object(g.a)(h.a.mark((function e(){var t,a,o,r,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=n.props.lend.voteInfo,a=Object(P.j)(t.jstBalance.div(M.b.tokenDefaultPrecision),3,{per:!0}),o=n.state.exchangeVoteValue,!Object(P.a)(a).lt(o)){e.next=5;break}return e.abrupt("return");case 5:return r={collateralAddress:M.b.contract.JST,jtokenAddress:M.b.contract.WJSTAddress,amount:Object(P.a)(o).times(M.b.tokenDefaultPrecision)._toHex()},l={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:r.collateralSymbol}},n.setState({isSuccess:!1,txID:""}),e.next=10,n.props.system.voteDeposit(r,l);case 10:e.sent;case 11:case"end":return e.stop()}}),e)}))),n.renderDepositPop=function(){var e,t=n.props.lend.voteInfo;t&&t.success&&(e=Object(P.j)(t.jstBalance.div(M.b.tokenDefaultPrecision),3,{per:!0}));var a=Object(P.a)(e).gte(n.state.exchangeVoteValue),o=Object(P.a)(n.state.exchangeVoteValue).gt(0),r=!a&&o;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"v-title"},D.a.get("vote.myvote_deposit")),d.a.createElement(y,null),d.a.createElement("div",{className:"tick-vote-logo"}),d.a.createElement("div",{className:"v-desc"},D.a.getHTML("v2.vote.get_vote_modal_text")),d.a.createElement("div",{className:"v-desc2"},d.a.createElement("div",{className:"v-amount"},D.a.get("vote.deposit_amount")),d.a.createElement("div",{className:"v-right"},d.a.createElement("div",{className:"v-text"},D.a.get("wallet_ballance")),t&&t.success&&d.a.createElement("div",{className:"v-balance"},Object(P.j)(t.jstBalance.div(M.b.tokenDefaultPrecision),3,{miniText:.001})," JST"),d.a.createElement("a",{className:"v-get-btn",target:"_blank",href:"".concat(M.b.sunSwap,"?lang=").concat(n.state.lang,"?tokenAddress=").concat(M.b.contract.JST,"&type=swap")},D.a.get("lend.get")),d.a.createElement("span",{className:"v-arrow"}))),d.a.createElement(V.a,{allowClear:!0,className:"vote-input ".concat(r?"invalid":""),value:n.state.exchangeVoteValue,placeholder:D.a.get("vote.convert_input_tips"),suffix:n.maxRender(1),onChange:n.exchangeVoteChange}),r&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"exceed-remain-votes"},D.a.get("tab.not_enough"))),d.a.createElement("div",{onClick:n.toDeposit,className:"modal-btn ".concat(!r&&o?"is-valid":"")},D.a.get("v2.vote.deposit_now")))},n.withdrawChange=function(e){var t=Object(P.U)(e.target.value,3),a=t.valid,o=t.str;a&&n.setState({withdrawValue:o})},n.toWithdraw=function(){var e=Object(g.a)(h.a.mark((function e(t){var a,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={collateralAddress:M.b.contract.JST,jtokenAddress:M.b.contract.WJSTAddress,amount:Object(P.a)(t).times(M.b.tokenDefaultPrecision)._toHex()},o={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:a.collateralSymbol}},n.setState({isSuccess:!1,txID:""}),e.next=5,n.props.system.voteWithdraw(a,o);case 5:e.sent;case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.withdrawSubmit=function(){var e=n.state.withdrawValue;n.toWithdraw(e)},n.renderWithdrawPop=function(){var e,t=n.props.lend.voteInfo;t&&t.success&&(e=Object(P.j)(t.surplusVotes.div(M.b.tokenDefaultPrecision),3,{miniText:.001}));var a=t&&t.success&&Object(P.j)(t.surplusVotes.div(M.b.tokenDefaultPrecision),3,{miniText:.001})||0,o=Object(P.a)(e).gte(n.state.withdrawValue),r=Object(P.a)(n.state.withdrawValue).gt(0),l=!o&&r;return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"v-title"},D.a.get("v2.vote.redeem_votes")),d.a.createElement(y,null),d.a.createElement("div",{className:"tick-vote-logo"}),d.a.createElement("div",{className:"v-desc"},D.a.getHTML("v2.vote.get_vote_modal_text")),d.a.createElement("div",{className:"v-desc2"},d.a.createElement("div",{className:"v-amount"},D.a.getHTML("v2.vote.redeem_count")),d.a.createElement("div",{className:"v-right"},d.a.createElement("div",{className:"v-text"},D.a.get("v2.vote.surplus_votes")),d.a.createElement("div",{className:"v-balance"},a))),d.a.createElement(V.a,{allowClear:!0,className:"vote-input ".concat(l?"invalid":""),value:n.state.withdrawValue,placeholder:D.a.get("vote.withdraw_input_tip"),suffix:n.maxRender(2),onChange:n.withdrawChange}),l&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"exceed-remain-votes"},D.a.get("tab.not_enough"))),d.a.createElement("div",{onClick:n.withdrawSubmit,className:"modal-btn ".concat(!l&&r?"is-valid":"")},D.a.get("v2.vote.redeem_now")))},n.hideDepositPop=function(){n.props.lend.setData({authorizePop:!1,exchangeVotePop:!1,withdrawPop:!1})},n.renderMobileMenu=function(){var e=n.state,t=(e.page,e.dataList),a=e.showProposalSectionForMobile,o=(e.lang,null===t||void 0===t?void 0:t[0]);return d.a.createElement("div",{className:"mobile-menu"},d.a.createElement("span",{onClick:function(){return n.toggleShowProposalSectionForMobile(1)},className:a?"menu-item current":"menu-item"},d.a.createElement("div",{className:"p-left"},d.a.createElement("div",{className:"p-title"},D.a.get("v2.vote.proposal")),o&&d.a.createElement("div",{className:"p-count"},t.length))),d.a.createElement("span",{onClick:function(){return n.toggleShowProposalSectionForMobile(2)},className:a?"menu-item":"menu-item current"},D.a.get("v2.vote.my_vote_header")))},n.renderMyVote=function(){var e=n.props.lend,t=e.voteInfo,a=e.oldVoteInfo,o=t&&t.success&&a&&a.success&&Object(P.j)(t.castVote.plus(a.castVote).div(M.b.tokenDefaultPrecision),3,{miniText:.001})||0,r=t&&t.success&&a&&a.success&&Object(P.j)(t.totalVote.plus(a.totalVote).div(M.b.tokenDefaultPrecision),3,{miniText:.001})||0,l=t&&t.success&&Object(P.j)(t.surplusVotes.div(M.b.tokenDefaultPrecision),3,{miniText:.001})||0,s=Object(P.a)(o).gt(0)||Object(P.a)(r).gt(0)||Object(P.a)(l).gt(0);return d.a.createElement("div",{className:"my-vote-container"},n.renderMobileMenu(),d.a.createElement("div",{className:"my-vote-header"},D.a.get("v2.vote.my_vote_header")),d.a.createElement(y,null),d.a.createElement("div",{className:"space-60"}),n.props.network.isConnected?s?d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"total-votes"},D.a.get("vote.myvote_total"),d.a.createElement(_.a,{title:D.a.get("vote.myvote_help"),arrowPointAtCenter:!0,placement:"topLeft",trigger:["click","hover"]},d.a.createElement("span",{className:"tooltip-icon"}))),d.a.createElement("div",{className:"total-votes-amount"},r),d.a.createElement("div",{className:"vote-info-box"},d.a.createElement("div",{className:"vote-info-row"},d.a.createElement("div",{className:"vote-info-text"},D.a.get("v2.vote.surplus")),d.a.createElement("div",{className:"vote-info-amount"},l)),d.a.createElement("div",{className:"vote-info-row"},d.a.createElement("div",{className:"vote-info-text"},D.a.get("v2.vote.recycle_votes")),d.a.createElement("div",{className:"vote-info-amount"})),d.a.createElement("div",{className:"vote-info-row"},d.a.createElement("div",{className:"vote-info-text"},D.a.get("v2.vote.cast_votes")),d.a.createElement("div",{className:"vote-info-amount"},o))),d.a.createElement("div",{className:"my-vote-btn-wrapper2"},d.a.createElement("div",{className:"my-vote-btn2",onClick:function(){return n.withdrawClick()}},D.a.get("v2.vote.redeem_votes")),d.a.createElement("div",{className:"my-vote-btn",onClick:function(){return n.openModal()}},D.a.get("vote.myvote_deposit")))):d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"tick-vote-logo"}),d.a.createElement("div",{className:"my-vote-text"},D.a.get("v2.vote.get_vote")),d.a.createElement("div",{className:"my-vote-btn-wrapper"},d.a.createElement("div",{className:"my-vote-btn",onClick:function(){return n.openModal()}},D.a.get("vote.myvote_deposit")))):d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"unconnected-wallet-logo"}),d.a.createElement("div",{className:"my-vote-text"},D.a.get("v2.vote.unconnected_wallet")),d.a.createElement("div",{className:"my-vote-btn-wrapper"},d.a.createElement("div",{className:"my-vote-btn",onClick:function(){return n.props.network.connectWalletV2()}},D.a.get("navi.wallet_linkbtn")))))},n.state={dataList:[],page:0,showProposalSectionForMobile:!0,approveStatus:null,exchangeVoteValue:"",withdrawValue:"",isSuccess:!1,txID:"",lang:window.localStorage.getItem("lang")||D.a.options.currentLocale},n}return Object(s.a)(a,[{key:"render",value:function(){var e,t,a=this,n=this.state,o=n.page,r=n.dataList,l=n.showProposalSectionForMobile,s=n.lang,c=null===r||void 0===r?void 0:r[0],i=1===(null===c||void 0===c?void 0:c.state)||-1===(null===c||void 0===c?void 0:c.state),m=r.slice(i?1:0,20*(o+1)),v="en-US"===s,p=this.props.lend,u=p.exchangeVotePop,f=p.authorizePop,h=p.withdrawPop,g=p.theme,E=f||u||h;return d.a.createElement("div",{className:"vote-container ".concat(g)},d.a.createElement("div",{className:"common-flex"},d.a.createElement("div",{className:"common-title"},D.a.get("vote.title")),d.a.createElement("div",{className:"common-desc"},D.a.get("vote.mywallet_help"))),d.a.createElement(A,null),d.a.createElement("div",{className:"body-container"},d.a.createElement("div",{className:"proposal-container ".concat(l?"":"hide-md")},this.renderMobileMenu(),d.a.createElement("div",{className:"proposal-header"},d.a.createElement("div",{className:"proposal-left"},d.a.createElement("div",{className:"proposal-title"},D.a.get("v2.vote.proposal")),c&&d.a.createElement("div",{className:"proposal-count"},r.length)),c&&d.a.createElement("div",{className:"proposal-right"},d.a.createElement("span",{className:"bell"}),d.a.createElement("div",{className:"new-proposal"},D.a.get("v2.vote.new_proposal_submitted")),d.a.createElement("a",{href:M.b.tronscanUrl+"/address/"+(null===r||void 0===r||null===(e=r[0])||void 0===e?void 0:e.proposer),target:"_blank",className:"new-proposal-txid"},Object(P.f)(null===r||void 0===r||null===(t=r[0])||void 0===t?void 0:t.proposer,6,6)))),d.a.createElement(y,{className:" ".concat(l?"hide-md":"")}),1===(null===c||void 0===c?void 0:c.state)||-1===(null===c||void 0===c?void 0:c.state)?d.a.createElement("div",{className:"active-proposal"},d.a.createElement("div",{className:"corner-tag"},c.intl),d.a.createElement("div",{className:"p-body"},d.a.createElement("div",{className:"p-first-row"},d.a.createElement("div",{className:"p-title"},c.title.split("&&")[[v?1:0]]),d.a.createElement("a",{href:"/#/voteDetail?proposalId=".concat(null===c||void 0===c?void 0:c.proposalId),className:"vote-btn hide-md"},D.a.get("v2.vote.join_vote"))),d.a.createElement("div",{className:"p-second-row"},d.a.createElement("div",{className:"p-desc"},d.a.createElement("div",{className:"p-id"},c.id),d.a.createElement("div",{className:"p-countdown-text"},D.a.get("v2.vote.countdown_text")),d.a.createElement("div",{className:"p-countdown-date"},function(e){var t=(new Date).getTime();if(t>=e)return null;var a=e-t,n=Math.floor(a/864e5),o=Math.floor(a%864e5/36e5),r=Math.floor(a%36e5/6e4);return"".concat(n>0?"".concat(n,"d:"):"").concat(o>0?"".concat(o,"h:"):"").concat(r,"m")}(c.endTime))),d.a.createElement("div",{className:"p-right-mobile"},d.a.createElement(z,{forVotes:c.forVotes,againstVotes:c.againstVotes}),d.a.createElement("a",{href:"/#/voteDetail?proposalId=".concat(null===c||void 0===c?void 0:c.proposalId),className:"vote-btn hide-lg"},D.a.get("v2.vote.join_vote")))))):d.a.createElement("div",{className:"no-new-proposal"},d.a.createElement("div",{className:"proposal-title"},D.a.get("v2.vote.no_new_proposal_title")),d.a.createElement("span",null,d.a.createElement("a",{href:"https://forum.justlend.org",className:"proposal-desc"},D.a.get("v2.vote.no_new_proposal_desc")),d.a.createElement("span",{className:"purple-right-arrow"}))),d.a.createElement(y,{style:{padding:"0 30px"}},D.a.get("v2.vote.previous_voting")),d.a.createElement("div",{className:"past-proposal-list"},c&&m.map((function(e){return d.a.createElement("div",{className:"p-item",key:e.id},d.a.createElement("div",{className:"first-row"},d.a.createElement("a",{href:"/#/voteDetail?proposalId=".concat(e.proposalId),className:"p-title"},e.title.split("&&")[v?1:0],d.a.createElement("span",{className:"arrow-right"})),d.a.createElement("div",{className:e.state>=4?"p-green-tick":"p-red-exclamation"})),d.a.createElement("div",{className:"second-row"},d.a.createElement("div",{className:"p-left"},d.a.createElement("div",{className:"p-id"},e.id),d.a.createElement("div",{className:"p-date"},new Date(e.endTime).format("yyyy-MM-dd h:m:s"))),d.a.createElement("div",{className:"p-status"},e.intl)))}))),r.length>20&&m.length<r.length&&d.a.createElement(d.a.Fragment,null,d.a.createElement(y,null),d.a.createElement("div",{className:"load-more",onClick:function(){return a.setState((function(e){return Object(b.a)(Object(b.a)({},e),{},{page:e.page+1})}))}},D.a.get("more")))),d.a.createElement("div",{className:"right-panel ".concat(l?"hide-md":"")},this.renderMyVote(),d.a.createElement(W,{lang:s}))),d.a.createElement(S.a,{visible:E,width:400,footer:null,className:"vote-modal ".concat(g),onCancel:function(){return a.hideDepositPop()}},f?this.renderApprovePop():u?this.renderDepositPop():this.renderWithdrawPop()),d.a.createElement(T.a,null),d.a.createElement(F.a,null),d.a.createElement(C.a,null))}}]),a}(d.a.Component))||n)||n)||n)||n,L=(a(1418),a(699),Object(v.b)("network")(o=Object(v.b)("lend")(o=Object(v.b)("system")(o=Object(v.c)(o=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.lend.theme;return d.a.createElement("div",{className:"j-wrapper "+e},d.a.createElement(u.a,null),d.a.createElement("div",{className:"j-container j-home"},d.a.createElement(J,null)),d.a.createElement(p.a,null))}}]),a}(d.a.Component))||o)||o)||o)||o),U=Object(v.b)("network")(r=Object(v.c)(r=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.network.setData({routeName:"vote"})}},{key:"render",value:function(){return d.a.createElement(L,null)}}]),a}(d.a.Component))||r)||r;t.default=U}}]);