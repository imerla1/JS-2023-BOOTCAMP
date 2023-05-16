let a = true;
let b = false;
a &&= b; // -> Same as a = a && b

let c = false;
let d = true;
c ||= d; // -> Same as c = c || d


let e = null;
let f = 5;
e ??= f; // -> Same as e = e ?? f