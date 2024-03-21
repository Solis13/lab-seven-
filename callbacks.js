let animals = ['Giraffe', 'Elephant', 'Yak' ]

animals.forEach (function(animal, index){ // function 
    console.log (animal,index)
})

animals.forEach(( animal, index) => {  // arrow fucntion notation
    console.log(animal, index)
})