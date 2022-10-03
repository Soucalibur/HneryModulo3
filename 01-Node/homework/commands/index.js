var fs = require('fs');
var archivo = require("../bash")

const consola = ()=>{
  // Output un prompt
  process.stdout.write('prompt > ');
  // El evento stdin 'data' se dispara cuando el user escribe una línea
  process.stdin.on('data', function (data) {
    var cmd = data.toString().trim(); // remueve la nueva línea
    if(cmd === 'date') {
      process.stdout.write(Date());  
    }
    if(cmd === 'pwd') {
      process.stdout.write(pwd())
    }
    if(cmd === "ls"){
      ls()
    }
    if(cmd.slice(0,4) === "echo"){
      process.stdout.write(cmd.slice(5))
    }
    if (cmd.slice(0,3) === "cat"){
      cat()
    }

    process.stdout.write('\nprompt > ');
  });
}




const ls = ()=>{
    fs.readdir('.', function(err, files) {
        if (err) throw err;
        files.forEach(function(file) {
          process.stdout.write(file.toString() + "\n");
        })
        process.stdout.write("prompt > ");
      });
}

const pwd = ()=>{
  return process.cwd()
}

const cat = (archivo)=>{
  fs.readFile(archivo, 'utf8', (error, datos) => {
    if (error) throw error;
    console.log("El contenido es: ", datos);
});
}



module.exports = {
    pwd: pwd,
    ls: ls,
    consola:consola,
    cat:cat,
}