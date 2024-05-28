

products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]


//1. print product name only

console.log(products.map(i=>i.pName));

//2. print all mobile details whose display is lcd

console.log(products.filter(i=>i.display=='lcd'));


//3. print 5g mobile phone name

console.log(products.filter(i=>i.band=='5g').map(i=>i.pName))

//4. sort mobile based on price

console.log(products.sort((a,b)=>b.price-a.price));

//5. print costly mobile

console.log(products.reduce((a,b)=>a.price>b.price?a:b).pName);


//6. print low cost mobile

console.log(products.reduce((a,b)=>a.price>b.price?b:a).pName);

