"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
require("./Navbar.css");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class Navbar extends _react.Component {
  constructor() {
    super(...arguments);
    _defineProperty(this, "state", {
      clicked: false
    });
    _defineProperty(this, "handleClick", () => {
      this.setState({
        clicked: !this.state.clicked
      });
    });
  }
  render() {
    return /*#__PURE__*/_react.default.createElement("nav", null, /*#__PURE__*/_react.default.createElement("div", {
      id: "mobile",
      onClick: this.handleClick
    }, /*#__PURE__*/_react.default.createElement("i", {
      id: "bar",
      className: this.state.clicked ? "fas fa-times" : "fas fa-bars"
    })), /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html",
      id: "nav-logo"
    }, /*#__PURE__*/_react.default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "-1.88 0.72 120 60",
      width: "120",
      height: "60"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M66.366 20.45l5.763 2.27-5.763 2.146v3.066l9.87-3.985v-2.452l-9.87-3.985z",
      fill: "#A600FF"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M13.454 31.855c-2.76 0-4.782 1.226-4.966 3.8h3.066v-.06c.06-.858.858-1.47 1.717-1.4 1.165 0 1.717.674 1.717 1.84v.552h-1.4c-3.004 0-5.457.92-5.457 3.8v.123c0 2.33 1.717 3.372 3.8 3.372 1.288.06 2.452-.552 3.188-1.533v1.35h3.127v-7.725c-.06-2.943-2.085-4.108-4.782-4.108zm-.674 9.75c-1.104 0-1.594-.552-1.594-1.35v-.123c0-1.042.797-1.47 2.4-1.47h1.288v1.104c.06 1.226-.98 1.84-2.085 1.84zm12.814-.125c-1.533 0-2.33-1.042-2.33-3.372v-.368c0-2.27.92-3.372 2.33-3.372 1.104 0 1.717.736 1.9 1.84h3.066c-.245-3.004-2.452-4.353-5.028-4.353-3.066 0-5.518 2.085-5.518 6v.123c0 3.924 2.33 5.886 5.518 5.886 3.127 0 4.905-1.9 5.15-4.476H27.74c-.245 1.288-1.042 2.085-2.146 2.085zm11.956 0c-1.533 0-2.33-1.042-2.33-3.372v-.368c0-2.27.92-3.372 2.33-3.372 1.104 0 1.717.736 1.9 1.84h3.066c-.245-3.004-2.452-4.353-5.028-4.353-3.066 0-5.518 2.085-5.518 6v.123c0 3.924 2.33 5.886 5.518 5.886 3.127 0 4.905-1.9 5.1-4.476h-2.882c-.184 1.288-1.042 2.085-2.146 2.085zm12.078.062c-1.4 0-2.27-.797-2.4-2.882h7.48V37.3c0-3.8-2.4-5.457-5.273-5.457-3.127 0-5.518 2.146-5.518 6v.245c0 3.863 2.27 5.825 5.58 5.825 3.004 0 4.844-1.655 5.15-3.863h-3.004c-.123.92-1.042 1.594-2.023 1.47zm-.184-7.48c1.288 0 2.085.736 2.146 2.452h-4.292c.245-1.84 1.165-2.4 2.146-2.452z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M47.298 36.514h-.06z",
      fill: "#A600FF"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M63.423 31.855c-1.47-.06-2.82.674-3.495 1.962V32.1H56.74v11.527h3.188V36.27c.06-1.042.98-1.9 2.023-1.84 1.165 0 1.717.613 1.717 1.962v7.235h3.25V35.9c0-2.82-1.4-4.047-3.495-4.047zm9.504 8.093V34.5h2.207v-2.4h-2.207v-3.495l-3.188 1.35V32.1h-1.4v2.4h1.35v5.825c0 2.33 1.165 3.495 3.68 3.495.613 0 1.226-.06 1.84-.245V41.05a3.47 3.47 0 0 1-1.104.184c-.736 0-1.165-.43-1.165-1.288zm11.097-.675v.307c-.06 1.042-.98 1.9-2.023 1.84-1.165 0-1.655-.613-1.655-1.962V32.1h-3.25v7.787c0 2.698 1.533 3.985 3.617 3.985a3.59 3.59 0 0 0 3.372-1.962v1.717h3.25V32.1h-3.25zm8.83-5.1v-2.146h-3.188v11.527h3.188v-5.947c0-1.9 1.288-2.575 3.495-2.575v-3.188c-1.594 0-3.004.92-3.495 2.33zm15.266 3.077c0-3.8-2.4-5.395-5.273-5.395-3.127 0-5.518 2.146-5.518 6v.245c0 3.863 2.27 5.825 5.58 5.825 3.004 0 4.782-1.655 5.15-3.863h-3.004c-.245.98-1.165 1.594-2.146 1.533-1.4 0-2.27-.797-2.4-2.882H108v-1.47zm-7.48-.736c.245-1.9 1.165-2.452 2.207-2.452 1.288 0 2.085.736 2.146 2.452z"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M100.64 36.514z",
      fill: "#A600FF"
    }))), /*#__PURE__*/_react.default.createElement("div", {
      id: "nav-navbar"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      id: "navbar",
      className: this.state.clicked ? "#navbar active" : "#navbar"
    }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html"
    }, "Insights ", /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-chevron-down"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html"
    }, "Services ", /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-chevron-down"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html"
    }, "Industries ", /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-chevron-down"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html"
    }, "Careers ", /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-chevron-down"
    }))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html"
    }, "About ", /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-chevron-down"
    }))))), /*#__PURE__*/_react.default.createElement("a", {
      href: "index.html",
      id: "nav-search"
    }, /*#__PURE__*/_react.default.createElement("i", {
      class: "fa-solid fa-magnifying-glass fa-lg"
    })));
  }
}

// const Navbar = () => {
// };
var _default = Navbar;
exports.default = _default;