Express

. Primero npm install express (usar nodemon tambien sirve)
. Luego requerirlo (var express = require("express")) 
. Instanciarlo (var server = express()) 
. Y ahi utilizarlo


server.listen("3000",()=>{console.log("servidor en funcionamiento")})
Este listen permite crear el servidor y poder tener por segundo parametro algo, en este caso una referencia a que está
funcionando.

server.get("/",(req,res)=>{
    res.send("Todo esta bien en la ruta /")
})



server.get sirve para asignar a la direccion "/" una request y una response
res.send envia la respuesta con lo que tenga entre los paréntesis


FORMAS DE INDICARLE UNA PARTICULARIDAD A LA RUTA

server.get("/ab?cd", (req,res)=>{
    res.send("ab?cd")
})
El pedacito de ab puede o no estar en cb y debe mandar una respuesta (el primer signo de pregunta, que puede a o b estar
o no y aun asi mostrar el res.send) Esta forma de hacerlo es muy rara de hacer
server.get("/ab*cd", (req,res)=>{
    res.send("ab*cd")
})
Lo mismo que el anterior pero el caracter b puede estar repetido varias veces

Método mas utilizado

.............


MIDDELWARES

server.use("/", (req,res,next)=>{
    console.log("Pasando por este middleware");
    next();
})

El middelware recibe ademas de req y res, recibe next(funcion que hace que prosiga el codigo)
Se usa para que entre medio se tomen medidas de requisitos (por lo general) y que no tiendan a dar respuestas al usuario.
Entonces primero podria ser el server.use y luego de pasar por este "filtro" vamos al server.get (y siempre va el next 
en el server.use para que pueda continuar una vez que pase por este filtro)

MORGAN

const  morgan =  require("morgan")

server.use(morgan("dev"))

En este ejemplo primero tenemos la request, luego por el middleware, luego por morgan y despues la respuesta (end-point).
Morgan es un middleware que manda informacion (como un console.log) de lo que pasa en el servidor.
Morgan al llamarlo asi se usa en todas las rutas. DEV es para que el mensaje sea corto (se pueden poner otros comandos
en su lugar)

Dato: para middleware siempre se usa el USE, pero el USE no se usa solo para middleware.

Si me viene un get de /users, o post /users, etc, se puede hacer routing
Entonces se puede crear un nuevo archivo donde pongamos las rutas

//userRouter.js

const express = require("express")
const usersRouter = express.Router();

usersRouter.get("/", (req,res)=>{
    res.send("Estoy en el GET de users")
})
usersRouter.post("/", (req,res)=>{
    res.send("Estoy en el POST de users")
})
usersRouter.get("/5", (req,res)=>{
    res.send("Estoy en el GET de users 5")
})

module.exports = usersRouter
Esto en las rutas no hace falta especificar el /users que luego se usará por la funcion de Router()
Y esto se exporta para poder usarlo en el app principal

//app.js

const usersRouter = require("./usersRouter")

server.use("/users", usersRouter)

Esta forma de trabajar es para poder MODULARIZAR, como se hacia en React. Así se dividen las tareas y se puede tener un 
código mejor definido y ordenado (y sin tantos codigos en el principal)
Entonces ante cada /users que vaya a utilizar, manda las peticiones al otro archivo js en usersRouter

//userRouter.js

usersRouter.get("/:id",(req,res)=>{
    const {id} = req.params (destructuracion)
    res.send("Estas pidiendo la info del usuario",id)
})

COn params hay que poner / y luego el parametro
Con query hay que mandar ?name=Matt&mail=matt@hotmail.com
A este query se puede acceder con res.query

Dato: el query no me cambia la ruta (esta info va en la ruta, y a pesar de ello no cambia la ruta)pero params si define ruta

DATAZO: Dentro de las rutas se pueden preguntar si las rutas tengan o no tengan query, ya que no cambia la ruta siempre hay 
que evaluar si tengo query o no.



Ejemplos

user{
    id:1 ,
    name: mat ,
    userName: soucalibur ,
    mail: algo@hotmail.com 
}
Si tengo que mandar esto por query es demasiado grande.
Si tengo que mandar mi password por query tampoco porque se veria.
Cuando se hace un post la informacion se manda de otra forma

Dentro de Insomnia (aplicacion que usa el profe para simular los get, post, delete, etc), usamos el metodo POST y mandamos
un archivo json con cierta informacion

En mi usersRouter.js:
 usersRouter.post("/",(req,res)=>{
    console.log(res.body)
    const {name, mail, userName} = req.body
    console.log(name)
    console.log(mail)
    console.log(userName)
    if(name&&mail&&userName){
        return res.status(200).send("recibi todos los datos")
    }
    else{
        return res.status(400).send("faltan datos")
    }
    res.send("Estoy en el POST de users")
 })

Para trabajar con estos json se puede usar el middleware server.use(express.json()) (como lo que se hizo con morgan)
Estos status son para poder definir con que estados estoy manejando los archivos (como el 404)





