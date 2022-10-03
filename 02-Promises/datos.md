Promesas

Es un objeto que representa y gestiona el lifecycle de una respuesta futura.
El objeto dentro suyo mantiene:     status(pending, fulfilled,rejected) e information (value or a reason)
    Solo se puede acceder al metodo con ---.then()---

Entonces estas promesas son objetos que tienen este status que tiene una respuesta pendiente la cual se puede o aceptar o 
rechazar, donde si algo sale todo bien entonces fulfilled, si sale todo mal entonces rejected. Esto se gestiona con cierta
informacion (al momento de tener la respuesta), entonces vamos a tener un value (si es aceptado, y si se rechaza tendremos
una ---reason---(informacion del por qué fue rechazada la pregunta))

Entonces despues de tener esta informacion la idea es saber qué hay que hacer con esa informacion, y ahi viene el .then()

Dato: new Promise(executor) state:"pending", result: undefined entonces state: "fulffiled", result: value, sino
state:"rejected", result: error


Por ej:

axios.get("http://algunapagina.com")

Si le hago console.log(axios.get("http://algunapagina.com")) en pantalla me aparecerá <pending> porque todavia no se da
finalidad a qué hacer con esa respuesta cuando se resuelva, es por eso que luego se utilizaba el .then() para poder definir
nuestro plan.

axios.get("http://algunapagina.com").then((response)=>console.log(resonse.data))

Si le hago un console.log() a la respuesta me muestra esa informacion que,si todo sale bien, me la trae (y dentro de axios
el response.data ese data es una propiedad del objeto para acceder a la informacion)
Y si ahora le agrego que pasaria si no se resuelve:

axios.get("http://algunapagina.com")
.then(
    (response)=>console.log(resonse.data),
    (error)=>console.log("Todo salio mals", error)
);


Dato: el axios.get() nos trae una promesa. Este no trae la info de una url, sino que es una promesa que cuando se resuelve
me trae un valor

Crear promesa:

const miPromesa = new Promise((resolve,reject)=>{
    resolve("La info de la API"),
    reject("Error")
})

miPromesa.then(
    (response)=>console.log("Todo bien: "+response),
    (err)=> console.log("Todo mal: "+err)
)

Si la promesa da resolve entonces al llamarla con el then la toma como response, si se activa reject entonces la toma err.
ES UNA CUESTION DE ORDEN EL CUAL TOMA CADA PARAMETRO, YA QUE RESOLVE NO ESTA CONECTADO DIRECTAMENTE CON RESPONSE, SINO QUE
POR LAS POSICIONES SE ENLAZA.



