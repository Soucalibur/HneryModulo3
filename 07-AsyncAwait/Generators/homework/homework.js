function* fizzBuzzGenerator(max) {
  // Tu código acá:
  let number = 1;
  while(max? number <= max : true){

   
    
    if(number%15===0){
        
      
      yield "Fizz Buzz"
    }
    else if(number%5===0){
        
      
      yield "Buzz"
    }
    else if(number%3===0){
        
      
      yield "Fizz"
    }
    
    else{
      
      yield number 
    }

    number ++

  }


}

module.exports = fizzBuzzGenerator;
