// Immediately Invoked Function Expressions (IIFE)


(function chai(){ //"func 'chai' is name of the func"
    // named IIFE
    console.log(`DB CONNECTED`);// content inside the func
})(); '() in yello color refers implementation like "func()". '

( (name) => {// "name" refers para of  func"
    console.log(`DB CONNECTED TWO ${name}`);// func content
} )('hitesh')// "   'hitesh' is the argument  "
