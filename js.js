function fibonaci(num){
   let fibNum = [0, 1];
   for (let i = 1; fibNum[i] < num; i++){
      fibNum.push(fibNum[i] + fibNum[i - 1])
      }
       console.log(fibNum);
   }

let num = +prompt("");
fibonaci(num);

   
   