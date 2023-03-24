(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{81246:function(a,b,c){var d=Object.defineProperty,e=Object.defineProperties,f=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,j=(a,b,c)=>b in a?d(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,k=(a,b)=>{for(var c in b||(b={}))h.call(b,c)&&j(a,c,b[c]);if(g)for(var c of g(b))i.call(b,c)&&j(a,c,b[c]);return a},l=(a,b)=>e(a,f(b)),m=(a,b)=>{var c={};for(var d in a)h.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&g)for(var d of g(a))0>b.indexOf(d)&&i.call(a,d)&&(c[d]=a[d]);return c};!function(a,d){d(b,c(67294),c(73935),c(19521),c(73342),c(95142),c(713),c(19818),c(66688),c(45697),c(15948),c(32512),c(9320),c(40600),c(92764),c(27046),c(30381),c(62520))}(this,function(a,b,d,e,f,g,h,i,j,n,o,p,q,r,s,t,u,v){"use strict";function w(a){return a&&"object"==typeof a&&"default"in a?a:{"default":a}}var x,y,z=function(a){if(a&&a.__esModule)return a;var b={__proto__:null,[Symbol.toStringTag]:"Module"};return a&&Object.keys(a).forEach(function(c){if("default"!==c){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d.get?d:{enumerable:!0,get:function(){return a[c]}})}}),b.default=a,Object.freeze(b)}(b),A=w(b),B=w(e),C=w(f),D=w(n),E=w(t),F=w(u),G=w(v);const H=({children:a})=>{const[c,d]=b.useState(null),e=b.useCallback(a=>{null!==a&&d(a)},[]);return z.createElement(z.Fragment,null,z.createElement("div",{id:"modal-root",ref:e}),z.createElement(I.Provider,{value:{portalNode:c}},a))},I=z.createContext(null);function J(){const a=z.useContext(I);if(!a)throw new Error("No Modal Container context provided");return a}function K(){const[a,b]=z.useState(!1),d={google:{families:["Inter:400,600"]},loading:()=>{b(!0)}};return z.useEffect(()=>{if(!a){const b=c(75933);return b.load(d)}},[]),null}function L(){return z.createElement(z.Fragment,null,z.createElement(K,null),z.createElement(N,null))}const M=e.css`
  :root {
    --tina-color-primary-light: #2296fe;
    --tina-color-primary: #2296fe;
    --tina-color-primary-dark: #0574e4;
    --tina-color-error-light: #eb6337;
    --tina-color-error: #ec4815;
    --tina-color-error-dark: #dc4419;
    --tina-color-warning-light: #f5e06e;
    --tina-color-warning: #e9d050;
    --tina-color-warning-dark: #d3ba38;
    --tina-color-success-light: #57c355;
    --tina-color-success: #3cad3a;
    --tina-color-success-dark: #249a21;
    --tina-color-grey-0: #ffffff;
    --tina-color-grey-1: #f6f6f9;
    --tina-color-grey-2: #edecf3;
    --tina-color-grey-3: #e1ddec;
    --tina-color-grey-4: #b2adbe;
    --tina-color-grey-5: #918c9e;
    --tina-color-grey-6: #716c7f;
    --tina-color-grey-7: #565165;
    --tina-color-grey-8: #433e52;
    --tina-color-grey-9: #363145;
    --tina-color-grey-10: #252336;
    --tina-color-indicator: var(--tina-color-primary);

    --tina-radius-small: 5px;
    --tina-radius-big: 24px;

    --tina-padding-small: 12px;
    --tina-padding-big: 20px;

    --tina-font-size-0: 12px;
    --tina-font-size-1: 13px;
    --tina-font-size-2: 15px;
    --tina-font-size-3: 16px;
    --tina-font-size-4: 18px;
    --tina-font-size-5: 20px;
    --tina-font-size-6: 22px;
    --tina-font-size-7: 26px;
    --tina-font-size-8: 32px;

    --tina-font-family: 'Inter', sans-serif;

    --tina-font-weight-regular: 400;
    --tina-font-weight-bold: 600;

    --tina-shadow-big: 0px 2px 3px rgba(0, 0, 0, 0.05),
      0 4px 12px rgba(0, 0, 0, 0.1);
    --tina-shadow-small: 0px 2px 3px rgba(0, 0, 0, 0.12);

    --tina-timing-short: 85ms;
    --tina-timing-medium: 150ms;
    --tina-timing-long: 250ms;

    --tina-z-index-0: 500;
    --tina-z-index-1: 1000;
    --tina-z-index-2: 1500;
    --tina-z-index-3: 2000;
    --tina-z-index-4: 2500;
    --tina-z-index-5: 3000;

    --tina-sidebar-width: 340px;
    --tina-sidebar-header-height: 60px;
    --tina-toolbar-height: 62px;
  }
`,N=e.createGlobalStyle`
  ${M};
`,O=e.css`
  font-family: 'Inter', sans-serif;
  color: var(--tina-color-grey-10);

  * {
    &::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
      border-left: 1px solid var(--tina-color-grey-2);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--tina-color-grey-3);
      border-radius: 0;
      border: none;
    }
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  hr {
    border-color: var(--tina-color-grey-2);
    color: var(--tina-color-grey-2);
    margin-bottom: var(--tina-padding-big);
    margin-left: calc(var(--tina-padding-big) * -1);
    margin-right: calc(var(--tina-padding-big) * -1);
    border-top: 1px solid var(--tina-color-grey-2);
    border-bottom: none;
    height: 0;
    box-sizing: content-box;
  }
  *:not([class]) {
    color: var(--tina-color-grey-10);
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    :not([class]) {
      font-family: 'Inter', sans-serif;
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
  td,
  th {
    padding: 0;
    width: auto;
    height: auto;
    border: inherit;
    margin: 0;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--tina-color-grey-10);

    :not([class]) {
      font-weight: var(--tina-font-weight-bold);
    }
  }
  h1:not([class]) {
    font-size: var(--tina-font-size-8);
  }
  h2:not([class]) {
    font-size: var(--tina-font-size-7);
  }
  h3:not([class]) {
    font-size: var(--tina-font-size-5);
  }
  h4:not([class]) {
    font-size: var(--tina-font-size-4);
  }
  h5:not([class]) {
    font-size: var(--tina-font-size-3);
  }
  h6:not([class]) {
    font-size: var(--tina-font-size-2);
  }
  p {
    color: var(--tina-color-grey-8);
    font-size: var(--tina-font-size-3);
  }
`,P=B.default.div`
  ${O}
`,Q=B.default.button`
  text-align: center;
  border: 0;
  border-radius: var(--tina-radius-big);
  box-shadow: var(--tina-shadow-small);
  background-color: var(--tina-color-grey-0);
  border: 1px solid var(--tina-color-grey-2);
  color: var(--tina-color-primary);
  fill: var(--tina-color-primary);
  font-weight: var(--tina-font-weight-regular);
  cursor: pointer;
  font-size: var(--tina-font-size-1);
  height: 40px;
  padding: 0 var(--tina-padding-big);
  transition: all 85ms ease-out;

  &:hover {
    background-color: var(--tina-color-grey-1);
  }
  &:active {
    background-color: var(--tina-color-grey-2);
    outline: none;
  }

  ${a=>a.disabled&&e.css`
      opacity: 0.3;
      pointer: not-allowed;
      pointer-events: none;
    `};

  ${a=>a.primary&&e.css`
      background-color: var(--tina-color-primary);
      color: var(--tina-color-grey-0);
      fill: var(--tina-color-grey-0);
      border: none;
      &:hover {
        background-color: var(--tina-color-primary-light);
      }
      &:active {
        background-color: var(--tina-color-primary-dark);
      }
    `};

  ${a=>a.small&&e.css`
      height: 32px;
      font-size: var(--tina-font-size-0);
      padding: 0 var(--tina-padding-big);
    `};

  ${a=>a.margin&&e.css`
      &:not(:first-child) {
        margin-left: 8px;
      }
    `};

  ${a=>a.grow&&e.css`
      flex-grow: 1;
    `};

  ${a=>a.busy&&e.css`
      cursor: wait;
    `};
`,R=B.default(Q)`
  padding: 0;
  width: 32px;
  height: 32px;
  margin: 0;
  position: relative;
  transform-origin: 50% 50%;
  transition: all 150ms ease-out;
  padding: 0;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  min-width: 0;

  svg {
    width: 26px;
    height: 26px;
    transition: all 150ms ease-out;
  }

  ${a=>a.small&&e.css`
      width: 28px;
      height: 28px;
      padding: 0;

      svg {
        width: 24px;
        height: 24px;
      }
    `};

  ${a=>a.open&&e.css`
      background-color: var(--tina-color-grey-0);
      border-color: var(--tina-color-grey-2);
      outline: none;
      fill: var(--tina-color-primary);
      svg {
        transform: rotate(45deg);
      }
      &:hover {
        background-color: var(--tina-color-grey-1);
      }
      &:active {
        background-color: var(--tina-color-grey-2);
      }
    `};
`,S=B.default.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow: auto;
  padding: 0;
  z-index: var(--tina-z-index-5);
`,T=a=>{const{portalNode:b}=J();return b?d.createPortal(z.createElement(P,null,z.createElement(S,null,z.createElement("div",k({},a)))),b):null},U=B.default.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 0 0 5px 5px;
  padding: 0 var(--tina-padding-big) var(--tina-padding-big)
    var(--tina-padding-big);
  ${Q} {
    flex: 0 1 auto;
    min-width: 128px;
    margin: 0 var(--tina-padding-small) 0 0;
    &:last-child {
      margin-right: 0;
    }
  }
`,V=B.default.div`
  padding: ${a=>a.padded?"var(--tina-padding-big)":"0"};
  margin: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 160px;

  &:last-child {
    border-radius: 0 0 5px 5px;
  }
`,W=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M14.9524 4.89689L14.9524 26.8016H16.7461L16.7461 4.89689H14.9524Z"}),z.createElement("path",{d:"M4.8969 16.7461H26.8016L26.8016 14.9523H4.89689L4.8969 16.7461Z"})),X=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M5 6.2684L24.7316 26L26 24.7316L6.2684 5L5 6.2684Z"}),z.createElement("path",{d:"M6.2684 26L26 6.2684L24.7316 5L5 24.7316L6.2684 26Z"})),Y=()=>z.createElement("svg",{width:"4",height:"14",viewBox:"0 0 4 14",fill:"#828282",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M2 5.5C1.5625 5.5 1.21875 5.65625 0.9375 5.9375C0.625 6.25 0.5 6.59375 0.5 7C0.5 7.4375 0.625 7.78125 0.9375 8.0625C1.21875 8.375 1.5625 8.5 2 8.5C2.40625 8.5 2.75 8.375 3.0625 8.0625C3.34375 7.78125 3.5 7.4375 3.5 7C3.5 6.59375 3.34375 6.25 3.0625 5.9375C2.75 5.65625 2.40625 5.5 2 5.5ZM0.5 2.25C0.5 1.84375 0.625 1.5 0.9375 1.1875C1.21875 0.90625 1.5625 0.75 2 0.75C2.40625 0.75 2.75 0.90625 3.0625 1.1875C3.34375 1.5 3.5 1.84375 3.5 2.25C3.5 2.6875 3.34375 3.03125 3.0625 3.3125C2.75 3.625 2.40625 3.75 2 3.75C1.5625 3.75 1.21875 3.625 0.9375 3.3125C0.625 3.03125 0.5 2.6875 0.5 2.25ZM0.5 11.75C0.5 11.3438 0.625 11 0.9375 10.6875C1.21875 10.4062 1.5625 10.25 2 10.25C2.40625 10.25 2.75 10.4062 3.0625 10.6875C3.34375 11 3.5 11.3438 3.5 11.75C3.5 12.1875 3.34375 12.5312 3.0625 12.8125C2.75 13.125 2.40625 13.25 2 13.25C1.5625 13.25 1.21875 13.125 0.9375 12.8125C0.625 12.5312 0.5 12.1875 0.5 11.75Z"})),Z=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M4 10H28V8H4V10Z"}),z.createElement("path",{d:"M4 17H28V15H4V17Z"}),z.createElement("path",{d:"M4 24H28V22H4V24Z"})),$=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M24.3324 8.96875C24.754 9.42578 25 9.95312 25 10.5859C25 11.2188 24.754 11.7461 24.3324 12.168L11.9634 24.543L7.85212 25C7.57101 25 7.36018 24.9297 7.21962 24.7188C7.04392 24.543 6.97365 24.332 7.00878 24.0508L7.46559 20.043L19.8346 7.66797C20.2562 7.24609 20.7833 7 21.4158 7C22.0483 7 22.5754 7.24609 23.0322 7.66797L24.3324 8.96875ZM11.1903 22.9258L20.3968 13.7148L18.2884 11.6055L9.08199 20.8164L8.80088 23.207L11.1903 22.9258ZM23.1376 10.9727C23.243 10.8672 23.3133 10.7266 23.3133 10.5859C23.3133 10.4453 23.243 10.3047 23.1376 10.1641L21.8375 8.86328C21.6969 8.75781 21.5564 8.6875 21.4158 8.6875C21.2753 8.6875 21.1347 8.75781 21.0293 8.86328L19.4832 10.4102L21.5915 12.5195L23.1376 10.9727Z"})),_=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M6.708 10.5L5.5 11.7654L14.2939 20.9773C14.9597 21.6747 16.0412 21.6737 16.7061 20.9773L25.5 11.7654L24.292 10.5L15.5 19.7098L6.708 10.5Z"})),aa=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M25.292 21.5L26.5 20.2346L17.7061 11.0227C17.0403 10.3253 15.9588 10.3263 15.2939 11.0227L6.5 20.2346L7.708 21.5L16.5 12.2901L25.292 21.5Z"})),ba=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M15 22C15 23.1 14.1 24 13 24C11.9 24 11 23.1 11 22C11 20.9 11.9 20 13 20C14.1 20 15 20.9 15 22ZM13 14C11.9 14 11 14.9 11 16C11 17.1 11.9 18 13 18C14.1 18 15 17.1 15 16C15 14.9 14.1 14 13 14ZM13 8C11.9 8 11 8.9 11 10C11 11.1 11.9 12 13 12C14.1 12 15 11.1 15 10C15 8.9 14.1 8 13 8ZM19 12C20.1 12 21 11.1 21 10C21 8.9 20.1 8 19 8C17.9 8 17 8.9 17 10C17 11.1 17.9 12 19 12ZM19 14C17.9 14 17 14.9 17 16C17 17.1 17.9 18 19 18C20.1 18 21 17.1 21 16C21 14.9 20.1 14 19 14ZM19 20C17.9 20 17 20.9 17 22C17 23.1 17.9 24 19 24C20.1 24 21 23.1 21 22C21 20.9 20.1 20 19 20Z"})),ca=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M21 7.208L19.7346 6L10.5227 14.7939C9.82527 15.4597 9.82626 16.5412 10.5227 17.2061L19.7346 26L21 24.792L11.7901 16L21 7.208Z"})),da=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M11 24.792L12.2654 26L21.4773 17.2061C22.1747 16.5403 22.1737 15.4588 21.4773 14.7939L12.2654 6L11 7.20799L20.2099 16L11 24.792Z"})),ea=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M15.5 23.0129L8.88889 23.0129L8.88889 9.10324L15.5 9.10324L15.5 7.11615L8.88889 7.11615C7.85 7.11615 7 8.01034 7 9.10324L7 23.0129C7 24.1058 7.85 25 8.88889 25L15.5 25L15.5 23.0129Z"}),z.createElement("path",{d:"M18.6961 12.4912L21.1328 15.0645L12 15.0645L12 17.0516L21.1328 17.0516L18.6961 19.6249L20.0278 21.0258L24.75 16.0581L20.0278 11.0903L18.6961 12.4912Z"})),fa=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M26 20V8C26 6.9 25.1 6 24 6H12C10.9 6 10 6.9 10 8V20C10 21.1 10.9 22 12 22H24C25.1 22 26 21.1 26 20ZM15 16L17.03 18.71L20 15L24 20H12L15 16ZM6 10V24C6 25.1 6.9 26 8 26H22V24H8V10H6Z"})),ga=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M24.7021 13.8628L24.0959 12.4533C24.0959 12.4533 25.5063 9.34049 25.3804 9.22033L23.5152 7.43748C23.3853 7.3142 20.2046 8.73502 20.2046 8.73502L18.7364 8.1553C18.7364 8.1553 17.4403 5 17.2622 5H14.629C14.4469 5 13.2457 8.16271 13.2457 8.16271L11.7807 8.74321C11.7807 8.74321 8.53338 7.393 8.40784 7.51277L6.54507 9.29875C6.41594 9.42125 7.89851 12.4724 7.89851 12.4724L7.29273 13.8788C7.29273 13.8788 4 15.1209 4 15.2883V17.8143C4 17.9903 7.3003 19.1415 7.3003 19.1415L7.90608 20.5467C7.90608 20.5467 6.49724 23.6572 6.62079 23.7765L8.48595 25.5641C8.61189 25.6854 11.795 24.265 11.795 24.265L13.264 24.847C13.264 24.847 14.5601 28 14.739 28H17.373C17.5551 28 18.7555 24.8373 18.7555 24.8373L20.2257 24.2552C20.2257 24.2552 23.467 25.607 23.5922 25.4888L25.4581 23.7028C25.5872 23.5788 24.1015 20.5292 24.1015 20.5292L24.7057 19.1228C24.7057 19.1228 28 17.8791 28 17.7094V15.1841C28.0008 15.0105 24.7021 13.8628 24.7021 13.8628ZM19.8479 16.4984C19.8479 18.5306 18.1222 20.1855 16.0012 20.1855C13.8818 20.1855 12.1537 18.5306 12.1537 16.4984C12.1537 14.4679 13.8818 12.8161 16.0012 12.8161C18.123 12.8169 19.8479 14.4679 19.8479 16.4984Z"})),ha=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M18.6466 14.5553C19.9018 13.5141 20.458 7.36086 21.0014 5.14903C21.5447 2.9372 23.7919 3.04938 23.7919 3.04938C23.7919 3.04938 23.2085 4.06764 23.4464 4.82751C23.6844 5.58738 25.3145 6.26662 25.3145 6.26662L24.9629 7.19622C24.9629 7.19622 24.2288 7.10204 23.7919 7.9785C23.355 8.85496 24.3392 17.4442 24.3392 17.4442C24.3392 17.4442 21.4469 22.7275 21.4469 24.9206C21.4469 27.1136 22.4819 28.9515 22.4819 28.9515H21.0296C21.0296 28.9515 18.899 26.4086 18.462 25.1378C18.0251 23.8669 18.1998 22.596 18.1998 22.596C18.1998 22.596 15.8839 22.4646 13.8303 22.596C11.7767 22.7275 10.4072 24.498 10.16 25.4884C9.91287 26.4787 9.81048 28.9515 9.81048 28.9515H8.66211C7.96315 26.7882 7.40803 26.0129 7.70918 24.9206C8.54334 21.8949 8.37949 20.1788 8.18635 19.4145C7.99321 18.6501 6.68552 17.983 6.68552 17.983C7.32609 16.6741 7.97996 16.0452 10.7926 15.9796C13.6052 15.914 17.3915 15.5965 18.6466 14.5553Z"}),z.createElement("path",{d:"M11.1268 24.7939C11.1268 24.7939 11.4236 27.5481 13.0001 28.9516H14.3511C13.0001 27.4166 12.8527 23.4155 12.8527 23.4155C12.1656 23.6399 11.3045 24.3846 11.1268 24.7939Z"})),ia=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.9 4.2V6.9H25V8.7H7V6.9H15.1V4.2H16.9ZM7.77201 10.5H24.2279L22.4102 24.1332C22.2853 25.0698 21.4406 25.8 20.4977 25.8H11.5022C10.5561 25.8 9.71404 25.0653 9.58977 24.1332L7.77201 10.5ZM22.172 12.3H9.82791L11.3739 23.8953C11.3788 23.9318 11.4569 24 11.5022 24H20.4977C20.5432 24 20.6209 23.9328 20.6259 23.8953L22.172 12.3Z"})),ja=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.3012 6.23952L11.0607 10.4801L10 9.41943L14.2406 5.17886C14.9213 4.49816 16.0233 4.48258 16.7196 5.17886L20.9602 9.41943L19.8995 10.4801L15.6589 6.23952C15.5561 6.13671 15.4039 6.13689 15.3012 6.23952Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M15.6988 25.8732L19.9393 21.6326L21 22.6933L16.7594 26.9339C16.0787 27.6146 14.9767 27.6301 14.2804 26.9339L10.0398 22.6933L11.1005 21.6326L15.3411 25.8732C15.4439 25.976 15.5961 25.9758 15.6988 25.8732Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6569 27.1127V17.799L16.1569 17.799V27.1127L14.6569 27.1127Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.6569 14.3137V5L16.1569 5V14.3137L14.6569 14.3137Z"})),ka=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M12.625 13.3846H19.375C21.2358 13.3846 22.75 14.8342 22.75 16.6154C22.75 18.3966 21.2358 19.8462 19.375 19.8462H16V22H19.375C22.4766 22 25 19.5845 25 16.6154C25 13.6463 22.4766 11.2308 19.375 11.2308H12.625V8L7 12.3077L12.625 16.6154V13.3846Z",fill:"inherit"})),la=()=>z.createElement("svg",{viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M16 29.3333C17.4666 29.3333 18.6666 28.1333 18.6666 26.6666H13.3333C13.3333 27.3739 13.6143 28.0522 14.1144 28.5523C14.6145 29.0524 15.2927 29.3333 16 29.3333ZM24 21.3333V14.6666C24 10.5733 21.8133 7.14665 18 6.23998V5.33331C18 4.22665 17.1066 3.33331 16 3.33331C14.8933 3.33331 14 4.22665 14 5.33331V6.23998C10.1733 7.14665 7.99998 10.56 7.99998 14.6666V21.3333L5.33331 24V25.3333H26.6666V24L24 21.3333Z",fill:"inherit"})),ma=()=>z.createElement("svg",{viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M16 2.66669C8.64802 2.66669 2.66669 8.64802 2.66669 16C2.66669 23.352 8.64802 29.3334 16 29.3334C23.352 29.3334 29.3334 23.352 29.3334 16C29.3334 8.64802 23.352 2.66669 16 2.66669ZM17.3334 22.6667H14.6667V14.6667H17.3334V22.6667ZM17.3334 12H14.6667V9.33335H17.3334V12Z",fill:"inherit"})),na=()=>z.createElement("svg",{viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M31.2176 28.768L16.9664 2.1568C16.8686 1.98698 16.7278 1.84593 16.5581 1.74786C16.3884 1.64978 16.1959 1.59814 16 1.59814C15.804 1.59814 15.6115 1.64978 15.4419 1.74786C15.2722 1.84593 15.1314 1.98698 15.0336 2.1568L0.783977 28.768C0.688907 28.9338 0.639554 29.1219 0.640959 29.3131C0.642365 29.5042 0.694478 29.6916 0.791977 29.856C0.991977 30.1936 1.35518 30.4 1.74878 30.4H30.2512C30.4442 30.4003 30.6339 30.3503 30.8017 30.2549C30.9695 30.1595 31.1095 30.022 31.208 29.856C31.3054 29.6916 31.3576 29.5044 31.3593 29.3133C31.361 29.1222 31.3121 28.9341 31.2176 28.768V28.768ZM17.6 27.2H14.4V24H17.6V27.2ZM17.6 21.6H14.4V11.2H17.6V21.6Z",fill:"inherit"})),oa=()=>z.createElement("svg",{viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M22.276 3.05736C22.1524 2.9333 22.0055 2.83491 21.8437 2.76787C21.6819 2.70082 21.5085 2.66643 21.3334 2.66669H10.6667C10.4916 2.66643 10.3181 2.70082 10.1563 2.76787C9.99455 2.83491 9.84763 2.9333 9.72402 3.05736L3.05736 9.72402C2.9333 9.84763 2.83491 9.99455 2.76787 10.1563C2.70082 10.3181 2.66643 10.4916 2.66669 10.6667V21.3334C2.66669 21.688 2.80669 22.0267 3.05736 22.276L9.72402 28.9427C9.84763 29.0667 9.99455 29.1651 10.1563 29.2322C10.3181 29.2992 10.4916 29.3336 10.6667 29.3334H21.3334C21.688 29.3334 22.0267 29.1934 22.276 28.9427L28.9427 22.276C29.0667 22.1524 29.1651 22.0055 29.2322 21.8437C29.2992 21.6819 29.3336 21.5085 29.3334 21.3334V10.6667C29.3336 10.4916 29.2992 10.3181 29.2322 10.1563C29.1651 9.99455 29.0667 9.84763 28.9427 9.72402L22.276 3.05736ZM17.3334 22.6667H14.6667V20H17.3334V22.6667ZM17.3334 17.3334H14.6667V9.33336H17.3334V17.3334Z",fill:"inherit"})),pa=()=>z.createElement("svg",{viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M22.6328 19.163V11.997C22.6281 10.391 21.613 8 18.8359 8V6L15.0484 9L18.8359 12V10C20.5677 10 20.7306 11.539 20.7391 12V19.163C19.3756 19.597 18.3719 20.92 18.3719 22.5C18.3719 24.43 19.8585 26 21.686 26C23.5134 26 25 24.43 25 22.5C25 20.92 23.9963 19.597 22.6328 19.163ZM21.686 24C20.9029 24 20.2656 23.327 20.2656 22.5C20.2656 21.673 20.9029 21 21.686 21C22.469 21 23.1063 21.673 23.1063 22.5C23.1063 23.327 22.469 24 21.686 24ZM13.6281 9.5C13.6281 7.57 12.1415 6 10.314 6C8.48659 6 7 7.57 7 9.5C7 11.08 8.00368 12.403 9.36718 12.837V19.163C8.00368 19.597 7 20.92 7 22.5C7 24.43 8.48659 26 10.314 26C12.1415 26 13.6281 24.43 13.6281 22.5C13.6281 20.92 12.6244 19.597 11.2609 19.163V12.837C12.6244 12.403 13.6281 11.08 13.6281 9.5ZM8.89374 9.5C8.89374 8.673 9.53098 8 10.314 8C11.0971 8 11.7344 8.673 11.7344 9.5C11.7344 10.327 11.0971 11 10.314 11C9.53098 11 8.89374 10.327 8.89374 9.5ZM11.7344 22.5C11.7344 23.327 11.0971 24 10.314 24C9.53098 24 8.89374 23.327 8.89374 22.5C8.89374 21.673 9.53098 21 10.314 21C11.0971 21 11.7344 21.673 11.7344 22.5Z",fill:"inherit"})),qa=()=>A.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"2 2 20 20"},A.default.createElement("path",{d:"M20,5h-8.586L9.707,3.293C9.52,3.105,9.265,3,9,3H4C2.897,3,2,3.897,2,5v14c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2V7 C22,5.897,21.103,5,20,5z M4,19V7h7h1h8l0.002,12H4z"})),ra=()=>A.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"2 2 20 20"},A.default.createElement("path",{d:"M19.903,8.586c-0.049-0.106-0.11-0.207-0.196-0.293l-6-6c-0.086-0.086-0.187-0.147-0.293-0.196 c-0.03-0.014-0.062-0.022-0.094-0.033c-0.084-0.028-0.17-0.046-0.259-0.051C13.04,2.011,13.021,2,13,2H6C4.897,2,4,2.897,4,4v16 c0,1.103,0.897,2,2,2h12c1.103,0,2-0.897,2-2V9c0-0.021-0.011-0.04-0.013-0.062c-0.005-0.089-0.022-0.175-0.051-0.259 C19.926,8.647,19.917,8.616,19.903,8.586z M16.586,8H14V5.414L16.586,8z M6,20V4h6v5c0,0.553,0.447,1,1,1h5l0.002,10H6z"}),A.default.createElement("path",{d:"M8 12H16V14H8zM8 16H16V18H8zM8 8H10V10H8z"})),sa=()=>z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-circle",viewBox:"0 0 16 16"},z.createElement("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"})),ta=()=>z.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-check-circle-fill",viewBox:"0 0 16 16"},z.createElement("path",{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"})),ua=B.default(a=>{var b=a,{children:c,close:d}=b,e=m(b,["children","close"]);return z.createElement("div",k({},e),z.createElement(va,null,c),d&&z.createElement(wa,{onClick:d},z.createElement(X,null)))})`
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--tina-padding-big) 0 var(--tina-padding-big);
  border-bottom: 1px solid var(--tina-color-grey-3);
  margin: 0;
`,va=B.default.h2`
  all: unset;
  color: var(--tina-color-grey-10);
  font-weight: var(--tina-font-weight-regular);
  font-family: var(--tina-font-family);
  font-size: var(--tina-font-size-4);
  font-weight: var(--tina-font-weight-regular);
  line-height: 1;
  margin: 0;
`,wa=B.default.div`
  display: flex;
  align-items: center;
  fill: var(--tina-color-grey-5);
  cursor: pointer;
  transition: fill 85ms ease-out;
  svg {
    width: 24px;
    height: auto;
  }
  &:hover {
    fill: var(--tina-color-grey-8);
  }
`,xa=e.keyframes`
  0% {
    transform: translate3d( -2rem, 0, 0 );
    opacity: 0;
  }

  100% {
    transform: translate3d( 0, 0, 0 );
    opacity: 1;
  }
`,ya=B.default.div`
  display: flex;
  flex-direction: column;
  z-index: var(--tina-z-index-0);
  overflow: visible;
  background-color: #fff;
  border-radius: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 1500px;
  height: 100%;
  animation: ${xa} 150ms ease-out 1;

  ${V} {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 721px) {
    width: calc(100% - 170px);
  }
`,za=ya,Aa=e.keyframes`
  0% {
    transform: translate3d( 0, -2rem, 0 );
    opacity: 0;
  }

  100% {
    transform: translate3d( 0, 0, 0 );
    opacity: 1;
  }
`,Ba=B.default.div`
  display: block;
  z-index: var(--tina-z-index-0);
  overflow: visible; /* Keep this as "visible", select component needs to overflow */
  background-color: var(--tina-color-grey-1);
  border-radius: var(--tina-radius-small);
  margin: 40px auto;
  width: 460px;
  max-width: 90%;
  animation: ${Aa} 150ms ease-out 1;
`,Ca=Ba;class Da{constructor(Ea,Fa){this.__type=Ea,this.events=Fa,this.__plugins={}}add(Ga){const Ha=Ga;Ha.__type||(Ha.__type=this.__type),this.__plugins[Ha.name]=Ha,this.events.dispatch({type:`plugin:add:${this.__type}`})}all(){return Object.keys(this.__plugins).map(a=>this.__plugins[a])}find(Ia){return this.__plugins[Ia]}remove(Ja){const Ka="string"==typeof Ja?Ja:Ja.name,La=this.__plugins[Ka];return delete this.__plugins[Ka],this.events.dispatch({type:`plugin:remove:${this.__type}`}),La}subscribe(Ma){return this.events.subscribe(`plugin:*:${this.__type}`,Ma)}}class Na{constructor(){this.listeners=new Set()}subscribe(Oa,Pa){let Qa;Qa="string"==typeof Oa?[Oa]:Oa;const Ra=Qa.map(a=>new Ua(a,Pa));return Ra.forEach(a=>this.listeners.add(a)),()=>{Ra.forEach(a=>this.listeners.delete(a))}}dispatch(Sa){if(!this.listeners)return;const Ta=Array.from(this.listeners.values());Ta.forEach(a=>a.handleEvent(Sa))}}class Ua{constructor(Va,Wa){this.eventPattern=Va,this.callback=Wa}handleEvent(Xa){return!!this.watchesEvent(Xa)&&(this.callback(Xa),!0)}watchesEvent(Ya){if("*"===this.eventPattern)return!0;const Za=Ya.type.split(":"),$a=this.eventPattern.split(":");let _a=0,ab=!1;for(;!ab&&_a<$a.length;){const bb="*"===$a[_a],cb=$a[_a]===Za[_a];ab=!(bb||cb),_a++}return!ab}}class db{constructor(){this.accept="*"}async persist(eb){return eb.map(({directory:a,file:b})=>({id:b.name,type:"file",directory:a,filename:b.name}))}async previewSrc(fb){return fb}async list(){return{items:[],nextOffset:0}}async delete(){}}class gb{constructor(hb,ib){this.store=hb,this.events=ib,this._pageSize=20,this.previewSrc=async(a,b="",c={})=>{try{this.events.dispatch({type:"media:preview:start",src:a,fieldName:b,formValues:c});const d=await this.store.previewSrc(a,b,c);return this.events.dispatch({type:"media:preview:success",src:a,url:d,fieldName:b,formValues:c}),d}catch(e){throw this.events.dispatch({type:"media:preview:failure",src:a,error:e,fieldName:b,formValues:c}),e}}}get isConfigured(){return!(this.store instanceof db)}get pageSize(){return this._pageSize}set pageSize(jb){this._pageSize=jb,this.events.dispatch({type:"media:pageSize",pageSize:jb})}open(kb={}){this.events.dispatch(k({type:"media:open"},kb))}get accept(){return this.store.accept}async persist(lb){try{this.events.dispatch({type:"media:upload:start",uploaded:lb});const mb=await this.store.persist(lb);return this.events.dispatch({type:"media:upload:success",uploaded:lb,media:mb}),mb}catch(nb){throw this.events.dispatch({type:"media:upload:failure",uploaded:lb,error:nb}),nb}}async delete(ob){try{this.events.dispatch({type:"media:delete:start",media:ob}),await this.store.delete(ob),this.events.dispatch({type:"media:delete:success",media:ob})}catch(pb){throw this.events.dispatch({type:"media:delete:failure",media:ob,error:pb}),pb}}async list(qb){try{this.events.dispatch(k({type:"media:list:start"},qb));const rb=await this.store.list(qb);return this.events.dispatch(l(k({type:"media:list:success"},qb),{media:rb})),rb}catch(sb){throw this.events.dispatch(l(k({type:"media:list:failure"},qb),{error:sb})),sb}}}class tb extends Error{constructor(ub){super(ub.message),this.ERR_TYPE="MediaListError",this.title=ub.title,this.docsLink=ub.docsLink}}const vb=class{constructor(wb={}){this._enabled=!1,this.api={},this.unsubscribeHooks={},this.events=new Na(),this.media=new gb(new db(),this.events),this.enable=()=>{this._enabled=!0,this.events.dispatch(vb.ENABLED)},this.disable=()=>{this._enabled=!1,this.events.dispatch(vb.DISABLED)},this.toggle=()=>{this.enabled?this.disable():this.enable()},this.plugins=new class{constructor(xb){this.events=xb,this.plugins={}}getType(yb){return this.plugins[yb]=this.plugins[yb]||new Da(yb,this.events)}findOrCreateMap(zb){return this.getType(zb)}add(Ab){this.findOrCreateMap(Ab.__type).add(Ab)}remove(Bb){this.findOrCreateMap(Bb.__type).remove(Bb)}all(Cb){return this.findOrCreateMap(Cb).all()}}(this.events),this.flags=new class{constructor(Db){this.events=Db,this._flags=new Map()}get(Eb){return this._flags.get(Eb)}set(Fb,Gb){this._flags.set(Fb,Gb),this.events.dispatch({type:"flag:set",key:Fb,value:Gb})}}(this.events),wb.media&&(this.media.store=wb.media),wb.mediaOptions&&wb.mediaOptions.pageSize&&(this.media.pageSize=wb.mediaOptions.pageSize),wb.plugins&&wb.plugins.forEach(a=>this.plugins.add(a)),wb.apis&&Object.entries(wb.apis).forEach(([a,b])=>this.registerApi(a,b)),wb.enabled&&this.enable()}registerApi(Hb,Ib){if(this.unsubscribeHooks[Hb]&&this.unsubscribeHooks[Hb](),Ib.events instanceof Na){const Jb=Ib.events.subscribe("*",this.events.dispatch),Kb=this.events.subscribe("*",a=>Ib.events.dispatch(a));this.unsubscribeHooks[Hb]=()=>{Jb(),Kb()}}this.api[Hb]=Ib}get enabled(){return this._enabled}get disabled(){return!this._enabled}};let Lb=vb;Lb.ENABLED={type:"cms:enable"},Lb.DISABLED={type:"cms:disable"};class Mb{constructor(Nb,Ob={}){this.events=Nb,this.map=Ob,this.alerts=new Map(),this.mapEventToAlert=a=>{const b=this.map[a.type];if(b){let c;c="function"==typeof b?b:()=>b;const{level:d,message:e,timeout:f}=c(a);this.add(d,e,f)}},this.events.subscribe("*",this.mapEventToAlert)}setMap(Pb){this.map=k(k({},this.map),Pb)}add(Qb,Rb,Sb=3e3){const Tb={level:Qb,message:Rb,timeout:Sb,id:`${Rb}|${Date.now()}`};this.alerts.set(Tb.id,Tb),this.events.dispatch({type:"alerts:add",alert:Tb});let Ub=null;const Vb=()=>{clearTimeout(Ub),this.dismiss(Tb)};return Ub=setTimeout(Vb,Tb.timeout),Vb}dismiss(Wb){this.alerts.delete(Wb.id),this.events.dispatch({type:"alerts:remove",alert:Wb})}subscribe(Xb){const Yb=this.events.subscribe("alerts",Xb);return()=>Yb()}get all(){return Array.from(this.alerts.values())}info(Zb,$b){return this.add("info",Zb,$b)}success(_b,ac){return this.add("success",_b,ac)}warn(bc,cc){return this.add("warn",bc,cc)}error(dc,ec){return this.add("error",dc,ec)}}function fc(a){var b=a,{Component:c,props:d}=b;return l(k({__type:"screen",layout:"popup"},m(b,["Component","props"])),{Component(a){return A.default.createElement(c,k(k({},a),d))}})}const gc="useCMS could not find an instance of CMS",hc=z.createContext(null);function ic(){const a=z.useContext(hc);if(!a)throw new Error(gc);const[,b]=z.useState(a.enabled);return z.useEffect(()=>a.events.subscribe("cms",()=>{b(a.enabled)}),[a]),a}class jc{constructor(kc){var lc=kc,{id:mc,label:nc,fields:oc,actions:pc,buttons:qc,reset:rc,loadInitialValues:sc,onChange:tc}=lc,uc=m(lc,["id","label","fields","actions","buttons","reset","loadInitialValues","onChange"]);this.loading=!1,this.subscribe=(a,b)=>this.finalForm.subscribe(a,b),this.handleSubmit=async(a,b,c)=>{try{const d=await this.onSubmit(a,b,c);return b.initialize(a),d}catch(e){return{[g.FORM_ERROR]:e}}},this.submit=()=>this.finalForm.submit();const vc=uc.initialValues||{};if(this.__type=uc.__type||"form",this.id=mc,this.label=nc,this.fields=oc||[],this.onSubmit=uc.onSubmit,this.finalForm=g.createForm(l(k({},uc),{initialValues:vc,onSubmit:this.handleSubmit,mutators:k(k({},C.default),uc.mutators)})),this._reset=rc,this.actions=pc||[],this.buttons=qc||{save:"Save",reset:"Reset"},this.updateFields(this.fields),sc&&(this.loading=!0,sc().then(a=>{this.updateInitialValues(a)}).finally(()=>{this.loading=!1})),tc){let wc=!0;this.subscribe(a=>{wc?wc=!1:tc(a)},{values:!0})}}get name(){return this.id}get values(){if(!this.loading)return this.finalForm.getState().values||this.initialValues}get initialValues(){return this.finalForm.getState().initialValues}get pristine(){return this.finalForm.getState().pristine}get dirty(){return this.finalForm.getState().dirty}get submitting(){return this.finalForm.getState().submitting}get valid(){return this.finalForm.getState().valid}async reset(){this._reset&&await this._reset(),this.finalForm.reset()}updateFields(xc){this.fields=xc}change(yc,zc){return this.finalForm.change(yc,zc)}get mutators(){return this.finalForm.mutators}updateValues(Ac){this.finalForm.batch(()=>{const a=this.finalForm.getState().active;a?Dc(this.finalForm,Ac):Cc(this.finalForm,Ac)})}updateInitialValues(Bc){this.finalForm.batch(()=>{const a=this.values||{};this.finalForm.initialize(Bc);const b=this.finalForm.getState().active;b?Dc(this.finalForm,a):Cc(this.finalForm,a)})}}function Cc(a,b){Object.entries(b).forEach(([b,c])=>{a.change(b,c)})}function Dc(a,b,c){const d=a.getState().active;Object.entries(b).forEach(([b,e])=>{const f=c?`${c}.${b}`:b;"object"==typeof e?"string"==typeof d&&d.startsWith(f)?Dc(a,e,f):a.change(f,e):f!==d&&a.change(f,e)})}const Ec=Fc;function Fc(a){const b=ic();let c;c=Array.isArray(a)?a:[a],z.useEffect(()=>(c.forEach(a=>{a&&b.plugins.add(a)}),()=>{c.forEach(a=>{a&&b.plugins.remove(a)})}),[b.plugins,...c])}function Gc(a,b,c){const d=ic();z.useEffect(function(){return d.events.subscribe(a,b)},c)}function Hc(a){const b=ic();return{dispatch:c=>b.events.dispatch(l(k({},c),{type:a})),subscribe:c=>b.events.subscribe(a,c)}}function Ic(a,b={}){var c=a,{loadInitialValues:d}=c,e=m(c,["loadInitialValues"]);e.initialValues=e.initialValues||b.values;const[,f]=z.useState(e.initialValues),[g,h]=z.useState(()=>Jc(e,a=>{f(a.values)}));z.useEffect(function(){g.id!==e.id&&h(Jc(e,a=>{f(a.values)}))},[e.id]);const[i,j]=z.useState(()=>!!d),k=z.useCallback(async()=>{d&&(j(!0),await d().then(a=>{g.updateInitialValues(a)}).finally(()=>{j(!1)}))},[g,j]);return z.useEffect(()=>{k()},[g,k]),Gc("unstable:reload-form-data",async()=>{await k(),await g.reset()},[k,g]),Kc(g,b.fields),Lc(g,b.label),Mc(g,b.values),[g?g.values:e.initialValues,g,i]}function Jc(a,b){const c=new jc(a);return c.subscribe(b,{values:!0}),c}function Kc(a,b){z.useEffect(()=>{void 0!==b&&a.updateFields(b)},[a,b])}function Lc(a,b){z.useEffect(()=>{void 0!==b&&(a.label=b)},[a,b])}function Mc(a,b){z.useEffect(()=>{void 0!==b&&a.updateValues(b)},[a,b])}function Nc(a,b){const[,c]=z.useState(0);z.useEffect(()=>a.subscribe(()=>{c(a=>a+1),b&&b()}))}function Oc(a,b){return c=>(Ec(b),z.createElement(a,k({},c)))}const Pc=({screen:a,close:b})=>z.createElement(Qc,{name:a.name,close:b,layout:a.layout},z.createElement(a.Component,{close:b})),Qc=({children:a,name:b,close:c,layout:d})=>{let e;switch(d){case"popup":e=Ca;break;case"fullscreen":e=za;break;default:e=Ca;break}return z.createElement(T,null,z.createElement(e,null,z.createElement(ua,{close:c},b),z.createElement(V,null,a)))},Rc=e.css`
  box-sizing: border-box;
  padding: var(--tina-padding-small);
  border-radius: var(--tina-radius-small);
  background: var(--tina-color-grey-0);
  font-size: var(--tina-font-size-2);
  line-height: 1.35;
  position: relative;
  color: var(--tina-color-grey-10);
  background-color: var(--tina-color-grey-0);
  transition: all 85ms ease-out;
  border: 1px solid var(--tina-color-grey-2);
  width: 100%;
  margin: 0;
  outline: none;
  box-shadow: 0 0 0 2px
    ${a=>a.error?"var(--tina-color-error)":"transparent"};

  &:hover {
    box-shadow: 0 0 0 2px var(--tina-color-grey-3);
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${a=>a.error?"var(--tina-color-error)":"var(--tina-color-primary)"};
  }

  &::placeholder {
    font-size: var(--tina-font-size-2);
    color: var(--tina-color-grey-3);
  }

  ${a=>a.small&&e.css`
      font-size: var(--tina-font-size-1);
      padding: 8px var(--tina-padding-small);
    `};
`,Sc=B.default.input`
  ${Rc}
`,Tc=B.default.input`
  ${Rc}
`,Uc=B.default.textarea`
  ${Rc};
  resize: vertical;
  height: 160px;
`,Vc=a=>{var b=a,{onDismiss:c,escape:d,click:e,disabled:f,allowClickPropagation:g,document:h}=b,i=m(b,["onDismiss","escape","click","disabled","allowClickPropagation","document"]);const j=Wc({onDismiss:c,escape:d,click:e,disabled:f,allowClickPropagation:g,document:h});return z.createElement("div",k({ref:j},i))};function Wc({onDismiss:a,escape:c=!1,click:d=!1,disabled:e=!1,allowClickPropagation:f=!1,document:g}){const h=b.useRef();return b.useEffect(()=>{const b=g?[document,g]:[document],i=a=>{a.stopPropagation(),a.stopImmediatePropagation(),a.preventDefault()},j=b=>{e||h.current.contains(b.target)||(console.log("did not click main content",b.target,h.current),f||i(b),a(b))},k=b=>{e||27===b.keyCode&&(b.stopPropagation(),a(b))};return d&&b.forEach(a=>a.body.addEventListener("click",j)),c&&b.forEach(a=>a.addEventListener("keydown",k)),()=>{b.forEach(a=>{a.body.removeEventListener("click",j),a.removeEventListener("keydown",k)})}},[d,g,c,e,a]),h}function Xc(a){if(!a)return null;const b=i.get(a);if(!b)return null;const c=b.value;return{r:c[0],g:c[1],b:c[2],a:c[3]}}(x=y||(y={})).Hex="hex",x.RGB="rgb";const Yc={[y.RGB]:{getLabel(a){return`R${a.r} G${a.g} B${a.b}`},getValue(a){const b=[a.r,a.g,a.b,a.a];return i.to.rgb(b)},parse:Xc},[y.Hex]:{getLabel(a){var b;return"#"+(16777216+((b=a).r<<16)+(b.g<<8)+b.b).toString(16).slice(1)},getValue(a){const b=[a.r,a.g,a.b,a.a];return i.to.hex(b)},parse:Xc}};function Zc({form:a,fields:b,padding:c=!0}){const d=ic();return z.createElement($c,{padding:c},b.map(b=>{if(null===b.component)return null;const c=d.plugins.findOrCreateMap("field").find(b.component);let e;c&&c.type&&(e=c.type);const f=_c("parse",b,c),g=_c("validate",b,c);let h=b.format;!h&&c&&c.format&&(h=c.format);let i=b.defaultValue;return!f&&c&&c.defaultValue&&(i=c.defaultValue),z.createElement(j.Field,{name:b.name,key:b.name,type:e,parse:f?(a,c)=>f(a,c,b):void 0,format:h?(a,c)=>h(a,c,b):void 0,defaultValue:i,validate:(a,c,d)=>{if(g)return g(a,c,d,b)}},d=>"string"!=typeof b.component&&null!==b.component?z.createElement(b.component,l(k({},d),{form:a.finalForm,tinaForm:a,field:b})):c?z.createElement(c.Component,l(k({},d),{form:a.finalForm,tinaForm:a,field:b})):z.createElement("p",null,"Unrecognized field type"))}))}const $c=B.default.div`
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow-x: visible !important;

  ${a=>a.padding&&e.css`
      overflow-x: hidden;
      overflow-y: auto;
      padding: 20px 20px 0 20px;
    `};
`;function _c(a,b,c){let d=b[a];return!d&&c&&c[a]&&(d=c[a]),d}const ad=j.Form,bd=({form:a,children:b})=>{const[c,d]=z.useState(0);return z.useEffect(()=>{d(a=>a+1)},[a]),z.createElement(ad,{form:a.finalForm,key:`${c}: ${a.id}`},b)},cd=z.createContext(!1);function dd(a){var c=a,{Component:d,children:e}=c,f=m(c,["Component","children"]);const g=b.useContext(cd);return g?z.createElement(j.Field,k({},f),({input:a,meta:b})=>z.createElement(d,k({input:a,meta:b},f))):e||null}dd.propTypes={name:D.default.string,type:D.default.string,Component:D.default.any.isRequired,children:D.default.any};const ed=({dotSize:a=8,color:b="white"})=>z.createElement("div",null,z.createElement(gd,{dotSize:a,color:b}),z.createElement(gd,{dotSize:a,color:b}),z.createElement(gd,{dotSize:a,color:b})),fd=e.keyframes`
  0% { transform: scale(0.1); }
  50% { transform: scale(1); }
  90% { transform: scale(0.1); }
  100% { transform: scale(0.1); }
`,gd=B.default.span`
  animation: ${fd} 2s linear infinite;
  display: inline-block;
  margin-right: 4px;
  :nth-child(2) {
    animation-delay: 0.3s;
  }
  :nth-child(3) {
    animation-delay: 0.5s;
  }
  ${({color:a,dotSize:b})=>e.css`
      background: ${a};
      width: ${b}px;
      height: ${b}px;
      border-radius: ${b}px;
    `}
`,hd=z.createContext(()=>null);function id(){return b.useContext(hd)}const jd=({children:a})=>{const b=z.useRef(null),c=z.useRef(0),e=z.useCallback(a=>{const e=z.useMemo(()=>{const a=c.current;return c.current+=1,a},[]);return b.current?d.createPortal(a.children({zIndexShift:e}),b.current):null},[b,c]);return z.createElement(hd.Provider,{value:e},z.createElement("div",{ref:b,style:{position:"relative",width:"100%",flex:"1 1 0%",overflow:"hidden"}},a))},kd=({pristine:a,reset:b,children:c})=>{const[d,e]=z.useState(!1);return z.createElement(z.Fragment,null,z.createElement(md,{onClick:()=>{e(a=>!a)},disabled:a},c),d&&z.createElement(ld,{reset:b,close:()=>e(!1)}))},ld=({close:a,reset:b})=>z.createElement(T,null,z.createElement(Ca,null,z.createElement(ua,{close:a},"Reset"),z.createElement(V,{padded:!0},z.createElement("p",null,"Are you sure you want to reset all changes?")),z.createElement(U,null,z.createElement(Q,{onClick:a},"Cancel"),z.createElement(Q,{margin:!0,primary:!0,onClick:async()=>{await b(),a()}},"Reset")))),md=B.default(Q)`
  flex: 0 0 96px;
`,nd=({actions:a,form:c})=>{const[d,e]=b.useState(!1);return z.createElement(z.Fragment,null,z.createElement(od,{onClick:()=>e(a=>!a)}),z.createElement(pd,{open:d},z.createElement(Vc,{click:!0,escape:!0,disabled:!d,onDismiss:()=>{e(a=>!a)}},a.map((a,b)=>z.createElement(a,{form:c,key:b})))))},od=B.default(a=>z.createElement("button",k({},a),z.createElement(Y,null)))`
  height: 64px;
  width: 40px;
  align-self: stretch;
  background-color: transparent;
  background-position: center;
  background-size: auto 18px;
  background-repeat: no-repeat;
  border: 0;
  margin: 0 -16px 0 8px;
  outline: none;
  cursor: pointer;
  transition: opacity 85ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: var(--tina-color-grey-1);
    fill: var(--tina-color-grey-8);
  }
