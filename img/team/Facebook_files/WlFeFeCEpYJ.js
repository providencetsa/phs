/*!CK:1369751465!*//*1455031646,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["UM7RI"]); }

__d('ComposerXHiddenInputClear',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.element.value='';}f.exports=h;},null);
__d("ComposerXSessionInputClear",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){i.element.value=new Date().valueOf().toString().substr(0,10);}f.exports=h;},null);
__d('ComposerXPrivacyWidgetTags',['Arbiter','CurrentUser','PrivacySelectorBase','getObjectValues'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m){'use strict';var n=m.getComponent('mainprivacywidget');if(!n){this._subscriptions=[];return null;}this._privacyWidget=n.element;this._privacyWidgetInstance=n.instance&&n.instance.getInstance().getInstance();this._mentionsInput=m.getComponent('maininput').instance;this._placeTypeahead=m.getComponent('placetagger')?m.getComponent('placetagger').instance:null;this._friendsTokenizer=m.getComponent('withtagger')?m.getComponent('withtagger').instance:null;this._ogTagger=m.getComponent('ogtagger')?m.getComponent('ogtagger').instance:null;this._init();}l.prototype._init=function(){'use strict';this._subscriptions=[this._mentionsInput.subscribe('update',this._informChangedTags.bind(this))];if(this._placeTypeahead){this._subscriptions.push(this._placeTypeahead.subscribe('select',this._onPlaceSelect.bind(this)));this._subscriptions.push(h.subscribe('Events/autoSuggestionSelected',this._onPlaceSelect.bind(this)));this._subscriptions.push(this._placeTypeahead.subscribe('unselect',this._onPlaceUnselect.bind(this)));}if(this._friendsTokenizer)this._subscriptions.push(this._friendsTokenizer.subscribe(['addToken','removeToken'],this._informChangedTags.bind(this)));this._informChangedTags();};l.prototype._getTaggedNamesForAudience=function(){'use strict';var m={},n=this._mentionsInput.getMentions();for(var o in n)if(n[o].type=='user')m[o]=n[o].text;if(this._friendsTokenizer)this._friendsTokenizer.getTokens().map(function(p){m[p.getValue()]=p.getText();});delete m[i.getID()];return k(m);};l.prototype._onPlaceSelect=function(m,n){'use strict';this._placeType=n.selected.place_type;this._informChangedTags();};l.prototype._onPlaceUnselect=function(m,n){'use strict';this._placeType=null;this._informChangedTags();};l.prototype._informChangedTags=function(){'use strict';var m=[];if(this._friendsTokenizer)m=this._friendsTokenizer.getTokens();var n={withTags:m,mention:this._mentionsInput.getMentions()};h.inform('Composer/changedtags',n);if(this._privacyWidgetInstance&&this._privacyWidgetInstance instanceof j)this._privacyWidgetInstance.informTagsChanged(n);};l.prototype.destroy=function(){'use strict';while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();};Object.assign(l.prototype,{_subscriptions:null,_placeType:null});f.exports=l;},null);
__d('ComposerXStatusAttachment',['Arbiter','BanzaiODS','Button','ComposerXAttachment','ComposerXAttachmentButtonBarState','ComposerXAttachmentUtils','ComposerXController','ComposerXDragDrop','ComposerXPrivacyWidgetTags','DOM','Event','Parent','URI','URLScraper','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){if(c.__markCompiled)c.__markCompiled();var w,x;w=babelHelpers.inherits(y,k);x=w&&w.prototype;function y(z,aa,ba){'use strict';x.constructor.call(this);this._root=z;this._tagger=aa;this._config=ba;this.attachmentClassName=ba.classname;}y.prototype.getRoot=function(){'use strict';return this._root;};y.prototype.initWithComponents=function(){'use strict';var z=this.getComponent('maininput');m.initMentions(z,this._config.mentionsPlaceholder,this.getComposerID());this._tagger.init(this);this._privacyWidgetTags=new p(this);l.trackCityChanges(this);var aa=q.find(z.element,'textarea.input');if(!this._scraper){this._scraper=new u(aa);this._scraper.subscribe('match',(function(da,ea){if(!this._config.scraper_endpoint)return;var fa=new t(this._config.scraper_endpoint);fa.addQueryData({scrape_url:encodeURIComponent(ea.url),remove_url:this._config.remove_url,attachment_class:this._config.classname});n.getAttachment(this._root,fa.toString());}).bind(this));}this._scraper.enable();if(this._config.textOnlyEdit){this._scraper.disable();this._scraper=null;}if(!this._isEditComposer()){this._scraper.check();}else{var ba=aa.value.length;aa.setSelectionRange(ba,ba);}this._dragdrop=new o(this._root,this._composerID,this._config.targetID);this._dragdrop.enableURLDropping();var ca=q.scry(this._root,"._9s");if(ca.length>0)this._removeListener=r.listen(ca[0],'click',(function(){var da=q.scry(this._root,'input[name="hide_object_attachment"]');if(da.length!==0)da[0].value=1;var ea=this._config.remove_endpoint;if(!ea)ea=this._config.remove_url;i.bumpEntityKey('content_production','composer.remove_link.fbfeed');n.getAttachment(this._root,ea);}).bind(this));if(this._config.postActionsButton!=null)this._config.postActionsButton.initHiddenInputs(this.getComponent('pabhiddeninputs').instance);h.inform('ComposerXStatusAttachment/ready',this._composerID,h.BEHAVIOR_STATE);z.instance.subscribe('valueUpdate',(function(da,ea){var fa=q.scry(this._root,"._4jy1")[0];j.setEnabled(fa,ea.value!==null&&ea.value.trim().length>0||ea.hasAuxContent);h.inform(j.isEnabled(fa)?'ComposerXStatusAttachment/submitEnabled':'ComposerXStatusAttachment/submitDisabled');}).bind(this));};y.prototype.cleanup=function(){'use strict';this._tagger.cleanup();this._privacyWidgetTags.destroy();this._privacyWidgetTags=null;if(this._scraper)this._scraper.disable();if(this._removeListener){this._removeListener.remove();this._removeListener=null;}if(this._dragdrop){this._dragdrop.deactivate();this._dragdrop=null;}};y.prototype.reset=function(){'use strict';this._tagger.reset();};y.prototype.canSwitchAway=function(){'use strict';return !s.byClass(this._root,'async_saving');};y.prototype.allowOGTagPreview=function(){'use strict';return true;};y.prototype._isEditComposer=function(){'use strict';return !!this.getComponent('editparams');};Object.assign(y.prototype,{_privacyWidgetTags:null,_scraper:null,_dragdrop:null,_removeListener:null});f.exports=y;},null);
__d('ComposerXCameraIconBehavior',['Arbiter','ComposerXMediaUploadHandler','CSS','Event','FirstPhotoUploadLogger','PagesComposerPostActionsLoggerEvent','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o={initCameraIcon:function(p){this._cameraIcon=p.getComponent('cameraicon');if(!this._config.showCameraIcon){j.hide(this._cameraIcon.element);return;}j.show(this._cameraIcon.element);var q=this._cameraIcon.instance,r=new i(this._config.composerID,{imagesOnly:this._config.imagesOnly,isEditComposer:this._config.isEditComposer,photoUploadOverrideEndpoint:this._config.photoUploadOverrideEndpoint});this._listeners.push(k.listen(this._cameraIcon.element,'click',(function(){r.fetchAttachments();h.inform('cameraicon/click');l.log(m.CLICK_UPLOAD_BUTTON_IN_TOOLBAR,this._config.targetID,this._root);}).bind(this)));this._subscriptions.push(q.subscribe('change',(function(){r.handleFileSelected(q);j.addClass(this._cameraIcon.element,"_19_a");}).bind(this)));}};f.exports=o;},null);
__d('ComposerXPlusTagger',['ComposerXCameraIconBehavior','ComposerXStandardTagger','classWithMixins','mixin'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,j(i,k(h)));m=l&&l.prototype;function n(o){'use strict';m.constructor.call(this,o);this._eventuallyTagger=null;}n.prototype.init=function(o){'use strict';m.init.call(this,o);if(o.getComponent('cameraicon'))this.initCameraIcon(o);};n.prototype._nonObstrusiveSwitchToTagger=function(o){'use strict';var p=this._onTaggerShowCallbacks[o];delete this._onTaggerShowCallbacks[o];this.switchToTagger(o);this._dontHideTaggerOnMentionsFocus=o;this._onTaggerShowCallbacks[o]=p;};n.prototype.eventuallySwitchToTagger=function(o){'use strict';if(!this.isAnyTaggerShown()){this._nonObstrusiveSwitchToTagger(o);}else if(this._currentTagger!==o)this._eventuallyTagger=o;};n.prototype.switchToTagger=function(o){'use strict';if(this._eventuallyTagger===o)this._eventuallyTagger=null;this._nonEventuallyHideTaggers();this._showTagger(o);};n.prototype.hideTaggers=function(){'use strict';m.hideTaggers.call(this);if(this._eventuallyTagger){this._nonObstrusiveSwitchToTagger(this._eventuallyTagger);this._eventuallyTagger=null;}};n.prototype._nonEventuallyHideTaggers=function(){'use strict';m.hideTaggers.call(this);};n.prototype._hideTaggersFromMentionsInputClick=function(){'use strict';if(this._currentTagger!=this._dontHideTaggerOnMentionsFocus){this.eventuallySwitchToTagger(this._dontHideTaggerOnMentionsFocus);m._hideTaggersFromMentionsInputClick.call(this);}};f.exports=n;},null);
__d('ComposerXPlusTaggerWithOG',['ComposerXOGTaggerBehavior','ComposerXPlusTagger','classWithMixins','mixin'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l,m;l=babelHelpers.inherits(n,j(i,k(h)));m=l&&l.prototype;n.prototype.init=function(o){'use strict';m.init.call(this,o);this.initOGTagger(o);};n.prototype.cleanup=function(){'use strict';m.cleanup.call(this);this.cleanupOGTagger();};function n(){'use strict';l.apply(this,arguments);}f.exports=n;},null);
__d('ComposerXCitySharerReset',['AsyncRequest'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){var l=k.instance.getTargetID();if(l!==0&&k.instance.getValue()!=="")l=0;k.instance.clearCity();new h().setURI('/ajax/places/city_sharer_reset.php').setData({target_id:l}).setHandler(function(m){j(k,m.getPayload());}).send();}function j(k,l){k.instance.setShareSetting(l.sharedefault);k.instance.setSessionID(new Date().valueOf().toString().substr(0,10));if(l.citypageid)k.instance.setDefaultCity(l.citystring,l.citypageid,l.cityid);if(l.sharedefault)k.instance.useDefaultCity();}f.exports=i;},null);
__d('ComposerXOGTaggerReset',['CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){j.instance.reset();h.hide(j.element);}f.exports=i;},null);
__d('ComposerXPeopleTaggerReset',['CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){j.instance.reset();h.hide(j.element);}f.exports=i;},null);
__d('ComposerXPlaceTaggerReset',['CSS'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j){j.instance.getCore().reset();h.hide(j.element);}f.exports=i;},null);