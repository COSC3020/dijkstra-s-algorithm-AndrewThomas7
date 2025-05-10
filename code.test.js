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
console.assert(JSON.stringify(Dijisktras(G,1))==JSON.stringify([ Infinity, 0, 4, 3 ]))
console.assert(JSON.stringify(Dijisktras(G,2))==JSON.stringify([ Infinity, Infinity, 0, 2 ]))
console.assert(JSON.stringify(Dijisktras(G,3))==JSON.stringify([ Infinity, Infinity, Infinity, 0 ]))                               
GUndir=[
    [0,6,5,Infinity],
    [6,0,4,3],
    [5,4,0,2],
    [Infinity,3,4,0]
]
console.assert(JSON.stringify(Dijisktras(GUndir,0))==JSON.stringify([0,6,5,7]))
console.assert(JSON.stringify(Dijisktras(GUndir,1))==JSON.stringify([ Infinity, 0, 4, 3 ]))
console.assert(JSON.stringify(Dijisktras(GUndir,2))==JSON.stringify([ Infinity, Infinity, 0, 2 ]))
console.assert(JSON.stringify(Dijisktras(GUndir,3))==JSON.stringify([ Infinity, Infinity, Infinity, 0 ]))    
//console.assert(JSON.stringify(Dijisktras(G,

G2=[
    [0,4,2,Infinity,Infinity],
    [Infinity,0,3,2,3],
    [Infinity,1,0,4,5],
    [Infinity,Infinity,Infinity,0,Infinity],
    [Infinity,Infinity,Infinity,1,0]
]
console.assert(JSON.stringify(Dijisktras(G2,0))==JSON.stringify([ 0, 3, 2, 5, 6 ]))
console.assert(JSON.stringify(Dijisktras(G2,1))==JSON.stringify([ Infinity, 0, 3, 2, 3 ]))
console.assert(JSON.stringify(Dijisktras(G2,2))==JSON.stringify([ Infinity, 1, 0, 3, 4 ]))
console.assert(JSON.stringify(Dijisktras(G2,3))==JSON.stringify([ Infinity, Infinity, Infinity, 0, Infinity ]))
sonsole.assert(JSON.stringify(Dijisktras(G2,4))==JSON.stringify([ Infinity, Infinity, Infinity, 1, 0 ]))

G3=[
    [0,7,Infinity,Infinity,Infinity],
    [Infinity,0,-2,Infinity,2],
    [Infinity,Infinity,0,-4,Infinity],
    [Infinity,-1,Infinity,0,Infinity],
    [Infinity,Infinity,Infinity,Infinity,0]
]
console.assert(JSON.stringify(Dijisktras(G3,0))==JSON.stringify([0,0,5,1,9]))
console.assert(JSON.stringify(Dijisktras(G3,1))==JSON.stringify([ Infinity, -7, -2, -6, 2 ]))
console.assert(JSON.stringify(Dijisktras(G3,2))==JSON.stringify([ Infinity, -5, -7, -4, -3 ]))
console.assert(JSON.stringify(Dijisktras(G3,3))==JSON.stringify([ Infinity, -1, -3, -7, 1 ]))
console.assert(JSON.stringify((Dijisktras(G3,4))==JSON.stringify([ Infinity, Infinity, Infinity, Infinity, 0 ]))