`,pd=B.default.div`
  min-width: 192px;
  border-radius: var(--tina-radius-big);
  border: 1px solid #efefef;
  display: block;
  position: absolute;
  bottom: var(--tina-padding-big);
  right: var(--tina-padding-big);
  transform: translate3d(0, 0, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 85ms ease-out;
  transform-origin: 100% 100%;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, -28px, 0) scale3d(1, 1, 1);
    `};
`,qd=B.default.button`
  position: relative;
  text-align: center;
  font-size: var(--tina-font-size-1);
  padding: 0 12px;
  height: 40px;
  font-weight: var(--tina-font-weight-regular);
  width: 100%;
  background: none;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: all var(--tina-timing-medium) ease-out;
  &:hover {
    color: var(--tina-color-primary);
    background-color: var(--tina-color-grey-1);
  }
  &:not(:last-child) {
    border-bottom: 1px solid var(--tina-color-grey-2);
  }
`,rd=()=>z.createElement(zd,null,z.createElement(xd,null,"🤔"),z.createElement("h3",null,"Hey, you don't have any fields added to this form."),z.createElement("p",null,z.createElement(Ad,{href:"https://tinacms.org/docs/fields",target:"_blank"},z.createElement(xd,null,"📖")," Field Setup Guide"))),sd=a=>{var b=a,{form:c}=b,d=m(b,["form"]);const e=!!d.hideFooter,[f,g]=z.useState(0);z.useEffect(()=>{g(a=>a+1)},[c]);const h=c.finalForm,i=z.useCallback(a=>{if(!a.destination||!h)return;const b=a.type;h.mutators.move(b,a.source.index,a.destination.index)},[c]);return z.createElement(H,null,z.createElement(j.Form,{form:h,key:`${f}: ${c.id}`,onSubmit:c.onSubmit},({handleSubmit:a,pristine:b,invalid:d,submitting:f})=>z.createElement(o.DragDropContext,{onDragEnd:i},z.createElement(vd,{className:"form-body"},z.createElement(jd,null,c&&c.fields.length?z.createElement(Zc,{form:c,fields:c.fields}):z.createElement(rd,null))),!e&&z.createElement(wd,{className:"form-footer"},c.reset&&z.createElement(kd,{pristine:b,reset:async()=>{h.reset(),await c.reset()}},c.buttons.reset),z.createElement(Q,{onClick:()=>a(),disabled:b||f||d,busy:f,primary:!0,grow:!0,margin:!0},f&&z.createElement(ed,null),!f&&c.buttons.save),c.actions.length>0&&z.createElement(nd,{form:c,actions:c.actions})))))},td=({pristine:a})=>z.createElement("div",{className:"mr-6 flex flex-0 items-center"},!a&&z.createElement(z.Fragment,null,z.createElement("span",{className:"w-3 h-3 flex-0 rounded-full bg-yellow-400 border border-yellow-500 mr-2"})," ",z.createElement("p",{className:"text-gray-700 text-sm leading-tight whitespace-nowrap"},"Unsaved Changes")),a&&z.createElement(z.Fragment,null,z.createElement("span",{className:"w-3 h-3 flex-0 rounded-full bg-green-300 border border-green-400 mr-2"})," ",z.createElement("p",{className:"text-gray-500 text-sm leading-tight whitespace-nowrap"},"No Changes"))),ud=({children:a,padded:b=!1})=>z.createElement("div",{style:{maxHeight:"100%",overflowY:"auto",height:"100%"}},z.createElement("div",{style:{width:"100%",display:"flex",justifyContent:"center",padding:b?"2rem 1.5rem 0 1.5rem":""}},z.createElement("div",{style:{maxWidth:"900px",width:"100%"}},a))),vd=B.default.div`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  border-top: 1px solid var(--tina-color-grey-2);
  background-color: #f6f6f9;
`,wd=B.default.div`
  position: relative;
  flex: 0 0 auto;
  width: 100%;
  height: 64px;
  background-color: white;
  border-top: 1px solid var(--tina-color-grey-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
`,xd=B.default.span`
  font-size: 40px;
  line-height: 1;
  display: inline-block;
`,yd=e.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,zd=B.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--tina-padding-big) var(--tina-padding-big) 64px
    var(--tina-padding-big);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  animation-name: ${yd};
  animation-delay: 300ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-duration: 150ms;
  > *:first-child {
    margin: 0 0 var(--tina-padding-big) 0;
  }
  > ${xd} {
    display: block;
  }
  h3 {
    font-size: var(--tina-font-size-5);
    font-weight: normal;
    display: block;
    margin: 0 0 var(--tina-padding-big) 0;
    ${xd} {
      font-size: 1em;
    }
  }
  p {
    display: block;
    margin: 0 0 var(--tina-padding-big) 0;
  }
