"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Banner.css");
var _accenture5gBanner1280x = _interopRequireDefault(require("../assets/accenture-5g-banner-1280x480.mp4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Banner = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "banner"
  }, /*#__PURE__*/_react.default.createElement("video", {
    autoPlay: true,
    loop: true,
    muted: true,
    src: _accenture5gBanner1280x.default
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "banner__padding"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "banner_content"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "The future is 5G"), /*#__PURE__*/_react.default.createElement("p", null, "Explore the technology transforming how we work, play and learn."))));
};
var _default = Banner;
exports.default = _default;