(this["webpackJsonpjustlend-front"]=this["webpackJsonpjustlend-front"]||[]).push([[3],{1421:function(e,t,a){},1438:function(e,t,a){"use strict";var n,l=a(1),o=a.n(l),r=a(4),s=a(8),i=a(14),c=a(17),d=a(16),v=a(0),m=a.n(v),p=(a(63),a(21)),u=a(3),b=a(213),g=a(2),f=a.n(g),h=a(9),j=(a(395),a(1421),Object(p.b)("network")(n=Object(p.b)("lend")(n=Object(p.b)("system")(n=Object(p.c)(n=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).startInterval=Object(r.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.timerInterval||(e.timerInterval=setInterval(Object(r.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))),3e3));case 1:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.startInterval()},e.withdrawVotes=function(){var t=Object(r.a)(o.a.mark((function t(a){var n,l,r,s,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({clickProposalId:a}),e.props.system.clearRejectError(),n=h.b.oldVoteLastId,l=a<=n?h.b.contract.oldWJSTAddress:h.b.contract.WJSTAddress,s={title:"toast.ex",title2:"deposit.transactionsent",title3:"toast.ex_failed",title4:"deposit.confirm_transaction",obj:{value:(r={proposalId:a,contractAddr:l}).votes,token:r.proposalId||""},trnasType:"withdrawVotes"},t.next=8,e.props.system.withdrawVotes(r,s);case 8:(i=t.sent)?(console.log("withdrawVotes complete:",i),e.props.lend.setData({redeemFromVotePop:!1}),e.setState({clickProposalId:""})):e.setState({clickProposalId:""});case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.renderVoting=function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.props.lend.voteSourceData,l=e.state,o=l.lang,r=l.clickProposalId;if((null===t||void 0===t?void 0:t.length)>0)return null===t||void 0===t?void 0:t.map((function(t,l){var s;return m.a.createElement("div",{className:"vote-detail-item",key:l},m.a.createElement("div",{className:"proposalId"},"#",null===t||void 0===t?void 0:t.proposalId),m.a.createElement("div",{className:"title "+("en-US"===o?"":"zh")},n&&(null===(s=n[null===t||void 0===t?void 0:t.proposalId])||void 0===s?void 0:s.title)?"en-US"===o?n[t.proposalId].title.split("&&")[1]:n[t.proposalId].title.split("&&")[0]:""),m.a.createElement("div",{className:"amount ellipsis",title:Object(u.j)(t.allVotes,3)},Object(u.j)(t.allVotes,3)),a&&(r?r===t.proposalId?m.a.createElement("div",{className:"link disabled"},m.a.createElement("span",{className:"siging-icon"})):m.a.createElement("div",{className:"link disabled"},f.a.get("v2.vote.redeem_vote_btn")):m.a.createElement("div",{className:"link",onClick:function(){return e.withdrawVotes(t.proposalId)}},f.a.get("v2.vote.redeem_vote_btn"))))}))},e.timerInterval=null,e.state={lang:window.localStorage.getItem("lang")||f.a.options.currentLocale,visible:!1,clickProposalId:""},e}return Object(i.a)(a,[{key:"componentWillUnmount",value:function(){clearInterval(this.timerInterval),this.timerInterval=null}},{key:"render",value:function(){var e=this,t=this.props.lend,a=t.userCanRedeemVoteList,n=t.userVotingVote,l=t.voteDetailModalVisible,o=t.userCanRedeemVoteNum,r=t.theme,s=this.state.clickProposalId,i=this.props.system.transModalInfo,c=i.declined,d=i.trnasType,v=Object(u.a)(o).eq(0)?0:Object(u.j)(o,3,{miniText:.001});return m.a.createElement(b.a,{title:f.a.get("v2.vote.recovered_vote"),maskClosable:!1,visible:l,closable:!0,onCancel:function(){e.props.system.clearRejectError(),e.props.lend.setData({voteDetailModalVisible:!1}),gtag("event","click",{event_category:"PC_V1.5",event_label:"recycle_votes_close"})},footer:null,className:"vote-detail-modal-v2 ".concat(r),width:457,centered:!0},m.a.createElement("div",{className:"tick-vote-logo"}),m.a.createElement("p",{className:"redeemNum"},f.a.getHTML("v2.vote.recover_vote",{value:v})),n&&(null===n||void 0===n?void 0:n.length)>0||a&&(null===a||void 0===a?void 0:a.length)>0?m.a.createElement("div",{className:"vote-detail-container"},a.length>4&&m.a.createElement("div",{className:"linear"}),a&&(null===a||void 0===a?void 0:a.length)>0&&m.a.createElement(m.a.Fragment,null,m.a.createElement("div",{className:"box"},this.renderVoting(a,!0))),s?m.a.createElement("div",{className:"info"},m.a.createElement("div",{className:"j-sign-tip"},m.a.createElement("span",{className:"j-sign-img"}),m.a.createElement("span",null,f.a.get("v2.sign_in_wallet")))):c&&"withdrawVotes"===d&&m.a.createElement("div",{className:"info"},m.a.createElement("div",{className:"j-reject-tip"},m.a.createElement("span",{className:"j-reject-img mt-3"}),m.a.createElement("span",null,f.a.get("v2.reject_in_wallet"))))):null)}}]),a}(m.a.Component))||n)||n)||n)||n);t.a=j}}]);