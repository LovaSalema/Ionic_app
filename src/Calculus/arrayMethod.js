const array=[1,2,3,5,8,7];
//methode 1
const somme= array.reduce((a,b)=>a+b)
// console.log(somme);

//methode 2
let s=0;
for(let i=0; i<array.length; i++ ){
    s= s+ array[i]
}
// console.log(s);

//Math.min with object
function likes(names) {
    return {
      0: 'no one likes this',
      1: `${names[0]} likes this`, 
      2: `${names[0]} and ${names[1]} like this`, 
      3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
      4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
    }[Math.min(4, names.length)]
  }

  //Splice

  const myArray=[1,6,8,3,6,9,0]



  console.log(myArray.slice(2,5));