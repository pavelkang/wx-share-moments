angular.module('pavelkang.wx-share-moments', []).
	directive('wxShareMoments', function(){
		var link = function(scope, element, attrs) {
			document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
				WeixinJSBridge.on('menu:share:timeline', function(argv){
					WeixinJSBridge.invoke('shareTimeline', {
						"img_url" :  attrs['img'],
						"img_width" : attrs['img_width']?attrs['img_width']:120,
						"img_height" : attrs['img_height']?attrs['img_height']:120,
						"link" : attrs['link'],
						"title" : attrs['title']
					}, function(res) {
						_report('send_msg', res.err_msg);
					})
				});
			}, false);
		};
		return {
			restrict : "AE",
			link : link,
			scope : {

			}
		}
	});