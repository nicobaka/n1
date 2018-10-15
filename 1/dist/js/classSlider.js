"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var slider =
/*#__PURE__*/
function () {
  function slider(slides) {
    var current = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, slider);

    this.SLIDES = slides;
    this.CURRENT = current;
  }

  _createClass(slider, [{
    key: "next",
    value: function next() {
      this.SLIDES[this.CURRENT].className = 'slide';
      this.CURRENT = (this.CURRENT + 1) % this.SLIDES.length;
      this.SLIDES[this.CURRENT].className = 'slide showing';
    }
  }, {
    key: "back",
    value: function back() {
      this.SLIDES[this.CURRENT].className = 'slide';
      if (this.CURRENT == 0) this.CURRENT = this.SLIDES.length - 1;else this.CURRENT = (this.CURRENT - 1) % this.SLIDES.length;
      this.SLIDES[this.CURRENT].className = 'slide showing';
    }
  }]);

  return slider;
}();

var SLIDER = new slider(document.querySelectorAll('#slides .slide'), 0);