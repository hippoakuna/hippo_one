!function(t,i){"use strict";var s=i.Modernizr;t.CBPFWSlider=function(i,s){this.$el=t(s),this._init(i)},t.CBPFWSlider.defaults={speed:500,easing:"ease"},t.CBPFWSlider.prototype={_init:function(i){this.options=t.extend(!0,{},t.CBPFWSlider.defaults,i),this._config(),this._initEvents()},_config:function(){this.$list=this.$el.children("ul"),this.$items=this.$list.children("li"),this.itemsCount=this.$items.length,this.support=s.csstransitions&&s.csstransforms,this.support3d=s.csstransforms3d;var i={WebkitTransition:{transitionEndEvent:"webkitTransitionEnd",tranformName:"-webkit-transform"},MozTransition:{transitionEndEvent:"transitionend",tranformName:"-moz-transform"},OTransition:{transitionEndEvent:"oTransitionEnd",tranformName:"-o-transform"},msTransition:{transitionEndEvent:"MSTransitionEnd",tranformName:"-ms-transform"},transition:{transitionEndEvent:"transitionend",tranformName:"transform"}};if(this.support&&(this.transEndEventName=i[s.prefixed("transition")].transitionEndEvent+".cbpFWSlider",this.transformName=i[s.prefixed("transition")].tranformName),this.current=0,this.old=0,this.isAnimating=!1,this.$list.css("width",100*this.itemsCount+"%"),this.support&&this.$list.css("transition",this.transformName+" "+this.options.speed+"ms "+this.options.easing),this.$items.css("width",100/this.itemsCount+"%"),this.itemsCount>1){this.$navPrev=t('<span class="cbp-fwprev">&lt;</span>').hide(),this.$navNext=t('<span class="cbp-fwnext">&gt;</span>'),t("<nav/>").append(this.$navPrev,this.$navNext).appendTo(this.$el);for(var n="",r=0;r<this.itemsCount;++r){var e=r===this.current?'<span class="cbp-fwcurrent"></span>':"<span></span>";n+=e}var a=t('<div class="cbp-fwdots"/>').append(n).appendTo(this.$el);this.$navDots=a.children("span")}},_initEvents:function(){var i=this;this.itemsCount>1&&(this.$navPrev.on("click.cbpFWSlider",t.proxy(this._navigate,this,"previous")),this.$navNext.on("click.cbpFWSlider",t.proxy(this._navigate,this,"next")),this.$navDots.on("click.cbpFWSlider",function(){i._jump(t(this).index())}))},_navigate:function(t){return this.isAnimating?!1:(this.isAnimating=!0,this.old=this.current,"next"===t&&this.current<this.itemsCount-1?++this.current:"previous"===t&&this.current>0&&--this.current,this._slide(),void 0)},_slide:function(){this._toggleNavControls();var i=100*-1*this.current/this.itemsCount;this.support?this.$list.css("transform",this.support3d?"translate3d("+i+"%,0,0)":"translate("+i+"%)"):this.$list.css("margin-left",100*-1*this.current+"%");var s=t.proxy(function(){this.isAnimating=!1},this);this.support?this.$list.on(this.transEndEventName,t.proxy(s,this)):s.call()},_toggleNavControls:function(){switch(this.current){case 0:this.$navNext.show(),this.$navPrev.hide();break;case this.itemsCount-1:this.$navNext.hide(),this.$navPrev.show();break;default:this.$navNext.show(),this.$navPrev.show()}this.$navDots.eq(this.old).removeClass("cbp-fwcurrent").end().eq(this.current).addClass("cbp-fwcurrent")},_jump:function(t){return t===this.current||this.isAnimating?!1:(this.isAnimating=!0,this.old=this.current,this.current=t,this._slide(),void 0)},destroy:function(){this.itemsCount>1&&(this.$navPrev.parent().remove(),this.$navDots.parent().remove()),this.$list.css("width","auto"),this.support&&this.$list.css("transition","none"),this.$items.css("width","auto")}};var n=function(t){i.console&&i.console.error(t)};t.fn.cbpFWSlider=function(i){if("string"==typeof i){var s=Array.prototype.slice.call(arguments,1);this.each(function(){var r=t.data(this,"cbpFWSlider");return r?t.isFunction(r[i])&&"_"!==i.charAt(0)?(r[i].apply(r,s),void 0):(n("no such method '"+i+"' for cbpFWSlider instance"),void 0):(n("cannot call methods on cbpFWSlider prior to initialization; attempted to call method '"+i+"'"),void 0)})}else this.each(function(){var s=t.data(this,"cbpFWSlider");s?s._init():s=t.data(this,"cbpFWSlider",new t.CBPFWSlider(i,this))});return this}}(jQuery,window);