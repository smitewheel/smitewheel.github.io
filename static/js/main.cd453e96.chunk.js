(this["webpackJsonpsmitewheel.github.io"]=this["webpackJsonpsmitewheel.github.io"]||[]).push([[0],{17:function(e){e.exports=JSON.parse('["Agni","Ah Muzen Cab","Ah Puch","Anhur","Anubis","Aphrodite","Apollo","Artemis","Baba Yaga","Bastet","Camazotz","Cerberus","Cernunnos","Chaac","Chang\'e","Chernobog","Chiron","Chronos","Cupid","Discordia","Fafnir","Freya","Geb","Hachiman","He Bo","Heimdallr","Hera","Hou Yi","Isis","Izanami","Janus","Jing Wei","Khepri","Kukulkan","Kuzenbo","Medusa","Merlin","Ne Zha","Neith","Nox","Nu Wa","Olorun","Persephone","Poseidon","Ra","Raijin","Rama","Ravana","Scylla","Skadi","Sol","Sylvanus","Thoth","Vulcan","Xbalanque","Xing Tian","Yemoja","Zeus"]')},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),i=n.n(a),s=n(15),r=n.n(s),o=(n(24),n(25),n(18)),l=n(3),u=n(16),j=n.n(u),d=function(e){var t=e.props,n=t.godsList,a=t.slotRef,i=t.winner,s=t.rolling;return Object(c.jsx)("div",{className:"slot",children:Object(c.jsxs)("section",{children:[Object(c.jsx)("div",{className:"container",ref:a,children:n.map((function(e,t){return Object(c.jsx)("img",{className:"godCard",src:e.card.replace("'",""),alt:e.name},t)}))}),!s&&i&&Object(c.jsx)("div",{className:"winner",children:i.name})]})})},b=n.p+"static/media/Assassin.4068ce75.png",m=n.p+"static/media/Guardian.d146c3b7.png",h=n.p+"static/media/Hunter.a8766dd5.png",O=n.p+"static/media/Mage.ed2867b6.png",f=n.p+"static/media/Warrior.58102b41.png",p=n.p+"static/media/Cutesy.81f95e2c.png",g=function(e){var t=e.props,n=t.filter,a=t.handleSetFilter;return Object(c.jsxs)("div",{className:"options",children:[Object(c.jsx)("button",{onClick:function(){a("Assassin")},children:Object(c.jsx)("img",{className:"Assassin"===n?"activeFilter":"roundedIcon",src:b,alt:"Assassin"})}),Object(c.jsx)("button",{onClick:function(){a("Guardian")},children:Object(c.jsx)("img",{className:"Guardian"===n?"activeFilter":"roundedIcon",src:m,alt:"Guardian"})}),Object(c.jsx)("button",{onClick:function(){a("Hunter")},children:Object(c.jsx)("img",{className:"Hunter"===n?"activeFilter":"roundedIcon",src:h,alt:"Hunter"})}),Object(c.jsx)("button",{onClick:function(){a("Mage")},children:Object(c.jsx)("img",{className:"Mage"===n?"activeFilter":"roundedIcon",src:O,alt:"Mage"})}),Object(c.jsx)("button",{onClick:function(){a("Warrior")},children:Object(c.jsx)("img",{className:"Warrior"===n?"activeFilter":"roundedIcon",src:f,alt:"Warrior"})}),Object(c.jsx)("button",{onClick:function(){a("Custom")},children:Object(c.jsx)("img",{className:"Custom"===n?"activeFilter":"roundedIcon",src:p,alt:"Custom"})}),Object(c.jsx)("button",{onClick:function(){a("Reset")},children:Object(c.jsx)("img",{className:"refreshIcon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAADe0lEQVR4Ae3YzWsdVRyH8WduYkJu703TWKygSDG+rKxiS0SKK7XSRanUl1VEwY0Lb23jokLQtgkmNYqSUKWoWNS0VZAGLAouhFYUiyBVaDFRWxel16RJU+NLocHk63rmjEPunTMnGTif5w/I7wfn5gwHzxrP8zzP8zzP827icQYY5RRVrjDPPFeocopR+nmMG6jNHpwJuI8hfkUkN87r3Lvo8YUTq9jFWVRD43TTSrK9CJG5dl7hb1RHs/TSmjw+IlMFKsygFF3kaQJMvSj7BW7nJLLQcdaa42e/wJP8gyw1y6Pm+Fku0MAwstzLBAD0oawXaGYUJVTlEBU20UE7TTRQpoP72cFHTKKERmg0xhfWNfE5io8phljP/wvYyAH+QvHxEzKyrMBRFNt5KrSwGG30cBktMsveQGZcpZ8itbiWt1lwv8ATyIwx1lGPB6i6XeDW2Bv3E0rU63q+dbdAgW+Q0ZsUSKOFY64WeAYZvUV6/W4WaGMa8/AUSKvP1REy/9AYJQfjCytamTX+ca5zMr6wYieK1E9avS4vsjHj1i06Gl9YcA+KtN3Z+MKCV41PthbS2IvcLnAGhRpyOL5IbQ2KtN7h+CK1rShUlfrtQe4X2I1CHXI6vkjtCApVcTq+SMv44N1EzpxDoTrIF+PlrZ18MZ6vmsiZP/O+wIW8H6GxvP+Iv0ahHiJn3jM+pXPmBRTqMDmzBYX6nZxpYx6F2kDOfI9CDZOVd1CoE1gxgEJNUyQLK4231+ex4g4U6Tmy0IOyunN+QKEusAKD9cfLE1izHUXah23DKFIX1hSZQqHmuBObNjJvPJ41ZXs+xylhyyrOokjPYlUrEyjSUQrY0MAXKNJvNGNZFzI6QHoBHyCjrWTgeOwKBdJo5CAyOkYm1nIZGY1STnF1fYaMJllDRh5GZvzMXdRjA78gowU2k6F9yIw5BllBLcoM8i8yYxeZCngfxValmyKLUWInkyi2d8lcI5+i+JhmP50ECet3sp8ZFB8jFMDFCh+ihCb5mB1s5hZW08w1rOQ2HqSbw0yghA7SgCMBg8hyL+HYI/yBLDXDNtzjZr5CFvqSG1kiAU9xEaVogi6WWBu7uYTq6BI9lFkWSnRzGtXQaSqUWWbu5jV+ZAEldoYBOlnGVrONFxnhO84xxVXmmOE8JzlCH1u4Dks8z/M8z/M8z/P+A3VqDyQv4vpCAAAAAElFTkSuQmCC",alt:"Refresh"})})]})},x=n(17),v=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(!1),u=Object(l.a)(r,2),b=u[0],m=u[1],h=Object(a.useState)(1),O=Object(l.a)(h,2),f=O[0],p=O[1],v=Object(a.useState)(!0),A=Object(l.a)(v,2),C=A[0],N=A[1],S=Object(a.useState)([]),B=Object(l.a)(S,2),k=B[0],y=B[1],F=Object(a.useState)(null),R=Object(l.a)(F,2),M=R[0],I=R[1],W=Object(a.useState)([]),w=Object(l.a)(W,2),K=w[0],Y=w[1],H=Object(a.useRef)([i.a.createRef()]);Object(a.useEffect)((function(){C&&j.a.create({baseURL:"https://cms.smitegame.com/wp-json/smite-api/all-gods/1"}).get().then((function(e){s(e.data)})).catch((function(e){console.log(e)})),N(!1)}),[C]),Object(a.useEffect)((function(){}),[f,M]);var z,E=function(e,t){y({}),H.current=H.current.splice(0,t);for(var n=0;n<t;n++)H.current[n]=H.current[n]||i.a.createRef();H.current=H.current.map((function(e){return e||i.a.createRef()})),p(t)},G=function(e){var t=M?K:n;var c,a=e.children,i=Math.floor(Math.random()*t.length),s=a[i];return c=2-s.offsetTop,e.style.top="".concat(c,"px"),t[i]};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(g,{props:{filter:M,handleSetFilter:function(e){y({}),"Custom"===e?(Y(n.filter((function(e,t){return x.includes(e.name)}))),I(e)):"Reset"===e?(Y(n),I(null)):(Y(n.filter((function(t,n){return t.role===e}))),I(e))}}}),Object(c.jsxs)("div",{className:"SlotMachine",children:[(z=f,Object(o.a)(Array(z)).map((function(e,t){return Object(c.jsx)(d,{props:{godsList:M?K:n,slotRef:H.current[t],winner:k[t],rolling:b}},t)}))),Object(c.jsxs)("span",{children:[Object(c.jsxs)("h1",{children:["Team Size: ",1===f?"Just me":"".concat(f,"v").concat(f)]}),Object(c.jsx)("button",{id:1===f?"activeButton":"",className:"teamButtons",onClick:function(e){return E(0,1)},children:"Just me"}),Object(c.jsx)("button",{id:2===f?"activeButton":"",className:"teamButtons",onClick:function(e){return E(0,2)},children:"2v2"}),Object(c.jsx)("button",{id:3===f?"activeButton":"",className:"teamButtons",onClick:function(e){return E(0,3)},children:"3v3"}),Object(c.jsx)("button",{id:4===f?"activeButton":"",className:"teamButtons",onClick:function(e){return E(0,4)},children:"4v4"}),Object(c.jsx)("button",{id:5===f?"activeButton":"",className:"teamButtons",onClick:function(e){return E(0,5)},children:"5v5"})]}),Object(c.jsx)("div",{className:"givemesomespace",children:Object(c.jsx)("button",{className:b?"rolling":"roll",onClick:!b&&function(){m(!0),y({}),setTimeout((function(){m(!1)}),1e3);var e=[];H.current.forEach((function(t,n){for(var c=G(t.current);e.some((function(e){return e.name===c.name}));)c=G(t.current);e[n]=c})),y(e)}||void 0,disabled:b,children:b?"Rolling...":"Roll it!"})})]})]})};var A=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"banner",children:[Object(c.jsx)("h1",{children:"SmiteWheel"}),Object(c.jsx)("p",{children:"Can't decide who to play as? Let the Wheel decide!"})]}),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("header",{className:"App-header",children:Object(c.jsx)(v,{})})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.cd453e96.chunk.js.map