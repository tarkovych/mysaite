define(["require","exports","tslib","external/classnames","react","modules/clean/react/css","modules/clean/react/bubble_dropdown_v2","modules/clean/react/overlay"],function(t,e,o,s,a,i,n,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),s=o.__importDefault(s),a=o.__importDefault(a);var r=(function(t){function e(e){var o=t.call(this,e)||this;return o.positionMapping=(s={},s[n.BubbleDropdownPositions.BOTTOM]="bottom",s[n.BubbleDropdownPositions.BOTTOM_LEFT]="bottom-left",s),o.onContentClicked=function(t){t.stopPropagation()},o.onDismiss=function(){o.setState({show:!1},o.props.onDismiss)},o.state={show:e.show},o;var s}return o.__extends(e,t),e.prototype.componentWillReceiveProps=function(t){!this.props.show&&t.show&&this.setState({show:!0}),!this.props.parentHasBeenClicked&&t.parentHasBeenClicked&&this.onDismiss()},e.prototype.componentDidUpdate=function(t,e){!t.targetNode&&this.props.targetNode&&this.props.targetNode.addEventListener("click",this.onDismiss)},e.prototype.render=function(){if(!this.props.show||!this.state.show||!this.props.targetNode)return null;var t=this.props.position||n.BubbleDropdownPositions.BOTTOM,e=s.default("callout-container","callout-container--"+this.positionMapping[t]);return a.default.createElement(l.PositionedOverlay,{targetNode:this.props.targetNode,position:t},a.default.createElement("div",{className:e},a.default.createElement("div",{onClick:this.onContentClicked,className:"callout-content"},a.default.createElement("div",{className:"callout-content-title"},this.props.title),a.default.createElement("div",{className:"callout-content-message"},this.props.message),a.default.createElement("button",{className:"callout-dismiss","aria-label":"dismiss-callout",onClick:this.onDismiss})),a.default.createElement("div",{className:"callout-arrow-container"},a.default.createElement("div",{className:"callout-arrow-border"}),a.default.createElement("div",{className:"callout-arrow"}))))},e})(a.default.Component),c=["/static/css/callout-vfl68h2cC.css"];e.Callout=i.requireCssWithComponent(r,c)});
//# sourceMappingURL=callout.min.js-vflKXzfaJ.map