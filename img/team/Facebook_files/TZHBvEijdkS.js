/*!CK:4289881178!*//*1442807691,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["7x1Bp"]); }

__d('MessengerScrollableTypeaheadView.react',['MessengerScrollableArea.react','MessengerTypeaheadUtils','MessengerTypeaheadView.react','ReactComponentWithPureRenderMixin','React'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=l.createClass({displayName:'MessengerScrollableTypeaheadView',mixins:[k],render:function(){var n=this.props,o=n.className,p=n.width,q=babelHelpers.objectWithoutProperties(n,['className','width']);return (l.createElement(h,{className:o,ref:'scrollable',width:p},l.createElement(j,babelHelpers._extends({},q,{onScrollIntoView:this._handleScrollIntoView}))));},_handleScrollIntoView:function(n){i.scrollEntryIntoView(n,this.refs.scrollable);}});f.exports=m;},null);