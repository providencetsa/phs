/*!CK:644763419!*//*1455593013,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["aPzJG"]); }

__d('AYMTFlyout',['Event'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={listen:function(j,k){h.listen(j,'click',k.show.bind(k));}};f.exports=i;},null);
__d('LazyPagesInsightsPostDetailsDialog.react',['Arbiter','BootloadedComponent.react','DialogExpansion','FeedPlaceHolderStory.react','JSResource','LayerFadeOnHide','React','PagesInsightsDataDispatcher','PagesInsightsDataPayloadTypes','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w=n.PropTypes,x=n.createClass({displayName:'LazyPagesInsightsPostDetailsDialog',propTypes:{pageID:w.string.isRequired,postFeedObjectID:w.string.isRequired},componentDidMount:function(){o.dispatch({pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID,type:p.REQUEST_POST_DETAILS_DATA});h.subscribe('Story/delete',(function(event,y){if(y===this.props.postFeedObjectID)this.refs.dialog.layer.hide();}).bind(this));},render:function(){var y=n.createElement('div',{className:"_19vn"},n.createElement('div',{className:"_2pi0 _4c9a"},n.createElement('div',{className:"_4c9b"},n.createElement(k,null))),n.createElement('div',{className:"_4c9c"},n.createElement('div',{className:"_2ph_ _4mzv"},n.createElement(t,{size:'large'}))));return (n.createElement(q,{behaviors:{DialogExpansion:j,LayerFadeOnHide:m},ref:'dialog',shown:true,width:961},n.createElement(s,null,v._("Post Details")),n.createElement(r,{className:"_4hcm",useCustomPadding:true},n.createElement(i,{bootloadLoader:l('PagesInsightsPostDetails.react'),bootloadPlaceholder:y,pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID}))));}});f.exports=x;},null);
__d('LazyHubblePostDrillDown.react',['AsyncRequest','HubbleContext','InsightsLoadingIndicator.react','JSResource','LayerPage.react','PagesEventType','PageInsightsPostDataType','PagesInsightsGating','LazyPagesInsightsPostDetailsDialog.react','React','ReactLayeredComponentMixin','LayerPageContent.react','XPageAdminHomepagePanelLoggingController','XUIGrayText.react','XUICloseButton.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y=q.PropTypes,z={video:k('HubbleVideoPostDrillDown'),post:k('HubbleDefaultPostDrillDown')},aa=q.createClass({displayName:'LazyHubblePostDrillDown',mixins:[r],props:{drilldownProps:y.object,shown:y.bool,onClose:y.func,onToggle:y.func},getInitialState:function(){return {Component:null};},componentWillMount:function(){this._getDrillDownComponent();},componentDidUpdate:function(ba){if(ba.drilldownProps!==this.props.drilldownProps)this._getDrillDownComponent();},renderLayers:function(){if(!this.props.shown)return null;if(o.hasPostDetailsDialogRefresh&&this.props.drilldownProps.postIdentifier&&this.props.drilldownProps.postType!=='video'&&this.props.drilldownProps.postType!=='sharedVideo')return {postDetailsDialog:q.createElement(p,{onToggle:this.props.onToggle,pageID:this.props.drilldownProps.postID.split('_')[0],postFeedObjectID:this.props.drilldownProps.postIdentifier,shown:true})};var ba=this.state.Component,ca;if(ba){ca=q.createElement(ba,this.props.drilldownProps);}else ca=q.createElement(j,null);return {modal:q.createElement(l,{key:'test',layerRootClass:"_55vx",onToggle:this.props.onToggle,shown:true,width:915},q.createElement(s,{useCustomPadding:true,key:'reuse'},q.createElement('div',{className:"_55m4"},q.createElement(v,{className:"_55ng",onClick:this.props.onClose}),q.createElement('div',null,x._("Post Details"),q.createElement(u,{className:"_2kn"},x._("Reported stats may be delayed from what appears on posts")))),ca))};},_setDrilldownComponent:function(ba){ba.load().done((function(fa){this.setState({Component:fa});}).bind(this));var ca=this.props.drilldownProps.postID.split('_'),da=ca[0],ea=t.getURIBuilder();new h().setURI(ea.getURI()).setData({event_type:m.POST_DETAIL_VIEW,page_id:da,additional_data:{post_id:this.props.drilldownProps.postID,post_type:this.props.drilldownProps.postType,post_status_type:this.props.drilldownProps.postStatusType,is_admin:true,ref:this.props.ref}}).send();},_getDrillDownComponent:function(){if(!this.props.drilldownProps.postIdentifier)return;var ba=i.get('minVideoInsightsCreationTime'),ca=this.props.drilldownProps.postCreatedTime>=ba;if(!ca){if(o.hasPostDetailsDialogRefresh)return;this._setDrilldownComponent(z.post);return;}switch(this.props.drilldownProps.postType){case n.VIDEO:case n.SHARED_VIDEO:this._setDrilldownComponent(z.video);break;default:if(!o.hasPostDetailsDialogRefresh)this._setDrilldownComponent(z.post);}},render:function(){return null;}});f.exports=aa;},null);
__d('AYMTHomepagePanelPostViewWrap.react',['ApiClient','Event','HubbleContext','LazyHubblePostDrillDown.react','React'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=l.PropTypes,n=l.createClass({displayName:'AYMTHomepagePanelPostViewWrap',propTypes:{context:m.object,link:m.object,post:m.object},componentWillMount:function(){i.listen(this.props.link,'click',(function(){h.setClientID(this.props.context.appID);h.setAccessToken(this.props.context.accessToken);j.setContext(this.props.context);this.handlePost();return false;}).bind(this));},getInitialState:function(){return {drilldownProps:{},showDrillDown:false};},handlePost:function(){if(!this.props.post)return;this.setState({drilldownProps:{postCreatedTime:this.props.post.created_time,postID:this.props.post.id,postIdentifier:this.props.post.identifier,postType:this.props.post.type,postStatusType:this.props.post.status_type,ref:'AYMT_homepage_panel'},showDrillDown:true});},onClose:function(){this.onToggleDrillDown(false);},onToggleDrillDown:function(o){if(!o&&this.state.showDrillDown)this.setState({drilldownProps:{},showDrillDown:false});},render:function(){return (l.createElement(k,{drilldownProps:this.state.drilldownProps,shown:this.state.showDrillDown,onClose:this.onClose,onToggle:this.onToggleDrillDown}));}});f.exports=n;},null);
__d('AYMTRefreshElement',['CSS','URI','DOM','DOMQuery','csx','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();f.exports={init:function(n,o){n.subscribe('itemclick',function(){h.addClass(o,'async_saving');});},initObjectSelector:function(n,o){n.subscribe('itemclick',function(){var p=n.getFocusedItem(),q=new i(p._data.ajaxify).getQueryData(),r=q.promoted_object,s=k.scry(m('aymt_object_section'),"._2eka img")[0],t=k.scry(m('aymt_object_section'),"._2ekc a")[0],u;if(t!==undefined){u=new i(t.dataset.hovercard);u.setQueryData({id:r});j.setAttributes(t,{'data-hovercard':u.toString()});j.setAttributes(t,{href:'#'});}else t=k.scry(m('aymt_object_section'),"._2ekc span")[0];j.setContent(t,p._data.label);if(s!==undefined){if(u===undefined){u=new i(s.parentNode.dataset.hovercard);u.setQueryData({id:r});}j.setAttributes(s,{src:p._data.iconsrc});j.setAttributes(s.parentNode,{'data-hovercard':u?u.toString():'#',href:'#'});}h.addClass(o,'async_saving');});},initTimeRangeSelector:function(n,o){n.subscribe('itemclick',function(){var p=n.getFocusedItem(),q=k.scry(m('aymt_campaign_section'),"span ._2ekc")[0];j.setContent(q,p._data.label);h.addClass(o,'async_saving');});},fromLink:function(n,o){n.onclick=function(){h.addClass(o,'async_saving');};}};},null);
__d('AYMTHomepagePanelLogger',['Event','BanzaiLogger'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={init:function(k,l){h.listen(k,'click',function(event){i.log('AYMTHomepagePanelLoggerConfig',l);});}};f.exports=j;},null);