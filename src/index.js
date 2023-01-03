module.exports = function toReadable (number) {
    let arr = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen','fourteen'
    ,'fifteen', 'sixteen','seventeen','eighteen', 'nineteen']
    let decade = ['twenty','thirty','forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    
      if (number==0){
        return 'zero';
      }else if(number<20){
        return read(number);
      }
      else if(number>19 && number<100){
        if(+String(number).slice(-1)==0){
          return `${readDecade(Number(String(number)[0]))}`
        }else{
        return `${readDecade(Number(String(number)[0]))} ${read(Number(String(number)[1]))}`;
      }
      }else if(number>=100 && number<1000){
        if(String(number).slice(-2)=='00'){
        return `${read(Number(String(number)[0]))} hundred`;
      }else if(+String(number).slice(1)<20){
        return `${read(Number(String(number)[0]))} hundred ${read(+String(number).slice(1))}`
      }else if(number>100 && +String(number).slice(-1)==0){
        return `${read(Number(String(number)[0]))} hundred ${readDecade(Number(String(number)[1]))}`
      }else{
        return `${read(Number(String(number)[0]))} hundred ${readDecade(Number(String(number)[1]))} ${read(Number(String(number)[2]))}`
      }
    }
    
    function read(num){
    return String(arr.filter((el,index)=>{
      if(index==num-1){
        return el
      }}))
    }
    function readDecade(num){
      return String(decade.filter((el,index)=>{
        if(index==num-2){
          return el
        }}))
      }
  }
