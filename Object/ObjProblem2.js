
weatherData=[
    {district:'Thrissur',temp:32},
    {district:'Kottayam',temp:29},
    {district:'Palakkad',temp:34},
    {district:'Ernakulam',temp:33},
    {district:'Thrissur',temp:29},
    {district:'Kottayam',temp:30},
    {district:'Palakkad',temp:32},
    {district:'Ernakulam',temp:31}
]

// name of districts with temp greater than 31

console.log(weatherData.filter(i=>i.temp>=31).map(i=>i.district));

// check any district have temp greater than 35

console.log(weatherData.some(i=>i.temp>=35))

// display temparature in palakkad

console.log(weatherData.filter(i=>i.district=='Palakkad').map(i=>i.temp));


// display name of district with highest temparature

console.log(weatherData.reduce((a,b)=>a.temp>b.temp?a:b).district);


// list name of district with  temparature less than 30

console.log(weatherData.filter(i=>i.temp<30).map(i=>i.district));