`,Ad=B.default.a`
  text-align: center;
  border: 0;
  border-radius: var(--tina-radius-big);
  border: 1px solid var(--tina-color-grey-2);
  box-shadow: var(--tina-shadow-small);
  font-weight: var(--tina-font-weight-regular);
  cursor: pointer;
  font-size: var(--tina-font-size-0);
  transition: all var(--tina-timing-short) ease-out;
  background-color: white;
  color: var(--tina-color-grey-8);
  padding: var(--tina-padding-small) var(--tina-padding-big)
    var(--tina-padding-small) 56px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  ${xd} {
    font-size: 24px;
    position: absolute;
    left: var(--tina-padding-big);
    top: 50%;
    transform-origin: 50% 50%;
    transform: translate3d(0, -50%, 0);
    transition: all var(--tina-timing-short) ease-out;
  }
  &:hover {
    color: var(--tina-color-primary);
    ${xd} {
      transform: translate3d(0, -50%, 0);
    }
  }
`,Bd=B.default(a=>{var b=a,{colorRGBA:c,colorFormat:d,unselectable:e}=b,f=m(b,["colorRGBA","colorFormat","unselectable"]);return z.createElement("div",k({},f),z.createElement("div",{className:"swatch-inner"},c?Yc[d].getLabel(c):"Click to add color"))})`
  background: var(--tina-color-grey-2);
  border-radius: var(--tina-radius-big);
  box-shadow: var(--tina-shadow-small);
  cursor: pointer;
  width: 100%;
  margin: 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: var(--tina-font-size-1);
    font-weight: bold;

    width: 100%;
    height: 40px;
    border-radius: var(--tina-radius-big);
    box-shadow: inset 0 0 1px 1px rgba(0, 0, 0, 0.075);
    background: ${a=>a.colorRGBA?`rgba(${a.colorRGBA.r}, ${a.colorRGBA.g}, ${a.colorRGBA.b}, ${a.colorRGBA.a})`:`#fff`};
    color: ${a=>{var b;return!(b=a.colorRGBA)||.299*b.r+.587*b.g+.114*b.b>186?"#000000":"#ffffff"}};
    transition: all var(--tina-timing-short) ease-out;
  }

  &:hover {
    > div {
      opacity: 0.6;
    }
  }
`,Cd=e.keyframes`
  0% {
    transform: translate3d(-50%, 0, 0) scale3d(0.5,0.5,1)
  }
  100% {
    transform: translate3d(-50%, 8px, 0) scale3d(1, 1, 1);
  }
`,Dd=e.keyframes`
  0% {
    transform: translate3d(-50%, -100%, 0) scale3d(0.5,0.5,1)
  }
  100% {
    transform: translate3d(-50%, calc(-100% - 8px), 0) scale3d(1, 1, 1);
  }
`,Ed=B.default.div`
  position: fixed;
  top: ${a=>a.triggerBoundingBox?a.triggerBoundingBox.bottom:"0"}px;
  left: ${a=>a.triggerBoundingBox?a.triggerBoundingBox.left+a.triggerBoundingBox.width/2:"0"}px;
  transform: translate3d(-50%, 8px, 0) scale3d(1, 1, 1);
  transform-origin: 50% 0;
  animation: ${Cd} 85ms ease-out both 1;
  z-index: var(--tina-z-index-5);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: 1px;
    transform: translate3d(-50%, -100%, 0);
    width: 18px;
    height: 14px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: var(--tina-color-grey-3);
    z-index: var(--tina-z-index-1);
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-top: 2px;
    transform: translate3d(-50%, -100%, 0);
    width: 16px;
    height: 13px;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    background-color: white;
    z-index: var(--tina-z-index-2);
  }

  ${a=>a.openTop&&e.css`
      top: ${a.triggerBoundingBox?a.triggerBoundingBox.top:"0"}px;
      transform: translate3d(-50%, calc(-100% - 8px), 0) scale3d(1, 1, 1);
      animation: ${Dd} 85ms ease-out both 1;
      transform-origin: 50% 100%;

      &:before,
      &:after {
        top: auto;
        bottom: 0;
        transform: translate3d(-50%, 100%, 0);
        clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
      }

      &:before {
        margin-top: 0;
        margin-bottom: 1px;
      }

      &:after {
        margin-top: 0;
        margin-bottom: 2px;
      }
    `};
`,Fd=B.default.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: var(--tina-z-index-1);
`,Gd=B.default.div`
  position: relative;
`,Hd="transparent",Id=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],Jd={sketch:a=>z.createElement(h.SketchPicker,{presetColors:a.presetColors,color:a.color,onChange:a.onChange,disableAlpha:a.disableAlpha,width:a.width}),block:a=>z.createElement(h.BlockPicker,{colors:a.presetColors,color:a.color,onChange:a.onChange,width:a.width})},Kd=({colorFormat:a,userColors:c=Id,widget:d="sketch",input:e})=>{const f=id(),g=z.useRef(null),[h,i]=b.useState(null),[j,m]=b.useState(!1),n=()=>{g.current&&i(g.current.getBoundingClientRect())};z.useEffect(()=>{if(h){const a=h.top+h.height/2,b=window.innerHeight;a>b/2?m(!0):m(!1)}},[h]),z.useEffect(()=>{let a=!1;setTimeout(()=>{n()},100);const b=()=>{clearTimeout(a),a=setTimeout(n,100)};return window.addEventListener("resize",b),()=>{window.removeEventListener("resize",b)}},[g.current]);const o=Jd[d];if(!o)throw new Error("You must specify a widget type.");const[p,q]=b.useState(!1),r=(a||y.Hex).toLowerCase(),s=e.value?Yc[r].parse(e.value):null,t=a=>{const b=a.hex===Hd?null:l(k({},a.rgb),{a:1});e.onChange(b?Yc[r].getValue(b):null)},u=a=>{a.stopPropagation();const b=!p;q(b),b&&n()};return z.createElement(Gd,{ref:g},z.createElement(Bd,{onClick:u,colorRGBA:s,colorFormat:r}),p&&z.createElement(f,null,({zIndexShift:a})=>z.createElement(Ed,{openTop:j,triggerBoundingBox:h,style:{zIndex:5e3+a}},z.createElement(Vc,{click:!0,escape:!0,disabled:!p,onDismiss:u},z.createElement(o,{presetColors:[...c,Hd],color:s||{r:0,g:0,b:0,a:0},onChange:t,disableAlpha:!0,width:"240px"})))))},Ld=({input:a,field:b,name:c,disabled:d=!1})=>{const e=!!(a.value||a.checked);let f=null;if(b.toggleLabels){const g="object"==typeof b.toggleLabels&&"true"in b.toggleLabels&&"false"in b.toggleLabels&&b.toggleLabels;f={true:g?g.true:"Yes",false:g?g.false:"No"}}return z.createElement(Md,null,f&&z.createElement("span",null,f.false),z.createElement(Nd,{hasToggleLabels:null!==f},z.createElement(Qd,k({id:c,type:"checkbox"},a)),z.createElement(Od,{htmlFor:c,role:"switch",disabled:d},z.createElement(Pd,{checked:e},z.createElement("span",null)))),f&&z.createElement("span",null,f.true))},Md=B.default.div`
  display: flex;
  align-items: center;

  > span {
    color: var(--tina-color-grey-8);
  }
`,Nd=B.default.div`
  position: relative;
  width: 48px;
  height: 28px;
  margin: ${a=>a.hasToggleLabels?"0 10px":"0"};
`,Od=B.default.label`
  background: none;
  padding: 0;
  opacity: ${a=>a.disabled?"0.4":"1"};
  outline: none;
  width: 48px;
  height: 28px;
  pointer-events: ${a=>a.disabled?"none":"inherit"};
`,Pd=B.default.div`
  position: relative;
  width: 48px;
  height: 28px;
  border-radius: var(--tina-radius-big);
  background-color: white;
  border: 1px solid var(--tina-color-grey-2);
  pointer-events: none;
  margin-left: -2px;
  span {
    position: absolute;
    border-radius: var(--tina-radius-big);
    left: 2px;
    top: 50%;
    width: calc(28px - 6px);
    height: calc(28px - 6px);
    background: ${a=>a.checked?"var(--tina-color-primary)":"var(--tina-color-grey-4)"};
    border: 1px solid
      ${a=>a.checked?"var(--tina-color-primary-dark)":"var(--tina-color-grey-5)"};
    transform: translate3d(${a=>a.checked?"20px":"0"}, -50%, 0);
    transition: all 150ms ease-out;
    box-shadow: var(--tina-shadow-big);
  }
`,Qd=B.default.input`
  position: absolute;
  left: 0;
  top: 0;
  width: 48px;
  height: 28px;
  opacity: 0;
  margin: 0;
  cursor: ${a=>a.disabled?"not-allowed":"pointer"};
  pointer-events: auto;

  &:hover {
    + ${Od} ${Pd} {
      box-shadow: 0 0 0 2px var(--tina-color-grey-3);
    }
  }

  &:focus {
    + ${Od} ${Pd} {
      box-shadow: 0 0 0 2px var(--tina-color-primary);
    }
  }
`,Rd=({input:a,field:b,options:c})=>{const d=c||b.options;return z.createElement(Ud,null,z.createElement("select",k({id:a.name,value:a.value,onChange:a.onChange},a),d?d.map(Sd).map(Td):z.createElement("option",null,a.value)))};function Sd(a){return"object"==typeof a?a:{value:a,label:a}}function Td(a){return z.createElement("option",{key:a.value,value:a.value},a.label)}const Ud=B.default.div`
  display: block;
  position: relative;

  select {
    all: unset;
    box-sizing: border-box;
    display: block;
    font-family: inherit;
    max-width: 100%;
    color: var(--tina-color-grey-10);
    padding: var(--tina-padding-small);
    border-radius: var(--tina-radius-small);
    background: var(--tina-color-grey-0);
    font-size: var(--tina-font-size-2);
    font-weight: var(--tina-font-weight-regular);
    line-height: 1.35;
    position: relative;
    background-color: var(--tina-color-grey-0);
    transition: all 85ms ease-out;
    border: 1px solid var(--tina-color-grey-2);
    width: 100%;
    margin: 0;
    appearance: none;
    outline: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 0.65em auto;
    padding-right: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      box-shadow: 0 0 0 2px var(--tina-color-grey-3);
    }

    &:focus {
      box-shadow: 0 0 0 2px var(--tina-color-primary);
    }
  }

  select:-moz-focusring,
  select::-moz-focus-inner {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`,Vd=({input:a,field:b,options:c})=>{const[d,e]=z.useState(null),f=c||b.options,g={};return z.useEffect(()=>{e(g[`radio_${a.value}`])},[a.value]),z.createElement(Yd,{id:a.name,direction:b.direction,variant:b.variant},"button"===b.variant&&z.createElement(Xd,{width:null==d?void 0:d.offsetWidth,height:null==d?void 0:d.offsetHeight,left:null==d?void 0:d.offsetLeft,top:null==d?void 0:d.offsetTop,hasValue:!!a.value}),f?f.map(a=>"object"==typeof a?a:{value:a,label:a}).map(c=>{const d=`field-${b.name}-option-${c.value}`,e=c.value===a.value;return z.createElement(Zd,{key:c.value,variant:b.variant,ref:a=>{g[`radio_${c.value}`]=a}},z.createElement("input",{type:"radio",id:d,name:a.name,value:c.value,onChange:b=>a.onChange(b.target.value),checked:e}),z.createElement($d,{htmlFor:d,checked:e,variant:b.variant},z.createElement(Wd,{variant:b.variant},c.label)))}):a.value)},Wd=B.default.span`
  ${a=>a.variant==="button"?`position: relative;`:``}
`,Xd=B.default.div`
  position: absolute;
  ${a=>a.width?`width: ${a.width}px;`:``};
  ${a=>a.height?`height: ${a.width}px;`:``};
  ${a=>a.left?`left: ${a.left}px;`:``};
  ${a=>a.top?`top: ${a.top}px;`:``}
  ${a=>`transform: scale(${a.hasValue?`1`:`0`});`}
  transition: all 85ms ease-out;
  backface-visibility: hidden;
  background-color: var(--tina-color-primary);
  box-shadow: var(--tina-shadow-small);
  border-radius: var(--tina-radius-big);
  height: calc(40px - 6px);
  pointer-events: none;
`,Yd=B.default.div`
  display: flex;
  padding-top: 4px;
  ${a=>a.variant==="button"?`
    min-height: calc(40px + 2px);
    background-color: var(--tina-color-grey-0);
    border-radius: var(--tina-radius-big);
    box-shadow: var(--tina-shadow-small);
    background-color: var(--tina-color-grey-0);
    border: 1px solid var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    padding: 3px;
    box-shadow: 0 0 0 0 var(--tina-color-grey-3);
    transition: all 85ms ease-out;
    gap: 3px;
    &:hover {
      box-shadow: 0 0 0 2px var(--tina-color-grey-3);
    }
    &:focus-within, &:active {
      box-shadow: 0 0 0 2px var(--tina-color-primary);
    }
  `:`
    gap: 12px;
    flex-wrap: wrap;
  `}
  ${a=>a.direction==="vertical"?`flex-direction: column;`:``}
`,Zd=B.default.div`
  ${a=>a.variant==="button"?`
      
    flex: 1;
    `:``}
  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`,$d=B.default.label`
  display: flex;
  align-items: center;
  font-size: var(--tina-font-size-1);
  ${a=>a.variant==="button"?`
    flex: 1;
    text-align: center;
    border-radius: var(--tina-radius-big);
    border: 1px solid var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    font-weight: var(--tina-font-weight-regular);
    cursor: pointer;
    font-size: var(--tina-font-size-1);
    height: calc(40px - 6px);
    padding: 0 var(--tina-padding-small);
    transition: all 85ms ease-out;
    margin: 0;
    border: none;
    text-align: center;
    justify-content: center;
    input:checked + & {
      color: var(--tina-color-grey-0);
    }
    &:hover {
      background-color: var(--tina-color-grey-1);
    }
    &:active {
      background-color: var(--tina-color-grey-2);
    }
  `:`
  &:before {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    margin-right: 4px;
    border-radius: var(--tina-radius-big);
    background-color: var(--tina-color-primary);
    border: 1px solid var(${a=>a.checked?`--tina-color-primary`:`--tina-color-grey-2`});
    box-shadow: 0 0 0 0 var(--tina-color-grey-3), inset 0 0 0 8px white;
    transition: all 85ms ease-out;
  }
  &:hover:before {
    box-shadow: 0 0 0 2px var(--tina-color-grey-3), inset 0 0 0 8px white;
  }
  input:focus + &:before {
    border: 1px solid var(--tina-color-grey-2);
    box-shadow: 0 0 0 2px var(--tina-color-primary), inset 0 0 0 8px white;
  }
  input:checked + &:before {
    border: 1px solid var(--tina-color-primary);
    box-shadow: 0 0 0 0 var(--tina-color-primary), inset 0 0 0 4px white;
  }
  input:checked:focus + &:before {
    border: 1px solid var(--tina-color-grey-2);
    box-shadow: 0 0 0 2px var(--tina-color-primary), inset 0 0 0 4px white;
  }
  `}
`,_d=({input:a,field:b,options:c,disabled:d=!1})=>{const e=c||b.options;return z.createElement(ae,{id:a.name},null==e?void 0:e.map(a=>"object"==typeof a?a:{value:a,label:a}).map(c=>{const e=`field-${b.name}-option-${c.value}`,f=!!a.value&&a.value.includes(c.value);return z.createElement(be,{key:c.value},z.createElement("input",{type:"checkbox",name:a.name,id:e,value:c.value,checked:f,disabled:d,onChange:b=>{!0===b.target.checked?a.onChange([...a.value,b.target.value]):a.onChange([...a.value.filter(a=>a!==b.target.value)])}}),z.createElement(ce,{htmlFor:e,checked:f},!0===f?z.createElement(ta,null):z.createElement(sa,null),z.createElement(de,null,c.label)))}))},ae=B.default.div`
  display: flex;
  flex-direction: column;
  padding-top: 4px;
  min-height: calc(40px + 2px);
  background-color: var(--tina-color-grey-0);
  border-radius: var(--tina-radius-big);
  box-shadow: var(--tina-shadow-small);
  background-color: var(--tina-color-grey-0);
  border: 1px solid var(--tina-color-grey-2);
  color: var(--tina-color-primary);
  padding: 3px;
  box-shadow: 0 0 0 0 var(--tina-color-grey-3);
  transition: all 85ms ease-out;
  gap: 3px;
  &:hover {
    box-shadow: 0 0 0 2px var(--tina-color-grey-3);
  }
  &:focus-within,
  &:active {
    box-shadow: 0 0 0 2px var(--tina-color-primary);
  }
`,be=B.default.div`
  flex: 1;

  & > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
}
`,ce=B.default.label`
  display: flex;
  align-items: center;
  font-size: var(--tina-font-size-1);
  flex: 1;
  border-radius: var(--tina-radius-big);
  border: 1px solid var(--tina-color-grey-2);
  color: var(--tina-color-primary);
  font-weight: var(--tina-font-weight-regular);
  cursor: pointer;
  font-size: var(--tina-font-size-1);
  height: calc(40px - 6px);
  padding: 0 var(--tina-padding-small);
  transition: all 85ms ease-out;
  margin: 0;
  border: none;
  svg {
    margin-right: 5px;
  }
`,de=B.default.span`
  position: relative;
`,ee=({onChange:a,value:b,step:c})=>z.createElement(Sc,{type:"number",step:c,value:b,onChange:a});function fe(){return ic()}const ge=B.default.div`
  border-radius: var(--tina-radius-small);
  flex: 1;
  display: flex;
  flex-direction: column;
  outline: none;
  cursor: pointer;
`,he=B.default.div`
  text-align: center;
  border-radius: var(--tina-radius-small);
  border: 1px solid var(--tina-color-grey-3);
  background-color: var(--tina-color-grey-2);
  color: var(--tina-color-grey-4);
  line-height: 1.35;
  padding: 12px 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);
  transition: all 85ms ease-out;
  &:hover {
    opacity: 0.6;
  }
`,ie=B.default.img`
  max-width: 100%;
  min-height: 100px;
  border-radius: var(--tina-radius-small);
  transition: opacity var(--tina-timing-short) ease-out;
  margin: 0;
  display: block;
  background-color: #e1ddec;
  background-size: auto;
  background-position: center center;
  background-repeat: no-repeat;
  ${a=>{var b,c;return(a==null?void 0:a.src)&&(((b=a==null?void 0:a.src)==null?void 0:b.includes("png"))||((c=a==null?void 0:a.src)==null?void 0:c.includes("svg")))?e.css`
          background-image: none;
        `:e.css`
          background-image: url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='40px' height='50px' viewBox='0 0 40 50' style='enable-background:new 0 0 40 50;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D%0A%3C/style%3E%3Cdefs%3E%3C/defs%3E%3Cpath class='st0' d='M16.09,24.97c-3.31,0.55-6.16-2.09-5.57-5.16c0.34-1.73,1.82-3.14,3.68-3.5c3.39-0.66,6.37,2.11,5.67,5.25 C19.48,23.28,17.96,24.66,16.09,24.97z M1.88,26.75c0-7.69,0-15.38,0-23.07C2,3.64,1.97,3.53,1.99,3.45c0.5-1.7,1.64-2.82,3.48-3.31 C5.57,0.12,5.71,0.14,5.75,0c7.31,0,14.63,0,21.94,0c0.03,0.1,0.12,0.08,0.2,0.1c0.96,0.2,1.77,0.63,2.47,1.28 c2.72,2.52,5.44,5.05,8.16,7.57c0.68,0.63,1.14,1.38,1.37,2.24c0.02,0.08-0.02,0.19,0.11,0.23c0,5.11,0,10.22,0,15.34h-4.76 c0-3.38,0-6.75,0-10.13c0-0.35-0.1-0.43-0.46-0.43c-3.21,0.01-6.42,0.01-9.63,0.01c-1.65,0-2.62-0.9-2.62-2.42 c0-2.94-0.01-5.89,0.01-8.83c0-0.46-0.14-0.54-0.6-0.53c-4.91,0.02-9.83,0.02-14.74,0c-0.44,0-0.57,0.09-0.57,0.52 c0.02,6.21,0.01,12.42,0.01,18.63c0,1.06,0,2.12,0,3.18H1.88z M27.28,11.46c0,0.31,0.14,0.34,0.41,0.34c2.25-0.01,4.5,0,6.75-0.01 c0.09,0,0.2,0.04,0.24,0c-2.46-2.28-4.92-4.56-7.39-6.85C27.29,7.1,27.3,9.28,27.28,11.46z M33.37,29.61c0,5.18-0.01,10.37,0,15.55 c0,0.35-0.1,0.43-0.46,0.43c-9.23-0.01-18.46-0.01-27.69,0c-0.44,0-0.45-0.17-0.45-0.48c0.01-5.17,0-10.33,0-15.5H0 c0,5.6,0,11.19,0,16.79c0.17,0.09,0.15,0.26,0.19,0.4c0.57,1.85,2.39,3.18,4.47,3.19c9.6,0.01,19.2,0.01,28.81,0 c2.08,0,3.89-1.33,4.47-3.19c0.04-0.14,0.02-0.31,0.19-0.4c0-5.6,0-11.19,0-16.79H33.37z M29.75,42.62c0.34,0,0.44-0.06,0.44-0.4 c-0.01-3.68-0.01-4.6-0.01-8.28c0-0.25-0.08-0.43-0.28-0.6c-0.62-0.55-1.22-1.13-1.83-1.69c-0.79-0.73-1.36-0.74-2.15-0.01 c-2.71,2.52-5.43,5.03-8.13,7.55c-0.26,0.25-0.39,0.24-0.65,0c-1.13-1.08-2.28-2.13-3.43-3.19c-0.7-0.65-1.31-0.65-2.01,0 c-1.16,1.07-2.31,2.15-3.48,3.22c-0.2,0.19-0.29,0.37-0.29,0.64c0.01,1.69,0.03,0.61,0,2.3c-0.01,0.41,0.14,0.46,0.53,0.46 c3.52-0.01,7.05-0.01,10.57-0.01C22.6,42.61,26.17,42.61,29.75,42.62z'/%3E%3C/svg%3E");
        `}}
`,je=B.default(R)`
  top: 8px;
  right: 8px;
  position: absolute;
  &:not(:hover) {
    fill: var(--tina-color-grey-0);
    background-color: transparent;
    border-color: transparent;
  }
`,ke=B.default.div`
  position: relative;
  overflow: hidden;
  &:hover {
    ${ie} {
      opacity: 0.6;
    }
  }
`,le=({onDrop:a,onClear:b,onClick:c,value:d,previewSrc:e,loading:f})=>{const g=fe(),{getRootProps:h,getInputProps:i}=p.useDropzone({accept:g.media.accept||"image/*",onDrop:a,noClick:!!c});return z.createElement(ge,l(k({},h()),{onClick:c}),z.createElement("input",k({},i())),d?z.createElement(ke,null,f?z.createElement(me,null):z.createElement(z.Fragment,null,z.createElement(ie,{src:e}),b&&z.createElement(je,{onClick:a=>{a.stopPropagation(),b()}},z.createElement(ia,null)))):z.createElement(ke,null,f?z.createElement(me,null):z.createElement(he,null,"Drag 'n' drop a file here,",z.createElement("br",null),"or click to select a file")))},me=()=>z.createElement(ne,null,z.createElement(ed,null)),ne=B.default.div`
  padding: 1rem;
  width: 100%;
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;var oe={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=A.default.createContext&&A.default.createContext(oe),qe=function(){return(qe=Object.assign||function(a){for(var b,c=1,d=arguments.length;c<d;c++)for(var e in b=arguments[c])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)},re=function(a,b){var c={};for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&0>b.indexOf(d)&&(c[d]=a[d]);if(null!=a&&"function"==typeof Object.getOwnPropertySymbols)for(var e=0,d=Object.getOwnPropertySymbols(a);e<d.length;e++)0>b.indexOf(d[e])&&Object.prototype.propertyIsEnumerable.call(a,d[e])&&(c[d[e]]=a[d[e]]);return c};function se(a){return a&&a.map(function(a,b){return A.default.createElement(a.tag,qe({key:b},a.attr),se(a.child))})}function te(a){return function(b){return A.default.createElement(ue,qe({attr:qe({},a.attr)},b),se(a.child))}}function ue(a){var b=function(b){var c,d=a.attr,e=a.size,f=a.title,g=re(a,["attr","size","title"]),h=e||b.size||"1em";return b.className&&(c=b.className),a.className&&(c=(c?c+" ":"")+a.className),A.default.createElement("svg",qe({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},b.attr,d,g,{className:c,style:qe(qe({color:a.color||b.color},b.style),a.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),f&&A.default.createElement("title",null,f),a.children)};return void 0!==pe?A.default.createElement(pe.Consumer,null,function(a){return b(a)}):b(oe)}function ve(a){return te({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"}},{tag:"path",attr:{d:"M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"}}]})(a)}const we=(a,b)=>{const[c,d]=z.useState(void 0);return z.useEffect(()=>{const c=async()=>{const c=await a.api.tina.request(`
        query($id: String!) {
          node(id:$id) {
            ... on Document {
              sys {
                collection {
                  name
                }
                breadcrumbs
              }
            }
          }
        }`,{variables:{id:b}});d(c.node)};a&&b?c():d(void 0)},[a,b]),c},xe=({cms:a,id:b,children:c})=>{const d=we(a,b);return d?z.createElement(z.Fragment,null,c(d)):null},ye=({input:a,field:b,options:c})=>{const d=fe(),e=d.flags.get("tina-admin"),f=c||b.options;return z.createElement(Be,null,z.createElement("select",k({id:a.name,value:a.value,onChange:a.onChange},a),f?f.map(ze).map(Ae):z.createElement("option",null,a.value)),e&&z.createElement(xe,{cms:d,id:a.value},a=>z.createElement("a",{href:`/admin/collections/${a.sys.collection.name}/${a.sys.breadcrumbs.join("/")}`,style:{display:"flex",alignItems:"center",textTransform:"uppercase",fontSize:"12px",fontWeight:500,marginTop:"8px",marginBottom:"4px",lineHeight:"1"}},z.createElement(ve,{style:{height:"1.365em",width:"auto",opacity:"0.8",marginRight:"6px"}}),"Edit in Tina Admin")))};function ze(a){return"object"==typeof a?a:{value:a,label:a}}function Ae(a){return z.createElement("option",{key:a.value,value:a.value},a.label)}const Be=B.default.div`
  display: block;
  position: relative;

  select {
    all: unset;
    box-sizing: border-box;
    display: block;
    font-family: inherit;
    max-width: 100%;
    color: var(--tina-color-grey-10);
    padding: var(--tina-padding-small);
    border-radius: var(--tina-radius-small);
    background: var(--tina-color-grey-0);
    font-size: var(--tina-font-size-2);
    font-weight: var(--tina-font-weight-regular);
    line-height: 1.35;
    position: relative;
    background-color: var(--tina-color-grey-0);
    transition: all 85ms ease-out;
    border: 1px solid var(--tina-color-grey-2);
    width: 100%;
    margin: 0;
    appearance: none;
    outline: none;
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
    background-repeat: no-repeat;
    background-position: right 0.7em top 50%;
    background-size: 0.65em auto;
    padding-right: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      box-shadow: 0 0 0 2px var(--tina-color-grey-3);
    }

    &:focus {
      box-shadow: 0 0 0 2px var(--tina-color-primary);
    }
  }

  select:-moz-focusring,
  select::-moz-focus-inner {
    color: transparent;
    text-shadow: 0 0 0 #000;
  }
