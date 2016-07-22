function checkBarcode(barcode) {
    const correctBarcode = [];
    const cutBarcode = barcode.slice(1,barcode.length-1);
    for(let i = 0;i < cutBarcode.length;i+=5){
        correctBarcode.push(cutBarcode.slice(i,i+5));
    }
        return correctBarcode;
    }

function checkCode(correctBarcode,allItems) {

        const code = correctBarcode.map(correctCode=> {
            return allItems.findIndex(item=>correctCode === item);
        });
    if(code.reduce((a,b)=>a+b) %10 === 0){
        return code;
    }
}

function getPostcode(correctCode) {
    return correctCode.splice(0,correctCode.length-1)
    .join("").toString();
    
}
module.exports = {checkBarcode,checkCode,getPostcode};