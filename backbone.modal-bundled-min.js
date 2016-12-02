(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty,d=[].indexOf||function(a){for(var b=0,c=this.length;b<c;b++)if(b in this&&this[b]===a)return b;return-1};!function(a){return"function"==typeof define&&define.amd?define(["underscore","backbone","exports"],a):"object"==typeof exports?a(require("underscore"),require("backbone"),exports):a(_,Backbone,{})}(function(c,e,f){return f=function(f){function g(){this.triggerCancel=a(this.triggerCancel,this),this.triggerSubmit=a(this.triggerSubmit,this),this.triggerView=a(this.triggerView,this),this.blurModal=a(this.blurModal,this),this.clickOutsideElement=a(this.clickOutsideElement,this),this.clickOutside=a(this.clickOutside,this),this.checkKey=a(this.checkKey,this),this.rendererCompleted=a(this.rendererCompleted,this),this.args=Array.prototype.slice.apply(arguments),e.View.prototype.constructor.apply(this,this.args),this.setUIElements()}return b(g,f),g.prototype.prefix="bbm",g.prototype.animate=!0,g.prototype.keyControl=!0,g.prototype.showViewOnRender=!0,g.prototype.render=function(a){var b,d,f;return d=this.serializeData(),a&&!c.isEmpty(a)||(a=0),this.$el.addClass(this.prefix+"-wrapper"),this.modalEl=e.$("<div />"),this.modalEl.addClass(this.prefix+"-modal").attr("tabindex","-1"),this.template&&this.modalEl.html(this.buildTemplate(this.template,d)),this.$el.html(this.modalEl),this.modalEl.after(e.$('<div tabindex="0" />')),this.viewContainer?(this.viewContainerEl=this.modalEl.find(this.viewContainer),this.viewContainerEl.addClass(this.prefix+"-modal__views")):this.viewContainerEl=this.modalEl,b=e.$(document.activeElement),this.previousFocus||(this.previousFocus=b),(null!=(f=this.views)?f.length:void 0)>0&&this.showViewOnRender&&this.openAt(a),"function"==typeof this.onRender&&this.onRender(),!!this.active||(this.delegateModalEvents(),this.$el.fadeIn&&this.animate?(this.modalEl.css({opacity:0}),this.$el.fadeIn({duration:100,complete:this.rendererCompleted})):this.rendererCompleted(),this)},g.prototype.rendererCompleted=function(){var a;return this.keyControl&&(e.$("body").on("keyup.bbm",this.checkKey),this.$el.on("mouseup.bbm",this.clickOutsideElement),this.$el.on("click.bbm",this.clickOutside)),this.modalEl.css({opacity:1}).addClass(this.prefix+"-modal--open"),this.modalEl.focus(),"function"==typeof this.onShow&&this.onShow(),null!=(a=this.currentView)&&"function"==typeof a.onShow?a.onShow():void 0},g.prototype.setUIElements=function(){var a;if(this.template=this.getOption("template"),this.views=this.getOption("views"),null!=(a=this.views)&&(a.length=c.size(this.views)),this.viewContainer=this.getOption("viewContainer"),this.animate=this.getOption("animate"),c.isUndefined(this.template)&&c.isUndefined(this.views))throw new Error("No template or views defined for Backbone.Modal");if(this.template&&this.views&&c.isUndefined(this.viewContainer))throw new Error("No viewContainer defined for Backbone.Modal")},g.prototype.getOption=function(a){if(a)return this.options&&d.call(this.options,a)>=0&&null!=this.options[a]?this.options[a]:this[a]},g.prototype.serializeData=function(){var a;return a={},this.model&&(a=c.extend(a,this.model.toJSON())),this.collection&&(a=c.extend(a,{items:this.collection.toJSON()})),a},g.prototype.delegateModalEvents=function(){var a,b,d,e,f,g,h;this.active=!0,a=this.getOption("cancelEl"),g=this.getOption("submitEl"),g&&this.$el.on("click",g,this.triggerSubmit),a&&this.$el.on("click",a,this.triggerCancel),this.modalEl.on("focusout",this.blurModal),e=[];for(b in this.views)c.isString(b)&&"length"!==b?(d=b.match(/^(\S+)\s*(.*)$/),h=d[1],f=d[2],e.push(this.$el.on(h,f,this.views[b],this.triggerView))):e.push(void 0);return e},g.prototype.undelegateModalEvents=function(){var a,b,d,e,f,g,h;this.active=!1,a=this.getOption("cancelEl"),g=this.getOption("submitEl"),g&&this.$el.off("click",g,this.triggerSubmit),a&&this.$el.off("click",a,this.triggerCancel),this.modalEl.off("focusout",this.blurModal),e=[];for(b in this.views)c.isString(b)&&"length"!==b?(d=b.match(/^(\S+)\s*(.*)$/),h=d[1],f=d[2],e.push(this.$el.off(h,f,this.views[b],this.triggerView))):e.push(void 0);return e},g.prototype.checkKey=function(a){if(this.active)switch(a.keyCode){case 27:return this.triggerCancel(a);case 13:return this.triggerSubmit(a)}},g.prototype.clickOutside=function(a){var b;if((null!=(b=this.outsideElement)?b.hasClass(this.prefix+"-wrapper"):void 0)&&this.active)return this.triggerCancel()},g.prototype.clickOutsideElement=function(a){return this.outsideElement=e.$(a.target)},g.prototype.blurModal=function(){return setTimeout(function(a){return function(){if(a.active&&!e.$.contains(a.modalEl.get(0),document.activeElement))return a.modalEl.focus()}}(this))},g.prototype.buildTemplate=function(a,b){var d;return(d="function"==typeof a?a:c.template(e.$(a).html()))(b)},g.prototype.buildView=function(a,b){var d;if(a)return b&&c.isFunction(b)&&(b=b()),c.isFunction(a)?(d=new a(b||this.args[0]),d instanceof e.View?{el:d.render().$el,view:d}:{el:a(b||this.args[0])}):{view:a,el:a.$el}},g.prototype.triggerView=function(a){var b,d,e,f,g,h,i;if(null!=a&&"function"==typeof a.preventDefault&&a.preventDefault(),h=a.data,f=this.buildView(h.view,h.viewOptions),this.currentView&&(this.previousView=this.currentView,!(null!=(i=h.openOptions)?i.skipSubmit:void 0))){if(("function"==typeof(b=this.previousView).beforeSubmit?b.beforeSubmit(a):void 0)===!1)return;"function"==typeof(d=this.previousView).submit&&d.submit()}this.currentView=f.view||f.el,e=0;for(g in this.views)h.view===this.views[g].view&&(this.currentIndex=e),e++;return h.onActive&&(c.isFunction(h.onActive)?h.onActive(this):c.isString(h.onActive)&&this[h.onActive].call(this,h)),this.shouldAnimate?this.animateToView(f.el):(this.shouldAnimate=!0,this.$(this.viewContainerEl).html(f.el))},g.prototype.animateToView=function(a){var b,c,d,f,g,h,i;return h={position:"relative",top:-9999,left:-9999},i=e.$("<tester/>").css(h),i.html(this.$el.clone().css(h)),0!==e.$("tester").length?e.$("tester").replaceWith(i):e.$("body").append(i),c=this.viewContainer?i.find(this.viewContainer):i.find("."+this.prefix+"-modal"),c.removeAttr("style"),f=c.outerHeight(),c.html(a),d=c.outerHeight(),f===d?(this.$(this.viewContainerEl).html(a),"function"==typeof(b=this.currentView).onShow&&b.onShow(),null!=(g=this.previousView)&&"function"==typeof g.destroy?g.destroy():void 0):this.animate?(this.$(this.viewContainerEl).css({opacity:0}),this.$(this.viewContainerEl).animate({height:d},100,function(b){return function(){var c,d;return b.$(b.viewContainerEl).css({opacity:1}).removeAttr("style"),b.$(b.viewContainerEl).html(a),"function"==typeof(c=b.currentView).onShow&&c.onShow(),null!=(d=b.previousView)&&"function"==typeof d.destroy?d.destroy():void 0}}(this))):this.$(this.viewContainerEl).css({height:d}).html(a)},g.prototype.triggerSubmit=function(a){var b,c;if(null!=a&&a.preventDefault(),!e.$(null!=a?a.target:void 0).is("textarea")&&!(this.beforeSubmit&&this.beforeSubmit(a)===!1||this.currentView&&this.currentView.beforeSubmit&&this.currentView.beforeSubmit(a)===!1))return this.submit||(null!=(b=this.currentView)?b.submit:void 0)||this.getOption("submitEl")?(null!=(c=this.currentView)&&"function"==typeof c.submit&&c.submit(),"function"==typeof this.submit&&this.submit(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy()):this.triggerCancel()},g.prototype.triggerCancel=function(a){if(null!=a&&a.preventDefault(),!this.beforeCancel||this.beforeCancel()!==!1)return"function"==typeof this.cancel&&this.cancel(),this.regionEnabled?this.trigger("modal:destroy"):this.destroy()},g.prototype.destroy=function(){var a;return e.$("body").off("keyup.bbm",this.checkKey),this.$el.off("mouseup.bbm",this.clickOutsideElement),this.$el.off("click.bbm",this.clickOutside),e.$("tester").remove(),"function"==typeof this.onDestroy&&this.onDestroy(),this.shouldAnimate=!1,this.modalEl.addClass(this.prefix+"-modal--destroy"),a=function(a){return function(){var b,c;return null!=(b=a.currentView)&&"function"==typeof b.remove&&b.remove(),a.remove(),null!=(c=a.previousFocus)&&"function"==typeof c.focus?c.focus():void 0}}(this),this.$el.fadeOut&&this.animate?(this.$el.fadeOut({duration:200}),c.delay(function(){return a()},200)):a()},g.prototype.openAt=function(a){var b,d,e,f,g;c.isNumber(a)?b=a:c.isNumber(a._index)&&(b=a._index),e=0;for(f in this.views)if("length"!==f)if(c.isNumber(b))e===b&&(g=this.views[f]),e++;else if(c.isObject(a))for(d in this.views[f])a[d]===this.views[f][d]&&(g=this.views[f]);return g&&(this.currentIndex=c.indexOf(this.views,g),this.triggerView({data:c.extend(g,{openOptions:a})})),this},g.prototype.next=function(a){if(null==a&&(a={}),this.currentIndex+1<this.views.length)return this.openAt(c.extend(a,{_index:this.currentIndex+1}))},g.prototype.previous=function(a){if(null==a&&(a={}),this.currentIndex-1<this.views.length-1)return this.openAt(c.extend(a,{_index:this.currentIndex-1}))},g}(e.View),e.Modal=f,e.Modal})}).call(this),function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=function(a,b){function d(){this.constructor=a}for(var e in b)c.call(b,e)&&(a[e]=b[e]);return d.prototype=b.prototype,a.prototype=new d,a.__super__=b.prototype,a},c={}.hasOwnProperty;!function(a){return"function"==typeof define&&define.amd?define(["underscore","backbone","backbone.marionette","exports"],a):"object"==typeof exports?a(require("underscore"),require("backbone"),require("backbone.marionette"),exports):a(_,Backbone,Backbone.Marionette,{})}(function(c,d,e,f){return f=function(f){function g(){return this.destroy=a(this.destroy,this),g.__super__.constructor.apply(this,arguments)}return b(g,f),g.prototype.modals=[],g.prototype.zIndex=0,g.prototype.show=function(a,b){var f,g,h,i,j,k,l,m,n;for(null==b&&(b={}),this._ensureElement(),d.$("body").css({overflow:"hidden"}),this.modals.length>0&&(h=c.last(this.modals),h.modalEl.addClass(h.prefix+"-view--stacked"),n=this.modals[this.modals.length-1],null!=n&&n.modalEl.removeClass(n.prefix+"-modal--stacked-reverse")),a.render(b),a.regionEnabled=!0,this.triggerMethod("before:swap",a),this.triggerMethod("before:show",a),e.triggerMethodOn(a,"before:show"),this.triggerMethod("swapOut",this.currentView),this.$el.append(a.el),this.currentView=a,this.triggerMethod("swap",a),l=this.modals,f=0,i=l.length;f<i;f++)k=l[f],k.undelegateModalEvents();for(m=this.modals,g=0,j=m.length;g<j;g++)k=m[g],k.$el.css({background:"none"});return a.on("modal:destroy",this.destroy),this.modals.push(a),this.zIndex++},g.prototype.destroy=function(){var a,b;if(b=this.currentView)return b.destroy&&!b.isDestroyed?b.destroy():b.remove&&b.remove(),b.off("modal:destroy",this.destroy),this.modals.splice(c.indexOf(this.modals,b),1),this.zIndex--,this.currentView=this.modals[this.zIndex-1],a=c.last(this.modals),a&&(a.$el.removeAttr("style"),a.modalEl.addClass(a.prefix+"-modal--stacked-reverse"),c.delay(function(b){return function(){return a.modalEl.removeClass(a.prefix+"-modal--stacked")}}(this),300),0!==this.zIndex&&a.delegateModalEvents()),0===this.zIndex&&d.$("body").css({overflow:"visible"}),this.triggerMethod("modal:destroy",b)},g.prototype.destroyAll=function(){var a,b,c,d,e;for(c=this.modals,d=[],a=0,b=c.length;a<b;a++)e=c[a],d.push(this.destroy());return d},g}(e.Region),e.Modals=f,e.Modals})}.call(this);