/*!CK:407521218!*//*1452655153,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["CWXZo"]); }

__d('SemiInlineSuggestion',['$','Arbiter','AsyncRequest','csx','CSS','DOM','Event','HighConfidenceSuggestionLogger','SuggestionLoggingUserActions','ProductionPromptConfig','XDismissPromptController','XProfilePictureOverlayAsyncDialogController','DOMQuery','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();function v(w){'use strict';this.$SemiInlineSuggestion1=w;this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion3=null;this.$SemiInlineSuggestion4=true;this.$SemiInlineSuggestion5=false;this.$SemiInlineSuggestion6();}v.prototype.$SemiInlineSuggestion6=function(){'use strict';i.subscribe('semiinline/DOMReady',(function(){return this.$SemiInlineSuggestion7();}).bind(this));i.subscribe('composer/linkScraped',(function(){return this.$SemiInlineSuggestion8();}).bind(this));i.subscribe('showOGTagger',(function(){return this.$SemiInlineSuggestion9();}).bind(this));};v.prototype.$SemiInlineSuggestion7=function(){'use strict';if(!this.$SemiInlineSuggestion2)return;this.$SemiInlineSuggestion10=h('bootloadSemiinlineRoot');l.show(this.$SemiInlineSuggestion10);if(q.gk&&this.$SemiInlineSuggestion2.mechanism==='gk_based_production_prompt_classifier'){this.$SemiInlineSuggestion11(this.$SemiInlineSuggestion10);}else this.$SemiInlineSuggestion12(this.$SemiInlineSuggestion10);this.$SemiInlineSuggestion5=true;};v.prototype.$SemiInlineSuggestion8=function(){'use strict';if(this.$SemiInlineSuggestion5){this.$SemiInlineSuggestion13();}else i.subscribe('semiinline/DOMReady',(function(){return this.$SemiInlineSuggestion13();}).bind(this));};v.prototype.$SemiInlineSuggestion13=function(){'use strict';this.$SemiInlineSuggestion14=h('linkscrapeSemiinlineRoot');var w=m.scry(this.$SemiInlineSuggestion14,'#linkscrapeSuggestionPlaceholder'),x=m.scry(h('bootloadSemiinlineRoot'),'#semiinline_suggestion_placeholder');if(w&&w.length>0&&x&&x.length>0)m.replace(w[0],x[0].cloneNode(true));l.show(this.$SemiInlineSuggestion14);this.$SemiInlineSuggestion12(this.$SemiInlineSuggestion14);};v.prototype.$SemiInlineSuggestion11=function(w){'use strict';var x=m.scry(w,"._1_-h")[0],y=m.scry(w,"._1_-i")[0];if(x)this.$SemiInlineSuggestion15(x);if(y)this.$SemiInlineSuggestion16(y);};v.prototype.$SemiInlineSuggestion12=function(w){'use strict';var x=m.scry(w,"._1ljz")[0],y=m.scry(w,"._1lj-")[0];if(x)this.$SemiInlineSuggestion15(x);if(y)this.$SemiInlineSuggestion16(y);};v.prototype.$SemiInlineSuggestion15=function(w){'use strict';n.listen(w,'click',(function(){o.log(p.XOUT,this.$SemiInlineSuggestion17,this.$SemiInlineSuggestion2,this.$SemiInlineSuggestion1);new j().setURI('/ajax/production_prompt/survey').setData({prompt_id:this.$SemiInlineSuggestion2.blob.promptid}).send();this.$SemiInlineSuggestion9();}).bind(this));};v.prototype.$SemiInlineSuggestion16=function(w){'use strict';n.listen(w,'click',(function(){o.log(p.ADD,this.$SemiInlineSuggestion17,this.$SemiInlineSuggestion2,this.$SemiInlineSuggestion1);if(this.$SemiInlineSuggestion2&&this.$SemiInlineSuggestion2.blob.profileoverlaypageid){this.$SemiInlineSuggestion18(this.$SemiInlineSuggestion2.blob.profileoverlaypageid);}else this.$SemiInlineSuggestion19();}).bind(this));};v.prototype.update=function(w,x){'use strict';if(x&&x[0]){this.$SemiInlineSuggestion2=x[0];this.$SemiInlineSuggestion3=w;}else{this.$SemiInlineSuggestion2=null;this.$SemiInlineSuggestion9();this.$SemiInlineSuggestion3=null;}};v.prototype.isShown=function(){'use strict';return !!this.$SemiInlineSuggestion2;};v.prototype.isActive=function(){'use strict';return this.$SemiInlineSuggestion4;};v.prototype.$SemiInlineSuggestion9=function(){'use strict';if(this.$SemiInlineSuggestion2){this.$SemiInlineSuggestion2=null;if(this.$SemiInlineSuggestion14)l.hide(this.$SemiInlineSuggestion14);if(this.$SemiInlineSuggestion10)l.hide(this.$SemiInlineSuggestion10);this.$SemiInlineSuggestion4=false;}};v.prototype.$SemiInlineSuggestion18=function(w){'use strict';var x=r.getURIBuilder().getURI();new j().setURI(x).setData({user_action:p.ADD,prompt_id:this.$SemiInlineSuggestion2.blob.promptid}).setHandler(function(y){var z=s.getURIBuilder().setInt('selected_page_id',w).getURI();new j().setURI(z).send();}).send();};v.prototype.$SemiInlineSuggestion20=function(){'use strict';var w={};w.uid=this.$SemiInlineSuggestion2.blob.locationid;w.text=this.$SemiInlineSuggestion2.blob.locationtext;i.inform('Prompt/PrefillCheckin',w);var x=t.find(document.body,'#composerCityTagger');l.addClass(t.scry(x,'a')[0],"_1dsf");m.setAttributes(t.find(document.body,'input[name="composertags_place"]'),{value:w.uid});m.setAttributes(t.find(document.body,'input[name="composertags_place_name"]'),{value:w.text});m.setAttributes(t.find(document.body,'input[name="is_explicit_place"]'),{value:'true'});};v.prototype.$SemiInlineSuggestion19=function(){'use strict';if(this.$SemiInlineSuggestion2){if(this.$SemiInlineSuggestion2.blob.locationid)this.$SemiInlineSuggestion20();var w={};w.type='page';w.uid=this.$SemiInlineSuggestion2.blob.objectid;w.at_id=this.$SemiInlineSuggestion2.blob.actiontypeid;w.suggestion_mechanism=this.$SemiInlineSuggestion2.mechanism;w.text=this.$SemiInlineSuggestion3;var x={};x.config=this.$SemiInlineSuggestion17;x.suggestion=this.$SemiInlineSuggestion2;x.csid=this.$SemiInlineSuggestion1;w.suggestion_config=x;i.inform('structuredSuggestion/add',w);if(this.$SemiInlineSuggestion14)l.hide(this.$SemiInlineSuggestion14);if(this.$SemiInlineSuggestion10)l.hide(this.$SemiInlineSuggestion10);}};v.prototype.setConfigNameForLogging=function(w){'use strict';this.$SemiInlineSuggestion17=w;};v.prototype.getDisplayingSuggestion=function(){'use strict';return this.$SemiInlineSuggestion2;};f.exports=v;},null);