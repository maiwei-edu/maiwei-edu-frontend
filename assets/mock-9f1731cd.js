import{q as r}from"./index-c4424654.js";function o(a){return r.get("/addons/Paper/api/v1/mock_papers",a)}function p(a){return r.get("/addons/Paper/api/v1/mock_paper/"+a,{})}function t(a){return r.post("/addons/Paper/api/v1/mock_paper/"+a,{})}function i(a){return r.get("/addons/Paper/api/v1/mock_paper/record/"+a,{})}function s(a,e){return r.post("/addons/Paper/api/v1/mock_paper/record/"+a+"/submit/single",e)}function d(a,e){return r.post("/addons/Paper/api/v1/mock_paper/record/"+a+"/submit",e)}export{i as a,s as b,p as d,t as j,o as l,d as s};