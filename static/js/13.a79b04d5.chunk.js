(this["webpackJsonpjustlend-front"]=this["webpackJsonpjustlend-front"]||[]).push([[13],{1551:function(e,t,a){"use strict";var n,o=a(1),r=a.n(o),s=a(4),l=a(8),i=a(13),c=a(17),v=a(18),d=a(0),p=a.n(d),m=(a(58),a(24)),u=a(3),g=a(243),b=a(2),_=a.n(b),f=a(9),h=(a(451),a(1538),Object(m.b)("network")(n=Object(m.b)("lend")(n=Object(m.b)("system")(n=Object(m.c)(n=function(e){Object(c.a)(a,e);var t=Object(v.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).startInterval=Object(s.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timerInterval||(e.timerInterval=setInterval(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),3e3));case 1:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.startInterval()},e.withdrawVotes=function(){var t=Object(s.a)(r.a.mark((function t(a){var n,o,s,l,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({clickProposalId:a}),e.props.system.clearRejectError(),n=f.b.oldVoteLastId,o=a<=n?f.b.contract.oldWJSTAddress:f.b.contract.WJSTAddress,l={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:(s={proposalId:a,contractAddr:o}).votes,token:s.proposalId||""},trnasType:"withdrawVotes"},t.next=8,e.props.system.withdrawVotes(s,l);case 8:(i=t.sent)?(console.log("withdrawVotes complete:",i),e.props.lend.setData({redeemFromVotePop:!1}),e.setState({clickProposalId:""})):e.setState({clickProposalId:""});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderVoting=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.props.lend.voteSourceData,o=e.state,r=o.lang,s=o.clickProposalId;if((null===t||void 0===t?void 0:t.length)>0)return null===t||void 0===t?void 0:t.map((function(t,o){var l;return p.a.createElement("div",{className:"vote-detail-item",key:o},p.a.createElement("div",{className:"proposalId"},"#",null===t||void 0===t?void 0:t.proposalId),p.a.createElement("div",{className:"title "+("en-US"===r?"":"zh")},n&&(null===(l=n[null===t||void 0===t?void 0:t.proposalId])||void 0===l?void 0:l.title)?"en-US"===r?n[t.proposalId].title.split("&&")[1]:n[t.proposalId].title.split("&&")[0]:""),p.a.createElement("div",{className:"amount ellipsis",title:Object(u.j)(t.allVotes,3)},Object(u.j)(t.allVotes,3)),a&&(s?s===t.proposalId?p.a.createElement("div",{className:"link disabled"},p.a.createElement("span",{className:"siging-icon"})):p.a.createElement("div",{className:"link disabled"},_.a.get("v2.vote.redeem_vote_btn")):p.a.createElement("div",{className:"link",onClick:function(){return e.withdrawVotes(t.proposalId)}},_.a.get("v2.vote.redeem_vote_btn"))))}))},e.timerInterval=null,e.state={lang:window.localStorage.getItem("lang")||_.a.options.currentLocale,visible:!1,clickProposalId:""},e}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.timerInterval=null}},{key:"render",value:function(){var e=this,t=this.props.lend,a=t.userCanRedeemVoteList,n=t.userVotingVote,o=t.voteDetailModalVisible,r=t.userCanRedeemVoteNum,s=t.theme,l=this.state.clickProposalId,i=this.props.system.transModalInfo,c=i.declined,v=i.trnasType,d=Object(u.a)(r).eq(0)?0:Object(u.j)(r,3,{miniText:.001});return p.a.createElement(g.a,{title:_.a.get("v2.vote.recovered_vote"),maskClosable:!1,visible:o,closable:!0,onCancel:function(){e.props.system.clearRejectError(),e.props.lend.setData({voteDetailModalVisible:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"recycle_votes_close"})},footer:null,className:"vote-detail-modal-v2 ".concat(s),width:457,centered:!0},p.a.createElement("div",{className:"tick-vote-logo"}),p.a.createElement("p",{className:"redeemNum"},_.a.getHTML("v2.vote.recover_vote",{value:d})),n&&(null===n||void 0===n?void 0:n.length)>0||a&&(null===a||void 0===a?void 0:a.length)>0?p.a.createElement("div",{className:"vote-detail-container"},a.length>4&&p.a.createElement("div",{className:"linear"}),a&&(null===a||void 0===a?void 0:a.length)>0&&p.a.createElement(p.a.Fragment,null,p.a.createElement("div",{className:"box"},this.renderVoting(a,!0))),l?p.a.createElement("div",{className:"info"},p.a.createElement("div",{className:"j-sign-tip"},p.a.createElement("span",{className:"j-sign-img"}),p.a.createElement("span",null,_.a.get("v2.sign_in_wallet")))):c&&"withdrawVotes"===v&&p.a.createElement("div",{className:"info"},p.a.createElement("div",{className:"j-reject-tip"},p.a.createElement("span",{className:"j-reject-img mt-3"}),p.a.createElement("span",null,_.a.get("v2.reject_in_wallet"))))):null)}}]),a}(p.a.Component))||n)||n)||n)||n);t.a=h},1610:function(e,t,a){},1617:function(e,t,a){"use strict";a.r(t);var n,o,r,s,l,i=a(8),c=a(13),v=a(17),d=a(18),p=a(0),m=a.n(p),u=a(1),g=a.n(u),b=a(4),_=a(2),f=a.n(_),h=a(58),j=a(14),E=a.n(j),w=a(24),N=a(768),k=a(70),S=a(9),O=a(3),V=a(453),I=a(455),x=a(243),T=a(454),y=(a(451),a(1538),Object(w.b)("lend")(n=Object(w.b)("system")(n=Object(w.c)(n=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).hideRedeemFromVotePop=function(){n.setState({isSigning:!1}),n.props.lend.setData({redeemFromVotePop:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_recycle_close"})},n.withdrawVotes=Object(b.a)(g.a.mark((function e(){var t,a,o,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.system.clearRejectError(),n.setState({isSigning:!0}),t=n.props.lend,t.lockNum,a=t.redeemFromVotePopProposalId,o={proposalId:a,contractAddr:S.b.contract.WJSTAddress},r={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:o.votes,token:o.proposalId||""},trnasType:"withdrawVote"},e.prev=5,e.next=8,n.props.system.withdrawVotes(o,r);case 8:e.sent?n.hideRedeemFromVotePop():n.setState({isSigning:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),n.setState({isSigning:!1});case 15:gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_recycle_btn"});case 16:case"end":return e.stop()}}),e,null,[[5,12]])}))),n.state={isSigning:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e,t=this,a=this.props.lend,n=a.redeemFromVotePop,o=a.lockNum,r=this.props.system.transModalInfo,s=r.declined,l=r.trnasType,i=this.state.isSigning,c="--";return o&&o.gt(0)&&(c=Object(O.j)(Object(O.a)(o).div(S.b.tokenDefaultPrecision),3)),e=i?f.a.get("v2.sign_in_wallet"):f.a.get("v2.vote.redeem_vote_modal_btn"),m.a.createElement(m.a.Fragment,null,m.a.createElement(x.a,{visible:n,title:f.a.get("v2.vote.redeem_vote_modal_title"),width:400,footer:null,className:"j-modal header-border redeem-vote-pop",onCancel:function(){return t.hideRedeemFromVotePop()},closable:!0,maskClosable:!1,centered:!0,getContainer:function(){return document.querySelector(".j-wrapper")}},m.a.createElement("div",{className:"modal-content-container"},m.a.createElement("div",{className:"content-icon"}),m.a.createElement("div",{className:"content-title"},f.a.getHTML("v2.vote.redeem_vote_modal_content_title",{value:c})),m.a.createElement("div",{className:"content-subtitle"},f.a.get("v2.vote.redeem_vote_modal_content_subtitle"))),m.a.createElement("button",{className:E()("j-large-btn",{"is-signing":i}),disabled:i,onClick:function(){t.withdrawVotes()}},e,m.a.createElement("span",{className:"siging-icon"})),s&&"withdrawVote"===l&&m.a.createElement("div",{className:"j-error-tip wallet-reject"},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,f.a.get("v2.reject_in_wallet")))),m.a.createElement(T.a,null))}}]),a}(m.a.Component))||n)||n)||n),P=a(366),C=Object(w.b)("lend")(o=Object(w.b)("system")(o=Object(w.b)("network")(o=Object(w.c)(o=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.network.isConnected?n.getMountedData():n.props.network.initTronLinkWallet((function(){n.getMountedData()}),(function(){}),!1),n.props.network.listenTronLink();case 2:case"end":return e.stop()}}),e)}))),n.getMountedData=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.props.lend.getUserWithdrawInfo();case 2:case"end":return e.stop()}}),e)}))),n.hideVoteForPop=function(){n.setState({isSigning:!1,voteInputValue:"",inputErrorText:""}),n.props.lend.setData({voteForPop:!1})},n.getRedeemableVote=function(){n.props.lend.setData({voteDetailModalVisible:!0}),n.hideVoteForPop()},n.getVote=function(){n.props.system.clearRejectError(),n.props.lend.setData({swapJstToVoteModalVisible:!0}),n.hideVoteForPop(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_get_votes"})},n.getJst=function(){window.open("".concat(S.b.sunSwap,"?lang=").concat(n.state.lang,"?tokenAddress=").concat(S.b.contract.JST,"&type=swap"),"_blank","noreferrer"),n.hideVoteForPop(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_get_JST"})},n.maxRender=function(){return m.a.createElement("div",{className:"max-value-button",onClick:n.chooseMax},f.a.get("v2.max"))},n.chooseMax=function(){var e=n.props.lend.voteInfo,t=Object(O.j)(e.surplusVotes.div(S.b.tokenDefaultPrecision),3,{per:!0});n.setState({voteInputValue:t})},n.voteInputValueOnChange=function(e){var t=Object(O.V)(e,3),a=t.valid,o=t.str;if(a){n.setState({voteInputValue:o});var r=n.props.lend.voteInfo;r&&r.success&&r.surplusVotes.div(S.b.tokenDefaultPrecision).lt(Object(O.a)(o))?n.setState({inputErrorText:f.a.get("v2.vote.vote_modal_insufficient_vote")}):n.setState({inputErrorText:""})}},n.vote=Object(b.a)(g.a.mark((function e(){var t,a,o,r,s,l,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.system.clearRejectError(),n.setState({isSigning:!0}),t=n.state.voteInputValue,a=n.props.lend,o=a.lockNum,r=a.voteForPopIsFor,s=a.voteForPopProposalId,l={proposalId:s,support:r,votes:Object(O.a)(t).times(S.b.tokenDefaultPrecision)._toHex(),contractAddr:S.b.contract.governorAlphaAddress,totalVotes:Object(O.a)(t).times(S.b.tokenDefaultPrecision).plus(o)._toHex()},i={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",needCallAgain:"getVoteDetail",obj:{value:l.votes,token:l.proposalId||""},trnasType:"vote"},e.prev=6,e.next=9,n.props.system.castVote(l,i);case 9:e.sent?(n.hideVoteForPop(),setTimeout((function(){n.props.lend.getVoteDetail(s)}),5e3)):n.setState({isSigning:!1}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),n.setState({isSigning:!1});case 16:case"end":return e.stop()}}),e,null,[[6,13]])}))),n.state={lang:window.localStorage.getItem("lang")||f.a.options.currentLocale,isSigning:!1,voteInputValue:"",inputErrorText:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e,t,a,n,o,r=this,s=this.props.lend,l=s.voteForPop,i=s.voteForPopIsFor,c=s.voteForPopProposalId,v=s.lockNum,d=s.voteInfo,p=s.userCanRedeemVoteNum,u=this.props.system.transModalInfo,g=u.declined,b=u.trnasType,_=this.state,h=_.isSigning,j=_.voteInputValue,w=_.inputErrorText,N=!1,k=!1,V=!1,I="--",T="--",y="--",C=v&&Object(O.a)(v).gt(0),D="--";if(d&&d.success){var F=Object(O.a)(d.surplusVotes),M=Object(O.a)(d.jstBalance),A=Object(O.a)(p);N=F.gt(0),k=M.gt(0),V=A.gt(0),I=Object(O.j)(F.div(S.b.tokenDefaultPrecision),3,{miniText:.001}),T=Object(O.j)(M.div(S.b.tokenDefaultPrecision),3,{miniText:.001}),y=Object(O.a)(p).eq(0)?0:Object(O.j)(p,3,{miniText:.001})}return C&&(D=Object(O.j)(Object(O.a)(v).div(S.b.tokenDefaultPrecision),3)),N?(e=f.a.get("v2.vote.vote_modal_title",{value:c}),o=!0,C?(t=m.a.createElement("span",{className:"vote-title"},D),a=i?f.a.get("v2.vote.vote_modal_content_title_voted_for",{value:c}):f.a.get("v2.vote.vote_modal_content_title_voted_against",{value:c})):(t=i?f.a.getHTML("v2.vote.vote_modal_content_title_will_vote_for",{value:c}):f.a.getHTML("v2.vote.vote_modal_content_title_will_vote_against",{value:c}),a=""),n=h?f.a.get("v2.sign_in_wallet"):i?f.a.get("v2.vote.cast_for_votes"):f.a.get("v2.vote.cast_against_votes")):(e=f.a.get("v2.vote.vote_modal_title_no_vote"),o=!1,V?(t=f.a.getHTML("v2.vote.vote_modal_content_title_vote_to_redeem",{value:y}),n=f.a.get("v2.vote.vote_modal_action_btn_vote_to_redeem"),a=f.a.get("v2.vote.vote_modal_redeem_vote")):k?(t=f.a.getHTML("v2.vote.vote_modal_content_title_no_vote",{value:T}),n=f.a.get("v2.vote.vote_modal_action_btn_no_vote"),a=f.a.get("v2.vote.vote_modal_swap_jst")):(t=f.a.get("v2.vote.vote_modal_content_title_no_jst"),n=f.a.get("v2.vote.vote_modal_action_btn_no_jst"),a="")),m.a.createElement(x.a,{visible:l,title:e,width:400,footer:null,className:"j-modal header-border vote-pop",onCancel:function(){r.props.system.clearRejectError(),r.hideVoteForPop(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_vote_close"})},closable:!0,maskClosable:!1,centered:!0,getContainer:function(){return document.querySelector(".j-wrapper")}},m.a.createElement("div",{className:E()("modal-content-container",{"have-input":N})},m.a.createElement("div",{className:E()("content-icon",{"no-vote":!N&&!V})}),m.a.createElement("div",{className:"content-title"},t),a&&m.a.createElement("div",{className:"content-subtitle"},a),o&&m.a.createElement("div",{className:"input-container"},m.a.createElement("div",{className:"input-header"},m.a.createElement("div",{className:"input-title"},C?f.a.getHTML("v2.vote.vote_modal_add_vote_count"):f.a.getHTML("v2.vote.vote_modal_vote_count")),m.a.createElement("div",{className:"remaining-votes"},m.a.createElement("div",{className:"text"},f.a.get("v2.vote.vote_modal_remaining_vote")),m.a.createElement("div",{className:"balance"},I))),m.a.createElement(P.a,{className:"j-input "+(w?"j-error-input":""),value:j,placeholder:i?f.a.get("v2.vote.vote_modal_input_hint"):f.a.get("v2.vote.vote_modal_input_against_hint"),addonAfter:this.maxRender(),onChange:function(e){return r.voteInputValueOnChange(e.target.value)},allowClear:!0,disabled:!!h}),m.a.createElement("div",{className:E()("j-error-tip",{"show-error":w})},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,w)))),m.a.createElement("button",{className:E()("j-large-btn",{"is-signing":N&&h}),disabled:N&&(h||w||!j||"0"==j),onClick:function(){N?r.vote():V?r.getRedeemableVote():k?r.getVote():r.getJst()}},n,m.a.createElement("span",{className:"siging-icon"})),g&&"vote"===b&&m.a.createElement("div",{className:"j-error-tip wallet-reject"},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,f.a.get("v2.reject_in_wallet"))))}}]),a}(m.a.Component))||o)||o)||o)||o,D=Object(w.b)("lend")(r=Object(w.b)("system")(r=Object(w.b)("network")(r=Object(w.c)(r=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).hideSwapJstToVotePop=function(){n.setState({isSigning:!1,jstInputValue:"",inputErrorText:""}),n.props.lend.setData({swapJstToVoteModalVisible:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_get_votes_close"})},n.componentDidMount=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.props.network.isConnected?n.getMountedData():n.props.network.initTronLinkWallet((function(){n.getMountedData()}),(function(){}),!1);case 1:case"end":return e.stop()}}),e)}))),n.getMountedData=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getApprove();case 2:t=e.sent,n.setState({approveStatus:t,approving:!1},(function(){n.props.lend.getBalanceForVote(),n.props.lend.getOldWjstBalanceForVote()}));case 4:case"end":return e.stop()}}),e)}))),n.getApprove=Object(b.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={collateralAddress:S.b.contract.JST,jtokenAddress:S.b.contract.WJSTAddress,precision:S.b.tokenDefaultPrecision},e.next=4,n.props.lend.getVoteBalanceOf(t);case 4:return a=e.sent,e.abrupt("return",Object(O.a)(a).gt(0));case 8:return e.prev=8,e.t0=e.catch(0),console.log("getApprove, ",e.t0),e.abrupt("return",!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])}))),n.maxRender=function(){return m.a.createElement("div",{className:"max-value-button",onClick:n.chooseMax},f.a.get("vote.voteto_input_max"))},n.chooseMax=function(){var e=n.props.lend.voteInfo,t=Object(O.j)(e.jstBalance.div(S.b.tokenDefaultPrecision),3,{per:!0});n.setState({jstInputValue:t})},n.jstInputValueOnChange=function(e){var t=Object(O.V)(e,3),a=t.valid,o=t.str;if(a){n.setState({jstInputValue:o});var r=n.props.lend.voteInfo;r&&r.success&&r.jstBalance.div(S.b.tokenDefaultPrecision).lt(Object(O.a)(o))?n.setState({inputErrorText:f.a.get("tab.not_enough")}):n.setState({inputErrorText:""})}},n.swap=Object(b.a)(g.a.mark((function e(){var t,a,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.system.clearRejectError(),t=n.state.jstInputValue,n.setState({isSigning:!0}),a={collateralAddress:S.b.contract.JST,jtokenAddress:S.b.contract.WJSTAddress,amount:Object(O.a)(t).times(S.b.tokenDefaultPrecision)._toHex()},o={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:a.collateralSymbol},trnasType:"swapVote"},e.prev=5,e.next=8,n.props.system.voteDeposit(a,o);case 8:e.sent?n.hideSwapJstToVotePop():n.setState({isSigning:!1}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),n.setState({isSigning:!1});case 15:case"end":return e.stop()}}),e,null,[[5,12]])}))),n.toApprove=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.props.system.clearRejectError(),t={collateralAddress:S.b.contract.JST,jtokenAddress:S.b.contract.WJSTAddress,trnasType:"approve"},{title:"deposit.confirm_approve",obj:{value:t.collateralSymbol}},n.setState({isSuccess:!1,txID:"",approving:!0}),e.next=6,n.props.system.approveToken(t,[["lend/hideAuthorizePop"]]);case 6:e.sent&&n.setState({approveStatus:!0}),n.setState({approving:!1});case 9:case"end":return e.stop()}}),e)}))),n.renderSwapPop=function(){var e,t,a=n.props.lend,o=(a.swapJstToVoteModalVisible,a.voteInfo),r=n.state,s=r.isSigning,l=r.jstInputValue,i=r.inputErrorText,c=n.props.system.transModalInfo,v=c.declined,d=c.trnasType,p="--";if(o&&o.success){var u=Object(O.a)(o.jstBalance);p=Object(O.j)(u.div(S.b.tokenDefaultPrecision),3,{miniText:.001})}return e=f.a.getHTML("v2.vote.get_vote_modal_text"),t=s?f.a.get("v2.sign_in_wallet"):f.a.get("v2.vote.deposit_now"),m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:E()("modal-content-container","have-input")},m.a.createElement("div",{className:"content-icon"}),m.a.createElement("div",{className:"content-title"},e),m.a.createElement("div",{className:"input-container"},m.a.createElement("div",{className:"input-header"},m.a.createElement("div",{className:"input-title"},f.a.getHTML("vote.deposit_amount")),m.a.createElement("div",{className:"remaining-votes"},m.a.createElement("div",{className:"text"},f.a.get("wallet_ballance")),m.a.createElement("div",{className:"balance"},p)),m.a.createElement("a",{className:"get-jst-link",target:"_blank",rel:"noopener noreferrer",href:"".concat(S.b.sunSwap,"?lang=").concat(n.state.lang,"?tokenAddress=").concat(S.b.contract.JST,"&type=swap")},f.a.get("lend.get"))),m.a.createElement(P.a,{className:"j-input "+(i?"j-error-input":""),value:l,placeholder:f.a.get("vote.convert_input_tips"),addonAfter:n.maxRender(),onChange:function(e){return n.jstInputValueOnChange(e.target.value)},allowClear:!0,disabled:!!s}),m.a.createElement("div",{className:E()("j-error-tip",{"show-error":i})},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,i)))),m.a.createElement("button",{className:E()("j-large-btn",{"is-signing":s}),disabled:s||i||!l||"0"==l,onClick:function(){n.swap()}},t,m.a.createElement("span",{className:"siging-icon"})),v&&"swapVote"===d&&m.a.createElement("div",{className:"j-error-tip wallet-reject"},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,f.a.get("v2.reject_in_wallet"))))},n.renderApprovePop=function(){var e=n.state.approving,t=n.props.system.transModalInfo,a=t.declined,o=t.trnasType;return m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"vote-authorize-logo"}),m.a.createElement("div",{className:"v-desc"},f.a.getHTML("vote.approve_text")),e?m.a.createElement("button",{className:"modal-btn is-valid",disabled:!0},f.a.get("v2.sign_in_wallet"),m.a.createElement("span",{className:"siging-icon"})):m.a.createElement("div",{className:"modal-btn is-valid",onClick:n.toApprove},f.a.get("vote.approve_btn")),a&&"approve"===o&&m.a.createElement("div",{className:"j-error-tip wallet-reject"},m.a.createElement("span",{className:"j-error-img"}),m.a.createElement("div",null,f.a.get("v2.reject_in_wallet"))))},n.state={lang:window.localStorage.getItem("lang")||f.a.options.currentLocale,isSigning:!1,jstInputValue:"",inputErrorText:"",approveStatus:null,approving:!1},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.lend,a=t.swapJstToVoteModalVisible,n=(t.voteInfo,this.state.approveStatus),o=n?f.a.get("vote.myvote_deposit"):f.a.get("deposit.confirm_approve");return m.a.createElement(x.a,{visible:a,title:o,width:400,footer:null,className:"j-modal header-border swap-jst-to-vote-pop",onCancel:function(){return e.hideSwapJstToVotePop()},closable:!0,maskClosable:!1,centered:!0,getContainer:function(){return document.querySelector(".j-wrapper")}},n?this.renderSwapPop():this.renderApprovePop())}}]),a}(m.a.Component))||r)||r)||r)||r,F=a(1551),M=(a(1610),"succeeded"),A="failed",H="pending",J="waiting",L=Object(w.b)("network")(s=Object(w.b)("system")(s=Object(w.b)("lend")(s=Object(w.c)(s=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:document.title="Vote - JustLend DAO",n.props.lend.setData({voteDetailData:null}),n.getProposalIdFromUrl(),n.startInterval();case 4:case"end":return e.stop()}}),e)}))),n.startInterval=Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.timerInterval){e.next=5;break}if(!n.state.proposalId){e.next=4;break}return e.next=4,n.props.lend.getVoteDetail(n.state.proposalId);case 4:n.timerInterval=setInterval(Object(b.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.state.proposalId){e.next=3;break}return e.next=3,n.props.lend.getVoteDetail(n.state.proposalId);case 3:case"end":return e.stop()}}),e)}))),3e4);case 5:case"end":return e.stop()}}),e)}))),n.getProposalIdFromUrl=function(){n.props.lend.setData({lockNum:Object(O.a)(0)});var e=Object(O.F)("proposalId");n.setState({proposalId:e},(function(){n.props.lend.getVoteDetail(e)}))},n.getFormattedTimeString=function(e){return new Date(e).format("yyyy-MM-dd h:m:s")},n.showRedeemFromVotePop=function(){var e=n.state.proposalId;n.props.lend.setData({redeemFromVotePop:!0,redeemFromVotePopProposalId:e})},n.voteAgainstButtonOnClick=function(){var e=n.state.proposalId,t=n.props.lend.addVote;0!==n.props.network.isMainNetwork?"yes"!==t&&n.props.lend.setData({voteForPop:!0,voteForPopIsFor:!1,voteForPopProposalId:e}):n.props.network.showNetworkErrorModal()},n.voteForButtonOnClick=function(){var e=n.state.proposalId,t=n.props.lend.addVote;0!==n.props.network.isMainNetwork?"no"!==t&&n.props.lend.setData({voteForPop:!0,voteForPopIsFor:!0,voteForPopProposalId:e}):n.props.network.showNetworkErrorModal()},n.renderStatusItem=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3?arguments[3]:void 0;return m.a.createElement("div",{className:E()("status-history",{expandable:t},{collapsed:a}),key:"history"+e.status+"_"+o},m.a.createElement("div",{className:E()("expand-button",{visible:t}),onMouseEnter:function(){n.setState({shouldExpandTimeline:!0}),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_expand"})},onMouseLeave:function(){n.setState({shouldExpandTimeline:!1})}},f.a.get("v2.vote.status_expand_btn")),m.a.createElement("div",{className:E()("timeline-icon",{succeeded:e.icon===M},{failed:e.icon===A},{pending:e.icon===H},{waiting:e.icon===J})}),m.a.createElement("div",{className:E()("status-title",{"hover-enabled":e.hoverHint})},e.title,e.hoverHint&&m.a.createElement("div",{className:"hover-hint"},e.hoverHint)),m.a.createElement("div",{className:"status-time"},e.timeString),m.a.createElement("div",{className:"timeline-dot"}),m.a.createElement("div",{className:"timeline-arrow-dot"}))},n.state={mobile:Object(h.a)(window.navigator).any,lang:window.localStorage.getItem("lang")||f.a.options.currentLocale,proposalId:void 0,shouldExpandTimeline:!1},n}return Object(c.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.timerInterval=null}},{key:"render",value:function(){var e,t,a,n,o,r,s,l,i,c,v,d,p,u,g=this,b=this.state,_=b.lang,h=(b.mobile,b.shouldExpandTimeline),j=this.props.lend,w=j.theme,x=j.voteDetailData,P=j.addVote,J=j.lockNum,L=this.props.network.isConnected,R="en-US"===_,B=[];if(x){e=R?x.title.split("&&")[1]:x.title.split("&&")[0],t=x.proposalId,a=R?x.content.split("&&&&&&&&")[0]:x.content.split("&&&&&&&&")[1];var W=x.state;B.push({status:"creation",icon:M,title:f.a.get("v2.vote.status_created"),timeString:this.getFormattedTimeString(x.activeTime)}),2!=W&&B.push({status:"voting",icon:M,title:f.a.get("v2.vote.voting_begun"),timeString:this.getFormattedTimeString(x.activeTime)}),W<2&&B.push({status:"confirmingVotingResult",icon:H,title:f.a.get("v2.vote.status_result_confirm"),timeString:this.getFormattedTimeString(x.endTime)}),2==W&&B.push({status:"cancelCreation",icon:A,title:f.a.get("v2.vote.status_cancel_creation"),timeString:this.getFormattedTimeString(x.cancelTime)}),3==W&&B.push({status:"failed",icon:A,title:f.a.get("v2.vote.status_failed"),hoverHint:f.a.get("v2.vote.status_hint_insufficient_vote_count"),timeString:this.getFormattedTimeString(x.endTime)}),W>3&&6!=W&&B.push({status:"passed",icon:M,title:f.a.get("v2.vote.status_passed"),timeString:this.getFormattedTimeString(x.endTime)}),4==W&&B.push({status:"waitForQueue",icon:H,title:f.a.get("v2.vote.status_wait_for_queue"),timeString:this.getFormattedTimeString(x.endTime)}),5!=W&&7!=W||B.push({status:"queuing",icon:M,title:f.a.get("v2.vote.status_queuing"),timeString:this.getFormattedTimeString(x.queuedTime)}),6==W&&B.push({status:"cancelled",icon:A,title:f.a.get("v2.vote.status_expired"),hoverHint:"",timeString:this.getFormattedTimeString(x.queuedTime+2592e5)}),7==W&&B.push({status:"executed",icon:M,title:f.a.get("v2.vote.status_executed"),hoverHint:"",timeString:this.getFormattedTimeString(x.executedTime)}),n="6"!=W;var q=Object(O.a)(x.forVotes),U=Object(O.a)(x.againstVotes);if(o=q.gt(0),r=U.gt(0),s=Object(O.j)(q.div(S.b.tokenDefaultPrecision)._toHex(),3),l=Object(O.j)(U.div(S.b.tokenDefaultPrecision)._toHex(),3),q<=0&&U<=0)i=-1;else if(q<=0)i=0;else if(U<=0)i=100;else{var z=q/U;i=Object(O.a)(z/(1+z)*100).integerValue(O.a.ROUND_HALF_UP)}var Q=Object(O.a)(J).gt(0);c=0==W||1==W,d="no"==P&&Q,v="yes"==P&&Q,p=Object(O.j)(Object(O.a)(J).div(S.b.tokenDefaultPrecision),3),u=L&&"1"!=W&&"0"!=W&&Q}return m.a.createElement("div",{className:"j-wrapper "+w},m.a.createElement(I.a,null),m.a.createElement("div",{className:"j-container"},x?m.a.createElement("div",{className:"vote-detail"},m.a.createElement(k.b,{className:"back-to-vote-button",to:"/voteNew"},f.a.get("v2.vote.back_to_vote_btn")),m.a.createElement("div",{className:"vote-detail-header"},m.a.createElement("div",{className:"vote-detail-title-container"},m.a.createElement("div",{className:"vote-detail-title"},e,m.a.createElement("span",{className:"proposal-id-tag"},"#"+t)),m.a.createElement("div",{className:"vote-detail-links-row"},m.a.createElement("a",{className:"link-item",href:S.b.tronscanUrl+"/address/"+(null===x||void 0===x?void 0:x.proposer),target:"tronscan",onClick:gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_on_chain_info"})},f.a.get("v2.vote.header_chain_info_link")))),m.a.createElement("div",{className:E()("vote-detail-status-box content-container",{"invisible-content":B.length>3})},B.length>3?B.map((function(e,t){if(0===t||t>B.length-3)return g.renderStatusItem(e,0===t,!1,t)})):B.map((function(e,t){return g.renderStatusItem(e,!1,!1,t)})),B.length>3&&m.a.createElement("div",{className:E()("vote-detail-status-box content-container expandable-display",{expanding:h})},h?B.map((function(e,t){return g.renderStatusItem(e,!1,!1,t)})):B.map((function(e,t){return 0===t||t>B.length-3?g.renderStatusItem(e,0===t,!1,t):g.renderStatusItem(e,0===t,!0,t)}))))),n&&m.a.createElement("div",{className:"progress-bar-container"+(c?"":" no-vote")},m.a.createElement("div",{className:E()("support-progress-bar-container",{"zero-vote":!o}),style:{flexBasis:i+"%"}},m.a.createElement("div",{className:"progress-bar-title"},f.a.get("v2.vote.support")),m.a.createElement("div",{className:"progress-bar-vote-string"},s),v&&m.a.createElement("div",{className:"wallet-vote-container"},m.a.createElement("div",{className:"vote-icon"},m.a.createElement("div",{className:"voted-hint"},f.a.get("v2.vote.voted_before"))),m.a.createElement("div",{className:"wallet-vote-count"},p)),c&&m.a.createElement("button",{className:"action-button",disabled:!L||d,onClick:function(){g.voteForButtonOnClick(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote",value:"for"})}},f.a.get(v?"v2.vote.add_vote_btn":"v2.vote.support")),m.a.createElement("div",{className:"progress-bar-background"},m.a.createElement("div",{className:"progress-bar"})),m.a.createElement("div",{className:"progress-bar"}),m.a.createElement("div",{className:"progress-bar square-upper-half"})),m.a.createElement("div",{className:E()("against-progress-bar-container",{"zero-vote":!r}),style:{flexBasis:100-i+"%"}},m.a.createElement("div",{className:"progress-bar-title"},f.a.get("v2.vote.against")),m.a.createElement("div",{className:"progress-bar-vote-string"},l),d&&m.a.createElement("div",{className:"wallet-vote-container"},m.a.createElement("div",{className:"vote-icon"},m.a.createElement("div",{className:"voted-hint"},f.a.get("v2.vote.voted_before"))),m.a.createElement("div",{className:"wallet-vote-count"},p)),c&&m.a.createElement("button",{className:"action-button",disabled:!L||v,onClick:function(){g.voteAgainstButtonOnClick(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote",value:"against"})}},f.a.get(d?"v2.vote.add_vote_btn":"v2.vote.against")),m.a.createElement("div",{className:"progress-bar-background"},m.a.createElement("div",{className:"progress-bar"})),m.a.createElement("div",{className:"progress-bar"}),m.a.createElement("div",{className:"progress-bar square-upper-half"}))),!L&&m.a.createElement("div",{className:"connect-wallet-hint-bar content-container content-container-shadow"},m.a.createElement("div",{className:"bar-title"},f.a.get("v2.vote.connect_wallet_title")),m.a.createElement("button",{className:"bar-action-btn",onClick:function(){return g.props.network.connectWalletV2()}},f.a.get("v2.vote.connect_wallet_btn"))),u&&m.a.createElement("div",{className:"redeem-vote-bar content-container content-container-shadow"},m.a.createElement("div",{className:"bar-title"},f.a.get("v2.vote.redeem_vote_title",{value:p})),m.a.createElement("button",{className:"bar-action-btn",disabled:!L,onClick:function(){g.showRedeemFromVotePop(),gtag("event","click",{event_category:"PC_V1.5",event_label:"vote_detail_recycle"})}},f.a.get("v2.vote.redeem_vote_btn"))),m.a.createElement("div",{className:"vote-detail-info-container content-container content-container-shadow"},m.a.createElement("div",{className:"vote-detail-info-header"},f.a.get("v2.vote.info_title")),m.a.createElement("div",{className:E()("vote-detail-info-text",{dark:"white"!==w}),dangerouslySetInnerHTML:{__html:a}}))):m.a.createElement("div",{className:"vote-detail-loading-screen"},m.a.createElement(N.a,null))),x&&m.a.createElement(V.a,null),m.a.createElement(y,null),m.a.createElement(C,null),m.a.createElement(D,null),m.a.createElement(F.a,null),m.a.createElement(T.a,null))}}]),a}(m.a.Component))||s)||s)||s)||s,R=Object(w.b)("network")(l=Object(w.c)(l=function(e){Object(v.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.network.setData({routeName:"vote"})}},{key:"render",value:function(){return m.a.createElement("div",null,m.a.createElement(L,null))}}]),a}(m.a.Component))||l)||l;t.default=R}}]);