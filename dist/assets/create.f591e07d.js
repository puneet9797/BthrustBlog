import{f as n,m as t,g as o}from"./index.03d082ff.js";const i={xs:18,sm:24,md:32,lg:38,xl:46},c={size:String};function r(e,s=i){return n(()=>e.size!==void 0?{fontSize:e.size in s?`${s[e.size]}px`:e.size}:null)}const u={size:{type:[Number,String],default:"1em"},color:String};function z(e){return{cSize:n(()=>e.size in i?`${i[e.size]}px`:e.size),classes:n(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}const m=e=>t(o(e)),l=e=>t(e);export{z as a,l as b,m as c,c as d,r as e,u};