(function($){
	var msie = (function(w,d){return ("XMLHttpRequest" in w ? d.querySelector ? d.documentMode : 7 : 6)})(top,top.document),
		minWidth = msie < 7 ? "width" : "minWidth",
		activeElement,
		selectQueue,
		loopTimer,
		fixie;

	function create(className, nodeName){
		return $("<" + ( nodeName || "div" ) + "/>").addClass(className);
	}

	if( msie < 8 ) {
		fixie = (function(){
			function fixie(selectui, select){
				if(selectui.find(".select_text_ui").length){
					return;
				}
				selectui.bind("selectstart", function(e){
					e.stopImmediatePropagation();
					return false;
				}).click(function(e) {
					var menu = selectui.find(".select_menu_ui");
					if( menu.position().left < 0 ) {
						showMenu(selectui, menu, select);
					} else {
						hideMenu(selectui, menu);
					}
					selectui.addClass("select_focus_ui");
				});
				$(select).focus(function(){
					selectui.addClass("select_focus_ui");
				}).blur(function(e) {
					hideAll();
				});
	
				createMenu(selectui, select);
	
			}
			function createMenu(selectui, select){
				return createOpts(create("select_menu_ui"), select).appendTo(selectui).hover(function(){
					$(this).width(this.clientWidth);
				},function(){
					$(this).width("");
				});
			}

			function createOpts(menu, select){
				menu.html("");
				$.each(select.options, function(i){
					var option = this;
					create("option_ui").html(option.innerHTML + "&nbsp;").click(function(e) {
						if(option.disabled){
							return false
						} else {
							select.selectedIndex = i;
							$(select).trigger("change");
						}
					}).bind("mouseenter", function(e) {
						option.disabled || $(this).addClass("option_hover_ui").siblings().removeClass("option_hover_ui");
					}).css({
						color: option.disabled ? "gray" : ""
					}).appendTo(menu);
				});
				menu.children().eq(select.selectedIndex).addClass("option_hover_ui");
				return menu.css("left", "-99999em");
			}
			function hideAll(not){
				var tag = $(".select_ui");
				if(not && not.length){
					tag = tag.not(not);
				} else {
					activeElement = null;
				}
				tag.each(function(i) {
					var selectui = $(this);
					selectui.removeClass("select_focus_ui");
					hideMenu(selectui);
				});
			}

			function hideMenu(selectui, menu){
				selectui.css({zIndex: ""});
				( menu || selectui.find(".select_menu_ui") ).css("left", "-99999em");
			}

			function showMenu(selectui, menu, select){
				activeElement = select;
				hideAll(selectui);
				createOpts(menu, select);
				selectui.css({zIndex: 0xffff});
				menu.css({left: 0});
			}

			$(document).click(function(e){
				hideAll($(e.target).closest(".select_ui"));
			});

			return fixie;
		})();
	}

	function modifyText(select){
		var index = select.selectedIndex,
			text = index < 0 ? "" : select.options[index].innerHTML,
			textdiv = $(select).prev(".select_text_ui");
		if(!textdiv.length){
			textdiv = create("select_text_ui").insertBefore(select);
		}
		text = text || "&nbsp;"
		if(textdiv.html() != text ){
			textdiv.html(text);
		}
		var length = 0;
		$.each(select.options, function(){
			var text = this.label || this.innerText || this.textContent || this.innerHTML,
				width = text.match(/[u0000-u00FF]/g);
			width = text.length - (width ? width.length / 2 : 0) + 0.5;
			length = Math.max(width, length);
		});
		length += "em";

		if( msie < 7 && document.readyState == "complete" ){
			textdiv.css( minWidth, "" );
			if(textdiv.css( minWidth) != "auto" ){
				return;
			}
		}
		if (textdiv.css( minWidth ) != length) {
			textdiv.css( minWidth, length );
		}
	}

	function startInterval(select){
		if(selectQueue){
			selectQueue.push(select);
		} else {
			selectQueue = [select];
			clearInterval(loopTimer);
			loopTimer = setInterval(function(){
				$.each(selectQueue, function(){
					if((activeElement || document.activeElement) !== this){
						modifyText(this);
					}
				});
			}, 200);
		}
	}

	$.fn.selectui = function(){
		return this.each(function(){

			var modifyTextTimer,
				select = $(this),
				selectui = select.closest(".select_ui");

			if(select.css("display") !== "none"){

				if(!selectui.length){
					selectui = create("select_ui", "span");
					selectui.insertAfter(select).append(create("select_arrow")).append(select);
				}

				select.bind("change propertychange DOMAttrModified DOMNodeInserted DOMNodeRemoved keypress", function(e){
					clearTimeout(modifyTextTimer);
					var select = this;
					modifyTextTimer = setTimeout(function(){
						modifyText(select);
					}, 10);
				}).each(function(){
					modifyText(this);
				});
				if( fixie ) {
					
					fixie(selectui, this);
				} else {
					
					select.focus(function(e){
						selectui.addClass("select_focus_ui");
					}).blur(function(e) {
						selectui.removeClass("select_focus_ui");
					});
				}

				startInterval(this);
			}
		});
	};

	$(function(){
		if(document.querySelector){
			$("select").selectui();
		} else {
			
			$("select:not(.profile select)").selectui();
		}
	});
})(jQuery);