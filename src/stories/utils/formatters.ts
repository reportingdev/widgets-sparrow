import { isFinite } from "lodash";

const percentageFormatter = (value:number) => {
  
  // round the value
  let percentage = Math.round((value + Number.EPSILON) * 100) / 100;

  if(!isFinite(percentage)) {
    // check non-numeric outcomes
    if(isNaN(percentage)) {
      percentage = 0;
    }
    if(Math.abs(percentage) === Infinity) {
      if(percentage>0) {
        return `+∞%`;
      } else {
        return '-∞%';
      }
    }
  }

  if(percentage > 0) {
    return `+${percentage}%`;
  }

  // handles negative and zero cases
  return `${percentage}%`;
}
const addCommasToNumber = (x:number) => x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
const abbreviateNumber = (num:number, digits = 1) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" }, // thousands
    { value: 1e6, symbol: "M" }, // millions
    { value: 1e9, symbol: "B" }, // billions
    { value: 1e12, symbol: "T" },// trillions
    { value: 1e15, symbol: "Q" },// quadrillion
    { value: 1e18, symbol: "QQ" } // quintrillion
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup.slice().reverse().find(function (item) {
    return num >= item.value;
  });
  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}
const roundToTwo = (num:number) => Math.round((num + Number.EPSILON) * 100) / 100;

const shorthandDates = (dateString:string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const shortDate = `${month} ${day}`;
    return shortDate;
}

export {
  percentageFormatter,
  addCommasToNumber,
  abbreviateNumber,
  roundToTwo,
  shorthandDates
};