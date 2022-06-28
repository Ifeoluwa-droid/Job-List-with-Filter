
let dark = [
    'Jonas',
    'Mikkel',
    'Ulrich',
    'Claudia',
    'Noah',
    'Adam'
 ]
 
 let dark2 = [
   'Claudia',
   'Noah',
   'Adam'
 ]

 let dark3 = [
    'A0',
    'B0',
    'C0'
 ]
 
 const found = dark2.some(r =>  dark.includes(r))
 const found1 = dark2.every(r => dark.includes(r))
 console.log(found);

 console.log(dark.concat(dark2).concat(dark3).length);