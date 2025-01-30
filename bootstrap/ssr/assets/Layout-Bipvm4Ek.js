import { c as commonjsGlobal, g as getDefaultExportFromCjs, r as reactExports, j as jsxRuntimeExports, $ as $e, K } from "../ssr.js";
import { A as Avatar } from "./Avatar-wh5kThZW.js";
import { k as kt } from "./index-BgmffWW1.js";
var aos = { exports: {} };
(function(module, exports) {
  !function(e, t) {
    module.exports = t();
  }(commonjsGlobal, function() {
    return function(e) {
      function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = { exports: {}, id: o, loaded: false };
        return e[o].call(i.exports, i, i.exports, t), i.loaded = true, i.exports;
      }
      var n = {};
      return t.m = e, t.c = n, t.p = "dist/", t(0);
    }([function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      var i = Object.assign || function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var o2 in n2) Object.prototype.hasOwnProperty.call(n2, o2) && (e2[o2] = n2[o2]);
        }
        return e2;
      }, r = n(1), a = (o(r), n(6)), u = o(a), c = n(7), s = o(c), f = n(8), d = o(f), l = n(9), p = o(l), m = n(10), b = o(m), v = n(11), y = o(v), g = n(14), h = o(g), w = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j = function() {
        var e2 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e2 && (k = true), k) return w = (0, y.default)(w, x), (0, b.default)(w, x.once), w;
      }, O = function() {
        w = (0, h.default)(), j();
      }, M = function() {
        w.forEach(function(e2, t2) {
          e2.node.removeAttribute("data-aos"), e2.node.removeAttribute("data-aos-easing"), e2.node.removeAttribute("data-aos-duration"), e2.node.removeAttribute("data-aos-delay");
        });
      }, S = function(e2) {
        return e2 === true || "mobile" === e2 && p.default.mobile() || "phone" === e2 && p.default.phone() || "tablet" === e2 && p.default.tablet() || "function" == typeof e2 && e2() === true;
      }, _ = function(e2) {
        x = i(x, e2), w = (0, h.default)();
        var t2 = document.all && !window.atob;
        return S(x.disable) || t2 ? M() : (x.disableMutationObserver || d.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
          j(true);
        }) : document.addEventListener(x.startEvent, function() {
          j(true);
        }), window.addEventListener("resize", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s.default)(j, x.debounceDelay, true)), window.addEventListener("scroll", (0, u.default)(function() {
          (0, b.default)(w, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d.default.ready("[data-aos]", O), w);
      };
      e.exports = { init: _, refresh: j, refreshHard: O };
    }, function(e, t) {
    }, , , , , function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function o2(t4) {
            var n3 = b2, o3 = v2;
            return b2 = v2 = void 0, k2 = t4, g2 = e2.apply(o3, n3);
          }
          function r2(e3) {
            return k2 = e3, h2 = setTimeout(f2, t3), M ? o2(e3) : g2;
          }
          function a2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2, i2 = t3 - n3;
            return S ? j(i2, y2 - o3) : i2;
          }
          function c2(e3) {
            var n3 = e3 - w2, o3 = e3 - k2;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o3 >= y2;
          }
          function f2() {
            var e3 = O();
            return c2(e3) ? d2(e3) : void (h2 = setTimeout(f2, a2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? o2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), k2 = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(O());
          }
          function m2() {
            var e3 = O(), n3 = c2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2) return r2(w2);
              if (S) return h2 = setTimeout(f2, t3), o2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, k2 = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2) throw new TypeError(s);
          return t3 = u(t3) || 0, i(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? x(u(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2, t3, o2) {
          var r2 = true, a2 = true;
          if ("function" != typeof e2) throw new TypeError(s);
          return i(o2) && (r2 = "leading" in o2 ? !!o2.leading : r2, a2 = "trailing" in o2 ? !!o2.trailing : a2), n(e2, t3, { leading: r2, maxWait: t3, trailing: a2 });
        }
        function i(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : c(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function r(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : c(e2));
        }
        function a(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : c(e2)) || r(e2) && k.call(e2) == d;
        }
        function u(e2) {
          if ("number" == typeof e2) return e2;
          if (a(e2)) return f;
          if (i(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = i(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(l, "");
          var n2 = m.test(e2);
          return n2 || b.test(e2) ? v(e2.slice(2), n2 ? 2 : 8) : p.test(e2) ? f : +e2;
        }
        var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, s = "Expected a function", f = NaN, d = "[object Symbol]", l = /^\s+|\s+$/g, p = /^[-+]0x[0-9a-f]+$/i, m = /^0b[01]+$/i, b = /^0o[0-7]+$/i, v = parseInt, y = "object" == ("undefined" == typeof t2 ? "undefined" : c(t2)) && t2 && t2.Object === Object && t2, g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self, h = y || g || Function("return this")(), w = Object.prototype, k = w.toString, x = Math.max, j = Math.min, O = function() {
          return h.Date.now();
        };
        e.exports = o;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      (function(t2) {
        function n(e2, t3, n2) {
          function i2(t4) {
            var n3 = b2, o2 = v2;
            return b2 = v2 = void 0, O = t4, g2 = e2.apply(o2, n3);
          }
          function r2(e3) {
            return O = e3, h2 = setTimeout(f2, t3), M ? i2(e3) : g2;
          }
          function u2(e3) {
            var n3 = e3 - w2, o2 = e3 - O, i3 = t3 - n3;
            return S ? x(i3, y2 - o2) : i3;
          }
          function s2(e3) {
            var n3 = e3 - w2, o2 = e3 - O;
            return void 0 === w2 || n3 >= t3 || n3 < 0 || S && o2 >= y2;
          }
          function f2() {
            var e3 = j();
            return s2(e3) ? d2(e3) : void (h2 = setTimeout(f2, u2(e3)));
          }
          function d2(e3) {
            return h2 = void 0, _ && b2 ? i2(e3) : (b2 = v2 = void 0, g2);
          }
          function l2() {
            void 0 !== h2 && clearTimeout(h2), O = 0, b2 = w2 = v2 = h2 = void 0;
          }
          function p2() {
            return void 0 === h2 ? g2 : d2(j());
          }
          function m2() {
            var e3 = j(), n3 = s2(e3);
            if (b2 = arguments, v2 = this, w2 = e3, n3) {
              if (void 0 === h2) return r2(w2);
              if (S) return h2 = setTimeout(f2, t3), i2(w2);
            }
            return void 0 === h2 && (h2 = setTimeout(f2, t3)), g2;
          }
          var b2, v2, y2, g2, h2, w2, O = 0, M = false, S = false, _ = true;
          if ("function" != typeof e2) throw new TypeError(c);
          return t3 = a(t3) || 0, o(n2) && (M = !!n2.leading, S = "maxWait" in n2, y2 = S ? k(a(n2.maxWait) || 0, t3) : y2, _ = "trailing" in n2 ? !!n2.trailing : _), m2.cancel = l2, m2.flush = p2, m2;
        }
        function o(e2) {
          var t3 = "undefined" == typeof e2 ? "undefined" : u(e2);
          return !!e2 && ("object" == t3 || "function" == t3);
        }
        function i(e2) {
          return !!e2 && "object" == ("undefined" == typeof e2 ? "undefined" : u(e2));
        }
        function r(e2) {
          return "symbol" == ("undefined" == typeof e2 ? "undefined" : u(e2)) || i(e2) && w.call(e2) == f;
        }
        function a(e2) {
          if ("number" == typeof e2) return e2;
          if (r(e2)) return s;
          if (o(e2)) {
            var t3 = "function" == typeof e2.valueOf ? e2.valueOf() : e2;
            e2 = o(t3) ? t3 + "" : t3;
          }
          if ("string" != typeof e2) return 0 === e2 ? e2 : +e2;
          e2 = e2.replace(d, "");
          var n2 = p.test(e2);
          return n2 || m.test(e2) ? b(e2.slice(2), n2 ? 2 : 8) : l.test(e2) ? s : +e2;
        }
        var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        }, c = "Expected a function", s = NaN, f = "[object Symbol]", d = /^\s+|\s+$/g, l = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, m = /^0o[0-7]+$/i, b = parseInt, v = "object" == ("undefined" == typeof t2 ? "undefined" : u(t2)) && t2 && t2.Object === Object && t2, y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self, g = v || y || Function("return this")(), h = Object.prototype, w = h.toString, k = Math.max, x = Math.min, j = function() {
          return g.Date.now();
        };
        e.exports = n;
      }).call(t, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e, t) {
      function n(e2) {
        var t2 = void 0, o2 = void 0;
        for (t2 = 0; t2 < e2.length; t2 += 1) {
          if (o2 = e2[t2], o2.dataset && o2.dataset.aos) return true;
          if (o2.children && n(o2.children)) return true;
        }
        return false;
      }
      function o() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function i() {
        return !!o();
      }
      function r(e2, t2) {
        var n2 = window.document, i2 = o(), r2 = new i2(a);
        u = t2, r2.observe(n2.documentElement, { childList: true, subtree: true, removedNodes: true });
      }
      function a(e2) {
        e2 && e2.forEach(function(e3) {
          var t2 = Array.prototype.slice.call(e3.addedNodes), o2 = Array.prototype.slice.call(e3.removedNodes), i2 = t2.concat(o2);
          if (n(i2)) return u();
        });
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var u = function() {
      };
      t.default = { isSupported: i, ready: r };
    }, function(e, t) {
      function n(e2, t2) {
        if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      function o() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = /* @__PURE__ */ function() {
        function e2(e3, t2) {
          for (var n2 = 0; n2 < t2.length; n2++) {
            var o2 = t2[n2];
            o2.enumerable = o2.enumerable || false, o2.configurable = true, "value" in o2 && (o2.writable = true), Object.defineProperty(e3, o2.key, o2);
          }
        }
        return function(t2, n2, o2) {
          return n2 && e2(t2.prototype, n2), o2 && e2(t2, o2), t2;
        };
      }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s = function() {
        function e2() {
          n(this, e2);
        }
        return i(e2, [{ key: "phone", value: function() {
          var e3 = o();
          return !(!r.test(e3) && !a.test(e3.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var e3 = o();
          return !(!u.test(e3) && !c.test(e3.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), e2;
      }();
      t.default = new s();
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2, t2, n2) {
        var o2 = e2.node.getAttribute("data-aos-once");
        t2 > e2.position ? e2.node.classList.add("aos-animate") : "undefined" != typeof o2 && ("false" === o2 || !n2 && "true" !== o2) && e2.node.classList.remove("aos-animate");
      }, o = function(e2, t2) {
        var o2 = window.pageYOffset, i = window.innerHeight;
        e2.forEach(function(e3, r) {
          n(e3, i + o2, t2);
        });
      };
      t.default = o;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(12), r = o(i), a = function(e2, t2) {
        return e2.forEach(function(e3, n2) {
          e3.node.classList.add("aos-init"), e3.position = (0, r.default)(e3.node, t2.offset);
        }), e2;
      };
      t.default = a;
    }, function(e, t, n) {
      function o(e2) {
        return e2 && e2.__esModule ? e2 : { default: e2 };
      }
      Object.defineProperty(t, "__esModule", { value: true });
      var i = n(13), r = o(i), a = function(e2, t2) {
        var n2 = 0, o2 = 0, i2 = window.innerHeight, a2 = { offset: e2.getAttribute("data-aos-offset"), anchor: e2.getAttribute("data-aos-anchor"), anchorPlacement: e2.getAttribute("data-aos-anchor-placement") };
        switch (a2.offset && !isNaN(a2.offset) && (o2 = parseInt(a2.offset)), a2.anchor && document.querySelectorAll(a2.anchor) && (e2 = document.querySelectorAll(a2.anchor)[0]), n2 = (0, r.default)(e2).top, a2.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n2 += e2.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n2 += e2.offsetHeight;
            break;
          case "top-center":
            n2 += i2 / 2;
            break;
          case "bottom-center":
            n2 += i2 / 2 + e2.offsetHeight;
            break;
          case "center-center":
            n2 += i2 / 2 + e2.offsetHeight / 2;
            break;
          case "top-top":
            n2 += i2;
            break;
          case "bottom-top":
            n2 += e2.offsetHeight + i2;
            break;
          case "center-top":
            n2 += e2.offsetHeight / 2 + i2;
        }
        return a2.anchorPlacement || a2.offset || isNaN(t2) || (o2 = t2), n2 + o2;
      };
      t.default = a;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        for (var t2 = 0, n2 = 0; e2 && !isNaN(e2.offsetLeft) && !isNaN(e2.offsetTop); ) t2 += e2.offsetLeft - ("BODY" != e2.tagName ? e2.scrollLeft : 0), n2 += e2.offsetTop - ("BODY" != e2.tagName ? e2.scrollTop : 0), e2 = e2.offsetParent;
        return { top: n2, left: t2 };
      };
      t.default = n;
    }, function(e, t) {
      Object.defineProperty(t, "__esModule", { value: true });
      var n = function(e2) {
        return e2 = e2 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e2, function(e3) {
          return { node: e3 };
        });
      };
      t.default = n;
    }]);
  });
})(aos);
var aosExports = aos.exports;
const AOS = /* @__PURE__ */ getDefaultExportFromCjs(aosExports);
const AOSInit = () => {
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        once: true
      });
    }
  }, []);
  return null;
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "footer bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-wrapper pt-7 pt-md-9 pt-lg-10 pb-md-5 pb-lg-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "row", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "index.html", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/logo.svg", alt: "" }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0 ps-lg-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Find A Puppy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/puppies", className: "fs-3 d-block fw-normal", children: "View All Puppies" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/breeds", className: "fs-3 d-block fw-normal", children: "View All Breeds" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Customers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-unstyled footer-memu mb-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/breeders/create", className: "fs-3 d-block fw-normal", children: "Breeder Register" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "About urpuppy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/contact-us", className: "fs-3 d-block fw-normal", children: "Contact Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Other" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/privacy-policy", className: "fs-3 d-block fw-normal", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { href: "/terms-of-use", className: "fs-3 d-block fw-normal", children: "Terms of Use" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Socials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled d-flex align-items-center gap-6 social-icon mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://x.com/UrpuppyDotCom", "data-bs-toggle": "tooltip", "data-bs-title": "Twitter", className: "bg-white bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-twitter.svg", alt: "" }) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.instagram.com/urpupppydotcom", "data-bs-toggle": "tooltip", "data-bs-title": "Instagram", className: "bg-white bg-opacity-10 d-flex align-items-center justify-content-center round-40 rounded-circle", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { loading: "lazy", src: "/images/svgs/icon-instagram.svg", alt: "" }) }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-top border-white border-opacity-10 py-3 d-md-flex align-items-center justify-content-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "d-flex align-items-center gap-2  mb-md-0 text-white fw-normal  opacity-50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: " ©2025 Urpuppy.com, LLC. All Right Reserved " }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "", className: " items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-facebook.svg", alt: "" }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { target: "_blank", href: "https://x.com/UrpuppyDotCom", className: " items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-twitter.svg", alt: "" }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.instagram.com/urpupppydotcom", target: "_blank", className: " items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-instagram.svg" }),
          " "
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-white fw-normal opacity-50 d-flex align-items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-mail.svg", alt: "" }),
        " support@urpuppy.com"
      ] })
    ] })
  ] }) });
};
function ApplicationLogo(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: "navbar-brand py-0 me-0", href: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.svg", alt: "" }) });
}
const AccountDropdownButton = ({ user }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "dropdown position-relative user-profile-dropdown", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "btn btn-primary p-0 round-44 overflow-hidden rounded-circle d-flex align-items-center justify-content-center", href: "#", role: "button", "data-bs-toggle": "dropdown", "aria-expanded": "false", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { image_url: user.avatar, initial_name: user.initial_name, size: "sm" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "dropdown-menu dropdown-menu-end p-3", style: {
      width: "max-content"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-bottom pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h5", { className: "mb-0", children: "User Profile" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center gap-6 my-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar, { image_url: user.avatar, initial_name: user.initial_name, size: "sm" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "mb-0", children: user.full_name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 fs-2 d-flex align-items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-mail-dark.svg", alt: "", width: "14" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "text-muted", href: "mailto:support@urpuppy.com", children: user.email })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: "dropdown-item rounded py-2", href: "/profile", children: "Settings" }) }),
      (user.premium_plan != null || user.breeder_plan != null) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "My Subscription"
      }, children: "My Subscriptions" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "Saved Search"
      }, children: "Saved Search" }) }),
      (user.premium_plan != null || user.breeder_plan != null) && /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "dropdown-item rounded py-2", href: "/profile", data: {
        tab: "My Puppies"
      }, children: "My Puppies" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        $e,
        {
          method: "post",
          as: "button",
          href: "/logout",
          className: "btn btn-primary d-block w-100",
          children: "Logout"
        }
      ) })
    ] })
  ] });
};
const Navbarv2 = ({ type }) => {
  const [isSticky, setIsSticky] = reactExports.useState(false);
  const [isOffcanvasVisible, setIsOffcanvasVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("offcanvasSidebar");
      if (sidebar) {
        import("./bootstrap.esm-A9rKVEe6.js").then(({ Offcanvas }) => {
          Offcanvas.getOrCreateInstance(sidebar);
        });
      }
    }
  }, []);
  const page = K().url;
  const toggleOffcanvas = () => {
    if (typeof document !== "undefined") {
      const sidebar = document.getElementById("offcanvasSidebar");
      if (!sidebar) {
        return;
      }
      setIsOffcanvasVisible((prev) => !prev);
    }
  };
  const closeOffcanvas = () => {
    setIsOffcanvasVisible(false);
  };
  reactExports.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSticky(window.scrollY > 50);
    }
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const user = K().props.auth.user;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `main-header ${type == "secondary" ? "information-header" : ""} ${isSticky ? "sticky" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "navbar navbar-expand-xl py-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ApplicationLogo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-xl-none d-flex align-items-center gap-3", children: [
        user && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "position-relative me-1 d-xl-none", href: "/favorites", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-heart-white.svg", alt: "" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccountDropdownButton, { user }),
          " "
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "d-inline-block d-xl-none nav-toggler text-decoration-none fs-9 text-white",
            "data-bs-toggle": "offcanvas",
            "data-bs-target": "#offcanvasSidebar",
            "aria-controls": "offcanvasSidebar",
            onClick: toggleOffcanvas,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "ti ti-menu-2" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "collapse navbar-collapse justify-content-between", id: "menu-scroll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "navbar-nav align-items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item nav-item-line ms-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: `nav-link ${page.startsWith("/puppies") ? "active" : ""}`, href: "/puppies", children: "Puppies for Sale" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: `nav-link ${page.startsWith("/breeds") ? "active" : ""}`, href: "/breeds", children: "Breeds" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: `nav-link ${page.startsWith("/breeders") ? "active" : ""}`, href: "/breeders", children: "Breeders" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: `nav-link ${page == "/seller/create" ? "active" : ""}`, "aria-current": "page", href: "/seller/create", children: "+ List Ur Puppy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: `nav-link ${page.startsWith("/posts") ? "active" : ""}`, href: "/posts", children: "Blog" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "d-flex align-items-center gap-6", children: user ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "position-relative me-1", href: "/favorites", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-heart-white.svg", alt: "" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AccountDropdownButton, { user })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: !user && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx($e, { preserveScroll: false, prefetch: true, className: "btn btn-white bg-white text-dark", href: "/login", children: "Login" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { preserveScroll: false, prefetch: true, className: "btn btn-primary d-flex align-items-center gap-2", href: "/register", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-user.svg", alt: "" }),
            " Sign Up"
          ] })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `offcanvas offcanvas-start `,
        tabIndex: -1,
        id: "offcanvasSidebar",
        "aria-labelledby": "offcanvasExampleLabel",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offcanvas-header", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "navbar-brand py-0 me-0", href: "index.html", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/logo.svg", alt: "" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "btn-close shadow-none text-reset ms-auto btn-close-white",
                "data-bs-dismiss": "offcanvas",
                "aria-label": "Close",
                onClick: closeOffcanvas
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "offcanvas-body pt-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "navbar-nav", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: "nav-link text-white", href: "/puppies", children: "Puppies for Sale" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: "nav-link text-white", href: "/breeds", children: "Breeds" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "nav-link text-white", href: "/breeders", children: "Breeders" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { prefetch: true, className: "nav-link text-white", href: "/seller/create", children: "+ List Ur Puppy" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsxRuntimeExports.jsx($e, { className: "nav-link text-white", href: "/posts", children: "Blog" }) })
            ] }),
            !user && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "d-flex align-items-center flex-column gap-3 mt-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx($e, { preserveScroll: false, prefetch: true, className: "btn btn-white bg-white text-dark w-100", href: "/login", children: "Login" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs($e, { preserveScroll: false, prefetch: true, className: "btn btn-primary d-flex align-items-center justify-content-center gap-2 w-100", href: "/register", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/icon-user.svg", alt: "" }),
                " Sign Up"
              ] })
            ] })
          ] })
        ]
      }
    )
  ] });
};
function Layout({
  header,
  children,
  navType
}) {
  const { flash } = K().props;
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.success) {
      kt.success(
        flash.message.success,
        {
          duration: 3e3
        }
      );
    }
  }, [flash]);
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.error) {
      kt.error(flash.message.error, {
        duration: 3e3
      });
    }
  }, [flash]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AOSInit, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbarv2, { type: navType }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  Layout as L
};
