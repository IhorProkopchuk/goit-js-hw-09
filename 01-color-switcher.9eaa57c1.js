!function(){const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=1e3,o=document.body;let a=null;t.addEventListener("click",(function(){t.disabled=!0,a=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),n)})),e.addEventListener("click",(function(){t.disabled=!1,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.9eaa57c1.js.map
