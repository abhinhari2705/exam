var abhin={
    adder : function a(currentNumber, endnumber, stepnumber) {
    sum = 0;
   
    for (; currentNumber > endnumber;) {
        currentNumber = currentNumber -stepnumber;
        sum =sum + currentNumber;
      //  console.log(sum);
    }
    return sum;
}

};
module.exports=abhin
