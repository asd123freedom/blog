var Editor=function(){function a(a){return"string"==typeof a&&(a=document.getElementById(a)),a||alertify.error("需要被构建编辑器的节点不存在"),a}function b(){return(Math.random()*(new Date).getTime()).toString(36).toUpperCase().replace(/\./g,"-")}function c(a){return a.replace(/(^\s*)|(\s*$)/g,"")}function d(b){return!this instanceof d?new d(b):(this.dom=a(b),this._init(),void this._bindCommands())}var e=new Markdown.Converter,f=ace.require("ace/mode/markdown").Mode,g="ace/theme/dawn",h=window.localStorage;return Markdown.Extra.init(e),h.getItem("artList")||h.setItem("artList",JSON.stringify([])),d.prototype._init=function(){{var a=this,b=a.editor=ace.edit(a.dom),c=a.session=b.getSession();a.scroll=a.dom.querySelector(".ace_scrollbar-v .ace_scrollbar-inner")}b.setTheme(g),b.setShowPrintMargin(!1),b.setBehavioursEnabled(!1),b.setFontSize("16px"),c.setMode(new f),c.setUseWrapMode(!0),c.setWrapLimitRange()},d.prototype._bindCommands=function(){var a=this;a.editor.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:function(){a.save()},readOnly:!0})},d.prototype.bindShower=function(b){var c=this,d=a(b);c.session.on("change",function(){var a,b;for(d.innerHTML=e.makeHtml(c.session.getValue()),a=d.getElementsByTagName("code"),b=a.length;b--;)hljs.highlightBlock(a[b])}),c.session.on("changeScrollTop",function(a){d.scrollTop=a/parseInt(c.scroll.style.height.replace("px",""))*d.scrollHeight})},d.prototype.getCurTitle=function(){var a,b,d=this,e="",f=d.session;for(a=0,b=f.getLength();b>a&&!(e=c(f.getLine(a)));a++);return e},d.prototype.download=function(){var a=this,b=a.session.getValue(),c=a.getCurTitle(),d=document.createElement("a"),e=new Blob([b]),f=document.createEvent("HTMLEvents");return c?(f.initEvent("click",!1,!1),d.download=c+".md",d.href=URL.createObjectURL(e),void d.dispatchEvent(f)):void alertify.error("无法下载，请先写点什么")},d.prototype.save=function(){var a=this,c=a.dom.getAttribute("aid"),d=a.session.getValue(),e=JSON.parse(h.getItem("artList")),f=a.getCurTitle();return f?(c?e.splice(e.indexOf(c),1):(c=b(),a.dom.setAttribute("aid",c)),e.push(c),h.setItem("artList",JSON.stringify(e)),h.setItem(c,JSON.stringify({title:f,content:d,date:(new Date).getTime()})),void alertify.success("已成功保存到本地")):void alertify.error("无法保存空文章")},d.prototype.loadNewest=function(){var a=JSON.parse(h.getItem("artList"));a.length>0&&this.load(a[a.length-1])},d.prototype.load=function(a){var b=this,c=JSON.parse(h.getItem(a));c.content&&(b.session.setValue(c.content),b.dom.setAttribute("aid",a),alertify.success("成功加载文章："+c.title))},d.prototype.listAll=function(){var a,b,c,d=JSON.parse(h.getItem("artList")),e=[];for(a=0,b=d.length;b>a;a++)c=JSON.parse(h.getItem(d[a])),c&&c.title&&e.push({id:d[a],title:c.title,time:new Date(c.date)});return e},d.prototype.new=function(){var a=this;a.dom.removeAttribute("aid"),a.editor.setValue("")},d}(),editor=new Editor(document.getElementById("editor")),saveBtn=document.getElementById("save"),newBtn=document.getElementById("new"),newestBtn=document.getElementById("newest"),historyBtn=document.getElementById("history"),downloadBtn=document.getElementById("download"),historyDlg=document.getElementById("historyDlg"),closeHisDlgBtn=document.getElementById("closeHisBtn"),artHistoryOl=document.getElementById("artHistory");editor.bindShower(document.getElementById("shower")),editor.loadNewest(),downloadBtn.addEventListener("click",function(){editor.download()},!1),saveBtn.addEventListener("click",function(a){editor.save(),a.stopPropagation()},!1),newBtn.addEventListener("click",function(a){editor.new(),a.stopPropagation()},!1),newestBtn.addEventListener("click",function(a){editor.loadNewest(),a.stopPropagation()},!1),artHistoryOl.addEventListener("click",function(a){var b,c=a.target;"li"===c.tagName.toLowerCase()&&(b=c.getAttribute("aid"),b&&(editor.load(b),closeHisDlgBtn.click())),a.stopPropagation()},!1),historyBtn.addEventListener("click",function(a){var b,c,d=editor.listAll(),e="";for(b=0,c=d.length;c>b;b++)e+="<li aid='"+d[b].id+"'>"+d[b].title+"</li>";artHistoryOl.innerHTML=e,historyDlg.className=historyDlg.className.replace(" historyOut",""),-1===historyDlg.className.indexOf("historyIn")&&(historyDlg.className=historyDlg.className+" historyIn"),a.stopPropagation()},!1),closeHisDlgBtn.addEventListener("click",function(){historyDlg.className=historyDlg.className.replace(" historyIn",""),-1===historyDlg.className.indexOf("historyOut")&&(historyDlg.className=historyDlg.className+" historyOut")},!1);