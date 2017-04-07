!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";function a(e,a){return e.getTokenAt(a)}function t(e){var t=e.getCursor(),i=a(e,t),o=i.string?"":i.string.trim(),n=[],l=0,m={line:t.line,ch:t.ch+2},u={line:t.line,ch:t.ch},g=!0,h=e.getRange({line:t.line,ch:t.ch-1},t),d=e.getRange({line:t.line,ch:t.ch-2},t);if(":"===h||": "===d||","===h||", "===d){var y=e.getRange({line:t.line,ch:0},t);y||(y=""),y=y.substr(0,y.indexOf(":")).trim().toLowerCase(),n=p(r,y)}else if(""!==e.getRange({line:t.line,ch:0},t).trim()){var f=e.getRange({line:t.line,ch:0},t).trim();f.indexOf(":")>-1?(o=f.substr(f.indexOf(":")+1).trim().toLowerCase(),n=p(r,y)):(o=f.toLowerCase(),n=s(r)),m.ch=i.start}else for(l=0;l<r.length;l++)n=s(r);return g===!0&&""===o.trim()&&(g=!1),g&&(n=c(o,n)),{list:n,from:m,to:u}}var i=(e.Pos,["*/*","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5","text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8","image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*","text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1","image/png,image/*;q=0.8,*/*;q=0.5","audio/webm, audio/ogg, audio/wav, audio/*;q=0.9, application/ogg;q=0.7, video/*;q=0.6; */*;q=0.5","video/webm, video/ogg, video/*;q=0.9, application/ogg=0.7, audio/*;q=0.6; */*;q=0.5","application/javascript, */*;q=0.8","text/css,*/*;q=0.1","text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1"]),o=["application/json","application/xml","application/atom+xml","multipart-form-data","application/x-www-form-urlencoded","application/base64","application/octet-stream","text/plain","text/css","text/html","application/javascript"],n=["Basic {base64 of user:password}","Bearer {OAuth2 bearer}"],l={"base64 of user:password":{type:String,call:"authorizationBasic"},"OAuth2 bearer":{type:String,call:"authorizationGoogleOauth2"}},r=[{key:"Accept",values:i},{key:"Accept-Charset",values:["UTF-8","UTF-16","ISO-8859-1","ISO-8859-1,utf-8;q=0.7,*;q=0.7"]},{key:"Accept-Encoding",values:["compress","gzip","deflate","identity","br","*","gzip, deflate, sdch"]},{key:"Accept-Language",values:["en-US","cad","en-gb;q=0.8, en;q=0.7"]},{key:"Authorization",values:n,params:l},{key:"Access-Control-Request-Method",values:["GET","POST","PUT","DELETE"]},{key:"Access-Control-Request-Headers",values:["{list-of-headers}"],params:{"list-of-headers":{type:String}}},{key:"Cache-Control",values:["no-cache","no-store","max-age={seconds}","max-stale={seconds}","min-fresh={seconds}","no-transform","only-if-cached"],params:{seconds:{type:Number}}},{key:"Connection",values:["close","keep-alive"]},{key:"Content-MD5",values:["{md5-of-message}"],params:{"length-in-bytes":{type:String}}},{key:"Content-Length",values:["{length-in-bytes}"],params:{"length-in-bytes":{type:Number}}},{key:"Content-Type",values:o},{key:"Cookie",values:["{cookie name}={cookie value}","{cookie name}={cookie value}; expires={insert GMT date here}; domain={domain.com}; path=/; secure"],params:{"*":{type:String,call:"cookie"}}},{key:"Date",values:["{insert GMT date here}"]},{key:"DNT",values:[0,1]},{key:"Expect",values:["200-OK","100-continue"]},{key:"From",values:["user@domain.com"]},{key:"Front-End-Https",values:["on","off"]},{key:"Host",values:["www.domain.com","www.domain.com:80"]},{key:"If-Match",values:["{insert entity tag}"]},{key:"If-Modified-Since",values:["{insert GMT date here}"]},{key:"If-None-Match",values:["{insert entity tag}"]},{key:"If-Range",values:["{insert entity tag}","{insert GMT date here}"]},{key:"If-Unmodified-Since",values:["{insert GMT date here}"]},{key:"Max-Forwards",values:["{number of forwards}"],params:{"number of forwards":{type:Number}}},{key:"Origin",values:[]},{key:"Pragma",values:["no-cache"]},{key:"Proxy-Authorization",values:n,params:l},{key:"Proxy-Connection",values:["close","keep-alive"]},{key:"Range",values:["bytes={from bytes}-{to bytes}","bytes=-{final bytes}"]},{key:"Referer",values:["{http://www.domain.com/}"]},{key:"TE",values:["{header name}","trailers, deflate;q=0.5"]},{key:"Upgrade",values:["HTTP/2.0, SHTTP/1.3, IRC/6.9, RTA/x11"]},{key:"User-Agent",values:[navigator.userAgent,"Mozilla/5.0 (Windows NT 6.1; WOW64; rv:33.0) Gecko/20120101 Firefox/33.0","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10; rv:33.0) Gecko/20100101 Firefox/33.0","Opera/9.80 (Windows NT 6.0) Presto/2.12.388 Version/12.14","Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.75.14 (KHTML, like Gecko) Version/7.0.3 Safari/7046A194A","Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0; WOW64; Trident/4.0; SLCC1)","Mozilla/5.0 (MSIE 10.0; Windows NT 6.1; Trident/5.0)","Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25","Mozilla/5.0 (iPad; CPU OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25","Mozilla/5.0 (Linux; Android 4.4.2; Nexus 4 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.114 Mobile Safari/537.36","Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"]},{key:"Via",values:[]},{key:"Warning",values:["{code} {agent} {message} {date}"],properties:{code:{type:Number},agent:{type:String},message:{type:String},date:{type:Date}}},{key:"X-ATT-DeviceId",values:[]},{key:"X-Forwarded-For",values:[]},{key:"X-Forwarded-Proto",values:["http","https"]},{key:"X-Requested-With",values:["XMLHttpRequest"]},{key:"X-Wap-Profile",values:[]}],s=function(a){for(var t=[],i=function(a,t,i,o){t.replaceRange(o.text+": ",i.from,i.to),e.signal(t,"header-key-selected",o.text)},o=0;o<a.length;o++)t.push({text:a[o].key,hint:i.bind(this,a[o])});return t},p=function(a,t){for(var i=[],o=(function(a,t,i,o){if(t.replaceRange(o.text,i.from,i.to),e.signal(t,"header-value-selected",o.text),a.params&&a.params["*"]&&a.params["*"].call){var n=Math.min(i.from.ch,i.to.ch),l=n+o.text.length,r=i.from.line;t.setSelection({line:r,ch:n},{line:r,ch:l}),e.signal(t,"header-value-support",{type:a.params["*"],key:a.key,value:o.text})}else{var s=o.text.match(/\{(.*?)\}/);if(s&&a.params&&s[1]in a.params){var n=Math.min(i.from.ch,i.to.ch),r=i.from.line;n+=o.text.indexOf("{");var l=n+s[1].length+2;t.setSelection({line:r,ch:n},{line:r,ch:l}),e.signal(t,"header-value-support",{type:a.params[s[1]],key:a.key,value:o.text})}}}),n=0;n<a.length;n++)if(a[n].key.toLowerCase()===t){for(var l=a[n].values&&a[n].values.length||0,r=0;r<l;r++){var s=a[n].values[r],p={text:s,hint:o.bind(this,a[n])};i.push(p)}break}return i},c=function(e,a){var t=[],i=0;for(i=0;i<a.length;i++)a[i].text?a[i].text.toLowerCase().substring(0,e.length)===e&&t.push(a[i]):a[i].toLowerCase().substring(0,e.length)===e&&t.push(a[i]);return t};e.registerHelper("hint","http-headers",t)});