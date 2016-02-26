/*!CK:1257079259!*//*1455634356,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["7OW6Y"]); }

__d('HomeRHCAdsBasicRefresh',['AdsRefreshHandler','Arbiter','NavigationMessage','Run','SubscriptionsHandler','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o,p,q;function r(){if(n){n.cleanup();n=null;}if(o){o.release();o=null;}p=null;}function s(){var v=m(q);if(v&&p){v.appendChild(p);p=null;}}function t(v,w){p=w;n&&n.forceLoadIfEnoughTimePassed(0);}var u={init:function(v,w,x){q=v;n=new h(m(v),w,x).subscribeDefaultEventsForRefresh();o=new l();o.addSubscriptions(i.subscribe(j.NAVIGATION_BEGIN,r),i.subscribe('ProfileQuestionAnswered',t),i.subscribe('AdsRefreshHandler/AdsLoaded',s));k.onLeave(r);}};f.exports=u;},null);
__d('EntstreamStoryDeduper',['CSS','DOM','csx'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=function(o,p,q,r){var s=i.scry(o,p||"._5jmm").filter(q),t={};for(var u=0;u<s.length;u++){var v=s[u],w=v.getAttribute('data-dedupekey');if(t[w]){r(v);}else t[w]=1;}},l=function(o){return !!o.getAttribute('data-dedupekey');},m=function(o){return l(o)&&h.shown(o);},n={dedupe:function(o,p){k(o,p,l,function(q){return i.remove(q);});},dedupeHide:function(o,p){k(o,p,m,function(q){return h.hide(q);});}};f.exports=n;},null);
__d('NewStoriesPillController',['Bootloader','DOMQuery','csx','ge'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l={_isAtTop:false,_view:null,show:function(m){h.loadModules(["NewStoriesPillView"],(function(n){this._view=n;n.renderInto(i.scry(k('contentArea'),"._2c44")[0],this._isAtTop);n.hideWhenScrollAbove(m);}).bind(this));},hide:function(){this._isAtTop=false;if(this._view)this._view.unmount();},setAtTop:function(){this._isAtTop=true;if(this._view)this._view.setAtTop();}};f.exports=l;},null);
__d("XFeedSeeFirstStoryController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/feed\/control\/see_first\/story\/",{});},null);
__d('SeeFirstStoryLogger',['AsyncRequest','XFeedSeeFirstStoryController'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=function(){var k=i.getURIBuilder().getURI();new h(k).send();};f.exports={log:j};},null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','ge','getScrollPosition'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=0,r=null;function s(){if(r)return;r=new m();r.addSubscriptions(h.subscribe(k.NAVIGATION_BEGIN,function(){v(0);t();}),h.subscribe('ufi/didUpdate',function(y,z){if(z.offsetY)x.adjustVerticalWindowPosition(p(window),z.offsetY);}),j.listen(window,'resize',function(){if(!i.hasFixedBlueBar()){v(0);t();}}),j.listen(window,'scroll',function(){if(!u())t();}));l.onLeave(function(){return r&&r.release();});}function t(){r.release();r=null;}function u(){if(q<=0)return false;v(n(p(window).y,0,q));return q>0;}function v(y){if(y===q)return;w('leftCol',y);w('rightCol',y);q=y;}function w(y,z){var aa=o(y);if(aa)aa.style.marginTop=z?z+'px':'';}var x={adjustVerticalWindowPosition:function(y,z){s();v(z);window.scrollTo(y.x,y.y+q);}};f.exports=x;},null);
__d('runAfterScrollingStops',['Arbiter','Event','Run','debounceAcrossTransitions','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();function m(x,y,z){if(y&&p[y])return;if(!o){h.subscribe('page_transition',w);o=true;}if(!n){x();return;}y&&(p[y]=1);q.push(x);if(!z){if(s){j.onLeave(w);s=false;}r.push(q.length-1);}}var n,o,p={},q=[],r=[],s=true,t=500,u=k(function(){n=false;var x=q;q=[];r=[];p={};for(var y=0,z=x.length;y<z;++y)x[y]();},t);function v(){n=true;u();}function w(){var x=r;r=[];s=true;for(var y=0,z=x.length;y<z;++y)q[x[y]]=l;}i.listen(window,'scroll',v);f.exports=m;},null);
__d('LitestandOffscreenController',['Arbiter','CSS','DOMQuery','Event','getFullScreenElement','NavigationMessage','Run','Scroll','Style','SubscriptionsHandler','Vector','cx','csx','getOrCreateDOMID','queryThenMutateDOM','runAfterScrollingStops','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){if(c.__markCompiled)c.__markCompiled();var y=1,z=9,aa=10,ba={},ca=false,da,ea,fa,ga,ha=[];function ia(){da&&da.release();da=null;ca=false;}function ja(){ba={};ha=[];}function ka(){if(i.hasClass(document.body,"_5vb_"))return aa;return z;}function la(){ga=ga||r.getViewportDimensions().y;ea=r.getScrollPosition().y;fa=ea+ga;if(y){ea-=ga*y;fa+=ga*y;}for(var ta in ba){var ua=ba[ta];ua.position=r.getElementPosition(ua.element).y;if(!ua.hidden)ua.height=ua.element.offsetHeight;}}function ma(){var ta=[],ua=l();for(var va in ba){var wa=ba[va],xa=wa.position,ya=xa+wa.height<ea,za=xa>fa;if(!ua&&!wa.hidden&&(ya||za)){na(wa);}else if(!ya&&!za){wa.pendingHide=false;if(wa.hidden){if(wa.dirty&&xa<ea){ta.push(va);i.addClass(oa(wa),"_49nu");}else p.apply(wa.element,{height:'',marginBottom:''});i.show(oa(wa));wa.dirty=false;wa.hidden=false;}}}if(!ta.length)return;var ab=0;v(function(){for(var bb=0,cb=ta.length;bb<cb;bb++){var db=ba[ta[bb]];ab+=db.height-oa(db).offsetHeight+p.getFloat(db.element,'marginBottom');}},function(){for(var bb=0,cb=ta.length;bb<cb;bb++){var db=ba[ta[bb]];i.removeClass(oa(db),"_49nu");p.apply(db.element,{height:'',marginBottom:''});}ab&&o.setTop(document.body,o.getTop(document.body)-ab);});}function na(ta){if(!ta.pendingHide){ha.push(ta);ta.pendingHide=true;}}function oa(ta){if(ta.wrapperElement)return ta.wrapperElement;var ua=ta.element;if(ua.firstElementChild)return ta.wrapperElement=ua.firstElementChild;for(var va=0;va<ua.childNodes.length;va++)if(ua.childNodes[va].tagName)return ta.wrapperElement=ua.childNodes[va];}function pa(){var ta=ka()+'px';for(var ua=0;ua<ha.length;ua++){var va=ha[ua];if(j.scry(va.element,"._52fb").length)va.pendingHide=false;if(va&&va.element&&va.pendingHide&&!va.hidden){p.apply(va.element,{height:va.height+'px',marginBottom:ta});i.hide(oa(va));va.hidden=true;va.pendingHide=false;}}ha=[];}function qa(){w(pa,'LitestandOffscreenController/hide');v(la,ma,'LitestandOffscreenController');}function ra(){n.onLeave(ia);da=new q();da.addSubscriptions(h.subscribe(m.NAVIGATION_BEGIN,ja),k.listen(window,'scroll',x(qa)),k.listen(window,'resize',x(function(){ga=null;qa();})));ca=true;}var sa={attachSubstream:function(ta){ca||ra();ba[u(ta)]={element:ta};}};f.exports=sa;},null);
__d('LitestandNewStoryController',['Animation','Arbiter','AsyncRequest','BlueBar','LitestandColumnManager','LitestandMessages','LitestandStream','Style','$','getScrollPosition','queryThenMutateDOM','requestAnimationFrame','setImmediate'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=50,v=600,w=500,x,y,z;function aa(){z&&clearTimeout(z);z=null;}function ba(){z=setTimeout(function(){z=null;ca();},w);}function ca(){var ia;r(function(){ia=n.canInsertNewerStories();},function(){if(ia){fa();}else ba();},'LitestandNewStoryController/tryShowingStories');}function da(ia){var ja=new h(ia).from('opacity',0).to('opacity',1).duration(v);ja.go();setTimeout(function(){ja.stop();o.set(ia,'opacity',1);},v+200);}function ea(ia){aa();if(!y)return;var ja=y.nextSibling;if(ia&&ja)var ka=ja.offsetTop;o.apply(y,{height:'',left:'',overflow:'',position:'',width:''});if(ia){var la=ja.offsetTop+u,ma=la-ka,na=q(window);l.adjustVerticalWindowPosition(na,ma);s(function(){l.adjustVerticalWindowPosition(na,ma);da(y);if(x){x.setAtTop();x.show(ma);}});}else da(y);i.inform(m.STORIES_INSERTED);i.inform(m.NEWER_STORIES_INSERTED);t(function(){return i.inform('reflow');});new j().setURI('/ajax/litestand/update_filter_viewtime').setData({section_id:n.getSectionID()}).send();}function fa(){ea(k.hasFixedBlueBar());}function ga(){ea(false);}var ha={waitForDisplay:function(ia){if(!y)y=p(ia);if(n.canInsertNewerStories()){fa();}else ba();},showStoriesNow:function(ia){y=ia;ga();},setNewStoryPill:function(ia){x=ia;}};f.exports=ha;},null);
__d('LitestandStreamLoader',['$','Arbiter','Bootloader','CSS','DOM','EntstreamStoryDeduper','Event','JSXDOM','LitestandMessages','LitestandOffscreenController','LitestandStoryInsertionStatus','LitestandStream','NavigationMessage','OnVisible','Run','UserActivity','ge','getElementPosition','getOrCreateDOMID','getUnboundedScrollPosition','getViewportDimensions','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca){if(c.__markCompiled)c.__markCompiled();var da=0,ea=false,fa={},ga,ha,ia,ja,ka,la,ma=0,na,oa,pa=[],qa=0,ra,sa;function ta(){v.onLeave(ua);da=0;pa=[i.subscribe(t.NAVIGATION_BEGIN,ua),i.subscribe(p.NEWER_STORIES_INSERTED,function(){sa=null;})];pa.push(i.subscribe('layer_shown',function(kb,lb){if(lb&&lb.type==='DialogX')da++;}),i.subscribe('layer_hidden',function(kb,lb){if(lb&&lb.type==='DialogX')da--;}));r.registerBlocker(function(){return da>0;});ea=true;}function ua(){i.inform(p.LEAVE_HOME);ea=false;fa={};oa=null;ma=0;pa.forEach(i.unsubscribe);pa=[];ga&&ga.remove();ka&&clearTimeout(ka);ka=null;ja=null;sa=null;na&&na.remove();na=null;qa=0;}function va(kb){ka&&clearTimeout(ka);ka=setTimeout(function(){ka=null;bb();},kb);}function wa(){if(oa&&ja&&oa.pollIntervalMS&&oa.pollIntervalMS>1000){w.setIdleTime(oa.newStoryIdleTime);va(oa.pollIntervalMS);}}function xa(){ga=new u(l.find(ha,'a'),ib.bind(null),false,oa?oa.bufferPixels:1000);}function ya(){var kb=aa(window).y;return kb>oa.firstPagerScrollBuffer;}function za(){if(ya()){xa();na&&na.remove();na=null;}}function ab(kb){var lb=l.find(ha,'a');n.listen(lb,'click',function(event){ib();na&&na.remove();na=null;event.preventDefault();});var mb=y(ha),nb=ba();if(kb&&mb.y<nb.height){ib();}else if(kb&&!ya()){na=n.listen(window,'scroll',ca(za));}else xa();}function bb(){if(!ja)return;if(!w.isActive(oa.newStoryIdleTime)){w.subscribeOnce(bb);return;}if(w.hasBeenInactive()){w.resetActiveStatus();var kb=oa.pollIntervalMS,lb=Date.now()-w.getLastInActiveEnds();if(lb<kb){va(kb-lb);return;}}if(!s.canInsertNewerStories()){va(oa.pollIntervalMS);return;}cb();}function cb(){if(!ja)return;ka&&clearTimeout(ka);if(!sa){var kb=s.getStreamRoot();sa=o.div({style:{height:0,width:kb.offsetWidth+'px',left:'-10000px',opacity:0,overflow:'hidden',position:'absolute'}});l.prependContent(kb,sa);i.inform(p.NEW_STORIES_CONTAINER_CREATED,sa);}var lb=o.div(null);l.prependContent(sa,lb);j.loadModules(["UIPagelet"],function(mb){mb.loadFromEndpoint('LitestandNewerStoriesPagelet',lb,Object.assign(ja,{cursor:ra,containerID:z(sa)}),{crossPage:true});});}function db(){var kb=z(ha);k.addClass(ha,'async_saving');var lb=gb(),mb=lb.cursor,nb=lb.storiesCount;if(fa[mb])throw new Error('This cursor has been used before, stories will be '+'repeated. Cursor: '+mb);fa[mb]=mb;var ob={cursor:mb,pager_config:ia,pager_id:kb,scroll_count:++ma,feed_stream_id:s.getFeedStreamID(),client_stories_count:nb};j.loadModules(["UIPagelet"],function(pb){pb.loadFromEndpoint(oa.pagerController,z(la),ob,{append:true,automatic:true,usePipe:true,crossPage:oa.crossPage,errorHandler:eb,transportErrorHandler:eb});i.inform(p.STORIES_REQUESTED);});}function eb(kb){var lb=gb();delete fa[lb.cursor];k.removeClass(ha,'async_saving');}function fb(){var kb=hb();if(kb.length){return kb[0].getAttribute('data-cursor');}else return ha&&ha.getAttribute('data-cursor');}function gb(){var kb=hb(),lb={},mb=oa&&oa.noDOMCursors;lb.storiesCount=kb.length;if(!kb.length)kb.length=0;if(kb.length&&!mb){lb.cursor=kb[kb.length-1].getAttribute('data-cursor');}else lb.cursor=ha&&ha.getAttribute('data-cursor');return lb;}function hb(){var kb=l.scry(la,s.getStoriesSelector());return kb.filter(function(lb){return lb.getAttribute('data-cursor');});}function ib(){if(ea){db();ga&&ga.remove();ga=null;}}var jb={register:function(kb,lb,mb,nb){ea||ta();oa=babelHelpers._extends({bufferPixels:1000,firstPagerScrollBuffer:100,pagerController:'LitestandMoreStoriesPagelet',pollIntervalMS:null,newStoryIdleTime:60000},lb);ia=mb;la=h(kb);ra=fb();ha=nb;ab(true);wa();},removeOldPager:function(kb,lb){if(kb)l.remove(h(kb));k.show(h(lb));},removeLoadingIndicator:function(kb,lb){var mb=x(kb);if(mb)l.remove(mb);k.show(lb);},moreStoriesInserted:function(kb){i.inform(p.STORIES_INSERTED,{substream_id:kb});var lb=h(kb);q.attachSubstream(lb);},attachNewPager:function(kb){m.dedupeHide(s.getStreamRoot(),s.getStoriesSelector());ha=kb;ha&&ab(false);},setPollerData:function(kb){if(kb){ja=kb;wa();}},headLoadCompleted:function(kb){ra=kb.newCursor;wa();var lb=kb.stories;if(lb&&lb.length>0){for(var mb=lb.length-1;mb>=0;mb--)lb[mb].setAttribute('data-insertion-position',--qa);m.dedupe(s.getStreamRoot(),s.getStoriesSelector());i.inform('Stream/totalHeadLoadedStories',{count:-qa});}},forceNewFetch:cb};f.exports=jb;},null);
__d('PhotosUploadWaterfallMixin',['PhotosUploadWaterfall','emptyFunction'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=i,k={getUploaderApp:j,getWaterfallID:j,getAdditionalData:function(){return {};},logWaterfallStep:function(l,m,n){h.sendSignal(babelHelpers._extends({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:l,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),m),n);},logWaterfallStepUsingBanzai:function(l,m,n){h.sendBanzai(babelHelpers._extends({qn:this.getWaterfallID(),uploader:this.getUploaderApp(),step:l,ref:this.getWaterfallSource&&this.getWaterfallSource()},this.getAdditionalData(),m),n);}};f.exports=k;},null);
__d('PhotoSourceTypes',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports=h({COMPUTER:null,POSTED_PHOTOS:null,SYNCED_PHOTOS:null,SUGGESTIONS:null,PAGES_POSTED_PHOTOS:null});},null);
__d('BaseSelectionContainer',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0;function i(){'use strict';this.$BaseSelectionContainer1=(h++).toString();}i.prototype.getSelectionContainerID=function(){'use strict';return this.$BaseSelectionContainer1;};i.prototype.getSource=function(){'use strict';throw 'This must be implemented by the child class';};i.prototype.getName=function(){'use strict';return null;};i.prototype.getSize=function(){'use strict';return null;};i.prototype.hasPlaceholderUI=function(){'use strict';throw 'This must be implemented by the child class';};f.exports=i;},null);
__d('SelectionSource',['PhotoSourceTypes'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={FILE:'file',FLASH:'flash',VAULT:'vault',SUGGESTIONS:'suggestions',POSTED_PHOTOS:'posted_photos',PAGES_POSTED_PHOTOS:'pages_posted_photos',toPhotoSourceType:function(j){switch(j){case i.FILE:case i.FLASH:return h.COMPUTER;case i.VAULT:return h.SYNCED_PHOTOS;case i.SUGGESTIONS:return h.SUGGESTIONS;case i.POSTED_PHOTOS:return h.POSTED_PHOTOS;case i.PAGES_POSTED_PHOTOS:return h.PAGES_POSTED_PHOTOS;default:throw 'No mapping for SelectionSource: '+j;}}};f.exports=i;},null);
__d('FileSelectionContainer',['BaseSelectionContainer','SelectionSource'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,h);k=j&&j.prototype;function l(m){'use strict';k.constructor.call(this);this.$FileSelectionContainer1=m;}l.prototype.getFile=function(){'use strict';return this.$FileSelectionContainer1;};l.prototype.getSource=function(){'use strict';return i.FILE;};l.prototype.getName=function(){'use strict';return this.$FileSelectionContainer1.fileName||this.$FileSelectionContainer1.name;};l.prototype.getSize=function(){'use strict';return this.$FileSelectionContainer1.fileSize||this.$FileSelectionContainer1.size;};l.prototype.hasPlaceholderUI=function(){'use strict';return false;};f.exports=l;},null);
__d('FilePickerEvent',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={BEGIN:'FilePickerEvent/BEGIN',SELECT_START:'FilePickerEvent/SELECT_START',SELECTED:'FilePickerEvent/SELECTED_FILES',ALBUM_LIMIT_EXCEEDED:'FilePickerEvent/ALBUM_LIMIT_EXCEEDED',SESSION_LIMIT_EXCEEDED:'FilePickerEvent/SESSION_LIMIT_EXCEEDED',SELECT_CANCELED:'FilePickerEvent/SELECT_CANCELED',FALLBACK:'FilePickerEvent/FALLBACK'};},null);
__d('HTML5FilePicker',['ArbiterMixin','BrowserSupport','CSS','DOM','FilePickerEvent','FileSelectionContainer','Parent','PhotosUploadID','PhotosUploadWaterfall','PhotosUploadWaterfallMixin','PhotosUploadWaterfallXMixin','PUWApplications','PUWSteps','URI','cx','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();function x(y,z){this._config=babelHelpers._extends({accept:undefined,multiple:undefined},z);this._button=y;this._beginInformed=false;if(!i.hasFileAPI()){this.logStep(t.CLIENT_PROCESS_UNAVAILABLE,{error:'no_file_api'});if(this._config.hasOwnProperty('fallbackFunction')){this._config.fallbackFunction.call(this);return;}return;}this._subscriptions=[];var aa=this._config.input||k.create('input',{type:'file',className:"_n"});if(this._config.hasOwnProperty('accept'))aa.accept=this._config.accept;if(this._config.hasOwnProperty('multiple'))aa.multiple=this._config.multiple;if(this._config.hasOwnProperty('title'))aa.title=this._config.title;var ba=k.create('label',{className:'accessible_elem','for':w(aa)},aa.title),ca=k.create('div',{className:"_3jk"},[ba,aa]);j.addClass(this._button,"_m");k.appendContent(this._button,ca);this._button.setAttribute('rel','ignore');this._bindInput(aa);var da=n.byClass(this._button,'addPhotosDisabled');if(da){j.removeClass(da,'addPhotosDisabled');j.addClass(da,'addPhotosEnabled');}}Object.assign(x.prototype,h,q,r,{getUploaderApp:function(){return p.APP_HTML5;},getWaterfallID:function(){return this._config.qn;},getWaterfallAppName:function(){return s.WEB_HTML5;},getWaterfallSource:function(){return this._config.ref;},getSwfID:function(){return null;},_constructFileList:function(){var y=Array.from(this._input.files);y.forEach(function(z){z.uploadID=o.getNewID();});return y;},_constructFileSelectionContainerList:function(){var y=Array.from(this._input.files);return y.map(function(z){return new m(z);});},cleanup:function(){if(this._input){this._input.onclick=null;this._input.onchange=null;}},_bindInput:function(y){this.cleanup();y.onclick=(function(){this.logWaterfallStep(p.SELECT_START);if(!this._beginInformed){this._beginInformed=true;this.inform(l.BEGIN||'FilePickerEvent/BEGIN');}this.inform(l.SELECT_START);}).bind(this);y.onchange=(function(){this.inform(l.SELECTED,{sender:this,files:this._constructFileList(),selections:this._constructFileSelectionContainerList()});this._bindInput(this._input.cloneNode(false));}).bind(this);if(this._input)k.replace(this._input,y);this._input=y;}});f.exports=x;},null);
__d('UploadSession',['AsyncRequest','FilePickerEvent','PhotosUploadWaterfall','PUWSteps','URI','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={};function o(q){'use strict';this._sessionID=q;this._asyncBootstrapped=false;this._controller=null;this._overlay=null;this._pickers=[];this._pendingFileLists=[];this._beginLogged=false;this._albumLimitWasExceeded=false;this._sessionLimitWasExceeded=false;}o.prototype.addFilePicker=function(q){'use strict';if(!m(this._pickers,q)){this._pickers.push(q);if(this._controller&&q.getSwfID&&q.getSwfID())this._controller.preregisterSwf&&this._controller.preregisterSwf(q.getSwfID());q.subscribe(i.BEGIN,(function(r,s){if(!this._beginLogged){this._beginLogged=true;q.logWaterfallStep(j.BEGIN);q.logStep(k.CLIENT_FLOW_BEGIN);}}).bind(this));q.subscribe(i.SELECTED,(function(r,s){q.logStep(k.CLIENT_SELECT_SUCCESS,{volume:s.files.length});if(this._controller){this._controller.uploadFiles(s.files);}else this._pendingFileLists.push(s);if(this._asyncBootstrapped)return;var t=q._button,u=new l(t.getAttribute('ajaxify'));u.addQueryData('num_selected',s.files.length);h.bootstrap(u.toString(),t,true);this._asyncBootstrapped=true;}).bind(this));q.subscribe(i.SELECT_START,(function(){q.logStep(k.CLIENT_SELECT_BEGIN);}).bind(this));q.subscribe(i.SELECT_CANCELED,(function(){q.logStep(k.CLIENT_SELECT_CANCEL);if(!this._overlay){q.logStep(k.CLIENT_FLOW_CANCEL);this._beginLogged=false;}}).bind(this));q.subscribe(i.ALBUM_LIMIT_EXCEEDED,(function(){if(this._controller){this._controller.albumLimitExceeded();}else this._albumLimitWasExceeded=true;}).bind(this));q.subscribe(i.SESSION_LIMIT_EXCEEDED,(function(){if(this._controller){this._controller.sessionLimitExceeded();}else this._sessionLimitWasExceeded=true;}).bind(this));}};o.prototype.addController=function(q){'use strict';this._controller=q;this._asyncBootstrapped=true;var r=this._controller.getWaterfallID?this._controller.getWaterfallID():this._controller.getWaterfallConfig().waterfallID,s=this._controller.getUploaderApp?this._controller.getUploaderApp():this._controller.getWaterfallConfig().waterfallApp;if(!this._beginLogged){this._beginLogged=true;j.sendSignal({qn:r,step:j.BEGIN,uploader:s});}if(this._pendingFileLists.length){var t=[];this._pendingFileLists.forEach(function(u){t=t.concat(u.files);});this._controller.uploadFiles(t);}else j.sendSignal({qn:r,step:j.OVERLAY_FIRST,uploader:s});if(this._albumLimitWasExceeded)this._controller.albumLimitExceeded();if(this._sessionLimitWasExceeded)this._controller.sessionLimitExceeded();};o.prototype.addOverlay=function(q){'use strict';this._overlay=q;};o.prototype.addOverlayAndController=function(q,r){'use strict';this.addOverlay(q);this.addController(r);};o.addFilePickerToSession=function(q,r){'use strict';p(q).addFilePicker(r);};o.addControllerToSession=function(q,r){'use strict';p(q).addController(r);};o.addOverlayToSession=function(q,r){'use strict';p(q).addOverlay(r);};o.addOverlayAndControllerToSession=function(q,r,s){'use strict';p(q).addOverlayAndController(r,s);};function p(q){if(!n[q])n[q]=new o(q);return n[q];}f.exports=o;},null);
__d('PubcontentFeedChainingControllerLoader',['Arbiter','Bootloader','PageLikeConstants','SubscriptionsHandler','UFIUIEvents','AttachmentRelatedShareConstants'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=[j.LIKED,l.ActionLinkLike,l.ReactionButtonClicked,l.Comment,l.ActionAddComment,'composer/publish','LitestandComposer/publish',m.ARTICLE_CLICK,m.VIDEO_CLICK,m.FBVIDEO_CLICK,m.GAME_CLICK,m.PHOTO_CLICK,m.EVENT_JOIN],o=null,p=false,q=null,r={init:function(){if(q){q.init({isLazy:false});}else this._startListening();},_startListening:function(){if(o)return;o=new k();o.addSubscriptions(h.subscribe(n,(function(event,s){h.inform(event+'.lazy',s,h.BEHAVIOR_PERSISTENT);this._bootload();}).bind(this)));},_bootload:function(){if(p)return;p=true;i.loadModules(["PubcontentFeedChainingControllerX"],function(s){o&&o.release();q=s;q.init({isLazy:true});});}};f.exports=r;},null);
__d('ReactFeedComposerXBody',['DOM','Event','SubscriptionsHandler'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();function k(l){this.$ReactFeedComposerXBody1=l.root;this.$ReactFeedComposerXBody2=h.find(this.$ReactFeedComposerXBody1,'textarea');this.$ReactFeedComposerXBody3=h.find(this.$ReactFeedComposerXBody1,'input[type="hidden"]');this.$ReactFeedComposerXBody4=new j();this.$ReactFeedComposerXBody4.addSubscriptions(i.listen(this.$ReactFeedComposerXBody2,'change',this.$ReactFeedComposerXBody5.bind(this)));}k.prototype.$ReactFeedComposerXBody5=function(l){this.$ReactFeedComposerXBody3.value=l.target.value;};f.exports=k;},null);
__d('FeedAdsGapRuleViolationDetection',['Banzai','CSS','csx','cx','DOM','ge','isEmpty'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o='ei',p='qid',q='gap rule violation',r='non violating ads gap',s='first position violation',t='feed load',u='first position invalidation',v='spacing invalidation',w=[],x=[],y=[],z={},aa={},ba={registerFeedStories:function(ca,da){if(ca.containerID=='substream_0'){w=[];x=[];}var ea=m(ca.containerID);if(!ea)return;z=babelHelpers._extends({},ca.demoAdChecks,z);var fa=l.scry(ea,"div._5jmm").map(this._convertStoryNodeToObject).filter(function(ha){return ha!==null;});if(ca.isLoggingEnabled&&fa.length!==0)this._logFeedLoad();if(ca.isNewerStories){w=fa.concat(w);}else w=w.concat(fa);for(var ga in ca.minGaps)if(ca.minGaps.hasOwnProperty(ga))aa[ga]=ca.minGaps[ga];if(n(z)){if(ca.isLoggingEnabled||ca.isFirstPosInvalidationEnabled)this._checkFirstPosViolation(ca,ea);if(ca.isLoggingEnabled||ca.isGapRuleInvalidationEnabled)this._checkGapRuleViolation(ca);}},_convertStoryNodeToObject:function(ca){if(i.hasClass(ca,"_170y"))return null;var da=ca.getAttribute('data-dedupekey');if(z[da])return null;var ea=l.scry(ca,"div._hye"),fa=l.scry(ca,"li._170x"),ga=[];if(ea.length!==0){ga=ea.map(function(ja){return ja.getAttribute('data-ft');}).filter(function(ja){return ja!==null;});}else if(fa.length!==0){ga=fa.map(function(ja){return ja.getAttribute('data-ft');}).filter(function(ja){return ja!==null;});}else if(ca.getAttribute('data-ft'))ga=[ca.getAttribute('data-ft')];if(!ga.length)return null;var ha=JSON.parse(ga[0]),ia={dataFTArray:ga,dedupKey:da,isSponsored:!!ha[o],height:ca.offsetHeight,qid:parseInt(ha[p],10),nodeID:ca.id};return ia;},_checkFirstPosViolation:function(ca,da){while(w.length>0&&w[0].isSponsored){var ea={ftArray:w[0].dataFTArray,qid:w[0].qid,nodeid:w[0].nodeID,firstStoryType:ca.firstStoryType},fa=l.scry(da,'.uiBoxRed')[0];if(fa){var ga=fa.textContent||fa.innerText;if(ga)ea.error_msg=ga;}if(ca.isLoggingEnabled&&!(w[0].dedupKey in y)){this._logFirstPosViolation(ea);y[w[0].dedupKey]=ea;}if(ca.isFirstPosInvalidationEnabled){this._invalidateFirstPosAd(ea);w.splice(0,1);}else break;}},_getMinGap:function(ca,da,ea){var fa=Math.min(ca?ca:Number.MAX_VALUE,da?da:Number.MAX_VALUE);return fa!==Number.MAX_VALUE?fa:ea;},_getStoryDedupKeysJSONString:function(ca,da){var ea=[];for(var fa=ca;fa<=da;fa++)ea.push(w[fa].dedupKey);return JSON.stringify(ea);},_getIdxOfStoryToSwap:function(ca,da){if(da>=w.length-ca)return -1;for(var ea=ca+1;ea<w.length&&da>0;ea++){if(!w[ea].isSponsored){da--;}else return -1;if(da===0)return ea;}return -1;},_checkGapRuleViolation:function(ca){var da=null,ea=null,fa=0;for(var ga=0;ga<w.length;ga++){var ha=w[ga];fa+=ha.height;if(ha.isSponsored){fa-=ha.height;var ia=false,ja=false;if(da!==null){var ka=ga-da,la=null,ma=this._getMinGap(aa[ea.dedupKey],aa[ha.dedupKey],ca.defaultMinGap);if(ka<ma){la=q;}else la=r;var na={ftArray_A:ea.dataFTArray,ftArray_B:ha.dataFTArray,dist:ka,pdist:fa,pos:ga+1,qid_A:ea.qid,qid_B:ha.qid,event_type:la,nodeid:ha.nodeID,dedupKeys:this._getStoryDedupKeysJSONString(da,ga)};if(ca.isLoggingEnabled)if(!(ha.dedupKey in x)||x[ha.dedupKey].event_type!==la){this._logAdsGapEvent(na);x[ha.dedupKey]=na;}if(ca.isGapRuleInvalidationEnabled&&la==q){var oa=-1;if(ca.isSwapOnGapRuleViolationEnabled)oa=this._getIdxOfStoryToSwap(ga,ma-ka);if(oa>0){this._shiftAdBelowOrganicStory(ha.nodeID,w[oa].nodeID);var pa=w[ga];w.splice(ga,1);w.splice(oa,0,pa);if(ca.isLoggingEnabled){var qa={ft:w[oa].dataFTArray[0],dist:oa-ga,qid:w[oa].qid,event_type:'ad_swap'};h.post('feed_ads_gap_rule_violation',qa);}ja=true;ha=w[ga];fa+=ha.height;}else if(ca.isGapRuleInvalidationEnabled){this._invalidateGapRuleViolatedAd(na);ia=true;w.splice(ga--,1);}}}if(!ia&&!ja){da=ga;ea=ha;fa=0;}}}},_logFirstPosViolation:function(ca){var da={ft:ca.ftArray[0],event_type:s,intValues:{qid:ca.qid},first_story_type:ca.firstStoryType};if(ca.error_msg)da.error_msg=ca.error_msg;h.post('feed_ads_gap_rule_violation',da);},_logAdsGapEvent:function(ca){var da={ft_A:ca.ftArray_A[0],ft_B:ca.ftArray_B[0],event_type:ca.event_type,intValues:{dist:ca.dist,pdist:ca.pdist,pos:ca.pos,qid_A:ca.qid_A,qid_B:ca.qid_B},dedup_keys:ca.dedupKeys};h.post('feed_ads_gap_rule_violation',da);},_logFeedLoad:function(){var ca={event_type:t};h.post('feed_ads_gap_rule_violation',ca);},_invalidateFirstPosAd:function(ca){i.hide(m(ca.nodeid));var da={ft_array:ca.ftArray,event_type:u};h.post('feed_ads_gap_rule_violation',da);},_invalidateGapRuleViolatedAd:function(ca){var da=m(ca.nodeid);da&&i.hide(da);var ea={ft_array_A:ca.ftArray_A,ft_array_B:ca.ftArray_B,event_type:v};h.post('feed_ads_gap_rule_violation',ea);},_shiftAdBelowOrganicStory:function(ca,da){var ea=m(ca),fa=m(da);ea&&fa&&l.insertAfter(fa,ea);}};f.exports=ba;},null);
__d('StoryPositionTracking',['DOM','LitestandStream','csx','ge'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=0;function m(p,q){var r=JSON.parse(p.getAttribute('data-ft'));if(r){r.insertion_position=q;p.setAttribute('data-ft',JSON.stringify(r));}}function n(p){return h.scry(p,"._5jmm");}var o={registerNewStories:function(p){if(p=='substream_0')l=0;var q=n(k(p)),r=q.length;for(var s=0;s<r;s++)m(q[s],l++);},updateAllStories:function(){var p=n(i.getStreamRoot()),q=p.length;l=0;for(var r=0;r<q;r++)m(p[r],l++);}};f.exports=o;},null);
__d('FbFeedAttachmentRelatedShare',['Arbiter','AttachmentRelatedShareConstants','DOMQuery','Event','tidyEvent','csx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n={loadRelatedAttachment:function(o,p){l(k.listen(o,'click',function(){h.inform(i.ARTICLE_CLICK,{attachment:o,global_share_id:p});}));},loadRelatedGameAttachment:function(o,p){l(k.listen(o,'click',function(){h.inform(i.GAME_CLICK,{attachment:o,global_share_id:p});}));},loadRelatedAttachmentForStream:function(o){var p=function(event,q){var r=event.getTarget();if(r.getAttribute('target')!=='_blank')return;var s="^div._5pbx",t="^div._5pc9",u=j.scry(r,s)[0]||j.scry(r,t)[0];if(!u)return;h.inform(i.ARTICLE_CLICK,{attachment:u,global_share_id:0,link_url:r.getAttribute('href'),is_right_click:q});};l(k.listen(o,'click',function(event){p(event,false);}));l(k.listen(o,'mousedown',function(event){if(event.which==3||event.button==2)p(event,true);}));}};f.exports=n;},null);
__d('FbFeedViewportTracking',['Arbiter','LitestandMessages','LitestandStream','StreamViewportTracking','csx'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m,n;m=babelHelpers.inherits(o,k);n=m&&m.prototype;o.prototype.initSubscriptions=function(){'use strict';this.subscriptions.addSubscriptions(h.subscribe([i.STORIES_INSERTED],this.invalidateAllStoriesCache.bind(this)),h.subscribe(i.LEAVE_HOME,this.updateTimeTrackingData.bind(this,true)));};o.prototype.getStorySelector=function(){'use strict';return "._5jmm";};o.prototype.getStream=function(){'use strict';return j.getStreamRoot();};o.prototype.getSessionID=function(){'use strict';return j.getFeedStreamID();};o.init=function(p){'use strict';o.instance=new o();o.instance.init(p);};o.getInstance=function(){'use strict';return o.instance;};function o(){'use strict';m.apply(this,arguments);}f.exports=o;},null);