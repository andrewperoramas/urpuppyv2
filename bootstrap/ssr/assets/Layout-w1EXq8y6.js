import { c as commonjsGlobal, g as getDefaultExportFromCjs, r as reactExports, j as jsxRuntimeExports, U as Ue, V as V$1 } from "../ssr.js";
import { N as Navbarv2 } from "./Navbarv2-BbKDNqWY.js";
var aos = { exports: {} };
(function(module, exports) {
  !function(e2, t2) {
    module.exports = t2();
  }(commonjsGlobal, function() {
    return function(e2) {
      function t2(o2) {
        if (n2[o2]) return n2[o2].exports;
        var i2 = n2[o2] = { exports: {}, id: o2, loaded: false };
        return e2[o2].call(i2.exports, i2, i2.exports, t2), i2.loaded = true, i2.exports;
      }
      var n2 = {};
      return t2.m = e2, t2.c = n2, t2.p = "dist/", t2(0);
    }([function(e2, t2, n2) {
      function o2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      var i2 = Object.assign || function(e3) {
        for (var t3 = 1; t3 < arguments.length; t3++) {
          var n3 = arguments[t3];
          for (var o3 in n3) Object.prototype.hasOwnProperty.call(n3, o3) && (e3[o3] = n3[o3]);
        }
        return e3;
      }, r = n2(1), a2 = (o2(r), n2(6)), u2 = o2(a2), c2 = n2(7), s2 = o2(c2), f2 = n2(8), d2 = o2(f2), l2 = n2(9), p2 = o2(l2), m2 = n2(10), b2 = o2(m2), v2 = n2(11), y = o2(v2), g2 = n2(14), h2 = o2(g2), w2 = [], k = false, x = { offset: 120, delay: 0, easing: "ease", duration: 400, disable: false, once: false, startEvent: "DOMContentLoaded", throttleDelay: 99, debounceDelay: 50, disableMutationObserver: false }, j2 = function() {
        var e3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (e3 && (k = true), k) return w2 = (0, y.default)(w2, x), (0, b2.default)(w2, x.once), w2;
      }, O = function() {
        w2 = (0, h2.default)(), j2();
      }, M2 = function() {
        w2.forEach(function(e3, t3) {
          e3.node.removeAttribute("data-aos"), e3.node.removeAttribute("data-aos-easing"), e3.node.removeAttribute("data-aos-duration"), e3.node.removeAttribute("data-aos-delay");
        });
      }, S2 = function(e3) {
        return e3 === true || "mobile" === e3 && p2.default.mobile() || "phone" === e3 && p2.default.phone() || "tablet" === e3 && p2.default.tablet() || "function" == typeof e3 && e3() === true;
      }, _2 = function(e3) {
        x = i2(x, e3), w2 = (0, h2.default)();
        var t3 = document.all && !window.atob;
        return S2(x.disable) || t3 ? M2() : (x.disableMutationObserver || d2.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), x.disableMutationObserver = true), document.querySelector("body").setAttribute("data-aos-easing", x.easing), document.querySelector("body").setAttribute("data-aos-duration", x.duration), document.querySelector("body").setAttribute("data-aos-delay", x.delay), "DOMContentLoaded" === x.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? j2(true) : "load" === x.startEvent ? window.addEventListener(x.startEvent, function() {
          j2(true);
        }) : document.addEventListener(x.startEvent, function() {
          j2(true);
        }), window.addEventListener("resize", (0, s2.default)(j2, x.debounceDelay, true)), window.addEventListener("orientationchange", (0, s2.default)(j2, x.debounceDelay, true)), window.addEventListener("scroll", (0, u2.default)(function() {
          (0, b2.default)(w2, x.once);
        }, x.throttleDelay)), x.disableMutationObserver || d2.default.ready("[data-aos]", O), w2);
      };
      e2.exports = { init: _2, refresh: j2, refreshHard: O };
    }, function(e2, t2) {
    }, , , , , function(e2, t2) {
      (function(t3) {
        function n2(e3, t4, n3) {
          function o3(t5) {
            var n4 = b3, o4 = v3;
            return b3 = v3 = void 0, k2 = t5, g3 = e3.apply(o4, n4);
          }
          function r2(e4) {
            return k2 = e4, h3 = setTimeout(f3, t4), M2 ? o3(e4) : g3;
          }
          function a3(e4) {
            var n4 = e4 - w3, o4 = e4 - k2, i3 = t4 - n4;
            return S2 ? j2(i3, y2 - o4) : i3;
          }
          function c3(e4) {
            var n4 = e4 - w3, o4 = e4 - k2;
            return void 0 === w3 || n4 >= t4 || n4 < 0 || S2 && o4 >= y2;
          }
          function f3() {
            var e4 = O();
            return c3(e4) ? d3(e4) : void (h3 = setTimeout(f3, a3(e4)));
          }
          function d3(e4) {
            return h3 = void 0, _2 && b3 ? o3(e4) : (b3 = v3 = void 0, g3);
          }
          function l3() {
            void 0 !== h3 && clearTimeout(h3), k2 = 0, b3 = w3 = v3 = h3 = void 0;
          }
          function p3() {
            return void 0 === h3 ? g3 : d3(O());
          }
          function m3() {
            var e4 = O(), n4 = c3(e4);
            if (b3 = arguments, v3 = this, w3 = e4, n4) {
              if (void 0 === h3) return r2(w3);
              if (S2) return h3 = setTimeout(f3, t4), o3(w3);
            }
            return void 0 === h3 && (h3 = setTimeout(f3, t4)), g3;
          }
          var b3, v3, y2, g3, h3, w3, k2 = 0, M2 = false, S2 = false, _2 = true;
          if ("function" != typeof e3) throw new TypeError(s2);
          return t4 = u2(t4) || 0, i2(n3) && (M2 = !!n3.leading, S2 = "maxWait" in n3, y2 = S2 ? x(u2(n3.maxWait) || 0, t4) : y2, _2 = "trailing" in n3 ? !!n3.trailing : _2), m3.cancel = l3, m3.flush = p3, m3;
        }
        function o2(e3, t4, o3) {
          var r2 = true, a3 = true;
          if ("function" != typeof e3) throw new TypeError(s2);
          return i2(o3) && (r2 = "leading" in o3 ? !!o3.leading : r2, a3 = "trailing" in o3 ? !!o3.trailing : a3), n2(e3, t4, { leading: r2, maxWait: t4, trailing: a3 });
        }
        function i2(e3) {
          var t4 = "undefined" == typeof e3 ? "undefined" : c2(e3);
          return !!e3 && ("object" == t4 || "function" == t4);
        }
        function r(e3) {
          return !!e3 && "object" == ("undefined" == typeof e3 ? "undefined" : c2(e3));
        }
        function a2(e3) {
          return "symbol" == ("undefined" == typeof e3 ? "undefined" : c2(e3)) || r(e3) && k.call(e3) == d2;
        }
        function u2(e3) {
          if ("number" == typeof e3) return e3;
          if (a2(e3)) return f2;
          if (i2(e3)) {
            var t4 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = i2(t4) ? t4 + "" : t4;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(l2, "");
          var n3 = m2.test(e3);
          return n3 || b2.test(e3) ? v2(e3.slice(2), n3 ? 2 : 8) : p2.test(e3) ? f2 : +e3;
        }
        var c2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, s2 = "Expected a function", f2 = NaN, d2 = "[object Symbol]", l2 = /^\s+|\s+$/g, p2 = /^[-+]0x[0-9a-f]+$/i, m2 = /^0b[01]+$/i, b2 = /^0o[0-7]+$/i, v2 = parseInt, y = "object" == ("undefined" == typeof t3 ? "undefined" : c2(t3)) && t3 && t3.Object === Object && t3, g2 = "object" == ("undefined" == typeof self ? "undefined" : c2(self)) && self && self.Object === Object && self, h2 = y || g2 || Function("return this")(), w2 = Object.prototype, k = w2.toString, x = Math.max, j2 = Math.min, O = function() {
          return h2.Date.now();
        };
        e2.exports = o2;
      }).call(t2, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e2, t2) {
      (function(t3) {
        function n2(e3, t4, n3) {
          function i3(t5) {
            var n4 = b3, o3 = v3;
            return b3 = v3 = void 0, O = t5, g3 = e3.apply(o3, n4);
          }
          function r2(e4) {
            return O = e4, h3 = setTimeout(f3, t4), M2 ? i3(e4) : g3;
          }
          function u3(e4) {
            var n4 = e4 - w3, o3 = e4 - O, i4 = t4 - n4;
            return S2 ? x(i4, y2 - o3) : i4;
          }
          function s3(e4) {
            var n4 = e4 - w3, o3 = e4 - O;
            return void 0 === w3 || n4 >= t4 || n4 < 0 || S2 && o3 >= y2;
          }
          function f3() {
            var e4 = j2();
            return s3(e4) ? d3(e4) : void (h3 = setTimeout(f3, u3(e4)));
          }
          function d3(e4) {
            return h3 = void 0, _2 && b3 ? i3(e4) : (b3 = v3 = void 0, g3);
          }
          function l3() {
            void 0 !== h3 && clearTimeout(h3), O = 0, b3 = w3 = v3 = h3 = void 0;
          }
          function p3() {
            return void 0 === h3 ? g3 : d3(j2());
          }
          function m3() {
            var e4 = j2(), n4 = s3(e4);
            if (b3 = arguments, v3 = this, w3 = e4, n4) {
              if (void 0 === h3) return r2(w3);
              if (S2) return h3 = setTimeout(f3, t4), i3(w3);
            }
            return void 0 === h3 && (h3 = setTimeout(f3, t4)), g3;
          }
          var b3, v3, y2, g3, h3, w3, O = 0, M2 = false, S2 = false, _2 = true;
          if ("function" != typeof e3) throw new TypeError(c2);
          return t4 = a2(t4) || 0, o2(n3) && (M2 = !!n3.leading, S2 = "maxWait" in n3, y2 = S2 ? k(a2(n3.maxWait) || 0, t4) : y2, _2 = "trailing" in n3 ? !!n3.trailing : _2), m3.cancel = l3, m3.flush = p3, m3;
        }
        function o2(e3) {
          var t4 = "undefined" == typeof e3 ? "undefined" : u2(e3);
          return !!e3 && ("object" == t4 || "function" == t4);
        }
        function i2(e3) {
          return !!e3 && "object" == ("undefined" == typeof e3 ? "undefined" : u2(e3));
        }
        function r(e3) {
          return "symbol" == ("undefined" == typeof e3 ? "undefined" : u2(e3)) || i2(e3) && w2.call(e3) == f2;
        }
        function a2(e3) {
          if ("number" == typeof e3) return e3;
          if (r(e3)) return s2;
          if (o2(e3)) {
            var t4 = "function" == typeof e3.valueOf ? e3.valueOf() : e3;
            e3 = o2(t4) ? t4 + "" : t4;
          }
          if ("string" != typeof e3) return 0 === e3 ? e3 : +e3;
          e3 = e3.replace(d2, "");
          var n3 = p2.test(e3);
          return n3 || m2.test(e3) ? b2(e3.slice(2), n3 ? 2 : 8) : l2.test(e3) ? s2 : +e3;
        }
        var u2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        }, c2 = "Expected a function", s2 = NaN, f2 = "[object Symbol]", d2 = /^\s+|\s+$/g, l2 = /^[-+]0x[0-9a-f]+$/i, p2 = /^0b[01]+$/i, m2 = /^0o[0-7]+$/i, b2 = parseInt, v2 = "object" == ("undefined" == typeof t3 ? "undefined" : u2(t3)) && t3 && t3.Object === Object && t3, y = "object" == ("undefined" == typeof self ? "undefined" : u2(self)) && self && self.Object === Object && self, g2 = v2 || y || Function("return this")(), h2 = Object.prototype, w2 = h2.toString, k = Math.max, x = Math.min, j2 = function() {
          return g2.Date.now();
        };
        e2.exports = n2;
      }).call(t2, /* @__PURE__ */ function() {
        return this;
      }());
    }, function(e2, t2) {
      function n2(e3) {
        var t3 = void 0, o3 = void 0;
        for (t3 = 0; t3 < e3.length; t3 += 1) {
          if (o3 = e3[t3], o3.dataset && o3.dataset.aos) return true;
          if (o3.children && n2(o3.children)) return true;
        }
        return false;
      }
      function o2() {
        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
      }
      function i2() {
        return !!o2();
      }
      function r(e3, t3) {
        var n3 = window.document, i3 = o2(), r2 = new i3(a2);
        u2 = t3, r2.observe(n3.documentElement, { childList: true, subtree: true, removedNodes: true });
      }
      function a2(e3) {
        e3 && e3.forEach(function(e4) {
          var t3 = Array.prototype.slice.call(e4.addedNodes), o3 = Array.prototype.slice.call(e4.removedNodes), i3 = t3.concat(o3);
          if (n2(i3)) return u2();
        });
      }
      Object.defineProperty(t2, "__esModule", { value: true });
      var u2 = function() {
      };
      t2.default = { isSupported: i2, ready: r };
    }, function(e2, t2) {
      function n2(e3, t3) {
        if (!(e3 instanceof t3)) throw new TypeError("Cannot call a class as a function");
      }
      function o2() {
        return navigator.userAgent || navigator.vendor || window.opera || "";
      }
      Object.defineProperty(t2, "__esModule", { value: true });
      var i2 = /* @__PURE__ */ function() {
        function e3(e4, t3) {
          for (var n3 = 0; n3 < t3.length; n3++) {
            var o3 = t3[n3];
            o3.enumerable = o3.enumerable || false, o3.configurable = true, "value" in o3 && (o3.writable = true), Object.defineProperty(e4, o3.key, o3);
          }
        }
        return function(t3, n3, o3) {
          return n3 && e3(t3.prototype, n3), o3 && e3(t3, o3), t3;
        };
      }(), r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i, a2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, u2 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i, c2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i, s2 = function() {
        function e3() {
          n2(this, e3);
        }
        return i2(e3, [{ key: "phone", value: function() {
          var e4 = o2();
          return !(!r.test(e4) && !a2.test(e4.substr(0, 4)));
        } }, { key: "mobile", value: function() {
          var e4 = o2();
          return !(!u2.test(e4) && !c2.test(e4.substr(0, 4)));
        } }, { key: "tablet", value: function() {
          return this.mobile() && !this.phone();
        } }]), e3;
      }();
      t2.default = new s2();
    }, function(e2, t2) {
      Object.defineProperty(t2, "__esModule", { value: true });
      var n2 = function(e3, t3, n3) {
        var o3 = e3.node.getAttribute("data-aos-once");
        t3 > e3.position ? e3.node.classList.add("aos-animate") : "undefined" != typeof o3 && ("false" === o3 || !n3 && "true" !== o3) && e3.node.classList.remove("aos-animate");
      }, o2 = function(e3, t3) {
        var o3 = window.pageYOffset, i2 = window.innerHeight;
        e3.forEach(function(e4, r) {
          n2(e4, i2 + o3, t3);
        });
      };
      t2.default = o2;
    }, function(e2, t2, n2) {
      function o2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      Object.defineProperty(t2, "__esModule", { value: true });
      var i2 = n2(12), r = o2(i2), a2 = function(e3, t3) {
        return e3.forEach(function(e4, n3) {
          e4.node.classList.add("aos-init"), e4.position = (0, r.default)(e4.node, t3.offset);
        }), e3;
      };
      t2.default = a2;
    }, function(e2, t2, n2) {
      function o2(e3) {
        return e3 && e3.__esModule ? e3 : { default: e3 };
      }
      Object.defineProperty(t2, "__esModule", { value: true });
      var i2 = n2(13), r = o2(i2), a2 = function(e3, t3) {
        var n3 = 0, o3 = 0, i3 = window.innerHeight, a3 = { offset: e3.getAttribute("data-aos-offset"), anchor: e3.getAttribute("data-aos-anchor"), anchorPlacement: e3.getAttribute("data-aos-anchor-placement") };
        switch (a3.offset && !isNaN(a3.offset) && (o3 = parseInt(a3.offset)), a3.anchor && document.querySelectorAll(a3.anchor) && (e3 = document.querySelectorAll(a3.anchor)[0]), n3 = (0, r.default)(e3).top, a3.anchorPlacement) {
          case "top-bottom":
            break;
          case "center-bottom":
            n3 += e3.offsetHeight / 2;
            break;
          case "bottom-bottom":
            n3 += e3.offsetHeight;
            break;
          case "top-center":
            n3 += i3 / 2;
            break;
          case "bottom-center":
            n3 += i3 / 2 + e3.offsetHeight;
            break;
          case "center-center":
            n3 += i3 / 2 + e3.offsetHeight / 2;
            break;
          case "top-top":
            n3 += i3;
            break;
          case "bottom-top":
            n3 += e3.offsetHeight + i3;
            break;
          case "center-top":
            n3 += e3.offsetHeight / 2 + i3;
        }
        return a3.anchorPlacement || a3.offset || isNaN(t3) || (o3 = t3), n3 + o3;
      };
      t2.default = a2;
    }, function(e2, t2) {
      Object.defineProperty(t2, "__esModule", { value: true });
      var n2 = function(e3) {
        for (var t3 = 0, n3 = 0; e3 && !isNaN(e3.offsetLeft) && !isNaN(e3.offsetTop); ) t3 += e3.offsetLeft - ("BODY" != e3.tagName ? e3.scrollLeft : 0), n3 += e3.offsetTop - ("BODY" != e3.tagName ? e3.scrollTop : 0), e3 = e3.offsetParent;
        return { top: n3, left: t3 };
      };
      t2.default = n2;
    }, function(e2, t2) {
      Object.defineProperty(t2, "__esModule", { value: true });
      var n2 = function(e3) {
        return e3 = e3 || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e3, function(e4) {
          return { node: e4 };
        });
      };
      t2.default = n2;
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
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "View All Puppies" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "View All Characteristics" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Customers" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "Support" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { href: "/breeders/create", className: "fs-3 d-block fw-normal", children: "Breeder Register" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "About urpuppy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { href: "/contact-us", className: "fs-3 d-block fw-normal", children: "Contact Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "Dog Registration" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-6 col-md-4 col-lg-2 mb-7 pb-1 pb-lg-0 mb-lg-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h6", { className: "fw-semibold font-work-sans mb-6 text-white", children: "Other" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-unstyled footer-memu mb-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { href: "/privacy-policy", className: "fs-3 d-block fw-normal", children: "Privacy Policy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Ue, { href: "/terms-of-use", className: "fs-3 d-block fw-normal", children: "Terms of Use" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "fs-3 d-block fw-normal", children: "Sitemap" }) })
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
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-md-0 text-white fw-normal opacity-50", children: "© 2025 urpuppy. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mb-0 text-white fw-normal opacity-50 d-flex align-items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/svgs/icon-mail.svg", alt: "" }),
        " support@urpuppy.com"
      ] })
    ] })
  ] }) });
};
let e = { data: "" }, t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n$1 = /\n+/g, o = (e2, t2) => {
  let r = "", l2 = "", a2 = "";
  for (let n2 in e2) {
    let c2 = e2[n2];
    "@" == n2[0] ? "i" == n2[1] ? r = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o(c2, n2) : n2 + "{" + o(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n2.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n2, c2) : n2 + ":" + c2 + ";");
  }
  return r + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
}, c = {}, s = (e2) => {
  if ("object" == typeof e2) {
    let t2 = "";
    for (let r in e2) t2 += r + s(e2[r]);
    return t2;
  }
  return e2;
}, i = (e2, t2, r, i2, p2) => {
  let u2 = s(e2), d2 = c[u2] || (c[u2] = ((e3) => {
    let t3 = 0, r2 = 11;
    for (; t3 < e3.length; ) r2 = 101 * r2 + e3.charCodeAt(t3++) >>> 0;
    return "go" + r2;
  })(u2));
  if (!c[d2]) {
    let t3 = u2 !== e2 ? e2 : ((e3) => {
      let t4, r2, o2 = [{}];
      for (; t4 = l.exec(e3.replace(a, "")); ) t4[4] ? o2.shift() : t4[3] ? (r2 = t4[3].replace(n$1, " ").trim(), o2.unshift(o2[0][r2] = o2[0][r2] || {})) : o2[0][t4[1]] = t4[2].replace(n$1, " ").trim();
      return o2[0];
    })(e2);
    c[d2] = o(p2 ? { ["@keyframes " + d2]: t3 } : t3, r ? "" : "." + d2);
  }
  let f2 = r && c.g ? c.g : null;
  return r && (c.g = c[d2]), ((e3, t3, r2, l2) => {
    l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r2 ? e3 + t3.data : t3.data + e3);
  })(c[d2], t2, i2, f2), d2;
}, p = (e2, t2, r) => e2.reduce((e3, l2, a2) => {
  let n2 = t2[a2];
  if (n2 && n2.call) {
    let e4 = n2(r), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
    n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
  }
  return e3 + l2 + (null == n2 ? "" : n2);
}, "");
function u$1(e2) {
  let r = this || {}, l2 = e2.call ? e2(r.p) : e2;
  return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r.p) : t2), {}) : l2, t(r.target), r.g, r.o, r.k);
}
let d, f, g;
u$1.bind({ g: 1 });
let h$1 = u$1.bind({ k: 1 });
function m(e2, t2, r, l2) {
  o.p = t2, d = e2, f = r, g = l2;
}
function j(e2, t2) {
  let r = this || {};
  return function() {
    let l2 = arguments;
    function a2(n2, o2) {
      let c2 = Object.assign({}, n2), s2 = c2.className || a2.className;
      r.p = Object.assign({ theme: f && f() }, c2), r.o = / *go\d+/.test(s2), c2.className = u$1.apply(r, l2) + (s2 ? " " + s2 : "");
      let i2 = e2;
      return e2[0] && (i2 = c2.as || e2, delete c2.as), g && i2[0] && g(c2), d(i2, c2);
    }
    return a2;
  };
}
var W = (e2) => typeof e2 == "function", T = (e2, t2) => W(e2) ? e2(t2) : e2;
var U = /* @__PURE__ */ (() => {
  let e2 = 0;
  return () => (++e2).toString();
})(), b = /* @__PURE__ */ (() => {
  let e2;
  return () => {
    if (e2 === void 0 && typeof window < "u") {
      let t2 = matchMedia("(prefers-reduced-motion: reduce)");
      e2 = !t2 || t2.matches;
    }
    return e2;
  };
})();
var Q = 20;
var S = /* @__PURE__ */ new Map(), X = 1e3, $ = (e2) => {
  if (S.has(e2)) return;
  let t2 = setTimeout(() => {
    S.delete(e2), u({ type: 4, toastId: e2 });
  }, X);
  S.set(e2, t2);
}, J = (e2) => {
  let t2 = S.get(e2);
  t2 && clearTimeout(t2);
}, v = (e2, t2) => {
  switch (t2.type) {
    case 0:
      return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, Q) };
    case 1:
      return t2.toast.id && J(t2.toast.id), { ...e2, toasts: e2.toasts.map((r) => r.id === t2.toast.id ? { ...r, ...t2.toast } : r) };
    case 2:
      let { toast: o2 } = t2;
      return e2.toasts.find((r) => r.id === o2.id) ? v(e2, { type: 1, toast: o2 }) : v(e2, { type: 0, toast: o2 });
    case 3:
      let { toastId: s2 } = t2;
      return s2 ? $(s2) : e2.toasts.forEach((r) => {
        $(r.id);
      }), { ...e2, toasts: e2.toasts.map((r) => r.id === s2 || s2 === void 0 ? { ...r, visible: false } : r) };
    case 4:
      return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((r) => r.id !== t2.toastId) };
    case 5:
      return { ...e2, pausedAt: t2.time };
    case 6:
      let a2 = t2.time - (e2.pausedAt || 0);
      return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((r) => ({ ...r, pauseDuration: r.pauseDuration + a2 })) };
  }
}, A = [], P = { toasts: [], pausedAt: void 0 }, u = (e2) => {
  P = v(P, e2), A.forEach((t2) => {
    t2(P);
  });
};
var G = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || U() }), h = (e2) => (t2, o2) => {
  let s2 = G(t2, e2, o2);
  return u({ type: 2, toast: s2 }), s2.id;
}, n = (e2, t2) => h("blank")(e2, t2);
n.error = h("error");
n.success = h("success");
n.loading = h("loading");
n.custom = h("custom");
n.dismiss = (e2) => {
  u({ type: 3, toastId: e2 });
};
n.remove = (e2) => u({ type: 4, toastId: e2 });
n.promise = (e2, t2, o2) => {
  let s2 = n.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
  return e2.then((a2) => (n.success(T(t2.success, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }), a2)).catch((a2) => {
    n.error(T(t2.error, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.error });
  }), e2;
};
var oe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re = h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se = h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _ = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
var ne = h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
var pe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de = h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var ue = j("div")`
  position: absolute;
`, le = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te = h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({ toast: e2 }) => {
  let { icon: t$1, type: o2, iconTheme: s2 } = e2;
  return t$1 !== void 0 ? typeof t$1 == "string" ? reactExports.createElement(fe, null, t$1) : t$1 : o2 === "blank" ? null : reactExports.createElement(le, null, reactExports.createElement(V, { ...s2 }), o2 !== "loading" && reactExports.createElement(ue, null, o2 === "error" ? reactExports.createElement(_, { ...s2 }) : reactExports.createElement(w, { ...s2 })));
};
var ye = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`, he = "0%{opacity:0;} 100%{opacity:1;}", xe = "0%{opacity:1;} 100%{opacity:0;}", be = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (e2, t2) => {
  let s2 = e2.includes("top") ? 1 : -1, [a2, r] = b() ? [he, xe] : [ye(s2), ge(s2)];
  return { animation: t2 ? `${h$1(a2)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$1(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
};
reactExports.memo(({ toast: e2, position: t$1, style: o2, children: s2 }) => {
  let a2 = e2.height ? Ae(e2.position || t$1 || "top-center", e2.visible) : { opacity: 0 }, r = reactExports.createElement(M, { toast: e2 }), c2 = reactExports.createElement(Se, { ...e2.ariaProps }, T(e2.message, e2));
  return reactExports.createElement(be, { className: e2.className, style: { ...a2, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: r, message: c2 }) : reactExports.createElement(reactExports.Fragment, null, r, c2));
});
m(reactExports.createElement);
u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;
var _t = n;
function Layout({
  header,
  children,
  navType
}) {
  const { flash } = V$1().props;
  reactExports.useEffect(() => {
    var _a;
    if ((_a = flash == null ? void 0 : flash.message) == null ? void 0 : _a.success) {
      _t.success(
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
      _t.error(flash.message.error, {
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
