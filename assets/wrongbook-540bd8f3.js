import{q as o}from"./index-c4424654.js";function t(n){return o.get("/addons/Paper/api/v1/wrongbook",n)}function a(n){return o.get("/addons/Paper/api/v2/wrongbook/questions",n)}function s(n){return o.destroy("/addons/Paper/api/v1/wrongbook/"+n)}function i(n,e){return o.get("/addons/Paper/api/v2/question/"+n,e)}function u(n,e){return o.post(`/addons/Paper/api/v2/question/${n}/answer`,e)}export{t as d,i as n,a as o,u as q,s as r};