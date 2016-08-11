/*
 * Video.js LGX Index
 * https://github.com/toddaa/videojs-lgx-index
 *
 * Copyright (c) 2016 Aaron Todd @ LEIGHTRONIX, INC.
 * Licensed under the MIT license
 */

(function(vjs) {

	// define some reasonable defaults
	var defaults = {
		markers: [],
	};
	// plugin initializer
	var lgxindex = function(options) {
		var settings = videojs.mergeOptions(defaults, options), player = this;
		
		if (settings.markers.length >= 1){
			var button = document.createElement("button");
				button.type = "button";
				button.id = "vjs-lgx-index-handle";
				//button.className = "navbar-toggle";
				//button.target = "_blank";
				button.addEventListener("click", function(){ 
					$('.vjs-lgx-index-menu ul').css('max-height', $('body').height() - 90 + "px");
					$('.vjs-lgx-index-menu').slideToggle(200);
				});
				
			var bar1 = document.createElement('span');
				bar1.className = 'icon-bar';
			var bar2 = document.createElement('span');
				bar2.className = 'icon-bar';
			var bar3 = document.createElement('span');
				bar3.className = 'icon-bar';
				
			button.appendChild(bar1);
			button.appendChild(bar2);
			button.appendChild(bar3);
			player.el().appendChild(button);
			
			var menu = document.createElement("div");
				menu.className = 'vjs-lgx-index-menu';
				menu.style = 'display:none';		
			
			var heading = document.createElement("h3");
				heading.innerText = 'Index Points';
			
			var list = document.createElement("ul");
				list.className = 'nav nav-pills nav-stacked';
			
			var el = document.createElement("li");
			
			$.each(settings.markers, function( index, value ) {
			  
				var link = document.createElement("a");
				link.innerHTML = value.text;
				link.title = value.text;
				link.href = "#";
				link.addEventListener("click", function(){ 
					player.currentTime(value.time);
				});
				
				
				
			
				el.appendChild(link);
			});
			
			list.appendChild(el);
			menu.appendChild(heading);
			menu.appendChild(list);
						
			player.el().appendChild(menu);
		}

		return this;
	};	
	// register the plugin with video.js
	vjs.plugin('lgxindex', lgxindex);

}(window.videojs));
