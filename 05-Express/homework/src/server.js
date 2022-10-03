//const bodyParser = require("body-parser");
const express = require("express");

const STATUS_USER_ERROR = 422;

// This array of posts persists in memory across requests. Feel free
// to change this to a let binding if you need to reassign it.
let posts = [];

const server = express();
// to enable parsing of json bodies for post requests
server.use(express.json());

// TODO: your code to handle requests
let id = 1

server.post("/posts",(req,res)=>{
    
    const {author, title, contents} = req.body;
    if(!author || !title ||!contents){
       return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
    };

    const post = {
        author, title, contents, id:id++
    };

    posts.push(post);

    res.status(200).json(post);
    
})

server.post("/posts/author/:author",(req,res)=>{
    const {title, contents} = req.body;
    const {author} = req.params
    if(!author || !title ||!contents){
        return res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para crear el Post"});
     };
 
     const post = {
         author, title, contents, id:id++
     };
 
     posts.push(post);
 
     res.status(200).json(post);

})


server.get("/posts",(req,res)=>{
    const {term} = req.query
    if(term){

        const termPost = posts.filter((p)=>p.title.includes(term) || p.contents.includes(term))

        return res.status(200).json(termPost)
    }
    res.status(200).json(posts)
});

server.get("/posts/:author",(req,res)=>{
    const {author} = req.params;
    
    const authorPost =  posts.filter((a)=>a.author === author)
    if(authorPost.length>0){
        res.status(200).json(authorPost)
    }
    return res.status(STATUS_USER_ERROR).json({error: "No existe ningun post del autor indicado"});
})

server.get("/posts/:author/:title",(req,res)=>{

    const {author, title} = req.params 

    const authorTitlePost = posts.filter((p)=>{
        return p.author === author && p.title === title
    })
    if(authorTitlePost.length>0){
        res.status(200).json(authorTitlePost)
    }
    return res.status(STATUS_USER_ERROR).json({error: "No existe ningun post con dicho titulo y autor indicado"})
})


server.put("/posts",(req,res)=>{
    const {id, title, contents} = req.body;
    if(!id || !title || !contents){
        res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
    }
    const idPost = posts.find((p)=>p.id === id)
    //en el caso de trabajar con params o query al id 90:47 le debo poner parseInt(id) porque el p.id es un numero y id es
    // un string, entonces nunca encontraria si le aplico ===, sino le pongo ==
    if(idPost){
        idPost.title = title;
        idPost.contents = contents
        res.json(idPost)
    }
    else{
        res.status(STATUS_USER_ERROR).json({error: "No se encuentra el ID necesario"})
    }

    // const {id, title, contents} = req.body;
    // if(id && title && contents){
    //     const idPost = posts.find((p)=>p.id === parseInt(id))
    //     if(idPost){
    //         idPost.title = title;
    //         idPost.contents = contents
    //         res.json(idPost)
    //     }
    //     else{
    //         res.status(STATUS_USER_ERROR).json({error: "No se encuentra el ID necesario"})
    //     }
    // }
    // else{
    //     res.status(STATUS_USER_ERROR).json({error: "No se recibieron los parámetros necesarios para modificar el Post"})
    // }
})


server.delete("/posts",(req,res)=>{

    const {id} = req.body
    const idPost = posts.find((p)=>p.id === parseInt(id))
    if(!id || !idPost){
        res.status(STATUS_USER_ERROR).json({error: "Mensaje de error"})
    }
    if(idPost){
        posts = posts.filter((p)=>p.id!== id)
        res.status(200).json({ success: true })
    }
})

server.delete("/author",(req,res)=>{
    const {author} = req.body;

    const authorPost = posts.filter((p)=>p.author === author)
    if(!author || !authorPost.length){
        return res.status(STATUS_USER_ERROR).json({error: "No existe el autor indicado"})
    }
    // if(authorPost){
    //     // let deletePost = []
    //     // deletePost = posts.filter((p)=>p.author === author)
    // Esto que esta comentado se puede hacer con find en la linea 139:30 y sin length en el condicional, y hacer res.json
    // de deletePost
        posts = posts.filter((p)=>p.id!==id)
        
        res.status(200).json(authorPost)
    // }
})



module.exports = { posts, server };
