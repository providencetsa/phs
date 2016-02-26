/*!CK:3452201820!*//*1455708246,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["QhpCg"]); }

__d('createIxElement',['DOM','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(l,m){var n='img',o;!(l.sprited||l.uri)?i(0):undefined;if(l.sprited){n=j(n,l.spriteMapCssClass,l.spriteCssClass);o=h.create('i',{className:n});if(m!=null)h.setContent(o,h.create('u',null,m));}else if(l.uri){o=h.create('img',{className:n,src:l.uri});if(m!=null)o.setAttribute('alt',m);if(l.width)o.setAttribute('width',l.width);if(l.height)o.setAttribute('height',l.height);}return o;}f.exports=k;},null);
__d('TypeaheadFacepile',['DOM'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(){}i.render=function(j){var k=[h.create('span',{className:'splitpic leftpic'},[h.create('img',{alt:'',src:j[0]})]),h.create('span',{className:'splitpic'+(j[2]?' toppic':'')},[h.create('img',{alt:'',src:j[1]})])];if(j[2])k.push(h.create('span',{className:'splitpic bottompic'},[h.create('img',{alt:'',src:j[2]})]));return h.create('span',{className:'splitpics clearfix'},k);};f.exports=i;},null);
__d('FlipDirection',['DOM','Input','Style'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={setDirection:function(l){var m=h.isNodeOfType(l,'input')&&l.type=='text',n=h.isNodeOfType(l,'textarea');if(!(m||n)||l.getAttribute('data-prevent-auto-flip'))return;var o=i.getValue(l),p=l.style&&l.style.direction;if(!p){var q=0,r=true;for(var s=0;s<o.length;s++){var t=o.charCodeAt(s);if(t>=48){if(r){r=false;q++;}if(t>=1470&&t<=1920){j.set(l,'direction','rtl');l.setAttribute('dir','rtl');return;}if(q==5){j.set(l,'direction','ltr');l.setAttribute('dir','ltr');return;}}else r=true;}}else if(o.length===0){j.set(l,'direction','');l.removeAttribute('dir');}}};f.exports=k;},null);
__d('FlipDirectionOnKeypress',['Event','FlipDirection'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=function(event){var k=event.getTarget();i.setDirection(k);};h.listen(document.documentElement,{keyup:j,input:j});},null);
__d('BasicTypeaheadRenderer',['BadgeHelper','DOM'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=' \u00B7 ';function k(l,m){var n=[];if(l.icon)n.push(i.create('img',{alt:'',src:l.icon}));var o=l.debug_info;if(o)n.push(i.create('span',{className:'debugInfo'},o));if(l.text){var p=[l.text];if(l.is_verified)p.push(h.renderBadge('xsmall','verified'));n.push(i.create('span',{className:'text'},p));}if(l.subtext){var q=[l.subtext];if(l.saved_context){var r=i.create('span',{className:'saved'},[l.saved_context]);q.unshift(r,j);}n.push(i.create('span',{className:'subtext'},q));}var s=i.create('li',{className:l.type||''},n);if(l.text){s.setAttribute('title',l.text);s.setAttribute('aria-label',l.text);}return s;}k.className='basic';f.exports=k;},null);
__d('TypeaheadView',['$','ArbiterMixin','BasicTypeaheadRenderer','CSS','DOM','Event','Parent','createIxElement','emptyFunction','getElementText','getOrCreateDOMID','ix','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u,v;u=babelHelpers.inherits(w,t(i));v=u&&u.prototype;function w(x,y){'use strict';v.constructor.call(this);this.element=this.content=h(x);Object.assign(this,y);}w.prototype.init=function(){'use strict';this.init=p;this.initializeEvents();this.reset();};w.prototype.initializeEvents=function(){'use strict';m.listen(this.element,{mouseup:this.mouseup.bind(this),mouseover:this.mouseover.bind(this)});};w.prototype.setTypeahead=function(x){'use strict';this.typeahead=x;};w.prototype.setAccessibilityControlElement=function(x){'use strict';this.accessibilityElement=x;};w.prototype.getElement=function(){'use strict';return this.element;};w.prototype.mouseup=function(event){'use strict';if(event.button!=2){this.select(true);event.prevent();}};w.prototype.mouseover=function(event){'use strict';if(this.ignoreMouseover){this.ignoreMouseover=false;return;}if(this.visible)this.highlight(this.getIndex(event));};w.prototype.reset=function(x){'use strict';if(!x)this.disableAutoSelect=false;this.index=-1;this.items=[];this.results=[];this.value='';this.content.innerHTML='';this.inform('reset');return this;};w.prototype.getIndex=function(event){'use strict';return this.items.indexOf(n.byTag(event.getTarget(),'li'));};w.prototype.getSelection=function(){'use strict';var x=this.results[this.index]||null;return this.visible?x:null;};w.prototype.isEmpty=function(){'use strict';return !this.results.length;};w.prototype.isVisible=function(){'use strict';return !!this.visible;};w.prototype.show=function(){'use strict';k.show(this.element);if(this.results&&this.results.length)if(this.autoSelect&&this.accessibilityElement&&this.selected)this.accessibilityElement.setAttribute('aria-activedescendant',r(this.selected));this.accessibilityElement&&this.accessibilityElement.setAttribute('aria-expanded','true');this.visible=true;return this;};w.prototype.hide=function(){'use strict';k.hide(this.element);if(this.accessibilityElement){this.accessibilityElement.setAttribute('aria-expanded','false');this.accessibilityElement.removeAttribute('aria-activedescendant');}this.visible=false;return this;};w.prototype.render=function(x,y){'use strict';this.value=x;if(!y.length){this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.reset(true);return;}var z={results:y,value:x};this.inform('beforeRender',z);y=z.results;var aa=this.getDefaultIndex(y);this.results=y;l.setContent(this.content,this.buildResults(y));this.items=this.getItems();this.highlight(aa,false);this.inform('render',this.results);};w.prototype.getItems=function(){'use strict';return l.scry(this.content,'li');};w.prototype.buildResults=function(x){'use strict';var y,z=null;if(typeof this.renderer=='function'){y=this.renderer;z=this.renderer.className||'';}else{y=b.TypeaheadRenderers[this.renderer];z=this.renderer;}y=y.bind(this);var aa=x.map(function(ca,da){var ea=ca.node||y(ca,da);ea.setAttribute('role','option');return ea;}),ba=l.create('ul',{className:z,id:'typeahead_list_'+(this.typeahead?r(this.typeahead):r(this.element))},aa);ba.setAttribute('role','listbox');return ba;};w.prototype.showLoadingIndicator=function(){'use strict';var x=o(s('/images/loaders/indicator_blue_small.gif')),y=l.create('li',{className:'typeaheadViewInternalLoading'},x),z=l.create('ul',{role:'listbox'},y);l.setContent(this.content,z);};w.prototype.getDefaultIndex=function(){'use strict';var x=this.autoSelect&&!this.disableAutoSelect;return this.index<0&&!x?-1:0;};w.prototype.next=function(){'use strict';this.highlight(this.index+1);this.inform('next',this.selected);};w.prototype.prev=function(){'use strict';this.highlight(this.index-1);this.inform('prev',this.selected);};w.prototype.getItemText=function(x){'use strict';var y='';if(x){y=x.getAttribute('aria-label');if(!y){y=q(x);x.setAttribute('aria-label',y);}}return y;};w.prototype.setIsViewingSelectedItems=function(x){'use strict';this.viewingSelected=x;return this;};w.prototype.getIsViewingSelectedItems=function(){'use strict';return !!this.viewingSelected;};w.prototype.highlight=function(x,y){'use strict';if(this.selected){k.removeClass(this.selected,'selected');this.selected.setAttribute('aria-selected','false');}if(x>this.items.length-1){x=-1;}else if(x<-1)x=this.items.length-1;if(x>=0&&x<this.items.length){this.selected=this.items[x];k.addClass(this.selected,'selected');this.selected.setAttribute('aria-selected','true');if(this.accessibilityElement)setTimeout((function(){this.accessibilityElement.setAttribute('aria-activedescendant',r(this.selected));}).bind(this),0);}else this.accessibilityElement&&this.accessibilityElement.removeAttribute('aria-activedescendant');this.index=x;this.disableAutoSelect=x==-1;if(y!==false)this.inform('highlight',{index:x,selected:this.results[x],element:this.selected});};w.prototype.select=function(x){'use strict';if(this.headerIndex&&x)return;var y=this.index,z=this.results[y],aa=this.element.getAttribute('id');if(z){var ba=(function(ca){this.inform('select',{index:y,clicked:!!x,selected:ca,id:aa,query:this.value});this.inform('afterSelect');}).bind(this);if(this.shouldValidateTypeaheadSelection(z)){this.validateTypeaheadSelection(z,ba);}else ba(z);}};w.prototype.shouldValidateTypeaheadSelection=function(x){'use strict';return false;};w.prototype.validateTypeaheadSelection=function(x,y){'use strict';};Object.assign(w.prototype,{events:['highlight','render','reset','select','beforeRender','next','prev'],renderer:j,autoSelect:false,ignoreMouseover:false});f.exports=w;},null);
__d('BucketedTypeaheadView',['DOM','TypeaheadView','fbt'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,i);l=k&&k.prototype;m.prototype.render=function(n,o,p){'use strict';var q=o.length>0;for(var r=0;r<o.length;++r)if(o[r].type!=='hashtag')q=false;if(!q)o=this.buildBuckets(n,o);return l.render.call(this,n,o,p);};m.prototype.highlight=function(n,o){'use strict';this.headerIndex=false;if(n==-1&&this.index!==0)n=this.index;while(n>=0&&n<this.items.length&&!this.isHighlightable(this.results[n])){n=n+1;this.headerIndex=true;}l.highlight.call(this,n,o);};m.prototype.buildBuckets=function(n,o){'use strict';if(!this.typeObjects||!o||!o.length)return o;var p=[],q={};for(var r=0;r<o.length;++r){var s=o[r],t=s.render_type||s.type;if(!q.hasOwnProperty(t)){q[t]=p.length;p.push([this.buildBucketHeader(t)]);}s.classNames=s.classNames||t;s.groupIndex=q[t];s.indexInGroup=p[s.groupIndex].length-1;s.globalIndex=r;p[s.groupIndex].push(s);}for(t in this.typeObjects)if(!q.hasOwnProperty(t)&&this.typeObjects[t].show_always){q[t]=p.length;p.push([this.buildBucketHeader(t)]);s=this.buildNoResultsEntry();s.classNames=s.type;s.groupIndex=q[t];s.indexInGroup=p[s.groupIndex].length-1;p[s.groupIndex].push(s);}var u=[];if(this.typeObjectsOrder){for(var v=0;v<this.typeObjectsOrder.length;++v){var w=this.typeObjectsOrder[v];if(q.hasOwnProperty(w))u=u.concat(p[q[w]]);}}else for(var x=0;x<p.length;++x)u=u.concat(p[x]);return u;};m.prototype.buildNoResultsEntry=function(){'use strict';return {uid:'disabled_result',type:'disabled_result',text:j._("No Results")};};m.prototype.buildBucketHeader=function(n){'use strict';var o=this.typeObjects[n];if(o===undefined)throw new Error(n+" is undefined in "+JSON.stringify(this.typeObjects));if(o.markup){o.text=o.markup;delete o.markup;}return this.typeObjects[n];};m.prototype.buildResults=function(n){'use strict';var o=l.buildResults.call(this,n);if(this.typeObjects){return h.create('div',{className:'bucketed'},[o]);}else return o;};m.prototype.isHighlightable=function(n){'use strict';return n.type!='header'&&n.type!='disabled_result';};m.prototype.select=function(n){'use strict';var o=this.results[this.index];if(o&&this.isHighlightable(o))l.select.call(this,n);};m.prototype.updateResults=function(n){'use strict';this.results=n;};m.prototype.normalizeIndex=function(n){'use strict';var o=this.results.length;if(o===0){return -1;}else if(n<-1){return n%o+o+1;}else if(n>=o){return n%o-1;}else return n;};m.prototype.getDefaultIndex=function(n){'use strict';var o=this.autoSelect&&!this.disableAutoSelect;if(this.index<0&&!o)return -1;if(n.length===0)return -1;var p=0;while(!this.isHighlightable(n)&&p<n.length)p++;return p;};m.prototype.prev=function(){'use strict';var n=this.results[this.normalizeIndex(this.index-1)];while(n&&!this.isHighlightable(n)){this.index=this.normalizeIndex(this.index-1);n=this.results[this.normalizeIndex(this.index-1)];}return l.prev.call(this);};m.prototype.next=function(){'use strict';var n=this.results[this.normalizeIndex(this.index+1)];while(n&&!this.isHighlightable(n)){this.index=this.normalizeIndex(this.index+1);n=this.results[this.normalizeIndex(this.index+1)];}return l.next.call(this);};function m(){'use strict';k.apply(this,arguments);}f.exports=m;},null);
__d('ContextualTypeaheadView',['BucketedTypeaheadView','CSS','ContextualLayer','ContextualLayerAutoFlip','ContextualLayerHideOnScroll','DOM','DOMDimensions','Style'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;p=babelHelpers.inherits(r,h);q=p&&p.prototype;r.prototype.init=function(){'use strict';this.initializeLayer();q.init.call(this);};r.prototype.initializeLayer=function(){'use strict';this.context=this.getContext();this.wrapper=m.create('div');m.appendContent(this.wrapper,this.element);i.addClass(this.element,'uiContextualTypeaheadView');this.layer=new j({context:this.context,position:'below',alignment:this.alignment,causalElement:this.causalElement,permanent:true,shouldSetARIAProperties:false},this.wrapper);this.layer.enableBehavior(l);if(o.isFixed(this.context)||this.autoflip)this.layer.enableBehavior(k);this.subscribe('render',this.renderLayer.bind(this));};r.prototype.show=function(){'use strict';if(this.minWidth){o.set(this.wrapper,'min-width',this.minWidth+'px');}else if(this.width){o.set(this.wrapper,'width',this.width+'px');}else o.set(this.wrapper,'width',n.getElementDimensions(this.context).width+'px');var s=q.show.call(this);this.layer.show();this.inform('show');return s;};r.prototype.hide=function(){'use strict';this.layer.hide();this.inform('hide');return q.hide.call(this);};r.prototype.renderLayer=function(){'use strict';if(!this.isVisible())return;if(this.layer.isShown()){this.layer.updatePosition();}else this.layer.show();};r.prototype.clearText=function(){'use strict';this.layer.getCausalElement().value='';};r.prototype.getContext=function(){'use strict';return this.element.parentNode;};function r(){'use strict';p.apply(this,arguments);}f.exports=r;},null);
__d('Typeahead',['ArbiterMixin','BehaviorsMixin','DataStore','DOM','Event','Parent','Run','Style','emptyFunction','ge','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;s=babelHelpers.inherits(u,r(h,i));t=s&&s.prototype;function u(v,w,x,y){'use strict';t.constructor.call(this);this.args={data:v,view:w,core:x};j.set(y,'Typeahead',this);this.element=y;}u.prototype.init=function(v){'use strict';this.init=p;this.getCore();this.getView().setAccessibilityControlElement(this.getCore().getElement());this.proxyEvents();this.initBehaviors(v||[]);this.inform('init',this);this.data.bootstrap();this.core.focus();};u.prototype.getData=function(){'use strict';if(!this.data){var v=this.args.data;this.data=v;this.data.init();}return this.data;};u.prototype.getView=function(){'use strict';if(!this.view){var v=this.args.view,w=v.node||q(v.node_id);if(!w){w=k.create('div',{className:'uiTypeaheadView'});k.appendContent(this.element,w);}if(typeof v.ctor==='string'){this.view=new window[v.ctor](w,v.options||{});}else this.view=new v.ctor(w,v.options||{});this.view.init();this.view.setTypeahead(this.element);}return this.view;};u.prototype.getCore=function(){'use strict';if(!this.core){var v=this.args.core;if(typeof v.ctor==='string'){this.core=new window[v.ctor](v.options||{});}else this.core=new v.ctor(v.options||{});this.core.init(this.getData(),this.getView(),this.getElement());}return this.core;};u.prototype.getElement=function(){'use strict';return this.element;};u.prototype.setHeight=function(v){'use strict';if(v!=='auto')v=v+'px';o.set(this.element,'height',v);};u.prototype.swapData=function(v){'use strict';return this.$Typeahead1(v,true);};u.prototype.swapDataNoCoreReset=function(v){'use strict';return this.$Typeahead1(v,false);};u.prototype.$Typeahead1=function(v,w){'use strict';var x=this.core;this.data=this.args.data=v;v.init();if(x){x.data=v;x.initData();if(w)x.reset();this.proxyEvents();}v.bootstrap();return v;};u.prototype.proxyEvents=function(){'use strict';[this.data,this.view,this.core].forEach(function(v){v.subscribe(v.events,this.inform.bind(this));},this);};u.prototype.initBehaviors=function(v){'use strict';v.forEach(function(w){if(typeof w==='string'){if(b.TypeaheadBehaviors&&b.TypeaheadBehaviors[w]){b.TypeaheadBehaviors[w](this);}else n.onLoad((function(){if(b.TypeaheadBehaviors)(b.TypeaheadBehaviors[w]||p)(this);}).bind(this));}else this.enableBehavior(w);},this);};u.getInstance=function(v){'use strict';var w=m.byClass(v,'uiTypeahead');return w?j.get(w,'Typeahead'):null;};u.initNow=function(v,w,x){'use strict';if(x)x.init(v);v.init(w);};u.init=function(v,w,x,y){'use strict';if(!k.isNodeOfType(v,['input','textarea']))v=k.scry(v,'input')[0]||k.scry(v,'textarea')[0];var z=false;try{z=document.activeElement===v;}catch(aa){}if(z){u.initNow(w,x,y);}else var ba=l.listen(v,'focus',function(){u.initNow(w,x,y);ba.remove();});};f.exports=u;},null);
__d('StickyPlaceholderInput',['Event','CSS','DOM','Input','Parent','emptyFunction','getElementText'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();function o(s){return l.byClass(s,'uiStickyPlaceholderInput');}function p(s){return j.scry(s,'.placeholder')[0];}function q(s){s=s||window.event;var t=s.target||s.srcElement;if(j.isNodeOfType(t,['input','textarea'])){var u=o(t);if(u)setTimeout(function(){i.conditionClass(u,'uiStickyPlaceholderEmptyInput',!t.value.length);},0);}}var r={init:function(){r.init=m;h.listen(document.documentElement,{keydown:q,keyup:q,paste:q,focusout:q});},registerInput:function(s){r.init();var t=s.getAttribute('placeholder')||'';if(t.length)if(document.activeElement===s){var u=h.listen(s,'blur',function(){r.manipulateInput(s,t);u.remove();});}else r.manipulateInput(s,t);},manipulateInput:function(s,t){var u=j.create('div',{className:'placeholder','aria-hidden':'true'},t),v=j.create('div',{className:'uiStickyPlaceholderInput'},u);if(j.isNodeOfType(s,'textarea'))i.addClass(v,'uiStickyPlaceholderTextarea');h.listen(u,'click',function(){s.focus();});if(s.value===t)s.value='';s.setAttribute('placeholder','');j.replace(s,v);j.appendContent(v,s);i.conditionClass(v,'uiStickyPlaceholderEmptyInput',!s.value.length);},setPlaceholderText:function(s,t){var u=o(s);if(!u){k.setPlaceholder(s,t);}else{var v=p(u);v&&j.setContent(v,t);}},getPlaceholderText:function(s){var t=o(s),u=p(t);return u&&n(u);},update:function(s){var t=o(s);if(t)i.conditionClass(t,'uiStickyPlaceholderEmptyInput',!s.value.length);},getVisibleText:function(s){var t=o(s);if(i.hasClass(t,'uiStickyPlaceholderEmptyInput')){var u=p(t);return u&&n(u);}else return s.value;}};f.exports=r;},null);
__d('TypeaheadCore',['Arbiter','ArbiterMixin','CSS','DOM','Event','Focus','Input','InputSelection','Keys','StickyPlaceholderInput','UserAgent_DEPRECATED','bind','emptyFunction','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v,w;v=babelHelpers.inherits(x,u(i));w=v&&v.prototype;function x(y){'use strict';w.constructor.call(this);Object.assign(this,y);}x.prototype.init=function(y,z,aa){'use strict';this.init=t;this.data=y;this.view=z;this.root=aa;this.initInput();this.inputWrap=k.find(aa,'div.wrap');this.hiddenInput=k.find(aa,'input.hiddenInput');this.value='';this.nextQuery=null;this.selectedText=null;if(this.setValueOnSelect&&j.hasClass(this.inputWrap,'selected'))this.selectedText=this.getValue();this.initView();this.initData();this.initEvents();this.initToggle();this._exclusions=[];};x.prototype.initInput=function(){'use strict';this.element=k.find(this.root,'.textInput');var y=k.scry(this.element,'input')[0];if(y)this.element=y;};x.prototype.initView=function(){'use strict';this.view.subscribe('highlight',m.set.bind(null,this.element));this.view.subscribe('select',(function(y,z){this.select(z.selected);}).bind(this));this.view.subscribe('afterSelect',(function(){this.afterSelect();}).bind(this));};x.prototype.initData=function(){'use strict';this.data.subscribe('notify',(function(y,z){if(this.root.id==z.rootid&&!this.element.disabled&&z.value==this.getValue())this.view.render(z.value,z.results,z.isAsync);}).bind(this));this.data.subscribe('respond',(function(y,z){if(z.forceDisplay||z.value==this.getValue()&&!this.element.disabled&&(this.element.getAttribute('singlestate')!=='true'||z.nullState))this.view.render(z.value,z.results,z.isAsync);}).bind(this));this.data.subscribe('activity',(function(y,z){this.fetching=z.activity;if(!this.fetching)this.nextQuery&&this.performQuery();if(this.loading!=this.fetching){this.loading=this.fetching;this.inform('loading',{loading:this.loading});}}).bind(this));};x.prototype.initEvents=function(){'use strict';l.listen(this.view.getElement(),{mouseup:this.viewMouseup.bind(this),mousedown:this.viewMousedown.bind(this)});var y={blur:s(this,'blur'),focus:s(this,'focus'),click:s(this,'click'),keyup:s(this,'keyup'),keydown:s(this,'keydown'),keypress:s(this,'keypress')};if(r.firefox())y.input=y.keyup;l.listen(this.element,y);};x.prototype.initToggle=function(){'use strict';this.subscribe('blur',this.view.hide.bind(this.view));this.subscribe('focus',this.view.show.bind(this.view));};x.prototype.viewMousedown=function(){'use strict';this.selecting=true;};x.prototype.viewMouseup=function(){'use strict';this.selecting=false;};x.prototype.blur=function(){'use strict';if(this.selecting){this.selecting=false;return;}this.inform('blur');};x.prototype.click=function(){'use strict';var y=o.get(this.element);if(y.start==y.end)this.element.select();this.inform('click');};x.prototype.focus=function(){'use strict';this.checkValue();this.inform('focus');};x.prototype.keyup=function(){'use strict';if(this.resetOnKeyup&&!this.getValue())this.view.reset();this.checkValue();if(this.getValue().length===0)this.inform('change',null);};x.prototype.keydown=function(event){'use strict';if(!this.view.isVisible()||this.view.isEmpty()){setTimeout(this.checkValue.bind(this),0);return;}switch(l.getKeyCode(event)){case p.TAB:this.handleTab(event);return;case p.UP:this.view.prev();break;case p.DOWN:this.view.next();break;case p.ESC:this.view.reset();break;default:setTimeout(this.checkValue.bind(this),0);return;}event.kill();};x.prototype.keypress=function(event){'use strict';if(this.view.getSelection()&&l.getKeyCode(event)==p.RETURN){this.view.select();event.kill();}};x.prototype.handleTab=function(event){'use strict';if(this.preventFocusChangeOnTab)if(this.view.getSelection()){event.kill();}else event.prevent();this.view.select();};x.prototype.select=function(y){'use strict';if(y&&this.setValueOnSelect){var z=y.orig_text||y.text;this.setValue(z);this.setHiddenValue(y.uid);this.selectedText=z;j.addClass(this.inputWrap,'selected');}};x.prototype.afterSelect=function(){'use strict';this.keepFocused?m.set(this.element):this.element.blur();if(!this.noResetAfterSelect)this.resetOnSelect?this.reset():this.view.reset();};x.prototype.unselect=function(){'use strict';if(this.setValueOnSelect){this.selectedText=null;j.removeClass(this.inputWrap,'selected');}this.setHiddenValue();this.inform('unselect',this);};x.prototype.setEnabled=function(y){'use strict';var z=y===false;this.element.disabled=z;j.conditionClass(this.root,'uiTypeaheadDisabled',z);};x.prototype.reset=function(){'use strict';this.unselect();this.setValue();!this.keepFocused&&n.reset(this.element);this.view.reset();this.inform('reset');};x.prototype.getElement=function(){'use strict';return this.element;};x.prototype.setExclusions=function(y){'use strict';this._exclusions=y.map(String);};x.prototype.getExclusions=function(){'use strict';return this._exclusions;};x.prototype.setValue=function(y){'use strict';this.value=this.nextQuery=y||'';n.setValue(this.element,this.value);q.update(this.element);this.inform('change',y);};x.prototype.setHiddenValue=function(y){'use strict';this.hiddenInput.value=y||y===0?y:'';h.inform('Form/change',{node:this.hiddenInput});};x.prototype.getValue=function(){'use strict';return n.getValue(this.element);};x.prototype.getHiddenValue=function(){'use strict';return this.hiddenInput.value||'';};x.prototype.checkValue=function(){'use strict';var y=this.getValue();if(y==this.value)return;if(this.selectedText&&this.selectedText!=y)this.unselect();var z=Date.now(),aa=z-this.time;this.time=z;this.value=this.nextQuery=y;this.performQuery(aa);};x.prototype.performQuery=function(y){'use strict';if(this.selectedText)return;y=y||0;if(this.fetching&&y<this.queryTimeout){this.data.query(this.nextQuery,true,this._exclusions,y);}else{this.data.query(this.nextQuery,false,this._exclusions,y);this.nextQuery=null;}};x.prototype.updateHeight=function(){'use strict';};Object.assign(x.prototype,{events:['blur','focus','click','unselect','loading'],keepFocused:true,resetOnSelect:false,resetOnKeyup:true,setValueOnSelect:false,noResetAfterSelect:false,queryTimeout:250,preventFocusChangeOnTab:false});f.exports=x;},null);
__d('TypeaheadBestName',['FamilyMentionsData','TokenizeUtil'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this._typeahead=k;}j.prototype.enable=function(){'use strict';var k=this._typeahead.getView(),l=this._getAvailableAlternateNameFields();this._subscription=k.subscribe('beforeRender',(function(m,n){var o=n.value;for(var p=0;p<n.results.length;++p){var q=n.results[p],r=this._getNameToDisplay(q,o,l);if(r!==null){q.text=r;if(q.hasOwnProperty('default_name')&&q.text!==q.default_name){q.subtext=q.default_name;}else q.subtext=null;}}}).bind(this));};j.prototype.disable=function(){'use strict';this._typeahead.getView().unsubscribe(this._subscription);this._subscription=null;};j.prototype._getNameToDisplay=function(k,l,m){'use strict';if(k.hasOwnProperty('default_name')&&i.isQueryMatch(l,k.default_name))return k.default_name;for(var n=0;n<m.length;n++){var o=k[m[n]];if(o==undefined)continue;for(var p=0;p<o.length;p++){var q=o[p];if(i.isQueryMatch(l,q))return q;}}if(k.hasOwnProperty('default_name'))return k.default_name;return null;};j.prototype._getAvailableAlternateNameFields=function(){'use strict';var k=['alternate_names'];if(h.allowFamilyNames)k.push('family_names');return k;};Object.assign(j.prototype,{_subscription:null});f.exports=j;},null);
__d('legacy:BestNameTypeaheadBehavior',['TypeaheadBestName'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.buildBestAvailableNames=function(i){i.enableBehavior(h);};},3);
__d('CompactTypeaheadRenderer',['BadgeHelper','DOM','emojiAndEmote','TypeaheadFacepile'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();function l(m,n){var o=[];if(m.xhp)return i.create('li',{className:'raw'},m.xhp);var p=m.photos||m.photo;if(p){if(p instanceof Array){p=k.render(p);}else p=i.create('img',{alt:'',src:p});o.push(p);}var q=m.debug_info;if(q)o.push(i.create('span',{className:'debugInfo'},q));if(m.text){var r=j(m.text);if(m.is_verified){r.push(h.renderBadge('xsmall','verified'));}else if(m.is_work_user){r.push(h.renderBadge('xsmall','work'));}else if(m.is_trending_hashtag)r.push(h.renderBadge('xsmall','trending'));o.push(i.create('span',{className:'text'},r));}var s=m.subtext,t=m.category;if(s||t){var u=[];s&&u.push(s);s&&t&&u.push(" \u00b7 ");t&&u.push(t);o.push(i.create('span',{className:'subtext'},u));}var v=i.create('li',{className:m.type||''},o);if(m.text){v.setAttribute('title',m.text);v.setAttribute('aria-label',m.text);}return v;}l.className='compact';f.exports=l;},null);