const app = require('../main/getBarcode');

describe('app', () => {

    const postcode = "95713";
    const correctPostcode = [9,5,7,1,3];
    var allItems = ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];

    it('should check postCode', () => {
        const expectText = [9,5,7,1,3];
        expect(app.checkPostcode(postcode)).toEqual(expectText);
    });

    it('should check correctPostcode', () => {

        const expectText = 5;
        expect(app.getCheckCode(correctPostcode)).toEqual(expectText);
    });
    it('should buildBarcode',()=>{
        const checkCode = 5;
        const expectText = '||:|:::|:|:|:::|:::||::||::|:|:|';
        expect(app.buildBarcode(checkCode,correctPostcode,allItems)).toEqual(expectText);
    }

    )
});