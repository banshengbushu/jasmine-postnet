function checkPostcode(postcode) {
    let correctPostcode= [];
    const codeArray = postcode.split('-');
    const correctPostcodes = codeArray[1]==undefined?codeArray[0]:codeArray[0]+codeArray[1];

    for(const correctCode of correctPostcodes){
        let length = correctPostcodes.length;
        if(typeof parseInt(correctCode) === "number"&& length === 5||length===9||length ===10){
            correctPostcode.push(parseInt(correctCode));
        }
    }
    return correctPostcode;
}

function getCheckCode(correctPostcodes) {
    const sum = correctPostcodes.reduce((a,b)=>a+b);
    return (10 - sum%10)%10;
}
function getIndex(allItems) {
    let indexArray=[];
    for(const allItem of allItems){
        indexArray.push(allItems.indexOf(allItem));
    }
    return indexArray;
}

function buildBarcode(checkCode,correctPostcodes,allItems) {
    const zipCode = [];
    let barcode;
    correctPostcodes.push(checkCode);
    const indexArray = getIndex(allItems);

    for(const correctPostcode of correctPostcodes){
       const index = indexArray.find(index=>index === correctPostcode);

        zipCode.push(allItems[index]);
        barcode = '|'+(zipCode.join(""))+'|';
    }
    return barcode;
}

module.exports = {checkPostcode,getCheckCode,buildBarcode};