// build time:Sat Aug 17 2019 14:56:12 GMT+0800 (GMT+08:00)
window.onload=function(){var e=document.body,t=document.getElementById("mnav"),n=document.getElementById("main-menu"),o=document.getElementById("process"),i=document.querySelectorAll(".img-ajax"),r=document.getElementById("comments-count"),c=document.getElementById("gitcomment"),a=document.getElementById("back-to-top"),l=document.getElementById("article-toc"),s=null;var u=true;(function(e){function t(e,t){var n=new RegExp("(?:&|/?)"+t+"=([^&$]+)").exec(e);return n?n[1]:""}if(/iphone|ios|android|ipod/i.test(navigator.userAgent.toLowerCase())==true&&t(location.search,"from")!="mobile"){u=false}})();t.onclick=function(){var e=n.getAttribute("class");if(e.indexOf("in")!="-1"){n.setAttribute("class","collapse navbar-collapse")}else{n.setAttribute("class","collapse navbar-collapse in")}};function d(e){if(!e)return;var t=e.length;if(t>0){var n=m()+window.innerHeight;for(var o=0;o<t;o++){(function(t){var o=e[t];var i=o.getBoundingClientRect().top+window.pageYOffset-document.documentElement.clientTop;if(n>=i&&o.getAttribute("data-src")&&o.getAttribute("data-src").length>0){if(o.nodeName.toLowerCase()==="img"){o.src=o.getAttribute("data-src");o.style.display="block"}else{var r=new Image;r.onload=function(){o.innerHTML=""};r.src=o.getAttribute("data-src");o.style.backgroundImage="url("+o.getAttribute("data-src")+")"}o.removeAttribute("data-src")}})(o)}}}function m(){return e.scrollTop||document.documentElement.scrollTop}var f=function(){if(o){o.style.width=m()/(e.scrollHeight-window.innerHeight)*100+"%"}u&&m()>=300?a.removeAttribute("class","hide"):a.setAttribute("class","hide");d(i)};f();window.addEventListener("scroll",function(){if(l){var e=l.offsetTop;var t=l.offsetLeft;var n=l.offsetWidth;if(m()<=e){l.style=""}else{l.style.position="fixed";l.style.top="5px";l.style.left=t+"px";l.style.width=n+"px"}}clearTimeout(s);s=setTimeout(function o(){f()},200)});a.onclick=function(){cancelAnimationFrame(s);s=requestAnimationFrame(function t(){var n=m();if(n>0){e.scrollTop=document.documentElement.scrollTop=n-50;s=requestAnimationFrame(t)}else{cancelAnimationFrame(s)}})}};
//rebuild by neat 