import{q as r,p as K,s as a,aI as f,t as e}from"./index-c4424654.js";function j(){return r.get("/addons/DaySignIn/api/v1/user",{})}function o(A){return r.post("/addons/DaySignIn/api/v1/signIn",A)}const c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAAXNSR0IArs4c6QAAAHJQTFRFAAAAVar/Kqr/M6r/PKX/Oar2N6T/QKT/O6b/PKf8Paf8PKj6O6b5Paj6PKb7Paj8Paj6Pab6PKj7PKf7O6j7Paj7PKf7PKj7Paj7PKf6PKf7PKj7PKf6PKf6PKf6PKj6PKf5PKf7PKj6PKj7PKf6PKf67ePYDAAAACV0Uk5TAAMGDxEbHBwrWmBhio+Qk6SnqqusrK6vtby8vMLU2t7n6PLy/G9qj7oAAAD2SURBVEjH7dbZEoIgFAZgrCRbyKw0W2hT3v8VG5emYZUDXljjf+13weGM/AiN+b1EhBasIwUlkYJO4pJZpYwnkr0w65xFHTNAYuG8JQSX/LkJA4VwmMIw5XABwwWHGTASfu63dtk9JHyfWe/i9CbiDWCT1yK+AvBJOvNxtbDL8sD6nfY/4gzj3BUnAUKhI64smrvh2gapE25s4jQwhbXGKmuLldaA8xCnZmvA+Pu5xppxC3TWgLMP0VrTwFqkt8ZpN0xvzVdVa73tuOdG62zXklRaazs3LMVhNvR/GPCJffX3uHvVCq9C41Wl/EqcV330K65jhp43WbAIxcQ3vFIAAAAASUVORK5CYII=",u=({open:A,success:t})=>{const[i,n]=K.useState(!1),P=()=>{i||(n(!0),o({}).then(s=>{n(!1),s.data.reward===!1?e.success("今日已签到"):e.success("签到成功，积分+"+s.data.reward),t()}).catch(s=>{e.error(s.message||JSON.stringify(s)),n(!1)}))};return a.jsx(a.Fragment,{children:A&&a.jsxs("div",{className:f.backTop,onClick:()=>P(),children:[a.jsx("img",{src:c}),a.jsx("span",{children:"签到"})]})})};export{u as S,j as u};