`,Ce=({tinaForm:a,field:b})=>{const c=ic(),[d,e]=z.useState(!1);return z.createElement(z.Fragment,null,z.createElement(Ee,{onClick:()=>{const b=a.finalForm.getState();if(!0===b.invalid){c.alerts.error("Cannot navigate away from an invalid form.");return}e(a=>!a)}},b.label||b.name,z.createElement(da,null)),z.createElement(De,{isExpanded:d,setExpanded:e,field:b,tinaForm:a}))},De=function({setExpanded:a,isExpanded:b,tinaForm:c,field:d}){const e=ic(),f=id(),g=z.useMemo(()=>d.fields.map(a=>l(k({},a),{name:`${d.name}.${a.name}`})),[d.fields,d.name]);return z.createElement(f,null,({zIndexShift:f})=>z.createElement(Ie,{isExpanded:b,style:{zIndex:f+1e3}},z.createElement(Fe,{onClick:()=>{const b=c.finalForm.getState();if(!0===b.invalid){e.alerts.error("Cannot navigate away from an invalid form.");return}a(!1)}},z.createElement(ca,null)," ",z.createElement("span",null,d.label||d.name)),z.createElement(Ge,null,b?z.createElement(Zc,{form:c,fields:g}):null)))},Ee=B.default.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--tina-color-grey-2);
  border-radius: var(--tina-radius-small);
  margin: 0 0 24px 0;
  overflow: visible;
  line-height: 1.35;
  padding: 12px;
  color: var(--tina-color-grey-10);
  background-color: white;

  svg {
    width: 24px;
    height: auto;
    fill: var(--tina-color-grey-3);
    transition: all var(--tina-timing-short) ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    color: #0084ff;
  }
`,Fe=B.default.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 6px 18px 6px 18px;
  font-size: var(--tina-font-size-3);
  transition: color var(--tina-timing-medium) ease-out;
  user-select: none;
  border-bottom: 1px solid var(--tina-color-grey-2);
  margin: 0;
  span {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    flex: 0 0 auto;
    width: 24px;
    fill: var(--tina-color-grey-3);
    height: auto;
    transform: translate3d(-4px, 0, 0);
    transition: transform var(--tina-timing-medium) ease-out;
  }
  :hover {
    color: var(--tina-color-primary);
    svg {
      fill: var(--tina-color-grey-8);
      transform: translate3d(-7px, 0, 0);
      transition: transform var(--tina-timing-medium) ease-out;
    }
  }
`,Ge=({children:a})=>z.createElement("div",{style:{flex:"1 1 0%",width:"100%",overflowY:"auto",background:"var(--tina-color-grey-1)"}},z.createElement(ud,null,a)),He=e.keyframes`
  0% {
    transform: translate3d( 100%, 0, 0 );
  }
  100% {
    transform: translate3d( 0, 0, 0 );
  }
`,Ie=B.default.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  pointer-events: ${a=>a.isExpanded?"all":"none"};

  > * {
    ${a=>a.isExpanded&&e.css`
        animation-name: ${He};
        animation-duration: 150ms;
        animation-delay: 0;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-fill-mode: backwards;
      `};

    ${a=>!a.isExpanded&&e.css`
        transition: transform 150ms ease-out;
        transform: translate3d(100%, 0, 0);
      `};
  }
`,Je={name:"group",Component:Ce};function Ke(a){return b=>z.createElement(Le,{name:b.input.name,label:b.field.label,description:b.field.description,error:b.meta.error},z.createElement(a,k({},b)))}const Le=a=>{var b=a,{name:c,label:d,description:e,error:f,margin:g=!0,children:h}=b,i=m(b,["name","label","description","error","margin","children"]);const{dispatch:j}=Hc("field:hover"),{dispatch:l}=Hc("field:focus");return z.createElement(Me,k({margin:g,onMouseOver:()=>j({fieldName:c}),onMouseOut:()=>j({fieldName:null}),onClick:()=>l({fieldName:c})},i),z.createElement(Ne,{htmlFor:c},d||c,e&&z.createElement(Oe,null,e)),h,f&&z.createElement(Pe,null,f))},Me=B.default.div`
  position: relative;

  ${a=>a.margin&&e.css`
      margin-bottom: var(--tina-padding-big);
    `};
`,Ne=B.default.label`
  all: unset;
  font-family: 'Inter', sans-serif;
  display: block;
  font-size: var(--tina-font-size-1);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  color: var(--tina-color-grey-8);
  margin-bottom: 8px;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
`,Oe=B.default.span`
  all: unset;
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: var(--tina-font-size-0);
  font-style: italic;
  font-weight: lighter;
  color: var(--tina-color-grey-6);
  padding-top: 4px;
  white-space: normal;
  margin: 0;
`,Pe=B.default.span`
  display: block;
  color: red;
  font-size: var(--tina-font-size-1);
  margin-top: 8px;
  font-weight: var(--tina-font-weight-regular);
`,Qe=()=>z.createElement(Xe,null,"There are no items"),Re=a=>{var b=a,{tinaForm:c,field:d,index:e,item:f,label:g}=b,h=m(b,["tinaForm","field","index","item","label"]);const i=ic(),j=id(),[l,n]=z.useState(!1),p=z.useCallback(()=>{c.mutators.remove(d.name,e)},[c,d,e]),q=g||(d.label||d.name)+" Item",{dispatch:r}=Hc("field:hover"),{dispatch:s}=Hc("field:focus");return z.createElement(o.Draggable,{type:d.name,draggableId:`${d.name}.${e}`,index:e},(a,b)=>z.createElement(z.Fragment,null,z.createElement(Ze,k(k(k({ref:a.innerRef,isDragging:b.isDragging},a.draggableProps),a.dragHandleProps),h),z.createElement(_e,null),z.createElement(Se,{onMouseOver:()=>r({fieldName:`${d.name}.${e}`}),onMouseOut:()=>r({fieldName:null}),onClick:()=>{const a=c.finalForm.getState();if(!0===a.invalid){i.alerts.error("Cannot navigate away from an invalid form.");return}n(!0),s({fieldName:`${d.name}.${e}`})}},z.createElement(Te,null,q)),z.createElement($e,{onClick:p},z.createElement(ia,null))),z.createElement(j,null,({zIndexShift:a})=>z.createElement(af,{isExpanded:l,setExpanded:n,field:d,index:e,tinaForm:c,itemTitle:q,zIndexShift:a}))))},Se=B.default.div`
  flex: 1 1 0;
  min-width: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`,Te=B.default.span`
  margin: 0;
  font-size: var(--tina-font-size-1);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--tina-color-grey-8);
  transition: all 85ms ease-out;
  text-align: left;

  ${a=>a.error&&e.css`
      color: var(--tina-color-error) !important;
    `};
`,Ue=B.default.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  ${Oe} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Ve=B.default.div`
  line-height: 1;
`,We=B.default.div`
  max-height: initial;
  position: relative;
  height: auto;
  margin-bottom: 24px;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
`,Xe=B.default.div`
  text-align: center;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
  color: var(--tina-color-grey-4);
  line-height: 1.35;
  padding: 12px 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);
`,Ye=B.default.div``,Ze=B.default.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  border: 1px solid var(--tina-color-grey-2);
  margin: 0 0 -1px 0;
  overflow: visible;
  line-height: 1.35;
  padding: 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);

  ${Te} {
    color: var(--tina-color-grey-8);
    align-self: center;
    max-width: 100%;
  }

  svg {
    fill: var(--tina-color-grey-3);
    width: 20px;
    height: auto;
    transition: fill 85ms ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    ${Te} {
      color: var(--tina-color-primary);
    }
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:nth-last-child(2) {
    border-radius: 0 0 4px 4px;
    &:first-child {
      border-radius: var(--tina-radius-small);
    }
  }

  ${a=>a.isDragging&&e.css`
      border-radius: var(--tina-radius-small);
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);

      svg {
        fill: var(--tina-color-grey-8);
      }
      ${Te} {
        color: var(--tina-color-primary);
      }

      ${_e} {
        svg:first-child {
          opacity: 0;
        }
        svg:last-child {
          opacity: 1;
        }
      }
    `};
`,$e=B.default.button`
  text-align: center;
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 12px 8px;
  margin: 0;
  transition: all 85ms ease-out;
  svg {
    transition: all 85ms ease-out;
  }
  &:hover {
    background-color: var(--tina-color-grey-1);
  }
`,_e=B.default(function(a){var b=m(a,[]);return z.createElement("div",k({},b),z.createElement(ba,null),z.createElement(ja,null))})`
  margin: 0;
  flex: 0 0 auto;
  width: 32px;
  position: relative;
  fill: inherit;
  padding: 12px 0;
  transition: all 85ms ease-out;
  &:hover {
    background-color: var(--tina-color-grey-1);
    cursor: grab;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translate3d(-50%, -50%, 0);
    transition: all 85ms ease-out;
  }
  svg:last-child {
    opacity: 0;
  }
  *:hover > & {
    svg:first-child {
      opacity: 0;
    }
    svg:last-child {
      opacity: 1;
    }
  }
`,af=function({setExpanded:a,isExpanded:b,tinaForm:c,field:d,index:e,itemTitle:f,zIndexShift:g}){const h=ic(),i=z.useMemo(()=>d.fields.map(a=>l(k({},a),{name:`${d.name}.${e}.${a.name}`})),[d.fields,d.name,e]);return z.createElement(Ie,{isExpanded:b,style:{zIndex:g+1e3}},z.createElement(Fe,{onClick:()=>{const b=c.finalForm.getState();if(!0===b.invalid){h.alerts.error("Cannot navigate away from an invalid form.");return}a(!1)}},z.createElement(ca,null),z.createElement(Te,null,f)),z.createElement(Ge,null,b?z.createElement(Zc,{form:c,fields:i}):null))},bf=({tinaForm:a,form:b,field:c,input:d})=>{const e=z.useCallback(()=>{let a={};a="function"==typeof c.defaultItem?c.defaultItem():c.defaultItem||{},b.mutators.insert(c.name,0,a)},[b,c]),f=d.value||[],g=z.useCallback(a=>c.itemProps?c.itemProps(a):{},[c.itemProps]);return z.createElement(z.Fragment,null,z.createElement(Ue,null,z.createElement(Ve,null,z.createElement(Te,null,c.label||c.name),c.description&&z.createElement(Oe,null,c.description)),z.createElement(R,{onClick:e,primary:!0,small:!0},z.createElement(W,null))),z.createElement(We,null,z.createElement(Ye,null,z.createElement(o.Droppable,{droppableId:c.name,type:c.name},b=>z.createElement("div",{ref:b.innerRef},0===f.length&&z.createElement(Qe,null),f.map((b,d)=>z.createElement(Re,k({key:d,tinaForm:a,field:c,item:b,index:d},g(b)))),b.placeholder)))))},cf={name:"group-list",Component:bf},df=()=>z.createElement(gf,null,"There are no items"),ef=({label:a,tinaForm:b,field:c,index:d,template:e,block:f})=>{const g=ic(),h=id(),[i,j]=z.useState(!1),l=z.useCallback(()=>{b.mutators.remove(c.name,d)},[b,c,d]),{dispatch:m}=Hc("field:hover"),{dispatch:n}=Hc("field:focus");return z.createElement(o.Draggable,{key:d,type:c.name,draggableId:`${c.name}.${d}`,index:d},(o,p)=>z.createElement(z.Fragment,null,z.createElement(of,k(k({ref:o.innerRef,isDragging:p.isDragging},o.draggableProps),o.dragHandleProps),z.createElement(qf,null),z.createElement(lf,{onClick:()=>{const a=b.finalForm.getState();if(!0===a.invalid){g.alerts.error("Cannot navigate away from an invalid form.");return}j(!0),n({fieldName:`${c.name}.${d}`})},onMouseOver:()=>m({fieldName:`${c.name}.${d}`}),onMouseOut:()=>m({fieldName:null})},z.createElement(Te,null,a||e.label)),z.createElement(pf,{onClick:l},z.createElement(ia,null))),z.createElement(h,null,({zIndexShift:g})=>z.createElement(rf,{zIndexShift:g,isExpanded:i,setExpanded:j,field:c,item:f,index:d,tinaForm:b,label:a||e.label,template:e}))))},ff=({tinaForm:a,field:b,index:c})=>{const d=z.useCallback(()=>{a.mutators.remove(b.name,c)},[a,b,c]);return z.createElement(o.Draggable,{key:c,type:b.name,draggableId:`${b.name}.${c}`,index:c},(a,b)=>z.createElement(of,k(k({ref:a.innerRef,isDragging:b.isDragging},a.draggableProps),a.dragHandleProps),z.createElement(qf,null),z.createElement(lf,null,z.createElement(Te,{error:!0},"Invalid Block")),z.createElement(pf,{onClick:d},z.createElement(ia,null))))},gf=B.default.div`
  text-align: center;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
  color: var(--tina-color-grey-4);
  line-height: 1.35;
  padding: 12px 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);
`,hf=B.default.div`
  min-width: 192px;
  border-radius: var(--tina-radius-big);
  border: 1px solid #efefef;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(0, 0, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 150ms ease-out;
  transform-origin: 100% 0;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 36px, 0) scale3d(1, 1, 1);
    `};
`,jf=B.default.div`
  display: flex;
  flex-direction: column;
`,kf=B.default.button`
  position: relative;
  text-align: center;
  font-size: var(--tina-font-size-0);
  padding: var(--tina-padding-small);
  font-weight: var(--tina-font-weight-regular);
  color: var(--tina-color-grey-10);
  width: 100%;
  background: none;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: all 85ms ease-out;
  &:hover {
    color: var(--tina-color-primary);
    background-color: var(--tina-color-grey-1);
  }
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`,lf=B.default.div`
  flex: 1 1 0;
  min-width: 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`,mf=B.default.div`
  max-height: initial;
  position: relative;
  height: auto;
  margin-bottom: 24px;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
`,nf=B.default.div``,of=B.default.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  border: 1px solid var(--tina-color-grey-2);
  margin: 0 0 -1px 0;
  overflow: visible;
  line-height: 1.35;
  padding: 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);

  ${Te} {
    color: var(--tina-color-grey-10);
    align-self: center;
    max-width: 100%;
  }

  svg {
    fill: var(--tina-color-grey-3);
    width: 20px;
    height: auto;
    transition: fill 85ms ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    ${Te} {
      color: var(--tina-color-primary);
    }
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:nth-last-child(2) {
    border-radius: 0 0 4px 4px;
    &:first-child {
      border-radius: var(--tina-radius-small);
    }
  }

  ${a=>a.isDragging&&e.css`
      border-radius: var(--tina-radius-small);
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);

      svg {
        fill: var(--tina-color-grey-8);
      }
      ${Te} {
        color: var(--tina-color-primary);
      }

      ${qf} {
        svg:first-child {
          opacity: 0;
        }
        svg:last-child {
          opacity: 1;
        }
      }
    `};
`,pf=B.default.button`
  text-align: center;
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 12px 8px;
  margin: 0;
  transition: all var(--tina-timing-short) ease-out;
  &:hover {
    background-color: var(--tina-color-grey-1);
  }
`,qf=B.default(function(a){var b=m(a,[]);return z.createElement("div",k({},b),z.createElement(ba,null),z.createElement(ja,null))})`
  margin: 0;
  flex: 0 0 auto;
  width: 32px;
  position: relative;
  fill: inherit;
  padding: 12px 0;
  transition: all 85ms ease-out;
  &:hover {
    background-color: var(--tina-color-grey-1);
    cursor: grab;
  }
  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 20px;
    height: 20px;
    transform: translate3d(-50%, -50%, 0);
    transition: all var(--tina-timing-short) ease-out;
  }
  svg:last-child {
    opacity: 0;
  }
  *:hover > & {
    svg:first-child {
      opacity: 0;
    }
    svg:last-child {
      opacity: 1;
    }
  }
`,rf=function({setExpanded:a,isExpanded:b,tinaForm:c,field:d,index:e,label:f,template:g,zIndexShift:h}){const i=ic(),j=z.useMemo(()=>g.fields?g.fields.map(a=>l(k({},a),{name:`${d.name}.${e}.${a.name}`})):[],[d.name,e,g.fields]);return z.createElement(Ie,{isExpanded:b,style:{zIndex:h+1e3}},z.createElement(Fe,{onClick:()=>{const b=c.finalForm.getState();if(!0===b.invalid){i.alerts.error("Cannot navigate away from an invalid form.");return}a(!1)}},z.createElement(ca,null),z.createElement(Te,null,f)),z.createElement(Ge,null,b?z.createElement(Zc,{form:c,fields:j}):null))},sf=({tinaForm:a,form:b,field:c,input:d})=>{const e=z.useCallback((a,d)=>{let e={};(e="function"==typeof d.defaultItem?d.defaultItem():d.defaultItem||{})._template=a,b.mutators.insert(c.name,0,e)},[c.name,b.mutators]),f=d.value||[],[g,h]=z.useState(!1);return z.createElement(z.Fragment,null,z.createElement(Ue,null,z.createElement(Ve,null,z.createElement(Te,null,c.label||c.name),c.description&&z.createElement(Oe,null,c.description)),z.createElement(R,{onClick:a=>{a.stopPropagation(),a.preventDefault(),h(!0)},open:g,primary:!0,small:!0},z.createElement(W,null)),z.createElement(hf,{open:g},z.createElement(Vc,{click:!0,escape:!0,onDismiss:()=>h(!1),disabled:!g},z.createElement(jf,null,Object.entries(c.templates).map(([a,b])=>z.createElement(kf,{key:a,onClick:()=>{e(a,b),h(!1)}},b.label)))))),z.createElement(mf,null,z.createElement(nf,null,z.createElement(o.Droppable,{droppableId:c.name,type:c.name},b=>z.createElement("div",{ref:b.innerRef,className:"edit-page--list-parent"},0===f.length&&z.createElement(df,null),f.map((b,d)=>{var e;const f=c.templates[b._template];return f?z.createElement(ef,k({key:d,block:b,template:f,index:d,field:c,tinaForm:a},(e=b,f.itemProps?f.itemProps(e):{}))):z.createElement(ff,{key:d,index:d,field:c,tinaForm:a})}),b.placeholder)))))},tf={name:"blocks",Component:sf},uf=Ke(({input:a,field:b})=>z.createElement(Kd,{colorFormat:b.colorFormat,userColors:b.colors,widget:b.widget,input:a})),vf={name:"color",Component:uf,parse:a=>a||""},wf=()=>z.createElement(Ef,null,"There are no items"),xf=a=>{var b=a,{tinaForm:c,field:d,index:e,item:f,label:g}=b,h=m(b,["tinaForm","field","index","item","label"]);const i=z.useCallback(()=>{c.mutators.remove(d.name,e)},[c,d,e]),j=[l(k({},d.field),{label:"Value",name:d.name+"."+e})];return z.createElement(o.Draggable,{type:d.name,draggableId:`${d.name}.${e}`,index:e},(a,b)=>z.createElement(z.Fragment,null,z.createElement(Gf,k(k(k({ref:a.innerRef,isDragging:b.isDragging},a.draggableProps),a.dragHandleProps),h),z.createElement(yf,null,z.createElement(Zc,{form:c,fields:j})),z.createElement(zf,null,z.createElement(If,null),z.createElement(Hf,{onClick:i},z.createElement(ia,null))))))},yf=B.default.div`
  flex: 1;
  display: flex;
  align-items: center;

  label {
    display: none;
  }
`,zf=B.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 84px;
`,Af=B.default.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0;
  font-size: var(--tina-font-size-1);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  flex: 1 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--tina-color-grey-8);
  transition: all 85ms ease-out;
  text-align: left;

  ${a=>a.error&&e.css`
      color: var(--tina-color-error) !important;
    `};
`,Bf=B.default.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  ${Oe} {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`,Cf=B.default.div`
  line-height: 1;
`,Df=B.default.div`
  max-height: initial;
  position: relative;
  height: auto;
  margin-bottom: 24px;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
`,Ef=B.default.div`
  text-align: center;
  border-radius: var(--tina-radius-small);
  background-color: var(--tina-color-grey-2);
  color: var(--tina-color-grey-4);
  line-height: 1.35;
  padding: 12px 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);
`,Ff=B.default.div``,Gf=B.default.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  background-color: white;
  border: 1px solid var(--tina-color-grey-2);
  margin: 0 0 -1px 0;
  overflow: visible;
  line-height: 1.35;
  padding: 0;
  font-size: var(--tina-font-size-2);
  font-weight: var(--tina-font-weight-regular);

  ${Af} {
    color: var(--tina-color-grey-8);
    align-self: center;
    max-width: 100%;
  }

  ${$c} {
    padding: var(--tina-padding-small) calc(var(--tina-padding-small) / 2)
      var(--tina-padding-small) var(--tina-padding-small);
    display: flex;
    align-items: center;
  }

  ${Me} {
    margin: 0;
    flex: 1;
  }

  svg {
    fill: var(--tina-color-grey-4);
    transition: fill 85ms ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    ${Af} {
      color: var(--tina-color-primary);
    }
  }

  &:first-child {
    border-radius: 4px 4px 0 0;
  }

  &:nth-last-child(2) {
    border-radius: 0 0 4px 4px;
    &:first-child {
      border-radius: var(--tina-radius-small);
    }
  }

  ${a=>a.isDragging&&e.css`
      border-radius: var(--tina-radius-small);
      box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);

      svg {
        fill: var(--tina-color-grey-8);
      }
      ${Af} {
        color: var(--tina-color-primary);
      }

      ${If} {
        svg:first-child {
          opacity: 0;
        }
        svg:last-child {
          opacity: 1;
        }
      }
    `};
`,Hf=B.default.button`
  text-align: center;
  flex: 1 0 auto;
  border: 0;
  background: transparent;
  cursor: pointer;
  width: 38px;
  height: 36px;
  padding: 0 4px 5px 0;
  margin: 0;
  transition: all 85ms ease-out;
  svg {
    width: 24px;
    height: 24px;
    transition: all 85ms ease-out;
  }
  &:hover {
    background-color: var(--tina-color-grey-1);
  }
`,If=B.default(function(a){var b=m(a,[]);return z.createElement("div",k({},b),z.createElement(ja,null))})`
  margin: 0;
  flex: 1 0 auto;
  width: 38px;
  height: 36px;
  padding: 5px 4px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  fill: inherit;
  transition: all 85ms ease-out;
  &:hover {
    background-color: var(--tina-color-grey-1);
    cursor: grab;
  }
  svg {
    width: 24px;
    height: 24px;
    transition: all 85ms ease-out;
  }
`,Jf=({tinaForm:a,form:b,field:c,input:d})=>{const e=z.useCallback(()=>{let a="";"function"==typeof c.defaultItem?a=c.defaultItem():void 0!==c.defaultItem&&(a=c.defaultItem),b.mutators.insert(c.name,0,a)},[b,c]),f=d.value||[],g=z.useCallback(a=>c.itemProps?c.itemProps(a):{},[c.itemProps]);return z.createElement(z.Fragment,null,z.createElement(Bf,null,z.createElement(Cf,null,z.createElement(Af,null,c.label||c.name),c.description&&z.createElement(Oe,null,c.description)),z.createElement(R,{onClick:e,primary:!0,small:!0},z.createElement(W,null))),z.createElement(Df,null,z.createElement(Ff,null,z.createElement(o.Droppable,{droppableId:c.name,type:c.name},b=>z.createElement("div",{ref:b.innerRef},0===f.length&&z.createElement(wf,null),f.map((b,d)=>z.createElement(xf,k({key:d,tinaForm:a,field:c,item:b,index:d},g(b)))),b.placeholder)))))},Kf={name:"list",Component:Jf};function Lf(a,c,d,e){const f=ic(),g=e||f.media.previewSrc,[{src:h,loading:i},j]=b.useState({src:"",loading:!0});return b.useEffect(()=>{let b=!1,e="";return(async()=>{try{e=await g(a,c,d)}catch{}b||j({src:e,loading:!1})})(),()=>{b=!0}},[a]),[h,i]}const Mf=Ke(a=>{const c=ic(),{form:d,field:e}=a,{name:f,value:g}=a.input,[h,i]=Lf(g,f,d.getState().values,e.previewSrc),[j,k]=b.useState(!1);let l;async function m(b){var d,e;if(b){const f="function"==typeof(null==(e=null==(d=null==c?void 0:c.media)?void 0:d.store)?void 0:e.parse)?c.media.store.parse(b):b;a.input.onChange(f)}}a.field.clearable&&(l=()=>a.input.onChange(""));const n=a.field.uploadDir||(()=>"");return z.createElement(le,{value:g,previewSrc:h,loading:j||i,onClick:()=>{const b=n(a.form.getState().values);c.media.open({allowDelete:!0,directory:b,onSelect:m})},onDrop:async([b])=>{k(!0);const d=n(a.form.getState().values),[e]=await c.media.persist([{directory:d,file:b}]);if(e)try{await m(e)}catch(f){console.error("Error uploading media asset: ",f)}finally{k(!1)}},onClear:l})}),Nf={name:"image",Component:Mf,parse:a=>a||""},Of=a=>q.unwrapList(a),Pf=(a,b)=>{if(a.selection){const c=q.getParent(a,a.selection);if(!c)return;const[d]=c;!q.isElement(d)||q.isType(a,d,q.ELEMENT_CODE_BLOCK)||q.isType(a,d,q.ELEMENT_CODE_LINE)||b()}},Qf=(a,b)=>{Pf(a,()=>q.toggleList(a,{type:b}))},Rf=[{mode:"block",type:q.ELEMENT_H1,match:"# ",preFormat:Of},{mode:"block",type:q.ELEMENT_H2,match:"## ",preFormat:Of},{mode:"block",type:q.ELEMENT_H3,match:"### ",preFormat:Of},{mode:"block",type:q.ELEMENT_H4,match:"#### ",preFormat:Of},{mode:"block",type:q.ELEMENT_H5,match:"##### ",preFormat:Of},{mode:"block",type:q.ELEMENT_H6,match:"###### ",preFormat:Of},{mode:"block",type:q.ELEMENT_BLOCKQUOTE,match:"> ",preFormat:Of},{mode:"block",type:q.ELEMENT_CODE_BLOCK,match:"```",triggerAtBlockStart:!1,preFormat:Of,format:a=>{q.insertEmptyCodeBlock(a,{defaultType:q.getPlatePluginType(a,q.ELEMENT_DEFAULT),insertNodesOptions:{select:!0}})}}],Sf=[{mode:"block",type:q.ELEMENT_LI,match:["* ","- "],preFormat:Of,format:a=>Qf(a,q.ELEMENT_UL)},{mode:"block",type:q.ELEMENT_LI,match:["1. ","1) "],preFormat:Of,format:a=>Qf(a,q.ELEMENT_OL)},{mode:"block",type:q.ELEMENT_TODO_LI,match:"[] "},{mode:"block",type:q.ELEMENT_TODO_LI,match:"[x] ",format:a=>q.setNodes(a,{type:q.ELEMENT_TODO_LI,checked:!0},{match:b=>r.Editor.isBlock(a,b)})}],Tf=[{mode:"mark",type:[q.MARK_BOLD,q.MARK_ITALIC],match:"***"},{mode:"mark",type:[q.MARK_UNDERLINE,q.MARK_ITALIC],match:"__*"},{mode:"mark",type:[q.MARK_UNDERLINE,q.MARK_BOLD],match:"__**"},{mode:"mark",type:[q.MARK_UNDERLINE,q.MARK_BOLD,q.MARK_ITALIC],match:"___***"},{mode:"mark",type:q.MARK_BOLD,match:"**"},{mode:"mark",type:q.MARK_UNDERLINE,match:"__"},{mode:"mark",type:q.MARK_ITALIC,match:"*"},{mode:"mark",type:q.MARK_ITALIC,match:"_"},{mode:"mark",type:q.MARK_STRIKETHROUGH,match:"~~"},{mode:"mark",type:q.MARK_SUPERSCRIPT,match:"^"},{mode:"mark",type:q.MARK_SUBSCRIPT,match:"~"},{mode:"mark",type:q.MARK_HIGHLIGHT,match:"=="},{mode:"mark",type:q.MARK_HIGHLIGHT,match:"≡"},{mode:"mark",type:q.MARK_CODE,match:"`"}],Uf=[...Rf,...Sf,...Tf,...q.autoformatSmartQuotes,...q.autoformatPunctuation,...q.autoformatLegal,...q.autoformatLegalHtml,...q.autoformatArrow,...q.autoformatMath],Vf={types:[q.ELEMENT_BLOCKQUOTE,q.ELEMENT_TODO_LI],defaultType:q.ELEMENT_PARAGRAPH},Wf={editableProps:{spellCheck:!1,autoFocus:!1,placeholder:"Type…",style:{padding:"15px"}},options:q.createPlateOptions(),components:q.createPlateComponents({[q.ELEMENT_CODE_BLOCK]:q.withProps(q.CodeBlockElement,{styles:{root:[e.css`
            background-color: #111827;
            code {
              color: white;
            }
          `]}})}),indent:{validTypes:[]},resetBlockType:{rules:[l(k({},Vf),{hotkey:"Enter",predicate:q.isBlockAboveEmpty}),l(k({},Vf),{hotkey:"Backspace",predicate:q.isSelectionAtBlockStart})]},trailingBlock:{type:q.ELEMENT_PARAGRAPH},softBreak:{rules:[{hotkey:"shift+enter"},{hotkey:"enter",query:{allow:[q.ELEMENT_CODE_BLOCK,q.ELEMENT_BLOCKQUOTE,q.ELEMENT_TD]}}]},exitBreak:{rules:[{hotkey:"mod+enter"},{hotkey:"mod+shift+enter",before:!0},{hotkey:"enter",query:{start:!0,end:!0,allow:q.KEYS_HEADING}}]},selectOnBackspace:{allow:[q.ELEMENT_IMAGE,q.ELEMENT_HR]},autoformat:{rules:Uf},forceLayout:{rules:[]}};function Xf(a){const b=a.title||"format list bulleted";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M7 5h14v2H7V5z",fill:"currentColor"}),A.default.createElement("path",{d:"M4 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",fill:"currentColor"}),A.default.createElement("path",{d:"M7 11h14v2H7v-2zm0 6h14v2H7v-2zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5-1.5.68-1.5 1.5.68 1.5 1.5 1.5z",fill:"currentColor"}),A.default.createElement("path",{d:"M4 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z",fill:"currentColor"})))}function Yf(a){const b=a.title||"format size";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M9 4v3h5v12h3V7h5V4H9zm-6 8h3v7h3v-7h3V9H3v3z",fill:"currentColor"})))}function Zf(a){const b=a.title||"format list numbered";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z",fill:"currentColor"})))}function $f(a){const b=a.title||"format quote";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M6 17h3l2-4V7H5v6h3l-2 4zm8 0h3l2-4V7h-6v6h3l-2 4z",fill:"currentColor"})))}function _f(a){const b=a.title||"insert link";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.71-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",fill:"currentColor"})))}function ag(a){const b=a.title||"code";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",fill:"currentColor"})))}function bg(a){const b=a.title||"image";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M19 5v14H5V5h14zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z",fill:"currentColor"})))}function cg(a){const b=a.title||"format bold";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z",fill:"currentColor"})))}function dg(a){const b=a.title||"format italic";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4h-8z",fill:"currentColor"})))}function eg(a){const b=a.title||"keyboard arrow down";return A.default.createElement("svg",{height:"24",width:"24",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},A.default.createElement("title",null,b),A.default.createElement("g",{fill:"none"},A.default.createElement("path",{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z",fill:"currentColor"})))}const fg=B.default.div`
  display: flex;
  align-items: center;

  svg {
    transform: rotate(-90deg);
    transition: transform 150ms ease-out;
    margin-right: -4px;
    margin-left: 2px;
  }

  ${a=>a.open&&e.css`
      svg {
        transform: rotate(0deg);
      }
    `};
