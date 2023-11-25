const containsAllZeros = (test:string) => {
  const numbers = ['1','2','3','4','5','6','7','8','9'];
  for(let i=0;i<test.length;i++) {
    const char = test[i];
    if(numbers.includes(char)) {
      return false;
    }
  }
  return true;
}

const convertPxToNumber = (value:string) =>{
  if(value.endsWith('px')) {
    value = value.slice(0, -2)
  }
  return +value;

}

export {
  containsAllZeros,
  convertPxToNumber
};

