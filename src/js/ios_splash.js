
//CHANGE TO REFLECT EXTRACTED IMAGE PATH
var img_path = 'ios/';

//IOS DETECTION
var iOS = /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
var res = navigator.userAgent.match(/; CPU.*OS (\d_\d)/);
var version = res && iOS ? parseFloat(res[res.length-1].replace("_", ".")) : null;

//VERSION FORCED TO iOS 6 UNTIL BUGS ARE FIXED IN iOS 7
version = 6;

//DEVICE DETECTION
var isTablet = navigator.userAgent.match(/iPad/i) != null;
var isMobile = navigator.userAgent.match(/iPhone/i) != null || navigator.userAgent.match(/iPod/i) != null;

var iphone4 = (window.screen.height == (960 / 2));
var iphone5 = (window.screen.height == (1136 / 2));


function add_ios_screen(href, media) {
	var first = document.getElementsByTagName('script')[0];
	var el = document.createElement('link');
	el.setAttribute('rel','apple-touch-startup-image');
	el.setAttribute('href',img_path+href);
	el.setAttribute('media',media);
	first.parentNode.insertBefore(el, first);	
}

function add_ios_icon(href, sizes) {
	var first = document.getElementsByTagName('script')[0];
	var el = document.createElement('link');
	el.setAttribute('rel','apple-touch-icon-precomposed');
	el.setAttribute('href',img_path+href);
	el.setAttribute('sizes',sizes);
	first.parentNode.insertBefore(el, first);	
}

function add_ios_meta(name, content) {
	var first = document.getElementsByTagName('script')[0];
	var el = document.createElement('meta');
	el.setAttribute('name',name);
	el.setAttribute('content',content);
	first.parentNode.insertBefore(el, first);
}


//DEBUG
//alert('iOS: '+iOS+' Version: '+version+' isTablet: '+isTablet+' isMobile: '+isMoble+' iPhone4: '+iphone4+' iPhone5: '+iphone5);

if(iOS) {

	//DISPLAY LOGIC
	if(isTablet) {
						
		if(version>=7) {
			
			//iPad iOS 7 Icons
			add_ios_icon('icon_ipad_ios7.png', '76x76');
			add_ios_icon('icon_ipad_ios7_retina.png', '152x152');
			
			//Status Bar Area Included (iOS 7 and above)
			add_ios_screen('ipad_ios7_portrait.jpg', '(device-width: 768px) and (orientation: portrait)');
			add_ios_screen('ipad_ios7_landscape.jpg', '(device-width: 768px) and (orientation: landscape)');
			add_ios_screen('ipad_2x_ios7_portrait.jpg', '(device-width: 768px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)');
			add_ios_screen('ipad_2x_ios7_landscape.jpg', '(device-width: 768px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)');
		
		} else {
			
			//iPad iOS 6 Icons
			add_ios_icon('icon_ipad_ios6.png', '72x72');
			add_ios_icon('icon_ipad_ios6_retina.png', '144x144');
			
			//Status Bar Area Excluded (iOS 6 and below)
			add_ios_screen('ipad_ios6_portrait.jpg', '(device-width: 768px) and (orientation: portrait)');
			add_ios_screen('ipad_ios6_landscape.jpg', '(device-width: 768px) and (orientation: landscape)');
			add_ios_screen('ipad_2x_ios6_portrait.jpg', '(device-width: 768px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)');
			add_ios_screen('ipad_2x_ios6_landscape.jpg', '(device-width: 768px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)');

		}
		
	} else if(isMobile) {
		
		if(iphone5) {
			
			//iPhone 5 - Always Retina
			if(version>=7) {	

				//iPhone 5 Icon
				add_ios_icon('icon_iphone_ios7_retina.png', '120x120');

				//Status Bar Area Included (iOS 7 and above)
				add_ios_screen('iphone5_ios7.jpg', '(device-width: 320px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)');

			} else {

				//iPhone 5 Icon
				add_ios_icon('icon_iphone_ios6_retina.png', '114x114');

				//Status Bar Area Excluded (iOS 6 and below)
				add_ios_screen('iphone5_ios6.jpg', '(device-width: 320px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)');

			}
		
		} else {
			
			//iPhone 4 and Below
			if(version>=7) {
					
				//iPhone 4 iOS 7 Icon
				add_ios_icon('icon_iphone_ios7_retina.png', '120x120');
				
				//Status Bar Area Included (iOS 7 and above) - Always Retina
				add_ios_screen('iphone4_ios7.jpg', '(device-width: 320px) and (orientation: portrait)');
			
			} else {
				
				//iPhone iOS 6 Icons
				add_ios_icon('icon_iphone_ios6.png', '72x72');
				add_ios_icon('icon_iphone_ios6_retina.png', '144x144');
			
				//Status Bar Area Excluded (iOS 6 and below) - Sometimes Retina
				add_ios_screen('iphone3G.jpg', '(device-width: 320px) and (orientation: portrait)');
				add_ios_screen('iphone4_ios6.jpg', '(device-width: 320px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)');
			
			}
	
		}
	}
	
	//ENABLE WEB APP MODE
	add_ios_meta('apple-mobile-web-app-capable', 'yes');
	add_ios_meta('apple-mobile-web-app-status-bar-style', 'black');
	
}