parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
var e=document.querySelector(".hamburger"),t=document.querySelector(".main-menu"),c=document.querySelector(".scrollable"),r=document.querySelector(".hamburger-open"),o=document.querySelector(".hamburger-close");function l(){c.classList.toggle("disable-scroll"),t.classList.toggle("main-menu--active"),r.classList.toggle("hamburger-open--active"),o.classList.toggle("hamburger-close--active")}e.addEventListener("click",l);var u=document.querySelector("#filter-header-categories"),s=document.querySelector("#filter-header-products");function a(){document.querySelector(".product-categories").classList.toggle("product-categories--active")}function i(){document.querySelector(".filter-products-box").classList.toggle("filter-products-box--active")}u.addEventListener("click",a),s.addEventListener("click",i);
},{}]},{},["d6sW"], null)
//# sourceMappingURL=/main.a28ae5d9.js.map