`,gg=({showButton:a,onAdd:b,templates:c})=>{const[d,e]=z.useState(!1);return z.createElement("span",{style:{position:"relative"}},a?z.createElement(Q,{onClick:a=>{a.stopPropagation(),a.preventDefault(),e(a=>!a)},primary:!0,small:!0},z.createElement(fg,{open:d},"Embed ",z.createElement(eg,null))):z.createElement("span",null),z.createElement(hg,{open:d},z.createElement(Vc,{click:!0,escape:!0,onDismiss:()=>e(!1),disabled:!d},z.createElement(ig,null,c.length>0?c.map(a=>z.createElement(jg,{key:a.name,onClick:()=>{b(a),e(!1)}},a.label)):z.createElement(jg,null,"No templates provided ")))))},hg=B.default.div`
  min-width: 192px;
  border-radius: var(--tina-radius-big);
  border: 1px solid #efefef;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate3d(0, 0, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 150ms ease-out;
  transform-origin: 100% 0;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 36px, 0) scale3d(1, 1, 1);
    `};
`,ig=B.default.div`
  display: flex;
  flex-direction: column;
`,jg=B.default.button`
  position: relative;
  text-align: center;
  font-size: var(--tina-font-size-0);
  padding: var(--tina-padding-small);
  font-weight: var(--tina-font-weight-regular);
  width: 100%;
  background: none;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: all 85ms ease-out;
  &:hover {
    color: var(--tina-color-primary);
    background-color: var(--tina-color-grey-1);
  }
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`,kg=({children:a,icon:b})=>{const[c,d]=z.useState(!1);return z.createElement("span",{style:{position:"relative"}},z.createElement(lg,{onClick:a=>{a.stopPropagation(),a.preventDefault(),d(!0)}},b),z.createElement(mg,{open:c},z.createElement(Vc,{click:!0,escape:!0,onDismiss:()=>d(!1),disabled:!c},a)))},lg=B.default.button`
  svg {
    width: 20px;
    height: auto;
  }
`,mg=B.default.div`
  border-radius: var(--tina-radius-small);
  border: 1px solid #efefef;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 150ms ease-out;
  transform-origin: 0 0;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);

  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 36px, 0) scale3d(1, 1, 1);
    `};
`,ng=B.default.div`
  z-index: 100;
  padding-top: 6px;
  position: relative;
  width: 100%;
`,og=B.default.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  background: var(--tina-color-grey-0);
  color: var(--tina-color-grey-10);
  margin: 0;
  border-radius: var(--tina-radius-small);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--tina-color-grey-2);
  margin-bottom: 14px;

  span[class*='ToolbarButton'],
  button {
    padding: 8px;
    border: 1px solid var(--tina-color-grey-2);
    width: auto;
    height: auto;
    border-left: none;
    margin: 0 0 -1px 0;
    flex-grow: 1;
    max-width: 3rem;
    transition: background 150ms ease-out;

    &:not(disabled):hover {
      background: var(--tina-color-grey-1);
    }

    svg {
      width: 20px;
      height: auto;
    }
  }
`,pg=B.default.div`
  position: absolute;
  top: -34px;
  right: 0px;
`,qg=({name:a,templates:b})=>{const c=ic(),d=q.usePlateEditorRef(a),[e,f]=A.default.useState(null),[g,h]=A.default.useState(null);return A.default.useEffect(()=>{g&&(r.Transforms.insertNodes(d,[{type:"img",url:g.src||g.previewSrc,alt:"",caption:"",children:[{type:"text",text:""}]}],{at:e}),h(null))},[g]),A.default.createElement(ng,null,A.default.createElement(og,null,A.default.createElement(kg,{icon:A.default.createElement(Yf,null)},A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H1),icon:A.default.createElement("strong",null,"H1")}),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H2),icon:A.default.createElement("strong",null,"H2")}),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H3),icon:A.default.createElement("strong",null,"H3")}),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H4),icon:A.default.createElement("strong",null,"H4")}),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H5),icon:A.default.createElement("strong",null,"H5")}),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_H6),icon:A.default.createElement("strong",null,"H6")})),A.default.createElement(q.BlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_BLOCKQUOTE),icon:A.default.createElement($f,null)}),A.default.createElement(q.CodeBlockToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_CODE_BLOCK),icon:A.default.createElement(ag,null)}),A.default.createElement(q.LinkToolbarButton,{icon:A.default.createElement(_f,null)}),A.default.createElement(q.ToolbarButton,{icon:A.default.createElement(bg,null),onMouseDown:()=>{f(d.selection),c.media.open({allowDelete:!0,onSelect:a=>{h(a)}})}}),A.default.createElement(q.ListToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_UL),icon:A.default.createElement(Xf,null)}),A.default.createElement(q.ListToolbarButton,{type:q.getPlatePluginType(d,q.ELEMENT_OL),icon:A.default.createElement(Zf,null)}),A.default.createElement(q.MarkToolbarButton,{type:q.getPlatePluginType(d,q.MARK_BOLD),icon:A.default.createElement(cg,null)}),A.default.createElement(q.MarkToolbarButton,{type:q.getPlatePluginType(d,q.MARK_ITALIC),icon:A.default.createElement(dg,null)})),A.default.createElement(pg,null,A.default.createElement(gg,k({},{showButton:!0,onAdd:a=>{r.Transforms.insertNodes(d,[{type:a.inline?"mdxJsxTextElement":"mdxJsxFlowElement",name:a.name,props:a.defaultItem,ordered:!1,children:[{type:"text",text:""}]}])},templates:b}))))},rg=({tinaForm:a,children:b})=>{const[c,d]=z.useState(!1);return z.createElement(z.Fragment,null,z.createElement(tg,{onClick:()=>d(!c)},b),z.createElement(sg,{isExpanded:c,setExpanded:d,field:{label:"Image",name:"Image"},tinaForm:a}))},sg=function({setExpanded:a,isExpanded:b,tinaForm:c,field:d}){const e=id();return z.createElement(e,null,({zIndexShift:e})=>z.createElement(xg,{isExpanded:b,style:{zIndex:e+1e3}},z.createElement(ug,{onClick:()=>a(!1)},z.createElement(ca,null)," ",z.createElement("span",null,d.label||d.name)),z.createElement(vg,null,b?z.createElement(sd,{form:c,hideFooter:!0}):null)))},tg=B.default.span`
  position: relative;
  cursor: pointer;
  display: block;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--tina-color-grey-2);
  border-left: 3px solid var(--tina-color-primary);
  border-radius: var(--tina-radius-small);
  overflow: visible;
  line-height: 1.35;
  padding: 12px;
  margin: 8px 0;
  color: var(--tina-color-grey-10);
  background-color: white;

  svg {
    width: 24px;
    height: auto;
    fill: var(--tina-color-grey-3);
    transition: all var(--tina-timing-short) ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    color: #0084ff;
  }
`,ug=B.default.span`
  position: relative;
  width: 100%;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 6px 18px 6px 18px;
  font-size: var(--tina-font-size-3);
  transition: color var(--tina-timing-medium) ease-out;
  user-select: none;
  border-bottom: 1px solid var(--tina-color-grey-2);
  margin: 0;
  span {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    flex: 0 0 auto;
    width: 24px;
    fill: var(--tina-color-grey-3);
    height: auto;
    transform: translate3d(-4px, 0, 0);
    transition: transform var(--tina-timing-medium) ease-out;
  }
  :hover {
    color: var(--tina-color-primary);
    svg {
      fill: var(--tina-color-grey-8);
      transform: translate3d(-7px, 0, 0);
      transition: transform var(--tina-timing-medium) ease-out;
    }
  }
`,vg=B.default.span`
  background: var(--tina-color-grey-1);
  position: relative;
  flex-direction: column;
  display: flex;
  flex: 1 1 auto;
  overflow-y: auto;
`,wg=e.keyframes`
  0% {
    transform: translate3d( 100%, 0, 0 );
  }
  100% {
    transform: translate3d( 0, 0, 0 );
  }
`,xg=B.default.span`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  pointer-events: ${a=>a.isExpanded?"all":"none"};

  > * {
    ${a=>a.isExpanded&&e.css`
        animation-name: ${wg};
        animation-duration: 150ms;
        animation-delay: 0;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-fill-mode: backwards;
      `};

    ${a=>!a.isExpanded&&e.css`
        transition: transform 150ms ease-out;
        transform: translate3d(100%, 0, 0);
      `};
  }
`,yg=a=>{const b=q.usePlateEditorRef(a.name),c=s.useFocused(),d=s.useSelected(),e=ic(),[f,g]=A.default.useState({caption:a.element.caption,url:a.element.url,alt:a.element.alt,children:[{text:""}]});A.default.useEffect(()=>{const c=async()=>{if(a.element.url&&a.element.url.startsWith("data")){const c=function(a,b){const c=a.split(","),d=c[0].match(/:(.*?);/)[1],e=atob(c[1]);let f=e.length;const g=new Uint8Array(f);for(;f--;)g[f]=e.charCodeAt(f);return new File([g],b,{type:d})}(a.element.url,"tina-upload"),d=await e.media.persist([{directory:"",file:c}]);g(l(k({},f),{url:d[0].src||d[0].previewSrc}))}r.Transforms.setNodes(b,f,{at:s.ReactEditor.findPath(b,a.element)})};c()},[b,JSON.stringify(f)]);const h=a.element.name+Math.floor(100*Math.random()),i=A.default.useMemo(()=>new jc({id:h,label:h,initialValues:{url:a.element.url,caption:a.element.caption,alt:a.element.alt},onChange:({values:a})=>{g(a)},onSubmit:()=>{},fields:[{name:"url",label:"Source",component:"image"},{name:"caption",label:"Caption",component:"text"},{name:"alt",label:"Alt",component:"text"}]}),[g]);return A.default.createElement("span",l(k({},a.attributes),{style:{display:"block",boxShadow:d&&c?"0 0 0 3px #B4D5FF":"none"}}),A.default.createElement("span",{style:{userSelect:"none"},contentEditable:!1},A.default.createElement(rg,{tinaForm:i},A.default.createElement("img",{style:{width:"100%"},src:f.url,alt:a.element.alt}),A.default.createElement("span",{style:{display:"block",margin:"8px auto 0",textAlign:"center"}},f.caption))),a.children)},zg=()=>({pluginKeys:"img",voidTypes:q.getPlatePluginTypes("img"),inlineTypes:q.getPlatePluginTypes("img"),renderElement:q.getRenderElement("img")}),Ag=({inline:a,tinaForm:b,field:c})=>{const[d,e]=z.useState(!1);return c?z.createElement(z.Fragment,null,a?z.createElement(Cg,{onClick:()=>e(!d)},c.label||c.name):z.createElement(Dg,{onClick:()=>e(!d)},c.label||c.name,z.createElement(da,null)),z.createElement(Bg,{isExpanded:d,setExpanded:e,field:c,tinaForm:b})):null},Bg=function({setExpanded:a,isExpanded:b,tinaForm:c,field:d}){const e=id();return z.createElement(e,null,({zIndexShift:e})=>z.createElement(Hg,{isExpanded:b,style:{zIndex:e+1e3}},z.createElement(Eg,{onClick:()=>a(!1)},z.createElement(ca,null)," ",z.createElement("span",null,d.label||d.name)),z.createElement(Fg,null,b?z.createElement(sd,{form:c,hideFooter:!0}):null)))},Cg=B.default.span`
  position: relative;
  cursor: pointer;
  border: 1px solid var(--tina-color-grey-3);
  border-left: 3px solid var(--tina-color-primary);
  border-radius: var(--tina-radius-small);
  overflow: visible;
  line-height: 1.35;
  padding: 2px 8px;
  color: var(--tina-color-grey-10);
  background-color: white;

  svg {
    width: 24px;
    height: auto;
    fill: var(--tina-color-grey-3);
    transition: all var(--tina-timing-short) ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    color: #0084ff;
  }
`,Dg=B.default.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--tina-color-grey-2);
  border-left: 3px solid var(--tina-color-primary);
  border-radius: var(--tina-radius-small);
  overflow: visible;
  line-height: 1.35;
  padding: 12px;
  margin: 8px 0;
  color: var(--tina-color-grey-10);
  background-color: white;

  svg {
    width: 24px;
    height: auto;
    fill: var(--tina-color-grey-3);
    transition: all var(--tina-timing-short) ease-out;
  }

  &:hover {
    svg {
      fill: var(--tina-color-grey-8);
    }
    color: #0084ff;
  }
`,Eg=B.default.div`
  position: relative;
  width: 100%;
  cursor: pointer;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 6px 18px 6px 18px;
  font-size: var(--tina-font-size-3);
  transition: color var(--tina-timing-medium) ease-out;
  user-select: none;
  border-bottom: 1px solid var(--tina-color-grey-2);
  margin: 0;
  span {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  svg {
    flex: 0 0 auto;
    width: 24px;
    fill: var(--tina-color-grey-3);
    height: auto;
    transform: translate3d(-4px, 0, 0);
    transition: transform var(--tina-timing-medium) ease-out;
  }
  :hover {
    color: var(--tina-color-primary);
    svg {
      fill: var(--tina-color-grey-8);
      transform: translate3d(-7px, 0, 0);
      transition: transform var(--tina-timing-medium) ease-out;
    }
  }
`,Fg=B.default.div`
  background: var(--tina-color-grey-1);
  position: relative;
  flex-direction: column;
  display: flex;
  flex: 1 1 auto;
  overflow-y: auto;
`,Gg=e.keyframes`
  0% {
    transform: translate3d( 100%, 0, 0 );
  }
  100% {
    transform: translate3d( 0, 0, 0 );
  }
`,Hg=B.default.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  pointer-events: ${a=>a.isExpanded?"all":"none"};

  > * {
    ${a=>a.isExpanded&&e.css`
        animation-name: ${Gg};
        animation-duration: 150ms;
        animation-delay: 0;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
        animation-fill-mode: backwards;
      `};

    ${a=>!a.isExpanded&&e.css`
        transition: transform 150ms ease-out;
        transform: translate3d(100%, 0, 0);
      `};
  }
`,Ig=a=>{const b=q.usePlateEditorRef(a.name),c=s.useFocused(),d=s.useSelected(),e=a.element.props,f=a.templates.find(b=>b.name===a.element.name),g=a.element.name+Math.floor(100*Math.random()),h=A.default.useMemo(()=>new jc({id:g,label:g,initialValues:e,onChange:({values:c})=>{const d="mdxJsxTextElement"===a.element.type;if(d){const e={props:c};r.Transforms.setNodes(b,e,{match:a=>"mdxJsxTextElement"===a.type,at:s.ReactEditor.findPath(b,a.element)})}else{const f={props:c};r.Transforms.setNodes(b,f,{at:s.ReactEditor.findPath(b,a.element)})}},onSubmit:()=>{},fields:f?f.fields:[]}),[]);return A.default.createElement(Jg,l(k({as:a.inline?"span":"div"},a.attributes),{style:{boxShadow:d&&c?"0 0 0 3px #B4D5FF":"none"}}),A.default.createElement(Jg,{as:a.inline?"span":"div",style:{userSelect:"none"},contentEditable:!1},A.default.createElement(Ag,{inline:a.inline,tinaForm:h,field:f})),a.children)},Jg=B.default.div``,Kg=()=>({pluginKeys:"mdxJsxFlowElement",voidTypes:q.getPlatePluginTypes("mdxJsxFlowElement"),renderElement:q.getRenderElement("mdxJsxFlowElement")}),Lg=()=>({pluginKeys:"mdxJsxTextElement",voidTypes:q.getPlatePluginTypes("mdxJsxTextElement"),inlineTypes:q.getPlatePluginTypes("mdxJsxTextElement"),renderElement:q.getRenderElement("mdxJsxTextElement")}),Mg=q.createPlateOptions(),Ng=a=>{var b;return a.children?[...null==(b=a.children)?void 0:b.map(Pg),{type:"p",children:[{type:"text",text:""}]}]:[{type:"p",children:[{type:"text",text:""}]}]},Og=Ke(a=>{const b=A.default.useMemo(()=>JSON.stringify(a.input.value),[]),[c,d]=A.default.useState(0);A.default.useEffect(()=>{b===JSON.stringify(a.input.value)&&d(a=>a+1)},[JSON.stringify(a.input.value)]);const e=a.field.templates,f=a.input.name,g=q.createPlateComponents({img:a=>A.default.createElement(yg,l(k({},a),{name:f})),mdxJsxTextElement:a=>A.default.createElement(Ig,l(k({},a),{templates:e,inline:!0})),mdxJsxFlowElement:a=>A.default.createElement(Ig,l(k({},a),{templates:e,inline:!1}))}),h=[zg(),Kg(),Lg(),q.createReactPlugin(),q.createHistoryPlugin(),q.createHorizontalRulePlugin(),q.createParagraphPlugin(),q.createBlockquotePlugin(),q.createCodeBlockPlugin(),q.createHeadingPlugin(),q.createLinkPlugin(),q.createListPlugin(),q.createImagePlugin(),q.createBoldPlugin(),q.createItalicPlugin(),q.createUnderlinePlugin(),q.createStrikethroughPlugin(),q.createCodePlugin(),...q.createBasicMarkPlugins(),q.createIndentPlugin(Wf.indent),q.createAutoformatPlugin(Wf.autoformat),q.createResetNodePlugin(Wf.resetBlockType),q.createSoftBreakPlugin(Wf.softBreak),q.createExitBreakPlugin(Wf.exitBreak),q.createNormalizeTypesPlugin(Wf.forceLayout),q.createTrailingBlockPlugin(Wf.trailingBlock),q.createSelectOnBackspacePlugin(Wf.selectOnBackspace)];return A.default.createElement(A.default.Fragment,null,A.default.createElement(qg,{name:a.input.name,templates:e}),A.default.createElement(Qg,null,A.default.createElement(q.Plate,{id:a.input.name,initialValue:Ng(a.input.value),key:c,plugins:h,components:g,options:Mg,onChange:b=>{a.input.onChange({type:"root",children:b})}})))}),Pg=a=>["mdxJsxFlowElement","mdxJsxTextElement","img"].includes(a.type)?l(k({},a),{children:[{type:"text",text:""}]}):a.children?a.children.length>0?l(k({},a),{children:a.children.map(Pg)}):l(k({},a),{children:[{type:"text",text:""}]}):a,Qg=B.default.div`
  ${Rc};
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 200px;
  overflow-y: auto;
  display: block;

  p {
    font-size: 16px;
    line-height: 26px;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 600;
    text-transform: none;
    padding: 0;
    margin-bottom: 16px;
  }

  h1 {
    font-size: 32px;
    line-height: 48px;
    margin-top: 0;
    &:not(:first-child) {
      margin-top: 32px;
    }
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    &:not(:first-child) {
      margin-top: 21px;
    }
  }

  h2 {
    font-size: 28px;
    line-height: 38px;
    margin-top: 0;
  }

  h3 {
    font-size: 24px;
    line-height: 30px;
    margin-top: 0;
  }

  h4 {
    font-size: 21px;
    line-height: 28px;
    margin-top: 0;
  }

  h5 {
    font-size: 18px;
    line-height: 24px;
    margin-top: 0;
  }

  h6 {
    font-size: 16px;
    line-height: 20px;
    margin-top: 0;
  }

  a {
    color: #0084ff;
    border: 0;
    font-weight: normal;
    text-decoration: underline;
  }

  small {
    font-size: 0.707em;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  ol li {
    /* prevent 2-digits numbers from being cut-off */
    margin-left: 5px;
    margin-right: 5px;
  }

  ul {
    margin-left: 1.5em;
    margin-bottom: 16px;
    list-style-type: disc;
    list-style-position: outside;
    list-style-image: none;
  }

  ol {
    margin-left: 1.25em;
    margin-bottom: 16px;
    list-style-type: decimal;
  }

  li {
    list-style: inherit;
    ol,
    ul {
      margin-bottom: 0;
    }
  }

  pre {
    padding: 0;
    margin: 0;
  }

  pre > code {
    display: block;
    padding: 0.15em 0.6em;
  }

  img {
    max-width: 100%;
    border: 0;
    padding: 0;
    margin-bottom: 16px;
  }

  blockquote {
    margin: 0 0 16px 0;
    padding-left: 15px;
  }
`,Rg={name:"rich-text",Component:Og},Sg=Ke(({input:a,field:b})=>z.createElement(ee,l(k({},a),{step:b.step}))),Tg={name:"number",Component:Sg,parse:a=>a&&+a},Ug=Ke(Rd),Vg={name:"select",type:"select",Component:Ug,parse:a=>a||""},Wg=Ke(Vd),Xg={name:"radio-group",Component:Wg},Yg=Ke(({input:a})=>z.createElement(Uc,k({},a))),Zg={name:"textarea",Component:Yg,parse:a=>a||""},$g=Ke(({input:a,field:b})=>z.createElement(Tc,l(k({},a),{placeholder:b.placeholder}))),_g={name:"text",Component:$g,validate(a,b,c,d){if(d.required&&!a)return"Required"},parse:a=>a||""},ah=Ke(Ld),bh={name:"toggle",type:"checkbox",Component:ah},ch=Ke(({input:a,field:b,form:c,tinaForm:d})=>{const[e,f]=z.useState(""),g=z.useCallback(a=>{var d,e;null!=(e=null==(d=c.getFieldState(b.name))?void 0:d.value)&&e.includes(a)||a.length&&(c.mutators.insert(b.name,0,a),f(""))},[c,b.name]),h=a.value||[];return z.createElement(z.Fragment,null,z.createElement(Tc,{value:e,onChange:a=>f(a.target.value),placeholder:b.placeholder,onKeyPress:a=>{(" "===a.key||"Enter"===a.key)&&(a.preventDefault(),g(e))}}),z.createElement(eh,null,h.map((a,c)=>z.createElement(fh,{key:a,tinaForm:d,field:b,index:c},a))))}),dh=B.default.button`
  text-align: center;
  flex: 0 0 auto;
  border: 0;
  background: transparent;
  cursor: pointer;
  padding: 6px;
  margin: 0 calc(var(--tina-padding-small) * -1) 0 6px;
  display: flex;
  align-items: center;
  transition: all 85ms ease-out;

  svg {
    transition: all 85ms ease-out;
    width: 16px;
    height: auto;
    fill: var(--tina-color-grey-8);
  }
  &:hover {
    background-color: var(--tina-color-grey-1);
  }
`,eh=B.default.span`
  display: flex;
  flex-wrap: wrap;
  margin: 4px -4px 0 -4px;
`,fh=B.default(a=>{var b=a,{tinaForm:c,field:d,index:e,children:f}=b,g=m(b,["tinaForm","field","index","children"]);const h=z.useCallback(()=>{c.mutators.remove(d.name,e)},[c,d,e]);return z.createElement("span",k({},g),z.createElement("span",null,f),z.createElement(dh,{onClick:h},z.createElement(X,null)))})`
  border-radius: var(--tina-radius-small);
  box-shadow: var(--tina-shadow-small);
  background-color: var(--tina-color-grey-0);
  border: 1px solid var(--tina-color-grey-2);
  display: flex;
  align-items: center;
  font-size: var(--tina-font-size-2);
  font-weight: 600;
  letter-spacing: 0.01em;
  line-height: 1.35;
  color: var(--tina-color-grey-8);
  padding: 0 var(--tina-padding-small);
  margin: 4px;
  text-overflow: ellipsis;
  overflow: hidden;

  span {
    max-width: calc(var(--tina-sidebar-width) - 50px);
    flex-shrink: 1;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`,gh={name:"tags",Component:ch,parse:a=>a||""},hh="MMM DD, YYYY",ih=Ke(a=>{var{input:c,field:d}=a,e=d,{dateFormat:f,timeFormat:g}=e,h=m(e,["dateFormat","timeFormat"]);const[i,j]=b.useState(!1),l=b.useRef(null);return b.useEffect(()=>{const a=a=>{!l.current||a.target&&(l.current.contains(a.target)?j(!0):j(!1))};return document.addEventListener("mouseup",a,!1),()=>{document.removeEventListener("mouseup",a,!1)}},[document]),z.createElement(jh,null,z.createElement(kh,{ref:l},z.createElement(E.default,k({value:c.value,onFocus:c.onFocus,onChange:c.onChange,open:i,dateFormat:f||hh,timeFormat:g||!1},h))))}),jh=B.default.div`
  input {
    ${Rc};
  }
`,kh=B.default.div`
  .rdt {
    position: relative;
  }
  .rdtPicker {
    display: none;
    position: absolute;
    width: 100%;
    max-width: 350px;
    padding: 4px;
    margin-top: 4px;
    z-index: 99999 !important;
    background: var(--tina-color-grey-0);
    border-radius: var(--tina-radius-small);
    box-shadow: var(--tina-shadow-big);
    border: 1px solid var(--tina-color-grey-2);
  }
  .rdtOpen .rdtPicker {
    display: block;
  }
  .rdtStatic .rdtPicker {
    box-shadow: none;
    position: static;
  }
  .rdtPicker .rdtTimeToggle {
    text-align: center;
  }
  .rdtPicker table {
    width: 100%;
    margin: 0;
  }
  .rdtPicker td,
  .rdtPicker th {
    text-align: center;
    height: 28px;
  }
  .rdtPicker td {
    cursor: pointer;
  }
  .rdtPicker td.rdtDay:hover,
  .rdtPicker td.rdtHour:hover,
  .rdtPicker td.rdtMinute:hover,
  .rdtPicker td.rdtSecond:hover,
  .rdtPicker .rdtTimeToggle:hover {
    background: var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    border-radius: var(--tina-radius-small);
    cursor: pointer;

    &:active {
      background: var(--tina-color-primary);
      color: var(--tina-color-grey-0);
      border-radius: var(--tina-radius-small);
    }
  }
  .rdtPicker td.rdtOld,
  .rdtPicker td.rdtNew {
    color: var(--tina-color-grey-6);
  }
  .rdtPicker td.rdtToday {
    position: relative;
  }
  .rdtPicker td.rdtToday:before {
    content: '';
    display: inline-block;
    border-left: 7px solid transparent;
    border-bottom: 7px solid var(--tina-color-primary);
    border-radius: 20px;
    border-top-color: rgba(0, 0, 0, 0.2);
    position: absolute;
    bottom: 4px;
    right: 4px;
  }
  .rdtPicker td.rdtActive,
  .rdtPicker td.rdtActive:hover {
    background-color: var(--tina-color-primary);
    color: var(--tina-color-grey-0);
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .rdtPicker td.rdtActive.rdtToday:before {
    border-bottom-color: var(--tina-color-grey-0);
  }
  .rdtPicker td.rdtDisabled,
  .rdtPicker td.rdtDisabled:hover {
    background: none;
    color: var(--tina-color-grey-6);
    cursor: not-allowed;
  }
  .rdtPicker td span.rdtOld {
    color: var(--tina-color-grey-6);
  }
  .rdtPicker td span.rdtDisabled,
  .rdtPicker td span.rdtDisabled:hover {
    background: none;
    color: var(--tina-color-grey-6);
    cursor: not-allowed;
  }
  .rdtPicker th {
    border-bottom: 1px solid var(--tina-color-grey-1);
  }
  .rdtPicker .dow {
    width: 14.2857%;
    border-bottom: none;
    cursor: default;
  }
  .rdtPicker th.rdtSwitch {
    width: 100px;
  }
  .rdtPicker th.rdtNext,
  .rdtPicker th.rdtPrev {
    font-size: 21px;
    vertical-align: top;
  }
  .rdtPrev span,
  .rdtNext span {
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtPicker th.rdtDisabled,
  .rdtPicker th.rdtDisabled:hover {
    background: none;
    color: var(--tina-color-grey-6);
    cursor: not-allowed;
  }
  .rdtPicker thead tr:first-child th {
    cursor: pointer;
  }
  .rdtPicker thead tr:first-child th:hover {
    background: var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    border-radius: var(--tina-radius-small);
  }
  .rdtPicker tfoot {
    border-top: 1px solid var(--tina-color-grey-1);
  }
  .rdtPicker button {
    border: none;
    background: none;
    cursor: pointer;
  }
  .rdtPicker button:hover {
    background: var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    border-radius: var(--tina-radius-small);
  }
  .rdtPicker thead button {
    width: 100%;
    height: 100%;
  }
  td.rdtMonth,
  td.rdtYear {
    height: 50px;
    width: 25%;
    cursor: pointer;
  }
  td.rdtMonth:hover,
  td.rdtYear:hover {
    background: var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    border-radius: var(--tina-radius-small);
  }
  .rdtCounters {
    display: inline-block;
  }
  .rdtCounters > div {
    float: left;
  }
  .rdtCounter {
    height: 100px;
  }
  .rdtCounter {
    width: 40px;
  }
  .rdtCounterSeparator {
    line-height: 100px;
  }
  .rdtCounter .rdtBtn {
    height: 40%;
    line-height: 40px;
    cursor: pointer;
    display: block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
  }
  .rdtCounter .rdtBtn:hover {
    background: var(--tina-color-grey-2);
    color: var(--tina-color-primary);
    border-radius: var(--tina-radius-small);
  }
  .rdtCounter .rdtCount {
    height: 20%;
    font-size: 1.2em;
  }
  .rdtMilli {
    vertical-align: middle;
    padding-left: 8px;
    width: 48px;
  }
  .rdtMilli input {
    width: 100%;
    font-size: 1.2em;
    margin-top: 37px;
  }
  .rdtTime td {
    cursor: default;
  }
`,lh={__type:"field",name:"date",Component:ih,format:(a,b,c)=>{var d,e;const f="string"==typeof(d=c.dateFormat)?d:hh,g="string"==typeof(e=c.timeFormat)?e:e?"h:mm A":void 0,h="string"==typeof g?`${f} ${g}`:f;if("string"==typeof a){const i=F.default(a);return i.isValid()?i.format(h):a}return F.default(a).format(h)},parse:a=>{const b=new Date(a);return isNaN(b.getTime())?a:new Date(a).toISOString()}},mh=Ke(_d),nh={name:"checkbox-group",Component:mh},oh=Ke(ye),ph={name:"reference",type:"reference",Component:oh,parse:a=>a||""};class qh{constructor(rh,sh,th){this.form=rh,this.__type="screen",this.name=rh.label,this.Icon=sh||ga,this.layout=th||"popup",this.Component=()=>z.createElement(sd,{form:rh})}}const uh=B.default.span`
  font-size: 40px;
  line-height: 1;
  display: inline-block;
`,vh=e.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,wh=B.default.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--tina-padding-big) var(--tina-padding-big) 64px
    var(--tina-padding-big);
  width: 100%;
  height: 100%;
  overflow-y: auto;
  animation-name: ${vh};
  animation-delay: 300ms;
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-duration: 150ms;
  > *:first-child {
    margin: 0 0 var(--tina-padding-big) 0;
  }
  > ${uh} {
    display: block;
  }
  h3 {
    font-size: var(--tina-font-size-5);
    font-weight: normal;
    display: block;
    margin: 0 0 var(--tina-padding-big) 0;
    ${uh} {
      font-size: 1em;
    }
  }
  p {
    display: block;
    margin: 0 0 var(--tina-padding-big) 0;
  }
