const percentageChange = (oldValue:number,newValue:number) => {
  return (newValue - oldValue) / Math.abs(oldValue) * 100;
}

export {
  percentageChange
};