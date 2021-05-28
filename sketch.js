var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;

var feed , lastFed 


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  foodObj = new Food();

 
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  var button = createButton("FEED")
  button.position(250,200)
  
  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();



  //write code to read fedtime value from the database 
  if(dog = sadDog){
    foodS = foodS + 4
  }
 
  //write code to display text lastFed time here

 

  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time


}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
