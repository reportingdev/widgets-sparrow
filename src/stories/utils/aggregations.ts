
const sum = (values:number[])=>values.reduce((partialSum:number, a:number) => partialSum + a, 0);
const average = (values:number[])=>values.reduce((partialSum:number, a:number) => partialSum + a, 0) / values.length;
const count = (values:any[])=>values.length;
const min = (values:any[])=>Math.min(...values);
const max = (values:any[])=>Math.max(...values);
const mode = (a:any[]) => 
  Object.values<any>(
    a.reduce((count:any, e:any) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];

  const aggregateData = (values:Values, aggregation='total')=> {
    
    if(values.length === 0) {
      return 0;
    }
    if(aggregation === 'total') {
      return sum(values as number[]);
    }

    if(aggregation === 'average') {
      return average(values as number[]);
    }

    if(aggregation === 'count') {
      return count(values);
    }

    if(aggregation === 'min') {
      return min(values);
    }

    if(aggregation === 'max') {
      return max(values);
    }

    if(aggregation === 'mode') {
      return mode(values);
    }

  }


export {
  sum,
  average,
  count,
  min,
  max,
  mode,
  aggregateData
};