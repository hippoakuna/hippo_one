!function(t){t.fn.hoverscroll=function(o){return o||(o={}),o=t.extend({},t.fn.hoverscroll.params,o),this.each(function(){function e(t,e){t-=v.offset().left,e-=v.offset().top;var r;r=o.vertical?e:t;for(i in w)r>=w[i].from&&r<w[i].to&&("move"==w[i].action?s(w[i].direction,w[i].speed):a())}function r(){if(o.arrows&&!o.fixedArrows){var i,e;o.vertical?(i=h[0].scrollHeight-h.height(),e=h[0].scrollTop):(i=h[0].scrollWidth-h.width(),e=h[0].scrollLeft);var r=o.arrowsOpacity,s=e/i*r;s>r&&(s=r),isNaN(s)&&(s=0);var a=!1;0>=s&&(t("div.arrow.left, div.arrow.top",v).hide(),i>0&&t("div.arrow.right, div.arrow.bottom",v).show().css("opacity",r),a=!0),(s>=r||0>=i)&&(t("div.arrow.right, div.arrow.bottom",v).hide(),a=!0),a||(t("div.arrow.left, div.arrow.top",v).show().css("opacity",s),t("div.arrow.right, div.arrow.bottom",v).show().css("opacity",r-s))}}function s(i,e){v[0].direction!=i&&(o.debug&&t.log("[HoverScroll] Starting to move. direction: "+i+", speed: "+e),a(),v[0].direction=i,v[0].isChanging=!0,d()),v[0].speed!=e&&(o.debug&&t.log("[HoverScroll] Changed speed: "+e),v[0].speed=e)}function a(){v[0].isChanging&&(o.debug&&t.log("[HoverScroll] Stoped moving"),v[0].isChanging=!1,v[0].direction=0,v[0].speed=1,clearTimeout(v[0].timer))}function d(){if(0!=v[0].isChanging){r();var t;t=o.vertical?"scrollTop":"scrollLeft",h[0][t]+=v[0].direction*v[0].speed,v[0].timer=setTimeout(function(){d()},50)}}var n=t(this);o.debug&&t.log("[HoverScroll] Trying to create hoverscroll on element "+this.tagName+"#"+this.id),o.fixedArrows?n.wrap('<div class="fixed-listcontainer"></div>'):n.wrap('<div class="listcontainer"></div>'),n.addClass("list");var h=n.parent();h.wrap('<div class="ui-widget-content hoverscroll'+(o.rtl&&!o.vertical?" rtl":"")+'"></div>');var c,l,p,g,v=h.parent();o.arrows&&(o.vertical?o.fixedArrows?(p='<div class="fixed-arrow top"></div>',g='<div class="fixed-arrow bottom"></div>',h.before(p).after(g)):(p='<div class="arrow top"></div>',g='<div class="arrow bottom"></div>',h.append(p).append(g)):o.fixedArrows?(c='<div class="fixed-arrow left"></div>',l='<div class="fixed-arrow right"></div>',h.before(c).after(l)):(c='<div class="arrow left"></div>',l='<div class="arrow right"></div>',h.append(c).append(l))),v.width(o.width).height(o.height),o.arrows&&o.fixedArrows?o.vertical?(p=h.prev(),g=h.next(),h.width(o.width).height(o.height-(p.height()+g.height()))):(c=h.prev(),l=h.next(),h.height(o.height).width(o.width-(c.width()+l.width()))):h.width(o.width).height(o.height);var f=0;o.vertical?(v.addClass("vertical"),n.children().each(function(){t(this).addClass("item"),f+=t(this).outerHeight?t(this).outerHeight(!0):t(this).height()+parseInt(t(this).css("padding-top"))+parseInt(t(this).css("padding-bottom"))+parseInt(t(this).css("margin-bottom"))+parseInt(t(this).css("margin-bottom"))}),n.height(f),o.debug&&t.log("[HoverScroll] Computed content height : "+f+"px"),f=v.outerHeight?v.outerHeight():v.height()+parseInt(v.css("padding-top"))+parseInt(v.css("padding-bottom"))+parseInt(v.css("margin-top"))+parseInt(v.css("margin-bottom")),o.debug&&t.log("[HoverScroll] Computed container height : "+f+"px")):(v.addClass("horizontal"),n.children().each(function(){t(this).addClass("item"),f+=t(this).outerWidth?t(this).outerWidth(!0):t(this).width()+parseInt(t(this).css("padding-left"))+parseInt(t(this).css("padding-right"))+parseInt(t(this).css("margin-left"))+parseInt(t(this).css("margin-right"))}),n.width(f),o.debug&&t.log("[HoverScroll] Computed content width : "+f+"px"),f=v.outerWidth?v.outerWidth():v.width()+parseInt(v.css("padding-left"))+parseInt(v.css("padding-right"))+parseInt(v.css("margin-left"))+parseInt(v.css("margin-right")),o.debug&&t.log("[HoverScroll] Computed container width : "+f+"px"));var w={1:{action:"move",from:0,to:.06*f,direction:-1,speed:16},2:{action:"move",from:.06*f,to:.15*f,direction:-1,speed:8},3:{action:"move",from:.15*f,to:.25*f,direction:-1,speed:4},4:{action:"move",from:.25*f,to:.4*f,direction:-1,speed:2},5:{action:"stop",from:.4*f,to:.6*f},6:{action:"move",from:.6*f,to:.75*f,direction:1,speed:2},7:{action:"move",from:.75*f,to:.85*f,direction:1,speed:4},8:{action:"move",from:.85*f,to:.94*f,direction:1,speed:8},9:{action:"move",from:.94*f,to:f,direction:1,speed:16}};v[0].isChanging=!1,v[0].direction=0,v[0].speed=1,o.rtl&&!o.vertical&&(h[0].scrollLeft=h[0].scrollWidth-h.width()),v.mousemove(function(t){e(t.pageX,t.pageY)}).bind("mouseleave",function(){a()}),this.startMoving=s,this.stopMoving=a,o.arrows&&!o.fixedArrows?r():t(".arrowleft, .arrowright, .arrowtop, .arrowbottom",v).hide()}),this},t.fn.offset||(t.fn.offset=function(){if(this.left=this.top=0,this[0]&&this[0].offsetParent){var t=this[0];do this.left+=t.offsetLeft,this.top+=t.offsetTop;while(t=t.offsetParent)}return this}),t.fn.hoverscroll.params={vertical:!1,width:854,height:307,arrows:!0,arrowsOpacity:.5,fixedArrows:!1,rtl:!1,debug:!1},t.log=function(){try{console.log.apply(console,arguments)}catch(t){try{opera.postError.apply(opera,arguments)}catch(t){}}}}(jQuery);