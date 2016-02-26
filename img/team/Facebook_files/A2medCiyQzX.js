/*!CK:3556310058!*//*1439180669,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["sTTYn"]); }

__d('HighConfidenceSuggestionLogger',['AsyncRequest','SuggestionLoggingParamNames'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={log:function(k,l,m,n){var o={};o[i.USER_ACTION]=k;o[i.CONFIG]=l;o[i.SUGGESTION]=JSON.stringify(m);o[i.COMPOSER_SESSION_ID]=n;if(o[i.SUGGESTION].length)new h().setURI('/suggestion/log').setData(o).send();}};f.exports=j;},null);