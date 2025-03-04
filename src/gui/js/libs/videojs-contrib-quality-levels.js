/*! @name videojs-contrib-quality-levels @version 2.1.0 @license Apache-2.0 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t(require("video.js"), require("global/document")))
    : "function" == typeof define && define.amd
    ? define(["video.js", "global/document"], t)
    : (e.videojsContribQualityLevels = t(e.videojs, e.document));
})(this, function (e, t) {
  "use strict";
  function n(e) {
    if (void 0 === e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  (e = e && e.hasOwnProperty("default") ? e.default : e),
    (t = t && t.hasOwnProperty("default") ? t.default : t);
  var r = (function (r) {
    var i, l;
    function o() {
      var i,
        l = n(n((i = r.call(this) || this)));
      if (e.browser.IS_IE8)
        for (var s in ((l = t.createElement("custom")), o.prototype))
          "constructor" !== s && (l[s] = o.prototype[s]);
      return (
        (l.levels_ = []),
        (l.selectedIndex_ = -1),
        Object.defineProperty(l, "selectedIndex", {
          get: function () {
            return l.selectedIndex_;
          },
        }),
        Object.defineProperty(l, "length", {
          get: function () {
            return l.levels_.length;
          },
        }),
        l || n(i)
      );
    }
    (l = r),
      ((i = o).prototype = Object.create(l.prototype)),
      (i.prototype.constructor = i),
      (i.__proto__ = l);
    var s = o.prototype;
    return (
      (s.addQualityLevel = function (n) {
        var r = this.getQualityLevelById(n.id);
        if (r) return r;
        var i = this.levels_.length;
        return (
          (r = new (function n(r) {
            var i = this;
            if (e.browser.IS_IE8)
              for (var l in ((i = t.createElement("custom")), n.prototype))
                "constructor" !== l && (i[l] = n.prototype[l]);
            return (
              (i.id = r.id),
              (i.label = i.id),
              (i.width = r.width),
              (i.height = r.height),
              (i.bitrate = r.bandwidth),
              (i.enabled_ = r.enabled),
              Object.defineProperty(i, "enabled", {
                get: function () {
                  return i.enabled_();
                },
                set: function (e) {
                  i.enabled_(e);
                },
              }),
              i
            );
          })(n)),
          "" + i in this ||
            Object.defineProperty(this, i, {
              get: function () {
                return this.levels_[i];
              },
            }),
          this.levels_.push(r),
          this.trigger({ qualityLevel: r, type: "addqualitylevel" }),
          r
        );
      }),
      (s.removeQualityLevel = function (e) {
        for (var t = null, n = 0, r = this.length; n < r; n++)
          if (this[n] === e) {
            (t = this.levels_.splice(n, 1)[0]),
              this.selectedIndex_ === n
                ? (this.selectedIndex_ = -1)
                : this.selectedIndex_ > n && this.selectedIndex_--;
            break;
          }
        return (
          t && this.trigger({ qualityLevel: e, type: "removequalitylevel" }), t
        );
      }),
      (s.getQualityLevelById = function (e) {
        for (var t = 0, n = this.length; t < n; t++) {
          var r = this[t];
          if (r.id === e) return r;
        }
        return null;
      }),
      (s.dispose = function () {
        (this.selectedIndex_ = -1), (this.levels_.length = 0);
      }),
      o
    );
  })(e.EventTarget);
  for (var i in ((r.prototype.allowedEvents_ = {
    change: "change",
    addqualitylevel: "addqualitylevel",
    removequalitylevel: "removequalitylevel",
  }),
  r.prototype.allowedEvents_))
    r.prototype["on" + i] = null;
  var l = function (t) {
    return (
      (n = this),
      e.mergeOptions({}, t),
      (i = n.qualityLevels),
      (l = new r()),
      n.on("dispose", function e() {
        l.dispose(), (n.qualityLevels = i), n.off("dispose", e);
      }),
      (n.qualityLevels = function () {
        return l;
      }),
      (n.qualityLevels.VERSION = "2.1.0"),
      l
    );
    var n, i, l;
  };
  return (
    (e.registerPlugin || e.plugin)("qualityLevels", l), (l.VERSION = "2.1.0"), l
  );
});