`,xh=B.default.a`
  text-align: center;
  border: 0;
  border-radius: var(--tina-radius-big);
  border: 1px solid var(--tina-color-grey-2);
  box-shadow: var(--tina-shadow-small);
  font-weight: var(--tina-font-weight-regular);
  cursor: pointer;
  font-size: var(--tina-font-size-0);
  transition: all var(--tina-timing-short) ease-out;
  background-color: white;
  color: var(--tina-color-grey-8);
  padding: var(--tina-padding-small) var(--tina-padding-big)
    var(--tina-padding-small) 56px;
  position: relative;
  text-decoration: none;
  display: inline-block;
  ${uh} {
    font-size: 24px;
    position: absolute;
    left: var(--tina-padding-big);
    top: 50%;
    transform-origin: 50% 50%;
    transform: translate3d(0, -50%, 0);
    transition: all var(--tina-timing-short) ease-out;
  }
  &:hover {
    color: var(--tina-color-primary);
    ${uh} {
      transform: translate3d(0, -50%, 0);
    }
  }
`,yh=({forms:a,setActiveFormId:b,isEditing:c})=>z.createElement(Dh,{isEditing:c},a.sort(zh).map(a=>z.createElement(Ah,{key:a.id,onClick:()=>b(a.id)},z.createElement("span",null,a.label),z.createElement(da,null)))),zh=(a,b)=>b.id<a.id?-1:b.id>a.id?1:0,Ah=B.default.li`
  position: relative;
  font-size: var(--tina-font-size-6);
  line-height: 1.2;
  position: relative;
  padding: var(--tina-padding-big);
  margin: 0;
  color: var(--tina-color-grey-8);
  font-weight: normal;
  transition: color 150ms ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  svg {
    width: 28px;
    fill: var(--tina-color-grey-3);
    margin-top: -1px;
    height: auto;
    transform: translate3d(0, 0, 0);
    transition: transform 250ms ease-out;
  }
  &:after {
    content: '';
    display: block;
    width: 100%;
    background-color: var(--tina-color-grey-2);
    height: 1px;
    position: absolute;
    bottom: 0;
    left: var(--tina-padding-big);
    transform-origin: 0 0;
    transform: scale3d(0.15, 1, 1) translate3d(0, 0, 0);
    transition: all 250ms ease-out;
  }
  &:hover {
    color: var(--tina-color-primary);
    svg {
      transform: translate3d(3px, 0, 0);
      transition: transform 250ms ease;
      fill: var(--tina-color-grey-8);
    }
    &:after {
      transform: scale3d(1, 1, 1)
        translate3d(calc(var(--tina-padding-big) * -1), 0, 0);
    }
  }
`,Bh=e.keyframes`
  from {
    transform: translate3d(-100%,0,0);
    opacity: 0;
  }

  to {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;function Ch(a){return`
    &:nth-child(${a+1}) {
      animation-delay: ${25*a}ms;
    }
  `}const Dh=B.default.ul`
  padding: var(--tina-padding-big);
  cursor: pointer;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-y: auto;
  ${Ah} {
    animation: ${Bh} 150ms ease-out both 1;
    ${function(){let a="";for(let b=0;b<15;b+=1)a+=Ch(b);return a}()}
  }
`,Eh=({children:a})=>{const[c,d]=b.useState(""),e=ic(),f=e.plugins.getType("form");function g(){1===f.all().length&&d(f.all()[0].id)}Nc(f,()=>{g()}),z.useEffect(()=>{g()},[]);const h=f.all(),i=h.length>1,j=f.find(c),k=!!j;if(!h.length)return z.createElement(z.Fragment,null," ",a," ");if(i&&!j)return z.createElement(yh,{isEditing:k,forms:h,setActiveFormId:d});const l=e.plugins.all("form:meta");return z.createElement(z.Fragment,null,j&&z.createElement(Hh,{isEditing:k,isMultiform:i},i&&z.createElement(Ih,{activeForm:j,setActiveFormId:d}),!i&&j.label&&z.createElement(Jh,{activeForm:j}),l&&l.map(a=>z.createElement(z.Fragment,{key:a.name},z.createElement(a.Component,null))),z.createElement(sd,{form:j})))},Fh=B.default.div`
  display: block;
  margin: 0 auto;
  width: 100%;
`;B.default.div`
  position: relative;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: auto;
  border-top: 1px solid var(--tina-color-grey-2);
  background-color: var(--tina-color-grey-1);

  ${Fh} {
    height: 100%;
  }
`;const Gh=e.keyframes`
  0% {
    transform: translate3d( 100%, 0, 0 );
  }
  100% {
    transform: translate3d( 0, 0, 0 );
  }
`,Hh=B.default.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;

  > * {
    transform: translate3d(100%, 0, 0);
  }

  ${a=>a.isEditing&&e.css`
      > * {
        transform: none;
        animation-name: ${Gh};
        animation-duration: 150ms;
        animation-delay: 0;
        animation-iteration-count: 1;
        animation-timing-function: ease-out;
      }
    `};
`,Ih=B.default(a=>{var b=a,{activeForm:c,setActiveFormId:d}=b,e=m(b,["activeForm","setActiveFormId"]);const f=ic();return z.createElement("button",l(k({},e),{onClick:()=>{const a=c.finalForm.getState();!0===a.invalid?f.alerts.error("Cannot navigate away from an invalid form."):d("")}}),z.createElement(ca,null),z.createElement("span",null,c.label))})`
  position: relative;
  width: 100%;
  cursor: pointer;
  border: none;
  background-image: none;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 var(--tina-padding-big) 10px var(--tina-padding-big);
  font-size: var(--tina-font-size-5);
  transition: color 250ms ease-out;
  user-select: none;

  span {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  svg {
    flex: 0 0 auto;
    width: 24px;
    fill: var(--tina-color-grey-3);
    height: auto;
    transform: translate3d(-4px, 0, 0);
    transition: transform 150ms ease-out;
  }

  :hover,
  :active {
    color: var(--tina-color-primary);
    outline: none;
    border: none;

    svg {
      fill: var(--tina-color-grey-8);
      transform: translate3d(-7px, 0, 0);
      transition: transform var(--tina-timing-long) ease;
    }
  }
`,Jh=B.default(a=>{var b=a,{activeForm:c}=b,d=m(b,["activeForm"]);return z.createElement("div",k({},d),z.createElement("span",null,c.label))})`
  position: relative;
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: 0 var(--tina-padding-big) 10px var(--tina-padding-big);
  font-size: var(--tina-font-size-5);
  user-select: none;

  span {
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;B.default(Q)`
  flex: 1.5 0 auto;
  padding: 12px 24px;
`;const Kh=({sidebar:a})=>{const b=ic(),[c,d]=z.useState(!1),e=b.plugins.findOrCreateMap("content-creator");return(Nc(e),e.all().length)?z.createElement(Nh,null,a?z.createElement(R,{onClick:()=>d(!0),open:c,primary:!0},z.createElement(W,null)):z.createElement(Oh,{onClick:()=>d(!0),open:c},z.createElement(W,null)," ",z.createElement(Rh,null,"New")),z.createElement(Ph,{open:c,direction:a?"left":"right"},z.createElement(Vc,{click:!0,escape:!0,onDismiss:()=>d(!1),disabled:!c},e.all().map(a=>z.createElement(Lh,{plugin:a,key:a.name,onClick:()=>{d(!1)}}))))):null},Lh=({plugin:a,onClick:b})=>{const[c,d]=z.useState(!1);return z.createElement(z.Fragment,null,z.createElement(Qh,{onClick:()=>{d(a=>!a),b()}},a.name),c&&z.createElement(Mh,{plugin:a,close:()=>d(!1)}))},Mh=({plugin:a,close:c})=>{const d=ic(),e=b.useMemo(()=>new jc({id:"create-form-id",label:"create-form",fields:a.fields,actions:a.actions,buttons:a.buttons,initialValues:a.initialValues||{},reset:a.reset,onChange:a.onChange,onSubmit:async b=>{await a.onSubmit(b,d).then(()=>{c()})}}),[c,d,a]);return z.createElement(T,null,z.createElement(Ca,null,z.createElement(ua,{close:c},a.name),z.createElement(V,null,z.createElement(sd,{form:e}))))},Nh=B.default.div`
  position: relative;
  grid-area: actions;
  justify-self: end;
`,Oh=B.default(Q)`
  display: flex;
  align-items: center;
  transition: all 150ms ease-out;
  padding: 0 10px;
  @media (min-width: 1030px) {
    padding: 0 20px;
  }
  &:focus {
    outline: none !important;
  }
  svg {
    fill: currentColor;
    opacity: 0.7;
    width: 2em;
    height: 2em;
    margin-right: 0.25rem;
    transform-origin: 50% 50%;
    transition: all 150ms ease-out;
  }
  ${a=>a.open&&e.css`
      background-color: transparent;
      svg {
        transform: rotate(45deg);
      }
    `};
`,Ph=B.default.div`
  min-width: 192px;
  border-radius: var(--tina-radius-big);
  border: 1px solid var(--tina-color-grey-2);
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3d(0, 0, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 150ms ease-out;
  transform-origin: 0 0;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  ${a=>a.direction==="left"&&e.css`
      right: 0;
      transform-origin: 100% 0;
    `}
  ${a=>a.direction==="right"&&e.css`
      left: 0;
      transform-origin: 0 0;
    `}
  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 44px, 0) scale3d(1, 1, 1);
    `};
`,Qh=B.default.button`
  position: relative;
  text-align: center;
  font-size: var(--tina-font-size-1);
  padding: 0 12px;
  height: 40px;
  font-weight: var(--tina-font-weight-regular);
  width: 100%;
  background: none;
  cursor: pointer;
  outline: none;
  border: 0;
  transition: all 85ms ease-out;
  &:hover {
    color: var(--tina-color-primary);
    background-color: #f6f6f9;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #efefef;
  }
`,Rh=B.default.span`
  display: none;
  @media (min-width: 1030px) {
    display: inline;
  }
`,Sh=()=>{const[a,b]=z.useState(!1),[c,d]=z.useState(null),e=a=>parseInt(a.replace("px",""),10);return z.useEffect(()=>{const a=()=>b(!1);return window.addEventListener("mouseup",a),()=>{window.removeEventListener("mouseup",a)}},[]),z.useEffect(()=>{const b=a=>{d(b=>{const c=b?b+a.movementX:e(window.getComputedStyle(document.documentElement).getPropertyValue("--tina-sidebar-width"))+a.movementX,d=window.innerWidth-64;return c<250?250:c>d?d:c})};return a&&window.addEventListener("mousemove",b),()=>{window.removeEventListener("mousemove",b)}},[a]),z.createElement(z.Fragment,null,z.createElement(Th,{onMouseDown:()=>b(!0)},z.createElement("span",null),z.createElement("span",null)),z.createElement(Uh,{blockSelect:a,width:c}))},Th=B.default.div`
  position: absolute;
  top: 0;
  right: 0px;
  padding-right: 6px;
  width: 14px;
  height: 100%;
  cursor: ew-resize;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: var(--tina-z-index-3);

  span {
    width: 2px;
    border-radius: 2px;
    box-shadow: 0 0 2px 1px rgba(255, 255, 255, 0.3);
    max-height: 10rem;
    min-height: 5rem;
    height: 33.3%;
    max-height: 20vh;
    background: var(--tina-color-grey-3);
  }
`,Uh=e.createGlobalStyle`
  ${({width:a})=>a&&`
    :root {
      --tina-sidebar-width: ${a+`px`};
    }
  `}

  ${({blockSelect:a})=>a&&`
  * {
  -webkit-user-select: none;  
  -moz-user-select: none;    
  -ms-user-select: none;      
  user-select: none;
  }
  `}
`;function Vh(a){return te({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"}}]})(a)}const Wh=()=>z.createElement("a",{style:{display:"flex",width:"100%",fontSize:"14px",alignItems:"center",padding:"6px 14px",color:"#ab9e58",backgroundColor:"#f4efd3",borderBottom:"1px solid #F5E06E"},href:"https://tina.io/docs/tina-cloud/",target:"_blank"},z.createElement(Vh,{style:{width:"16px",height:"auto",display:"inline-block",marginRight:"4px",opacity:"0.7",fill:"#ab9e58"}})," ","You are currently in",z.createElement("strong",{style:{marginLeft:"3px",color:"inherit"}},"Local Mode"));function Xh({children:a,position:b,sidebar:c}){Nc(c);const d=ic();return z.createElement(z.Fragment,null,_h(b||c.position)?z.createElement($h,{open:c.isOpen},a):a,d.enabled&&z.createElement(Yh,{sidebar:c}))}const Yh=({sidebar:a})=>{var c,d;const e=ic(),f=e.plugins.getType("screen");Nc(a),Nc(f);const[g,h]=b.useState(!1),[i,j]=b.useState(null),k=f.all(),l=k.length>0;return z.createElement(z.Fragment,null,z.createElement(Zh,null),z.createElement(li,{open:a.isOpen},z.createElement(ki,{open:a.isOpen},(null==(d=null==(c=e.api)?void 0:c.tina)?void 0:d.isLocalMode)&&z.createElement(Wh,null),z.createElement(ei,null,l&&z.createElement(fi,{onClick:()=>h(!g),open:g},z.createElement(Z,null)),z.createElement(Kh,{sidebar:!0})),z.createElement(Eh,null,z.createElement(a.placeholder,null)),l&&z.createElement(hi,{visible:g},z.createElement(gi,null,z.createElement(ci,null,e.flags.get("tina-admin")&&z.createElement(di,{key:"admin",value:"admin",onClick:()=>{window.location.href=window.location.origin+"/admin"}},z.createElement(ha,null)," Tina Admin"),k.map(a=>{const b=a.Icon;return z.createElement(di,{key:a.name,value:a.name,onClick:()=>{j(a),h(!1)}},z.createElement(b,null)," ",a.name)}))),z.createElement(ai,null)),i&&z.createElement(Pc,{screen:i,close:()=>j(null)}),z.createElement(Sh,null)),z.createElement(bi,{sidebar:a})))},Zh=e.createGlobalStyle`
  @media (max-width: 500px) {
    :root {
      --tina-sidebar-width: calc(100vw - 64px);
    }
  }
`,$h=B.default.div`
  @media (min-width: 840px) {
    padding-left: ${a=>a.open?"var(--tina-sidebar-width)":"0"};
    transition: padding-left 150ms ease-out;
  }
`;function _h(a){return"fixed"===a||"displace"===a}const ai=B.default(a=>{var b=m(a,[]);return z.createElement("div",k({},b),z.createElement(ha,null))})`
  position: absolute;
  z-index: -1;
  bottom: var(--tina-padding-big);
  left: var(--tina-padding-big);
  svg {
    width: 128px;
    height: 128px;
    margin: -4px -20px;
    fill: var(--tina-color-grey-9);
  }
`,bi=({sidebar:a})=>z.createElement(ji,{onClick:()=>a.isOpen=!a.isOpen,open:a.isOpen,"aria-label":"toggles cms sidebar"},a.isOpen?z.createElement(ca,null):z.createElement($,null)),ci=B.default.div`
  margin: 32px calc(var(--tina-padding-big) * -1) 32px
    calc(var(--tina-padding-big) * -1);
  display: block;
`,di=B.default.div`
  color: var(--tina-color-grey-1);
  font-size: var(--tina-font-size-4);
  font-weight: var(--tina-font-weight-regular);
  padding: var(--tina-padding-big) var(--tina-padding-big)
    var(--tina-padding-big) 64px;
  position: relative;
  cursor: pointer;
  transition: all var(--tina-timing-short) ease-out;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    border-radius: var(--tina-radius-big);
    background-color: var(--tina-color-grey-9);
    z-index: -1;
    transition: all 150ms ease;
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  &:hover {
    color: var(--tina-color-primary-light);
    &:after {
      transform: translate3d(0, 0, 0);
      transition: transform var(--tina-timing-short) ease-out, opacity 0ms;
      opacity: 1;
    }
    svg {
      fill: var(--tina-color-primary);
    }
    & ~ * {
      &:after {
        transform: translate3d(0, -100%, 0);
      }
    }
  }
  svg {
    position: absolute;
    left: var(--tina-padding-big);
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 36px;
    height: auto;
    fill: var(--tina-color-grey-4);
    transition: all var(--tina-timing-short) ease-out;
  }
`,ei=B.default.div`
  display: grid;
  grid-template-areas: 'hamburger actions';
  align-items: center;
  z-index: var(--tina-z-index-5);
  height: var(--tina-sidebar-header-height);
  width: 100%;
  padding: 0 var(--tina-padding-big);
`,fi=B.default.button`
  padding: 0 0 0 var(--tina-padding-big);
  margin-left: calc(var(--tina-padding-big) * -1);
  background: transparent;
  outline: none;
  border: 0;
  text-align: left;
  width: 64px;
  height: 32px;
  grid-area: hamburger;
  justify-self: start;
  cursor: pointer;
  svg {
    position: relative;
    transition: fill 85ms ease-out;
    fill: var(--tina-color-grey-6);
    margin-left: -4px;
    width: 32px;
    height: auto;
    path {
      position: relative;
      transition: transform var(--tina-timing-long) ease-out,
        opacity var(--tina-timing-long) ease-out,
        fill var(--tina-timing-short) ease-out;
      transform-origin: 50% 50%;
    }
  }
  &:hover {
    svg {
      fill: var(--tina-color-grey-7);
    }
  }
  ${a=>a.open&&e.css`
      svg {
        fill: var(--tina-color-grey-1);
        &:hover {
          fill: var(--tina-color-grey-2);
        }
        path:first-child {
          /* Top bar */
          transform: rotate(45deg) translate3d(0, 0.45rem, 0);
        }
        path:nth-child(2) {
          /* Middle bar */
          transform: translate3d(-100%, 0, 0);
          opacity: 0;
        }
        path:last-child {
          /* Bottom Bar */
          transform: rotate(-45deg) translate3d(0, -0.45rem, 0);
        }
      }
    `};
`,gi=B.default.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: var(--tina-sidebar-header-height) var(--tina-padding-big)
    var(--tina-padding-big) var(--tina-padding-big);
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,hi=B.default.div`
  background: var(--tina-color-grey-8);
  z-index: var(--tina-z-index-4);
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--tina-sidebar-width);
  transform: translate3d(${a=>a.visible?"0":"-100%"}, 0, 0);
  overflow: hidden;
  padding: var(--tina-padding-big);
  transition: all var(--tina-timing-long) ease-out;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,ii=e.keyframes`
  from {
    transform: translate3d(-100%,0,0);
  }

  to {
    transform: translate3d(0,0,0);
  }
`,ji=B.default.button`
  position: absolute;
  pointer-events: all;
  bottom: 44px;
  left: var(--tina-sidebar-width);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 0 24px 24px 0;
  width: 50px;
  height: 44px;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  fill: white;
  text-align: center;
  background-color: var(--tina-color-primary);
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 150ms ease-out;
  cursor: pointer;
  animation: ${ii} 200ms 300ms ease-out 1 both;
  &:hover {
    background-color: var(--tina-color-primary-light);
  }
  &:active {
    background-color: var(--tina-color-primary-dark);
  }
`,ki=B.default.div`
  margin: 0;
  padding: 0;
  border: 0;
  z-index: 1;
  background-color: white;
  position: fixed;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: var(--tina-sidebar-width);
  overflow: visible;
  height: 100%;
  left: 0;
  top: 0;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  &:before {
    /* Animate box-shadow with opacity for better performance */
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.07), 2px 0 8px rgba(0, 0, 0, 0.07);
    transition: all ${a=>a.open?150:200}ms ease-out;
    opacity: ${a=>a.open?1:0};
  }
  &:after {
    /* Overlay outer border */
    border-right: 1px solid rgba(51, 51, 51, 0.09);
  }
`,li=B.default.div`
  ${O}

  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  display: block !important;
  background: transparent !important;
  height: 100% !important;
  width: var(--tina-sidebar-width) !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  box-sizing: border-box;
  z-index: var(--tina-z-index-4);
  transition: all ${a=>a.open?150:200}ms ease-out !important;
  transform: translate3d(
    ${a=>a.open?"0":"calc(var(--tina-sidebar-width) * -1)"},
    0,
    0
  ) !important;
  pointer-events: ${a=>a.open?`all`:`none`};
`,mi=B.default(Q)`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0 10px;

  &:focus {
    outline: none;
  }

  svg {
    fill: currentColor;
    opacity: 0.7;
    width: 2.5em;
    height: 2.5em;
  }

  &:disabled {
    opacity: 0.6;
    filter: grayscale(25%);
  }

  @media (min-width: 1030px) {
    padding: 0 20px;

    svg {
      margin-right: 0.25rem;
    }
  }
`,ni=B.default.span`
  all: unset;
  display: none;
  @media (min-width: 1030px) {
    display: inline;
  }
`,oi=({form:a})=>{const[c,d]=b.useState(!1);return z.createElement(z.Fragment,null,z.createElement(pi,{open:c,onClick:()=>d(a=>!a)}),z.createElement(qi,{open:c},z.createElement(Vc,{click:!0,escape:!0,disabled:!c,allowClickPropagation:!0,onDismiss:()=>{d(a=>!a)}},(null==a?void 0:a.actions)&&a.actions.map((b,c)=>z.createElement(b,{form:a,key:c})),z.createElement(si,null))))},pi=B.default(a=>z.createElement("button",k({},a),z.createElement(Y,null)))`
  height: var(--tina-toolbar-height);
  width: 36px;
  align-self: stretch;
  background-color: white;
  background-position: center;
  background-size: auto 18px;
  background-repeat: no-repeat;
  border: 0;
  margin: 0 -12px 0 12px;
  outline: none;
  cursor: pointer;
  transition: all 150ms ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid var(--tina-color-grey-2);
  &:hover {
    background-color: var(--tina-color-grey-1);
    svg {
      fill: var(--tina-color-primary);
    }
  }
  svg {
    transition: all 150ms ease-out;
  }

  ${a=>a.open&&e.css`
      background-color: var(--tina-color-grey-1);
      box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.06);
      svg {
        fill: var(--tina-color-primary);
      }
      &:hover {
        svg {
          fill: var(--tina-color-primary);
        }
      }
    `};
`,qi=B.default.div`
  min-width: 192px;
  border-radius: var(--tina-radius-big);
  border: 1px solid #efefef;
  display: block;
  position: absolute;
  top: 0;
  right: 14px;
  transform: translate3d(0, 23px, 0) scale3d(0.5, 0.5, 1);
  opacity: 0;
  pointer-events: none;
  transition: all 150ms ease-out;
  transform-origin: 100% 0%;
  box-shadow: var(--tina-shadow-big);
  background-color: white;
  overflow: hidden;
  z-index: var(--tina-z-index-1);
  ${a=>a.open&&e.css`
      opacity: 1;
      pointer-events: all;
      transform: translate3d(0, 55px, 0) scale3d(1, 1, 1);
    `};
`,ri=B.default(qd)`
  height: 32px;
  background-color: var(--tina-color-grey-1);
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:first-child) {
    border-top: 2px solid var(--tina-color-grey-2);
  }

  svg {
    fill: currentColor;
    width: 24px;
    margin-right: 2px;
  }
`,si=()=>{const a=ic();return z.createElement(ri,{onClick:()=>{a.disable()}},z.createElement(ea,null)," Exit Tina")},ti=(a,b)=>{const[c,d]=z.useState();return z.useEffect(()=>{if(a)return a.subscribe(d,b)},[a]),c},ui=()=>{var a;const b=ic(),c=b.plugins.getType("toolbar:widget"),d=b.plugins.getType("form"),e=d.all().length?d.all()[0]:null,f=null==e?void 0:e.finalForm.getState(),g=ti(e,{pristine:!0,submitting:!0,invalid:!0}),[,h]=z.useState(0),i=b.plugins.getType("screen");Nc(i);const j=i.all(),l=j.length>0,[m,n]=z.useState(null),[o,p]=z.useState(!1);Nc(d),Nc(c);const q=(null==(a=b.toolbar)?void 0:a.buttons)||(null==e?void 0:e.buttons)||{save:"Save",reset:"Reset",invalid:!0},r=e&&e.submit,s=!e,t=!!s||g&&(null==f?void 0:f.pristine),u=!s&&!!(g&&(null==f?void 0:f.submitting)),v=g&&(null==f?void 0:f.invalid);return z.createElement(z.Fragment,null,z.createElement(Di,null),z.createElement(wi,{menuIsOpen:o},z.createElement(zi,null,l&&z.createElement(Gi,{onClick:()=>p(!o),open:o},z.createElement(Z,null)),z.createElement(Kh,{sidebar:!1})),z.createElement(Ai,null,c.all().length>=1&&z.createElement(yi,null,c.all().sort((a,b)=>a.weight-b.weight).map(a=>z.createElement(a.component,k({key:a.name},a.props)))),z.createElement(Bi,null,z.createElement(vi,{dirty:!t})),z.createElement(Ci,null,z.createElement(mi,{disabled:s||t,onClick:()=>{e&&(e.reset(),h(a=>a++))}},z.createElement(ka,null),z.createElement(ni,null,q.reset)),z.createElement(xi,{primary:!0,onClick:r,busy:u,disabled:s||t||v},u&&z.createElement(ed,null),!u&&z.createElement(z.Fragment,null,z.createElement(ni,null,q.save))),z.createElement(oi,{form:e})))),l&&z.createElement(Ki,{visible:o},z.createElement(Ji,null,z.createElement(Hi,null,j.map(a=>{const b=a.Icon;return z.createElement(Ii,{key:a.name,value:a.name,onClick:()=>{n(a),p(!1)}},z.createElement(b,null)," ",a.name)}))),z.createElement(Li,null)),m&&z.createElement(Pc,{screen:m,close:()=>n(null)}))},vi=({dirty:a})=>z.createElement(Le,{name:"Form Status",margin:!1},a?z.createElement(Fi,null,z.createElement(Ei,{warning:!0})," ",z.createElement(ni,null,"Unsaved changes")):z.createElement(Fi,null,z.createElement(Ei,null)," ",z.createElement(ni,null,"No changes"))),wi=B.default.div`
  ${O}

  font-family: 'Inter', sans-serif;
  position: fixed;
  top: 0;
  left: ${a=>a.menuIsOpen?"var(--tina-sidebar-width)":"0"};
  right: 0;
  padding: 0 12px;
  height: 62px;
  z-index: var(--tina-z-index-4);
  box-sizing: border-box;
  display: grid;
  grid-template-areas: 'left right';
  grid-template-columns: auto 1fr;
  align-items: stretch;
  background-color: var(--tina-color-grey-1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid var(--tina-color-grey-2);
  transition: left var(--tina-timing-long) ease-out;

  @media (max-width: 1029px) {
    label {
      display: none;
    }
  }
`,xi=B.default(mi)`
  padding: 0 32px;
`,yi=B.default.div`
  grid-area: widgets;
  display: flex;
  align-self: stretch;
  align-items: center;
  justify-self: end;
  padding-right: 12px;
  border-right: 1px solid white;
  box-shadow: inset -1px 0 0 #e1ddec;
  background-image: linear-gradient(
    to left,
    rgba(0, 0, 0, 0.01),
    transparent 48px
  );

  > * {
    margin-bottom: 0;
    margin-left: 16px;
  }

  label {
    margin-bottom: 0;
    white-space: nowrap;
  }

  @media (min-width: 1030px) {
    > div {
      display: block;
    }
  }
`,zi=B.default.div`
  grid-area: left;
  justify-self: start;
  display: flex;
  align-items: center;
`,Ai=B.default.div`
  grid-area: right;
  justify-self: end;
  display: flex;
  align-items: center;
`,Bi=B.default.div`
  display: flex;
  align-items: center;

  > * {
    margin-bottom: 0;
    margin-left: 1rem;
  }

  label {
    margin-bottom: 0;
  }
`,Ci=B.default.div`
  display: flex;
  align-items: center;

  ${Q} {
    margin-left: 12px;
  }
`,Di=B.default.div`
  position: relative;
  opacity: 0;
  display: block;
  width: 100%;
  height: var(--tina-toolbar-height);
`,Ei=B.default.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 8px;
  margin-top: -1px;
  background-color: #3cad3a;
  border: 1px solid #249a21;
  margin-right: 5px;
  opacity: 0.5;

  ${a=>a.warning&&e.css`
      background-color: #e9d050;
      border: 1px solid #d3ba38;
      opacity: 1;
    `};
