-function(){"use strict";var a=function(){};goog.inherits(a,HTMLElement);a.prototype.createdCallback=function(){this.b=this.dial.bind(this);for(this.a=document.createElement("gwd-taparea");this.children.length;)this.a.appendChild(this.firstChild);this.appendChild(this.a)};a.prototype.attachedCallback=function(){this.a.addEventListener("action",this.b)};a.prototype.detachedCallback=function(){this.a.removeEventListener("action",this.b,!1)};
a.prototype.dial=function(){var d=this.getAttribute("number"),b=this.getAttribute("action")||"tel",b=b?b.toLowerCase():"tel",d=b+":"+d,b={url:d},c;b?(c=document.createEvent("CustomEvent"),c.initCustomEvent("taptocall",!0,!0,b)):(c=document.createEvent("Event"),c.initEvent("taptocall",!0,!0));this.dispatchEvent(c);c.detail.handled||window.open(d)};a.prototype.attributeChangedCallback=null;document.registerElement("gwd-taptocall",{prototype:a.prototype});}()