function getElementByIdForInputField(id){
   const productQualityInputField=document.getElementById(id);
   const productQualityInputString=productQualityInputField.value;
   const productQualityInputNumber=parseInt(productQualityInputString);
   productQualityInputField.value=''
   return productQualityInputNumber;
}

function getTextPriceField(textid){
   const pricePerProduct= document.getElementById(textid);
   const pricePerProductString=pricePerProduct.innerText;
   const pricePerProductNumber=parseInt(pricePerProductString);
   return pricePerProductNumber;
}

function setPrice(id,value){
    const textElemnt=document.getElementById(id);
    textElemnt.innerText=value;

}

function getInnerText(id){
   const value= document.getElementById(id).innerText;
   return parseInt(value)
}

function totalPrice(){
    const chocolettext=getInnerText('chocolate');
    const rosetext=getInnerText('rose');
    const diarytext=getInnerText('diary');
  //const totalText=document.getElementById(id);
    
    const totalB=(chocolettext)+(rosetext)+(diarytext);
    document.getElementById('total').innerText=totalB;
    console.log(typeof totalB)
    

}

function getInputValue(id){
    const valueInputField=document.getElementById(id).value;
    return parseInt(valueInputField);
}