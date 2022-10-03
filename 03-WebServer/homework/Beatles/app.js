var http = require('http');
var fs   = require('fs');

var beatles=[{
  name: "John Lennon",
  birthdate: "09/10/1940",
  profilePic:"https://blogs.correiobraziliense.com.br/trilhasonora/wp-content/uploads/sites/39/2020/10/CBNFOT081020100047-550x549.jpg"
},
{
  name: "Paul McCartney",
  birthdate: "18/06/1942",
  profilePic:"http://gazettereview.com/wp-content/uploads/2016/06/paul-mccartney.jpg"
},
{
  name: "George Harrison",
  birthdate: "25/02/1946",
  profilePic:"https://canaldosbeatles.files.wordpress.com/2012/02/george-george-harrison-8321345-438-600.jpg"
},
{
  name: "Richard Starkey",
  birthdate: "07/08/1940",
  profilePic:"http://cp91279.biography.com/BIO_Bio-Shorts_0_Ringo-Starr_SF_HD_768x432-16x9.jpg"
}
]

http
.createServer((req,res)=>{

  
    if(req.url === "/api"){
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles));
    }
    if(req.url === "/api/John%20Lennon"){
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[0]));
    }
    if(req.url === "/api/Paul%20McCartney"){
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[1]));
    }
    if(req.url === "/api/George%20Harrison"){
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[2]));
    }
    if(req.url === "/api/Richard%20Starkey"){
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(JSON.stringify(beatles[3]));
    }
    else{
      res.writeHead(404, { "Content-type": "text/html" });
      res.end(console.log("Error, no se encuentra nada"))
    }
  

})
.listen(3002,"localhost")
