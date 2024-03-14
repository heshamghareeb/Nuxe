"use strict";(self.webpackChunkNuxe=self.webpackChunkNuxe||[]).push([[312],{816:(f,u,a)=>{a.d(u,{o:()=>h});var l=a(6700);class c extends Error{}c.prototype.name="InvalidTokenError";var _=a(4496),i=a(7048),d=a(1112);let h=(()=>{class e{constructor(n,o){this._HttpClient=n,this._Router=o,this.userData=new l.g(null),null!=localStorage.getItem("userToken")&&this.saveUserData()}saveUserData(){let o=function p(e,r){if("string"!=typeof e)throw new c("Invalid token specified: must be a string");r||(r={});const n=!0===r.header?0:1,o=e.split(".")[n];if("string"!=typeof o)throw new c(`Invalid token specified: missing part #${n+1}`);let s;try{s=function g(e){let r=e.replace(/-/g,"+").replace(/_/g,"/");switch(r.length%4){case 0:break;case 2:r+="==";break;case 3:r+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return function t(e){return decodeURIComponent(atob(e).replace(/(.)/g,(r,n)=>{let o=n.charCodeAt(0).toString(16).toUpperCase();return o.length<2&&(o="0"+o),"%"+o}))}(r)}catch{return atob(r)}}(o)}catch(m){throw new c(`Invalid token specified: invalid base64 for part #${n+1} (${m.message})`)}try{return JSON.parse(s)}catch(m){throw new c(`Invalid token specified: invalid json for part #${n+1} (${m.message})`)}}(JSON.stringify(localStorage.getItem("_token")));this.userData.next(o)}signup(n){return this._HttpClient.post("https://movies-api.routemisr.com/signup/",n)}signin(n){return this._HttpClient.post("https://movies-api.routemisr.com/signin/",n)}signOut(){localStorage.removeItem("_token"),this.userData.next(null),this._Router.navigate(["/login"])}static#t=this.\u0275fac=function(o){return new(o||e)(_.CoB(i.KK),_.CoB(d.E5))};static#e=this.\u0275prov=_.wxM({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})()},5404:(f,u,a)=>{a.d(u,{y:()=>g});var l=a(1372),c=a(4496),t=a(7048);let g=(()=>{class p{constructor(i){this._HttpClient=i}getTrending(i){return this._HttpClient.get(`${l.yk}/trending/${i}/week`)}getItemDetails(i,d){return this._HttpClient.get(`${l.yk}/${d}/${i}`)}getSimilar(i,d){return this._HttpClient.get(`${l.yk}/${d}/${i}/similar?language=en-US&page=1`)}getActorDetails(i){return this._HttpClient.get(`${l.yk}/person/${i}?language=en-US`)}getActorMovies(i){return this._HttpClient.get(`${l.yk}/person/${i}/movie_credits?language=en-US`)}static#t=this.\u0275fac=function(d){return new(d||p)(c.CoB(t.KK))};static#e=this.\u0275prov=c.wxM({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},7376:(f,u,a)=>{a.d(u,{o:()=>h});var l=a(1368),c=a(1112),t=a(4496);function g(e,r){if(1&e&&t.wR5(0,"img",7),2&e){const n=t.GaO();t.E7m("src","https://image.tmdb.org/t/p/w500/"+n.item.poster_path,t.K6U)}}function p(e,r){if(1&e&&t.wR5(0,"img",8),2&e){const n=t.GaO();t.E7m("src","https://image.tmdb.org/t/p/w500/"+n.item.profile_path,t.K6U)}}function _(e,r){1&e&&t.wR5(0,"img",9),2&e&&t.E7m("src","https://www.indieactivity.com/wp-content/uploads/2022/03/File-Not-Found-Profile.jpg",t.K6U)}function i(e,r){if(1&e&&(t.I0R(0,"div",10),t.OEk(1),t.C$Y()),2&e){const n=t.GaO();t.yG2(),t.cNF(n.item.vote_average.toFixed(1))}}const d=(e,r,n)=>[e,r,n];let h=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.In1({type:e,selectors:[["app-movie-card"]],inputs:{item:"item"},standalone:!0,features:[t.UHJ],decls:8,vars:11,consts:[[1,"position-relative","rounded-3"],[3,"routerLink"],["class","w-100 rounded-3","alt","",3,"src",4,"ngIf"],["class","w-100","alt","",3,"src",4,"ngIf"],["class","w-100","style","height: 346px;","alt","",3,"src",4,"ngIf"],[1,"h6","my-2","text-center"],["class","vote position-absolute p-2 top-0 end-0 text-white border-bottom-left-radius-5px",4,"ngIf"],["alt","",1,"w-100","rounded-3",3,"src"],["alt","",1,"w-100",3,"src"],["alt","",1,"w-100",2,"height","346px",3,"src"],[1,"vote","position-absolute","p-2","top-0","end-0","text-white","border-bottom-left-radius-5px"]],template:function(o,s){if(1&o&&(t.I0R(0,"div",0)(1,"a",1),t.yuY(2,g,1,1,"img",2)(3,p,1,1,"img",3)(4,_,1,1,"img",4),t.I0R(5,"h3",5),t.OEk(6),t.C$Y(),t.yuY(7,i,2,1,"div",6),t.C$Y()()),2&o){let m;t.yG2(),t.E7m("routerLink",t.uAc(7,d,s.item.gender?"/actorderails":"/moviedetails",s.item.id,null!==(m=s.item.media_type)&&void 0!==m?m:"movie")),t.yG2(),t.E7m("ngIf",s.item.poster_path),t.yG2(),t.E7m("ngIf",s.item.profile_path),t.yG2(),t.E7m("ngIf",!s.item.poster_path&&!s.item.backdrop_path),t.yG2(2),t.CAO("",s.item.title," ",s.item.name,""),t.yG2(),t.E7m("ngIf",s.item.vote_average)}},dependencies:[l.MD,l.u_,c.qQ,c.ER]})}return e})()}}]);