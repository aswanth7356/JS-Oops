
// Q1: print first recursive element (recursive -> repeated)

s="abcabc"          //a


const recursive=(s)=>{
    var obj={}
    for(i of s){        //i=a    obj={a:1,b:1,c:1}
        if(i in obj){
            console.log(i);
            break
        }
        else{
            obj[i]=1
        }
    }
}
recursive(s)









