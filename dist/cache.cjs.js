"use strict";module.exports=class{#e=0;#s=new Map;#t={};#i=10;#h=3;constructor(e){this.#i=e.maxSize,this.#h=e.maxUseTime,this.axiosInstance=e.axios}setCache(e,s){for(;this.#e+s.size>this.#i&&0!==this.#e;)this.removeEarliestCache();this.#s.set(e,s),this.#t[e]=0,this.#e+=s.size}haveCache(e){return this.#s.has(e)}getCache(e){let s=null;return e in this.#t&&(s=this.#s.get(e).data,this.#t[e]+=1,this.#t[e]>=this.#h&&this.deleteCache(e)),s}removeEarliestCache(){const e=Object.keys(this.#t).sort(((e,s)=>this.#t[e]-this.#t[s]))[0];delete this.#t[e],this.#e-=this.#s.get(e).size,this.#s.delete(e)}deleteCache(e){this.#s.has(e)&&(delete this.#t[e],this.#e-=this.#s.get(e).size,this.#s.delete(e))}};
//# sourceMappingURL=cache.cjs.js.map