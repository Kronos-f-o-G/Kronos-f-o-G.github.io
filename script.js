"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
window.addEventListener('load', function () {
  var a = new ScrollButton();
});
var Burger = /*#__PURE__*/_createClass(function Burger() {
  _classCallCheck(this, Burger);
  var buttons = document.querySelectorAll('[data-sroll-button]');
  for (var i = 0; i < buttons.length; ++i) {
    var _button = buttons[i];
    _button.addEventListener('click', function () {
      document.querySelector('[data-burger-button]').setAttribute('data-burger-button', 'true');
      document.querySelector('[data-burger-button]').classList.remove('header__burger-lines-active');
      block.classList.remove('header__links-active');
    });
  }
  var button = document.querySelector('[data-burger-button]');
  var block = document.querySelector('[data-burger-block]');
  button.addEventListener('click', function () {
    if (button.getAttribute('data-burger-button') == "true") {
      button.setAttribute('data-burger-button', 'false');
      button.classList.add('header__burger-lines-active');
      block.classList.add('header__links-active');
    } else {
      button.setAttribute('data-burger-button', 'true');
      button.classList.remove('header__burger-lines-active');
      block.classList.remove('header__links-active');
    }
  });
});
new Burger();
var base = [];
var min = 1;
var max = 11;
function GetRandom(min, max) {
  if (base.length == max - 1) {
    base = [];
  }
  var a = Math.floor(Math.random() * (max - min)) + min;
  while (base.indexOf(a) != -1) {
    a = Math.floor(Math.random() * (max - min)) + min;
  }
  base.push(a);
  return a;
}
var Popuper = /*#__PURE__*/_createClass(function Popuper() {
  _classCallCheck(this, Popuper);
  document.querySelector('[data-random]').addEventListener('click', function () {
    var a = GetRandom(min, max);
    var popup = document.querySelector("[data-popup=\"".concat(a, "\"]"));
    popup.classList.add('popup-active');
  });
  var buttons = document.querySelectorAll('[data-popup-button]');
  var _loop = function _loop() {
    var button = buttons[i];
    button.addEventListener('click', function () {
      var popup = document.querySelector("[data-popup=\"".concat(button.getAttribute('data-popup-button'), "\"]"));
      if (popup.classList.contains('popup-active')) {
        popup.classList.remove('popup-active');
      } else {
        popup.classList.add('popup-active');
      }
    });
  };
  for (var i = 0; i < buttons.length; ++i) {
    _loop();
  }
  var backs = document.querySelectorAll('[data-popup-background]');
  var _loop2 = function _loop2() {
    var back = backs[_i];
    back.addEventListener('click', function () {
      document.querySelector("[data-popup=\"".concat(back.getAttribute('data-popup-background'), "\"]")).classList.remove("popup-active");
    });
  };
  for (var _i = 0; _i < backs.length; ++_i) {
    _loop2();
  }
});
new Popuper();
var ScrollButton = /*#__PURE__*/_createClass(function ScrollButton() {
  _classCallCheck(this, ScrollButton);
  var buttons = document.querySelectorAll('[data-sroll-button]');
  var _loop3 = function _loop3() {
    var button = buttons[i];
    if (document.querySelectorAll("[data-scroll-element=\"".concat(button.getAttribute('data-sroll-button'), "\"]"))[0]) {
      button.addEventListener('click', function () {
        var coard = document.querySelectorAll("[data-scroll-element=\"".concat(button.getAttribute('data-sroll-button'), "\"]"))[0].getBoundingClientRect();
        window.scrollBy({
          top: coard.top - 140,
          behavior: "smooth"
        }); //140 - это смешение
      });
    }
  };
  for (var i = 0; i < buttons.length; ++i) {
    _loop3();
  }
}); // new ScrollButton()