function receivesAFunction(callback) {
    callback();
  }
  
  
  function returnsANamedFunction() {
    return function namedFunction() {
    
    };
  }
  

  function returnsAnAnonymousFunction() {
    return function() {
      
    };
  }
  
  
  receivesAFunction(() => {
    console.log("Callback function called by receivesAFunction");
  });
  
  const namedFunc = returnsANamedFunction();
  console.log(namedFunc.name); 
  
  const anonymousFunc = returnsAnAnonymousFunction();
  console.log(anonymousFunc.name);