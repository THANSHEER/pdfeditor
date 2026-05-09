import {
  Encodings,
  Font,
  FontNames,
  UPNG_default,
  require_pako
} from "./chunk-55IZ6OF6.js";
import {
  __commonJS,
  __require,
  __toESM
} from "./chunk-NB53XM2W.js";

// browser-external:crypto
var require_crypto = __commonJS({
  "browser-external:crypto"(exports, module) {
    module.exports = Object.create(new Proxy({}, {
      get(_, key) {
        if (key !== "__esModule" && key !== "__proto__" && key !== "constructor" && key !== "splice") {
          console.warn(`Module "crypto" has been externalized for browser compatibility. Cannot access "crypto.${key}" in client code. See https://vite.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.`);
        }
      }
    }));
  }
});

// node_modules/pdf-lib-plus-encrypt/es/core/security/crypto-js.js
var require_crypto_js = __commonJS({
  "node_modules/pdf-lib-plus-encrypt/es/core/security/crypto-js.js"(exports, module) {
    "use strict";
    (function(t, e) {
      "object" == typeof exports ? module.exports = exports = e() : "function" == typeof define && define.amd ? define([], e) : t.cryptoJs = e();
    })(exports, function() {
      var n, o, s, a, h, t, e, l, r, i, c, f, d, u, p, S, x, b, A, H, z, _, v, g, y, B, w, k, m, C, D, E, R, M, F, P, W, O, I, U = U || (function(h2) {
        var i2;
        if ("undefined" != typeof window && window.crypto && (i2 = window.crypto), "undefined" != typeof self && self.crypto && (i2 = self.crypto), !(i2 = !(i2 = !(i2 = "undefined" != typeof globalThis && globalThis.crypto ? globalThis.crypto : i2) && "undefined" != typeof window && window.msCrypto ? window.msCrypto : i2) && "undefined" != typeof global && global.crypto ? global.crypto : i2) && "function" == typeof __require)
          try {
            i2 = require_crypto();
          } catch (t3) {
          }
        var r2 = Object.create || function(t3) {
          return e2.prototype = t3, t3 = new e2(), e2.prototype = null, t3;
        };
        function e2() {
        }
        var t2 = {}, n2 = t2.lib = {}, o2 = n2.Base = {
          extend: function(t3) {
            var e3 = r2(this);
            return t3 && e3.mixIn(t3), e3.hasOwnProperty("init") && this.init !== e3.init || (e3.init = function() {
              e3.$super.init.apply(this, arguments);
            }), (e3.init.prototype = e3).$super = this, e3;
          },
          create: function() {
            var t3 = this.extend();
            return t3.init.apply(t3, arguments), t3;
          },
          init: function() {
          },
          mixIn: function(t3) {
            for (var e3 in t3)
              t3.hasOwnProperty(e3) && (this[e3] = t3[e3]);
            t3.hasOwnProperty("toString") && (this.toString = t3.toString);
          },
          clone: function() {
            return this.init.prototype.extend(this);
          }
        }, l2 = n2.WordArray = o2.extend({
          init: function(t3, e3) {
            t3 = this.words = t3 || [], this.sigBytes = null != e3 ? e3 : 4 * t3.length;
          },
          toString: function(t3) {
            return (t3 || c2).stringify(this);
          },
          concat: function(t3) {
            var e3 = this.words, r3 = t3.words, i3 = this.sigBytes, n3 = t3.sigBytes;
            if (this.clamp(), i3 % 4)
              for (var o3 = 0; o3 < n3; o3++) {
                var s3 = r3[o3 >>> 2] >>> 24 - o3 % 4 * 8 & 255;
                e3[i3 + o3 >>> 2] |= s3 << 24 - (i3 + o3) % 4 * 8;
              }
            else
              for (var c3 = 0; c3 < n3; c3 += 4)
                e3[i3 + c3 >>> 2] = r3[c3 >>> 2];
            return this.sigBytes += n3, this;
          },
          clamp: function() {
            var t3 = this.words, e3 = this.sigBytes;
            t3[e3 >>> 2] &= 4294967295 << 32 - e3 % 4 * 8, t3.length = h2.ceil(e3 / 4);
          },
          clone: function() {
            var t3 = o2.clone.call(this);
            return t3.words = this.words.slice(0), t3;
          },
          random: function(t3) {
            for (var e3 = [], r3 = 0; r3 < t3; r3 += 4)
              e3.push((function() {
                if (i2) {
                  if ("function" == typeof i2.getRandomValues)
                    try {
                      return i2.getRandomValues(new Uint32Array(1))[0];
                    } catch (t4) {
                    }
                  if ("function" == typeof i2.randomBytes)
                    try {
                      return i2.randomBytes(4).readInt32LE();
                    } catch (t4) {
                    }
                }
                throw new Error("Native crypto module could not be used to get secure random number.");
              })());
            return new l2.init(e3, t3);
          }
        }), s2 = t2.enc = {}, c2 = s2.Hex = {
          stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], n3 = 0; n3 < r3; n3++) {
              var o3 = e3[n3 >>> 2] >>> 24 - n3 % 4 * 8 & 255;
              i3.push((o3 >>> 4).toString(16)), i3.push((15 & o3).toString(16));
            }
            return i3.join("");
          },
          parse: function(t3) {
            for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3 += 2)
              r3[i3 >>> 3] |= parseInt(t3.substr(i3, 2), 16) << 24 - i3 % 8 * 4;
            return new l2.init(r3, e3 / 2);
          }
        }, a2 = s2.Latin1 = {
          stringify: function(t3) {
            for (var e3 = t3.words, r3 = t3.sigBytes, i3 = [], n3 = 0; n3 < r3; n3++) {
              var o3 = e3[n3 >>> 2] >>> 24 - n3 % 4 * 8 & 255;
              i3.push(String.fromCharCode(o3));
            }
            return i3.join("");
          },
          parse: function(t3) {
            for (var e3 = t3.length, r3 = [], i3 = 0; i3 < e3; i3++)
              r3[i3 >>> 2] |= (255 & t3.charCodeAt(i3)) << 24 - i3 % 4 * 8;
            return new l2.init(r3, e3);
          }
        }, f2 = s2.Utf8 = {
          stringify: function(t3) {
            try {
              return decodeURIComponent(escape(a2.stringify(t3)));
            } catch (t4) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          parse: function(t3) {
            return a2.parse(unescape(encodeURIComponent(t3)));
          }
        }, d2 = n2.BufferedBlockAlgorithm = o2.extend({
          reset: function() {
            this._data = new l2.init(), this._nDataBytes = 0;
          },
          _append: function(t3) {
            "string" == typeof t3 && (t3 = f2.parse(t3)), this._data.concat(t3), this._nDataBytes += t3.sigBytes;
          },
          _process: function(t3) {
            var e3, r3 = this._data, i3 = r3.words, n3 = r3.sigBytes, o3 = this.blockSize, s3 = n3 / (4 * o3), c3 = (s3 = t3 ? h2.ceil(s3) : h2.max((0 | s3) - this._minBufferSize, 0)) * o3, n3 = h2.min(4 * c3, n3);
            if (c3) {
              for (var a3 = 0; a3 < c3; a3 += o3)
                this._doProcessBlock(i3, a3);
              e3 = i3.splice(0, c3), r3.sigBytes -= n3;
            }
            return new l2.init(e3, n3);
          },
          clone: function() {
            var t3 = o2.clone.call(this);
            return t3._data = this._data.clone(), t3;
          },
          _minBufferSize: 0
        }), u2 = (n2.Hasher = d2.extend({
          cfg: o2.extend(),
          init: function(t3) {
            this.cfg = this.cfg.extend(t3), this.reset();
          },
          reset: function() {
            d2.reset.call(this), this._doReset();
          },
          update: function(t3) {
            return this._append(t3), this._process(), this;
          },
          finalize: function(t3) {
            return t3 && this._append(t3), this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function(r3) {
            return function(t3, e3) {
              return new r3.init(e3).finalize(t3);
            };
          },
          _createHmacHelper: function(r3) {
            return function(t3, e3) {
              return new u2.HMAC.init(r3, e3).finalize(t3);
            };
          }
        }), t2.algo = {});
        return t2;
      })(Math);
      function K(t2, e2, r2) {
        return t2 & e2 | ~t2 & r2;
      }
      function X(t2, e2, r2) {
        return t2 & r2 | e2 & ~r2;
      }
      function L(t2, e2) {
        return t2 << e2 | t2 >>> 32 - e2;
      }
      function j(t2, e2, r2, i2) {
        var n2, o2 = this._iv;
        o2 ? (n2 = o2.slice(0), this._iv = void 0) : n2 = this._prevBlock, i2.encryptBlock(n2, 0);
        for (var s2 = 0; s2 < r2; s2++)
          t2[e2 + s2] ^= n2[s2];
      }
      function T(t2) {
        var e2, r2, i2;
        return 255 == (t2 >> 24 & 255) ? (r2 = t2 >> 8 & 255, i2 = 255 & t2, 255 === (e2 = t2 >> 16 & 255) ? (e2 = 0, 255 === r2 ? (r2 = 0, 255 === i2 ? i2 = 0 : ++i2) : ++r2) : ++e2, t2 = 0, t2 += e2 << 16, t2 += r2 << 8, t2 += i2) : t2 += 1 << 24, t2;
      }
      function N() {
        for (var t2 = this._X, e2 = this._C, r2 = 0; r2 < 8; r2++)
          E[r2] = e2[r2];
        e2[0] = e2[0] + 1295307597 + this._b | 0, e2[1] = e2[1] + 3545052371 + (e2[0] >>> 0 < E[0] >>> 0 ? 1 : 0) | 0, e2[2] = e2[2] + 886263092 + (e2[1] >>> 0 < E[1] >>> 0 ? 1 : 0) | 0, e2[3] = e2[3] + 1295307597 + (e2[2] >>> 0 < E[2] >>> 0 ? 1 : 0) | 0, e2[4] = e2[4] + 3545052371 + (e2[3] >>> 0 < E[3] >>> 0 ? 1 : 0) | 0, e2[5] = e2[5] + 886263092 + (e2[4] >>> 0 < E[4] >>> 0 ? 1 : 0) | 0, e2[6] = e2[6] + 1295307597 + (e2[5] >>> 0 < E[5] >>> 0 ? 1 : 0) | 0, e2[7] = e2[7] + 3545052371 + (e2[6] >>> 0 < E[6] >>> 0 ? 1 : 0) | 0, this._b = e2[7] >>> 0 < E[7] >>> 0 ? 1 : 0;
        for (r2 = 0; r2 < 8; r2++) {
          var i2 = t2[r2] + e2[r2], n2 = 65535 & i2, o2 = i2 >>> 16;
          R[r2] = ((n2 * n2 >>> 17) + n2 * o2 >>> 15) + o2 * o2 ^ ((4294901760 & i2) * i2 | 0) + ((65535 & i2) * i2 | 0);
        }
        t2[0] = R[0] + (R[7] << 16 | R[7] >>> 16) + (R[6] << 16 | R[6] >>> 16) | 0, t2[1] = R[1] + (R[0] << 8 | R[0] >>> 24) + R[7] | 0, t2[2] = R[2] + (R[1] << 16 | R[1] >>> 16) + (R[0] << 16 | R[0] >>> 16) | 0, t2[3] = R[3] + (R[2] << 8 | R[2] >>> 24) + R[1] | 0, t2[4] = R[4] + (R[3] << 16 | R[3] >>> 16) + (R[2] << 16 | R[2] >>> 16) | 0, t2[5] = R[5] + (R[4] << 8 | R[4] >>> 24) + R[3] | 0, t2[6] = R[6] + (R[5] << 16 | R[5] >>> 16) + (R[4] << 16 | R[4] >>> 16) | 0, t2[7] = R[7] + (R[6] << 8 | R[6] >>> 24) + R[5] | 0;
      }
      function q() {
        for (var t2 = this._X, e2 = this._C, r2 = 0; r2 < 8; r2++)
          O[r2] = e2[r2];
        e2[0] = e2[0] + 1295307597 + this._b | 0, e2[1] = e2[1] + 3545052371 + (e2[0] >>> 0 < O[0] >>> 0 ? 1 : 0) | 0, e2[2] = e2[2] + 886263092 + (e2[1] >>> 0 < O[1] >>> 0 ? 1 : 0) | 0, e2[3] = e2[3] + 1295307597 + (e2[2] >>> 0 < O[2] >>> 0 ? 1 : 0) | 0, e2[4] = e2[4] + 3545052371 + (e2[3] >>> 0 < O[3] >>> 0 ? 1 : 0) | 0, e2[5] = e2[5] + 886263092 + (e2[4] >>> 0 < O[4] >>> 0 ? 1 : 0) | 0, e2[6] = e2[6] + 1295307597 + (e2[5] >>> 0 < O[5] >>> 0 ? 1 : 0) | 0, e2[7] = e2[7] + 3545052371 + (e2[6] >>> 0 < O[6] >>> 0 ? 1 : 0) | 0, this._b = e2[7] >>> 0 < O[7] >>> 0 ? 1 : 0;
        for (r2 = 0; r2 < 8; r2++) {
          var i2 = t2[r2] + e2[r2], n2 = 65535 & i2, o2 = i2 >>> 16;
          I[r2] = ((n2 * n2 >>> 17) + n2 * o2 >>> 15) + o2 * o2 ^ ((4294901760 & i2) * i2 | 0) + ((65535 & i2) * i2 | 0);
        }
        t2[0] = I[0] + (I[7] << 16 | I[7] >>> 16) + (I[6] << 16 | I[6] >>> 16) | 0, t2[1] = I[1] + (I[0] << 8 | I[0] >>> 24) + I[7] | 0, t2[2] = I[2] + (I[1] << 16 | I[1] >>> 16) + (I[0] << 16 | I[0] >>> 16) | 0, t2[3] = I[3] + (I[2] << 8 | I[2] >>> 24) + I[1] | 0, t2[4] = I[4] + (I[3] << 16 | I[3] >>> 16) + (I[2] << 16 | I[2] >>> 16) | 0, t2[5] = I[5] + (I[4] << 8 | I[4] >>> 24) + I[3] | 0, t2[6] = I[6] + (I[5] << 16 | I[5] >>> 16) + (I[4] << 16 | I[4] >>> 16) | 0, t2[7] = I[7] + (I[6] << 8 | I[6] >>> 24) + I[5] | 0;
      }
      return F = (M = U).lib, n = F.Base, o = F.WordArray, (M = M.x64 = {}).Word = n.extend({
        init: function(t2, e2) {
          this.high = t2, this.low = e2;
        }
      }), M.WordArray = n.extend({
        init: function(t2, e2) {
          t2 = this.words = t2 || [], this.sigBytes = null != e2 ? e2 : 8 * t2.length;
        },
        toX32: function() {
          for (var t2 = this.words, e2 = t2.length, r2 = [], i2 = 0; i2 < e2; i2++) {
            var n2 = t2[i2];
            r2.push(n2.high), r2.push(n2.low);
          }
          return o.create(r2, this.sigBytes);
        },
        clone: function() {
          for (var t2 = n.clone.call(this), e2 = t2.words = this.words.slice(0), r2 = e2.length, i2 = 0; i2 < r2; i2++)
            e2[i2] = e2[i2].clone();
          return t2;
        }
      }), "function" == typeof ArrayBuffer && (P = U.lib.WordArray, s = P.init, (P.init = function(t2) {
        if ((t2 = (t2 = t2 instanceof ArrayBuffer ? new Uint8Array(t2) : t2) instanceof Int8Array || "undefined" != typeof Uint8ClampedArray && t2 instanceof Uint8ClampedArray || t2 instanceof Int16Array || t2 instanceof Uint16Array || t2 instanceof Int32Array || t2 instanceof Uint32Array || t2 instanceof Float32Array || t2 instanceof Float64Array ? new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength) : t2) instanceof Uint8Array) {
          for (var e2 = t2.byteLength, r2 = [], i2 = 0; i2 < e2; i2++)
            r2[i2 >>> 2] |= t2[i2] << 24 - i2 % 4 * 8;
          s.call(this, r2, e2);
        } else
          s.apply(this, arguments);
      }).prototype = P), (function() {
        var t2 = U, n2 = t2.lib.WordArray, t2 = t2.enc;
        t2.Utf16 = t2.Utf16BE = {
          stringify: function(t3) {
            for (var e2 = t3.words, r2 = t3.sigBytes, i2 = [], n3 = 0; n3 < r2; n3 += 2) {
              var o2 = e2[n3 >>> 2] >>> 16 - n3 % 4 * 8 & 65535;
              i2.push(String.fromCharCode(o2));
            }
            return i2.join("");
          },
          parse: function(t3) {
            for (var e2 = t3.length, r2 = [], i2 = 0; i2 < e2; i2++)
              r2[i2 >>> 1] |= t3.charCodeAt(i2) << 16 - i2 % 2 * 16;
            return n2.create(r2, 2 * e2);
          }
        };
        function s2(t3) {
          return t3 << 8 & 4278255360 | t3 >>> 8 & 16711935;
        }
        t2.Utf16LE = {
          stringify: function(t3) {
            for (var e2 = t3.words, r2 = t3.sigBytes, i2 = [], n3 = 0; n3 < r2; n3 += 2) {
              var o2 = s2(e2[n3 >>> 2] >>> 16 - n3 % 4 * 8 & 65535);
              i2.push(String.fromCharCode(o2));
            }
            return i2.join("");
          },
          parse: function(t3) {
            for (var e2 = t3.length, r2 = [], i2 = 0; i2 < e2; i2++)
              r2[i2 >>> 1] |= s2(t3.charCodeAt(i2) << 16 - i2 % 2 * 16);
            return n2.create(r2, 2 * e2);
          }
        };
      })(), a = (w = U).lib.WordArray, w.enc.Base64 = {
        stringify: function(t2) {
          var e2 = t2.words, r2 = t2.sigBytes, i2 = this._map;
          t2.clamp();
          for (var n2 = [], o2 = 0; o2 < r2; o2 += 3)
            for (var s2 = (e2[o2 >>> 2] >>> 24 - o2 % 4 * 8 & 255) << 16 | (e2[o2 + 1 >>> 2] >>> 24 - (o2 + 1) % 4 * 8 & 255) << 8 | e2[o2 + 2 >>> 2] >>> 24 - (o2 + 2) % 4 * 8 & 255, c2 = 0; c2 < 4 && o2 + 0.75 * c2 < r2; c2++)
              n2.push(i2.charAt(s2 >>> 6 * (3 - c2) & 63));
          var a2 = i2.charAt(64);
          if (a2)
            for (; n2.length % 4; )
              n2.push(a2);
          return n2.join("");
        },
        parse: function(t2) {
          var e2 = t2.length, r2 = this._map;
          if (!(i2 = this._reverseMap))
            for (var i2 = this._reverseMap = [], n2 = 0; n2 < r2.length; n2++)
              i2[r2.charCodeAt(n2)] = n2;
          var o2 = r2.charAt(64);
          return !o2 || -1 !== (o2 = t2.indexOf(o2)) && (e2 = o2), (function(t3, e3, r3) {
            for (var i3 = [], n3 = 0, o3 = 0; o3 < e3; o3++) {
              var s2, c2;
              o3 % 4 && (s2 = r3[t3.charCodeAt(o3 - 1)] << o3 % 4 * 2, c2 = r3[t3.charCodeAt(o3)] >>> 6 - o3 % 4 * 2, c2 = s2 | c2, i3[n3 >>> 2] |= c2 << 24 - n3 % 4 * 8, n3++);
            }
            return a.create(i3, n3);
          })(t2, e2, i2);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
      }, h = (F = U).lib.WordArray, F.enc.Base64url = {
        stringify: function(t2, e2 = true) {
          var r2 = t2.words, i2 = t2.sigBytes, n2 = e2 ? this._safe_map : this._map;
          t2.clamp();
          for (var o2 = [], s2 = 0; s2 < i2; s2 += 3)
            for (var c2 = (r2[s2 >>> 2] >>> 24 - s2 % 4 * 8 & 255) << 16 | (r2[s2 + 1 >>> 2] >>> 24 - (s2 + 1) % 4 * 8 & 255) << 8 | r2[s2 + 2 >>> 2] >>> 24 - (s2 + 2) % 4 * 8 & 255, a2 = 0; a2 < 4 && s2 + 0.75 * a2 < i2; a2++)
              o2.push(n2.charAt(c2 >>> 6 * (3 - a2) & 63));
          var h2 = n2.charAt(64);
          if (h2)
            for (; o2.length % 4; )
              o2.push(h2);
          return o2.join("");
        },
        parse: function(t2, e2 = true) {
          var r2 = t2.length, i2 = e2 ? this._safe_map : this._map;
          if (!(n2 = this._reverseMap))
            for (var n2 = this._reverseMap = [], o2 = 0; o2 < i2.length; o2++)
              n2[i2.charCodeAt(o2)] = o2;
          e2 = i2.charAt(64);
          return !e2 || -1 !== (e2 = t2.indexOf(e2)) && (r2 = e2), (function(t3, e3, r3) {
            for (var i3 = [], n3 = 0, o3 = 0; o3 < e3; o3++) {
              var s2, c2;
              o3 % 4 && (s2 = r3[t3.charCodeAt(o3 - 1)] << o3 % 4 * 2, c2 = r3[t3.charCodeAt(o3)] >>> 6 - o3 % 4 * 2, c2 = s2 | c2, i3[n3 >>> 2] |= c2 << 24 - n3 % 4 * 8, n3++);
            }
            return h.create(i3, n3);
          })(t2, r2, n2);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
      }, (function(a2) {
        var t2 = U, e2 = t2.lib, r2 = e2.WordArray, i2 = e2.Hasher, e2 = t2.algo, A2 = [];
        !(function() {
          for (var t3 = 0; t3 < 64; t3++)
            A2[t3] = 4294967296 * a2.abs(a2.sin(t3 + 1)) | 0;
        })();
        e2 = e2.MD5 = i2.extend({
          _doReset: function() {
            this._hash = new r2.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(t3, e3) {
            for (var r3 = 0; r3 < 16; r3++) {
              var i3 = e3 + r3, n2 = t3[i3];
              t3[i3] = 16711935 & (n2 << 8 | n2 >>> 24) | 4278255360 & (n2 << 24 | n2 >>> 8);
            }
            var o2 = this._hash.words, s2 = t3[e3 + 0], c2 = t3[e3 + 1], a3 = t3[e3 + 2], h2 = t3[e3 + 3], l2 = t3[e3 + 4], f2 = t3[e3 + 5], d2 = t3[e3 + 6], u2 = t3[e3 + 7], p2 = t3[e3 + 8], _2 = t3[e3 + 9], y2 = t3[e3 + 10], v2 = t3[e3 + 11], g2 = t3[e3 + 12], B2 = t3[e3 + 13], w2 = t3[e3 + 14], k2 = t3[e3 + 15], m2 = H2(m2 = o2[0], b2 = o2[1], x2 = o2[2], S2 = o2[3], s2, 7, A2[0]), S2 = H2(S2, m2, b2, x2, c2, 12, A2[1]), x2 = H2(x2, S2, m2, b2, a3, 17, A2[2]), b2 = H2(b2, x2, S2, m2, h2, 22, A2[3]);
            m2 = H2(m2, b2, x2, S2, l2, 7, A2[4]), S2 = H2(S2, m2, b2, x2, f2, 12, A2[5]), x2 = H2(x2, S2, m2, b2, d2, 17, A2[6]), b2 = H2(b2, x2, S2, m2, u2, 22, A2[7]), m2 = H2(m2, b2, x2, S2, p2, 7, A2[8]), S2 = H2(S2, m2, b2, x2, _2, 12, A2[9]), x2 = H2(x2, S2, m2, b2, y2, 17, A2[10]), b2 = H2(b2, x2, S2, m2, v2, 22, A2[11]), m2 = H2(m2, b2, x2, S2, g2, 7, A2[12]), S2 = H2(S2, m2, b2, x2, B2, 12, A2[13]), x2 = H2(x2, S2, m2, b2, w2, 17, A2[14]), m2 = z2(m2, b2 = H2(b2, x2, S2, m2, k2, 22, A2[15]), x2, S2, c2, 5, A2[16]), S2 = z2(S2, m2, b2, x2, d2, 9, A2[17]), x2 = z2(x2, S2, m2, b2, v2, 14, A2[18]), b2 = z2(b2, x2, S2, m2, s2, 20, A2[19]), m2 = z2(m2, b2, x2, S2, f2, 5, A2[20]), S2 = z2(S2, m2, b2, x2, y2, 9, A2[21]), x2 = z2(x2, S2, m2, b2, k2, 14, A2[22]), b2 = z2(b2, x2, S2, m2, l2, 20, A2[23]), m2 = z2(m2, b2, x2, S2, _2, 5, A2[24]), S2 = z2(S2, m2, b2, x2, w2, 9, A2[25]), x2 = z2(x2, S2, m2, b2, h2, 14, A2[26]), b2 = z2(b2, x2, S2, m2, p2, 20, A2[27]), m2 = z2(m2, b2, x2, S2, B2, 5, A2[28]), S2 = z2(S2, m2, b2, x2, a3, 9, A2[29]), x2 = z2(x2, S2, m2, b2, u2, 14, A2[30]), m2 = C2(m2, b2 = z2(b2, x2, S2, m2, g2, 20, A2[31]), x2, S2, f2, 4, A2[32]), S2 = C2(S2, m2, b2, x2, p2, 11, A2[33]), x2 = C2(x2, S2, m2, b2, v2, 16, A2[34]), b2 = C2(b2, x2, S2, m2, w2, 23, A2[35]), m2 = C2(m2, b2, x2, S2, c2, 4, A2[36]), S2 = C2(S2, m2, b2, x2, l2, 11, A2[37]), x2 = C2(x2, S2, m2, b2, u2, 16, A2[38]), b2 = C2(b2, x2, S2, m2, y2, 23, A2[39]), m2 = C2(m2, b2, x2, S2, B2, 4, A2[40]), S2 = C2(S2, m2, b2, x2, s2, 11, A2[41]), x2 = C2(x2, S2, m2, b2, h2, 16, A2[42]), b2 = C2(b2, x2, S2, m2, d2, 23, A2[43]), m2 = C2(m2, b2, x2, S2, _2, 4, A2[44]), S2 = C2(S2, m2, b2, x2, g2, 11, A2[45]), x2 = C2(x2, S2, m2, b2, k2, 16, A2[46]), m2 = D2(m2, b2 = C2(b2, x2, S2, m2, a3, 23, A2[47]), x2, S2, s2, 6, A2[48]), S2 = D2(S2, m2, b2, x2, u2, 10, A2[49]), x2 = D2(x2, S2, m2, b2, w2, 15, A2[50]), b2 = D2(b2, x2, S2, m2, f2, 21, A2[51]), m2 = D2(m2, b2, x2, S2, g2, 6, A2[52]), S2 = D2(S2, m2, b2, x2, h2, 10, A2[53]), x2 = D2(x2, S2, m2, b2, y2, 15, A2[54]), b2 = D2(b2, x2, S2, m2, c2, 21, A2[55]), m2 = D2(m2, b2, x2, S2, p2, 6, A2[56]), S2 = D2(S2, m2, b2, x2, k2, 10, A2[57]), x2 = D2(x2, S2, m2, b2, d2, 15, A2[58]), b2 = D2(b2, x2, S2, m2, B2, 21, A2[59]), m2 = D2(m2, b2, x2, S2, l2, 6, A2[60]), S2 = D2(S2, m2, b2, x2, v2, 10, A2[61]), x2 = D2(x2, S2, m2, b2, a3, 15, A2[62]), b2 = D2(b2, x2, S2, m2, _2, 21, A2[63]), o2[0] = o2[0] + m2 | 0, o2[1] = o2[1] + b2 | 0, o2[2] = o2[2] + x2 | 0, o2[3] = o2[3] + S2 | 0;
          },
          _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            e3[i3 >>> 5] |= 128 << 24 - i3 % 32;
            var n2 = a2.floor(r3 / 4294967296), r3 = r3;
            e3[15 + (64 + i3 >>> 9 << 4)] = 16711935 & (n2 << 8 | n2 >>> 24) | 4278255360 & (n2 << 24 | n2 >>> 8), e3[14 + (64 + i3 >>> 9 << 4)] = 16711935 & (r3 << 8 | r3 >>> 24) | 4278255360 & (r3 << 24 | r3 >>> 8), t3.sigBytes = 4 * (e3.length + 1), this._process();
            for (var e3 = this._hash, o2 = e3.words, s2 = 0; s2 < 4; s2++) {
              var c2 = o2[s2];
              o2[s2] = 16711935 & (c2 << 8 | c2 >>> 24) | 4278255360 & (c2 << 24 | c2 >>> 8);
            }
            return e3;
          },
          clone: function() {
            var t3 = i2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          }
        });
        function H2(t3, e3, r3, i3, n2, o2, s2) {
          s2 = t3 + (e3 & r3 | ~e3 & i3) + n2 + s2;
          return (s2 << o2 | s2 >>> 32 - o2) + e3;
        }
        function z2(t3, e3, r3, i3, n2, o2, s2) {
          s2 = t3 + (e3 & i3 | r3 & ~i3) + n2 + s2;
          return (s2 << o2 | s2 >>> 32 - o2) + e3;
        }
        function C2(t3, e3, r3, i3, n2, o2, s2) {
          s2 = t3 + (e3 ^ r3 ^ i3) + n2 + s2;
          return (s2 << o2 | s2 >>> 32 - o2) + e3;
        }
        function D2(t3, e3, r3, i3, n2, o2, s2) {
          s2 = t3 + (r3 ^ (e3 | ~i3)) + n2 + s2;
          return (s2 << o2 | s2 >>> 32 - o2) + e3;
        }
        t2.MD5 = i2._createHelper(e2), t2.HmacMD5 = i2._createHmacHelper(e2);
      })(Math), P = (M = U).lib, t = P.WordArray, e = P.Hasher, P = M.algo, l = [], P = P.SHA1 = e.extend({
        _doReset: function() {
          this._hash = new t.init([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]);
        },
        _doProcessBlock: function(t2, e2) {
          for (var r2 = this._hash.words, i2 = r2[0], n2 = r2[1], o2 = r2[2], s2 = r2[3], c2 = r2[4], a2 = 0; a2 < 80; a2++) {
            a2 < 16 ? l[a2] = 0 | t2[e2 + a2] : (h2 = l[a2 - 3] ^ l[a2 - 8] ^ l[a2 - 14] ^ l[a2 - 16], l[a2] = h2 << 1 | h2 >>> 31);
            var h2 = (i2 << 5 | i2 >>> 27) + c2 + l[a2];
            h2 += a2 < 20 ? 1518500249 + (n2 & o2 | ~n2 & s2) : a2 < 40 ? 1859775393 + (n2 ^ o2 ^ s2) : a2 < 60 ? (n2 & o2 | n2 & s2 | o2 & s2) - 1894007588 : (n2 ^ o2 ^ s2) - 899497514, c2 = s2, s2 = o2, o2 = n2 << 30 | n2 >>> 2, n2 = i2, i2 = h2;
          }
          r2[0] = r2[0] + i2 | 0, r2[1] = r2[1] + n2 | 0, r2[2] = r2[2] + o2 | 0, r2[3] = r2[3] + s2 | 0, r2[4] = r2[4] + c2 | 0;
        },
        _doFinalize: function() {
          var t2 = this._data, e2 = t2.words, r2 = 8 * this._nDataBytes, i2 = 8 * t2.sigBytes;
          return e2[i2 >>> 5] |= 128 << 24 - i2 % 32, e2[14 + (64 + i2 >>> 9 << 4)] = Math.floor(r2 / 4294967296), e2[15 + (64 + i2 >>> 9 << 4)] = r2, t2.sigBytes = 4 * e2.length, this._process(), this._hash;
        },
        clone: function() {
          var t2 = e.clone.call(this);
          return t2._hash = this._hash.clone(), t2;
        }
      }), M.SHA1 = e._createHelper(P), M.HmacSHA1 = e._createHmacHelper(P), (function(n2) {
        var t2 = U, e2 = t2.lib, r2 = e2.WordArray, i2 = e2.Hasher, e2 = t2.algo, o2 = [], p2 = [];
        !(function() {
          function t3(t4) {
            return 4294967296 * (t4 - (0 | t4)) | 0;
          }
          for (var e3 = 2, r3 = 0; r3 < 64; )
            !(function(t4) {
              for (var e4 = n2.sqrt(t4), r4 = 2; r4 <= e4; r4++)
                if (!(t4 % r4))
                  return;
              return 1;
            })(e3) || (r3 < 8 && (o2[r3] = t3(n2.pow(e3, 0.5))), p2[r3] = t3(n2.pow(e3, 1 / 3)), r3++), e3++;
        })();
        var _2 = [], e2 = e2.SHA256 = i2.extend({
          _doReset: function() {
            this._hash = new r2.init(o2.slice(0));
          },
          _doProcessBlock: function(t3, e3) {
            for (var r3 = this._hash.words, i3 = r3[0], n3 = r3[1], o3 = r3[2], s2 = r3[3], c2 = r3[4], a2 = r3[5], h2 = r3[6], l2 = r3[7], f2 = 0; f2 < 64; f2++) {
              f2 < 16 ? _2[f2] = 0 | t3[e3 + f2] : (d2 = _2[f2 - 15], u2 = _2[f2 - 2], _2[f2] = ((d2 << 25 | d2 >>> 7) ^ (d2 << 14 | d2 >>> 18) ^ d2 >>> 3) + _2[f2 - 7] + ((u2 << 15 | u2 >>> 17) ^ (u2 << 13 | u2 >>> 19) ^ u2 >>> 10) + _2[f2 - 16]);
              var d2 = i3 & n3 ^ i3 & o3 ^ n3 & o3, u2 = l2 + ((c2 << 26 | c2 >>> 6) ^ (c2 << 21 | c2 >>> 11) ^ (c2 << 7 | c2 >>> 25)) + (c2 & a2 ^ ~c2 & h2) + p2[f2] + _2[f2], l2 = h2, h2 = a2, a2 = c2, c2 = s2 + u2 | 0, s2 = o3, o3 = n3, n3 = i3, i3 = u2 + (((i3 << 30 | i3 >>> 2) ^ (i3 << 19 | i3 >>> 13) ^ (i3 << 10 | i3 >>> 22)) + d2) | 0;
            }
            r3[0] = r3[0] + i3 | 0, r3[1] = r3[1] + n3 | 0, r3[2] = r3[2] + o3 | 0, r3[3] = r3[3] + s2 | 0, r3[4] = r3[4] + c2 | 0, r3[5] = r3[5] + a2 | 0, r3[6] = r3[6] + h2 | 0, r3[7] = r3[7] + l2 | 0;
          },
          _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[14 + (64 + i3 >>> 9 << 4)] = n2.floor(r3 / 4294967296), e3[15 + (64 + i3 >>> 9 << 4)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash;
          },
          clone: function() {
            var t3 = i2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          }
        });
        t2.SHA256 = i2._createHelper(e2), t2.HmacSHA256 = i2._createHmacHelper(e2);
      })(Math), r = (w = U).lib.WordArray, F = w.algo, i = F.SHA256, F = F.SHA224 = i.extend({
        _doReset: function() {
          this._hash = new r.init([
            3238371032,
            914150663,
            812702999,
            4144912697,
            4290775857,
            1750603025,
            1694076839,
            3204075428
          ]);
        },
        _doFinalize: function() {
          var t2 = i._doFinalize.call(this);
          return t2.sigBytes -= 4, t2;
        }
      }), w.SHA224 = i._createHelper(F), w.HmacSHA224 = i._createHmacHelper(F), (function() {
        var t2 = U, e2 = t2.lib.Hasher, r2 = t2.x64, i2 = r2.Word, n2 = r2.WordArray, r2 = t2.algo;
        function o2() {
          return i2.create.apply(i2, arguments);
        }
        var t1 = [
          o2(1116352408, 3609767458),
          o2(1899447441, 602891725),
          o2(3049323471, 3964484399),
          o2(3921009573, 2173295548),
          o2(961987163, 4081628472),
          o2(1508970993, 3053834265),
          o2(2453635748, 2937671579),
          o2(2870763221, 3664609560),
          o2(3624381080, 2734883394),
          o2(310598401, 1164996542),
          o2(607225278, 1323610764),
          o2(1426881987, 3590304994),
          o2(1925078388, 4068182383),
          o2(2162078206, 991336113),
          o2(2614888103, 633803317),
          o2(3248222580, 3479774868),
          o2(3835390401, 2666613458),
          o2(4022224774, 944711139),
          o2(264347078, 2341262773),
          o2(604807628, 2007800933),
          o2(770255983, 1495990901),
          o2(1249150122, 1856431235),
          o2(1555081692, 3175218132),
          o2(1996064986, 2198950837),
          o2(2554220882, 3999719339),
          o2(2821834349, 766784016),
          o2(2952996808, 2566594879),
          o2(3210313671, 3203337956),
          o2(3336571891, 1034457026),
          o2(3584528711, 2466948901),
          o2(113926993, 3758326383),
          o2(338241895, 168717936),
          o2(666307205, 1188179964),
          o2(773529912, 1546045734),
          o2(1294757372, 1522805485),
          o2(1396182291, 2643833823),
          o2(1695183700, 2343527390),
          o2(1986661051, 1014477480),
          o2(2177026350, 1206759142),
          o2(2456956037, 344077627),
          o2(2730485921, 1290863460),
          o2(2820302411, 3158454273),
          o2(3259730800, 3505952657),
          o2(3345764771, 106217008),
          o2(3516065817, 3606008344),
          o2(3600352804, 1432725776),
          o2(4094571909, 1467031594),
          o2(275423344, 851169720),
          o2(430227734, 3100823752),
          o2(506948616, 1363258195),
          o2(659060556, 3750685593),
          o2(883997877, 3785050280),
          o2(958139571, 3318307427),
          o2(1322822218, 3812723403),
          o2(1537002063, 2003034995),
          o2(1747873779, 3602036899),
          o2(1955562222, 1575990012),
          o2(2024104815, 1125592928),
          o2(2227730452, 2716904306),
          o2(2361852424, 442776044),
          o2(2428436474, 593698344),
          o2(2756734187, 3733110249),
          o2(3204031479, 2999351573),
          o2(3329325298, 3815920427),
          o2(3391569614, 3928383900),
          o2(3515267271, 566280711),
          o2(3940187606, 3454069534),
          o2(4118630271, 4000239992),
          o2(116418474, 1914138554),
          o2(174292421, 2731055270),
          o2(289380356, 3203993006),
          o2(460393269, 320620315),
          o2(685471733, 587496836),
          o2(852142971, 1086792851),
          o2(1017036298, 365543100),
          o2(1126000580, 2618297676),
          o2(1288033470, 3409855158),
          o2(1501505948, 4234509866),
          o2(1607167915, 987167468),
          o2(1816402316, 1246189591)
        ], e1 = [];
        !(function() {
          for (var t3 = 0; t3 < 80; t3++)
            e1[t3] = o2();
        })();
        r2 = r2.SHA512 = e2.extend({
          _doReset: function() {
            this._hash = new n2.init([
              new i2.init(1779033703, 4089235720),
              new i2.init(3144134277, 2227873595),
              new i2.init(1013904242, 4271175723),
              new i2.init(2773480762, 1595750129),
              new i2.init(1359893119, 2917565137),
              new i2.init(2600822924, 725511199),
              new i2.init(528734635, 4215389547),
              new i2.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(t3, e3) {
            for (var r3 = this._hash.words, i3 = r3[0], n3 = r3[1], o3 = r3[2], s2 = r3[3], c2 = r3[4], a2 = r3[5], h2 = r3[6], l2 = r3[7], f2 = i3.high, d2 = i3.low, u2 = n3.high, p2 = n3.low, _2 = o3.high, y2 = o3.low, v2 = s2.high, g2 = s2.low, B2 = c2.high, w2 = c2.low, k2 = a2.high, m2 = a2.low, S2 = h2.high, x2 = h2.low, b2 = l2.high, r3 = l2.low, A2 = f2, H2 = d2, z2 = u2, C2 = p2, D2 = _2, E2 = y2, R2 = v2, M2 = g2, F2 = B2, P2 = w2, W2 = k2, O2 = m2, I2 = S2, U2 = x2, K2 = b2, X2 = r3, L2 = 0; L2 < 80; L2++) {
              var j2, T2, N2 = e1[L2];
              L2 < 16 ? (T2 = N2.high = 0 | t3[e3 + 2 * L2], j2 = N2.low = 0 | t3[e3 + 2 * L2 + 1]) : ($ = (q2 = e1[L2 - 15]).high, J = q2.low, G = (Q = e1[L2 - 2]).high, V = Q.low, Z = (Y = e1[L2 - 7]).high, q2 = Y.low, Y = (Q = e1[L2 - 16]).high, T2 = (T2 = (($ >>> 1 | J << 31) ^ ($ >>> 8 | J << 24) ^ $ >>> 7) + Z + ((j2 = (Z = (J >>> 1 | $ << 31) ^ (J >>> 8 | $ << 24) ^ (J >>> 7 | $ << 25)) + q2) >>> 0 < Z >>> 0 ? 1 : 0)) + ((G >>> 19 | V << 13) ^ (G << 3 | V >>> 29) ^ G >>> 6) + ((j2 += J = (V >>> 19 | G << 13) ^ (V << 3 | G >>> 29) ^ (V >>> 6 | G << 26)) >>> 0 < J >>> 0 ? 1 : 0), j2 += $ = Q.low, N2.high = T2 = T2 + Y + (j2 >>> 0 < $ >>> 0 ? 1 : 0), N2.low = j2);
              var q2 = F2 & W2 ^ ~F2 & I2, Z = P2 & O2 ^ ~P2 & U2, V = A2 & z2 ^ A2 & D2 ^ z2 & D2, G = (H2 >>> 28 | A2 << 4) ^ (H2 << 30 | A2 >>> 2) ^ (H2 << 25 | A2 >>> 7), J = t1[L2], Q = J.high, Y = J.low, $ = X2 + ((P2 >>> 14 | F2 << 18) ^ (P2 >>> 18 | F2 << 14) ^ (P2 << 23 | F2 >>> 9)), N2 = K2 + ((F2 >>> 14 | P2 << 18) ^ (F2 >>> 18 | P2 << 14) ^ (F2 << 23 | P2 >>> 9)) + ($ >>> 0 < X2 >>> 0 ? 1 : 0), J = G + (H2 & C2 ^ H2 & E2 ^ C2 & E2), K2 = I2, X2 = U2, I2 = W2, U2 = O2, W2 = F2, O2 = P2, F2 = R2 + (N2 = (N2 = (N2 = N2 + q2 + (($ = $ + Z) >>> 0 < Z >>> 0 ? 1 : 0)) + Q + (($ = $ + Y) >>> 0 < Y >>> 0 ? 1 : 0)) + T2 + (($ = $ + j2) >>> 0 < j2 >>> 0 ? 1 : 0)) + ((P2 = M2 + $ | 0) >>> 0 < M2 >>> 0 ? 1 : 0) | 0, R2 = D2, M2 = E2, D2 = z2, E2 = C2, z2 = A2, C2 = H2, A2 = N2 + (((A2 >>> 28 | H2 << 4) ^ (A2 << 30 | H2 >>> 2) ^ (A2 << 25 | H2 >>> 7)) + V + (J >>> 0 < G >>> 0 ? 1 : 0)) + ((H2 = $ + J | 0) >>> 0 < $ >>> 0 ? 1 : 0) | 0;
            }
            d2 = i3.low = d2 + H2, i3.high = f2 + A2 + (d2 >>> 0 < H2 >>> 0 ? 1 : 0), p2 = n3.low = p2 + C2, n3.high = u2 + z2 + (p2 >>> 0 < C2 >>> 0 ? 1 : 0), y2 = o3.low = y2 + E2, o3.high = _2 + D2 + (y2 >>> 0 < E2 >>> 0 ? 1 : 0), g2 = s2.low = g2 + M2, s2.high = v2 + R2 + (g2 >>> 0 < M2 >>> 0 ? 1 : 0), w2 = c2.low = w2 + P2, c2.high = B2 + F2 + (w2 >>> 0 < P2 >>> 0 ? 1 : 0), m2 = a2.low = m2 + O2, a2.high = k2 + W2 + (m2 >>> 0 < O2 >>> 0 ? 1 : 0), x2 = h2.low = x2 + U2, h2.high = S2 + I2 + (x2 >>> 0 < U2 >>> 0 ? 1 : 0), r3 = l2.low = r3 + X2, l2.high = b2 + K2 + (r3 >>> 0 < X2 >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r3 = 8 * this._nDataBytes, i3 = 8 * t3.sigBytes;
            return e3[i3 >>> 5] |= 128 << 24 - i3 % 32, e3[30 + (128 + i3 >>> 10 << 5)] = Math.floor(r3 / 4294967296), e3[31 + (128 + i3 >>> 10 << 5)] = r3, t3.sigBytes = 4 * e3.length, this._process(), this._hash.toX32();
          },
          clone: function() {
            var t3 = e2.clone.call(this);
            return t3._hash = this._hash.clone(), t3;
          },
          blockSize: 32
        });
        t2.SHA512 = e2._createHelper(r2), t2.HmacSHA512 = e2._createHmacHelper(r2);
      })(), P = (M = U).x64, c = P.Word, f = P.WordArray, P = M.algo, d = P.SHA512, P = P.SHA384 = d.extend({
        _doReset: function() {
          this._hash = new f.init([
            new c.init(3418070365, 3238371032),
            new c.init(1654270250, 914150663),
            new c.init(2438529370, 812702999),
            new c.init(355462360, 4144912697),
            new c.init(1731405415, 4290775857),
            new c.init(2394180231, 1750603025),
            new c.init(3675008525, 1694076839),
            new c.init(1203062813, 3204075428)
          ]);
        },
        _doFinalize: function() {
          var t2 = d._doFinalize.call(this);
          return t2.sigBytes -= 16, t2;
        }
      }), M.SHA384 = d._createHelper(P), M.HmacSHA384 = d._createHmacHelper(P), (function(l2) {
        var t2 = U, e2 = t2.lib, f2 = e2.WordArray, i2 = e2.Hasher, d2 = t2.x64.Word, e2 = t2.algo, A2 = [], H2 = [], z2 = [];
        !(function() {
          for (var t3 = 1, e3 = 0, r2 = 0; r2 < 24; r2++) {
            A2[t3 + 5 * e3] = (r2 + 1) * (r2 + 2) / 2 % 64;
            var i3 = (2 * t3 + 3 * e3) % 5;
            t3 = e3 % 5, e3 = i3;
          }
          for (t3 = 0; t3 < 5; t3++)
            for (e3 = 0; e3 < 5; e3++)
              H2[t3 + 5 * e3] = e3 + (2 * t3 + 3 * e3) % 5 * 5;
          for (var n2 = 1, o2 = 0; o2 < 24; o2++) {
            for (var s2, c2 = 0, a2 = 0, h2 = 0; h2 < 7; h2++)
              1 & n2 && ((s2 = (1 << h2) - 1) < 32 ? a2 ^= 1 << s2 : c2 ^= 1 << s2 - 32), 128 & n2 ? n2 = n2 << 1 ^ 113 : n2 <<= 1;
            z2[o2] = d2.create(c2, a2);
          }
        })();
        var C2 = [];
        !(function() {
          for (var t3 = 0; t3 < 25; t3++)
            C2[t3] = d2.create();
        })();
        e2 = e2.SHA3 = i2.extend({
          cfg: i2.cfg.extend({ outputLength: 512 }),
          _doReset: function() {
            for (var t3 = this._state = [], e3 = 0; e3 < 25; e3++)
              t3[e3] = new d2.init();
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(t3, e3) {
            for (var r2 = this._state, i3 = this.blockSize / 2, n2 = 0; n2 < i3; n2++) {
              var o2 = t3[e3 + 2 * n2], s2 = t3[e3 + 2 * n2 + 1], o2 = 16711935 & (o2 << 8 | o2 >>> 24) | 4278255360 & (o2 << 24 | o2 >>> 8);
              (m2 = r2[n2]).high ^= s2 = 16711935 & (s2 << 8 | s2 >>> 24) | 4278255360 & (s2 << 24 | s2 >>> 8), m2.low ^= o2;
            }
            for (var c2 = 0; c2 < 24; c2++) {
              for (var a2 = 0; a2 < 5; a2++) {
                for (var h2 = 0, l3 = 0, f3 = 0; f3 < 5; f3++)
                  h2 ^= (m2 = r2[a2 + 5 * f3]).high, l3 ^= m2.low;
                var d3 = C2[a2];
                d3.high = h2, d3.low = l3;
              }
              for (a2 = 0; a2 < 5; a2++)
                for (var u2 = C2[(a2 + 4) % 5], p2 = C2[(a2 + 1) % 5], _2 = p2.high, p2 = p2.low, h2 = u2.high ^ (_2 << 1 | p2 >>> 31), l3 = u2.low ^ (p2 << 1 | _2 >>> 31), f3 = 0; f3 < 5; f3++)
                  (m2 = r2[a2 + 5 * f3]).high ^= h2, m2.low ^= l3;
              for (var y2 = 1; y2 < 25; y2++) {
                var v2 = (m2 = r2[y2]).high, g2 = m2.low, B2 = A2[y2];
                l3 = B2 < 32 ? (h2 = v2 << B2 | g2 >>> 32 - B2, g2 << B2 | v2 >>> 32 - B2) : (h2 = g2 << B2 - 32 | v2 >>> 64 - B2, v2 << B2 - 32 | g2 >>> 64 - B2);
                B2 = C2[H2[y2]];
                B2.high = h2, B2.low = l3;
              }
              var w2 = C2[0], k2 = r2[0];
              w2.high = k2.high, w2.low = k2.low;
              for (a2 = 0; a2 < 5; a2++)
                for (f3 = 0; f3 < 5; f3++) {
                  var m2 = r2[y2 = a2 + 5 * f3], S2 = C2[y2], x2 = C2[(a2 + 1) % 5 + 5 * f3], b2 = C2[(a2 + 2) % 5 + 5 * f3];
                  m2.high = S2.high ^ ~x2.high & b2.high, m2.low = S2.low ^ ~x2.low & b2.low;
                }
              m2 = r2[0], k2 = z2[c2];
              m2.high ^= k2.high, m2.low ^= k2.low;
            }
          },
          _doFinalize: function() {
            var t3 = this._data, e3 = t3.words, r2 = (this._nDataBytes, 8 * t3.sigBytes), i3 = 32 * this.blockSize;
            e3[r2 >>> 5] |= 1 << 24 - r2 % 32, e3[(l2.ceil((1 + r2) / i3) * i3 >>> 5) - 1] |= 128, t3.sigBytes = 4 * e3.length, this._process();
            for (var n2 = this._state, e3 = this.cfg.outputLength / 8, o2 = e3 / 8, s2 = [], c2 = 0; c2 < o2; c2++) {
              var a2 = n2[c2], h2 = a2.high, a2 = a2.low, h2 = 16711935 & (h2 << 8 | h2 >>> 24) | 4278255360 & (h2 << 24 | h2 >>> 8);
              s2.push(a2 = 16711935 & (a2 << 8 | a2 >>> 24) | 4278255360 & (a2 << 24 | a2 >>> 8)), s2.push(h2);
            }
            return new f2.init(s2, e3);
          },
          clone: function() {
            for (var t3 = i2.clone.call(this), e3 = t3._state = this._state.slice(0), r2 = 0; r2 < 25; r2++)
              e3[r2] = e3[r2].clone();
            return t3;
          }
        });
        t2.SHA3 = i2._createHelper(e2), t2.HmacSHA3 = i2._createHmacHelper(e2);
      })(Math), Math, F = (w = U).lib, u = F.WordArray, p = F.Hasher, F = w.algo, S = u.create([
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        7,
        4,
        13,
        1,
        10,
        6,
        15,
        3,
        12,
        0,
        9,
        5,
        2,
        14,
        11,
        8,
        3,
        10,
        14,
        4,
        9,
        15,
        8,
        1,
        2,
        7,
        0,
        6,
        13,
        11,
        5,
        12,
        1,
        9,
        11,
        10,
        0,
        8,
        12,
        4,
        13,
        3,
        7,
        15,
        14,
        5,
        6,
        2,
        4,
        0,
        5,
        9,
        7,
        12,
        2,
        10,
        14,
        1,
        3,
        8,
        11,
        6,
        15,
        13
      ]), x = u.create([
        5,
        14,
        7,
        0,
        9,
        2,
        11,
        4,
        13,
        6,
        15,
        8,
        1,
        10,
        3,
        12,
        6,
        11,
        3,
        7,
        0,
        13,
        5,
        10,
        14,
        15,
        8,
        12,
        4,
        9,
        1,
        2,
        15,
        5,
        1,
        3,
        7,
        14,
        6,
        9,
        11,
        8,
        12,
        2,
        10,
        0,
        4,
        13,
        8,
        6,
        4,
        1,
        3,
        11,
        15,
        0,
        5,
        12,
        2,
        13,
        9,
        7,
        10,
        14,
        12,
        15,
        10,
        4,
        1,
        5,
        8,
        7,
        6,
        2,
        13,
        14,
        0,
        3,
        9,
        11
      ]), b = u.create([
        11,
        14,
        15,
        12,
        5,
        8,
        7,
        9,
        11,
        13,
        14,
        15,
        6,
        7,
        9,
        8,
        7,
        6,
        8,
        13,
        11,
        9,
        7,
        15,
        7,
        12,
        15,
        9,
        11,
        7,
        13,
        12,
        11,
        13,
        6,
        7,
        14,
        9,
        13,
        15,
        14,
        8,
        13,
        6,
        5,
        12,
        7,
        5,
        11,
        12,
        14,
        15,
        14,
        15,
        9,
        8,
        9,
        14,
        5,
        6,
        8,
        6,
        5,
        12,
        9,
        15,
        5,
        11,
        6,
        8,
        13,
        12,
        5,
        12,
        13,
        14,
        11,
        8,
        5,
        6
      ]), A = u.create([
        8,
        9,
        9,
        11,
        13,
        15,
        15,
        5,
        7,
        7,
        8,
        11,
        14,
        14,
        12,
        6,
        9,
        13,
        15,
        7,
        12,
        8,
        9,
        11,
        7,
        7,
        12,
        7,
        6,
        15,
        13,
        11,
        9,
        7,
        15,
        11,
        8,
        6,
        6,
        14,
        12,
        13,
        5,
        14,
        13,
        13,
        7,
        5,
        15,
        5,
        8,
        11,
        14,
        14,
        6,
        14,
        6,
        9,
        12,
        9,
        12,
        5,
        15,
        8,
        8,
        5,
        12,
        9,
        12,
        5,
        14,
        6,
        8,
        13,
        6,
        5,
        15,
        13,
        11,
        11
      ]), H = u.create([0, 1518500249, 1859775393, 2400959708, 2840853838]), z = u.create([1352829926, 1548603684, 1836072691, 2053994217, 0]), F = F.RIPEMD160 = p.extend({
        _doReset: function() {
          this._hash = u.create([
            1732584193,
            4023233417,
            2562383102,
            271733878,
            3285377520
          ]);
        },
        _doProcessBlock: function(t2, e2) {
          for (var r2 = 0; r2 < 16; r2++) {
            var i2 = e2 + r2, n2 = t2[i2];
            t2[i2] = 16711935 & (n2 << 8 | n2 >>> 24) | 4278255360 & (n2 << 24 | n2 >>> 8);
          }
          for (var o2, s2, c2, a2, h2, l2, f2 = this._hash.words, d2 = H.words, u2 = z.words, p2 = S.words, _2 = x.words, y2 = b.words, v2 = A.words, g2 = o2 = f2[0], B2 = s2 = f2[1], w2 = c2 = f2[2], k2 = a2 = f2[3], m2 = h2 = f2[4], r2 = 0; r2 < 80; r2 += 1)
            l2 = o2 + t2[e2 + p2[r2]] | 0, l2 += r2 < 16 ? (s2 ^ c2 ^ a2) + d2[0] : r2 < 32 ? K(s2, c2, a2) + d2[1] : r2 < 48 ? ((s2 | ~c2) ^ a2) + d2[2] : r2 < 64 ? X(s2, c2, a2) + d2[3] : (s2 ^ (c2 | ~a2)) + d2[4], l2 = (l2 = L(l2 |= 0, y2[r2])) + h2 | 0, o2 = h2, h2 = a2, a2 = L(c2, 10), c2 = s2, s2 = l2, l2 = g2 + t2[e2 + _2[r2]] | 0, l2 += r2 < 16 ? (B2 ^ (w2 | ~k2)) + u2[0] : r2 < 32 ? X(B2, w2, k2) + u2[1] : r2 < 48 ? ((B2 | ~w2) ^ k2) + u2[2] : r2 < 64 ? K(B2, w2, k2) + u2[3] : (B2 ^ w2 ^ k2) + u2[4], l2 = (l2 = L(l2 |= 0, v2[r2])) + m2 | 0, g2 = m2, m2 = k2, k2 = L(w2, 10), w2 = B2, B2 = l2;
          l2 = f2[1] + c2 + k2 | 0, f2[1] = f2[2] + a2 + m2 | 0, f2[2] = f2[3] + h2 + g2 | 0, f2[3] = f2[4] + o2 + B2 | 0, f2[4] = f2[0] + s2 + w2 | 0, f2[0] = l2;
        },
        _doFinalize: function() {
          var t2 = this._data, e2 = t2.words, r2 = 8 * this._nDataBytes, i2 = 8 * t2.sigBytes;
          e2[i2 >>> 5] |= 128 << 24 - i2 % 32, e2[14 + (64 + i2 >>> 9 << 4)] = 16711935 & (r2 << 8 | r2 >>> 24) | 4278255360 & (r2 << 24 | r2 >>> 8), t2.sigBytes = 4 * (e2.length + 1), this._process();
          for (var e2 = this._hash, n2 = e2.words, o2 = 0; o2 < 5; o2++) {
            var s2 = n2[o2];
            n2[o2] = 16711935 & (s2 << 8 | s2 >>> 24) | 4278255360 & (s2 << 24 | s2 >>> 8);
          }
          return e2;
        },
        clone: function() {
          var t2 = p.clone.call(this);
          return t2._hash = this._hash.clone(), t2;
        }
      }), w.RIPEMD160 = p._createHelper(F), w.HmacRIPEMD160 = p._createHmacHelper(F), P = (M = U).lib.Base, _ = M.enc.Utf8, M.algo.HMAC = P.extend({
        init: function(t2, e2) {
          t2 = this._hasher = new t2.init(), "string" == typeof e2 && (e2 = _.parse(e2));
          var r2 = t2.blockSize, i2 = 4 * r2;
          (e2 = e2.sigBytes > i2 ? t2.finalize(e2) : e2).clamp();
          for (var t2 = this._oKey = e2.clone(), e2 = this._iKey = e2.clone(), n2 = t2.words, o2 = e2.words, s2 = 0; s2 < r2; s2++)
            n2[s2] ^= 1549556828, o2[s2] ^= 909522486;
          t2.sigBytes = e2.sigBytes = i2, this.reset();
        },
        reset: function() {
          var t2 = this._hasher;
          t2.reset(), t2.update(this._iKey);
        },
        update: function(t2) {
          return this._hasher.update(t2), this;
        },
        finalize: function(t2) {
          var e2 = this._hasher, t2 = e2.finalize(t2);
          return e2.reset(), e2.finalize(this._oKey.clone().concat(t2));
        }
      }), F = (w = U).lib, M = F.Base, v = F.WordArray, P = w.algo, F = P.SHA1, g = P.HMAC, y = P.PBKDF2 = M.extend({
        cfg: M.extend({ keySize: 4, hasher: F, iterations: 1 }),
        init: function(t2) {
          this.cfg = this.cfg.extend(t2);
        },
        compute: function(t2, e2) {
          for (var r2 = this.cfg, i2 = g.create(r2.hasher, t2), n2 = v.create(), o2 = v.create([1]), s2 = n2.words, c2 = o2.words, a2 = r2.keySize, h2 = r2.iterations; s2.length < a2; ) {
            var l2 = i2.update(e2).finalize(o2);
            i2.reset();
            for (var f2 = l2.words, d2 = f2.length, u2 = l2, p2 = 1; p2 < h2; p2++) {
              u2 = i2.finalize(u2), i2.reset();
              for (var _2 = u2.words, y2 = 0; y2 < d2; y2++)
                f2[y2] ^= _2[y2];
            }
            n2.concat(l2), c2[0]++;
          }
          return n2.sigBytes = 4 * a2, n2;
        }
      }), w.PBKDF2 = function(t2, e2, r2) {
        return y.create(r2).compute(t2, e2);
      }, M = (P = U).lib, F = M.Base, B = M.WordArray, w = P.algo, M = w.MD5, k = w.EvpKDF = F.extend({
        cfg: F.extend({ keySize: 4, hasher: M, iterations: 1 }),
        init: function(t2) {
          this.cfg = this.cfg.extend(t2);
        },
        compute: function(t2, e2) {
          for (var r2, i2 = this.cfg, n2 = i2.hasher.create(), o2 = B.create(), s2 = o2.words, c2 = i2.keySize, a2 = i2.iterations; s2.length < c2; ) {
            r2 && n2.update(r2), r2 = n2.update(t2).finalize(e2), n2.reset();
            for (var h2 = 1; h2 < a2; h2++)
              r2 = n2.finalize(r2), n2.reset();
            o2.concat(r2);
          }
          return o2.sigBytes = 4 * c2, o2;
        }
      }), P.EvpKDF = function(t2, e2, r2) {
        return k.create(r2).compute(t2, e2);
      }, U.lib.Cipher || (function() {
        var t2 = U, e2 = t2.lib, r2 = e2.Base, s2 = e2.WordArray, i2 = e2.BufferedBlockAlgorithm, n2 = t2.enc, o2 = (n2.Utf8, n2.Base64), c2 = t2.algo.EvpKDF, a2 = e2.Cipher = i2.extend({
          cfg: r2.extend(),
          createEncryptor: function(t3, e3) {
            return this.create(this._ENC_XFORM_MODE, t3, e3);
          },
          createDecryptor: function(t3, e3) {
            return this.create(this._DEC_XFORM_MODE, t3, e3);
          },
          init: function(t3, e3, r3) {
            this.cfg = this.cfg.extend(r3), this._xformMode = t3, this._key = e3, this.reset();
          },
          reset: function() {
            i2.reset.call(this), this._doReset();
          },
          process: function(t3) {
            return this._append(t3), this._process();
          },
          finalize: function(t3) {
            return t3 && this._append(t3), this._doFinalize();
          },
          keySize: 4,
          ivSize: 4,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          _createHelper: function(i3) {
            return {
              encrypt: function(t3, e3, r3) {
                return h2(e3).encrypt(i3, t3, e3, r3);
              },
              decrypt: function(t3, e3, r3) {
                return h2(e3).decrypt(i3, t3, e3, r3);
              }
            };
          }
        });
        function h2(t3) {
          return "string" == typeof t3 ? p2 : u2;
        }
        e2.StreamCipher = a2.extend({
          _doFinalize: function() {
            return this._process(true);
          },
          blockSize: 1
        });
        var l2 = t2.mode = {}, n2 = e2.BlockCipherMode = r2.extend({
          createEncryptor: function(t3, e3) {
            return this.Encryptor.create(t3, e3);
          },
          createDecryptor: function(t3, e3) {
            return this.Decryptor.create(t3, e3);
          },
          init: function(t3, e3) {
            this._cipher = t3, this._iv = e3;
          }
        }), n2 = l2.CBC = ((l2 = n2.extend()).Encryptor = l2.extend({
          processBlock: function(t3, e3) {
            var r3 = this._cipher, i3 = r3.blockSize;
            f2.call(this, t3, e3, i3), r3.encryptBlock(t3, e3), this._prevBlock = t3.slice(e3, e3 + i3);
          }
        }), l2.Decryptor = l2.extend({
          processBlock: function(t3, e3) {
            var r3 = this._cipher, i3 = r3.blockSize, n3 = t3.slice(e3, e3 + i3);
            r3.decryptBlock(t3, e3), f2.call(this, t3, e3, i3), this._prevBlock = n3;
          }
        }), l2);
        function f2(t3, e3, r3) {
          var i3, n3 = this._iv;
          n3 ? (i3 = n3, this._iv = void 0) : i3 = this._prevBlock;
          for (var o3 = 0; o3 < r3; o3++)
            t3[e3 + o3] ^= i3[o3];
        }
        var l2 = (t2.pad = {}).Pkcs7 = {
          pad: function(t3, e3) {
            for (var e3 = 4 * e3, r3 = e3 - t3.sigBytes % e3, i3 = r3 << 24 | r3 << 16 | r3 << 8 | r3, n3 = [], o3 = 0; o3 < r3; o3 += 4)
              n3.push(i3);
            e3 = s2.create(n3, r3);
            t3.concat(e3);
          },
          unpad: function(t3) {
            var e3 = 255 & t3.words[t3.sigBytes - 1 >>> 2];
            t3.sigBytes -= e3;
          }
        }, d2 = (e2.BlockCipher = a2.extend({
          cfg: a2.cfg.extend({ mode: n2, padding: l2 }),
          reset: function() {
            var t3;
            a2.reset.call(this);
            var e3 = this.cfg, r3 = e3.iv, e3 = e3.mode;
            this._xformMode == this._ENC_XFORM_MODE ? t3 = e3.createEncryptor : (t3 = e3.createDecryptor, this._minBufferSize = 1), this._mode && this._mode.__creator == t3 ? this._mode.init(this, r3 && r3.words) : (this._mode = t3.call(e3, this, r3 && r3.words), this._mode.__creator = t3);
          },
          _doProcessBlock: function(t3, e3) {
            this._mode.processBlock(t3, e3);
          },
          _doFinalize: function() {
            var t3, e3 = this.cfg.padding;
            return this._xformMode == this._ENC_XFORM_MODE ? (e3.pad(this._data, this.blockSize), t3 = this._process(true)) : (t3 = this._process(true), e3.unpad(t3)), t3;
          },
          blockSize: 4
        }), e2.CipherParams = r2.extend({
          init: function(t3) {
            this.mixIn(t3);
          },
          toString: function(t3) {
            return (t3 || this.formatter).stringify(this);
          }
        })), l2 = (t2.format = {}).OpenSSL = {
          stringify: function(t3) {
            var e3 = t3.ciphertext, t3 = t3.salt, e3 = t3 ? s2.create([1398893684, 1701076831]).concat(t3).concat(e3) : e3;
            return e3.toString(o2);
          },
          parse: function(t3) {
            var e3, r3 = o2.parse(t3), t3 = r3.words;
            return 1398893684 == t3[0] && 1701076831 == t3[1] && (e3 = s2.create(t3.slice(2, 4)), t3.splice(0, 4), r3.sigBytes -= 16), d2.create({ ciphertext: r3, salt: e3 });
          }
        }, u2 = e2.SerializableCipher = r2.extend({
          cfg: r2.extend({ format: l2 }),
          encrypt: function(t3, e3, r3, i3) {
            i3 = this.cfg.extend(i3);
            var n3 = t3.createEncryptor(r3, i3), e3 = n3.finalize(e3), n3 = n3.cfg;
            return d2.create({
              ciphertext: e3,
              key: r3,
              iv: n3.iv,
              algorithm: t3,
              mode: n3.mode,
              padding: n3.padding,
              blockSize: t3.blockSize,
              formatter: i3.format
            });
          },
          decrypt: function(t3, e3, r3, i3) {
            return i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format), t3.createDecryptor(r3, i3).finalize(e3.ciphertext);
          },
          _parse: function(t3, e3) {
            return "string" == typeof t3 ? e3.parse(t3, this) : t3;
          }
        }), t2 = (t2.kdf = {}).OpenSSL = {
          execute: function(t3, e3, r3, i3) {
            i3 = i3 || s2.random(8);
            t3 = c2.create({ keySize: e3 + r3 }).compute(t3, i3), r3 = s2.create(t3.words.slice(e3), 4 * r3);
            return t3.sigBytes = 4 * e3, d2.create({ key: t3, iv: r3, salt: i3 });
          }
        }, p2 = e2.PasswordBasedCipher = u2.extend({
          cfg: u2.cfg.extend({ kdf: t2 }),
          encrypt: function(t3, e3, r3, i3) {
            r3 = (i3 = this.cfg.extend(i3)).kdf.execute(r3, t3.keySize, t3.ivSize);
            i3.iv = r3.iv;
            i3 = u2.encrypt.call(this, t3, e3, r3.key, i3);
            return i3.mixIn(r3), i3;
          },
          decrypt: function(t3, e3, r3, i3) {
            i3 = this.cfg.extend(i3), e3 = this._parse(e3, i3.format);
            r3 = i3.kdf.execute(r3, t3.keySize, t3.ivSize, e3.salt);
            return i3.iv = r3.iv, u2.decrypt.call(this, t3, e3, r3.key, i3);
          }
        });
      })(), U.mode.CFB = ((F = U.lib.BlockCipherMode.extend()).Encryptor = F.extend({
        processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize;
          j.call(this, t2, e2, i2, r2), this._prevBlock = t2.slice(e2, e2 + i2);
        }
      }), F.Decryptor = F.extend({
        processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize, n2 = t2.slice(e2, e2 + i2);
          j.call(this, t2, e2, i2, r2), this._prevBlock = n2;
        }
      }), F), U.mode.CTR = (M = U.lib.BlockCipherMode.extend(), P = M.Encryptor = M.extend({
        processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize, n2 = this._iv, o2 = this._counter;
          n2 && (o2 = this._counter = n2.slice(0), this._iv = void 0);
          var s2 = o2.slice(0);
          r2.encryptBlock(s2, 0), o2[i2 - 1] = o2[i2 - 1] + 1 | 0;
          for (var c2 = 0; c2 < i2; c2++)
            t2[e2 + c2] ^= s2[c2];
        }
      }), M.Decryptor = P, M), U.mode.CTRGladman = (F = U.lib.BlockCipherMode.extend(), P = F.Encryptor = F.extend({
        processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize, n2 = this._iv, o2 = this._counter;
          n2 && (o2 = this._counter = n2.slice(0), this._iv = void 0), 0 === ((n2 = o2)[0] = T(n2[0])) && (n2[1] = T(n2[1]));
          var s2 = o2.slice(0);
          r2.encryptBlock(s2, 0);
          for (var c2 = 0; c2 < i2; c2++)
            t2[e2 + c2] ^= s2[c2];
        }
      }), F.Decryptor = P, F), U.mode.OFB = (M = U.lib.BlockCipherMode.extend(), P = M.Encryptor = M.extend({
        processBlock: function(t2, e2) {
          var r2 = this._cipher, i2 = r2.blockSize, n2 = this._iv, o2 = this._keystream;
          n2 && (o2 = this._keystream = n2.slice(0), this._iv = void 0), r2.encryptBlock(o2, 0);
          for (var s2 = 0; s2 < i2; s2++)
            t2[e2 + s2] ^= o2[s2];
        }
      }), M.Decryptor = P, M), U.mode.ECB = ((F = U.lib.BlockCipherMode.extend()).Encryptor = F.extend({
        processBlock: function(t2, e2) {
          this._cipher.encryptBlock(t2, e2);
        }
      }), F.Decryptor = F.extend({
        processBlock: function(t2, e2) {
          this._cipher.decryptBlock(t2, e2);
        }
      }), F), U.pad.AnsiX923 = {
        pad: function(t2, e2) {
          var r2 = t2.sigBytes, e2 = 4 * e2, e2 = e2 - r2 % e2, r2 = r2 + e2 - 1;
          t2.clamp(), t2.words[r2 >>> 2] |= e2 << 24 - r2 % 4 * 8, t2.sigBytes += e2;
        },
        unpad: function(t2) {
          var e2 = 255 & t2.words[t2.sigBytes - 1 >>> 2];
          t2.sigBytes -= e2;
        }
      }, U.pad.Iso10126 = {
        pad: function(t2, e2) {
          e2 *= 4, e2 -= t2.sigBytes % e2;
          t2.concat(U.lib.WordArray.random(e2 - 1)).concat(U.lib.WordArray.create([e2 << 24], 1));
        },
        unpad: function(t2) {
          var e2 = 255 & t2.words[t2.sigBytes - 1 >>> 2];
          t2.sigBytes -= e2;
        }
      }, U.pad.Iso97971 = {
        pad: function(t2, e2) {
          t2.concat(U.lib.WordArray.create([2147483648], 1)), U.pad.ZeroPadding.pad(t2, e2);
        },
        unpad: function(t2) {
          U.pad.ZeroPadding.unpad(t2), t2.sigBytes--;
        }
      }, U.pad.ZeroPadding = {
        pad: function(t2, e2) {
          e2 *= 4;
          t2.clamp(), t2.sigBytes += e2 - (t2.sigBytes % e2 || e2);
        },
        unpad: function(t2) {
          for (var e2 = t2.words, r2 = t2.sigBytes - 1, r2 = t2.sigBytes - 1; 0 <= r2; r2--)
            if (e2[r2 >>> 2] >>> 24 - r2 % 4 * 8 & 255) {
              t2.sigBytes = r2 + 1;
              break;
            }
        }
      }, U.pad.NoPadding = { pad: function() {
      }, unpad: function() {
      } }, m = (P = U).lib.CipherParams, C = P.enc.Hex, P.format.Hex = {
        stringify: function(t2) {
          return t2.ciphertext.toString(C);
        },
        parse: function(t2) {
          t2 = C.parse(t2);
          return m.create({ ciphertext: t2 });
        }
      }, (function() {
        var t2 = U, e2 = t2.lib.BlockCipher, r2 = t2.algo, h2 = [], l2 = [], f2 = [], d2 = [], u2 = [], p2 = [], _2 = [], y2 = [], v2 = [], g2 = [];
        !(function() {
          for (var t3 = [], e3 = 0; e3 < 256; e3++)
            t3[e3] = e3 < 128 ? e3 << 1 : e3 << 1 ^ 283;
          for (var r3 = 0, i2 = 0, e3 = 0; e3 < 256; e3++) {
            var n2 = i2 ^ i2 << 1 ^ i2 << 2 ^ i2 << 3 ^ i2 << 4;
            h2[r3] = n2 = n2 >>> 8 ^ 255 & n2 ^ 99;
            var o2 = t3[l2[n2] = r3], s2 = t3[o2], c2 = t3[s2], a2 = 257 * t3[n2] ^ 16843008 * n2;
            f2[r3] = a2 << 24 | a2 >>> 8, d2[r3] = a2 << 16 | a2 >>> 16, u2[r3] = a2 << 8 | a2 >>> 24, p2[r3] = a2, _2[n2] = (a2 = 16843009 * c2 ^ 65537 * s2 ^ 257 * o2 ^ 16843008 * r3) << 24 | a2 >>> 8, y2[n2] = a2 << 16 | a2 >>> 16, v2[n2] = a2 << 8 | a2 >>> 24, g2[n2] = a2, r3 ? (r3 = o2 ^ t3[t3[t3[c2 ^ o2]]], i2 ^= t3[t3[i2]]) : r3 = i2 = 1;
          }
        })();
        var B2 = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], r2 = r2.AES = e2.extend({
          _doReset: function() {
            if (!this._nRounds || this._keyPriorReset !== this._key) {
              for (var t3 = this._keyPriorReset = this._key, e3 = t3.words, r3 = t3.sigBytes / 4, i2 = 4 * (1 + (this._nRounds = 6 + r3)), n2 = this._keySchedule = [], o2 = 0; o2 < i2; o2++)
                o2 < r3 ? n2[o2] = e3[o2] : (a2 = n2[o2 - 1], o2 % r3 ? 6 < r3 && o2 % r3 == 4 && (a2 = h2[a2 >>> 24] << 24 | h2[a2 >>> 16 & 255] << 16 | h2[a2 >>> 8 & 255] << 8 | h2[255 & a2]) : (a2 = h2[(a2 = a2 << 8 | a2 >>> 24) >>> 24] << 24 | h2[a2 >>> 16 & 255] << 16 | h2[a2 >>> 8 & 255] << 8 | h2[255 & a2], a2 ^= B2[o2 / r3 | 0] << 24), n2[o2] = n2[o2 - r3] ^ a2);
              for (var s2 = this._invKeySchedule = [], c2 = 0; c2 < i2; c2++) {
                var a2, o2 = i2 - c2;
                a2 = c2 % 4 ? n2[o2] : n2[o2 - 4], s2[c2] = c2 < 4 || o2 <= 4 ? a2 : _2[h2[a2 >>> 24]] ^ y2[h2[a2 >>> 16 & 255]] ^ v2[h2[a2 >>> 8 & 255]] ^ g2[h2[255 & a2]];
              }
            }
          },
          encryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._keySchedule, f2, d2, u2, p2, h2);
          },
          decryptBlock: function(t3, e3) {
            var r3 = t3[e3 + 1];
            t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3, this._doCryptBlock(t3, e3, this._invKeySchedule, _2, y2, v2, g2, l2);
            r3 = t3[e3 + 1];
            t3[e3 + 1] = t3[e3 + 3], t3[e3 + 3] = r3;
          },
          _doCryptBlock: function(t3, e3, r3, i2, n2, o2, s2, c2) {
            for (var a2 = this._nRounds, h3 = t3[e3] ^ r3[0], l3 = t3[e3 + 1] ^ r3[1], f3 = t3[e3 + 2] ^ r3[2], d3 = t3[e3 + 3] ^ r3[3], u3 = 4, p3 = 1; p3 < a2; p3++)
              var _3 = i2[h3 >>> 24] ^ n2[l3 >>> 16 & 255] ^ o2[f3 >>> 8 & 255] ^ s2[255 & d3] ^ r3[u3++], y3 = i2[l3 >>> 24] ^ n2[f3 >>> 16 & 255] ^ o2[d3 >>> 8 & 255] ^ s2[255 & h3] ^ r3[u3++], v3 = i2[f3 >>> 24] ^ n2[d3 >>> 16 & 255] ^ o2[h3 >>> 8 & 255] ^ s2[255 & l3] ^ r3[u3++], g3 = i2[d3 >>> 24] ^ n2[h3 >>> 16 & 255] ^ o2[l3 >>> 8 & 255] ^ s2[255 & f3] ^ r3[u3++], h3 = _3, l3 = y3, f3 = v3, d3 = g3;
            _3 = (c2[h3 >>> 24] << 24 | c2[l3 >>> 16 & 255] << 16 | c2[f3 >>> 8 & 255] << 8 | c2[255 & d3]) ^ r3[u3++], y3 = (c2[l3 >>> 24] << 24 | c2[f3 >>> 16 & 255] << 16 | c2[d3 >>> 8 & 255] << 8 | c2[255 & h3]) ^ r3[u3++], v3 = (c2[f3 >>> 24] << 24 | c2[d3 >>> 16 & 255] << 16 | c2[h3 >>> 8 & 255] << 8 | c2[255 & l3]) ^ r3[u3++], g3 = (c2[d3 >>> 24] << 24 | c2[h3 >>> 16 & 255] << 16 | c2[l3 >>> 8 & 255] << 8 | c2[255 & f3]) ^ r3[u3++];
            t3[e3] = _3, t3[e3 + 1] = y3, t3[e3 + 2] = v3, t3[e3 + 3] = g3;
          },
          keySize: 8
        });
        t2.AES = e2._createHelper(r2);
      })(), (function() {
        var t2 = U, e2 = t2.lib, i2 = e2.WordArray, r2 = e2.BlockCipher, e2 = t2.algo, h2 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ], l2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ], f2 = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28], d2 = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ], u2 = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ], n2 = e2.DES = r2.extend({
          _doReset: function() {
            for (var t3 = this._key.words, e3 = [], r3 = 0; r3 < 56; r3++) {
              var i3 = h2[r3] - 1;
              e3[r3] = t3[i3 >>> 5] >>> 31 - i3 % 32 & 1;
            }
            for (var n3 = this._subKeys = [], o2 = 0; o2 < 16; o2++) {
              for (var s2 = n3[o2] = [], c2 = f2[o2], r3 = 0; r3 < 24; r3++)
                s2[r3 / 6 | 0] |= e3[(l2[r3] - 1 + c2) % 28] << 31 - r3 % 6, s2[4 + (r3 / 6 | 0)] |= e3[28 + (l2[r3 + 24] - 1 + c2) % 28] << 31 - r3 % 6;
              s2[0] = s2[0] << 1 | s2[0] >>> 31;
              for (r3 = 1; r3 < 7; r3++)
                s2[r3] = s2[r3] >>> 4 * (r3 - 1) + 3;
              s2[7] = s2[7] << 5 | s2[7] >>> 27;
            }
            for (var a2 = this._invSubKeys = [], r3 = 0; r3 < 16; r3++)
              a2[r3] = n3[15 - r3];
          },
          encryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._subKeys);
          },
          decryptBlock: function(t3, e3) {
            this._doCryptBlock(t3, e3, this._invSubKeys);
          },
          _doCryptBlock: function(t3, e3, r3) {
            this._lBlock = t3[e3], this._rBlock = t3[e3 + 1], p2.call(this, 4, 252645135), p2.call(this, 16, 65535), _2.call(this, 2, 858993459), _2.call(this, 8, 16711935), p2.call(this, 1, 1431655765);
            for (var i3 = 0; i3 < 16; i3++) {
              for (var n3 = r3[i3], o2 = this._lBlock, s2 = this._rBlock, c2 = 0, a2 = 0; a2 < 8; a2++)
                c2 |= d2[a2][((s2 ^ n3[a2]) & u2[a2]) >>> 0];
              this._lBlock = s2, this._rBlock = o2 ^ c2;
            }
            var h3 = this._lBlock;
            this._lBlock = this._rBlock, this._rBlock = h3, p2.call(this, 1, 1431655765), _2.call(this, 8, 16711935), _2.call(this, 2, 858993459), p2.call(this, 16, 65535), p2.call(this, 4, 252645135), t3[e3] = this._lBlock, t3[e3 + 1] = this._rBlock;
          },
          keySize: 2,
          ivSize: 2,
          blockSize: 2
        });
        function p2(t3, e3) {
          e3 = (this._lBlock >>> t3 ^ this._rBlock) & e3;
          this._rBlock ^= e3, this._lBlock ^= e3 << t3;
        }
        function _2(t3, e3) {
          e3 = (this._rBlock >>> t3 ^ this._lBlock) & e3;
          this._lBlock ^= e3, this._rBlock ^= e3 << t3;
        }
        t2.DES = r2._createHelper(n2);
        e2 = e2.TripleDES = r2.extend({
          _doReset: function() {
            var t3 = this._key.words;
            if (2 !== t3.length && 4 !== t3.length && t3.length < 6)
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            var e3 = t3.slice(0, 2), r3 = t3.length < 4 ? t3.slice(0, 2) : t3.slice(2, 4), t3 = t3.length < 6 ? t3.slice(0, 2) : t3.slice(4, 6);
            this._des1 = n2.createEncryptor(i2.create(e3)), this._des2 = n2.createEncryptor(i2.create(r3)), this._des3 = n2.createEncryptor(i2.create(t3));
          },
          encryptBlock: function(t3, e3) {
            this._des1.encryptBlock(t3, e3), this._des2.decryptBlock(t3, e3), this._des3.encryptBlock(t3, e3);
          },
          decryptBlock: function(t3, e3) {
            this._des3.decryptBlock(t3, e3), this._des2.encryptBlock(t3, e3), this._des1.decryptBlock(t3, e3);
          },
          keySize: 6,
          ivSize: 2,
          blockSize: 2
        });
        t2.TripleDES = r2._createHelper(e2);
      })(), (function() {
        var t2 = U, e2 = t2.lib.StreamCipher, r2 = t2.algo, i2 = r2.RC4 = e2.extend({
          _doReset: function() {
            for (var t3 = this._key, e3 = t3.words, r3 = t3.sigBytes, i3 = this._S = [], n3 = 0; n3 < 256; n3++)
              i3[n3] = n3;
            for (var n3 = 0, o2 = 0; n3 < 256; n3++) {
              var s2 = n3 % r3, s2 = e3[s2 >>> 2] >>> 24 - s2 % 4 * 8 & 255, o2 = (o2 + i3[n3] + s2) % 256, s2 = i3[n3];
              i3[n3] = i3[o2], i3[o2] = s2;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(t3, e3) {
            t3[e3] ^= n2.call(this);
          },
          keySize: 8,
          ivSize: 0
        });
        function n2() {
          for (var t3 = this._S, e3 = this._i, r3 = this._j, i3 = 0, n3 = 0; n3 < 4; n3++) {
            var r3 = (r3 + t3[e3 = (e3 + 1) % 256]) % 256, o2 = t3[e3];
            t3[e3] = t3[r3], t3[r3] = o2, i3 |= t3[(t3[e3] + t3[r3]) % 256] << 24 - 8 * n3;
          }
          return this._i = e3, this._j = r3, i3;
        }
        t2.RC4 = e2._createHelper(i2);
        r2 = r2.RC4Drop = i2.extend({
          cfg: i2.cfg.extend({ drop: 192 }),
          _doReset: function() {
            i2._doReset.call(this);
            for (var t3 = this.cfg.drop; 0 < t3; t3--)
              n2.call(this);
          }
        });
        t2.RC4Drop = e2._createHelper(r2);
      })(), F = (M = U).lib.StreamCipher, P = M.algo, D = [], E = [], R = [], P = P.Rabbit = F.extend({
        _doReset: function() {
          for (var t2 = this._key.words, e2 = this.cfg.iv, r2 = 0; r2 < 4; r2++)
            t2[r2] = 16711935 & (t2[r2] << 8 | t2[r2] >>> 24) | 4278255360 & (t2[r2] << 24 | t2[r2] >>> 8);
          for (var i2 = this._X = [
            t2[0],
            t2[3] << 16 | t2[2] >>> 16,
            t2[1],
            t2[0] << 16 | t2[3] >>> 16,
            t2[2],
            t2[1] << 16 | t2[0] >>> 16,
            t2[3],
            t2[2] << 16 | t2[1] >>> 16
          ], n2 = this._C = [
            t2[2] << 16 | t2[2] >>> 16,
            4294901760 & t2[0] | 65535 & t2[1],
            t2[3] << 16 | t2[3] >>> 16,
            4294901760 & t2[1] | 65535 & t2[2],
            t2[0] << 16 | t2[0] >>> 16,
            4294901760 & t2[2] | 65535 & t2[3],
            t2[1] << 16 | t2[1] >>> 16,
            4294901760 & t2[3] | 65535 & t2[0]
          ], r2 = this._b = 0; r2 < 4; r2++)
            N.call(this);
          for (r2 = 0; r2 < 8; r2++)
            n2[r2] ^= i2[r2 + 4 & 7];
          if (e2) {
            var o2 = e2.words, s2 = o2[0], c2 = o2[1], e2 = 16711935 & (s2 << 8 | s2 >>> 24) | 4278255360 & (s2 << 24 | s2 >>> 8), o2 = 16711935 & (c2 << 8 | c2 >>> 24) | 4278255360 & (c2 << 24 | c2 >>> 8), s2 = e2 >>> 16 | 4294901760 & o2, c2 = o2 << 16 | 65535 & e2;
            n2[0] ^= e2, n2[1] ^= s2, n2[2] ^= o2, n2[3] ^= c2, n2[4] ^= e2, n2[5] ^= s2, n2[6] ^= o2, n2[7] ^= c2;
            for (r2 = 0; r2 < 4; r2++)
              N.call(this);
          }
        },
        _doProcessBlock: function(t2, e2) {
          var r2 = this._X;
          N.call(this), D[0] = r2[0] ^ r2[5] >>> 16 ^ r2[3] << 16, D[1] = r2[2] ^ r2[7] >>> 16 ^ r2[5] << 16, D[2] = r2[4] ^ r2[1] >>> 16 ^ r2[7] << 16, D[3] = r2[6] ^ r2[3] >>> 16 ^ r2[1] << 16;
          for (var i2 = 0; i2 < 4; i2++)
            D[i2] = 16711935 & (D[i2] << 8 | D[i2] >>> 24) | 4278255360 & (D[i2] << 24 | D[i2] >>> 8), t2[e2 + i2] ^= D[i2];
        },
        blockSize: 4,
        ivSize: 2
      }), M.Rabbit = F._createHelper(P), F = (M = U).lib.StreamCipher, P = M.algo, W = [], O = [], I = [], P = P.RabbitLegacy = F.extend({
        _doReset: function() {
          for (var t2 = this._key.words, e2 = this.cfg.iv, r2 = this._X = [
            t2[0],
            t2[3] << 16 | t2[2] >>> 16,
            t2[1],
            t2[0] << 16 | t2[3] >>> 16,
            t2[2],
            t2[1] << 16 | t2[0] >>> 16,
            t2[3],
            t2[2] << 16 | t2[1] >>> 16
          ], i2 = this._C = [
            t2[2] << 16 | t2[2] >>> 16,
            4294901760 & t2[0] | 65535 & t2[1],
            t2[3] << 16 | t2[3] >>> 16,
            4294901760 & t2[1] | 65535 & t2[2],
            t2[0] << 16 | t2[0] >>> 16,
            4294901760 & t2[2] | 65535 & t2[3],
            t2[1] << 16 | t2[1] >>> 16,
            4294901760 & t2[3] | 65535 & t2[0]
          ], n2 = this._b = 0; n2 < 4; n2++)
            q.call(this);
          for (n2 = 0; n2 < 8; n2++)
            i2[n2] ^= r2[n2 + 4 & 7];
          if (e2) {
            var o2 = e2.words, s2 = o2[0], t2 = o2[1], e2 = 16711935 & (s2 << 8 | s2 >>> 24) | 4278255360 & (s2 << 24 | s2 >>> 8), o2 = 16711935 & (t2 << 8 | t2 >>> 24) | 4278255360 & (t2 << 24 | t2 >>> 8), s2 = e2 >>> 16 | 4294901760 & o2, t2 = o2 << 16 | 65535 & e2;
            i2[0] ^= e2, i2[1] ^= s2, i2[2] ^= o2, i2[3] ^= t2, i2[4] ^= e2, i2[5] ^= s2, i2[6] ^= o2, i2[7] ^= t2;
            for (n2 = 0; n2 < 4; n2++)
              q.call(this);
          }
        },
        _doProcessBlock: function(t2, e2) {
          var r2 = this._X;
          q.call(this), W[0] = r2[0] ^ r2[5] >>> 16 ^ r2[3] << 16, W[1] = r2[2] ^ r2[7] >>> 16 ^ r2[5] << 16, W[2] = r2[4] ^ r2[1] >>> 16 ^ r2[7] << 16, W[3] = r2[6] ^ r2[3] >>> 16 ^ r2[1] << 16;
          for (var i2 = 0; i2 < 4; i2++)
            W[i2] = 16711935 & (W[i2] << 8 | W[i2] >>> 24) | 4278255360 & (W[i2] << 24 | W[i2] >>> 8), t2[e2 + i2] ^= W[i2];
        },
        blockSize: 4,
        ivSize: 2
      }), M.RabbitLegacy = F._createHelper(P), U;
    });
  }
});

// node_modules/pdf-lib-plus-encrypt/es/utils/base64.js
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var lookup = new Uint8Array(256);
for (let i = 0; i < chars.length; i++) {
  lookup[chars.charCodeAt(i)] = i;
}
var encodeToBase64 = (bytes) => {
  let base64 = "";
  const len = bytes.length;
  for (let i = 0; i < len; i += 3) {
    base64 += chars[bytes[i] >> 2];
    base64 += chars[(bytes[i] & 3) << 4 | bytes[i + 1] >> 4];
    base64 += chars[(bytes[i + 1] & 15) << 2 | bytes[i + 2] >> 6];
    base64 += chars[bytes[i + 2] & 63];
  }
  if (len % 3 === 2) {
    base64 = base64.substring(0, base64.length - 1) + "=";
  } else if (len % 3 === 1) {
    base64 = base64.substring(0, base64.length - 2) + "==";
  }
  return base64;
};
var decodeFromBase64 = (base64) => {
  let bufferLength = base64.length * 0.75;
  const len = base64.length;
  let i;
  let p = 0;
  let encoded1;
  let encoded2;
  let encoded3;
  let encoded4;
  if (base64[base64.length - 1] === "=") {
    bufferLength--;
    if (base64[base64.length - 2] === "=") {
      bufferLength--;
    }
  }
  const bytes = new Uint8Array(bufferLength);
  for (i = 0; i < len; i += 4) {
    encoded1 = lookup[base64.charCodeAt(i)];
    encoded2 = lookup[base64.charCodeAt(i + 1)];
    encoded3 = lookup[base64.charCodeAt(i + 2)];
    encoded4 = lookup[base64.charCodeAt(i + 3)];
    bytes[p++] = encoded1 << 2 | encoded2 >> 4;
    bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
    bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
  }
  return bytes;
};
var DATA_URI_PREFIX_REGEX = /^(data)?:?([\w\/\+]+)?;?(charset=[\w-]+|base64)?.*,/i;
var decodeFromBase64DataUri = (dataUri) => {
  const trimmedUri = dataUri.trim();
  const prefix = trimmedUri.substring(0, 100);
  const res = prefix.match(DATA_URI_PREFIX_REGEX);
  if (!res)
    return decodeFromBase64(trimmedUri);
  const [fullMatch] = res;
  const data = trimmedUri.substring(fullMatch.length);
  return decodeFromBase64(data);
};

// node_modules/pdf-lib-plus-encrypt/es/utils/strings.js
var toCharCode = (character) => character.charCodeAt(0);
var toCodePoint = (character) => character.codePointAt(0);
var toHexStringOfMinLength = (num, minLength) => padStart(num.toString(16), minLength, "0").toUpperCase();
var toHexString = (num) => toHexStringOfMinLength(num, 2);
var charFromCode = (code) => String.fromCharCode(code);
var charFromHexCode = (hex) => charFromCode(parseInt(hex, 16));
var padStart = (value, length, padChar) => {
  let padding = "";
  for (let idx = 0, len = length - value.length; idx < len; idx++) {
    padding += padChar;
  }
  return padding + value;
};
var copyStringIntoBuffer = (str, buffer, offset) => {
  const length = str.length;
  for (let idx = 0; idx < length; idx++) {
    buffer[offset++] = str.charCodeAt(idx);
  }
  return length;
};
var addRandomSuffix = (prefix, suffixLength = 4) => `${prefix}-${Math.floor(Math.random() * Math.pow(10, suffixLength))}`;
var escapeRegExp = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
var cleanText = (text) => text.replace(/\t|\u0085|\u2028|\u2029/g, "    ").replace(/[\b\v]/g, "");
var escapedNewlineChars = ["\\n", "\\f", "\\r", "\\u000B"];
var newlineChars = ["\n", "\f", "\r", "\v"];
var isNewlineChar = (text) => /^[\n\f\r\u000B]$/.test(text);
var lineSplit = (text) => text.split(/[\n\f\r\u000B]/);
var mergeLines = (text) => text.replace(/[\n\f\r\u000B]/g, " ");
var charAtIndex = (text, index) => {
  const cuFirst = text.charCodeAt(index);
  let cuSecond;
  const nextIndex = index + 1;
  let length = 1;
  if (
    // Check if it's the start of a surrogate pair.
    cuFirst >= 55296 && cuFirst <= 56319 && // high surrogate
    text.length > nextIndex
  ) {
    cuSecond = text.charCodeAt(nextIndex);
    if (cuSecond >= 56320 && cuSecond <= 57343)
      length = 2;
  }
  return [text.slice(index, index + length), length];
};
var charSplit = (text) => {
  const chars2 = [];
  for (let idx = 0, len = text.length; idx < len; ) {
    const [c, cLen] = charAtIndex(text, idx);
    chars2.push(c);
    idx += cLen;
  }
  return chars2;
};
var buildWordBreakRegex = (wordBreaks) => {
  const newlineCharUnion = escapedNewlineChars.join("|");
  const escapedRules = ["$"];
  for (let idx = 0, len = wordBreaks.length; idx < len; idx++) {
    const wordBreak = wordBreaks[idx];
    if (isNewlineChar(wordBreak)) {
      throw new TypeError(`\`wordBreak\` must not include ${newlineCharUnion}`);
    }
    escapedRules.push(wordBreak === "" ? "." : escapeRegExp(wordBreak));
  }
  const breakRules = escapedRules.join("|");
  return new RegExp(`(${newlineCharUnion})|((.*?)(${breakRules}))`, "gm");
};
var breakTextIntoLines = (text, wordBreaks, maxWidth, computeWidthOfText) => {
  const regex = buildWordBreakRegex(wordBreaks);
  const words = cleanText(text).match(regex);
  let currLine = "";
  let currWidth = 0;
  const lines = [];
  const pushCurrLine = () => {
    if (currLine !== "")
      lines.push(currLine);
    currLine = "";
    currWidth = 0;
  };
  for (let idx = 0, len = words.length; idx < len; idx++) {
    const word = words[idx];
    if (isNewlineChar(word)) {
      pushCurrLine();
    } else {
      const width = computeWidthOfText(word);
      if (currWidth + width > maxWidth)
        pushCurrLine();
      currLine += word;
      currWidth += width;
    }
  }
  pushCurrLine();
  return lines;
};
var dateRegex = /^D:(\d\d\d\d)(\d\d)?(\d\d)?(\d\d)?(\d\d)?(\d\d)?([+\-Z])?(\d\d)?'?(\d\d)?'?$/;
var parseDate = (dateStr) => {
  const match = dateStr.match(dateRegex);
  if (!match)
    return void 0;
  const [, year, month = "01", day = "01", hours = "00", mins = "00", secs = "00", offsetSign = "Z", offsetHours = "00", offsetMins = "00"] = match;
  const tzOffset = offsetSign === "Z" ? "Z" : `${offsetSign}${offsetHours}:${offsetMins}`;
  const date = /* @__PURE__ */ new Date(`${year}-${month}-${day}T${hours}:${mins}:${secs}${tzOffset}`);
  return date;
};
var findLastMatch = (value, regex) => {
  var _a;
  let position = 0;
  let lastMatch;
  while (position < value.length) {
    const match = value.substring(position).match(regex);
    if (!match)
      return { match: lastMatch, pos: position };
    lastMatch = match;
    position += ((_a = match.index) !== null && _a !== void 0 ? _a : 0) + match[0].length;
  }
  return { match: lastMatch, pos: position };
};

// node_modules/pdf-lib-plus-encrypt/es/utils/arrays.js
var last = (array) => array[array.length - 1];
var typedArrayFor = (value) => {
  if (value instanceof Uint8Array)
    return value;
  const length = value.length;
  const typedArray = new Uint8Array(length);
  for (let idx = 0; idx < length; idx++) {
    typedArray[idx] = value.charCodeAt(idx);
  }
  return typedArray;
};
var mergeIntoTypedArray = (...arrays) => {
  const arrayCount = arrays.length;
  const typedArrays = [];
  for (let idx = 0; idx < arrayCount; idx++) {
    const element = arrays[idx];
    typedArrays[idx] = element instanceof Uint8Array ? element : typedArrayFor(element);
  }
  let totalSize = 0;
  for (let idx = 0; idx < arrayCount; idx++) {
    totalSize += arrays[idx].length;
  }
  const merged = new Uint8Array(totalSize);
  let offset = 0;
  for (let arrIdx = 0; arrIdx < arrayCount; arrIdx++) {
    const arr = typedArrays[arrIdx];
    for (let byteIdx = 0, arrLen = arr.length; byteIdx < arrLen; byteIdx++) {
      merged[offset++] = arr[byteIdx];
    }
  }
  return merged;
};
var mergeUint8Arrays = (arrays) => {
  let totalSize = 0;
  for (let idx = 0, len = arrays.length; idx < len; idx++) {
    totalSize += arrays[idx].length;
  }
  const mergedBuffer = new Uint8Array(totalSize);
  let offset = 0;
  for (let idx = 0, len = arrays.length; idx < len; idx++) {
    const array = arrays[idx];
    mergedBuffer.set(array, offset);
    offset += array.length;
  }
  return mergedBuffer;
};
var arrayAsString = (array) => {
  let str = "";
  for (let idx = 0, len = array.length; idx < len; idx++) {
    str += charFromCode(array[idx]);
  }
  return str;
};
var byAscendingId = (a, b) => a.id - b.id;
var sortedUniq = (array, indexer) => {
  const uniq = [];
  for (let idx = 0, len = array.length; idx < len; idx++) {
    const curr = array[idx];
    const prev = array[idx - 1];
    if (idx === 0 || indexer(curr) !== indexer(prev)) {
      uniq.push(curr);
    }
  }
  return uniq;
};
var reverseArray = (array) => {
  const arrayLen = array.length;
  for (let idx = 0, len = Math.floor(arrayLen / 2); idx < len; idx++) {
    const leftIdx = idx;
    const rightIdx = arrayLen - idx - 1;
    const temp = array[idx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = temp;
  }
  return array;
};
var sum = (array) => {
  let total = 0;
  for (let idx = 0, len = array.length; idx < len; idx++) {
    total += array[idx];
  }
  return total;
};
var range = (start, end) => {
  const arr = new Array(end - start);
  for (let idx = 0, len = arr.length; idx < len; idx++) {
    arr[idx] = start + idx;
  }
  return arr;
};
var pluckIndices = (arr, indices) => {
  const plucked = new Array(indices.length);
  for (let idx = 0, len = indices.length; idx < len; idx++) {
    plucked[idx] = arr[indices[idx]];
  }
  return plucked;
};
var canBeConvertedToUint8Array = (input) => input instanceof Uint8Array || input instanceof ArrayBuffer || typeof input === "string";
var toUint8Array = (input) => {
  if (typeof input === "string") {
    return decodeFromBase64DataUri(input);
  } else if (input instanceof ArrayBuffer) {
    return new Uint8Array(input);
  } else if (input instanceof Uint8Array) {
    return input;
  } else {
    throw new TypeError("`input` must be one of `string | ArrayBuffer | Uint8Array`");
  }
};
var byteToHex = [];
for (let n = 0; n <= 255; ++n) {
  const hexOctet = n.toString(16).padStart(2, "0");
  byteToHex.push(hexOctet);
}
var Uint8ArrToHex = (arrayBuffer) => {
  const buff = new Uint8Array(arrayBuffer);
  const hexOctets = new Array(buff.length);
  for (let i = 0; i < buff.length; ++i)
    hexOctets[i] = byteToHex[buff[i]];
  return hexOctets.join("");
};

// node_modules/pdf-lib-plus-encrypt/es/utils/async.js
var waitForTick = () => new Promise((resolve) => {
  setTimeout(() => resolve(), 0);
});

// node_modules/pdf-lib-plus-encrypt/es/utils/unicode.js
var utf8Encode = (input, byteOrderMark = true) => {
  const encoded = [];
  if (byteOrderMark)
    encoded.push(239, 187, 191);
  for (let idx = 0, len = input.length; idx < len; ) {
    const codePoint = input.codePointAt(idx);
    if (codePoint < 128) {
      const byte1 = codePoint & 127;
      encoded.push(byte1);
      idx += 1;
    } else if (codePoint < 2048) {
      const byte1 = codePoint >> 6 & 31 | 192;
      const byte2 = codePoint & 63 | 128;
      encoded.push(byte1, byte2);
      idx += 1;
    } else if (codePoint < 65536) {
      const byte1 = codePoint >> 12 & 15 | 224;
      const byte2 = codePoint >> 6 & 63 | 128;
      const byte3 = codePoint & 63 | 128;
      encoded.push(byte1, byte2, byte3);
      idx += 1;
    } else if (codePoint < 1114112) {
      const byte1 = codePoint >> 18 & 7 | 240;
      const byte2 = codePoint >> 12 & 63 | 128;
      const byte3 = codePoint >> 6 & 63 | 128;
      const byte4 = codePoint >> 0 & 63 | 128;
      encoded.push(byte1, byte2, byte3, byte4);
      idx += 2;
    } else
      throw new Error(`Invalid code point: 0x${toHexString(codePoint)}`);
  }
  return new Uint8Array(encoded);
};
var utf16Encode = (input, byteOrderMark = true) => {
  const encoded = [];
  if (byteOrderMark)
    encoded.push(65279);
  for (let idx = 0, len = input.length; idx < len; ) {
    const codePoint = input.codePointAt(idx);
    if (codePoint < 65536) {
      encoded.push(codePoint);
      idx += 1;
    } else if (codePoint < 1114112) {
      encoded.push(highSurrogate(codePoint), lowSurrogate(codePoint));
      idx += 2;
    } else
      throw new Error(`Invalid code point: 0x${toHexString(codePoint)}`);
  }
  return new Uint16Array(encoded);
};
var isWithinBMP = (codePoint) => codePoint >= 0 && codePoint <= 65535;
var hasSurrogates = (codePoint) => codePoint >= 65536 && codePoint <= 1114111;
var highSurrogate = (codePoint) => Math.floor((codePoint - 65536) / 1024) + 55296;
var lowSurrogate = (codePoint) => (codePoint - 65536) % 1024 + 56320;
var ByteOrder;
(function(ByteOrder2) {
  ByteOrder2["BigEndian"] = "BigEndian";
  ByteOrder2["LittleEndian"] = "LittleEndian";
})(ByteOrder || (ByteOrder = {}));
var REPLACEMENT = "�".codePointAt(0);
var utf16Decode = (input, byteOrderMark = true) => {
  if (input.length <= 1)
    return String.fromCodePoint(REPLACEMENT);
  const byteOrder = byteOrderMark ? readBOM(input) : ByteOrder.BigEndian;
  let idx = byteOrderMark ? 2 : 0;
  const codePoints = [];
  while (input.length - idx >= 2) {
    const first = decodeValues(input[idx++], input[idx++], byteOrder);
    if (isHighSurrogate(first)) {
      if (input.length - idx < 2) {
        codePoints.push(REPLACEMENT);
      } else {
        const second = decodeValues(input[idx++], input[idx++], byteOrder);
        if (isLowSurrogate(second)) {
          codePoints.push(first, second);
        } else {
          codePoints.push(REPLACEMENT);
        }
      }
    } else if (isLowSurrogate(first)) {
      idx += 2;
      codePoints.push(REPLACEMENT);
    } else {
      codePoints.push(first);
    }
  }
  if (idx < input.length)
    codePoints.push(REPLACEMENT);
  return String.fromCodePoint(...codePoints);
};
var isHighSurrogate = (codePoint) => codePoint >= 55296 && codePoint <= 56319;
var isLowSurrogate = (codePoint) => codePoint >= 56320 && codePoint <= 57343;
var decodeValues = (first, second, byteOrder) => {
  if (byteOrder === ByteOrder.LittleEndian)
    return second << 8 | first;
  if (byteOrder === ByteOrder.BigEndian)
    return first << 8 | second;
  throw new Error(`Invalid byteOrder: ${byteOrder}`);
};
var readBOM = (bytes) => hasUtf16BigEndianBOM(bytes) ? ByteOrder.BigEndian : hasUtf16LittleEndianBOM(bytes) ? ByteOrder.LittleEndian : ByteOrder.BigEndian;
var hasUtf16BigEndianBOM = (bytes) => bytes[0] === 254 && bytes[1] === 255;
var hasUtf16LittleEndianBOM = (bytes) => bytes[0] === 255 && bytes[1] === 254;
var hasUtf16BOM = (bytes) => hasUtf16BigEndianBOM(bytes) || hasUtf16LittleEndianBOM(bytes);

// node_modules/pdf-lib-plus-encrypt/es/utils/numbers.js
var numberToString = (num) => {
  let numStr = String(num);
  if (Math.abs(num) < 1) {
    const e = parseInt(num.toString().split("e-")[1]);
    if (e) {
      const negative = num < 0;
      if (negative)
        num *= -1;
      num *= Math.pow(10, e - 1);
      numStr = "0." + new Array(e).join("0") + num.toString().substring(2);
      if (negative)
        numStr = "-" + numStr;
    }
  } else {
    let e = parseInt(num.toString().split("+")[1]);
    if (e > 20) {
      e -= 20;
      num /= Math.pow(10, e);
      numStr = num.toString() + new Array(e + 1).join("0");
    }
  }
  return numStr;
};
var sizeInBytes = (n) => Math.ceil(n.toString(2).length / 8);
var bytesFor = (n) => {
  const bytes = new Uint8Array(sizeInBytes(n));
  for (let i = 1; i <= bytes.length; i++) {
    bytes[i - 1] = n >> (bytes.length - i) * 8;
  }
  return bytes;
};

// node_modules/pdf-lib-plus-encrypt/es/utils/errors.js
var error = (msg) => {
  throw new Error(msg);
};

// node_modules/pdf-lib-plus-encrypt/es/utils/objects.js
var values = (obj) => Object.keys(obj).map((k) => obj[k]);
var StandardFontValues = values(FontNames);
var isStandardFont = (input) => StandardFontValues.includes(input);
var rectanglesAreEqual = (a, b) => a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;

// node_modules/pdf-lib-plus-encrypt/es/core/security/PDFSecurity.js
var CryptoJS = __toESM(require_crypto_js());
var PDFSecurity = class _PDFSecurity {
  constructor(document, options = {}) {
    if (!options.ownerPassword && !options.userPassword) {
      throw new Error("None of owner password and user password is defined.");
    }
    this.document = document;
    this._setupEncryption(options);
  }
  /*
    ID file is an array of two byte-string constituing
    a file identifier
  
    Required if Encrypt entry is present in Trailer
    Doesn't really matter what it is as long as it is
    consistently used.
    */
  static generateFileID(info) {
    return wordArrayToBuffer(CryptoJS.MD5(info.toString()));
  }
  static generateRandomWordArray(bytes) {
    return CryptoJS.lib.WordArray.random(bytes);
  }
  static create(document, options = {}) {
    return new _PDFSecurity(document, options);
  }
  /*
  Handle all encryption process and give back
  EncryptionDictionary that is required
  to be plugged into Trailer of the PDF
  */
  _setupEncryption(options) {
    switch (options.pdfVersion) {
      case "1.4":
      case "1.5":
        this.version = 2;
        break;
      case "1.6":
      case "1.7":
        this.version = 4;
        break;
      case "1.7ext3":
        this.version = 5;
        break;
      default:
        this.version = 1;
        break;
    }
    switch (this.version) {
      case 1:
      case 2:
      case 4:
        this.dictionary = this._setupEncryptionV1V2V4(this.version, options);
        break;
      case 5:
        this.dictionary = this._setupEncryptionV5(options);
        break;
    }
  }
  _setupEncryptionV1V2V4(v, options) {
    const encDict = {
      Filter: "Standard"
    };
    let r;
    let permissions;
    switch (v) {
      case 1:
        r = 2;
        this.keyBits = 40;
        permissions = getPermissionsR2(options.permissions);
        break;
      case 2:
        r = 3;
        this.keyBits = 128;
        permissions = getPermissionsR3(options.permissions);
        break;
      case 4:
        r = 4;
        this.keyBits = 128;
        permissions = getPermissionsR3(options.permissions);
        break;
      default:
        throw new Error("Unknown v value");
    }
    const paddedUserPassword = processPasswordR2R3R4(options.userPassword);
    const paddedOwnerPassword = options.ownerPassword ? processPasswordR2R3R4(options.ownerPassword) : paddedUserPassword;
    const ownerPasswordEntry = getOwnerPasswordR2R3R4(r, this.keyBits, paddedUserPassword, paddedOwnerPassword);
    this.encryptionKey = getEncryptionKeyR2R3R4(r, this.keyBits, this.document._id, paddedUserPassword, ownerPasswordEntry, permissions);
    let userPasswordEntry;
    if (r === 2) {
      userPasswordEntry = getUserPasswordR2(this.encryptionKey);
    } else {
      userPasswordEntry = getUserPasswordR3R4(this.document._id, this.encryptionKey);
    }
    encDict.V = v;
    if (v >= 2) {
      encDict.Length = this.keyBits;
    }
    if (v === 4) {
      encDict.CF = {
        StdCF: {
          AuthEvent: "DocOpen",
          CFM: "AESV2",
          Length: this.keyBits / 8
        }
      };
      encDict.StmF = "StdCF";
      encDict.StrF = "StdCF";
    }
    encDict.R = r;
    encDict.O = wordArrayToBuffer(ownerPasswordEntry);
    encDict.U = wordArrayToBuffer(userPasswordEntry);
    encDict.P = permissions;
    return encDict;
  }
  _setupEncryptionV5(options) {
    const encDict = {
      Filter: "Standard"
    };
    this.keyBits = 256;
    const permissions = getPermissionsR3(options.permissions);
    const processedUserPassword = processPasswordR5(options.userPassword);
    const processedOwnerPassword = options.ownerPassword ? processPasswordR5(options.ownerPassword) : processedUserPassword;
    this.encryptionKey = getEncryptionKeyR5(_PDFSecurity.generateRandomWordArray);
    const userPasswordEntry = getUserPasswordR5(processedUserPassword, _PDFSecurity.generateRandomWordArray);
    const userKeySalt = CryptoJS.lib.WordArray.create(userPasswordEntry.words.slice(10, 12), 8);
    const userEncryptionKeyEntry = getUserEncryptionKeyR5(processedUserPassword, userKeySalt, this.encryptionKey);
    const ownerPasswordEntry = getOwnerPasswordR5(processedOwnerPassword, userPasswordEntry, _PDFSecurity.generateRandomWordArray);
    const ownerKeySalt = CryptoJS.lib.WordArray.create(ownerPasswordEntry.words.slice(10, 12), 8);
    const ownerEncryptionKeyEntry = getOwnerEncryptionKeyR5(processedOwnerPassword, ownerKeySalt, userPasswordEntry, this.encryptionKey);
    const permsEntry = getEncryptedPermissionsR5(permissions, this.encryptionKey, _PDFSecurity.generateRandomWordArray);
    encDict.V = 5;
    encDict.Length = this.keyBits;
    encDict.CF = {
      StdCF: {
        AuthEvent: "DocOpen",
        CFM: "AESV3",
        Length: this.keyBits / 8
      }
    };
    encDict.StmF = "StdCF";
    encDict.StrF = "StdCF";
    encDict.R = 5;
    encDict.O = wordArrayToBuffer(ownerPasswordEntry);
    encDict.OE = wordArrayToBuffer(ownerEncryptionKeyEntry);
    encDict.U = wordArrayToBuffer(userPasswordEntry);
    encDict.UE = wordArrayToBuffer(userEncryptionKeyEntry);
    encDict.P = permissions;
    encDict.Perms = wordArrayToBuffer(permsEntry);
    return encDict;
  }
  getEncryptFn(obj, gen) {
    let digest;
    let key;
    if (this.version < 5) {
      digest = this.encryptionKey.clone().concat(CryptoJS.lib.WordArray.create([
        (obj & 255) << 24 | (obj & 65280) << 8 | obj >> 8 & 65280 | gen & 255,
        (gen & 65280) << 16
      ], 5));
      if (this.version === 1 || this.version === 2) {
        key = CryptoJS.MD5(digest);
        key.sigBytes = Math.min(16, this.keyBits / 8 + 5);
        return (buffer) => wordArrayToBuffer(CryptoJS.RC4.encrypt(CryptoJS.lib.WordArray.create(buffer), key).ciphertext);
      }
      if (this.version === 4) {
        key = CryptoJS.MD5(digest.concat(CryptoJS.lib.WordArray.create([1933667412], 4)));
      }
    } else if (this.version === 5) {
      key = this.encryptionKey;
    } else {
      throw new Error("Unknown V value");
    }
    const iv = _PDFSecurity.generateRandomWordArray(16);
    const options = {
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
      iv
    };
    return (buffer) => wordArrayToBuffer(iv.clone().concat(CryptoJS.AES.encrypt(CryptoJS.lib.WordArray.create(buffer), key, options).ciphertext));
  }
};
var getPermissionsR2 = (permissionObject = {}) => {
  let permissions = 4294967232 >> 0;
  if (permissionObject.printing) {
    permissions |= 4;
  }
  if (permissionObject.modifying) {
    permissions |= 8;
  }
  if (permissionObject.copying) {
    permissions |= 16;
  }
  if (permissionObject.annotating) {
    permissions |= 32;
  }
  return permissions;
};
var getPermissionsR3 = (permissionObject = {}) => {
  let permissions = 4294963392 >> 0;
  if (permissionObject.printing === "lowResolution" || permissionObject.printing) {
    permissions |= 4;
  }
  if (permissionObject.printing === "highResolution") {
    permissions |= 2052;
  }
  if (permissionObject.modifying) {
    permissions |= 8;
  }
  if (permissionObject.copying) {
    permissions |= 16;
  }
  if (permissionObject.annotating) {
    permissions |= 32;
  }
  if (permissionObject.fillingForms) {
    permissions |= 256;
  }
  if (permissionObject.contentAccessibility) {
    permissions |= 512;
  }
  if (permissionObject.documentAssembly) {
    permissions |= 1024;
  }
  return permissions;
};
var getUserPasswordR2 = (encryptionKey) => CryptoJS.RC4.encrypt(processPasswordR2R3R4(), encryptionKey).ciphertext;
var getUserPasswordR3R4 = (documentId, encryptionKey) => {
  const key = encryptionKey.clone();
  let cipher = CryptoJS.MD5(processPasswordR2R3R4().concat(CryptoJS.lib.WordArray.create(documentId)));
  for (let i = 0; i < 20; i++) {
    const xorRound = Math.ceil(key.sigBytes / 4);
    for (let j = 0; j < xorRound; j++) {
      key.words[j] = encryptionKey.words[j] ^ (i | i << 8 | i << 16 | i << 24);
    }
    cipher = CryptoJS.RC4.encrypt(cipher, key).ciphertext;
  }
  return cipher.concat(CryptoJS.lib.WordArray.create(null, 16));
};
var getOwnerPasswordR2R3R4 = (r, keyBits, paddedUserPassword, paddedOwnerPassword) => {
  let digest = paddedOwnerPassword;
  let round = r >= 3 ? 51 : 1;
  for (let i = 0; i < round; i++) {
    digest = CryptoJS.MD5(digest);
  }
  const key = digest.clone();
  key.sigBytes = keyBits / 8;
  let cipher = paddedUserPassword;
  round = r >= 3 ? 20 : 1;
  for (let i = 0; i < round; i++) {
    const xorRound = Math.ceil(key.sigBytes / 4);
    for (let j = 0; j < xorRound; j++) {
      key.words[j] = digest.words[j] ^ (i | i << 8 | i << 16 | i << 24);
    }
    cipher = CryptoJS.RC4.encrypt(cipher, key).ciphertext;
  }
  return cipher;
};
var getEncryptionKeyR2R3R4 = (r, keyBits, documentId, paddedUserPassword, ownerPasswordEntry, permissions) => {
  let key = paddedUserPassword.clone().concat(ownerPasswordEntry).concat(CryptoJS.lib.WordArray.create([lsbFirstWord(permissions)], 4)).concat(CryptoJS.lib.WordArray.create(documentId));
  const round = r >= 3 ? 51 : 1;
  for (let i = 0; i < round; i++) {
    key = CryptoJS.MD5(key);
    key.sigBytes = keyBits / 8;
  }
  return key;
};
var getUserPasswordR5 = (processedUserPassword, generateRandomWordArray) => {
  const validationSalt = generateRandomWordArray(8);
  const keySalt = generateRandomWordArray(8);
  return CryptoJS.SHA256(processedUserPassword.clone().concat(validationSalt)).concat(validationSalt).concat(keySalt);
};
var getUserEncryptionKeyR5 = (processedUserPassword, userKeySalt, encryptionKey) => {
  const key = CryptoJS.SHA256(processedUserPassword.clone().concat(userKeySalt));
  const options = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.NoPadding,
    iv: CryptoJS.lib.WordArray.create(null, 16)
  };
  return CryptoJS.AES.encrypt(encryptionKey, key, options).ciphertext;
};
var getOwnerPasswordR5 = (processedOwnerPassword, userPasswordEntry, generateRandomWordArray) => {
  const validationSalt = generateRandomWordArray(8);
  const keySalt = generateRandomWordArray(8);
  return CryptoJS.SHA256(processedOwnerPassword.clone().concat(validationSalt).concat(userPasswordEntry)).concat(validationSalt).concat(keySalt);
};
var getOwnerEncryptionKeyR5 = (processedOwnerPassword, ownerKeySalt, userPasswordEntry, encryptionKey) => {
  const key = CryptoJS.SHA256(processedOwnerPassword.clone().concat(ownerKeySalt).concat(userPasswordEntry));
  const options = {
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.NoPadding,
    iv: CryptoJS.lib.WordArray.create(null, 16)
  };
  return CryptoJS.AES.encrypt(encryptionKey, key, options).ciphertext;
};
var getEncryptionKeyR5 = (generateRandomWordArray) => generateRandomWordArray(32);
var getEncryptedPermissionsR5 = (permissions, encryptionKey, generateRandomWordArray) => {
  const cipher = CryptoJS.lib.WordArray.create([lsbFirstWord(permissions), 4294967295, 1415668834], 12).concat(generateRandomWordArray(4));
  const options = {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.NoPadding
  };
  return CryptoJS.AES.encrypt(cipher, encryptionKey, options).ciphertext;
};
var processPasswordR2R3R4 = (password = "") => {
  const out = new Uint8Array(32);
  const length = password.length;
  let index = 0;
  while (index < length && index < 32) {
    const code = password.charCodeAt(index);
    if (code > 255) {
      throw new Error("Password contains one or more invalid characters.");
    }
    out[index] = code;
    index++;
  }
  while (index < 32) {
    out[index] = PASSWORD_PADDING[index - length];
    index++;
  }
  return CryptoJS.lib.WordArray.create(out);
};
var processPasswordR5 = (password = "") => {
  password = unescape(encodeURIComponent(password.normalize("NFKC")));
  const length = Math.min(127, password.length);
  const out = new Uint8Array(length);
  for (let i = 0; i < length; i++) {
    out[i] = password.charCodeAt(i);
  }
  return CryptoJS.lib.WordArray.create(out);
};
var lsbFirstWord = (data) => (data & 255) << 24 | (data & 65280) << 8 | data >> 8 & 65280 | data >> 24 & 255;
var wordArrayToBuffer = (wordArray) => {
  const byteArray = [];
  for (let i = 0; i < wordArray.sigBytes; i++) {
    byteArray.push(wordArray.words[Math.floor(i / 4)] >> 8 * (3 - i % 4) & 255);
  }
  return Uint8Array.from(byteArray);
};
var PASSWORD_PADDING = [
  40,
  191,
  78,
  94,
  78,
  117,
  138,
  65,
  100,
  0,
  78,
  86,
  255,
  250,
  1,
  8,
  46,
  46,
  0,
  182,
  208,
  104,
  62,
  128,
  47,
  12,
  169,
  254,
  100,
  83,
  105,
  122
];
var PDFSecurity_default = PDFSecurity;

// node_modules/pdf-lib-plus-encrypt/es/utils/validators.js
var backtick = (val) => `\`${val}\``;
var singleQuote = (val) => `'${val}'`;
var formatValue = (value) => {
  const type = typeof value;
  if (type === "string")
    return singleQuote(value);
  else if (type === "undefined")
    return backtick(value);
  else
    return value;
};
var createValueErrorMsg = (value, valueName, values2) => {
  const allowedValues = new Array(values2.length);
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    const v = values2[idx];
    allowedValues[idx] = formatValue(v);
  }
  const joinedValues = allowedValues.join(" or ");
  return `${backtick(valueName)} must be one of ${joinedValues}, but was actually ${formatValue(value)}`;
};
var assertIsOneOf = (value, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  for (let idx = 0, len = allowedValues.length; idx < len; idx++) {
    if (value === allowedValues[idx])
      return;
  }
  throw new TypeError(createValueErrorMsg(value, valueName, allowedValues));
};
var assertIsOneOfOrUndefined = (value, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  assertIsOneOf(value, valueName, allowedValues.concat(void 0));
};
var assertIsSubset = (values2, valueName, allowedValues) => {
  if (!Array.isArray(allowedValues)) {
    allowedValues = values(allowedValues);
  }
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    assertIsOneOf(values2[idx], valueName, allowedValues);
  }
};
var getType = (val) => {
  if (val === null)
    return "null";
  if (val === void 0)
    return "undefined";
  if (typeof val === "string")
    return "string";
  if (isNaN(val))
    return "NaN";
  if (typeof val === "number")
    return "number";
  if (typeof val === "boolean")
    return "boolean";
  if (typeof val === "symbol")
    return "symbol";
  if (typeof val === "bigint")
    return "bigint";
  if (val.constructor && val.constructor.name)
    return val.constructor.name;
  if (val.name)
    return val.name;
  if (val.constructor)
    return String(val.constructor);
  return String(val);
};
var isType = (value, type) => {
  if (type === "null")
    return value === null;
  if (type === "undefined")
    return value === void 0;
  if (type === "string")
    return typeof value === "string";
  if (type === "number")
    return typeof value === "number" && !isNaN(value);
  if (type === "boolean")
    return typeof value === "boolean";
  if (type === "symbol")
    return typeof value === "symbol";
  if (type === "bigint")
    return typeof value === "bigint";
  if (type === Date)
    return value instanceof Date;
  if (type === Array)
    return value instanceof Array;
  if (type === Uint8Array)
    return value instanceof Uint8Array;
  if (type === ArrayBuffer)
    return value instanceof ArrayBuffer;
  if (type === Function)
    return value instanceof Function;
  return value instanceof type[0];
};
var createTypeErrorMsg = (value, valueName, types) => {
  const allowedTypes = new Array(types.length);
  for (let idx = 0, len = types.length; idx < len; idx++) {
    const type = types[idx];
    if (type === "null")
      allowedTypes[idx] = backtick("null");
    if (type === "undefined")
      allowedTypes[idx] = backtick("undefined");
    if (type === "string")
      allowedTypes[idx] = backtick("string");
    else if (type === "number")
      allowedTypes[idx] = backtick("number");
    else if (type === "boolean")
      allowedTypes[idx] = backtick("boolean");
    else if (type === "symbol")
      allowedTypes[idx] = backtick("symbol");
    else if (type === "bigint")
      allowedTypes[idx] = backtick("bigint");
    else if (type === Array)
      allowedTypes[idx] = backtick("Array");
    else if (type === Uint8Array)
      allowedTypes[idx] = backtick("Uint8Array");
    else if (type === ArrayBuffer)
      allowedTypes[idx] = backtick("ArrayBuffer");
    else
      allowedTypes[idx] = backtick(type[1]);
  }
  const joinedTypes = allowedTypes.join(" or ");
  return `${backtick(valueName)} must be of type ${joinedTypes}, but was actually of type ${backtick(getType(value))}`;
};
var assertIs = (value, valueName, types) => {
  for (let idx = 0, len = types.length; idx < len; idx++) {
    if (isType(value, types[idx]))
      return;
  }
  throw new TypeError(createTypeErrorMsg(value, valueName, types));
};
var assertOrUndefined = (value, valueName, types) => {
  assertIs(value, valueName, types.concat("undefined"));
};
var assertEachIs = (values2, valueName, types) => {
  for (let idx = 0, len = values2.length; idx < len; idx++) {
    assertIs(values2[idx], valueName, types);
  }
};
var assertRange = (value, valueName, min, max) => {
  assertIs(value, valueName, ["number"]);
  assertIs(min, "min", ["number"]);
  assertIs(max, "max", ["number"]);
  max = Math.max(min, max);
  if (value < min || value > max) {
    throw new Error(`${backtick(valueName)} must be at least ${min} and at most ${max}, but was actually ${value}`);
  }
};
var assertRangeOrUndefined = (value, valueName, min, max) => {
  assertIs(value, valueName, ["number", "undefined"]);
  if (typeof value === "number")
    assertRange(value, valueName, min, max);
};
var assertMultiple = (value, valueName, multiplier) => {
  assertIs(value, valueName, ["number"]);
  if (value % multiplier !== 0) {
    throw new Error(`${backtick(valueName)} must be a multiple of ${multiplier}, but was actually ${value}`);
  }
};
var assertInteger = (value, valueName) => {
  if (!Number.isInteger(value)) {
    throw new Error(`${backtick(valueName)} must be an integer, but was actually ${value}`);
  }
};
var assertPositive = (value, valueName) => {
  if (![1, 0].includes(Math.sign(value))) {
    throw new Error(`${backtick(valueName)} must be a positive number or 0, but was actually ${value}`);
  }
};
var assertSecurity = (value, valueName) => {
  if (!(value instanceof PDFSecurity_default)) {
    throw new Error(`${backtick(valueName)} must be present and is instance of PDFSecurity`);
  }
};

// node_modules/pdf-lib-plus-encrypt/es/utils/pdfDocEncoding.js
var pdfDocEncodingToUnicode = new Uint16Array(256);
for (let idx = 0; idx < 256; idx++) {
  pdfDocEncodingToUnicode[idx] = idx;
}
pdfDocEncodingToUnicode[22] = toCharCode("");
pdfDocEncodingToUnicode[24] = toCharCode("˘");
pdfDocEncodingToUnicode[25] = toCharCode("ˇ");
pdfDocEncodingToUnicode[26] = toCharCode("ˆ");
pdfDocEncodingToUnicode[27] = toCharCode("˙");
pdfDocEncodingToUnicode[28] = toCharCode("˝");
pdfDocEncodingToUnicode[29] = toCharCode("˛");
pdfDocEncodingToUnicode[30] = toCharCode("˚");
pdfDocEncodingToUnicode[31] = toCharCode("˜");
pdfDocEncodingToUnicode[127] = toCharCode("�");
pdfDocEncodingToUnicode[128] = toCharCode("•");
pdfDocEncodingToUnicode[129] = toCharCode("†");
pdfDocEncodingToUnicode[130] = toCharCode("‡");
pdfDocEncodingToUnicode[131] = toCharCode("…");
pdfDocEncodingToUnicode[132] = toCharCode("—");
pdfDocEncodingToUnicode[133] = toCharCode("–");
pdfDocEncodingToUnicode[134] = toCharCode("ƒ");
pdfDocEncodingToUnicode[135] = toCharCode("⁄");
pdfDocEncodingToUnicode[136] = toCharCode("‹");
pdfDocEncodingToUnicode[137] = toCharCode("›");
pdfDocEncodingToUnicode[138] = toCharCode("−");
pdfDocEncodingToUnicode[139] = toCharCode("‰");
pdfDocEncodingToUnicode[140] = toCharCode("„");
pdfDocEncodingToUnicode[141] = toCharCode("“");
pdfDocEncodingToUnicode[142] = toCharCode("”");
pdfDocEncodingToUnicode[143] = toCharCode("‘");
pdfDocEncodingToUnicode[144] = toCharCode("’");
pdfDocEncodingToUnicode[145] = toCharCode("‚");
pdfDocEncodingToUnicode[146] = toCharCode("™");
pdfDocEncodingToUnicode[147] = toCharCode("ﬁ");
pdfDocEncodingToUnicode[148] = toCharCode("ﬂ");
pdfDocEncodingToUnicode[149] = toCharCode("Ł");
pdfDocEncodingToUnicode[150] = toCharCode("Œ");
pdfDocEncodingToUnicode[151] = toCharCode("Š");
pdfDocEncodingToUnicode[152] = toCharCode("Ÿ");
pdfDocEncodingToUnicode[153] = toCharCode("Ž");
pdfDocEncodingToUnicode[154] = toCharCode("ı");
pdfDocEncodingToUnicode[155] = toCharCode("ł");
pdfDocEncodingToUnicode[156] = toCharCode("œ");
pdfDocEncodingToUnicode[157] = toCharCode("š");
pdfDocEncodingToUnicode[158] = toCharCode("ž");
pdfDocEncodingToUnicode[159] = toCharCode("�");
pdfDocEncodingToUnicode[160] = toCharCode("€");
pdfDocEncodingToUnicode[173] = toCharCode("�");
var pdfDocEncodingDecode = (bytes) => {
  const codePoints = new Array(bytes.length);
  for (let idx = 0, len = bytes.length; idx < len; idx++) {
    codePoints[idx] = pdfDocEncodingToUnicode[bytes[idx]];
  }
  return String.fromCodePoint(...codePoints);
};

// node_modules/pdf-lib-plus-encrypt/es/utils/Cache.js
var Cache = class {
  constructor(populate) {
    this.populate = populate;
    this.value = void 0;
  }
  getValue() {
    return this.value;
  }
  access() {
    if (!this.value)
      this.value = this.populate();
    return this.value;
  }
  invalidate() {
    this.value = void 0;
  }
};
Cache.populatedBy = (populate) => new Cache(populate);
var Cache_default = Cache;

// node_modules/pdf-lib-plus-encrypt/es/core/errors.js
var MethodNotImplementedError = class extends Error {
  constructor(className, methodName) {
    const msg = `Method ${className}.${methodName}() not implemented`;
    super(msg);
  }
};
var PrivateConstructorError = class extends Error {
  constructor(className) {
    const msg = `Cannot construct ${className} - it has a private constructor`;
    super(msg);
  }
};
var UnexpectedObjectTypeError = class extends Error {
  constructor(expected, actual) {
    const name = (t) => {
      var _a, _b;
      return (_a = t === null || t === void 0 ? void 0 : t.name) !== null && _a !== void 0 ? _a : (_b = t === null || t === void 0 ? void 0 : t.constructor) === null || _b === void 0 ? void 0 : _b.name;
    };
    const expectedTypes = Array.isArray(expected) ? expected.map(name) : [name(expected)];
    const msg = `Expected instance of ${expectedTypes.join(" or ")}, but got instance of ${actual ? name(actual) : actual}`;
    super(msg);
  }
};
var UnsupportedEncodingError = class extends Error {
  constructor(encoding) {
    const msg = `${encoding} stream encoding not supported`;
    super(msg);
  }
};
var ReparseError = class extends Error {
  constructor(className, methodName) {
    const msg = `Cannot call ${className}.${methodName}() more than once`;
    super(msg);
  }
};
var MissingCatalogError = class extends Error {
  constructor(ref) {
    const msg = `Missing catalog (ref=${ref})`;
    super(msg);
  }
};
var MissingPageContentsEmbeddingError = class extends Error {
  constructor() {
    const msg = `Can't embed page with missing Contents`;
    super(msg);
  }
};
var UnrecognizedStreamTypeError = class extends Error {
  constructor(stream2) {
    var _a, _b, _c;
    const streamType = (_c = (_b = (_a = stream2 === null || stream2 === void 0 ? void 0 : stream2.contructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : stream2 === null || stream2 === void 0 ? void 0 : stream2.name) !== null && _c !== void 0 ? _c : stream2;
    const msg = `Unrecognized stream type: ${streamType}`;
    super(msg);
  }
};
var PageEmbeddingMismatchedContextError = class extends Error {
  constructor() {
    const msg = `Found mismatched contexts while embedding pages. All pages in the array passed to \`PDFDocument.embedPages()\` must be from the same document.`;
    super(msg);
  }
};
var PDFArrayIsNotRectangleError = class extends Error {
  constructor(size) {
    const msg = `Attempted to convert PDFArray with ${size} elements to rectangle, but must have exactly 4 elements.`;
    super(msg);
  }
};
var InvalidPDFDateStringError = class extends Error {
  constructor(value) {
    const msg = `Attempted to convert "${value}" to a date, but it does not match the PDF date string format.`;
    super(msg);
  }
};
var InvalidTargetIndexError = class extends Error {
  constructor(targetIndex, Count) {
    const msg = `Invalid targetIndex specified: targetIndex=${targetIndex} must be less than Count=${Count}`;
    super(msg);
  }
};
var CorruptPageTreeError = class extends Error {
  constructor(targetIndex, operation) {
    const msg = `Failed to ${operation} at targetIndex=${targetIndex} due to corrupt page tree: It is likely that one or more 'Count' entries are invalid`;
    super(msg);
  }
};
var IndexOutOfBoundsError = class extends Error {
  constructor(index, min, max) {
    const msg = `index should be at least ${min} and at most ${max}, but was actually ${index}`;
    super(msg);
  }
};
var InvalidAcroFieldValueError = class extends Error {
  constructor() {
    const msg = `Attempted to set invalid field value`;
    super(msg);
  }
};
var MultiSelectValueError = class extends Error {
  constructor() {
    const msg = `Attempted to select multiple values for single-select field`;
    super(msg);
  }
};
var MissingDAEntryError = class extends Error {
  constructor(fieldName) {
    const msg = `No /DA (default appearance) entry found for field: ${fieldName}`;
    super(msg);
  }
};
var MissingTfOperatorError = class extends Error {
  constructor(fieldName) {
    const msg = `No Tf operator found for DA of field: ${fieldName}`;
    super(msg);
  }
};
var NumberParsingError = class extends Error {
  constructor(pos, value) {
    const msg = `Failed to parse number (line:${pos.line} col:${pos.column} offset=${pos.offset}): "${value}"`;
    super(msg);
  }
};
var PDFParsingError = class extends Error {
  constructor(pos, details) {
    const msg = `Failed to parse PDF document (line:${pos.line} col:${pos.column} offset=${pos.offset}): ${details}`;
    super(msg);
  }
};
var NextByteAssertionError = class extends PDFParsingError {
  constructor(pos, expectedByte, actualByte) {
    const msg = `Expected next byte to be ${expectedByte} but it was actually ${actualByte}`;
    super(pos, msg);
  }
};
var PDFObjectParsingError = class extends PDFParsingError {
  constructor(pos, byte) {
    const msg = `Failed to parse PDF object starting with the following byte: ${byte}`;
    super(pos, msg);
  }
};
var PDFInvalidObjectParsingError = class extends PDFParsingError {
  constructor(pos) {
    const msg = `Failed to parse invalid PDF object`;
    super(pos, msg);
  }
};
var PDFStreamParsingError = class extends PDFParsingError {
  constructor(pos) {
    const msg = `Failed to parse PDF stream`;
    super(pos, msg);
  }
};
var UnbalancedParenthesisError = class extends PDFParsingError {
  constructor(pos) {
    const msg = `Failed to parse PDF literal string due to unbalanced parenthesis`;
    super(pos, msg);
  }
};
var StalledParserError = class extends PDFParsingError {
  constructor(pos) {
    const msg = `Parser stalled`;
    super(pos, msg);
  }
};
var MissingPDFHeaderError = class extends PDFParsingError {
  constructor(pos) {
    const msg = `No PDF header found`;
    super(pos, msg);
  }
};
var MissingKeywordError = class extends PDFParsingError {
  constructor(pos, keyword) {
    const msg = `Did not find expected keyword '${arrayAsString(keyword)}'`;
    super(pos, msg);
  }
};

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/CharCodes.js
var CharCodes;
(function(CharCodes2) {
  CharCodes2[CharCodes2["Null"] = 0] = "Null";
  CharCodes2[CharCodes2["Backspace"] = 8] = "Backspace";
  CharCodes2[CharCodes2["Tab"] = 9] = "Tab";
  CharCodes2[CharCodes2["Newline"] = 10] = "Newline";
  CharCodes2[CharCodes2["FormFeed"] = 12] = "FormFeed";
  CharCodes2[CharCodes2["CarriageReturn"] = 13] = "CarriageReturn";
  CharCodes2[CharCodes2["Space"] = 32] = "Space";
  CharCodes2[CharCodes2["ExclamationPoint"] = 33] = "ExclamationPoint";
  CharCodes2[CharCodes2["Hash"] = 35] = "Hash";
  CharCodes2[CharCodes2["Percent"] = 37] = "Percent";
  CharCodes2[CharCodes2["LeftParen"] = 40] = "LeftParen";
  CharCodes2[CharCodes2["RightParen"] = 41] = "RightParen";
  CharCodes2[CharCodes2["Plus"] = 43] = "Plus";
  CharCodes2[CharCodes2["Minus"] = 45] = "Minus";
  CharCodes2[CharCodes2["Dash"] = 45] = "Dash";
  CharCodes2[CharCodes2["Period"] = 46] = "Period";
  CharCodes2[CharCodes2["ForwardSlash"] = 47] = "ForwardSlash";
  CharCodes2[CharCodes2["Zero"] = 48] = "Zero";
  CharCodes2[CharCodes2["One"] = 49] = "One";
  CharCodes2[CharCodes2["Two"] = 50] = "Two";
  CharCodes2[CharCodes2["Three"] = 51] = "Three";
  CharCodes2[CharCodes2["Four"] = 52] = "Four";
  CharCodes2[CharCodes2["Five"] = 53] = "Five";
  CharCodes2[CharCodes2["Six"] = 54] = "Six";
  CharCodes2[CharCodes2["Seven"] = 55] = "Seven";
  CharCodes2[CharCodes2["Eight"] = 56] = "Eight";
  CharCodes2[CharCodes2["Nine"] = 57] = "Nine";
  CharCodes2[CharCodes2["LessThan"] = 60] = "LessThan";
  CharCodes2[CharCodes2["GreaterThan"] = 62] = "GreaterThan";
  CharCodes2[CharCodes2["A"] = 65] = "A";
  CharCodes2[CharCodes2["D"] = 68] = "D";
  CharCodes2[CharCodes2["E"] = 69] = "E";
  CharCodes2[CharCodes2["F"] = 70] = "F";
  CharCodes2[CharCodes2["O"] = 79] = "O";
  CharCodes2[CharCodes2["P"] = 80] = "P";
  CharCodes2[CharCodes2["R"] = 82] = "R";
  CharCodes2[CharCodes2["LeftSquareBracket"] = 91] = "LeftSquareBracket";
  CharCodes2[CharCodes2["BackSlash"] = 92] = "BackSlash";
  CharCodes2[CharCodes2["RightSquareBracket"] = 93] = "RightSquareBracket";
  CharCodes2[CharCodes2["a"] = 97] = "a";
  CharCodes2[CharCodes2["b"] = 98] = "b";
  CharCodes2[CharCodes2["d"] = 100] = "d";
  CharCodes2[CharCodes2["e"] = 101] = "e";
  CharCodes2[CharCodes2["f"] = 102] = "f";
  CharCodes2[CharCodes2["i"] = 105] = "i";
  CharCodes2[CharCodes2["j"] = 106] = "j";
  CharCodes2[CharCodes2["l"] = 108] = "l";
  CharCodes2[CharCodes2["m"] = 109] = "m";
  CharCodes2[CharCodes2["n"] = 110] = "n";
  CharCodes2[CharCodes2["o"] = 111] = "o";
  CharCodes2[CharCodes2["r"] = 114] = "r";
  CharCodes2[CharCodes2["s"] = 115] = "s";
  CharCodes2[CharCodes2["t"] = 116] = "t";
  CharCodes2[CharCodes2["u"] = 117] = "u";
  CharCodes2[CharCodes2["x"] = 120] = "x";
  CharCodes2[CharCodes2["LeftCurly"] = 123] = "LeftCurly";
  CharCodes2[CharCodes2["RightCurly"] = 125] = "RightCurly";
  CharCodes2[CharCodes2["Tilde"] = 126] = "Tilde";
})(CharCodes || (CharCodes = {}));
var CharCodes_default = CharCodes;

// node_modules/pdf-lib-plus-encrypt/es/core/PDFContext.js
var import_pako2 = __toESM(require_pako());

// node_modules/pdf-lib-plus-encrypt/es/core/document/PDFHeader.js
var PDFHeader = class {
  constructor(major, minor) {
    this.major = String(major);
    this.minor = String(minor);
  }
  getVersion() {
    return `${this.major}.${this.minor}`;
  }
  toString() {
    const bc = charFromCode(129);
    return `%PDF-${this.major}.${this.minor}
%${bc}${bc}${bc}${bc}`;
  }
  sizeInBytes() {
    return 12 + this.major.length + this.minor.length;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.P;
    buffer[offset++] = CharCodes_default.D;
    buffer[offset++] = CharCodes_default.F;
    buffer[offset++] = CharCodes_default.Dash;
    offset += copyStringIntoBuffer(this.major, buffer, offset);
    buffer[offset++] = CharCodes_default.Period;
    offset += copyStringIntoBuffer(this.minor, buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    buffer[offset++] = 129;
    return offset - initialOffset;
  }
};
PDFHeader.forVersion = (major, minor) => new PDFHeader(major, minor);
var PDFHeader_default = PDFHeader;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFObject.js
var PDFObject = class {
  clone(_context) {
    throw new MethodNotImplementedError(this.constructor.name, "clone");
  }
  toString() {
    throw new MethodNotImplementedError(this.constructor.name, "toString");
  }
  sizeInBytes() {
    throw new MethodNotImplementedError(this.constructor.name, "sizeInBytes");
  }
  copyBytesInto(_buffer, _offset) {
    throw new MethodNotImplementedError(this.constructor.name, "copyBytesInto");
  }
};
var PDFObject_default = PDFObject;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFNumber.js
var PDFNumber = class _PDFNumber extends PDFObject_default {
  constructor(value) {
    super();
    this.numberValue = value;
    this.stringValue = numberToString(value);
  }
  asNumber() {
    return this.numberValue;
  }
  /** @deprecated in favor of [[PDFNumber.asNumber]] */
  value() {
    return this.numberValue;
  }
  clone() {
    return _PDFNumber.of(this.numberValue);
  }
  toString() {
    return this.stringValue;
  }
  sizeInBytes() {
    return this.stringValue.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.stringValue, buffer, offset);
    return this.stringValue.length;
  }
};
PDFNumber.of = (value) => new PDFNumber(value);
var PDFNumber_default = PDFNumber;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFArray.js
var PDFArray = class _PDFArray extends PDFObject_default {
  constructor(context) {
    super();
    this.array = [];
    this.context = context;
  }
  size() {
    return this.array.length;
  }
  push(object) {
    this.array.push(object);
  }
  insert(index, object) {
    this.array.splice(index, 0, object);
  }
  indexOf(object) {
    const index = this.array.indexOf(object);
    return index === -1 ? void 0 : index;
  }
  remove(index) {
    this.array.splice(index, 1);
  }
  set(idx, object) {
    this.array[idx] = object;
  }
  get(index) {
    return this.array[index];
  }
  lookupMaybe(index, ...types) {
    return this.context.lookupMaybe(
      this.get(index),
      ...types
    );
  }
  lookup(index, ...types) {
    return this.context.lookup(
      this.get(index),
      ...types
    );
  }
  asRectangle() {
    if (this.size() !== 4)
      throw new PDFArrayIsNotRectangleError(this.size());
    const lowerLeftX = this.lookup(0, PDFNumber_default).asNumber();
    const lowerLeftY = this.lookup(1, PDFNumber_default).asNumber();
    const upperRightX = this.lookup(2, PDFNumber_default).asNumber();
    const upperRightY = this.lookup(3, PDFNumber_default).asNumber();
    const x = lowerLeftX;
    const y = lowerLeftY;
    const width = upperRightX - lowerLeftX;
    const height = upperRightY - lowerLeftY;
    return { x, y, width, height };
  }
  asArray() {
    return this.array.slice();
  }
  clone(context) {
    const clone = _PDFArray.withContext(context || this.context);
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      clone.push(this.array[idx]);
    }
    return clone;
  }
  toString() {
    let arrayString = "[ ";
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      arrayString += this.get(idx).toString();
      arrayString += " ";
    }
    arrayString += "]";
    return arrayString;
  }
  sizeInBytes() {
    let size = 3;
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      size += this.get(idx).sizeInBytes() + 1;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.LeftSquareBracket;
    buffer[offset++] = CharCodes_default.Space;
    for (let idx = 0, len = this.size(); idx < len; idx++) {
      offset += this.get(idx).copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
    }
    buffer[offset++] = CharCodes_default.RightSquareBracket;
    return offset - initialOffset;
  }
};
PDFArray.withContext = (context) => new PDFArray(context);
var PDFArray_default = PDFArray;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFBool.js
var ENFORCER = {};
var PDFBool = class extends PDFObject_default {
  constructor(enforcer, value) {
    if (enforcer !== ENFORCER)
      throw new PrivateConstructorError("PDFBool");
    super();
    this.value = value;
  }
  asBoolean() {
    return this.value;
  }
  clone() {
    return this;
  }
  toString() {
    return String(this.value);
  }
  sizeInBytes() {
    return this.value ? 4 : 5;
  }
  copyBytesInto(buffer, offset) {
    if (this.value) {
      buffer[offset++] = CharCodes_default.t;
      buffer[offset++] = CharCodes_default.r;
      buffer[offset++] = CharCodes_default.u;
      buffer[offset++] = CharCodes_default.e;
      return 4;
    } else {
      buffer[offset++] = CharCodes_default.f;
      buffer[offset++] = CharCodes_default.a;
      buffer[offset++] = CharCodes_default.l;
      buffer[offset++] = CharCodes_default.s;
      buffer[offset++] = CharCodes_default.e;
      return 5;
    }
  }
};
PDFBool.True = new PDFBool(ENFORCER, true);
PDFBool.False = new PDFBool(ENFORCER, false);
var PDFBool_default = PDFBool;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFNull.js
var PDFNull = class extends PDFObject_default {
  asNull() {
    return null;
  }
  clone() {
    return this;
  }
  toString() {
    return "null";
  }
  sizeInBytes() {
    return 4;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.n;
    buffer[offset++] = CharCodes_default.u;
    buffer[offset++] = CharCodes_default.l;
    buffer[offset++] = CharCodes_default.l;
    return 4;
  }
};
var PDFNull_default = new PDFNull();

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFDict.js
var PDFDict = class _PDFDict extends PDFObject_default {
  constructor(map, context) {
    super();
    this.dict = map;
    this.context = context;
  }
  keys() {
    return Array.from(this.dict.keys());
  }
  values() {
    return Array.from(this.dict.values());
  }
  entries() {
    return Array.from(this.dict.entries());
  }
  set(key, value) {
    this.dict.set(key, value);
  }
  get(key, preservePDFNull = false) {
    const value = this.dict.get(key);
    if (value === PDFNull_default && !preservePDFNull)
      return void 0;
    return value;
  }
  has(key) {
    const value = this.dict.get(key);
    return value !== void 0 && value !== PDFNull_default;
  }
  lookupMaybe(key, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const value = this.context.lookupMaybe(
      this.get(key, preservePDFNull),
      ...types
    );
    if (value === PDFNull_default && !preservePDFNull)
      return void 0;
    return value;
  }
  lookup(key, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const value = this.context.lookup(
      this.get(key, preservePDFNull),
      ...types
    );
    if (value === PDFNull_default && !preservePDFNull)
      return void 0;
    return value;
  }
  delete(key) {
    return this.dict.delete(key);
  }
  asMap() {
    return new Map(this.dict);
  }
  clone(context) {
    const clone = _PDFDict.withContext(context || this.context);
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      clone.set(key, value);
    }
    return clone;
  }
  toString() {
    let dictString = "<<\n";
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      dictString += key.toString() + " " + value.toString() + "\n";
    }
    dictString += ">>";
    return dictString;
  }
  sizeInBytes() {
    let size = 5;
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      size += key.sizeInBytes() + value.sizeInBytes() + 2;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.LessThan;
    buffer[offset++] = CharCodes_default.LessThan;
    buffer[offset++] = CharCodes_default.Newline;
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      offset += key.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      offset += value.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    buffer[offset++] = CharCodes_default.GreaterThan;
    buffer[offset++] = CharCodes_default.GreaterThan;
    return offset - initialOffset;
  }
};
PDFDict.withContext = (context) => new PDFDict(/* @__PURE__ */ new Map(), context);
PDFDict.fromMapWithContext = (map, context) => new PDFDict(map, context);
var PDFDict_default = PDFDict;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFHexString.js
var PDFHexString = class _PDFHexString extends PDFObject_default {
  constructor(value) {
    super();
    this.value = value;
  }
  asBytes() {
    const hex = this.value + (this.value.length % 2 === 1 ? "0" : "");
    const hexLength = hex.length;
    const bytes = new Uint8Array(hex.length / 2);
    let hexOffset = 0;
    let bytesOffset = 0;
    while (hexOffset < hexLength) {
      const byte = parseInt(hex.substring(hexOffset, hexOffset + 2), 16);
      bytes[bytesOffset] = byte;
      hexOffset += 2;
      bytesOffset += 1;
    }
    return bytes;
  }
  decodeText() {
    const bytes = this.asBytes();
    if (hasUtf16BOM(bytes))
      return utf16Decode(bytes);
    return pdfDocEncodingDecode(bytes);
  }
  decodeDate() {
    const text = this.decodeText();
    const date = parseDate(text);
    if (!date)
      throw new InvalidPDFDateStringError(text);
    return date;
  }
  asString() {
    return this.value;
  }
  clone() {
    return _PDFHexString.of(this.value);
  }
  toString() {
    return `<${this.value}>`;
  }
  sizeInBytes() {
    return this.value.length + 2;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.LessThan;
    offset += copyStringIntoBuffer(this.value, buffer, offset);
    buffer[offset++] = CharCodes_default.GreaterThan;
    return this.value.length + 2;
  }
};
PDFHexString.of = (value) => new PDFHexString(value);
PDFHexString.fromText = (value) => {
  const encoded = utf16Encode(value);
  let hex = "";
  for (let idx = 0, len = encoded.length; idx < len; idx++) {
    hex += toHexStringOfMinLength(encoded[idx], 4);
  }
  return new PDFHexString(hex);
};
var PDFHexString_default = PDFHexString;

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/Delimiters.js
var IsDelimiter = new Uint8Array(256);
IsDelimiter[CharCodes_default.LeftParen] = 1;
IsDelimiter[CharCodes_default.RightParen] = 1;
IsDelimiter[CharCodes_default.LessThan] = 1;
IsDelimiter[CharCodes_default.GreaterThan] = 1;
IsDelimiter[CharCodes_default.LeftSquareBracket] = 1;
IsDelimiter[CharCodes_default.RightSquareBracket] = 1;
IsDelimiter[CharCodes_default.LeftCurly] = 1;
IsDelimiter[CharCodes_default.RightCurly] = 1;
IsDelimiter[CharCodes_default.ForwardSlash] = 1;
IsDelimiter[CharCodes_default.Percent] = 1;

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/Whitespace.js
var IsWhitespace = new Uint8Array(256);
IsWhitespace[CharCodes_default.Null] = 1;
IsWhitespace[CharCodes_default.Tab] = 1;
IsWhitespace[CharCodes_default.Newline] = 1;
IsWhitespace[CharCodes_default.FormFeed] = 1;
IsWhitespace[CharCodes_default.CarriageReturn] = 1;
IsWhitespace[CharCodes_default.Space] = 1;

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/Irregular.js
var IsIrregular = new Uint8Array(256);
for (let idx = 0, len = 256; idx < len; idx++) {
  IsIrregular[idx] = IsWhitespace[idx] || IsDelimiter[idx] ? 1 : 0;
}
IsIrregular[CharCodes_default.Hash] = 1;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFName.js
var decodeName = (name) => name.replace(/#([\dABCDEF]{2})/g, (_, hex) => charFromHexCode(hex));
var isRegularChar = (charCode) => charCode >= CharCodes_default.ExclamationPoint && charCode <= CharCodes_default.Tilde && !IsIrregular[charCode];
var ENFORCER2 = {};
var pool = /* @__PURE__ */ new Map();
var PDFName = class extends PDFObject_default {
  constructor(enforcer, name) {
    if (enforcer !== ENFORCER2)
      throw new PrivateConstructorError("PDFName");
    super();
    let encodedName = "/";
    for (let idx = 0, len = name.length; idx < len; idx++) {
      const character = name[idx];
      const code = toCharCode(character);
      encodedName += isRegularChar(code) ? character : `#${toHexString(code)}`;
    }
    this.encodedName = encodedName;
  }
  asBytes() {
    const bytes = [];
    let hex = "";
    let escaped = false;
    const pushByte = (byte) => {
      if (byte !== void 0)
        bytes.push(byte);
      escaped = false;
    };
    for (let idx = 1, len = this.encodedName.length; idx < len; idx++) {
      const char = this.encodedName[idx];
      const byte = toCharCode(char);
      const nextChar = this.encodedName[idx + 1];
      if (!escaped) {
        if (byte === CharCodes_default.Hash)
          escaped = true;
        else
          pushByte(byte);
      } else {
        if (byte >= CharCodes_default.Zero && byte <= CharCodes_default.Nine || byte >= CharCodes_default.a && byte <= CharCodes_default.f || byte >= CharCodes_default.A && byte <= CharCodes_default.F) {
          hex += char;
          if (hex.length === 2 || !(nextChar >= "0" && nextChar <= "9" || nextChar >= "a" && nextChar <= "f" || nextChar >= "A" && nextChar <= "F")) {
            pushByte(parseInt(hex, 16));
            hex = "";
          }
        } else {
          pushByte(byte);
        }
      }
    }
    return new Uint8Array(bytes);
  }
  // TODO: This should probably use `utf8Decode()`
  // TODO: Polyfill Array.from?
  decodeText() {
    const bytes = this.asBytes();
    return String.fromCharCode(...Array.from(bytes));
  }
  asString() {
    return this.encodedName;
  }
  /** @deprecated in favor of [[PDFName.asString]] */
  value() {
    return this.encodedName;
  }
  clone() {
    return this;
  }
  toString() {
    return this.encodedName;
  }
  sizeInBytes() {
    return this.encodedName.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.encodedName, buffer, offset);
    return this.encodedName.length;
  }
};
PDFName.of = (name) => {
  const decodedValue = decodeName(name);
  let instance = pool.get(decodedValue);
  if (!instance) {
    instance = new PDFName(ENFORCER2, decodedValue);
    pool.set(decodedValue, instance);
  }
  return instance;
};
PDFName.Length = PDFName.of("Length");
PDFName.FlateDecode = PDFName.of("FlateDecode");
PDFName.Resources = PDFName.of("Resources");
PDFName.Font = PDFName.of("Font");
PDFName.XObject = PDFName.of("XObject");
PDFName.ExtGState = PDFName.of("ExtGState");
PDFName.Contents = PDFName.of("Contents");
PDFName.Type = PDFName.of("Type");
PDFName.Parent = PDFName.of("Parent");
PDFName.MediaBox = PDFName.of("MediaBox");
PDFName.Page = PDFName.of("Page");
PDFName.Annots = PDFName.of("Annots");
PDFName.TrimBox = PDFName.of("TrimBox");
PDFName.ArtBox = PDFName.of("ArtBox");
PDFName.BleedBox = PDFName.of("BleedBox");
PDFName.CropBox = PDFName.of("CropBox");
PDFName.Rotate = PDFName.of("Rotate");
PDFName.Title = PDFName.of("Title");
PDFName.Author = PDFName.of("Author");
PDFName.Subject = PDFName.of("Subject");
PDFName.Creator = PDFName.of("Creator");
PDFName.Keywords = PDFName.of("Keywords");
PDFName.Producer = PDFName.of("Producer");
PDFName.CreationDate = PDFName.of("CreationDate");
PDFName.ModDate = PDFName.of("ModDate");
var PDFName_default = PDFName;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFStream.js
var PDFStream = class extends PDFObject_default {
  constructor(dict) {
    super();
    this.dict = dict;
  }
  clone(_context) {
    throw new MethodNotImplementedError(this.constructor.name, "clone");
  }
  getContentsString() {
    throw new MethodNotImplementedError(this.constructor.name, "getContentsString");
  }
  getContents() {
    throw new MethodNotImplementedError(this.constructor.name, "getContents");
  }
  getContentsSize() {
    throw new MethodNotImplementedError(this.constructor.name, "getContentsSize");
  }
  updateContent(encrypt) {
    throw new MethodNotImplementedError(this.constructor.name, encrypt.toString());
  }
  updateDict() {
    const contentsSize = this.getContentsSize();
    this.dict.set(PDFName_default.Length, PDFNumber_default.of(contentsSize));
  }
  sizeInBytes() {
    this.updateDict();
    return this.dict.sizeInBytes() + this.getContentsSize() + 18;
  }
  toString() {
    this.updateDict();
    let streamString = this.dict.toString();
    streamString += "\nstream\n";
    streamString += this.getContentsString();
    streamString += "\nendstream";
    return streamString;
  }
  copyBytesInto(buffer, offset) {
    this.updateDict();
    const initialOffset = offset;
    offset += this.dict.copyBytesInto(buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.m;
    buffer[offset++] = CharCodes_default.Newline;
    const contents = this.getContents();
    for (let idx = 0, len = contents.length; idx < len; idx++) {
      buffer[offset++] = contents[idx];
    }
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.n;
    buffer[offset++] = CharCodes_default.d;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.m;
    return offset - initialOffset;
  }
};
var PDFStream_default = PDFStream;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFRawStream.js
var PDFRawStream = class _PDFRawStream extends PDFStream_default {
  constructor(dict, contents) {
    super(dict);
    this.contents = contents;
  }
  asUint8Array() {
    return this.contents.slice();
  }
  clone(context) {
    return _PDFRawStream.of(this.dict.clone(context), this.contents.slice());
  }
  getContentsString() {
    return arrayAsString(this.contents);
  }
  updateContent(encrypt) {
    this.contents = encrypt;
  }
  getContents() {
    return this.contents;
  }
  getContentsSize() {
    return this.contents.length;
  }
};
PDFRawStream.of = (dict, contents) => new PDFRawStream(dict, contents);
var PDFRawStream_default = PDFRawStream;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFRef.js
var ENFORCER3 = {};
var pool2 = /* @__PURE__ */ new Map();
var PDFRef = class extends PDFObject_default {
  constructor(enforcer, objectNumber, generationNumber) {
    if (enforcer !== ENFORCER3)
      throw new PrivateConstructorError("PDFRef");
    super();
    this.objectNumber = objectNumber;
    this.generationNumber = generationNumber;
    this.tag = `${objectNumber} ${generationNumber} R`;
  }
  clone() {
    return this;
  }
  toString() {
    return this.tag;
  }
  sizeInBytes() {
    return this.tag.length;
  }
  copyBytesInto(buffer, offset) {
    offset += copyStringIntoBuffer(this.tag, buffer, offset);
    return this.tag.length;
  }
};
PDFRef.of = (objectNumber, generationNumber = 0) => {
  const tag = `${objectNumber} ${generationNumber} R`;
  let instance = pool2.get(tag);
  if (!instance) {
    instance = new PDFRef(ENFORCER3, objectNumber, generationNumber);
    pool2.set(tag, instance);
  }
  return instance;
};
var PDFRef_default = PDFRef;

// node_modules/pdf-lib-plus-encrypt/es/core/operators/PDFOperator.js
var PDFOperator = class _PDFOperator {
  constructor(name, args) {
    this.name = name;
    this.args = args || [];
  }
  clone(context) {
    const args = new Array(this.args.length);
    for (let idx = 0, len = args.length; idx < len; idx++) {
      const arg = this.args[idx];
      args[idx] = arg instanceof PDFObject_default ? arg.clone(context) : arg;
    }
    return _PDFOperator.of(this.name, args);
  }
  toString() {
    let value = "";
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      value += String(this.args[idx]) + " ";
    }
    value += this.name;
    return value;
  }
  sizeInBytes() {
    let size = 0;
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      const arg = this.args[idx];
      size += (arg instanceof PDFObject_default ? arg.sizeInBytes() : arg.length) + 1;
    }
    size += this.name.length;
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    for (let idx = 0, len = this.args.length; idx < len; idx++) {
      const arg = this.args[idx];
      if (arg instanceof PDFObject_default) {
        offset += arg.copyBytesInto(buffer, offset);
      } else {
        offset += copyStringIntoBuffer(arg, buffer, offset);
      }
      buffer[offset++] = CharCodes_default.Space;
    }
    offset += copyStringIntoBuffer(this.name, buffer, offset);
    return offset - initialOffset;
  }
};
PDFOperator.of = (name, args) => new PDFOperator(name, args);
var PDFOperator_default = PDFOperator;

// node_modules/pdf-lib-plus-encrypt/es/core/operators/PDFOperatorNames.js
var PDFOperatorNames;
(function(PDFOperatorNames2) {
  PDFOperatorNames2["NonStrokingColor"] = "sc";
  PDFOperatorNames2["NonStrokingColorN"] = "scn";
  PDFOperatorNames2["NonStrokingColorRgb"] = "rg";
  PDFOperatorNames2["NonStrokingColorGray"] = "g";
  PDFOperatorNames2["NonStrokingColorCmyk"] = "k";
  PDFOperatorNames2["NonStrokingColorspace"] = "cs";
  PDFOperatorNames2["StrokingColor"] = "SC";
  PDFOperatorNames2["StrokingColorN"] = "SCN";
  PDFOperatorNames2["StrokingColorRgb"] = "RG";
  PDFOperatorNames2["StrokingColorGray"] = "G";
  PDFOperatorNames2["StrokingColorCmyk"] = "K";
  PDFOperatorNames2["StrokingColorspace"] = "CS";
  PDFOperatorNames2["BeginMarkedContentSequence"] = "BDC";
  PDFOperatorNames2["BeginMarkedContent"] = "BMC";
  PDFOperatorNames2["EndMarkedContent"] = "EMC";
  PDFOperatorNames2["MarkedContentPointWithProps"] = "DP";
  PDFOperatorNames2["MarkedContentPoint"] = "MP";
  PDFOperatorNames2["DrawObject"] = "Do";
  PDFOperatorNames2["ConcatTransformationMatrix"] = "cm";
  PDFOperatorNames2["PopGraphicsState"] = "Q";
  PDFOperatorNames2["PushGraphicsState"] = "q";
  PDFOperatorNames2["SetFlatness"] = "i";
  PDFOperatorNames2["SetGraphicsStateParams"] = "gs";
  PDFOperatorNames2["SetLineCapStyle"] = "J";
  PDFOperatorNames2["SetLineDashPattern"] = "d";
  PDFOperatorNames2["SetLineJoinStyle"] = "j";
  PDFOperatorNames2["SetLineMiterLimit"] = "M";
  PDFOperatorNames2["SetLineWidth"] = "w";
  PDFOperatorNames2["SetTextMatrix"] = "Tm";
  PDFOperatorNames2["SetRenderingIntent"] = "ri";
  PDFOperatorNames2["AppendRectangle"] = "re";
  PDFOperatorNames2["BeginInlineImage"] = "BI";
  PDFOperatorNames2["BeginInlineImageData"] = "ID";
  PDFOperatorNames2["EndInlineImage"] = "EI";
  PDFOperatorNames2["ClipEvenOdd"] = "W*";
  PDFOperatorNames2["ClipNonZero"] = "W";
  PDFOperatorNames2["CloseAndStroke"] = "s";
  PDFOperatorNames2["CloseFillEvenOddAndStroke"] = "b*";
  PDFOperatorNames2["CloseFillNonZeroAndStroke"] = "b";
  PDFOperatorNames2["ClosePath"] = "h";
  PDFOperatorNames2["AppendBezierCurve"] = "c";
  PDFOperatorNames2["CurveToReplicateFinalPoint"] = "y";
  PDFOperatorNames2["CurveToReplicateInitialPoint"] = "v";
  PDFOperatorNames2["EndPath"] = "n";
  PDFOperatorNames2["FillEvenOddAndStroke"] = "B*";
  PDFOperatorNames2["FillEvenOdd"] = "f*";
  PDFOperatorNames2["FillNonZeroAndStroke"] = "B";
  PDFOperatorNames2["FillNonZero"] = "f";
  PDFOperatorNames2["LegacyFillNonZero"] = "F";
  PDFOperatorNames2["LineTo"] = "l";
  PDFOperatorNames2["MoveTo"] = "m";
  PDFOperatorNames2["ShadingFill"] = "sh";
  PDFOperatorNames2["StrokePath"] = "S";
  PDFOperatorNames2["BeginText"] = "BT";
  PDFOperatorNames2["EndText"] = "ET";
  PDFOperatorNames2["MoveText"] = "Td";
  PDFOperatorNames2["MoveTextSetLeading"] = "TD";
  PDFOperatorNames2["NextLine"] = "T*";
  PDFOperatorNames2["SetCharacterSpacing"] = "Tc";
  PDFOperatorNames2["SetFontAndSize"] = "Tf";
  PDFOperatorNames2["SetTextHorizontalScaling"] = "Tz";
  PDFOperatorNames2["SetTextLineHeight"] = "TL";
  PDFOperatorNames2["SetTextRenderingMode"] = "Tr";
  PDFOperatorNames2["SetTextRise"] = "Ts";
  PDFOperatorNames2["SetWordSpacing"] = "Tw";
  PDFOperatorNames2["ShowText"] = "Tj";
  PDFOperatorNames2["ShowTextAdjusted"] = "TJ";
  PDFOperatorNames2["ShowTextLine"] = "'";
  PDFOperatorNames2["ShowTextLineAndSpace"] = '"';
  PDFOperatorNames2["Type3D0"] = "d0";
  PDFOperatorNames2["Type3D1"] = "d1";
  PDFOperatorNames2["BeginCompatibilitySection"] = "BX";
  PDFOperatorNames2["EndCompatibilitySection"] = "EX";
})(PDFOperatorNames || (PDFOperatorNames = {}));
var PDFOperatorNames_default = PDFOperatorNames;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFFlateStream.js
var import_pako = __toESM(require_pako());
var PDFFlateStream = class extends PDFStream_default {
  constructor(dict, encode) {
    super(dict);
    this.computeContents = () => {
      const unencodedContents = this.getUnencodedContents();
      return this.encode ? import_pako.default.deflate(unencodedContents) : unencodedContents;
    };
    this.encode = encode;
    if (encode)
      dict.set(PDFName_default.of("Filter"), PDFName_default.of("FlateDecode"));
    this.contentsCache = Cache_default.populatedBy(this.computeContents);
  }
  getContents() {
    return this.contentsCache.access();
  }
  getContentsSize() {
    return this.contentsCache.access().length;
  }
  updateContent(encrypt) {
    this.contentsCache = Cache_default.populatedBy(() => encrypt);
  }
  getUnencodedContents() {
    throw new MethodNotImplementedError(this.constructor.name, "getUnencodedContents");
  }
};
var PDFFlateStream_default = PDFFlateStream;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFContentStream.js
var PDFContentStream = class _PDFContentStream extends PDFFlateStream_default {
  constructor(dict, operators, encode = true) {
    super(dict, encode);
    this.operators = operators;
  }
  push(...operators) {
    this.operators.push(...operators);
  }
  clone(context) {
    const operators = new Array(this.operators.length);
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      operators[idx] = this.operators[idx].clone(context);
    }
    const { dict, encode } = this;
    return _PDFContentStream.of(dict.clone(context), operators, encode);
  }
  getContentsString() {
    let value = "";
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      value += `${this.operators[idx]}
`;
    }
    return value;
  }
  getUnencodedContents() {
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = 0;
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      offset += this.operators[idx].copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    let size = 0;
    for (let idx = 0, len = this.operators.length; idx < len; idx++) {
      size += this.operators[idx].sizeInBytes() + 1;
    }
    return size;
  }
};
PDFContentStream.of = (dict, operators, encode = true) => new PDFContentStream(dict, operators, encode);
var PDFContentStream_default = PDFContentStream;

// node_modules/pdf-lib-plus-encrypt/es/core/PDFContext.js
var byAscendingObjectNumber = ([a], [b]) => a.objectNumber - b.objectNumber;
var PDFContext = class {
  constructor() {
    this.largestObjectNumber = 0;
    this.header = PDFHeader_default.forVersion(1, 7);
    this.trailerInfo = {};
    this.indirectObjects = /* @__PURE__ */ new Map();
  }
  getSecurity() {
    return this._security;
  }
  setSecurity(pdfSecurity) {
    assertSecurity(pdfSecurity, "PDFSecurity Instance");
    this._security = pdfSecurity;
  }
  assign(ref, object) {
    this.indirectObjects.set(ref, object);
    if (ref.objectNumber > this.largestObjectNumber) {
      this.largestObjectNumber = ref.objectNumber;
    }
  }
  nextRef() {
    this.largestObjectNumber += 1;
    return PDFRef_default.of(this.largestObjectNumber);
  }
  register(object) {
    const ref = this.nextRef();
    this.assign(ref, object);
    return ref;
  }
  delete(ref) {
    return this.indirectObjects.delete(ref);
  }
  lookupMaybe(ref, ...types) {
    const preservePDFNull = types.includes(PDFNull_default);
    const result = ref instanceof PDFRef_default ? this.indirectObjects.get(ref) : ref;
    if (!result || result === PDFNull_default && !preservePDFNull)
      return void 0;
    for (let idx = 0, len = types.length; idx < len; idx++) {
      const type = types[idx];
      if (type === PDFNull_default) {
        if (result === PDFNull_default)
          return result;
      } else {
        if (result instanceof type)
          return result;
      }
    }
    throw new UnexpectedObjectTypeError(types, result);
  }
  lookup(ref, ...types) {
    const result = ref instanceof PDFRef_default ? this.indirectObjects.get(ref) : ref;
    if (types.length === 0)
      return result;
    for (let idx = 0, len = types.length; idx < len; idx++) {
      const type = types[idx];
      if (type === PDFNull_default) {
        if (result === PDFNull_default)
          return result;
      } else {
        if (result instanceof type)
          return result;
      }
    }
    throw new UnexpectedObjectTypeError(types, result);
  }
  getObjectRef(pdfObject) {
    const entries = Array.from(this.indirectObjects.entries());
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [ref, object] = entries[idx];
      if (object === pdfObject) {
        return ref;
      }
    }
    return void 0;
  }
  enumerateIndirectObjects() {
    return Array.from(this.indirectObjects.entries()).sort(byAscendingObjectNumber);
  }
  obj(literal) {
    if (literal instanceof PDFObject_default) {
      return literal;
    } else if (literal === null || literal === void 0) {
      return PDFNull_default;
    } else if (typeof literal === "string") {
      return PDFName_default.of(literal);
    } else if (typeof literal === "number") {
      return PDFNumber_default.of(literal);
    } else if (typeof literal === "boolean") {
      return literal ? PDFBool_default.True : PDFBool_default.False;
    } else if (literal instanceof Uint8Array) {
      return PDFHexString_default.of(Uint8ArrToHex(literal));
    } else if (Array.isArray(literal)) {
      const array = PDFArray_default.withContext(this);
      for (let idx = 0, len = literal.length; idx < len; idx++) {
        array.push(this.obj(literal[idx]));
      }
      return array;
    } else {
      const dict = PDFDict_default.withContext(this);
      const keys = Object.keys(literal);
      for (let idx = 0, len = keys.length; idx < len; idx++) {
        const key = keys[idx];
        const value = literal[key];
        if (value !== void 0)
          dict.set(PDFName_default.of(key), this.obj(value));
      }
      return dict;
    }
  }
  stream(contents, dict = {}) {
    return PDFRawStream_default.of(this.obj(dict), typedArrayFor(contents));
  }
  flateStream(contents, dict = {}) {
    return this.stream(import_pako2.default.deflate(typedArrayFor(contents)), Object.assign(Object.assign({}, dict), { Filter: "FlateDecode" }));
  }
  contentStream(operators, dict = {}) {
    return PDFContentStream_default.of(this.obj(dict), operators);
  }
  formXObject(operators, dict = {}) {
    return this.contentStream(operators, Object.assign(Object.assign({ BBox: this.obj([0, 0, 0, 0]), Matrix: this.obj([1, 0, 0, 1, 0, 0]) }, dict), { Type: "XObject", Subtype: "Form" }));
  }
  /*
   * Reference to PDFContentStream that contains a single PDFOperator: `q`.
   * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
   * added to a modified PDF, they start in the default, unchanged graphics
   * state.
   */
  getPushGraphicsStateContentStream() {
    if (this.pushGraphicsStateContentStreamRef) {
      return this.pushGraphicsStateContentStreamRef;
    }
    const dict = this.obj({});
    const op = PDFOperator_default.of(PDFOperatorNames_default.PushGraphicsState);
    const stream2 = PDFContentStream_default.of(dict, [op]);
    this.pushGraphicsStateContentStreamRef = this.register(stream2);
    return this.pushGraphicsStateContentStreamRef;
  }
  /*
   * Reference to PDFContentStream that contains a single PDFOperator: `Q`.
   * Used by [[PDFPageLeaf]] instances to ensure that when content streams are
   * added to a modified PDF, they start in the default, unchanged graphics
   * state.
   */
  getPopGraphicsStateContentStream() {
    if (this.popGraphicsStateContentStreamRef) {
      return this.popGraphicsStateContentStreamRef;
    }
    const dict = this.obj({});
    const op = PDFOperator_default.of(PDFOperatorNames_default.PopGraphicsState);
    const stream2 = PDFContentStream_default.of(dict, [op]);
    this.popGraphicsStateContentStreamRef = this.register(stream2);
    return this.popGraphicsStateContentStreamRef;
  }
};
PDFContext.create = () => new PDFContext();
var PDFContext_default = PDFContext;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFPageLeaf.js
var PDFPageLeaf = class _PDFPageLeaf extends PDFDict_default {
  constructor(map, context, autoNormalizeCTM = true) {
    super(map, context);
    this.normalized = false;
    this.autoNormalizeCTM = autoNormalizeCTM;
  }
  clone(context) {
    const clone = _PDFPageLeaf.fromMapWithContext(/* @__PURE__ */ new Map(), context || this.context, this.autoNormalizeCTM);
    const entries = this.entries();
    for (let idx = 0, len = entries.length; idx < len; idx++) {
      const [key, value] = entries[idx];
      clone.set(key, value);
    }
    return clone;
  }
  Parent() {
    return this.lookupMaybe(PDFName_default.Parent, PDFDict_default);
  }
  Contents() {
    return this.lookup(PDFName_default.of("Contents"));
  }
  Annots() {
    return this.lookupMaybe(PDFName_default.Annots, PDFArray_default);
  }
  BleedBox() {
    return this.lookupMaybe(PDFName_default.BleedBox, PDFArray_default);
  }
  TrimBox() {
    return this.lookupMaybe(PDFName_default.TrimBox, PDFArray_default);
  }
  ArtBox() {
    return this.lookupMaybe(PDFName_default.ArtBox, PDFArray_default);
  }
  Resources() {
    const dictOrRef = this.getInheritableAttribute(PDFName_default.Resources);
    return this.context.lookupMaybe(dictOrRef, PDFDict_default);
  }
  MediaBox() {
    const arrayOrRef = this.getInheritableAttribute(PDFName_default.MediaBox);
    return this.context.lookup(arrayOrRef, PDFArray_default);
  }
  CropBox() {
    const arrayOrRef = this.getInheritableAttribute(PDFName_default.CropBox);
    return this.context.lookupMaybe(arrayOrRef, PDFArray_default);
  }
  Rotate() {
    const numberOrRef = this.getInheritableAttribute(PDFName_default.Rotate);
    return this.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  getInheritableAttribute(name) {
    let attribute;
    this.ascend((node) => {
      if (!attribute)
        attribute = node.get(name);
    });
    return attribute;
  }
  setParent(parentRef) {
    this.set(PDFName_default.Parent, parentRef);
  }
  addContentStream(contentStreamRef) {
    const Contents = this.normalizedEntries().Contents || this.context.obj([]);
    this.set(PDFName_default.Contents, Contents);
    Contents.push(contentStreamRef);
  }
  wrapContentStreams(startStream, endStream) {
    const Contents = this.Contents();
    if (Contents instanceof PDFArray_default) {
      Contents.insert(0, startStream);
      Contents.push(endStream);
      return true;
    }
    return false;
  }
  addAnnot(annotRef) {
    const { Annots } = this.normalizedEntries();
    Annots.push(annotRef);
  }
  removeAnnot(annotRef) {
    const { Annots } = this.normalizedEntries();
    const index = Annots.indexOf(annotRef);
    if (index !== void 0) {
      Annots.remove(index);
    }
  }
  setFontDictionary(name, fontDictRef) {
    const { Font: Font2 } = this.normalizedEntries();
    Font2.set(name, fontDictRef);
  }
  setXObject(name, xObjectRef) {
    const { XObject } = this.normalizedEntries();
    XObject.set(name, xObjectRef);
  }
  setExtGState(name, extGStateRef) {
    const { ExtGState } = this.normalizedEntries();
    ExtGState.set(name, extGStateRef);
  }
  ascend(visitor) {
    visitor(this);
    const Parent = this.Parent();
    if (Parent)
      Parent.ascend(visitor);
  }
  normalize() {
    if (this.normalized)
      return;
    const { context } = this;
    const contentsRef = this.get(PDFName_default.Contents);
    const contents = this.context.lookup(contentsRef);
    if (contents instanceof PDFStream_default) {
      this.set(PDFName_default.Contents, context.obj([contentsRef]));
    }
    if (this.autoNormalizeCTM) {
      this.wrapContentStreams(this.context.getPushGraphicsStateContentStream(), this.context.getPopGraphicsStateContentStream());
    }
    const dictOrRef = this.getInheritableAttribute(PDFName_default.Resources);
    const Resources = context.lookupMaybe(dictOrRef, PDFDict_default) || context.obj({});
    this.set(PDFName_default.Resources, Resources);
    const Font2 = Resources.lookupMaybe(PDFName_default.Font, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.Font, Font2);
    const XObject = Resources.lookupMaybe(PDFName_default.XObject, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.XObject, XObject);
    const ExtGState = Resources.lookupMaybe(PDFName_default.ExtGState, PDFDict_default) || context.obj({});
    Resources.set(PDFName_default.ExtGState, ExtGState);
    const Annots = this.Annots() || context.obj([]);
    this.set(PDFName_default.Annots, Annots);
    this.normalized = true;
  }
  normalizedEntries() {
    this.normalize();
    const Annots = this.Annots();
    const Resources = this.Resources();
    const Contents = this.Contents();
    return {
      Annots,
      Resources,
      Contents,
      Font: Resources.lookup(PDFName_default.Font, PDFDict_default),
      XObject: Resources.lookup(PDFName_default.XObject, PDFDict_default),
      ExtGState: Resources.lookup(PDFName_default.ExtGState, PDFDict_default)
    };
  }
};
PDFPageLeaf.InheritableEntries = [
  "Resources",
  "MediaBox",
  "CropBox",
  "Rotate"
];
PDFPageLeaf.withContextAndParent = (context, parent) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.Type, PDFName_default.Page);
  dict.set(PDFName_default.Parent, parent);
  dict.set(PDFName_default.Resources, context.obj({}));
  dict.set(PDFName_default.MediaBox, context.obj([0, 0, 612, 792]));
  return new PDFPageLeaf(dict, context, false);
};
PDFPageLeaf.fromMapWithContext = (map, context, autoNormalizeCTM = true) => new PDFPageLeaf(map, context, autoNormalizeCTM);
var PDFPageLeaf_default = PDFPageLeaf;

// node_modules/pdf-lib-plus-encrypt/es/core/PDFObjectCopier.js
var PDFObjectCopier = class {
  constructor(src, dest) {
    this.traversedObjects = /* @__PURE__ */ new Map();
    this.copy = (object) => object instanceof PDFPageLeaf_default ? this.copyPDFPage(object) : object instanceof PDFDict_default ? this.copyPDFDict(object) : object instanceof PDFArray_default ? this.copyPDFArray(object) : object instanceof PDFStream_default ? this.copyPDFStream(object) : object instanceof PDFRef_default ? this.copyPDFIndirectObject(object) : object.clone();
    this.copyPDFPage = (originalPage) => {
      const clonedPage = originalPage.clone();
      const { InheritableEntries } = PDFPageLeaf_default;
      for (let idx = 0, len = InheritableEntries.length; idx < len; idx++) {
        const key = PDFName_default.of(InheritableEntries[idx]);
        const value = clonedPage.getInheritableAttribute(key);
        if (!clonedPage.get(key) && value)
          clonedPage.set(key, value);
      }
      clonedPage.delete(PDFName_default.of("Parent"));
      return this.copyPDFDict(clonedPage);
    };
    this.copyPDFDict = (originalDict) => {
      if (this.traversedObjects.has(originalDict)) {
        return this.traversedObjects.get(originalDict);
      }
      const clonedDict = originalDict.clone(this.dest);
      this.traversedObjects.set(originalDict, clonedDict);
      const entries = originalDict.entries();
      for (let idx = 0, len = entries.length; idx < len; idx++) {
        const [key, value] = entries[idx];
        clonedDict.set(key, this.copy(value));
      }
      return clonedDict;
    };
    this.copyPDFArray = (originalArray) => {
      if (this.traversedObjects.has(originalArray)) {
        return this.traversedObjects.get(originalArray);
      }
      const clonedArray = originalArray.clone(this.dest);
      this.traversedObjects.set(originalArray, clonedArray);
      for (let idx = 0, len = originalArray.size(); idx < len; idx++) {
        const value = originalArray.get(idx);
        clonedArray.set(idx, this.copy(value));
      }
      return clonedArray;
    };
    this.copyPDFStream = (originalStream) => {
      if (this.traversedObjects.has(originalStream)) {
        return this.traversedObjects.get(originalStream);
      }
      const clonedStream = originalStream.clone(this.dest);
      this.traversedObjects.set(originalStream, clonedStream);
      const entries = originalStream.dict.entries();
      for (let idx = 0, len = entries.length; idx < len; idx++) {
        const [key, value] = entries[idx];
        clonedStream.dict.set(key, this.copy(value));
      }
      return clonedStream;
    };
    this.copyPDFIndirectObject = (ref) => {
      const alreadyMapped = this.traversedObjects.has(ref);
      if (!alreadyMapped) {
        const newRef = this.dest.nextRef();
        this.traversedObjects.set(ref, newRef);
        const dereferencedValue = this.src.lookup(ref);
        if (dereferencedValue) {
          const cloned = this.copy(dereferencedValue);
          this.dest.assign(newRef, cloned);
        }
      }
      return this.traversedObjects.get(ref);
    };
    this.src = src;
    this.dest = dest;
  }
};
PDFObjectCopier.for = (src, dest) => new PDFObjectCopier(src, dest);
var PDFObjectCopier_default = PDFObjectCopier;

// node_modules/pdf-lib-plus-encrypt/node_modules/tslib/tslib.es6.js
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

// node_modules/pdf-lib-plus-encrypt/es/core/document/PDFCrossRefSection.js
var PDFCrossRefSection = class {
  constructor(firstEntry) {
    this.subsections = firstEntry ? [[firstEntry]] : [];
    this.chunkIdx = 0;
    this.chunkLength = firstEntry ? 1 : 0;
  }
  addEntry(ref, offset) {
    this.append({ ref, offset, deleted: false });
  }
  addDeletedEntry(ref, nextFreeObjectNumber) {
    this.append({ ref, offset: nextFreeObjectNumber, deleted: true });
  }
  toString() {
    let section = `xref
`;
    for (let rangeIdx = 0, rangeLen = this.subsections.length; rangeIdx < rangeLen; rangeIdx++) {
      const range2 = this.subsections[rangeIdx];
      section += `${range2[0].ref.objectNumber} ${range2.length}
`;
      for (let entryIdx = 0, entryLen = range2.length; entryIdx < entryLen; entryIdx++) {
        const entry = range2[entryIdx];
        section += padStart(String(entry.offset), 10, "0");
        section += " ";
        section += padStart(String(entry.ref.generationNumber), 5, "0");
        section += " ";
        section += entry.deleted ? "f" : "n";
        section += " \n";
      }
    }
    return section;
  }
  sizeInBytes() {
    let size = 5;
    for (let idx = 0, len = this.subsections.length; idx < len; idx++) {
      const subsection = this.subsections[idx];
      const subsectionLength = subsection.length;
      const [firstEntry] = subsection;
      size += 2;
      size += String(firstEntry.ref.objectNumber).length;
      size += String(subsectionLength).length;
      size += 20 * subsectionLength;
    }
    return size;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.x;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.f;
    buffer[offset++] = CharCodes_default.Newline;
    offset += this.copySubsectionsIntoBuffer(this.subsections, buffer, offset);
    return offset - initialOffset;
  }
  copySubsectionsIntoBuffer(subsections, buffer, offset) {
    const initialOffset = offset;
    const length = subsections.length;
    for (let idx = 0; idx < length; idx++) {
      const subsection = this.subsections[idx];
      const firstObjectNumber = String(subsection[0].ref.objectNumber);
      offset += copyStringIntoBuffer(firstObjectNumber, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      const rangeLength = String(subsection.length);
      offset += copyStringIntoBuffer(rangeLength, buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
      offset += this.copyEntriesIntoBuffer(subsection, buffer, offset);
    }
    return offset - initialOffset;
  }
  copyEntriesIntoBuffer(entries, buffer, offset) {
    const length = entries.length;
    for (let idx = 0; idx < length; idx++) {
      const entry = entries[idx];
      const entryOffset = padStart(String(entry.offset), 10, "0");
      offset += copyStringIntoBuffer(entryOffset, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      const entryGen = padStart(String(entry.ref.generationNumber), 5, "0");
      offset += copyStringIntoBuffer(entryGen, buffer, offset);
      buffer[offset++] = CharCodes_default.Space;
      buffer[offset++] = entry.deleted ? CharCodes_default.f : CharCodes_default.n;
      buffer[offset++] = CharCodes_default.Space;
      buffer[offset++] = CharCodes_default.Newline;
    }
    return 20 * length;
  }
  append(currEntry) {
    if (this.chunkLength === 0) {
      this.subsections.push([currEntry]);
      this.chunkIdx = 0;
      this.chunkLength = 1;
      return;
    }
    const chunk = this.subsections[this.chunkIdx];
    const prevEntry = chunk[this.chunkLength - 1];
    if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
      this.subsections.push([currEntry]);
      this.chunkIdx += 1;
      this.chunkLength = 1;
    } else {
      chunk.push(currEntry);
      this.chunkLength += 1;
    }
  }
};
PDFCrossRefSection.create = () => new PDFCrossRefSection({
  ref: PDFRef_default.of(0, 65535),
  offset: 0,
  deleted: true
});
PDFCrossRefSection.createEmpty = () => new PDFCrossRefSection();
var PDFCrossRefSection_default = PDFCrossRefSection;

// node_modules/pdf-lib-plus-encrypt/es/core/document/PDFTrailer.js
var PDFTrailer = class {
  constructor(lastXRefOffset) {
    this.lastXRefOffset = String(lastXRefOffset);
  }
  toString() {
    return `startxref
${this.lastXRefOffset}
%%EOF`;
  }
  sizeInBytes() {
    return 16 + this.lastXRefOffset.length;
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.s;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.x;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.f;
    buffer[offset++] = CharCodes_default.Newline;
    offset += copyStringIntoBuffer(this.lastXRefOffset, buffer, offset);
    buffer[offset++] = CharCodes_default.Newline;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.Percent;
    buffer[offset++] = CharCodes_default.E;
    buffer[offset++] = CharCodes_default.O;
    buffer[offset++] = CharCodes_default.F;
    return offset - initialOffset;
  }
};
PDFTrailer.forLastCrossRefSectionOffset = (offset) => new PDFTrailer(offset);
var PDFTrailer_default = PDFTrailer;

// node_modules/pdf-lib-plus-encrypt/es/core/document/PDFTrailerDict.js
var PDFTrailerDict = class {
  constructor(dict) {
    this.dict = dict;
  }
  toString() {
    return `trailer
${this.dict.toString()}`;
  }
  sizeInBytes() {
    return 8 + this.dict.sizeInBytes();
  }
  copyBytesInto(buffer, offset) {
    const initialOffset = offset;
    buffer[offset++] = CharCodes_default.t;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.a;
    buffer[offset++] = CharCodes_default.i;
    buffer[offset++] = CharCodes_default.l;
    buffer[offset++] = CharCodes_default.e;
    buffer[offset++] = CharCodes_default.r;
    buffer[offset++] = CharCodes_default.Newline;
    offset += this.dict.copyBytesInto(buffer, offset);
    return offset - initialOffset;
  }
};
PDFTrailerDict.of = (dict) => new PDFTrailerDict(dict);
var PDFTrailerDict_default = PDFTrailerDict;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFObjectStream.js
var PDFObjectStream = class _PDFObjectStream extends PDFFlateStream_default {
  constructor(context, objects, encode = true) {
    super(context.obj({}), encode);
    this.objects = objects;
    this.offsets = this.computeObjectOffsets();
    this.offsetsString = this.computeOffsetsString();
    this.dict.set(PDFName_default.of("Type"), PDFName_default.of("ObjStm"));
    this.dict.set(PDFName_default.of("N"), PDFNumber_default.of(this.objects.length));
    this.dict.set(PDFName_default.of("First"), PDFNumber_default.of(this.offsetsString.length));
  }
  getObjectsCount() {
    return this.objects.length;
  }
  clone(context) {
    return _PDFObjectStream.withContextAndObjects(context || this.dict.context, this.objects.slice(), this.encode);
  }
  getContentsString() {
    let value = this.offsetsString;
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [, object] = this.objects[idx];
      value += `${object}
`;
    }
    return value;
  }
  getUnencodedContents() {
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = copyStringIntoBuffer(this.offsetsString, buffer, 0);
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [, object] = this.objects[idx];
      offset += object.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    return this.offsetsString.length + last(this.offsets)[1] + last(this.objects)[1].sizeInBytes() + 1;
  }
  computeOffsetsString() {
    let offsetsString = "";
    for (let idx = 0, len = this.offsets.length; idx < len; idx++) {
      const [objectNumber, offset] = this.offsets[idx];
      offsetsString += `${objectNumber} ${offset} `;
    }
    return offsetsString;
  }
  computeObjectOffsets() {
    let offset = 0;
    const offsets = new Array(this.objects.length);
    for (let idx = 0, len = this.objects.length; idx < len; idx++) {
      const [ref, object] = this.objects[idx];
      offsets[idx] = [ref.objectNumber, offset];
      offset += object.sizeInBytes() + 1;
    }
    return offsets;
  }
};
PDFObjectStream.withContextAndObjects = (context, objects, encode = true) => new PDFObjectStream(context, objects, encode);
var PDFObjectStream_default = PDFObjectStream;

// node_modules/pdf-lib-plus-encrypt/es/core/writers/PDFWriter.js
var PDFWriter = class {
  constructor(context, objectsPerTick) {
    this.parsedObjects = 0;
    this.shouldWaitForTick = (n) => {
      this.parsedObjects += n;
      return this.parsedObjects % this.objectsPerTick === 0;
    };
    this.context = context;
    this.objectsPerTick = objectsPerTick;
  }
  serializeToBuffer() {
    return __awaiter(this, void 0, void 0, function* () {
      const { size, header, indirectObjects, xref, trailerDict, trailer } = yield this.computeBufferSize();
      let offset = 0;
      const buffer = new Uint8Array(size);
      offset += header.copyBytesInto(buffer, offset);
      buffer[offset++] = CharCodes_default.Newline;
      buffer[offset++] = CharCodes_default.Newline;
      for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
        const [ref, object] = indirectObjects[idx];
        const objectNumber = String(ref.objectNumber);
        offset += copyStringIntoBuffer(objectNumber, buffer, offset);
        buffer[offset++] = CharCodes_default.Space;
        const generationNumber = String(ref.generationNumber);
        offset += copyStringIntoBuffer(generationNumber, buffer, offset);
        buffer[offset++] = CharCodes_default.Space;
        buffer[offset++] = CharCodes_default.o;
        buffer[offset++] = CharCodes_default.b;
        buffer[offset++] = CharCodes_default.j;
        buffer[offset++] = CharCodes_default.Newline;
        offset += object.copyBytesInto(buffer, offset);
        buffer[offset++] = CharCodes_default.Newline;
        buffer[offset++] = CharCodes_default.e;
        buffer[offset++] = CharCodes_default.n;
        buffer[offset++] = CharCodes_default.d;
        buffer[offset++] = CharCodes_default.o;
        buffer[offset++] = CharCodes_default.b;
        buffer[offset++] = CharCodes_default.j;
        buffer[offset++] = CharCodes_default.Newline;
        buffer[offset++] = CharCodes_default.Newline;
        const n = object instanceof PDFObjectStream_default ? object.getObjectsCount() : 1;
        if (this.shouldWaitForTick(n))
          yield waitForTick();
      }
      if (xref) {
        offset += xref.copyBytesInto(buffer, offset);
        buffer[offset++] = CharCodes_default.Newline;
      }
      if (trailerDict) {
        offset += trailerDict.copyBytesInto(buffer, offset);
        buffer[offset++] = CharCodes_default.Newline;
        buffer[offset++] = CharCodes_default.Newline;
      }
      offset += trailer.copyBytesInto(buffer, offset);
      return buffer;
    });
  }
  computeIndirectObjectSize([ref, object]) {
    const refSize = ref.sizeInBytes() + 3;
    const objectSize = object.sizeInBytes() + 9;
    return refSize + objectSize;
  }
  createTrailerDict() {
    return this.context.obj({
      Size: this.context.largestObjectNumber + 1,
      Root: this.context.trailerInfo.Root,
      Encrypt: this.context.trailerInfo.Encrypt,
      Info: this.context.trailerInfo.Info,
      ID: this.context.trailerInfo.ID
    });
  }
  computeBufferSize() {
    return __awaiter(this, void 0, void 0, function* () {
      const header = this.context.header;
      let size = header.sizeInBytes() + 2;
      const xref = PDFCrossRefSection_default.create();
      const pdfSecurity = this.context.getSecurity();
      const indirectObjects = this.context.enumerateIndirectObjects();
      for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
        const indirectObject = indirectObjects[idx];
        const [ref, object] = indirectObject;
        xref.addEntry(ref, size);
        if (pdfSecurity && object instanceof PDFStream_default) {
          this.encrypt(ref, object, pdfSecurity);
        }
        size += this.computeIndirectObjectSize(indirectObject);
        if (this.shouldWaitForTick(1))
          yield waitForTick();
      }
      const xrefOffset = size;
      size += xref.sizeInBytes() + 1;
      const trailerDict = PDFTrailerDict_default.of(this.createTrailerDict());
      size += trailerDict.sizeInBytes() + 2;
      const trailer = PDFTrailer_default.forLastCrossRefSectionOffset(xrefOffset);
      size += trailer.sizeInBytes();
      return { size, header, indirectObjects, xref, trailerDict, trailer };
    });
  }
  encrypt(ref, object, pdfSecurity) {
    const encryptFn = pdfSecurity.getEncryptFn(ref.objectNumber, ref.generationNumber);
    let toBeEncrypt = object.getContents();
    if (encryptFn) {
      toBeEncrypt = new Uint8Array(encryptFn(toBeEncrypt));
      object.updateContent(toBeEncrypt);
    }
  }
};
PDFWriter.forContext = (context, objectsPerTick) => new PDFWriter(context, objectsPerTick);
var PDFWriter_default = PDFWriter;

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFInvalidObject.js
var PDFInvalidObject = class _PDFInvalidObject extends PDFObject_default {
  constructor(data) {
    super();
    this.data = data;
  }
  clone() {
    return _PDFInvalidObject.of(this.data.slice());
  }
  toString() {
    return `PDFInvalidObject(${this.data.length} bytes)`;
  }
  sizeInBytes() {
    return this.data.length;
  }
  copyBytesInto(buffer, offset) {
    const length = this.data.length;
    for (let idx = 0; idx < length; idx++) {
      buffer[offset++] = this.data[idx];
    }
    return length;
  }
};
PDFInvalidObject.of = (data) => new PDFInvalidObject(data);
var PDFInvalidObject_default = PDFInvalidObject;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFCrossRefStream.js
var EntryType;
(function(EntryType2) {
  EntryType2[EntryType2["Deleted"] = 0] = "Deleted";
  EntryType2[EntryType2["Uncompressed"] = 1] = "Uncompressed";
  EntryType2[EntryType2["Compressed"] = 2] = "Compressed";
})(EntryType || (EntryType = {}));
var PDFCrossRefStream = class _PDFCrossRefStream extends PDFFlateStream_default {
  constructor(dict, entries, encode = true) {
    super(dict, encode);
    this.computeIndex = () => {
      const subsections = [];
      let subsectionLength = 0;
      for (let idx = 0, len = this.entries.length; idx < len; idx++) {
        const currEntry = this.entries[idx];
        const prevEntry = this.entries[idx - 1];
        if (idx === 0) {
          subsections.push(currEntry.ref.objectNumber);
        } else if (currEntry.ref.objectNumber - prevEntry.ref.objectNumber > 1) {
          subsections.push(subsectionLength);
          subsections.push(currEntry.ref.objectNumber);
          subsectionLength = 0;
        }
        subsectionLength += 1;
      }
      subsections.push(subsectionLength);
      return subsections;
    };
    this.computeEntryTuples = () => {
      const entryTuples = new Array(this.entries.length);
      for (let idx = 0, len = this.entries.length; idx < len; idx++) {
        const entry = this.entries[idx];
        if (entry.type === EntryType.Deleted) {
          const { type, nextFreeObjectNumber, ref } = entry;
          entryTuples[idx] = [type, nextFreeObjectNumber, ref.generationNumber];
        }
        if (entry.type === EntryType.Uncompressed) {
          const { type, offset, ref } = entry;
          entryTuples[idx] = [type, offset, ref.generationNumber];
        }
        if (entry.type === EntryType.Compressed) {
          const { type, objectStreamRef, index } = entry;
          entryTuples[idx] = [type, objectStreamRef.objectNumber, index];
        }
      }
      return entryTuples;
    };
    this.computeMaxEntryByteWidths = () => {
      const entryTuples = this.entryTuplesCache.access();
      const widths = [0, 0, 0];
      for (let idx = 0, len = entryTuples.length; idx < len; idx++) {
        const [first, second, third] = entryTuples[idx];
        const firstSize = sizeInBytes(first);
        const secondSize = sizeInBytes(second);
        const thirdSize = sizeInBytes(third);
        if (firstSize > widths[0])
          widths[0] = firstSize;
        if (secondSize > widths[1])
          widths[1] = secondSize;
        if (thirdSize > widths[2])
          widths[2] = thirdSize;
      }
      return widths;
    };
    this.entries = entries || [];
    this.entryTuplesCache = Cache_default.populatedBy(this.computeEntryTuples);
    this.maxByteWidthsCache = Cache_default.populatedBy(this.computeMaxEntryByteWidths);
    this.indexCache = Cache_default.populatedBy(this.computeIndex);
    dict.set(PDFName_default.of("Type"), PDFName_default.of("XRef"));
  }
  addDeletedEntry(ref, nextFreeObjectNumber) {
    const type = EntryType.Deleted;
    this.entries.push({ type, ref, nextFreeObjectNumber });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  addUncompressedEntry(ref, offset) {
    const type = EntryType.Uncompressed;
    this.entries.push({ type, ref, offset });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  addCompressedEntry(ref, objectStreamRef, index) {
    const type = EntryType.Compressed;
    this.entries.push({ type, ref, objectStreamRef, index });
    this.entryTuplesCache.invalidate();
    this.maxByteWidthsCache.invalidate();
    this.indexCache.invalidate();
    this.contentsCache.invalidate();
  }
  clone(context) {
    const { dict, entries, encode } = this;
    return _PDFCrossRefStream.of(dict.clone(context), entries.slice(), encode);
  }
  getContentsString() {
    const entryTuples = this.entryTuplesCache.access();
    const byteWidths = this.maxByteWidthsCache.access();
    let value = "";
    for (let entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++) {
      const [first, second, third] = entryTuples[entryIdx];
      const firstBytes = reverseArray(bytesFor(first));
      const secondBytes = reverseArray(bytesFor(second));
      const thirdBytes = reverseArray(bytesFor(third));
      for (let idx = byteWidths[0] - 1; idx >= 0; idx--) {
        value += (firstBytes[idx] || 0).toString(2);
      }
      for (let idx = byteWidths[1] - 1; idx >= 0; idx--) {
        value += (secondBytes[idx] || 0).toString(2);
      }
      for (let idx = byteWidths[2] - 1; idx >= 0; idx--) {
        value += (thirdBytes[idx] || 0).toString(2);
      }
    }
    return value;
  }
  getUnencodedContents() {
    const entryTuples = this.entryTuplesCache.access();
    const byteWidths = this.maxByteWidthsCache.access();
    const buffer = new Uint8Array(this.getUnencodedContentsSize());
    let offset = 0;
    for (let entryIdx = 0, entriesLen = entryTuples.length; entryIdx < entriesLen; entryIdx++) {
      const [first, second, third] = entryTuples[entryIdx];
      const firstBytes = reverseArray(bytesFor(first));
      const secondBytes = reverseArray(bytesFor(second));
      const thirdBytes = reverseArray(bytesFor(third));
      for (let idx = byteWidths[0] - 1; idx >= 0; idx--) {
        buffer[offset++] = firstBytes[idx] || 0;
      }
      for (let idx = byteWidths[1] - 1; idx >= 0; idx--) {
        buffer[offset++] = secondBytes[idx] || 0;
      }
      for (let idx = byteWidths[2] - 1; idx >= 0; idx--) {
        buffer[offset++] = thirdBytes[idx] || 0;
      }
    }
    return buffer;
  }
  getUnencodedContentsSize() {
    const byteWidths = this.maxByteWidthsCache.access();
    const entryWidth = sum(byteWidths);
    return entryWidth * this.entries.length;
  }
  updateDict() {
    super.updateDict();
    const byteWidths = this.maxByteWidthsCache.access();
    const index = this.indexCache.access();
    const { context } = this.dict;
    this.dict.set(PDFName_default.of("W"), context.obj(byteWidths));
    this.dict.set(PDFName_default.of("Index"), context.obj(index));
  }
};
PDFCrossRefStream.create = (dict, encode = true) => {
  const stream2 = new PDFCrossRefStream(dict, [], encode);
  stream2.addDeletedEntry(PDFRef_default.of(0, 65535), 0);
  return stream2;
};
PDFCrossRefStream.of = (dict, entries, encode = true) => new PDFCrossRefStream(dict, entries, encode);
var PDFCrossRefStream_default = PDFCrossRefStream;

// node_modules/pdf-lib-plus-encrypt/es/core/writers/PDFStreamWriter.js
var PDFStreamWriter = class extends PDFWriter_default {
  constructor(context, objectsPerTick, encodeStreams, objectsPerStream) {
    super(context, objectsPerTick);
    this.encodeStreams = encodeStreams;
    this.objectsPerStream = objectsPerStream;
  }
  computeBufferSize() {
    return __awaiter(this, void 0, void 0, function* () {
      let objectNumber = this.context.largestObjectNumber + 1;
      const header = this.context.header;
      let size = header.sizeInBytes() + 2;
      const xrefStream = PDFCrossRefStream_default.create(this.createTrailerDict(), this.encodeStreams);
      const uncompressedObjects = [];
      const compressedObjects = [];
      const objectStreamRefs = [];
      const pdfSecurity = this.context.getSecurity();
      const indirectObjects = this.context.enumerateIndirectObjects();
      for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
        const indirectObject = indirectObjects[idx];
        const [ref, object] = indirectObject;
        const shouldNotCompress = ref === this.context.trailerInfo.Encrypt || object instanceof PDFStream_default || object instanceof PDFInvalidObject_default || ref.generationNumber !== 0;
        if (shouldNotCompress) {
          uncompressedObjects.push(indirectObject);
          if (pdfSecurity && object instanceof PDFStream_default) {
            this.encrypt(ref, object, pdfSecurity);
          }
          xrefStream.addUncompressedEntry(ref, size);
          size += this.computeIndirectObjectSize(indirectObject);
          if (this.shouldWaitForTick(1))
            yield waitForTick();
        } else {
          let chunk = last(compressedObjects);
          let objectStreamRef = last(objectStreamRefs);
          if (!chunk || chunk.length % this.objectsPerStream === 0) {
            chunk = [];
            compressedObjects.push(chunk);
            objectStreamRef = PDFRef_default.of(objectNumber++);
            objectStreamRefs.push(objectStreamRef);
          }
          xrefStream.addCompressedEntry(ref, objectStreamRef, chunk.length);
          chunk.push(indirectObject);
        }
      }
      for (let idx = 0, len = compressedObjects.length; idx < len; idx++) {
        const chunk = compressedObjects[idx];
        const ref = objectStreamRefs[idx];
        const objectStream = PDFObjectStream_default.withContextAndObjects(this.context, chunk, this.encodeStreams);
        if (pdfSecurity)
          this.encrypt(ref, objectStream, pdfSecurity);
        xrefStream.addUncompressedEntry(ref, size);
        size += this.computeIndirectObjectSize([ref, objectStream]);
        uncompressedObjects.push([ref, objectStream]);
        if (this.shouldWaitForTick(chunk.length))
          yield waitForTick();
      }
      const xrefStreamRef = PDFRef_default.of(objectNumber++);
      xrefStream.dict.set(PDFName_default.of("Size"), PDFNumber_default.of(objectNumber));
      xrefStream.addUncompressedEntry(xrefStreamRef, size);
      const xrefOffset = size;
      size += this.computeIndirectObjectSize([xrefStreamRef, xrefStream]);
      uncompressedObjects.push([xrefStreamRef, xrefStream]);
      const trailer = PDFTrailer_default.forLastCrossRefSectionOffset(xrefOffset);
      size += trailer.sizeInBytes();
      return { size, header, indirectObjects: uncompressedObjects, trailer };
    });
  }
};
PDFStreamWriter.forContext = (context, objectsPerTick, encodeStreams = true, objectsPerStream = 50) => new PDFStreamWriter(context, objectsPerTick, encodeStreams, objectsPerStream);
var PDFStreamWriter_default = PDFStreamWriter;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/StandardFontEmbedder.js
var StandardFontEmbedder = class {
  constructor(fontName, customName) {
    this.encoding = fontName === FontNames.ZapfDingbats ? Encodings.ZapfDingbats : fontName === FontNames.Symbol ? Encodings.Symbol : Encodings.WinAnsi;
    this.font = Font.load(fontName);
    this.fontName = this.font.FontName;
    this.customName = customName;
  }
  /**
   * Encode the JavaScript string into this font. (JavaScript encodes strings in
   * Unicode, but standard fonts use either WinAnsi, ZapfDingbats, or Symbol
   * encodings)
   */
  encodeText(text) {
    const glyphs = this.encodeTextAsGlyphs(text);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      hexCodes[idx] = toHexString(glyphs[idx].code);
    }
    return PDFHexString_default.of(hexCodes.join(""));
  }
  widthOfTextAtSize(text, size) {
    const glyphs = this.encodeTextAsGlyphs(text);
    let totalWidth = 0;
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const left = glyphs[idx].name;
      const right = (glyphs[idx + 1] || {}).name;
      const kernAmount = this.font.getXAxisKerningForPair(left, right) || 0;
      totalWidth += this.widthOfGlyph(left) + kernAmount;
    }
    const scale2 = size / 1e3;
    return totalWidth * scale2;
  }
  heightOfFontAtSize(size, options = {}) {
    const { descender = true } = options;
    const { Ascender, Descender, FontBBox } = this.font;
    const yTop = Ascender || FontBBox[3];
    const yBottom = Descender || FontBBox[1];
    let height = yTop - yBottom;
    if (!descender)
      height += Descender || 0;
    return height / 1e3 * size;
  }
  sizeOfFontAtHeight(height) {
    const { Ascender, Descender, FontBBox } = this.font;
    const yTop = Ascender || FontBBox[3];
    const yBottom = Descender || FontBBox[1];
    return 1e3 * height / (yTop - yBottom);
  }
  embedIntoContext(context, ref) {
    const fontDict = context.obj({
      Type: "Font",
      Subtype: "Type1",
      BaseFont: this.customName || this.fontName,
      Encoding: this.encoding === Encodings.WinAnsi ? "WinAnsiEncoding" : void 0
    });
    if (ref) {
      context.assign(ref, fontDict);
      return ref;
    } else {
      return context.register(fontDict);
    }
  }
  widthOfGlyph(glyphName) {
    return this.font.getWidthOfGlyph(glyphName) || 250;
  }
  encodeTextAsGlyphs(text) {
    const codePoints = Array.from(text);
    const glyphs = new Array(codePoints.length);
    for (let idx = 0, len = codePoints.length; idx < len; idx++) {
      const codePoint = toCodePoint(codePoints[idx]);
      glyphs[idx] = this.encoding.encodeUnicodeCodePoint(codePoint);
    }
    return glyphs;
  }
};
StandardFontEmbedder.for = (fontName, customName) => new StandardFontEmbedder(fontName, customName);
var StandardFontEmbedder_default = StandardFontEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/CMap.js
var createCmap = (glyphs, glyphId) => {
  const bfChars = new Array(glyphs.length);
  for (let idx = 0, len = glyphs.length; idx < len; idx++) {
    const glyph = glyphs[idx];
    const id = cmapHexFormat(cmapHexString(glyphId(glyph)));
    const unicode = cmapHexFormat(...glyph.codePoints.map(cmapCodePointFormat));
    bfChars[idx] = [id, unicode];
  }
  return fillCmapTemplate(bfChars);
};
var fillCmapTemplate = (bfChars) => `/CIDInit /ProcSet findresource begin
12 dict begin
begincmap
/CIDSystemInfo <<
  /Registry (Adobe)
  /Ordering (UCS)
  /Supplement 0
>> def
/CMapName /Adobe-Identity-UCS def
/CMapType 2 def
1 begincodespacerange
<0000><ffff>
endcodespacerange
${bfChars.length} beginbfchar
${bfChars.map(([glyphId, codePoint]) => `${glyphId} ${codePoint}`).join("\n")}
endbfchar
endcmap
CMapName currentdict /CMap defineresource pop
end
end`;
var cmapHexFormat = (...values2) => `<${values2.join("")}>`;
var cmapHexString = (value) => toHexStringOfMinLength(value, 4);
var cmapCodePointFormat = (codePoint) => {
  if (isWithinBMP(codePoint))
    return cmapHexString(codePoint);
  if (hasSurrogates(codePoint)) {
    const hs = highSurrogate(codePoint);
    const ls = lowSurrogate(codePoint);
    return `${cmapHexString(hs)}${cmapHexString(ls)}`;
  }
  const hex = toHexString(codePoint);
  const msg = `0x${hex} is not a valid UTF-8 or UTF-16 codepoint.`;
  throw new Error(msg);
};

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/FontFlags.js
var makeFontFlags = (options) => {
  let flags = 0;
  const flipBit = (bit) => {
    flags |= 1 << bit - 1;
  };
  if (options.fixedPitch)
    flipBit(1);
  if (options.serif)
    flipBit(2);
  if (options.symbolic)
    flipBit(3);
  if (options.script)
    flipBit(4);
  if (options.nonsymbolic)
    flipBit(6);
  if (options.italic)
    flipBit(7);
  if (options.allCap)
    flipBit(17);
  if (options.smallCap)
    flipBit(18);
  if (options.forceBold)
    flipBit(19);
  return flags;
};
var deriveFontFlags = (font) => {
  const familyClass = font["OS/2"] ? font["OS/2"].sFamilyClass : 0;
  const flags = makeFontFlags({
    fixedPitch: font.post.isFixedPitch,
    serif: 1 <= familyClass && familyClass <= 7,
    symbolic: true,
    script: familyClass === 10,
    italic: font.head.macStyle.italic
  });
  return flags;
};

// node_modules/pdf-lib-plus-encrypt/es/core/objects/PDFString.js
var PDFString = class _PDFString extends PDFObject_default {
  constructor(value) {
    super();
    this.value = value;
  }
  asBytes() {
    const bytes = [];
    let octal = "";
    let escaped = false;
    const pushByte = (byte) => {
      if (byte !== void 0)
        bytes.push(byte);
      escaped = false;
    };
    for (let idx = 0, len = this.value.length; idx < len; idx++) {
      const char = this.value[idx];
      const byte = toCharCode(char);
      const nextChar = this.value[idx + 1];
      if (!escaped) {
        if (byte === CharCodes_default.BackSlash)
          escaped = true;
        else
          pushByte(byte);
      } else {
        if (byte === CharCodes_default.Newline)
          pushByte();
        else if (byte === CharCodes_default.CarriageReturn)
          pushByte();
        else if (byte === CharCodes_default.n)
          pushByte(CharCodes_default.Newline);
        else if (byte === CharCodes_default.r)
          pushByte(CharCodes_default.CarriageReturn);
        else if (byte === CharCodes_default.t)
          pushByte(CharCodes_default.Tab);
        else if (byte === CharCodes_default.b)
          pushByte(CharCodes_default.Backspace);
        else if (byte === CharCodes_default.f)
          pushByte(CharCodes_default.FormFeed);
        else if (byte === CharCodes_default.LeftParen)
          pushByte(CharCodes_default.LeftParen);
        else if (byte === CharCodes_default.RightParen)
          pushByte(CharCodes_default.RightParen);
        else if (byte === CharCodes_default.Backspace)
          pushByte(CharCodes_default.BackSlash);
        else if (byte >= CharCodes_default.Zero && byte <= CharCodes_default.Seven) {
          octal += char;
          if (octal.length === 3 || !(nextChar >= "0" && nextChar <= "7")) {
            pushByte(parseInt(octal, 8));
            octal = "";
          }
        } else {
          pushByte(byte);
        }
      }
    }
    return new Uint8Array(bytes);
  }
  decodeText() {
    const bytes = this.asBytes();
    if (hasUtf16BOM(bytes))
      return utf16Decode(bytes);
    return pdfDocEncodingDecode(bytes);
  }
  decodeDate() {
    const text = this.decodeText();
    const date = parseDate(text);
    if (!date)
      throw new InvalidPDFDateStringError(text);
    return date;
  }
  asString() {
    return this.value;
  }
  clone() {
    return _PDFString.of(this.value);
  }
  toString() {
    return `(${this.value})`;
  }
  sizeInBytes() {
    return this.value.length + 2;
  }
  copyBytesInto(buffer, offset) {
    buffer[offset++] = CharCodes_default.LeftParen;
    offset += copyStringIntoBuffer(this.value, buffer, offset);
    buffer[offset++] = CharCodes_default.RightParen;
    return this.value.length + 2;
  }
};
PDFString.of = (value) => new PDFString(value);
PDFString.fromDate = (date) => {
  const year = padStart(String(date.getUTCFullYear()), 4, "0");
  const month = padStart(String(date.getUTCMonth() + 1), 2, "0");
  const day = padStart(String(date.getUTCDate()), 2, "0");
  const hours = padStart(String(date.getUTCHours()), 2, "0");
  const mins = padStart(String(date.getUTCMinutes()), 2, "0");
  const secs = padStart(String(date.getUTCSeconds()), 2, "0");
  return new PDFString(`D:${year}${month}${day}${hours}${mins}${secs}Z`);
};
var PDFString_default = PDFString;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/CustomFontEmbedder.js
var CustomFontEmbedder = class _CustomFontEmbedder {
  constructor(font, fontData, customName, fontFeatures) {
    this.allGlyphsInFontSortedById = () => {
      const glyphs = new Array(this.font.characterSet.length);
      for (let idx = 0, len = glyphs.length; idx < len; idx++) {
        const codePoint = this.font.characterSet[idx];
        glyphs[idx] = this.font.glyphForCodePoint(codePoint);
      }
      return sortedUniq(glyphs.sort(byAscendingId), (g) => g.id);
    };
    this.font = font;
    this.scale = 1e3 / this.font.unitsPerEm;
    this.fontData = fontData;
    this.fontName = this.font.postscriptName || "Font";
    this.customName = customName;
    this.fontFeatures = fontFeatures;
    this.baseFontName = "";
    this.glyphCache = Cache_default.populatedBy(this.allGlyphsInFontSortedById);
  }
  static for(fontkit, fontData, customName, fontFeatures) {
    return __awaiter(this, void 0, void 0, function* () {
      const font = yield fontkit.create(fontData);
      return new _CustomFontEmbedder(font, fontData, customName, fontFeatures);
    });
  }
  /**
   * Encode the JavaScript string into this font. (JavaScript encodes strings in
   * Unicode, but embedded fonts use their own custom encodings)
   */
  encodeText(text) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      hexCodes[idx] = toHexStringOfMinLength(glyphs[idx].id, 4);
    }
    return PDFHexString_default.of(hexCodes.join(""));
  }
  // The advanceWidth takes into account kerning automatically, so we don't
  // have to do that manually like we do for the standard fonts.
  widthOfTextAtSize(text, size) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    let totalWidth = 0;
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      totalWidth += glyphs[idx].advanceWidth * this.scale;
    }
    const scale2 = size / 1e3;
    return totalWidth * scale2;
  }
  heightOfFontAtSize(size, options = {}) {
    const { descender = true } = options;
    const { ascent, descent, bbox } = this.font;
    const yTop = (ascent || bbox.maxY) * this.scale;
    const yBottom = (descent || bbox.minY) * this.scale;
    let height = yTop - yBottom;
    if (!descender)
      height -= Math.abs(descent) || 0;
    return height / 1e3 * size;
  }
  sizeOfFontAtHeight(height) {
    const { ascent, descent, bbox } = this.font;
    const yTop = (ascent || bbox.maxY) * this.scale;
    const yBottom = (descent || bbox.minY) * this.scale;
    return 1e3 * height / (yTop - yBottom);
  }
  embedIntoContext(context, ref) {
    this.baseFontName = this.customName || addRandomSuffix(this.fontName);
    return this.embedFontDict(context, ref);
  }
  embedFontDict(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const cidFontDictRef = yield this.embedCIDFontDict(context);
      const unicodeCMapRef = this.embedUnicodeCmap(context);
      const fontDict = context.obj({
        Type: "Font",
        Subtype: "Type0",
        BaseFont: this.baseFontName,
        Encoding: "Identity-H",
        DescendantFonts: [cidFontDictRef],
        ToUnicode: unicodeCMapRef
      });
      if (ref) {
        context.assign(ref, fontDict);
        return ref;
      } else {
        return context.register(fontDict);
      }
    });
  }
  isCFF() {
    return this.font.cff;
  }
  embedCIDFontDict(context) {
    return __awaiter(this, void 0, void 0, function* () {
      const fontDescriptorRef = yield this.embedFontDescriptor(context);
      const cidFontDict = context.obj({
        Type: "Font",
        Subtype: this.isCFF() ? "CIDFontType0" : "CIDFontType2",
        CIDToGIDMap: "Identity",
        BaseFont: this.baseFontName,
        CIDSystemInfo: {
          Registry: PDFString_default.of("Adobe"),
          Ordering: PDFString_default.of("Identity"),
          Supplement: 0
        },
        FontDescriptor: fontDescriptorRef,
        W: this.computeWidths()
      });
      return context.register(cidFontDict);
    });
  }
  embedFontDescriptor(context) {
    return __awaiter(this, void 0, void 0, function* () {
      const fontStreamRef = yield this.embedFontStream(context);
      const { scale: scale2 } = this;
      const { italicAngle, ascent, descent, capHeight, xHeight } = this.font;
      const { minX, minY, maxX, maxY } = this.font.bbox;
      const fontDescriptor = context.obj({
        Type: "FontDescriptor",
        FontName: this.baseFontName,
        Flags: deriveFontFlags(this.font),
        FontBBox: [minX * scale2, minY * scale2, maxX * scale2, maxY * scale2],
        ItalicAngle: italicAngle,
        Ascent: ascent * scale2,
        Descent: descent * scale2,
        CapHeight: (capHeight || ascent) * scale2,
        XHeight: (xHeight || 0) * scale2,
        // Not sure how to compute/find this, nor is anybody else really:
        // https://stackoverflow.com/questions/35485179/stemv-value-of-the-truetype-font
        StemV: 0,
        [this.isCFF() ? "FontFile3" : "FontFile2"]: fontStreamRef
      });
      return context.register(fontDescriptor);
    });
  }
  serializeFont() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.fontData;
    });
  }
  embedFontStream(context) {
    return __awaiter(this, void 0, void 0, function* () {
      const fontStream = context.flateStream(yield this.serializeFont(), {
        Subtype: this.isCFF() ? "CIDFontType0C" : void 0
      });
      return context.register(fontStream);
    });
  }
  embedUnicodeCmap(context) {
    const cmap = createCmap(this.glyphCache.access(), this.glyphId.bind(this));
    const cmapStream = context.flateStream(cmap);
    return context.register(cmapStream);
  }
  glyphId(glyph) {
    return glyph ? glyph.id : -1;
  }
  computeWidths() {
    const glyphs = this.glyphCache.access();
    const widths = [];
    let currSection = [];
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const currGlyph = glyphs[idx];
      const prevGlyph = glyphs[idx - 1];
      const currGlyphId = this.glyphId(currGlyph);
      const prevGlyphId = this.glyphId(prevGlyph);
      if (idx === 0) {
        widths.push(currGlyphId);
      } else if (currGlyphId - prevGlyphId !== 1) {
        widths.push(currSection);
        widths.push(currGlyphId);
        currSection = [];
      }
      currSection.push(currGlyph.advanceWidth * this.scale);
    }
    widths.push(currSection);
    return widths;
  }
};
var CustomFontEmbedder_default = CustomFontEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/CustomFontSubsetEmbedder.js
var CustomFontSubsetEmbedder = class _CustomFontSubsetEmbedder extends CustomFontEmbedder_default {
  constructor(font, fontData, customFontName, fontFeatures) {
    super(font, fontData, customFontName, fontFeatures);
    this.subset = this.font.createSubset();
    this.glyphs = [];
    this.glyphCache = Cache_default.populatedBy(() => this.glyphs);
    this.glyphIdMap = /* @__PURE__ */ new Map();
  }
  static for(fontkit, fontData, customFontName, fontFeatures) {
    return __awaiter(this, void 0, void 0, function* () {
      const font = yield fontkit.create(fontData);
      return new _CustomFontSubsetEmbedder(font, fontData, customFontName, fontFeatures);
    });
  }
  encodeText(text) {
    const { glyphs } = this.font.layout(text, this.fontFeatures);
    const hexCodes = new Array(glyphs.length);
    for (let idx = 0, len = glyphs.length; idx < len; idx++) {
      const glyph = glyphs[idx];
      const subsetGlyphId = this.subset.includeGlyph(glyph);
      this.glyphs[subsetGlyphId - 1] = glyph;
      this.glyphIdMap.set(glyph.id, subsetGlyphId);
      hexCodes[idx] = toHexStringOfMinLength(subsetGlyphId, 4);
    }
    this.glyphCache.invalidate();
    return PDFHexString_default.of(hexCodes.join(""));
  }
  isCFF() {
    return this.subset.cff;
  }
  glyphId(glyph) {
    return glyph ? this.glyphIdMap.get(glyph.id) : -1;
  }
  serializeFont() {
    return new Promise((resolve, reject) => {
      const parts = [];
      this.subset.encodeStream().on("data", (bytes) => parts.push(bytes)).on("end", () => resolve(mergeUint8Arrays(parts))).on("error", (err) => reject(err));
    });
  }
};
var CustomFontSubsetEmbedder_default = CustomFontSubsetEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/FileEmbedder.js
var AFRelationship;
(function(AFRelationship2) {
  AFRelationship2["Source"] = "Source";
  AFRelationship2["Data"] = "Data";
  AFRelationship2["Alternative"] = "Alternative";
  AFRelationship2["Supplement"] = "Supplement";
  AFRelationship2["EncryptedPayload"] = "EncryptedPayload";
  AFRelationship2["FormData"] = "EncryptedPayload";
  AFRelationship2["Schema"] = "Schema";
  AFRelationship2["Unspecified"] = "Unspecified";
})(AFRelationship || (AFRelationship = {}));
var FileEmbedder = class _FileEmbedder {
  constructor(fileData, fileName, options = {}) {
    this.fileData = fileData;
    this.fileName = fileName;
    this.options = options;
  }
  static for(bytes, fileName, options = {}) {
    return new _FileEmbedder(bytes, fileName, options);
  }
  embedIntoContext(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const { mimeType, description, creationDate, modificationDate, afRelationship } = this.options;
      const embeddedFileStream = context.flateStream(this.fileData, {
        Type: "EmbeddedFile",
        Subtype: mimeType !== null && mimeType !== void 0 ? mimeType : void 0,
        Params: {
          Size: this.fileData.length,
          CreationDate: creationDate ? PDFString_default.fromDate(creationDate) : void 0,
          ModDate: modificationDate ? PDFString_default.fromDate(modificationDate) : void 0
        }
      });
      const embeddedFileStreamRef = context.register(embeddedFileStream);
      const fileSpecDict = context.obj({
        Type: "Filespec",
        F: PDFString_default.of(this.fileName),
        UF: PDFHexString_default.fromText(this.fileName),
        EF: { F: embeddedFileStreamRef },
        Desc: description ? PDFHexString_default.fromText(description) : void 0,
        AFRelationship: afRelationship !== null && afRelationship !== void 0 ? afRelationship : void 0
      });
      if (ref) {
        context.assign(ref, fileSpecDict);
        return ref;
      } else {
        return context.register(fileSpecDict);
      }
    });
  }
};
var FileEmbedder_default = FileEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/JpegEmbedder.js
var MARKERS = [
  65472,
  65473,
  65474,
  65475,
  65477,
  65478,
  65479,
  65480,
  65481,
  65482,
  65483,
  65484,
  65485,
  65486,
  65487
];
var ColorSpace;
(function(ColorSpace2) {
  ColorSpace2["DeviceGray"] = "DeviceGray";
  ColorSpace2["DeviceRGB"] = "DeviceRGB";
  ColorSpace2["DeviceCMYK"] = "DeviceCMYK";
})(ColorSpace || (ColorSpace = {}));
var ChannelToColorSpace = {
  1: ColorSpace.DeviceGray,
  3: ColorSpace.DeviceRGB,
  4: ColorSpace.DeviceCMYK
};
var JpegEmbedder = class _JpegEmbedder {
  constructor(imageData, bitsPerComponent, width, height, colorSpace) {
    this.imageData = imageData;
    this.bitsPerComponent = bitsPerComponent;
    this.width = width;
    this.height = height;
    this.colorSpace = colorSpace;
  }
  static for(imageData) {
    return __awaiter(this, void 0, void 0, function* () {
      const dataView = new DataView(imageData.buffer);
      const soi = dataView.getUint16(0);
      if (soi !== 65496)
        throw new Error("SOI not found in JPEG");
      let pos = 2;
      let marker;
      while (pos < dataView.byteLength) {
        marker = dataView.getUint16(pos);
        pos += 2;
        if (MARKERS.includes(marker))
          break;
        pos += dataView.getUint16(pos);
      }
      if (!MARKERS.includes(marker))
        throw new Error("Invalid JPEG");
      pos += 2;
      const bitsPerComponent = dataView.getUint8(pos++);
      const height = dataView.getUint16(pos);
      pos += 2;
      const width = dataView.getUint16(pos);
      pos += 2;
      const channelByte = dataView.getUint8(pos++);
      const channelName = ChannelToColorSpace[channelByte];
      if (!channelName)
        throw new Error("Unknown JPEG channel.");
      const colorSpace = channelName;
      return new _JpegEmbedder(imageData, bitsPerComponent, width, height, colorSpace);
    });
  }
  embedIntoContext(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const xObject = context.stream(this.imageData, {
        Type: "XObject",
        Subtype: "Image",
        BitsPerComponent: this.bitsPerComponent,
        Width: this.width,
        Height: this.height,
        ColorSpace: this.colorSpace,
        Filter: "DCTDecode",
        // CMYK JPEG streams in PDF are typically stored complemented,
        // with 1 as 'off' and 0 as 'on' (PDF 32000-1:2008, 8.6.4.4).
        //
        // Standalone CMYK JPEG (usually exported by Photoshop) are
        // stored inverse, with 0 as 'off' and 1 as 'on', like RGB.
        //
        // Applying a swap here as a hedge that most bytes passing
        // through this method will benefit from it.
        Decode: this.colorSpace === ColorSpace.DeviceCMYK ? [1, 0, 1, 0, 1, 0, 1, 0] : void 0
      });
      if (ref) {
        context.assign(ref, xObject);
        return ref;
      } else {
        return context.register(xObject);
      }
    });
  }
};
var JpegEmbedder_default = JpegEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/utils/png.js
var getImageType = (ctype) => {
  if (ctype === 0)
    return PngType.Greyscale;
  if (ctype === 2)
    return PngType.Truecolour;
  if (ctype === 3)
    return PngType.IndexedColour;
  if (ctype === 4)
    return PngType.GreyscaleWithAlpha;
  if (ctype === 6)
    return PngType.TruecolourWithAlpha;
  throw new Error(`Unknown color type: ${ctype}`);
};
var splitAlphaChannel = (rgbaChannel) => {
  const pixelCount = Math.floor(rgbaChannel.length / 4);
  const rgbChannel = new Uint8Array(pixelCount * 3);
  const alphaChannel = new Uint8Array(pixelCount * 1);
  let rgbaOffset = 0;
  let rgbOffset = 0;
  let alphaOffset = 0;
  while (rgbaOffset < rgbaChannel.length) {
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    rgbChannel[rgbOffset++] = rgbaChannel[rgbaOffset++];
    alphaChannel[alphaOffset++] = rgbaChannel[rgbaOffset++];
  }
  return { rgbChannel, alphaChannel };
};
var PngType;
(function(PngType2) {
  PngType2["Greyscale"] = "Greyscale";
  PngType2["Truecolour"] = "Truecolour";
  PngType2["IndexedColour"] = "IndexedColour";
  PngType2["GreyscaleWithAlpha"] = "GreyscaleWithAlpha";
  PngType2["TruecolourWithAlpha"] = "TruecolourWithAlpha";
})(PngType || (PngType = {}));
var PNG = class {
  constructor(pngData) {
    const upng = UPNG_default.decode(pngData);
    const frames = UPNG_default.toRGBA8(upng);
    if (frames.length > 1)
      throw new Error(`Animated PNGs are not supported`);
    const frame = new Uint8Array(frames[0]);
    const { rgbChannel, alphaChannel } = splitAlphaChannel(frame);
    this.rgbChannel = rgbChannel;
    const hasAlphaValues = alphaChannel.some((a) => a < 255);
    if (hasAlphaValues)
      this.alphaChannel = alphaChannel;
    this.type = getImageType(upng.ctype);
    this.width = upng.width;
    this.height = upng.height;
    this.bitsPerComponent = 8;
  }
};
PNG.load = (pngData) => new PNG(pngData);

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/PngEmbedder.js
var PngEmbedder = class _PngEmbedder {
  constructor(png) {
    this.image = png;
    this.bitsPerComponent = png.bitsPerComponent;
    this.width = png.width;
    this.height = png.height;
    this.colorSpace = "DeviceRGB";
  }
  static for(imageData) {
    return __awaiter(this, void 0, void 0, function* () {
      const png = PNG.load(imageData);
      return new _PngEmbedder(png);
    });
  }
  embedIntoContext(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const SMask = this.embedAlphaChannel(context);
      const xObject = context.flateStream(this.image.rgbChannel, {
        Type: "XObject",
        Subtype: "Image",
        BitsPerComponent: this.image.bitsPerComponent,
        Width: this.image.width,
        Height: this.image.height,
        ColorSpace: this.colorSpace,
        SMask
      });
      if (ref) {
        context.assign(ref, xObject);
        return ref;
      } else {
        return context.register(xObject);
      }
    });
  }
  embedAlphaChannel(context) {
    if (!this.image.alphaChannel)
      return void 0;
    const xObject = context.flateStream(this.image.alphaChannel, {
      Type: "XObject",
      Subtype: "Image",
      Height: this.image.height,
      Width: this.image.width,
      BitsPerComponent: this.image.bitsPerComponent,
      ColorSpace: "DeviceGray",
      Decode: [0, 1]
    });
    return context.register(xObject);
  }
};
var PngEmbedder_default = PngEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/Stream.js
var Stream = class _Stream {
  constructor(buffer, start, length) {
    this.bytes = buffer;
    this.start = start || 0;
    this.pos = this.start;
    this.end = !!start && !!length ? start + length : this.bytes.length;
  }
  get length() {
    return this.end - this.start;
  }
  get isEmpty() {
    return this.length === 0;
  }
  getByte() {
    if (this.pos >= this.end) {
      return -1;
    }
    return this.bytes[this.pos++];
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  // Returns subarray of original buffer, should only be read.
  getBytes(length, forceClamped = false) {
    const bytes = this.bytes;
    const pos = this.pos;
    const strEnd = this.end;
    if (!length) {
      const subarray = bytes.subarray(pos, strEnd);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    } else {
      let end = pos + length;
      if (end > strEnd) {
        end = strEnd;
      }
      this.pos = end;
      const subarray = bytes.subarray(pos, end);
      return forceClamped ? new Uint8ClampedArray(subarray) : subarray;
    }
  }
  peekByte() {
    const peekedByte = this.getByte();
    this.pos--;
    return peekedByte;
  }
  peekBytes(length, forceClamped = false) {
    const bytes = this.getBytes(length, forceClamped);
    this.pos -= bytes.length;
    return bytes;
  }
  skip(n) {
    if (!n) {
      n = 1;
    }
    this.pos += n;
  }
  reset() {
    this.pos = this.start;
  }
  moveStart() {
    this.start = this.pos;
  }
  makeSubStream(start, length) {
    return new _Stream(this.bytes, start, length);
  }
  decode() {
    return this.bytes;
  }
};
var Stream_default = Stream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/DecodeStream.js
var emptyBuffer = new Uint8Array(0);
var DecodeStream = class {
  constructor(maybeMinBufferLength) {
    this.pos = 0;
    this.bufferLength = 0;
    this.eof = false;
    this.buffer = emptyBuffer;
    this.minBufferLength = 512;
    if (maybeMinBufferLength) {
      while (this.minBufferLength < maybeMinBufferLength) {
        this.minBufferLength *= 2;
      }
    }
  }
  get isEmpty() {
    while (!this.eof && this.bufferLength === 0) {
      this.readBlock();
    }
    return this.bufferLength === 0;
  }
  getByte() {
    const pos = this.pos;
    while (this.bufferLength <= pos) {
      if (this.eof) {
        return -1;
      }
      this.readBlock();
    }
    return this.buffer[this.pos++];
  }
  getUint16() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    if (b0 === -1 || b1 === -1) {
      return -1;
    }
    return (b0 << 8) + b1;
  }
  getInt32() {
    const b0 = this.getByte();
    const b1 = this.getByte();
    const b2 = this.getByte();
    const b3 = this.getByte();
    return (b0 << 24) + (b1 << 16) + (b2 << 8) + b3;
  }
  getBytes(length, forceClamped = false) {
    let end;
    const pos = this.pos;
    if (length) {
      this.ensureBuffer(pos + length);
      end = pos + length;
      while (!this.eof && this.bufferLength < end) {
        this.readBlock();
      }
      const bufEnd = this.bufferLength;
      if (end > bufEnd) {
        end = bufEnd;
      }
    } else {
      while (!this.eof) {
        this.readBlock();
      }
      end = this.bufferLength;
    }
    this.pos = end;
    const subarray = this.buffer.subarray(pos, end);
    return forceClamped && !(subarray instanceof Uint8ClampedArray) ? new Uint8ClampedArray(subarray) : subarray;
  }
  peekByte() {
    const peekedByte = this.getByte();
    this.pos--;
    return peekedByte;
  }
  peekBytes(length, forceClamped = false) {
    const bytes = this.getBytes(length, forceClamped);
    this.pos -= bytes.length;
    return bytes;
  }
  skip(n) {
    if (!n) {
      n = 1;
    }
    this.pos += n;
  }
  reset() {
    this.pos = 0;
  }
  makeSubStream(start, length) {
    const end = start + length;
    while (this.bufferLength <= end && !this.eof) {
      this.readBlock();
    }
    return new Stream_default(
      this.buffer,
      start,
      length
      /* dict */
    );
  }
  decode() {
    while (!this.eof)
      this.readBlock();
    return this.buffer.subarray(0, this.bufferLength);
  }
  readBlock() {
    throw new MethodNotImplementedError(this.constructor.name, "readBlock");
  }
  ensureBuffer(requested) {
    const buffer = this.buffer;
    if (requested <= buffer.byteLength) {
      return buffer;
    }
    let size = this.minBufferLength;
    while (size < requested) {
      size *= 2;
    }
    const buffer2 = new Uint8Array(size);
    buffer2.set(buffer);
    return this.buffer = buffer2;
  }
};
var DecodeStream_default = DecodeStream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/Ascii85Stream.js
var isSpace = (ch) => ch === 32 || ch === 9 || ch === 13 || ch === 10;
var Ascii85Stream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    this.stream = stream2;
    this.input = new Uint8Array(5);
    if (maybeLength) {
      maybeLength = 0.8 * maybeLength;
    }
  }
  readBlock() {
    const TILDA_CHAR = 126;
    const Z_LOWER_CHAR = 122;
    const EOF = -1;
    const stream2 = this.stream;
    let c = stream2.getByte();
    while (isSpace(c)) {
      c = stream2.getByte();
    }
    if (c === EOF || c === TILDA_CHAR) {
      this.eof = true;
      return;
    }
    const bufferLength = this.bufferLength;
    let buffer;
    let i;
    if (c === Z_LOWER_CHAR) {
      buffer = this.ensureBuffer(bufferLength + 4);
      for (i = 0; i < 4; ++i) {
        buffer[bufferLength + i] = 0;
      }
      this.bufferLength += 4;
    } else {
      const input = this.input;
      input[0] = c;
      for (i = 1; i < 5; ++i) {
        c = stream2.getByte();
        while (isSpace(c)) {
          c = stream2.getByte();
        }
        input[i] = c;
        if (c === EOF || c === TILDA_CHAR) {
          break;
        }
      }
      buffer = this.ensureBuffer(bufferLength + i - 1);
      this.bufferLength += i - 1;
      if (i < 5) {
        for (; i < 5; ++i) {
          input[i] = 33 + 84;
        }
        this.eof = true;
      }
      let t = 0;
      for (i = 0; i < 5; ++i) {
        t = t * 85 + (input[i] - 33);
      }
      for (i = 3; i >= 0; --i) {
        buffer[bufferLength + i] = t & 255;
        t >>= 8;
      }
    }
  }
};
var Ascii85Stream_default = Ascii85Stream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/AsciiHexStream.js
var AsciiHexStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    this.stream = stream2;
    this.firstDigit = -1;
    if (maybeLength) {
      maybeLength = 0.5 * maybeLength;
    }
  }
  readBlock() {
    const UPSTREAM_BLOCK_SIZE = 8e3;
    const bytes = this.stream.getBytes(UPSTREAM_BLOCK_SIZE);
    if (!bytes.length) {
      this.eof = true;
      return;
    }
    const maxDecodeLength = bytes.length + 1 >> 1;
    const buffer = this.ensureBuffer(this.bufferLength + maxDecodeLength);
    let bufferLength = this.bufferLength;
    let firstDigit = this.firstDigit;
    for (let i = 0, ii = bytes.length; i < ii; i++) {
      const ch = bytes[i];
      let digit;
      if (ch >= 48 && ch <= 57) {
        digit = ch & 15;
      } else if (ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102) {
        digit = (ch & 15) + 9;
      } else if (ch === 62) {
        this.eof = true;
        break;
      } else {
        continue;
      }
      if (firstDigit < 0) {
        firstDigit = digit;
      } else {
        buffer[bufferLength++] = firstDigit << 4 | digit;
        firstDigit = -1;
      }
    }
    if (firstDigit >= 0 && this.eof) {
      buffer[bufferLength++] = firstDigit << 4;
      firstDigit = -1;
    }
    this.firstDigit = firstDigit;
    this.bufferLength = bufferLength;
  }
};
var AsciiHexStream_default = AsciiHexStream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/FlateStream.js
var codeLenCodeMap = new Int32Array([
  16,
  17,
  18,
  0,
  8,
  7,
  9,
  6,
  10,
  5,
  11,
  4,
  12,
  3,
  13,
  2,
  14,
  1,
  15
]);
var lengthDecode = new Int32Array([
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  65547,
  65549,
  65551,
  65553,
  131091,
  131095,
  131099,
  131103,
  196643,
  196651,
  196659,
  196667,
  262211,
  262227,
  262243,
  262259,
  327811,
  327843,
  327875,
  327907,
  258,
  258,
  258
]);
var distDecode = new Int32Array([
  1,
  2,
  3,
  4,
  65541,
  65543,
  131081,
  131085,
  196625,
  196633,
  262177,
  262193,
  327745,
  327777,
  393345,
  393409,
  459009,
  459137,
  524801,
  525057,
  590849,
  591361,
  657409,
  658433,
  724993,
  727041,
  794625,
  798721,
  868353,
  876545
]);
var fixedLitCodeTab = [new Int32Array([
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590016,
  459016,
  524384,
  524320,
  589984,
  524288,
  524416,
  524352,
  590048,
  459012,
  524376,
  524312,
  589968,
  459028,
  524408,
  524344,
  590032,
  459020,
  524392,
  524328,
  59e4,
  524296,
  524424,
  524360,
  590064,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590024,
  459018,
  524388,
  524324,
  589992,
  524292,
  524420,
  524356,
  590056,
  459014,
  524380,
  524316,
  589976,
  459030,
  524412,
  524348,
  590040,
  459022,
  524396,
  524332,
  590008,
  524300,
  524428,
  524364,
  590072,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590020,
  459017,
  524386,
  524322,
  589988,
  524290,
  524418,
  524354,
  590052,
  459013,
  524378,
  524314,
  589972,
  459029,
  524410,
  524346,
  590036,
  459021,
  524394,
  524330,
  590004,
  524298,
  524426,
  524362,
  590068,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590028,
  459019,
  524390,
  524326,
  589996,
  524294,
  524422,
  524358,
  590060,
  459015,
  524382,
  524318,
  589980,
  459031,
  524414,
  524350,
  590044,
  459023,
  524398,
  524334,
  590012,
  524302,
  524430,
  524366,
  590076,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590018,
  459016,
  524385,
  524321,
  589986,
  524289,
  524417,
  524353,
  590050,
  459012,
  524377,
  524313,
  589970,
  459028,
  524409,
  524345,
  590034,
  459020,
  524393,
  524329,
  590002,
  524297,
  524425,
  524361,
  590066,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590026,
  459018,
  524389,
  524325,
  589994,
  524293,
  524421,
  524357,
  590058,
  459014,
  524381,
  524317,
  589978,
  459030,
  524413,
  524349,
  590042,
  459022,
  524397,
  524333,
  590010,
  524301,
  524429,
  524365,
  590074,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590022,
  459017,
  524387,
  524323,
  589990,
  524291,
  524419,
  524355,
  590054,
  459013,
  524379,
  524315,
  589974,
  459029,
  524411,
  524347,
  590038,
  459021,
  524395,
  524331,
  590006,
  524299,
  524427,
  524363,
  590070,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590030,
  459019,
  524391,
  524327,
  589998,
  524295,
  524423,
  524359,
  590062,
  459015,
  524383,
  524319,
  589982,
  459031,
  524415,
  524351,
  590046,
  459023,
  524399,
  524335,
  590014,
  524303,
  524431,
  524367,
  590078,
  459008,
  524368,
  524304,
  524568,
  459024,
  524400,
  524336,
  590017,
  459016,
  524384,
  524320,
  589985,
  524288,
  524416,
  524352,
  590049,
  459012,
  524376,
  524312,
  589969,
  459028,
  524408,
  524344,
  590033,
  459020,
  524392,
  524328,
  590001,
  524296,
  524424,
  524360,
  590065,
  459010,
  524372,
  524308,
  524572,
  459026,
  524404,
  524340,
  590025,
  459018,
  524388,
  524324,
  589993,
  524292,
  524420,
  524356,
  590057,
  459014,
  524380,
  524316,
  589977,
  459030,
  524412,
  524348,
  590041,
  459022,
  524396,
  524332,
  590009,
  524300,
  524428,
  524364,
  590073,
  459009,
  524370,
  524306,
  524570,
  459025,
  524402,
  524338,
  590021,
  459017,
  524386,
  524322,
  589989,
  524290,
  524418,
  524354,
  590053,
  459013,
  524378,
  524314,
  589973,
  459029,
  524410,
  524346,
  590037,
  459021,
  524394,
  524330,
  590005,
  524298,
  524426,
  524362,
  590069,
  459011,
  524374,
  524310,
  524574,
  459027,
  524406,
  524342,
  590029,
  459019,
  524390,
  524326,
  589997,
  524294,
  524422,
  524358,
  590061,
  459015,
  524382,
  524318,
  589981,
  459031,
  524414,
  524350,
  590045,
  459023,
  524398,
  524334,
  590013,
  524302,
  524430,
  524366,
  590077,
  459008,
  524369,
  524305,
  524569,
  459024,
  524401,
  524337,
  590019,
  459016,
  524385,
  524321,
  589987,
  524289,
  524417,
  524353,
  590051,
  459012,
  524377,
  524313,
  589971,
  459028,
  524409,
  524345,
  590035,
  459020,
  524393,
  524329,
  590003,
  524297,
  524425,
  524361,
  590067,
  459010,
  524373,
  524309,
  524573,
  459026,
  524405,
  524341,
  590027,
  459018,
  524389,
  524325,
  589995,
  524293,
  524421,
  524357,
  590059,
  459014,
  524381,
  524317,
  589979,
  459030,
  524413,
  524349,
  590043,
  459022,
  524397,
  524333,
  590011,
  524301,
  524429,
  524365,
  590075,
  459009,
  524371,
  524307,
  524571,
  459025,
  524403,
  524339,
  590023,
  459017,
  524387,
  524323,
  589991,
  524291,
  524419,
  524355,
  590055,
  459013,
  524379,
  524315,
  589975,
  459029,
  524411,
  524347,
  590039,
  459021,
  524395,
  524331,
  590007,
  524299,
  524427,
  524363,
  590071,
  459011,
  524375,
  524311,
  524575,
  459027,
  524407,
  524343,
  590031,
  459019,
  524391,
  524327,
  589999,
  524295,
  524423,
  524359,
  590063,
  459015,
  524383,
  524319,
  589983,
  459031,
  524415,
  524351,
  590047,
  459023,
  524399,
  524335,
  590015,
  524303,
  524431,
  524367,
  590079
]), 9];
var fixedDistCodeTab = [new Int32Array([
  327680,
  327696,
  327688,
  327704,
  327684,
  327700,
  327692,
  327708,
  327682,
  327698,
  327690,
  327706,
  327686,
  327702,
  327694,
  0,
  327681,
  327697,
  327689,
  327705,
  327685,
  327701,
  327693,
  327709,
  327683,
  327699,
  327691,
  327707,
  327687,
  327703,
  327695,
  0
]), 5];
var FlateStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    this.stream = stream2;
    const cmf = stream2.getByte();
    const flg = stream2.getByte();
    if (cmf === -1 || flg === -1) {
      throw new Error(`Invalid header in flate stream: ${cmf}, ${flg}`);
    }
    if ((cmf & 15) !== 8) {
      throw new Error(`Unknown compression method in flate stream: ${cmf}, ${flg}`);
    }
    if (((cmf << 8) + flg) % 31 !== 0) {
      throw new Error(`Bad FCHECK in flate stream: ${cmf}, ${flg}`);
    }
    if (flg & 32) {
      throw new Error(`FDICT bit set in flate stream: ${cmf}, ${flg}`);
    }
    this.codeSize = 0;
    this.codeBuf = 0;
  }
  readBlock() {
    let buffer;
    let len;
    const str = this.stream;
    let hdr = this.getBits(3);
    if (hdr & 1) {
      this.eof = true;
    }
    hdr >>= 1;
    if (hdr === 0) {
      let b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      let blockLen = b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      blockLen |= b << 8;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      let check = b;
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad block header in flate stream");
      }
      check |= b << 8;
      if (check !== (~blockLen & 65535) && (blockLen !== 0 || check !== 0)) {
        throw new Error("Bad uncompressed block length in flate stream");
      }
      this.codeBuf = 0;
      this.codeSize = 0;
      const bufferLength = this.bufferLength;
      buffer = this.ensureBuffer(bufferLength + blockLen);
      const end = bufferLength + blockLen;
      this.bufferLength = end;
      if (blockLen === 0) {
        if (str.peekByte() === -1) {
          this.eof = true;
        }
      } else {
        for (let n = bufferLength; n < end; ++n) {
          if ((b = str.getByte()) === -1) {
            this.eof = true;
            break;
          }
          buffer[n] = b;
        }
      }
      return;
    }
    let litCodeTable;
    let distCodeTable;
    if (hdr === 1) {
      litCodeTable = fixedLitCodeTab;
      distCodeTable = fixedDistCodeTab;
    } else if (hdr === 2) {
      const numLitCodes = this.getBits(5) + 257;
      const numDistCodes = this.getBits(5) + 1;
      const numCodeLenCodes = this.getBits(4) + 4;
      const codeLenCodeLengths = new Uint8Array(codeLenCodeMap.length);
      let i;
      for (i = 0; i < numCodeLenCodes; ++i) {
        codeLenCodeLengths[codeLenCodeMap[i]] = this.getBits(3);
      }
      const codeLenCodeTab = this.generateHuffmanTable(codeLenCodeLengths);
      len = 0;
      i = 0;
      const codes = numLitCodes + numDistCodes;
      const codeLengths = new Uint8Array(codes);
      let bitsLength;
      let bitsOffset;
      let what;
      while (i < codes) {
        const code = this.getCode(codeLenCodeTab);
        if (code === 16) {
          bitsLength = 2;
          bitsOffset = 3;
          what = len;
        } else if (code === 17) {
          bitsLength = 3;
          bitsOffset = 3;
          what = len = 0;
        } else if (code === 18) {
          bitsLength = 7;
          bitsOffset = 11;
          what = len = 0;
        } else {
          codeLengths[i++] = len = code;
          continue;
        }
        let repeatLength = this.getBits(bitsLength) + bitsOffset;
        while (repeatLength-- > 0) {
          codeLengths[i++] = what;
        }
      }
      litCodeTable = this.generateHuffmanTable(codeLengths.subarray(0, numLitCodes));
      distCodeTable = this.generateHuffmanTable(codeLengths.subarray(numLitCodes, codes));
    } else {
      throw new Error("Unknown block type in flate stream");
    }
    buffer = this.buffer;
    let limit = buffer ? buffer.length : 0;
    let pos = this.bufferLength;
    while (true) {
      let code1 = this.getCode(litCodeTable);
      if (code1 < 256) {
        if (pos + 1 >= limit) {
          buffer = this.ensureBuffer(pos + 1);
          limit = buffer.length;
        }
        buffer[pos++] = code1;
        continue;
      }
      if (code1 === 256) {
        this.bufferLength = pos;
        return;
      }
      code1 -= 257;
      code1 = lengthDecode[code1];
      let code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      len = (code1 & 65535) + code2;
      code1 = this.getCode(distCodeTable);
      code1 = distDecode[code1];
      code2 = code1 >> 16;
      if (code2 > 0) {
        code2 = this.getBits(code2);
      }
      const dist = (code1 & 65535) + code2;
      if (pos + len >= limit) {
        buffer = this.ensureBuffer(pos + len);
        limit = buffer.length;
      }
      for (let k = 0; k < len; ++k, ++pos) {
        buffer[pos] = buffer[pos - dist];
      }
    }
  }
  getBits(bits) {
    const str = this.stream;
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < bits) {
      if ((b = str.getByte()) === -1) {
        throw new Error("Bad encoding in flate stream");
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    b = codeBuf & (1 << bits) - 1;
    this.codeBuf = codeBuf >> bits;
    this.codeSize = codeSize -= bits;
    return b;
  }
  getCode(table) {
    const str = this.stream;
    const codes = table[0];
    const maxLen = table[1];
    let codeSize = this.codeSize;
    let codeBuf = this.codeBuf;
    let b;
    while (codeSize < maxLen) {
      if ((b = str.getByte()) === -1) {
        break;
      }
      codeBuf |= b << codeSize;
      codeSize += 8;
    }
    const code = codes[codeBuf & (1 << maxLen) - 1];
    if (typeof codes === "number") {
      console.log("FLATE:", code);
    }
    const codeLen = code >> 16;
    const codeVal = code & 65535;
    if (codeLen < 1 || codeSize < codeLen) {
      throw new Error("Bad encoding in flate stream");
    }
    this.codeBuf = codeBuf >> codeLen;
    this.codeSize = codeSize - codeLen;
    return codeVal;
  }
  generateHuffmanTable(lengths) {
    const n = lengths.length;
    let maxLen = 0;
    let i;
    for (i = 0; i < n; ++i) {
      if (lengths[i] > maxLen) {
        maxLen = lengths[i];
      }
    }
    const size = 1 << maxLen;
    const codes = new Int32Array(size);
    for (let len = 1, code = 0, skip = 2; len <= maxLen; ++len, code <<= 1, skip <<= 1) {
      for (let val = 0; val < n; ++val) {
        if (lengths[val] === len) {
          let code2 = 0;
          let t = code;
          for (i = 0; i < len; ++i) {
            code2 = code2 << 1 | t & 1;
            t >>= 1;
          }
          for (i = code2; i < size; i += skip) {
            codes[i] = len << 16 | val;
          }
          ++code;
        }
      }
    }
    return [codes, maxLen];
  }
};
var FlateStream_default = FlateStream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/LZWStream.js
var LZWStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength, earlyChange) {
    super(maybeLength);
    this.stream = stream2;
    this.cachedData = 0;
    this.bitsCached = 0;
    const maxLzwDictionarySize = 4096;
    const lzwState = {
      earlyChange,
      codeLength: 9,
      nextCode: 258,
      dictionaryValues: new Uint8Array(maxLzwDictionarySize),
      dictionaryLengths: new Uint16Array(maxLzwDictionarySize),
      dictionaryPrevCodes: new Uint16Array(maxLzwDictionarySize),
      currentSequence: new Uint8Array(maxLzwDictionarySize),
      currentSequenceLength: 0
    };
    for (let i = 0; i < 256; ++i) {
      lzwState.dictionaryValues[i] = i;
      lzwState.dictionaryLengths[i] = 1;
    }
    this.lzwState = lzwState;
  }
  readBlock() {
    const blockSize = 512;
    let estimatedDecodedSize = blockSize * 2;
    const decodedSizeDelta = blockSize;
    let i;
    let j;
    let q;
    const lzwState = this.lzwState;
    if (!lzwState) {
      return;
    }
    const earlyChange = lzwState.earlyChange;
    let nextCode = lzwState.nextCode;
    const dictionaryValues = lzwState.dictionaryValues;
    const dictionaryLengths = lzwState.dictionaryLengths;
    const dictionaryPrevCodes = lzwState.dictionaryPrevCodes;
    let codeLength = lzwState.codeLength;
    let prevCode = lzwState.prevCode;
    const currentSequence = lzwState.currentSequence;
    let currentSequenceLength = lzwState.currentSequenceLength;
    let decodedLength = 0;
    let currentBufferLength = this.bufferLength;
    let buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
    for (i = 0; i < blockSize; i++) {
      const code = this.readBits(codeLength);
      const hasPrev = currentSequenceLength > 0;
      if (!code || code < 256) {
        currentSequence[0] = code;
        currentSequenceLength = 1;
      } else if (code >= 258) {
        if (code < nextCode) {
          currentSequenceLength = dictionaryLengths[code];
          for (j = currentSequenceLength - 1, q = code; j >= 0; j--) {
            currentSequence[j] = dictionaryValues[q];
            q = dictionaryPrevCodes[q];
          }
        } else {
          currentSequence[currentSequenceLength++] = currentSequence[0];
        }
      } else if (code === 256) {
        codeLength = 9;
        nextCode = 258;
        currentSequenceLength = 0;
        continue;
      } else {
        this.eof = true;
        delete this.lzwState;
        break;
      }
      if (hasPrev) {
        dictionaryPrevCodes[nextCode] = prevCode;
        dictionaryLengths[nextCode] = dictionaryLengths[prevCode] + 1;
        dictionaryValues[nextCode] = currentSequence[0];
        nextCode++;
        codeLength = nextCode + earlyChange & nextCode + earlyChange - 1 ? codeLength : Math.min(Math.log(nextCode + earlyChange) / 0.6931471805599453 + 1, 12) | 0;
      }
      prevCode = code;
      decodedLength += currentSequenceLength;
      if (estimatedDecodedSize < decodedLength) {
        do {
          estimatedDecodedSize += decodedSizeDelta;
        } while (estimatedDecodedSize < decodedLength);
        buffer = this.ensureBuffer(this.bufferLength + estimatedDecodedSize);
      }
      for (j = 0; j < currentSequenceLength; j++) {
        buffer[currentBufferLength++] = currentSequence[j];
      }
    }
    lzwState.nextCode = nextCode;
    lzwState.codeLength = codeLength;
    lzwState.prevCode = prevCode;
    lzwState.currentSequenceLength = currentSequenceLength;
    this.bufferLength = currentBufferLength;
  }
  readBits(n) {
    let bitsCached = this.bitsCached;
    let cachedData = this.cachedData;
    while (bitsCached < n) {
      const c = this.stream.getByte();
      if (c === -1) {
        this.eof = true;
        return null;
      }
      cachedData = cachedData << 8 | c;
      bitsCached += 8;
    }
    this.bitsCached = bitsCached -= n;
    this.cachedData = cachedData;
    return cachedData >>> bitsCached & (1 << n) - 1;
  }
};
var LZWStream_default = LZWStream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/RunLengthStream.js
var RunLengthStream = class extends DecodeStream_default {
  constructor(stream2, maybeLength) {
    super(maybeLength);
    this.stream = stream2;
  }
  readBlock() {
    const repeatHeader = this.stream.getBytes(2);
    if (!repeatHeader || repeatHeader.length < 2 || repeatHeader[0] === 128) {
      this.eof = true;
      return;
    }
    let buffer;
    let bufferLength = this.bufferLength;
    let n = repeatHeader[0];
    if (n < 128) {
      buffer = this.ensureBuffer(bufferLength + n + 1);
      buffer[bufferLength++] = repeatHeader[1];
      if (n > 0) {
        const source = this.stream.getBytes(n);
        buffer.set(source, bufferLength);
        bufferLength += n;
      }
    } else {
      n = 257 - n;
      const b = repeatHeader[1];
      buffer = this.ensureBuffer(bufferLength + n + 1);
      for (let i = 0; i < n; i++) {
        buffer[bufferLength++] = b;
      }
    }
    this.bufferLength = bufferLength;
  }
};
var RunLengthStream_default = RunLengthStream;

// node_modules/pdf-lib-plus-encrypt/es/core/streams/decode.js
var decodeStream = (stream2, encoding, params) => {
  if (encoding === PDFName_default.of("FlateDecode")) {
    return new FlateStream_default(stream2);
  }
  if (encoding === PDFName_default.of("LZWDecode")) {
    let earlyChange = 1;
    if (params instanceof PDFDict_default) {
      const EarlyChange = params.lookup(PDFName_default.of("EarlyChange"));
      if (EarlyChange instanceof PDFNumber_default) {
        earlyChange = EarlyChange.asNumber();
      }
    }
    return new LZWStream_default(stream2, void 0, earlyChange);
  }
  if (encoding === PDFName_default.of("ASCII85Decode")) {
    return new Ascii85Stream_default(stream2);
  }
  if (encoding === PDFName_default.of("ASCIIHexDecode")) {
    return new AsciiHexStream_default(stream2);
  }
  if (encoding === PDFName_default.of("RunLengthDecode")) {
    return new RunLengthStream_default(stream2);
  }
  throw new UnsupportedEncodingError(encoding.asString());
};
var decodePDFRawStream = ({ dict, contents }) => {
  let stream2 = new Stream_default(contents);
  const Filter = dict.lookup(PDFName_default.of("Filter"));
  const DecodeParms = dict.lookup(PDFName_default.of("DecodeParms"));
  if (Filter instanceof PDFName_default) {
    stream2 = decodeStream(stream2, Filter, DecodeParms);
  } else if (Filter instanceof PDFArray_default) {
    for (let idx = 0, len = Filter.size(); idx < len; idx++) {
      stream2 = decodeStream(stream2, Filter.lookup(idx, PDFName_default), DecodeParms && DecodeParms.lookupMaybe(idx, PDFDict_default));
    }
  } else if (!!Filter) {
    throw new UnexpectedObjectTypeError([PDFName_default, PDFArray_default], Filter);
  }
  return stream2;
};

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/PDFPageEmbedder.js
var fullPageBoundingBox = (page) => {
  const mediaBox = page.MediaBox();
  const width = mediaBox.lookup(2, PDFNumber_default).asNumber() - mediaBox.lookup(0, PDFNumber_default).asNumber();
  const height = mediaBox.lookup(3, PDFNumber_default).asNumber() - mediaBox.lookup(1, PDFNumber_default).asNumber();
  return { left: 0, bottom: 0, right: width, top: height };
};
var boundingBoxAdjustedMatrix = (bb) => [1, 0, 0, 1, -bb.left, -bb.bottom];
var PDFPageEmbedder = class _PDFPageEmbedder {
  constructor(page, boundingBox, transformationMatrix) {
    this.page = page;
    const bb = boundingBox !== null && boundingBox !== void 0 ? boundingBox : fullPageBoundingBox(page);
    this.width = bb.right - bb.left;
    this.height = bb.top - bb.bottom;
    this.boundingBox = bb;
    this.transformationMatrix = transformationMatrix !== null && transformationMatrix !== void 0 ? transformationMatrix : boundingBoxAdjustedMatrix(bb);
  }
  static for(page, boundingBox, transformationMatrix) {
    return __awaiter(this, void 0, void 0, function* () {
      return new _PDFPageEmbedder(page, boundingBox, transformationMatrix);
    });
  }
  embedIntoContext(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const { Contents, Resources } = this.page.normalizedEntries();
      if (!Contents)
        throw new MissingPageContentsEmbeddingError();
      const decodedContents = this.decodeContents(Contents);
      const { left, bottom, right, top } = this.boundingBox;
      const xObject = context.flateStream(decodedContents, {
        Type: "XObject",
        Subtype: "Form",
        FormType: 1,
        BBox: [left, bottom, right, top],
        Matrix: this.transformationMatrix,
        Resources
      });
      if (ref) {
        context.assign(ref, xObject);
        return ref;
      } else {
        return context.register(xObject);
      }
    });
  }
  // `contents` is an array of streams which are merged to include them in the XObject.
  // This methods extracts each stream and joins them with a newline character.
  decodeContents(contents) {
    const newline = Uint8Array.of(CharCodes_default.Newline);
    const decodedContents = [];
    for (let idx = 0, len = contents.size(); idx < len; idx++) {
      const stream2 = contents.lookup(idx, PDFStream_default);
      let content;
      if (stream2 instanceof PDFRawStream_default) {
        content = decodePDFRawStream(stream2).decode();
      } else if (stream2 instanceof PDFContentStream_default) {
        content = stream2.getUnencodedContents();
      } else {
        throw new UnrecognizedStreamTypeError(stream2);
      }
      decodedContents.push(content, newline);
    }
    return mergeIntoTypedArray(...decodedContents);
  }
};
var PDFPageEmbedder_default = PDFPageEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/core/interactive/ViewerPreferences.js
var asEnum = (rawValue, enumType) => {
  if (rawValue === void 0)
    return void 0;
  return enumType[rawValue];
};
var NonFullScreenPageMode;
(function(NonFullScreenPageMode2) {
  NonFullScreenPageMode2["UseNone"] = "UseNone";
  NonFullScreenPageMode2["UseOutlines"] = "UseOutlines";
  NonFullScreenPageMode2["UseThumbs"] = "UseThumbs";
  NonFullScreenPageMode2["UseOC"] = "UseOC";
})(NonFullScreenPageMode || (NonFullScreenPageMode = {}));
var ReadingDirection;
(function(ReadingDirection2) {
  ReadingDirection2["L2R"] = "L2R";
  ReadingDirection2["R2L"] = "R2L";
})(ReadingDirection || (ReadingDirection = {}));
var PrintScaling;
(function(PrintScaling2) {
  PrintScaling2["None"] = "None";
  PrintScaling2["AppDefault"] = "AppDefault";
})(PrintScaling || (PrintScaling = {}));
var Duplex;
(function(Duplex2) {
  Duplex2["Simplex"] = "Simplex";
  Duplex2["DuplexFlipShortEdge"] = "DuplexFlipShortEdge";
  Duplex2["DuplexFlipLongEdge"] = "DuplexFlipLongEdge";
})(Duplex || (Duplex = {}));
var ViewerPreferences = class {
  /** @ignore */
  constructor(dict) {
    this.dict = dict;
  }
  lookupBool(key) {
    const returnObj = this.dict.lookup(PDFName_default.of(key));
    if (returnObj instanceof PDFBool_default)
      return returnObj;
    return void 0;
  }
  lookupName(key) {
    const returnObj = this.dict.lookup(PDFName_default.of(key));
    if (returnObj instanceof PDFName_default)
      return returnObj;
    return void 0;
  }
  /** @ignore */
  HideToolbar() {
    return this.lookupBool("HideToolbar");
  }
  /** @ignore */
  HideMenubar() {
    return this.lookupBool("HideMenubar");
  }
  /** @ignore */
  HideWindowUI() {
    return this.lookupBool("HideWindowUI");
  }
  /** @ignore */
  FitWindow() {
    return this.lookupBool("FitWindow");
  }
  /** @ignore */
  CenterWindow() {
    return this.lookupBool("CenterWindow");
  }
  /** @ignore */
  DisplayDocTitle() {
    return this.lookupBool("DisplayDocTitle");
  }
  /** @ignore */
  NonFullScreenPageMode() {
    return this.lookupName("NonFullScreenPageMode");
  }
  /** @ignore */
  Direction() {
    return this.lookupName("Direction");
  }
  /** @ignore */
  PrintScaling() {
    return this.lookupName("PrintScaling");
  }
  /** @ignore */
  Duplex() {
    return this.lookupName("Duplex");
  }
  /** @ignore */
  PickTrayByPDFSize() {
    return this.lookupBool("PickTrayByPDFSize");
  }
  /** @ignore */
  PrintPageRange() {
    const PrintPageRange = this.dict.lookup(PDFName_default.of("PrintPageRange"));
    if (PrintPageRange instanceof PDFArray_default)
      return PrintPageRange;
    return void 0;
  }
  /** @ignore */
  NumCopies() {
    const NumCopies = this.dict.lookup(PDFName_default.of("NumCopies"));
    if (NumCopies instanceof PDFNumber_default)
      return NumCopies;
    return void 0;
  }
  /**
   * Returns `true` if PDF readers should hide the toolbar menus when displaying
   * this document.
   * @returns Whether or not toolbars should be hidden.
   */
  getHideToolbar() {
    var _a, _b;
    return (_b = (_a = this.HideToolbar()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns `true` if PDF readers should hide the menu bar when displaying this
   * document.
   * @returns Whether or not the menu bar should be hidden.
   */
  getHideMenubar() {
    var _a, _b;
    return (_b = (_a = this.HideMenubar()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns `true` if PDF readers should hide the user interface elements in
   * the document's window (such as scroll bars and navigation controls),
   * leaving only the document's contents displayed.
   * @returns Whether or not user interface elements should be hidden.
   */
  getHideWindowUI() {
    var _a, _b;
    return (_b = (_a = this.HideWindowUI()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns `true` if PDF readers should resize the document's window to fit
   * the size of the first displayed page.
   * @returns Whether or not the window should be resized to fit.
   */
  getFitWindow() {
    var _a, _b;
    return (_b = (_a = this.FitWindow()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns `true` if PDF readers should position the document's window in the
   * center of the screen.
   * @returns Whether or not to center the document window.
   */
  getCenterWindow() {
    var _a, _b;
    return (_b = (_a = this.CenterWindow()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns `true` if the window's title bar should display the document
   * `Title`, taken from the document metadata (see [[PDFDocument.getTitle]]).
   * Returns `false` if the title bar should instead display the filename of the
   * PDF file.
   * @returns Whether to display the document title.
   */
  getDisplayDocTitle() {
    var _a, _b;
    return (_b = (_a = this.DisplayDocTitle()) === null || _a === void 0 ? void 0 : _a.asBoolean()) !== null && _b !== void 0 ? _b : false;
  }
  /**
   * Returns the page mode, which tells the PDF reader how to display the
   * document after exiting full-screen mode.
   * @returns The page mode after exiting full-screen mode.
   */
  getNonFullScreenPageMode() {
    var _a, _b;
    const mode2 = (_a = this.NonFullScreenPageMode()) === null || _a === void 0 ? void 0 : _a.decodeText();
    return (_b = asEnum(mode2, NonFullScreenPageMode)) !== null && _b !== void 0 ? _b : NonFullScreenPageMode.UseNone;
  }
  /**
   * Returns the predominant reading order for text.
   * @returns The text reading order.
   */
  getReadingDirection() {
    var _a, _b;
    const direction = (_a = this.Direction()) === null || _a === void 0 ? void 0 : _a.decodeText();
    return (_b = asEnum(direction, ReadingDirection)) !== null && _b !== void 0 ? _b : ReadingDirection.L2R;
  }
  /**
   * Returns the page scaling option that the PDF reader should select when the
   * print dialog is displayed.
   * @returns The page scaling option.
   */
  getPrintScaling() {
    var _a, _b;
    const scaling = (_a = this.PrintScaling()) === null || _a === void 0 ? void 0 : _a.decodeText();
    return (_b = asEnum(scaling, PrintScaling)) !== null && _b !== void 0 ? _b : PrintScaling.AppDefault;
  }
  /**
   * Returns the paper handling option that should be used when printing the
   * file from the print dialog.
   * @returns The paper handling option.
   */
  getDuplex() {
    var _a;
    const duplex = (_a = this.Duplex()) === null || _a === void 0 ? void 0 : _a.decodeText();
    return asEnum(duplex, Duplex);
  }
  /**
   * Returns `true` if the PDF page size should be used to select the input
   * paper tray.
   * @returns Whether or not the PDF page size should be used to select the
   *          input paper tray.
   */
  getPickTrayByPDFSize() {
    var _a;
    return (_a = this.PickTrayByPDFSize()) === null || _a === void 0 ? void 0 : _a.asBoolean();
  }
  /**
   * Returns an array of page number ranges, which are the values used to
   * initialize the print dialog box when the file is printed. Each range
   * specifies the first (`start`) and last (`end`) pages in a sub-range of
   * pages to be printed. The first page of the PDF file is denoted by 0.
   * For example:
   * ```js
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * const includesPage3 = viewerPrefs
   *   .getPrintRanges()
   *   .some(pr => pr.start =< 2 && pr.end >= 2)
   * if (includesPage3) console.log('printRange includes page 3')
   * ```
   * @returns An array of objects, each with the properties `start` and `end`,
   *          denoting page indices. If not, specified an empty array is
   *          returned.
   */
  getPrintPageRange() {
    const rng = this.PrintPageRange();
    if (!rng)
      return [];
    const pageRanges = [];
    for (let i = 0; i < rng.size(); i += 2) {
      const start = rng.lookup(i, PDFNumber_default).asNumber();
      const end = rng.lookup(i + 1, PDFNumber_default).asNumber();
      pageRanges.push({ start, end });
    }
    return pageRanges;
  }
  /**
   * Returns the number of copies to be printed when the print dialog is opened
   * for this document.
   * @returns The default number of copies to be printed.
   */
  getNumCopies() {
    var _a, _b;
    return (_b = (_a = this.NumCopies()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 1;
  }
  /**
   * Choose whether the PDF reader's toolbars should be hidden while the
   * document is active.
   * @param hideToolbar `true` if the toolbar should be hidden.
   */
  setHideToolbar(hideToolbar) {
    const HideToolbar = this.dict.context.obj(hideToolbar);
    this.dict.set(PDFName_default.of("HideToolbar"), HideToolbar);
  }
  /**
   * Choose whether the PDF reader's menu bar should be hidden while the
   * document is active.
   * @param hideMenubar `true` if the menu bar should be hidden.
   */
  setHideMenubar(hideMenubar) {
    const HideMenubar = this.dict.context.obj(hideMenubar);
    this.dict.set(PDFName_default.of("HideMenubar"), HideMenubar);
  }
  /**
   * Choose whether the PDF reader should hide user interface elements in the
   * document's window (such as scroll bars and navigation controls), leaving
   * only the document's contents displayed.
   * @param hideWindowUI `true` if the user interface elements should be hidden.
   */
  setHideWindowUI(hideWindowUI) {
    const HideWindowUI = this.dict.context.obj(hideWindowUI);
    this.dict.set(PDFName_default.of("HideWindowUI"), HideWindowUI);
  }
  /**
   * Choose whether the PDF reader should resize the document's window to fit
   * the size of the first displayed page.
   * @param fitWindow `true` if the window should be resized.
   */
  setFitWindow(fitWindow) {
    const FitWindow = this.dict.context.obj(fitWindow);
    this.dict.set(PDFName_default.of("FitWindow"), FitWindow);
  }
  /**
   * Choose whether the PDF reader should position the document's window in the
   * center of the screen.
   * @param centerWindow `true` if the window should be centered.
   */
  setCenterWindow(centerWindow) {
    const CenterWindow = this.dict.context.obj(centerWindow);
    this.dict.set(PDFName_default.of("CenterWindow"), CenterWindow);
  }
  /**
   * Choose whether the window's title bar should display the document `Title`
   * taken from the document metadata (see [[PDFDocument.setTitle]]). If
   * `false`, the title bar should instead display the PDF filename.
   * @param displayTitle `true` if the document title should be displayed.
   */
  setDisplayDocTitle(displayTitle) {
    const DisplayDocTitle = this.dict.context.obj(displayTitle);
    this.dict.set(PDFName_default.of("DisplayDocTitle"), DisplayDocTitle);
  }
  /**
   * Choose how the PDF reader should display the document upon exiting
   * full-screen mode. This entry is meaningful only if the value of the
   * `PageMode` entry in the document's [[PDFCatalog]] is `FullScreen`.
   *
   * For example:
   * ```js
   * import { PDFDocument, NonFullScreenPageMode, PDFName } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   *
   * // Set the PageMode
   * pdfDoc.catalog.set(PDFName.of('PageMode'),PDFName.of('FullScreen'))
   *
   * // Set what happens when full-screen is closed
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setNonFullScreenPageMode(NonFullScreenPageMode.UseOutlines)
   * ```
   *
   * @param nonFullScreenPageMode How the document should be displayed upon
   *                              exiting full screen mode.
   */
  setNonFullScreenPageMode(nonFullScreenPageMode) {
    assertIsOneOf(nonFullScreenPageMode, "nonFullScreenPageMode", NonFullScreenPageMode);
    const mode2 = PDFName_default.of(nonFullScreenPageMode);
    this.dict.set(PDFName_default.of("NonFullScreenPageMode"), mode2);
  }
  /**
   * Choose the predominant reading order for text.
   *
   * This entry has no direct effect on the document's contents or page
   * numbering, but may be used to determine the relative positioning of pages
   * when displayed side by side or printed n-up.
   *
   * For example:
   * ```js
   * import { PDFDocument, ReadingDirection } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setReadingDirection(ReadingDirection.R2L)
   * ```
   *
   * @param readingDirection The reading order for text.
   */
  setReadingDirection(readingDirection) {
    assertIsOneOf(readingDirection, "readingDirection", ReadingDirection);
    const direction = PDFName_default.of(readingDirection);
    this.dict.set(PDFName_default.of("Direction"), direction);
  }
  /**
   * Choose the page scaling option that should be selected when a print dialog
   * is displayed for this document.
   *
   * For example:
   * ```js
   * import { PDFDocument, PrintScaling } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setPrintScaling(PrintScaling.None)
   * ```
   *
   * @param printScaling The print scaling option.
   */
  setPrintScaling(printScaling) {
    assertIsOneOf(printScaling, "printScaling", PrintScaling);
    const scaling = PDFName_default.of(printScaling);
    this.dict.set(PDFName_default.of("PrintScaling"), scaling);
  }
  /**
   * Choose the paper handling option that should be selected by default in the
   * print dialog.
   *
   * For example:
   * ```js
   * import { PDFDocument, Duplex } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   * viewerPrefs.setDuplex(Duplex.DuplexFlipShortEdge)
   * ```
   *
   * @param duplex The double or single sided printing option.
   */
  setDuplex(duplex) {
    assertIsOneOf(duplex, "duplex", Duplex);
    const dup = PDFName_default.of(duplex);
    this.dict.set(PDFName_default.of("Duplex"), dup);
  }
  /**
   * Choose whether the PDF document's page size should be used to select the
   * input paper tray when printing. This setting influences only the preset
   * values used to populate the print dialog presented by a PDF reader.
   *
   * If PickTrayByPDFSize is true, the check box in the print dialog associated
   * with input paper tray should be checked. This setting has no effect on
   * operating systems that do not provide the ability to pick the input tray
   * by size.
   *
   * @param pickTrayByPDFSize `true` if the document's page size should be used
   *                          to select the input paper tray.
   */
  setPickTrayByPDFSize(pickTrayByPDFSize) {
    const PickTrayByPDFSize = this.dict.context.obj(pickTrayByPDFSize);
    this.dict.set(PDFName_default.of("PickTrayByPDFSize"), PickTrayByPDFSize);
  }
  /**
   * Choose the page numbers used to initialize the print dialog box when the
   * file is printed. The first page of the PDF file is denoted by 0.
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   * const viewerPrefs = pdfDoc.catalog.getOrCreateViewerPreferences()
   *
   * // We can set the default print range to only the first page
   * viewerPrefs.setPrintPageRange({ start: 0, end: 0 })
   *
   * // Or we can supply noncontiguous ranges (e.g. pages 1, 3, and 5-7)
   * viewerPrefs.setPrintPageRange([
   *   { start: 0, end: 0 },
   *   { start: 2, end: 2 },
   *   { start: 4, end: 6 },
   * ])
   * ```
   *
   * @param printPageRange An object or array of objects, each with the
   *                       properties `start` and `end`, denoting a range of
   *                       page indices.
   */
  setPrintPageRange(printPageRange) {
    if (!Array.isArray(printPageRange))
      printPageRange = [printPageRange];
    const flatRange = [];
    for (let idx = 0, len = printPageRange.length; idx < len; idx++) {
      flatRange.push(printPageRange[idx].start);
      flatRange.push(printPageRange[idx].end);
    }
    assertEachIs(flatRange, "printPageRange", ["number"]);
    const pageRanges = this.dict.context.obj(flatRange);
    this.dict.set(PDFName_default.of("PrintPageRange"), pageRanges);
  }
  /**
   * Choose the default number of copies to be printed when the print dialog is
   * opened for this file.
   * @param numCopies The default number of copies.
   */
  setNumCopies(numCopies) {
    assertRange(numCopies, "numCopies", 1, Number.MAX_VALUE);
    assertInteger(numCopies, "numCopies");
    const NumCopies = this.dict.context.obj(numCopies);
    this.dict.set(PDFName_default.of("NumCopies"), NumCopies);
  }
};
ViewerPreferences.fromDict = (dict) => new ViewerPreferences(dict);
ViewerPreferences.create = (context) => {
  const dict = context.obj({});
  return new ViewerPreferences(dict);
};
var ViewerPreferences_default = ViewerPreferences;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroField.js
var tfRegex = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+Tf/;
var PDFAcroField = class _PDFAcroField {
  constructor(dict, ref) {
    this.dict = dict;
    this.ref = ref;
  }
  T() {
    return this.dict.lookupMaybe(PDFName_default.of("T"), PDFString_default, PDFHexString_default);
  }
  Ff() {
    const numberOrRef = this.getInheritableAttribute(PDFName_default.of("Ff"));
    return this.dict.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  V() {
    const valueOrRef = this.getInheritableAttribute(PDFName_default.of("V"));
    return this.dict.context.lookup(valueOrRef);
  }
  Kids() {
    return this.dict.lookupMaybe(PDFName_default.of("Kids"), PDFArray_default);
  }
  // Parent(): PDFDict | undefined {
  //   return this.dict.lookupMaybe(PDFName.of('Parent'), PDFDict);
  // }
  DA() {
    const da = this.dict.lookup(PDFName_default.of("DA"));
    if (da instanceof PDFString_default || da instanceof PDFHexString_default)
      return da;
    return void 0;
  }
  setKids(kids) {
    this.dict.set(PDFName_default.of("Kids"), this.dict.context.obj(kids));
  }
  getParent() {
    const parentRef = this.dict.get(PDFName_default.of("Parent"));
    if (parentRef instanceof PDFRef_default) {
      const parent = this.dict.lookup(PDFName_default.of("Parent"), PDFDict_default);
      return new _PDFAcroField(parent, parentRef);
    }
    return void 0;
  }
  setParent(parent) {
    if (!parent)
      this.dict.delete(PDFName_default.of("Parent"));
    else
      this.dict.set(PDFName_default.of("Parent"), parent);
  }
  getFullyQualifiedName() {
    const parent = this.getParent();
    if (!parent)
      return this.getPartialName();
    return `${parent.getFullyQualifiedName()}.${this.getPartialName()}`;
  }
  getPartialName() {
    var _a;
    return (_a = this.T()) === null || _a === void 0 ? void 0 : _a.decodeText();
  }
  setPartialName(partialName) {
    if (!partialName)
      this.dict.delete(PDFName_default.of("T"));
    else
      this.dict.set(PDFName_default.of("T"), PDFHexString_default.fromText(partialName));
  }
  setDefaultAppearance(appearance) {
    this.dict.set(PDFName_default.of("DA"), PDFString_default.of(appearance));
  }
  getDefaultAppearance() {
    const DA = this.DA();
    if (DA instanceof PDFHexString_default) {
      return DA.decodeText();
    }
    return DA === null || DA === void 0 ? void 0 : DA.asString();
  }
  setFontSize(fontSize) {
    var _a;
    const name = (_a = this.getFullyQualifiedName()) !== null && _a !== void 0 ? _a : "";
    const da = this.getDefaultAppearance();
    if (!da)
      throw new MissingDAEntryError(name);
    const daMatch = findLastMatch(da, tfRegex);
    if (!daMatch.match)
      throw new MissingTfOperatorError(name);
    const daStart = da.slice(0, daMatch.pos - daMatch.match[0].length);
    const daEnd = daMatch.pos <= da.length ? da.slice(daMatch.pos) : "";
    const fontName = daMatch.match[1];
    const modifiedDa = `${daStart} /${fontName} ${fontSize} Tf ${daEnd}`;
    this.setDefaultAppearance(modifiedDa);
  }
  getFlags() {
    var _a, _b;
    return (_b = (_a = this.Ff()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
  }
  setFlags(flags) {
    this.dict.set(PDFName_default.of("Ff"), PDFNumber_default.of(flags));
  }
  hasFlag(flag3) {
    const flags = this.getFlags();
    return (flags & flag3) !== 0;
  }
  setFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags | flag3);
  }
  clearFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags & ~flag3);
  }
  setFlagTo(flag3, enable) {
    if (enable)
      this.setFlag(flag3);
    else
      this.clearFlag(flag3);
  }
  getInheritableAttribute(name) {
    let attribute;
    this.ascend((node) => {
      if (!attribute)
        attribute = node.dict.get(name);
    });
    return attribute;
  }
  ascend(visitor) {
    visitor(this);
    const parent = this.getParent();
    if (parent)
      parent.ascend(visitor);
  }
};
var PDFAcroField_default = PDFAcroField;

// node_modules/pdf-lib-plus-encrypt/es/core/annotation/BorderStyle.js
var BorderStyle = class {
  constructor(dict) {
    this.dict = dict;
  }
  W() {
    const W = this.dict.lookup(PDFName_default.of("W"));
    if (W instanceof PDFNumber_default)
      return W;
    return void 0;
  }
  getWidth() {
    var _a, _b;
    return (_b = (_a = this.W()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 1;
  }
  setWidth(width) {
    const W = this.dict.context.obj(width);
    this.dict.set(PDFName_default.of("W"), W);
  }
};
BorderStyle.fromDict = (dict) => new BorderStyle(dict);
var BorderStyle_default = BorderStyle;

// node_modules/pdf-lib-plus-encrypt/es/core/annotation/PDFAnnotation.js
var PDFAnnotation = class {
  constructor(dict) {
    this.dict = dict;
  }
  // This is technically required by the PDF spec
  Rect() {
    return this.dict.lookup(PDFName_default.of("Rect"), PDFArray_default);
  }
  AP() {
    return this.dict.lookupMaybe(PDFName_default.of("AP"), PDFDict_default);
  }
  F() {
    const numberOrRef = this.dict.lookup(PDFName_default.of("F"));
    return this.dict.context.lookupMaybe(numberOrRef, PDFNumber_default);
  }
  getRectangle() {
    var _a;
    const Rect = this.Rect();
    return (_a = Rect === null || Rect === void 0 ? void 0 : Rect.asRectangle()) !== null && _a !== void 0 ? _a : { x: 0, y: 0, width: 0, height: 0 };
  }
  setRectangle(rect) {
    const { x, y, width, height } = rect;
    const Rect = this.dict.context.obj([x, y, x + width, y + height]);
    this.dict.set(PDFName_default.of("Rect"), Rect);
  }
  getAppearanceState() {
    const AS = this.dict.lookup(PDFName_default.of("AS"));
    if (AS instanceof PDFName_default)
      return AS;
    return void 0;
  }
  setAppearanceState(state) {
    this.dict.set(PDFName_default.of("AS"), state);
  }
  setAppearances(appearances) {
    this.dict.set(PDFName_default.of("AP"), appearances);
  }
  ensureAP() {
    let AP = this.AP();
    if (!AP) {
      AP = this.dict.context.obj({});
      this.dict.set(PDFName_default.of("AP"), AP);
    }
    return AP;
  }
  getNormalAppearance() {
    const AP = this.ensureAP();
    const N = AP.get(PDFName_default.of("N"));
    if (N instanceof PDFRef_default || N instanceof PDFDict_default)
      return N;
    throw new Error(`Unexpected N type: ${N === null || N === void 0 ? void 0 : N.constructor.name}`);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setNormalAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("N"), appearance);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setRolloverAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("R"), appearance);
  }
  /** @param appearance A PDFDict or PDFStream (direct or ref) */
  setDownAppearance(appearance) {
    const AP = this.ensureAP();
    AP.set(PDFName_default.of("D"), appearance);
  }
  removeRolloverAppearance() {
    const AP = this.AP();
    AP === null || AP === void 0 ? void 0 : AP.delete(PDFName_default.of("R"));
  }
  removeDownAppearance() {
    const AP = this.AP();
    AP === null || AP === void 0 ? void 0 : AP.delete(PDFName_default.of("D"));
  }
  getAppearances() {
    const AP = this.AP();
    if (!AP)
      return void 0;
    const N = AP.lookup(PDFName_default.of("N"), PDFDict_default, PDFStream_default);
    const R = AP.lookupMaybe(PDFName_default.of("R"), PDFDict_default, PDFStream_default);
    const D = AP.lookupMaybe(PDFName_default.of("D"), PDFDict_default, PDFStream_default);
    return { normal: N, rollover: R, down: D };
  }
  getFlags() {
    var _a, _b;
    return (_b = (_a = this.F()) === null || _a === void 0 ? void 0 : _a.asNumber()) !== null && _b !== void 0 ? _b : 0;
  }
  setFlags(flags) {
    this.dict.set(PDFName_default.of("F"), PDFNumber_default.of(flags));
  }
  hasFlag(flag3) {
    const flags = this.getFlags();
    return (flags & flag3) !== 0;
  }
  setFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags | flag3);
  }
  clearFlag(flag3) {
    const flags = this.getFlags();
    this.setFlags(flags & ~flag3);
  }
  setFlagTo(flag3, enable) {
    if (enable)
      this.setFlag(flag3);
    else
      this.clearFlag(flag3);
  }
};
PDFAnnotation.fromDict = (dict) => new PDFAnnotation(dict);
var PDFAnnotation_default = PDFAnnotation;

// node_modules/pdf-lib-plus-encrypt/es/core/annotation/AppearanceCharacteristics.js
var AppearanceCharacteristics = class {
  constructor(dict) {
    this.dict = dict;
  }
  R() {
    const R = this.dict.lookup(PDFName_default.of("R"));
    if (R instanceof PDFNumber_default)
      return R;
    return void 0;
  }
  BC() {
    const BC = this.dict.lookup(PDFName_default.of("BC"));
    if (BC instanceof PDFArray_default)
      return BC;
    return void 0;
  }
  BG() {
    const BG = this.dict.lookup(PDFName_default.of("BG"));
    if (BG instanceof PDFArray_default)
      return BG;
    return void 0;
  }
  CA() {
    const CA = this.dict.lookup(PDFName_default.of("CA"));
    if (CA instanceof PDFHexString_default || CA instanceof PDFString_default)
      return CA;
    return void 0;
  }
  RC() {
    const RC = this.dict.lookup(PDFName_default.of("RC"));
    if (RC instanceof PDFHexString_default || RC instanceof PDFString_default)
      return RC;
    return void 0;
  }
  AC() {
    const AC = this.dict.lookup(PDFName_default.of("AC"));
    if (AC instanceof PDFHexString_default || AC instanceof PDFString_default)
      return AC;
    return void 0;
  }
  getRotation() {
    var _a;
    return (_a = this.R()) === null || _a === void 0 ? void 0 : _a.asNumber();
  }
  getBorderColor() {
    const BC = this.BC();
    if (!BC)
      return void 0;
    const components = [];
    for (let idx = 0, len = BC === null || BC === void 0 ? void 0 : BC.size(); idx < len; idx++) {
      const component = BC.get(idx);
      if (component instanceof PDFNumber_default)
        components.push(component.asNumber());
    }
    return components;
  }
  getBackgroundColor() {
    const BG = this.BG();
    if (!BG)
      return void 0;
    const components = [];
    for (let idx = 0, len = BG === null || BG === void 0 ? void 0 : BG.size(); idx < len; idx++) {
      const component = BG.get(idx);
      if (component instanceof PDFNumber_default)
        components.push(component.asNumber());
    }
    return components;
  }
  getCaptions() {
    const CA = this.CA();
    const RC = this.RC();
    const AC = this.AC();
    return {
      normal: CA === null || CA === void 0 ? void 0 : CA.decodeText(),
      rollover: RC === null || RC === void 0 ? void 0 : RC.decodeText(),
      down: AC === null || AC === void 0 ? void 0 : AC.decodeText()
    };
  }
  setRotation(rotation) {
    const R = this.dict.context.obj(rotation);
    this.dict.set(PDFName_default.of("R"), R);
  }
  setBorderColor(color) {
    const BC = this.dict.context.obj(color);
    this.dict.set(PDFName_default.of("BC"), BC);
  }
  setBackgroundColor(color) {
    const BG = this.dict.context.obj(color);
    this.dict.set(PDFName_default.of("BG"), BG);
  }
  setCaptions(captions) {
    const CA = PDFHexString_default.fromText(captions.normal);
    this.dict.set(PDFName_default.of("CA"), CA);
    if (captions.rollover) {
      const RC = PDFHexString_default.fromText(captions.rollover);
      this.dict.set(PDFName_default.of("RC"), RC);
    } else {
      this.dict.delete(PDFName_default.of("RC"));
    }
    if (captions.down) {
      const AC = PDFHexString_default.fromText(captions.down);
      this.dict.set(PDFName_default.of("AC"), AC);
    } else {
      this.dict.delete(PDFName_default.of("AC"));
    }
  }
};
AppearanceCharacteristics.fromDict = (dict) => new AppearanceCharacteristics(dict);
var AppearanceCharacteristics_default = AppearanceCharacteristics;

// node_modules/pdf-lib-plus-encrypt/es/core/annotation/PDFWidgetAnnotation.js
var PDFWidgetAnnotation = class extends PDFAnnotation_default {
  MK() {
    const MK = this.dict.lookup(PDFName_default.of("MK"));
    if (MK instanceof PDFDict_default)
      return MK;
    return void 0;
  }
  BS() {
    const BS = this.dict.lookup(PDFName_default.of("BS"));
    if (BS instanceof PDFDict_default)
      return BS;
    return void 0;
  }
  DA() {
    const da = this.dict.lookup(PDFName_default.of("DA"));
    if (da instanceof PDFString_default || da instanceof PDFHexString_default)
      return da;
    return void 0;
  }
  P() {
    const P = this.dict.get(PDFName_default.of("P"));
    if (P instanceof PDFRef_default)
      return P;
    return void 0;
  }
  setDefaultAppearance(appearance) {
    this.dict.set(PDFName_default.of("DA"), PDFString_default.of(appearance));
  }
  getDefaultAppearance() {
    const DA = this.DA();
    if (DA instanceof PDFHexString_default) {
      return DA.decodeText();
    }
    return DA === null || DA === void 0 ? void 0 : DA.asString();
  }
  getAppearanceCharacteristics() {
    const MK = this.MK();
    if (MK)
      return AppearanceCharacteristics_default.fromDict(MK);
    return void 0;
  }
  getOrCreateAppearanceCharacteristics() {
    const MK = this.MK();
    if (MK)
      return AppearanceCharacteristics_default.fromDict(MK);
    const ac = AppearanceCharacteristics_default.fromDict(this.dict.context.obj({}));
    this.dict.set(PDFName_default.of("MK"), ac.dict);
    return ac;
  }
  getBorderStyle() {
    const BS = this.BS();
    if (BS)
      return BorderStyle_default.fromDict(BS);
    return void 0;
  }
  getOrCreateBorderStyle() {
    const BS = this.BS();
    if (BS)
      return BorderStyle_default.fromDict(BS);
    const bs = BorderStyle_default.fromDict(this.dict.context.obj({}));
    this.dict.set(PDFName_default.of("BS"), bs.dict);
    return bs;
  }
  getOnValue() {
    var _a;
    const normal = (_a = this.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
    if (normal instanceof PDFDict_default) {
      const keys = normal.keys();
      for (let idx = 0, len = keys.length; idx < len; idx++) {
        const key = keys[idx];
        if (key !== PDFName_default.of("Off"))
          return key;
      }
    }
    return void 0;
  }
};
PDFWidgetAnnotation.fromDict = (dict) => new PDFWidgetAnnotation(dict);
PDFWidgetAnnotation.create = (context, parent) => {
  const dict = context.obj({
    Type: "Annot",
    Subtype: "Widget",
    Rect: [0, 0, 0, 0],
    Parent: parent
  });
  return new PDFWidgetAnnotation(dict);
};
var PDFWidgetAnnotation_default = PDFWidgetAnnotation;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroTerminal.js
var PDFAcroTerminal = class extends PDFAcroField_default {
  FT() {
    const nameOrRef = this.getInheritableAttribute(PDFName_default.of("FT"));
    return this.dict.context.lookup(nameOrRef, PDFName_default);
  }
  getWidgets() {
    const kidDicts = this.Kids();
    if (!kidDicts)
      return [PDFWidgetAnnotation_default.fromDict(this.dict)];
    const widgets = new Array(kidDicts.size());
    for (let idx = 0, len = kidDicts.size(); idx < len; idx++) {
      const dict = kidDicts.lookup(idx, PDFDict_default);
      widgets[idx] = PDFWidgetAnnotation_default.fromDict(dict);
    }
    return widgets;
  }
  addWidget(ref) {
    const { Kids } = this.normalizedEntries();
    Kids.push(ref);
  }
  removeWidget(idx) {
    const kidDicts = this.Kids();
    if (!kidDicts) {
      if (idx !== 0)
        throw new IndexOutOfBoundsError(idx, 0, 0);
      this.setKids([]);
    } else {
      if (idx < 0 || idx > kidDicts.size()) {
        throw new IndexOutOfBoundsError(idx, 0, kidDicts.size());
      }
      kidDicts.remove(idx);
    }
  }
  normalizedEntries() {
    let Kids = this.Kids();
    if (!Kids) {
      Kids = this.dict.context.obj([this.ref]);
      this.dict.set(PDFName_default.of("Kids"), Kids);
    }
    return { Kids };
  }
};
PDFAcroTerminal.fromDict = (dict, ref) => new PDFAcroTerminal(dict, ref);
var PDFAcroTerminal_default = PDFAcroTerminal;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroButton.js
var PDFAcroButton = class extends PDFAcroTerminal_default {
  Opt() {
    return this.dict.lookupMaybe(PDFName_default.of("Opt"), PDFString_default, PDFHexString_default, PDFArray_default);
  }
  setOpt(opt) {
    this.dict.set(PDFName_default.of("Opt"), this.dict.context.obj(opt));
  }
  getExportValues() {
    const opt = this.Opt();
    if (!opt)
      return void 0;
    if (opt instanceof PDFString_default || opt instanceof PDFHexString_default) {
      return [opt];
    }
    const values2 = [];
    for (let idx = 0, len = opt.size(); idx < len; idx++) {
      const value = opt.lookup(idx);
      if (value instanceof PDFString_default || value instanceof PDFHexString_default) {
        values2.push(value);
      }
    }
    return values2;
  }
  removeExportValue(idx) {
    const opt = this.Opt();
    if (!opt)
      return;
    if (opt instanceof PDFString_default || opt instanceof PDFHexString_default) {
      if (idx !== 0)
        throw new IndexOutOfBoundsError(idx, 0, 0);
      this.setOpt([]);
    } else {
      if (idx < 0 || idx > opt.size()) {
        throw new IndexOutOfBoundsError(idx, 0, opt.size());
      }
      opt.remove(idx);
    }
  }
  // Enforce use use of /Opt even if it isn't strictly necessary
  normalizeExportValues() {
    var _a, _b, _c, _d;
    const exportValues = (_a = this.getExportValues()) !== null && _a !== void 0 ? _a : [];
    const Opt = [];
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const exportVal = (_b = exportValues[idx]) !== null && _b !== void 0 ? _b : PDFHexString_default.fromText((_d = (_c = widget.getOnValue()) === null || _c === void 0 ? void 0 : _c.decodeText()) !== null && _d !== void 0 ? _d : "");
      Opt.push(exportVal);
    }
    this.setOpt(Opt);
  }
  /**
   * Reuses existing opt if one exists with the same value (assuming
   * `useExistingIdx` is `true`). Returns index of existing (or new) opt.
   */
  addOpt(opt, useExistingOptIdx) {
    var _a;
    this.normalizeExportValues();
    const optText = opt.decodeText();
    let existingIdx;
    if (useExistingOptIdx) {
      const exportValues = (_a = this.getExportValues()) !== null && _a !== void 0 ? _a : [];
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        const exportVal = exportValues[idx];
        if (exportVal.decodeText() === optText)
          existingIdx = idx;
      }
    }
    const Opt = this.Opt();
    Opt.push(opt);
    return existingIdx !== null && existingIdx !== void 0 ? existingIdx : Opt.size() - 1;
  }
  addWidgetWithOpt(widget, opt, useExistingOptIdx) {
    const optIdx = this.addOpt(opt, useExistingOptIdx);
    const apStateValue = PDFName_default.of(String(optIdx));
    this.addWidget(widget);
    return apStateValue;
  }
};
var PDFAcroButton_default = PDFAcroButton;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroCheckBox.js
var PDFAcroCheckBox = class extends PDFAcroButton_default {
  setValue(value) {
    var _a;
    const onValue = (_a = this.getOnValue()) !== null && _a !== void 0 ? _a : PDFName_default.of("Yes");
    if (value !== onValue && value !== PDFName_default.of("Off")) {
      throw new InvalidAcroFieldValueError();
    }
    this.dict.set(PDFName_default.of("V"), value);
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getOnValue() === value ? value : PDFName_default.of("Off");
      widget.setAppearanceState(state);
    }
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFName_default)
      return v;
    return PDFName_default.of("Off");
  }
  getOnValue() {
    const [widget] = this.getWidgets();
    return widget === null || widget === void 0 ? void 0 : widget.getOnValue();
  }
};
PDFAcroCheckBox.fromDict = (dict, ref) => new PDFAcroCheckBox(dict, ref);
PDFAcroCheckBox.create = (context) => {
  const dict = context.obj({
    FT: "Btn",
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroCheckBox(dict, ref);
};
var PDFAcroCheckBox_default = PDFAcroCheckBox;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/flags.js
var flag = (bitIndex) => 1 << bitIndex;
var AcroFieldFlags;
(function(AcroFieldFlags2) {
  AcroFieldFlags2[AcroFieldFlags2["ReadOnly"] = flag(1 - 1)] = "ReadOnly";
  AcroFieldFlags2[AcroFieldFlags2["Required"] = flag(2 - 1)] = "Required";
  AcroFieldFlags2[AcroFieldFlags2["NoExport"] = flag(3 - 1)] = "NoExport";
})(AcroFieldFlags || (AcroFieldFlags = {}));
var AcroButtonFlags;
(function(AcroButtonFlags2) {
  AcroButtonFlags2[AcroButtonFlags2["NoToggleToOff"] = flag(15 - 1)] = "NoToggleToOff";
  AcroButtonFlags2[AcroButtonFlags2["Radio"] = flag(16 - 1)] = "Radio";
  AcroButtonFlags2[AcroButtonFlags2["PushButton"] = flag(17 - 1)] = "PushButton";
  AcroButtonFlags2[AcroButtonFlags2["RadiosInUnison"] = flag(26 - 1)] = "RadiosInUnison";
})(AcroButtonFlags || (AcroButtonFlags = {}));
var AcroTextFlags;
(function(AcroTextFlags2) {
  AcroTextFlags2[AcroTextFlags2["Multiline"] = flag(13 - 1)] = "Multiline";
  AcroTextFlags2[AcroTextFlags2["Password"] = flag(14 - 1)] = "Password";
  AcroTextFlags2[AcroTextFlags2["FileSelect"] = flag(21 - 1)] = "FileSelect";
  AcroTextFlags2[AcroTextFlags2["DoNotSpellCheck"] = flag(23 - 1)] = "DoNotSpellCheck";
  AcroTextFlags2[AcroTextFlags2["DoNotScroll"] = flag(24 - 1)] = "DoNotScroll";
  AcroTextFlags2[AcroTextFlags2["Comb"] = flag(25 - 1)] = "Comb";
  AcroTextFlags2[AcroTextFlags2["RichText"] = flag(26 - 1)] = "RichText";
})(AcroTextFlags || (AcroTextFlags = {}));
var AcroChoiceFlags;
(function(AcroChoiceFlags2) {
  AcroChoiceFlags2[AcroChoiceFlags2["Combo"] = flag(18 - 1)] = "Combo";
  AcroChoiceFlags2[AcroChoiceFlags2["Edit"] = flag(19 - 1)] = "Edit";
  AcroChoiceFlags2[AcroChoiceFlags2["Sort"] = flag(20 - 1)] = "Sort";
  AcroChoiceFlags2[AcroChoiceFlags2["MultiSelect"] = flag(22 - 1)] = "MultiSelect";
  AcroChoiceFlags2[AcroChoiceFlags2["DoNotSpellCheck"] = flag(23 - 1)] = "DoNotSpellCheck";
  AcroChoiceFlags2[AcroChoiceFlags2["CommitOnSelChange"] = flag(27 - 1)] = "CommitOnSelChange";
})(AcroChoiceFlags || (AcroChoiceFlags = {}));

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroChoice.js
var PDFAcroChoice = class extends PDFAcroTerminal_default {
  setValues(values2) {
    if (this.hasFlag(AcroChoiceFlags.Combo) && !this.hasFlag(AcroChoiceFlags.Edit) && !this.valuesAreValid(values2)) {
      throw new InvalidAcroFieldValueError();
    }
    if (values2.length === 0) {
      this.dict.delete(PDFName_default.of("V"));
    }
    if (values2.length === 1) {
      this.dict.set(PDFName_default.of("V"), values2[0]);
    }
    if (values2.length > 1) {
      if (!this.hasFlag(AcroChoiceFlags.MultiSelect)) {
        throw new MultiSelectValueError();
      }
      this.dict.set(PDFName_default.of("V"), this.dict.context.obj(values2));
    }
    this.updateSelectedIndices(values2);
  }
  valuesAreValid(values2) {
    const options = this.getOptions();
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      const val = values2[idx].decodeText();
      if (!options.find((o) => val === (o.display || o.value).decodeText())) {
        return false;
      }
    }
    return true;
  }
  updateSelectedIndices(values2) {
    if (values2.length > 1) {
      const indices = new Array(values2.length);
      const options = this.getOptions();
      for (let idx = 0, len = values2.length; idx < len; idx++) {
        const val = values2[idx].decodeText();
        indices[idx] = options.findIndex((o) => val === (o.display || o.value).decodeText());
      }
      this.dict.set(PDFName_default.of("I"), this.dict.context.obj(indices.sort()));
    } else {
      this.dict.delete(PDFName_default.of("I"));
    }
  }
  getValues() {
    const v = this.V();
    if (v instanceof PDFString_default || v instanceof PDFHexString_default)
      return [v];
    if (v instanceof PDFArray_default) {
      const values2 = [];
      for (let idx = 0, len = v.size(); idx < len; idx++) {
        const value = v.lookup(idx);
        if (value instanceof PDFString_default || value instanceof PDFHexString_default) {
          values2.push(value);
        }
      }
      return values2;
    }
    return [];
  }
  Opt() {
    return this.dict.lookupMaybe(PDFName_default.of("Opt"), PDFString_default, PDFHexString_default, PDFArray_default);
  }
  setOptions(options) {
    const newOpt = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { value, display } = options[idx];
      newOpt[idx] = this.dict.context.obj([value, display || value]);
    }
    this.dict.set(PDFName_default.of("Opt"), this.dict.context.obj(newOpt));
  }
  getOptions() {
    const Opt = this.Opt();
    if (Opt instanceof PDFString_default || Opt instanceof PDFHexString_default) {
      return [{ value: Opt, display: Opt }];
    }
    if (Opt instanceof PDFArray_default) {
      const res = [];
      for (let idx = 0, len = Opt.size(); idx < len; idx++) {
        const item = Opt.lookup(idx);
        if (item instanceof PDFString_default || item instanceof PDFHexString_default) {
          res.push({ value: item, display: item });
        }
        if (item instanceof PDFArray_default) {
          if (item.size() > 0) {
            const first = item.lookup(0, PDFString_default, PDFHexString_default);
            const second = item.lookupMaybe(1, PDFString_default, PDFHexString_default);
            res.push({ value: first, display: second || first });
          }
        }
      }
      return res;
    }
    return [];
  }
};
var PDFAcroChoice_default = PDFAcroChoice;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroComboBox.js
var PDFAcroComboBox = class extends PDFAcroChoice_default {
};
PDFAcroComboBox.fromDict = (dict, ref) => new PDFAcroComboBox(dict, ref);
PDFAcroComboBox.create = (context) => {
  const dict = context.obj({
    FT: "Ch",
    Ff: AcroChoiceFlags.Combo,
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroComboBox(dict, ref);
};
var PDFAcroComboBox_default = PDFAcroComboBox;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroNonTerminal.js
var PDFAcroNonTerminal = class extends PDFAcroField_default {
  addField(field) {
    const { Kids } = this.normalizedEntries();
    Kids === null || Kids === void 0 ? void 0 : Kids.push(field);
  }
  normalizedEntries() {
    let Kids = this.Kids();
    if (!Kids) {
      Kids = this.dict.context.obj([]);
      this.dict.set(PDFName_default.of("Kids"), Kids);
    }
    return { Kids };
  }
};
PDFAcroNonTerminal.fromDict = (dict, ref) => new PDFAcroNonTerminal(dict, ref);
PDFAcroNonTerminal.create = (context) => {
  const dict = context.obj({});
  const ref = context.register(dict);
  return new PDFAcroNonTerminal(dict, ref);
};
var PDFAcroNonTerminal_default = PDFAcroNonTerminal;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroSignature.js
var PDFAcroSignature = class extends PDFAcroTerminal_default {
};
PDFAcroSignature.fromDict = (dict, ref) => new PDFAcroSignature(dict, ref);
var PDFAcroSignature_default = PDFAcroSignature;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroText.js
var PDFAcroText = class extends PDFAcroTerminal_default {
  MaxLen() {
    const maxLen = this.dict.lookup(PDFName_default.of("MaxLen"));
    if (maxLen instanceof PDFNumber_default)
      return maxLen;
    return void 0;
  }
  Q() {
    const q = this.dict.lookup(PDFName_default.of("Q"));
    if (q instanceof PDFNumber_default)
      return q;
    return void 0;
  }
  setMaxLength(maxLength) {
    this.dict.set(PDFName_default.of("MaxLen"), PDFNumber_default.of(maxLength));
  }
  removeMaxLength() {
    this.dict.delete(PDFName_default.of("MaxLen"));
  }
  getMaxLength() {
    var _a;
    return (_a = this.MaxLen()) === null || _a === void 0 ? void 0 : _a.asNumber();
  }
  setQuadding(quadding) {
    this.dict.set(PDFName_default.of("Q"), PDFNumber_default.of(quadding));
  }
  getQuadding() {
    var _a;
    return (_a = this.Q()) === null || _a === void 0 ? void 0 : _a.asNumber();
  }
  setValue(value) {
    this.dict.set(PDFName_default.of("V"), value);
  }
  removeValue() {
    this.dict.delete(PDFName_default.of("V"));
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFString_default || v instanceof PDFHexString_default)
      return v;
    return void 0;
  }
};
PDFAcroText.fromDict = (dict, ref) => new PDFAcroText(dict, ref);
PDFAcroText.create = (context) => {
  const dict = context.obj({
    FT: "Tx",
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroText(dict, ref);
};
var PDFAcroText_default = PDFAcroText;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroPushButton.js
var PDFAcroPushButton = class extends PDFAcroButton_default {
};
PDFAcroPushButton.fromDict = (dict, ref) => new PDFAcroPushButton(dict, ref);
PDFAcroPushButton.create = (context) => {
  const dict = context.obj({
    FT: "Btn",
    Ff: AcroButtonFlags.PushButton,
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroPushButton(dict, ref);
};
var PDFAcroPushButton_default = PDFAcroPushButton;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroRadioButton.js
var PDFAcroRadioButton = class extends PDFAcroButton_default {
  setValue(value) {
    const onValues = this.getOnValues();
    if (!onValues.includes(value) && value !== PDFName_default.of("Off")) {
      throw new InvalidAcroFieldValueError();
    }
    this.dict.set(PDFName_default.of("V"), value);
    const widgets = this.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getOnValue() === value ? value : PDFName_default.of("Off");
      widget.setAppearanceState(state);
    }
  }
  getValue() {
    const v = this.V();
    if (v instanceof PDFName_default)
      return v;
    return PDFName_default.of("Off");
  }
  getOnValues() {
    const widgets = this.getWidgets();
    const onValues = [];
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const onValue = widgets[idx].getOnValue();
      if (onValue)
        onValues.push(onValue);
    }
    return onValues;
  }
};
PDFAcroRadioButton.fromDict = (dict, ref) => new PDFAcroRadioButton(dict, ref);
PDFAcroRadioButton.create = (context) => {
  const dict = context.obj({
    FT: "Btn",
    Ff: AcroButtonFlags.Radio,
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroRadioButton(dict, ref);
};
var PDFAcroRadioButton_default = PDFAcroRadioButton;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroListBox.js
var PDFAcroListBox = class extends PDFAcroChoice_default {
};
PDFAcroListBox.fromDict = (dict, ref) => new PDFAcroListBox(dict, ref);
PDFAcroListBox.create = (context) => {
  const dict = context.obj({
    FT: "Ch",
    Kids: []
  });
  const ref = context.register(dict);
  return new PDFAcroListBox(dict, ref);
};
var PDFAcroListBox_default = PDFAcroListBox;

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/utils.js
var createPDFAcroFields = (kidDicts) => {
  if (!kidDicts)
    return [];
  const kids = [];
  for (let idx = 0, len = kidDicts.size(); idx < len; idx++) {
    const ref = kidDicts.get(idx);
    const dict = kidDicts.lookup(idx);
    if (ref instanceof PDFRef_default && dict instanceof PDFDict_default) {
      kids.push([createPDFAcroField(dict, ref), ref]);
    }
  }
  return kids;
};
var createPDFAcroField = (dict, ref) => {
  const isNonTerminal = isNonTerminalAcroField(dict);
  if (isNonTerminal)
    return PDFAcroNonTerminal_default.fromDict(dict, ref);
  return createPDFAcroTerminal(dict, ref);
};
var isNonTerminalAcroField = (dict) => {
  const kids = dict.lookup(PDFName_default.of("Kids"));
  if (kids instanceof PDFArray_default) {
    for (let idx = 0, len = kids.size(); idx < len; idx++) {
      const kid = kids.lookup(idx);
      const kidIsField = kid instanceof PDFDict_default && kid.has(PDFName_default.of("T"));
      if (kidIsField)
        return true;
    }
  }
  return false;
};
var createPDFAcroTerminal = (dict, ref) => {
  const ftNameOrRef = getInheritableAttribute(dict, PDFName_default.of("FT"));
  const type = dict.context.lookup(ftNameOrRef, PDFName_default);
  if (type === PDFName_default.of("Btn"))
    return createPDFAcroButton(dict, ref);
  if (type === PDFName_default.of("Ch"))
    return createPDFAcroChoice(dict, ref);
  if (type === PDFName_default.of("Tx"))
    return PDFAcroText_default.fromDict(dict, ref);
  if (type === PDFName_default.of("Sig"))
    return PDFAcroSignature_default.fromDict(dict, ref);
  return PDFAcroTerminal_default.fromDict(dict, ref);
};
var createPDFAcroButton = (dict, ref) => {
  var _a;
  const ffNumberOrRef = getInheritableAttribute(dict, PDFName_default.of("Ff"));
  const ffNumber = dict.context.lookupMaybe(ffNumberOrRef, PDFNumber_default);
  const flags = (_a = ffNumber === null || ffNumber === void 0 ? void 0 : ffNumber.asNumber()) !== null && _a !== void 0 ? _a : 0;
  if (flagIsSet(flags, AcroButtonFlags.PushButton)) {
    return PDFAcroPushButton_default.fromDict(dict, ref);
  } else if (flagIsSet(flags, AcroButtonFlags.Radio)) {
    return PDFAcroRadioButton_default.fromDict(dict, ref);
  } else {
    return PDFAcroCheckBox_default.fromDict(dict, ref);
  }
};
var createPDFAcroChoice = (dict, ref) => {
  var _a;
  const ffNumberOrRef = getInheritableAttribute(dict, PDFName_default.of("Ff"));
  const ffNumber = dict.context.lookupMaybe(ffNumberOrRef, PDFNumber_default);
  const flags = (_a = ffNumber === null || ffNumber === void 0 ? void 0 : ffNumber.asNumber()) !== null && _a !== void 0 ? _a : 0;
  if (flagIsSet(flags, AcroChoiceFlags.Combo)) {
    return PDFAcroComboBox_default.fromDict(dict, ref);
  } else {
    return PDFAcroListBox_default.fromDict(dict, ref);
  }
};
var flagIsSet = (flags, flag3) => (flags & flag3) !== 0;
var getInheritableAttribute = (startNode, name) => {
  let attribute;
  ascend(startNode, (node) => {
    if (!attribute)
      attribute = node.get(name);
  });
  return attribute;
};
var ascend = (startNode, visitor) => {
  visitor(startNode);
  const Parent = startNode.lookupMaybe(PDFName_default.of("Parent"), PDFDict_default);
  if (Parent)
    ascend(Parent, visitor);
};

// node_modules/pdf-lib-plus-encrypt/es/core/acroform/PDFAcroForm.js
var PDFAcroForm = class {
  constructor(dict) {
    this.dict = dict;
  }
  Fields() {
    const fields = this.dict.lookup(PDFName_default.of("Fields"));
    if (fields instanceof PDFArray_default)
      return fields;
    return void 0;
  }
  getFields() {
    const { Fields } = this.normalizedEntries();
    const fields = new Array(Fields.size());
    for (let idx = 0, len = Fields.size(); idx < len; idx++) {
      const ref = Fields.get(idx);
      const dict = Fields.lookup(idx, PDFDict_default);
      fields[idx] = [createPDFAcroField(dict, ref), ref];
    }
    return fields;
  }
  getAllFields() {
    const allFields = [];
    const pushFields = (fields) => {
      if (!fields)
        return;
      for (let idx = 0, len = fields.length; idx < len; idx++) {
        const field = fields[idx];
        allFields.push(field);
        const [fieldModel] = field;
        if (fieldModel instanceof PDFAcroNonTerminal_default) {
          pushFields(createPDFAcroFields(fieldModel.Kids()));
        }
      }
    };
    pushFields(this.getFields());
    return allFields;
  }
  addField(field) {
    const { Fields } = this.normalizedEntries();
    Fields === null || Fields === void 0 ? void 0 : Fields.push(field);
  }
  removeField(field) {
    const parent = field.getParent();
    const fields = parent === void 0 ? this.normalizedEntries().Fields : parent.Kids();
    const index = fields === null || fields === void 0 ? void 0 : fields.indexOf(field.ref);
    if (fields === void 0 || index === void 0) {
      throw new Error(`Tried to remove inexistent field ${field.getFullyQualifiedName()}`);
    }
    fields.remove(index);
    if (parent !== void 0 && fields.size() === 0) {
      this.removeField(parent);
    }
  }
  normalizedEntries() {
    let Fields = this.Fields();
    if (!Fields) {
      Fields = this.dict.context.obj([]);
      this.dict.set(PDFName_default.of("Fields"), Fields);
    }
    return { Fields };
  }
};
PDFAcroForm.fromDict = (dict) => new PDFAcroForm(dict);
PDFAcroForm.create = (context) => {
  const dict = context.obj({ Fields: [] });
  return new PDFAcroForm(dict);
};
var PDFAcroForm_default = PDFAcroForm;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFCatalog.js
var PDFCatalog = class extends PDFDict_default {
  Pages() {
    return this.lookup(PDFName_default.of("Pages"), PDFDict_default);
  }
  AcroForm() {
    return this.lookupMaybe(PDFName_default.of("AcroForm"), PDFDict_default);
  }
  getAcroForm() {
    const dict = this.AcroForm();
    if (!dict)
      return void 0;
    return PDFAcroForm_default.fromDict(dict);
  }
  getOrCreateAcroForm() {
    let acroForm = this.getAcroForm();
    if (!acroForm) {
      acroForm = PDFAcroForm_default.create(this.context);
      const acroFormRef = this.context.register(acroForm.dict);
      this.set(PDFName_default.of("AcroForm"), acroFormRef);
    }
    return acroForm;
  }
  ViewerPreferences() {
    return this.lookupMaybe(PDFName_default.of("ViewerPreferences"), PDFDict_default);
  }
  getViewerPreferences() {
    const dict = this.ViewerPreferences();
    if (!dict)
      return void 0;
    return ViewerPreferences_default.fromDict(dict);
  }
  getOrCreateViewerPreferences() {
    let viewerPrefs = this.getViewerPreferences();
    if (!viewerPrefs) {
      viewerPrefs = ViewerPreferences_default.create(this.context);
      const viewerPrefsRef = this.context.register(viewerPrefs.dict);
      this.set(PDFName_default.of("ViewerPreferences"), viewerPrefsRef);
    }
    return viewerPrefs;
  }
  /**
   * Inserts the given ref as a leaf node of this catalog's page tree at the
   * specified index (zero-based). Also increments the `Count` of each node in
   * the page tree hierarchy to accomodate the new page.
   *
   * Returns the ref of the PDFPageTree node into which `leafRef` was inserted.
   */
  insertLeafNode(leafRef, index) {
    const pagesRef = this.get(PDFName_default.of("Pages"));
    const maybeParentRef = this.Pages().insertLeafNode(leafRef, index);
    return maybeParentRef || pagesRef;
  }
  removeLeafNode(index) {
    this.Pages().removeLeafNode(index);
  }
};
PDFCatalog.withContextAndPages = (context, pages) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.of("Type"), PDFName_default.of("Catalog"));
  dict.set(PDFName_default.of("Pages"), pages);
  return new PDFCatalog(dict, context);
};
PDFCatalog.fromMapWithContext = (map, context) => new PDFCatalog(map, context);
var PDFCatalog_default = PDFCatalog;

// node_modules/pdf-lib-plus-encrypt/es/core/structures/PDFPageTree.js
var PDFPageTree = class _PDFPageTree extends PDFDict_default {
  Parent() {
    return this.lookup(PDFName_default.of("Parent"));
  }
  Kids() {
    return this.lookup(PDFName_default.of("Kids"), PDFArray_default);
  }
  Count() {
    return this.lookup(PDFName_default.of("Count"), PDFNumber_default);
  }
  pushTreeNode(treeRef) {
    const Kids = this.Kids();
    Kids.push(treeRef);
  }
  pushLeafNode(leafRef) {
    const Kids = this.Kids();
    this.insertLeafKid(Kids.size(), leafRef);
  }
  /**
   * Inserts the given ref as a leaf node of this page tree at the specified
   * index (zero-based). Also increments the `Count` of each page tree in the
   * hierarchy to accomodate the new page.
   *
   * Returns the ref of the PDFPageTree node into which `leafRef` was inserted,
   * or `undefined` if it was inserted into the root node (the PDFPageTree upon
   * which the method was first called).
   */
  insertLeafNode(leafRef, targetIndex) {
    const Kids = this.Kids();
    const Count = this.Count().asNumber();
    if (targetIndex > Count) {
      throw new InvalidTargetIndexError(targetIndex, Count);
    }
    let leafsRemainingUntilTarget = targetIndex;
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      if (leafsRemainingUntilTarget === 0) {
        this.insertLeafKid(idx, leafRef);
        return void 0;
      }
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree) {
        if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
          return kid.insertLeafNode(leafRef, leafsRemainingUntilTarget) || kidRef;
        } else {
          leafsRemainingUntilTarget -= kid.Count().asNumber();
        }
      }
      if (kid instanceof PDFPageLeaf_default) {
        leafsRemainingUntilTarget -= 1;
      }
    }
    if (leafsRemainingUntilTarget === 0) {
      this.insertLeafKid(Kids.size(), leafRef);
      return void 0;
    }
    throw new CorruptPageTreeError(targetIndex, "insertLeafNode");
  }
  /**
   * Removes the leaf node at the specified index (zero-based) from this page
   * tree. Also decrements the `Count` of each page tree in the hierarchy to
   * account for the removed page.
   *
   * If `prune` is true, then intermediate tree nodes will be removed from the
   * tree if they contain 0 children after the leaf node is removed.
   */
  removeLeafNode(targetIndex, prune = true) {
    const Kids = this.Kids();
    const Count = this.Count().asNumber();
    if (targetIndex >= Count) {
      throw new InvalidTargetIndexError(targetIndex, Count);
    }
    let leafsRemainingUntilTarget = targetIndex;
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree) {
        if (kid.Count().asNumber() > leafsRemainingUntilTarget) {
          kid.removeLeafNode(leafsRemainingUntilTarget, prune);
          if (prune && kid.Kids().size() === 0)
            Kids.remove(idx);
          return;
        } else {
          leafsRemainingUntilTarget -= kid.Count().asNumber();
        }
      }
      if (kid instanceof PDFPageLeaf_default) {
        if (leafsRemainingUntilTarget === 0) {
          this.removeKid(idx);
          return;
        } else {
          leafsRemainingUntilTarget -= 1;
        }
      }
    }
    throw new CorruptPageTreeError(targetIndex, "removeLeafNode");
  }
  ascend(visitor) {
    visitor(this);
    const Parent = this.Parent();
    if (Parent)
      Parent.ascend(visitor);
  }
  /** Performs a Post-Order traversal of this page tree */
  traverse(visitor) {
    const Kids = this.Kids();
    for (let idx = 0, len = Kids.size(); idx < len; idx++) {
      const kidRef = Kids.get(idx);
      const kid = this.context.lookup(kidRef);
      if (kid instanceof _PDFPageTree)
        kid.traverse(visitor);
      visitor(kid, kidRef);
    }
  }
  insertLeafKid(kidIdx, leafRef) {
    const Kids = this.Kids();
    this.ascend((node) => {
      const newCount = node.Count().asNumber() + 1;
      node.set(PDFName_default.of("Count"), PDFNumber_default.of(newCount));
    });
    Kids.insert(kidIdx, leafRef);
  }
  removeKid(kidIdx) {
    const Kids = this.Kids();
    const kid = Kids.lookup(kidIdx);
    if (kid instanceof PDFPageLeaf_default) {
      this.ascend((node) => {
        const newCount = node.Count().asNumber() - 1;
        node.set(PDFName_default.of("Count"), PDFNumber_default.of(newCount));
      });
    }
    Kids.remove(kidIdx);
  }
};
PDFPageTree.withContext = (context, parent) => {
  const dict = /* @__PURE__ */ new Map();
  dict.set(PDFName_default.of("Type"), PDFName_default.of("Pages"));
  dict.set(PDFName_default.of("Kids"), context.obj([]));
  dict.set(PDFName_default.of("Count"), context.obj(0));
  if (parent)
    dict.set(PDFName_default.of("Parent"), parent);
  return new PDFPageTree(dict, context);
};
PDFPageTree.fromMapWithContext = (map, context) => new PDFPageTree(map, context);
var PDFPageTree_default = PDFPageTree;

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/Numeric.js
var IsDigit = new Uint8Array(256);
IsDigit[CharCodes_default.Zero] = 1;
IsDigit[CharCodes_default.One] = 1;
IsDigit[CharCodes_default.Two] = 1;
IsDigit[CharCodes_default.Three] = 1;
IsDigit[CharCodes_default.Four] = 1;
IsDigit[CharCodes_default.Five] = 1;
IsDigit[CharCodes_default.Six] = 1;
IsDigit[CharCodes_default.Seven] = 1;
IsDigit[CharCodes_default.Eight] = 1;
IsDigit[CharCodes_default.Nine] = 1;
var IsNumericPrefix = new Uint8Array(256);
IsNumericPrefix[CharCodes_default.Period] = 1;
IsNumericPrefix[CharCodes_default.Plus] = 1;
IsNumericPrefix[CharCodes_default.Minus] = 1;
var IsNumeric = new Uint8Array(256);
for (let idx = 0, len = 256; idx < len; idx++) {
  IsNumeric[idx] = IsDigit[idx] || IsNumericPrefix[idx] ? 1 : 0;
}

// node_modules/pdf-lib-plus-encrypt/es/core/parser/BaseParser.js
var { Newline, CarriageReturn } = CharCodes_default;
var BaseParser = class {
  constructor(bytes, capNumbers = false) {
    this.bytes = bytes;
    this.capNumbers = capNumbers;
  }
  parseRawInt() {
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsDigit[byte])
        break;
      value += charFromCode(this.bytes.next());
    }
    const numberValue = Number(value);
    if (!value || !isFinite(numberValue)) {
      throw new NumberParsingError(this.bytes.position(), value);
    }
    return numberValue;
  }
  // TODO: Maybe handle exponential format?
  // TODO: Compare performance of string concatenation to charFromCode(...bytes)
  parseRawNumber() {
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsNumeric[byte])
        break;
      value += charFromCode(this.bytes.next());
      if (byte === CharCodes_default.Period)
        break;
    }
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (!IsDigit[byte])
        break;
      value += charFromCode(this.bytes.next());
    }
    const numberValue = Number(value);
    if (!value || !isFinite(numberValue)) {
      throw new NumberParsingError(this.bytes.position(), value);
    }
    if (numberValue > Number.MAX_SAFE_INTEGER) {
      if (this.capNumbers) {
        const msg = `Parsed number that is too large for some PDF readers: ${value}, using Number.MAX_SAFE_INTEGER instead.`;
        console.warn(msg);
        return Number.MAX_SAFE_INTEGER;
      } else {
        const msg = `Parsed number that is too large for some PDF readers: ${value}, not capping.`;
        console.warn(msg);
      }
    }
    return numberValue;
  }
  skipWhitespace() {
    while (!this.bytes.done() && IsWhitespace[this.bytes.peek()]) {
      this.bytes.next();
    }
  }
  skipLine() {
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (byte === Newline || byte === CarriageReturn)
        return;
      this.bytes.next();
    }
  }
  skipComment() {
    if (this.bytes.peek() !== CharCodes_default.Percent)
      return false;
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (byte === Newline || byte === CarriageReturn)
        return true;
      this.bytes.next();
    }
    return true;
  }
  skipWhitespaceAndComments() {
    this.skipWhitespace();
    while (this.skipComment())
      this.skipWhitespace();
  }
  matchKeyword(keyword) {
    const initialOffset = this.bytes.offset();
    for (let idx = 0, len = keyword.length; idx < len; idx++) {
      if (this.bytes.done() || this.bytes.next() !== keyword[idx]) {
        this.bytes.moveTo(initialOffset);
        return false;
      }
    }
    return true;
  }
};
var BaseParser_default = BaseParser;

// node_modules/pdf-lib-plus-encrypt/es/core/parser/ByteStream.js
var ByteStream = class {
  constructor(bytes) {
    this.idx = 0;
    this.line = 0;
    this.column = 0;
    this.bytes = bytes;
    this.length = this.bytes.length;
  }
  moveTo(offset) {
    this.idx = offset;
  }
  next() {
    const byte = this.bytes[this.idx++];
    if (byte === CharCodes_default.Newline) {
      this.line += 1;
      this.column = 0;
    } else {
      this.column += 1;
    }
    return byte;
  }
  assertNext(expected) {
    if (this.peek() !== expected) {
      throw new NextByteAssertionError(this.position(), expected, this.peek());
    }
    return this.next();
  }
  peek() {
    return this.bytes[this.idx];
  }
  peekAhead(steps) {
    return this.bytes[this.idx + steps];
  }
  peekAt(offset) {
    return this.bytes[offset];
  }
  done() {
    return this.idx >= this.length;
  }
  offset() {
    return this.idx;
  }
  slice(start, end) {
    return this.bytes.slice(start, end);
  }
  position() {
    return { line: this.line, column: this.column, offset: this.idx };
  }
};
ByteStream.of = (bytes) => new ByteStream(bytes);
ByteStream.fromPDFRawStream = (rawStream) => ByteStream.of(decodePDFRawStream(rawStream).decode());
var ByteStream_default = ByteStream;

// node_modules/pdf-lib-plus-encrypt/es/core/syntax/Keywords.js
var { Space, CarriageReturn: CarriageReturn2, Newline: Newline2 } = CharCodes_default;
var stream = [
  CharCodes_default.s,
  CharCodes_default.t,
  CharCodes_default.r,
  CharCodes_default.e,
  CharCodes_default.a,
  CharCodes_default.m
];
var endstream = [
  CharCodes_default.e,
  CharCodes_default.n,
  CharCodes_default.d,
  CharCodes_default.s,
  CharCodes_default.t,
  CharCodes_default.r,
  CharCodes_default.e,
  CharCodes_default.a,
  CharCodes_default.m
];
var Keywords = {
  header: [
    CharCodes_default.Percent,
    CharCodes_default.P,
    CharCodes_default.D,
    CharCodes_default.F,
    CharCodes_default.Dash
  ],
  eof: [
    CharCodes_default.Percent,
    CharCodes_default.Percent,
    CharCodes_default.E,
    CharCodes_default.O,
    CharCodes_default.F
  ],
  obj: [CharCodes_default.o, CharCodes_default.b, CharCodes_default.j],
  endobj: [
    CharCodes_default.e,
    CharCodes_default.n,
    CharCodes_default.d,
    CharCodes_default.o,
    CharCodes_default.b,
    CharCodes_default.j
  ],
  xref: [CharCodes_default.x, CharCodes_default.r, CharCodes_default.e, CharCodes_default.f],
  trailer: [
    CharCodes_default.t,
    CharCodes_default.r,
    CharCodes_default.a,
    CharCodes_default.i,
    CharCodes_default.l,
    CharCodes_default.e,
    CharCodes_default.r
  ],
  startxref: [
    CharCodes_default.s,
    CharCodes_default.t,
    CharCodes_default.a,
    CharCodes_default.r,
    CharCodes_default.t,
    CharCodes_default.x,
    CharCodes_default.r,
    CharCodes_default.e,
    CharCodes_default.f
  ],
  true: [CharCodes_default.t, CharCodes_default.r, CharCodes_default.u, CharCodes_default.e],
  false: [CharCodes_default.f, CharCodes_default.a, CharCodes_default.l, CharCodes_default.s, CharCodes_default.e],
  null: [CharCodes_default.n, CharCodes_default.u, CharCodes_default.l, CharCodes_default.l],
  stream,
  streamEOF1: [...stream, Space, CarriageReturn2, Newline2],
  streamEOF2: [...stream, CarriageReturn2, Newline2],
  streamEOF3: [...stream, CarriageReturn2],
  streamEOF4: [...stream, Newline2],
  endstream,
  EOF1endstream: [CarriageReturn2, Newline2, ...endstream],
  EOF2endstream: [CarriageReturn2, ...endstream],
  EOF3endstream: [Newline2, ...endstream]
};

// node_modules/pdf-lib-plus-encrypt/es/core/parser/PDFObjectParser.js
var PDFObjectParser = class extends BaseParser_default {
  constructor(byteStream, context, capNumbers = false) {
    super(byteStream, capNumbers);
    this.context = context;
  }
  // TODO: Is it possible to reduce duplicate parsing for ref lookaheads?
  parseObject() {
    this.skipWhitespaceAndComments();
    if (this.matchKeyword(Keywords.true))
      return PDFBool_default.True;
    if (this.matchKeyword(Keywords.false))
      return PDFBool_default.False;
    if (this.matchKeyword(Keywords.null))
      return PDFNull_default;
    const byte = this.bytes.peek();
    if (byte === CharCodes_default.LessThan && this.bytes.peekAhead(1) === CharCodes_default.LessThan) {
      return this.parseDictOrStream();
    }
    if (byte === CharCodes_default.LessThan)
      return this.parseHexString();
    if (byte === CharCodes_default.LeftParen)
      return this.parseString();
    if (byte === CharCodes_default.ForwardSlash)
      return this.parseName();
    if (byte === CharCodes_default.LeftSquareBracket)
      return this.parseArray();
    if (IsNumeric[byte])
      return this.parseNumberOrRef();
    throw new PDFObjectParsingError(this.bytes.position(), byte);
  }
  parseNumberOrRef() {
    const firstNum = this.parseRawNumber();
    this.skipWhitespaceAndComments();
    const lookaheadStart = this.bytes.offset();
    if (IsDigit[this.bytes.peek()]) {
      const secondNum = this.parseRawNumber();
      this.skipWhitespaceAndComments();
      if (this.bytes.peek() === CharCodes_default.R) {
        this.bytes.assertNext(CharCodes_default.R);
        return PDFRef_default.of(firstNum, secondNum);
      }
    }
    this.bytes.moveTo(lookaheadStart);
    return PDFNumber_default.of(firstNum);
  }
  // TODO: Maybe update PDFHexString.of() logic to remove whitespace and validate input?
  parseHexString() {
    let value = "";
    this.bytes.assertNext(CharCodes_default.LessThan);
    while (!this.bytes.done() && this.bytes.peek() !== CharCodes_default.GreaterThan) {
      value += charFromCode(this.bytes.next());
    }
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    return PDFHexString_default.of(value);
  }
  parseString() {
    let nestingLvl = 0;
    let isEscaped = false;
    let value = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.next();
      value += charFromCode(byte);
      if (!isEscaped) {
        if (byte === CharCodes_default.LeftParen)
          nestingLvl += 1;
        if (byte === CharCodes_default.RightParen)
          nestingLvl -= 1;
      }
      if (byte === CharCodes_default.BackSlash) {
        isEscaped = !isEscaped;
      } else if (isEscaped) {
        isEscaped = false;
      }
      if (nestingLvl === 0) {
        return PDFString_default.of(value.substring(1, value.length - 1));
      }
    }
    throw new UnbalancedParenthesisError(this.bytes.position());
  }
  // TODO: Compare performance of string concatenation to charFromCode(...bytes)
  // TODO: Maybe preallocate small Uint8Array if can use charFromCode?
  parseName() {
    this.bytes.assertNext(CharCodes_default.ForwardSlash);
    let name = "";
    while (!this.bytes.done()) {
      const byte = this.bytes.peek();
      if (IsWhitespace[byte] || IsDelimiter[byte])
        break;
      name += charFromCode(byte);
      this.bytes.next();
    }
    return PDFName_default.of(name);
  }
  parseArray() {
    this.bytes.assertNext(CharCodes_default.LeftSquareBracket);
    this.skipWhitespaceAndComments();
    const pdfArray = PDFArray_default.withContext(this.context);
    while (this.bytes.peek() !== CharCodes_default.RightSquareBracket) {
      const element = this.parseObject();
      pdfArray.push(element);
      this.skipWhitespaceAndComments();
    }
    this.bytes.assertNext(CharCodes_default.RightSquareBracket);
    return pdfArray;
  }
  parseDict() {
    this.bytes.assertNext(CharCodes_default.LessThan);
    this.bytes.assertNext(CharCodes_default.LessThan);
    this.skipWhitespaceAndComments();
    const dict = /* @__PURE__ */ new Map();
    while (!this.bytes.done() && this.bytes.peek() !== CharCodes_default.GreaterThan && this.bytes.peekAhead(1) !== CharCodes_default.GreaterThan) {
      const key = this.parseName();
      const value = this.parseObject();
      dict.set(key, value);
      this.skipWhitespaceAndComments();
    }
    this.skipWhitespaceAndComments();
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    this.bytes.assertNext(CharCodes_default.GreaterThan);
    const Type = dict.get(PDFName_default.of("Type"));
    if (Type === PDFName_default.of("Catalog")) {
      return PDFCatalog_default.fromMapWithContext(dict, this.context);
    } else if (Type === PDFName_default.of("Pages")) {
      return PDFPageTree_default.fromMapWithContext(dict, this.context);
    } else if (Type === PDFName_default.of("Page")) {
      return PDFPageLeaf_default.fromMapWithContext(dict, this.context);
    } else {
      return PDFDict_default.fromMapWithContext(dict, this.context);
    }
  }
  parseDictOrStream() {
    const startPos = this.bytes.position();
    const dict = this.parseDict();
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.streamEOF1) && !this.matchKeyword(Keywords.streamEOF2) && !this.matchKeyword(Keywords.streamEOF3) && !this.matchKeyword(Keywords.streamEOF4) && !this.matchKeyword(Keywords.stream)) {
      return dict;
    }
    const start = this.bytes.offset();
    let end;
    const Length = dict.get(PDFName_default.of("Length"));
    if (Length instanceof PDFNumber_default) {
      end = start + Length.asNumber();
      this.bytes.moveTo(end);
      this.skipWhitespaceAndComments();
      if (!this.matchKeyword(Keywords.endstream)) {
        this.bytes.moveTo(start);
        end = this.findEndOfStreamFallback(startPos);
      }
    } else {
      end = this.findEndOfStreamFallback(startPos);
    }
    const contents = this.bytes.slice(start, end);
    return PDFRawStream_default.of(dict, contents);
  }
  findEndOfStreamFallback(startPos) {
    let nestingLvl = 1;
    let end = this.bytes.offset();
    while (!this.bytes.done()) {
      end = this.bytes.offset();
      if (this.matchKeyword(Keywords.stream)) {
        nestingLvl += 1;
      } else if (this.matchKeyword(Keywords.EOF1endstream) || this.matchKeyword(Keywords.EOF2endstream) || this.matchKeyword(Keywords.EOF3endstream) || this.matchKeyword(Keywords.endstream)) {
        nestingLvl -= 1;
      } else {
        this.bytes.next();
      }
      if (nestingLvl === 0)
        break;
    }
    if (nestingLvl !== 0)
      throw new PDFStreamParsingError(startPos);
    return end;
  }
};
PDFObjectParser.forBytes = (bytes, context, capNumbers) => new PDFObjectParser(ByteStream_default.of(bytes), context, capNumbers);
PDFObjectParser.forByteStream = (byteStream, context, capNumbers = false) => new PDFObjectParser(byteStream, context, capNumbers);
var PDFObjectParser_default = PDFObjectParser;

// node_modules/pdf-lib-plus-encrypt/es/core/parser/PDFObjectStreamParser.js
var PDFObjectStreamParser = class extends PDFObjectParser_default {
  constructor(rawStream, shouldWaitForTick) {
    super(ByteStream_default.fromPDFRawStream(rawStream), rawStream.dict.context);
    const { dict } = rawStream;
    this.alreadyParsed = false;
    this.shouldWaitForTick = shouldWaitForTick || (() => false);
    this.firstOffset = dict.lookup(PDFName_default.of("First"), PDFNumber_default).asNumber();
    this.objectCount = dict.lookup(PDFName_default.of("N"), PDFNumber_default).asNumber();
  }
  parseIntoContext() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.alreadyParsed) {
        throw new ReparseError("PDFObjectStreamParser", "parseIntoContext");
      }
      this.alreadyParsed = true;
      const offsetsAndObjectNumbers = this.parseOffsetsAndObjectNumbers();
      for (let idx = 0, len = offsetsAndObjectNumbers.length; idx < len; idx++) {
        const { objectNumber, offset } = offsetsAndObjectNumbers[idx];
        this.bytes.moveTo(this.firstOffset + offset);
        const object = this.parseObject();
        const ref = PDFRef_default.of(objectNumber, 0);
        this.context.assign(ref, object);
        if (this.shouldWaitForTick())
          yield waitForTick();
      }
    });
  }
  parseOffsetsAndObjectNumbers() {
    const offsetsAndObjectNumbers = [];
    for (let idx = 0, len = this.objectCount; idx < len; idx++) {
      this.skipWhitespaceAndComments();
      const objectNumber = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const offset = this.parseRawInt();
      offsetsAndObjectNumbers.push({ objectNumber, offset });
    }
    return offsetsAndObjectNumbers;
  }
};
PDFObjectStreamParser.forStream = (rawStream, shouldWaitForTick) => new PDFObjectStreamParser(rawStream, shouldWaitForTick);
var PDFObjectStreamParser_default = PDFObjectStreamParser;

// node_modules/pdf-lib-plus-encrypt/es/core/parser/PDFXRefStreamParser.js
var PDFXRefStreamParser = class {
  constructor(rawStream) {
    this.alreadyParsed = false;
    this.dict = rawStream.dict;
    this.bytes = ByteStream_default.fromPDFRawStream(rawStream);
    this.context = this.dict.context;
    const Size = this.dict.lookup(PDFName_default.of("Size"), PDFNumber_default);
    const Index = this.dict.lookup(PDFName_default.of("Index"));
    if (Index instanceof PDFArray_default) {
      this.subsections = [];
      for (let idx = 0, len = Index.size(); idx < len; idx += 2) {
        const firstObjectNumber = Index.lookup(idx + 0, PDFNumber_default).asNumber();
        const length = Index.lookup(idx + 1, PDFNumber_default).asNumber();
        this.subsections.push({ firstObjectNumber, length });
      }
    } else {
      this.subsections = [{ firstObjectNumber: 0, length: Size.asNumber() }];
    }
    const W = this.dict.lookup(PDFName_default.of("W"), PDFArray_default);
    this.byteWidths = [-1, -1, -1];
    for (let idx = 0, len = W.size(); idx < len; idx++) {
      this.byteWidths[idx] = W.lookup(idx, PDFNumber_default).asNumber();
    }
  }
  parseIntoContext() {
    if (this.alreadyParsed) {
      throw new ReparseError("PDFXRefStreamParser", "parseIntoContext");
    }
    this.alreadyParsed = true;
    this.context.trailerInfo = {
      Root: this.dict.get(PDFName_default.of("Root")),
      Encrypt: this.dict.get(PDFName_default.of("Encrypt")),
      Info: this.dict.get(PDFName_default.of("Info")),
      ID: this.dict.get(PDFName_default.of("ID"))
    };
    const entries = this.parseEntries();
    return entries;
  }
  parseEntries() {
    const entries = [];
    const [typeFieldWidth, offsetFieldWidth, genFieldWidth] = this.byteWidths;
    for (let subsectionIdx = 0, subsectionLen = this.subsections.length; subsectionIdx < subsectionLen; subsectionIdx++) {
      const { firstObjectNumber, length } = this.subsections[subsectionIdx];
      for (let objIdx = 0; objIdx < length; objIdx++) {
        let type = 0;
        for (let idx = 0, len = typeFieldWidth; idx < len; idx++) {
          type = type << 8 | this.bytes.next();
        }
        let offset = 0;
        for (let idx = 0, len = offsetFieldWidth; idx < len; idx++) {
          offset = offset << 8 | this.bytes.next();
        }
        let generationNumber = 0;
        for (let idx = 0, len = genFieldWidth; idx < len; idx++) {
          generationNumber = generationNumber << 8 | this.bytes.next();
        }
        if (typeFieldWidth === 0)
          type = 1;
        const objectNumber = firstObjectNumber + objIdx;
        const entry = {
          ref: PDFRef_default.of(objectNumber, generationNumber),
          offset,
          deleted: type === 0,
          inObjectStream: type === 2
        };
        entries.push(entry);
      }
    }
    return entries;
  }
};
PDFXRefStreamParser.forStream = (rawStream) => new PDFXRefStreamParser(rawStream);
var PDFXRefStreamParser_default = PDFXRefStreamParser;

// node_modules/pdf-lib-plus-encrypt/es/core/parser/PDFParser.js
var PDFParser = class extends PDFObjectParser_default {
  constructor(pdfBytes, objectsPerTick = Infinity, throwOnInvalidObject = false, capNumbers = false) {
    super(ByteStream_default.of(pdfBytes), PDFContext_default.create(), capNumbers);
    this.alreadyParsed = false;
    this.parsedObjects = 0;
    this.shouldWaitForTick = () => {
      this.parsedObjects += 1;
      return this.parsedObjects % this.objectsPerTick === 0;
    };
    this.objectsPerTick = objectsPerTick;
    this.throwOnInvalidObject = throwOnInvalidObject;
  }
  parseDocument() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.alreadyParsed) {
        throw new ReparseError("PDFParser", "parseDocument");
      }
      this.alreadyParsed = true;
      this.context.header = this.parseHeader();
      let prevOffset;
      while (!this.bytes.done()) {
        yield this.parseDocumentSection();
        const offset = this.bytes.offset();
        if (offset === prevOffset) {
          throw new StalledParserError(this.bytes.position());
        }
        prevOffset = offset;
      }
      this.maybeRecoverRoot();
      if (this.context.lookup(PDFRef_default.of(0))) {
        console.warn("Removing parsed object: 0 0 R");
        this.context.delete(PDFRef_default.of(0));
      }
      return this.context;
    });
  }
  maybeRecoverRoot() {
    const isValidCatalog = (obj) => obj instanceof PDFDict_default && obj.lookup(PDFName_default.of("Type")) === PDFName_default.of("Catalog");
    const catalog = this.context.lookup(this.context.trailerInfo.Root);
    if (!isValidCatalog(catalog)) {
      const indirectObjects = this.context.enumerateIndirectObjects();
      for (let idx = 0, len = indirectObjects.length; idx < len; idx++) {
        const [ref, object] = indirectObjects[idx];
        if (isValidCatalog(object)) {
          this.context.trailerInfo.Root = ref;
        }
      }
    }
  }
  parseHeader() {
    while (!this.bytes.done()) {
      if (this.matchKeyword(Keywords.header)) {
        const major = this.parseRawInt();
        this.bytes.assertNext(CharCodes_default.Period);
        const minor = this.parseRawInt();
        const header = PDFHeader_default.forVersion(major, minor);
        this.skipBinaryHeaderComment();
        return header;
      }
      this.bytes.next();
    }
    throw new MissingPDFHeaderError(this.bytes.position());
  }
  parseIndirectObjectHeader() {
    this.skipWhitespaceAndComments();
    const objectNumber = this.parseRawInt();
    this.skipWhitespaceAndComments();
    const generationNumber = this.parseRawInt();
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.obj)) {
      throw new MissingKeywordError(this.bytes.position(), Keywords.obj);
    }
    return PDFRef_default.of(objectNumber, generationNumber);
  }
  matchIndirectObjectHeader() {
    const initialOffset = this.bytes.offset();
    try {
      this.parseIndirectObjectHeader();
      return true;
    } catch (e) {
      this.bytes.moveTo(initialOffset);
      return false;
    }
  }
  parseIndirectObject() {
    return __awaiter(this, void 0, void 0, function* () {
      const ref = this.parseIndirectObjectHeader();
      this.skipWhitespaceAndComments();
      const object = this.parseObject();
      this.skipWhitespaceAndComments();
      this.matchKeyword(Keywords.endobj);
      if (object instanceof PDFRawStream_default && object.dict.lookup(PDFName_default.of("Type")) === PDFName_default.of("ObjStm")) {
        yield PDFObjectStreamParser_default.forStream(object, this.shouldWaitForTick).parseIntoContext();
      } else if (object instanceof PDFRawStream_default && object.dict.lookup(PDFName_default.of("Type")) === PDFName_default.of("XRef")) {
        PDFXRefStreamParser_default.forStream(object).parseIntoContext();
      } else {
        this.context.assign(ref, object);
      }
      return ref;
    });
  }
  // TODO: Improve and clean this up
  tryToParseInvalidIndirectObject() {
    const startPos = this.bytes.position();
    const msg = `Trying to parse invalid object: ${JSON.stringify(startPos)})`;
    if (this.throwOnInvalidObject)
      throw new Error(msg);
    console.warn(msg);
    const ref = this.parseIndirectObjectHeader();
    console.warn(`Invalid object ref: ${ref}`);
    this.skipWhitespaceAndComments();
    const start = this.bytes.offset();
    let failed = true;
    while (!this.bytes.done()) {
      if (this.matchKeyword(Keywords.endobj)) {
        failed = false;
      }
      if (!failed)
        break;
      this.bytes.next();
    }
    if (failed)
      throw new PDFInvalidObjectParsingError(startPos);
    const end = this.bytes.offset() - Keywords.endobj.length;
    const object = PDFInvalidObject_default.of(this.bytes.slice(start, end));
    this.context.assign(ref, object);
    return ref;
  }
  parseIndirectObjects() {
    return __awaiter(this, void 0, void 0, function* () {
      this.skipWhitespaceAndComments();
      while (!this.bytes.done() && IsDigit[this.bytes.peek()]) {
        const initialOffset = this.bytes.offset();
        try {
          yield this.parseIndirectObject();
        } catch (e) {
          this.bytes.moveTo(initialOffset);
          this.tryToParseInvalidIndirectObject();
        }
        this.skipWhitespaceAndComments();
        this.skipJibberish();
        if (this.shouldWaitForTick())
          yield waitForTick();
      }
    });
  }
  maybeParseCrossRefSection() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.xref))
      return;
    this.skipWhitespaceAndComments();
    let objectNumber = -1;
    const xref = PDFCrossRefSection_default.createEmpty();
    while (!this.bytes.done() && IsDigit[this.bytes.peek()]) {
      const firstInt = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const secondInt = this.parseRawInt();
      this.skipWhitespaceAndComments();
      const byte = this.bytes.peek();
      if (byte === CharCodes_default.n || byte === CharCodes_default.f) {
        const ref = PDFRef_default.of(objectNumber, secondInt);
        if (this.bytes.next() === CharCodes_default.n) {
          xref.addEntry(ref, firstInt);
        } else {
          xref.addDeletedEntry(ref, firstInt);
        }
        objectNumber += 1;
      } else {
        objectNumber = firstInt;
      }
      this.skipWhitespaceAndComments();
    }
    return xref;
  }
  maybeParseTrailerDict() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.trailer))
      return;
    this.skipWhitespaceAndComments();
    const dict = this.parseDict();
    const { context } = this;
    context.trailerInfo = {
      Root: dict.get(PDFName_default.of("Root")) || context.trailerInfo.Root,
      Encrypt: dict.get(PDFName_default.of("Encrypt")) || context.trailerInfo.Encrypt,
      Info: dict.get(PDFName_default.of("Info")) || context.trailerInfo.Info,
      ID: dict.get(PDFName_default.of("ID")) || context.trailerInfo.ID
    };
  }
  maybeParseTrailer() {
    this.skipWhitespaceAndComments();
    if (!this.matchKeyword(Keywords.startxref))
      return;
    this.skipWhitespaceAndComments();
    const offset = this.parseRawInt();
    this.skipWhitespace();
    this.matchKeyword(Keywords.eof);
    this.skipWhitespaceAndComments();
    this.matchKeyword(Keywords.eof);
    this.skipWhitespaceAndComments();
    return PDFTrailer_default.forLastCrossRefSectionOffset(offset);
  }
  parseDocumentSection() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.parseIndirectObjects();
      this.maybeParseCrossRefSection();
      this.maybeParseTrailerDict();
      this.maybeParseTrailer();
      this.skipJibberish();
    });
  }
  /**
   * This operation is not necessary for valid PDF files. But some invalid PDFs
   * contain jibberish in between indirect objects. This method is designed to
   * skip past that jibberish, should it exist, until it reaches the next
   * indirect object header, an xref table section, or the file trailer.
   */
  skipJibberish() {
    this.skipWhitespaceAndComments();
    while (!this.bytes.done()) {
      const initialOffset = this.bytes.offset();
      const byte = this.bytes.peek();
      const isAlphaNumeric = byte >= CharCodes_default.Space && byte <= CharCodes_default.Tilde;
      if (isAlphaNumeric) {
        if (this.matchKeyword(Keywords.xref) || this.matchKeyword(Keywords.trailer) || this.matchKeyword(Keywords.startxref) || this.matchIndirectObjectHeader()) {
          this.bytes.moveTo(initialOffset);
          break;
        }
      }
      this.bytes.next();
    }
  }
  /**
   * Skips the binary comment following a PDF header. The specification
   * defines this binary comment (section 7.5.2 File Header) as a sequence of 4
   * or more bytes that are 128 or greater, and which are preceded by a "%".
   *
   * This would imply that to strip out this binary comment, we could check for
   * a sequence of bytes starting with "%", and remove all subsequent bytes that
   * are 128 or greater. This works for many documents that properly comply with
   * the spec. But in the wild, there are PDFs that omit the leading "%", and
   * include bytes that are less than 128 (e.g. 0 or 1). So in order to parse
   * these headers correctly, we just throw out all bytes leading up to the
   * first indirect object header.
   */
  skipBinaryHeaderComment() {
    this.skipWhitespaceAndComments();
    try {
      const initialOffset = this.bytes.offset();
      this.parseIndirectObjectHeader();
      this.bytes.moveTo(initialOffset);
    } catch (e) {
      this.bytes.next();
      this.skipWhitespaceAndComments();
    }
  }
};
PDFParser.forBytesWithOptions = (pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers) => new PDFParser(pdfBytes, objectsPerTick, throwOnInvalidObject, capNumbers);
var PDFParser_default = PDFParser;

// node_modules/pdf-lib-plus-encrypt/es/core/annotation/flags.js
var flag2 = (bitIndex) => 1 << bitIndex;
var AnnotationFlags;
(function(AnnotationFlags2) {
  AnnotationFlags2[AnnotationFlags2["Invisible"] = flag2(1 - 1)] = "Invisible";
  AnnotationFlags2[AnnotationFlags2["Hidden"] = flag2(2 - 1)] = "Hidden";
  AnnotationFlags2[AnnotationFlags2["Print"] = flag2(3 - 1)] = "Print";
  AnnotationFlags2[AnnotationFlags2["NoZoom"] = flag2(4 - 1)] = "NoZoom";
  AnnotationFlags2[AnnotationFlags2["NoRotate"] = flag2(5 - 1)] = "NoRotate";
  AnnotationFlags2[AnnotationFlags2["NoView"] = flag2(6 - 1)] = "NoView";
  AnnotationFlags2[AnnotationFlags2["ReadOnly"] = flag2(7 - 1)] = "ReadOnly";
  AnnotationFlags2[AnnotationFlags2["Locked"] = flag2(8 - 1)] = "Locked";
  AnnotationFlags2[AnnotationFlags2["ToggleNoView"] = flag2(9 - 1)] = "ToggleNoView";
  AnnotationFlags2[AnnotationFlags2["LockedContents"] = flag2(10 - 1)] = "LockedContents";
})(AnnotationFlags || (AnnotationFlags = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/objects.js
var asPDFName = (name) => name instanceof PDFName_default ? name : PDFName_default.of(name);
var asPDFNumber = (num) => num instanceof PDFNumber_default ? num : PDFNumber_default.of(num);
var asNumber = (num) => num instanceof PDFNumber_default ? num.asNumber() : num;

// node_modules/pdf-lib-plus-encrypt/es/api/rotations.js
var RotationTypes;
(function(RotationTypes2) {
  RotationTypes2["Degrees"] = "degrees";
  RotationTypes2["Radians"] = "radians";
})(RotationTypes || (RotationTypes = {}));
var radians = (radianAngle) => {
  assertIs(radianAngle, "radianAngle", ["number"]);
  return { type: RotationTypes.Radians, angle: radianAngle };
};
var degrees = (degreeAngle) => {
  assertIs(degreeAngle, "degreeAngle", ["number"]);
  return { type: RotationTypes.Degrees, angle: degreeAngle };
};
var { Radians, Degrees } = RotationTypes;
var degreesToRadians = (degree) => degree * Math.PI / 180;
var radiansToDegrees = (radian) => radian * 180 / Math.PI;
var toRadians = (rotation) => rotation.type === Radians ? rotation.angle : rotation.type === Degrees ? degreesToRadians(rotation.angle) : error(`Invalid rotation: ${JSON.stringify(rotation)}`);
var toDegrees = (rotation) => rotation.type === Radians ? radiansToDegrees(rotation.angle) : rotation.type === Degrees ? rotation.angle : error(`Invalid rotation: ${JSON.stringify(rotation)}`);
var reduceRotation = (degreeAngle = 0) => {
  const quadrants = degreeAngle / 90 % 4;
  if (quadrants === 0)
    return 0;
  if (quadrants === 1)
    return 90;
  if (quadrants === 2)
    return 180;
  if (quadrants === 3)
    return 270;
  return 0;
};
var adjustDimsForRotation = (dims, degreeAngle = 0) => {
  const rotation = reduceRotation(degreeAngle);
  return rotation === 90 || rotation === 270 ? { width: dims.height, height: dims.width } : { width: dims.width, height: dims.height };
};
var rotateRectangle = (rectangle2, borderWidth = 0, degreeAngle = 0) => {
  const { x, y, width: w, height: h } = rectangle2;
  const r = reduceRotation(degreeAngle);
  const b = borderWidth / 2;
  if (r === 0)
    return { x: x - b, y: y - b, width: w, height: h };
  else if (r === 90)
    return { x: x - h + b, y: y - b, width: h, height: w };
  else if (r === 180)
    return { x: x - w + b, y: y - h + b, width: w, height: h };
  else if (r === 270)
    return { x: x - b, y: y - w + b, width: h, height: w };
  else
    return { x: x - b, y: y - b, width: w, height: h };
};

// node_modules/pdf-lib-plus-encrypt/es/api/operators.js
var clip = () => PDFOperator_default.of(PDFOperatorNames_default.ClipNonZero);
var clipEvenOdd = () => PDFOperator_default.of(PDFOperatorNames_default.ClipEvenOdd);
var { cos, sin, tan } = Math;
var concatTransformationMatrix = (a, b, c, d, e, f) => PDFOperator_default.of(PDFOperatorNames_default.ConcatTransformationMatrix, [
  asPDFNumber(a),
  asPDFNumber(b),
  asPDFNumber(c),
  asPDFNumber(d),
  asPDFNumber(e),
  asPDFNumber(f)
]);
var translate = (xPos, yPos) => concatTransformationMatrix(1, 0, 0, 1, xPos, yPos);
var scale = (xPos, yPos) => concatTransformationMatrix(xPos, 0, 0, yPos, 0, 0);
var rotateRadians = (angle) => concatTransformationMatrix(cos(asNumber(angle)), sin(asNumber(angle)), -sin(asNumber(angle)), cos(asNumber(angle)), 0, 0);
var rotateDegrees = (angle) => rotateRadians(degreesToRadians(asNumber(angle)));
var skewRadians = (xSkewAngle, ySkewAngle) => concatTransformationMatrix(1, tan(asNumber(xSkewAngle)), tan(asNumber(ySkewAngle)), 1, 0, 0);
var skewDegrees = (xSkewAngle, ySkewAngle) => skewRadians(degreesToRadians(asNumber(xSkewAngle)), degreesToRadians(asNumber(ySkewAngle)));
var setDashPattern = (dashArray, dashPhase) => PDFOperator_default.of(PDFOperatorNames_default.SetLineDashPattern, [
  `[${dashArray.map(asPDFNumber).join(" ")}]`,
  asPDFNumber(dashPhase)
]);
var restoreDashPattern = () => setDashPattern([], 0);
var LineCapStyle;
(function(LineCapStyle2) {
  LineCapStyle2[LineCapStyle2["Butt"] = 0] = "Butt";
  LineCapStyle2[LineCapStyle2["Round"] = 1] = "Round";
  LineCapStyle2[LineCapStyle2["Projecting"] = 2] = "Projecting";
})(LineCapStyle || (LineCapStyle = {}));
var setLineCap = (style) => PDFOperator_default.of(PDFOperatorNames_default.SetLineCapStyle, [asPDFNumber(style)]);
var LineJoinStyle;
(function(LineJoinStyle2) {
  LineJoinStyle2[LineJoinStyle2["Miter"] = 0] = "Miter";
  LineJoinStyle2[LineJoinStyle2["Round"] = 1] = "Round";
  LineJoinStyle2[LineJoinStyle2["Bevel"] = 2] = "Bevel";
})(LineJoinStyle || (LineJoinStyle = {}));
var setLineJoin = (style) => PDFOperator_default.of(PDFOperatorNames_default.SetLineJoinStyle, [asPDFNumber(style)]);
var setGraphicsState = (state) => PDFOperator_default.of(PDFOperatorNames_default.SetGraphicsStateParams, [asPDFName(state)]);
var pushGraphicsState = () => PDFOperator_default.of(PDFOperatorNames_default.PushGraphicsState);
var popGraphicsState = () => PDFOperator_default.of(PDFOperatorNames_default.PopGraphicsState);
var setLineWidth = (width) => PDFOperator_default.of(PDFOperatorNames_default.SetLineWidth, [asPDFNumber(width)]);
var appendBezierCurve = (x1, y1, x2, y2, x3, y3) => PDFOperator_default.of(PDFOperatorNames_default.AppendBezierCurve, [
  asPDFNumber(x1),
  asPDFNumber(y1),
  asPDFNumber(x2),
  asPDFNumber(y2),
  asPDFNumber(x3),
  asPDFNumber(y3)
]);
var appendQuadraticCurve = (x1, y1, x2, y2) => PDFOperator_default.of(PDFOperatorNames_default.CurveToReplicateInitialPoint, [
  asPDFNumber(x1),
  asPDFNumber(y1),
  asPDFNumber(x2),
  asPDFNumber(y2)
]);
var closePath = () => PDFOperator_default.of(PDFOperatorNames_default.ClosePath);
var moveTo = (xPos, yPos) => PDFOperator_default.of(PDFOperatorNames_default.MoveTo, [asPDFNumber(xPos), asPDFNumber(yPos)]);
var lineTo = (xPos, yPos) => PDFOperator_default.of(PDFOperatorNames_default.LineTo, [asPDFNumber(xPos), asPDFNumber(yPos)]);
var rectangle = (xPos, yPos, width, height) => PDFOperator_default.of(PDFOperatorNames_default.AppendRectangle, [
  asPDFNumber(xPos),
  asPDFNumber(yPos),
  asPDFNumber(width),
  asPDFNumber(height)
]);
var square = (xPos, yPos, size) => rectangle(xPos, yPos, size, size);
var stroke = () => PDFOperator_default.of(PDFOperatorNames_default.StrokePath);
var fill = () => PDFOperator_default.of(PDFOperatorNames_default.FillNonZero);
var fillAndStroke = () => PDFOperator_default.of(PDFOperatorNames_default.FillNonZeroAndStroke);
var endPath = () => PDFOperator_default.of(PDFOperatorNames_default.EndPath);
var nextLine = () => PDFOperator_default.of(PDFOperatorNames_default.NextLine);
var moveText = (x, y) => PDFOperator_default.of(PDFOperatorNames_default.MoveText, [asPDFNumber(x), asPDFNumber(y)]);
var showText = (text) => PDFOperator_default.of(PDFOperatorNames_default.ShowText, [text]);
var beginText = () => PDFOperator_default.of(PDFOperatorNames_default.BeginText);
var endText = () => PDFOperator_default.of(PDFOperatorNames_default.EndText);
var setFontAndSize = (name, size) => PDFOperator_default.of(PDFOperatorNames_default.SetFontAndSize, [asPDFName(name), asPDFNumber(size)]);
var setCharacterSpacing = (spacing) => PDFOperator_default.of(PDFOperatorNames_default.SetCharacterSpacing, [asPDFNumber(spacing)]);
var setWordSpacing = (spacing) => PDFOperator_default.of(PDFOperatorNames_default.SetWordSpacing, [asPDFNumber(spacing)]);
var setCharacterSqueeze = (squeeze) => PDFOperator_default.of(PDFOperatorNames_default.SetTextHorizontalScaling, [asPDFNumber(squeeze)]);
var setLineHeight = (lineHeight) => PDFOperator_default.of(PDFOperatorNames_default.SetTextLineHeight, [asPDFNumber(lineHeight)]);
var setTextRise = (rise) => PDFOperator_default.of(PDFOperatorNames_default.SetTextRise, [asPDFNumber(rise)]);
var TextRenderingMode;
(function(TextRenderingMode2) {
  TextRenderingMode2[TextRenderingMode2["Fill"] = 0] = "Fill";
  TextRenderingMode2[TextRenderingMode2["Outline"] = 1] = "Outline";
  TextRenderingMode2[TextRenderingMode2["FillAndOutline"] = 2] = "FillAndOutline";
  TextRenderingMode2[TextRenderingMode2["Invisible"] = 3] = "Invisible";
  TextRenderingMode2[TextRenderingMode2["FillAndClip"] = 4] = "FillAndClip";
  TextRenderingMode2[TextRenderingMode2["OutlineAndClip"] = 5] = "OutlineAndClip";
  TextRenderingMode2[TextRenderingMode2["FillAndOutlineAndClip"] = 6] = "FillAndOutlineAndClip";
  TextRenderingMode2[TextRenderingMode2["Clip"] = 7] = "Clip";
})(TextRenderingMode || (TextRenderingMode = {}));
var setTextRenderingMode = (mode2) => PDFOperator_default.of(PDFOperatorNames_default.SetTextRenderingMode, [asPDFNumber(mode2)]);
var setTextMatrix = (a, b, c, d, e, f) => PDFOperator_default.of(PDFOperatorNames_default.SetTextMatrix, [
  asPDFNumber(a),
  asPDFNumber(b),
  asPDFNumber(c),
  asPDFNumber(d),
  asPDFNumber(e),
  asPDFNumber(f)
]);
var rotateAndSkewTextRadiansAndTranslate = (rotationAngle, xSkewAngle, ySkewAngle, x, y) => setTextMatrix(cos(asNumber(rotationAngle)), sin(asNumber(rotationAngle)) + tan(asNumber(xSkewAngle)), -sin(asNumber(rotationAngle)) + tan(asNumber(ySkewAngle)), cos(asNumber(rotationAngle)), x, y);
var rotateAndSkewTextDegreesAndTranslate = (rotationAngle, xSkewAngle, ySkewAngle, x, y) => rotateAndSkewTextRadiansAndTranslate(degreesToRadians(asNumber(rotationAngle)), degreesToRadians(asNumber(xSkewAngle)), degreesToRadians(asNumber(ySkewAngle)), x, y);
var drawObject = (name) => PDFOperator_default.of(PDFOperatorNames_default.DrawObject, [asPDFName(name)]);
var setFillingGrayscaleColor = (gray) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorGray, [asPDFNumber(gray)]);
var setStrokingGrayscaleColor = (gray) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorGray, [asPDFNumber(gray)]);
var setFillingRgbColor = (red, green, blue) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorRgb, [
  asPDFNumber(red),
  asPDFNumber(green),
  asPDFNumber(blue)
]);
var setStrokingRgbColor = (red, green, blue) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorRgb, [
  asPDFNumber(red),
  asPDFNumber(green),
  asPDFNumber(blue)
]);
var setFillingCmykColor = (cyan, magenta, yellow, key) => PDFOperator_default.of(PDFOperatorNames_default.NonStrokingColorCmyk, [
  asPDFNumber(cyan),
  asPDFNumber(magenta),
  asPDFNumber(yellow),
  asPDFNumber(key)
]);
var setStrokingCmykColor = (cyan, magenta, yellow, key) => PDFOperator_default.of(PDFOperatorNames_default.StrokingColorCmyk, [
  asPDFNumber(cyan),
  asPDFNumber(magenta),
  asPDFNumber(yellow),
  asPDFNumber(key)
]);
var beginMarkedContent = (tag) => PDFOperator_default.of(PDFOperatorNames_default.BeginMarkedContent, [asPDFName(tag)]);
var endMarkedContent = () => PDFOperator_default.of(PDFOperatorNames_default.EndMarkedContent);

// node_modules/pdf-lib-plus-encrypt/es/api/colors.js
var ColorTypes;
(function(ColorTypes2) {
  ColorTypes2["Grayscale"] = "Grayscale";
  ColorTypes2["RGB"] = "RGB";
  ColorTypes2["CMYK"] = "CMYK";
})(ColorTypes || (ColorTypes = {}));
var grayscale = (gray) => {
  assertRange(gray, "gray", 0, 1);
  return { type: ColorTypes.Grayscale, gray };
};
var rgb = (red, green, blue) => {
  assertRange(red, "red", 0, 1);
  assertRange(green, "green", 0, 1);
  assertRange(blue, "blue", 0, 1);
  return { type: ColorTypes.RGB, red, green, blue };
};
var cmyk = (cyan, magenta, yellow, key) => {
  assertRange(cyan, "cyan", 0, 1);
  assertRange(magenta, "magenta", 0, 1);
  assertRange(yellow, "yellow", 0, 1);
  assertRange(key, "key", 0, 1);
  return { type: ColorTypes.CMYK, cyan, magenta, yellow, key };
};
var { Grayscale, RGB, CMYK } = ColorTypes;
var setFillingColor = (color) => color.type === Grayscale ? setFillingGrayscaleColor(color.gray) : color.type === RGB ? setFillingRgbColor(color.red, color.green, color.blue) : color.type === CMYK ? setFillingCmykColor(color.cyan, color.magenta, color.yellow, color.key) : error(`Invalid color: ${JSON.stringify(color)}`);
var setStrokingColor = (color) => color.type === Grayscale ? setStrokingGrayscaleColor(color.gray) : color.type === RGB ? setStrokingRgbColor(color.red, color.green, color.blue) : color.type === CMYK ? setStrokingCmykColor(color.cyan, color.magenta, color.yellow, color.key) : error(`Invalid color: ${JSON.stringify(color)}`);
var componentsToColor = (comps, scale2 = 1) => (comps === null || comps === void 0 ? void 0 : comps.length) === 1 ? grayscale(comps[0] * scale2) : (comps === null || comps === void 0 ? void 0 : comps.length) === 3 ? rgb(comps[0] * scale2, comps[1] * scale2, comps[2] * scale2) : (comps === null || comps === void 0 ? void 0 : comps.length) === 4 ? cmyk(comps[0] * scale2, comps[1] * scale2, comps[2] * scale2, comps[3] * scale2) : void 0;
var colorToComponents = (color) => color.type === Grayscale ? [color.gray] : color.type === RGB ? [color.red, color.green, color.blue] : color.type === CMYK ? [color.cyan, color.magenta, color.yellow, color.key] : error(`Invalid color: ${JSON.stringify(color)}`);

// node_modules/pdf-lib-plus-encrypt/es/api/svgPath.js
var cx = 0;
var cy = 0;
var px = 0;
var py = 0;
var sx = 0;
var sy = 0;
var parameters = /* @__PURE__ */ new Map([
  ["A", 7],
  ["a", 7],
  ["C", 6],
  ["c", 6],
  ["H", 1],
  ["h", 1],
  ["L", 2],
  ["l", 2],
  ["M", 2],
  ["m", 2],
  ["Q", 4],
  ["q", 4],
  ["S", 4],
  ["s", 4],
  ["T", 2],
  ["t", 2],
  ["V", 1],
  ["v", 1],
  ["Z", 0],
  ["z", 0]
]);
var parse = (path) => {
  let cmd;
  const ret = [];
  let args = [];
  let curArg = "";
  let foundDecimal = false;
  let params = 0;
  for (const c of path) {
    if (parameters.has(c)) {
      params = parameters.get(c);
      if (cmd) {
        if (curArg.length > 0) {
          args[args.length] = +curArg;
        }
        ret[ret.length] = { cmd, args };
        args = [];
        curArg = "";
        foundDecimal = false;
      }
      cmd = c;
    } else if ([" ", ","].includes(c) || c === "-" && curArg.length > 0 && curArg[curArg.length - 1] !== "e" || c === "." && foundDecimal) {
      if (curArg.length === 0) {
        continue;
      }
      if (args.length === params) {
        ret[ret.length] = { cmd, args };
        args = [+curArg];
        if (cmd === "M") {
          cmd = "L";
        }
        if (cmd === "m") {
          cmd = "l";
        }
      } else {
        args[args.length] = +curArg;
      }
      foundDecimal = c === ".";
      curArg = ["-", "."].includes(c) ? c : "";
    } else {
      curArg += c;
      if (c === ".") {
        foundDecimal = true;
      }
    }
  }
  if (curArg.length > 0) {
    if (args.length === params) {
      ret[ret.length] = { cmd, args };
      args = [+curArg];
      if (cmd === "M") {
        cmd = "L";
      }
      if (cmd === "m") {
        cmd = "l";
      }
    } else {
      args[args.length] = +curArg;
    }
  }
  ret[ret.length] = { cmd, args };
  return ret;
};
var apply = (commands) => {
  cx = cy = px = py = sx = sy = 0;
  let cmds = [];
  for (let i = 0; i < commands.length; i++) {
    const c = commands[i];
    if (c.cmd && typeof runners[c.cmd] === "function") {
      const cmd = runners[c.cmd](c.args);
      if (Array.isArray(cmd)) {
        cmds = cmds.concat(cmd);
      } else {
        cmds.push(cmd);
      }
    }
  }
  return cmds;
};
var runners = {
  M(a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return moveTo(cx, cy);
  },
  m(a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    sx = cx;
    sy = cy;
    return moveTo(cx, cy);
  },
  C(a) {
    cx = a[4];
    cy = a[5];
    px = a[2];
    py = a[3];
    return appendBezierCurve(a[0], a[1], a[2], a[3], a[4], a[5]);
  },
  c(a) {
    const cmd = appendBezierCurve(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy, a[4] + cx, a[5] + cy);
    px = cx + a[2];
    py = cy + a[3];
    cx += a[4];
    cy += a[5];
    return cmd;
  },
  S(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    }
    const cmd = appendBezierCurve(cx - (px - cx), cy - (py - cy), a[0], a[1], a[2], a[3]);
    px = a[0];
    py = a[1];
    cx = a[2];
    cy = a[3];
    return cmd;
  },
  s(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    }
    const cmd = appendBezierCurve(cx - (px - cx), cy - (py - cy), cx + a[0], cy + a[1], cx + a[2], cy + a[3]);
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    cy += a[3];
    return cmd;
  },
  Q(a) {
    px = a[0];
    py = a[1];
    cx = a[2];
    cy = a[3];
    return appendQuadraticCurve(a[0], a[1], cx, cy);
  },
  q(a) {
    const cmd = appendQuadraticCurve(a[0] + cx, a[1] + cy, a[2] + cx, a[3] + cy);
    px = cx + a[0];
    py = cy + a[1];
    cx += a[2];
    cy += a[3];
    return cmd;
  },
  T(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    const cmd = appendQuadraticCurve(px, py, a[0], a[1]);
    px = cx - (px - cx);
    py = cy - (py - cy);
    cx = a[0];
    cy = a[1];
    return cmd;
  },
  t(a) {
    if (px === null || py === null) {
      px = cx;
      py = cy;
    } else {
      px = cx - (px - cx);
      py = cy - (py - cy);
    }
    const cmd = appendQuadraticCurve(px, py, cx + a[0], cy + a[1]);
    cx += a[0];
    cy += a[1];
    return cmd;
  },
  A(a) {
    const cmds = solveArc(cx, cy, a);
    cx = a[5];
    cy = a[6];
    return cmds;
  },
  a(a) {
    a[5] += cx;
    a[6] += cy;
    const cmds = solveArc(cx, cy, a);
    cx = a[5];
    cy = a[6];
    return cmds;
  },
  L(a) {
    cx = a[0];
    cy = a[1];
    px = py = null;
    return lineTo(cx, cy);
  },
  l(a) {
    cx += a[0];
    cy += a[1];
    px = py = null;
    return lineTo(cx, cy);
  },
  H(a) {
    cx = a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  h(a) {
    cx += a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  V(a) {
    cy = a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  v(a) {
    cy += a[0];
    px = py = null;
    return lineTo(cx, cy);
  },
  Z() {
    const cmd = closePath();
    cx = sx;
    cy = sy;
    return cmd;
  },
  z() {
    const cmd = closePath();
    cx = sx;
    cy = sy;
    return cmd;
  }
};
var solveArc = (x, y, coords) => {
  const [rx, ry, rot, large, sweep, ex, ey] = coords;
  const segs = arcToSegments(ex, ey, rx, ry, large, sweep, rot, x, y);
  const cmds = [];
  for (const seg of segs) {
    const bez = segmentToBezier(...seg);
    cmds.push(appendBezierCurve(...bez));
  }
  return cmds;
};
var arcToSegments = (x, y, rx, ry, large, sweep, rotateX, ox, oy) => {
  const th = rotateX * (Math.PI / 180);
  const sinTh = Math.sin(th);
  const cosTh = Math.cos(th);
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  px = cosTh * (ox - x) * 0.5 + sinTh * (oy - y) * 0.5;
  py = cosTh * (oy - y) * 0.5 - sinTh * (ox - x) * 0.5;
  let pl = px * px / (rx * rx) + py * py / (ry * ry);
  if (pl > 1) {
    pl = Math.sqrt(pl);
    rx *= pl;
    ry *= pl;
  }
  const a00 = cosTh / rx;
  const a01 = sinTh / rx;
  const a10 = -sinTh / ry;
  const a11 = cosTh / ry;
  const x0 = a00 * ox + a01 * oy;
  const y0 = a10 * ox + a11 * oy;
  const x1 = a00 * x + a01 * y;
  const y1 = a10 * x + a11 * y;
  const d = (x1 - x0) * (x1 - x0) + (y1 - y0) * (y1 - y0);
  let sfactorSq = 1 / d - 0.25;
  if (sfactorSq < 0) {
    sfactorSq = 0;
  }
  let sfactor = Math.sqrt(sfactorSq);
  if (sweep === large) {
    sfactor = -sfactor;
  }
  const xc = 0.5 * (x0 + x1) - sfactor * (y1 - y0);
  const yc = 0.5 * (y0 + y1) + sfactor * (x1 - x0);
  const th0 = Math.atan2(y0 - yc, x0 - xc);
  const th1 = Math.atan2(y1 - yc, x1 - xc);
  let thArc = th1 - th0;
  if (thArc < 0 && sweep === 1) {
    thArc += 2 * Math.PI;
  } else if (thArc > 0 && sweep === 0) {
    thArc -= 2 * Math.PI;
  }
  const segments = Math.ceil(Math.abs(thArc / (Math.PI * 0.5 + 1e-3)));
  const result = [];
  for (let i = 0; i < segments; i++) {
    const th2 = th0 + i * thArc / segments;
    const th3 = th0 + (i + 1) * thArc / segments;
    result[i] = [xc, yc, th2, th3, rx, ry, sinTh, cosTh];
  }
  return result;
};
var segmentToBezier = (cx1, cy1, th0, th1, rx, ry, sinTh, cosTh) => {
  const a00 = cosTh * rx;
  const a01 = -sinTh * ry;
  const a10 = sinTh * rx;
  const a11 = cosTh * ry;
  const thHalf = 0.5 * (th1 - th0);
  const t = 8 / 3 * Math.sin(thHalf * 0.5) * Math.sin(thHalf * 0.5) / Math.sin(thHalf);
  const x1 = cx1 + Math.cos(th0) - t * Math.sin(th0);
  const y1 = cy1 + Math.sin(th0) + t * Math.cos(th0);
  const x3 = cx1 + Math.cos(th1);
  const y3 = cy1 + Math.sin(th1);
  const x2 = x3 + t * Math.sin(th1);
  const y2 = y3 - t * Math.cos(th1);
  const result = [
    a00 * x1 + a01 * y1,
    a10 * x1 + a11 * y1,
    a00 * x2 + a01 * y2,
    a10 * x2 + a11 * y2,
    a00 * x3 + a01 * y3,
    a10 * x3 + a11 * y3
  ];
  return result;
};
var svgPathToOperators = (path) => apply(parse(path));

// node_modules/pdf-lib-plus-encrypt/es/api/operations.js
var drawText = (line, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  beginText(),
  setFillingColor(options.color),
  setFontAndSize(options.font, options.size),
  rotateAndSkewTextRadiansAndTranslate(toRadians(options.rotate), toRadians(options.xSkew), toRadians(options.ySkew), options.x, options.y),
  showText(line),
  endText(),
  popGraphicsState()
].filter(Boolean);
var drawLinesOfText = (lines, options) => {
  const operators = [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    beginText(),
    setFillingColor(options.color),
    setFontAndSize(options.font, options.size),
    setLineHeight(options.lineHeight),
    rotateAndSkewTextRadiansAndTranslate(toRadians(options.rotate), toRadians(options.xSkew), toRadians(options.ySkew), options.x, options.y)
  ].filter(Boolean);
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    operators.push(showText(lines[idx]), nextLine());
  }
  operators.push(endText(), popGraphicsState());
  return operators;
};
var drawImage = (name, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate)),
  scale(options.width, options.height),
  skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
  drawObject(name),
  popGraphicsState()
].filter(Boolean);
var drawPage = (name, options) => [
  pushGraphicsState(),
  options.graphicsState && setGraphicsState(options.graphicsState),
  translate(options.x, options.y),
  rotateRadians(toRadians(options.rotate)),
  scale(options.xScale, options.yScale),
  skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
  drawObject(name),
  popGraphicsState()
].filter(Boolean);
var drawLine = (options) => {
  var _a, _b;
  return [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    options.color && setStrokingColor(options.color),
    setLineWidth(options.thickness),
    setDashPattern((_a = options.dashArray) !== null && _a !== void 0 ? _a : [], (_b = options.dashPhase) !== null && _b !== void 0 ? _b : 0),
    moveTo(options.start.x, options.start.y),
    options.lineCap && setLineCap(options.lineCap),
    moveTo(options.start.x, options.start.y),
    lineTo(options.end.x, options.end.y),
    stroke(),
    popGraphicsState()
  ].filter(Boolean);
};
var drawRectangle = (options) => {
  var _a, _b;
  return [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    options.color && setFillingColor(options.color),
    options.borderColor && setStrokingColor(options.borderColor),
    setLineWidth(options.borderWidth),
    options.borderLineCap && setLineCap(options.borderLineCap),
    setDashPattern((_a = options.borderDashArray) !== null && _a !== void 0 ? _a : [], (_b = options.borderDashPhase) !== null && _b !== void 0 ? _b : 0),
    translate(options.x, options.y),
    rotateRadians(toRadians(options.rotate)),
    skewRadians(toRadians(options.xSkew), toRadians(options.ySkew)),
    moveTo(0, 0),
    lineTo(0, options.height),
    lineTo(options.width, options.height),
    lineTo(options.width, 0),
    closePath(),
    // prettier-ignore
    options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
    popGraphicsState()
  ].filter(Boolean);
};
var KAPPA = 4 * ((Math.sqrt(2) - 1) / 3);
var drawEllipsePath = (config) => {
  let x = asNumber(config.x);
  let y = asNumber(config.y);
  const xScale = asNumber(config.xScale);
  const yScale = asNumber(config.yScale);
  x -= xScale;
  y -= yScale;
  const ox = xScale * KAPPA;
  const oy = yScale * KAPPA;
  const xe = x + xScale * 2;
  const ye = y + yScale * 2;
  const xm = x + xScale;
  const ym = y + yScale;
  return [
    pushGraphicsState(),
    moveTo(x, ym),
    appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
    appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
    appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
    appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym),
    popGraphicsState()
  ];
};
var drawEllipseCurves = (config) => {
  const centerX = asNumber(config.x);
  const centerY = asNumber(config.y);
  const xScale = asNumber(config.xScale);
  const yScale = asNumber(config.yScale);
  const x = -xScale;
  const y = -yScale;
  const ox = xScale * KAPPA;
  const oy = yScale * KAPPA;
  const xe = x + xScale * 2;
  const ye = y + yScale * 2;
  const xm = x + xScale;
  const ym = y + yScale;
  return [
    translate(centerX, centerY),
    rotateRadians(toRadians(config.rotate)),
    moveTo(x, ym),
    appendBezierCurve(x, ym - oy, xm - ox, y, xm, y),
    appendBezierCurve(xm + ox, y, xe, ym - oy, xe, ym),
    appendBezierCurve(xe, ym + oy, xm + ox, ye, xm, ye),
    appendBezierCurve(xm - ox, ye, x, ym + oy, x, ym)
  ];
};
var drawEllipse = (options) => {
  var _a, _b, _c;
  return [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    options.color && setFillingColor(options.color),
    options.borderColor && setStrokingColor(options.borderColor),
    setLineWidth(options.borderWidth),
    options.borderLineCap && setLineCap(options.borderLineCap),
    setDashPattern((_a = options.borderDashArray) !== null && _a !== void 0 ? _a : [], (_b = options.borderDashPhase) !== null && _b !== void 0 ? _b : 0),
    // The `drawEllipsePath` branch is only here for backwards compatibility.
    // See https://github.com/brennanmcquerry/pdf-lib-plus-encrypt/pull/511#issuecomment-667685655.
    ...options.rotate === void 0 ? drawEllipsePath({
      x: options.x,
      y: options.y,
      xScale: options.xScale,
      yScale: options.yScale
    }) : drawEllipseCurves({
      x: options.x,
      y: options.y,
      xScale: options.xScale,
      yScale: options.yScale,
      rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : degrees(0)
    }),
    // prettier-ignore
    options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
    popGraphicsState()
  ].filter(Boolean);
};
var drawSvgPath = (path, options) => {
  var _a, _b, _c;
  return [
    pushGraphicsState(),
    options.graphicsState && setGraphicsState(options.graphicsState),
    translate(options.x, options.y),
    rotateRadians(toRadians((_a = options.rotate) !== null && _a !== void 0 ? _a : degrees(0))),
    // SVG path Y axis is opposite pdf-lib's
    options.scale ? scale(options.scale, -options.scale) : scale(1, -1),
    options.color && setFillingColor(options.color),
    options.borderColor && setStrokingColor(options.borderColor),
    options.borderWidth && setLineWidth(options.borderWidth),
    options.borderLineCap && setLineCap(options.borderLineCap),
    setDashPattern((_b = options.borderDashArray) !== null && _b !== void 0 ? _b : [], (_c = options.borderDashPhase) !== null && _c !== void 0 ? _c : 0),
    ...svgPathToOperators(path),
    // prettier-ignore
    options.color && options.borderWidth ? fillAndStroke() : options.color ? fill() : options.borderColor ? stroke() : closePath(),
    popGraphicsState()
  ].filter(Boolean);
};
var drawCheckMark = (options) => {
  const size = asNumber(options.size);
  const p2x = -1 + 0.75;
  const p2y = -1 + 0.51;
  const p3y = 1 - 0.525;
  const p3x = 1 - 0.31;
  const p1x = -1 + 0.325;
  const p1y = -((p1x - p2x) * (p3x - p2x)) / (p3y - p2y) + p2y;
  return [
    pushGraphicsState(),
    options.color && setStrokingColor(options.color),
    setLineWidth(options.thickness),
    translate(options.x, options.y),
    moveTo(p1x * size, p1y * size),
    lineTo(p2x * size, p2y * size),
    lineTo(p3x * size, p3y * size),
    stroke(),
    popGraphicsState()
  ].filter(Boolean);
};
var rotateInPlace = (options) => options.rotation === 0 ? [
  translate(0, 0),
  rotateDegrees(0)
] : options.rotation === 90 ? [
  translate(options.width, 0),
  rotateDegrees(90)
] : options.rotation === 180 ? [
  translate(options.width, options.height),
  rotateDegrees(180)
] : options.rotation === 270 ? [
  translate(0, options.height),
  rotateDegrees(270)
] : [];
var drawCheckBox = (options) => {
  const outline = drawRectangle({
    x: options.x,
    y: options.y,
    width: options.width,
    height: options.height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  if (!options.filled)
    return outline;
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const checkMarkSize = Math.min(width, height) / 2;
  const checkMark = drawCheckMark({
    x: width / 2,
    y: height / 2,
    size: checkMarkSize,
    thickness: options.thickness,
    color: options.markColor
  });
  return [pushGraphicsState(), ...outline, ...checkMark, popGraphicsState()];
};
var drawRadioButton = (options) => {
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const outlineScale = Math.min(width, height) / 2;
  const outline = drawEllipse({
    x: options.x,
    y: options.y,
    xScale: outlineScale,
    yScale: outlineScale,
    color: options.color,
    borderColor: options.borderColor,
    borderWidth: options.borderWidth
  });
  if (!options.filled)
    return outline;
  const dot = drawEllipse({
    x: options.x,
    y: options.y,
    xScale: outlineScale * 0.45,
    yScale: outlineScale * 0.45,
    color: options.dotColor,
    borderColor: void 0,
    borderWidth: 0
  });
  return [pushGraphicsState(), ...outline, ...dot, popGraphicsState()];
};
var drawButton = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  return [pushGraphicsState(), ...background, ...lines, popGraphicsState()];
};
var drawTextLines = (lines, options) => {
  const operators = [
    beginText(),
    setFillingColor(options.color),
    setFontAndSize(options.font, options.size)
  ];
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    const { encoded, x, y } = lines[idx];
    operators.push(rotateAndSkewTextRadiansAndTranslate(toRadians(options.rotate), toRadians(options.xSkew), toRadians(options.ySkew), x, y), showText(encoded));
  }
  operators.push(endText());
  return operators;
};
var drawTextField = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const borderWidth = asNumber(options.borderWidth);
  const padding = asNumber(options.padding);
  const clipX = x + borderWidth / 2 + padding;
  const clipY = y + borderWidth / 2 + padding;
  const clipWidth = width - (borderWidth / 2 + padding) * 2;
  const clipHeight = height - (borderWidth / 2 + padding) * 2;
  const clippingArea = [
    moveTo(clipX, clipY),
    lineTo(clipX, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY),
    closePath(),
    clip(),
    endPath()
  ];
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const markedContent = [
    beginMarkedContent("Tx"),
    pushGraphicsState(),
    ...lines,
    popGraphicsState(),
    endMarkedContent()
  ];
  return [
    pushGraphicsState(),
    ...background,
    ...clippingArea,
    ...markedContent,
    popGraphicsState()
  ];
};
var drawOptionList = (options) => {
  const x = asNumber(options.x);
  const y = asNumber(options.y);
  const width = asNumber(options.width);
  const height = asNumber(options.height);
  const lineHeight = asNumber(options.lineHeight);
  const borderWidth = asNumber(options.borderWidth);
  const padding = asNumber(options.padding);
  const clipX = x + borderWidth / 2 + padding;
  const clipY = y + borderWidth / 2 + padding;
  const clipWidth = width - (borderWidth / 2 + padding) * 2;
  const clipHeight = height - (borderWidth / 2 + padding) * 2;
  const clippingArea = [
    moveTo(clipX, clipY),
    lineTo(clipX, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY + clipHeight),
    lineTo(clipX + clipWidth, clipY),
    closePath(),
    clip(),
    endPath()
  ];
  const background = drawRectangle({
    x,
    y,
    width,
    height,
    borderWidth: options.borderWidth,
    color: options.color,
    borderColor: options.borderColor,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const highlights = [];
  for (let idx = 0, len = options.selectedLines.length; idx < len; idx++) {
    const line = options.textLines[options.selectedLines[idx]];
    highlights.push(...drawRectangle({
      x: line.x - padding,
      y: line.y - (lineHeight - line.height) / 2,
      width: width - borderWidth,
      height: line.height + (lineHeight - line.height) / 2,
      borderWidth: 0,
      color: options.selectedColor,
      borderColor: void 0,
      rotate: degrees(0),
      xSkew: degrees(0),
      ySkew: degrees(0)
    }));
  }
  const lines = drawTextLines(options.textLines, {
    color: options.textColor,
    font: options.font,
    size: options.fontSize,
    rotate: degrees(0),
    xSkew: degrees(0),
    ySkew: degrees(0)
  });
  const markedContent = [
    beginMarkedContent("Tx"),
    pushGraphicsState(),
    ...lines,
    popGraphicsState(),
    endMarkedContent()
  ];
  return [
    pushGraphicsState(),
    ...background,
    ...highlights,
    ...clippingArea,
    ...markedContent,
    popGraphicsState()
  ];
};

// node_modules/pdf-lib-plus-encrypt/es/api/errors.js
var EncryptedPDFError = class extends Error {
  constructor() {
    const msg = "Input document to `PDFDocument.load` is encrypted. You can use `PDFDocument.load(..., { ignoreEncryption: true })` if you wish to load the document anyways.";
    super(msg);
  }
};
var FontkitNotRegisteredError = class extends Error {
  constructor() {
    const msg = "Input to `PDFDocument.embedFont` was a custom font, but no `fontkit` instance was found. You must register a `fontkit` instance with `PDFDocument.registerFontkit(...)` before embedding custom fonts.";
    super(msg);
  }
};
var ForeignPageError = class extends Error {
  constructor() {
    const msg = "A `page` passed to `PDFDocument.addPage` or `PDFDocument.insertPage` was from a different (foreign) PDF document. If you want to copy pages from one PDFDocument to another, you must use `PDFDocument.copyPages(...)` to copy the pages before adding or inserting them.";
    super(msg);
  }
};
var RemovePageFromEmptyDocumentError = class extends Error {
  constructor() {
    const msg = "PDFDocument has no pages so `PDFDocument.removePage` cannot be called";
    super(msg);
  }
};
var NoSuchFieldError = class extends Error {
  constructor(name) {
    const msg = `PDFDocument has no form field with the name "${name}"`;
    super(msg);
  }
};
var UnexpectedFieldTypeError = class extends Error {
  constructor(name, expected, actual) {
    var _a, _b;
    const expectedType = expected === null || expected === void 0 ? void 0 : expected.name;
    const actualType = (_b = (_a = actual === null || actual === void 0 ? void 0 : actual.constructor) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : actual;
    const msg = `Expected field "${name}" to be of type ${expectedType}, but it is actually of type ${actualType}`;
    super(msg);
  }
};
var MissingOnValueCheckError = class extends Error {
  constructor(onValue) {
    const msg = `Failed to select check box due to missing onValue: "${onValue}"`;
    super(msg);
  }
};
var FieldAlreadyExistsError = class extends Error {
  constructor(name) {
    const msg = `A field already exists with the specified name: "${name}"`;
    super(msg);
  }
};
var InvalidFieldNamePartError = class extends Error {
  constructor(namePart) {
    const msg = `Field name contains invalid component: "${namePart}"`;
    super(msg);
  }
};
var FieldExistsAsNonTerminalError = class extends Error {
  constructor(name) {
    const msg = `A non-terminal field already exists with the specified name: "${name}"`;
    super(msg);
  }
};
var RichTextFieldReadError = class extends Error {
  constructor(fieldName) {
    const msg = `Reading rich text fields is not supported: Attempted to read rich text field: ${fieldName}`;
    super(msg);
  }
};
var CombedTextLayoutError = class extends Error {
  constructor(lineLength, cellCount) {
    const msg = `Failed to layout combed text as lineLength=${lineLength} is greater than cellCount=${cellCount}`;
    super(msg);
  }
};
var ExceededMaxLengthError = class extends Error {
  constructor(textLength, maxLength, name) {
    const msg = `Attempted to set text with length=${textLength} for TextField with maxLength=${maxLength} and name=${name}`;
    super(msg);
  }
};
var InvalidMaxLengthError = class extends Error {
  constructor(textLength, maxLength, name) {
    const msg = `Attempted to set maxLength=${maxLength}, which is less than ${textLength}, the length of this field's current value (name=${name})`;
    super(msg);
  }
};

// node_modules/pdf-lib-plus-encrypt/es/api/text/alignment.js
var TextAlignment;
(function(TextAlignment2) {
  TextAlignment2[TextAlignment2["Left"] = 0] = "Left";
  TextAlignment2[TextAlignment2["Center"] = 1] = "Center";
  TextAlignment2[TextAlignment2["Right"] = 2] = "Right";
})(TextAlignment || (TextAlignment = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/text/layout.js
var MIN_FONT_SIZE = 4;
var MAX_FONT_SIZE = 500;
var computeFontSize = (lines, font, bounds) => {
  let fontSize = MIN_FONT_SIZE;
  while (fontSize < MAX_FONT_SIZE) {
    for (let idx = 0, len = lines.length; idx < len; idx++) {
      const line = lines[idx];
      const tooLong = font.widthOfTextAtSize(line, fontSize) > bounds.width;
      if (tooLong)
        return fontSize - 1;
    }
    const height = font.heightAtSize(fontSize);
    const lineHeight = height + height * 0.2;
    const totalHeight = lines.length * lineHeight;
    if (totalHeight > Math.abs(bounds.height))
      return fontSize - 1;
    fontSize += 1;
  }
  return fontSize;
};
var computeCombedFontSize = (line, font, bounds, cellCount) => {
  const cellWidth = bounds.width / cellCount;
  const cellHeight = bounds.height;
  let fontSize = MIN_FONT_SIZE;
  const chars2 = charSplit(line);
  while (fontSize < MAX_FONT_SIZE) {
    for (let idx = 0, len = chars2.length; idx < len; idx++) {
      const c = chars2[idx];
      const tooLong = font.widthOfTextAtSize(c, fontSize) > cellWidth * 0.75;
      if (tooLong)
        return fontSize - 1;
    }
    const height = font.heightAtSize(fontSize, { descender: false });
    if (height > cellHeight)
      return fontSize - 1;
    fontSize += 1;
  }
  return fontSize;
};
var lastIndexOfWhitespace = (line) => {
  for (let idx = line.length; idx > 0; idx--) {
    if (/\s/.test(line[idx]))
      return idx;
  }
  return void 0;
};
var splitOutLines = (input, maxWidth, font, fontSize) => {
  var _a;
  let lastWhitespaceIdx = input.length;
  while (lastWhitespaceIdx > 0) {
    const line = input.substring(0, lastWhitespaceIdx);
    const encoded = font.encodeText(line);
    const width = font.widthOfTextAtSize(line, fontSize);
    if (width < maxWidth) {
      const remainder = input.substring(lastWhitespaceIdx) || void 0;
      return { line, encoded, width, remainder };
    }
    lastWhitespaceIdx = (_a = lastIndexOfWhitespace(line)) !== null && _a !== void 0 ? _a : 0;
  }
  return {
    line: input,
    encoded: font.encodeText(input),
    width: font.widthOfTextAtSize(input, fontSize),
    remainder: void 0
  };
};
var layoutMultilineText = (text, { alignment, fontSize, font, bounds }) => {
  const lines = lineSplit(cleanText(text));
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = 12;
  }
  const height = font.heightAtSize(fontSize);
  const lineHeight = height + height * 0.2;
  const textLines = [];
  let minX = bounds.x;
  let minY = bounds.y;
  let maxX = bounds.x + bounds.width;
  let maxY = bounds.y + bounds.height;
  let y = bounds.y + bounds.height;
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    let prevRemainder = lines[idx];
    while (prevRemainder !== void 0) {
      const { line, encoded, width, remainder } = splitOutLines(prevRemainder, bounds.width, font, fontSize);
      const x = alignment === TextAlignment.Left ? bounds.x : alignment === TextAlignment.Center ? bounds.x + bounds.width / 2 - width / 2 : alignment === TextAlignment.Right ? bounds.x + bounds.width - width : bounds.x;
      y -= lineHeight;
      if (x < minX)
        minX = x;
      if (y < minY)
        minY = y;
      if (x + width > maxX)
        maxX = x + width;
      if (y + height > maxY)
        maxY = y + height;
      textLines.push({ text: line, encoded, width, height, x, y });
      prevRemainder = remainder === null || remainder === void 0 ? void 0 : remainder.trim();
    }
  }
  return {
    fontSize,
    lineHeight,
    lines: textLines,
    bounds: {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  };
};
var layoutCombedText = (text, { fontSize, font, bounds, cellCount }) => {
  const line = mergeLines(cleanText(text));
  if (line.length > cellCount) {
    throw new CombedTextLayoutError(line.length, cellCount);
  }
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = computeCombedFontSize(line, font, bounds, cellCount);
  }
  const cellWidth = bounds.width / cellCount;
  const height = font.heightAtSize(fontSize, { descender: false });
  const y = bounds.y + (bounds.height / 2 - height / 2);
  const cells = [];
  let minX = bounds.x;
  let minY = bounds.y;
  let maxX = bounds.x + bounds.width;
  let maxY = bounds.y + bounds.height;
  let cellOffset = 0;
  let charOffset = 0;
  while (cellOffset < cellCount) {
    const [char, charLength] = charAtIndex(line, charOffset);
    const encoded = font.encodeText(char);
    const width = font.widthOfTextAtSize(char, fontSize);
    const cellCenter = bounds.x + (cellWidth * cellOffset + cellWidth / 2);
    const x = cellCenter - width / 2;
    if (x < minX)
      minX = x;
    if (y < minY)
      minY = y;
    if (x + width > maxX)
      maxX = x + width;
    if (y + height > maxY)
      maxY = y + height;
    cells.push({ text: line, encoded, width, height, x, y });
    cellOffset += 1;
    charOffset += charLength;
  }
  return {
    fontSize,
    cells,
    bounds: {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    }
  };
};
var layoutSinglelineText = (text, { alignment, fontSize, font, bounds }) => {
  const line = mergeLines(cleanText(text));
  if (fontSize === void 0 || fontSize === 0) {
    fontSize = computeFontSize([line], font, bounds);
  }
  const encoded = font.encodeText(line);
  const width = font.widthOfTextAtSize(line, fontSize);
  const height = font.heightAtSize(fontSize, { descender: false });
  const x = alignment === TextAlignment.Left ? bounds.x : alignment === TextAlignment.Center ? bounds.x + bounds.width / 2 - width / 2 : alignment === TextAlignment.Right ? bounds.x + bounds.width - width : bounds.x;
  const y = bounds.y + (bounds.height / 2 - height / 2);
  return {
    fontSize,
    line: { text: line, encoded, width, height, x, y },
    bounds: { x, y, width, height }
  };
};

// node_modules/pdf-lib-plus-encrypt/es/api/form/appearances.js
var normalizeAppearance = (appearance) => {
  if ("normal" in appearance)
    return appearance;
  return { normal: appearance };
};
var tfRegex2 = /\/([^\0\t\n\f\r\ ]+)[\0\t\n\f\r\ ]+(\d*\.\d+|\d+)[\0\t\n\f\r\ ]+Tf/;
var getDefaultFontSize = (field) => {
  var _a, _b;
  const da = (_a = field.getDefaultAppearance()) !== null && _a !== void 0 ? _a : "";
  const daMatch = (_b = findLastMatch(da, tfRegex2).match) !== null && _b !== void 0 ? _b : [];
  const defaultFontSize = Number(daMatch[2]);
  return isFinite(defaultFontSize) ? defaultFontSize : void 0;
};
var colorRegex = /(\d*\.\d+|\d+)[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]*(\d*\.\d+|\d+)?[\0\t\n\f\r\ ]+(g|rg|k)/;
var getDefaultColor = (field) => {
  var _a;
  const da = (_a = field.getDefaultAppearance()) !== null && _a !== void 0 ? _a : "";
  const daMatch = findLastMatch(da, colorRegex).match;
  const [, c1, c2, c3, c4, colorSpace] = daMatch !== null && daMatch !== void 0 ? daMatch : [];
  if (colorSpace === "g" && c1) {
    return grayscale(Number(c1));
  }
  if (colorSpace === "rg" && c1 && c2 && c3) {
    return rgb(Number(c1), Number(c2), Number(c3));
  }
  if (colorSpace === "k" && c1 && c2 && c3 && c4) {
    return cmyk(Number(c1), Number(c2), Number(c3), Number(c4));
  }
  return void 0;
};
var updateDefaultAppearance = (field, color, font, fontSize = 0) => {
  var _a;
  const da = [
    setFillingColor(color).toString(),
    setFontAndSize((_a = font === null || font === void 0 ? void 0 : font.name) !== null && _a !== void 0 ? _a : "dummy__noop", fontSize).toString()
  ].join("\n");
  field.setDefaultAppearance(da);
};
var defaultCheckBoxAppearanceProvider = (checkBox, widget) => {
  var _a, _b, _c;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(checkBox.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = (_b = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor())) !== null && _b !== void 0 ? _b : black;
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
  const textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
  if (widgetColor) {
    updateDefaultAppearance(widget, textColor);
  } else {
    updateDefaultAppearance(checkBox.acroField, textColor);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    thickness: 1.5,
    borderWidth,
    borderColor,
    markColor: textColor
  };
  return {
    normal: {
      on: [
        ...rotate,
        ...drawCheckBox(Object.assign(Object.assign({}, options), { color: normalBackgroundColor, filled: true }))
      ],
      off: [
        ...rotate,
        ...drawCheckBox(Object.assign(Object.assign({}, options), { color: normalBackgroundColor, filled: false }))
      ]
    },
    down: {
      on: [
        ...rotate,
        ...drawCheckBox(Object.assign(Object.assign({}, options), { color: downBackgroundColor, filled: true }))
      ],
      off: [
        ...rotate,
        ...drawCheckBox(Object.assign(Object.assign({}, options), { color: downBackgroundColor, filled: false }))
      ]
    }
  };
};
var defaultRadioGroupAppearanceProvider = (radioGroup, widget) => {
  var _a, _b, _c;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(radioGroup.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = (_b = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor())) !== null && _b !== void 0 ? _b : black;
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
  const textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
  if (widgetColor) {
    updateDefaultAppearance(widget, textColor);
  } else {
    updateDefaultAppearance(radioGroup.acroField, textColor);
  }
  const options = {
    x: width / 2,
    y: height / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth,
    borderColor,
    dotColor: textColor
  };
  return {
    normal: {
      on: [
        ...rotate,
        ...drawRadioButton(Object.assign(Object.assign({}, options), { color: normalBackgroundColor, filled: true }))
      ],
      off: [
        ...rotate,
        ...drawRadioButton(Object.assign(Object.assign({}, options), { color: normalBackgroundColor, filled: false }))
      ]
    },
    down: {
      on: [
        ...rotate,
        ...drawRadioButton(Object.assign(Object.assign({}, options), { color: downBackgroundColor, filled: true }))
      ],
      off: [
        ...rotate,
        ...drawRadioButton(Object.assign(Object.assign({}, options), { color: downBackgroundColor, filled: false }))
      ]
    }
  };
};
var defaultButtonAppearanceProvider = (button, widget, font) => {
  var _a, _b, _c, _d, _e;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(button.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(button.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const captions = ap === null || ap === void 0 ? void 0 : ap.getCaptions();
  const normalText = (_a = captions === null || captions === void 0 ? void 0 : captions.normal) !== null && _a !== void 0 ? _a : "";
  const downText = (_c = (_b = captions === null || captions === void 0 ? void 0 : captions.down) !== null && _b !== void 0 ? _b : normalText) !== null && _c !== void 0 ? _c : "";
  const borderWidth = (_d = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _d !== void 0 ? _d : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  const downBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor(), 0.8);
  const bounds = {
    x: borderWidth,
    y: borderWidth,
    width: width - borderWidth * 2,
    height: height - borderWidth * 2
  };
  const normalLayout = layoutSinglelineText(normalText, {
    alignment: TextAlignment.Center,
    fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
    font,
    bounds
  });
  const downLayout = layoutSinglelineText(downText, {
    alignment: TextAlignment.Center,
    fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
    font,
    bounds
  });
  const fontSize = Math.min(normalLayout.fontSize, downLayout.fontSize);
  const textColor = (_e = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _e !== void 0 ? _e : black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(button.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth,
    borderColor,
    textColor,
    font: font.name,
    fontSize
  };
  return {
    normal: [
      ...rotate,
      ...drawButton(Object.assign(Object.assign({}, options), { color: normalBackgroundColor, textLines: [normalLayout.line] }))
    ],
    down: [
      ...rotate,
      ...drawButton(Object.assign(Object.assign({}, options), { color: downBackgroundColor, textLines: [downLayout.line] }))
    ]
  };
};
var defaultTextFieldAppearanceProvider = (textField, widget, font) => {
  var _a, _b, _c, _d;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(textField.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(textField.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const text = (_a = textField.getText()) !== null && _a !== void 0 ? _a : "";
  const borderWidth = (_b = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _b !== void 0 ? _b : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  let textLines;
  let fontSize;
  const padding = textField.isCombed() ? 0 : 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  if (textField.isMultiline()) {
    const layout = layoutMultilineText(text, {
      alignment: textField.getAlignment(),
      fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
      font,
      bounds
    });
    textLines = layout.lines;
    fontSize = layout.fontSize;
  } else if (textField.isCombed()) {
    const layout = layoutCombedText(text, {
      fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
      font,
      bounds,
      cellCount: (_c = textField.getMaxLength()) !== null && _c !== void 0 ? _c : 0
    });
    textLines = layout.cells;
    fontSize = layout.fontSize;
  } else {
    const layout = layoutSinglelineText(text, {
      alignment: textField.getAlignment(),
      fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
      font,
      bounds
    });
    textLines = [layout.line];
    fontSize = layout.fontSize;
  }
  const textColor = (_d = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _d !== void 0 ? _d : black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(textField.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
    borderColor,
    textColor,
    font: font.name,
    fontSize,
    color: normalBackgroundColor,
    textLines,
    padding
  };
  return [...rotate, ...drawTextField(options)];
};
var defaultDropdownAppearanceProvider = (dropdown, widget, font) => {
  var _a, _b, _c;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(dropdown.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(dropdown.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const text = (_a = dropdown.getSelected()[0]) !== null && _a !== void 0 ? _a : "";
  const borderWidth = (_b = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _b !== void 0 ? _b : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  const padding = 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  const { line, fontSize } = layoutSinglelineText(text, {
    alignment: TextAlignment.Left,
    fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
    font,
    bounds
  });
  const textColor = (_c = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _c !== void 0 ? _c : black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(dropdown.acroField, textColor, font, fontSize);
  }
  const options = {
    x: 0 + borderWidth / 2,
    y: 0 + borderWidth / 2,
    width: width - borderWidth,
    height: height - borderWidth,
    borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
    borderColor,
    textColor,
    font: font.name,
    fontSize,
    color: normalBackgroundColor,
    textLines: [line],
    padding
  };
  return [...rotate, ...drawTextField(options)];
};
var defaultOptionListAppearanceProvider = (optionList, widget, font) => {
  var _a, _b;
  const widgetColor = getDefaultColor(widget);
  const fieldColor = getDefaultColor(optionList.acroField);
  const widgetFontSize = getDefaultFontSize(widget);
  const fieldFontSize = getDefaultFontSize(optionList.acroField);
  const rectangle2 = widget.getRectangle();
  const ap = widget.getAppearanceCharacteristics();
  const bs = widget.getBorderStyle();
  const borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
  const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
  const { width, height } = adjustDimsForRotation(rectangle2, rotation);
  const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
  const black = rgb(0, 0, 0);
  const borderColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBorderColor());
  const normalBackgroundColor = componentsToColor(ap === null || ap === void 0 ? void 0 : ap.getBackgroundColor());
  const options = optionList.getOptions();
  const selected = optionList.getSelected();
  if (optionList.isSorted())
    options.sort();
  let text = "";
  for (let idx = 0, len = options.length; idx < len; idx++) {
    text += options[idx];
    if (idx < len - 1)
      text += "\n";
  }
  const padding = 1;
  const bounds = {
    x: borderWidth + padding,
    y: borderWidth + padding,
    width: width - (borderWidth + padding) * 2,
    height: height - (borderWidth + padding) * 2
  };
  const { lines, fontSize, lineHeight } = layoutMultilineText(text, {
    alignment: TextAlignment.Left,
    fontSize: widgetFontSize !== null && widgetFontSize !== void 0 ? widgetFontSize : fieldFontSize,
    font,
    bounds
  });
  const selectedLines = [];
  for (let idx = 0, len = lines.length; idx < len; idx++) {
    const line = lines[idx];
    if (selected.includes(line.text))
      selectedLines.push(idx);
  }
  const blue = rgb(153 / 255, 193 / 255, 218 / 255);
  const textColor = (_b = widgetColor !== null && widgetColor !== void 0 ? widgetColor : fieldColor) !== null && _b !== void 0 ? _b : black;
  if (widgetColor || widgetFontSize !== void 0) {
    updateDefaultAppearance(widget, textColor, font, fontSize);
  } else {
    updateDefaultAppearance(optionList.acroField, textColor, font, fontSize);
  }
  return [
    ...rotate,
    ...drawOptionList({
      x: 0 + borderWidth / 2,
      y: 0 + borderWidth / 2,
      width: width - borderWidth,
      height: height - borderWidth,
      borderWidth: borderWidth !== null && borderWidth !== void 0 ? borderWidth : 0,
      borderColor,
      textColor,
      font: font.name,
      fontSize,
      color: normalBackgroundColor,
      textLines: lines,
      lineHeight,
      selectedColor: blue,
      selectedLines,
      padding
    })
  ];
};

// node_modules/pdf-lib-plus-encrypt/es/api/PDFEmbeddedPage.js
var PDFEmbeddedPage = class {
  constructor(ref, doc, embedder) {
    this.alreadyEmbedded = false;
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [[PDFPageEmbedder_default, "PDFPageEmbedder"]]);
    this.ref = ref;
    this.doc = doc;
    this.width = embedder.width;
    this.height = embedder.height;
    this.embedder = embedder;
  }
  /**
   * Compute the width and height of this page after being scaled by the
   * given `factor`. For example:
   * ```js
   * embeddedPage.width  // => 500
   * embeddedPage.height // => 250
   *
   * const scaled = embeddedPage.scale(0.5)
   * scaled.width  // => 250
   * scaled.height // => 125
   * ```
   * This operation is often useful before drawing a page with
   * [[PDFPage.drawPage]] to compute the `width` and `height` options.
   * @param factor The factor by which this page should be scaled.
   * @returns The width and height of the page after being scaled.
   */
  scale(factor) {
    assertIs(factor, "factor", ["number"]);
    return { width: this.width * factor, height: this.height * factor };
  }
  /**
   * Get the width and height of this page. For example:
   * ```js
   * const { width, height } = embeddedPage.size()
   * ```
   * @returns The width and height of the page.
   */
  size() {
    return this.scale(1);
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all embeddable pages get embedded.
   *
   * Embed this embeddable page in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  embed() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.alreadyEmbedded) {
        yield this.embedder.embedIntoContext(this.doc.context, this.ref);
        this.alreadyEmbedded = true;
      }
    });
  }
};
PDFEmbeddedPage.of = (ref, doc, embedder) => new PDFEmbeddedPage(ref, doc, embedder);

// node_modules/pdf-lib-plus-encrypt/es/api/PDFFont.js
var PDFFont = class {
  constructor(ref, doc, embedder) {
    this.modified = true;
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [
      [CustomFontEmbedder_default, "CustomFontEmbedder"],
      [StandardFontEmbedder_default, "StandardFontEmbedder"]
    ]);
    this.ref = ref;
    this.doc = doc;
    this.name = embedder.fontName;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFPage.drawText]] method will automatically encode the text it is
   * > given.
   *
   * Encodes a string of text in this font.
   *
   * @param text The text to be encoded.
   * @returns The encoded text as a hex string.
   */
  encodeText(text) {
    assertIs(text, "text", ["string"]);
    this.modified = true;
    return this.embedder.encodeText(text);
  }
  /**
   * Measure the width of a string of text drawn in this font at a given size.
   * For example:
   * ```js
   * const width = font.widthOfTextAtSize('Foo Bar Qux Baz', 36)
   * ```
   * @param text The string of text to be measured.
   * @param size The font size to be used for this measurement.
   * @returns The width of the string of text when drawn in this font at the
   *          given size.
   */
  widthOfTextAtSize(text, size) {
    assertIs(text, "text", ["string"]);
    assertIs(size, "size", ["number"]);
    return this.embedder.widthOfTextAtSize(text, size);
  }
  /**
   * Measure the height of this font at a given size. For example:
   * ```js
   * const height = font.heightAtSize(24)
   * ```
   *
   * The `options.descender` value controls whether or not the font's
   * descender is included in the height calculation.
   *
   * @param size The font size to be used for this measurement.
   * @param options The options to be used when computing this measurement.
   * @returns The height of this font at the given size.
   */
  heightAtSize(size, options) {
    var _a;
    assertIs(size, "size", ["number"]);
    assertOrUndefined(options === null || options === void 0 ? void 0 : options.descender, "options.descender", ["boolean"]);
    return this.embedder.heightOfFontAtSize(size, {
      descender: (_a = options === null || options === void 0 ? void 0 : options.descender) !== null && _a !== void 0 ? _a : true
    });
  }
  /**
   * Compute the font size at which this font is a given height. For example:
   * ```js
   * const fontSize = font.sizeAtHeight(12)
   * ```
   * @param height The height to be used for this calculation.
   * @returns The font size at which this font is the given height.
   */
  sizeAtHeight(height) {
    assertIs(height, "height", ["number"]);
    return this.embedder.sizeOfFontAtHeight(height);
  }
  /**
   * Get the set of unicode code points that can be represented by this font.
   * @returns The set of unicode code points supported by this font.
   */
  getCharacterSet() {
    if (this.embedder instanceof StandardFontEmbedder_default) {
      return this.embedder.encoding.supportedCodePoints;
    } else {
      return this.embedder.font.characterSet;
    }
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all fonts get embedded.
   *
   * Embed this font in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  embed() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.modified) {
        yield this.embedder.embedIntoContext(this.doc.context, this.ref);
        this.modified = false;
      }
    });
  }
};
PDFFont.of = (ref, doc, embedder) => new PDFFont(ref, doc, embedder);

// node_modules/pdf-lib-plus-encrypt/es/api/PDFImage.js
var PDFImage = class {
  constructor(ref, doc, embedder) {
    this.alreadyEmbedded = false;
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    assertIs(embedder, "embedder", [
      [JpegEmbedder_default, "JpegEmbedder"],
      [PngEmbedder_default, "PngEmbedder"]
    ]);
    this.ref = ref;
    this.doc = doc;
    this.width = embedder.width;
    this.height = embedder.height;
    this.embedder = embedder;
  }
  /**
   * Compute the width and height of this image after being scaled by the
   * given `factor`. For example:
   * ```js
   * image.width  // => 500
   * image.height // => 250
   *
   * const scaled = image.scale(0.5)
   * scaled.width  // => 250
   * scaled.height // => 125
   * ```
   * This operation is often useful before drawing an image with
   * [[PDFPage.drawImage]] to compute the `width` and `height` options.
   * @param factor The factor by which this image should be scaled.
   * @returns The width and height of the image after being scaled.
   */
  scale(factor) {
    assertIs(factor, "factor", ["number"]);
    return { width: this.width * factor, height: this.height * factor };
  }
  /**
   * Get the width and height of this image after scaling it as large as
   * possible while maintaining its aspect ratio and not exceeding the
   * specified `width` and `height`. For example:
   * ```
   * image.width  // => 500
   * image.height // => 250
   *
   * const scaled = image.scaleToFit(750, 1000)
   * scaled.width  // => 750
   * scaled.height // => 375
   * ```
   * The `width` and `height` parameters can also be thought of as the width
   * and height of a box that the scaled image must fit within.
   * @param width The bounding box's width.
   * @param height The bounding box's height.
   * @returns The width and height of the image after being scaled.
   */
  scaleToFit(width, height) {
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const imgWidthScale = width / this.width;
    const imgHeightScale = height / this.height;
    const scale2 = Math.min(imgWidthScale, imgHeightScale);
    return this.scale(scale2);
  }
  /**
   * Get the width and height of this image. For example:
   * ```js
   * const { width, height } = image.size()
   * ```
   * @returns The width and height of the image.
   */
  size() {
    return this.scale(1);
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all images get embedded.
   *
   * Embed this image in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  embed() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.alreadyEmbedded) {
        yield this.embedder.embedIntoContext(this.doc.context, this.ref);
        this.alreadyEmbedded = true;
      }
    });
  }
};
PDFImage.of = (ref, doc, embedder) => new PDFImage(ref, doc, embedder);

// node_modules/pdf-lib-plus-encrypt/es/api/image/alignment.js
var ImageAlignment;
(function(ImageAlignment2) {
  ImageAlignment2[ImageAlignment2["Left"] = 0] = "Left";
  ImageAlignment2[ImageAlignment2["Center"] = 1] = "Center";
  ImageAlignment2[ImageAlignment2["Right"] = 2] = "Right";
})(ImageAlignment || (ImageAlignment = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFField.js
var assertFieldAppearanceOptions = (options) => {
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.x, "options.x", ["number"]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.y, "options.y", ["number"]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.width, "options.width", ["number"]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.height, "options.height", ["number"]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.textColor, "options.textColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.backgroundColor, "options.backgroundColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.borderColor, "options.borderColor", [
    [Object, "Color"]
  ]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.borderWidth, "options.borderWidth", ["number"]);
  assertOrUndefined(options === null || options === void 0 ? void 0 : options.rotate, "options.rotate", [[Object, "Rotation"]]);
};
var PDFField = class {
  constructor(acroField, ref, doc) {
    assertIs(acroField, "acroField", [[PDFAcroTerminal_default, "PDFAcroTerminal"]]);
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.acroField = acroField;
    this.ref = ref;
    this.doc = doc;
  }
  /**
   * Get the fully qualified name of this field. For example:
   * ```js
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const name = field.getName()
   *   console.log('Field name:', name)
   * })
   * ```
   * Note that PDF fields are structured as a tree. Each field is the
   * descendent of a series of ancestor nodes all the way up to the form node,
   * which is always the root of the tree. Each node in the tree (except for
   * the form node) has a partial name. Partial names can be composed of any
   * unicode characters except a period (`.`). The fully qualified name of a
   * field is composed of the partial names of all its ancestors joined
   * with periods. This means that splitting the fully qualified name on
   * periods and taking the last element of the resulting array will give you
   * the partial name of a specific field.
   * @returns The fully qualified name of this field.
   */
  getName() {
    var _a;
    return (_a = this.acroField.getFullyQualifiedName()) !== null && _a !== void 0 ? _a : "";
  }
  /**
   * Returns `true` if this field is read only. This means that PDF readers
   * will not allow users to interact with the field or change its value. See
   * [[PDFField.enableReadOnly]] and [[PDFField.disableReadOnly]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isReadOnly()) console.log('Read only is enabled')
   * ```
   * @returns Whether or not this is a read only field.
   */
  isReadOnly() {
    return this.acroField.hasFlag(AcroFieldFlags.ReadOnly);
  }
  /**
   * Prevent PDF readers from allowing users to interact with this field or
   * change its value. The field will not respond to mouse or keyboard input.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableReadOnly()
   * ```
   * Useful for fields whose values are computed, imported from a database, or
   * prefilled by software before being displayed to the user.
   */
  enableReadOnly() {
    this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, true);
  }
  /**
   * Allow users to interact with this field and change its value in PDF
   * readers via mouse and keyboard input. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableReadOnly()
   * ```
   */
  disableReadOnly() {
    this.acroField.setFlagTo(AcroFieldFlags.ReadOnly, false);
  }
  /**
   * Returns `true` if this field must have a value when the form is submitted.
   * See [[PDFField.enableRequired]] and [[PDFField.disableRequired]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isRequired()) console.log('Field is required')
   * ```
   * @returns Whether or not this field is required.
   */
  isRequired() {
    return this.acroField.hasFlag(AcroFieldFlags.Required);
  }
  /**
   * Require this field to have a value when the form is submitted.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableRequired()
   * ```
   */
  enableRequired() {
    this.acroField.setFlagTo(AcroFieldFlags.Required, true);
  }
  /**
   * Do not require this field to have a value when the form is submitted.
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableRequired()
   * ```
   */
  disableRequired() {
    this.acroField.setFlagTo(AcroFieldFlags.Required, false);
  }
  /**
   * Returns `true` if this field's value should be exported when the form is
   * submitted. See [[PDFField.enableExporting]] and
   * [[PDFField.disableExporting]].
   * For example:
   * ```js
   * const field = form.getField('some.field')
   * if (field.isExported()) console.log('Exporting is enabled')
   * ```
   * @returns Whether or not this field's value should be exported.
   */
  isExported() {
    return !this.acroField.hasFlag(AcroFieldFlags.NoExport);
  }
  /**
   * Indicate that this field's value should be exported when the form is
   * submitted in a PDF reader. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.enableExporting()
   * ```
   */
  enableExporting() {
    this.acroField.setFlagTo(AcroFieldFlags.NoExport, false);
  }
  /**
   * Indicate that this field's value should **not** be exported when the form
   * is submitted in a PDF reader. For example:
   * ```js
   * const field = form.getField('some.field')
   * field.disableExporting()
   * ```
   */
  disableExporting() {
    this.acroField.setFlagTo(AcroFieldFlags.NoExport, true);
  }
  /** @ignore */
  needsAppearancesUpdate() {
    throw new MethodNotImplementedError(this.constructor.name, "needsAppearancesUpdate");
  }
  /** @ignore */
  defaultUpdateAppearances(_font) {
    throw new MethodNotImplementedError(this.constructor.name, "defaultUpdateAppearances");
  }
  markAsDirty() {
    this.doc.getForm().markFieldAsDirty(this.ref);
  }
  markAsClean() {
    this.doc.getForm().markFieldAsClean(this.ref);
  }
  isDirty() {
    return this.doc.getForm().fieldIsDirty(this.ref);
  }
  createWidget(options) {
    var _a;
    const textColor = options.textColor;
    const backgroundColor = options.backgroundColor;
    const borderColor = options.borderColor;
    const borderWidth = options.borderWidth;
    const degreesAngle = toDegrees(options.rotate);
    const caption = options.caption;
    const x = options.x;
    const y = options.y;
    const width = options.width + borderWidth;
    const height = options.height + borderWidth;
    const hidden = Boolean(options.hidden);
    assertMultiple(degreesAngle, "degreesAngle", 90);
    const widget = PDFWidgetAnnotation_default.create(this.doc.context, this.ref);
    const rect = rotateRectangle({ x, y, width, height }, borderWidth, degreesAngle);
    widget.setRectangle(rect);
    const ac = widget.getOrCreateAppearanceCharacteristics();
    if (backgroundColor) {
      ac.setBackgroundColor(colorToComponents(backgroundColor));
    }
    ac.setRotation(degreesAngle);
    if (caption)
      ac.setCaptions({ normal: caption });
    if (borderColor)
      ac.setBorderColor(colorToComponents(borderColor));
    const bs = widget.getOrCreateBorderStyle();
    if (borderWidth !== void 0)
      bs.setWidth(borderWidth);
    widget.setFlagTo(AnnotationFlags.Print, true);
    widget.setFlagTo(AnnotationFlags.Hidden, hidden);
    widget.setFlagTo(AnnotationFlags.Invisible, false);
    if (textColor) {
      const da = (_a = this.acroField.getDefaultAppearance()) !== null && _a !== void 0 ? _a : "";
      const newDa = da + "\n" + setFillingColor(textColor).toString();
      this.acroField.setDefaultAppearance(newDa);
    }
    return widget;
  }
  updateWidgetAppearanceWithFont(widget, font, { normal, rollover, down }) {
    this.updateWidgetAppearances(widget, {
      normal: this.createAppearanceStream(widget, normal, font),
      rollover: rollover && this.createAppearanceStream(widget, rollover, font),
      down: down && this.createAppearanceStream(widget, down, font)
    });
  }
  updateOnOffWidgetAppearance(widget, onValue, { normal, rollover, down }) {
    this.updateWidgetAppearances(widget, {
      normal: this.createAppearanceDict(widget, normal, onValue),
      rollover: rollover && this.createAppearanceDict(widget, rollover, onValue),
      down: down && this.createAppearanceDict(widget, down, onValue)
    });
  }
  updateWidgetAppearances(widget, { normal, rollover, down }) {
    widget.setNormalAppearance(normal);
    if (rollover) {
      widget.setRolloverAppearance(rollover);
    } else {
      widget.removeRolloverAppearance();
    }
    if (down) {
      widget.setDownAppearance(down);
    } else {
      widget.removeDownAppearance();
    }
  }
  // // TODO: Do we need to do this...?
  // private foo(font: PDFFont, dict: PDFDict) {
  //   if (!dict.lookup(PDFName.of('DR'))) {
  //     dict.set(PDFName.of('DR'), dict.context.obj({}));
  //   }
  //   const DR = dict.lookup(PDFName.of('DR'), PDFDict);
  //   if (!DR.lookup(PDFName.of('Font'))) {
  //     DR.set(PDFName.of('Font'), dict.context.obj({}));
  //   }
  //   const Font = DR.lookup(PDFName.of('Font'), PDFDict);
  //   Font.set(PDFName.of(font.name), font.ref);
  // }
  createAppearanceStream(widget, appearance, font) {
    const { context } = this.acroField.dict;
    const { width, height } = widget.getRectangle();
    const Resources = font && { Font: { [font.name]: font.ref } };
    const stream2 = context.formXObject(appearance, {
      Resources,
      BBox: context.obj([0, 0, width, height]),
      Matrix: context.obj([1, 0, 0, 1, 0, 0])
    });
    const streamRef = context.register(stream2);
    return streamRef;
  }
  /**
   * Create a FormXObject of the supplied image and add it to context.
   * The FormXObject size is calculated based on the widget (including
   * the alignment).
   * @param widget The widget that should display the image.
   * @param alignment The alignment of the image.
   * @param image The image that should be displayed.
   * @returns The ref for the FormXObject that was added to the context.
   */
  createImageAppearanceStream(widget, image, alignment) {
    var _a;
    const { context } = this.acroField.dict;
    const rectangle2 = widget.getRectangle();
    const ap = widget.getAppearanceCharacteristics();
    const bs = widget.getBorderStyle();
    const borderWidth = (_a = bs === null || bs === void 0 ? void 0 : bs.getWidth()) !== null && _a !== void 0 ? _a : 0;
    const rotation = reduceRotation(ap === null || ap === void 0 ? void 0 : ap.getRotation());
    const rotate = rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation }));
    const adj = adjustDimsForRotation(rectangle2, rotation);
    const imageDims = image.scaleToFit(adj.width - borderWidth * 2, adj.height - borderWidth * 2);
    const options = {
      x: borderWidth,
      y: borderWidth,
      width: imageDims.width,
      height: imageDims.height,
      //
      rotate: degrees(0),
      xSkew: degrees(0),
      ySkew: degrees(0)
    };
    if (alignment === ImageAlignment.Center) {
      options.x += (adj.width - borderWidth * 2) / 2 - imageDims.width / 2;
      options.y += (adj.height - borderWidth * 2) / 2 - imageDims.height / 2;
    } else if (alignment === ImageAlignment.Right) {
      options.x = adj.width - borderWidth - imageDims.width;
      options.y = adj.height - borderWidth - imageDims.height;
    }
    const imageName = addRandomSuffix("Image", 10);
    const appearance = [...rotate, ...drawImage(imageName, options)];
    const Resources = { XObject: { [imageName]: image.ref } };
    const stream2 = context.formXObject(appearance, {
      Resources,
      BBox: context.obj([0, 0, rectangle2.width, rectangle2.height]),
      Matrix: context.obj([1, 0, 0, 1, 0, 0])
    });
    return context.register(stream2);
  }
  createAppearanceDict(widget, appearance, onValue) {
    const { context } = this.acroField.dict;
    const onStreamRef = this.createAppearanceStream(widget, appearance.on);
    const offStreamRef = this.createAppearanceStream(widget, appearance.off);
    const appearanceDict = context.obj({});
    appearanceDict.set(onValue, onStreamRef);
    appearanceDict.set(PDFName_default.of("Off"), offStreamRef);
    return appearanceDict;
  }
};

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFCheckBox.js
var PDFCheckBox = class extends PDFField {
  constructor(acroCheckBox, ref, doc) {
    super(acroCheckBox, ref, doc);
    assertIs(acroCheckBox, "acroCheckBox", [
      [PDFAcroCheckBox_default, "PDFAcroCheckBox"]
    ]);
    this.acroField = acroCheckBox;
  }
  /**
   * Mark this check box. This operation is analogous to a human user clicking
   * a check box to fill it in a PDF reader. This method will update the
   * underlying state of the check box field to indicate it has been selected.
   * PDF libraries and readers will be able to extract this value from the
   * saved document and determine that it was selected.
   *
   * For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.check()
   * ```
   *
   * This method will mark this check box as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
   * streams will display a check mark inside the widgets of this check box
   * field.
   */
  check() {
    var _a;
    const onValue = (_a = this.acroField.getOnValue()) !== null && _a !== void 0 ? _a : PDFName_default.of("Yes");
    this.markAsDirty();
    this.acroField.setValue(onValue);
  }
  /**
   * Clears this check box. This operation is analogous to a human user clicking
   * a check box to unmark it in a PDF reader. This method will update the
   * underlying state of the check box field to indicate it has been deselected.
   * PDF libraries and readers will be able to extract this value from the
   * saved document and determine that it was not selected.
   *
   * For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.uncheck()
   * ```
   *
   * This method will mark this check box as dirty. See [[PDFCheckBox.check]]
   * for more details about what this means.
   */
  uncheck() {
    this.markAsDirty();
    this.acroField.setValue(PDFName_default.of("Off"));
  }
  /**
   * Returns `true` if this check box is selected (either by a human user via
   * a PDF reader, or else programmatically via software). For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * if (checkBox.isChecked()) console.log('check box is selected')
   * ```
   * @returns Whether or not this check box is selected.
   */
  isChecked() {
    const onValue = this.acroField.getOnValue();
    return !!onValue && onValue === this.acroField.getValue();
  }
  /**
   * Show this check box on the specified page. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const checkBox = form.createCheckBox('some.checkBox.field')
   *
   * checkBox.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 25,
   *   height: 25,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   * })
   * ```
   * This will create a new widget for this check box field.
   * @param page The page to which this check box widget should be added.
   * @param options The options to be used when adding this check box widget.
   */
  addToPage(page, options) {
    var _a, _b, _c, _d, _e, _f;
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options)
      options = {};
    if (!("textColor" in options))
      options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options))
      options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options))
      options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options))
      options.borderWidth = 1;
    const widget = this.createWidget({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : 50,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
      rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : degrees(0),
      hidden: options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    widget.setAppearanceState(PDFName_default.of("Off"));
    this.updateWidgetAppearance(widget, PDFName_default.of("Yes"));
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if any of this check box's widgets do not have an
   * appearance stream for its current state. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * if (checkBox.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this check box needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getAppearanceState();
      const normal = (_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
      if (!(normal instanceof PDFDict_default))
        return true;
      if (state && !normal.has(state))
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this check box's widgets using
   * the default appearance provider for check boxes. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.defaultUpdateAppearances()
   * ```
   */
  defaultUpdateAppearances() {
    this.updateAppearances();
  }
  /**
   * Update the appearance streams for each of this check box's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for check boxs will be used. For example:
   * ```js
   * const checkBox = form.getCheckBox('some.checkBox.field')
   * checkBox.updateAppearances((field, widget) => {
   *   ...
   *   return {
   *     normal: { on: drawCheckBox(...), off: drawCheckBox(...) },
   *     down: { on: drawCheckBox(...), off: drawCheckBox(...) },
   *   }
   * })
   * ```
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(provider) {
    var _a;
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const onValue = (_a = widget.getOnValue()) !== null && _a !== void 0 ? _a : PDFName_default.of("Yes");
      if (!onValue)
        continue;
      this.updateWidgetAppearance(widget, onValue, provider);
    }
    this.markAsClean();
  }
  updateWidgetAppearance(widget, onValue, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultCheckBoxAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget));
    this.updateOnOffWidgetAppearance(widget, onValue, appearances);
  }
};
PDFCheckBox.of = (acroCheckBox, ref, doc) => new PDFCheckBox(acroCheckBox, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFDropdown.js
var PDFDropdown = class extends PDFField {
  constructor(acroComboBox, ref, doc) {
    super(acroComboBox, ref, doc);
    assertIs(acroComboBox, "acroComboBox", [
      [PDFAcroComboBox_default, "PDFAcroComboBox"]
    ]);
    this.acroField = acroComboBox;
  }
  /**
   * Get the list of available options for this dropdown. These options will be
   * displayed to users who click on this dropdown in a PDF reader.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * const options = dropdown.getOptions()
   * console.log('Dropdown options:', options)
   * ```
   * @returns The options for this dropdown.
   */
  getOptions() {
    const rawOptions = this.acroField.getOptions();
    const options = new Array(rawOptions.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { display, value } = rawOptions[idx];
      options[idx] = (display !== null && display !== void 0 ? display : value).decodeText();
    }
    return options;
  }
  /**
   * Get the selected options for this dropdown. These are the values that were
   * selected by a human user via a PDF reader, or programatically via
   * software.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * const selections = dropdown.getSelected()
   * console.log('Dropdown selections:', selections)
   * ```
   * > **NOTE:** Note that PDF readers only display one selected option when
   * > rendering dropdowns. However, the PDF specification does allow for
   * > multiple values to be selected in a dropdown. As such, the `pdf-lib`
   * > API supports this. However, in most cases the array returned by this
   * > method will contain only a single element (or no elements).
   * @returns The selected options in this dropdown.
   */
  getSelected() {
    const values2 = this.acroField.getValues();
    const selected = new Array(values2.length);
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      selected[idx] = values2[idx].decodeText();
    }
    return selected;
  }
  /**
   * Set the list of options that are available for this dropdown. These are
   * the values that will be available for users to select when they view this
   * dropdown in a PDF reader. Note that preexisting options for this dropdown
   * will be removed. Only the values passed as `options` will be available to
   * select.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('planets.dropdown')
   * dropdown.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
   * ```
   * @param options The options that should be available in this dropdown.
   */
  setOptions(options) {
    assertIs(options, "options", [Array]);
    const optionObjects = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      optionObjects[idx] = { value: PDFHexString_default.fromText(options[idx]) };
    }
    this.acroField.setOptions(optionObjects);
  }
  /**
   * Add to the list of options that are available for this dropdown. Users
   * will be able to select these values in a PDF reader. In addition to the
   * values passed as `options`, any preexisting options for this dropdown will
   * still be available for users to select.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('rockets.dropdown')
   * dropdown.addOptions(['Saturn IV', 'Falcon Heavy'])
   * ```
   * @param options New options that should be available in this dropdown.
   */
  addOptions(options) {
    assertIs(options, "options", ["string", Array]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const existingOptions = this.acroField.getOptions();
    const newOptions = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      newOptions[idx] = { value: PDFHexString_default.fromText(optionsArr[idx]) };
    }
    this.acroField.setOptions(existingOptions.concat(newOptions));
  }
  /**
   * Select one or more values for this dropdown. This operation is analogous
   * to a human user opening the dropdown in a PDF reader and clicking on a
   * value to select it. This method will update the underlying state of the
   * dropdown to indicate which values have been selected. PDF libraries and
   * readers will be able to extract these values from the saved document and
   * determine which values were selected.
   *
   * For example:
   * ```js
   * const dropdown = form.getDropdown('best.superhero.dropdown')
   * dropdown.select('One Punch Man')
   * ```
   *
   * This method will mark this dropdown as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the selected option inside the widgets of this dropdown.
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if the selected option for this field
   * contains characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFDropdown.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * Selecting an option that does not exist in this dropdown's option list
   * (see [[PDFDropdown.getOptions]]) will enable editing on this dropdown
   * (see [[PDFDropdown.enableEditing]]).
   *
   * > **NOTE:** PDF readers only display one selected option when rendering
   * > dropdowns. However, the PDF specification does allow for multiple values
   * > to be selected in a dropdown. As such, the `pdf-lib` API supports this.
   * > However, it is not recommended to select more than one value with this
   * > method, as only one will be visible. [[PDFOptionList]] fields are better
   * > suited for displaying multiple selected values.
   *
   * @param options The options to be selected.
   * @param merge Whether or not existing selections should be preserved.
   */
  select(options, merge = false) {
    assertIs(options, "options", ["string", Array]);
    assertIs(merge, "merge", ["boolean"]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const validOptions = this.getOptions();
    const hasCustomOption = optionsArr.find((option) => !validOptions.includes(option));
    if (hasCustomOption)
      this.enableEditing();
    this.markAsDirty();
    if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
      this.enableMultiselect();
    }
    const values2 = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      values2[idx] = PDFHexString_default.fromText(optionsArr[idx]);
    }
    if (merge) {
      const existingValues = this.acroField.getValues();
      this.acroField.setValues(existingValues.concat(values2));
    } else {
      this.acroField.setValues(values2);
    }
  }
  /**
   * Clear all selected values for this dropdown. This operation is equivalent
   * to selecting an empty list. This method will update the underlying state
   * of the dropdown to indicate that no values have been selected.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.clear()
   * ```
   * This method will mark this text field as dirty. See [[PDFDropdown.select]]
   * for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValues([]);
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this dropdown. Font sizes may
   * be integer or floating point numbers. Supplying a negative font size will
   * cause this method to throw an error.
   *
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.setFontSize(4)
   * dropdown.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if users are allowed to edit the selected value of this
   * dropdown directly and are not constrained by the list of available
   * options. See [[PDFDropdown.enableEditing]] and
   * [[PDFDropdown.disableEditing]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isEditable()) console.log('Editing is enabled')
   * ```
   * @returns Whether or not this dropdown is editable.
   */
  isEditable() {
    return this.acroField.hasFlag(AcroChoiceFlags.Edit);
  }
  /**
   * Allow users to edit the selected value of this dropdown in PDF readers
   * with their keyboard. This means that the selected value of this dropdown
   * will not be constrained by the list of available options. However, if this
   * dropdown has any available options, users will still be allowed to select
   * from that list.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableEditing()
   * ```
   */
  enableEditing() {
    this.acroField.setFlagTo(AcroChoiceFlags.Edit, true);
  }
  /**
   * Do not allow users to edit the selected value of this dropdown in PDF
   * readers with their keyboard. This will constrain the selected value of
   * this dropdown to the list of available options. Users will only be able
   * to select an option from that list.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableEditing()
   * ```
   */
  disableEditing() {
    this.acroField.setFlagTo(AcroChoiceFlags.Edit, false);
  }
  /**
   * Returns `true` if the option list of this dropdown is always displayed
   * in alphabetical order, irrespective of the order in which the options
   * were added to the dropdown. See [[PDFDropdown.enableSorting]] and
   * [[PDFDropdown.disableSorting]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSorted()) console.log('Sorting is enabled')
   * ```
   * @returns Whether or not this dropdown's options are sorted.
   */
  isSorted() {
    return this.acroField.hasFlag(AcroChoiceFlags.Sort);
  }
  /**
   * Always display the option list of this dropdown in alphabetical order,
   * irrespective of the order in which the options were added to this dropdown.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSorting()
   * ```
   */
  enableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, true);
  }
  /**
   * Do not always display the option list of this dropdown in alphabetical
   * order. Instead, display the options in whichever order they were added
   * to the list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSorting()
   * ```
   */
  disableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, false);
  }
  /**
   * Returns `true` if multiple options can be selected from this dropdown's
   * option list. See [[PDFDropdown.enableMultiselect]] and
   * [[PDFDropdown.disableMultiselect]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isMultiselect()) console.log('Multiselect is enabled')
   * ```
   * @returns Whether or not multiple options can be selected.
   */
  isMultiselect() {
    return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect);
  }
  /**
   * Allow users to select more than one option from this dropdown's option
   * list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableMultiselect()
   * ```
   */
  enableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, true);
  }
  /**
   * Do not allow users to select more than one option from this dropdown's
   * option list. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableMultiselect()
   * ```
   */
  disableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, false);
  }
  /**
   * Returns `true` if the selected option should be spell checked by PDF
   * readers. Spell checking will only be performed if this dropdown allows
   * editing (see [[PDFDropdown.isEditable]]). See
   * [[PDFDropdown.enableSpellChecking]] and
   * [[PDFDropdown.disableSpellChecking]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSpellChecked()) console.log('Spell checking is enabled')
   * ```
   * @returns Whether or not this dropdown can be spell checked.
   */
  isSpellChecked() {
    return !this.acroField.hasFlag(AcroChoiceFlags.DoNotSpellCheck);
  }
  /**
   * Allow PDF readers to spell check the selected option of this dropdown.
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSpellChecking()
   * ```
   */
  enableSpellChecking() {
    this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, false);
  }
  /**
   * Do not allow PDF readers to spell check the selected option of this
   * dropdown. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSpellChecking()
   * ```
   */
  disableSpellChecking() {
    this.acroField.setFlagTo(AcroChoiceFlags.DoNotSpellCheck, true);
  }
  /**
   * Returns `true` if the option selected by a user is stored, or "committed",
   * when the user clicks the option. The alternative is that the user's
   * selection is stored when the user leaves this dropdown field (by clicking
   * outside of it - on another field, for example). See
   * [[PDFDropdown.enableSelectOnClick]] and
   * [[PDFDropdown.disableSelectOnClick]]. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.isSelectOnClick()) console.log('Select on click is enabled')
   * ```
   * @returns Whether or not options are selected immediately after they are
   *          clicked.
   */
  isSelectOnClick() {
    return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange);
  }
  /**
   * Store the option selected by a user immediately after the user clicks the
   * option. Do not wait for the user to leave this dropdown field (by clicking
   * outside of it - on another field, for example). For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.enableSelectOnClick()
   * ```
   */
  enableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, true);
  }
  /**
   * Wait to store the option selected by a user until they leave this dropdown
   * field (by clicking outside of it - on another field, for example).
   * For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.disableSelectOnClick()
   * ```
   */
  disableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, false);
  }
  /**
   * Show this dropdown on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const dropdown = form.createDropdown('best.gundam')
   * dropdown.setOptions(['Exia', 'Dynames'])
   * dropdown.select('Exia')
   *
   * dropdown.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this dropdown field.
   * @param page The page to which this dropdown widget should be added.
   * @param options The options to be used when adding this dropdown widget.
   */
  addToPage(page, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options)
      options = {};
    if (!("textColor" in options))
      options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options))
      options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options))
      options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options))
      options.borderWidth = 1;
    const widget = this.createWidget({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
      rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : degrees(0),
      hidden: options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this dropdown has been marked as dirty, or if any of
   * this dropdown's widgets do not have an appearance stream. For example:
   * ```js
   * const dropdown = form.getDropdown('some.dropdown.field')
   * if (dropdown.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this dropdown needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    if (this.isDirty())
      return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof PDFStream_default;
      if (!hasAppearances)
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this dropdown's widgets using
   * the default appearance provider for dropdowns. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this dropdown's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for dropdowns will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const dropdown = form.getDropdown('some.dropdown.field')
   * dropdown.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawTextField(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  // getOption(index: number): string {}
  // getSelectedIndices(): number[] {}
  // removeOptions(option: string | string[]) {}
  // removeIndices(option: number[]) {}
  // deselect(options: string | string[]) {}
  // deselectIndices(optionIndices: number[]) {}
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultDropdownAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
PDFDropdown.of = (acroComboBox, ref, doc) => new PDFDropdown(acroComboBox, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFOptionList.js
var PDFOptionList = class extends PDFField {
  constructor(acroListBox, ref, doc) {
    super(acroListBox, ref, doc);
    assertIs(acroListBox, "acroListBox", [[PDFAcroListBox_default, "PDFAcroListBox"]]);
    this.acroField = acroListBox;
  }
  /**
   * Get the list of available options for this option list. These options will
   * be displayed to users who view this option list in a PDF reader.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * const options = optionList.getOptions()
   * console.log('Option List options:', options)
   * ```
   * @returns The options for this option list.
   */
  getOptions() {
    const rawOptions = this.acroField.getOptions();
    const options = new Array(rawOptions.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      const { display, value } = rawOptions[idx];
      options[idx] = (display !== null && display !== void 0 ? display : value).decodeText();
    }
    return options;
  }
  /**
   * Get the selected options for this option list. These are the values that
   * were selected by a human user via a PDF reader, or programatically via
   * software.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * const selections = optionList.getSelected()
   * console.log('Option List selections:', selections)
   * ```
   * @returns The selected options for this option list.
   */
  getSelected() {
    const values2 = this.acroField.getValues();
    const selected = new Array(values2.length);
    for (let idx = 0, len = values2.length; idx < len; idx++) {
      selected[idx] = values2[idx].decodeText();
    }
    return selected;
  }
  /**
   * Set the list of options that are available for this option list. These are
   * the values that will be available for users to select when they view this
   * option list in a PDF reader. Note that preexisting options for this
   * option list will be removed. Only the values passed as `options` will be
   * available to select.
   *
   * For example:
   * ```js
   * const optionList = form.getOptionList('planets.optionList')
   * optionList.setOptions(['Earth', 'Mars', 'Pluto', 'Venus'])
   * ```
   *
   * This method will mark this option list as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the options this field contains inside the widgets of this text
   * field (with selected options highlighted).
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if this field contains any options
   * with characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFOptionList.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * @param options The options that should be available in this option list.
   */
  setOptions(options) {
    assertIs(options, "options", [Array]);
    this.markAsDirty();
    const optionObjects = new Array(options.length);
    for (let idx = 0, len = options.length; idx < len; idx++) {
      optionObjects[idx] = { value: PDFHexString_default.fromText(options[idx]) };
    }
    this.acroField.setOptions(optionObjects);
  }
  /**
   * Add to the list of options that are available for this option list. Users
   * will be able to select these values in a PDF reader. In addition to the
   * values passed as `options`, any preexisting options for this option list
   * will still be available for users to select.
   * For example:
   * ```js
   * const optionList = form.getOptionList('rockets.optionList')
   * optionList.addOptions(['Saturn IV', 'Falcon Heavy'])
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   * @param options New options that should be available in this option list.
   */
  addOptions(options) {
    assertIs(options, "options", ["string", Array]);
    this.markAsDirty();
    const optionsArr = Array.isArray(options) ? options : [options];
    const existingOptions = this.acroField.getOptions();
    const newOptions = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      newOptions[idx] = { value: PDFHexString_default.fromText(optionsArr[idx]) };
    }
    this.acroField.setOptions(existingOptions.concat(newOptions));
  }
  /**
   * Select one or more values for this option list. This operation is analogous
   * to a human user opening the option list in a PDF reader and clicking on one
   * or more values to select them. This method will update the underlying state
   * of the option list to indicate which values have been selected. PDF
   * libraries and readers will be able to extract these values from the saved
   * document and determine which values were selected.
   * For example:
   * ```js
   * const optionList = form.getOptionList('best.superheroes.optionList')
   * optionList.select(['One Punch Man', 'Iron Man'])
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   * @param options The options to be selected.
   * @param merge Whether or not existing selections should be preserved.
   */
  select(options, merge = false) {
    assertIs(options, "options", ["string", Array]);
    assertIs(merge, "merge", ["boolean"]);
    const optionsArr = Array.isArray(options) ? options : [options];
    const validOptions = this.getOptions();
    assertIsSubset(optionsArr, "option", validOptions);
    this.markAsDirty();
    if (optionsArr.length > 1 || optionsArr.length === 1 && merge) {
      this.enableMultiselect();
    }
    const values2 = new Array(optionsArr.length);
    for (let idx = 0, len = optionsArr.length; idx < len; idx++) {
      values2[idx] = PDFHexString_default.fromText(optionsArr[idx]);
    }
    if (merge) {
      const existingValues = this.acroField.getValues();
      this.acroField.setValues(existingValues.concat(values2));
    } else {
      this.acroField.setValues(values2);
    }
  }
  /**
   * Clear all selected values for this option list. This operation is
   * equivalent to selecting an empty list. This method will update the
   * underlying state of the option list to indicate that no values have been
   * selected.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.clear()
   * ```
   * This method will mark this option list as dirty. See
   * [[PDFOptionList.setOptions]] for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValues([]);
  }
  /**
   * Set the font size for the text in this field. There needs to be a
   * default appearance string (DA) set with a font value specified
   * for this to work. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.setFontSize(4);
   * ```
   * @param fontSize The font size to set the font to.
   */
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this option list. Font sizes
   * may be integer or floating point numbers. Supplying a negative font size
   * will cause this method to throw an error.
   *
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.setFontSize(4)
   * optionList.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if the options of this option list are always displayed
   * in alphabetical order, irrespective of the order in which the options
   * were added to the option list. See [[PDFOptionList.enableSorting]] and
   * [[PDFOptionList.disableSorting]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isSorted()) console.log('Sorting is enabled')
   * ```
   * @returns Whether or not this option list is sorted.
   */
  isSorted() {
    return this.acroField.hasFlag(AcroChoiceFlags.Sort);
  }
  /**
   * Always display the options of this option list in alphabetical order,
   * irrespective of the order in which the options were added to this option
   * list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableSorting()
   * ```
   */
  enableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, true);
  }
  /**
   * Do not always display the options of this option list in alphabetical
   * order. Instead, display the options in whichever order they were added
   * to this option list. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableSorting()
   * ```
   */
  disableSorting() {
    this.acroField.setFlagTo(AcroChoiceFlags.Sort, false);
  }
  /**
   * Returns `true` if multiple options can be selected from this option list.
   * See [[PDFOptionList.enableMultiselect]] and
   * [[PDFOptionList.disableMultiselect]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isMultiselect()) console.log('Multiselect is enabled')
   * ```
   * @returns Whether or not multiple options can be selected.
   */
  isMultiselect() {
    return this.acroField.hasFlag(AcroChoiceFlags.MultiSelect);
  }
  /**
   * Allow users to select more than one option from this option list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableMultiselect()
   * ```
   */
  enableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, true);
  }
  /**
   * Do not allow users to select more than one option from this option list.
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableMultiselect()
   * ```
   */
  disableMultiselect() {
    this.acroField.setFlagTo(AcroChoiceFlags.MultiSelect, false);
  }
  /**
   * Returns `true` if the option selected by a user is stored, or "committed",
   * when the user clicks the option. The alternative is that the user's
   * selection is stored when the user leaves this option list field (by
   * clicking outside of it - on another field, for example). See
   * [[PDFOptionList.enableSelectOnClick]] and
   * [[PDFOptionList.disableSelectOnClick]]. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.isSelectOnClick()) console.log('Select on click is enabled')
   * ```
   * @returns Whether or not options are selected immediately after they are
   *          clicked.
   */
  isSelectOnClick() {
    return this.acroField.hasFlag(AcroChoiceFlags.CommitOnSelChange);
  }
  /**
   * Store the option selected by a user immediately after the user clicks the
   * option. Do not wait for the user to leave this option list field (by
   * clicking outside of it - on another field, for example). For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.enableSelectOnClick()
   * ```
   */
  enableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, true);
  }
  /**
   * Wait to store the option selected by a user until they leave this option
   * list field (by clicking outside of it - on another field, for example).
   * For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.disableSelectOnClick()
   * ```
   */
  disableSelectOnClick() {
    this.acroField.setFlagTo(AcroChoiceFlags.CommitOnSelChange, false);
  }
  /**
   * Show this option list on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const optionList = form.createOptionList('best.gundams')
   * optionList.setOptions(['Exia', 'Dynames', 'Kyrios', 'Virtue'])
   * optionList.select(['Exia', 'Virtue'])
   *
   * optionList.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this option list field.
   * @param page The page to which this option list widget should be added.
   * @param options The options to be used when adding this option list widget.
   */
  addToPage(page, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options)
      options = {};
    if (!("textColor" in options))
      options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options))
      options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options))
      options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options))
      options.borderWidth = 1;
    const widget = this.createWidget({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : 100,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
      rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : degrees(0),
      hidden: options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this option list has been marked as dirty, or if any of
   * this option list's widgets do not have an appearance stream. For example:
   * ```js
   * const optionList = form.getOptionList('some.optionList.field')
   * if (optionList.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this option list needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    if (this.isDirty())
      return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof PDFStream_default;
      if (!hasAppearances)
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this option list's widgets using
   * the default appearance provider for option lists. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this option list's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for option lists will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const optionList = form.getOptionList('some.optionList.field')
   * optionList.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawOptionList(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  // getOption(index: number): string {}
  // getSelectedIndices(): number[] {}
  // removeOptions(option: string | string[]) {}
  // removeIndices(option: number[]) {}
  // deselect(options: string | string[]) {}
  // deselectIndices(optionIndices: number[]) {}
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultOptionListAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
PDFOptionList.of = (acroListBox, ref, doc) => new PDFOptionList(acroListBox, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFRadioGroup.js
var PDFRadioGroup = class extends PDFField {
  constructor(acroRadioButton, ref, doc) {
    super(acroRadioButton, ref, doc);
    assertIs(acroRadioButton, "acroRadioButton", [
      [PDFAcroRadioButton_default, "PDFAcroRadioButton"]
    ]);
    this.acroField = acroRadioButton;
  }
  /**
   * Get the list of available options for this radio group. Each option is
   * represented by a radio button. These radio buttons are displayed at
   * various locations in the document, potentially on different pages (though
   * typically they are stacked horizontally or vertically on the same page).
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * const options = radioGroup.getOptions()
   * console.log('Radio Group options:', options)
   * ```
   * @returns The options for this radio group.
   */
  getOptions() {
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      const exportOptions = new Array(exportValues.length);
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        exportOptions[idx] = exportValues[idx].decodeText();
      }
      return exportOptions;
    }
    const onValues = this.acroField.getOnValues();
    const onOptions = new Array(onValues.length);
    for (let idx = 0, len = onOptions.length; idx < len; idx++) {
      onOptions[idx] = onValues[idx].decodeText();
    }
    return onOptions;
  }
  /**
   * Get the selected option for this radio group. The selected option is
   * represented by the radio button in this group that is turned on. At most
   * one radio button in a group can be selected. If no buttons in this group
   * are selected, `undefined` is returned.
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * const selected = radioGroup.getSelected()
   * console.log('Selected radio button:', selected)
   * ```
   * @returns The selected option for this radio group.
   */
  getSelected() {
    const value = this.acroField.getValue();
    if (value === PDFName_default.of("Off"))
      return void 0;
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      const onValues = this.acroField.getOnValues();
      for (let idx = 0, len = onValues.length; idx < len; idx++) {
        if (onValues[idx] === value)
          return exportValues[idx].decodeText();
      }
    }
    return value.decodeText();
  }
  // // TODO: Figure out why this seems to crash Acrobat. Maybe it's because we
  // //       aren't removing the widget reference from the page's Annots?
  // removeOption(option: string) {
  //   assertIs(option, 'option', ['string']);
  //   // TODO: Assert is valid `option`!
  //   const onValues = this.acroField.getOnValues();
  //   const exportValues = this.acroField.getExportValues();
  //   if (exportValues) {
  //     for (let idx = 0, len = exportValues.length; idx < len; idx++) {
  //       if (exportValues[idx].decodeText() === option) {
  //         this.acroField.removeWidget(idx);
  //         this.acroField.removeExportValue(idx);
  //       }
  //     }
  //   } else {
  //     for (let idx = 0, len = onValues.length; idx < len; idx++) {
  //       const value = onValues[idx];
  //       if (value.decodeText() === option) {
  //         this.acroField.removeWidget(idx);
  //         this.acroField.removeExportValue(idx);
  //       }
  //     }
  //   }
  // }
  /**
   * Select an option for this radio group. This operation is analogous to a
   * human user clicking one of the radio buttons in this group via a PDF
   * reader to toggle it on. This method will update the underlying state of
   * the radio group to indicate which option has been selected. PDF libraries
   * and readers will be able to extract this value from the saved document and
   * determine which option was selected.
   *
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('best.superhero.radioGroup')
   * radioGroup.select('One Punch Man')
   * ```
   *
   * This method will mark this radio group as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated appearance
   * streams will display a dot inside the widget of this check box field
   * that represents the selected option.
   *
   * @param option The option to be selected.
   */
  select(option) {
    assertIs(option, "option", ["string"]);
    const validOptions = this.getOptions();
    assertIsOneOf(option, "option", validOptions);
    this.markAsDirty();
    const onValues = this.acroField.getOnValues();
    const exportValues = this.acroField.getExportValues();
    if (exportValues) {
      for (let idx = 0, len = exportValues.length; idx < len; idx++) {
        if (exportValues[idx].decodeText() === option) {
          this.acroField.setValue(onValues[idx]);
        }
      }
    } else {
      for (let idx = 0, len = onValues.length; idx < len; idx++) {
        const value = onValues[idx];
        if (value.decodeText() === option)
          this.acroField.setValue(value);
      }
    }
  }
  /**
   * Clear any selected option for this dropdown. This will result in all
   * radio buttons in this group being toggled off. This method will update
   * the underlying state of the dropdown to indicate that no radio buttons
   * have been selected.
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.clear()
   * ```
   * This method will mark this radio group as dirty. See
   * [[PDFRadioGroup.select]] for more details about what this means.
   */
  clear() {
    this.markAsDirty();
    this.acroField.setValue(PDFName_default.of("Off"));
  }
  /**
   * Returns `true` if users can click on radio buttons in this group to toggle
   * them off. The alternative is that once a user clicks on a radio button
   * to select it, the only way to deselect it is by selecting on another radio
   * button in the group. See [[PDFRadioGroup.enableOffToggling]] and
   * [[PDFRadioGroup.disableOffToggling]]. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.isOffToggleable()) console.log('Off toggling is enabled')
   * ```
   */
  isOffToggleable() {
    return !this.acroField.hasFlag(AcroButtonFlags.NoToggleToOff);
  }
  /**
   * Allow users to click on selected radio buttons in this group to toggle
   * them off. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.enableOffToggling()
   * ```
   * > **NOTE:** This feature is documented in the PDF specification
   * > (Table 226). However, most PDF readers do not respect this option and
   * > prevent users from toggling radio buttons off even when it is enabled.
   * > At the time of this writing (9/6/2020) Mac's Preview software did
   * > respect the option. Adobe Acrobat, Foxit Reader, and Google Chrome did
   * > not.
   */
  enableOffToggling() {
    this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, false);
  }
  /**
   * Prevent users from clicking on selected radio buttons in this group to
   * toggle them off. Clicking on a selected radio button will have no effect.
   * The only way to deselect a selected radio button is to click on a
   * different radio button in the group. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.disableOffToggling()
   * ```
   */
  disableOffToggling() {
    this.acroField.setFlagTo(AcroButtonFlags.NoToggleToOff, true);
  }
  /**
   * Returns `true` if the radio buttons in this group are mutually exclusive.
   * This means that when the user selects a radio button, only that specific
   * button will be turned on. Even if other radio buttons in the group
   * represent the same value, they will not be enabled. The alternative to
   * this is that clicking a radio button will select that button along with
   * any other radio buttons in the group that share the same value. See
   * [[PDFRadioGroup.enableMutualExclusion]] and
   * [[PDFRadioGroup.disableMutualExclusion]].
   * For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.isMutuallyExclusive()) console.log('Mutual exclusion is enabled')
   * ```
   */
  isMutuallyExclusive() {
    return !this.acroField.hasFlag(AcroButtonFlags.RadiosInUnison);
  }
  /**
   * When the user clicks a radio button in this group it will be selected. In
   * addition, any other radio buttons in this group that share the same
   * underlying value will also be selected. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.enableMutualExclusion()
   * ```
   * Note that this option must be enabled prior to adding options to the
   * radio group. It does not currently apply retroactively to existing
   * radio buttons in the group.
   */
  enableMutualExclusion() {
    this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, false);
  }
  /**
   * When the user clicks a radio button in this group only it will be selected.
   * No other radio buttons in the group will be selected, even if they share
   * the same underlying value. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.disableMutualExclusion()
   * ```
   * Note that this option must be disabled prior to adding options to the
   * radio group. It does not currently apply retroactively to existing
   * radio buttons in the group.
   */
  disableMutualExclusion() {
    this.acroField.setFlagTo(AcroButtonFlags.RadiosInUnison, true);
  }
  /**
   * Add a new radio button to this group on the specified page. For example:
   * ```js
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const radioGroup = form.createRadioGroup('best.gundam')
   *
   * const options = {
   *   x: 50,
   *   width: 25,
   *   height: 25,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   * }
   *
   * radioGroup.addOptionToPage('Exia', page, { ...options, y: 50 })
   * radioGroup.addOptionToPage('Dynames', page, { ...options, y: 110 })
   * ```
   * This will create a new radio button widget for this radio group field.
   * @param option The option that the radio button widget represents.
   * @param page The page to which the radio button widget should be added.
   * @param options The options to be used when adding the radio button widget.
   */
  addOptionToPage(option, page, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    assertIs(option, "option", ["string"]);
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    const widget = this.createWidget({
      x: (_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 0,
      y: (_b = options === null || options === void 0 ? void 0 : options.y) !== null && _b !== void 0 ? _b : 0,
      width: (_c = options === null || options === void 0 ? void 0 : options.width) !== null && _c !== void 0 ? _c : 50,
      height: (_d = options === null || options === void 0 ? void 0 : options.height) !== null && _d !== void 0 ? _d : 50,
      textColor: (_e = options === null || options === void 0 ? void 0 : options.textColor) !== null && _e !== void 0 ? _e : rgb(0, 0, 0),
      backgroundColor: (_f = options === null || options === void 0 ? void 0 : options.backgroundColor) !== null && _f !== void 0 ? _f : rgb(1, 1, 1),
      borderColor: (_g = options === null || options === void 0 ? void 0 : options.borderColor) !== null && _g !== void 0 ? _g : rgb(0, 0, 0),
      borderWidth: (_h = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _h !== void 0 ? _h : 1,
      rotate: (_j = options === null || options === void 0 ? void 0 : options.rotate) !== null && _j !== void 0 ? _j : degrees(0),
      hidden: options === null || options === void 0 ? void 0 : options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    const apStateValue = this.acroField.addWidgetWithOpt(widgetRef, PDFHexString_default.fromText(option), !this.isMutuallyExclusive());
    widget.setAppearanceState(PDFName_default.of("Off"));
    this.updateWidgetAppearance(widget, apStateValue);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if any of this group's radio button widgets do not have an
   * appearance stream for their current state. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * if (radioGroup.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this radio group needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const state = widget.getAppearanceState();
      const normal = (_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal;
      if (!(normal instanceof PDFDict_default))
        return true;
      if (state && !normal.has(state))
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this group's radio button widgets
   * using the default appearance provider for radio groups. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.defaultUpdateAppearances()
   * ```
   */
  defaultUpdateAppearances() {
    this.updateAppearances();
  }
  // rg.updateAppearances((field: any, widget: any) => {
  //   assert(field === rg);
  //   assert(widget instanceof PDFWidgetAnnotation);
  //   return { on: [...rectangle, ...circle], off: [...rectangle, ...circle] };
  // });
  /**
   * Update the appearance streams for each of this group's radio button widgets
   * using the given appearance provider. If no `provider` is passed, the
   * default appearance provider for radio groups will be used. For example:
   * ```js
   * const radioGroup = form.getRadioGroup('some.radioGroup.field')
   * radioGroup.updateAppearances((field, widget) => {
   *   ...
   *   return {
   *     normal: { on: drawRadioButton(...), off: drawRadioButton(...) },
   *     down: { on: drawRadioButton(...), off: drawRadioButton(...) },
   *   }
   * })
   * ```
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(provider) {
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const onValue = widget.getOnValue();
      if (!onValue)
        continue;
      this.updateWidgetAppearance(widget, onValue, provider);
    }
  }
  updateWidgetAppearance(widget, onValue, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultRadioGroupAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget));
    this.updateOnOffWidgetAppearance(widget, onValue, appearances);
  }
};
PDFRadioGroup.of = (acroRadioButton, ref, doc) => new PDFRadioGroup(acroRadioButton, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFSignature.js
var PDFSignature = class extends PDFField {
  constructor(acroSignature, ref, doc) {
    super(acroSignature, ref, doc);
    assertIs(acroSignature, "acroSignature", [
      [PDFAcroSignature_default, "PDFAcroSignature"]
    ]);
    this.acroField = acroSignature;
  }
  needsAppearancesUpdate() {
    return false;
  }
};
PDFSignature.of = (acroSignature, ref, doc) => new PDFSignature(acroSignature, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFTextField.js
var PDFTextField = class extends PDFField {
  constructor(acroText, ref, doc) {
    super(acroText, ref, doc);
    assertIs(acroText, "acroText", [[PDFAcroText_default, "PDFAcroText"]]);
    this.acroField = acroText;
  }
  /**
   * Get the text that this field contains. This text is visible to users who
   * view this field in a PDF reader.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const text = textField.getText()
   * console.log('Text field contents:', text)
   * ```
   *
   * Note that if this text field contains no underlying value, `undefined`
   * will be returned. Text fields may also contain an underlying value that
   * is simply an empty string (`''`). This detail is largely irrelevant for
   * most applications. In general, you'll want to treat both cases the same
   * way and simply consider the text field to be empty. In either case, the
   * text field will appear empty to users when viewed in a PDF reader.
   *
   * An error will be thrown if this is a rich text field. `pdf-lib` does not
   * support reading rich text fields. Nor do most PDF readers and writers.
   * Rich text fields are based on XFA (XML Forms Architecture). Relatively few
   * PDFs use rich text fields or XFA. Unlike PDF itself, XFA is not an ISO
   * standard. XFA has been deprecated in PDF 2.0:
   * * https://en.wikipedia.org/wiki/XFA
   * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
   *
   * @returns The text contained in this text field.
   */
  getText() {
    const value = this.acroField.getValue();
    if (!value && this.isRichFormatted()) {
      throw new RichTextFieldReadError(this.getName());
    }
    return value === null || value === void 0 ? void 0 : value.decodeText();
  }
  /**
   * Set the text for this field. This operation is analogous to a human user
   * clicking on the text field in a PDF reader and typing in text via their
   * keyboard. This method will update the underlying state of the text field
   * to indicate what text has been set. PDF libraries and readers will be able
   * to extract these values from the saved document and determine what text
   * was set.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('best.superhero.text.field')
   * textField.setText('One Punch Man')
   * ```
   *
   * This method will mark this text field as dirty, causing its appearance
   * streams to be updated when either [[PDFDocument.save]] or
   * [[PDFForm.updateFieldAppearances]] is called. The updated streams will
   * display the text this field contains inside the widgets of this text
   * field.
   *
   * **IMPORTANT:** The default font used to update appearance streams is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if this field contains text outside
   * the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing it to
   * [[PDFForm.updateFieldAppearances]] or [[PDFTextField.updateAppearances]]
   * allows you to generate appearance streams with characters outside the
   * latin alphabet (assuming the custom font supports them).
   *
   * If this is a rich text field, it will be converted to a standard text
   * field in order to set the text. `pdf-lib` does not support writing rich
   * text strings. Nor do most PDF readers and writers. See
   * [[PDFTextField.getText]] for more information about rich text fields and
   * their deprecation in PDF 2.0.
   *
   * @param text The text this field should contain.
   */
  setText(text) {
    assertOrUndefined(text, "text", ["string"]);
    const maxLength = this.getMaxLength();
    if (maxLength !== void 0 && text && text.length > maxLength) {
      throw new ExceededMaxLengthError(text.length, maxLength, this.getName());
    }
    this.markAsDirty();
    this.disableRichFormatting();
    if (text) {
      this.acroField.setValue(PDFHexString_default.fromText(text));
    } else {
      this.acroField.removeValue();
    }
  }
  /**
   * Get the alignment for this text field. This value represents the
   * justification of the text when it is displayed to the user in PDF readers.
   * There are three possible alignments: left, center, and right. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const alignment = textField.getAlignment()
   * if (alignment === TextAlignment.Left) console.log('Text is left justified')
   * if (alignment === TextAlignment.Center) console.log('Text is centered')
   * if (alignment === TextAlignment.Right) console.log('Text is right justified')
   * ```
   * @returns The alignment of this text field.
   */
  getAlignment() {
    const quadding = this.acroField.getQuadding();
    return quadding === 0 ? TextAlignment.Left : quadding === 1 ? TextAlignment.Center : quadding === 2 ? TextAlignment.Right : TextAlignment.Left;
  }
  /**
   * Set the alignment for this text field. This will determine the
   * justification of the text when it is displayed to the user in PDF readers.
   * There are three possible alignments: left, center, and right. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   *
   * // Text will be left justified when displayed
   * textField.setAlignment(TextAlignment.Left)
   *
   * // Text will be centered when displayed
   * textField.setAlignment(TextAlignment.Center)
   *
   * // Text will be right justified when displayed
   * textField.setAlignment(TextAlignment.Right)
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   * @param alignment The alignment for this text field.
   */
  setAlignment(alignment) {
    assertIsOneOf(alignment, "alignment", TextAlignment);
    this.markAsDirty();
    this.acroField.setQuadding(alignment);
  }
  /**
   * Get the maximum length of this field. This value represents the maximum
   * number of characters that can be typed into this field by the user. If
   * this field does not have a maximum length, `undefined` is returned.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * const maxLength = textField.getMaxLength()
   * if (maxLength === undefined) console.log('No max length')
   * else console.log(`Max length is ${maxLength}`)
   * ```
   * @returns The maximum number of characters allowed in this field, or
   *          `undefined` if no limit exists.
   */
  getMaxLength() {
    return this.acroField.getMaxLength();
  }
  /**
   * Set the maximum length of this field. This limits the number of characters
   * that can be typed into this field by the user. This also limits the length
   * of the string that can be passed to [[PDFTextField.setText]]. This limit
   * can be removed by passing `undefined` as `maxLength`. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   *
   * // Allow between 0 and 5 characters to be entered
   * textField.setMaxLength(5)
   *
   * // Allow any number of characters to be entered
   * textField.setMaxLength(undefined)
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   * @param maxLength The maximum number of characters allowed in this field, or
   *                  `undefined` to remove the limit.
   */
  setMaxLength(maxLength) {
    assertRangeOrUndefined(maxLength, "maxLength", 0, Number.MAX_SAFE_INTEGER);
    this.markAsDirty();
    if (maxLength === void 0) {
      this.acroField.removeMaxLength();
    } else {
      const text = this.getText();
      if (text && text.length > maxLength) {
        throw new InvalidMaxLengthError(text.length, maxLength, this.getName());
      }
      this.acroField.setMaxLength(maxLength);
    }
  }
  /**
   * Remove the maximum length for this text field. This allows any number of
   * characters to be typed into this field by the user. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.removeMaxLength()
   * ```
   * Calling this method is equivalent to passing `undefined` to
   * [[PDFTextField.setMaxLength]].
   */
  removeMaxLength() {
    this.markAsDirty();
    this.acroField.removeMaxLength();
  }
  /**
   * Display an image inside the bounds of this text field's widgets. For example:
   * ```js
   * const pngImage = await pdfDoc.embedPng(...)
   * const textField = form.getTextField('some.text.field')
   * textField.setImage(pngImage)
   * ```
   * This will update the appearances streams for each of this text field's widgets.
   * @param image The image that should be displayed.
   */
  setImage(image) {
    const fieldAlignment = this.getAlignment();
    const alignment = fieldAlignment === TextAlignment.Center ? ImageAlignment.Center : fieldAlignment === TextAlignment.Right ? ImageAlignment.Right : ImageAlignment.Left;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const streamRef = this.createImageAppearanceStream(widget, image, alignment);
      this.updateWidgetAppearances(widget, { normal: streamRef });
    }
    this.markAsClean();
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this text field. Font sizes
   * may be integer or floating point numbers. Supplying a negative font size
   * will cause this method to throw an error.
   *
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.setFontSize(4)
   * textField.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Returns `true` if each line of text is shown on a new line when this
   * field is displayed in a PDF reader. The alternative is that all lines of
   * text are merged onto a single line when displayed. See
   * [[PDFTextField.enableMultiline]] and [[PDFTextField.disableMultiline]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isMultiline()) console.log('Multiline is enabled')
   * ```
   * @returns Whether or not this is a multiline text field.
   */
  isMultiline() {
    return this.acroField.hasFlag(AcroTextFlags.Multiline);
  }
  /**
   * Display each line of text on a new line when this field is displayed in a
   * PDF reader. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableMultiline()
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  enableMultiline() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Multiline, true);
  }
  /**
   * Display each line of text on the same line when this field is displayed
   * in a PDF reader. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableMultiline()
   * ```
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  disableMultiline() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Multiline, false);
  }
  /**
   * Returns `true` if this is a password text field. This means that the field
   * is intended for storing a secure password. See
   * [[PDFTextField.enablePassword]] and [[PDFTextField.disablePassword]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isPassword()) console.log('Password is enabled')
   * ```
   * @returns Whether or not this is a password text field.
   */
  isPassword() {
    return this.acroField.hasFlag(AcroTextFlags.Password);
  }
  /**
   * Indicate that this text field is intended for storing a secure password.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enablePassword()
   * ```
   * Values entered into password text fields should not be displayed on the
   * screen by PDF readers. Most PDF readers will display the value as
   * asterisks or bullets. PDF readers should never store values entered by the
   * user into password text fields. Similarly, applications should not
   * write data to a password text field.
   *
   * **Please note that this method does not cause entered values to be
   * encrypted or secured in any way! It simply sets a flag that PDF software
   * and readers can access to determine the _purpose_ of this field.**
   */
  enablePassword() {
    this.acroField.setFlagTo(AcroTextFlags.Password, true);
  }
  /**
   * Indicate that this text field is **not** intended for storing a secure
   * password. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disablePassword()
   * ```
   */
  disablePassword() {
    this.acroField.setFlagTo(AcroTextFlags.Password, false);
  }
  /**
   * Returns `true` if the contents of this text field represent a file path.
   * See [[PDFTextField.enableFileSelection]] and
   * [[PDFTextField.disableFileSelection]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isFileSelector()) console.log('Is a file selector')
   * ```
   * @returns Whether or not this field should contain file paths.
   */
  isFileSelector() {
    return this.acroField.hasFlag(AcroTextFlags.FileSelect);
  }
  /**
   * Indicate that this text field is intended to store a file path. The
   * contents of the file stored at that path should be submitted as the value
   * of the field. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableFileSelection()
   * ```
   */
  enableFileSelection() {
    this.acroField.setFlagTo(AcroTextFlags.FileSelect, true);
  }
  /**
   * Indicate that this text field is **not** intended to store a file path.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableFileSelection()
   * ```
   */
  disableFileSelection() {
    this.acroField.setFlagTo(AcroTextFlags.FileSelect, false);
  }
  /**
   * Returns `true` if the text entered in this field should be spell checked
   * by PDF readers. See [[PDFTextField.enableSpellChecking]] and
   * [[PDFTextField.disableSpellChecking]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isSpellChecked()) console.log('Spell checking is enabled')
   * ```
   * @returns Whether or not this field should be spell checked.
   */
  isSpellChecked() {
    return !this.acroField.hasFlag(AcroTextFlags.DoNotSpellCheck);
  }
  /**
   * Allow PDF readers to spell check the text entered in this field.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableSpellChecking()
   * ```
   */
  enableSpellChecking() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, false);
  }
  /**
   * Do not allow PDF readers to spell check the text entered in this field.
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableSpellChecking()
   * ```
   */
  disableSpellChecking() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotSpellCheck, true);
  }
  /**
   * Returns `true` if PDF readers should allow the user to scroll the text
   * field when its contents do not fit within the field's view bounds. See
   * [[PDFTextField.enableScrolling]] and [[PDFTextField.disableScrolling]].
   * For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isScrollable()) console.log('Scrolling is enabled')
   * ```
   * @returns Whether or not the field is scrollable in PDF readers.
   */
  isScrollable() {
    return !this.acroField.hasFlag(AcroTextFlags.DoNotScroll);
  }
  /**
   * Allow PDF readers to present a scroll bar to the user when the contents
   * of this text field do not fit within its view bounds. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableScrolling()
   * ```
   * A horizontal scroll bar should be shown for singleline fields. A vertical
   * scroll bar should be shown for multiline fields.
   */
  enableScrolling() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, false);
  }
  /**
   * Do not allow PDF readers to present a scroll bar to the user when the
   * contents of this text field do not fit within its view bounds. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableScrolling()
   * ```
   */
  disableScrolling() {
    this.acroField.setFlagTo(AcroTextFlags.DoNotScroll, true);
  }
  /**
   * Returns `true` if this is a combed text field. This means that the field
   * is split into `n` equal size cells with one character in each (where `n`
   * is equal to the max length of the text field). The result is that all
   * characters in this field are displayed an equal distance apart from one
   * another. See [[PDFTextField.enableCombing]] and
   * [[PDFTextField.disableCombing]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isCombed()) console.log('Combing is enabled')
   * ```
   * Note that in order for a text field to be combed, the following must be
   * true (in addition to enabling combing):
   * * It must not be a multiline field (see [[PDFTextField.isMultiline]])
   * * It must not be a password field (see [[PDFTextField.isPassword]])
   * * It must not be a file selector field (see [[PDFTextField.isFileSelector]])
   * * It must have a max length defined (see [[PDFTextField.setMaxLength]])
   * @returns Whether or not this field is combed.
   */
  isCombed() {
    return this.acroField.hasFlag(AcroTextFlags.Comb) && !this.isMultiline() && !this.isPassword() && !this.isFileSelector() && this.getMaxLength() !== void 0;
  }
  /**
   * Split this field into `n` equal size cells with one character in each
   * (where `n` is equal to the max length of the text field). This will cause
   * all characters in the field to be displayed an equal distance apart from
   * one another. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableCombing()
   * ```
   *
   * In addition to calling this method, text fields must have a max length
   * defined in order to be combed (see [[PDFTextField.setMaxLength]]).
   *
   * This method will also call the following three methods internally:
   * * [[PDFTextField.disableMultiline]]
   * * [[PDFTextField.disablePassword]]
   * * [[PDFTextField.disableFileSelection]]
   *
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  enableCombing() {
    if (this.getMaxLength() === void 0) {
      const msg = `PDFTextFields must have a max length in order to be combed`;
      console.warn(msg);
    }
    this.markAsDirty();
    this.disableMultiline();
    this.disablePassword();
    this.disableFileSelection();
    this.acroField.setFlagTo(AcroTextFlags.Comb, true);
  }
  /**
   * Turn off combing for this text field. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableCombing()
   * ```
   * See [[PDFTextField.isCombed]] and [[PDFTextField.enableCombing]] for more
   * information about what combing is.
   *
   * This method will mark this text field as dirty. See
   * [[PDFTextField.setText]] for more details about what this means.
   */
  disableCombing() {
    this.markAsDirty();
    this.acroField.setFlagTo(AcroTextFlags.Comb, false);
  }
  /**
   * Returns `true` if this text field contains rich text. See
   * [[PDFTextField.enableRichFormatting]] and
   * [[PDFTextField.disableRichFormatting]]. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.isRichFormatted()) console.log('Rich formatting enabled')
   * ```
   * @returns Whether or not this field contains rich text.
   */
  isRichFormatted() {
    return this.acroField.hasFlag(AcroTextFlags.RichText);
  }
  /**
   * Indicate that this field contains XFA data - or rich text. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.enableRichFormatting()
   * ```
   * Note that `pdf-lib` does not support reading or writing rich text fields.
   * Nor do most PDF readers and writers. Rich text fields are based on XFA
   * (XML Forms Architecture). Relatively few PDFs use rich text fields or XFA.
   * Unlike PDF itself, XFA is not an ISO standard. XFA has been deprecated in
   * PDF 2.0:
   * * https://en.wikipedia.org/wiki/XFA
   * * http://blog.pdfshareforms.com/pdf-2-0-release-bid-farewell-xfa-forms/
   */
  enableRichFormatting() {
    this.acroField.setFlagTo(AcroTextFlags.RichText, true);
  }
  /**
   * Indicate that this is a standard text field that does not XFA data (rich
   * text). For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * textField.disableRichFormatting()
   * ```
   */
  disableRichFormatting() {
    this.acroField.setFlagTo(AcroTextFlags.RichText, false);
  }
  /**
   * Show this text field on the specified page. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const textField = form.createTextField('best.gundam')
   * textField.setText('Exia')
   *
   * textField.addToPage(page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this text field.
   * @param page The page to which this text field widget should be added.
   * @param options The options to be used when adding this text field widget.
   */
  addToPage(page, options) {
    var _a, _b, _c, _d, _e, _f, _g;
    assertIs(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    if (!options)
      options = {};
    if (!("textColor" in options))
      options.textColor = rgb(0, 0, 0);
    if (!("backgroundColor" in options))
      options.backgroundColor = rgb(1, 1, 1);
    if (!("borderColor" in options))
      options.borderColor = rgb(0, 0, 0);
    if (!("borderWidth" in options))
      options.borderWidth = 1;
    const widget = this.createWidget({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : 0,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : 0,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : 200,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : 50,
      textColor: options.textColor,
      backgroundColor: options.backgroundColor,
      borderColor: options.borderColor,
      borderWidth: (_e = options.borderWidth) !== null && _e !== void 0 ? _e : 0,
      rotate: (_f = options.rotate) !== null && _f !== void 0 ? _f : degrees(0),
      hidden: options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = (_g = options.font) !== null && _g !== void 0 ? _g : this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this text field has been marked as dirty, or if any of
   * this text field's widgets do not have an appearance stream. For example:
   * ```js
   * const textField = form.getTextField('some.text.field')
   * if (textField.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this text field needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    if (this.isDirty())
      return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof PDFStream_default;
      if (!hasAppearances)
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this text field's widgets using
   * the default appearance provider for text fields. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const textField = form.getTextField('some.text.field')
   * textField.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this text field's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for text fields will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const textField = form.getTextField('some.text.field')
   * textField.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return drawTextField(...)
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
    this.markAsClean();
  }
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultTextFieldAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
PDFTextField.of = (acroText, ref, doc) => new PDFTextField(acroText, ref, doc);

// node_modules/pdf-lib-plus-encrypt/es/api/StandardFonts.js
var StandardFonts;
(function(StandardFonts2) {
  StandardFonts2["Courier"] = "Courier";
  StandardFonts2["CourierBold"] = "Courier-Bold";
  StandardFonts2["CourierOblique"] = "Courier-Oblique";
  StandardFonts2["CourierBoldOblique"] = "Courier-BoldOblique";
  StandardFonts2["Helvetica"] = "Helvetica";
  StandardFonts2["HelveticaBold"] = "Helvetica-Bold";
  StandardFonts2["HelveticaOblique"] = "Helvetica-Oblique";
  StandardFonts2["HelveticaBoldOblique"] = "Helvetica-BoldOblique";
  StandardFonts2["TimesRoman"] = "Times-Roman";
  StandardFonts2["TimesRomanBold"] = "Times-Bold";
  StandardFonts2["TimesRomanItalic"] = "Times-Italic";
  StandardFonts2["TimesRomanBoldItalic"] = "Times-BoldItalic";
  StandardFonts2["Symbol"] = "Symbol";
  StandardFonts2["ZapfDingbats"] = "ZapfDingbats";
})(StandardFonts || (StandardFonts = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFForm.js
var PDFForm = class {
  constructor(acroForm, doc) {
    this.embedDefaultFont = () => this.doc.embedStandardFont(StandardFonts.Helvetica);
    assertIs(acroForm, "acroForm", [[PDFAcroForm_default, "PDFAcroForm"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.acroForm = acroForm;
    this.doc = doc;
    this.dirtyFields = /* @__PURE__ */ new Set();
    this.defaultFontCache = Cache_default.populatedBy(this.embedDefaultFont);
  }
  /**
   * Returns `true` if this [[PDFForm]] has XFA data. Most PDFs with form
   * fields do not use XFA as it is not widely supported by PDF readers.
   *
   * > `pdf-lib` does not support creation, modification, or reading of XFA
   * > fields.
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * if (form.hasXFA()) console.log('PDF has XFA data')
   * ```
   * @returns Whether or not this form has XFA data.
   */
  hasXFA() {
    return this.acroForm.dict.has(PDFName_default.of("XFA"));
  }
  /**
   * Disconnect the XFA data from this [[PDFForm]] (if any exists). This will
   * force readers to fallback to standard fields if the [[PDFDocument]]
   * contains any. For example:
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * form.deleteXFA()
   * ```
   */
  deleteXFA() {
    this.acroForm.dict.delete(PDFName_default.of("XFA"));
  }
  /**
   * Get all fields contained in this [[PDFForm]]. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const type = field.constructor.name
   *   const name = field.getName()
   *   console.log(`${type}: ${name}`)
   * })
   * ```
   * @returns An array of all fields in this form.
   */
  getFields() {
    const allFields = this.acroForm.getAllFields();
    const fields = [];
    for (let idx = 0, len = allFields.length; idx < len; idx++) {
      const [acroField, ref] = allFields[idx];
      const field = convertToPDFField(acroField, ref, this.doc);
      if (field)
        fields.push(field);
    }
    return fields;
  }
  /**
   * Get the field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getFieldMaybe('Page1.Foo.Bar[0]')
   * if (field) console.log('Field exists!')
   * ```
   * @param name A fully qualified field name.
   * @returns The field with the specified name, if one exists.
   */
  getFieldMaybe(name) {
    assertIs(name, "name", ["string"]);
    const fields = this.getFields();
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const field = fields[idx];
      if (field.getName() === name)
        return field;
    }
    return void 0;
  }
  /**
   * Get the field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('Page1.Foo.Bar[0]')
   * ```
   * If no field exists with the provided name, an error will be thrown.
   * @param name A fully qualified field name.
   * @returns The field with the specified name.
   */
  getField(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getFieldMaybe(name);
    if (field)
      return field;
    throw new NoSuchFieldError(name);
  }
  /**
   * Get the button field in this [[PDFForm]] with the given name. For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const button = form.getButton('Page1.Foo.Button[0]')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a button.
   * @param name A fully qualified button name.
   * @returns The button with the specified name.
   */
  getButton(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFButton)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFButton, field);
  }
  /**
   * Get the check box field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const checkBox = form.getCheckBox('Page1.Foo.CheckBox[0]')
   * checkBox.check()
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a check box.
   * @param name A fully qualified check box name.
   * @returns The check box with the specified name.
   */
  getCheckBox(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFCheckBox)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFCheckBox, field);
  }
  /**
   * Get the dropdown field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const dropdown = form.getDropdown('Page1.Foo.Dropdown[0]')
   * const options = dropdown.getOptions()
   * dropdown.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a dropdown.
   * @param name A fully qualified dropdown name.
   * @returns The dropdown with the specified name.
   */
  getDropdown(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFDropdown)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFDropdown, field);
  }
  /**
   * Get the option list field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const optionList = form.getOptionList('Page1.Foo.OptionList[0]')
   * const options = optionList.getOptions()
   * optionList.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not an option list.
   * @param name A fully qualified option list name.
   * @returns The option list with the specified name.
   */
  getOptionList(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFOptionList)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFOptionList, field);
  }
  /**
   * Get the radio group field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const radioGroup = form.getRadioGroup('Page1.Foo.RadioGroup[0]')
   * const options = radioGroup.getOptions()
   * radioGroup.select(options[0])
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a radio group.
   * @param name A fully qualified radio group name.
   * @returns The radio group with the specified name.
   */
  getRadioGroup(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFRadioGroup)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFRadioGroup, field);
  }
  /**
   * Get the signature field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const signature = form.getSignature('Page1.Foo.Signature[0]')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a signature.
   * @param name A fully qualified signature name.
   * @returns The signature with the specified name.
   */
  getSignature(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFSignature)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFSignature, field);
  }
  /**
   * Get the text field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const textField = form.getTextField('Page1.Foo.TextField[0]')
   * textField.setText('Are you designed to act or to be acted upon?')
   * ```
   * An error will be thrown if no field exists with the provided name, or if
   * the field exists but is not a text field.
   * @param name A fully qualified text field name.
   * @returns The text field with the specified name.
   */
  getTextField(name) {
    assertIs(name, "name", ["string"]);
    const field = this.getField(name);
    if (field instanceof PDFTextField)
      return field;
    throw new UnexpectedFieldTypeError(name, PDFTextField, field);
  }
  /**
   * Create a new button field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const button = form.createButton('cool.new.button')
   *
   * button.addToPage('Do Stuff', font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new button.
   * @returns The new button field.
   */
  createButton(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const button = PDFAcroPushButton_default.create(this.doc.context);
    button.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [button, button.ref], nameParts.terminal);
    return PDFButton.of(button, button.ref, this.doc);
  }
  /**
   * Create a new check box field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const checkBox = form.createCheckBox('cool.new.checkBox')
   *
   * checkBox.addToPage(page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new check box.
   * @returns The new check box field.
   */
  createCheckBox(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const checkBox = PDFAcroCheckBox_default.create(this.doc.context);
    checkBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [checkBox, checkBox.ref], nameParts.terminal);
    return PDFCheckBox.of(checkBox, checkBox.ref, this.doc);
  }
  /**
   * Create a new dropdown field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const dropdown = form.createDropdown('cool.new.dropdown')
   *
   * dropdown.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new dropdown.
   * @returns The new dropdown field.
   */
  createDropdown(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const comboBox = PDFAcroComboBox_default.create(this.doc.context);
    comboBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [comboBox, comboBox.ref], nameParts.terminal);
    return PDFDropdown.of(comboBox, comboBox.ref, this.doc);
  }
  /**
   * Create a new option list field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const optionList = form.createOptionList('cool.new.optionList')
   *
   * optionList.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new option list.
   * @returns The new option list field.
   */
  createOptionList(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const listBox = PDFAcroListBox_default.create(this.doc.context);
    listBox.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [listBox, listBox.ref], nameParts.terminal);
    return PDFOptionList.of(listBox, listBox.ref, this.doc);
  }
  /**
   * Create a new radio group field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const radioGroup = form.createRadioGroup('cool.new.radioGroup')
   *
   * radioGroup.addOptionToPage('is-dog', page, { y: 0 })
   * radioGroup.addOptionToPage('is-cat', page, { y: 75 })
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new radio group.
   * @returns The new radio group field.
   */
  createRadioGroup(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const radioButton = PDFAcroRadioButton_default.create(this.doc.context);
    radioButton.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [radioButton, radioButton.ref], nameParts.terminal);
    return PDFRadioGroup.of(radioButton, radioButton.ref, this.doc);
  }
  /**
   * Create a new text field in this [[PDFForm]] with the given name.
   * For example:
   * ```js
   * const font = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const textField = form.createTextField('cool.new.textField')
   *
   * textField.addToPage(font, page)
   * ```
   * An error will be thrown if a field already exists with the provided name.
   * @param name The fully qualified name for the new radio group.
   * @returns The new radio group field.
   */
  createTextField(name) {
    assertIs(name, "name", ["string"]);
    const nameParts = splitFieldName(name);
    const parent = this.findOrCreateNonTerminals(nameParts.nonTerminal);
    const text = PDFAcroText_default.create(this.doc.context);
    text.setPartialName(nameParts.terminal);
    addFieldToParent(parent, [text, text.ref], nameParts.terminal);
    return PDFTextField.of(text, text.ref, this.doc);
  }
  /**
   * Flatten all fields in this [[PDFForm]].
   *
   * Flattening a form field will take the current appearance for each of that
   * field's widgets and make them part of their page's content stream. All form
   * fields and annotations associated are then removed. Note that once a form
   * has been flattened its fields can no longer be accessed or edited.
   *
   * This operation is often used after filling form fields to ensure a
   * consistent appearance across different PDF readers and/or printers.
   * Another common use case is to copy a template document with form fields
   * into another document. In this scenario you would load the template
   * document, fill its fields, flatten it, and then copy its pages into the
   * recipient document - the filled fields will be copied over.
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm();
   * form.flatten();
   * ```
   */
  flatten(options = { updateFieldAppearances: true }) {
    if (options.updateFieldAppearances) {
      this.updateFieldAppearances();
    }
    const fields = this.getFields();
    for (let i = 0, lenFields = fields.length; i < lenFields; i++) {
      const field = fields[i];
      const widgets = field.acroField.getWidgets();
      for (let j = 0, lenWidgets = widgets.length; j < lenWidgets; j++) {
        const widget = widgets[j];
        const page = this.findWidgetPage(widget);
        const widgetRef = this.findWidgetAppearanceRef(field, widget);
        const xObjectKey = addRandomSuffix("FlatWidget", 10);
        page.node.setXObject(PDFName_default.of(xObjectKey), widgetRef);
        const rectangle2 = widget.getRectangle();
        const operators = [
          pushGraphicsState(),
          translate(rectangle2.x, rectangle2.y),
          ...rotateInPlace(Object.assign(Object.assign({}, rectangle2), { rotation: 0 })),
          drawObject(xObjectKey),
          popGraphicsState()
        ].filter(Boolean);
        page.pushOperators(...operators);
      }
      this.removeField(field);
    }
  }
  /**
   * Remove a field from this [[PDFForm]].
   *
   * For example:
   * ```js
   * const form = pdfDoc.getForm();
   * const ageField = form.getFields().find(x => x.getName() === 'Age');
   * form.removeField(ageField);
   * ```
   */
  removeField(field) {
    const widgets = field.acroField.getWidgets();
    const pages = /* @__PURE__ */ new Set();
    for (let i = 0, len = widgets.length; i < len; i++) {
      const widget = widgets[i];
      const widgetRef = this.findWidgetAppearanceRef(field, widget);
      const page = this.findWidgetPage(widget);
      pages.add(page);
      page.node.removeAnnot(widgetRef);
    }
    pages.forEach((page) => page.node.removeAnnot(field.ref));
    this.acroForm.removeField(field.acroField);
    this.doc.context.delete(field.ref);
  }
  /**
   * Update the appearance streams for all widgets of all fields in this
   * [[PDFForm]]. Appearance streams will only be created for a widget if it
   * does not have any existing appearance streams, or the field's value has
   * changed (e.g. by calling [[PDFTextField.setText]] or
   * [[PDFDropdown.select]]).
   *
   * For example:
   * ```js
   * const courier = await pdfDoc.embedFont(StandardFonts.Courier)
   * const form = pdfDoc.getForm()
   * form.updateFieldAppearances(courier)
   * ```
   *
   * **IMPORTANT:** The default value for the `font` parameter is
   * [[StandardFonts.Helvetica]]. Note that this is a WinAnsi font. This means
   * that encoding errors will be thrown if any fields contain text with
   * characters outside the WinAnsi character set (the latin alphabet).
   *
   * Embedding a custom font and passing that as the `font`
   * parameter allows you to generate appearance streams with non WinAnsi
   * characters (assuming your custom font supports them).
   *
   * > **NOTE:** The [[PDFDocument.save]] method will call this method to
   * > update appearances automatically if a form was accessed via the
   * > [[PDFDocument.getForm]] method prior to saving.
   *
   * @param font Optionally, the font to use when creating new appearances.
   */
  updateFieldAppearances(font) {
    assertOrUndefined(font, "font", [[PDFFont, "PDFFont"]]);
    font = font !== null && font !== void 0 ? font : this.getDefaultFont();
    const fields = this.getFields();
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const field = fields[idx];
      if (field.needsAppearancesUpdate()) {
        field.defaultUpdateAppearances(font);
      }
    }
  }
  /**
   * Mark a field as dirty. This will cause its appearance streams to be
   * updated by [[PDFForm.updateFieldAppearances]].
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * form.markFieldAsDirty(field.ref)
   * ```
   * @param fieldRef The reference to the field that should be marked.
   */
  markFieldAsDirty(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    this.dirtyFields.add(fieldRef);
  }
  /**
   * Mark a field as dirty. This will cause its appearance streams to not be
   * updated by [[PDFForm.updateFieldAppearances]].
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * form.markFieldAsClean(field.ref)
   * ```
   * @param fieldRef The reference to the field that should be marked.
   */
  markFieldAsClean(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    this.dirtyFields.delete(fieldRef);
  }
  /**
   * Returns `true` is the specified field has been marked as dirty.
   * ```js
   * const form = pdfDoc.getForm()
   * const field = form.getField('foo.bar')
   * if (form.fieldIsDirty(field.ref)) console.log('Field is dirty')
   * ```
   * @param fieldRef The reference to the field that should be checked.
   * @returns Whether or not the specified field is dirty.
   */
  fieldIsDirty(fieldRef) {
    assertOrUndefined(fieldRef, "fieldRef", [[PDFRef_default, "PDFRef"]]);
    return this.dirtyFields.has(fieldRef);
  }
  getDefaultFont() {
    return this.defaultFontCache.access();
  }
  findWidgetPage(widget) {
    const pageRef = widget.P();
    let page = this.doc.getPages().find((x) => x.ref === pageRef);
    if (page === void 0) {
      const widgetRef = this.doc.context.getObjectRef(widget.dict);
      if (widgetRef === void 0) {
        throw new Error("Could not find PDFRef for PDFObject");
      }
      page = this.doc.findPageForAnnotationRef(widgetRef);
      if (page === void 0) {
        throw new Error(`Could not find page for PDFRef ${widgetRef}`);
      }
    }
    return page;
  }
  findWidgetAppearanceRef(field, widget) {
    var _a;
    let refOrDict = widget.getNormalAppearance();
    if (refOrDict instanceof PDFDict_default && (field instanceof PDFCheckBox || field instanceof PDFRadioGroup)) {
      const value = field.acroField.getValue();
      const ref = (_a = refOrDict.get(value)) !== null && _a !== void 0 ? _a : refOrDict.get(PDFName_default.of("Off"));
      if (ref instanceof PDFRef_default) {
        refOrDict = ref;
      }
    }
    if (!(refOrDict instanceof PDFRef_default)) {
      const name = field.getName();
      throw new Error(`Failed to extract appearance ref for: ${name}`);
    }
    return refOrDict;
  }
  findOrCreateNonTerminals(partialNames) {
    let nonTerminal = [
      this.acroForm
    ];
    for (let idx = 0, len = partialNames.length; idx < len; idx++) {
      const namePart = partialNames[idx];
      if (!namePart)
        throw new InvalidFieldNamePartError(namePart);
      const [parent, parentRef] = nonTerminal;
      const res = this.findNonTerminal(namePart, parent);
      if (res) {
        nonTerminal = res;
      } else {
        const node = PDFAcroNonTerminal_default.create(this.doc.context);
        node.setPartialName(namePart);
        node.setParent(parentRef);
        const nodeRef = this.doc.context.register(node.dict);
        parent.addField(nodeRef);
        nonTerminal = [node, nodeRef];
      }
    }
    return nonTerminal;
  }
  findNonTerminal(partialName, parent) {
    const fields = parent instanceof PDFAcroForm_default ? this.acroForm.getFields() : createPDFAcroFields(parent.Kids());
    for (let idx = 0, len = fields.length; idx < len; idx++) {
      const [field, ref] = fields[idx];
      if (field.getPartialName() === partialName) {
        if (field instanceof PDFAcroNonTerminal_default)
          return [field, ref];
        throw new FieldAlreadyExistsError(partialName);
      }
    }
    return void 0;
  }
};
PDFForm.of = (acroForm, doc) => new PDFForm(acroForm, doc);
var convertToPDFField = (field, ref, doc) => {
  if (field instanceof PDFAcroPushButton_default)
    return PDFButton.of(field, ref, doc);
  if (field instanceof PDFAcroCheckBox_default)
    return PDFCheckBox.of(field, ref, doc);
  if (field instanceof PDFAcroComboBox_default)
    return PDFDropdown.of(field, ref, doc);
  if (field instanceof PDFAcroListBox_default)
    return PDFOptionList.of(field, ref, doc);
  if (field instanceof PDFAcroText_default)
    return PDFTextField.of(field, ref, doc);
  if (field instanceof PDFAcroRadioButton_default) {
    return PDFRadioGroup.of(field, ref, doc);
  }
  if (field instanceof PDFAcroSignature_default) {
    return PDFSignature.of(field, ref, doc);
  }
  return void 0;
};
var splitFieldName = (fullyQualifiedName) => {
  if (fullyQualifiedName.length === 0) {
    throw new Error("PDF field names must not be empty strings");
  }
  const parts = fullyQualifiedName.split(".");
  for (let idx = 0, len = parts.length; idx < len; idx++) {
    if (parts[idx] === "") {
      throw new Error(`Periods in PDF field names must be separated by at least one character: "${fullyQualifiedName}"`);
    }
  }
  if (parts.length === 1)
    return { nonTerminal: [], terminal: parts[0] };
  return {
    nonTerminal: parts.slice(0, parts.length - 1),
    terminal: parts[parts.length - 1]
  };
};
var addFieldToParent = ([parent, parentRef], [field, fieldRef], partialName) => {
  const entries = parent.normalizedEntries();
  const fields = createPDFAcroFields("Kids" in entries ? entries.Kids : entries.Fields);
  for (let idx = 0, len = fields.length; idx < len; idx++) {
    if (fields[idx][0].getPartialName() === partialName) {
      throw new FieldAlreadyExistsError(partialName);
    }
  }
  parent.addField(fieldRef);
  field.setParent(parentRef);
};

// node_modules/pdf-lib-plus-encrypt/es/api/sizes.js
var PageSizes = {
  "4A0": [4767.87, 6740.79],
  "2A0": [3370.39, 4767.87],
  A0: [2383.94, 3370.39],
  A1: [1683.78, 2383.94],
  A2: [1190.55, 1683.78],
  A3: [841.89, 1190.55],
  A4: [595.28, 841.89],
  A5: [419.53, 595.28],
  A6: [297.64, 419.53],
  A7: [209.76, 297.64],
  A8: [147.4, 209.76],
  A9: [104.88, 147.4],
  A10: [73.7, 104.88],
  B0: [2834.65, 4008.19],
  B1: [2004.09, 2834.65],
  B2: [1417.32, 2004.09],
  B3: [1000.63, 1417.32],
  B4: [708.66, 1000.63],
  B5: [498.9, 708.66],
  B6: [354.33, 498.9],
  B7: [249.45, 354.33],
  B8: [175.75, 249.45],
  B9: [124.72, 175.75],
  B10: [87.87, 124.72],
  C0: [2599.37, 3676.54],
  C1: [1836.85, 2599.37],
  C2: [1298.27, 1836.85],
  C3: [918.43, 1298.27],
  C4: [649.13, 918.43],
  C5: [459.21, 649.13],
  C6: [323.15, 459.21],
  C7: [229.61, 323.15],
  C8: [161.57, 229.61],
  C9: [113.39, 161.57],
  C10: [79.37, 113.39],
  RA0: [2437.8, 3458.27],
  RA1: [1729.13, 2437.8],
  RA2: [1218.9, 1729.13],
  RA3: [864.57, 1218.9],
  RA4: [609.45, 864.57],
  SRA0: [2551.18, 3628.35],
  SRA1: [1814.17, 2551.18],
  SRA2: [1275.59, 1814.17],
  SRA3: [907.09, 1275.59],
  SRA4: [637.8, 907.09],
  Executive: [521.86, 756],
  Folio: [612, 936],
  Legal: [612, 1008],
  Letter: [612, 792],
  Tabloid: [792, 1224]
};

// node_modules/pdf-lib-plus-encrypt/es/api/PDFDocumentOptions.js
var ParseSpeeds;
(function(ParseSpeeds2) {
  ParseSpeeds2[ParseSpeeds2["Fastest"] = Infinity] = "Fastest";
  ParseSpeeds2[ParseSpeeds2["Fast"] = 1500] = "Fast";
  ParseSpeeds2[ParseSpeeds2["Medium"] = 500] = "Medium";
  ParseSpeeds2[ParseSpeeds2["Slow"] = 100] = "Slow";
})(ParseSpeeds || (ParseSpeeds = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/PDFEmbeddedFile.js
var PDFEmbeddedFile = class {
  constructor(ref, doc, embedder) {
    this.alreadyEmbedded = false;
    this.ref = ref;
    this.doc = doc;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all embeddable files get embedded.
   *
   * Embed this embeddable file in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  embed() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.alreadyEmbedded) {
        const ref = yield this.embedder.embedIntoContext(this.doc.context, this.ref);
        if (!this.doc.catalog.has(PDFName_default.of("Names"))) {
          this.doc.catalog.set(PDFName_default.of("Names"), this.doc.context.obj({}));
        }
        const Names = this.doc.catalog.lookup(PDFName_default.of("Names"), PDFDict_default);
        if (!Names.has(PDFName_default.of("EmbeddedFiles"))) {
          Names.set(PDFName_default.of("EmbeddedFiles"), this.doc.context.obj({}));
        }
        const EmbeddedFiles = Names.lookup(PDFName_default.of("EmbeddedFiles"), PDFDict_default);
        if (!EmbeddedFiles.has(PDFName_default.of("Names"))) {
          EmbeddedFiles.set(PDFName_default.of("Names"), this.doc.context.obj([]));
        }
        const EFNames = EmbeddedFiles.lookup(PDFName_default.of("Names"), PDFArray_default);
        EFNames.push(PDFHexString_default.fromText(this.embedder.fileName));
        EFNames.push(ref);
        if (!this.doc.catalog.has(PDFName_default.of("AF"))) {
          this.doc.catalog.set(PDFName_default.of("AF"), this.doc.context.obj([]));
        }
        const AF = this.doc.catalog.lookup(PDFName_default.of("AF"), PDFArray_default);
        AF.push(ref);
        this.alreadyEmbedded = true;
      }
    });
  }
};
PDFEmbeddedFile.of = (ref, doc, embedder) => new PDFEmbeddedFile(ref, doc, embedder);

// node_modules/pdf-lib-plus-encrypt/es/api/PDFJavaScript.js
var PDFJavaScript = class {
  constructor(ref, doc, embedder) {
    this.alreadyEmbedded = false;
    this.ref = ref;
    this.doc = doc;
    this.embedder = embedder;
  }
  /**
   * > **NOTE:** You probably don't need to call this method directly. The
   * > [[PDFDocument.save]] and [[PDFDocument.saveAsBase64]] methods will
   * > automatically ensure all JavaScripts get embedded.
   *
   * Embed this JavaScript in its document.
   *
   * @returns Resolves when the embedding is complete.
   */
  embed() {
    return __awaiter(this, void 0, void 0, function* () {
      if (!this.alreadyEmbedded) {
        const { catalog, context } = this.doc;
        const ref = yield this.embedder.embedIntoContext(this.doc.context, this.ref);
        if (!catalog.has(PDFName_default.of("Names"))) {
          catalog.set(PDFName_default.of("Names"), context.obj({}));
        }
        const Names = catalog.lookup(PDFName_default.of("Names"), PDFDict_default);
        if (!Names.has(PDFName_default.of("JavaScript"))) {
          Names.set(PDFName_default.of("JavaScript"), context.obj({}));
        }
        const Javascript = Names.lookup(PDFName_default.of("JavaScript"), PDFDict_default);
        if (!Javascript.has(PDFName_default.of("Names"))) {
          Javascript.set(PDFName_default.of("Names"), context.obj([]));
        }
        const JSNames = Javascript.lookup(PDFName_default.of("Names"), PDFArray_default);
        JSNames.push(PDFHexString_default.fromText(this.embedder.scriptName));
        JSNames.push(ref);
        this.alreadyEmbedded = true;
      }
    });
  }
};
PDFJavaScript.of = (ref, doc, embedder) => new PDFJavaScript(ref, doc, embedder);

// node_modules/pdf-lib-plus-encrypt/es/core/embedders/JavaScriptEmbedder.js
var JavaScriptEmbedder = class _JavaScriptEmbedder {
  constructor(script, scriptName) {
    this.script = script;
    this.scriptName = scriptName;
  }
  static for(script, scriptName) {
    return new _JavaScriptEmbedder(script, scriptName);
  }
  embedIntoContext(context, ref) {
    return __awaiter(this, void 0, void 0, function* () {
      const jsActionDict = context.obj({
        Type: "Action",
        S: "JavaScript",
        JS: PDFHexString_default.fromText(this.script)
      });
      if (ref) {
        context.assign(ref, jsActionDict);
        return ref;
      } else {
        return context.register(jsActionDict);
      }
    });
  }
};
var JavaScriptEmbedder_default = JavaScriptEmbedder;

// node_modules/pdf-lib-plus-encrypt/es/api/PDFDocument.js
var PDFDocument = class _PDFDocument {
  constructor(context, ignoreEncryption, updateMetadata) {
    this.defaultWordBreaks = [" "];
    this.computePages = () => {
      const pages = [];
      this.catalog.Pages().traverse((node, ref) => {
        if (node instanceof PDFPageLeaf_default) {
          let page = this.pageMap.get(node);
          if (!page) {
            page = PDFPage.of(node, ref, this);
            this.pageMap.set(node, page);
          }
          pages.push(page);
        }
      });
      return pages;
    };
    this.getOrCreateForm = () => {
      const acroForm = this.catalog.getOrCreateAcroForm();
      return PDFForm.of(acroForm, this);
    };
    assertIs(context, "context", [[PDFContext_default, "PDFContext"]]);
    assertIs(ignoreEncryption, "ignoreEncryption", ["boolean"]);
    this.context = context;
    this.catalog = context.lookup(context.trailerInfo.Root);
    this.isEncrypted = !!context.lookup(context.trailerInfo.Encrypt);
    this.pageCache = Cache_default.populatedBy(this.computePages);
    this.pageMap = /* @__PURE__ */ new Map();
    this.formCache = Cache_default.populatedBy(this.getOrCreateForm);
    this.fonts = [];
    this.images = [];
    this.embeddedPages = [];
    this.embeddedFiles = [];
    this.javaScripts = [];
    if (!ignoreEncryption && this.isEncrypted)
      throw new EncryptedPDFError();
    if (updateMetadata)
      this.updateInfoDict();
  }
  /**
   * Load an existing [[PDFDocument]]. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                               |
   * | ------------- | ------------------------------------------------------ |
   * | `string`      | A base64 encoded string (or data URI) containing a PDF |
   * | `Uint8Array`  | The raw bytes of a PDF                                 |
   * | `ArrayBuffer` | The raw bytes of a PDF                                 |
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib-plus-encrypt'
   *
   * // pdf=string
   * const base64 =
   *  'JVBERi0xLjcKJYGBgYEKCjUgMCBvYmoKPDwKL0ZpbHRlciAvRmxhdGVEZWNvZGUKL0xlbm' +
   *  'd0aCAxMDQKPj4Kc3RyZWFtCniccwrhMlAAwaJ0Ln2P1Jyy1JLM5ERdc0MjCwUjE4WQNC4Q' +
   *  '6cNlCFZkqGCqYGSqEJLLZWNuYGZiZmbkYuZsZmlmZGRgZmluDCQNzc3NTM2NzdzMXMxMjQ' +
   *  'ztFEKyuEK0uFxDuAAOERdVCmVuZHN0cmVhbQplbmRvYmoKCjYgMCBvYmoKPDwKL0ZpbHRl' +
   *  'ciAvRmxhdGVEZWNvZGUKL1R5cGUgL09ialN0bQovTiA0Ci9GaXJzdCAyMAovTGVuZ3RoID' +
   *  'IxNQo+PgpzdHJlYW0KeJxVj9GqwjAMhu/zFHkBzTo3nCCCiiKIHPEICuJF3cKoSCu2E8/b' +
   *  '20wPIr1p8v9/8kVhgilmGfawX2CGaVrgcAi0/bsy0lrX7IGWpvJ4iJYEN3gEmrrGBlQwGs' +
   *  'HHO9VBX1wNrxAqMX87RBD5xpJuddqwd82tjAHxzV1U5LPgy52DKXWnr1Lheg+j/c/pzGVr' +
   *  'iqV0VlwZPXGPCJjElw/ybkwUmeoWgxesDXGhHJC/D/iikp1Av80ptKU0FdBEe25pPihAM1' +
   *  'u6ytgaaWfs2Hrz35CJT1+EWmAKZW5kc3RyZWFtCmVuZG9iagoKNyAwIG9iago8PAovU2l6' +
   *  'ZSA4Ci9Sb290IDIgMCBSCi9GaWx0ZXIgL0ZsYXRlRGVjb2RlCi9UeXBlIC9YUmVmCi9MZW' +
   *  '5ndGggMzgKL1cgWyAxIDIgMiBdCi9JbmRleCBbIDAgOCBdCj4+CnN0cmVhbQp4nBXEwREA' +
   *  'EBAEsCwz3vrvRmOOyyOoGhZdutHN2MT55fIAVocD+AplbmRzdHJlYW0KZW5kb2JqCgpzdG' +
   *  'FydHhyZWYKNTEwCiUlRU9G'
   *
   * const dataUri = 'data:application/pdf;base64,' + base64
   *
   * const pdfDoc1 = await PDFDocument.load(base64)
   * const pdfDoc2 = await PDFDocument.load(dataUri)
   *
   * // pdf=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('with_update_sections.pdf')
   * const pdfDoc3 = await PDFDocument.load(uint8Array)
   *
   * // pdf=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/with_update_sections.pdf'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const pdfDoc4 = await PDFDocument.load(arrayBuffer)
   *
   * ```
   *
   * @param pdf The input data containing a PDF document.
   * @param options The options to be used when loading the document.
   * @returns Resolves with a document loaded from the input.
   */
  static load(pdf, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const { ignoreEncryption = false, parseSpeed = ParseSpeeds.Slow, throwOnInvalidObject = false, updateMetadata = true, capNumbers = false } = options;
      assertIs(pdf, "pdf", ["string", Uint8Array, ArrayBuffer]);
      assertIs(ignoreEncryption, "ignoreEncryption", ["boolean"]);
      assertIs(parseSpeed, "parseSpeed", ["number"]);
      assertIs(throwOnInvalidObject, "throwOnInvalidObject", ["boolean"]);
      const bytes = toUint8Array(pdf);
      const context = yield PDFParser_default.forBytesWithOptions(bytes, parseSpeed, throwOnInvalidObject, capNumbers).parseDocument();
      return new _PDFDocument(context, ignoreEncryption, updateMetadata);
    });
  }
  /**
   * Create a new [[PDFDocument]].
   * @returns Resolves with the newly created document.
   */
  static create(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const { updateMetadata = true } = options;
      const context = PDFContext_default.create();
      const pageTree = PDFPageTree_default.withContext(context);
      const pageTreeRef = context.register(pageTree);
      const catalog = PDFCatalog_default.withContextAndPages(context, pageTreeRef);
      context.trailerInfo.Root = context.register(catalog);
      const pdfDoc = new _PDFDocument(context, false, updateMetadata);
      return pdfDoc;
    });
  }
  /**
   * Instantiate PDF-Security for encryption of file
   * @param SecurityOption {@link SecurityOption}
   *  SecurityOption
   * ```javascript
   * {
   * `ownerPassword`?: string;
   * `userPassword`: string;
   * `permissions`?: UserPermission;
   * `pdfVersion`?: string;
   * }
   * ```
   *
   * @returns void
   */
  encrypt(options) {
    return __awaiter(this, void 0, void 0, function* () {
      options.pdfVersion = this.context.header.getVersion();
      this._id = PDFSecurity_default.generateFileID(this.getInfoDict());
      const newInfo = this.context.obj([this._id, this._id]);
      this.context.trailerInfo.ID = newInfo;
      this._security = PDFSecurity_default.create(this, options);
      this.context.setSecurity(this._security);
      const newSecurity = this.context.obj(this._security.dictionary);
      this.context.trailerInfo.Encrypt = this.context.register(newSecurity);
    });
  }
  /**
   * Register a fontkit instance. This must be done before custom fonts can
   * be embedded. See [here](https://github.com/brennanmcquerry/pdf-lib-plus-encrypt/tree/master#fontkit-installation)
   * for instructions on how to install and register a fontkit instance.
   *
   * > You do **not** need to call this method to embed standard fonts.
   *
   * For example:
   * ```js
   * import { PDFDocument } from 'pdf-lib-plus-encrypt'
   * import fontkit from '@pdf-lib/fontkit'
   *
   * const pdfDoc = await PDFDocument.create()
   * pdfDoc.registerFontkit(fontkit)
   * ```
   *
   * @param fontkit The fontkit instance to be registered.
   */
  registerFontkit(fontkit) {
    this.fontkit = fontkit;
  }
  /**
   * Get the [[PDFForm]] containing all interactive fields for this document.
   * For example:
   * ```js
   * const form = pdfDoc.getForm()
   * const fields = form.getFields()
   * fields.forEach(field => {
   *   const type = field.constructor.name
   *   const name = field.getName()
   *   console.log(`${type}: ${name}`)
   * })
   * ```
   * @returns The form for this document.
   */
  getForm() {
    const form = this.formCache.access();
    if (form.hasXFA()) {
      console.warn("Removing XFA form data as pdf-lib-plus-encrypt does not support reading or writing XFA");
      form.deleteXFA();
    }
    return form;
  }
  /**
   * Get this document's title metadata. The title appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const title = pdfDoc.getTitle()
   * ```
   * @returns A string containing the title of this document, if it has one.
   */
  getTitle() {
    const title = this.getInfoDict().lookup(PDFName_default.Title);
    if (!title)
      return void 0;
    assertIsLiteralOrHexString(title);
    return title.decodeText();
  }
  /**
   * Get this document's author metadata. The author appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const author = pdfDoc.getAuthor()
   * ```
   * @returns A string containing the author of this document, if it has one.
   */
  getAuthor() {
    const author = this.getInfoDict().lookup(PDFName_default.Author);
    if (!author)
      return void 0;
    assertIsLiteralOrHexString(author);
    return author.decodeText();
  }
  /**
   * Get this document's subject metadata. The subject appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const subject = pdfDoc.getSubject()
   * ```
   * @returns A string containing the subject of this document, if it has one.
   */
  getSubject() {
    const subject = this.getInfoDict().lookup(PDFName_default.Subject);
    if (!subject)
      return void 0;
    assertIsLiteralOrHexString(subject);
    return subject.decodeText();
  }
  /**
   * Get this document's keywords metadata. The keywords appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const keywords = pdfDoc.getKeywords()
   * ```
   * @returns A string containing the keywords of this document, if it has any.
   */
  getKeywords() {
    const keywords = this.getInfoDict().lookup(PDFName_default.Keywords);
    if (!keywords)
      return void 0;
    assertIsLiteralOrHexString(keywords);
    return keywords.decodeText();
  }
  /**
   * Get this document's creator metadata. The creator appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const creator = pdfDoc.getCreator()
   * ```
   * @returns A string containing the creator of this document, if it has one.
   */
  getCreator() {
    const creator = this.getInfoDict().lookup(PDFName_default.Creator);
    if (!creator)
      return void 0;
    assertIsLiteralOrHexString(creator);
    return creator.decodeText();
  }
  /**
   * Get this document's producer metadata. The producer appears in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * const producer = pdfDoc.getProducer()
   * ```
   * @returns A string containing the producer of this document, if it has one.
   */
  getProducer() {
    const producer = this.getInfoDict().lookup(PDFName_default.Producer);
    if (!producer)
      return void 0;
    assertIsLiteralOrHexString(producer);
    return producer.decodeText();
  }
  /**
   * Get this document's creation date metadata. The creation date appears in
   * the "Document Properties" section of most PDF readers. For example:
   * ```js
   * const creationDate = pdfDoc.getCreationDate()
   * ```
   * @returns A Date containing the creation date of this document,
   *          if it has one.
   */
  getCreationDate() {
    const creationDate = this.getInfoDict().lookup(PDFName_default.CreationDate);
    if (!creationDate)
      return void 0;
    assertIsLiteralOrHexString(creationDate);
    return creationDate.decodeDate();
  }
  /**
   * Get this document's modification date metadata. The modification date
   * appears in the "Document Properties" section of most PDF readers.
   * For example:
   * ```js
   * const modification = pdfDoc.getModificationDate()
   * ```
   * @returns A Date containing the modification date of this document,
   *          if it has one.
   */
  getModificationDate() {
    const modificationDate = this.getInfoDict().lookup(PDFName_default.ModDate);
    if (!modificationDate)
      return void 0;
    assertIsLiteralOrHexString(modificationDate);
    return modificationDate.decodeDate();
  }
  /**
   * Set this document's title metadata. The title will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setTitle('🥚 The Life of an Egg 🍳')
   * ```
   *
   * To display the title in the window's title bar, set the
   * `showInWindowTitleBar` option to `true` (works for _most_ PDF readers).
   * For example:
   * ```js
   * pdfDoc.setTitle('🥚 The Life of an Egg 🍳', { showInWindowTitleBar: true })
   * ```
   *
   * @param title The title of this document.
   * @param options The options to be used when setting the title.
   */
  setTitle(title, options) {
    assertIs(title, "title", ["string"]);
    const key = PDFName_default.of("Title");
    this.getInfoDict().set(key, PDFHexString_default.fromText(title));
    if (options === null || options === void 0 ? void 0 : options.showInWindowTitleBar) {
      const prefs = this.catalog.getOrCreateViewerPreferences();
      prefs.setDisplayDocTitle(true);
    }
  }
  /**
   * Set this document's author metadata. The author will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setAuthor('Humpty Dumpty')
   * ```
   * @param author The author of this document.
   */
  setAuthor(author) {
    assertIs(author, "author", ["string"]);
    const key = PDFName_default.of("Author");
    this.getInfoDict().set(key, PDFHexString_default.fromText(author));
  }
  /**
   * Set this document's subject metadata. The subject will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setSubject('📘 An Epic Tale of Woe 📖')
   * ```
   * @param subject The subject of this document.
   */
  setSubject(subject) {
    assertIs(subject, "author", ["string"]);
    const key = PDFName_default.of("Subject");
    this.getInfoDict().set(key, PDFHexString_default.fromText(subject));
  }
  /**
   * Set this document's keyword metadata. These keywords will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setKeywords(['eggs', 'wall', 'fall', 'king', 'horses', 'men'])
   * ```
   * @param keywords An array of keywords associated with this document.
   */
  setKeywords(keywords) {
    assertIs(keywords, "keywords", [Array]);
    const key = PDFName_default.of("Keywords");
    this.getInfoDict().set(key, PDFHexString_default.fromText(keywords.join(" ")));
  }
  /**
   * Set this document's creator metadata. The creator will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setCreator('PDF App 9000 🤖')
   * ```
   * @param creator The creator of this document.
   */
  setCreator(creator) {
    assertIs(creator, "creator", ["string"]);
    const key = PDFName_default.of("Creator");
    this.getInfoDict().set(key, PDFHexString_default.fromText(creator));
  }
  /**
   * Set this document's producer metadata. The producer will appear in the
   * "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setProducer('PDF App 9000 🤖')
   * ```
   * @param producer The producer of this document.
   */
  setProducer(producer) {
    assertIs(producer, "creator", ["string"]);
    const key = PDFName_default.of("Producer");
    this.getInfoDict().set(key, PDFHexString_default.fromText(producer));
  }
  /**
   * Set this document's language metadata. The language will appear in the
   * "Document Properties" section of some PDF readers. For example:
   * ```js
   * pdfDoc.setLanguage('en-us')
   * ```
   *
   * @param language An RFC 3066 _Language-Tag_ denoting the language of this
   *                 document, or an empty string if the language is unknown.
   */
  setLanguage(language) {
    assertIs(language, "language", ["string"]);
    const key = PDFName_default.of("Lang");
    this.catalog.set(key, PDFString_default.of(language));
  }
  /**
   * Set this document's creation date metadata. The creation date will appear
   * in the "Document Properties" section of most PDF readers. For example:
   * ```js
   * pdfDoc.setCreationDate(new Date())
   * ```
   * @param creationDate The date this document was created.
   */
  setCreationDate(creationDate) {
    assertIs(creationDate, "creationDate", [[Date, "Date"]]);
    const key = PDFName_default.of("CreationDate");
    this.getInfoDict().set(key, PDFString_default.fromDate(creationDate));
  }
  /**
   * Set this document's modification date metadata. The modification date will
   * appear in the "Document Properties" section of most PDF readers. For
   * example:
   * ```js
   * pdfDoc.setModificationDate(new Date())
   * ```
   * @param modificationDate The date this document was last modified.
   */
  setModificationDate(modificationDate) {
    assertIs(modificationDate, "modificationDate", [[Date, "Date"]]);
    const key = PDFName_default.of("ModDate");
    this.getInfoDict().set(key, PDFString_default.fromDate(modificationDate));
  }
  /**
   * Get the number of pages contained in this document. For example:
   * ```js
   * const totalPages = pdfDoc.getPageCount()
   * ```
   * @returns The number of pages in this document.
   */
  getPageCount() {
    if (this.pageCount === void 0)
      this.pageCount = this.getPages().length;
    return this.pageCount;
  }
  /**
   * Get an array of all the pages contained in this document. The pages are
   * stored in the array in the same order that they are rendered in the
   * document. For example:
   * ```js
   * const pages = pdfDoc.getPages()
   * pages[0]   // The first page of the document
   * pages[2]   // The third page of the document
   * pages[197] // The 198th page of the document
   * ```
   * @returns An array of all the pages contained in this document.
   */
  getPages() {
    return this.pageCache.access();
  }
  /**
   * Get the page rendered at a particular `index` of the document. For example:
   * ```js
   * pdfDoc.getPage(0)   // The first page of the document
   * pdfDoc.getPage(2)   // The third page of the document
   * pdfDoc.getPage(197) // The 198th page of the document
   * ```
   * @returns The [[PDFPage]] rendered at the given `index` of the document.
   */
  getPage(index) {
    const pages = this.getPages();
    assertRange(index, "index", 0, pages.length - 1);
    return pages[index];
  }
  /**
   * Get an array of indices for all the pages contained in this document. The
   * array will contain a range of integers from
   * `0..pdfDoc.getPageCount() - 1`. For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   * pdfDoc.addPage()
   * pdfDoc.addPage()
   * pdfDoc.addPage()
   *
   * const indices = pdfDoc.getPageIndices()
   * indices // => [0, 1, 2]
   * ```
   * @returns An array of indices for all pages contained in this document.
   */
  getPageIndices() {
    return range(0, this.getPageCount());
  }
  /**
   * Remove the page at a given index from this document. For example:
   * ```js
   * pdfDoc.removePage(0)   // Remove the first page of the document
   * pdfDoc.removePage(2)   // Remove the third page of the document
   * pdfDoc.removePage(197) // Remove the 198th page of the document
   * ```
   * Once a page has been removed, it will no longer be rendered at that index
   * in the document.
   * @param index The index of the page to be removed.
   */
  removePage(index) {
    const pageCount = this.getPageCount();
    if (this.pageCount === 0)
      throw new RemovePageFromEmptyDocumentError();
    assertRange(index, "index", 0, pageCount - 1);
    this.catalog.removeLeafNode(index);
    this.pageCount = pageCount - 1;
  }
  /**
   * Add a page to the end of this document. This method accepts three
   * different value types for the `page` parameter:
   *
   * | Type               | Behavior                                                                            |
   * | ------------------ | ----------------------------------------------------------------------------------- |
   * | `undefined`        | Create a new page and add it to the end of this document                            |
   * | `[number, number]` | Create a new page with the given dimensions and add it to the end of this document  |
   * | `PDFPage`          | Add the existing page to the end of this document                                   |
   *
   * For example:
   * ```js
   * // page=undefined
   * const newPage = pdfDoc.addPage()
   *
   * // page=[number, number]
   * import { PageSizes } from 'pdf-lib-plus-encrypt'
   * const newPage1 = pdfDoc.addPage(PageSizes.A7)
   * const newPage2 = pdfDoc.addPage(PageSizes.Letter)
   * const newPage3 = pdfDoc.addPage([500, 750])
   *
   * // page=PDFPage
   * const pdfDoc1 = await PDFDocument.create()
   * const pdfDoc2 = await PDFDocument.load(...)
   * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
   * pdfDoc1.addPage(existingPage)
   * ```
   *
   * @param page Optionally, the desired dimensions or existing page.
   * @returns The newly created (or existing) page.
   */
  addPage(page) {
    assertIs(page, "page", ["undefined", [PDFPage, "PDFPage"], Array]);
    return this.insertPage(this.getPageCount(), page);
  }
  /**
   * Insert a page at a given index within this document. This method accepts
   * three different value types for the `page` parameter:
   *
   * | Type               | Behavior                                                                       |
   * | ------------------ | ------------------------------------------------------------------------------ |
   * | `undefined`        | Create a new page and insert it into this document                             |
   * | `[number, number]` | Create a new page with the given dimensions and insert it into this document   |
   * | `PDFPage`          | Insert the existing page into this document                                    |
   *
   * For example:
   * ```js
   * // page=undefined
   * const newPage = pdfDoc.insertPage(2)
   *
   * // page=[number, number]
   * import { PageSizes } from 'pdf-lib-plus-encrypt'
   * const newPage1 = pdfDoc.insertPage(2, PageSizes.A7)
   * const newPage2 = pdfDoc.insertPage(0, PageSizes.Letter)
   * const newPage3 = pdfDoc.insertPage(198, [500, 750])
   *
   * // page=PDFPage
   * const pdfDoc1 = await PDFDocument.create()
   * const pdfDoc2 = await PDFDocument.load(...)
   * const [existingPage] = await pdfDoc1.copyPages(pdfDoc2, [0])
   * pdfDoc1.insertPage(0, existingPage)
   * ```
   *
   * @param index The index at which the page should be inserted (zero-based).
   * @param page Optionally, the desired dimensions or existing page.
   * @returns The newly created (or existing) page.
   */
  insertPage(index, page) {
    const pageCount = this.getPageCount();
    assertRange(index, "index", 0, pageCount);
    assertIs(page, "page", ["undefined", [PDFPage, "PDFPage"], Array]);
    if (!page || Array.isArray(page)) {
      const dims = Array.isArray(page) ? page : PageSizes.A4;
      page = PDFPage.create(this);
      page.setSize(...dims);
    } else if (page.doc !== this) {
      throw new ForeignPageError();
    }
    const parentRef = this.catalog.insertLeafNode(page.ref, index);
    page.node.setParent(parentRef);
    this.pageMap.set(page.node, page);
    this.pageCache.invalidate();
    this.pageCount = pageCount + 1;
    return page;
  }
  /**
   * Copy pages from a source document into this document. Allows pages to be
   * copied between different [[PDFDocument]] instances. For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   * const srcDoc = await PDFDocument.load(...)
   *
   * const copiedPages = await pdfDoc.copyPages(srcDoc, [0, 3, 89])
   * const [firstPage, fourthPage, ninetiethPage] = copiedPages;
   *
   * pdfDoc.addPage(fourthPage)
   * pdfDoc.insertPage(0, ninetiethPage)
   * pdfDoc.addPage(firstPage)
   * ```
   * @param srcDoc The document from which pages should be copied.
   * @param indices The indices of the pages that should be copied.
   * @returns Resolves with an array of pages copied into this document.
   */
  copyPages(srcDoc, indices) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(srcDoc, "srcDoc", [[_PDFDocument, "PDFDocument"]]);
      assertIs(indices, "indices", [Array]);
      yield srcDoc.flush();
      const copier = PDFObjectCopier_default.for(srcDoc.context, this.context);
      const srcPages = srcDoc.getPages();
      const copiedPages = new Array(indices.length);
      for (let idx = 0, len = indices.length; idx < len; idx++) {
        const srcPage = srcPages[indices[idx]];
        const copiedPage = copier.copy(srcPage.node);
        const ref = this.context.register(copiedPage);
        copiedPages[idx] = PDFPage.of(copiedPage, ref, this);
      }
      return copiedPages;
    });
  }
  /**
   * Get a copy of this document.
   *
   * For example:
   * ```js
   * const srcDoc = await PDFDocument.load(...)
   * const pdfDoc = await srcDoc.copy()
   * ```
   *
   * > **NOTE:**  This method won't copy all information over to the new
   * > document (acroforms, outlines, etc...).
   *
   * @returns Resolves with a copy this document.
   */
  copy() {
    return __awaiter(this, void 0, void 0, function* () {
      const pdfCopy = yield _PDFDocument.create();
      const contentPages = yield pdfCopy.copyPages(this, this.getPageIndices());
      for (let idx = 0, len = contentPages.length; idx < len; idx++) {
        pdfCopy.addPage(contentPages[idx]);
      }
      if (this.getAuthor() !== void 0) {
        pdfCopy.setAuthor(this.getAuthor());
      }
      if (this.getCreationDate() !== void 0) {
        pdfCopy.setCreationDate(this.getCreationDate());
      }
      if (this.getCreator() !== void 0) {
        pdfCopy.setCreator(this.getCreator());
      }
      if (this.getModificationDate() !== void 0) {
        pdfCopy.setModificationDate(this.getModificationDate());
      }
      if (this.getProducer() !== void 0) {
        pdfCopy.setProducer(this.getProducer());
      }
      if (this.getSubject() !== void 0) {
        pdfCopy.setSubject(this.getSubject());
      }
      if (this.getTitle() !== void 0) {
        pdfCopy.setTitle(this.getTitle());
      }
      pdfCopy.defaultWordBreaks = this.defaultWordBreaks;
      return pdfCopy;
    });
  }
  /**
   * Add JavaScript to this document. The supplied `script` is executed when the
   * document is opened. The `script` can be used to perform some operation
   * when the document is opened (e.g. logging to the console), or it can be
   * used to define a function that can be referenced later in a JavaScript
   * action. For example:
   * ```js
   * // Show "Hello World!" in the console when the PDF is opened
   * pdfDoc.addJavaScript(
   *   'main',
   *   'console.show(); console.println("Hello World!");'
   * );
   *
   * // Define a function named "foo" that can be called in JavaScript Actions
   * pdfDoc.addJavaScript(
   *   'foo',
   *   'function foo() { return "foo"; }'
   * );
   * ```
   * See the [JavaScript for Acrobat API Reference](https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/js_api_reference.pdf)
   * for details.
   * @param name The name of the script. Must be unique per document.
   * @param script The JavaScript to execute.
   */
  addJavaScript(name, script) {
    assertIs(name, "name", ["string"]);
    assertIs(script, "script", ["string"]);
    const embedder = JavaScriptEmbedder_default.for(script, name);
    const ref = this.context.nextRef();
    const javaScript = PDFJavaScript.of(ref, this, embedder);
    this.javaScripts.push(javaScript);
  }
  /**
   * Add an attachment to this document. Attachments are visible in the
   * "Attachments" panel of Adobe Acrobat and some other PDF readers. Any
   * type of file can be added as an attachment. This includes, but is not
   * limited to, `.png`, `.jpg`, `.pdf`, `.csv`, `.docx`, and `.xlsx` files.
   *
   * The input data can be provided in multiple formats:
   *
   * | Type          | Contents                                                       |
   * | ------------- | -------------------------------------------------------------- |
   * | `string`      | A base64 encoded string (or data URI) containing an attachment |
   * | `Uint8Array`  | The raw bytes of an attachment                                 |
   * | `ArrayBuffer` | The raw bytes of an attachment                                 |
   *
   * For example:
   * ```js
   * // attachment=string
   * await pdfDoc.attach('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...', 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   * await pdfDoc.attach('data:image/jpeg;base64,/9j/4AAQ...', 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   *
   * // attachment=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
   * await pdfDoc.attach(uint8Array, 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   *
   * // attachment=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * await pdfDoc.attach(arrayBuffer, 'cat_riding_unicorn.jpg', {
   *   mimeType: 'image/jpeg',
   *   description: 'Cool cat riding a unicorn! 🦄🐈🕶️',
   *   creationDate: new Date('2019/12/01'),
   *   modificationDate: new Date('2020/04/19'),
   * })
   * ```
   *
   * @param attachment The input data containing the file to be attached.
   * @param name The name of the file to be attached.
   * @returns Resolves when the attachment is complete.
   */
  attach(attachment, name, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(attachment, "attachment", ["string", Uint8Array, ArrayBuffer]);
      assertIs(name, "name", ["string"]);
      assertOrUndefined(options.mimeType, "mimeType", ["string"]);
      assertOrUndefined(options.description, "description", ["string"]);
      assertOrUndefined(options.creationDate, "options.creationDate", [Date]);
      assertOrUndefined(options.modificationDate, "options.modificationDate", [
        Date
      ]);
      assertIsOneOfOrUndefined(options.afRelationship, "options.afRelationship", AFRelationship);
      const bytes = toUint8Array(attachment);
      const embedder = FileEmbedder_default.for(bytes, name, options);
      const ref = this.context.nextRef();
      const embeddedFile = PDFEmbeddedFile.of(ref, this, embedder);
      this.embeddedFiles.push(embeddedFile);
    });
  }
  /**
   * Embed a font into this document. The input data can be provided in multiple
   * formats:
   *
   * | Type            | Contents                                                |
   * | --------------- | ------------------------------------------------------- |
   * | `StandardFonts` | One of the standard 14 fonts                            |
   * | `string`        | A base64 encoded string (or data URI) containing a font |
   * | `Uint8Array`    | The raw bytes of a font                                 |
   * | `ArrayBuffer`   | The raw bytes of a font                                 |
   *
   * For example:
   * ```js
   * // font=StandardFonts
   * import { StandardFonts } from 'pdf-lib-plus-encrypt'
   * const font1 = await pdfDoc.embedFont(StandardFonts.Helvetica)
   *
   * // font=string
   * const font2 = await pdfDoc.embedFont('AAEAAAAVAQAABABQRFNJRx/upe...')
   * const font3 = await pdfDoc.embedFont('data:font/opentype;base64,AAEAAA...')
   *
   * // font=Uint8Array
   * import fs from 'fs'
   * const font4 = await pdfDoc.embedFont(fs.readFileSync('Ubuntu-R.ttf'))
   *
   * // font=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
   * const ubuntuBytes = await fetch(url).then(res => res.arrayBuffer())
   * const font5 = await pdfDoc.embedFont(ubuntuBytes)
   * ```
   * See also: [[registerFontkit]]
   * @param font The input data for a font.
   * @param options The options to be used when embedding the font.
   * @returns Resolves with the embedded font.
   */
  embedFont(font, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const { subset = false, customName, features } = options;
      assertIs(font, "font", ["string", Uint8Array, ArrayBuffer]);
      assertIs(subset, "subset", ["boolean"]);
      let embedder;
      if (isStandardFont(font)) {
        embedder = StandardFontEmbedder_default.for(font, customName);
      } else if (canBeConvertedToUint8Array(font)) {
        const bytes = toUint8Array(font);
        const fontkit = this.assertFontkit();
        embedder = subset ? yield CustomFontSubsetEmbedder_default.for(fontkit, bytes, customName, features) : yield CustomFontEmbedder_default.for(fontkit, bytes, customName, features);
      } else {
        throw new TypeError("`font` must be one of `StandardFonts | string | Uint8Array | ArrayBuffer`");
      }
      const ref = this.context.nextRef();
      const pdfFont = PDFFont.of(ref, this, embedder);
      this.fonts.push(pdfFont);
      return pdfFont;
    });
  }
  /**
   * Embed a standard font into this document.
   * For example:
   * ```js
   * import { StandardFonts } from 'pdf-lib-plus-encrypt'
   * const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica)
   * ```
   * @param font The standard font to be embedded.
   * @param customName The name to be used when embedding the font.
   * @returns The embedded font.
   */
  embedStandardFont(font, customName) {
    assertIs(font, "font", ["string"]);
    if (!isStandardFont(font)) {
      throw new TypeError("`font` must be one of type `StandardFonts`");
    }
    const embedder = StandardFontEmbedder_default.for(font, customName);
    const ref = this.context.nextRef();
    const pdfFont = PDFFont.of(ref, this, embedder);
    this.fonts.push(pdfFont);
    return pdfFont;
  }
  /**
   * Embed a JPEG image into this document. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                                      |
   * | ------------- | ------------------------------------------------------------- |
   * | `string`      | A base64 encoded string (or data URI) containing a JPEG image |
   * | `Uint8Array`  | The raw bytes of a JPEG image                                 |
   * | `ArrayBuffer` | The raw bytes of a JPEG image                                 |
   *
   * For example:
   * ```js
   * // jpg=string
   * const image1 = await pdfDoc.embedJpg('/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...')
   * const image2 = await pdfDoc.embedJpg('data:image/jpeg;base64,/9j/4AAQ...')
   *
   * // jpg=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('cat_riding_unicorn.jpg')
   * const image3 = await pdfDoc.embedJpg(uint8Array)
   *
   * // jpg=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const image4 = await pdfDoc.embedJpg(arrayBuffer)
   * ```
   *
   * @param jpg The input data for a JPEG image.
   * @returns Resolves with the embedded image.
   */
  embedJpg(jpg) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(jpg, "jpg", ["string", Uint8Array, ArrayBuffer]);
      const bytes = toUint8Array(jpg);
      const embedder = yield JpegEmbedder_default.for(bytes);
      const ref = this.context.nextRef();
      const pdfImage = PDFImage.of(ref, this, embedder);
      this.images.push(pdfImage);
      return pdfImage;
    });
  }
  /**
   * Embed a PNG image into this document. The input data can be provided in
   * multiple formats:
   *
   * | Type          | Contents                                                     |
   * | ------------- | ------------------------------------------------------------ |
   * | `string`      | A base64 encoded string (or data URI) containing a PNG image |
   * | `Uint8Array`  | The raw bytes of a PNG image                                 |
   * | `ArrayBuffer` | The raw bytes of a PNG image                                 |
   *
   * For example:
   * ```js
   * // png=string
   * const image1 = await pdfDoc.embedPng('iVBORw0KGgoAAAANSUhEUgAAAlgAAAF3...')
   * const image2 = await pdfDoc.embedPng('data:image/png;base64,iVBORw0KGg...')
   *
   * // png=Uint8Array
   * import fs from 'fs'
   * const uint8Array = fs.readFileSync('small_mario.png')
   * const image3 = await pdfDoc.embedPng(uint8Array)
   *
   * // png=ArrayBuffer
   * const url = 'https://pdf-lib.js.org/assets/small_mario.png'
   * const arrayBuffer = await fetch(url).then(res => res.arrayBuffer())
   * const image4 = await pdfDoc.embedPng(arrayBuffer)
   * ```
   *
   * @param png The input data for a PNG image.
   * @returns Resolves with the embedded image.
   */
  embedPng(png) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(png, "png", ["string", Uint8Array, ArrayBuffer]);
      const bytes = toUint8Array(png);
      const embedder = yield PngEmbedder_default.for(bytes);
      const ref = this.context.nextRef();
      const pdfImage = PDFImage.of(ref, this, embedder);
      this.images.push(pdfImage);
      return pdfImage;
    });
  }
  /**
   * Embed one or more PDF pages into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   *
   * // Embed page 74 of `sourcePdf` into `pdfDoc`
   * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, [73])
   * ```
   *
   * See [[PDFDocument.load]] for examples of the allowed input data formats.
   *
   * @param pdf The input data containing a PDF document.
   * @param indices The indices of the pages that should be embedded.
   * @returns Resolves with an array of the embedded pages.
   */
  embedPdf(pdf, indices = [0]) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(pdf, "pdf", [
        "string",
        Uint8Array,
        ArrayBuffer,
        [_PDFDocument, "PDFDocument"]
      ]);
      assertIs(indices, "indices", [Array]);
      const srcDoc = pdf instanceof _PDFDocument ? pdf : yield _PDFDocument.load(pdf);
      const srcPages = pluckIndices(srcDoc.getPages(), indices);
      return this.embedPages(srcPages);
    });
  }
  /**
   * Embed a single PDF page into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
   * const sourcePdfPage = sourcePdfDoc.getPages()[73]
   *
   * const embeddedPage = await pdfDoc.embedPage(
   *   sourcePdfPage,
   *
   *   // Clip a section of the source page so that we only embed part of it
   *   { left: 100, right: 450, bottom: 330, top: 570 },
   *
   *   // Translate all drawings of the embedded page by (10, 200) units
   *   [1, 0, 0, 1, 10, 200],
   * )
   * ```
   *
   * @param page The page to be embedded.
   * @param boundingBox
   * Optionally, an area of the source page that should be embedded
   * (defaults to entire page).
   * @param transformationMatrix
   * Optionally, a transformation matrix that is always applied to the embedded
   * page anywhere it is drawn.
   * @returns Resolves with the embedded pdf page.
   */
  embedPage(page, boundingBox, transformationMatrix) {
    return __awaiter(this, void 0, void 0, function* () {
      assertIs(page, "page", [[PDFPage, "PDFPage"]]);
      const [embeddedPage] = yield this.embedPages([page], [boundingBox], [transformationMatrix]);
      return embeddedPage;
    });
  }
  /**
   * Embed one or more PDF pages into this document.
   *
   * For example:
   * ```js
   * const pdfDoc = await PDFDocument.create()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourceBuffer = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   * const sourcePdfDoc = await PDFDocument.load(sourceBuffer)
   *
   * const page1 = sourcePdfDoc.getPages()[0]
   * const page2 = sourcePdfDoc.getPages()[52]
   * const page3 = sourcePdfDoc.getPages()[73]
   *
   * const embeddedPages = await pdfDoc.embedPages([page1, page2, page3])
   * ```
   *
   * @param page
   * The pages to be embedded (they must all share the same context).
   * @param boundingBoxes
   * Optionally, an array of clipping boundaries - one for each page
   * (defaults to entirety of each page).
   * @param transformationMatrices
   * Optionally, an array of transformation matrices - one for each page
   * (each page's transformation will apply anywhere it is drawn).
   * @returns Resolves with an array of the embedded pdf pages.
   */
  embedPages(pages, boundingBoxes = [], transformationMatrices = []) {
    return __awaiter(this, void 0, void 0, function* () {
      if (pages.length === 0)
        return [];
      for (let idx = 0, len = pages.length - 1; idx < len; idx++) {
        const currPage = pages[idx];
        const nextPage = pages[idx + 1];
        if (currPage.node.context !== nextPage.node.context) {
          throw new PageEmbeddingMismatchedContextError();
        }
      }
      const context = pages[0].node.context;
      const maybeCopyPage = context === this.context ? (p) => p : PDFObjectCopier_default.for(context, this.context).copy;
      const embeddedPages = new Array(pages.length);
      for (let idx = 0, len = pages.length; idx < len; idx++) {
        const page = maybeCopyPage(pages[idx].node);
        const box = boundingBoxes[idx];
        const matrix = transformationMatrices[idx];
        const embedder = yield PDFPageEmbedder_default.for(page, box, matrix);
        const ref = this.context.nextRef();
        embeddedPages[idx] = PDFEmbeddedPage.of(ref, this, embedder);
      }
      this.embeddedPages.push(...embeddedPages);
      return embeddedPages;
    });
  }
  /**
   * > **NOTE:** You shouldn't need to call this method directly. The [[save]]
   * > and [[saveAsBase64]] methods will automatically ensure that all embedded
   * > assets are flushed before serializing the document.
   *
   * Flush all embedded fonts, PDF pages, and images to this document's
   * [[context]].
   *
   * @returns Resolves when the flush is complete.
   */
  flush() {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.embedAll(this.fonts);
      yield this.embedAll(this.images);
      yield this.embedAll(this.embeddedPages);
      yield this.embedAll(this.embeddedFiles);
      yield this.embedAll(this.javaScripts);
    });
  }
  /**
   * Serialize this document to an array of bytes making up a PDF file.
   * For example:
   * ```js
   * const pdfBytes = await pdfDoc.save()
   * ```
   *
   * There are a number of things you can do with the serialized document,
   * depending on the JavaScript environment you're running in:
   * * Write it to a file in Node or React Native
   * * Download it as a Blob in the browser
   * * Render it in an `iframe`
   *
   * @param options The options to be used when saving the document.
   * @returns Resolves with the bytes of the serialized document.
   */
  save(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const { useObjectStreams = true, addDefaultPage = true, objectsPerTick = 50, updateFieldAppearances = true } = options;
      assertIs(useObjectStreams, "useObjectStreams", ["boolean"]);
      assertIs(addDefaultPage, "addDefaultPage", ["boolean"]);
      assertIs(objectsPerTick, "objectsPerTick", ["number"]);
      assertIs(updateFieldAppearances, "updateFieldAppearances", ["boolean"]);
      if (addDefaultPage && this.getPageCount() === 0)
        this.addPage();
      if (updateFieldAppearances) {
        const form = this.formCache.getValue();
        if (form)
          form.updateFieldAppearances();
      }
      yield this.flush();
      const Writer = useObjectStreams ? PDFStreamWriter_default : PDFWriter_default;
      return Writer.forContext(this.context, objectsPerTick).serializeToBuffer();
    });
  }
  /**
   * Serialize this document to a base64 encoded string or data URI making up a
   * PDF file. For example:
   * ```js
   * const base64String = await pdfDoc.saveAsBase64()
   * base64String // => 'JVBERi0xLjcKJYGBgYEKC...'
   *
   * const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true })
   * base64DataUri // => 'data:application/pdf;base64,JVBERi0xLjcKJYGBgYEKC...'
   * ```
   *
   * @param options The options to be used when saving the document.
   * @returns Resolves with a base64 encoded string or data URI of the
   *          serialized document.
   */
  saveAsBase64(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
      const { dataUri = false } = options, otherOptions = __rest(options, ["dataUri"]);
      assertIs(dataUri, "dataUri", ["boolean"]);
      const bytes = yield this.save(otherOptions);
      const base64 = encodeToBase64(bytes);
      return dataUri ? `data:application/pdf;base64,${base64}` : base64;
    });
  }
  findPageForAnnotationRef(ref) {
    const pages = this.getPages();
    for (let idx = 0, len = pages.length; idx < len; idx++) {
      const page = pages[idx];
      const annotations = page.node.Annots();
      if ((annotations === null || annotations === void 0 ? void 0 : annotations.indexOf(ref)) !== void 0) {
        return page;
      }
    }
    return void 0;
  }
  embedAll(embeddables) {
    return __awaiter(this, void 0, void 0, function* () {
      for (let idx = 0, len = embeddables.length; idx < len; idx++) {
        yield embeddables[idx].embed();
      }
    });
  }
  updateInfoDict() {
    const pdfLib = `pdf-lib-plus-encrypt (https://github.com/brennanmcquerry/pdf-lib-plus-encrypt)`;
    const now = /* @__PURE__ */ new Date();
    const info = this.getInfoDict();
    this.setProducer(pdfLib);
    this.setModificationDate(now);
    if (!info.get(PDFName_default.of("Creator")))
      this.setCreator(pdfLib);
    if (!info.get(PDFName_default.of("CreationDate")))
      this.setCreationDate(now);
  }
  getInfoDict() {
    const existingInfo = this.context.lookup(this.context.trailerInfo.Info);
    if (existingInfo instanceof PDFDict_default)
      return existingInfo;
    const newInfo = this.context.obj({});
    this.context.trailerInfo.Info = this.context.register(newInfo);
    return newInfo;
  }
  assertFontkit() {
    if (!this.fontkit)
      throw new FontkitNotRegisteredError();
    return this.fontkit;
  }
};
function assertIsLiteralOrHexString(pdfObject) {
  if (!(pdfObject instanceof PDFHexString_default) && !(pdfObject instanceof PDFString_default)) {
    throw new UnexpectedObjectTypeError([PDFHexString_default, PDFString_default], pdfObject);
  }
}

// node_modules/pdf-lib-plus-encrypt/es/api/PDFPageOptions.js
var BlendMode;
(function(BlendMode2) {
  BlendMode2["Normal"] = "Normal";
  BlendMode2["Multiply"] = "Multiply";
  BlendMode2["Screen"] = "Screen";
  BlendMode2["Overlay"] = "Overlay";
  BlendMode2["Darken"] = "Darken";
  BlendMode2["Lighten"] = "Lighten";
  BlendMode2["ColorDodge"] = "ColorDodge";
  BlendMode2["ColorBurn"] = "ColorBurn";
  BlendMode2["HardLight"] = "HardLight";
  BlendMode2["SoftLight"] = "SoftLight";
  BlendMode2["Difference"] = "Difference";
  BlendMode2["Exclusion"] = "Exclusion";
})(BlendMode || (BlendMode = {}));

// node_modules/pdf-lib-plus-encrypt/es/api/PDFPage.js
var PDFPage = class {
  constructor(leafNode, ref, doc) {
    this.fontSize = 24;
    this.fontColor = rgb(0, 0, 0);
    this.lineHeight = 24;
    this.x = 0;
    this.y = 0;
    assertIs(leafNode, "leafNode", [[PDFPageLeaf_default, "PDFPageLeaf"]]);
    assertIs(ref, "ref", [[PDFRef_default, "PDFRef"]]);
    assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
    this.node = leafNode;
    this.ref = ref;
    this.doc = doc;
  }
  /**
   * Rotate this page by a multiple of 90 degrees. For example:
   * ```js
   * import { degrees } from 'pdf-lib-plus-encrypt'
   *
   * page.setRotation(degrees(-90))
   * page.setRotation(degrees(0))
   * page.setRotation(degrees(90))
   * page.setRotation(degrees(180))
   * page.setRotation(degrees(270))
   * ```
   * @param angle The angle to rotate this page.
   */
  setRotation(angle) {
    const degreesAngle = toDegrees(angle);
    assertMultiple(degreesAngle, "degreesAngle", 90);
    this.node.set(PDFName_default.of("Rotate"), this.doc.context.obj(degreesAngle));
  }
  /**
   * Get this page's rotation angle in degrees. For example:
   * ```js
   * const rotationAngle = page.getRotation().angle;
   * ```
   * @returns The rotation angle of the page in degrees (always a multiple of
   *          90 degrees).
   */
  getRotation() {
    const Rotate = this.node.Rotate();
    return degrees(Rotate ? Rotate.asNumber() : 0);
  }
  /**
   * Resize this page by increasing or decreasing its width and height. For
   * example:
   * ```js
   * page.setSize(250, 500)
   * page.setSize(page.getWidth() + 50, page.getHeight() + 100)
   * page.setSize(page.getWidth() - 50, page.getHeight() - 100)
   * ```
   *
   * Note that the PDF specification does not allow for pages to have explicit
   * widths and heights. Instead it defines the "size" of a page in terms of
   * five rectangles: the MediaBox, CropBox, BleedBox, TrimBox, and ArtBox. As a
   * result, this method cannot directly change the width and height of a page.
   * Instead, it works by adjusting these five boxes.
   *
   * This method performs the following steps:
   *   1. Set width & height of MediaBox.
   *   2. Set width & height of CropBox, if it has same dimensions as MediaBox.
   *   3. Set width & height of BleedBox, if it has same dimensions as MediaBox.
   *   4. Set width & height of TrimBox, if it has same dimensions as MediaBox.
   *   5. Set width & height of ArtBox, if it has same dimensions as MediaBox.
   *
   * This approach works well for most PDF documents as all PDF pages must
   * have a MediaBox, but relatively few have a CropBox, BleedBox, TrimBox, or
   * ArtBox. And when they do have these additional boxes, they often have the
   * same dimensions as the MediaBox. However, if you find this method does not
   * work for your document, consider setting the boxes directly:
   *   * [[PDFPage.setMediaBox]]
   *   * [[PDFPage.setCropBox]]
   *   * [[PDFPage.setBleedBox]]
   *   * [[PDFPage.setTrimBox]]
   *   * [[PDFPage.setArtBox]]
   *
   * @param width The new width of the page.
   * @param height The new height of the page.
   */
  setSize(width, height) {
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const mediaBox = this.getMediaBox();
    this.setMediaBox(mediaBox.x, mediaBox.y, width, height);
    const cropBox = this.getCropBox();
    const bleedBox = this.getBleedBox();
    const trimBox = this.getTrimBox();
    const artBox = this.getArtBox();
    const hasCropBox = this.node.CropBox();
    const hasBleedBox = this.node.BleedBox();
    const hasTrimBox = this.node.TrimBox();
    const hasArtBox = this.node.ArtBox();
    if (hasCropBox && rectanglesAreEqual(cropBox, mediaBox)) {
      this.setCropBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasBleedBox && rectanglesAreEqual(bleedBox, mediaBox)) {
      this.setBleedBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasTrimBox && rectanglesAreEqual(trimBox, mediaBox)) {
      this.setTrimBox(mediaBox.x, mediaBox.y, width, height);
    }
    if (hasArtBox && rectanglesAreEqual(artBox, mediaBox)) {
      this.setArtBox(mediaBox.x, mediaBox.y, width, height);
    }
  }
  /**
   * Resize this page by increasing or decreasing its width. For example:
   * ```js
   * page.setWidth(250)
   * page.setWidth(page.getWidth() + 50)
   * page.setWidth(page.getWidth() - 50)
   * ```
   *
   * This method uses [[PDFPage.setSize]] to set the page's width.
   *
   * @param width The new width of the page.
   */
  setWidth(width) {
    assertIs(width, "width", ["number"]);
    this.setSize(width, this.getSize().height);
  }
  /**
   * Resize this page by increasing or decreasing its height. For example:
   * ```js
   * page.setHeight(500)
   * page.setHeight(page.getWidth() + 100)
   * page.setHeight(page.getWidth() - 100)
   * ```
   *
   * This method uses [[PDFPage.setSize]] to set the page's height.
   *
   * @param height The new height of the page.
   */
  setHeight(height) {
    assertIs(height, "height", ["number"]);
    this.setSize(this.getSize().width, height);
  }
  /**
   * Set the MediaBox of this page. For example:
   * ```js
   * const mediaBox = page.getMediaBox()
   *
   * page.setMediaBox(0, 0, 250, 500)
   * page.setMediaBox(mediaBox.x, mediaBox.y, 50, 100)
   * page.setMediaBox(15, 5, mediaBox.width - 50, mediaBox.height - 100)
   * ```
   *
   * See [[PDFPage.getMediaBox]] for details about what the MediaBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new MediaBox.
   * @param y The y coordinate of the lower left corner of the new MediaBox.
   * @param width The width of the new MediaBox.
   * @param height The height of the new MediaBox.
   */
  setMediaBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const mediaBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.MediaBox, mediaBox);
  }
  /**
   * Set the CropBox of this page. For example:
   * ```js
   * const cropBox = page.getCropBox()
   *
   * page.setCropBox(0, 0, 250, 500)
   * page.setCropBox(cropBox.x, cropBox.y, 50, 100)
   * page.setCropBox(15, 5, cropBox.width - 50, cropBox.height - 100)
   * ```
   *
   * See [[PDFPage.getCropBox]] for details about what the CropBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new CropBox.
   * @param y The y coordinate of the lower left corner of the new CropBox.
   * @param width The width of the new CropBox.
   * @param height The height of the new CropBox.
   */
  setCropBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const cropBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.CropBox, cropBox);
  }
  /**
   * Set the BleedBox of this page. For example:
   * ```js
   * const bleedBox = page.getBleedBox()
   *
   * page.setBleedBox(0, 0, 250, 500)
   * page.setBleedBox(bleedBox.x, bleedBox.y, 50, 100)
   * page.setBleedBox(15, 5, bleedBox.width - 50, bleedBox.height - 100)
   * ```
   *
   * See [[PDFPage.getBleedBox]] for details about what the BleedBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new BleedBox.
   * @param y The y coordinate of the lower left corner of the new BleedBox.
   * @param width The width of the new BleedBox.
   * @param height The height of the new BleedBox.
   */
  setBleedBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const bleedBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.BleedBox, bleedBox);
  }
  /**
   * Set the TrimBox of this page. For example:
   * ```js
   * const trimBox = page.getTrimBox()
   *
   * page.setTrimBox(0, 0, 250, 500)
   * page.setTrimBox(trimBox.x, trimBox.y, 50, 100)
   * page.setTrimBox(15, 5, trimBox.width - 50, trimBox.height - 100)
   * ```
   *
   * See [[PDFPage.getTrimBox]] for details about what the TrimBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new TrimBox.
   * @param y The y coordinate of the lower left corner of the new TrimBox.
   * @param width The width of the new TrimBox.
   * @param height The height of the new TrimBox.
   */
  setTrimBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const trimBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.TrimBox, trimBox);
  }
  /**
   * Set the ArtBox of this page. For example:
   * ```js
   * const artBox = page.getArtBox()
   *
   * page.setArtBox(0, 0, 250, 500)
   * page.setArtBox(artBox.x, artBox.y, 50, 100)
   * page.setArtBox(15, 5, artBox.width - 50, artBox.height - 100)
   * ```
   *
   * See [[PDFPage.getArtBox]] for details about what the ArtBox represents.
   *
   * @param x The x coordinate of the lower left corner of the new ArtBox.
   * @param y The y coordinate of the lower left corner of the new ArtBox.
   * @param width The width of the new ArtBox.
   * @param height The height of the new ArtBox.
   */
  setArtBox(x, y, width, height) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    assertIs(width, "width", ["number"]);
    assertIs(height, "height", ["number"]);
    const artBox = this.doc.context.obj([x, y, x + width, y + height]);
    this.node.set(PDFName_default.ArtBox, artBox);
  }
  /**
   * Get this page's width and height. For example:
   * ```js
   * const { width, height } = page.getSize()
   * ```
   *
   * This method uses [[PDFPage.getMediaBox]] to obtain the page's
   * width and height.
   *
   * @returns The width and height of the page.
   */
  getSize() {
    const { width, height } = this.getMediaBox();
    return { width, height };
  }
  /**
   * Get this page's width. For example:
   * ```js
   * const width = page.getWidth()
   * ```
   *
   * This method uses [[PDFPage.getSize]] to obtain the page's size.
   *
   * @returns The width of the page.
   */
  getWidth() {
    return this.getSize().width;
  }
  /**
   * Get this page's height. For example:
   * ```js
   * const height = page.getHeight()
   * ```
   *
   * This method uses [[PDFPage.getSize]] to obtain the page's size.
   *
   * @returns The height of the page.
   */
  getHeight() {
    return this.getSize().height;
  }
  /**
   * Get the rectangle defining this page's MediaBox. For example:
   * ```js
   * const { x, y, width, height } = page.getMediaBox()
   * ```
   *
   * The MediaBox of a page defines the boundaries of the physical medium on
   * which the page is to be displayed/printed. It may include extended area
   * surrounding the page content for bleed marks, printing marks, etc...
   * It may also include areas close to the edges of the medium that cannot be
   * marked because of physical limitations of the output device. Content
   * falling outside this boundary may safely be discarded without affecting
   * the meaning of the PDF file.
   *
   * @returns An object defining the lower left corner of the MediaBox and its
   *          width & height.
   */
  getMediaBox() {
    const mediaBox = this.node.MediaBox();
    return mediaBox.asRectangle();
  }
  /**
   * Get the rectangle defining this page's CropBox. For example:
   * ```js
   * const { x, y, width, height } = page.getCropBox()
   * ```
   *
   * The CropBox of a page defines the region to which the contents of the page
   * shall be clipped when displayed or printed. Unlike the other boxes, the
   * CropBox does not necessarily represent the physical page geometry. It
   * merely imposes clipping on the page contents.
   *
   * The CropBox's default value is the page's MediaBox.
   *
   * @returns An object defining the lower left corner of the CropBox and its
   *          width & height.
   */
  getCropBox() {
    var _a;
    const cropBox = this.node.CropBox();
    return (_a = cropBox === null || cropBox === void 0 ? void 0 : cropBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getMediaBox();
  }
  /**
   * Get the rectangle defining this page's BleedBox. For example:
   * ```js
   * const { x, y, width, height } = page.getBleedBox()
   * ```
   *
   * The BleedBox of a page defines the region to which the contents of the
   * page shall be clipped when output in a production environment. This may
   * include any extra bleed area needed to accommodate the physical
   * limitations of cutting, folding, and trimming equipment. The actual
   * printed page may include printing marks that fall outside the BleedBox.
   *
   * The BleedBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the BleedBox and its
   *          width & height.
   */
  getBleedBox() {
    var _a;
    const bleedBox = this.node.BleedBox();
    return (_a = bleedBox === null || bleedBox === void 0 ? void 0 : bleedBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
  }
  /**
   * Get the rectangle defining this page's TrimBox. For example:
   * ```js
   * const { x, y, width, height } = page.getTrimBox()
   * ```
   *
   * The TrimBox of a page defines the intended dimensions of the finished
   * page after trimming. It may be smaller than the MediaBox to allow for
   * production-related content, such as printing instructions, cut marks, or
   * color bars.
   *
   * The TrimBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the TrimBox and its
   *          width & height.
   */
  getTrimBox() {
    var _a;
    const trimBox = this.node.TrimBox();
    return (_a = trimBox === null || trimBox === void 0 ? void 0 : trimBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
  }
  /**
   * Get the rectangle defining this page's ArtBox. For example:
   * ```js
   * const { x, y, width, height } = page.getArtBox()
   * ```
   *
   * The ArtBox of a page defines the extent of the page's meaningful content
   * (including potential white space).
   *
   * The ArtBox's default value is the page's CropBox.
   *
   * @returns An object defining the lower left corner of the ArtBox and its
   *          width & height.
   */
  getArtBox() {
    var _a;
    const artBox = this.node.ArtBox();
    return (_a = artBox === null || artBox === void 0 ? void 0 : artBox.asRectangle()) !== null && _a !== void 0 ? _a : this.getCropBox();
  }
  /**
   * Translate this page's content to a new location on the page. This operation
   * is often useful after resizing the page with [[setSize]]. For example:
   * ```js
   * // Add 50 units of whitespace to the top and right of the page
   * page.setSize(page.getWidth() + 50, page.getHeight() + 50)
   *
   * // Move the page's content from the lower-left corner of the page
   * // to the top-right corner.
   * page.translateContent(50, 50)
   *
   * // Now there are 50 units of whitespace to the left and bottom of the page
   * ```
   * See also: [[resetPosition]]
   * @param x The new position on the x-axis for this page's content.
   * @param y The new position on the y-axis for this page's content.
   */
  translateContent(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.node.normalize();
    this.getContentStream();
    const start = this.createContentStream(pushGraphicsState(), translate(x, y));
    const startRef = this.doc.context.register(start);
    const end = this.createContentStream(popGraphicsState());
    const endRef = this.doc.context.register(end);
    this.node.wrapContentStreams(startRef, endRef);
  }
  /**
   * Reset the x and y coordinates of this page to `(0, 0)`. This operation is
   * often useful after calling [[translateContent]]. For example:
   * ```js
   * // Shift the page's contents up and to the right by 50 units
   * page.translateContent(50, 50)
   *
   * // This text will shifted - it will be drawn at (50, 50)
   * page.drawText('I am shifted')
   *
   * // Move back to (0, 0)
   * page.resetPosition()
   *
   * // This text will not be shifted - it will be drawn at (0, 0)
   * page.drawText('I am not shifted')
   * ```
   */
  resetPosition() {
    this.getContentStream(false);
    this.x = 0;
    this.y = 0;
  }
  /**
   * Choose a default font for this page. The default font will be used whenever
   * text is drawn on this page and no font is specified. For example:
   * ```js
   * import { StandardFonts } from 'pdf-lib-plus-encrypt'
   *
   * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
   * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const courierFont = await pdfDoc.embedFont(StandardFonts.Courier)
   *
   * const page = pdfDoc.addPage()
   *
   * page.setFont(helveticaFont)
   * page.drawText('I will be drawn in Helvetica')
   *
   * page.setFont(timesRomanFont)
   * page.drawText('I will be drawn in Courier', { font: courierFont })
   * ```
   * @param font The default font to be used when drawing text on this page.
   */
  setFont(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.font = font;
    this.fontKey = addRandomSuffix(this.font.name);
    this.node.setFontDictionary(PDFName_default.of(this.fontKey), this.font.ref);
  }
  /**
   * Choose a default font size for this page. The default font size will be
   * used whenever text is drawn on this page and no font size is specified.
   * For example:
   * ```js
   * page.setFontSize(12)
   * page.drawText('I will be drawn in size 12')
   *
   * page.setFontSize(36)
   * page.drawText('I will be drawn in size 24', { fontSize: 24 })
   * ```
   * @param fontSize The default font size to be used when drawing text on this
   *                 page.
   */
  setFontSize(fontSize) {
    assertIs(fontSize, "fontSize", ["number"]);
    this.fontSize = fontSize;
  }
  /**
   * Choose a default font color for this page. The default font color will be
   * used whenever text is drawn on this page and no font color is specified.
   * For example:
   * ```js
   * import { rgb, cmyk, grayscale } from 'pdf-lib-plus-encrypt'
   *
   * page.setFontColor(rgb(0.97, 0.02, 0.97))
   * page.drawText('I will be drawn in pink')
   *
   * page.setFontColor(cmyk(0.4, 0.7, 0.39, 0.15))
   * page.drawText('I will be drawn in gray', { color: grayscale(0.5) })
   * ```
   * @param fontColor The default font color to be used when drawing text on
   *                  this page.
   */
  setFontColor(fontColor) {
    assertIs(fontColor, "fontColor", [[Object, "Color"]]);
    this.fontColor = fontColor;
  }
  /**
   * Choose a default line height for this page. The default line height will be
   * used whenever text is drawn on this page and no line height is specified.
   * For example:
   * ```js
   * page.setLineHeight(12);
   * page.drawText('These lines will be vertically \n separated by 12 units')
   *
   * page.setLineHeight(36);
   * page.drawText('These lines will be vertically \n separated by 24 units', {
   *   lineHeight: 24
   * })
   * ```
   * @param lineHeight The default line height to be used when drawing text on
   *                   this page.
   */
  setLineHeight(lineHeight) {
    assertIs(lineHeight, "lineHeight", ["number"]);
    this.lineHeight = lineHeight;
  }
  /**
   * Get the default position of this page. For example:
   * ```js
   * const { x, y } = page.getPosition()
   * ```
   * @returns The default position of the page.
   */
  getPosition() {
    return { x: this.x, y: this.y };
  }
  /**
   * Get the default x coordinate of this page. For example:
   * ```js
   * const x = page.getX()
   * ```
   * @returns The default x coordinate of the page.
   */
  getX() {
    return this.x;
  }
  /**
   * Get the default y coordinate of this page. For example:
   * ```js
   * const y = page.getY()
   * ```
   * @returns The default y coordinate of the page.
   */
  getY() {
    return this.y;
  }
  /**
   * Change the default position of this page. For example:
   * ```js
   * page.moveTo(0, 0)
   * page.drawText('I will be drawn at the origin')
   *
   * page.moveTo(0, 25)
   * page.drawText('I will be drawn 25 units up')
   *
   * page.moveTo(25, 25)
   * page.drawText('I will be drawn 25 units up and 25 units to the right')
   * ```
   * @param x The new default position on the x-axis for this page.
   * @param y The new default position on the y-axis for this page.
   */
  moveTo(x, y) {
    assertIs(x, "x", ["number"]);
    assertIs(y, "y", ["number"]);
    this.x = x;
    this.y = y;
  }
  /**
   * Change the default position of this page to be further down the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveDown(10)
   * page.drawText('I will be drawn at (50, 40)')
   * ```
   * @param yDecrease The amount by which the page's default position along the
   *                  y-axis should be decreased.
   */
  moveDown(yDecrease) {
    assertIs(yDecrease, "yDecrease", ["number"]);
    this.y -= yDecrease;
  }
  /**
   * Change the default position of this page to be further up the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveUp(10)
   * page.drawText('I will be drawn at (50, 60)')
   * ```
   * @param yIncrease The amount by which the page's default position along the
   *                  y-axis should be increased.
   */
  moveUp(yIncrease) {
    assertIs(yIncrease, "yIncrease", ["number"]);
    this.y += yIncrease;
  }
  /**
   * Change the default position of this page to be further left on the x-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveLeft(10)
   * page.drawText('I will be drawn at (40, 50)')
   * ```
   * @param xDecrease The amount by which the page's default position along the
   *                  x-axis should be decreased.
   */
  moveLeft(xDecrease) {
    assertIs(xDecrease, "xDecrease", ["number"]);
    this.x -= xDecrease;
  }
  /**
   * Change the default position of this page to be further right on the y-axis.
   * For example:
   * ```js
   * page.moveTo(50, 50)
   * page.drawText('I will be drawn at (50, 50)')
   *
   * page.moveRight(10)
   * page.drawText('I will be drawn at (60, 50)')
   * ```
   * @param xIncrease The amount by which the page's default position along the
   *                  x-axis should be increased.
   */
  moveRight(xIncrease) {
    assertIs(xIncrease, "xIncrease", ["number"]);
    this.x += xIncrease;
  }
  /**
   * Push one or more operators to the end of this page's current content
   * stream. For example:
   * ```js
   * import {
   *   pushGraphicsState,
   *   moveTo,
   *   lineTo,
   *   closePath,
   *   setFillingColor,
   *   rgb,
   *   fill,
   *   popGraphicsState,
   * } from 'pdf-lib-plus-encrypt'
   *
   * // Draw a green triangle in the lower-left corner of the page
   * page.pushOperators(
   *   pushGraphicsState(),
   *   moveTo(0, 0),
   *   lineTo(100, 0),
   *   lineTo(50, 100),
   *   closePath(),
   *   setFillingColor(rgb(0.0, 1.0, 0.0)),
   *   fill(),
   *   popGraphicsState(),
   * )
   * ```
   * @param operator The operators to be pushed.
   */
  pushOperators(...operator) {
    assertEachIs(operator, "operator", [[PDFOperator_default, "PDFOperator"]]);
    const contentStream = this.getContentStream();
    contentStream.push(...operator);
  }
  /**
   * Draw one or more lines of text on this page. For example:
   * ```js
   * import { StandardFonts, rgb } from 'pdf-lib-plus-encrypt'
   *
   * const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
   *
   * const page = pdfDoc.addPage()
   *
   * page.setFont(helveticaFont)
   *
   * page.moveTo(5, 200)
   * page.drawText('The Life of an Egg', { size: 36 })
   *
   * page.moveDown(36)
   * page.drawText('An Epic Tale of Woe', { size: 30 })
   *
   * page.drawText(
   *   `Humpty Dumpty sat on a wall \n` +
   *   `Humpty Dumpty had a great fall; \n` +
   *   `All the king's horses and all the king's men \n` +
   *   `Couldn't put Humpty together again. \n`,
   *   {
   *     x: 25,
   *     y: 100,
   *     font: timesRomanFont,
   *     size: 24,
   *     color: rgb(1, 0, 0),
   *     lineHeight: 24,
   *     opacity: 0.75,
   *   },
   * )
   * ```
   * @param text The text to be drawn.
   * @param options The options to be used when drawing the text.
   */
  drawText(text, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    assertIs(text, "text", ["string"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.font, "options.font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(options.size, "options.size", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.lineHeight, "options.lineHeight", ["number"]);
    assertOrUndefined(options.maxWidth, "options.maxWidth", ["number"]);
    assertOrUndefined(options.wordBreaks, "options.wordBreaks", [Array]);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const [originalFont] = this.getFont();
    if (options.font)
      this.setFont(options.font);
    const [font, fontKey] = this.getFont();
    const fontSize = options.size || this.fontSize;
    const wordBreaks = options.wordBreaks || this.doc.defaultWordBreaks;
    const textWidth = (t) => font.widthOfTextAtSize(t, fontSize);
    const lines = options.maxWidth === void 0 ? lineSplit(cleanText(text)) : breakTextIntoLines(text, wordBreaks, options.maxWidth, textWidth);
    const encodedLines = new Array(lines.length);
    for (let idx = 0, len = lines.length; idx < len; idx++) {
      encodedLines[idx] = font.encodeText(lines[idx]);
    }
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const contentStream = this.getContentStream();
    contentStream.push(...drawLinesOfText(encodedLines, {
      color: (_a = options.color) !== null && _a !== void 0 ? _a : this.fontColor,
      font: fontKey,
      size: fontSize,
      rotate: (_b = options.rotate) !== null && _b !== void 0 ? _b : degrees(0),
      xSkew: (_c = options.xSkew) !== null && _c !== void 0 ? _c : degrees(0),
      ySkew: (_d = options.ySkew) !== null && _d !== void 0 ? _d : degrees(0),
      x: (_e = options.x) !== null && _e !== void 0 ? _e : this.x,
      y: (_f = options.y) !== null && _f !== void 0 ? _f : this.y,
      lineHeight: (_g = options.lineHeight) !== null && _g !== void 0 ? _g : this.lineHeight,
      graphicsState: graphicsStateKey
    }));
    if (options.font)
      this.setFont(originalFont);
  }
  /**
   * Draw an image on this page. For example:
   * ```js
   * import { degrees } from 'pdf-lib-plus-encrypt'
   *
   * const jpgUrl = 'https://pdf-lib.js.org/assets/cat_riding_unicorn.jpg'
   * const jpgImageBytes = await fetch(jpgUrl).then((res) => res.arrayBuffer())
   *
   * const jpgImage = await pdfDoc.embedJpg(jpgImageBytes)
   * const jpgDims = jpgImage.scale(0.5)
   *
   * const page = pdfDoc.addPage()
   *
   * page.drawImage(jpgImage, {
   *   x: 25,
   *   y: 25,
   *   width: jpgDims.width,
   *   height: jpgDims.height,
   *   rotate: degrees(30),
   *   opacity: 0.75,
   * })
   * ```
   * @param image The image to be drawn.
   * @param options The options to be used when drawing the image.
   */
  drawImage(image, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g;
    assertIs(image, "image", [[PDFImage, "PDFImage"]]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const xObjectKey = addRandomSuffix("Image", 10);
    this.node.setXObject(PDFName_default.of(xObjectKey), image.ref);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const contentStream = this.getContentStream();
    contentStream.push(...drawImage(xObjectKey, {
      x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : image.size().width,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : image.size().height,
      rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : degrees(0),
      xSkew: (_f = options.xSkew) !== null && _f !== void 0 ? _f : degrees(0),
      ySkew: (_g = options.ySkew) !== null && _g !== void 0 ? _g : degrees(0),
      graphicsState: graphicsStateKey
    }));
  }
  /**
   * Draw an embedded PDF page on this page. For example:
   * ```js
   * import { degrees } from 'pdf-lib-plus-encrypt'
   *
   * const pdfDoc = await PDFDocument.create()
   * const page = pdfDoc.addPage()
   *
   * const sourcePdfUrl = 'https://pdf-lib.js.org/assets/with_large_page_count.pdf'
   * const sourcePdf = await fetch(sourcePdfUrl).then((res) => res.arrayBuffer())
   *
   * // Embed page 74 from the PDF
   * const [embeddedPage] = await pdfDoc.embedPdf(sourcePdf, 73)
   *
   * page.drawPage(embeddedPage, {
   *   x: 250,
   *   y: 200,
   *   xScale: 0.5,
   *   yScale: 0.5,
   *   rotate: degrees(30),
   *   opacity: 0.75,
   * })
   * ```
   *
   * The `options` argument accepts both `width`/`height` and `xScale`/`yScale`
   * as options. Since each of these options defines the size of the drawn page,
   * if both options are given, `width` and `height` take precedence and the
   * corresponding scale variants are ignored.
   *
   * @param embeddedPage The embedded page to be drawn.
   * @param options The options to be used when drawing the embedded page.
   */
  drawPage(embeddedPage, options = {}) {
    var _a, _b, _c, _d, _e;
    assertIs(embeddedPage, "embeddedPage", [
      [PDFEmbeddedPage, "PDFEmbeddedPage"]
    ]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.xScale, "options.xScale", ["number"]);
    assertOrUndefined(options.yScale, "options.yScale", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const xObjectKey = addRandomSuffix("EmbeddedPdfPage", 10);
    this.node.setXObject(PDFName_default.of(xObjectKey), embeddedPage.ref);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      blendMode: options.blendMode
    });
    const xScale = options.width !== void 0 ? options.width / embeddedPage.width : options.xScale !== void 0 ? options.xScale : 1;
    const yScale = options.height !== void 0 ? options.height / embeddedPage.height : options.yScale !== void 0 ? options.yScale : 1;
    const contentStream = this.getContentStream();
    contentStream.push(...drawPage(xObjectKey, {
      x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
      xScale,
      yScale,
      rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : degrees(0),
      xSkew: (_d = options.xSkew) !== null && _d !== void 0 ? _d : degrees(0),
      ySkew: (_e = options.ySkew) !== null && _e !== void 0 ? _e : degrees(0),
      graphicsState: graphicsStateKey
    }));
  }
  /**
   * Draw an SVG path on this page. For example:
   * ```js
   * import { rgb } from 'pdf-lib-plus-encrypt'
   *
   * const svgPath = 'M 0,20 L 100,160 Q 130,200 150,120 C 190,-40 200,200 300,150 L 400,90'
   *
   * // Draw path as black line
   * page.drawSvgPath(svgPath, { x: 25, y: 75 })
   *
   * // Change border style and opacity
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 275,
   *   borderColor: rgb(0.5, 0.5, 0.5),
   *   borderWidth: 2,
   *   borderOpacity: 0.75,
   * })
   *
   * // Set fill color and opacity
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 475,
   *   color: rgb(1.0, 0, 0),
   *   opacity: 0.75,
   * })
   *
   * // Draw 50% of original size
   * page.drawSvgPath(svgPath, {
   *   x: 25,
   *   y: 675,
   *   scale: 0.5,
   * })
   * ```
   * @param path The SVG path to be drawn.
   * @param options The options to be used when drawing the SVG path.
   */
  drawSvgPath(path, options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    assertIs(path, "path", ["string"]);
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.scale, "options.scale", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(options.borderLineCap, "options.borderLineCap", LineCapStyle);
    assertRangeOrUndefined(options.borderOpacity, "options.borderOpacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.borderColor = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(...drawSvgPath(path, {
      x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
      scale: options.scale,
      rotate: (_c = options.rotate) !== null && _c !== void 0 ? _c : degrees(0),
      color: (_d = options.color) !== null && _d !== void 0 ? _d : void 0,
      borderColor: (_e = options.borderColor) !== null && _e !== void 0 ? _e : void 0,
      borderWidth: (_f = options.borderWidth) !== null && _f !== void 0 ? _f : 0,
      borderDashArray: (_g = options.borderDashArray) !== null && _g !== void 0 ? _g : void 0,
      borderDashPhase: (_h = options.borderDashPhase) !== null && _h !== void 0 ? _h : void 0,
      borderLineCap: (_j = options.borderLineCap) !== null && _j !== void 0 ? _j : void 0,
      graphicsState: graphicsStateKey
    }));
  }
  /**
   * Draw a line on this page. For example:
   * ```js
   * import { rgb } from 'pdf-lib-plus-encrypt'
   *
   * page.drawLine({
   *   start: { x: 25, y: 75 },
   *   end: { x: 125, y: 175 },
   *   thickness: 2,
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the line.
   */
  drawLine(options) {
    var _a, _b, _c, _d, _e;
    assertIs(options.start, "options.start", [
      [Object, "{ x: number, y: number }"]
    ]);
    assertIs(options.end, "options.end", [
      [Object, "{ x: number, y: number }"]
    ]);
    assertIs(options.start.x, "options.start.x", ["number"]);
    assertIs(options.start.y, "options.start.y", ["number"]);
    assertIs(options.end.x, "options.end.x", ["number"]);
    assertIs(options.end.y, "options.end.y", ["number"]);
    assertOrUndefined(options.thickness, "options.thickness", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertOrUndefined(options.dashArray, "options.dashArray", [Array]);
    assertOrUndefined(options.dashPhase, "options.dashPhase", ["number"]);
    assertIsOneOfOrUndefined(options.lineCap, "options.lineCap", LineCapStyle);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      borderOpacity: options.opacity,
      blendMode: options.blendMode
    });
    if (!("color" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(...drawLine({
      start: options.start,
      end: options.end,
      thickness: (_a = options.thickness) !== null && _a !== void 0 ? _a : 1,
      color: (_b = options.color) !== null && _b !== void 0 ? _b : void 0,
      dashArray: (_c = options.dashArray) !== null && _c !== void 0 ? _c : void 0,
      dashPhase: (_d = options.dashPhase) !== null && _d !== void 0 ? _d : void 0,
      lineCap: (_e = options.lineCap) !== null && _e !== void 0 ? _e : void 0,
      graphicsState: graphicsStateKey
    }));
  }
  /**
   * Draw a rectangle on this page. For example:
   * ```js
   * import { degrees, grayscale, rgb } from 'pdf-lib-plus-encrypt'
   *
   * page.drawRectangle({
   *   x: 25,
   *   y: 75,
   *   width: 250,
   *   height: 75,
   *   rotate: degrees(-15),
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the rectangle.
   */
  drawRectangle(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.width, "options.width", ["number"]);
    assertOrUndefined(options.height, "options.height", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.xSkew, "options.xSkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.ySkew, "options.ySkew", [[Object, "Rotation"]]);
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(options.borderLineCap, "options.borderLineCap", LineCapStyle);
    assertRangeOrUndefined(options.borderOpacity, "options.borderOpacity", 0, 1);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(...drawRectangle({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
      width: (_c = options.width) !== null && _c !== void 0 ? _c : 150,
      height: (_d = options.height) !== null && _d !== void 0 ? _d : 100,
      rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : degrees(0),
      xSkew: (_f = options.xSkew) !== null && _f !== void 0 ? _f : degrees(0),
      ySkew: (_g = options.ySkew) !== null && _g !== void 0 ? _g : degrees(0),
      borderWidth: (_h = options.borderWidth) !== null && _h !== void 0 ? _h : 0,
      color: (_j = options.color) !== null && _j !== void 0 ? _j : void 0,
      borderColor: (_k = options.borderColor) !== null && _k !== void 0 ? _k : void 0,
      borderDashArray: (_l = options.borderDashArray) !== null && _l !== void 0 ? _l : void 0,
      borderDashPhase: (_m = options.borderDashPhase) !== null && _m !== void 0 ? _m : void 0,
      graphicsState: graphicsStateKey,
      borderLineCap: (_o = options.borderLineCap) !== null && _o !== void 0 ? _o : void 0
    }));
  }
  /**
   * Draw a square on this page. For example:
   * ```js
   * import { degrees, grayscale, rgb } from 'pdf-lib-plus-encrypt'
   *
   * page.drawSquare({
   *   x: 25,
   *   y: 75,
   *   size: 100,
   *   rotate: degrees(-15),
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the square.
   */
  drawSquare(options = {}) {
    const { size } = options;
    assertOrUndefined(size, "size", ["number"]);
    this.drawRectangle(Object.assign(Object.assign({}, options), { width: size, height: size }));
  }
  /**
   * Draw an ellipse on this page. For example:
   * ```js
   * import { grayscale, rgb } from 'pdf-lib-plus-encrypt'
   *
   * page.drawEllipse({
   *   x: 200,
   *   y: 75,
   *   xScale: 100,
   *   yScale: 50,
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the ellipse.
   */
  drawEllipse(options = {}) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    assertOrUndefined(options.x, "options.x", ["number"]);
    assertOrUndefined(options.y, "options.y", ["number"]);
    assertOrUndefined(options.xScale, "options.xScale", ["number"]);
    assertOrUndefined(options.yScale, "options.yScale", ["number"]);
    assertOrUndefined(options.rotate, "options.rotate", [[Object, "Rotation"]]);
    assertOrUndefined(options.color, "options.color", [[Object, "Color"]]);
    assertRangeOrUndefined(options.opacity, "opacity.opacity", 0, 1);
    assertOrUndefined(options.borderColor, "options.borderColor", [
      [Object, "Color"]
    ]);
    assertRangeOrUndefined(options.borderOpacity, "options.borderOpacity", 0, 1);
    assertOrUndefined(options.borderWidth, "options.borderWidth", ["number"]);
    assertOrUndefined(options.borderDashArray, "options.borderDashArray", [
      Array
    ]);
    assertOrUndefined(options.borderDashPhase, "options.borderDashPhase", [
      "number"
    ]);
    assertIsOneOfOrUndefined(options.borderLineCap, "options.borderLineCap", LineCapStyle);
    assertIsOneOfOrUndefined(options.blendMode, "options.blendMode", BlendMode);
    const graphicsStateKey = this.maybeEmbedGraphicsState({
      opacity: options.opacity,
      borderOpacity: options.borderOpacity,
      blendMode: options.blendMode
    });
    if (!("color" in options) && !("borderColor" in options)) {
      options.color = rgb(0, 0, 0);
    }
    const contentStream = this.getContentStream();
    contentStream.push(...drawEllipse({
      x: (_a = options.x) !== null && _a !== void 0 ? _a : this.x,
      y: (_b = options.y) !== null && _b !== void 0 ? _b : this.y,
      xScale: (_c = options.xScale) !== null && _c !== void 0 ? _c : 100,
      yScale: (_d = options.yScale) !== null && _d !== void 0 ? _d : 100,
      rotate: (_e = options.rotate) !== null && _e !== void 0 ? _e : void 0,
      color: (_f = options.color) !== null && _f !== void 0 ? _f : void 0,
      borderColor: (_g = options.borderColor) !== null && _g !== void 0 ? _g : void 0,
      borderWidth: (_h = options.borderWidth) !== null && _h !== void 0 ? _h : 0,
      borderDashArray: (_j = options.borderDashArray) !== null && _j !== void 0 ? _j : void 0,
      borderDashPhase: (_k = options.borderDashPhase) !== null && _k !== void 0 ? _k : void 0,
      borderLineCap: (_l = options.borderLineCap) !== null && _l !== void 0 ? _l : void 0,
      graphicsState: graphicsStateKey
    }));
  }
  /**
   * Draw a circle on this page. For example:
   * ```js
   * import { grayscale, rgb } from 'pdf-lib-plus-encrypt'
   *
   * page.drawCircle({
   *   x: 200,
   *   y: 150,
   *   size: 100,
   *   borderWidth: 5,
   *   borderColor: grayscale(0.5),
   *   color: rgb(0.75, 0.2, 0.2),
   *   opacity: 0.5,
   *   borderOpacity: 0.75,
   * })
   * ```
   * @param options The options to be used when drawing the ellipse.
   */
  drawCircle(options = {}) {
    const { size = 100 } = options;
    assertOrUndefined(size, "size", ["number"]);
    this.drawEllipse(Object.assign(Object.assign({}, options), { xScale: size, yScale: size }));
  }
  getFont() {
    if (!this.font || !this.fontKey) {
      const font = this.doc.embedStandardFont(StandardFonts.Helvetica);
      this.setFont(font);
    }
    return [this.font, this.fontKey];
  }
  getContentStream(useExisting = true) {
    if (useExisting && this.contentStream)
      return this.contentStream;
    this.contentStream = this.createContentStream();
    this.contentStreamRef = this.doc.context.register(this.contentStream);
    this.node.addContentStream(this.contentStreamRef);
    return this.contentStream;
  }
  createContentStream(...operators) {
    const dict = this.doc.context.obj({});
    const contentStream = PDFContentStream_default.of(dict, operators);
    return contentStream;
  }
  maybeEmbedGraphicsState(options) {
    const { opacity, borderOpacity, blendMode } = options;
    if (opacity === void 0 && borderOpacity === void 0 && blendMode === void 0) {
      return void 0;
    }
    const key = addRandomSuffix("GS", 10);
    const graphicsState = this.doc.context.obj({
      Type: "ExtGState",
      ca: opacity,
      CA: borderOpacity,
      BM: blendMode
    });
    this.node.setExtGState(PDFName_default.of(key), graphicsState);
    return key;
  }
};
PDFPage.of = (leafNode, ref, doc) => new PDFPage(leafNode, ref, doc);
PDFPage.create = (doc) => {
  assertIs(doc, "doc", [[PDFDocument, "PDFDocument"]]);
  const dummyRef = PDFRef_default.of(-1);
  const pageLeaf = PDFPageLeaf_default.withContextAndParent(doc.context, dummyRef);
  const pageRef = doc.context.register(pageLeaf);
  return new PDFPage(pageLeaf, pageRef, doc);
};

// node_modules/pdf-lib-plus-encrypt/es/api/form/PDFButton.js
var PDFButton = class extends PDFField {
  constructor(acroPushButton, ref, doc) {
    super(acroPushButton, ref, doc);
    assertIs(acroPushButton, "acroButton", [
      [PDFAcroPushButton_default, "PDFAcroPushButton"]
    ]);
    this.acroField = acroPushButton;
  }
  /**
   * Display an image inside the bounds of this button's widgets. For example:
   * ```js
   * const pngImage = await pdfDoc.embedPng(...)
   * const button = form.getButton('some.button.field')
   * button.setImage(pngImage, ImageAlignment.Center)
   * ```
   * This will update the appearances streams for each of this button's widgets.
   * @param image The image that should be displayed.
   * @param alignment The alignment of the image.
   */
  setImage(image, alignment = ImageAlignment.Center) {
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const streamRef = this.createImageAppearanceStream(widget, image, alignment);
      this.updateWidgetAppearances(widget, { normal: streamRef });
    }
    this.markAsClean();
  }
  /**
   * Set the font size for this field. Larger font sizes will result in larger
   * text being displayed when PDF readers render this button. Font sizes may
   * be integer or floating point numbers. Supplying a negative font size will
   * cause this method to throw an error.
   *
   * For example:
   * ```js
   * const button = form.getButton('some.button.field')
   * button.setFontSize(4)
   * button.setFontSize(15.7)
   * ```
   *
   * > This method depends upon the existence of a default appearance
   * > (`/DA`) string. If this field does not have a default appearance string,
   * > or that string does not contain a font size (via the `Tf` operator),
   * > then this method will throw an error.
   *
   * @param fontSize The font size to be used when rendering text in this field.
   */
  setFontSize(fontSize) {
    assertPositive(fontSize, "fontSize");
    this.acroField.setFontSize(fontSize);
    this.markAsDirty();
  }
  /**
   * Show this button on the specified page with the given text. For example:
   * ```js
   * const ubuntuFont = await pdfDoc.embedFont(ubuntuFontBytes)
   * const page = pdfDoc.addPage()
   *
   * const form = pdfDoc.getForm()
   * const button = form.createButton('some.button.field')
   *
   * button.addToPage('Do Stuff', page, {
   *   x: 50,
   *   y: 75,
   *   width: 200,
   *   height: 100,
   *   textColor: rgb(1, 0, 0),
   *   backgroundColor: rgb(0, 1, 0),
   *   borderColor: rgb(0, 0, 1),
   *   borderWidth: 2,
   *   rotate: degrees(90),
   *   font: ubuntuFont,
   * })
   * ```
   * This will create a new widget for this button field.
   * @param text The text to be displayed for this button widget.
   * @param page The page to which this button widget should be added.
   * @param options The options to be used when adding this button widget.
   */
  addToPage(text, page, options) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    assertOrUndefined(text, "text", ["string"]);
    assertOrUndefined(page, "page", [[PDFPage, "PDFPage"]]);
    assertFieldAppearanceOptions(options);
    const widget = this.createWidget({
      x: ((_a = options === null || options === void 0 ? void 0 : options.x) !== null && _a !== void 0 ? _a : 0) - ((_b = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _b !== void 0 ? _b : 0) / 2,
      y: ((_c = options === null || options === void 0 ? void 0 : options.y) !== null && _c !== void 0 ? _c : 0) - ((_d = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _d !== void 0 ? _d : 0) / 2,
      width: (_e = options === null || options === void 0 ? void 0 : options.width) !== null && _e !== void 0 ? _e : 100,
      height: (_f = options === null || options === void 0 ? void 0 : options.height) !== null && _f !== void 0 ? _f : 50,
      textColor: (_g = options === null || options === void 0 ? void 0 : options.textColor) !== null && _g !== void 0 ? _g : rgb(0, 0, 0),
      backgroundColor: (_h = options === null || options === void 0 ? void 0 : options.backgroundColor) !== null && _h !== void 0 ? _h : rgb(0.75, 0.75, 0.75),
      borderColor: options === null || options === void 0 ? void 0 : options.borderColor,
      borderWidth: (_j = options === null || options === void 0 ? void 0 : options.borderWidth) !== null && _j !== void 0 ? _j : 0,
      rotate: (_k = options === null || options === void 0 ? void 0 : options.rotate) !== null && _k !== void 0 ? _k : degrees(0),
      caption: text,
      hidden: options === null || options === void 0 ? void 0 : options.hidden
    });
    const widgetRef = this.doc.context.register(widget.dict);
    this.acroField.addWidget(widgetRef);
    const font = (_l = options === null || options === void 0 ? void 0 : options.font) !== null && _l !== void 0 ? _l : this.doc.getForm().getDefaultFont();
    this.updateWidgetAppearance(widget, font);
    page.node.addAnnot(widgetRef);
  }
  /**
   * Returns `true` if this button has been marked as dirty, or if any of this
   * button's widgets do not have an appearance stream. For example:
   * ```js
   * const button = form.getButton('some.button.field')
   * if (button.needsAppearancesUpdate()) console.log('Needs update')
   * ```
   * @returns Whether or not this button needs an appearance update.
   */
  needsAppearancesUpdate() {
    var _a;
    if (this.isDirty())
      return true;
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      const hasAppearances = ((_a = widget.getAppearances()) === null || _a === void 0 ? void 0 : _a.normal) instanceof PDFStream_default;
      if (!hasAppearances)
        return true;
    }
    return false;
  }
  /**
   * Update the appearance streams for each of this button's widgets using
   * the default appearance provider for buttons. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const button = form.getButton('some.button.field')
   * button.defaultUpdateAppearances(helvetica)
   * ```
   * @param font The font to be used for creating the appearance streams.
   */
  defaultUpdateAppearances(font) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    this.updateAppearances(font);
  }
  /**
   * Update the appearance streams for each of this button's widgets using
   * the given appearance provider. If no `provider` is passed, the default
   * appearance provider for buttons will be used. For example:
   * ```js
   * const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
   * const button = form.getButton('some.button.field')
   * button.updateAppearances(helvetica, (field, widget, font) => {
   *   ...
   *   return {
   *     normal: drawButton(...),
   *     down: drawButton(...),
   *   }
   * })
   * ```
   * @param font The font to be used for creating the appearance streams.
   * @param provider Optionally, the appearance provider to be used for
   *                 generating the contents of the appearance streams.
   */
  updateAppearances(font, provider) {
    assertIs(font, "font", [[PDFFont, "PDFFont"]]);
    assertOrUndefined(provider, "provider", [Function]);
    const widgets = this.acroField.getWidgets();
    for (let idx = 0, len = widgets.length; idx < len; idx++) {
      const widget = widgets[idx];
      this.updateWidgetAppearance(widget, font, provider);
    }
  }
  updateWidgetAppearance(widget, font, provider) {
    const apProvider = provider !== null && provider !== void 0 ? provider : defaultButtonAppearanceProvider;
    const appearances = normalizeAppearance(apProvider(this, widget, font));
    this.updateWidgetAppearanceWithFont(widget, font, appearances);
  }
};
PDFButton.of = (acroPushButton, ref, doc) => new PDFButton(acroPushButton, ref, doc);
export {
  AFRelationship,
  AcroButtonFlags,
  AcroChoiceFlags,
  AcroFieldFlags,
  AcroTextFlags,
  AnnotationFlags,
  AppearanceCharacteristics_default as AppearanceCharacteristics,
  BlendMode,
  Cache_default as Cache,
  CharCodes_default as CharCodes,
  ColorTypes,
  CombedTextLayoutError,
  CorruptPageTreeError,
  CustomFontEmbedder_default as CustomFontEmbedder,
  CustomFontSubsetEmbedder_default as CustomFontSubsetEmbedder,
  Duplex,
  EncryptedPDFError,
  ExceededMaxLengthError,
  FieldAlreadyExistsError,
  FieldExistsAsNonTerminalError,
  FileEmbedder_default as FileEmbedder,
  FontkitNotRegisteredError,
  ForeignPageError,
  ImageAlignment,
  IndexOutOfBoundsError,
  InvalidAcroFieldValueError,
  InvalidFieldNamePartError,
  InvalidMaxLengthError,
  InvalidPDFDateStringError,
  InvalidTargetIndexError,
  JpegEmbedder_default as JpegEmbedder,
  LineCapStyle,
  LineJoinStyle,
  MethodNotImplementedError,
  MissingCatalogError,
  MissingDAEntryError,
  MissingKeywordError,
  MissingOnValueCheckError,
  MissingPDFHeaderError,
  MissingPageContentsEmbeddingError,
  MissingTfOperatorError,
  MultiSelectValueError,
  NextByteAssertionError,
  NoSuchFieldError,
  NonFullScreenPageMode,
  NumberParsingError,
  PDFAcroButton_default as PDFAcroButton,
  PDFAcroCheckBox_default as PDFAcroCheckBox,
  PDFAcroChoice_default as PDFAcroChoice,
  PDFAcroComboBox_default as PDFAcroComboBox,
  PDFAcroField_default as PDFAcroField,
  PDFAcroForm_default as PDFAcroForm,
  PDFAcroListBox_default as PDFAcroListBox,
  PDFAcroNonTerminal_default as PDFAcroNonTerminal,
  PDFAcroPushButton_default as PDFAcroPushButton,
  PDFAcroRadioButton_default as PDFAcroRadioButton,
  PDFAcroSignature_default as PDFAcroSignature,
  PDFAcroTerminal_default as PDFAcroTerminal,
  PDFAcroText_default as PDFAcroText,
  PDFAnnotation_default as PDFAnnotation,
  PDFArray_default as PDFArray,
  PDFArrayIsNotRectangleError,
  PDFBool_default as PDFBool,
  PDFButton,
  PDFCatalog_default as PDFCatalog,
  PDFCheckBox,
  PDFContentStream_default as PDFContentStream,
  PDFContext_default as PDFContext,
  PDFCrossRefSection_default as PDFCrossRefSection,
  PDFCrossRefStream_default as PDFCrossRefStream,
  PDFDict_default as PDFDict,
  PDFDocument,
  PDFDropdown,
  PDFEmbeddedPage,
  PDFField,
  PDFFlateStream_default as PDFFlateStream,
  PDFFont,
  PDFForm,
  PDFHeader_default as PDFHeader,
  PDFHexString_default as PDFHexString,
  PDFImage,
  PDFInvalidObject_default as PDFInvalidObject,
  PDFInvalidObjectParsingError,
  PDFJavaScript,
  PDFName_default as PDFName,
  PDFNull_default as PDFNull,
  PDFNumber_default as PDFNumber,
  PDFObject_default as PDFObject,
  PDFObjectCopier_default as PDFObjectCopier,
  PDFObjectParser_default as PDFObjectParser,
  PDFObjectParsingError,
  PDFObjectStream_default as PDFObjectStream,
  PDFObjectStreamParser_default as PDFObjectStreamParser,
  PDFOperator_default as PDFOperator,
  PDFOperatorNames_default as PDFOperatorNames,
  PDFOptionList,
  PDFPage,
  PDFPageEmbedder_default as PDFPageEmbedder,
  PDFPageLeaf_default as PDFPageLeaf,
  PDFPageTree_default as PDFPageTree,
  PDFParser_default as PDFParser,
  PDFParsingError,
  PDFRadioGroup,
  PDFRawStream_default as PDFRawStream,
  PDFRef_default as PDFRef,
  PDFSignature,
  PDFStream_default as PDFStream,
  PDFStreamParsingError,
  PDFStreamWriter_default as PDFStreamWriter,
  PDFString_default as PDFString,
  PDFTextField,
  PDFTrailer_default as PDFTrailer,
  PDFTrailerDict_default as PDFTrailerDict,
  PDFWidgetAnnotation_default as PDFWidgetAnnotation,
  PDFWriter_default as PDFWriter,
  PDFXRefStreamParser_default as PDFXRefStreamParser,
  PageEmbeddingMismatchedContextError,
  PageSizes,
  ParseSpeeds,
  PngEmbedder_default as PngEmbedder,
  PrintScaling,
  PrivateConstructorError,
  ReadingDirection,
  RemovePageFromEmptyDocumentError,
  ReparseError,
  RichTextFieldReadError,
  RotationTypes,
  StalledParserError,
  StandardFontEmbedder_default as StandardFontEmbedder,
  StandardFontValues,
  StandardFonts,
  TextAlignment,
  TextRenderingMode,
  Uint8ArrToHex,
  UnbalancedParenthesisError,
  UnexpectedFieldTypeError,
  UnexpectedObjectTypeError,
  UnrecognizedStreamTypeError,
  UnsupportedEncodingError,
  ViewerPreferences_default as ViewerPreferences,
  addRandomSuffix,
  adjustDimsForRotation,
  appendBezierCurve,
  appendQuadraticCurve,
  arrayAsString,
  asNumber,
  asPDFName,
  asPDFNumber,
  assertEachIs,
  assertInteger,
  assertIs,
  assertIsOneOf,
  assertIsOneOfOrUndefined,
  assertIsSubset,
  assertMultiple,
  assertOrUndefined,
  assertPositive,
  assertRange,
  assertRangeOrUndefined,
  assertSecurity,
  backtick,
  beginMarkedContent,
  beginText,
  breakTextIntoLines,
  byAscendingId,
  bytesFor,
  canBeConvertedToUint8Array,
  charAtIndex,
  charFromCode,
  charFromHexCode,
  charSplit,
  cleanText,
  clip,
  clipEvenOdd,
  closePath,
  cmyk,
  colorToComponents,
  componentsToColor,
  concatTransformationMatrix,
  copyStringIntoBuffer,
  createPDFAcroField,
  createPDFAcroFields,
  createTypeErrorMsg,
  createValueErrorMsg,
  decodeFromBase64,
  decodeFromBase64DataUri,
  decodePDFRawStream,
  defaultButtonAppearanceProvider,
  defaultCheckBoxAppearanceProvider,
  defaultDropdownAppearanceProvider,
  defaultOptionListAppearanceProvider,
  defaultRadioGroupAppearanceProvider,
  defaultTextFieldAppearanceProvider,
  degrees,
  degreesToRadians,
  drawButton,
  drawCheckBox,
  drawCheckMark,
  drawEllipse,
  drawEllipsePath,
  drawImage,
  drawLine,
  drawLinesOfText,
  drawObject,
  drawOptionList,
  drawPage,
  drawRadioButton,
  drawRectangle,
  drawSvgPath,
  drawText,
  drawTextField,
  drawTextLines,
  encodeToBase64,
  endMarkedContent,
  endPath,
  endText,
  error,
  escapeRegExp,
  escapedNewlineChars,
  fill,
  fillAndStroke,
  findLastMatch,
  getType,
  grayscale,
  hasSurrogates,
  hasUtf16BOM,
  highSurrogate,
  isNewlineChar,
  isStandardFont,
  isType,
  isWithinBMP,
  last,
  layoutCombedText,
  layoutMultilineText,
  layoutSinglelineText,
  lineSplit,
  lineTo,
  lowSurrogate,
  mergeIntoTypedArray,
  mergeLines,
  mergeUint8Arrays,
  moveText,
  moveTo,
  newlineChars,
  nextLine,
  normalizeAppearance,
  numberToString,
  padStart,
  parseDate,
  pdfDocEncodingDecode,
  pluckIndices,
  popGraphicsState,
  pushGraphicsState,
  radians,
  radiansToDegrees,
  range,
  rectangle,
  rectanglesAreEqual,
  reduceRotation,
  restoreDashPattern,
  reverseArray,
  rgb,
  rotateAndSkewTextDegreesAndTranslate,
  rotateAndSkewTextRadiansAndTranslate,
  rotateDegrees,
  rotateInPlace,
  rotateRadians,
  rotateRectangle,
  scale,
  setCharacterSpacing,
  setCharacterSqueeze,
  setDashPattern,
  setFillingCmykColor,
  setFillingColor,
  setFillingGrayscaleColor,
  setFillingRgbColor,
  setFontAndSize,
  setGraphicsState,
  setLineCap,
  setLineHeight,
  setLineJoin,
  setLineWidth,
  setStrokingCmykColor,
  setStrokingColor,
  setStrokingGrayscaleColor,
  setStrokingRgbColor,
  setTextMatrix,
  setTextRenderingMode,
  setTextRise,
  setWordSpacing,
  showText,
  singleQuote,
  sizeInBytes,
  skewDegrees,
  skewRadians,
  sortedUniq,
  square,
  stroke,
  sum,
  toCharCode,
  toCodePoint,
  toDegrees,
  toHexString,
  toHexStringOfMinLength,
  toRadians,
  toUint8Array,
  translate,
  typedArrayFor,
  utf16Decode,
  utf16Encode,
  utf8Encode,
  values,
  waitForTick
};
//# sourceMappingURL=pdf-lib-plus-encrypt.js.map
