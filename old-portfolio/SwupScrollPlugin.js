(function t(e, n) {
	if (typeof exports === "object" && typeof module === "object")
		module.exports = n();
	else if (typeof define === "function" && define.amd) define([], n);
	else if (typeof exports === "object") exports["SwupScrollPlugin"] = n();
	else e["SwupScrollPlugin"] = n();
})(window, function() {
	return (function(t) {
		var e = {};
		function n(o) {
			if (e[o]) {
				return e[o].exports;
			}
			var i = (e[o] = { i: o, l: false, exports: {} });
			t[o].call(i.exports, i, i.exports, n);
			i.l = true;
			return i.exports;
		}
		n.m = t;
		n.c = e;
		n.d = function(t, e, o) {
			if (!n.o(t, e)) {
				Object.defineProperty(t, e, { enumerable: true, get: o });
			}
		};
		n.r = function(t) {
			if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				Object.defineProperty(t, Symbol.toStringTag, {
					value: "Module"
				});
			}
			Object.defineProperty(t, "__esModule", { value: true });
		};
		n.t = function(t, e) {
			if (e & 1) t = n(t);
			if (e & 8) return t;
			if (e & 4 && typeof t === "object" && t && t.__esModule) return t;
			var o = Object.create(null);
			n.r(o);
			Object.defineProperty(o, "default", { enumerable: true, value: t });
			if (e & 2 && typeof t != "string")
				for (var i in t)
					n.d(
						o,
						i,
						function(e) {
							return t[e];
						}.bind(null, i)
					);
			return o;
		};
		n.n = function(t) {
			var e =
				t && t.__esModule
					? function e() {
							return t["default"];
					  }
					: function e() {
							return t;
					  };
			n.d(e, "a", e);
			return e;
		};
		n.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e);
		};
		n.p = "";
		return n((n.s = 0));
	})([
		function(t, e, n) {
			"use strict";
			var o = n(1);
			var i = r(o);
			function r(t) {
				return t && t.__esModule ? t : { default: t };
			}
			t.exports = i.default;
		},
		function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: true });
			var o =
				Object.assign ||
				function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) {
							if (Object.prototype.hasOwnProperty.call(n, o)) {
								t[o] = n[o];
							}
						}
					}
					return t;
				};
			var i = (function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var o = e[n];
						o.enumerable = o.enumerable || false;
						o.configurable = true;
						if ("value" in o) o.writable = true;
						Object.defineProperty(t, o.key, o);
					}
				}
				return function(e, n, o) {
					if (n) t(e.prototype, n);
					if (o) t(e, o);
					return e;
				};
			})();
			var r = n(2);
			var l = u(r);
			var a = n(3);
			var s = u(a);
			function u(t) {
				return t && t.__esModule ? t : { default: t };
			}
			function c(t, e) {
				if (!(t instanceof e)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			function f(t, e) {
				if (!t) {
					throw new ReferenceError(
						"this hasn't been initialised - super() hasn't been called"
					);
				}
				return e && (typeof e === "object" || typeof e === "function")
					? e
					: t;
			}
			function p(t, e) {
				if (typeof e !== "function" && e !== null) {
					throw new TypeError(
						"Super expression must either be null or a function, not " +
							typeof e
					);
				}
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: false,
						writable: true,
						configurable: true
					}
				});
				if (e)
					Object.setPrototypeOf
						? Object.setPrototypeOf(t, e)
						: (t.__proto__ = e);
			}
			var d = (function(t) {
				p(e, t);
				function e(t) {
					c(this, e);
					var n = f(
						this,
						(e.__proto__ || Object.getPrototypeOf(e)).call(this)
					);
					n.name = "ScrollPlugin";
					n.onSamePage = function() {
						n.swup.scrollTo(0);
					};
					n.onSamePageWithHash = function(t) {
						var e = t.delegateTarget;
						var o = document.querySelector(e.hash);
						var i =
							o.getBoundingClientRect().top + window.pageYOffset;
						n.swup.scrollTo(i);
					};
					n.onTransitionStart = function(t) {
						if (
							n.options.doScrollingRightAway &&
							!n.swup.scrollToElement
						) {
							n.doScrolling(t);
						}
					};
					n.onContentReplaced = function(t) {
						if (
							!n.options.doScrollingRightAway ||
							n.swup.scrollToElement
						) {
							n.doScrolling(t);
						}
					};
					n.doScrolling = function(t) {
						var e = n.swup;
						if (!t || e.options.animateHistoryBrowsing) {
							if (e.scrollToElement != null) {
								var o = document.querySelector(
									e.scrollToElement
								);
								if (o != null) {
									var i =
										o.getBoundingClientRect().top +
										window.pageYOffset;
									e.scrollTo(i);
								} else {
									console.warn(
										"Element " +
											e.scrollToElement +
											" not found"
									);
								}
								e.scrollToElement = null;
							} else {
								e.scrollTo(0);
							}
						}
					};
					var i = {
						doScrollingRightAway: false,
						animateScroll: true,
						scrollFriction: 0.3,
						scrollAcceleration: 0.04
					};
					n.options = o({}, i, t);
					return n;
				}
				i(e, [
					{
						key: "mount",
						value: function t() {
							var e = this;
							var n = this.swup;
							n._handlers.scrollDone = [];
							n._handlers.scrollStart = [];
							this.scrl = new s.default({
								onStart: function t() {
									return n.triggerEvent("scrollStart");
								},
								onEnd: function t() {
									return n.triggerEvent("scrollDone");
								},
								onCancel: function t() {
									return n.triggerEvent("scrollDone");
								},
								friction: this.options.scrollFriction,
								acceleration: this.options.scrollAcceleration
							});
							n.scrollTo = function(t) {
								if (e.options.animateScroll) {
									e.scrl.scrollTo(t);
								} else {
									n.triggerEvent("scrollStart");
									window.scrollTo(0, t);
									n.triggerEvent("scrollDone");
								}
							};
							if (n.options.animateHistoryBrowsing) {
								window.history.scrollRestoration = "manual";
							}
							n.on("samePage", this.onSamePage);
							n.on("samePageWithHash", this.onSamePageWithHash);
							n.on("transitionStart", this.onTransitionStart);
							n.on("contentReplaced", this.onContentReplaced);
						}
					},
					{
						key: "unmount",
						value: function t() {
							this.swup.scrollTo = null;
							delete this.scrl;
							this.scrl = null;
							this.swup.off("samePage", this.onSamePage);
							this.swup.off(
								"samePageWithHash",
								this.onSamePageWithHash
							);
							this.swup.off(
								"transitionStart",
								this.onTransitionStart
							);
							this.swup.off(
								"contentReplaced",
								this.onContentReplaced
							);
							this.swup._handlers.scrollDone = null;
							this.swup._handlers.scrollStart = null;
							window.history.scrollRestoration = "auto";
						}
					}
				]);
				return e;
			})(l.default);
			e.default = d;
		},
		function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: true });
			var o = (function() {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var o = e[n];
						o.enumerable = o.enumerable || false;
						o.configurable = true;
						if ("value" in o) o.writable = true;
						Object.defineProperty(t, o.key, o);
					}
				}
				return function(e, n, o) {
					if (n) t(e.prototype, n);
					if (o) t(e, o);
					return e;
				};
			})();
			function i(t, e) {
				if (!(t instanceof e)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			var r = (function() {
				function t() {
					i(this, t);
					this.isSwupPlugin = true;
				}
				o(t, [
					{ key: "mount", value: function t() {} },
					{ key: "unmount", value: function t() {} }
				]);
				return t;
			})();
			e.default = r;
		},
		function(t, e, n) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: true });
			var o =
				Object.assign ||
				function(t) {
					for (var e = 1; e < arguments.length; e++) {
						var n = arguments[e];
						for (var o in n) {
							if (Object.prototype.hasOwnProperty.call(n, o)) {
								t[o] = n[o];
							}
						}
					}
					return t;
				};
			function i(t, e) {
				if (!(t instanceof e)) {
					throw new TypeError("Cannot call a class as a function");
				}
			}
			var r = function t(e) {
				var n = this;
				i(this, t);
				this._raf = null;
				this._positionY = 0;
				this._velocityY = 0;
				this._targetPositionY = 0;
				this._targetPositionYWithOffset = 0;
				this._direction = 0;
				this.scrollTo = function(t) {
					if (t && t.nodeType) {
						n._targetPositionY = Math.round(
							t.getBoundingClientRect().top + window.pageYOffset
						);
					} else if (
						parseInt(n._targetPositionY) === n._targetPositionY
					) {
						n._targetPositionY = Math.round(t);
					} else {
						console.error(
							"Argument must be a number or an element."
						);
						return;
					}
					if (
						n._targetPositionY >
						document.documentElement.scrollHeight -
							window.innerHeight
					) {
						n._targetPositionY =
							document.documentElement.scrollHeight -
							window.innerHeight;
					}
					n._positionY =
						document.body.scrollTop ||
						document.documentElement.scrollTop;
					n._direction = n._positionY > n._targetPositionY ? -1 : 1;
					n._targetPositionYWithOffset =
						n._targetPositionY + n._direction;
					n._velocityY = 0;
					if (n._positionY !== n._targetPositionY) {
						n.options.onStart();
						n._animate();
					} else {
						n.options.onAlreadyAtPositions();
					}
				};
				this._animate = function() {
					var t = n._update();
					n._render();
					if (
						(n._direction === 1 &&
							n._targetPositionY > n._positionY) ||
						(n._direction === -1 &&
							n._targetPositionY < n._positionY)
					) {
						n._raf = requestAnimationFrame(n._animate);
						n.options.onTick();
					} else {
						n._positionY = n._targetPositionY;
						n._render();
						n._raf = null;
						n.options.onTick();
						n.options.onEnd();
					}
				};
				this._update = function() {
					var t = n._targetPositionYWithOffset - n._positionY;
					var e = t * n.options.acceleration;
					n._velocityY += e;
					n._velocityY *= n.options.friction;
					n._positionY += n._velocityY;
					return Math.abs(t);
				};
				this._render = function() {
					window.scrollTo(0, n._positionY);
				};
				var r = {
					onAlreadyAtPositions: function t() {},
					onCancel: function t() {},
					onEnd: function t() {},
					onStart: function t() {},
					onTick: function t() {},
					friction: 0.7,
					acceleration: 0.04
				};
				this.options = o({}, r, e);
				if (e && e.friction) {
					this.options.friction = 1 - e.friction;
				}
				window.addEventListener(
					"mousewheel",
					function(t) {
						if (n._raf) {
							n.options.onCancel();
							cancelAnimationFrame(n._raf);
							n._raf = null;
						}
					},
					{ passive: true }
				);
			};
			e.default = r;
		}
	]);
});
