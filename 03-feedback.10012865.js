function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,p=function(){return l.Date.now()};function g(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(x,t),l?b(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function x(){var e=p();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-u);return s?m(n,i-(e-c)):n}(e))}function O(e){return f=void 0,g&&r?b(e):(r=o=void 0,a)}function h(){var e=p(),n=j(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(x,t),b(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=y(t)||0,v(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:O(p())},h}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(e,t,{leading:r,maxWait:t,trailing:o})};const b={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea"),input:document.querySelector("input")};b.form.addEventListener("input",e(t)((function(e){if(S)onForm={...S},onForm[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(onForm));else{const t={};t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))}}),500));let S=JSON.parse(localStorage.getItem("feedback-form-state"));S&&(b.input.value=S.email||"",b.textarea.value=S.message||"");
//# sourceMappingURL=03-feedback.10012865.js.map
