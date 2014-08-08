angular.module('pavelkang.wx-share-moments', []).
	directive('wxShareMoments', function(){
		var link = function(scope, element, attrs) {
			alert(attrs['link'])
			document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
				WeixinJSBridge.on('menu:share:timeline', function(argv){
					WeixinJSBridge.invoke('shareTimeline', {
						"img_url" :  "http://kaikang.herokuapp.com/images/self.jpg",
						"img_width" : "120",
						"img_height" : "120",
						"link" : "http://kaikang.herokuapp.com",
						"title" : "This is a test"
					}, function(res) {
						_report('timeline', res.err_msg);
					});
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