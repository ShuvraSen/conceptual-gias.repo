//chocolate
document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
    console.log('clicked');

    const chocoletInputField=getElementByIdForInputField('kitkat-quantity');
    const chocolateTextField=getTextPriceField('kitkat-price');
   const chocolateTotalPrice=chocoletInputField*chocolateTextField;
   console.log(typeof chocolateTotalPrice)

   const budgetChocolateTextField=getTextPriceField('chocolate');
   const setChocolatePrice=setPrice('chocolate',chocolateTotalPrice);
   totalPrice();
   //console.log(typeof setChocolatePrice)

//     const kitKatQualityInputField=document.getElementById('kitkat-quantity');
//     const kitKatQualityInputFieldString=kitKatQualityInputField.value;
//     //console.log(kitKatQualityInputFieldString);
//     const kitKatQualityInputFieldNumber=parseInt(kitKatQualityInputFieldString);
//     const priceChocolate=document.getElementById('kitkat-price');
//     const priceChocolateString=priceChocolate.innerText;
//     const priceChockletNumber=parseInt(priceChocolateString);

//     const priceTotalForChocolate=priceChockletNumber*kitKatQualityInputFieldNumber;
//     //console.log(priceTotalForChocolate)

// //budget section:
//      const budgetChocolateTextPrice=document.getElementById('chocolate');
//      const budgetChocolateTextPriceString=budgetChocolateTextPrice.innerText;
//      const budgetChocolateTextPriceNumber=parseInt(budgetChocolateTextPriceString);
//      const budgetPriceForChocolate=budgetChocolateTextPriceNumber+priceTotalForChocolate;
//      budgetChocolateTextPrice.innerText=budgetPriceForChocolate

})
//rose
document.getElementById('rose-buy-btn').addEventListener('click',function(){
    console.log('clicked');

    const roseInputField=getElementByIdForInputField('rose-quantity');
    const roseTextField=getTextPriceField('rose-price');
   const roseTotalPrice=roseInputField*roseTextField;
   console.log(roseTotalPrice)

   const budgetRoseTextField=getTextPriceField('rose');
   const setRosePrice=setPrice('rose',roseTotalPrice);
   totalPrice()

})
document.getElementById('diary-buy-btn').addEventListener('click',function(){
    console.log('clicked');

    const diaryInputField=getElementByIdForInputField('diary-quantity');
    const diaryTextField=getTextPriceField('diary-price');
   const diaryTotalPrice=diaryInputField*diaryTextField;
   console.log(diaryTotalPrice)

   const budgetDiaryTextField=getTextPriceField('diary');
   const setDiaryPrice=setPrice('diary',diaryTotalPrice);
   totalPrice();
})

document.getElementById('promoApplyBtn').addEventListener('click',function(){
   const promoCode= getInputValue('promo-code')
   console.log(promoCode);
   console.log(typeof promoCode);

   if(promoCode==101){
    const totalInput=document.getElementById('total').innerText;
   // console.log(typeof totalInput)
    //const getDiscount=parseInt(totalInput)*.1;
    const sum=totalInput-parseInt(totalInput)*.1;
    console.log(typeof sum);
    console.log(sum);

setPrice('all-total',sum);

   }
   else{
    alert('wrong')
   }
})