`,Fi=B.default.p`
  font-size: var(--tina-font-size-3);
  display: flex;
  align-items: center;
  color: var(--tina-color-grey-6);
  padding-right: 4px;
  line-height: 1.35;
  margin: 0;
`,Gi=B.default(Q)`
  position: relative;
  margin-left: -12px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;
  padding: 0 15px;
  outline: none;

  svg {
    position: relative;
    transition: fill 85ms ease-out;
    fill: var(--tina-color-grey-6);
    margin-left: -4px;
    width: 28px;
    height: auto;
    path {
      position: relative;
      transition: transform var(--tina-timing-long) ease-out,
        opacity var(--tina-timing-long) ease-out,
        fill var(--tina-timing-short) ease-out;
      transform-origin: 50% 50%;
    }
  }
  &:hover {
    svg {
      fill: var(--tina-color-grey-7);
    }
  }
  ${a=>a.open&&e.css`
      svg {
        path:first-child {
          /* Top bar */
          transform: rotate(45deg) translate3d(0, 0.45rem, 0);
        }
        path:nth-child(2) {
          /* Middle bar */
          transform: translate3d(-100%, 0, 0);
          opacity: 0;
        }
        path:last-child {
          /* Bottom Bar */
          transform: rotate(-45deg) translate3d(0, -0.45rem, 0);
        }
      }
    `};
`,Hi=B.default.div`
  margin: 0 calc(var(--tina-padding-big) * -1) 32px
    calc(var(--tina-padding-big) * -1);
  display: block;
`,Ii=B.default.div`
  color: var(--tina-color-grey-1);
  font-size: var(--tina-font-size-4);
  font-weight: var(--tina-font-weight-regular);
  padding: var(--tina-padding-big) var(--tina-padding-big)
    var(--tina-padding-big) 64px;
  position: relative;
  cursor: pointer;
  transition: all var(--tina-timing-short) ease-out;
  overflow: hidden;
  &:after {
    content: '';
    position: absolute;
    top: 8px;
    bottom: 8px;
    left: 8px;
    right: 8px;
    border-radius: var(--tina-radius-big);
    background-color: var(--tina-color-grey-9);
    z-index: -1;
    transition: all 150ms ease;
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
  &:hover {
    color: var(--tina-color-primary-light);
    &:after {
      transform: translate3d(0, 0, 0);
      transition: transform var(--tina-timing-short) ease-out, opacity 0ms;
      opacity: 1;
    }
    svg {
      fill: var(--tina-color-primary);
    }
    & ~ * {
      &:after {
        transform: translate3d(0, -100%, 0);
      }
    }
  }
  svg {
    position: absolute;
    left: var(--tina-padding-big);
    top: 50%;
    transform: translate3d(0, -50%, 0);
    width: 36px;
    height: auto;
    fill: var(--tina-color-grey-4);
    transition: all var(--tina-timing-short) ease-out;
  }
`,Ji=B.default.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: var(--tina-padding-big);
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,Ki=B.default.div`
  all: unset;
  ${O}
  box-sizing: border-box;
  background: var(--tina-color-grey-8);
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: var(--tina-sidebar-width);
  transform: translate3d(${a=>a.visible?"0":"-100%"}, 0, 0);
  overflow: hidden;
  padding: var(--tina-padding-big);
  transition: all var(--tina-timing-long) ease-out;
  z-index: var(--tina-z-index-2);

  ul,
  li {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`,Li=B.default(a=>{var b=m(a,[]);return z.createElement("div",k({},b),z.createElement(ha,null))})`
  position: absolute;
  z-index: -1;
  bottom: var(--tina-padding-big);
  left: var(--tina-padding-big);
  svg {
    width: 128px;
    height: 128px;
    margin: -4px -20px;
    fill: var(--tina-color-grey-9);
  }
`,Mi={__type:"field",name:"markdown",Component:Pi("Markdown","https://github.com/tinacms/tinacms/pull/1134")},Ni={__type:"field",name:"html",Component:Pi("HTML","https://github.com/tinacms/tinacms/pull/1134")},Oi=B.default.p`
  white-space: normal;
  font-size: var(--tina-font-size-2);
  margin: 8px 0 0 0;

  a {
    color: var(--tina-color-primary);
  }
`;function Pi(a,b){return c=>A.default.createElement(Le,{name:c.input.name,label:`Deprecated: ${a} Field`},A.default.createElement(Oi,null,"In order to help improve bundle sizes the ",a," Field has been removed from the set of default fields."),A.default.createElement(Oi,null,"See the docs to learn how to"," ",A.default.createElement("a",{href:"https://tinacms.org/docs/cms/plugins#adding-plugins",target:"_blank",rel:"noreferrer noopener"},"add the ",a," plugin")," ","to your CMS."),A.default.createElement(Oi,null,"Visit the"," ",A.default.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},"Pull Request")," ","to learn more about why this change was made."))}function Qi({navigateNext:a,navigatePrev:b,hasNext:c,hasPrev:d}){return A.default.createElement(Ri,null,A.default.createElement(Q,{small:!0,disabled:!d,onClick:b},"\xab Previous"),A.default.createElement(Q,{small:!0,disabled:!c,onClick:a},"Next \xbb"))}const Ri=B.default.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: var(--tina-padding-small);
`;function Si({item:a,onClick:b,onSelect:c,onDelete:d}){return A.default.createElement(Ui,{onClick:()=>b(a),type:a.type},A.default.createElement(Vi,null,a.previewSrc?A.default.createElement("img",{src:a.previewSrc,alt:a.filename}):A.default.createElement(Ti,{type:a.type})),A.default.createElement(Wi,null,a.filename),A.default.createElement(Xi,null,c&&"file"===a.type&&A.default.createElement(Q,{small:!0,onClick:()=>c(a)},"Insert"),d&&"file"===a.type&&A.default.createElement(R,{small:!0,onClick:()=>d(a)},A.default.createElement(ia,null))))}function Ti({type:a}){return"dir"===a?A.default.createElement(qa,null):A.default.createElement(ra,null)}const Ui=B.default.li`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: white;
  filter: drop-shadow(0 0 0 transparent);
  transition: filter 300ms ease;
  border: 1px solid var(--tina-color-grey-2);
  margin-bottom: var(--tina-padding-small);
  border-radius: var(--tina-radius-small);
  min-height: 90px;

  > :first-child {
    margin-right: var(--tina-padding-small);
  }

  &:hover {
    filter: drop-shadow(var(--tina-shadow-small));
    ${a=>a.type==="dir"&&e.css`
        cursor: pointer;
      `}
  }

  @media screen and (min-width: 720px) {
    padding: 1.125rem;

    > :first-child {
      margin-right: var(--tina-padding-big);
    }
  }
`,Vi=B.default.div`
  width: 56px;
  height: 56px;
  border-radius: var(--tina-radius-small);
  overflow: hidden;
  display: flex;
  justify-content: center;
  flex-shrink: 0;

  > img {
    object-fit: cover;
    width: 100%;
    min-height: 100%;
    object-position: center;
  }

  > svg {
    width: 47%;
    height: 100%;
    fill: var(--tina-color-grey-4);
  }
`,Wi=B.default.span`
  flex-grow: 1;
  font-size: var(--tina-font-size-2);
  overflow: hidden;
  width: 100%;
  overflow-wrap: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Xi=B.default.span`
  display: flex;
  > * {
    margin-left: var(--tina-padding-small);
  }
`;function Yi({directory:a="",setDirectory:b}){a=a.replace(/^\/|\/$/g,"");let c=G.default.dirname(a);return"."===c&&(c=""),A.default.createElement(Zi,{showArrow:""!==a},A.default.createElement("span",{onClick:()=>b(c)},A.default.createElement(ca,null)),A.default.createElement("button",{onClick:()=>b("")},"Media"),a&&a.split("/").map((a,c,d)=>{const e=d.slice(0,c+1).join("/");return A.default.createElement("button",{key:e,onClick:()=>{b(e)}},a)}))}const Zi=B.default.div`
  width: 100%;
  display: flex;
  align-items: center;
  color: var(--tina-color-grey-4);
  font-size: var(--tina-font-size-3);
  margin-left: -12px;

  button {
    text-transform: capitalize;
    transition: color 180ms ease;
    border: 0;
    background-color: transparent;
    font-size: inherit;
  }

  > span {
    display: flex;
  }

  svg {
    width: 20px;
    height: 20px;
    fill: var(--tina-color-grey-4);
    transform: translateX(6px);
    opacity: 0;
    transition: opacity 200ms ease, transform 300ms ease-out;
    align-self: center;
  }

  ${a=>a.showArrow&&e.css`
      svg {
        opacity: 1;
        transform: translateX(0px);
        transition: opacity 180ms ease, transform 300ms ease-in;
      }
    `}

  svg:hover {
    cursor: pointer;
    fill: var(--tina-color-grey-9);
  }

  button:hover {
    color: var(--tina-color-grey-9);
  }

  > :not(:last-child) {
    display: none;
  }

  > :first-child {
    display: inline;
  }

  *:not(span)::after {
    content: '/';
    padding-left: 8px;
  }

  > *:not(:first-of-type) {
    padding-left: 8px;
  }

  @media (min-width: 720px) {
    font-size: var(--tina-font-size-2);

    svg {
      margin-left: -8px;
    }

    ${a=>a.showArrow&&e.css`
        svg {
          transform: translateX(-4px);
        }
      `}

    > :not(:last-child) {
      display: flex;
    }

    > *:not(:first-of-type) {
      padding-left: 8px;
    }
  }
`;function $i(){const a=fe(),[c,d]=b.useState();if(b.useEffect(()=>a.events.subscribe("media:open",a=>{var b=a,{type:c}=b;d(m(b,["type"]))}),[]),!c)return null;const e=()=>d(void 0);return A.default.createElement(T,null,A.default.createElement(ya,null,A.default.createElement(ua,{close:e},"Media Manager"),A.default.createElement(V,null,A.default.createElement(aj,l(k({},c),{close:e})))))}const _i=new tb({title:"Error fetching media",message:"Something went wrong while requesting the resource.",docsLink:"https://tina.io/docs/media/#media-store"});function aj(a){var c=a,{allowDelete:d,onSelect:e,close:f}=c,g=m(c,["allowDelete","onSelect","close"]);const h=fe(),[i,j]=b.useState(()=>h.media.isConfigured?"loading":"not-configured"),[n,o]=b.useState(_i),[q,r]=b.useState(g.directory),[s,t]=b.useState({items:[],nextOffset:void 0}),[u,v]=b.useState([]),w=u[u.length-1],x=()=>v([]),y=u.length>0,z=!!s.nextOffset;b.useEffect(()=>{if(h.media.isConfigured)return a(),h.events.subscribe(["media:upload:success","media:delete:success","media:pageSize"],a);function a(){j("loading"),h.media.list({offset:w,limit:h.media.pageSize,directory:q}).then(a=>{t(a),j("loaded")}).catch(a=>{console.error(a),"MediaListError"===a.ERR_TYPE?o(a):o(_i),j("error")})}},[w,q,h.media.isConfigured]);const B=a=>{"dir"===a.type&&(r(G.default.join(a.directory,a.filename)),x())};let C;d&&(C=a=>{confirm("Are you sure you want to delete this file?")&&h.media.delete(a)});let D;e&&(D=a=>{e(a),f&&f()});const[E,F]=b.useState(!1),{getRootProps:H,getInputProps:I,isDragActive:J}=p.useDropzone({accept:h.media.accept||"image/*",multiple:!0,onDrop:async a=>{try{F(!0),await h.media.persist(a.map(a=>({directory:q||"/",file:a})))}catch{}F(!1)}}),K=H(),{onClick:L}=K,M=m(K,["onClick"]);if(b.useEffect(function(){const a=null==document?void 0:document.body;return a.style.overflow="hidden",()=>{a.style.overflow="auto"}},[]),"loading"===i||E)return A.default.createElement(cj,null);if("not-configured"===i)return A.default.createElement(hj,{title:"No Media Store Configured",message:"To use the media manager, you need to configure a Media Store.",docsLink:"https://tina.io/docs/media-cloudinary/"});if("error"===i){const{title:N,message:O,docsLink:P}=n;return A.default.createElement(hj,{title:N,message:O,docsLink:P})}return A.default.createElement(dj,null,A.default.createElement(ej,null,A.default.createElement(Yi,{directory:q,setDirectory:r}),A.default.createElement(bj,{onClick:L,uploading:E})),A.default.createElement(fj,l(k({},M),{dragActive:J}),A.default.createElement("input",k({},I())),"loaded"===i&&0===s.items.length&&A.default.createElement(gj,null),s.items.map(a=>A.default.createElement(Si,{key:a.id,item:a,onClick:B,onSelect:D,onDelete:C}))),A.default.createElement(Qi,{currentOffset:w,hasNext:z,navigateNext:()=>{s.nextOffset&&v([...u,s.nextOffset])},hasPrev:y,navigatePrev:()=>{const a=u.slice(0,u.length-1);v(a)}}))}const bj=({onClick:a,uploading:b})=>A.default.createElement(Q,{style:{minWidth:"5.3rem"},primary:!0,busy:b,onClick:a},b?A.default.createElement(ed,null):"Upload"),cj=B.default(a=>A.default.createElement("div",k({},a),A.default.createElement(ed,{color:"var(--tina-color-primary)"})))`
  width: 100%;
  height: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`,dj=B.default.div`
  height: 100%;
  overflow-y: auto;
  color: var(--tina-color-grey-9);
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--tina-color-grey-1);
  padding: 0 1rem var(--tina-padding-big) 1rem;

  ::-webkit-scrollbar {
    width: 0;
  }

  *:active,
  *:focus {
    outline: none;
  }

  @media (min-width: 720px) {
    padding: 0 1.125rem var(--tina-padding-big) 1.125rem;
  }
`,ej=B.default.div`
  display: flex;
  align-items: center;
  background: var(--tina-color-grey-1);
  padding: var(--tina-padding-big) 0.75rem;
  border-radius: var(--tina-radius-small);
  position: sticky;
  top: 0;
  z-index: 1;

  @media (min-width: 720px) {
    padding: var(--tina-padding-big) 1rem var(--tina-padding-big) 1.125rem;
  }
`,fj=B.default.ul`
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem 0;
  margin: 0;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  ${a=>a.dragActive&&e.css`
      border: 2px solid var(--tina-color-primary);
      border-radius: var(--tina-radius-small);
    `}
`,gj=B.default(a=>A.default.createElement("div",k({},a),"Drag and Drop assets here"))`
  font-size: 1.5rem;
  opacity: 50%;
  padding: 3rem;
  text-align: center;
`,hj=B.default(a=>{var b=a,{title:c,message:d,docsLink:e}=b,f=m(b,["title","message","docsLink"]);return A.default.createElement("div",k({},f),A.default.createElement("h2",null,c),A.default.createElement("div",null,d),A.default.createElement("a",{style:{marginTop:"1rem"},href:e,target:"_blank",rel:"noreferrer noopener"},"Learn More"))})`
  height: 75%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  a {
    color: black;
    text-decoration: underline;
    font-weight: bold;
  }
`,ij=fc({name:"Media Manager",Component:aj,Icon:fa,layout:"fullscreen",props:{allowDelete:!0}});class jj extends Lb{constructor(kj={}){var lj=kj,{sidebar:mj,toolbar:nj,alerts:oj={}}=lj;if(super(m(lj,["sidebar","toolbar","alerts"])),this.alerts.setMap(k({"media:upload:failure":()=>({level:"error",message:"Failed to upload file."}),"media:delete:failure":()=>({level:"error",message:"Failed to delete file."})},oj)),mj){const pj="object"==typeof mj?mj:void 0;this.sidebar=new class{constructor(qj,rj={}){var sj,tj;this.events=qj,this._isOpen=!1,this.position="displace",this.buttons={save:"Save",reset:"Reset"},this.position=rj.position||"displace",this.placeholder=rj.placeholder||(()=>z.createElement(wh,null,z.createElement(uh,null,"🔎"),z.createElement("p",null,"Tina didn't find ",z.createElement("br",null),"any queries to ",z.createElement("br",null),"generate forms for."),z.createElement("p",null,z.createElement(xh,{href:"https://tina.io/docs/tinacms-context/",target:"_blank"},z.createElement(uh,null,"📖")," Contextual Editing")))),(null==(sj=rj.buttons)?void 0:sj.save)&&(this.buttons.save=rj.buttons.save),(null==(tj=rj.buttons)?void 0:tj.reset)&&(this.buttons.reset=rj.buttons.reset)}get isOpen(){return this._isOpen}set isOpen(uj){this._isOpen!==uj&&(this._isOpen=uj,uj?this.events.dispatch({type:"sidebar:opened"}):this.events.dispatch({type:"sidebar:closed"}))}subscribe(vj){const wj=this.events.subscribe("sidebar",vj);return()=>wj()}}(this.events,pj)}if(nj){const xj="object"==typeof nj?nj:void 0;this.toolbar=new class{constructor(yj={}){var zj,Aj;this.buttons={save:"Save",reset:"Reset"},(null==(zj=yj.buttons)?void 0:zj.save)&&(this.buttons.save=yj.buttons.save),(null==(Aj=yj.buttons)?void 0:Aj.reset)&&(this.buttons.reset=yj.buttons.reset)}}(xj)}[_g,Zg,Nf,vf,Tg,bh,Vg,Rg,Xg,Je,cf,Kf,tf,gh,lh,Mi,Ni,nh,ph].forEach(a=>{this.fields.find(a.name)||this.fields.add(a)}),this.plugins.add(ij)}get alerts(){return this._alerts||(this._alerts=new Mb(this.events)),this._alerts}registerApi(Bj,Cj){Cj.alerts&&this.alerts.setMap(Cj.alerts),super.registerApi(Bj,Cj)}get forms(){return this.plugins.findOrCreateMap("form")}get fields(){return this.plugins.findOrCreateMap("field")}get screens(){return this.plugins.findOrCreateMap("screen")}}const Dj=({cms:a,children:b})=>{if(!(a instanceof jj))throw new Error("The `cms` prop must be an instance of `TinaCMS`.");return z.createElement(hc.Provider,{value:a},b)};function Ej({alerts:a}){return(Nc(a),a.all.length)?A.default.createElement(Fj,null,a.all.map((b,c)=>A.default.createElement(Hj,{key:b.id,index:c,level:b.level,onClick:()=>{a.dismiss(b)}},"info"===b.level&&A.default.createElement(ma,null),"success"===b.level&&A.default.createElement(la,null),"warn"===b.level&&A.default.createElement(na,null),"error"===b.level&&A.default.createElement(oa,null),A.default.createElement("p",null,b.message),A.default.createElement(Ij,null)))):null}const Fj=B.default.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999999;
  pointer-events: none;
`,Gj=e.keyframes`
  0% {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Hj=B.default.div`
  text-align: center;
  border: 0;
  border-radius: var(--tina-radius-small);
  box-shadow: var(--tina-shadow-small);
  background-color: var(--tina-color-grey-1);
  border: 1px solid var(--tina-color-grey-2);
  color: var(--tina-color-grey-9);
  fill: var(--tina-color-primary);
  font-weight: var(--tina-font-weight-regular);
  pointer-events: all;
  cursor: pointer;
  font-size: var(--tina-font-size-2);
  padding: 8px 4px 8px 12px;
  transition: all var(--tina-timing-short) ease-out;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  min-width: 350px;
  max-width: 100%;

  animation-name: ${Gj};
  animation-timing-function: ease-out;
  animation-iteration-count: 1;
  animation-fill-mode: both;
  animation-duration: 150ms;

  p {
    margin: 0;
    flex: 1 0 auto;
    text-align: left;
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: 8px;
    flex: 0 0 auto;
  }

  ${a=>a.level==="info"&&e.css`
      fill: var(--tina-color-primary);
      border-left: 6px solid var(--tina-color-primary);
    `};

  ${a=>a.level==="success"&&e.css`
      fill: var(--tina-color-success);
      border-left: 6px solid var(--tina-color-success);
    `};

  ${a=>a.level==="warn"&&e.css`
      fill: var(--tina-color-warning-dark);
      border-left: 6px solid var(--tina-color-warning);
    `};

  ${a=>a.level==="error"&&e.css`
      fill: var(--tina-color-error);
      border-left: 6px solid var(--tina-color-error);
    `};
`,Ij=B.default(a=>{var b=m(a,[]);return A.default.createElement("button",k({},b),A.default.createElement(X,null))})`
  border: none;
  background: transparent;
  padding: 0;
  margin-left: 14px;
  outline: none;
  fill: var(--tina-color-grey-5);
  display: flex;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
    flex: 0 0 auto;
  }
