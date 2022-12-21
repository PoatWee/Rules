/****************************************



[rewrite_local]

^http:\/\/getway\.radio\.cn url script-response-body https://raw.githubusercontent.com/PoatWee/Rules/master/Crack/yunting.js

^https:\/\/ytapi\.radio\.cn url script-response-body https://raw.githubusercontent.com/PoatWee/Rules/master/Crack/yunting.js


[mitm] 

hostname = *.radio.cn

****************************************/


var body = $response.body.replace(/\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0031/g, '\u0069\u0073\u0056\u0069\u0070\u0022\u003A\u0030');
$done({ body });
