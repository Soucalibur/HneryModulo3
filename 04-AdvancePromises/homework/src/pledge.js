'use strict';
/*----------------------------------------------------------------
Promises Workshop: construye la libreria de ES6 promises, pledge.js
----------------------------------------------------------------*/
// // TU CÓDIGO AQUÍ:

class $Promise {
    constructor(executor) {
    
    if(typeof executor !== "function"){throw new TypeError(/executor.+function/i)}
    
    this._state = "pending"
    this._value = undefined

    this._internalResolve=(data)=>{
        if(this._state === "pending"){
            this._value = data
            this._state = "fulfilled"
        }
        else{
            return
        }
        
        
    }
    this._internalReject = (myReason)=>{
        if(this._state === "pending"){
            this._state = "rejected"
            this._value = myReason
        }
        else{return }
        

    }

    var resolve = (data)=>this._internalResolve(data)
    var reject = (myReason)=>this._internalReject(myReason)
    
    executor(resolve ,reject)


    }
    
    
    
    
}














module.exports = $Promise
/*-------------------------------------------------------
El spec fue diseñado para funcionar con Test'Em, por lo tanto no necesitamos
realmente usar module.exports. Pero aquí está para referencia:

module.exports = $Promise;

Entonces en proyectos Node podemos esribir cosas como estas:

var Promise = require('pledge');
…
var promise = new Promise(function (resolve, reject) { … });
--------------------------------------------------------*/


