var Markdown;Markdown="object"==typeof exports&&"function"==typeof require?exports:{},function(){function a(a){return a}function b(){return!1}function c(){}function d(){}c.prototype={chain:function(b,c){var d=this[b];if(!d)throw new Error("unknown hook "+b);this[b]=d===a?c:function(){var a=Array.prototype.slice.call(arguments,0);return a[0]=d.apply(null,a),c.apply(null,a)}},set:function(a,b){if(!this[a])throw new Error("unknown hook "+a);this[a]=b},addNoop:function(b){this[b]=a},addFalse:function(a){this[a]=b}},Markdown.HookCollection=c,d.prototype={set:function(a,b){this["s_"+a]=b},get:function(a){return this["s_"+a]}},Markdown.Converter=function(){function a(a){return a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?(?=\s|$)[ \t]*\n?[ \t]*((\n*)["(](.+?)[")][ \t]*)?(?:\n+)/gm,function(a,b,c,d,e,f){return b=b.toLowerCase(),I.set(b,x(c)),e?d:(f&&J.set(b,f.replace(/"/g,"&quot;")),"")})}function b(a){return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,e),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math)\b[^\r]*?.*<\/\2>[ \t]*(?=\n+)\n)/gm,e),a=a.replace(/\n[ ]{0,3}((<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,e),a=a.replace(/\n\n[ ]{0,3}(<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>[ \t]*(?=\n{2,}))/g,e),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,e)}function e(a,b){var c=b;return c=c.replace(/^\n+/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(K.push(c)-1)+"K\n\n"}function f(a,c){a=H.preBlockGamut(a,M),a=n(a);var d="<hr />\n";return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,d),a=a.replace(/^[ ]{0,2}([ ]?-[ ]?){3,}[ \t]*$/gm,d),a=a.replace(/^[ ]{0,2}([ ]?_[ ]?){3,}[ \t]*$/gm,d),a=o(a),a=q(a),a=v(a),a=H.postBlockGamut(a,M),a=b(a),a=w(a,c)}function g(a){return a=H.preSpanGamut(a),a=s(a),a=h(a),a=y(a),a=k(a),a=i(a),a=A(a),a=a.replace(/~P/g,"://"),a=x(a),a=u(a),a=a.replace(/ *\n/g," <br>\n"),a=H.postSpanGamut(a)}function h(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--(?:|(?:[^>-]|-[^>])(?:[^-]|-[^-])*)--)>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=F(b,"!"==a.charAt(1)?"\\`*_/":"\\`*_")})}function i(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,j),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?((?:\([^)]*\)|[^()\s])*?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,j),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,j)}function j(a,b,c,d,e,f,g,h){void 0==h&&(h="");var i=b,j=c.replace(/:\/\//g,"~P"),k=d.toLowerCase(),m=e,n=h;if(""==m)if(""==k&&(k=j.toLowerCase().replace(/ ?\n/g," ")),m="#"+k,void 0!=I.get(k))m=I.get(k),void 0!=J.get(k)&&(n=J.get(k));else{if(!(i.search(/\(\s*\)$/m)>-1))return i;m=""}m=E(m),m=F(m,"*_");var o='<a href="'+m+'"';return""!=n&&(n=l(n),n=F(n,"*_"),o+=' title="'+n+'"'),o+=">"+j+"</a>"}function k(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,m),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,m)}function l(a){return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")}function m(a,b,c,d,e,f,g,h){var i=b,j=c,k=d.toLowerCase(),m=e,n=h;if(n||(n=""),""==m){if(""==k&&(k=j.toLowerCase().replace(/ ?\n/g," ")),m="#"+k,void 0==I.get(k))return i;m=I.get(k),void 0!=J.get(k)&&(n=J.get(k))}j=F(l(j),"*_[]()"),m=F(m,"*_");var o='<img src="'+m+'" alt="'+j+'"';return n=l(n),n=F(n,"*_"),o+=' title="'+n+'"',o+=" />"}function n(a){return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,b){return"<h1>"+g(b)+"</h1>\n\n"}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,b){return"<h2>"+g(b)+"</h2>\n\n"}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,b,c){var d=b.length;return"<h"+d+">"+g(c)+"</h"+d+">\n\n"})}function o(a,b){a+="~0";var c=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return L?a=a.replace(c,function(a,c,d){var e=c,f=d.search(/[*+-]/g)>-1?"ul":"ol",g=p(e,f,b);return g=g.replace(/\s+$/,""),g="<"+f+">"+g+"</"+f+">\n"}):(c=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(c,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",h=p(f,g);return h=e+"<"+g+">\n"+h+"</"+g+">\n"})),a=a.replace(/~0/,"")}function p(a,b,c){L++,a=a.replace(/\n{2,}$/,"\n"),a+="~0";var d=N[b],e=new RegExp("(^[ \\t]*)("+d+")[ \\t]+([^\\r]+?(\\n+))(?=(~0|\\1("+d+")[ \\t]+))","gm"),h=!1;return a=a.replace(e,function(a,b,d,e){var i=e,j=/\n\n$/.test(i),k=j||i.search(/\n{2,}/)>-1;return k||h?i=f(C(i),!0):(i=o(C(i),!0),i=i.replace(/\n$/,""),c||(i=g(i))),h=j,"<li>"+i+"</li>\n"}),a=a.replace(/~0/g,""),L--,a}function q(a){return a+="~0",a=a.replace(/(?:\n\n|^\n?)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=t(C(d)),d=D(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>","\n\n"+d+"\n\n"+e}),a=a.replace(/~0/,"")}function r(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(K.push(a)-1)+"K\n\n"}function s(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d){var e=d;return e=e.replace(/^([ \t]*)/g,""),e=e.replace(/[ \t]*$/g,""),e=t(e),e=e.replace(/:\/\//g,"~P"),b+"<code>"+e+"</code>"})}function t(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=F(a,"*_{}[]\\",!1)}function u(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>")}function v(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=f(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /gm,"~0"),c=c.replace(/~0/g,"")}),r("<blockquote>\n"+c+"\n</blockquote>")})}function w(a,b){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");for(var c=a.split(/\n{2,}/g),d=[],e=/~K(\d+)K/,f=c.length,h=0;f>h;h++){var i=c[h];e.test(i)?d.push(i):/\S/.test(i)&&(i=g(i),i=i.replace(/^([ \t]*)/g,"<p>"),i+="</p>",d.push(i))}if(!b){f=d.length;for(var h=0;f>h;h++)for(var j=!0;j;)j=!1,d[h]=d[h].replace(/~K(\d+)K/g,function(a,b){return j=!0,K[b]})}return d.join("\n\n")}function x(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?!]|~D)/gi,"&lt;")}function y(a){return a=a.replace(/\\(\\)/g,G),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,G)}function z(a,b,c,d){if(b)return a;if(")"!==d.charAt(d.length-1))return"<"+c+d+">";for(var e=d.match(/[()]/g),f=0,g=0;g<e.length;g++)"("===e[g]?0>=f?f=1:f++:f--;var h="";if(0>f){var i=new RegExp("\\){1,"+-f+"}$");d=d.replace(i,function(a){return h=a,""})}if(h){var j=d.charAt(d.length-1);R.test(j)||(h=j+h,d=d.substr(0,d.length-1))}return"<"+c+d+">"+h}function A(a){a=a.replace(Q,z);var b=function(a,b){return'<a href="'+b+'">'+H.plainLinkText(b)+"</a>"};return a=a.replace(/<((https?|ftp):[^'">\s]+)>/gi,b)}function B(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)})}function C(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,"")}function D(a){if(!/\t/.test(a))return a;var b,c=["    ","   ","  "," "],d=0;return a.replace(/[\n\t]/g,function(a,e){return"\n"===a?(d=e+1,a):(b=(e-d)%4,d=e+1,c[b])})}function E(a){if(!a)return"";var b=a.length;return a.replace(S,function(c,d){return"~D"==c?"%24":":"!=c||d!=b-1&&!/[0-9\/]/.test(a.charAt(d+1))?"%"+c.charCodeAt(0).toString(16):":"})}function F(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,G)}function G(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}var H=this.hooks=new c;H.addNoop("plainLinkText"),H.addNoop("preConversion"),H.addNoop("postNormalization"),H.addNoop("preBlockGamut"),H.addNoop("postBlockGamut"),H.addNoop("preSpanGamut"),H.addNoop("postSpanGamut"),H.addNoop("postConversion");var I,J,K,L;this.makeHtml=function(c){if(I)throw new Error("Recursive call to converter.makeHtml");return I=new d,J=new d,K=[],L=0,c=H.preConversion(c),c=c.replace(/~/g,"~T"),c=c.replace(/\$/g,"~D"),c=c.replace(/\r\n/g,"\n"),c=c.replace(/\r/g,"\n"),c="\n\n"+c+"\n\n",c=D(c),c=c.replace(/^[ \t]+$/gm,""),c=H.postNormalization(c),c=b(c),c=a(c),c=f(c),c=B(c),c=c.replace(/~D/g,"$$"),c=c.replace(/~T/g,"~"),c=H.postConversion(c),K=J=I=null,c};var M=function(a){return f(a)},N={ol:"\\d+[.]",ul:"[*+-]"},O="[-A-Z0-9+&@#/%?=~_|[\\]()!:,.;]",P="[-A-Z0-9+&@#/%=~_|[\\])]",Q=new RegExp('(="|<)?\\b(https?|ftp)(://'+O+"*"+P+")(?=$|\\W)","gi"),R=new RegExp(P,"i"),S=/(?:["'*()[\]:]|~D)/g}}(),function(){function a(a){return a.replace(/<[^>]*>?/gi,b)}function b(a){return a.match(f)||a.match(g)||a.match(h)?a:""}function c(a){if(""==a)return"";var b=/<\/?\w+[^>]*(\s|$|>)/g,c=a.toLowerCase().match(b),d=(c||[]).length;if(0==d)return a;for(var e,f,g,h="<p><img><br><li><hr>",i=[],j=[],k=!1,l=0;d>l;l++)if(e=c[l].replace(/<\/?(\w+).*/,"$1"),!(i[l]||h.search("<"+e+">")>-1)){if(f=c[l],g=-1,!/^<\//.test(f))for(var m=l+1;d>m;m++)if(!i[m]&&c[m]=="</"+e+">"){g=m;break}-1==g?k=j[l]=!0:i[g]=!0}if(!k)return a;var l=0;return a=a.replace(b,function(a){var b=j[l]?"":a;return l++,b})}var d,e;"object"==typeof exports&&"function"==typeof require?(d=exports,e=require("./Markdown.Converter").Converter):(d=window.Markdown,e=d.Converter),d.getSanitizingConverter=function(){var b=new e;return b.hooks.chain("postConversion",a),b.hooks.chain("postConversion",c),b};var f=/^(<\/?(b|blockquote|code|del|dd|dl|dt|em|h1|h2|h3|i|kbd|li|ol|p|pre|s|sup|sub|strong|strike|ul)>|<(br|hr)\s?\/?>)$/i,g=/^(<a\shref="((https?|ftp):\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\stitle="[^"<>]+")?\s?>|<\/a>)$/i,h=/^(<img\ssrc="(https?:\/\/|\/)[-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]+"(\swidth="\d{1,3}")?(\sheight="\d{1,3}")?(\salt="[^"<>]*")?(\stitle="[^"<>]*")?\s?\/?>)$/i}(),function(){function a(){}function b(a){this.buttonBar=o.getElementById("wmd-button-bar"+a),this.preview=o.getElementById("wmd-preview"+a),this.input=o.getElementById("wmd-input"+a)}function c(a,b){var c,e,f,g=this,h=[],i=0,j="none",k=function(a,b){j!=a&&(j=a,b||n()),s.isIE&&"moving"==j?f=null:e=setTimeout(m,1)},m=function(a){f=new d(b,a),e=void 0};this.setCommandMode=function(){j="command",n(),e=setTimeout(m,0)},this.canUndo=function(){return i>1},this.canRedo=function(){return h[i+1]?!0:!1},this.undo=function(){g.canUndo()&&(c?(c.restore(),c=null):(h[i]=new d(b),h[--i].restore(),a&&a())),j="none",b.input.focus(),m()},this.redo=function(){g.canRedo()&&(h[++i].restore(),a&&a()),j="none",b.input.focus(),m()};var n=function(){var e=f||new d(b);return e?"moving"==j?void(c||(c=e)):(c&&(h[i-1].text!=c.text&&(h[i++]=c),c=null),h[i++]=e,h[i+1]=null,void(a&&a())):!1},o=function(a){var b=!1;if((a.ctrlKey||a.metaKey)&&!a.altKey){var c=a.charCode||a.keyCode,d=String.fromCharCode(c);switch(d.toLowerCase()){case"y":g.redo(),b=!0;break;case"z":a.shiftKey?g.redo():g.undo(),b=!0}}return b?(a.preventDefault&&a.preventDefault(),void(window.event&&(window.event.returnValue=!1))):void 0},p=function(a){if(!a.ctrlKey&&!a.metaKey){var b=a.keyCode;b>=33&&40>=b||b>=63232&&63235>=b?k("moving"):8==b||46==b||127==b?k("deleting"):13==b?k("newlines"):27==b?k("escape"):(16>b||b>20)&&91!=b&&k("typing")}},q=function(){l.addEvent(b.input,"keypress",function(a){!a.ctrlKey&&!a.metaKey||a.altKey||89!=a.keyCode&&90!=a.keyCode||a.preventDefault()});var a=function(){(s.isIE||f&&f.text!=b.input.value)&&void 0==e&&(j="paste",n(),m())};l.addEvent(b.input,"keydown",o),l.addEvent(b.input,"keydown",p),l.addEvent(b.input,"mousedown",function(){k("moving")}),b.input.onpaste=a,b.input.ondrop=a},r=function(){q(),m(!0),n()};r()}function d(b,c){var d=this,e=b.input;this.init=function(){l.isVisible(e)&&(c||!o.activeElement||o.activeElement===e)&&(this.setInputAreaSelectionStartEnd(),this.scrollTop=e.scrollTop,(!this.text&&e.selectionStart||0===e.selectionStart)&&(this.text=e.value))},this.setInputAreaSelection=function(){if(l.isVisible(e))if(void 0===e.selectionStart||s.isOpera){if(o.selection){if(o.activeElement&&o.activeElement!==e)return;e.focus();var a=e.createTextRange();a.moveStart("character",-e.value.length),a.moveEnd("character",-e.value.length),a.moveEnd("character",d.end),a.moveStart("character",d.start),a.select()}}else e.focus(),e.selectionStart=d.start,e.selectionEnd=d.end,e.scrollTop=d.scrollTop},this.setInputAreaSelectionStartEnd=function(){if(b.ieCachedRange||!e.selectionStart&&0!==e.selectionStart){if(o.selection){d.text=l.fixEolChars(e.value);var a=b.ieCachedRange||o.selection.createRange(),c=l.fixEolChars(a.text),f="",g=f+c+f;a.text=g;var h=l.fixEolChars(e.value);a.moveStart("character",-g.length),a.text=c,d.start=h.indexOf(f),d.end=h.lastIndexOf(f)-f.length;var i=d.text.length-l.fixEolChars(e.value).length;if(i){for(a.moveStart("character",-c.length);i--;)c+="\n",d.end+=1;a.text=c}b.ieCachedRange&&(d.scrollTop=b.ieCachedScrollTop),b.ieCachedRange=null,this.setInputAreaSelection()}}else d.start=e.selectionStart,d.end=e.selectionEnd},this.restore=function(){void 0!=d.text&&d.text!=e.value&&(e.value=d.text),this.setInputAreaSelection(),e.scrollTop=d.scrollTop},this.getChunks=function(){var b=new a;return b.before=l.fixEolChars(d.text.substring(0,d.start)),b.startTag="",b.selection=l.fixEolChars(d.text.substring(d.start,d.end)),b.endTag="",b.after=l.fixEolChars(d.text.substring(d.end)),b.scrollTop=d.scrollTop,b},this.setChunks=function(a){a.before=a.before+a.startTag,a.after=a.endTag+a.after,this.start=a.before.length,this.end=a.before.length+a.selection.length,this.text=a.before+a.selection+a.after,this.scrollTop=a.scrollTop},this.init()}function e(a,b,c,d){var e,f,g,h=3e3,i="delayed",j=function(a,b){l.addEvent(a,"input",b),a.onpaste=b,a.ondrop=b,l.addEvent(a,"keypress",b),l.addEvent(a,"keydown",b)},k=function(){var a=0;return window.innerHeight?a=window.pageYOffset:o.documentElement&&o.documentElement.scrollTop?a=o.documentElement.scrollTop:o.body&&(a=o.body.scrollTop),a},n=function(){if(b.preview){var c=b.input.value;if(!c||c!=g){g=c;var d=(new Date).getTime();c=a.makeHtml(c);var e=(new Date).getTime();f=e-d,y(c)}}},p=function(){if(e&&(clearTimeout(e),e=void 0),"manual"!==i){var a=0;"delayed"===i&&(a=f),a>h&&(a=h),e=setTimeout(n,a)}},q=function(a){return a.scrollHeight<=a.clientHeight?1:a.scrollTop/(a.scrollHeight-a.clientHeight)},r=function(){b.preview&&(b.preview.scrollTop=(b.preview.scrollHeight-b.preview.clientHeight)*q(b.preview))};this.refresh=function(a){a?(g="",n()):p()},this.processingTime=function(){return f};var t,u=!0,v=function(a){var c=b.preview,d=c.parentNode,e=c.nextSibling;d.removeChild(c),c.innerHTML=a,e?d.insertBefore(c,e):d.appendChild(c)},w=function(a){b.preview.innerHTML=a},x=function(a){if(t)return t(a);try{w(a),t=w}catch(b){(t=v)(a)}},y=function(a){var c=m.getTop(b.input)-k();if(b.preview&&(x(a),d()),r(),u)return void(u=!1);var e=m.getTop(b.input)-k();s.isIE?setTimeout(function(){window.scrollBy(0,e-c)},0):window.scrollBy(0,e-c)},z=function(){j(b.input,p),n(),b.preview&&(b.preview.scrollTop=0)};z()}function f(a,b,c,e,f,g,h,i){function j(a){if(r.focus(),a.textOp){c&&c.setCommandMode();var f=new d(b);if(!f)return;var g=f.getChunks(),h=function(){r.focus(),g&&f.setChunks(g),f.restore(),e.refresh()},i=a.textOp(g,h);i||h()}a.execute&&a.execute(c)}function k(a,c){var d="0px",e="-20px",f="-40px",g=a.getElementsByTagName("span")[0];c?(g.style.backgroundPosition=a.XShift+" "+d,a.onmouseover=function(){g.style.backgroundPosition=this.XShift+" "+f},a.onmouseout=function(){g.style.backgroundPosition=this.XShift+" "+d},s.isIE&&(a.onmousedown=function(){o.activeElement&&o.activeElement!==b.input||(b.ieCachedRange=document.selection.createRange(),b.ieCachedScrollTop=b.input.scrollTop)}),a.isHelp||(a.onclick=function(){return this.onmouseout&&this.onmouseout(),j(this),!1})):(g.style.backgroundPosition=a.XShift+" "+e,a.onmouseover=a.onmouseout=a.onclick=function(){})}function m(a){return"string"==typeof a&&(a=f[a]),function(){a.apply(f,arguments)}}function n(){var c=b.buttonBar,d=document.createElement("ul");d.id="wmd-button-row"+a,d.className="wmd-button-row",d=c.appendChild(d);var e=0,f=function(b,c,f,g){var h=document.createElement("li");h.className="wmd-button",h.style.left=e+"px",e+=25;var i=document.createElement("span");return h.id=b+a,h.appendChild(i),h.title=c,h.XShift=f,g&&(h.textOp=g),k(h,!0),d.appendChild(h),h},g=function(b){var c=document.createElement("li");c.className="wmd-spacer wmd-spacer"+b,c.id="wmd-spacer"+b+a,d.appendChild(c),e+=25};t.bold=f("wmd-bold-button",i("bold"),"0px",m("doBold")),t.italic=f("wmd-italic-button",i("italic"),"-20px",m("doItalic")),g(1),t.link=f("wmd-link-button",i("link"),"-40px",m(function(a,b){return this.doLinkOrImage(a,b,!1)})),t.quote=f("wmd-quote-button",i("quote"),"-60px",m("doBlockquote")),t.code=f("wmd-code-button",i("code"),"-80px",m("doCode")),t.image=f("wmd-image-button",i("image"),"-100px",m(function(a,b){return this.doLinkOrImage(a,b,!0)})),g(2),t.olist=f("wmd-olist-button",i("olist"),"-120px",m(function(a,b){this.doList(a,b,!0)})),t.ulist=f("wmd-ulist-button",i("ulist"),"-140px",m(function(a,b){this.doList(a,b,!1)})),t.heading=f("wmd-heading-button",i("heading"),"-160px",m("doHeading")),t.hr=f("wmd-hr-button",i("hr"),"-180px",m("doHorizontalRule")),g(3),t.undo=f("wmd-undo-button",i("undo"),"-200px",null),t.undo.execute=function(a){a&&a.undo()};var j=i(/win/.test(q.platform.toLowerCase())?"redo":"redomac");if(t.redo=f("wmd-redo-button",j,"-220px",null),t.redo.execute=function(a){a&&a.redo()},h){var l=document.createElement("li"),n=document.createElement("span");l.appendChild(n),l.className="wmd-button wmd-help-button",l.id="wmd-help-button"+a,l.XShift="-300px",l.isHelp=!0,l.style.right="0px",l.title=i("help"),l.onclick=h.handler,k(l,!0),d.appendChild(l),t.help=l}p()}function p(){c&&(k(t.undo,c.canUndo()),k(t.redo,c.canRedo()))}var r=b.input,t={};n();var u="keydown";s.isOpera&&(u="keypress"),l.addEvent(r,u,function(a){if(!a.ctrlKey&&!a.metaKey||a.altKey||a.shiftKey){if(9==a.keyCode){var b={};b.textOp=m("doTab"),j(b),a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1)}}else{var c=a.charCode||a.keyCode,d=String.fromCharCode(c).toLowerCase();switch(d){case"b":j(t.bold);break;case"i":j(t.italic);break;case"l":j(t.link);break;case"q":j(t.quote);break;case"k":j(t.code);break;case"g":j(t.image);break;case"o":j(t.olist);break;case"u":j(t.ulist);break;case"m":j(t.more);break;case"j":j(t.fullscreen);break;case"e":j(t.exitFullscreen);break;case"h":j(t.heading);break;case"r":j(t.hr);break;case"y":j(t.redo);break;case"z":j(a.shiftKey?t.redo:t.undo);break;default:return}a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1)}}),l.addEvent(r,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey){var b=a.charCode||a.keyCode;if(13===b){var c={};c.textOp=m("doAutoindent"),j(c)}}}),s.isIE&&l.addEvent(r,"keydown",function(a){var b=a.keyCode;return 27===b?!1:void 0}),this.setUndoRedoButtonStates=p}function g(a,b){this.hooks=a,this.getString=b}function h(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,b,c){return b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")}),b=decodeURIComponent(b),b=encodeURI(b).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29"),b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")}),c&&(c=c.trim?c.trim():c.replace(/^\s*/,"").replace(/\s*$/,""),c=c.replace(/"/g,"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),c?b+' "'+c+'"':b})}function i(a,b){this.fullScreenBind=!1,this.hooks=a,this.getString=b,this.isFakeFullScreen=!1}function j(){var a={fullScreenChange:["onfullscreenchange","onwebkitfullscreenchange","onmozfullscreenchange","onmsfullscreenchange"],requestFullscreen:["requestFullscreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullScreen"],cancelFullscreen:["cancelFullscreen","exitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msCancelFullScreen"]},b={};for(var c in a){for(var d=a[c].length,e=!1,f=0;d>f;f++){var g=a[c][f];if("undefined"!=typeof document[g]||"undefined"!=typeof document.body[g]){b[c]=g,e=!0;break}}if(!e)return!1}return b}function k(){return document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||document.msIsFullScreen}var l={},m={},n={},o=window.document,p=window.RegExp,q=window.navigator,r={lineLength:72},s={isIE:/msie/.test(q.userAgent.toLowerCase()),isIE_5or6:/msie 6/.test(q.userAgent.toLowerCase())||/msie 5/.test(q.userAgent.toLowerCase()),isOpera:/opera/.test(q.userAgent.toLowerCase())},t={bold:"Strong <strong> Ctrl+B",boldexample:"strong text",italic:"Emphasis <em> Ctrl+I",italicexample:"emphasized text",link:"Hyperlink <a> Ctrl+L",linkdescription:"enter link description here",linkdialog:'<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',linkname:null,quote:"Blockquote <blockquote> Ctrl+Q",quoteexample:"Blockquote",code:"Code Sample <pre><code> Ctrl+K",codeexample:"enter code here",image:"Image <img> Ctrl+G",imagedescription:"enter image description here",imagedialog:"<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",imagename:null,olist:"Numbered List <ol> Ctrl+O",ulist:"Bulleted List <ul> Ctrl+U",litem:"List item",heading:"Heading <h1>/<h2> Ctrl+H",headingexample:"Heading",more:"More contents <!--more--> Ctrl+M",fullscreen:"FullScreen Ctrl+J",exitFullscreen:"Exit FullScreen Ctrl+E",fullscreenUnsupport:"Sorry, the browser dont support fullscreen api",hr:"Horizontal Rule <hr> Ctrl+R",undo:"Undo - Ctrl+Z",redo:"Redo - Ctrl+Y",redomac:"Redo - Ctrl+Shift+Z",ok:"OK",cancel:"Cancel",help:"Markdown Editing Help"},u="http://",v="http://";Markdown.Editor=function(a,d,h){h=h||{},"function"==typeof h.handler&&(h={helpButton:h}),h.strings=h.strings||{},h.helpButton&&(h.strings.help=h.strings.help||h.helpButton.title);var j=function(a){var b=h.strings[a]||t[a];return("imagename"==a||"linkname"==a)&&(h.strings[a]=null),b};d=d||"";var k=this.hooks=new Markdown.HookCollection;k.addNoop("onPreviewRefresh"),k.addNoop("postBlockquoteCreation"),k.addFalse("insertImageDialog"),k.addFalse("insertLinkDialog"),k.addNoop("enterFullScreen"),k.addNoop("enterFakeFullScreen"),k.addNoop("exitFullScreen"),k.addNoop("postMarkdown"),this.getConverter=function(){return a};var l,m=this;this.run=function(){if(!l){l=new b(d);var n,p,q=new g(k,j),r=new e(a,l,function(a){return k.postMarkdown(a)},function(){k.onPreviewRefresh()});/\?noundo/.test(o.location.href)||(n=new c(function(){r.refresh(),p&&p.setUndoRedoButtonStates()},l),this.textOperation=function(a){n.setCommandMode(),a(),m.refreshPreview()}),fullScreenManager=new i(k,j),p=new f(d,l,n,r,q,fullScreenManager,h.helpButton,j),p.setUndoRedoButtonStates();var s=m.refreshPreview=function(){r.refresh(!0)};s()}}},a.prototype.findTags=function(a,b){var c,d=this;a&&(c=l.extendRegExp(a,"","$"),this.before=this.before.replace(c,function(a){return d.startTag=d.startTag+a,""}),c=l.extendRegExp(a,"^",""),this.selection=this.selection.replace(c,function(a){return d.startTag=d.startTag+a,""})),b&&(c=l.extendRegExp(b,"","$"),this.selection=this.selection.replace(c,function(a){return d.endTag=a+d.endTag,""}),c=l.extendRegExp(b,"^",""),this.after=this.after.replace(c,function(a){return d.endTag=a+d.endTag,""}))},a.prototype.trimWhitespace=function(a){var b,c,d=this;a?b=c="":(b=function(a){return d.before+=a,""},c=function(a){return d.after=a+d.after,""}),this.selection=this.selection.replace(/^(\s*)/,b).replace(/(\s*)$/,c)},a.prototype.skipLines=function(a,b,c){void 0===a&&(a=1),void 0===b&&(b=1),a++,b++;var d,e;if(navigator.userAgent.match(/Chrome/)&&"X".match(/()./),this.selection=this.selection.replace(/(^\n*)/,""),this.startTag=this.startTag+p.$1,this.selection=this.selection.replace(/(\n*$)/,""),this.endTag=this.endTag+p.$1,this.startTag=this.startTag.replace(/(^\n*)/,""),this.before=this.before+p.$1,this.endTag=this.endTag.replace(/(\n*$)/,""),this.after=this.after+p.$1,this.before){for(d=e="";a--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.before=this.before.replace(new p(d+"$",""),e)}if(this.after){for(d=e="";b--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.after=this.after.replace(new p(d,""),e)}},l.isVisible=function(a){return window.getComputedStyle?"none"!==window.getComputedStyle(a,null).getPropertyValue("display"):a.currentStyle?"none"!==a.currentStyle.display:void 0},l.addEvent=function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},l.removeEvent=function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},l.fixEolChars=function(a){return a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n")},l.extendRegExp=function(a,b,c){(null===b||void 0===b)&&(b=""),(null===c||void 0===c)&&(c="");var d,e=a.toString();return e=e.replace(/\/([gim]*)$/,function(a,b){return d=b,""}),e=e.replace(/(^\/|\/$)/g,""),e=b+e+c,new p(e,d)},m.getTop=function(a,b){var c=a.offsetTop;if(!b)for(;a=a.offsetParent;)c+=a.offsetTop;return c},m.getHeight=function(a){return a.offsetHeight||a.scrollHeight},m.getWidth=function(a){return a.offsetWidth||a.scrollWidth},m.getPageSize=function(){var a,b,c,d;self.innerHeight&&self.scrollMaxY?(a=o.body.scrollWidth,b=self.innerHeight+self.scrollMaxY):o.body.scrollHeight>o.body.offsetHeight?(a=o.body.scrollWidth,b=o.body.scrollHeight):(a=o.body.offsetWidth,b=o.body.offsetHeight),self.innerHeight?(c=self.innerWidth,d=self.innerHeight):o.documentElement&&o.documentElement.clientHeight?(c=o.documentElement.clientWidth,d=o.documentElement.clientHeight):o.body&&(c=o.body.clientWidth,d=o.body.clientHeight);var e=Math.max(a,c),f=Math.max(b,d);return[e,f,c,d]},n.createBackground=function(){var a=o.createElement("div"),b=a.style;a.className="wmd-prompt-background",b.position="absolute",b.top="0",b.zIndex="1000",s.isIE?b.filter="alpha(opacity=50)":b.opacity="0.5";var c=m.getPageSize();return b.height=c[1]+"px",s.isIE?(b.left=o.documentElement.scrollLeft,b.width=o.documentElement.clientWidth):(b.left="0",b.width="100%"),o.body.appendChild(a),a},n.prompt=function(a,b,c,d,e){var f,g;void 0===b&&(b="");var h=function(a){var b=a.charCode||a.keyCode;27===b&&i(!0)},i=function(a){l.removeEvent(o.body,"keydown",h);var b=g.value;return a?b=null:(b=b.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(b)||(b="http://"+b)),f.parentNode.removeChild(f),c(b),!1},j=function(){f=o.createElement("div"),f.className="wmd-prompt-dialog";var c=o.createElement("div");c.innerHTML=a,f.appendChild(c);var j=o.createElement("form");j.style,j.onsubmit=function(){return i(!1)},f.appendChild(j),g=o.createElement("input"),g.type="text",g.value=b,j.appendChild(g);var k=o.createElement("button");k.type="button",k.className="btn-s primary",k.onclick=function(){return i(!1)},k.innerHTML=d;var m=o.createElement("button");m.type="button",m.className="btn-s",m.onclick=function(){return i(!0)},m.innerHTML=e,j.appendChild(k),j.appendChild(m),l.addEvent(o.body,"keydown",h),o.body.appendChild(f)};setTimeout(function(){j();var a=b.length;if(void 0!==g.selectionStart)g.selectionStart=0,g.selectionEnd=a;else if(g.createTextRange){var c=g.createTextRange();c.collapse(!1),c.moveStart("character",-a),c.moveEnd("character",a),c.select()}g.focus()},0)};var w=g.prototype;w.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",w.unwrap=function(a){var b=new p("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(b,"$1 $2")},w.wrap=function(a,b){this.unwrap(a);var c=new p("(.{1,"+b+"})( +|$\\n?)","gm"),d=this;a.selection=a.selection.replace(c,function(a,b){return new p("^"+d.prefixes,"").test(a)?a:b+"\n"}),a.selection=a.selection.replace(/\s+$/,"")},w.doBold=function(a,b){return this.doBorI(a,b,2,this.getString("boldexample"))},w.doItalic=function(a,b){return this.doBorI(a,b,1,this.getString("italicexample"))},w.doBorI=function(a,b,c,d){a.trimWhitespace(),a.selection=a.selection.replace(/\n{2,}/g,"\n");var e=/(\**$)/.exec(a.before)[0],f=/(^\**)/.exec(a.after)[0],g=Math.min(e.length,f.length);if(g>=c&&(2!=g||1!=c))a.before=a.before.replace(p("[*]{"+c+"}$",""),""),a.after=a.after.replace(p("^[*]{"+c+"}",""),"");else if(!a.selection&&f){a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,"");var h=p.$1;a.before=a.before+f+h}else{a.selection||f||(a.selection=d);var i=1>=c?"*":"**";a.before=a.before+i,a.after=i+a.after}},w.stripLinkDefs=function(a,b){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(a,c,d,e,f){return b[c]=a.replace(/\s*$/,""),e?(b[c]=a.replace(/["(](.+?)[")]$/,""),e+f):""})},w.addLinkDef=function(a,b){var c=0,d={};a.before=this.stripLinkDefs(a.before,d),a.selection=this.stripLinkDefs(a.selection,d),a.after=this.stripLinkDefs(a.after,d);var e="",f=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,g=function(a){c++,a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+c+"]:"),e+="\n"+a},h=function(a,b,e,i,j,k){return e=e.replace(f,h),d[j]?(g(d[j]),b+e+i+c+k):a};a.before=a.before.replace(f,h),b?g(b):a.selection=a.selection.replace(f,h);var i=c;return a.after=a.after.replace(f,h),a.after&&(a.after=a.after.replace(/\n*$/,"")),a.after||(a.selection=a.selection.replace(/\n*$/,"")),a.after+="\n\n"+e,i},w.doLinkOrImage=function(a,b,c){a.trimWhitespace(),a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var d;if(!(a.endTag.length>1&&a.startTag.length>0)){if(a.selection=a.startTag+a.selection+a.endTag,a.startTag=a.endTag="",/\n\n/.test(a.selection))return void this.addLinkDef(a,null);var e=this,f=function(f){if(d.parentNode.removeChild(d),null!==f){a.selection=(" "+a.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1);var g=" [999]: "+h(f),i=e.addLinkDef(a,g);if(a.startTag=c?"![":"[",a.endTag="]["+i+"]",!a.selection)if(c){var j=e.getString("imagename");j&&(j=j.replace(/_/g,"\\_")),a.selection=j||e.getString("imagedescription")}else{var k=e.getString("linkname");k&&(k=k.replace(/_/g,"\\_")),a.selection=k||e.getString("linkdescription")}}b()};return d=n.createBackground(),c?this.hooks.insertImageDialog(f)||n.prompt(this.getString("imagedialog"),u,f,this.getString("ok"),this.getString("cancel")):this.hooks.insertLinkDialog(f)||n.prompt(this.getString("linkdialog"),v,f,this.getString("ok"),this.getString("cancel")),!0}a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",this.addLinkDef(a,null)},w.doAutoindent=function(a){var b=this,c=!1;a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n"),a.selection||/^[ \t]*(?:\n|$)/.test(a.after)||(a.after=a.after.replace(/^[^\n]*/,function(b){return a.selection=b,""}),c=!0),/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&b.doList&&b.doList(a),/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&b.doBlockquote&&b.doBlockquote(a),/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&b.doCode&&b.doCode(a),c&&(a.after=a.selection+a.after,a.selection="")},w.doBlockquote=function(a){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){return a.before+=c,a.after=e+a.after,d}),a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){return a.selection=c+a.selection,""}),a.selection=a.selection.replace(/^(\s|>)+$/,""),a.selection=a.selection||this.getString("quoteexample");var b,c="",d="";if(a.before){for(var e=a.before.replace(/\n$/,"").split("\n"),f=!1,g=0;g<e.length;g++){var h=!1;b=e[g],f=f&&b.length>0,/^>/.test(b)?(h=!0,!f&&b.length>1&&(f=!0)):h=/^[ \t]*$/.test(b)?!0:f,h?c+=b+"\n":(d+=c+b,c="\n")}/(^|\n)>/.test(c)||(d+=c,c="")}a.startTag=c,a.before=d,a.after&&(a.after=a.after.replace(/^\n?/,"\n")),a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){return a.endTag=b,""
});var i=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"})),a.endTag&&(a.endTag=a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(this.wrap(a,r.lineLength-2),a.selection=a.selection.replace(/^/gm,"> "),i(!0),a.skipLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(a),i(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n"))),a.selection=this.hooks.postBlockquoteCreation(a.selection),/\n/.test(a.selection)||(a.selection=a.selection.replace(/^(> *)/,function(b,c){return a.startTag+=c,""}))},w.doCode=function(a){var b=/\S[ ]*$/.test(a.before),c=/^[ ]*\S/.test(a.after);if(!c&&!b||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){return a.selection=b+a.selection,""});var d=1,e=1;/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&(d=0),/^\n(\t|[ ]{4,})/.test(a.after)&&(e=0),a.skipLines(d,e),a.selection?/^[ ]{0,3}\S/m.test(a.selection)?/\n/.test(a.selection)?a.selection=a.selection.replace(/^/gm,"    "):a.before+="    ":a.selection=a.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm,""):(a.startTag="    ",a.selection=this.getString("codeexample"))}else a.trimWhitespace(),a.findTags(/`/,/`/),a.startTag||a.endTag?a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag="":(a.startTag=a.endTag="`",a.selection||(a.selection=this.getString("codeexample")))},w.doList=function(a,b,c){var d=/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,e=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,f="-",g=1,h=function(){var a;return c?(a=" "+g+". ",g++):a=" "+f+" ",a},i=function(a){return void 0===c&&(c=/^\s*\d/.test(a)),a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(){return h()})};if(a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null),!a.before||/\n$/.test(a.before)||/^\n/.test(a.startTag)||(a.before+=a.startTag,a.startTag=""),a.startTag){var j=/\d+[.]/.test(a.startTag);if(a.startTag="",a.selection=a.selection.replace(/\n[ ]{4}/g,"\n"),this.unwrap(a),a.skipLines(),j&&(a.after=a.after.replace(e,i)),c==j)return}var k=1;a.before=a.before.replace(d,function(a){return/^\s*([*+-])/.test(a)&&(f=p.$1),k=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.selection||(a.selection=this.getString("litem"));var l=h(),m=1;a.after=a.after.replace(e,function(a){return m=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.trimWhitespace(!0),a.skipLines(k,m,!0),a.startTag=l;var n=l.replace(/./g," ");this.wrap(a,r.lineLength-n.length),a.selection=a.selection.replace(/\n/g,"\n"+n)},w.doHeading=function(a){if(a.selection=a.selection.replace(/\s+/g," "),a.selection=a.selection.replace(/(^\s+|\s+$)/g,""),!a.selection)return a.startTag="## ",a.selection=this.getString("headingexample"),void(a.endTag=" ##");var b=0;a.findTags(/#+[ ]*/,/[ ]*#+/),/#+/.test(a.startTag)&&(b=p.lastMatch.length),a.startTag=a.endTag="",a.findTags(null,/\s?(-+|=+)/),/=+/.test(a.endTag)&&(b=1),/-+/.test(a.endTag)&&(b=2),a.startTag=a.endTag="",a.skipLines(1,1);var c=0==b?2:b-1;if(c>0){var d=c>=2?"-":"=",e=a.selection.length;for(e>r.lineLength&&(e=r.lineLength),a.endTag="\n";e--;)a.endTag+=d}},w.doHorizontalRule=function(a){a.startTag="----------\n",a.selection="",a.skipLines(2,1,!0)},w.doMore=function(a){a.startTag="<!--more-->\n\n",a.selection="",a.skipLines(2,0,!0)},w.doTab=function(a){a.startTag="    ",a.selection=""},i.prototype.doFullScreen=function(a,b){var c=j(),d=this;return c?(this.fullScreenBind||(l.addEvent(document,c.fullScreenChange.substring(2),function(){k()?(a.fullscreen.style.display="none",a.exitFullscreen.style.display="",d.hooks.enterFullScreen()):(a.fullscreen.style.display="",a.exitFullscreen.style.display="none",d.hooks.exitFullScreen())}),this.fullScreenBind=!0),void(b?d.isFakeFullScreen?(document.body[c.requestFullscreen]("webkitRequestFullScreen"==c.requestFullscreen?Element.ALLOW_KEYBOARD_INPUT:null),d.isFakeFullScreen=!1):k()||(a.exitFullscreen.style.display="",d.hooks.enterFakeFullScreen(),d.isFakeFullScreen=!0):(d.isFakeFullScreen?(a.exitFullscreen.style.display="none",d.hooks.exitFullScreen()):k()&&document[c.cancelFullscreen](),d.isFakeFullScreen=!1))):(alert(d.getString("fullscreenUnsupport")),!1)}}();