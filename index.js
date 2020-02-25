function setup() {
  let inp = createInput('');
   inp.input(intputAnNumber);
}

function draw() {

}

function intputAnNumber(){
var number = this.value();
console.log(number);

}
