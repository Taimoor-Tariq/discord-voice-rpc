var u=Object.defineProperty;var f=(o,e,i)=>e in o?u(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var h=(o,e)=>u(o,"name",{value:e,configurable:!0});var a=(o,e,i)=>(f(o,typeof e!="symbol"?e+"":e,i),i);var s=class extends Map{ensure(e,i){if(this.has(e))return this.get(e);let t=i(e,this);return this.set(e,t),t}hasAll(...e){return e.every(i=>super.has(i))}hasAny(...e){return e.some(i=>super.has(i))}first(e){if(typeof e=="undefined")return this.values().next().value;if(e<0)return this.last(e*-1);e=Math.min(this.size,e);let i=this.values();return Array.from({length:e},()=>i.next().value)}firstKey(e){if(typeof e=="undefined")return this.keys().next().value;if(e<0)return this.lastKey(e*-1);e=Math.min(this.size,e);let i=this.keys();return Array.from({length:e},()=>i.next().value)}last(e){let i=[...this.values()];return typeof e=="undefined"?i[i.length-1]:e<0?this.first(e*-1):e?i.slice(-e):[]}lastKey(e){let i=[...this.keys()];return typeof e=="undefined"?i[i.length-1]:e<0?this.firstKey(e*-1):e?i.slice(-e):[]}at(e){return e=Math.floor(e),[...this.values()].at(e)}keyAt(e){return e=Math.floor(e),[...this.keys()].at(e)}random(e){let i=[...this.values()];return typeof e=="undefined"?i[Math.floor(Math.random()*i.length)]:!i.length||!e?[]:Array.from({length:Math.min(e,i.length)},()=>i.splice(Math.floor(Math.random()*i.length),1)[0])}randomKey(e){let i=[...this.keys()];return typeof e=="undefined"?i[Math.floor(Math.random()*i.length)]:!i.length||!e?[]:Array.from({length:Math.min(e,i.length)},()=>i.splice(Math.floor(Math.random()*i.length),1)[0])}reverse(){let e=[...this.entries()].reverse();this.clear();for(let[i,t]of e)this.set(i,t);return this}find(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,l]of this)if(e(l,t,this))return l}findKey(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,l]of this)if(e(l,t,this))return t}sweep(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=this.size;for(let[l,n]of this)e(n,l,this)&&this.delete(l);return t-this.size}filter(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=new this.constructor[Symbol.species];for(let[l,n]of this)e(n,l,this)&&t.set(l,n);return t}partition(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=[new this.constructor[Symbol.species],new this.constructor[Symbol.species]];for(let[l,n]of this)e(n,l,this)?t[0].set(l,n):t[1].set(l,n);return t}flatMap(e,i){let t=this.map(e,i);return new this.constructor[Symbol.species]().concat(...t)}map(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=this.entries();return Array.from({length:this.size},()=>{let[l,n]=t.next().value;return e(n,l,this)})}mapValues(e,i){typeof i!="undefined"&&(e=e.bind(i));let t=new this.constructor[Symbol.species];for(let[l,n]of this)t.set(l,e(n,l,this));return t}some(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,l]of this)if(e(l,t,this))return!0;return!1}every(e,i){typeof i!="undefined"&&(e=e.bind(i));for(let[t,l]of this)if(!e(l,t,this))return!1;return!0}reduce(e,i){let t;if(typeof i!="undefined"){t=i;for(let[n,c]of this)t=e(t,c,n,this);return t}let l=!0;for(let[n,c]of this){if(l){t=c,l=!1;continue}t=e(t,c,n,this)}if(l)throw new TypeError("Reduce of empty collection with no initial value");return t}each(e,i){return this.forEach(e,i),this}tap(e,i){return typeof i!="undefined"&&(e=e.bind(i)),e(this),this}clone(){return new this.constructor[Symbol.species](this)}concat(...e){let i=this.clone();for(let t of e)for(let[l,n]of t)i.set(l,n);return i}equals(e){if(!e)return!1;if(this===e)return!0;if(this.size!==e.size)return!1;for(let[i,t]of this)if(!e.has(i)||t!==e.get(i))return!1;return!0}sort(e=s.defaultSort){let i=[...this.entries()];i.sort((t,l)=>e(t[1],l[1],t[0],l[0])),super.clear();for(let[t,l]of i)super.set(t,l);return this}intersect(e){let i=new this.constructor[Symbol.species];for(let[t,l]of e)this.has(t)&&Object.is(l,this.get(t))&&i.set(t,l);return i}difference(e){let i=new this.constructor[Symbol.species];for(let[t,l]of e)this.has(t)||i.set(t,l);for(let[t,l]of this)e.has(t)||i.set(t,l);return i}sorted(e=s.defaultSort){return new this.constructor[Symbol.species](this).sort((i,t,l,n)=>e(i,t,l,n))}toJSON(){return[...this.values()]}static defaultSort(e,i){return Number(e>i)||Number(e===i)-1}},r=s;h(r,"Collection"),a(r,"default",s);var V=r;export{r as Collection,V as default};
//# sourceMappingURL=index.mjs.map