`,Jj=z.createContext(-1),Kj=({children:a})=>{const b=z.useRef(null),[c,d]=z.useState(0);return z.useEffect(()=>{if(!b)return;const a=new MutationObserver(()=>d(a=>a+1));return a.observe(b.current,{childList:!0,subtree:!0,characterData:!0}),()=>a.disconnect()},[]),z.createElement(Jj.Provider,{value:c},z.createElement("div",{ref:b},a))},Lj=a=>{const b=z.useContext(Jj),[c,d]=z.useState(null);return z.useEffect(()=>{const b=document.querySelector(`[data-tinafield="${a}"]`);d(b)},[b,a]),c},Mj=B.default.div`
  position: fixed;
  z-index: var(--tina-z-index-3);
  left: 0;
  padding: 0.5rem 0;
  margin-left: var(--tina-sidebar-width);
  width: calc(100% - var(--tina-sidebar-width));
  text-align: center;
  top: ${a=>a.position==="top"?0:"auto"};
  bottom: ${a=>a.position==="top"?"auto":0};
`,Nj=B.default.div`
  display: inline-block;
  fill: white;
  background-color: var(--tina-color-primary);
  border-radius: 50%;
  box-shadow: 0 0 10px -5px;
`,Oj=()=>z.createElement(Mj,{position:"top"},z.createElement(Nj,null,z.createElement(aa,null))),Pj=()=>z.createElement(Mj,{position:"bottom"},z.createElement(Nj,null,z.createElement(_,null))),Qj=()=>{const{subscribe:a}=Hc("field:focus");z.useEffect(()=>a(({fieldName:a})=>{const b=document.querySelector(`[data-tinafield="${a}"]`);if(!b)return;const{top:c,height:d}=b.getBoundingClientRect(),e=c+window.scrollY,f=c+d+window.scrollY,g=window.scrollY,h=window.innerHeight+window.scrollY;d<window.innerHeight?f>h?window.scrollTo({top:f-window.innerHeight,behavior:"smooth"}):e<g&&window.scrollTo({top:e,behavior:"smooth"}):f<h?window.scrollTo({top:f-window.innerHeight,behavior:"smooth"}):e>g&&window.scrollTo({top:e,behavior:"smooth"})}))},Rj=()=>{const[a,b]=z.useState(null),[c,d]=z.useState(!1),[e,f]=z.useState(!1),g=Lj(a);z.useEffect(()=>{let a;return g?(d(!0),f(g.getBoundingClientRect())):a=setTimeout(()=>{d(!1)},150),()=>{clearTimeout(a)}},[g]);const[,h]=z.useState(0),i=()=>h(a=>a+1);z.useEffect(()=>(window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}),[]);const{subscribe:j}=Hc("field:hover");if(z.useEffect(()=>j(({fieldName:a})=>{b(a)})),Qj(),!c)return null;const k=e.top+window.scrollY,l=e.top+e.height+window.scrollY,m=window.scrollY,n=window.innerHeight+window.scrollY;return k>n?z.createElement(Pj,null):l<m?z.createElement(Oj,null):z.createElement("div",{style:{position:"absolute",zIndex:"var(--tina-z-index-3)",top:e.top+window.scrollY,left:e.left+window.scrollX,width:e.width,height:e.height,outline:"2px dashed var(--tina-color-indicator)",borderRadius:"var(--tina-radius-small)",transition:c?g?"opacity 300ms ease-out":"opacity 150ms ease-in":"none",opacity:g&&c?.8:0}})},Sj=({children:a,position:b,styled:c=!0})=>{const d=fe();return z.createElement(Kj,null,z.createElement(H,null,z.createElement(Ej,{alerts:d.alerts}),d.enabled&&c&&z.createElement(L,null),d.enabled&&d.toolbar&&z.createElement(ui,null),z.createElement($i,null),d.sidebar?z.createElement(Xh,{position:b,sidebar:d.sidebar},a):a,z.createElement(Rj,null)))},Tj=({cms:a,children:b,position:c,styled:d=!0})=>z.createElement(Dj,{cms:a},z.createElement(Sj,{position:c,styled:d},b)),Uj=z.createContext({currentBranch:null,setCurrentBranch:a=>{console.warn("BranchContext not initialized")}}),Vj=()=>{const a=z.useContext(Uj),{dispatch:b}=Hc("branch:change");return z.useEffect(()=>{b({branchName:a.currentBranch})},[a.currentBranch]),a},Wj=({listBranches:a,createBranch:b})=>{const[c,d]=z.useState("loading"),[e,f]=z.useState([]),{currentBranch:g,setCurrentBranch:h}=Vj(),i=z.useCallback(a=>{d("loading"),b({branchName:a,baseBranch:g}).then(async a=>{h(a),await j()})},[]),j=z.useCallback(async()=>{d("loading"),await a().then(a=>{f(a),d("ready")}).catch(()=>d("error"))},[]);return z.useEffect(()=>{j()},[]),z.createElement(z.Fragment,null,"loading"===c?z.createElement("div",{style:{margin:"2rem auto",textAlign:"center"}},z.createElement(ed,{color:"var(--tina-color-primary)"})):z.createElement(z.Fragment,null,"ready"===c?z.createElement(Yj,null,z.createElement(Xj,{currentBranch:g,branchList:e,onCreateBranch:a=>{i(a)},onChange:a=>{h(a)}})):z.createElement("div",{style:{margin:"2rem auto",textAlign:"center"}},"An error occurred while retrieving the branch list. ",z.createElement("br",null),z.createElement(Q,{onClick:j},"Try again ⟳"))))},Xj=({branchList:a,currentBranch:b,onCreateBranch:c,onChange:d})=>{const[e,f]=z.useState(""),g=a.find(a=>a.name===e),h=a.filter(a=>!e||a.name.includes(e));return z.createElement(Zj,null,z.createElement("input",{placeholder:"Type the name of a branch to filter or create",value:e,style:{padding:"0.5rem"},onChange:a=>f(a.target.value)}),!g&&e?z.createElement(z.Fragment,null,z.createElement(ak,null),z.createElement(Q,{small:!0,primary:!0,onClick:()=>c(e)},"Create New Branch `",e,"`...")):"",h.length>0&&z.createElement(z.Fragment,null,z.createElement(ak,null),z.createElement(_j,null,h.map(a=>{const c=a.name===b;return z.createElement($j,{key:a,onClick:()=>d(a.name),style:c?{opacity:.6,pointerEvents:"none",fontStyle:"italic"}:{}},a.name,c&&"(current)")}))))},Yj=B.default.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`,Zj=B.default.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`,$j=B.default.div`
  cursor: pointer;
  &:hover {
    background-color: aquamarine;
  }
`,_j=B.default.div`
  max-height: 70vh;
  overflow: auto;
  white-space: nowrap;
  background-color: #fff;
  padding: 0.5rem;
  box-shadow: inset 0px 0px 5px 0px rgb(0 0 0 / 20%);
`,ak=B.default.div`
  height: 0;
  width: 100%;
  margin: 0.5rem 0;
`;a.ActionButton=qd,a.AddIcon=W,a.AlertIcon=la,a.Alerts=Mb,a.AlignCenter=()=>z.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M9.125 24H22.875V26H9.125V24ZM5 18H27V20H5V18ZM5 6H27V8H5V6ZM9.125 12H22.875V14H9.125V12Z",fill:"inherit"})),a.AlignLeft=()=>z.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M5 24H20.125V26H5V24ZM5 18H27V20H5V18ZM5 6H27V8H5V6ZM5 12H20.125V14H5V12Z",fill:"inherit"})),a.AlignRight=()=>z.createElement("svg",{viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M11.875 24H27V26H11.875V24ZM5 18H27V20H5V18ZM5 6H27V8H5V6ZM11.875 12H27V14H11.875V12Z",fill:"inherit"})),a.BaseTextField=Tc,a.BlocksField=sf,a.BlocksFieldPlugin=tf,a.BoldIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M20.8 14.3867C22.0933 13.4933 23 12.0267 23 10.6667C23 7.65334 20.6667 5.33334 17.6667 5.33334H9.33333V24H18.72C21.5067 24 23.6667 21.7333 23.6667 18.9467C23.6667 16.92 22.52 15.1867 20.8 14.3867V14.3867ZM13.3333 8.66667H17.3333C18.44 8.66667 19.3333 9.56 19.3333 10.6667C19.3333 11.7733 18.44 12.6667 17.3333 12.6667H13.3333V8.66667ZM18 20.6667H13.3333V16.6667H18C19.1067 16.6667 20 17.56 20 18.6667C20 19.7733 19.1067 20.6667 18 20.6667Z"})),a.BranchDataProvider=({currentBranch:a,setCurrentBranch:b,children:c})=>z.createElement(Uj.Provider,{value:{currentBranch:a,setCurrentBranch:b}},c),a.BranchSwitcher=Wj,a.BranchSwitcherPlugin=class{constructor(bk){this.__type="screen",this.Icon=pa,this.name="Select Branch",this.layout="popup",this.Component=()=>z.createElement(Wj,{listBranches:this.listBranches,createBranch:this.createBranch}),this.listBranches=bk.listBranches,this.createBranch=bk.createBranch}},a.Button=Q,a.CMSContext=hc,a.CheckboxGroup=_d,a.CheckboxGroupField=mh,a.CheckboxGroupFieldPlugin=nh,a.ChevronDownIcon=_,a.ChevronLeftIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M21 7.208L19.7346 6L10.5227 14.7939C9.82527 15.4597 9.82626 16.5412 10.5227 17.2061L19.7346 26L21 24.792L11.7901 16L21 7.208Z"})),a.ChevronRightIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M11 24.792L12.2654 26L21.4773 17.2061C22.1747 16.5403 22.1737 15.4588 21.4773 14.7939L12.2654 6L11 7.208L20.2099 16L11 24.792Z"})),a.ChevronUpIcon=aa,a.Circle=sa,a.CircleCheck=ta,a.CloseIcon=X,a.CodeIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M12.5333 22.1333L6.40001 16L12.5333 9.86667L10.6667 8L2.66667 16L10.6667 24L12.5333 22.1333ZM19.4667 22.1333L25.6 16L19.4667 9.86667L21.3333 8L29.3333 16L21.3333 24L19.4667 22.1333V22.1333Z"})),a.ColorField=uf,a.ColorFieldPlugin=vf,a.ColorPicker=Kd,a.Cover=Fd,a.DateField=ih,a.DateFieldPlugin=lh,a.Dismissible=Vc,a.DragIcon=ba,a.DuplicateIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M24.95,25.85H13.01c-0.5,0-0.9-0.4-0.9-0.9V13.01c0-0.5,0.4-0.9,0.9-0.9h11.94c0.5,0,0.9,0.4,0.9,0.9v11.94\n      C25.85,25.45,25.45,25.85,24.95,25.85z M13.91,24.05h10.14V13.91H13.91V24.05z"}),z.createElement("path",{d:"M9.93,19.89H7.05c-0.5,0-0.9-0.4-0.9-0.9V7.05c0-0.5,0.4-0.9,0.9-0.9h11.94c0.5,0,0.9,0.4,0.9,0.9v2.89h-1.8V7.95H7.95\n      v10.14h1.99V19.89z"})),a.ERROR_MISSING_CMS=gc,a.EditIcon=$,a.EllipsisVerticalIcon=Y,a.ErrorIcon=oa,a.EventBus=Na,a.ExitIcon=ea,a.FieldDescription=Oe,a.FieldLabel=Ne,a.FieldMeta=Le,a.FieldWrapper=Me,a.FieldsBuilder=Zc,a.FieldsGroup=$c,a.File=ra,a.Folder=qa,a.FontLoader=K,a.Form=jc,a.FormActionMenu=nd,a.FormBuilder=sd,a.FormLegacy=bd,a.FormMetaPlugin=class{constructor(ck){this.__type="form:meta",this.name=ck.name,this.Component=ck.Component}},a.FormPortalProvider=jd,a.FormWrapper=ud,a.FullscreenFormBuilder=({form:a,label:b})=>{const[c,d]=z.useState(0);z.useEffect(()=>{d(a=>a+1)},[a]);const e=a.finalForm,f=z.useCallback(a=>{if(!a.destination||!e)return;const b=a.type;e.mutators.move(b,a.source.index,a.destination.index)},[a]);return z.createElement(H,null,z.createElement(j.Form,{form:e,key:`${c}: ${a.id}`,onSubmit:a.onSubmit},({handleSubmit:c,pristine:d,invalid:g,submitting:h})=>z.createElement(o.DragDropContext,{onDragEnd:f},z.createElement("div",{className:"w-full h-screen flex flex-col items-center"},z.createElement("div",{className:"px-6 py-4 w-full bg-white border-b border-gray-150 shadow-sm sticky flex flex-wrap gap-x-6 gap-y-3 justify-between items-center"},b&&z.createElement("h4",{className:"font-bold text-lg opacity-80"},b),z.createElement("div",{className:"flex flex-1 items-center justify-end"},z.createElement(td,{pristine:d}),a.reset&&z.createElement(kd,{pristine:d,reset:async()=>{e.reset(),await a.reset()}},a.buttons.reset),z.createElement(Q,{onClick:()=>c(),disabled:d||h||g,busy:h,primary:!0,margin:!0},h&&z.createElement(ed,null),!h&&a.buttons.save),a.actions.length>0&&z.createElement(nd,{form:a,actions:a.actions}))),z.createElement(jd,null,z.createElement(ud,{padded:!0},a&&a.fields.length?z.createElement(Zc,{form:a,fields:a.fields,padding:!1}):z.createElement(rd,null)))))))},a.FullscreenModal=ya,a.GlobalFormPlugin=qh,a.GlobalStyles=N,a.Group=Ce,a.GroupField=function(a){return z.createElement("div",null,"Subfield: ",a.field.label||a.field.name)},a.GroupFieldPlugin=Je,a.GroupLabel=Te,a.GroupListField=bf,a.GroupListFieldPlugin=cf,a.GroupListHeader=Ue,a.GroupListMeta=Ve,a.GroupPanel=Ie,a.HamburgerIcon=Z,a.HeadingIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M12 5.33334V9.33334H18.6667V25.3333H22.6667V9.33334H29.3333V5.33334H12ZM4 16H8V25.3333H12V16H16V12H4V16Z"})),a.IconButton=R,a.ImageField=Mf,a.ImageFieldPlugin=Nf,a.ImageUpload=le,a.InfoIcon=ma,a.Input=Sc,a.InputCss=Rc,a.ItalicIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M13.3333 5.33334V9.33334H16.28L11.72 20H8V24H18.6667V20H15.72L20.28 9.33334H24V5.33334H13.3333Z"})),a.LeftArrowIcon=ca,a.LinkIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M5.2 16C5.2 13.72 7.05333 11.8667 9.33333 11.8667H14.6667V9.33334H9.33333C5.65333 9.33334 2.66666 12.32 2.66666 16C2.66666 19.68 5.65333 22.6667 9.33333 22.6667H14.6667V20.1333H9.33333C7.05333 20.1333 5.2 18.28 5.2 16ZM10.6667 17.3333H21.3333V14.6667H10.6667V17.3333ZM22.6667 9.33334H17.3333V11.8667H22.6667C24.9467 11.8667 26.8 13.72 26.8 16C26.8 18.28 24.9467 20.1333 22.6667 20.1333H17.3333V22.6667H22.6667C26.3467 22.6667 29.3333 19.68 29.3333 16C29.3333 12.32 26.3467 9.33334 22.6667 9.33334Z"})),a.ListField=Jf,a.ListFieldPlugin=Kf,a.LoadingDots=ed,a.LockIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M25 16.5C25 15.3419 23.9909 14.4 22.75 14.4H21.625V10.25C21.625 7.35515 19.1016 5 16 5C12.8984 5 10.375 7.35515 10.375 10.25V14.4H9.25C8.00912 14.4 7 15.3419 7 16.5V23.9C7 25.0581 8.00912 26 9.25 26H22.75C23.9909 26 25 25.0581 25 23.9V16.5ZM12.625 10.25C12.625 8.5133 14.1392 7.1 16 7.1C17.8608 7.1 19.375 8.5133 19.375 10.25V14.4H12.625V10.25Z",fill:"inherit"})),a.MarkdownIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M28.0035 7H4.01374C2.91056 7 2 7.988 2 9.185V23.796C2 25.012 2.91056 26 4.01374 26H27.986C29.1067 26 29.9998 25.012 29.9998 23.815V9.185C30.0173 7.988 29.1067 7 28.0035 7ZM17.7597 22.2H14.2576V16.5L11.6309 20.148L9.00432 16.5V22.2H5.50216V10.8H9.00432L11.6309 14.6L14.2576 10.8H17.7597V22.2ZM22.9954 23.15L18.6352 16.5H21.2619V10.8H24.764V16.5H27.3906L22.9954 23.15Z"})),a.MdxFieldPlugin=Rg,a.MediaIcon=fa,a.MediaListError=tb,a.MediaManager=gb,a.Modal=T,a.ModalActions=U,a.ModalBody=V,a.ModalFullscreen=za,a.ModalHeader=ua,a.ModalOverlay=S,a.ModalPopup=Ca,a.ModalProvider=H,a.NumberField=Sg,a.NumberFieldPlugin=Tg,a.NumberInput=ee,a.OrderedListIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M2.66667 22.6667H5.33333V23.3333H4V24.6667H5.33333V25.3333H2.66667V26.6667H6.66667V21.3333H2.66667V22.6667ZM4 10.6667H5.33333V5.33334H2.66667V6.66667H4V10.6667ZM2.66667 14.6667H5.06667L2.66667 17.4667V18.6667H6.66667V17.3333H4.26667L6.66667 14.5333V13.3333H2.66667V14.6667ZM9.33333 6.66667V9.33334H28V6.66667H9.33333ZM9.33333 25.3333H28V22.6667H9.33333V25.3333ZM9.33333 17.3333H28V14.6667H9.33333V17.3333Z"})),a.PanelBody=Ge,a.PanelHeader=Fe,a.Popover=Ed,a.PopupModal=Ba,a.PullRequestIcon=pa,a.QuoteIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M8.00001 22.6667H12L14.6667 17.3333V9.33334H6.66667V17.3333H10.6667L8.00001 22.6667ZM18.6667 22.6667H22.6667L25.3333 17.3333V9.33334H17.3333V17.3333H21.3333L18.6667 22.6667Z"})),a.RadioGroup=Vd,a.RadioGroupField=Wg,a.RadioGroupFieldPlugin=Xg,a.RedoIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M24.5333 14.1333C22.0667 11.9867 18.8667 10.6667 15.3333 10.6667C9.13333 10.6667 3.89333 14.7067 2.05333 20.2933L5.2 21.3333C6.6 17.08 10.6 14 15.3333 14C17.9333 14 20.3067 14.96 22.16 16.5067L17.3333 21.3333H29.3333V9.33334L24.5333 14.1333Z"})),a.Reference=ye,a.ReferenceField=oh,a.ReferenceFieldPlugin=ph,a.ReorderIcon=ja,a.ReorderRowIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M25.7605 15.3012L21.5199 11.0607L22.5806 10L26.8211 14.2406C27.5018 14.9213 27.5174 16.0233 26.8211 16.7196L22.5806 20.9602L21.5199 19.8995L25.7605 15.6589C25.8633 15.5561 25.8631 15.4039 25.7605 15.3012Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.12679 15.6988L10.3674 19.9393L9.3067 21L5.06613 16.7594C4.38543 16.0787 4.36985 14.9767 5.06613 14.2804L9.3067 10.0398L10.3674 11.1005L6.12679 15.3411C6.02398 15.4439 6.02416 15.5961 6.12679 15.6988Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.88727 14.6569L14.201 14.6569L14.201 16.1569L4.88727 16.1569L4.88727 14.6569Z"}),z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.6863 14.6569L27 14.6569L27 16.1569L17.6863 16.1569L17.6863 14.6569Z"})),a.ResetForm=kd,a.ResetIcon=ka,a.RightArrowIcon=da,a.Select=Rd,a.SelectField=Ug,a.SelectFieldPlugin=Vg,a.SettingsIcon=ga,a.StrikethroughIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.578 26a14.1 14.1 0 01-4.535-.75A12.299 12.299 0 018 22.889l2.628-3.028a13.437 13.437 0 002.83 1.722c.982.426 2.051.64 3.206.64.924 0 1.637-.158 2.137-.473.52-.333.78-.787.78-1.361v-.056c0-.117-.01-.228-.03-.333H24c-.003.952-.186 1.804-.549 2.556a5.478 5.478 0 01-1.53 1.888c-.655.5-1.435.89-2.34 1.167-.905.26-1.906.389-3.003.389zm-3.993-9H29v-3H17.265a71.646 71.646 0 01-1.843-.5c-.558-.167-1-.343-1.328-.528-.327-.185-.558-.389-.693-.61a1.905 1.905 0 01-.174-.834v-.056c0-.481.212-.88.636-1.194.443-.334 1.097-.5 1.964-.5.866 0 1.733.176 2.599.528a14.16 14.16 0 012.657 1.388l2.31-3.222a11.94 11.94 0 00-3.436-1.833C18.724 6.213 17.367 6 15.884 6c-1.04 0-1.992.139-2.859.417-.866.277-1.617.676-2.252 1.194a5.537 5.537 0 00-1.444 1.861c-.347.704-.52 1.5-.52 2.39v.055c0 .804.107 1.498.322 2.083H4v3h8.585z"})),a.StyleReset=P,a.Swatch=Bd,a.TableIcon=()=>z.createElement("svg",{viewBox:"0 0 24 24",height:"32",width:"32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M4 21h15.893c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2v-5h4v5H4zM14 7v5h-4V7h4zM8 7v5H4V7h4zm2 12v-5h4v5h-4zm6 0v-5h3.894v5H16zm3.893-7H16V7h3.893v5z"})),a.TagsField=ch,a.TagsFieldPlugin=gh,a.TextArea=Uc,a.TextField=$g,a.TextFieldPlugin=_g,a.TextareaField=Yg,a.TextareaFieldPlugin=Zg,a.Theme=L,a.Tina=Tj,a.TinaCMS=jj,a.TinaCMSProvider=Dj,a.TinaField=dd,a.TinaForm=function({form:a,children:c}){const[d,e]=b.useState(!1);return a?z.createElement(cd.Provider,{value:d},z.createElement(bd,{form:a},()=>c({isEditing:d,setIsEditing:e}))):z.createElement(cd.Provider,{value:d},c({isEditing:d,setIsEditing:e}))},a.TinaIcon=ha,a.TinaProvider=Tj,a.TinaReset=P,a.TinaUI=Sj,a.Toggle=Ld,a.ToggleField=ah,a.ToggleFieldPlugin=bh,a.TrashIcon=ia,a.UnderlineIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M16 22.6667C20.4133 22.6667 24 19.08 24 14.6667V4H20.6667V14.6667C20.6667 17.24 18.5733 19.3333 16 19.3333C13.4267 19.3333 11.3333 17.24 11.3333 14.6667V4H8.00001V14.6667C8.00001 19.08 11.5867 22.6667 16 22.6667ZM6.66667 25.3333V28H25.3333V25.3333H6.66667Z"})),a.UndoIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M16.6667 10.6667C13.1333 10.6667 9.93333 11.9867 7.46667 14.1333L2.66667 9.33334V21.3333H14.6667L9.84 16.5067C11.6933 14.96 14.0533 14 16.6667 14C21.3867 14 25.4 17.08 26.8 21.3333L29.96 20.2933C28.1067 14.7067 22.8667 10.6667 16.6667 10.6667Z"})),a.UnorderedListIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M5.33333 14C4.22667 14 3.33333 14.8933 3.33333 16C3.33333 17.1067 4.22667 18 5.33333 18C6.44 18 7.33333 17.1067 7.33333 16C7.33333 14.8933 6.44 14 5.33333 14ZM5.33333 6C4.22667 6 3.33333 6.89333 3.33333 8C3.33333 9.10667 4.22667 10 5.33333 10C6.44 10 7.33333 9.10667 7.33333 8C7.33333 6.89333 6.44 6 5.33333 6ZM5.33333 22C4.22667 22 3.33333 22.9067 3.33333 24C3.33333 25.0933 4.24 26 5.33333 26C6.42667 26 7.33333 25.0933 7.33333 24C7.33333 22.9067 6.44 22 5.33333 22ZM9.33333 25.3333H28V22.6667H9.33333V25.3333ZM9.33333 17.3333H28V14.6667H9.33333V17.3333ZM9.33333 6.66667V9.33333H28V6.66667H9.33333Z"})),a.UploadIcon=()=>z.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"inherit",xmlns:"http://www.w3.org/2000/svg"},z.createElement("path",{d:"M17.3 25.1V19.9H21.2L16 13.4L10.8 19.9H14.7V25.1H17.3Z"}),z.createElement("path",{d:"M9.5 25.1H12.1V22.5H9.5C7.3498 22.5 5.6 20.7502 5.6 18.6C5.6 16.7748 7.1587 15.0172 9.0749 14.6805L9.8302 14.5479L10.0798 13.8225C10.9937 11.1562 13.2635 9.49996 16 9.49996C19.5841 9.49996 22.5 12.4159 22.5 16V17.3H23.8C25.2339 17.3 26.4 18.4661 26.4 19.9C26.4 21.3339 25.2339 22.5 23.8 22.5H19.9V25.1H23.8C26.6678 25.1 29 22.7678 29 19.9C28.998 18.7347 28.6056 17.6036 27.8855 16.6874C27.1654 15.7713 26.1591 15.1228 25.0272 14.8456C24.4591 10.371 20.628 6.89996 16 6.89996C12.4172 6.89996 9.305 8.99426 7.8841 12.295C5.0917 13.1296 3 15.766 3 18.6C3 22.1841 5.9159 25.1 9.5 25.1Z"})),a.WarningIcon=na,a.tina_reset_styles=O,a.useBranchData=Vj,a.useCMS=fe,a.useCMSEvent=Gc,a.useDismissible=Wc,a.useForm=Ic,a.useFormPortal=id,a.useFormScreenPlugin=function(a,c,d){const e=b.useMemo(()=>{if(a)return new qh(a,c,d)},[a,c,d]);Fc(e)},a.useGlobalForm=function(a,c={}){const[d,e]=Ic(a,c),f=b.useMemo(()=>{if(e)return new qh(e)},[e]);return Fc(f),[d,e]},a.useLocalForm=function(a,b={}){const[c,d]=Ic(a,b);return Fc(d),[c,d]},a.useLocalStorage=function(a,b){const[c,d]=z.useState(b);return z.useEffect(()=>{const b=window.localStorage.getItem(a);null!=b&&d(JSON.parse(b))},[a]),[c,b=>{try{const e=b instanceof Function?b(c):b;d(e),localStorage.setItem(a,JSON.stringify(e))}catch(f){console.log(f)}}]},a.useModalContainer=J,a.usePlugin=Ec,a.usePlugins=Fc,a.usePreviewSrc=Lf,a.useScreenPlugin=function(a,c){const d=b.useMemo(()=>fc(a),c);Fc(d)},a.useSubscribable=Nc,a.useWatchFormValues=function(a,c){b.useEffect(()=>{if(!a)return;let b=!0;return a.subscribe(a=>{b?b=!1:c(a)},{values:!0})},[c,a])},a.withPlugin=Oc,a.withPlugins=Oc,a.withTina=function(a,b){return c=>{const d=z.useMemo(()=>new jj(b),[b]);return z.createElement(Tj,{cms:d},z.createElement(a,k({},c)))}},a.wrapFieldsWithMeta=Ke,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"})}}])