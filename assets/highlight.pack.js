// build time:Sun Aug 18 2019 18:27:46 GMT+0800 (GMT+08:00)
!function(e){var r="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):r&&(r.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return r.hljs}));var t=document.createElement("script");t.src="https://hm.baidu.com/hm.js?02fe9b53d02bb9959bce9a0e2530899d";t.async="1";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}(function(e){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function n(e,r){var t=e&&e.exec(r);return t&&0===t.index}function c(e){return C.test(e)}function a(e){var r,t,n,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=x.exec(i))return E(t[1])?t[1]:"no-highlight";for(i=i.split(/\s+/),r=0,n=i.length;n>r;r++)if(a=i[r],c(a)||E(a))return a}function i(e){var r,t={},n=Array.prototype.slice.call(arguments,1);for(r in e)t[r]=e[r];return n.forEach(function(e){for(r in e)t[r]=e[r]}),t}function s(e){var r=[];return function n(e,c){for(var a=e.firstChild;a;a=a.nextSibling)3===a.nodeType?c+=a.nodeValue.length:1===a.nodeType&&(r.push({event:"start",offset:c,node:a}),c=n(a,c),t(a).match(/br|hr|img|input/)||r.push({event:"stop",offset:c,node:a}));return c}(e,0),r}function o(e,n,c){function a(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function i(e){function n(e){return" "+e.nodeName+'="'+r(e.value).replace('"',"&quot;")+'"'}u+="<"+t(e)+M.map.call(e.attributes,n).join("")+">"}function s(e){u+="</"+t(e)+">"}function o(e){("start"===e.event?i:s)(e.node)}for(var l=0,u="",b=[];e.length||n.length;){var f=a();if(u+=r(c.substring(l,f[0].offset)),l=f[0].offset,f===e){b.reverse().forEach(s);do o(f.splice(0,1)[0]),f=a();while(f===e&&f.length&&f[0].offset===l);b.reverse().forEach(i)}else"start"===f[0].event?b.push(f[0].node):b.pop(),o(f.splice(0,1)[0])}return u+r(c.substr(l))}function l(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(r){return i(e,{v:null},r)})),e.cached_variants||e.eW&&[i(e)]||[e]}function u(e){function r(e){return e&&e.source||e}function t(t,n){return new RegExp(r(t),"m"+(e.cI?"i":"")+(n?"g":""))}function n(c,a){if(!c.compiled){if(c.compiled=!0,c.k=c.k||c.bK,c.k){var i={},s=function(r,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");i[t[0]]=[r,t[1]?Number(t[1]):1]})};"string"==typeof c.k?s("keyword",c.k):_(c.k).forEach(function(e){s(e,c.k[e])}),c.k=i}c.lR=t(c.l||/\w+/,!0),a&&(c.bK&&(c.b="\\b("+c.bK.split(" ").join("|")+")\\b"),c.b||(c.b=/\B|\b/),c.bR=t(c.b),c.e||c.eW||(c.e=/\B|\b/),c.e&&(c.eR=t(c.e)),c.tE=r(c.e)||"",c.eW&&a.tE&&(c.tE+=(c.e?"|":"")+a.tE)),c.i&&(c.iR=t(c.i)),null==c.r&&(c.r=1),c.c||(c.c=[]),c.c=Array.prototype.concat.apply([],c.c.map(function(e){return l("self"===e?c:e)})),c.c.forEach(function(e){n(e,c)}),c.starts&&n(c.starts,a);var o=c.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([c.tE,c.i]).map(r).filter(Boolean);c.t=o.length?t(o.join("|"),!0):{exec:function(){return null}}}}n(e)}function b(e,t,c,a){function i(e,r){var t,c;for(t=0,c=r.c.length;c>t;t++)if(n(r.c[t].bR,e))return r.c[t]}function s(e,r){if(n(e.eR,r)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?s(e.parent,r):void 0}function o(e,r){return!c&&n(r.iR,e)}function l(e,r){var t=v.cI?r[0].toLowerCase():r[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,r,t,n){var c=n?"":A.classPrefix,a='<span class="'+c,i=t?"":R;return a+=e+'">',a+r+i}function d(){var e,t,n,c;if(!M.k)return r(C);for(c="",t=0,M.lR.lastIndex=0,n=M.lR.exec(C);n;)c+=r(C.substring(t,n.index)),e=l(M,n),e?(x+=e[1],c+=p(e[0],r(n[0]))):c+=r(n[0]),t=M.lR.lastIndex,n=M.lR.exec(C);return c+r(C.substr(t))}function g(){var e="string"==typeof M.sL;if(e&&!y[M.sL])return r(C);var t=e?b(M.sL,C,!0,_[M.sL]):f(C,M.sL.length?M.sL:void 0);return M.r>0&&(x+=t.r),e&&(_[M.sL]=t.top),p(t.language,t.value,!1,!0)}function h(){B+=null!=M.sL?g():d(),C=""}function m(e){B+=e.cN?p(e.cN,"",!0):"",M=Object.create(e,{parent:{value:M}})}function N(e,r){if(C+=e,null==r)return h(),0;var t=i(r,M);if(t)return t.skip?C+=r:(t.eB&&(C+=r),h(),t.rB||t.eB||(C=r)),m(t,r),t.rB?0:r.length;var n=s(M,r);if(n){var c=M;c.skip?C+=r:(c.rE||c.eE||(C+=r),h(),c.eE&&(C=r));do M.cN&&(B+=R),M.skip||(x+=M.r),M=M.parent;while(M!==n.parent);return n.starts&&m(n.starts,""),c.rE?0:r.length}if(o(r,M))throw new Error('Illegal lexeme "'+r+'" for mode "'+(M.cN||"<unnamed>")+'"');return C+=r,r.length||1}var v=E(e);if(!v)throw new Error('Unknown language: "'+e+'"');u(v);var w,M=a||v,_={},B="";for(w=M;w!==v;w=w.parent)w.cN&&(B=p(w.cN,"",!0)+B);var C="",x=0;try{for(var k,L,S=0;;){if(M.t.lastIndex=S,k=M.t.exec(t),!k)break;L=N(t.substring(S,k.index),k[0]),S=k.index+L}for(N(t.substr(S)),w=M;w.parent;w=w.parent)w.cN&&(B+=R);return{r:x,value:B,language:e,top:M}}catch(I){if(I.message&&-1!==I.message.indexOf("Illegal"))return{r:0,value:r(t)};throw I}}function f(e,t){t=t||A.languages||_(y);var n={r:0,value:r(e)},c=n;return t.filter(E).forEach(function(r){var t=b(r,e,!1);t.language=r,t.r>c.r&&(c=t),t.r>n.r&&(c=n,n=t)}),c.language&&(n.second_best=c),n}function p(e){return A.tabReplace||A.useBR?e.replace(k,function(e,r){return A.useBR&&"\n"===e?"<br>":A.tabReplace?r.replace(/\t/g,A.tabReplace):""}):e}function d(e,r,t){var n=r?B[r]:t,c=[e.trim()];return e.match(/\bhljs\b/)||c.push("hljs"),-1===e.indexOf(n)&&c.push(n),c.join(" ").trim()}function g(e){var r,t,n,i,l,u=a(e);c(u)||(A.useBR?(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):r=e,l=r.textContent,n=u?b(u,l,!0):f(l),t=s(r),t.length&&(i=document.createElementNS("http://www.w3.org/1999/xhtml","div"),i.innerHTML=n.value,n.value=o(t,s(i),l)),n.value=p(n.value),e.innerHTML=n.value,e.className=d(e.className,u,n.language),e.result={language:n.language,re:n.r},n.second_best&&(e.second_best={language:n.second_best.language,re:n.second_best.r}))}function h(e){A=i(A,e)}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");M.forEach.call(e,g)}}function N(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)}function v(r,t){var n=y[r]=t(e);n.aliases&&n.aliases.forEach(function(e){B[e]=r})}function w(){return _(y)}function E(e){return e=(e||"").toLowerCase(),y[e]||y[B[e]]}var M=[],_=Object.keys,y={},B={},C=/^(no-?highlight|plain|text)$/i,x=/\blang(?:uage)?-([\w-]+)\b/i,k=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,R="</span>",A={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=b,e.highlightAuto=f,e.fixMarkup=p,e.highlightBlock=g,e.configure=h,e.initHighlighting=m,e.initHighlightingOnLoad=N,e.registerLanguage=v,e.listLanguages=w,e.getLanguage=E,e.inherit=i,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(r,t,n){var c=e.inherit({cN:"comment",b:r,e:t,c:[]},n||{});return c.c.push(e.PWM),c.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),c},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("xml",function(e){var r="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:r,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},e.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0}]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"meta",v:[{b:/<\?xml/,e:/\?>/,r:10},{b:/<\?\w+/,e:/\?>/}]},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("markdown",function(e){return{aliases:["md","mkdown","mkd"],c:[{cN:"section",v:[{b:"^#{1,6}",e:"$"},{b:"^.+?\\n[=-]{2,}$"}]},{b:"<",e:">",sL:"xml",r:0},{cN:"bullet",b:"^([*+-]|(\\d+\\.))\\s+"},{cN:"strong",b:"[*_]{2}.+?[*_]{2}"},{cN:"emphasis",v:[{b:"\\*.+?\\*"},{b:"_.+?_",r:0}]},{cN:"quote",b:"^>\\s+",e:"$"},{cN:"code",v:[{b:"^```w*s*$",e:"^```s*$"},{b:"`.+?`"},{b:"^( {4}|\t)",e:"$",r:0}]},{b:"^[-\\*]{3,}",e:"$"},{b:"\\[.+?\\][\\(\\[].*?[\\)\\]]",rB:!0,c:[{cN:"string",b:"\\[",e:"\\]",eB:!0,rE:!0,r:0},{cN:"link",b:"\\]\\(",e:"\\)",eB:!0,eE:!0},{cN:"symbol",b:"\\]\\[",e:"\\]",eB:!0,eE:!0}],r:10},{b:/^\[[^\n]+\]:/,rB:!0,c:[{cN:"symbol",b:/\[/,e:/\]/,eB:!0,eE:!0},{cN:"link",b:/:\s*/,e:/$/,eB:!0}]}]}});hljs.registerLanguage("coffeescript",function(e){var r={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",literal:"true false null undefined yes no on off",built_in:"npm require console print module global window document"},t="[A-Za-z$_][0-9A-Za-z$_]*",n={cN:"subst",b:/#\{/,e:/}/,k:r},c=[e.BNM,e.inherit(e.CNM,{starts:{e:"(\\s*/)?",r:0}}),{cN:"string",v:[{b:/'''/,e:/'''/,c:[e.BE]},{b:/'/,e:/'/,c:[e.BE]},{b:/"""/,e:/"""/,c:[e.BE,n]},{b:/"/,e:/"/,c:[e.BE,n]}]},{cN:"regexp",v:[{b:"///",e:"///",c:[n,e.HCM]},{b:"//[gim]*",r:0},{b:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{b:"@"+t},{sL:"javascript",eB:!0,eE:!0,v:[{b:"```",e:"```"},{b:"`",e:"`"}]}];n.c=c;var a=e.inherit(e.TM,{b:t}),i="(\\(.*\\))?\\s*\\B[-=]>",s={cN:"params",b:"\\([^\\(]",rB:!0,c:[{b:/\(/,e:/\)/,k:r,c:["self"].concat(c)}]};return{aliases:["coffee","cson","iced"],k:r,i:/\/\*/,c:c.concat([e.C("###","###"),e.HCM,{cN:"function",b:"^\\s*"+t+"\\s*=\\s*"+i,e:"[-=]>",rB:!0,c:[a,s]},{b:/[:\(,=]\s*/,r:0,c:[{cN:"function",b:i,e:"[-=]>",rB:!0,c:[s]}]},{cN:"class",bK:"class",e:"$",i:/[:="\[\]]/,c:[{bK:"extends",eW:!0,i:/[:="\[\]]/,c:[a]},a]},{b:t+":",e:":",rB:!0,rE:!0,r:0}])}});hljs.registerLanguage("css",function(e){var r="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:r,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("json",function(e){var r={literal:"true false null"},t=[e.QSM,e.CNM],n={e:",",eW:!0,eE:!0,c:t,k:r},c={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(n,{b:/:/})],i:"\\S"},a={b:"\\[",e:"\\]",c:[e.inherit(n)],i:"\\S"};return t.splice(t.length,0,c,a),{c:t,k:r,i:"\\S"}});hljs.registerLanguage("php",function(e){var r={b:"\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"},t={cN:"meta",b:/<\?(php)?|\?>/},n={cN:"string",c:[e.BE,t],v:[{b:'b"',e:'"'},{b:"b'",e:"'"},e.inherit(e.ASM,{i:null}),e.inherit(e.QSM,{i:null})]},c={v:[e.BNM,e.CNM]};return{aliases:["php3","php4","php5","php6"],cI:!0,k:"and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",c:[e.HCM,e.C("//","$",{c:[t]}),e.C("/\\*","\\*/",{c:[{cN:"doctag",b:"@[A-Za-z]+"}]}),e.C("__halt_compiler.+?;",!1,{eW:!0,k:"__halt_compiler",l:e.UIR}),{cN:"string",b:/<<<['"]?\w+['"]?$/,e:/^\w+;?$/,c:[e.BE,{cN:"subst",v:[{b:/\$\w+/},{b:/\{\$/,e:/\}/}]}]},t,{cN:"keyword",b:/\$this\b/},r,{b:/(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/},{cN:"function",bK:"function",e:/[;{]/,eE:!0,i:"\\$|\\[|%",c:[e.UTM,{cN:"params",b:"\\(",e:"\\)",c:["self",r,e.CBCM,n,c]}]},{cN:"class",bK:"class interface",e:"{",eE:!0,i:/[:\(\$"]/,c:[{bK:"extends implements"},e.UTM]},{bK:"namespace",e:";",i:/[\.']/,c:[e.UTM]},{bK:"use",e:";",c:[e.UTM]},{b:"=>"},n,c]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},n={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},c={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},a={cN:"string",b:"`",e:"`",c:[e.BE,c]};c.c=[e.ASM,e.QSM,a,n,e.RM];var i=c.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,a,e.CLCM,e.CBCM,n,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:i}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:i}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});
//rebuild by neat 