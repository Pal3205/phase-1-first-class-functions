function receivesAFunction(callback) {
    callback()
  }
  
function returnsANamedFunction(){
    return function named(){
        console.log("Tatakae, Eren")
    }
}
function returnsAnAnonymousFunction() {
    return function() {
      console.log("The Rumblng")
    }
  }