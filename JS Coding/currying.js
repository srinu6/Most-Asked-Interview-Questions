function sum(a, b, c, d) {
    return a + b + c + d;
  }
  
  let curriedSum = curry(sum);
  
  console.log(curriedSum(1,2,3,4,5)); // 10
  console.log(curriedSum(1)(2,3)(4,5)); // 10
  console.log(curriedSum(1)(2)(3)(4)); // 10

  const curry =(fn)=>[

    return (...args)=>{
      return 
    }
  ]