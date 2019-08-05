function hi(){
    return 'hello'
}

let gt = function() {
    console.log(this)
}

gt()

let gtN = () => console.log(this)  // function assigned to variable

gtN()

function phone ( cb ) {
    cb()
}

phone(() => {
    console.log(`callback function`)
})

function mobile (){
    function dial(){

    }
    dial()

    return() => {console.log(`Returning Function`)
}
}

console.log('' + mobile())      // return the ffunction 
let fn = mobile()

fn()                // returning the return value

mobile()()  //returning the return value
