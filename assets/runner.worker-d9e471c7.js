(function(){"use strict";const e=async t=>{const a={spectest:{print_i32:s=>postMessage({type:"output",message:String(s)}),print_f64:s=>postMessage({type:"output",message:String(s)}),print_char:s=>postMessage({type:"output",message:String.fromCharCode(s)})}},{instance:n}=await WebAssembly.instantiate(t,a),i=n.exports._start,o=Date.now();i();const p=Date.now(),c=`

====== statistics ======
size: ${t.length}B
time: ${p-o}ms
`;postMessage({type:"output",message:c}),postMessage({type:"end"})};onmessage=t=>{t.data.type==="start"&&e(t.data.message)}})();
