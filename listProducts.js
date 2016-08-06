var Faker = require("Faker");

for(var i =0; i<10; i++){
  console.log(Faker.Name.firstName(), String(Faker.random.number())); 
  var hello = function(){
    console.log("This is my world!!");
  }
}