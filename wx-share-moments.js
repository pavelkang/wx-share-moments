angular.module('pavelkang.wx-share', [])
	.directive('wxShareMoments', function(){
		var link = function(scope, element, attrs) {
			document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
				WeixinJSBridge.on('menu:share:timeline', function(argv){
					WeixinJSBridge.invoke('shareTimeline', {
						"img_url" :  attrs['img'] ? attrs['img'] : 'http://t12.baidu.com/it/u=2348010170,4054977331&fm=58',
						"img_width" : "120",
						"img_height" : "120",
						"link" : attrs['link'] ? attrs['link'] : 'http://weixin.qq.com',
						"desc" : attrs["desc"] ? attrs["desc"] : "No description",
						"title" : attrs["title"] ? attrs["title"] : "Title"
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
	})
	.directive('wxShareFriends', function(){
		var link = function(scope, element, attrs) {
			document.addEventListener('WeixinJSBridgeReady', function onBridgeReady(){
				WeixinJSBridge.on('menu:share:appmessage', function(argv){
					WeixinJSBridge.invoke('sendAppMessage', {
						"appid" : attrs["appid"] ? attrs["appid"] : "",
						"img_url" :  attrs['img'] ? attrs['img'] : 'http://t12.baidu.com/it/u=2348010170,4054977331&fm=58',
						"img_width" : "120",
						"img_height" : "120",
						"link" : attrs['link'] ? attrs['link'] : 'http://weixin.qq.com',
						"desc" : attrs["desc"] ? attrs["desc"] : "No description",
						"title" : attrs["title"] ? attrs["title"] : "Title"
					}, function(res) {
						_report('send_msg', res.err_msg);
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