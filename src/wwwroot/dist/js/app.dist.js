import{r as h,a as f}from"./libs/react.dist.js";var s={},v={get exports(){return s},set exports(t){s=t}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _=h,u=Symbol.for("react.element"),x=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,y=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function g(t,r,n){var o,a={},l=null,d=null;n!==void 0&&(l=""+n),r.key!==void 0&&(l=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)R.call(r,o)&&!j.hasOwnProperty(o)&&(a[o]=r[o]);if(t&&t.defaultProps)for(o in r=t.defaultProps,r)a[o]===void 0&&(a[o]=r[o]);return{$$typeof:u,type:t,key:l,ref:d,props:a,_owner:y.current}}i.Fragment=x;i.jsx=g;i.jsxs=g;(function(t){t.exports=i})(v);const b=s.Fragment,e=s.jsx,c=s.jsxs;var p={},m=f;p.createRoot=m.createRoot,p.hydrateRoot=m.hydrateRoot;const N="/dist/img/vite.svg",E="/dist/img/react.svg",k="/dist/img/netcore.svg";function C(t){const{Component:r,editCode:n}=t;return c("div",{className:"App",children:[c("div",{children:[e("a",{href:"https://vitejs.dev",target:"_blank",rel:"noreferrer",children:e("img",{src:N,className:"logo",alt:"Vite logo"})}),e("a",{href:"https://reactjs.org",target:"_blank",rel:"noreferrer",children:e("img",{src:E,className:"logo react",alt:"React logo"})}),e("a",{href:"https://learn.microsoft.com/en-us/aspnet/core/introduction-to-aspnet-core?view=aspnetcore-7.0",target:"_blank",rel:"noreferrer",children:e("img",{src:k,className:"logo react",alt:"Dotnet core logo"})})]}),e("h1",{children:"Vite + React + Dotnet Core"}),e("div",{className:"container",children:e("div",{className:"row",children:e("div",{className:"col-lg",children:c("div",{children:[e(r,{}),c("p",{children:["Edit ",e("code",{children:n})," and save to test HMR"]})]})})})}),e("p",{className:"read-the-docs",children:"Click on the Vite, React and Dotnet Core logos to learn more"})]})}export{C as A,b as F,c as a,p as c,e as j};
