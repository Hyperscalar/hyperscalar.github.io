/* global CONFIG */
document.addEventListener("DOMContentLoaded",(()=>{const e="right"===CONFIG.sidebar.position;({mouse:{},init(){window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector(".sidebar-dimmer").addEventListener("click",this.clickHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",this.clickHandler.bind(this)),window.addEventListener("sidebar:show",this.showSidebar),window.addEventListener("sidebar:hide",this.hideSidebar)},mousedownHandler(e){this.mouse.X=e.pageX,this.mouse.Y=e.pageY},mouseupHandler(e){const i=e.pageX-this.mouse.X,t=e.pageY-this.mouse.Y;
// Fancybox has z-index property, but medium-zoom does not, so the sidebar will overlay the zoomed image.
(Math.hypot(i,t)<20&&e.target.matches(".main")||e.target.matches("img.medium-zoom-image"))&&this.hideSidebar()},clickHandler(){document.body.classList.contains("sidebar-active")?this.hideSidebar():this.showSidebar()},showSidebar(){document.body.classList.add("sidebar-active");const i=e?"fadeInRight":"fadeInLeft";document.querySelectorAll(".sidebar .animated").forEach(((e,t)=>{e.style.animationDelay=100*t+"ms",e.classList.remove(i),setTimeout((()=>{
// Trigger a DOM reflow
e.classList.add(i)}))}))},hideSidebar(){document.body.classList.remove("sidebar-active")}}).init()}));