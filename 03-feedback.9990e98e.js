!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var n=a("1WSnx"),l=document.querySelector("form"),i=document.querySelector("input"),s=document.querySelector("textarea"),u=localStorage.getItem("feedback-form-state");if(u){var f=JSON.parse(u),d=f.email,c=f.message;i.value=d,s.value=c}else console.log("empty storage");l.addEventListener("input",e(n).throttle((function(){var e=new FormData(l),t={email:e.get("email"),message:e.get("message")};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),l.addEventListener("submit",(function(e){e.preventDefault(),l.reset(),console.log(localStorage.getItem("feedback-form-state")),localStorage.clear()}))}();
//# sourceMappingURL=03-feedback.9990e98e.js.map
