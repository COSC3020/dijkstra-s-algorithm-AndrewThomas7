const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

G=[
    [0,6,5,Infinity],
    [Infinity,0,4,3],
    [Infinity,Infinity,0,2],
    [Infinity,Infinity,Infinity,0]
]
console.assert(JSON.stringify(Dijisktras(G,0))==JSON.stringify([0,6,5,7]))
                                         
GUndir=[
    [0,6,5,Infinity],
    [6,0,4,3],
    [5,4,0,2],
    [Infinity,3,4,0]
]
console.assert(JSON.stringify(Dijisktras(G,

G2=[
    [0,4,2,Infinity,Infinity],
    [Infinity,0,3,2,3],
    [Infinity,1,0,4,5],
    [Infinity,2,4,0,1],
    [Infinity,3,5,Infinity,0]
]

G3=[
    [0,7,Infinity,Infinity,Infinity],
    [Infinity,0,-2,Infinity,2],
    [Infinity,Infinity,0,-4,Infinity],
    [Infinity,-1,Infinity,0,Infinity],
    [Infinity,Infinity,Infinity,Infinity,0]
]
