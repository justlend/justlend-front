(this["webpackJsonpjustlend-front"]=this["webpackJsonpjustlend-front"]||[]).push([[1],{1542:function(e,a,t){"use strict";var n,l,r,c,s,o=t(8),i=t(13),m=t(17),d=t(18),u=t(1567),p=t(0),g=t.n(p),b=t(1568),v=(t(2),b.a.div(n||(n=Object(u.a)(["\n  position: relative;\n  width: 54px;\n  height: 27px;\n  border-radius: 11px;\n  cursor: pointer;\n  display: inline-block;\n  // background-color: #4f565b;\n  -webkit-transition: background-color 0.2s ease-in-out;\n  transition: background-color 0.2s ease-in-out;\n  line-height: 1;\n  font-size: 14px;\n  margin-top: 3px;\n"]))),b.a.div(l||(l=Object(u.a)(["\n  background-color: #3d56d6;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 16px;\n  padding: 0 3px;\n"]))),b.a.span(r||(r=Object(u.a)(["\n  width: 22px;\n  height: ",";\n  border-radius: 50%;\n  background: #fff;\n"])),(function(e){return"en-US"===e.lang?"60%":"80%"})),b.a.span(c||(c=Object(u.a)(["\n  color: #fff;\n  margin: 0 6px;\n  font-size: 12px;\n"]))),b.a.div(s||(s=Object(u.a)(["\n  background-color: #4f565b;\n  height: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 16px;\n  color: #bababa;\n  padding: 0 3px;\n"]))),function(e){Object(m.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(o.a)(this,t),(e=a.call(this)).onClick=function(a){a.stopPropagation(),e.props.onClick&&e.props.onClick()},e.state={},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=e.on,t=void 0!==a&&a;e.lang;return g.a.createElement("div",{className:"new-switch"+(t?" switch-on":""),onClick:this.onClick},g.a.createElement("span",{className:"switch-line"}),g.a.createElement("span",{className:"switch-circle"}))}}]),t}(g.a.Component));a.a=v},1543:function(e,a,t){"use strict";var n,l=t(1),r=t.n(l),c=t(4),s=t(8),o=t(13),i=t(17),m=t(18),d=t(0),u=t.n(d),p=t(58),g=t(24),b=t(3),v=t(275),w=t(243),f=t(102),j=t(79),k=t(2),E=t.n(k),h=t(9),N=(t(457),t(451),t(1538),Object(g.b)("network")(n=Object(g.b)("lend")(n=Object(g.b)("system")(n=Object(g.c)(n=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).renderRewardList=function(){var a=e.props.lend,t=a.defaultValue,n=a.multiRewardData,l=e.state,r=l.approving,c=l.lang,s=Object.keys(n).reverse();return u.a.createElement(v.a.Group,{disabled:r,defaultValue:t,onChange:e.onChange,value:t},s.map((function(e){return u.a.createElement("div",{className:"j-reward-item"+(t.length>=h.b.rewardNum&&!t.includes(e)||r?" j-reward-item-disabled":""),key:e},u.a.createElement(v.a,{className:"j-checkbox",value:e,disabled:t.length>=h.b.rewardNum&&!t.includes(e)},E.a.get("v2.rewards.mining_rewards"),"en-US"===c?" ":" - ",E.a.getHTML("v2.rewards.num",{value:e}))," ",u.a.createElement("div",{className:"tar"},u.a.createElement("span",{className:"j-value"},Object(b.j)(Object(b.a)(parseInt(n[e].amount)).div(h.b.tokenDefaultPrecision),6)," "),u.a.createElement("span",{className:"j-reward-unit"}," USDD")))})))},e.onChange=function(a){var t=null===a||void 0===a?void 0:a.length;t>h.b.rewardNum||(e.props.lend.filterReward(a),t===h.b.rewardNum?e.setState({checkAll:!0}):t<h.b.rewardNum&&e.setState({checkAll:!1}))},e.onCheckAllChange=function(a){var t=a.target.checked;if(t){var n=e.props.lend.multiRewardData;e.props.lend.filterReward(Object.keys(n)),gtag("event","click",{event_category:"PC_V1.5",event_label:"select_all_reward"})}else e.props.lend.setData({defaultValue:[],choosedTotalReward:0}),gtag("event","click",{event_category:"PC_V1.5",event_label:"unselect_all_reward"});e.setState({checkAll:t})},e.getReward=Object(c.a)(r.a.mark((function a(){var t,n,l,c,s,o;return r.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e.props.system.clearRejectError(),gtag("event","click",{event_category:"PC_V1.5",event_label:"claim_confirm"}),t=e.props.lend,n=t.multiRewardData,l=t.defaultValue,c=t.choosedTotalReward,s={title:"lend.withdraw",title2:"deposit.transactionsent",title3:"v2.transaction_confirm_fail",title4:"deposit.confirm_transaction",obj:{value:Object(b.j)(c,6),token:"USDD"},trnasType:"reward"},e.setState({approving:!0}),o=[],l.map((function(e){o.push([n[e].merkleIndex,n[e].index,n[e].amount,n[e].proof])})),a.next=9,e.props.system.getMultiReward([o],s);case 9:a.sent&&(e.props.network.setData({rewardVisible:!1}),e.props.lend.collapseInit(),e.props.lend.filterReward(),setTimeout((function(){e.props.lend.getMultiReward()}),5e3)),e.setState({approving:!1}),console.log(1111);case 13:case"end":return a.stop()}}),a)}))),e.timerInterval=null,e.state={mobile:Object(p.a)(window.navigator).any,lang:window.localStorage.getItem("lang")||E.a.options.currentLocale,approving:!1,indeterminate:!0,checkAll:!0},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.mobile,n=a.lang,l=a.checkAll,r=(a.data,a.approving),c=this.props.lend,s=(c.theme,c.multiRewardData),o=c.defaultValue,i=c.choosedTotalReward,m=c.totalReward,d=c.collapse,p=this.props.network.rewardVisible,g=this.props.system.transModalInfo,k=g.declined,h=g.trnasType;return u.a.createElement(w.a,{title:E.a.get("v2.rewards.claim_mining"),maskClosable:!1,visible:p,closable:!0,onCancel:function(){e.props.system.clearRejectError(),e.props.network.setData({rewardVisible:!1}),e.props.lend.collapseInit(),e.props.lend.filterReward(),gtag("event","click",{event_category:"PC_V1.5",event_label:"reward_modal_close"})},footer:null,className:"j-modal j-reward-modal header-border",width:450,centered:!t,getContainer:function(){return document.querySelector(".j-wrapper")}},u.a.createElement("div",{className:"j-rewards"},u.a.createElement("div",{className:"rewards-icon"}),u.a.createElement("div",{className:"rewards-title"},E.a.get("v2.rewards.claiming")),u.a.createElement("div",{className:"rewards-value"},Object(b.a)(i).eq(0)?"0":Object(b.j)(i,6)," USDD"),u.a.createElement("div",{className:"rewards-lists"},u.a.createElement("div",{className:"rewards-list-top"},u.a.createElement("div",{className:"flex aic"},u.a.createElement(v.a,{className:"j-checkbox",disabled:r,onChange:this.onCheckAllChange,checked:l},E.a.get("v2.rewards.reward_breakdown")," (",o.length,"/",Object.keys(s).length,")"),Object.keys(s).length>3&&u.a.createElement(f.a,{title:E.a.get("v2.rewards.most_can_claim"),placement:"top",arrowPointAtCenter:!0,overlayClassName:"j-tooltip-dropdown",getPopupContainer:function(){return document.querySelector(".j-reward-modal")}},u.a.createElement("span",{className:"j-tooltip-icon"}))),u.a.createElement("div",{className:"j-collapse"+(d?"":" active"),onClick:function(){e.props.lend.setData({collapse:!d}),d?gtag("event","click",{event_category:"PC_V1.5",event_label:"rewards_uncollapse"}):gtag("event","click",{event_category:"PC_V1.5",event_label:"rewards_collapse"})}},d?E.a.get("v2.rewards.expand"):E.a.get("v2.rewards.collapse")," ",u.a.createElement("span",{className:"j-collapse-icon"}))),!d&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"rewards-list-title"},u.a.createElement("span",null,E.a.get("v2.rewards.mining_round")),u.a.createElement("span",null,E.a.get("v2.rewards.reward_balance"))),u.a.createElement("div",{className:"pr"},u.a.createElement("div",{className:"rewards-list-content scroll-bar"},this.renderRewardList()),Object.keys(s).length>3&&u.a.createElement("div",{className:"linear"})))),u.a.createElement("div",{className:"borrow-tip borrow-important-tip"},Object(b.a)(m).minus(i).gt(0)&&u.a.createElement(u.a.Fragment,null,u.a.createElement("span",{className:"en-US"===n?"en":""}),E.a.getHTML("v2.rewards.have_reclaimed",{value:Object(b.j)(Object(b.a)(m).minus(i),8)}))),r?u.a.createElement("button",{className:"j-large-btn j-supply j-signing mt-0",disabled:!0},E.a.get("v2.sign_in_wallet"),u.a.createElement("span",{className:"siging-icon"})):u.a.createElement(j.a,{className:"j-large-btn j-supply mt-0",disabled:(null===o||void 0===o?void 0:o.length)<=0,onClick:this.getReward},E.a.get("v2.rewards.claim_confirm")),k&&"reward"===h&&u.a.createElement("div",{className:"j-error-tip wallet-reject"},u.a.createElement("span",{className:"j-error-img"}),u.a.createElement("div",null,E.a.get("v2.reject_in_wallet")))))}}]),t}(u.a.Component))||n)||n)||n)||n);a.a=N},1544:function(e,a,t){"use strict";var n,l=t(8),r=t(13),c=t(17),s=t(18),o=t(0),i=t.n(o),m=t(58),d=t(24),u=t(3),p=t(243),g=t(102),b=t(2),v=t.n(b),w=(t(367),t(9),t(457),t(451),t(1538),Object(d.b)("network")(n=Object(d.b)("lend")(n=Object(d.b)("system")(n=Object(d.c)(n=function(e){Object(c.a)(t,e);var a=Object(s.a)(t);function t(){var e;return Object(l.a)(this,t),(e=a.call(this)).getTotalMint=function(a){var t=e.props.lend,n=t.inFreezeNum,l=t.transferringSoonNum,r=t.allMiningInfo,c=t.globalSettlementStatus,s=t.totalReward;if(Object.keys(r).length>0&&c)return"--";var o=a||Object(u.a)(n).plus(l).plus(s);if(o.gt(0)&&Object.keys(r).length>0){var m=Object(u.j)(o,8,{cutZero:!0,miniText:"0.00000001",round:!0,needDolar:!0}),d=Object(u.a)(o)._toFixed(8,1);return Object(u.hb)(d,m)}return!o.gt(0)&&Object.keys(r).length>0?i.a.createElement("span",{className:"countup-int"},"0"):i.a.createElement("span",{className:"countup-int"},"--")},e.getTotalRewards=function(e){var a=Object(u.j)(e,8,{cutZero:!0,miniText:"0.00000001",round:!0,needDolar:!0}),t=Object(u.a)(e)._toFixed(8,1);return Object(u.hb)(t,a)},e.timerInterval=null,e.state={mobile:Object(m.a)(window.navigator).any,lang:window.localStorage.getItem("lang")||v.a.options.currentLocale,collapse:!0},e}return Object(r.a)(t,[{key:"render",value:function(){var e,a,t,n=this,l=this.state,r=(l.lang,l.collapse),c=l.mobile,s=this.props.network.miningRewardVisible,o=this.props.lend,m=o.theme,d=o.inFreezeNum,b=o.transferringSoonNum,w=o.allMiningInfo,f=o.globalSettlementStatus,j=o.totalReward,k=o.marketDataSource,E=o.multiRewardData,h=o.USDDMiningStatus,N=Object.fromEntries(k.map((function(e){return[e.jtokenAddress,e]}))),O=null===(e=Object.values(w))||void 0===e?void 0:e.filter((function(e){var a,t;return(null===(a=Object(u.a)(null===e||void 0===e?void 0:e.tokenGainLastAll))||void 0===a?void 0:a.gt(0))||(null===(t=Object(u.a)(null===e||void 0===e?void 0:e.tokenGainNewAll))||void 0===t?void 0:t.gt(0))})),_=(Object(u.a)(d).plus(b).plus(j),Object.values(w)),S=_.length>0?_.filter((function(e){return Object(u.a)(e.tokenGainNewAll).gt(0)})):[];return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{title:v.a.get("v2.rewards.mining_rewards"),maskClosable:!1,visible:s,closable:!0,onCancel:function(){n.props.system.clearRejectError(),n.props.network.setData({miningRewardVisible:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"mining_rewards_close"})},footer:null,className:"j-modal j-mining-reward-modal ".concat(m),width:450,centered:!c,getContainer:function(){return document.querySelector(".j-wrapper")}},i.a.createElement("div",{className:"j-mining-reward"+(2==h?" special-reward":"")},i.a.createElement("div",{className:"j-mr-content"},i.a.createElement("div",{className:"j-top"},i.a.createElement("div",{className:"j-title flex aic"},i.a.createElement("span",null,v.a.get("v2.rewards.to_be_laimed")),i.a.createElement(g.a,{title:v.a.get("v2.rewards.tip37"),placement:"topLeft",arrowPointAtCenter:!0,overlayClassName:"j-tooltip-dropdown",getPopupContainer:function(){return document.querySelector(".j-mining-reward-modal")}},i.a.createElement("span",{className:"j-tooltip-icon ml-4"}))),i.a.createElement("div",{className:"j-value"},Object(u.O)(this.props.lend),i.a.createElement("span",{className:"j-reward-unit"}," USDD"))),i.a.createElement("div",{className:"j-ele flex aic jcsb"},i.a.createElement("div",null,i.a.createElement("div",{className:"j-title"},v.a.get("v2.rewards.reward_balance")),i.a.createElement("div",{className:"j-value format-reward"},Object(u.a)(j).gt(0)?this.getTotalRewards(j):0,i.a.createElement("span",{className:"j-reward-unit"}," USDD")),2==h&&i.a.createElement("div",{className:"j-accuring"},v.a.get("v2.rewards.processing",{value:22}))),i.a.createElement("button",{disabled:!Object(u.a)(j).gt(0),className:"j-btn j-reward flex aic jcc",onClick:function(){n.props.lend.filterReward(Object.keys(E)),n.props.network.setData({rewardVisible:!0}),n.props.network.setData({miningRewardVisible:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"mining_rewards_claim"})}},i.a.createElement("span",{className:"j-reward-btn-icon mr-5"}),v.a.get("v2.rewards.claim"))),i.a.createElement("div",{className:"j-ele mt-10"+(r?"":" top-radius")},i.a.createElement("div",{className:"flex aic jcsb"},i.a.createElement("div",null,i.a.createElement("div",{className:"j-title"},v.a.get("v2.rewards.accruing")),i.a.createElement("div",{className:"j-value format-reward"},f?"--":this.getTotalMint(Object(u.a)(d).plus(b)),i.a.createElement("span",{className:"j-reward-unit"}," USDD"))),f?i.a.createElement("div",{className:"closure-time mt-0 tar"},v.a.getHTML("v2.settlement_time",{date:null===(a=O[0])||void 0===a?void 0:a.tokenCurrEndTime})):Object(u.a)(d).plus(b).gt(0)?i.a.createElement("div",{className:"j-collapse"+(r?"":" active"),onClick:function(){n.setState({collapse:!n.state.collapse}),r?gtag("event","click",{event_category:"PC_V1.5",event_label:"mining_rewards_uncollapse"}):gtag("event","click",{event_category:"PC_V1.5",event_label:"mining_rewards_collapse"})}},r?v.a.get("v2.rewards.expand"):v.a.get("v2.rewards.collapse")," ",i.a.createElement("span",{className:"j-collapse-icon"})):"")),!r&&i.a.createElement("div",{className:"j-ele j-reward-ele"+(r?"":" bottom-radius")},i.a.createElement("div",{className:"pr"},i.a.createElement("div",{className:"j-ele-list scroll-bar"},Object.keys(w).length>0&&(null===S||void 0===S?void 0:S.length)>0&&i.a.createElement(i.a.Fragment,null,!f&&Object.values(w).map((function(e,a){var t,n,l=e.tokenGainNewAll,r=e.tokenAddress;if(Object(u.a)(l).gt(0))return i.a.createElement("div",{className:"rewards-box",key:a},i.a.createElement("div",{className:"rewards-title"},i.a.createElement("img",{className:"rewards-img",src:null===(t=N[r])||void 0===t?void 0:t.logoUrl,alt:""}),i.a.createElement("span",null,v.a.get("deposit_mining",{symbol:null===(n=N[r])||void 0===n?void 0:n.collateralSymbol}))),i.a.createElement("div",{className:"reward-value"},i.a.createElement("span",null,Object(u.j)(l,3,{miniText:"0.001"}))," USDD"))})))),Object.keys(S).length>3&&i.a.createElement("div",{className:"linear"})),i.a.createElement("div",{className:"closure-time w100"},v.a.getHTML("v2.settlement_time",{date:null===(t=O[0])||void 0===t?void 0:t.tokenCurrEndTime})))),i.a.createElement("div",{className:"j-mr-bottom flex"},i.a.createElement("div",{className:"j-warning-icon"}),v.a.getHTML("waiting_reward_footer")))))}}]),t}(i.a.Component))||n)||n)||n)||n);a.a=w},1545:function(e,a,t){"use strict";var n,l=t(1),r=t.n(l),c=t(4),s=t(8),o=t(13),i=t(17),m=t(18),d=t(0),u=t.n(d),p=(t(58),t(24)),g=t(365),b=t(366),v=t(102),w=t(243),f=t(2),j=t.n(f),k=t(9),E=t(3),h=(t(1573),t(1574),t(244),t(1575)),N=t.n(h),O=g.a.TabPane,_=Object(p.b)("network")(n=Object(p.b)("system")(n=Object(p.b)("pool")(n=Object(p.c)(n=function(e){Object(i.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).componentDidMount=function(){},n.initModal=function(){n.setState({approving:!1,focuStatus:!1,smallSize:!1,stakeValue:"",withdrawValue:""})},n.cancelModal=function(){n.props.onCancel&&n.props.onCancel(),n.initModal()},n.getReward=Object(c.a)(r.a.mark((function e(){var a,t,l,c,s,o,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,a=n.props.cardData,a.gift,t=a.giftKey,a.decimal,l=a.trxClaimed,c=void 0===l?Object(E.a)(0):l,s=a.tokenClaimed,o=void 0===s?Object(E.a)(0):s,c.gt(0)||o.gt(0)){e.next=5;break}return e.abrupt("return");case 5:return i={},i=2===t.length?{title:"stake.all_claim",obj:{value1:Object(E.j)(o,k.b.defaultDecimal),value2:Object(E.j)(c,k.b.defaultDecimal),token1:t[0].toUpperCase(),token2:t[1].toUpperCase()}}:{title:"stake.token_claim",obj:{value1:Object(E.j)("trx"===t[0]?c:o,k.b.defaultDecimal),token1:t[0].toUpperCase()}},n.setState({isSuccess:!1,txID:""}),e.next=10,n.props.system.yamReward(a,i);case 10:e.sent&&setTimeout((function(){n.props.pool.getPoolData(),n.props.pool.getTronbullish()}),5e3),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),n.maxNumber=function(e){return Object(E.a)(e.toFixed(k.b.defaultDecimalForInput,1)).toString()},n.setMaxWithdraw=Object(c.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props.cardData,Object(E.a)(a.staked).gt(0)){e.next=3;break}return e.abrupt("return");case 3:t=n.maxNumber(a.staked),n.setState({withdrawValue:t},(function(){n.unlockChange(t)}));case 5:case"end":return e.stop()}}),e)}))),n.setMaxStake=Object(c.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props.cardData,Date.now(),a.end,Object(E.a)(a.tokenBalance).gt(0)&&a.tokenAllowance._toBg().gt(0)&&a.tokenBalance._toBg().gt(0)){e.next=5;break}return e.abrupt("return");case 5:t=n.maxNumber(a.tokenBalance),n.setState({stakeValue:t},(function(){n.stakeChange(t)}));case 7:case"end":return e.stop()}}),e)}))),n.stakeChange=function(e){var a=n.props.cardData.tokenBalance,t=Object(E.V)(e,k.b.defaultDecimalForInput),l=t.valid,r=t.str;l&&(n.setState({stakeValue:r}),Object(E.a)(r).gt(0)?Object(E.a)(r).gt(a)?n.setState({lockBtn:j.a.get("tab.not_enough"),lockBtnStatus:!1}):n.setState({lockBtn:j.a.get("tab.lock"),lockBtnStatus:!0}):n.setState({lockBtn:j.a.get("tab.lock"),lockBtnStatus:!1}),r.length>10?n.setState({smallSize:!0}):n.setState({smallSize:!1}))},n.unlockChange=function(e){var a=n.props.cardData,t=Object(E.V)(e,k.b.defaultDecimalForInput),l=t.valid,r=t.str;l&&(n.setState({withdrawValue:r}),Object(E.a)(r).gt(0)?Object(E.a)(r).gt(a.staked)?n.setState({collectBtn:j.a.get("tab.not_enough"),collectBtnStatus:!1}):n.setState({collectBtn:j.a.get("tab.unlock_btn"),collectBtnStatus:!0}):n.setState({collectBtn:j.a.get("tab.unlock_btn"),collectBtnStatus:!1}),r.length>10?n.setState({smallSize:!0}):n.setState({smallSize:!1}))},n.gotojustlend=function(){},n.toDeposit=Object(c.a)(r.a.mark((function e(){var a,t,l,c,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,t=a.lockBtnStatus,l=a.stakeValue,c=n.props.cardData,t){e.next=4;break}return e.abrupt("return");case 4:return s={title:"lend.mint",obj:{value:l,token:"".concat(c.lp,"-TRX LP")}},e.next=7,n.props.system.yamDeposit(c,new E.a(l).times(c.precision).toString(),s);case 7:e.sent&&(n.stakeChange(""),setTimeout((function(){n.props.pool.getTokenBalanceOf(c),n.props.pool.getPoolData(),n.props.pool.getTronbullish()}),1e4));case 9:case"end":return e.stop()}}),e)}))),n.toApprove=Object(c.a)(r.a.mark((function e(){var a,t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props.cardData,!n.state.approving){e.next=4;break}return e.abrupt("return");case 4:return t={title:"lend.approve",obj:{token:"".concat(a.lp,"-TRX LP")}},e.prev=5,e.next=8,n.props.system.yamApprove(a,t);case 8:e.sent?(n.setState({approving:!0}),setTimeout(Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.pool.getTokenBalanceOf(a);case 2:n.setState({approving:!1});case 3:case"end":return e.stop()}}),e)}))),5e3)):n.setState({approving:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),n.toWithDraw=Object(c.a)(r.a.mark((function e(){var a,t,l,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,t=a.withdrawValue,a.collectBtnStatus){e.next=3;break}return e.abrupt("return");case 3:return l=n.props.cardData,c={title:"stake.unstake",obj:{value:t,token:"".concat(l.lp,"-TRX LP")}},n.setState({isSuccess:!1,txID:""}),e.next=8,n.props.system.yamWithdraw(l,new E.a(t).times(l.precision).toString(),c);case 8:e.sent&&(n.unlockChange(""),setTimeout((function(){n.props.pool.getTokenBalanceOf(l),n.props.pool.getPoolData()}),5e3));case 10:case"end":return e.stop()}}),e)}))),n.focusOnchange=function(e){n.setState({focuStatus:e})},n.renderDeposit=function(){var e=n.props,a=e.cardData,t=e.defaultKey,l=n.props.network.nowTime,r=n.props.pool,c=r.tronBull,s=r.tronbullish,o=r.tokenPrices,i=n.state,m=i.focuStatus,d=i.smallSize,p=i.stakeValue,w=(i.lang,i.lockBtn),f=i.lockBtnStatus,h=i.collectBtn,_=i.collectBtnStatus,S=i.withdrawValue;return u.a.createElement("div",{className:"lend-deposit"},u.a.createElement(g.a,{defaultActiveKey:t,centered:!0,tabBarStyle:{fontSize:"18px",fontFamily:"PingFangSC-Medium"}},u.a.createElement(O,{tab:j.a.get("tab.lock"),key:"1",disabled:n.props.end},u.a.createElement("div",{className:"lend-deposit-pane"},u.a.createElement("div",{className:"lend-deposit-amount"},u.a.createElement("div",{className:"between a-center"},u.a.createElement("span",{className:"name c-333"},j.a.get("tab.lock_num")),u.a.createElement("span",{className:"max",onClick:n.setMaxStake},"MAX")),u.a.createElement(b.a,{suffix:"".concat(a.lp,"-TRX LP"),value:p,onChange:function(e){return n.stakeChange(e.target.value)},placeholder:m?null:"0",onBlur:function(){return n.focusOnchange(!1)},onFocus:function(){return n.focusOnchange(!0)},className:"depositInput "+(d?"small":"")}),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},j.a.get("tab.locked")),u.a.createElement("span",{className:"name"},u.a.createElement("span",{className:"value"},Object(E.j)(a.staked,k.b.defaultDecimal))," ",a.lp,"-TRX LP")),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},j.a.get("lend.balance")),u.a.createElement("span",{className:"name"},u.a.createElement("span",{className:"value"},Object(E.j)(a.tokenBalance,k.b.defaultDecimal))," ","".concat(a.lp,"-TRX LP"))),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},"APY"),u.a.createElement("span",{className:"name apy"},Object(E.G)(a,c))),u.a.createElement("div",{className:"lend-modal-bottom"},u.a.createElement("button",{disabled:!f,onClick:function(){return n.toDeposit()}},w))))),u.a.createElement(O,{tab:j.a.get("tab.collect"),key:"2"},u.a.createElement("div",{className:"lend-withdraw-pane"},u.a.createElement("div",{className:"lend-withdraw-amount"},u.a.createElement("div",{className:"between a-center"},u.a.createElement("span",{className:"name c-333"},j.a.get("tab.unlock_num")),u.a.createElement("span",{className:"max",onClick:n.setMaxWithdraw},"MAX")),u.a.createElement(b.a,{suffix:"".concat(a.lp,"-TRX LP"),value:S,onChange:function(e){return n.unlockChange(e.target.value)},placeholder:m?null:"0",onBlur:function(){return n.focusOnchange(!1)},onFocus:function(){return n.focusOnchange(!0)},className:"depositInput "+(d?"small":"")}),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},j.a.get("tab.unlock_title")),u.a.createElement("span",{className:"name"},u.a.createElement("span",{className:"value"},Object(E.j)(a.staked,k.b.defaultDecimal))," ",a.lp,"-TRX LP")),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},j.a.get("card_modal_add.aClaim")),u.a.createElement("span",{className:"name"},a.gift&&a.gift.map((function(e,t){return u.a.createElement("span",{className:"value",key:t},"TRX"===e.symbol?Object(E.j)(a.trxClaimed,k.b.defaultDecimal):Object(E.j)(a.tokenClaimed,k.b.defaultDecimal)," ".concat(e.symbol," ")," ",t!==a.gift.length-1?"+ ":"")})),u.a.createElement("span",{className:"link",onClick:function(){return n.getReward()}},j.a.get("tab.claim_btn")))),u.a.createElement("div",{className:"name big c-333 mt"},j.a.get("tab.my_withdrawn")),u.a.createElement("div",{className:"between"},u.a.createElement("span",{className:"name"},j.a.get("tab.claim_title")),u.a.createElement("span",{className:"name"},u.a.createElement("span",{className:"value"},Object(E.D)(a,s,"swap",{},o)))),u.a.createElement("div",{className:"claim-detail"},u.a.createElement("div",{className:"flexB claim-title"},u.a.createElement("span",null,j.a.get("card_modal_add.currency")),u.a.createElement("span",{className:"align-center"},u.a.createElement("span",null,j.a.get("card_modal_add.upcoming")),u.a.createElement(v.a,{title:j.a.get("card_modal_add.upcoming_tip"),arrowPointAtCenter:!0,placement:"top",overlayClassName:"modal-tooltip"},u.a.createElement("img",{src:N.a}))),u.a.createElement("span",{className:"align-center"},u.a.createElement("span",null,j.a.get("card_modal_add.frozen")),u.a.createElement(v.a,{title:j.a.get("card_modal_add.frozen_tip"),arrowPointAtCenter:!0,placement:"topRight",overlayClassName:"modal-tooltip"},u.a.createElement("img",{src:N.a})))),Object(E.cb)(a,l,s)),u.a.createElement("div",{className:"lend-modal-bottom"},u.a.createElement("button",{disabled:!_,onClick:function(){return n.toWithDraw()}},h)))))))},n.renderGiftList=function(){var e=n.props.cardData;return e.gift.map((function(a,t){return u.a.createElement("span",{className:"value",key:t},"TRX"===a.symbol?Object(E.j)(e.trxClaimed,a.decimal):Object(E.j)(e.tokenClaimed,a.decimal)," ".concat(a.symbol," ")," ",t!==e.gift.length-1?"+":"")}))},n.renderApprove=function(){var e=n.props.cardData;return u.a.createElement("div",{className:"lend-approve"},u.a.createElement("div",{className:"title"},j.a.get("lend.approve")),u.a.createElement("div",{className:"tip"},j.a.getHTML("lend.approveDesc",{token:"".concat(e.lp,"-TRX LP")})),u.a.createElement("div",null,u.a.createElement("button",{onClick:function(){return n.toApprove()}},j.a.get("lend.approve")," ","".concat(e.lp,"-TRX LP"))))},n.state={lang:window.localStorage.getItem("lang")||j.a.options.currentLocale,approving:!1,focuStatus:!1,lockBtn:j.a.get("tab.lock"),collectBtn:j.a.get("tab.unlock_btn"),lockBtnStatus:!1,collectBtnStatus:!1,smallSize:!1,stakeValue:"",withdrawValue:""},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this.props,a=e.visible,t=e.cardData;return u.a.createElement(w.a,{getContainer:function(){return document.querySelector(".modal-container")},visible:a,title:"",width:400,footer:null,className:"lend-modal mining-row-modal",onCancel:this.cancelModal},t.tokenAllowance._toBg().gt(0)?this.renderDeposit():this.renderApprove())}}]),t}(u.a.Component))||n)||n)||n)||n;a.a=_},1553:function(e,a,t){e.exports=t.p+"static/media/Triangle.cdcc5870.svg"},1555:function(e,a,t){},1573:function(e,a,t){},1574:function(e,a,t){},1575:function(e,a,t){e.exports=t.p+"static/media/tooltip.69462ad5.svg"}}]);