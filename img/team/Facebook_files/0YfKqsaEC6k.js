/*!CK:1869120361!*//*1453214823,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["XtuGt"]); }

__d('ComposerXStatusAttachmentBootloader',['AsyncRequest','ComposerEntryPointRef','XReactComposerLoggingODSController','ComposerXBootloadStatusAttachment','ComposerXMentionsInputReset','ComposerXPrivacyWidgetReset','MentionsInput','MentionsTypeaheadAreaView'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();c('ComposerXBootloadStatusAttachment');c('ComposerXMentionsInputReset');c('ComposerXPrivacyWidgetReset');c('MentionsInput');c('MentionsTypeaheadAreaView');f.exports={emptyFunction:function(){var k=j.getURIBuilder().setString('event','bootload_start').setEnum('composer_type',i.LEGACY_FEED).getURI();new h(k).send();}};},null);