!(function (t, e) {
	"object" == typeof exports && "undefined" != typeof module
		? e(exports)
		: "function" == typeof define && define.amd
		? define(["exports"], e)
		: e(
				((t =
					"undefined" != typeof globalThis ? globalThis : t || self).markerjs2 =
					{})
		  );
})(this, function (t) {
	"use strict";
	/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ var e =
		function (t, i) {
			return (e =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (t, e) {
						t.__proto__ = e;
					}) ||
				function (t, e) {
					for (var i in e)
						Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
				})(t, i);
		};
	function i(t, i) {
		function o() {
			this.constructor = t;
		}
		e(t, i),
			(t.prototype =
				null === i ? Object.create(i) : ((o.prototype = i.prototype), new o()));
	}
	function o(t, e, i, o) {
		return new (i || (i = Promise))(function (s, r) {
			function n(t) {
				try {
					h(o.next(t));
				} catch (t) {
					r(t);
				}
			}
			function a(t) {
				try {
					h(o.throw(t));
				} catch (t) {
					r(t);
				}
			}
			function h(t) {
				var e;
				t.done
					? s(t.value)
					: ((e = t.value),
					  e instanceof i
							? e
							: new i(function (t) {
									t(e);
							  })).then(n, a);
			}
			h((o = o.apply(t, e || [])).next());
		});
	}
	function s(t, e) {
		var i,
			o,
			s,
			r,
			n = {
				label: 0,
				sent: function () {
					if (1 & s[0]) throw s[1];
					return s[1];
				},
				trys: [],
				ops: [],
			};
		return (
			(r = { next: a(0), throw: a(1), return: a(2) }),
			"function" == typeof Symbol &&
				(r[Symbol.iterator] = function () {
					return this;
				}),
			r
		);
		function a(r) {
			return function (a) {
				return (function (r) {
					if (i) throw new TypeError("Generator is already executing.");
					for (; n; )
						try {
							if (
								((i = 1),
								o &&
									(s =
										2 & r[0]
											? o.return
											: r[0]
											? o.throw || ((s = o.return) && s.call(o), 0)
											: o.next) &&
									!(s = s.call(o, r[1])).done)
							)
								return s;
							switch (((o = 0), s && (r = [2 & r[0], s.value]), r[0])) {
								case 0:
								case 1:
									s = r;
									break;
								case 4:
									return n.label++, { value: r[1], done: !1 };
								case 5:
									n.label++, (o = r[1]), (r = [0]);
									continue;
								case 7:
									(r = n.ops.pop()), n.trys.pop();
									continue;
								default:
									if (
										!((s = n.trys),
										(s = s.length > 0 && s[s.length - 1]) ||
											(6 !== r[0] && 2 !== r[0]))
									) {
										n = 0;
										continue;
									}
									if (3 === r[0] && (!s || (r[1] > s[0] && r[1] < s[3]))) {
										n.label = r[1];
										break;
									}
									if (6 === r[0] && n.label < s[1]) {
										(n.label = s[1]), (s = r);
										break;
									}
									if (s && n.label < s[2]) {
										(n.label = s[2]), n.ops.push(r);
										break;
									}
									s[2] && n.ops.pop(), n.trys.pop();
									continue;
							}
							r = e.call(t, n);
						} catch (t) {
							(r = [6, t]), (o = 0);
						} finally {
							i = s = 0;
						}
					if (5 & r[0]) throw r[1];
					return { value: r[0] ? r[1] : void 0, done: !0 };
				})([r, a]);
			};
		}
	}
	function r() {
		for (var t = 0, e = 0, i = arguments.length; e < i; e++)
			t += arguments[e].length;
		var o = Array(t),
			s = 0;
		for (e = 0; e < i; e++)
			for (var r = arguments[e], n = 0, a = r.length; n < a; n++, s++)
				o[s] = r[n];
		return o;
	}
	var n = (function () {
			function t() {}
			return (
				(t.createDefs = function () {
					return document.createElementNS("http://www.w3.org/2000/svg", "defs");
				}),
				(t.setAttributes = function (t, e) {
					for (var i = 0, o = e; i < o.length; i++) {
						var s = o[i],
							r = s[0],
							n = s[1];
						t.setAttribute(r, n);
					}
				}),
				(t.createRect = function (e, i, o) {
					var s = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"rect"
					);
					return (
						s.setAttribute("width", e.toString()),
						s.setAttribute("height", i.toString()),
						o && t.setAttributes(s, o),
						s
					);
				}),
				(t.createLine = function (e, i, o, s, r) {
					var n = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"line"
					);
					return (
						n.setAttribute("x1", e.toString()),
						n.setAttribute("y1", i.toString()),
						n.setAttribute("x2", o.toString()),
						n.setAttribute("y2", s.toString()),
						r && t.setAttributes(n, r),
						n
					);
				}),
				(t.createPolygon = function (e, i) {
					var o = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"polygon"
					);
					return o.setAttribute("points", e), i && t.setAttributes(o, i), o;
				}),
				(t.createCircle = function (e, i) {
					var o = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"circle"
					);
					return (
						o.setAttribute("cx", (e / 2).toString()),
						o.setAttribute("cy", (e / 2).toString()),
						o.setAttribute("r", e.toString()),
						i && t.setAttributes(o, i),
						o
					);
				}),
				(t.createEllipse = function (e, i, o) {
					var s = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"ellipse"
					);
					return (
						s.setAttribute("cx", (e / 2).toString()),
						s.setAttribute("cy", (i / 2).toString()),
						s.setAttribute("rx", (e / 2).toString()),
						s.setAttribute("ry", (i / 2).toString()),
						o && t.setAttributes(s, o),
						s
					);
				}),
				(t.createGroup = function (e) {
					var i = document.createElementNS("http://www.w3.org/2000/svg", "g");
					return e && t.setAttributes(i, e), i;
				}),
				(t.createTransform = function () {
					return document
						.createElementNS("http://www.w3.org/2000/svg", "svg")
						.createSVGTransform();
				}),
				(t.createMarker = function (e, i, o, s, r, n, a) {
					var h = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"marker"
					);
					return (
						t.setAttributes(h, [
							["id", e],
							["orient", i],
							["markerWidth", o.toString()],
							["markerHeight", s.toString()],
							["refX", r.toString()],
							["refY", n.toString()],
						]),
						h.appendChild(a),
						h
					);
				}),
				(t.createText = function (e) {
					var i = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"text"
					);
					return (
						i.setAttribute("x", "0"),
						i.setAttribute("y", "0"),
						e && t.setAttributes(i, e),
						i
					);
				}),
				(t.createTSpan = function (e, i) {
					var o = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"tspan"
					);
					return (o.textContent = e), i && t.setAttributes(o, i), o;
				}),
				(t.createImage = function (e) {
					var i = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"image"
					);
					return e && t.setAttributes(i, e), i;
				}),
				(t.createPoint = function (t, e) {
					var i = document
						.createElementNS("http://www.w3.org/2000/svg", "svg")
						.createSVGPoint();
					return (i.x = t), (i.y = e), i;
				}),
				(t.createPath = function (e, i) {
					var o = document.createElementNS(
						"http://www.w3.org/2000/svg",
						"path"
					);
					return o.setAttribute("d", e), i && t.setAttributes(o, i), o;
				}),
				t
			);
		})(),
		a = (function () {
			function t() {}
			return (
				(t.addKey = function (e) {
					t.key = e;
				}),
				Object.defineProperty(t, "isLicensed", {
					get: function () {
						return (
							!!t.key &&
							new RegExp(
								/^MJS2-[A-Z][0-9]{3}-[A-Z][0-9]{3}-[0-9]{4}$/,
								"i"
							).test(t.key)
						);
					},
					enumerable: !1,
					configurable: !0,
				}),
				t
			);
		})(),
		h = (function () {
			function t() {
				(this.naturalSize = !1),
					(this.imageType = "image/png"),
					(this.markersOnly = !1);
			}
			return (
				(t.prototype.rasterize = function (t, e, i) {
					var o = this;
					return new Promise(function (s) {
						var r = void 0 !== i ? i : document.createElement("canvas");
						null === t && ((o.markersOnly = !0), (o.naturalSize = !1));
						var n = document.createElementNS(
							"http://www.w3.org/2000/svg",
							"svg"
						);
						n.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
							n.setAttribute("width", e.width.baseVal.valueAsString),
							n.setAttribute("height", e.height.baseVal.valueAsString),
							n.setAttribute(
								"viewBox",
								"0 0 " +
									e.viewBox.baseVal.width.toString() +
									" " +
									e.viewBox.baseVal.height.toString()
							),
							(n.innerHTML = e.innerHTML),
							!0 === o.naturalSize
								? ((n.width.baseVal.value = t.naturalWidth),
								  (n.height.baseVal.value = t.naturalHeight))
								: void 0 !== o.width &&
								  void 0 !== o.height &&
								  ((n.width.baseVal.value = o.width),
								  (n.height.baseVal.value = o.height)),
							(r.width = n.width.baseVal.value),
							(r.height = n.height.baseVal.value);
						var a = n.outerHTML,
							h = r.getContext("2d");
						!0 !== o.markersOnly && h.drawImage(t, 0, 0, r.width, r.height);
						var l = window.URL,
							p = new Image(r.width, r.height);
						p.setAttribute("crossOrigin", "anonymous");
						var c = new Blob([a], { type: "image/svg+xml" }),
							d = l.createObjectURL(c);
						(p.onload = function () {
							h.drawImage(p, 0, 0), l.revokeObjectURL(d);
							var t = r.toDataURL(o.imageType, o.imageQuality);
							s(t);
						}),
							(p.src = d);
					});
				}),
				t
			);
		})(),
		l = function () {},
		p = (function () {
			function t(t) {
				(this._classNamePrefixBase = "__markerjs2_"),
					(this.classes = []),
					(this.rules = []),
					(this.settings = this.defaultSettings),
					(this._classNamePrefix = this._classNamePrefixBase + "_" + t + "_");
			}
			return (
				Object.defineProperty(t.prototype, "classNamePrefixBase", {
					get: function () {
						return this._classNamePrefixBase;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "classNamePrefix", {
					get: function () {
						return this._classNamePrefix;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "defaultSettings", {
					get: function () {
						return {
							canvasBackgroundColor: "#ffffff",
							toolbarBackgroundColor: "#111111",
							toolbarBackgroundHoverColor: "#333333",
							toolbarColor: "#eeeeee",
							toolbarHeight: 40,
							toolboxColor: "#eeeeee",
							toolboxAccentColor: "#3080c3",
							undoButtonVisible: !0,
							redoButtonVisible: !1,
							zoomButtonVisible: !1,
							zoomOutButtonVisible: !1,
							clearButtonVisible: !1,
							resultButtonBlockVisible: !0,
							logoPosition: "left",
						};
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "fadeInAnimationClassName", {
					get: function () {
						return this.classNamePrefix + "fade_in";
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "fadeOutAnimationClassName", {
					get: function () {
						return this.classNamePrefix + "fade_out";
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.addClass = function (t) {
					return (
						void 0 === this.styleSheet && this.addStyleSheet(),
						(t.name = "" + this.classNamePrefix + t.localName),
						this.classes.push(t),
						this.styleSheet.sheet.insertRule(
							"." + t.name + " {" + t.style + "}",
							this.styleSheet.sheet.cssRules.length
						),
						t
					);
				}),
				(t.prototype.addRule = function (t) {
					void 0 === this.styleSheet && this.addStyleSheet(),
						this.rules.push(t),
						this.styleSheet.sheet.insertRule(
							t.selector + " {" + t.style + "}",
							this.styleSheet.sheet.cssRules.length
						);
				}),
				(t.prototype.addStyleSheet = function () {
					var t;
					(this.styleSheet = document.createElement("style")),
						(null !== (t = this.styleSheetRoot) && void 0 !== t
							? t
							: document.head
						).appendChild(this.styleSheet),
						this.addRule(
							new c(
								"." + this.classNamePrefix + " h3",
								"font-family: sans-serif"
							)
						),
						this.addRule(
							new c(
								"@keyframes " +
									this.classNamePrefix +
									"_fade_in_animation_frames",
								"\n        from {\n          opacity: 0;\n        }\n        to {\n          opacity: 1;\n        }\n    "
							)
						),
						this.addRule(
							new c(
								"@keyframes " +
									this.classNamePrefix +
									"_fade_out_animation_frames",
								"\n        from {\n          opacity: 1;\n        }\n        to {\n          opacity: 0;\n        }\n    "
							)
						),
						this.addClass(
							new d(
								"fade_in",
								"\n      animation-duration: 0.3s;\n      animation-name: " +
									this.classNamePrefix +
									"_fade_in_animation_frames;\n    "
							)
						),
						this.addClass(
							new d(
								"fade_out",
								"\n      animation-duration: 0.3s;\n      animation-name: " +
									this.classNamePrefix +
									"_fade_out_animation_frames;\n    "
							)
						);
				}),
				(t.prototype.removeStyleSheet = function () {
					var t;
					this.styleSheet &&
						((null !== (t = this.styleSheetRoot) && void 0 !== t
							? t
							: document.head
						).removeChild(this.styleSheet),
						(this.styleSheet = void 0));
				}),
				t
			);
		})(),
		c = function (t, e) {
			(this.selector = t), (this.style = e);
		},
		d = function (t, e) {
			(this.localName = t), (this.style = e);
		},
		u = (function () {
			function t(t, e, i, o, s) {
				(this.buttons = []),
					(this.markerButtons = []),
					(this.buttonClickListeners = []),
					(this.markerjsContainer = t),
					(this.displayMode = e),
					(this.markerItems = i),
					(this.uiStyleSettings = o),
					(this.styles = s),
					this.addStyles(),
					(this.adjustLayout = this.adjustLayout.bind(this)),
					(this.overflowButtonClicked = this.overflowButtonClicked.bind(this)),
					(this.setCurrentMarker = this.setCurrentMarker.bind(this));
			}
			return (
				(t.prototype.show = function (t) {
					var e = this;
					(this.uiContainer = document.createElement("div")),
						(this.uiContainer.style.visibility = t),
						(this.uiContainer.className =
							this.toolbarStyleClass.name +
							" " +
							this.styles.fadeInAnimationClassName +
							" " +
							(this.uiStyleSettings.toolbarStyleColorsClassName
								? this.uiStyleSettings.toolbarStyleColorsClassName
								: this.toolbarStyleColorsClass.name));
					var i = document.createElement("div");
					(i.className = this.toolbarBlockStyleClass.name),
						(i.style.whiteSpace = "nowrap"),
						this.uiContainer.appendChild(i),
						this.addActionButton(
							i,
							'<svg viewBox="0 0 24 24"><path d="M10.07 14.27a.997.997 0 011.33.48l2.3 4.99 1.8-.85-2.31-4.98c-.24-.5-.02-1.1.48-1.33l.28-.08 2.3-.45L8 5.12V15.9l1.82-1.47.25-.16m3.57 7.7a.99.99 0 01-1.33-.47l-2.18-4.74-2.51 2.02c-.17.14-.38.22-.62.22a1 1 0 01-1-1V3a1 1 0 011-1c.24 0 .47.09.64.23l.01-.01 11.49 9.64a1.001 1.001 0 01-.44 1.75l-3.16.62 2.2 4.73c.26.5.02 1.09-.48 1.32l-3.62 1.69z"/></svg>',
							"select"
						),
						this.addActionButton(
							i,
							'<svg viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 002 2h10a2 2 0 002-2V6h1V4h-5V3H9M7 6h10v13H7V6m2 2v9h2V8H9m4 0v9h2V8h-2z"/></svg>',
							"delete"
						),
						this.uiStyleSettings.clearButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M19.36 2.72l1.42 1.42-5.72 5.71c1.07 1.54 1.22 3.39.32 4.59L9.06 8.12c1.2-.9 3.05-.75 4.59.32l5.71-5.72M5.93 17.57c-2.01-2.01-3.24-4.41-3.58-6.65l4.88-2.09 7.44 7.44-2.09 4.88c-2.24-.34-4.64-1.57-6.65-3.58z"/></svg>',
								"clear"
							),
						this.uiStyleSettings.undoButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>',
								"undo"
							),
						this.uiStyleSettings.redoButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16a8.002 8.002 0 017.6-5.5c1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"/></svg>',
								"redo"
							),
						this.uiStyleSettings.zoomButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M15.5 14l5 5-1.5 1.5-5-5v-.79l-.27-.28A6.471 6.471 0 019.5 16 6.5 6.5 0 013 9.5 6.5 6.5 0 019.5 3 6.5 6.5 0 0116 9.5c0 1.61-.59 3.09-1.57 4.23l.28.27h.79m-6 0C12 14 14 12 14 9.5S12 5 9.5 5 5 7 5 9.5 7 14 9.5 14m2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"/></svg>',
								"zoom"
							),
						this.uiStyleSettings.zoomButtonVisible &&
							this.uiStyleSettings.zoomOutButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 009.5 3 6.5 6.5 0 003 9.5 6.5 6.5 0 009.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 5 1.5-1.5-5-5m-6 0C7 14 5 12 5 9.5S7 5 9.5 5 14 7 14 9.5 12 14 9.5 14M7 9h5v1H7V9z"/></svg>',
								"zoom-out"
							),
						this.uiStyleSettings.notesButtonVisible &&
							this.addActionButton(
								i,
								'<svg viewBox="0 0 24 24"><path d="M18.13 12l1.26-1.26c.44-.44 1-.68 1.61-.74V9l-6-6H5c-1.11 0-2 .89-2 2v14a2 2 0 002 2h6v-1.87l.13-.13H5V5h7v7h6.13M14 4.5l5.5 5.5H14V4.5m5.13 9.33l2.04 2.04L15.04 22H13v-2.04l6.13-6.13m3.72.36l-.98.98-2.04-2.04.98-.98c.19-.2.52-.2.72 0l1.32 1.32c.2.2.2.53 0 .72z"/></svg>',
								"notes"
							),
						(this.markerButtonBlock = document.createElement("div")),
						(this.markerButtonBlock.className =
							this.toolbarBlockStyleClass.name),
						(this.markerButtonBlock.style.flexGrow = "2"),
						(this.markerButtonBlock.style.textAlign = "center"),
						this.uiContainer.appendChild(this.markerButtonBlock),
						(this.markerButtonOverflowBlock = document.createElement("div")),
						(this.markerButtonOverflowBlock.className =
							this.toolbarOverflowBlockStyleClass.name +
							" " +
							(this.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName
								? this.uiStyleSettings.toolbarOverflowBlockStyleColorsClassName
								: this.toolbarOverflowBlockStyleColorsClass.name)),
						(this.markerButtonOverflowBlock.style.display = "none"),
						this.uiContainer.appendChild(this.markerButtonOverflowBlock),
						this.markerItems &&
							(this.markerItems.forEach(function (t) {
								var i = document.createElement("div");
								(i.className = "" + e.toolbarButtonStyleClass.name),
									i.setAttribute("data-type-name", t.typeName),
									(i.innerHTML = t.icon),
									i.addEventListener("click", function () {
										e.markerToolbarButtonClicked(i, t);
									}),
									e.buttons.push(i),
									e.markerButtons.push(i);
							}),
							(this.overflowButton = document.createElement("div")),
							(this.overflowButton.className =
								this.toolbarButtonStyleClass.name +
								" " +
								(this.uiStyleSettings.toolbarButtonStyleColorsClassName
									? this.uiStyleSettings.toolbarButtonStyleColorsClassName
									: this.toolbarButtonStyleColorsClass.name)),
							(this.overflowButton.innerHTML =
								'<svg viewBox="0 0 24 24"><path d="M12 16a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2m0-6a2 2 0 012 2 2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2z"/></svg>'),
							this.overflowButton.addEventListener(
								"click",
								this.overflowButtonClicked
							),
							this.markerButtonBlock.appendChild(this.overflowButton));
					var o = document.createElement("div");
					(o.className = this.toolbarBlockStyleClass.name),
						(o.style.whiteSpace = "nowrap"),
						(o.style.display =
							!1 !== this.uiStyleSettings.resultButtonBlockVisible
								? ""
								: "none"),
						this.uiContainer.appendChild(o),
						this.addActionButton(
							o,
							'<svg viewBox="0 0 24 24"><path d="M9 20.42l-6.21-6.21 2.83-2.83L9 14.77l9.88-9.89 2.83 2.83L9 20.42z"/></svg>',
							"render"
						),
						this.addActionButton(
							o,
							'<svg viewBox="0 0 24 24"><path d="M20 6.91L17.09 4 12 9.09 6.91 4 4 6.91 9.09 12 4 17.09 6.91 20 12 14.91 17.09 20 20 17.09 14.91 12 20 6.91z"/></svg>',
							"close"
						),
						this.markerjsContainer.appendChild(this.uiContainer),
						this.setSelectMode(),
						this.setCurrentMarker(),
						this.adjustLayout();
				}),
				(t.prototype.addButtonClickListener = function (t) {
					this.buttonClickListeners.push(t);
				}),
				(t.prototype.removeButtonClickListener = function (t) {
					this.buttonClickListeners.indexOf(t) > -1 &&
						this.buttonClickListeners.splice(
							this.buttonClickListeners.indexOf(t),
							1
						);
				}),
				(t.prototype.setSelectMode = function () {
					this.resetButtonStyles(), this.setActiveButton(this.buttons[0]);
				}),
				(t.prototype.adjustLayout = function () {
					if (this.markerButtons && this.markerButtons.length > 0) {
						var t =
							Math.floor(
								this.markerButtonBlock.clientWidth /
									this.uiStyleSettings.toolbarHeight
							) - 1;
						(this.markerButtonBlock.innerHTML = ""),
							(this.markerButtonOverflowBlock.innerHTML = "");
						for (var e = 0; e < this.markerButtons.length; e++)
							e < t || (e === t && this.markerButtons.length - 1 === t)
								? this.markerButtonBlock.appendChild(this.markerButtons[e])
								: (e === t &&
										this.markerButtonBlock.appendChild(this.overflowButton),
								  this.markerButtonOverflowBlock.appendChild(
										this.markerButtons[e]
								  ));
					}
				}),
				(t.prototype.overflowButtonClicked = function () {
					"none" !== this.markerButtonOverflowBlock.style.display
						? ((this.markerButtonOverflowBlock.className =
								this.markerButtonOverflowBlock.className.replace(
									this.styles.fadeInAnimationClassName,
									""
								)),
						  (this.markerButtonOverflowBlock.style.display = "none"))
						: ((this.markerButtonOverflowBlock.className +=
								" " + this.styles.fadeInAnimationClassName),
						  (this.markerButtonOverflowBlock.style.top =
								this.uiContainer.offsetTop +
								this.overflowButton.offsetHeight +
								"px"),
						  (this.markerButtonOverflowBlock.style.right =
								this.uiContainer.offsetWidth -
								this.overflowButton.offsetLeft -
								this.overflowButton.offsetWidth +
								2 * this.uiContainer.offsetLeft +
								"px"),
						  (this.markerButtonOverflowBlock.style.display = "inline-block"));
				}),
				(t.prototype.resetButtonStyles = function () {
					var t = this;
					this.buttons.forEach(function (e) {
						(e.className = e.className
							.replace(
								t.uiStyleSettings.toolbarButtonStyleColorsClassName
									? t.uiStyleSettings.toolbarButtonStyleColorsClassName
									: t.toolbarButtonStyleColorsClass.name,
								""
							)
							.trim()),
							(e.className = e.className
								.replace(
									t.uiStyleSettings.toolbarActiveButtonStyleColorsClassName
										? t.uiStyleSettings.toolbarActiveButtonStyleColorsClassName
										: t.toolbarActiveButtonStyleColorsClass.name,
									""
								)
								.trim()),
							(e.className +=
								" " +
								(t.uiStyleSettings.toolbarButtonStyleColorsClassName
									? t.uiStyleSettings.toolbarButtonStyleColorsClassName
									: t.toolbarButtonStyleColorsClass.name));
					});
				}),
				(t.prototype.addActionButton = function (t, e, i) {
					var o = this,
						s = document.createElement("div");
					switch (
						((s.className = "" + this.toolbarButtonStyleClass.name),
						(s.innerHTML = e),
						s.setAttribute("data-action", i),
						s.addEventListener("click", function () {
							o.actionToolbarButtonClicked(s, i);
						}),
						i)
					) {
						case "select":
							s.style.fill = this.uiStyleSettings.selectButtonColor;
							break;
						case "delete":
						case "clear":
							s.style.fill = this.uiStyleSettings.deleteButtonColor;
							break;
						case "undo":
						case "redo":
							s.style.fill = this.uiStyleSettings.selectButtonColor;
							break;
						case "render":
							s.style.fill = this.uiStyleSettings.okButtonColor;
							break;
						case "close":
							s.style.fill = this.uiStyleSettings.closeButtonColor;
					}
					t.appendChild(s), this.buttons.push(s);
				}),
				(t.prototype.addStyles = function () {
					(this.toolbarStyleClass = this.styles.addClass(
						new d(
							"toolbar",
							"\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;      \n      height: " +
								this.uiStyleSettings.toolbarHeight +
								"px;\n      box-sizing: content-box;\n      " +
								("inline" === this.displayMode
									? "border-top-left-radius: " +
									  Math.round(this.uiStyleSettings.toolbarHeight / 10) +
									  "px;"
									: "") +
								"\n      " +
								("inline" === this.displayMode
									? "border-top-right-radius: " +
									  Math.round(this.uiStyleSettings.toolbarHeight / 10) +
									  "px;"
									: "") +
								"\n      overflow: hidden;\n    "
						)
					)),
						(this.toolbarStyleColorsClass = this.styles.addClass(
							new d(
								"toolbar_colors",
								"\n      background-color: " +
									this.uiStyleSettings.toolbarBackgroundColor +
									";\n      box-shadow: 0px 3px rgba(33, 33, 33, 0.1);\n    "
							)
						)),
						(this.toolbarBlockStyleClass = this.styles.addClass(
							new d(
								"toolbar-block",
								"\n        display: inline-block;\n        box-sizing: content-box;\n    "
							)
						)),
						(this.toolbarOverflowBlockStyleClass = this.styles.addClass(
							new d(
								"toolbar-overflow-block",
								"\n        position: absolute;\n        top: " +
									this.uiStyleSettings.toolbarHeight +
									"px;\n        max-width: " +
									2 * this.uiStyleSettings.toolbarHeight +
									"px;\n        z-index: 10;\n        box-sizing: content-box;\n      "
							)
						)),
						(this.toolbarOverflowBlockStyleColorsClass = this.styles.addClass(
							new d(
								"toolbar-overflow-block_colors",
								"\n        background-color: " +
									this.uiStyleSettings.toolbarBackgroundColor +
									";\n      "
							)
						));
					var t = this.uiStyleSettings.toolbarHeight / 4;
					(this.toolbarButtonStyleClass = this.styles.addClass(
						new d(
							"toolbar_button",
							"\n      display: inline-block;\n      width: " +
								(this.uiStyleSettings.toolbarHeight - 2 * t) +
								"px;\n      height: " +
								(this.uiStyleSettings.toolbarHeight - 2 * t) +
								"px;\n      padding: " +
								t +
								"px;\n      box-sizing: content-box;\n    "
						)
					)),
						(this.toolbarButtonStyleColorsClass = this.styles.addClass(
							new d(
								"toolbar_button_colors",
								"\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n    "
							)
						)),
						(this.toolbarActiveButtonStyleColorsClass = this.styles.addClass(
							new d(
								"toolbar_active_button",
								"\n      fill: " +
									this.uiStyleSettings.toolbarColor +
									";\n      background-color: " +
									this.uiStyleSettings.toolbarBackgroundHoverColor +
									"\n    "
							)
						)),
						this.styles.addRule(
							new c(
								"." + this.toolbarButtonStyleClass.name + " svg",
								"\n      height: " +
									this.uiStyleSettings.toolbarHeight / 2 +
									"px;\n    "
							)
						),
						this.styles.addRule(
							new c(
								"." + this.toolbarButtonStyleColorsClass.name + ":hover",
								"\n        background-color: " +
									this.uiStyleSettings.toolbarBackgroundHoverColor +
									"\n    "
							)
						);
				}),
				(t.prototype.markerToolbarButtonClicked = function (t, e) {
					this.setActiveButton(t),
						this.buttonClickListeners &&
							this.buttonClickListeners.length > 0 &&
							this.buttonClickListeners.forEach(function (t) {
								return t("marker", e);
							}),
						(this.markerButtonOverflowBlock.style.display = "none");
				}),
				(t.prototype.actionToolbarButtonClicked = function (t, e) {
					this.buttonClickListeners &&
						this.buttonClickListeners.length > 0 &&
						this.buttonClickListeners.forEach(function (t) {
							return t("action", e);
						}),
						(this.markerButtonOverflowBlock.style.display = "none"),
						this.setActiveButton(this.buttons[0]);
				}),
				(t.prototype.setActiveButton = function (t) {
					this.resetButtonStyles(),
						(t.className = t.className
							.replace(
								this.uiStyleSettings.toolbarButtonStyleColorsClassName
									? this.uiStyleSettings.toolbarButtonStyleColorsClassName
									: this.toolbarButtonStyleColorsClass.name,
								""
							)
							.trim()),
						(t.className +=
							" " +
							(this.uiStyleSettings.toolbarActiveButtonStyleColorsClassName
								? this.uiStyleSettings.toolbarActiveButtonStyleColorsClassName
								: this.toolbarActiveButtonStyleColorsClass.name));
				}),
				(t.prototype.setActiveMarkerButton = function (t) {
					var e = this.markerButtons.find(function (e) {
						return e.getAttribute("data-type-name") === t;
					});
					e && this.setActiveButton(e);
				}),
				(t.prototype.setCurrentMarker = function (t) {
					var e = this;
					(this.currentMarker = t),
						this.buttons
							.filter(function (t) {
								return /delete|notes/.test(t.getAttribute("data-action"));
							})
							.forEach(function (t) {
								void 0 === e.currentMarker
									? ((t.style.fillOpacity = "0.4"),
									  (t.style.pointerEvents = "none"))
									: ((t.style.fillOpacity = "1"),
									  (t.style.pointerEvents = "all"));
							});
				}),
				t
			);
		})(),
		y = (function () {
			function t(t, e, i, o) {
				(this.panels = []),
					(this.panelButtons = []),
					(this.markerjsContainer = t),
					(this.displayMode = e),
					(this.uiStyleSettings = i),
					(this.styles = o),
					(this.panelButtonClick = this.panelButtonClick.bind(this)),
					this.addStyles();
			}
			return (
				(t.prototype.addStyles = function () {
					var t;
					(this.toolboxStyleClass = this.styles.addClass(
						new d(
							"toolbox",
							"\n      width: 100%;\n      flex-shrink: 0;\n      display: flex;\n      flex-direction: column;\n      font-family: sans-serif;\n      " +
								("popup" === this.displayMode
									? "height:" + 2.5 * this.uiStyleSettings.toolbarHeight + "px;"
									: "") +
								"\n      box-sizing: content-box;\n      " +
								("popup" === this.displayMode
									? "background-color: " +
									  this.uiStyleSettings.canvasBackgroundColor +
									  ";"
									: "") +
								"\n      " +
								("inline" === this.displayMode
									? "border-bottom-left-radius: " +
									  Math.round(this.uiStyleSettings.toolbarHeight / 10) +
									  "px;"
									: "") +
								"\n      " +
								("inline" === this.displayMode
									? "border-bottom-right-radius: " +
									  Math.round(this.uiStyleSettings.toolbarHeight / 10) +
									  "px;"
									: "") +
								"\n      overflow: hidden;\n    "
						)
					)),
						(this.toolboxStyleColorsClass = this.styles.addClass(
							new d(
								"toolbox_colors",
								"\n      color: " +
									this.uiStyleSettings.toolboxColor +
									";\n    "
							)
						));
					var e = this.uiStyleSettings.toolbarHeight / 4;
					(this.toolboxButtonRowStyleClass = this.styles.addClass(
						new d(
							"toolbox-button-row",
							"\n      display: flex;\n      cursor: default;\n      box-sizing: content-box;\n    "
						)
					)),
						(this.toolboxButtonRowStyleColorsClass = this.styles.addClass(
							new d(
								"toolbox-button-row_colors",
								"\n      background-color: " +
									this.uiStyleSettings.toolbarBackgroundColor +
									";\n    "
							)
						)),
						(this.toolboxPanelRowStyleClass = this.styles.addClass(
							new d(
								"toolbox-panel-row",
								"\n      display: flex;\n      " +
									("inline" === this.displayMode ? "position: absolute;" : "") +
									"\n      " +
									("inline" === this.displayMode
										? "bottom: " + this.uiStyleSettings.toolbarHeight + "px;"
										: "") +
									"\n      cursor: default;\n      height: " +
									1.5 * this.uiStyleSettings.toolbarHeight +
									"px;\n      " +
									("inline" === this.displayMode ? "width: 100%;" : "") +
									"\n      box-sizing: content-box;\n    "
							)
						)),
						(this.toolboxPanelRowStyleColorsClass = this.styles.addClass(
							new d(
								"toolbox-panel-row_colors",
								"\n      background-color: " +
									(null !== (t = this.uiStyleSettings.toolboxBackgroundColor) &&
									void 0 !== t
										? t
										: this.uiStyleSettings.toolbarBackgroundHoverColor) +
									";\n    "
							)
						)),
						(this.toolboxButtonStyleClass = this.styles.addClass(
							new d(
								"toolbox_button",
								"\n      display: inline-block;\n      width: " +
									(this.uiStyleSettings.toolbarHeight - 2 * e) +
									"px;\n      height: " +
									(this.uiStyleSettings.toolbarHeight - 2 * e) +
									"px;\n      padding: " +
									e +
									"px;\n      box-sizing: content-box;\n    "
							)
						)),
						(this.toolboxButtonStyleColorsClass = this.styles.addClass(
							new d(
								"toolbox-button_colors",
								"\n      fill: " + this.uiStyleSettings.toolbarColor + ";\n    "
							)
						)),
						(this.toolboxActiveButtonStyleColorsClass = this.styles.addClass(
							new d(
								"toolbox-active-button_colors",
								"\n      background-color: " +
									this.uiStyleSettings.toolbarBackgroundHoverColor +
									";\n      fill: " +
									this.uiStyleSettings.toolbarColor +
									";\n    "
							)
						)),
						this.styles.addRule(
							new c(
								"." + this.toolboxButtonStyleColorsClass.name + ":hover",
								"\n        background-color: " +
									this.uiStyleSettings.toolbarBackgroundHoverColor +
									"\n    "
							)
						),
						this.styles.addRule(
							new c(
								"." + this.toolboxButtonStyleClass.name + " svg",
								"\n      height: " +
									this.uiStyleSettings.toolbarHeight / 2 +
									"px;\n    "
							)
						);
				}),
				(t.prototype.show = function (t) {
					var e;
					(this.uiContainer = document.createElement("div")),
						(this.uiContainer.style.visibility = t),
						(this.uiContainer.className =
							this.toolboxStyleClass.name +
							" " +
							(null !==
								(e = this.uiStyleSettings.toolboxStyleColorsClassName) &&
							void 0 !== e
								? e
								: this.toolboxStyleColorsClass.name)),
						this.markerjsContainer.appendChild(this.uiContainer);
				}),
				(t.prototype.setPanelButtons = function (t) {
					var e,
						i,
						o = this;
					(this.panels = t),
						void 0 !== this.uiContainer &&
							((this.uiContainer.innerHTML = ""),
							(this.panelRow = document.createElement("div")),
							(this.panelRow.className =
								this.toolboxPanelRowStyleClass.name +
								" " +
								(null !==
									(e =
										this.uiStyleSettings.toolboxPanelRowStyleColorsClassName) &&
								void 0 !== e
									? e
									: this.toolboxPanelRowStyleColorsClass.name)),
							this.uiContainer.appendChild(this.panelRow),
							(this.buttonRow = document.createElement("div")),
							(this.buttonRow.className =
								this.toolboxButtonRowStyleClass.name +
								" " +
								(null !==
									(i =
										this.uiStyleSettings
											.toolboxButtonRowStyleColorsClassName) && void 0 !== i
									? i
									: this.toolboxButtonRowStyleColorsClass.name) +
								" "),
							this.uiContainer.appendChild(this.buttonRow),
							this.panelButtons.splice(0),
							this.panels.forEach(function (t) {
								var e;
								t.uiStyleSettings = o.uiStyleSettings;
								var i = document.createElement("div");
								(i.className =
									o.toolboxButtonStyleClass.name +
									" " +
									(null !==
										(e = o.uiStyleSettings.toolboxButtonStyleColorsClassName) &&
									void 0 !== e
										? e
										: o.toolboxButtonStyleColorsClass.name)),
									(i.innerHTML = t.icon),
									(i.title = t.title),
									i.addEventListener("click", function () {
										o.panelButtonClick(t);
									}),
									o.panelButtons.push(i),
									o.buttonRow.appendChild(i);
							}),
							"inline" === this.displayMode
								? (this.panelRow.style.display = "none")
								: (this.panelRow.style.visibility = "hidden"));
				}),
				(t.prototype.panelButtonClick = function (t) {
					var e = this,
						i = -1;
					if (t !== this.activePanel) {
						(i = this.panels.indexOf(t)), (this.panelRow.innerHTML = "");
						var o = t.getUi();
						(o.style.margin = this.uiStyleSettings.toolbarHeight / 4 + "px"),
							this.panelRow.appendChild(o),
							(this.panelRow.style.display = "flex"),
							(this.panelRow.style.visibility = "visible"),
							(this.panelRow.className = this.panelRow.className.replace(
								this.styles.fadeOutAnimationClassName,
								""
							)),
							(this.panelRow.className +=
								" " + this.styles.fadeInAnimationClassName),
							(this.activePanel = t);
					} else
						(this.activePanel = void 0),
							(this.panelRow.className = this.panelRow.className.replace(
								this.styles.fadeInAnimationClassName,
								""
							)),
							(this.panelRow.className +=
								" " + this.styles.fadeOutAnimationClassName),
							setTimeout(function () {
								"inline" === e.displayMode
									? (e.panelRow.style.display = "none")
									: (e.panelRow.style.visibility = "hidden");
							}, 200);
					this.panelButtons.forEach(function (t, o) {
						var s, r;
						t.className =
							e.toolboxButtonStyleClass.name +
							" " +
							(o === i
								? "" +
								  (null !==
										(s =
											e.uiStyleSettings
												.toolboxActiveButtonStyleColorsClassName) &&
								  void 0 !== s
										? s
										: e.toolboxActiveButtonStyleColorsClass.name)
								: "" +
								  (null !==
										(r = e.uiStyleSettings.toolboxButtonStyleColorsClassName) &&
								  void 0 !== r
										? r
										: e.toolboxButtonStyleColorsClass.name));
					});
				}),
				t
			);
		})(),
		g = function (t, e) {
			(this.title = t), (this.icon = e);
		},
		f = (function (t) {
			function e(e, i, o, s) {
				var r =
					t.call(
						this,
						e,
						s ||
							'<svg viewBox="0 0 24 24"><path d="M17.5 12a1.5 1.5 0 01-1.5-1.5A1.5 1.5 0 0117.5 9a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m-3-4A1.5 1.5 0 0113 6.5 1.5 1.5 0 0114.5 5 1.5 1.5 0 0116 6.5 1.5 1.5 0 0114.5 8m-5 0A1.5 1.5 0 018 6.5 1.5 1.5 0 019.5 5 1.5 1.5 0 0111 6.5 1.5 1.5 0 019.5 8m-3 4A1.5 1.5 0 015 10.5 1.5 1.5 0 016.5 9 1.5 1.5 0 018 10.5 1.5 1.5 0 016.5 12M12 3a9 9 0 00-9 9 9 9 0 009 9 1.5 1.5 0 001.5-1.5c0-.39-.15-.74-.39-1-.23-.27-.38-.62-.38-1a1.5 1.5 0 011.5-1.5H16a5 5 0 005-5c0-4.42-4.03-8-9-8z"/></svg>'
					) || this;
				return (
					(r.colors = []),
					(r.addTransparent = !1),
					(r.colorBoxes = []),
					(r.colors = i),
					(r.currentColor = o),
					(r.setCurrentColor = r.setCurrentColor.bind(r)),
					(r.getColorBox = r.getColorBox.bind(r)),
					r
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					return (
						(e.style.overflow = "auto"),
						(e.style.whiteSpace = "nowrap"),
						this.colors.forEach(function (i) {
							var o = t.getColorBox(i);
							e.appendChild(o), t.colorBoxes.push(o);
						}),
						e
					);
				}),
				(e.prototype.getColorBox = function (t) {
					var e = this,
						i = this.uiStyleSettings.toolbarHeight / 4,
						o = this.uiStyleSettings.toolbarHeight - i,
						s = document.createElement("div");
					(s.style.display = "inline-block"),
						(s.style.boxSizing = "content-box"),
						(s.style.width = o - 2 + "px"),
						(s.style.height = o - 2 + "px"),
						(s.style.padding = "1px"),
						(s.style.marginRight = "2px"),
						(s.style.marginBottom = "2px"),
						(s.style.borderWidth = "2px"),
						(s.style.borderStyle = "solid"),
						(s.style.borderRadius = (o + 2) / 2 + "px"),
						(s.style.borderColor =
							t === this.currentColor
								? this.uiStyleSettings.toolboxAccentColor
								: "transparent"),
						s.addEventListener("click", function () {
							e.setCurrentColor(t, s);
						});
					var r = document.createElement("div");
					return (
						(r.style.display = "inline-block"),
						(r.style.width = o - 2 + "px"),
						(r.style.height = o - 2 + "px"),
						(r.style.backgroundColor = t),
						(r.style.borderRadius = o / 2 + "px"),
						"transparent" === t &&
							((r.style.fill = this.uiStyleSettings.toolboxAccentColor),
							(r.innerHTML =
								'<svg viewBox="0 0 24 24">\n        <path d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z" />\n      </svg>')),
						s.appendChild(r),
						s
					);
				}),
				(e.prototype.setCurrentColor = function (t, e) {
					var i = this;
					(this.currentColor = t),
						this.colorBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e ? i.uiStyleSettings.toolboxAccentColor : "transparent";
						}),
						this.onColorChanged && this.onColorChanged(t);
				}),
				e
			);
		})(g),
		v = (function () {
			function t(t, e, i) {
				(this._state = "new"),
					(this._isSelected = !1),
					(this._container = t),
					(this._overlayContainer = e),
					(this.globalSettings = i),
					(this.stateChanged = this.stateChanged.bind(this)),
					(this.colorChanged = this.colorChanged.bind(this)),
					(this.fillColorChanged = this.fillColorChanged.bind(this));
			}
			return (
				Object.defineProperty(t.prototype, "typeName", {
					get: function () {
						return Object.getPrototypeOf(this).constructor.typeName;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "container", {
					get: function () {
						return this._container;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "overlayContainer", {
					get: function () {
						return this._overlayContainer;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "state", {
					get: function () {
						return this._state;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "toolboxPanels", {
					get: function () {
						return [];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.ownsTarget = function (t) {
					return !1;
				}),
				Object.defineProperty(t.prototype, "isSelected", {
					get: function () {
						return this._isSelected;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.select = function () {
					(this.container.style.cursor = "move"),
						(this._isSelected = !0),
						(this.manipulationStartState = this.getState());
				}),
				(t.prototype.deselect = function () {
					(this.container.style.cursor = "default"),
						(this._isSelected = !1),
						this.stateChanged();
				}),
				(t.prototype.pointerDown = function (t, e) {}),
				(t.prototype.dblClick = function (t, e) {}),
				(t.prototype.manipulate = function (t) {}),
				(t.prototype.pointerUp = function (t) {
					this.stateChanged();
				}),
				(t.prototype.dispose = function () {}),
				(t.prototype.addMarkerVisualToContainer = function (t) {
					this.container.childNodes.length > 0
						? this.container.insertBefore(t, this.container.childNodes[0])
						: this.container.appendChild(t);
				}),
				(t.prototype.getState = function () {
					return { typeName: t.typeName, state: this.state, notes: this.notes };
				}),
				(t.prototype.restoreState = function (t) {
					(this._state = t.state), (this.notes = t.notes);
				}),
				(t.prototype.scale = function (t, e) {}),
				(t.prototype.colorChanged = function (t) {
					this.onColorChanged && this.onColorChanged(t), this.stateChanged();
				}),
				(t.prototype.fillColorChanged = function (t) {
					this.onFillColorChanged && this.onFillColorChanged(t),
						this.stateChanged();
				}),
				(t.prototype.stateChanged = function () {
					if (
						this.onStateChanged &&
						"creating" !== this.state &&
						"new" !== this.state
					) {
						var t = this.getState();
						void 0 !== this.manipulationStartState &&
							(this.manipulationStartState.state = "select"),
							(t.state = "select"),
							JSON.stringify(this.manipulationStartState) !=
								JSON.stringify(t) && this.onStateChanged(this);
					}
				}),
				(t.typeName = "MarkerBase"),
				t
			);
		})(),
		m = (function () {
			function t() {
				this.findGripByVisual = this.findGripByVisual.bind(this);
			}
			return (
				(t.prototype.findGripByVisual = function (t) {
					return this.topLeft.ownsTarget(t)
						? this.topLeft
						: this.topCenter.ownsTarget(t)
						? this.topCenter
						: this.topRight.ownsTarget(t)
						? this.topRight
						: this.centerLeft.ownsTarget(t)
						? this.centerLeft
						: this.centerRight.ownsTarget(t)
						? this.centerRight
						: this.bottomLeft.ownsTarget(t)
						? this.bottomLeft
						: this.bottomCenter.ownsTarget(t)
						? this.bottomCenter
						: this.bottomRight.ownsTarget(t)
						? this.bottomRight
						: void 0;
				}),
				t
			);
		})(),
		C = (function () {
			function t() {
				(this.GRIP_SIZE = 10),
					(this.visual = n.createGroup()),
					this.visual.appendChild(
						n.createCircle(1.5 * this.GRIP_SIZE, [["fill", "transparent"]])
					),
					this.visual.appendChild(
						n.createCircle(this.GRIP_SIZE, [
							["fill", "#cccccc"],
							["fill-opacity", "0.7"],
							["stroke", "#333333"],
							["stroke-width", "2"],
							["stroke-opacity", "0.7"],
						])
					);
			}
			return (
				(t.prototype.ownsTarget = function (t) {
					return (
						t === this.visual ||
						t === this.visual.childNodes[0] ||
						t === this.visual.childNodes[1]
					);
				}),
				t
			);
		})(),
		b = (function () {
			function t() {}
			return (
				(t.toITransformMatrix = function (t) {
					return { a: t.a, b: t.b, c: t.c, d: t.d, e: t.e, f: t.f };
				}),
				(t.toSVGMatrix = function (t, e) {
					return (
						(t.a = e.a),
						(t.b = e.b),
						(t.c = e.c),
						(t.d = e.d),
						(t.e = e.e),
						(t.f = e.f),
						t
					);
				}),
				t
			);
		})(),
		S = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.left = 0),
					(s.top = 0),
					(s.width = 0),
					(s.height = 0),
					(s.defaultSize = { x: 50, y: 20 }),
					(s.offsetX = 0),
					(s.offsetY = 0),
					(s.rotationAngle = 0),
					(s.CB_DISTANCE = 10),
					(s._suppressMarkerCreateEvent = !1),
					s.container.transform.baseVal.appendItem(n.createTransform()),
					s.setupControlBox(),
					s
				);
			}
			return (
				i(e, t),
				Object.defineProperty(e.prototype, "centerX", {
					get: function () {
						return this.left + this.width / 2;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, "centerY", {
					get: function () {
						return this.top + this.height / 2;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(e.prototype, "visual", {
					get: function () {
						return this._visual;
					},
					set: function (t) {
						this._visual = t;
						var e = n.createTransform();
						this._visual.transform.baseVal.appendItem(e);
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.ownsTarget = function (e) {
					return (
						!!t.prototype.ownsTarget.call(this, e) ||
						!!(
							void 0 !== this.controlGrips.findGripByVisual(e) ||
							(void 0 !== this.rotatorGrip && this.rotatorGrip.ownsTarget(e))
						)
					);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"new" === this.state && ((this.left = e.x), (this.top = e.y)),
						(this.manipulationStartLeft = this.left),
						(this.manipulationStartTop = this.top),
						(this.manipulationStartWidth = this.width),
						(this.manipulationStartHeight = this.height);
					var o = this.unrotatePoint(e);
					if (
						((this.manipulationStartX = o.x),
						(this.manipulationStartY = o.y),
						(this.offsetX = o.x - this.left),
						(this.offsetY = o.y - this.top),
						"new" !== this.state)
					)
						if (
							(this.select(),
							(this.activeGrip = this.controlGrips.findGripByVisual(i)),
							void 0 !== this.activeGrip)
						)
							this._state = "resize";
						else if (
							void 0 !== this.rotatorGrip &&
							this.rotatorGrip.ownsTarget(i)
						) {
							this.activeGrip = this.rotatorGrip;
							var s = this.rotatePoint({ x: this.centerX, y: this.centerY });
							(this.left = s.x - this.width / 2),
								(this.top = s.y - this.height / 2),
								this.moveVisual({ x: this.left, y: this.top });
							var r = this.container.transform.baseVal.getItem(0);
							r.setRotate(this.rotationAngle, this.centerX, this.centerY),
								this.container.transform.baseVal.replaceItem(r, 0),
								this.adjustControlBox(),
								(this._state = "rotate");
						} else this._state = "move";
				}),
				(e.prototype.pointerUp = function (e) {
					var i = this.state;
					t.prototype.pointerUp.call(this, e),
						"creating" === this.state && this.width < 10 && this.height < 10
							? ((this.width = this.defaultSize.x),
							  (this.height = this.defaultSize.y))
							: this.manipulate(e),
						(this._state = "select"),
						"creating" === i &&
							this.onMarkerCreated &&
							!1 === this._suppressMarkerCreateEvent &&
							this.onMarkerCreated(this);
				}),
				(e.prototype.moveVisual = function (t) {
					this.visual.style.transform =
						"translate(" + t.x + "px, " + t.y + "px)";
				}),
				(e.prototype.manipulate = function (t) {
					var e = this.unrotatePoint(t);
					"creating" === this.state
						? this.resize(t)
						: "move" === this.state
						? ((this.left =
								this.manipulationStartLeft +
								(e.x - this.manipulationStartLeft) -
								this.offsetX),
						  (this.top =
								this.manipulationStartTop +
								(e.y - this.manipulationStartTop) -
								this.offsetY),
						  this.moveVisual({ x: this.left, y: this.top }),
						  this.adjustControlBox())
						: "resize" === this.state
						? this.resize(e)
						: "rotate" === this.state && this.rotate(t);
				}),
				(e.prototype.resize = function (t) {
					var e = this.manipulationStartLeft,
						i = this.manipulationStartWidth,
						o = this.manipulationStartTop,
						s = this.manipulationStartHeight;
					switch (this.activeGrip) {
						case this.controlGrips.bottomLeft:
						case this.controlGrips.centerLeft:
						case this.controlGrips.topLeft:
							(e = this.manipulationStartLeft + t.x - this.manipulationStartX),
								(i =
									this.manipulationStartWidth + this.manipulationStartLeft - e);
							break;
						case this.controlGrips.bottomRight:
						case this.controlGrips.centerRight:
						case this.controlGrips.topRight:
						case void 0:
							i = this.manipulationStartWidth + t.x - this.manipulationStartX;
					}
					switch (this.activeGrip) {
						case this.controlGrips.topCenter:
						case this.controlGrips.topLeft:
						case this.controlGrips.topRight:
							(o = this.manipulationStartTop + t.y - this.manipulationStartY),
								(s =
									this.manipulationStartHeight + this.manipulationStartTop - o);
							break;
						case this.controlGrips.bottomCenter:
						case this.controlGrips.bottomLeft:
						case this.controlGrips.bottomRight:
						case void 0:
							s = this.manipulationStartHeight + t.y - this.manipulationStartY;
					}
					i >= 0
						? ((this.left = e), (this.width = i))
						: ((this.left = e + i), (this.width = -i)),
						s >= 0
							? ((this.top = o), (this.height = s))
							: ((this.top = o + s), (this.height = -s)),
						this.setSize();
				}),
				(e.prototype.setSize = function () {
					this.moveVisual({ x: this.left, y: this.top }),
						this.adjustControlBox();
				}),
				(e.prototype.rotate = function (t) {
					if (Math.abs(t.x - this.centerX) > 0.1) {
						var e = Math.sign(t.x - this.centerX);
						(this.rotationAngle =
							(180 * Math.atan((t.y - this.centerY) / (t.x - this.centerX))) /
								Math.PI +
							90 * e),
							this.applyRotation();
					}
				}),
				(e.prototype.applyRotation = function () {
					var t = this.container.transform.baseVal.getItem(0);
					t.setRotate(this.rotationAngle, this.centerX, this.centerY),
						this.container.transform.baseVal.replaceItem(t, 0);
				}),
				(e.prototype.rotatePoint = function (t) {
					if (0 === this.rotationAngle) return t;
					var e = this.container.getCTM(),
						i = n.createPoint(t.x, t.y);
					return { x: (i = i.matrixTransform(e)).x, y: i.y };
				}),
				(e.prototype.unrotatePoint = function (t) {
					if (0 === this.rotationAngle) return t;
					var e = this.container.getCTM();
					e = e.inverse();
					var i = n.createPoint(t.x, t.y);
					return { x: (i = i.matrixTransform(e)).x, y: i.y };
				}),
				(e.prototype.select = function () {
					t.prototype.select.call(this),
						this.adjustControlBox(),
						(this.controlBox.style.display = "");
				}),
				(e.prototype.deselect = function () {
					t.prototype.deselect.call(this),
						(this.controlBox.style.display = "none");
				}),
				(e.prototype.setupControlBox = function () {
					this.controlBox = n.createGroup();
					var t = n.createTransform();
					t.setTranslate(-this.CB_DISTANCE / 2, -this.CB_DISTANCE / 2),
						this.controlBox.transform.baseVal.appendItem(t),
						this.container.appendChild(this.controlBox),
						(this.controlRect = n.createRect(
							this.width + this.CB_DISTANCE,
							this.height + this.CB_DISTANCE,
							[
								["stroke", "black"],
								["stroke-width", "1"],
								["stroke-opacity", "0.5"],
								["stroke-dasharray", "3, 2"],
								["fill", "transparent"],
								["pointer-events", "none"],
							]
						)),
						this.controlBox.appendChild(this.controlRect),
						!0 !== this.globalSettings.disableRotation &&
							((this.rotatorGripLine = n.createLine(
								(this.width + 2 * this.CB_DISTANCE) / 2,
								this.top - this.CB_DISTANCE,
								(this.width + 2 * this.CB_DISTANCE) / 2,
								this.top - 3 * this.CB_DISTANCE,
								[
									["stroke", "black"],
									["stroke-width", "1"],
									["stroke-opacity", "0.5"],
									["stroke-dasharray", "3, 2"],
								]
							)),
							this.controlBox.appendChild(this.rotatorGripLine)),
						(this.controlGrips = new m()),
						this.addControlGrips(),
						(this.controlBox.style.display = "none");
				}),
				(e.prototype.adjustControlBox = function () {
					var t = this.controlBox.transform.baseVal.getItem(0);
					t.setTranslate(
						this.left - this.CB_DISTANCE / 2,
						this.top - this.CB_DISTANCE / 2
					),
						this.controlBox.transform.baseVal.replaceItem(t, 0),
						this.controlRect.setAttribute(
							"width",
							(this.width + this.CB_DISTANCE).toString()
						),
						this.controlRect.setAttribute(
							"height",
							(this.height + this.CB_DISTANCE).toString()
						),
						void 0 !== this.rotatorGripLine &&
							(this.rotatorGripLine.setAttribute(
								"x1",
								((this.width + this.CB_DISTANCE) / 2).toString()
							),
							this.rotatorGripLine.setAttribute(
								"y1",
								(-this.CB_DISTANCE / 2).toString()
							),
							this.rotatorGripLine.setAttribute(
								"x2",
								((this.width + this.CB_DISTANCE) / 2).toString()
							),
							this.rotatorGripLine.setAttribute(
								"y2",
								(3 * -this.CB_DISTANCE).toString()
							)),
						this.positionGrips();
				}),
				(e.prototype.addControlGrips = function () {
					(this.controlGrips.topLeft = this.createGrip()),
						(this.controlGrips.topCenter = this.createGrip()),
						(this.controlGrips.topRight = this.createGrip()),
						(this.controlGrips.centerLeft = this.createGrip()),
						(this.controlGrips.centerRight = this.createGrip()),
						(this.controlGrips.bottomLeft = this.createGrip()),
						(this.controlGrips.bottomCenter = this.createGrip()),
						(this.controlGrips.bottomRight = this.createGrip()),
						!0 !== this.globalSettings.disableRotation &&
							(this.rotatorGrip = this.createGrip()),
						this.positionGrips();
				}),
				(e.prototype.createGrip = function () {
					var t = new C();
					return (
						t.visual.transform.baseVal.appendItem(n.createTransform()),
						this.controlBox.appendChild(t.visual),
						t
					);
				}),
				(e.prototype.positionGrips = function () {
					var t = this.controlGrips.topLeft.GRIP_SIZE,
						e = -t / 2,
						i = e,
						o = (this.width + this.CB_DISTANCE) / 2 - t / 2,
						s = (this.height + this.CB_DISTANCE) / 2 - t / 2,
						r = this.height + this.CB_DISTANCE - t / 2,
						n = this.width + this.CB_DISTANCE - t / 2;
					this.positionGrip(this.controlGrips.topLeft.visual, e, i),
						this.positionGrip(this.controlGrips.topCenter.visual, o, i),
						this.positionGrip(this.controlGrips.topRight.visual, n, i),
						this.positionGrip(this.controlGrips.centerLeft.visual, e, s),
						this.positionGrip(this.controlGrips.centerRight.visual, n, s),
						this.positionGrip(this.controlGrips.bottomLeft.visual, e, r),
						this.positionGrip(this.controlGrips.bottomCenter.visual, o, r),
						this.positionGrip(this.controlGrips.bottomRight.visual, n, r),
						void 0 !== this.rotatorGrip &&
							this.positionGrip(
								this.rotatorGrip.visual,
								o,
								i - 3 * this.CB_DISTANCE
							);
				}),
				(e.prototype.positionGrip = function (t, e, i) {
					var o = t.transform.baseVal.getItem(0);
					o.setTranslate(e, i), t.transform.baseVal.replaceItem(o, 0);
				}),
				(e.prototype.hideControlBox = function () {
					this.controlBox.style.display = "none";
				}),
				(e.prototype.showControlBox = function () {
					this.controlBox.style.display = "";
				}),
				(e.prototype.getState = function () {
					return Object.assign(
						{
							left: this.left,
							top: this.top,
							width: this.width,
							height: this.height,
							rotationAngle: this.rotationAngle,
							visualTransformMatrix: b.toITransformMatrix(
								this.visual.transform.baseVal.getItem(0).matrix
							),
							containerTransformMatrix: b.toITransformMatrix(
								this.container.transform.baseVal.getItem(0).matrix
							),
						},
						t.prototype.getState.call(this)
					);
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e);
					var i = e;
					(this.left = i.left),
						(this.top = i.top),
						(this.width = i.width),
						(this.height = i.height),
						(this.rotationAngle = i.rotationAngle),
						this.visual.transform.baseVal
							.getItem(0)
							.setMatrix(
								b.toSVGMatrix(
									this.visual.transform.baseVal.getItem(0).matrix,
									i.visualTransformMatrix
								)
							),
						this.container.transform.baseVal
							.getItem(0)
							.setMatrix(
								b.toSVGMatrix(
									this.container.transform.baseVal.getItem(0).matrix,
									i.containerTransformMatrix
								)
							);
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i);
					var o = this.rotatePoint({ x: this.left, y: this.top }),
						s = this.unrotatePoint({ x: o.x * e, y: o.y * i });
					(this.left = s.x),
						(this.top = s.y),
						(this.width = this.width * e),
						(this.height = this.height * i),
						this.adjustControlBox();
				}),
				e
			);
		})(v),
		k = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.fillColor = "transparent"),
					(s.strokeColor = "transparent"),
					(s.strokeWidth = 0),
					(s.strokeDasharray = ""),
					(s.opacity = 1),
					(s.setStrokeColor = s.setStrokeColor.bind(s)),
					(s.setFillColor = s.setFillColor.bind(s)),
					(s.setStrokeWidth = s.setStrokeWidth.bind(s)),
					(s.setStrokeDasharray = s.setStrokeDasharray.bind(s)),
					(s.createVisual = s.createVisual.bind(s)),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(!t.prototype.ownsTarget.call(this, e) && e !== this.visual);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createRect(1, 1, [
						["fill", this.fillColor],
						["stroke", this.strokeColor],
						["stroke-width", this.strokeWidth.toString()],
						["stroke-dasharray", this.strokeDasharray],
						["opacity", this.opacity.toString()],
					])),
						this.addMarkerVisualToContainer(this.visual);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"new" === this.state &&
							(this.createVisual(),
							this.moveVisual(e),
							(this._state = "creating"));
				}),
				(e.prototype.manipulate = function (e) {
					t.prototype.manipulate.call(this, e);
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e), this.setSize();
				}),
				(e.prototype.setSize = function () {
					t.prototype.setSize.call(this),
						n.setAttributes(this.visual, [
							["width", this.width.toString()],
							["height", this.height.toString()],
						]);
				}),
				(e.prototype.pointerUp = function (e) {
					t.prototype.pointerUp.call(this, e), this.setSize();
				}),
				(e.prototype.setStrokeColor = function (t) {
					(this.strokeColor = t),
						this.visual &&
							n.setAttributes(this.visual, [["stroke", this.strokeColor]]),
						this.colorChanged(t),
						this.stateChanged();
				}),
				(e.prototype.setFillColor = function (t) {
					(this.fillColor = t),
						this.visual &&
							n.setAttributes(this.visual, [["fill", this.fillColor]]),
						this.stateChanged();
				}),
				(e.prototype.setStrokeWidth = function (t) {
					(this.strokeWidth = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["stroke-width", this.strokeWidth.toString()],
							]),
						this.stateChanged();
				}),
				(e.prototype.setStrokeDasharray = function (t) {
					(this.strokeDasharray = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["stroke-dasharray", this.strokeDasharray],
							]),
						this.stateChanged();
				}),
				(e.prototype.getState = function () {
					return Object.assign(
						{
							fillColor: this.fillColor,
							strokeColor: this.strokeColor,
							strokeWidth: this.strokeWidth,
							strokeDasharray: this.strokeDasharray,
							opacity: this.opacity,
						},
						t.prototype.getState.call(this)
					);
				}),
				(e.prototype.restoreState = function (e) {
					var i = e;
					(this.fillColor = i.fillColor),
						(this.strokeColor = i.strokeColor),
						(this.strokeWidth = i.strokeWidth),
						(this.strokeDasharray = i.strokeDasharray),
						(this.opacity = i.opacity),
						this.createVisual(),
						t.prototype.restoreState.call(this, e),
						this.setSize();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i), this.setSize();
				}),
				(e.title = "Rectangle marker"),
				e
			);
		})(S),
		x = (function (t) {
			function e(e, i, o, s) {
				var r =
					t.call(
						this,
						e,
						s ||
							'<svg viewBox="0 0 24 24"><path d="M3 17h18v-2H3v2m0 3h18v-1H3v1m0-7h18v-3H3v3m0-9v4h18V4H3z"/></svg>'
					) || this;
				return (
					(r.widths = []),
					(r.widthBoxes = []),
					(r.widths = i),
					(r.currentWidth = o),
					(r.setCurrentWidth = r.setCurrentWidth.bind(r)),
					r
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					return (
						(e.style.display = "flex"),
						(e.style.overflow = "auto"),
						(e.style.flexGrow = "2"),
						this.widths.forEach(function (i) {
							var o = document.createElement("div");
							(o.style.display = "flex"),
								(o.style.flexGrow = "2"),
								(o.style.alignItems = "center"),
								(o.style.justifyContent = "space-between"),
								(o.style.padding = "5px"),
								(o.style.borderWidth = "2px"),
								(o.style.borderStyle = "solid"),
								(o.style.borderColor =
									i === t.currentWidth
										? t.uiStyleSettings.toolboxAccentColor
										: "transparent"),
								o.addEventListener("click", function () {
									t.setCurrentWidth(i, o);
								}),
								e.appendChild(o);
							var s = document.createElement("div");
							(s.innerText = i.toString()),
								(s.style.marginRight = "5px"),
								o.appendChild(s);
							var r = document.createElement("div");
							(r.style.minHeight = "20px"),
								(r.style.flexGrow = "2"),
								(r.style.display = "flex"),
								(r.style.alignItems = "center");
							var n = document.createElement("hr");
							(n.style.minWidth = "20px"),
								(n.style.border = "0px"),
								(n.style.borderTop =
									i + "px solid " + t.uiStyleSettings.toolboxColor),
								(n.style.flexGrow = "2"),
								r.appendChild(n),
								o.appendChild(r),
								t.widthBoxes.push(o);
						}),
						e
					);
				}),
				(e.prototype.setCurrentWidth = function (t, e) {
					var i = this;
					(this.currentWidth = t),
						this.widthBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e ? i.uiStyleSettings.toolboxAccentColor : "transparent";
						}),
						this.onWidthChanged && this.onWidthChanged(this.currentWidth);
				}),
				e
			);
		})(g),
		w = (function (t) {
			function e(e, i, o, s) {
				var r =
					t.call(
						this,
						e,
						s ||
							'<svg viewBox="0 0 24 24"><path d="M3 16h5v-2H3v2m6.5 0h5v-2h-5v2m6.5 0h5v-2h-5v2M3 20h2v-2H3v2m4 0h2v-2H7v2m4 0h2v-2h-2v2m4 0h2v-2h-2v2m4 0h2v-2h-2v2M3 12h8v-2H3v2m10 0h8v-2h-8v2M3 4v4h18V4H3z"/></svg>'
					) || this;
				return (
					(r.styles = []),
					(r.styleBoxes = []),
					(r.styles = i),
					(r.currentStyle = o),
					(r.setCurrentStyle = r.setCurrentStyle.bind(r)),
					r
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					return (
						(e.style.display = "flex"),
						(e.style.overflow = "auto"),
						(e.style.flexGrow = "2"),
						this.styles.forEach(function (i) {
							var o = document.createElement("div");
							(o.style.display = "flex"),
								(o.style.alignItems = "center"),
								(o.style.justifyContent = "space-between"),
								(o.style.padding = "5px"),
								(o.style.borderWidth = "2px"),
								(o.style.borderStyle = "solid"),
								(o.style.overflow = "auto"),
								(o.style.maxWidth = 100 / t.styles.length - 5 + "%"),
								(o.style.borderColor =
									i === t.currentStyle
										? t.uiStyleSettings.toolboxAccentColor
										: "transparent"),
								o.addEventListener("click", function () {
									t.setCurrentStyle(i, o);
								}),
								e.appendChild(o);
							var s = document.createElement("div");
							(s.style.minHeight = "20px"),
								(s.style.flexGrow = "2"),
								(s.style.overflow = "auto");
							var r =
								'<svg width="100" height="20">\n      <line x1="0" y1="10" x2="100" y2="10" stroke="' +
								t.uiStyleSettings.toolboxColor +
								'" stroke-width="3" ' +
								("" !== i ? 'stroke-dasharray="' + i + '"' : "") +
								" />\n  </svg>";
							(s.innerHTML = r), o.appendChild(s), t.styleBoxes.push(o);
						}),
						e
					);
				}),
				(e.prototype.setCurrentStyle = function (t, e) {
					var i = this;
					(this.currentStyle = t),
						this.styleBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e ? i.uiStyleSettings.toolboxAccentColor : "transparent";
						}),
						this.onStyleChanged && this.onStyleChanged(this.currentStyle);
				}),
				e
			);
		})(g),
		B = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.strokeColor = o.defaultColor),
					(s.strokeWidth = o.defaultStrokeWidth),
					(s.strokeDasharray = o.defaultStrokeDasharray),
					(s.strokePanel = new f(
						"Line color",
						o.defaultColorSet,
						o.defaultColor
					)),
					(s.strokePanel.onColorChanged = s.setStrokeColor),
					(s.strokeWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.strokeWidthPanel.onWidthChanged = s.setStrokeWidth),
					(s.strokeStylePanel = new w(
						"Line style",
						o.defaultStrokeDasharrays,
						o.defaultStrokeDasharray
					)),
					(s.strokeStylePanel.onStyleChanged = s.setStrokeDasharray),
					s
				);
			}
			return (
				i(e, t),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = t.prototype.getState.call(this);
					return (i.typeName = e.typeName), i;
				}),
				(e.typeName = "FrameMarker"),
				(e.title = "Frame marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M4 6v13h16V6H4m14 11H6V8h12v9z"/></svg>'),
				e
			);
		})(k),
		E = function () {
			(this.defaultColorSet = [
				"#EF4444",
				"#10B981",
				"#2563EB",
				"#FFFF00",
				"#7C3AED",
				"#F472B6",
				"#000000",
				"#FFFFFF",
			]),
				(this.defaultColor = this.defaultColorSet[0]),
				(this.defaultFillColor = this.defaultColorSet[0]),
				(this.defaultStrokeColor = this.defaultColorSet[7]),
				(this.defaultHighlightColor = this.defaultColorSet[3]),
				(this.defaultStrokeWidth = 3),
				(this.defaultStrokeDasharray = ""),
				(this.defaultHighlightOpacity = 0.5),
				(this.defaultFontFamily = "Helvetica, Arial, sans-serif"),
				(this.defaultStrokeWidths = [1, 2, 3, 5, 10]),
				(this.defaultStrokeDasharrays = ["", "3", "12 3", "9 6 3 6"]),
				(this.defaultOpacitySteps = [0.1, 0.25, 0.5, 0.75, 1]),
				(this.displayMode = "inline"),
				(this.defaultFontFamilies = [
					'Times, "Times New Roman", serif',
					"Helvetica, Arial, sans-serif",
					'Courier, "Courier New", monospace',
					"cursive",
					"fantasy",
				]),
				(this.popupMargin = 30),
				(this.newFreehandMarkerOnPointerUp = !1),
				(this.defaultColorsFollowCurrentColors = !1),
				(this.freehandPixelRatio = 1),
				(this.disableRotation = !1),
				(this.defaultCaptionFontSize = "1rem"),
				(this.defaultCaptionText = "Text");
		},
		M = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.x1 = 0),
					(s.y1 = 0),
					(s.x2 = 0),
					(s.y2 = 0),
					(s.defaultLength = 50),
					(s.manipulationStartX = 0),
					(s.manipulationStartY = 0),
					(s.manipulationStartX1 = 0),
					(s.manipulationStartY1 = 0),
					(s.manipulationStartX2 = 0),
					(s.manipulationStartY2 = 0),
					s.setupControlBox(),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return (
						!!t.prototype.ownsTarget.call(this, e) ||
						!(!this.grip1.ownsTarget(e) && !this.grip2.ownsTarget(e))
					);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						(this.manipulationStartX = e.x),
						(this.manipulationStartY = e.y),
						"new" === this.state &&
							((this.x1 = e.x),
							(this.y1 = e.y),
							(this.x2 = e.x),
							(this.y2 = e.y)),
						(this.manipulationStartX1 = this.x1),
						(this.manipulationStartY1 = this.y1),
						(this.manipulationStartX2 = this.x2),
						(this.manipulationStartY2 = this.y2),
						"new" !== this.state &&
							(this.select(),
							this.grip1.ownsTarget(i)
								? (this.activeGrip = this.grip1)
								: this.grip2.ownsTarget(i)
								? (this.activeGrip = this.grip2)
								: (this.activeGrip = void 0),
							this.activeGrip
								? (this._state = "resize")
								: (this._state = "move"));
				}),
				(e.prototype.pointerUp = function (e) {
					var i = this.state;
					t.prototype.pointerUp.call(this, e),
						"creating" === this.state &&
						Math.abs(this.x1 - this.x2) < 10 &&
						Math.abs(this.y1 - this.y2) < 10
							? ((this.x2 = this.x1 + this.defaultLength),
							  this.adjustVisual(),
							  this.adjustControlBox())
							: this.manipulate(e),
						(this._state = "select"),
						"creating" === i &&
							this.onMarkerCreated &&
							this.onMarkerCreated(this);
				}),
				(e.prototype.adjustVisual = function () {}),
				(e.prototype.manipulate = function (t) {
					"creating" === this.state
						? this.resize(t)
						: "move" === this.state
						? ((this.x1 =
								this.manipulationStartX1 + t.x - this.manipulationStartX),
						  (this.y1 =
								this.manipulationStartY1 + t.y - this.manipulationStartY),
						  (this.x2 =
								this.manipulationStartX2 + t.x - this.manipulationStartX),
						  (this.y2 =
								this.manipulationStartY2 + t.y - this.manipulationStartY),
						  this.adjustVisual(),
						  this.adjustControlBox())
						: "resize" === this.state && this.resize(t);
				}),
				(e.prototype.resize = function (t) {
					switch (this.activeGrip) {
						case this.grip1:
							(this.x1 = t.x), (this.y1 = t.y);
							break;
						case this.grip2:
						case void 0:
							(this.x2 = t.x), (this.y2 = t.y);
					}
					this.adjustVisual(), this.adjustControlBox();
				}),
				(e.prototype.select = function () {
					t.prototype.select.call(this),
						this.adjustControlBox(),
						(this.controlBox.style.display = "");
				}),
				(e.prototype.deselect = function () {
					t.prototype.deselect.call(this),
						(this.controlBox.style.display = "none");
				}),
				(e.prototype.setupControlBox = function () {
					(this.controlBox = n.createGroup()),
						this.container.appendChild(this.controlBox),
						this.addControlGrips(),
						(this.controlBox.style.display = "none");
				}),
				(e.prototype.adjustControlBox = function () {
					this.positionGrips();
				}),
				(e.prototype.addControlGrips = function () {
					(this.grip1 = this.createGrip()),
						(this.grip2 = this.createGrip()),
						this.positionGrips();
				}),
				(e.prototype.createGrip = function () {
					var t = new C();
					return (
						t.visual.transform.baseVal.appendItem(n.createTransform()),
						this.controlBox.appendChild(t.visual),
						t
					);
				}),
				(e.prototype.positionGrips = function () {
					var t = this.grip1.GRIP_SIZE;
					this.positionGrip(
						this.grip1.visual,
						this.x1 - t / 2,
						this.y1 - t / 2
					),
						this.positionGrip(
							this.grip2.visual,
							this.x2 - t / 2,
							this.y2 - t / 2
						);
				}),
				(e.prototype.positionGrip = function (t, e, i) {
					var o = t.transform.baseVal.getItem(0);
					o.setTranslate(e, i), t.transform.baseVal.replaceItem(o, 0);
				}),
				(e.prototype.getState = function () {
					return Object.assign(
						{ x1: this.x1, y1: this.y1, x2: this.x2, y2: this.y2 },
						t.prototype.getState.call(this)
					);
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e);
					var i = e;
					(this.x1 = i.x1),
						(this.y1 = i.y1),
						(this.x2 = i.x2),
						(this.y2 = i.y2);
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i),
						(this.x1 = this.x1 * e),
						(this.y1 = this.y1 * i),
						(this.x2 = this.x2 * e),
						(this.y2 = this.y2 * i),
						this.adjustVisual(),
						this.adjustControlBox();
				}),
				e
			);
		})(v),
		T = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.strokeColor = "transparent"),
					(s.strokeWidth = 0),
					(s.strokeDasharray = ""),
					(s.setStrokeColor = s.setStrokeColor.bind(s)),
					(s.setStrokeWidth = s.setStrokeWidth.bind(s)),
					(s.setStrokeDasharray = s.setStrokeDasharray.bind(s)),
					(s.strokeColor = o.defaultColor),
					(s.strokeWidth = o.defaultStrokeWidth),
					(s.strokeDasharray = o.defaultStrokeDasharray),
					(s.strokePanel = new f(
						"Line color",
						o.defaultColorSet,
						o.defaultColor
					)),
					(s.strokePanel.onColorChanged = s.setStrokeColor),
					(s.strokeWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.strokeWidthPanel.onWidthChanged = s.setStrokeWidth),
					(s.strokeStylePanel = new w(
						"Line style",
						o.defaultStrokeDasharrays,
						o.defaultStrokeDasharray
					)),
					(s.strokeStylePanel.onStyleChanged = s.setStrokeDasharray),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.visual &&
						e !== this.selectorLine &&
						e !== this.visibleLine
					);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createGroup()),
						(this.selectorLine = n.createLine(
							this.x1,
							this.y1,
							this.x2,
							this.y2,
							[
								["stroke", "transparent"],
								["stroke-width", (this.strokeWidth + 10).toString()],
							]
						)),
						(this.visibleLine = n.createLine(
							this.x1,
							this.y1,
							this.x2,
							this.y2,
							[
								["stroke", this.strokeColor],
								["stroke-width", this.strokeWidth.toString()],
							]
						)),
						this.visual.appendChild(this.selectorLine),
						this.visual.appendChild(this.visibleLine),
						this.addMarkerVisualToContainer(this.visual);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"new" === this.state &&
							(this.createVisual(),
							this.adjustVisual(),
							(this._state = "creating"));
				}),
				(e.prototype.adjustVisual = function () {
					this.selectorLine &&
						this.visibleLine &&
						(this.selectorLine.setAttribute("x1", this.x1.toString()),
						this.selectorLine.setAttribute("y1", this.y1.toString()),
						this.selectorLine.setAttribute("x2", this.x2.toString()),
						this.selectorLine.setAttribute("y2", this.y2.toString()),
						this.visibleLine.setAttribute("x1", this.x1.toString()),
						this.visibleLine.setAttribute("y1", this.y1.toString()),
						this.visibleLine.setAttribute("x2", this.x2.toString()),
						this.visibleLine.setAttribute("y2", this.y2.toString()),
						n.setAttributes(this.visibleLine, [["stroke", this.strokeColor]]),
						n.setAttributes(this.visibleLine, [
							["stroke-width", this.strokeWidth.toString()],
						]),
						n.setAttributes(this.visibleLine, [
							["stroke-dasharray", this.strokeDasharray.toString()],
						]));
				}),
				(e.prototype.setStrokeColor = function (t) {
					(this.strokeColor = t), this.adjustVisual(), this.colorChanged(t);
				}),
				(e.prototype.setStrokeWidth = function (t) {
					(this.strokeWidth = t), this.adjustVisual();
				}),
				(e.prototype.setStrokeDasharray = function (t) {
					(this.strokeDasharray = t), this.adjustVisual(), this.stateChanged();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{
							strokeColor: this.strokeColor,
							strokeWidth: this.strokeWidth,
							strokeDasharray: this.strokeDasharray,
						},
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e);
					var i = e;
					(this.strokeColor = i.strokeColor),
						(this.strokeWidth = i.strokeWidth),
						(this.strokeDasharray = i.strokeDasharray),
						this.createVisual(),
						this.adjustVisual();
				}),
				(e.typeName = "LineMarker"),
				(e.title = "Line marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>'),
				e
			);
		})(M),
		P = (function (t) {
			function e(e, i, o, s) {
				var r =
					t.call(
						this,
						e,
						s ||
							'<svg viewBox="0 0 24 24"><path d="M17 8h3v12h1v1h-4v-1h1v-3h-4l-1.5 3H14v1h-4v-1h1l6-12m1 1l-3.5 7H18V9M5 3h5c1.11 0 2 .89 2 2v11H9v-5H6v5H3V5c0-1.11.89-2 2-2m1 2v4h3V5H6z"/></svg>'
					) || this;
				return (
					(r.fonts = []),
					(r.fontBoxes = []),
					(r.fonts = i),
					(r.currentFont = o),
					(r.setCurrentFont = r.setCurrentFont.bind(r)),
					r
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					return (
						(e.style.overflow = "auto"),
						(e.style.flexGrow = "2"),
						this.fonts.forEach(function (i) {
							var o = document.createElement("div");
							(o.style.display = "inline-block"),
								(o.style.alignItems = "center"),
								(o.style.justifyContent = "space-between"),
								(o.style.padding = "5px"),
								(o.style.borderWidth = "2px"),
								(o.style.borderStyle = "solid"),
								(o.style.overflow = "auto"),
								(o.style.maxWidth = 100 / t.fonts.length - 5 + "%"),
								(o.style.borderColor =
									i === t.currentFont
										? t.uiStyleSettings.toolboxAccentColor
										: "transparent"),
								o.addEventListener("click", function () {
									t.setCurrentFont(i, o);
								}),
								e.appendChild(o);
							var s = document.createElement("div");
							(s.style.display = "flex"),
								(s.style.minHeight = "20px"),
								(s.style.flexGrow = "2"),
								(s.style.fontFamily = i),
								(s.style.overflow = "auto");
							var r = document.createElement("div");
							(r.style.whiteSpace = "nowrap"),
								(r.style.overflow = "auto"),
								(r.style.textOverflow = "ellipsis"),
								(r.innerHTML = "The quick brown fox jumps over the lazy dog"),
								s.appendChild(r),
								o.appendChild(s),
								t.fontBoxes.push(o);
						}),
						e
					);
				}),
				(e.prototype.setCurrentFont = function (t, e) {
					var i = this;
					(this.currentFont = t),
						this.fontBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e ? i.uiStyleSettings.toolboxAccentColor : "transparent";
						}),
						this.onFontChanged && this.onFontChanged(this.currentFont);
				}),
				e
			);
		})(g),
		L = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.color = "transparent"),
					(s.padding = 5),
					(s.DEFAULT_TEXT = "your text here"),
					(s.text = s.DEFAULT_TEXT),
					(s.isMoved = !1),
					(s.color = o.defaultColor),
					(s.fontFamily = o.defaultFontFamily),
					(s.defaultSize = { x: 100, y: 30 }),
					(s.setColor = s.setColor.bind(s)),
					(s.setFont = s.setFont.bind(s)),
					(s.renderText = s.renderText.bind(s)),
					(s.sizeText = s.sizeText.bind(s)),
					(s.textEditDivClicked = s.textEditDivClicked.bind(s)),
					(s.showTextEditor = s.showTextEditor.bind(s)),
					(s.setSize = s.setSize.bind(s)),
					(s.positionTextEditor = s.positionTextEditor.bind(s)),
					(s.colorPanel = new f("Color", o.defaultColorSet, o.defaultColor)),
					(s.colorPanel.onColorChanged = s.setColor),
					(s.fontFamilyPanel = new P(
						"Font",
						o.defaultFontFamilies,
						o.defaultFontFamily
					)),
					(s.fontFamilyPanel.onFontChanged = s.setFont),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					if (
						t.prototype.ownsTarget.call(this, e) ||
						e === this.visual ||
						e === this.textElement ||
						e === this.bgRectangle
					)
						return !0;
					var i = !1;
					return (
						this.textElement.childNodes.forEach(function (t) {
							t === e && (i = !0);
						}),
						i
					);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createGroup()),
						(this.bgRectangle = n.createRect(1, 1, [["fill", "transparent"]])),
						this.visual.appendChild(this.bgRectangle),
						(this.textElement = n.createText([
							["fill", this.color],
							["font-family", this.fontFamily],
							["font-size", "16px"],
							["x", "0"],
							["y", "0"],
						])),
						this.textElement.transform.baseVal.appendItem(n.createTransform()),
						this.textElement.transform.baseVal.appendItem(n.createTransform()),
						this.visual.appendChild(this.textElement),
						this.addMarkerVisualToContainer(this.visual),
						this.renderText();
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						(this.isMoved = !1),
						(this.pointerDownPoint = e),
						(this.pointerDownTimestamp = Date.now()),
						"new" === this.state &&
							(this.createVisual(),
							this.moveVisual(e),
							(this._state = "creating"));
				}),
				(e.prototype.renderText = function () {
					var t = this;
					if (this.textElement) {
						for (; this.textElement.lastChild; )
							this.textElement.removeChild(this.textElement.lastChild);
						this.text
							.split(/\r\n|[\n\v\f\r\x85\u2028\u2029]/)
							.forEach(function (e) {
								t.textElement.appendChild(
									n.createTSpan("" === e.trim() ? " " : e.trim(), [
										["x", "0"],
										["dy", "1.2em"],
									])
								);
							}),
							setTimeout(this.sizeText, 10);
					}
				}),
				(e.prototype.getTextScale = function () {
					var t = this.textElement.getBBox(),
						e = 1;
					if (t.width > 0 && t.height > 0) {
						var i =
								(1 * this.width - (this.width * this.padding * 2) / 100) /
								t.width,
							o =
								(1 * this.height - (this.height * this.padding * 2) / 100) /
								t.height;
						e = Math.min(i, o);
					}
					return e;
				}),
				(e.prototype.getTextPosition = function (t) {
					var e = this.textElement.getBBox(),
						i = 0,
						o = 0;
					return (
						e.width > 0 &&
							e.height > 0 &&
							((i = (this.width - e.width * t) / 2),
							(o = this.height / 2 - (e.height * t) / 2)),
						{ x: i, y: o }
					);
				}),
				(e.prototype.sizeText = function () {
					var t = this.textElement.getBBox(),
						e = this.getTextScale(),
						i = this.getTextPosition(e);
					(i.y -= t.y * e),
						navigator.userAgent.indexOf("Edge/") > -1
							? (this.textElement.style.transform =
									"translate(" +
									i.x +
									"px, " +
									i.y +
									"px) scale(" +
									e +
									", " +
									e +
									")")
							: (this.textElement.transform.baseVal
									.getItem(0)
									.setTranslate(i.x, i.y),
							  this.textElement.transform.baseVal.getItem(1).setScale(e, e));
				}),
				(e.prototype.manipulate = function (e) {
					t.prototype.manipulate.call(this, e),
						void 0 !== this.pointerDownPoint &&
							(this.isMoved =
								Math.abs(e.x - this.pointerDownPoint.x) > 5 ||
								Math.abs(e.y - this.pointerDownPoint.y) > 5);
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e),
						(this.isMoved = !0),
						this.setSize(),
						this.sizeText();
				}),
				(e.prototype.setSize = function () {
					t.prototype.setSize.call(this),
						this.visual &&
							this.bgRectangle &&
							(n.setAttributes(this.visual, [
								["width", this.width.toString()],
								["height", this.height.toString()],
							]),
							n.setAttributes(this.bgRectangle, [
								["width", this.width.toString()],
								["height", this.height.toString()],
							]));
				}),
				(e.prototype.pointerUp = function (e) {
					var i = this.state;
					"creating" === i && (this._suppressMarkerCreateEvent = !0),
						t.prototype.pointerUp.call(this, e),
						this.setSize(),
						("creating" === i ||
							(!this.isMoved &&
								Date.now() - this.pointerDownTimestamp > 500)) &&
							this.showTextEditor(),
						(this.pointerDownPoint = void 0);
				}),
				(e.prototype.showTextEditor = function () {
					var t = this;
					(this._state = "edit"),
						(this.overlayContainer.innerHTML = ""),
						(this.textEditDiv = document.createElement("div")),
						(this.textEditDiv.style.flexGrow = "2"),
						(this.textEditDiv.style.alignItems = "center"),
						(this.textEditDiv.style.justifyContent = "center"),
						(this.textEditDiv.style.pointerEvents = "auto"),
						(this.textEditDiv.style.overflow = "auto"),
						(this.textEditor = document.createElement("div")),
						(this.textEditor.style.position = "absolute"),
						(this.textEditor.style.fontFamily = this.fontFamily),
						(this.textEditor.style.lineHeight = "1em"),
						(this.textEditor.innerText = this.text),
						(this.textEditor.contentEditable = "true"),
						(this.textEditor.style.color = this.color),
						(this.textEditor.style.whiteSpace = "pre"),
						this.positionTextEditor(),
						this.textEditor.addEventListener("pointerup", function (t) {
							t.stopPropagation();
						}),
						this.textEditor.addEventListener("input", function () {
							for (
								var e = Number.parseFloat(t.textEditor.style.fontSize);
								t.textEditor.clientWidth >=
									Number.parseInt(t.textEditor.style.maxWidth) && e > 0.9;

							)
								(e -= 0.1),
									(t.textEditor.style.fontSize = Math.max(e, 0.9) + "em");
						}),
						this.textEditor.addEventListener("keyup", function (t) {
							t.cancelBubble = !0;
						}),
						this.textEditor.addEventListener("paste", function (t) {
							if (t.clipboardData) {
								var e = t.clipboardData.getData("text"),
									i = window.getSelection();
								if (!i.rangeCount) return !1;
								i.deleteFromDocument(),
									i.getRangeAt(0).insertNode(document.createTextNode(e)),
									t.preventDefault();
							}
						}),
						this.textEditDiv.addEventListener("pointerup", function () {
							t.textEditDivClicked(t.textEditor.innerText);
						}),
						this.textEditDiv.appendChild(this.textEditor),
						this.overlayContainer.appendChild(this.textEditDiv),
						this.hideVisual(),
						this.textEditor.focus(),
						document.execCommand("selectAll");
				}),
				(e.prototype.positionTextEditor = function () {
					if ("edit" === this.state)
						if (void 0 === this.textEditor) this.showTextEditor();
						else {
							this.textElement.style.display = "";
							var t = this.getTextScale(),
								e = this.rotatePoint({
									x: this.left + this.width / 2,
									y: this.top + this.height / 2,
								}),
								i = this.textElement.getBBox(),
								o = { x: i.width * t, y: i.height * t };
							(e.x -= o.x / 2),
								(e.y -= o.y / 2),
								(this.textEditor.style.top = e.y + "px"),
								(this.textEditor.style.left = e.x + "px"),
								(this.textEditor.style.maxWidth =
									this.overlayContainer.offsetWidth - e.x + "px"),
								(this.textEditor.style.fontSize = Math.max(16 * t, 12) + "px"),
								(this.textElement.style.display = "none");
						}
				}),
				(e.prototype.textEditDivClicked = function (t) {
					(this.text = t.trim()),
						(this.overlayContainer.innerHTML = ""),
						this.renderText(),
						this.showVisual(),
						this._suppressMarkerCreateEvent &&
							((this._suppressMarkerCreateEvent = !1),
							this.onMarkerCreated && this.onMarkerCreated(this)),
						this.stateChanged();
				}),
				(e.prototype.select = function () {
					t.prototype.select.call(this),
						"edit" === this.state &&
							this.textEditDivClicked(this.textEditor.innerText);
				}),
				(e.prototype.deselect = function () {
					"edit" === this.state &&
						this.textEditDivClicked(this.textEditor.innerText),
						t.prototype.deselect.call(this);
				}),
				(e.prototype.dblClick = function (e, i) {
					t.prototype.dblClick.call(this, e, i), this.showTextEditor();
				}),
				(e.prototype.setColor = function (t) {
					this.textElement && n.setAttributes(this.textElement, [["fill", t]]),
						(this.color = t),
						this.textEditor && (this.textEditor.style.color = this.color),
						this.colorChanged(t);
				}),
				(e.prototype.setFont = function (t) {
					this.textElement &&
						n.setAttributes(this.textElement, [["font-family", t]]),
						(this.fontFamily = t),
						this.textEditor &&
							(this.textEditor.style.fontFamily = this.fontFamily),
						this.renderText(),
						this.stateChanged();
				}),
				(e.prototype.hideVisual = function () {
					(this.textElement.style.display = "none"), this.hideControlBox();
				}),
				(e.prototype.showVisual = function () {
					"edit" === this.state && (this._state = "select"),
						(this.textElement.style.display = ""),
						this.showControlBox();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [this.colorPanel, this.fontFamilyPanel];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{
							color: this.color,
							fontFamily: this.fontFamily,
							padding: this.padding,
							text: this.text,
						},
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					var i = e;
					(this.color = i.color),
						(this.fontFamily = i.fontFamily),
						(this.padding = i.padding),
						(this.text = i.text),
						this.createVisual(),
						t.prototype.restoreState.call(this, e),
						this.setSize();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i),
						this.setSize(),
						this.sizeText(),
						this.positionTextEditor();
				}),
				(e.typeName = "TextMarker"),
				(e.title = "Text marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M9.6 14L12 7.7l2.4 6.3M11 5L5.5 19h2.2l1.1-3H15l1.1 3h2.2L13 5h-2z"/></svg>'),
				e
			);
		})(S),
		D = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.color = "transparent"),
					(s.lineWidth = 3),
					(s.drawing = !1),
					(s.pixelRatio = 1),
					(s.color = o.defaultColor),
					(s.lineWidth = o.defaultStrokeWidth),
					(s.pixelRatio = o.freehandPixelRatio),
					(s.setColor = s.setColor.bind(s)),
					(s.addCanvas = s.addCanvas.bind(s)),
					(s.finishCreation = s.finishCreation.bind(s)),
					(s.setLineWidth = s.setLineWidth.bind(s)),
					(s.colorPanel = new f("Color", o.defaultColorSet, o.defaultColor)),
					(s.colorPanel.onColorChanged = s.setColor),
					(s.lineWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.lineWidthPanel.onWidthChanged = s.setLineWidth),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.visual &&
						e !== this.drawingImage
					);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createGroup()),
						(this.drawingImage = n.createImage()),
						this.visual.appendChild(this.drawingImage);
					var t = n.createTransform();
					this.visual.transform.baseVal.appendItem(t),
						this.addMarkerVisualToContainer(this.visual);
				}),
				(e.prototype.pointerDown = function (e, i) {
					"new" === this.state &&
						(this.addCanvas(), this.createVisual(), (this._state = "creating")),
						"creating" === this.state
							? ((this.canvasContext.strokeStyle = this.color),
							  (this.canvasContext.lineWidth = this.lineWidth),
							  this.canvasContext.beginPath(),
							  this.canvasContext.moveTo(e.x, e.y),
							  (this.drawing = !0))
							: t.prototype.pointerDown.call(this, e, i);
				}),
				(e.prototype.manipulate = function (e) {
					"creating" === this.state
						? this.drawing &&
						  (this.canvasContext.lineTo(e.x, e.y), this.canvasContext.stroke())
						: t.prototype.manipulate.call(this, e);
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e),
						n.setAttributes(this.visual, [
							["width", this.width.toString()],
							["height", this.height.toString()],
						]),
						n.setAttributes(this.drawingImage, [
							["width", this.width.toString()],
							["height", this.height.toString()],
						]);
				}),
				(e.prototype.pointerUp = function (e) {
					"creating" === this._state
						? this.drawing &&
						  (this.canvasContext.closePath(),
						  (this.drawing = !1),
						  this.globalSettings.newFreehandMarkerOnPointerUp &&
								this.finishCreation())
						: t.prototype.pointerUp.call(this, e);
				}),
				(e.prototype.addCanvas = function () {
					(this.overlayContainer.innerHTML = ""),
						(this.canvasElement = document.createElement("canvas")),
						(this.canvasElement.width =
							this.overlayContainer.clientWidth * this.pixelRatio),
						(this.canvasElement.height =
							this.overlayContainer.clientHeight * this.pixelRatio),
						(this.canvasContext = this.canvasElement.getContext("2d")),
						this.canvasContext.scale(this.pixelRatio, this.pixelRatio),
						this.overlayContainer.appendChild(this.canvasElement);
				}),
				(e.prototype.select = function () {
					"creating" === this.state && this.finishCreation(),
						t.prototype.select.call(this);
				}),
				(e.prototype.deselect = function () {
					"creating" === this.state && this.finishCreation(),
						t.prototype.deselect.call(this);
				}),
				(e.prototype.finishCreation = function () {
					for (
						var t = this.canvasContext.getImageData(
								0,
								0,
								this.canvasElement.width,
								this.canvasElement.height
							),
							e = [
								this.canvasElement.width + 1,
								this.canvasElement.height + 1,
								-1,
								-1,
							],
							i = e[0],
							o = e[1],
							s = e[2],
							r = e[3],
							n = !1,
							a = 0;
						a < this.canvasElement.height;
						a++
					)
						for (var h = 0; h < this.canvasElement.width; h++) {
							t.data[a * this.canvasElement.width * 4 + 4 * h + 3] > 0 &&
								((n = !0),
								a < o && (o = a),
								h < i && (i = h),
								a > r && (r = a),
								h > s && (s = h));
						}
					if (n) {
						(this.left = i / this.pixelRatio),
							(this.top = o / this.pixelRatio),
							(this.width = (s - i) / this.pixelRatio),
							(this.height = (r - o) / this.pixelRatio);
						var l = document.createElement("canvas");
						(l.width = s - i),
							(l.height = r - o),
							l
								.getContext("2d")
								.putImageData(
									this.canvasContext.getImageData(i, o, s - i, r - o),
									0,
									0
								),
							(this.drawingImgUrl = l.toDataURL("image/png")),
							this.setDrawingImage(),
							(this._state = "select"),
							this.onMarkerCreated && this.onMarkerCreated(this);
					}
					this.overlayContainer.innerHTML = "";
				}),
				(e.prototype.setDrawingImage = function () {
					n.setAttributes(this.drawingImage, [
						["width", this.width.toString()],
						["height", this.height.toString()],
					]),
						n.setAttributes(this.drawingImage, [["href", this.drawingImgUrl]]),
						this.moveVisual({ x: this.left, y: this.top });
				}),
				(e.prototype.setColor = function (t) {
					(this.color = t), this.colorChanged(t);
				}),
				(e.prototype.setLineWidth = function (t) {
					this.lineWidth = t;
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return "new" === this.state || "creating" === this.state
							? [this.colorPanel, this.lineWidthPanel]
							: [];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{ drawingImgUrl: this.drawingImgUrl },
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					this.createVisual(),
						t.prototype.restoreState.call(this, e),
						(this.drawingImgUrl = e.drawingImgUrl),
						this.setDrawingImage();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i), this.setDrawingImage();
				}),
				(e.typeName = "FreehandMarker"),
				(e.title = "Freehand marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M9.75 20.85c1.78-.7 1.39-2.63.49-3.85-.89-1.25-2.12-2.11-3.36-2.94A9.817 9.817 0 014.54 12c-.28-.33-.85-.94-.27-1.06.59-.12 1.61.46 2.13.68.91.38 1.81.82 2.65 1.34l1.01-1.7C8.5 10.23 6.5 9.32 4.64 9.05c-1.06-.16-2.18.06-2.54 1.21-.32.99.19 1.99.77 2.77 1.37 1.83 3.5 2.71 5.09 4.29.34.33.75.72.95 1.18.21.44.16.47-.31.47-1.24 0-2.79-.97-3.8-1.61l-1.01 1.7c1.53.94 4.09 2.41 5.96 1.79m11.09-15.6c.22-.22.22-.58 0-.79l-1.3-1.3a.562.562 0 00-.78 0l-1.02 1.02 2.08 2.08M11 10.92V13h2.08l6.15-6.15-2.08-2.08L11 10.92z"/></svg>'),
				e
			);
		})(S),
		A = (function (t) {
			function e(e, i, o) {
				var s =
					t.call(
						this,
						e,
						o ||
							'<svg viewBox="0 0 24 24"><path d="M8 14v4l-6-6 6-6v4h8V6l6 6-6 6v-4H8z"/></svg>'
					) || this;
				return (
					(s.typeBoxes = []),
					(s.currentType = i),
					(s.setCurrentType = s.setCurrentType.bind(s)),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					(e.style.display = "flex"),
						(e.style.overflow = "auto"),
						(e.style.flexGrow = "2");
					for (
						var i = function (i) {
								var s = "both";
								switch (i) {
									case 0:
										s = "both";
										break;
									case 1:
										s = "start";
										break;
									case 2:
										s = "end";
										break;
									case 3:
										s = "none";
								}
								var r = document.createElement("div");
								if (
									((r.style.display = "flex"),
									(r.style.flexGrow = "2"),
									(r.style.alignItems = "center"),
									(r.style.justifyContent = "space-between"),
									(r.style.padding = "5px"),
									(r.style.borderWidth = "2px"),
									(r.style.borderStyle = "solid"),
									(r.style.borderColor =
										s === o.currentType
											? o.uiStyleSettings.toolboxAccentColor
											: "transparent"),
									r.addEventListener("click", function () {
										t.setCurrentType(s, r);
									}),
									e.appendChild(r),
									"both" === s || "start" === s)
								) {
									var n = document.createElement("div");
									(n.style.display = "flex"),
										(n.style.alignItems = "center"),
										(n.style.minHeight = "20px"),
										(n.innerHTML =
											'<svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg">\n          <polygon points="0,5 10,0 10,10" fill="' +
											(void 0 !== o.uiStyleSettings
												? o.uiStyleSettings.toolboxColor
												: "#eeeeee") +
											'" />\n        </svg>'),
										(n.style.marginLeft = "5px"),
										r.appendChild(n);
								}
								var a = document.createElement("div");
								(a.style.display = "flex"),
									(a.style.alignItems = "center"),
									(a.style.minHeight = "20px"),
									(a.style.flexGrow = "2");
								var h = document.createElement("hr");
								if (
									((h.style.minWidth = "20px"),
									(h.style.border = "0px"),
									(h.style.borderTop =
										"3px solid " +
										(void 0 !== o.uiStyleSettings
											? o.uiStyleSettings.toolboxColor
											: "#eeeeee")),
									(h.style.flexGrow = "2"),
									a.appendChild(h),
									r.appendChild(a),
									"both" === s || "end" === s)
								) {
									var l = document.createElement("div");
									(l.style.display = "flex"),
										(l.style.alignItems = "center"),
										(l.style.minHeight = "20px"),
										(l.innerHTML =
											'<svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg">\n          <polygon points="0,0 10,5 0,10" fill="' +
											(void 0 !== o.uiStyleSettings
												? o.uiStyleSettings.toolboxColor
												: "#eeeeee") +
											'" />\n        </svg>'),
										(l.style.marginRight = "5px"),
										r.appendChild(l);
								}
								o.typeBoxes.push(r);
							},
							o = this,
							s = 0;
						s < 4;
						s++
					)
						i(s);
					return e;
				}),
				(e.prototype.setCurrentType = function (t, e) {
					var i = this;
					(this.currentType = t),
						this.typeBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e
									? void 0 !== i.uiStyleSettings
										? i.uiStyleSettings.toolboxAccentColor
										: "#3080c3"
									: "transparent";
						}),
						this.onArrowTypeChanged &&
							this.onArrowTypeChanged(this.currentType);
				}),
				e
			);
		})(g),
		_ = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.arrowType = "end"),
					(s.arrowBaseHeight = 10),
					(s.arrowBaseWidth = 10),
					(s.getArrowPoints = s.getArrowPoints.bind(s)),
					(s.setArrowType = s.setArrowType.bind(s)),
					(s.arrowTypePanel = new A("Arrow type", "end")),
					(s.arrowTypePanel.onArrowTypeChanged = s.setArrowType),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.arrow1 &&
						e !== this.arrow2
					);
				}),
				(e.prototype.getArrowPoints = function (t, e) {
					var i = this.arrowBaseWidth + 2 * this.strokeWidth,
						o = this.arrowBaseHeight + 2 * this.strokeWidth;
					return (
						t -
						i / 2 +
						"," +
						(e + o / 2) +
						" " +
						t +
						"," +
						(e - o / 2) +
						" " +
						(t + i / 2) +
						"," +
						(e + o / 2)
					);
				}),
				(e.prototype.createTips = function () {
					(this.arrow1 = n.createPolygon(
						this.getArrowPoints(this.x1, this.y1),
						[["fill", this.strokeColor]]
					)),
						this.arrow1.transform.baseVal.appendItem(n.createTransform()),
						this.visual.appendChild(this.arrow1),
						(this.arrow2 = n.createPolygon(
							this.getArrowPoints(this.x2, this.y2),
							[["fill", this.strokeColor]]
						)),
						this.arrow2.transform.baseVal.appendItem(n.createTransform()),
						this.visual.appendChild(this.arrow2);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"creating" === this.state && this.createTips();
				}),
				(e.prototype.adjustVisual = function () {
					if (
						(t.prototype.adjustVisual.call(this),
						this.arrow1 &&
							this.arrow2 &&
							((this.arrow1.style.display =
								"both" === this.arrowType || "start" === this.arrowType
									? ""
									: "none"),
							(this.arrow2.style.display =
								"both" === this.arrowType || "end" === this.arrowType
									? ""
									: "none"),
							n.setAttributes(this.arrow1, [
								["points", this.getArrowPoints(this.x1, this.y1)],
								["fill", this.strokeColor],
							]),
							n.setAttributes(this.arrow2, [
								["points", this.getArrowPoints(this.x2, this.y2)],
								["fill", this.strokeColor],
							]),
							Math.abs(this.x1 - this.x2) > 0.1))
					) {
						var e =
								(180 * Math.atan((this.y2 - this.y1) / (this.x2 - this.x1))) /
									Math.PI +
								90 * Math.sign(this.x1 - this.x2),
							i = this.arrow1.transform.baseVal.getItem(0);
						i.setRotate(e, this.x1, this.y1),
							this.arrow1.transform.baseVal.replaceItem(i, 0);
						var o = this.arrow2.transform.baseVal.getItem(0);
						o.setRotate(e + 180, this.x2, this.y2),
							this.arrow2.transform.baseVal.replaceItem(o, 0);
					}
				}),
				(e.prototype.setArrowType = function (t) {
					(this.arrowType = t), this.adjustVisual(), this.stateChanged();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
							this.arrowTypePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{ arrowType: this.arrowType },
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e);
					var i = e;
					(this.arrowType = i.arrowType),
						this.createTips(),
						this.adjustVisual();
				}),
				(e.typeName = "ArrowMarker"),
				(e.title = "Arrow marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 7 15.59V9H5v10h10v-2H8.41L19 6.41z"/></svg>'),
				e
			);
		})(T),
		I = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.fillColor = o.defaultFillColor),
					(s.strokeWidth = 0),
					(s.fillPanel = new f("Color", o.defaultColorSet, o.defaultFillColor)),
					(s.fillPanel.onColorChanged = s.setFillColor),
					s
				);
			}
			return (
				i(e, t),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [this.fillPanel];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = t.prototype.getState.call(this);
					return (i.typeName = e.typeName), i;
				}),
				(e.typeName = "CoverMarker"),
				(e.title = "Cover marker"),
				(e.icon = '<svg viewBox="0 0 24 24"><path d="M4 6v13h16V6H4z"/></svg>'),
				e
			);
		})(k),
		W = (function (t) {
			function e(e, i, o, s) {
				var r =
					t.call(
						this,
						e,
						s ||
							'<svg viewBox="0 0 24 24"><path d="M17.66 8L12 2.35 6.34 8A8.02 8.02 0 004 13.64c0 2 .78 4.11 2.34 5.67a7.99 7.99 0 0011.32 0c1.56-1.56 2.34-3.67 2.34-5.67S19.22 9.56 17.66 8M6 14c0-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 18 12 18 14H6z"/></svg>'
					) || this;
				return (
					(r.opacities = []),
					(r.opacityBoxes = []),
					(r.opacities = i),
					(r.currentOpacity = o),
					(r.setCurrentOpacity = r.setCurrentOpacity.bind(r)),
					r
				);
			}
			return (
				i(e, t),
				(e.prototype.getUi = function () {
					var t = this,
						e = document.createElement("div");
					return (
						(e.style.display = "flex"),
						(e.style.overflow = "auto"),
						(e.style.flexGrow = "2"),
						(e.style.justifyContent = "space-between"),
						this.opacities.forEach(function (i) {
							var o = document.createElement("div");
							(o.style.display = "flex"),
								(o.style.alignItems = "center"),
								(o.style.justifyContent = "center"),
								(o.style.padding = "5px"),
								(o.style.borderWidth = "2px"),
								(o.style.borderStyle = "solid"),
								(o.style.borderColor =
									i === t.currentOpacity
										? t.uiStyleSettings.toolboxAccentColor
										: "transparent"),
								o.addEventListener("click", function () {
									t.setCurrentOpacity(i, o);
								}),
								e.appendChild(o);
							var s = document.createElement("div");
							(s.innerText = 100 * i + "%"),
								o.appendChild(s),
								t.opacityBoxes.push(o);
						}),
						e
					);
				}),
				(e.prototype.setCurrentOpacity = function (t, e) {
					var i = this;
					(this.currentOpacity = t),
						this.opacityBoxes.forEach(function (t) {
							t.style.borderColor =
								t === e ? i.uiStyleSettings.toolboxAccentColor : "transparent";
						}),
						this.onOpacityChanged && this.onOpacityChanged(this.currentOpacity);
				}),
				e
			);
		})(g),
		N = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.setOpacity = s.setOpacity.bind(s)),
					(s.fillColor = o.defaultHighlightColor),
					(s.strokeWidth = 0),
					(s.opacity = o.defaultHighlightOpacity),
					(s.fillPanel = new f("Color", o.defaultColorSet, s.fillColor)),
					(s.fillPanel.onColorChanged = s.setFillColor),
					(s.opacityPanel = new W("Opacity", o.defaultOpacitySteps, s.opacity)),
					(s.opacityPanel.onOpacityChanged = s.setOpacity),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.setOpacity = function (t) {
					(this.opacity = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["opacity", this.opacity.toString()],
							]),
						this.stateChanged();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [this.fillPanel, this.opacityPanel];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = t.prototype.getState.call(this);
					return (i.typeName = e.typeName), i;
				}),
				(e.typeName = "HighlightMarker"),
				(e.title = "Highlight marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M18.5 1.15c-.53 0-1.04.19-1.43.58l-5.81 5.82 5.65 5.65 5.82-5.81c.77-.78.77-2.04 0-2.83l-2.84-2.83c-.39-.39-.89-.58-1.39-.58M10.3 8.5l-5.96 5.96c-.78.78-.78 2.04.02 2.85C3.14 18.54 1.9 19.77.67 21h5.66l.86-.86c.78.76 2.03.75 2.81-.02l5.95-5.96"/></svg>'),
				e
			);
		})(I),
		H =
			'<svg viewBox="0 0 24 24"><path d="M9.62 12L12 5.67 14.37 12M11 3L5.5 17h2.25l1.12-3h6.25l1.13 3h2.25L13 3h-2z"/></svg>',
		z =
			'<svg viewBox="0 0 24 24"><path d="M19 11.5s-2 2.17-2 3.5a2 2 0 002 2 2 2 0 002-2c0-1.33-2-3.5-2-3.5M5.21 10L10 5.21 14.79 10m1.77-1.06L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.56-.59 1.53 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.59.59-1.56 0-2.12z"/></svg>',
		R = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.bgColor = "transparent"),
					(s.tipPosition = { x: 0, y: 0 }),
					(s.tipBase1Position = { x: 0, y: 0 }),
					(s.tipBase2Position = { x: 0, y: 0 }),
					(s.tipMoving = !1),
					(s.color = o.defaultStrokeColor),
					(s.bgColor = o.defaultFillColor),
					(s.fontFamily = o.defaultFontFamily),
					(s.defaultSize = { x: 100, y: 30 }),
					(s.setBgColor = s.setBgColor.bind(s)),
					(s.getTipPoints = s.getTipPoints.bind(s)),
					(s.positionTip = s.positionTip.bind(s)),
					(s.setTipPoints = s.setTipPoints.bind(s)),
					(s.colorPanel = new f("Text color", o.defaultColorSet, s.color, H)),
					(s.colorPanel.onColorChanged = s.setColor),
					(s.bgColorPanel = new f(
						"Fill color",
						o.defaultColorSet,
						s.bgColor,
						z
					)),
					(s.bgColorPanel.onColorChanged = s.setBgColor),
					(s.fontFamilyPanel = new P(
						"Font",
						o.defaultFontFamilies,
						o.defaultFontFamily
					)),
					(s.fontFamilyPanel.onFontChanged = s.setFont),
					(s.tipGrip = new C()),
					s.tipGrip.visual.transform.baseVal.appendItem(n.createTransform()),
					s.controlBox.appendChild(s.tipGrip.visual),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return (
						t.prototype.ownsTarget.call(this, e) ||
						this.tipGrip.ownsTarget(e) ||
						this.tip === e
					);
				}),
				(e.prototype.createTip = function () {
					n.setAttributes(this.bgRectangle, [
						["fill", this.bgColor],
						["rx", "10px"],
					]),
						(this.tip = n.createPolygon(this.getTipPoints(), [
							["fill", this.bgColor],
						])),
						this.visual.appendChild(this.tip);
				}),
				(e.prototype.pointerDown = function (e, i) {
					"new" === this.state && t.prototype.pointerDown.call(this, e, i),
						"creating" === this.state
							? this.createTip()
							: this.tipGrip.ownsTarget(i)
							? ((this.manipulationStartLeft = this.left),
							  (this.manipulationStartTop = this.top),
							  (this.tipMoving = !0))
							: t.prototype.pointerDown.call(this, e, i);
				}),
				(e.prototype.pointerUp = function (e) {
					if (this.tipMoving)
						(this.tipMoving = !1),
							(this.isMoved = !0),
							t.prototype.pointerUp.call(this, e);
					else {
						var i = "creating" === this.state;
						t.prototype.pointerUp.call(this, e),
							this.setTipPoints(i),
							this.positionTip();
					}
				}),
				(e.prototype.manipulate = function (e) {
					if (this.tipMoving) {
						var i = this.unrotatePoint(e);
						(this.tipPosition = {
							x: i.x - this.manipulationStartLeft,
							y: i.y - this.manipulationStartTop,
						}),
							this.positionTip();
					} else t.prototype.manipulate.call(this, e);
				}),
				(e.prototype.setBgColor = function (t) {
					this.bgRectangle &&
						this.tip &&
						(n.setAttributes(this.bgRectangle, [["fill", t]]),
						n.setAttributes(this.tip, [["fill", t]])),
						(this.bgColor = t),
						this.fillColorChanged(t);
				}),
				(e.prototype.getTipPoints = function () {
					return (
						this.setTipPoints("creating" === this.state),
						this.tipBase1Position.x +
							"," +
							this.tipBase1Position.y +
							" " +
							this.tipBase2Position.x +
							"," +
							this.tipBase2Position.y +
							" " +
							this.tipPosition.x +
							"," +
							this.tipPosition.y
					);
				}),
				(e.prototype.setTipPoints = function (t) {
					void 0 === t && (t = !1);
					var e = Math.min(this.height / 2, 15),
						i = this.height / 5;
					t && (this.tipPosition = { x: e + i / 2, y: this.height + 20 });
					var o = Math.atan(this.height / 2 / (this.width / 2));
					if (
						this.tipPosition.x < this.width / 2 &&
						this.tipPosition.y < this.height / 2
					)
						o <
						Math.atan(
							(this.height / 2 - this.tipPosition.y) /
								(this.width / 2 - this.tipPosition.x)
						)
							? ((i = this.width / 5),
							  (e = Math.min(this.width / 2, 15)),
							  (this.tipBase1Position = { x: e, y: 0 }),
							  (this.tipBase2Position = { x: e + i, y: 0 }))
							: ((this.tipBase1Position = { x: 0, y: e }),
							  (this.tipBase2Position = { x: 0, y: e + i }));
					else if (
						this.tipPosition.x >= this.width / 2 &&
						this.tipPosition.y < this.height / 2
					) {
						o <
						Math.atan(
							(this.height / 2 - this.tipPosition.y) /
								(this.tipPosition.x - this.width / 2)
						)
							? ((i = this.width / 5),
							  (e = Math.min(this.width / 2, 15)),
							  (this.tipBase1Position = { x: this.width - e - i, y: 0 }),
							  (this.tipBase2Position = { x: this.width - e, y: 0 }))
							: ((this.tipBase1Position = { x: this.width, y: e }),
							  (this.tipBase2Position = { x: this.width, y: e + i }));
					} else if (
						this.tipPosition.x >= this.width / 2 &&
						this.tipPosition.y >= this.height / 2
					) {
						o <
						Math.atan(
							(this.tipPosition.y - this.height / 2) /
								(this.tipPosition.x - this.width / 2)
						)
							? ((i = this.width / 5),
							  (e = Math.min(this.width / 2, 15)),
							  (this.tipBase1Position = {
									x: this.width - e - i,
									y: this.height,
							  }),
							  (this.tipBase2Position = { x: this.width - e, y: this.height }))
							: ((this.tipBase1Position = {
									x: this.width,
									y: this.height - e - i,
							  }),
							  (this.tipBase2Position = {
									x: this.width,
									y: this.height - e,
							  }));
					} else {
						o <
						Math.atan(
							(this.tipPosition.y - this.height / 2) /
								(this.width / 2 - this.tipPosition.x)
						)
							? ((i = this.width / 5),
							  (e = Math.min(this.width / 2, 15)),
							  (this.tipBase1Position = { x: e, y: this.height }),
							  (this.tipBase2Position = { x: e + i, y: this.height }))
							: ((this.tipBase1Position = { x: 0, y: this.height - e }),
							  (this.tipBase2Position = { x: 0, y: this.height - e - i }));
					}
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e), this.positionTip();
				}),
				(e.prototype.positionTip = function () {
					n.setAttributes(this.tip, [["points", this.getTipPoints()]]);
					var t = this.tipGrip.visual.transform.baseVal.getItem(0);
					t.setTranslate(this.tipPosition.x, this.tipPosition.y),
						this.tipGrip.visual.transform.baseVal.replaceItem(t, 0);
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [this.colorPanel, this.bgColorPanel, this.fontFamilyPanel];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.select = function () {
					this.positionTip(), t.prototype.select.call(this);
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{ bgColor: this.bgColor, tipPosition: this.tipPosition },
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					var i = e;
					(this.bgColor = i.bgColor),
						(this.tipPosition = i.tipPosition),
						t.prototype.restoreState.call(this, e),
						this.createTip(),
						this.setTipPoints();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i),
						(this.tipPosition = {
							x: this.tipPosition.x * e,
							y: this.tipPosition.y * i,
						}),
						this.positionTip();
				}),
				(e.typeName = "CalloutMarker"),
				(e.title = "Callout marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M4 2h16a2 2 0 012 2v12a2 2 0 01-2 2h-4l-4 4-4-4H4a2 2 0 01-2-2V4a2 2 0 012-2m0 2v12h4.83L12 19.17 15.17 16H20V4H4m2 3h12v2H6V7m0 4h10v2H6v-2z"/></svg>'),
				e
			);
		})(L),
		O = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.fillColor = "transparent"),
					(s.strokeColor = "transparent"),
					(s.strokeWidth = 0),
					(s.strokeDasharray = ""),
					(s.opacity = 1),
					(s.strokeColor = o.defaultColor),
					(s.strokeWidth = o.defaultStrokeWidth),
					(s.strokeDasharray = o.defaultStrokeDasharray),
					(s.fillColor = o.defaultFillColor),
					(s.setStrokeColor = s.setStrokeColor.bind(s)),
					(s.setFillColor = s.setFillColor.bind(s)),
					(s.setStrokeWidth = s.setStrokeWidth.bind(s)),
					(s.setStrokeDasharray = s.setStrokeDasharray.bind(s)),
					(s.setOpacity = s.setOpacity.bind(s)),
					(s.createVisual = s.createVisual.bind(s)),
					(s.strokePanel = new f(
						"Line color",
						r(o.defaultColorSet, ["transparent"]),
						o.defaultColor
					)),
					(s.strokePanel.onColorChanged = s.setStrokeColor),
					(s.fillPanel = new f(
						"Fill color",
						r(o.defaultColorSet, ["transparent"]),
						s.fillColor,
						z
					)),
					(s.fillPanel.onColorChanged = s.setFillColor),
					(s.strokeWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.strokeWidthPanel.onWidthChanged = s.setStrokeWidth),
					(s.strokeStylePanel = new w(
						"Line style",
						o.defaultStrokeDasharrays,
						o.defaultStrokeDasharray
					)),
					(s.strokeStylePanel.onStyleChanged = s.setStrokeDasharray),
					(s.opacityPanel = new W("Opacity", o.defaultOpacitySteps, s.opacity)),
					(s.opacityPanel.onOpacityChanged = s.setOpacity),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(!t.prototype.ownsTarget.call(this, e) && e !== this.visual);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createEllipse(this.width / 2, this.height / 2, [
						["fill", this.fillColor],
						["stroke", this.strokeColor],
						["stroke-width", this.strokeWidth.toString()],
						["stroke-dasharray", this.strokeDasharray],
						["opacity", this.opacity.toString()],
					])),
						this.addMarkerVisualToContainer(this.visual);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"new" === this.state &&
							(this.createVisual(),
							this.moveVisual(e),
							(this._state = "creating"));
				}),
				(e.prototype.manipulate = function (e) {
					t.prototype.manipulate.call(this, e);
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e), this.setSize();
				}),
				(e.prototype.setSize = function () {
					t.prototype.setSize.call(this),
						n.setAttributes(this.visual, [
							["cx", (this.width / 2).toString()],
							["cy", (this.height / 2).toString()],
							["rx", (this.width / 2).toString()],
							["ry", (this.height / 2).toString()],
						]);
				}),
				(e.prototype.pointerUp = function (e) {
					t.prototype.pointerUp.call(this, e), this.setSize();
				}),
				(e.prototype.setStrokeColor = function (t) {
					(this.strokeColor = t),
						this.visual &&
							n.setAttributes(this.visual, [["stroke", this.strokeColor]]),
						this.colorChanged(t),
						this.stateChanged();
				}),
				(e.prototype.setFillColor = function (t) {
					(this.fillColor = t),
						this.visual &&
							n.setAttributes(this.visual, [["fill", this.fillColor]]),
						this.fillColorChanged(t),
						this.stateChanged();
				}),
				(e.prototype.setStrokeWidth = function (t) {
					(this.strokeWidth = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["stroke-width", this.strokeWidth.toString()],
							]),
						this.stateChanged();
				}),
				(e.prototype.setStrokeDasharray = function (t) {
					(this.strokeDasharray = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["stroke-dasharray", this.strokeDasharray],
							]),
						this.stateChanged();
				}),
				(e.prototype.setOpacity = function (t) {
					(this.opacity = t),
						this.visual &&
							n.setAttributes(this.visual, [
								["opacity", this.opacity.toString()],
							]),
						this.stateChanged();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.fillPanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
							this.opacityPanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{
							fillColor: this.fillColor,
							strokeColor: this.strokeColor,
							strokeWidth: this.strokeWidth,
							strokeDasharray: this.strokeDasharray,
							opacity: this.opacity,
						},
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					var i = e;
					(this.fillColor = i.fillColor),
						(this.strokeColor = i.strokeColor),
						(this.strokeWidth = i.strokeWidth),
						(this.strokeDasharray = i.strokeDasharray),
						(this.opacity = i.opacity),
						this.createVisual(),
						t.prototype.restoreState.call(this, e),
						this.setSize();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i), this.setSize();
				}),
				(e.typeName = "EllipseMarker"),
				(e.title = "Ellipse marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M12 4C6.5 4 2 7.58 2 12s4.5 8 10 8 10-3.58 10-8-4.5-8-10-8z"/></svg>'),
				e
			);
		})(S),
		V = (function (t) {
			function e(e, i, o) {
				return t.call(this, e, i, o) || this;
			}
			return (
				i(e, t),
				Object.defineProperty(e.prototype, "tipLength", {
					get: function () {
						return 10 + 3 * this.strokeWidth;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.tip1 &&
						e !== this.tip2
					);
				}),
				(e.prototype.createTips = function () {
					(this.tip1 = n.createLine(
						this.x1 - this.tipLength / 2,
						this.y1,
						this.x1 + this.tipLength / 2,
						this.y1,
						[
							["stroke", this.strokeColor],
							["stroke-width", this.strokeWidth.toString()],
						]
					)),
						this.tip1.transform.baseVal.appendItem(n.createTransform()),
						this.visual.appendChild(this.tip1),
						(this.tip2 = n.createLine(
							this.x2 - this.tipLength / 2,
							this.y2,
							this.x2 + this.tipLength / 2,
							this.y2,
							[
								["stroke", this.strokeColor],
								["stroke-width", this.strokeWidth.toString()],
							]
						)),
						this.tip2.transform.baseVal.appendItem(n.createTransform()),
						this.visual.appendChild(this.tip2);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						"creating" === this.state && this.createTips();
				}),
				(e.prototype.adjustVisual = function () {
					if (
						(t.prototype.adjustVisual.call(this),
						this.tip1 &&
							this.tip2 &&
							(n.setAttributes(this.tip1, [
								["x1", (this.x1 - this.tipLength / 2).toString()],
								["y1", this.y1.toString()],
								["x2", (this.x1 + this.tipLength / 2).toString()],
								["y2", this.y1.toString()],
								["stroke", this.strokeColor],
								["stroke-width", this.strokeWidth.toString()],
							]),
							n.setAttributes(this.tip2, [
								["x1", (this.x2 - this.tipLength / 2).toString()],
								["y1", this.y2.toString()],
								["x2", (this.x2 + this.tipLength / 2).toString()],
								["y2", this.y2.toString()],
								["stroke", this.strokeColor],
								["stroke-width", this.strokeWidth.toString()],
							]),
							Math.abs(this.x1 - this.x2) > 0.1))
					) {
						var e =
								(180 * Math.atan((this.y2 - this.y1) / (this.x2 - this.x1))) /
									Math.PI +
								90 * Math.sign(this.x1 - this.x2),
							i = this.tip1.transform.baseVal.getItem(0);
						i.setRotate(e, this.x1, this.y1),
							this.tip1.transform.baseVal.replaceItem(i, 0);
						var o = this.tip2.transform.baseVal.getItem(0);
						o.setRotate(e + 180, this.x2, this.y2),
							this.tip2.transform.baseVal.replaceItem(o, 0);
					}
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = t.prototype.getState.call(this);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e),
						this.createTips(),
						this.adjustVisual();
				}),
				(e.typeName = "MeasurementMarker"),
				(e.title = "Measurement marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M1.39 18.36l1.77-1.76L4.58 18l1.06-1.05-1.42-1.41 1.42-1.42 2.47 2.48 1.06-1.06-2.47-2.48 1.41-1.41 1.42 1.41L10.59 12l-1.42-1.41 1.42-1.42 2.47 2.48 1.06-1.06-2.47-2.48 1.41-1.41 1.41 1.41 1.07-1.06-1.42-1.41 1.42-1.42L18 6.7l1.07-1.06-2.47-2.48 1.76-1.77 4.25 4.25L5.64 22.61l-4.25-4.25z"/></svg>'),
				e
			);
		})(T),
		G = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.strokePanel.colors = o.defaultColorSet),
					(s.fillColor = "transparent"),
					s
				);
			}
			return (
				i(e, t),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = t.prototype.getState.call(this);
					return (i.typeName = e.typeName), i;
				}),
				(e.typeName = "EllipseFrameMarker"),
				(e.title = "Ellipse frame marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M12 6c4.41 0 8 2.69 8 6s-3.59 6-8 6-8-2.69-8-6 3.59-6 8-6m0-2C6.5 4 2 7.58 2 12s4.5 8 10 8 10-3.58 10-8-4.5-8-10-8z"/></svg>'),
				e
			);
		})(O),
		F = (function () {
			function t() {
				(this.undoStack = []), (this.redoStack = []);
			}
			return (
				Object.defineProperty(t.prototype, "isUndoPossible", {
					get: function () {
						return this.undoStack.length > 0;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "isRedoPossible", {
					get: function () {
						return this.redoStack.length > 0;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "undoStepCount", {
					get: function () {
						return this.undoStack.length;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "redoStepCount", {
					get: function () {
						return this.redoStack.length;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.addUndoStep = function (t) {
					(0 !== this.undoStack.length &&
						JSON.stringify(this.undoStack[this.undoStack.length - 1]) ===
							JSON.stringify(t)) ||
						(this.undoStack.push(t),
						JSON.stringify(this.lastRedoStep) !== JSON.stringify(t) &&
							this.redoStack.splice(0, this.redoStack.length));
				}),
				(t.prototype.replaceLastUndoStep = function (t) {
					this.undoStack.length > 0 &&
						(this.undoStack[this.undoStack.length - 1] = t);
				}),
				(t.prototype.getLastUndoStep = function () {
					return this.undoStack.length > 0
						? this.undoStack[this.undoStack.length - 1]
						: void 0;
				}),
				(t.prototype.undo = function () {
					if (this.undoStack.length > 1) {
						var t = this.undoStack.pop();
						return (
							void 0 !== t && this.redoStack.push(t),
							this.undoStack.length > 0
								? this.undoStack[this.undoStack.length - 1]
								: void 0
						);
					}
				}),
				(t.prototype.redo = function () {
					return (this.lastRedoStep = this.redoStack.pop()), this.lastRedoStep;
				}),
				t
			);
		})(),
		j = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.strokeColor = "transparent"),
					(s.strokeWidth = 0),
					(s.strokeDasharray = ""),
					(s.curveX = 0),
					(s.curveY = 0),
					(s.manipulationStartCurveX = 0),
					(s.manipulationStartCurveY = 0),
					(s.setStrokeColor = s.setStrokeColor.bind(s)),
					(s.setStrokeWidth = s.setStrokeWidth.bind(s)),
					(s.setStrokeDasharray = s.setStrokeDasharray.bind(s)),
					(s.positionGrips = s.positionGrips.bind(s)),
					(s.addControlGrips = s.addControlGrips.bind(s)),
					(s.adjustVisual = s.adjustVisual.bind(s)),
					(s.setupControlBox = s.setupControlBox.bind(s)),
					(s.resize = s.resize.bind(s)),
					(s.strokeColor = o.defaultColor),
					(s.strokeWidth = o.defaultStrokeWidth),
					(s.strokeDasharray = o.defaultStrokeDasharray),
					(s.strokePanel = new f(
						"Line color",
						o.defaultColorSet,
						o.defaultColor
					)),
					(s.strokePanel.onColorChanged = s.setStrokeColor),
					(s.strokeWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.strokeWidthPanel.onWidthChanged = s.setStrokeWidth),
					(s.strokeStylePanel = new w(
						"Line style",
						o.defaultStrokeDasharrays,
						o.defaultStrokeDasharray
					)),
					(s.strokeStylePanel.onStyleChanged = s.setStrokeDasharray),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.visual &&
						e !== this.selectorCurve &&
						e !== this.visibleCurve &&
						!this.curveGrip.ownsTarget(e)
					);
				}),
				(e.prototype.getPathD = function () {
					return (
						"M " +
						this.x1 +
						" " +
						this.y1 +
						" Q " +
						this.curveX +
						" " +
						this.curveY +
						", " +
						this.x2 +
						" " +
						this.y2
					);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createGroup()),
						(this.selectorCurve = n.createPath(this.getPathD(), [
							["stroke", "transparent"],
							["stroke-width", (this.strokeWidth + 10).toString()],
							["fill", "transparent"],
						])),
						(this.visibleCurve = n.createPath(this.getPathD(), [
							["stroke", this.strokeColor],
							["stroke-width", this.strokeWidth.toString()],
							["fill", "transparent"],
						])),
						this.visual.appendChild(this.selectorCurve),
						this.visual.appendChild(this.visibleCurve),
						this.addMarkerVisualToContainer(this.visual);
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						(this.manipulationStartCurveX = this.curveX),
						(this.manipulationStartCurveY = this.curveY),
						"new" === this.state && ((this.curveX = e.x), (this.curveY = e.y)),
						"new" === this.state
							? (this.createVisual(),
							  this.adjustVisual(),
							  (this._state = "creating"))
							: this.curveGrip.ownsTarget(i) &&
							  ((this.activeGrip = this.curveGrip), (this._state = "resize"));
				}),
				(e.prototype.adjustVisual = function () {
					this.selectorCurve &&
						this.visibleCurve &&
						(this.selectorCurve.setAttribute("d", this.getPathD()),
						this.visibleCurve.setAttribute("d", this.getPathD()),
						n.setAttributes(this.visibleCurve, [["stroke", this.strokeColor]]),
						n.setAttributes(this.visibleCurve, [
							["stroke-width", this.strokeWidth.toString()],
						]),
						n.setAttributes(this.visibleCurve, [
							["stroke-dasharray", this.strokeDasharray.toString()],
						]));
				}),
				(e.prototype.setupControlBox = function () {
					t.prototype.setupControlBox.call(this),
						(this.curveControlLine1 = n.createLine(
							this.x1,
							this.y1,
							this.curveX,
							this.curveY,
							[
								["stroke", "black"],
								["stroke-width", "1"],
								["stroke-opacity", "0.5"],
								["stroke-dasharray", "3, 2"],
							]
						)),
						(this.curveControlLine2 = n.createLine(
							this.x2,
							this.y2,
							this.curveX,
							this.curveY,
							[
								["stroke", "black"],
								["stroke-width", "1"],
								["stroke-opacity", "0.5"],
								["stroke-dasharray", "3, 2"],
							]
						)),
						this.controlBox.insertBefore(
							this.curveControlLine1,
							this.controlBox.firstChild
						),
						this.controlBox.insertBefore(
							this.curveControlLine2,
							this.controlBox.firstChild
						);
				}),
				(e.prototype.addControlGrips = function () {
					(this.curveGrip = this.createGrip()),
						(this.curveX = 0),
						(this.curveY = 0),
						t.prototype.addControlGrips.call(this);
				}),
				(e.prototype.positionGrips = function () {
					t.prototype.positionGrips.call(this);
					var e = this.curveGrip.GRIP_SIZE;
					this.positionGrip(
						this.curveGrip.visual,
						this.curveX - e / 2,
						this.curveY - e / 2
					),
						this.curveControlLine1 &&
							this.curveControlLine2 &&
							(this.curveControlLine1.setAttribute("x1", this.x1.toString()),
							this.curveControlLine1.setAttribute("y1", this.y1.toString()),
							this.curveControlLine1.setAttribute("x2", this.curveX.toString()),
							this.curveControlLine1.setAttribute("y2", this.curveY.toString()),
							this.curveControlLine2.setAttribute("x1", this.x2.toString()),
							this.curveControlLine2.setAttribute("y1", this.y2.toString()),
							this.curveControlLine2.setAttribute("x2", this.curveX.toString()),
							this.curveControlLine2.setAttribute(
								"y2",
								this.curveY.toString()
							));
				}),
				(e.prototype.manipulate = function (e) {
					"move" === this.state &&
						((this.curveX =
							this.manipulationStartCurveX + e.x - this.manipulationStartX),
						(this.curveY =
							this.manipulationStartCurveY + e.y - this.manipulationStartY)),
						t.prototype.manipulate.call(this, e);
				}),
				(e.prototype.resize = function (e) {
					this.activeGrip === this.curveGrip &&
						((this.curveX = e.x), (this.curveY = e.y)),
						t.prototype.resize.call(this, e),
						"creating" === this.state &&
							((this.curveX = this.x1 + (this.x2 - this.x1) / 2),
							(this.curveY = this.y1 + (this.y2 - this.y1) / 2));
				}),
				(e.prototype.setStrokeColor = function (t) {
					(this.strokeColor = t), this.adjustVisual(), this.colorChanged(t);
				}),
				(e.prototype.setStrokeWidth = function (t) {
					(this.strokeWidth = t), this.adjustVisual();
				}),
				(e.prototype.setStrokeDasharray = function (t) {
					(this.strokeDasharray = t), this.adjustVisual();
				}),
				(e.prototype.scale = function (e, i) {
					(this.curveX = this.curveX * e),
						(this.curveY = this.curveY * i),
						t.prototype.scale.call(this, e, i);
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var i = Object.assign(
						{
							strokeColor: this.strokeColor,
							strokeWidth: this.strokeWidth,
							strokeDasharray: this.strokeDasharray,
							curveX: this.curveX,
							curveY: this.curveY,
						},
						t.prototype.getState.call(this)
					);
					return (i.typeName = e.typeName), i;
				}),
				(e.prototype.restoreState = function (e) {
					t.prototype.restoreState.call(this, e);
					var i = e;
					(this.strokeColor = i.strokeColor),
						(this.strokeWidth = i.strokeWidth),
						(this.strokeDasharray = i.strokeDasharray),
						(this.curveX = i.curveX),
						(this.curveY = i.curveY),
						this.createVisual(),
						this.adjustVisual();
				}),
				(e.typeName = "CurveMarker"),
				(e.title = "Curve marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M18.5 2A1.5 1.5 0 0120 3.5 1.5 1.5 0 0118.5 5c-.23 0-.45-.05-.65-.15l-3.69 3.7.34.45c2.19-1.26 4.76-2 7.5-2l1 .03v2.01L22 9c-2.58 0-5 .75-7 2.04A3.96 3.96 0 0111.04 15C9.75 17 9 19.42 9 22l.04 1H7.03L7 22c0-2.74.74-5.31 2-7.5l-.45-.34-3.7 3.69c.1.2.15.42.15.65A1.5 1.5 0 013.5 20 1.5 1.5 0 012 18.5 1.5 1.5 0 013.5 17c.23 0 .45.05.65.15l3.69-3.7C7.31 12.78 7 11.92 7 11a4 4 0 014-4c.92 0 1.78.31 2.45.84l3.7-3.69c-.1-.2-.15-.42-.15-.65A1.5 1.5 0 0118.5 2M11 9a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2z"/></svg>'),
				e
			);
		})(M),
		U = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, i, o) || this;
				return (
					(s.fillColor = "transparent"),
					(s.strokeColor = "transparent"),
					(s.strokeWidth = 0),
					(s.strokeDasharray = ""),
					(s.textColor = "transparent"),
					(s.fontSize = "1rem"),
					(s.isMoved = !1),
					(s.captionText = "Caption"),
					(s.PADDING = 5),
					(s.captionBoxWidth = 0),
					(s.captionBoxHeight = 0),
					(s.strokeColor = o.defaultColor),
					(s.strokeWidth = o.defaultStrokeWidth),
					(s.strokeDasharray = o.defaultStrokeDasharray),
					(s.fillColor = o.defaultFillColor),
					(s.textColor = o.defaultStrokeColor),
					(s.fontFamily = o.defaultFontFamily),
					(s.fontSize = o.defaultCaptionFontSize),
					(s.captionText = o.defaultCaptionText),
					(s.setStrokeColor = s.setStrokeColor.bind(s)),
					(s.setFillColor = s.setFillColor.bind(s)),
					(s.setStrokeWidth = s.setStrokeWidth.bind(s)),
					(s.setStrokeDasharray = s.setStrokeDasharray.bind(s)),
					(s.createVisual = s.createVisual.bind(s)),
					(s.sizeCaption = s.sizeCaption.bind(s)),
					(s.setCaptionText = s.setCaptionText.bind(s)),
					(s.showTextEditor = s.showTextEditor.bind(s)),
					(s.positionTextEditor = s.positionTextEditor.bind(s)),
					(s.finishTextEditing = s.finishTextEditing.bind(s)),
					(s.setFont = s.setFont.bind(s)),
					(s.setTextColor = s.setTextColor.bind(s)),
					(s.strokePanel = new f(
						"Line color",
						r(o.defaultColorSet, ["transparent"]),
						s.strokeColor
					)),
					(s.strokePanel.onColorChanged = s.setStrokeColor),
					(s.fillPanel = new f(
						"Fill color",
						r(o.defaultColorSet, ["transparent"]),
						s.fillColor,
						z
					)),
					(s.fillPanel.onColorChanged = s.setFillColor),
					(s.strokeWidthPanel = new x(
						"Line width",
						o.defaultStrokeWidths,
						o.defaultStrokeWidth
					)),
					(s.strokeWidthPanel.onWidthChanged = s.setStrokeWidth),
					(s.strokeStylePanel = new w(
						"Line style",
						o.defaultStrokeDasharrays,
						o.defaultStrokeDasharray
					)),
					(s.strokeStylePanel.onStyleChanged = s.setStrokeDasharray),
					(s.fontFamilyPanel = new P(
						"Font",
						o.defaultFontFamilies,
						o.defaultFontFamily
					)),
					(s.fontFamilyPanel.onFontChanged = s.setFont),
					(s.textColorPanel = new f(
						"Text color",
						o.defaultColorSet,
						s.textColor,
						H
					)),
					(s.textColorPanel.onColorChanged = s.setTextColor),
					s
				);
			}
			return (
				i(e, t),
				(e.prototype.ownsTarget = function (e) {
					return !(
						!t.prototype.ownsTarget.call(this, e) &&
						e !== this.visual &&
						e !== this.frame &&
						e !== this.captionBg &&
						e !== this.captionElement
					);
				}),
				(e.prototype.createVisual = function () {
					(this.visual = n.createGroup()),
						this.addMarkerVisualToContainer(this.visual),
						(this.captionBg = n.createRect(1, 1, [["fill", this.fillColor]])),
						this.visual.appendChild(this.captionBg),
						(this.captionElement = n.createText([
							["fill", this.textColor],
							["font-family", this.fontFamily],
						])),
						(this.captionElement.style.fontSize = this.fontSize),
						(this.captionElement.style.textAnchor = "start"),
						(this.captionElement.style.dominantBaseline = "text-before-edge"),
						(this.captionElement.textContent = this.captionText),
						this.visual.appendChild(this.captionElement),
						(this.frame = n.createRect(this.width, this.height, [
							["fill", "transparent"],
							["stroke", this.strokeColor],
							["stroke-width", this.strokeWidth.toString()],
							["stroke-dasharray", this.strokeDasharray],
						])),
						this.visual.appendChild(this.frame),
						this.sizeCaption();
				}),
				(e.prototype.setCaptionText = function (t) {
					(this.captionText = t),
						(this.captionElement.textContent = this.captionText),
						this.sizeCaption();
				}),
				(e.prototype.pointerDown = function (e, i) {
					t.prototype.pointerDown.call(this, e, i),
						(this.isMoved = !1),
						(this.pointerDownPoint = e),
						(this.pointerDownTimestamp = Date.now()),
						"new" === this.state &&
							(this.createVisual(),
							this.moveVisual(e),
							(this._state = "creating"));
				}),
				(e.prototype.manipulate = function (e) {
					t.prototype.manipulate.call(this, e),
						void 0 !== this.pointerDownPoint &&
							(this.isMoved =
								Math.abs(e.x - this.pointerDownPoint.x) > 5 ||
								Math.abs(e.y - this.pointerDownPoint.y) > 5);
				}),
				(e.prototype.resize = function (e) {
					t.prototype.resize.call(this, e), this.setSize();
				}),
				(e.prototype.sizeCaption = function () {
					var t = this.captionElement.getBBox();
					"" !== this.captionText.trim()
						? ((this.captionBoxWidth = t.width + 2 * this.PADDING),
						  (this.captionBoxHeight = t.height + 2 * this.PADDING))
						: ((this.captionBoxWidth = 0), (this.captionBoxHeight = 0)),
						n.setAttributes(this.captionBg, [
							["width", this.captionBoxWidth.toString()],
							["height", this.captionBoxHeight.toString()],
							[
								"clip-path",
								"path('M0,0 H" +
									this.width +
									" V" +
									this.height +
									" H" +
									-this.width +
									" Z')",
							],
						]),
						n.setAttributes(this.captionElement, [
							["x", this.PADDING.toString()],
							["y", this.PADDING.toString()],
							[
								"clip-path",
								"path('M0,0 H" +
									(this.width - this.PADDING) +
									" V" +
									this.height +
									" H" +
									(-this.width - this.PADDING) +
									" Z')",
							],
						]);
				}),
				(e.prototype.showTextEditor = function () {
					var t = this;
					(this._state = "edit"),
						(this.overlayContainer.innerHTML = ""),
						(this.textEditDiv = document.createElement("div")),
						(this.textEditDiv.style.flexGrow = "2"),
						(this.textEditDiv.style.alignItems = "center"),
						(this.textEditDiv.style.justifyContent = "center"),
						(this.textEditDiv.style.pointerEvents = "auto"),
						(this.textEditDiv.style.overflow = "auto"),
						(this.textEditBox = document.createElement("input")),
						(this.textEditBox.style.position = "absolute"),
						(this.textEditBox.style.width = this.width + "px"),
						this.captionBoxHeight > 0 &&
							(this.textEditBox.style.height = this.captionBoxHeight + "px"),
						(this.textEditBox.style.fontSize = this.fontSize),
						(this.textEditBox.style.fontFamily = this.fontFamily),
						(this.textEditBox.style.backgroundColor = this.fillColor),
						(this.textEditBox.style.color = this.textColor),
						(this.textEditBox.style.borderWidth = "0"),
						this.textEditBox.setAttribute("value", this.captionText),
						this.textEditBox.select(),
						this.textEditDiv.appendChild(this.textEditBox),
						this.overlayContainer.appendChild(this.textEditDiv),
						this.textEditBox.addEventListener("pointerup", function (t) {
							t.stopPropagation();
						}),
						this.textEditBox.addEventListener("keypress", function (e) {
							"Enter" === e.key && t.finishTextEditing(t.textEditBox.value);
						}),
						this.textEditBox.addEventListener("keyup", function (t) {
							t.cancelBubble = !0;
						}),
						this.textEditBox.addEventListener("blur", function () {
							t.finishTextEditing(t.textEditBox.value);
						}),
						this.textEditDiv.addEventListener("pointerup", function () {
							t.finishTextEditing(t.textEditBox.value);
						}),
						this.positionTextEditor(),
						this.textEditBox.focus();
				}),
				(e.prototype.positionTextEditor = function () {
					"edit" === this.state &&
						(void 0 === this.textEditBox
							? this.showTextEditor()
							: ((this.textEditBox.style.left = this.left + "px"),
							  (this.textEditBox.style.top = this.top + "px"),
							  (this.textEditBox.style.transform =
									"rotate(" + this.rotationAngle + "deg)"),
							  (this.textEditBox.style.transformOrigin =
									this.width / 2 + "px " + this.height / 2 + "px")));
				}),
				(e.prototype.finishTextEditing = function (t) {
					this.setCaptionText(t.trim()),
						(this.overlayContainer.innerHTML = ""),
						this.stateChanged();
				}),
				(e.prototype.setFont = function (t) {
					this.captionElement &&
						n.setAttributes(this.captionElement, [["font-family", t]]),
						(this.fontFamily = t),
						this.textEditBox &&
							(this.textEditBox.style.fontFamily = this.fontFamily),
						this.sizeCaption(),
						this.stateChanged();
				}),
				(e.prototype.setTextColor = function (t) {
					this.captionElement &&
						n.setAttributes(this.captionElement, [["fill", t]]),
						(this.textColor = t),
						this.textEditBox && (this.textEditBox.style.color = this.textColor),
						this.stateChanged();
				}),
				(e.prototype.setSize = function () {
					t.prototype.setSize.call(this),
						n.setAttributes(this.frame, [
							["width", this.width.toString()],
							["height", this.height.toString()],
						]),
						this.sizeCaption();
				}),
				(e.prototype.pointerUp = function (e) {
					t.prototype.pointerUp.call(this, e),
						this.setSize(),
						!this.isMoved &&
							Date.now() - this.pointerDownTimestamp > 500 &&
							this.showTextEditor(),
						(this.pointerDownPoint = void 0);
				}),
				(e.prototype.dblClick = function (e, i) {
					t.prototype.dblClick.call(this, e, i), this.showTextEditor();
				}),
				(e.prototype.setStrokeColor = function (t) {
					(this.strokeColor = t),
						this.frame &&
							n.setAttributes(this.frame, [["stroke", this.strokeColor]]),
						this.colorChanged(t),
						this.stateChanged();
				}),
				(e.prototype.setFillColor = function (t) {
					(this.fillColor = t),
						this.captionBg &&
							n.setAttributes(this.captionBg, [["fill", this.fillColor]]),
						this.fillColorChanged(t),
						this.stateChanged();
				}),
				(e.prototype.setStrokeWidth = function (t) {
					(this.strokeWidth = t),
						this.frame &&
							n.setAttributes(this.frame, [
								["stroke-width", this.strokeWidth.toString()],
							]),
						this.stateChanged();
				}),
				(e.prototype.setStrokeDasharray = function (t) {
					(this.strokeDasharray = t),
						this.frame &&
							n.setAttributes(this.frame, [
								["stroke-dasharray", this.strokeDasharray],
							]),
						this.stateChanged();
				}),
				Object.defineProperty(e.prototype, "toolboxPanels", {
					get: function () {
						return [
							this.strokePanel,
							this.fillPanel,
							this.strokeWidthPanel,
							this.strokeStylePanel,
							this.fontFamilyPanel,
							this.textColorPanel,
						];
					},
					enumerable: !1,
					configurable: !0,
				}),
				(e.prototype.getState = function () {
					var e = Object.assign(
						{
							fillColor: this.fillColor,
							strokeColor: this.strokeColor,
							strokeWidth: this.strokeWidth,
							strokeDasharray: this.strokeDasharray,
							opacity: 1,
							textColor: this.textColor,
							fontFamily: this.fontFamily,
							fontSize: this.fontSize,
							captionText: this.captionText,
						},
						t.prototype.getState.call(this)
					);
					return (e.typeName = this.typeName), e;
				}),
				(e.prototype.restoreState = function (e) {
					var i = e;
					(this.fillColor = i.fillColor),
						(this.strokeColor = i.strokeColor),
						(this.strokeWidth = i.strokeWidth),
						(this.strokeDasharray = i.strokeDasharray),
						(this.textColor = i.textColor),
						(this.fontFamily = i.fontFamily),
						(this.captionText = i.captionText),
						(this.fontSize = i.fontSize),
						this.createVisual(),
						t.prototype.restoreState.call(this, e),
						this.setSize();
				}),
				(e.prototype.scale = function (e, i) {
					t.prototype.scale.call(this, e, i), this.setSize();
				}),
				(e.typeName = "CaptionFrameMarker"),
				(e.title = "Caption frame marker"),
				(e.icon =
					'<svg viewBox="0 0 24 24"><path d="M5 3c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2H5m0 2h14v14H5V5m2 2v2h10V7H7z"/></svg>'),
				e
			);
		})(S),
		Y = (function () {
			function t(t, e) {
				void 0 === e && (e = !1),
					(this.cancelable = !1),
					(this._defaultPrevented = !1),
					(this.markerArea = t),
					(this.cancelable = e);
			}
			return (
				Object.defineProperty(t.prototype, "defaultPrevented", {
					get: function () {
						return this._defaultPrevented;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.preventDefault = function () {
					this._defaultPrevented = !0;
				}),
				t
			);
		})(),
		X = (function (t) {
			function e(e, i, o) {
				var s = t.call(this, e, !1) || this;
				return (s.dataUrl = i), (s.state = o), s;
			}
			return i(e, t), e;
		})(Y),
		Z = (function (t) {
			function e(e, i, o) {
				void 0 === o && (o = !1);
				var s = t.call(this, e, o) || this;
				return (s.marker = i), s;
			}
			return i(e, t), e;
		})(Y),
		K = (function () {
			function t() {
				(this.render = []),
					(this.beforeclose = []),
					(this.close = []),
					(this.show = []),
					(this.restorestate = []),
					(this.statechange = []),
					(this.markerselect = []),
					(this.markerdeselect = []),
					(this.markercreating = []),
					(this.markercreate = []),
					(this.markerbeforedelete = []),
					(this.markerdelete = []),
					(this.markerchange = []),
					(this.focus = []),
					(this.blur = []);
			}
			return (
				(t.prototype.addEventListener = function (t, e) {
					this[t].push(e);
				}),
				(t.prototype.removeEventListener = function (t, e) {
					var i = this[t].indexOf(e);
					i > -1 && this[t].splice(i, 1);
				}),
				t
			);
		})(),
		J = (function () {
			function t(e) {
				(this.touchPoints = 0),
					(this._availableMarkerTypes = this.DEFAULT_MARKER_TYPES),
					(this.mode = "select"),
					(this.markers = []),
					(this.isDragging = !1),
					(this.renderEventListeners = []),
					(this.closeEventListeners = []),
					(this.settings = new E()),
					(this._isOpen = !1),
					(this.undoRedoManager = new F()),
					(this.renderAtNaturalSize = !1),
					(this.renderImageType = "image/png"),
					(this.renderMarkersOnly = !1),
					(this.zoomSteps = [1, 1.5, 2, 4]),
					(this._zoomLevel = 1),
					(this._isResizing = !1),
					(this.prevPanPoint = { x: 0, y: 0 }),
					(this.eventListeners = new K()),
					(this._silentRenderMode = !1),
					(this._isFocused = !1),
					(this._instanceNo = t.instanceCounter++),
					(this.styles = new p(this.instanceNo)),
					(this.uiStyleSettings = this.styles.settings),
					(this.target = e),
					(this.targetRoot = document.body),
					(this.width = e.clientWidth),
					(this.height = e.clientHeight),
					this.styles.removeStyleSheet(),
					(this.open = this.open.bind(this)),
					(this.setTopLeft = this.setTopLeft.bind(this)),
					(this.toolbarButtonClicked = this.toolbarButtonClicked.bind(this)),
					(this.createNewMarker = this.createNewMarker.bind(this)),
					(this.addNewMarker = this.addNewMarker.bind(this)),
					(this.markerCreated = this.markerCreated.bind(this)),
					(this.setCurrentMarker = this.setCurrentMarker.bind(this)),
					(this.onPointerDown = this.onPointerDown.bind(this)),
					(this.onDblClick = this.onDblClick.bind(this)),
					(this.onPointerMove = this.onPointerMove.bind(this)),
					(this.onPointerUp = this.onPointerUp.bind(this)),
					(this.onPointerOut = this.onPointerOut.bind(this)),
					(this.onKeyUp = this.onKeyUp.bind(this)),
					(this.overrideOverflow = this.overrideOverflow.bind(this)),
					(this.restoreOverflow = this.restoreOverflow.bind(this)),
					(this.close = this.close.bind(this)),
					(this.closeUI = this.closeUI.bind(this)),
					(this.addCloseEventListener = this.addCloseEventListener.bind(this)),
					(this.removeCloseEventListener =
						this.removeCloseEventListener.bind(this)),
					(this.addRenderEventListener =
						this.addRenderEventListener.bind(this)),
					(this.removeRenderEventListener =
						this.removeRenderEventListener.bind(this)),
					(this.clientToLocalCoordinates =
						this.clientToLocalCoordinates.bind(this)),
					(this.onWindowResize = this.onWindowResize.bind(this)),
					(this.deleteSelectedMarker = this.deleteSelectedMarker.bind(this)),
					(this.setWindowHeight = this.setWindowHeight.bind(this)),
					(this.removeMarker = this.removeMarker.bind(this)),
					(this.colorChanged = this.colorChanged.bind(this)),
					(this.fillColorChanged = this.fillColorChanged.bind(this)),
					(this.onPopupTargetResize = this.onPopupTargetResize.bind(this)),
					(this.showNotesEditor = this.showNotesEditor.bind(this)),
					(this.hideNotesEditor = this.hideNotesEditor.bind(this)),
					(this.stepZoom = this.stepZoom.bind(this)),
					(this.focus = this.focus.bind(this)),
					(this.blur = this.blur.bind(this)),
					(this.markerStateChanged = this.markerStateChanged.bind(this)),
					(this.switchToSelectMode = this.switchToSelectMode.bind(this)),
					(this.addDefs = this.addDefs.bind(this)),
					(this.addDefsToImage = this.addDefsToImage.bind(this));
			}
			return (
				Object.defineProperty(t.prototype, "ALL_MARKER_TYPES", {
					get: function () {
						return [B, D, _, L, G, O, N, R, V, I, T, j, U];
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "DEFAULT_MARKER_TYPES", {
					get: function () {
						return [B, D, _, L, O, N, R];
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "BASIC_MARKER_TYPES", {
					get: function () {
						return [B, D, _, L, N];
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "availableMarkerTypes", {
					get: function () {
						return this._availableMarkerTypes;
					},
					set: function (t) {
						var e = this;
						this._availableMarkerTypes.splice(0),
							t.forEach(function (t) {
								if ("string" == typeof t) {
									var i = e.ALL_MARKER_TYPES.find(function (e) {
										return e.typeName === t;
									});
									void 0 !== i && e._availableMarkerTypes.push(i);
								} else e._availableMarkerTypes.push(t);
							});
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "currentMarker", {
					get: function () {
						return this._currentMarker;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "isOpen", {
					get: function () {
						return this._isOpen;
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "isUndoPossible", {
					get: function () {
						return !(
							!this.undoRedoManager || !this.undoRedoManager.isUndoPossible
						);
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "isRedoPossible", {
					get: function () {
						return !(
							!this.undoRedoManager || !this.undoRedoManager.isRedoPossible
						);
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "zoomLevel", {
					get: function () {
						return this._zoomLevel;
					},
					set: function (t) {
						(this._zoomLevel = t),
							this.editorCanvas &&
								this.contentDiv &&
								((this.editorCanvas.style.transform =
									"scale(" + this._zoomLevel + ")"),
								this.contentDiv.scrollTo({
									left:
										(this.editorCanvas.clientWidth * this._zoomLevel -
											this.contentDiv.clientWidth) /
										2,
									top:
										(this.editorCanvas.clientHeight * this._zoomLevel -
											this.contentDiv.clientHeight) /
										2,
								}));
					},
					enumerable: !1,
					configurable: !0,
				}),
				Object.defineProperty(t.prototype, "instanceNo", {
					get: function () {
						return this._instanceNo;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.open = function () {
					this.setupResizeObserver(),
						this.setEditingTarget(),
						this.setTopLeft(),
						this.initMarkerCanvas(),
						this.initOverlay(),
						this.attachEvents(),
						"popup" === this.settings.displayMode && this.onPopupTargetResize(),
						a.isLicensed || this.addLogo(),
						(this._isOpen = !0),
						(this._isFocused = !0);
				}),
				(t.prototype.show = function () {
					var t = this;
					void 0 === this.styles.styleSheetRoot &&
						void 0 !== l.styleSheetRoot &&
						(this.styles.styleSheetRoot = l.styleSheetRoot),
						this.setWindowHeight(),
						this.showUI(),
						this.open(),
						this.eventListeners.show.forEach(function (e) {
							return e(new Y(t));
						});
				}),
				(t.prototype.render = function () {
					return o(this, void 0, void 0, function () {
						var t;
						return s(this, function (e) {
							switch (e.label) {
								case 0:
									return (
										this.setCurrentMarker(),
										((t = new h()).naturalSize = this.renderAtNaturalSize),
										(t.imageType = this.renderImageType),
										(t.imageQuality = this.renderImageQuality),
										(t.markersOnly = this.renderMarkersOnly),
										(t.width = this.renderWidth),
										(t.height = this.renderHeight),
										[
											4,
											t.rasterize(
												this.target instanceof HTMLImageElement
													? this.target
													: null,
												this.markerImage,
												this.renderTarget
											),
										]
									);
								case 1:
									return (
										e.sent(),
										[
											4,
											t.rasterize(
												this.target instanceof HTMLImageElement
													? this.target
													: null,
												this.markerImage,
												this.renderTarget
											),
										]
									);
								case 2:
									return [2, e.sent()];
							}
						});
					});
				}),
				(t.prototype.close = function (t) {
					var e = this;
					if ((void 0 === t && (t = !1), this.isOpen)) {
						var i = !1;
						t ||
							this.eventListeners.beforeclose.forEach(function (t) {
								var o = new Y(e, !0);
								t(o), o.defaultPrevented && (i = !0);
							}),
							i ||
								(this.coverDiv && this.closeUI(),
								this.targetObserver &&
									(this.targetObserver.unobserve(this.target),
									this.targetObserver.unobserve(this.editorCanvas)),
								"popup" === this.settings.displayMode &&
									window.removeEventListener("resize", this.setWindowHeight),
								this.eventListeners.close.forEach(function (t) {
									return t(new Y(e));
								}),
								this.detachEvents(),
								(this._isOpen = !1));
					}
				}),
				(t.prototype.addMarkersToToolbar = function () {
					for (var t, e = [], i = 0; i < arguments.length; i++)
						e[i] = arguments[i];
					(t = this._availableMarkerTypes).push.apply(t, e);
				}),
				(t.prototype.addRenderEventListener = function (t) {
					this.addEventListener("render", function (e) {
						t(e.dataUrl, e.state);
					});
				}),
				(t.prototype.removeRenderEventListener = function (t) {}),
				(t.prototype.addCloseEventListener = function (t) {
					this.addEventListener("close", function () {
						t();
					});
				}),
				(t.prototype.removeCloseEventListener = function (t) {}),
				(t.prototype.setupResizeObserver = function () {
					var t = this;
					"inline" === this.settings.displayMode
						? window.ResizeObserver &&
						  ((this.targetObserver = new ResizeObserver(function () {
								t.resize(t.target.clientWidth, t.target.clientHeight);
						  })),
						  this.targetObserver.observe(this.target))
						: "popup" === this.settings.displayMode &&
						  (window.ResizeObserver &&
								((this.targetObserver = new ResizeObserver(function () {
									return t.onPopupTargetResize();
								})),
								this.targetObserver.observe(this.editorCanvas)),
						  window.addEventListener("resize", this.setWindowHeight));
				}),
				(t.prototype.onPopupTargetResize = function () {
					var t = (1 * this.target.clientWidth) / this.target.clientHeight,
						e =
							this.editorCanvas.clientWidth / t > this.editorCanvas.clientHeight
								? this.editorCanvas.clientHeight * t
								: this.editorCanvas.clientWidth,
						i =
							e < this.editorCanvas.clientWidth
								? this.editorCanvas.clientHeight
								: this.editorCanvas.clientWidth / t;
					this.resize(e, i);
				}),
				(t.prototype.setWindowHeight = function () {
					this.windowHeight = window.innerHeight;
				}),
				(t.prototype.resize = function (t, e) {
					this._isResizing = !0;
					var i = t / this.imageWidth,
						o = e / this.imageHeight;
					(this.imageWidth = Math.round(t)),
						(this.imageHeight = Math.round(e)),
						this.target instanceof HTMLImageElement &&
							this.editingTarget instanceof HTMLImageElement &&
							(this.editingTarget.src = this.target.src),
						(this.editingTarget.width = this.imageWidth),
						(this.editingTarget.height = this.imageHeight),
						(this.editingTarget.style.width = this.imageWidth + "px"),
						(this.editingTarget.style.height = this.imageHeight + "px"),
						this.markerImage.setAttribute("width", this.imageWidth.toString()),
						this.markerImage.setAttribute(
							"height",
							this.imageHeight.toString()
						),
						this.markerImage.setAttribute(
							"viewBox",
							"0 0 " +
								this.imageWidth.toString() +
								" " +
								this.imageHeight.toString()
						),
						(this.markerImageHolder.style.width = this.imageWidth + "px"),
						(this.markerImageHolder.style.height = this.imageHeight + "px"),
						(this.overlayContainer.style.width = this.imageWidth + "px"),
						(this.overlayContainer.style.height = this.imageHeight + "px"),
						"popup" !== this.settings.displayMode
							? (this.coverDiv.style.width = this.imageWidth.toString() + "px")
							: (this.setTopLeft(), this.positionMarkerImage()),
						void 0 !== this.toolbar && this.toolbar.adjustLayout(),
						this.positionLogo(),
						this.scaleMarkers(i, o),
						(this._isResizing = !1);
				}),
				(t.prototype.scaleMarkers = function (t, e) {
					var i,
						o = this;
					this._currentMarker && this._currentMarker instanceof L
						? this._currentMarker.scale(t, e)
						: ((i = this._currentMarker), this.setCurrentMarker()),
						this.markers.forEach(function (i) {
							i !== o._currentMarker && i.scale(t, e);
						}),
						void 0 !== i && this.setCurrentMarker(i);
				}),
				(t.prototype.setEditingTarget = function () {
					(this.imageWidth = Math.round(this.target.clientWidth)),
						(this.imageHeight = Math.round(this.target.clientHeight)),
						this.target instanceof HTMLImageElement &&
							this.editingTarget instanceof HTMLImageElement &&
							(this.editingTarget.src = this.target.src),
						(this.editingTarget.width = this.imageWidth),
						(this.editingTarget.height = this.imageHeight),
						(this.editingTarget.style.width = this.imageWidth + "px"),
						(this.editingTarget.style.height = this.imageHeight + "px");
				}),
				(t.prototype.setTopLeft = function () {
					var t = this.editingTarget.getBoundingClientRect(),
						e = this.editorCanvas.getBoundingClientRect();
					(this.left = t.left - e.left), (this.top = t.top - e.top);
				}),
				(t.prototype.initMarkerCanvas = function () {
					(this.markerImageHolder = document.createElement("div")),
						this.markerImageHolder.style.setProperty(
							"touch-action",
							"pinch-zoom"
						),
						(this.markerImage = document.createElementNS(
							"http://www.w3.org/2000/svg",
							"svg"
						)),
						this.markerImage.setAttribute(
							"xmlns",
							"http://www.w3.org/2000/svg"
						),
						this.markerImage.setAttribute("width", this.imageWidth.toString()),
						this.markerImage.setAttribute(
							"height",
							this.imageHeight.toString()
						),
						this.markerImage.setAttribute(
							"viewBox",
							"0 0 " +
								this.imageWidth.toString() +
								" " +
								this.imageHeight.toString()
						),
						(this.markerImage.style.pointerEvents = "auto"),
						(this.markerImageHolder.style.position = "absolute"),
						(this.markerImageHolder.style.width = this.imageWidth + "px"),
						(this.markerImageHolder.style.height = this.imageHeight + "px"),
						(this.markerImageHolder.style.transformOrigin = "top left"),
						this.positionMarkerImage(),
						this.markerImageHolder.appendChild(this.markerImage),
						this.editorCanvas.appendChild(this.markerImageHolder);
				}),
				(t.prototype.addDefs = function () {
					for (var t, e = [], i = 0; i < arguments.length; i++)
						e[i] = arguments[i];
					(this.defs = n.createDefs()),
						this.addDefsToImage(),
						(t = this.defs).append.apply(t, e);
				}),
				(t.prototype.addDefsToImage = function () {
					this.defs &&
						this.markerImage.insertBefore(
							this.defs,
							this.markerImage.firstChild
						);
				}),
				(t.prototype.initOverlay = function () {
					(this.overlayContainer = document.createElement("div")),
						(this.overlayContainer.style.position = "absolute"),
						(this.overlayContainer.style.left = "0px"),
						(this.overlayContainer.style.top = "0px"),
						(this.overlayContainer.style.width = this.imageWidth + "px"),
						(this.overlayContainer.style.height = this.imageHeight + "px"),
						(this.overlayContainer.style.display = "flex"),
						this.markerImageHolder.appendChild(this.overlayContainer);
				}),
				(t.prototype.positionMarkerImage = function () {
					(this.markerImageHolder.style.top = this.top / this.zoomLevel + "px"),
						(this.markerImageHolder.style.left =
							this.left / this.zoomLevel + "px");
				}),
				(t.prototype.attachEvents = function () {
					this.markerImage.addEventListener("pointerdown", this.onPointerDown),
						this.markerImage.addEventListener("dblclick", this.onDblClick),
						this.attachWindowEvents();
				}),
				(t.prototype.attachWindowEvents = function () {
					window.addEventListener("pointermove", this.onPointerMove),
						window.addEventListener("pointerup", this.onPointerUp),
						window.addEventListener("pointercancel", this.onPointerOut),
						window.addEventListener("pointerout", this.onPointerOut),
						window.addEventListener("pointerleave", this.onPointerUp),
						window.addEventListener("resize", this.onWindowResize),
						window.addEventListener("keyup", this.onKeyUp);
				}),
				(t.prototype.detachEvents = function () {
					this.markerImage.removeEventListener(
						"pointerdown",
						this.onPointerDown
					),
						this.markerImage.removeEventListener("dblclick", this.onDblClick),
						this.detachWindowEvents();
				}),
				(t.prototype.detachWindowEvents = function () {
					window.removeEventListener("pointermove", this.onPointerMove),
						window.removeEventListener("pointerup", this.onPointerUp),
						window.removeEventListener("pointercancel", this.onPointerOut),
						window.removeEventListener("pointerout", this.onPointerOut),
						window.removeEventListener("pointerleave", this.onPointerUp),
						window.removeEventListener("resize", this.onWindowResize),
						window.removeEventListener("keyup", this.onKeyUp);
				}),
				(t.prototype.addLogo = function () {
					(this.logoUI = document.createElement("div")),
						(this.logoUI.style.display = "inline-block"),
						(this.logoUI.style.margin = "0px"),
						(this.logoUI.style.padding = "0px"),
						(this.logoUI.style.fill = "#333333");
					var t = document.createElement("a");
					(t.href = "https://markerjs.com/"),
						(t.target = "_blank"),
						(t.innerHTML =
							'<svg viewBox="0 0 112 96" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path fill="#e5f20d" fill-opacity=".647" d="M0 40.386h111.96V95.62H0z"/><path d="M93.61 61.452c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.591 1.048-1.481 0-2.222-.74-2.222-2.22 0-16.617-.533-29.347-1.604-38.192-1.068-8.842-2.92-13.265-5.552-13.265-4.443 0-10.94 15.509-19.497 46.52v.124c0 .987-.328 1.831-.987 2.53-.657.7-1.52 1.048-2.592 1.048-1.48 0-2.22-.74-2.22-2.22 0-3.29.165-8.392.493-15.302.33-7.732.494-13.82.494-18.262 0-6.17-.186-10.55-.556-13.142-.37-2.591-1.172-3.887-2.406-3.887-2.796 0-6.333 5.12-10.612 15.363C38.494 34.367 34.01 46.44 29.32 60.34l-1.11 3.209a5.714 5.714 0 01-1.42 2.097c-.617.578-1.295.864-2.036.864-.987 0-1.644-.081-1.974-.247-.328-.162-.533-.656-.617-1.48-.41-4.03-.74-9.418-.987-16.165-.163-1.728-.329-4.566-.494-8.515-.822-13.901-1.562-23.3-2.221-28.196-.657-4.893-.987-7.628-.987-8.205 0-.657.33-1.44.987-2.345.659-.903 1.276-1.357 1.85-1.357 1.319 0 2.387.947 3.21 2.838.411.906.863 4.526 1.357 10.859.493 6.335.905 14.19 1.233 23.568l.617 18.88c4.527-13.983 9.216-26.673 14.068-38.068C45.65 6.686 50.093.988 54.123.988c2.715 0 4.566 1.974 5.553 5.923.987 3.949 1.481 9.667 1.481 17.152 0 3.949-.081 9.625-.247 17.029l-.123 5.676c3.373-11.762 6.725-21.634 10.057-29.615 3.331-7.979 6.685-11.97 10.056-11.97 8.475 0 12.71 18.757 12.71 56.269z" fill-rule="nonzero"/></svg>'),
						(t.title = "Powered by marker.js"),
						(t.style.display = "grid"),
						(t.style.alignItems = "center"),
						(t.style.justifyItems = "center"),
						(t.style.padding = "3px"),
						(t.style.width = "20px"),
						(t.style.height = "20px"),
						this.logoUI.appendChild(t),
						this.editorCanvas.appendChild(this.logoUI),
						(this.logoUI.style.position = "absolute"),
						(this.logoUI.style.pointerEvents = "all"),
						this.positionLogo();
				}),
				(t.prototype.positionLogo = function () {
					this.logoUI &&
						("right" !== this.uiStyleSettings.logoPosition
							? (this.logoUI.style.left =
									this.markerImageHolder.offsetLeft + 10 + "px")
							: (this.logoUI.style.left =
									this.markerImageHolder.offsetLeft +
									this.markerImageHolder.offsetWidth -
									this.logoUI.clientWidth -
									10 +
									"px"),
						(this.logoUI.style.top =
							this.markerImageHolder.offsetTop +
							this.markerImageHolder.offsetHeight -
							this.logoUI.clientHeight -
							10 +
							"px"));
				}),
				(t.prototype.overrideOverflow = function () {
					(this.scrollXState = window.scrollX),
						(this.scrollYState = window.scrollY),
						(this.bodyOverflowState = document.body.style.overflow),
						window.scroll({ top: 0, left: 0 }),
						(document.body.style.overflow = "auto");
				}),
				(t.prototype.restoreOverflow = function () {
					(document.body.style.overflow = this.bodyOverflowState),
						window.scroll({ top: this.scrollYState, left: this.scrollXState });
				}),
				(t.prototype.showUI = function () {
					switch (
						("popup" === this.settings.displayMode && this.overrideOverflow(),
						(this.coverDiv = document.createElement("div")),
						(this.coverDiv.style.visibility = this._silentRenderMode
							? "hidden"
							: "visible"),
						(this.coverDiv.className =
							this.styles.classNamePrefixBase +
							" " +
							this.styles.classNamePrefix),
						(this.coverDiv.style.fontSize = "16px"),
						(this.coverDiv.style.userSelect = "none"),
						this.settings.displayMode)
					) {
						case "inline":
							this.coverDiv.style.position = "absolute";
							var t =
								void 0 !== this.settings.uiOffsetTop
									? this.target.offsetTop + this.settings.uiOffsetTop
									: this.target.offsetTop > this.styles.settings.toolbarHeight
									? this.target.offsetTop - this.styles.settings.toolbarHeight
									: 0;
							(this.coverDiv.style.top = t + "px"),
								(this.coverDiv.style.left =
									this.target.offsetLeft.toString() + "px"),
								(this.coverDiv.style.width =
									this.target.offsetWidth.toString() + "px"),
								(this.coverDiv.style.zIndex =
									void 0 !== this.uiStyleSettings.zIndex
										? this.uiStyleSettings.zIndex
										: "5");
							break;
						case "popup":
							(this.coverDiv.style.position = "absolute"),
								(this.coverDiv.style.top = "0px"),
								(this.coverDiv.style.left = "0px"),
								(this.coverDiv.style.width = "100vw"),
								(this.coverDiv.style.height = window.innerHeight + "px"),
								(this.coverDiv.style.backgroundColor = "rgba(0, 0, 0, 0.75)"),
								(this.coverDiv.style.zIndex =
									void 0 !== this.uiStyleSettings.zIndex
										? this.uiStyleSettings.zIndex
										: "9000"),
								(this.coverDiv.style.display = "flex");
					}
					this.targetRoot.appendChild(this.coverDiv),
						(this.uiDiv = document.createElement("div")),
						(this.uiDiv.style.display = "flex"),
						(this.uiDiv.style.flexDirection = "column"),
						(this.uiDiv.style.flexGrow = "2"),
						(this.uiDiv.style.margin =
							"popup" === this.settings.displayMode
								? this.settings.popupMargin + "px"
								: "0px"),
						(this.uiDiv.style.border = "0px"),
						this.coverDiv.appendChild(this.uiDiv),
						(this.toolbar = new u(
							this.uiDiv,
							this.settings.displayMode,
							this._availableMarkerTypes,
							this.uiStyleSettings,
							this.styles
						)),
						this.toolbar.addButtonClickListener(this.toolbarButtonClicked),
						this.toolbar.show(
							this._silentRenderMode || this.uiStyleSettings.hideToolbar
								? "hidden"
								: "visible"
						),
						(this.contentDiv = document.createElement("div")),
						(this.contentDiv.style.display = "flex"),
						(this.contentDiv.style.flexDirection = "row"),
						(this.contentDiv.style.flexGrow = "2"),
						(this.contentDiv.style.flexShrink = "1"),
						"popup" === this.settings.displayMode &&
							((this.contentDiv.style.backgroundColor =
								this.uiStyleSettings.canvasBackgroundColor),
							(this.contentDiv.style.maxHeight =
								this.windowHeight -
								2 * this.settings.popupMargin -
								3.5 * this.uiStyleSettings.toolbarHeight +
								"px"),
							(this.contentDiv.style.maxWidth =
								"calc(100vw - " + 2 * this.settings.popupMargin + "px)")),
						(this.contentDiv.style.overflow = "auto"),
						this.uiDiv.appendChild(this.contentDiv),
						(this.editorCanvas = document.createElement("div")),
						(this.editorCanvas.style.flexGrow = "2"),
						(this.editorCanvas.style.flexShrink = "1"),
						(this.editorCanvas.style.position = "relative"),
						(this.editorCanvas.style.overflow = "auto"),
						(this.editorCanvas.style.display = "flex"),
						"popup" === this.settings.displayMode &&
							((this.editorCanvas.style.alignItems = "center"),
							(this.editorCanvas.style.justifyContent = "center")),
						(this.editorCanvas.style.pointerEvents = "none"),
						(this.editorCanvas.style.transformOrigin = "left top"),
						(this.editorCanvas.style.transform =
							"scale(" + this.zoomLevel + ")"),
						this.contentDiv.appendChild(this.editorCanvas),
						(this.editingTarget =
							this.target instanceof HTMLImageElement
								? document.createElement("img")
								: document.createElement("canvas")),
						void 0 === this.settings.uiOffsetTop &&
							this.target.offsetTop < this.styles.settings.toolbarHeight &&
							(this.editingTarget.style.marginTop =
								this.target.offsetTop -
								this.styles.settings.toolbarHeight +
								"px"),
						this.editorCanvas.appendChild(this.editingTarget),
						(this.toolbox = new y(
							this.uiDiv,
							this.settings.displayMode,
							this.uiStyleSettings,
							this.styles
						)),
						this.toolbox.show(
							this._silentRenderMode || this.uiStyleSettings.hideToolbox
								? "hidden"
								: "visible"
						);
				}),
				(t.prototype.closeUI = function () {
					"popup" === this.settings.displayMode && this.restoreOverflow(),
						this.targetRoot.removeChild(this.coverDiv);
				}),
				(t.prototype.removeMarker = function (t) {
					this.markerImage.removeChild(t.container),
						this.markers.indexOf(t) > -1 &&
							this.markers.splice(this.markers.indexOf(t), 1),
						t.dispose();
				}),
				(t.prototype.switchToSelectMode = function () {
					(this.mode = "select"),
						this.hideNotesEditor(),
						void 0 !== this._currentMarker &&
							("new" !== this._currentMarker.state
								? this._currentMarker.select()
								: (this.removeMarker(this._currentMarker),
								  this.setCurrentMarker(),
								  (this.markerImage.style.cursor = "default")),
							this.addUndoStep());
				}),
				(t.prototype.toolbarButtonClicked = function (t, e) {
					if ("marker" === t && void 0 !== e) this.createNewMarker(e);
					else if ("action" === t)
						switch (e) {
							case "select":
								this.switchToSelectMode(), this.switchToSelectMode();
								break;
							case "delete":
								this.deleteSelectedMarker();
								break;
							case "clear":
								this.clear();
								break;
							case "undo":
								this.undo();
								break;
							case "redo":
								this.redo();
								break;
							case "zoom":
								this.stepZoom();
								break;
							case "zoom-out":
								this.zoomLevel = 1;
								break;
							case "notes":
								void 0 === this.notesArea
									? (this.switchToSelectMode(),
									  (this.zoomLevel = 1),
									  this.showNotesEditor())
									: this.switchToSelectMode();
								break;
							case "close":
								this.close();
								break;
							case "render":
								this.switchToSelectMode(), this.startRenderAndClose();
						}
				}),
				(t.prototype.deleteSelectedMarker = function () {
					var t = this;
					if (void 0 !== this._currentMarker) {
						var e = !1;
						if (
							(this.eventListeners.markerbeforedelete.forEach(function (i) {
								var o = new Z(t, t._currentMarker, !0);
								i(o), o.defaultPrevented && (e = !0);
							}),
							!e)
						) {
							var i = this._currentMarker;
							this._currentMarker.dispose(),
								this.markerImage.removeChild(this._currentMarker.container),
								this.markers.splice(
									this.markers.indexOf(this._currentMarker),
									1
								),
								this.setCurrentMarker(),
								this.addUndoStep(),
								this.eventListeners.markerdelete.forEach(function (e) {
									return e(new Z(t, i));
								});
						}
					}
				}),
				(t.prototype.clear = function () {
					var t = this,
						e = !1;
					if (
						this.markers.length > 0 &&
						(this.eventListeners.markerbeforedelete.forEach(function (i) {
							var o = new Z(t, void 0, !0);
							i(o), o.defaultPrevented && (e = !0);
						}),
						!e)
					) {
						this.setCurrentMarker();
						for (
							var i = function (e) {
									var i = o.markers[e];
									o.setCurrentMarker(o.markers[e]),
										o._currentMarker.dispose(),
										o.markerImage.removeChild(o._currentMarker.container),
										o.markers.splice(o.markers.indexOf(o._currentMarker), 1),
										o.eventListeners.markerdelete.forEach(function (e) {
											return e(new Z(t, i));
										});
								},
								o = this,
								s = this.markers.length - 1;
							s >= 0;
							s--
						)
							i(s);
						this.addUndoStep();
					}
				}),
				Object.defineProperty(t.prototype, "isNotesAreaOpen", {
					get: function () {
						return void 0 !== this.notesArea;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.showNotesEditor = function () {
					var t;
					void 0 !== this._currentMarker &&
						((this.overlayContainer.innerHTML = ""),
						(this.notesArea = document.createElement("textarea")),
						(this.notesArea.className =
							this.uiStyleSettings.notesAreaStyleClassName),
						(this.notesArea.style.pointerEvents = "auto"),
						(this.notesArea.style.alignSelf = "stretch"),
						(this.notesArea.style.width = "100%"),
						(this.notesArea.style.margin =
							this.uiStyleSettings.toolbarHeight / 4 + "px"),
						(this.notesArea.value =
							null !== (t = this._currentMarker.notes) && void 0 !== t
								? t
								: ""),
						this.overlayContainer.appendChild(this.notesArea));
				}),
				(t.prototype.hideNotesEditor = function () {
					this.isNotesAreaOpen &&
						(void 0 !== this._currentMarker &&
							(this._currentMarker.notes =
								"" !== this.notesArea.value.trim()
									? this.notesArea.value
									: void 0),
						this.overlayContainer.removeChild(this.notesArea),
						(this.notesArea = void 0));
				}),
				(t.prototype.selectLastMarker = function () {
					this.markers.length > 0
						? this.setCurrentMarker(this.markers[this.markers.length - 1])
						: this.setCurrentMarker();
				}),
				(t.prototype.addUndoStep = function () {
					var t = this;
					if (
						void 0 === this._currentMarker ||
						"edit" !== this._currentMarker.state
					) {
						var e = this.getState(),
							i = this.undoRedoManager.getLastUndoStep();
						if (!i || (i.width === e.width && i.height === e.height)) {
							var o = this.undoRedoManager.undoStepCount;
							this.undoRedoManager.addUndoStep(e),
								o < this.undoRedoManager.undoStepCount &&
									this.eventListeners.statechange.forEach(function (e) {
										return e(new Y(t));
									});
						} else
							this.undoRedoManager.replaceLastUndoStep(e),
								this.eventListeners.statechange.forEach(function (e) {
									return e(new Y(t));
								});
					}
				}),
				(t.prototype.undo = function () {
					this.switchToSelectMode(), this.addUndoStep(), this.undoStep();
				}),
				(t.prototype.undoStep = function () {
					var t = this,
						e = this.undoRedoManager.undo();
					void 0 !== e &&
						(this.restoreState(e),
						this.addDefsToImage(),
						this.selectLastMarker(),
						this.eventListeners.statechange.forEach(function (e) {
							return e(new Y(t));
						}));
				}),
				(t.prototype.redo = function () {
					this.switchToSelectMode(), this.redoStep();
				}),
				(t.prototype.redoStep = function () {
					var t = this,
						e = this.undoRedoManager.redo();
					void 0 !== e &&
						(this.restoreState(e),
						this.addDefsToImage(),
						this.selectLastMarker(),
						this.eventListeners.statechange.forEach(function (e) {
							return e(new Y(t));
						}));
				}),
				(t.prototype.stepZoom = function () {
					var t = this.zoomSteps.indexOf(this.zoomLevel);
					this.zoomLevel =
						t < this.zoomSteps.length - 1
							? this.zoomSteps[t + 1]
							: this.zoomSteps[0];
				}),
				(t.prototype.panTo = function (t) {
					this.contentDiv.scrollBy({
						left: this.prevPanPoint.x - t.x,
						top: this.prevPanPoint.y - t.y,
					}),
						(this.prevPanPoint = t);
				}),
				(t.prototype.startRenderAndClose = function () {
					return o(this, void 0, void 0, function () {
						var t,
							e,
							i = this;
						return s(this, function (o) {
							switch (o.label) {
								case 0:
									return [4, this.render()];
								case 1:
									return (
										(t = o.sent()),
										(e = this.getState()),
										this.eventListeners.render.forEach(function (o) {
											return o(new X(i, t, e));
										}),
										this.close(!0),
										[2]
									);
							}
						});
					});
				}),
				(t.prototype.getState = function (t) {
					!0 === t && this.setCurrentMarker();
					var e = {
						width: this.imageWidth,
						height: this.imageHeight,
						markers: [],
					};
					return (
						this.markers.forEach(function (t) {
							return e.markers.push(t.getState());
						}),
						e
					);
				}),
				(t.prototype.restoreState = function (t) {
					var e = this;
					for (this.markers.splice(0); this.markerImage.lastChild; )
						this.markerImage.removeChild(this.markerImage.lastChild);
					t.markers.forEach(function (t) {
						var i = e._availableMarkerTypes.find(function (e) {
							return e.typeName === t.typeName;
						});
						if (void 0 !== i) {
							var o = e.addNewMarker(i);
							o.restoreState(t), e.markers.push(o);
						}
					}),
						t.width &&
							t.height &&
							(t.width !== this.imageWidth || t.height !== this.imageHeight) &&
							this.scaleMarkers(
								this.imageWidth / t.width,
								this.imageHeight / t.height
							),
						this.eventListeners.restorestate.forEach(function (t) {
							return t(new Y(e));
						});
				}),
				(t.prototype.addNewMarker = function (t) {
					var e = n.createGroup();
					return (
						this.markerImage.appendChild(e),
						new t(e, this.overlayContainer, this.settings)
					);
				}),
				(t.prototype.createNewMarker = function (t) {
					var e,
						i = this;
					(e =
						"string" == typeof t
							? this._availableMarkerTypes.find(function (e) {
									return e.typeName === t;
							  })
							: t) &&
						(this.setCurrentMarker(),
						this.addUndoStep(),
						(this._currentMarker = this.addNewMarker(e)),
						(this._currentMarker.onMarkerCreated = this.markerCreated),
						(this._currentMarker.onColorChanged = this.colorChanged),
						(this._currentMarker.onFillColorChanged = this.fillColorChanged),
						(this._currentMarker.onStateChanged = this.markerStateChanged),
						(this.markerImage.style.cursor = "crosshair"),
						this.toolbar.setActiveMarkerButton(e.typeName),
						this.toolbox.setPanelButtons(this._currentMarker.toolboxPanels),
						this.eventListeners.markercreating.forEach(function (t) {
							return t(new Z(i, i._currentMarker));
						}));
				}),
				(t.prototype.markerCreated = function (t) {
					var e = this;
					(this.mode = "select"),
						(this.markerImage.style.cursor = "default"),
						this.markers.push(t),
						this.setCurrentMarker(t),
						t instanceof D && this.settings.newFreehandMarkerOnPointerUp
							? this.createNewMarker(D)
							: this.toolbar.setSelectMode(),
						this.addUndoStep(),
						this.eventListeners.markercreate.forEach(function (t) {
							return t(new Z(e, e._currentMarker));
						});
				}),
				(t.prototype.colorChanged = function (t) {
					this.settings.defaultColorsFollowCurrentColors &&
						((this.settings.defaultColor = t),
						(this.settings.defaultStrokeColor = t));
				}),
				(t.prototype.fillColorChanged = function (t) {
					this.settings.defaultColorsFollowCurrentColors &&
						(this.settings.defaultFillColor = t);
				}),
				(t.prototype.markerStateChanged = function (t) {
					var e = this;
					this.eventListeners.markerchange.forEach(function (i) {
						return i(new Z(e, t));
					});
				}),
				(t.prototype.setCurrentMarker = function (t) {
					var e = this;
					this._currentMarker !== t &&
						void 0 !== this._currentMarker &&
						(this._currentMarker.deselect(),
						this.toolbar.setCurrentMarker(),
						this.toolbox.setPanelButtons([]),
						this._isResizing ||
							this.eventListeners.markerdeselect.forEach(function (t) {
								return t(new Z(e, e._currentMarker));
							})),
						(this._currentMarker = t),
						void 0 === this._currentMarker ||
							this._currentMarker.isSelected ||
							("new" !== this._currentMarker.state &&
								this._currentMarker.select(),
							this.toolbar.setCurrentMarker(this._currentMarker),
							this.toolbox.setPanelButtons(this._currentMarker.toolboxPanels),
							this._isResizing ||
								this.eventListeners.markerselect.forEach(function (t) {
									return t(new Z(e, e._currentMarker));
								}));
				}),
				(t.prototype.onPointerDown = function (t) {
					if (
						(this._isFocused || this.focus(),
						this.touchPoints++,
						1 === this.touchPoints || "touch" !== t.pointerType)
					)
						if (
							void 0 === this._currentMarker ||
							("new" !== this._currentMarker.state &&
								"creating" !== this._currentMarker.state)
						) {
							if ("select" === this.mode) {
								var e = this.markers.find(function (e) {
									return e.ownsTarget(t.target);
								});
								void 0 !== e
									? (this.setCurrentMarker(e),
									  (this.isDragging = !0),
									  this._currentMarker.pointerDown(
											this.clientToLocalCoordinates(t.clientX, t.clientY),
											t.target
									  ))
									: (this.setCurrentMarker(),
									  (this.isDragging = !0),
									  (this.prevPanPoint = { x: t.clientX, y: t.clientY }));
							}
						} else
							(this.isDragging = !0),
								this._currentMarker.pointerDown(
									this.clientToLocalCoordinates(t.clientX, t.clientY)
								);
				}),
				(t.prototype.onDblClick = function (t) {
					if ((this._isFocused || this.focus(), "select" === this.mode)) {
						var e = this.markers.find(function (e) {
							return e.ownsTarget(t.target);
						});
						void 0 !== e &&
							e !== this._currentMarker &&
							this.setCurrentMarker(e),
							void 0 !== this._currentMarker
								? this._currentMarker.dblClick(
										this.clientToLocalCoordinates(t.clientX, t.clientY),
										t.target
								  )
								: this.setCurrentMarker();
					}
				}),
				(t.prototype.onPointerMove = function (t) {
					(1 !== this.touchPoints && "touch" === t.pointerType) ||
						((void 0 !== this._currentMarker || this.isDragging) &&
							((void 0 !== this._currentMarker &&
								"edit" === this._currentMarker.state) ||
								t.preventDefault(),
							void 0 !== this._currentMarker
								? this._currentMarker.manipulate(
										this.clientToLocalCoordinates(t.clientX, t.clientY)
								  )
								: this.zoomLevel > 1 &&
								  this.panTo({ x: t.clientX, y: t.clientY })));
				}),
				(t.prototype.onPointerUp = function (t) {
					this.touchPoints > 0 && this.touchPoints--,
						0 === this.touchPoints &&
							this.isDragging &&
							void 0 !== this._currentMarker &&
							this._currentMarker.pointerUp(
								this.clientToLocalCoordinates(t.clientX, t.clientY)
							),
						(this.isDragging = !1),
						this.addUndoStep();
				}),
				(t.prototype.onPointerOut = function () {
					this.touchPoints > 0 && this.touchPoints--;
				}),
				(t.prototype.onKeyUp = function (t) {
					void 0 === this._currentMarker ||
						void 0 !== this.notesArea ||
						("Delete" !== t.key && "Backspace" !== t.key) ||
						this.deleteSelectedMarker();
				}),
				(t.prototype.clientToLocalCoordinates = function (t, e) {
					var i = this.markerImage.getBoundingClientRect();
					return {
						x: (t - i.left) / this.zoomLevel,
						y: (e - i.top) / this.zoomLevel,
					};
				}),
				(t.prototype.onWindowResize = function () {
					this.positionUI();
				}),
				(t.prototype.positionUI = function () {
					switch ((this.setTopLeft(), this.settings.displayMode)) {
						case "inline":
							var t =
								this.target.getClientRects().item(0).y >
								this.styles.settings.toolbarHeight
									? this.target.offsetTop - this.styles.settings.toolbarHeight
									: 0;
							(this.coverDiv.style.top = t + "px"),
								(this.coverDiv.style.left =
									this.target.offsetLeft.toString() + "px");
							break;
						case "popup":
							(this.coverDiv.style.top = "0px"),
								(this.coverDiv.style.left = "0px"),
								(this.coverDiv.style.width = "100vw"),
								(this.coverDiv.style.height = this.windowHeight + "px"),
								(this.contentDiv.style.maxHeight =
									this.windowHeight -
									2 * this.settings.popupMargin -
									3.5 * this.styles.settings.toolbarHeight +
									"px");
					}
					this.positionMarkerImage(), this.positionLogo();
				}),
				(t.prototype.addLicenseKey = function (t) {
					a.addKey(t);
				}),
				(t.prototype.addEventListener = function (t, e) {
					this.eventListeners.addEventListener(t, e);
				}),
				(t.prototype.removeEventListener = function (t, e) {
					this.eventListeners.removeEventListener(t, e);
				}),
				(t.prototype.renderState = function (t) {
					(this._silentRenderMode = !0),
						(this.settings.displayMode = "inline"),
						this.isOpen || this.show(),
						this.restoreState(t),
						this.startRenderAndClose(),
						(this._silentRenderMode = !1);
				}),
				Object.defineProperty(t.prototype, "isFocused", {
					get: function () {
						return this._isFocused;
					},
					enumerable: !1,
					configurable: !0,
				}),
				(t.prototype.focus = function () {
					var t = this;
					this._isFocused ||
						(this.attachWindowEvents(),
						(this._isFocused = !0),
						void 0 !== this._previousCurrentMarker &&
							this.setCurrentMarker(this._previousCurrentMarker),
						this.eventListeners.focus.forEach(function (e) {
							return e(new Y(t));
						}));
				}),
				(t.prototype.blur = function () {
					var t = this;
					this._isFocused &&
						(this.detachWindowEvents(),
						(this._isFocused = !1),
						(this._previousCurrentMarker = this._currentMarker),
						this.setCurrentMarker(),
						this.eventListeners.blur.forEach(function (e) {
							return e(new Y(t));
						}));
				}),
				(t.instanceCounter = 0),
				t
			);
		})();
	(t.Activator = a),
		(t.ArrowMarker = _),
		(t.ArrowTypePanel = A),
		(t.CalloutMarker = R),
		(t.CaptionFrameMarker = U),
		(t.ColorPickerPanel = f),
		(t.CoverMarker = I),
		(t.CurveMarker = j),
		(t.EllipseFrameMarker = G),
		(t.EllipseMarker = O),
		(t.EventListenerRepository = K),
		(t.FontFamilyPanel = P),
		(t.FrameMarker = B),
		(t.FreehandMarker = D),
		(t.HighlightMarker = N),
		(t.LineMarker = T),
		(t.LineStylePanel = w),
		(t.LineWidthPanel = x),
		(t.LinearMarkerBase = M),
		(t.MarkerArea = J),
		(t.MarkerAreaEvent = Y),
		(t.MarkerAreaRenderEvent = X),
		(t.MarkerBase = v),
		(t.MarkerEvent = Z),
		(t.MeasurementMarker = V),
		(t.OpacityPanel = W),
		(t.RectangleMarker = k),
		(t.RectangularBoxMarkerBase = S),
		(t.RectangularBoxMarkerGrips = m),
		(t.ResizeGrip = C),
		(t.Settings = E),
		(t.Style = l),
		(t.StyleClass = d),
		(t.StyleManager = p),
		(t.SvgHelper = n),
		(t.TextMarker = L),
		(t.ToolboxPanel = g),
		(t.TransformMatrix = b),
		Object.defineProperty(t, "__esModule", { value: !0 });
});
//# sourceMappingURL=markerjs2.js.map
