import React, { useEffect, useRef } from "https://cdn.skypack.dev/react@17.0.1";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import gsap from "https://cdn.skypack.dev/gsap@3.9.1";


const Cylinder = ({ className, radius, depth, resolution }) => {

  const sideWidth = radius * 5 / parseInt(resolution);
  const rotation = 360 / resolution;

  return /*#__PURE__*/(
    React.createElement("div", { className: "cylinder " + className, style: { "--radius": radius, '--depth': depth } }, /*#__PURE__*/
    React.createElement("div", { className: "top" }, "\xA0"),
    Array(parseInt(resolution)).fill(null).map((ell, i) => {
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "side",
        style: {
          '--width': sideWidth,
          '--height': depth,
          '--rotate': rotation * i } }, "\xA0");


    }), /*#__PURE__*/
    React.createElement("div", { className: "bottom" }, "\xA0")));


};

const App = props => {
  const stage = useRef({});

  useEffect(() => {
    document.addEventListener('pointermove', pos => {

      const { mapRange } = gsap.utils;
      let x = mapRange(
      0, window.innerWidth,
      -75, -95,
      pos.clientX);

      let y = mapRange(
      0, window.innerHeight,
      -5, -15,
      pos.clientY);


      // Update the custom property values.
      gsap.set(stage.current, {
        '--rotate-x': y + 'deg' });

      gsap.set(stage.current, {
        '--rotate-y': x + 'deg' });


    });
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "stage", ref: stage }, /*#__PURE__*/
    React.createElement(Cylinder, { className: "weight_big_left", radius: "30", depth: "5", resolution: "40" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "weight_small_left", radius: "20", depth: "5", resolution: "40" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "weight_big_right", radius: "30", depth: "5", resolution: "40" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "weight_small_right", radius: "20", depth: "5", resolution: "40" }), /*#__PURE__*/
    React.createElement("div", { className: "shaddow_left" }), /*#__PURE__*/
    React.createElement("div", { className: "shaddow_right" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "bar", radius: "6", depth: "60", resolution: "40" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "lock_left", radius: "2", depth: "9", resolution: "20" }), /*#__PURE__*/
    React.createElement(Cylinder, { className: "lock_right", radius: "2", depth: "9", resolution: "20" })));


};

ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));