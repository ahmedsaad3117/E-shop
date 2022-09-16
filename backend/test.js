let obj = [{n: 5}, {n: 9}, {n: 13}, {n: 25}, {n: 40}]

const res = obj.reduce((acum,currn)=>{
    return acum +currn.n
},0)

const res2 = obj.reduce(function (accumulator, curValue) {
    return accumulator + curValue.n;
  });

console.log(res)
console.log(res2)