/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './node_modules/input-knob/dist/input-knob.umd.js':
      /*!********************************************************!*\
  !*** ./node_modules/input-knob/dist/input-knob.umd.js ***!
  \********************************************************/
      /***/ function (module) {
        eval(
          '!function(t,e){ true?module.exports=e():0}(this,(function(){"use strict";const t=document.createElement("template");t.innerHTML=\'\\n  <style>\\n    :host {\\n      display: inline-block;\\n      -khtml-user-select: none;\\n      -moz-user-select: none;\\n      -ms-user-select: none;\\n      -webkit-tap-highlight-color: transparent;\\n      -webkit-touch-callout: none;\\n      -webkit-user-select: none;\\n      touch-action: none;\\n      user-select: none;\\n      cursor: pointer;\\n    }\\n    #rotator {\\n      display: block;\\n      --angle: 0rad;\\n      transform: rotate(var(--angle));\\n      will-change: transform;\\n      height: 100%;\\n      width: 100%;\\n    }\\n  </style>\\n  <div id="rotator" part="rotator"><slot></slot></div>\',window.ShadyCSS&&ShadyCSS.prepareTemplate(t,"input-knob");const e=2*Math.PI;class n extends HTMLElement{constructor(){super(),window.ShadyCSS&&ShadyCSS.styleElement(this),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(t.content.cloneNode(!0)),this._rotator=this.shadowRoot.getElementById("rotator"),this._fallback=null,this._drawState=this._drawState.bind(this),this._onMousedown=this._onMousedown.bind(this),this._onMousemove=this._onMousemove.bind(this),this._onMouseup=this._onMouseup.bind(this),this._onPointerdown=this._onPointerdown.bind(this),this._onPointermove=this._onPointermove.bind(this),this._onPointerup=this._onPointerup.bind(this),this._onTouchend=this._onTouchend.bind(this),this._onTouchmove=this._onTouchmove.bind(this),this._onTouchstart=this._onTouchstart.bind(this),this._rotationStart=this._rotationStart.bind(this),this._rotationChange=this._rotationChange.bind(this),this._rotationEnd=this._rotationEnd.bind(this)}static get observedAttributes(){return["value","scale","min","max"]}get value(){return this.hasAttribute("value")?this.getAttribute("value"):0}set value(t){this.setAttribute("value",parseFloat(t))}get scale(){return this.hasAttribute("scale")?this.getAttribute("scale"):1}set scale(t){this.setAttribute("scale",parseFloat(t))}get min(){return this.hasAttribute("min")?this.getAttribute("min"):null}set min(t){this.setAttribute("min",parseFloat(t))}get max(){return this.hasAttribute("max")?this.getAttribute("max"):null}set max(t){this.setAttribute("max",parseFloat(t))}connectedCallback(){if(!this._rotator.part){for(this._fallback=document.createElement("span"),this._fallback.style.setProperty("--angle",`${this._angle}rad`),this._fallback.style.setProperty("transform","rotate(var(--angle))"),this._fallback.style.setProperty("-webkit-tap-highlight-color","transparent");this.childNodes.length>0;)this._fallback.appendChild(this.childNodes[0]);this._fallback.classList.add("fallback"),this.classList.add("fallback"),this.append(this._fallback)}this._drawState(),"PointerEvent"in window?this.addEventListener("pointerdown",this._onPointerdown):(this.addEventListener("touchstart",this._onTouchstart),this.addEventListener("mousedown",this._onMousedown))}disconnectedCallback(){"PointerEvent"in window?this.removeEventListener("pointerdown",this._onPointerdown):(this.removeEventListener("touchstart",this._onTouchstart),this.removeEventListener("mousedown",this._onMousedown))}attributeChangedCallback(t,n,i){this._angle=e/this.scale*(this.value%this.scale),this._rotations=Math.floor(this.value/this.scale),this._drawState()}_drawState(){let t=this._rotator;null!==this._fallback&&(t=this._fallback),t.style.setProperty("--angle",`${this._angle}rad`)}_rotationStart(){window.oncontextmenu=()=>!1,this._centerX=this.offsetLeft-this.scrollLeft+this.clientLeft+this.offsetWidth/2,this._centerY=this.offsetTop-this.scrollTop+this.clientTop+this.offsetHeight/2,this._initialAngle=this._angle,this._attemptedAngle=this._angle,this._attemptedRotations=this._rotations,this._initialTouchAngle=Math.atan2(this._touchY-this._centerY,this._touchX-this._centerX);const t=new Event("knob-move-start",{bubbles:!0});this.dispatchEvent(t)}_rotationChange(){this._previousAttemptedAngle=this._attemptedAngle,this._attemptedAngle=this._initialAngle-this._initialTouchAngle+Math.atan2(this._touchY-this._centerY,this._touchX-this._centerX),this._attemptedAngle=(this._attemptedAngle+e)%e,null!==this.max&&null!==this.min&&(this._attemptedAngle<1.57&&this._previousAttemptedAngle>4.71?this._attemptedRotations++:this._previousAttemptedAngle<1.57&&this._attemptedAngle>4.71&&this._attemptedRotations--),this._attemptedValue=this._attemptedAngle/(e/this.scale)+this.scale*this._attemptedRotations,(null===this.min||this._attemptedValue>=this.min)&&(null===this.max||this._attemptedValue<=this.max)?(this._angle=this._attemptedAngle,this._rotations=this._attemptedRotations,this.value=this._attemptedValue):this._attemptedValue<this.min?this.value=this.min:this._attemptedValue>this.max&&(this.value=this.max);const t=new Event("knob-move-change",{bubbles:!0});this.dispatchEvent(t)}_rotationEnd(){window.oncontextmenu=null;const t=new Event("knob-move-end",{bubbles:!0});this.dispatchEvent(t)}_onPointerdown(t){t.preventDefault(),this._touchX=t.clientX,this._touchY=t.clientY,this._rotationStart(),this.setPointerCapture(t.pointerId),this.addEventListener("pointermove",this._onPointermove),this.addEventListener("pointerup",this._onPointerup),this.addEventListener("pointercancel",this._onPointerup)}_onPointermove(t){t.preventDefault(),this._touchX=t.clientX,this._touchY=t.clientY,this._rotationChange()}_onPointerup(t){t.preventDefault(),this._rotationEnd(),this.releasePointerCapture(t.pointerId),this.removeEventListener("pointermove",this._onPointermove),this.removeEventListener("pointerup",this._onPointerup),this.removeEventListener("pointercancel",this._onPointerup)}_onMousedown(t){this._touchX=t.clientX,this._touchY=t.clientY,this._rotationStart(),document.addEventListener("mousemove",this._onMousemove),document.addEventListener("mouseup",this._onMouseup)}_onMousemove(t){t.preventDefault(),this._touchX=t.clientX,this._touchY=t.clientY,this._rotationChange()}_onMouseup(t){t.preventDefault(),document.removeEventListener("mousemove",this._onMousemove),document.removeEventListener("mouseup",this._onMouseup),this._rotationEnd()}_onTouchstart(t){t.preventDefault(),this._touchX=t.changedTouches[0].clientX,this._touchY=t.changedTouches[0].clientY,this._rotationStart(),this.addEventListener("touchmove",this._onTouchmove),this.addEventListener("touchend",this._onTouchend),this.addEventListener("touchcancel",this._onTouchend)}_onTouchmove(t){t.preventDefault(),this._touchX=t.targetTouches[0].clientX,this._touchY=t.targetTouches[0].clientY,this._rotationChange()}_onTouchend(t){t.preventDefault(),this.removeEventListener("touchmove",this._onTouchmove),this.removeEventListener("touchend",this._onTouchend),this.removeEventListener("touchcancel",this._onTouchend),this._rotationEnd()}}return customElements.define("input-knob",n),n}));\n\n\n//# sourceURL=webpack:///./node_modules/input-knob/dist/input-knob.umd.js?'
        );

        /***/
      },

    /***/ './script.js':
      /*!*******************!*\
  !*** ./script.js ***!
  \*******************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        'use strict';
        eval(
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var input_knob__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! input-knob */ \"./node_modules/input-knob/dist/input-knob.umd.js\");\n/* harmony import */ var input_knob__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(input_knob__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\nconst knob = document.createElement('input-knob');\nconst mixer = document.querySelector('.mixer');\nmixer.appendChild(knob);\n\nfunction setupAudioControls(\n  uploadId,\n  audioId,\n  speedControlId,\n  textId,\n  volumeControlId,\n  armId,\n  stopStartId,\n  deckNo\n) {\n  const audioUpload = document.getElementById(uploadId);\n  const audioElement = document.getElementById(audioId);\n  const speedControl = document.getElementById(speedControlId);\n  const volumeControl = document.getElementById(volumeControlId);\n  const arm = document.getElementById(armId);\n  const playPauseButton = document.getElementById(stopStartId);\n\n  audioElement.volume = volumeControl.value;\n\n  volumeControl.addEventListener('input', function () {\n    audioElement.volume = this.value;\n  });\n\n  audioUpload.addEventListener('change', function () {\n    const files = this.files;\n    if (files.length > 0) {\n      const file = files[0];\n      const url = URL.createObjectURL(file);\n      audioElement.src = url;\n      audioElement.load();\n      const text = document.querySelector(textId);\n      text.textContent = file.name;\n      arm.style.cssText = `transform:rotate(0deg )`;\n      if (arm.classList.contains('play'))\n        arm.classList.remove('play');\n      playPauseButton.textContent = 'Play';\n    }\n  });\n\n  speedControl.addEventListener('input', function () {\n    audioElement.playbackRate = this.value;\n  });\n\n  audioElement.preservesPitch = false;\n\n  audioElement.addEventListener('timeupdate', () => {\n    const totalDuration = audioElement.duration;\n    const currentTime = audioElement.currentTime;\n    // Check if duration is available\n    if (totalDuration > 0) {\n      // Calculate the percentage of the current progress\n      const progressPercentage = (currentTime / totalDuration) * 18;\n      arm.style.cssText = `transform:rotate(${\n        20 + progressPercentage\n      }deg )`;\n      const record = document.querySelector(\n        `.deck-${deckNo} .record`\n      );\n      record.style.cssText = `transform:rotate(${\n        progressPercentage * 360\n      }deg)`;\n    }\n  });\n\n  playPauseButton.addEventListener('click', () => {\n    const arm = document.querySelector(`#arm-${deckNo}`);\n    const audioElement = document.querySelector(\n      `#audioElement-${deckNo}`\n    );\n    const record = document.querySelector(`.deck-${deckNo} .record`);\n    arm.classList.toggle('play');\n    record.classList.toggle('play');\n    if (arm.classList.contains('play')) {\n      audioElement.play();\n      playPauseButton.textContent = 'Stop';\n    } else {\n      audioElement.pause();\n      playPauseButton.textContent = 'Play';\n    }\n  });\n}\n\n// Setup controls for the first audio element\nsetupAudioControls(\n  'audioUpload-1',\n  'audioElement-1',\n  'speedControl-1',\n  '#text-1',\n  'volumeControl-1',\n  'arm-1',\n  'stop-start-1',\n  1\n);\n\n// Setup controls for the second audio element\nsetupAudioControls(\n  'audioUpload-2',\n  'audioElement-2',\n  'speedControl-2',\n  '#text-2',\n  'volumeControl-2',\n  'arm-2',\n  'stop-start-2',\n  2\n);\n\n\n//# sourceURL=webpack:///./script.js?"
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module['default']
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (
        typeof Symbol !== 'undefined' &&
        Symbol.toStringTag
      ) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ =
    __webpack_require__('./script.js');
  /******/
  /******/
})();
