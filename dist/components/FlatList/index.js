'use strict';var _jsxFileName='src/components/FlatList/index.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var React=require('React');var View=require('../View').default;var VirtualizedList=require('../VirtualizedList');var invariant=require('fbjs/lib/invariant');var defaultProps=_extends({},VirtualizedList.defaultProps,{numColumns:1});var FlatList=function(_React$PureComponent){_inherits(FlatList,_React$PureComponent);_createClass(FlatList,[{key:'scrollToEnd',value:function scrollToEnd(params){this._listRef.scrollToEnd(params);}},{key:'scrollToIndex',value:function scrollToIndex(params){this._listRef.scrollToIndex(params);}},{key:'scrollToItem',value:function scrollToItem(params){this._listRef.scrollToItem(params);}},{key:'scrollToOffset',value:function scrollToOffset(params){this._listRef.scrollToOffset(params);}},{key:'recordInteraction',value:function recordInteraction(){this._listRef.recordInteraction();}},{key:'getScrollResponder',value:function getScrollResponder(){if(this._listRef){return this._listRef.getScrollResponder();}}},{key:'getScrollableNode',value:function getScrollableNode(){if(this._listRef){return this._listRef.getScrollableNode();}}},{key:'setNativeProps',value:function setNativeProps(props){if(this._listRef){this._listRef.setNativeProps(props);}}},{key:'componentWillMount',value:function componentWillMount(){this._checkProps(this.props);}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){invariant(nextProps.numColumns===this.props.numColumns,'Changing numColumns on the fly is not supported. Change the key prop on FlatList when '+'changing the number of columns to force a fresh render of the component.');invariant(nextProps.onViewableItemsChanged===this.props.onViewableItemsChanged,'Changing onViewableItemsChanged on the fly is not supported');invariant(nextProps.viewabilityConfig===this.props.viewabilityConfig,'Changing viewabilityConfig on the fly is not supported');invariant(nextProps.viewabilityConfigCallbackPairs===this.props.viewabilityConfigCallbackPairs,'Changing viewabilityConfigCallbackPairs on the fly is not supported');this._checkProps(nextProps);}}]);function FlatList(props){_classCallCheck(this,FlatList);var _this=_possibleConstructorReturn(this,(FlatList.__proto__||Object.getPrototypeOf(FlatList)).call(this,props));_this._hasWarnedLegacy=false;_this._captureRef=function(ref){_this._listRef=ref;};_this._getItem=function(data,index){var numColumns=_this.props.numColumns;if(numColumns>1){var ret=[];for(var kk=0;kk<numColumns;kk++){var _item=data[index*numColumns+kk];_item&&ret.push(_item);}return ret;}else{return data[index];}};_this._getItemCount=function(data){return data?Math.ceil(data.length/_this.props.numColumns):0;};_this._keyExtractor=function(items,index){var _this$props=_this.props,keyExtractor=_this$props.keyExtractor,numColumns=_this$props.numColumns;if(numColumns>1){invariant(Array.isArray(items),'FlatList: Encountered internal consistency error, expected each item to consist of an '+'array with 1-%s columns; instead, received a single item.',numColumns);return items.map(function(it,kk){return keyExtractor(it,index*numColumns+kk);}).join(':');}else{return keyExtractor(items,index);}};_this._renderItem=function(info){var _this$props2=_this.props,renderItem=_this$props2.renderItem,numColumns=_this$props2.numColumns;if(numColumns>1){var _item2=info.item,_index=info.index;invariant(Array.isArray(_item2),'Expected array of items with numColumns > 1');return React.createElement(View,{style:{flexDirection:'row'},__source:{fileName:_jsxFileName,lineNumber:556}},_item2.map(function(it,kk){var element=renderItem({item:it,index:_index*numColumns+kk,separators:info.separators});return element&&React.cloneElement(element,{key:kk});}));}else{return renderItem(info);}};return _this;}_createClass(FlatList,[{key:'_checkProps',value:function _checkProps(props){var getItem=props.getItem,getItemCount=props.getItemCount,horizontal=props.horizontal,legacyImplementation=props.legacyImplementation,numColumns=props.numColumns,onViewableItemsChanged=props.onViewableItemsChanged,viewabilityConfigCallbackPairs=props.viewabilityConfigCallbackPairs;invariant(!getItem&&!getItemCount,'FlatList does not support custom data formats.');if(numColumns>1){invariant(!horizontal,'numColumns does not support horizontal.');}if(legacyImplementation){invariant(numColumns===1,'Legacy list does not support multiple columns.');if(!this._hasWarnedLegacy){console.warn('FlatList: Using legacyImplementation - some features not supported and performance '+'may suffer');this._hasWarnedLegacy=true;}}invariant(!(onViewableItemsChanged&&viewabilityConfigCallbackPairs),'FlatList does not support setting both onViewableItemsChanged and '+'viewabilityConfigCallbackPairs.');}},{key:'_pushMultiColumnViewable',value:function _pushMultiColumnViewable(arr,v){var _props=this.props,numColumns=_props.numColumns,keyExtractor=_props.keyExtractor;v.item.forEach(function(item,ii){invariant(v.index!=null,'Missing index!');var index=v.index*numColumns+ii;arr.push(_extends({},v,{item:item,key:keyExtractor(item,index),index:index}));});}},{key:'_createOnViewableItemsChanged',value:function _createOnViewableItemsChanged(onViewableItemsChanged){var _this2=this;return function(info){var numColumns=_this2.props.numColumns;if(onViewableItemsChanged){if(numColumns>1){var _changed=[];var _viewableItems=[];info.viewableItems.forEach(function(v){return _this2._pushMultiColumnViewable(_viewableItems,v);});info.changed.forEach(function(v){return _this2._pushMultiColumnViewable(_changed,v);});onViewableItemsChanged({viewableItems:_viewableItems,changed:_changed});}else{onViewableItemsChanged(info);}}};}},{key:'render',value:function render(){return React.createElement(VirtualizedList,_extends({},this.props,{renderItem:this._renderItem,getItem:this._getItem,getItemCount:this._getItemCount,keyExtractor:this._keyExtractor,ref:this._captureRef,__source:{fileName:_jsxFileName,lineNumber:574}}));}}]);return FlatList;}(React.PureComponent);FlatList.defaultProps=defaultProps;module.exports=FlatList;