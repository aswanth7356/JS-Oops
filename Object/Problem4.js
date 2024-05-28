
// Q2: find duplicate elements

s="malayalam"        //aalam



const duplicate=(s)=>{
    var obj={}
    for(i of s){        //i=a    obj={a:1,b:1,c:1}
        if(i in obj){
            console.log(i);
        }
        else{
            obj[i]=1
        }
    }
}
duplicate(s)




// another method (output will get string type)



const duplicates=(s)=>{
    var obj={}
    var repeat=""
    for(i of s){        //i=a    obj={a:1,b:1,c:1}
        if(i in obj){
            repeat+=i
        }
        else{
            obj[i]=1
        }
    }
    console.log(repeat);
    console.log("first recursive elmnt",repeat[0]);
    console.log("last recursive elmnt",repeat[repeat.length-1]);

}
duplicates(s)


