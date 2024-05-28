
// word count object

var s="hi hello hi luminar"
// {hi:2,hello:1,luminar:1}



const wordCount=(s)=>{
    var obj={}
    var a=s.split(" ")   //a=[hi,hello,hi,luminar]
    for(var i of a){
        if(i in obj){
            obj[i]+=1  //{hi:2,hello:1}
        }else{
            obj[i]=1   //{hi:1,hello:1}
        }
    }
    return obj
}
console.log(wordCount(s));



// another short method

const wordCountz=(s)=>{
    var obj={}
    var a=s.split(" ").map(i=>i in obj?obj[i]+=1:obj[i]=1)
    return obj
}
console.log(wordCountz(s));
