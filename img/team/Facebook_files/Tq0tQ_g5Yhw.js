/*!CK:4113552671!*//*1454619119,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["uAgKx"]); }

__d('MessengerTypeaheadView.react',['immutable','MessengerContactAdapters','MessengerContactList.react','MessengerTypeaheadUtils','ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){'use strict';if(c.__markCompiled)c.__markCompiled();var p=m.PropTypes,q=m.createClass({displayName:'MessengerTypeaheadView',mixins:[l],propTypes:{ariaOwneeID:p.string,entries:p.array.isRequired,hasHoverState:p.bool,highlightedEntry:p.object,isLoading:p.bool,onHighlight:p.func,onRenderHighlight:p.func,onScrollIntoView:p.func,onSelect:p.func,order:p.array,originalEntryIDs:p.instanceOf(h.Set),queryString:p.string,selectedEntryIDs:p.instanceOf(h.Set),viewer:p.string.isRequired},render:function(){return (m.createElement(j,{ariaOwneeID:this.props.ariaOwneeID,className:o(this.props.className,"_5t4c"),contactAdapter:i.fromSearchableEntry,hasHoverState:this.props.hasHoverState,highlightedEntry:this.props.highlightedEntry,isLoading:this.props.isLoading,listSections:k.buildListSections(this.props.entries,this.props.queryString,this.props.order),onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight,onScrollIntoView:this.props.onScrollIntoView,onSelect:this.props.onSelect,originalEntryIDs:this.props.originalEntryIDs,selectedEntryIDs:this.props.selectedEntryIDs,showPresence:false,viewer:this.props.viewer}));}});f.exports=q;},null);