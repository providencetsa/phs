/*!CK:1205688948!*//*1454296598,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["cOHWo"]); }

__d('P2PPendingPaymentRequestJewelBanner.react',['P2PJewelBanner.react','P2PPaymentRequest','P2PPaymentRequestActionHelper','React','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=k.PropTypes,n=k.createClass({displayName:'P2PPendingPaymentRequestJewelBanner',propTypes:{paymentRequest:m.instanceOf(i).isRequired},handleDeclineClick:function(){j.initDeclinePaymentRequestFlow(this.props.paymentRequest);},handlePayClick:function(){j.initPayForPaymentRequestFlow(this.props.paymentRequest,'banner');},renderBodyText:function(){var o=this.props.paymentRequest,p=o.memoText;if(!p)return null;return l._("For {What the user paid for}",[l.param('What the user paid for',p)]);},render:function(){var o=this.props.paymentRequest;return (k.createElement(h,{bodyText:this.renderBodyText(),primaryActionConfig:{onClick:this.handlePayClick,text:l._("Pay")},secondaryActionConfig:{onClick:this.handleDeclineClick,text:l._("Decline")},titleText:l._("{requester_name} requested {amount}",[l.param('requester_name',o.requester.name),l.param('amount',o.amountWithSymbol)])}));}});f.exports=n;},null);