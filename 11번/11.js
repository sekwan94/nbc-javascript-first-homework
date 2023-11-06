let date = new Date();
console.log(date.getHours());

if (date.getHours < 10){
console.log("good morning");
}  else if(10 <= date.getHours <= 18) {
console.log("good afternoon");}
else{ console.log("good evening"); }