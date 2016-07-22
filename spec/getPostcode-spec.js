const app = require('../main/getPostcode');

describe('getPostcode', () => {

    const barcode = '||:|:::|:|:|:::|:::||::||::|:|:|';
    var allItems = ['||:::',':::||','::|:|','::||:',':|::|',':|:|:',':||::','|:::|','|::|:','|:|::'];

    it('should check checkBarcode', () => {
        const expectText = ['|:|::',':|:|:','|:::|',':::||','::||:',':|:|:'];
        expect(app.checkBarcode(barcode)).toEqual(expectText);
    });

    it('should check checkCode', () => {

        const expectText = [9,5,7,1,3,5];
        const correctBarcode = ['|:|::',':|:|:','|:::|',':::||','::||:',':|:|:'];
        expect(app.checkCode(correctBarcode,allItems)).toEqual(expectText);
    });
    it('should check getPostcode',()=>{
            const correctCode = [9,5,7,1,3,5];
            const expectText = "95713";
            expect(app.getPostcode(correctCode)).toEqual(expectText);
        }

    )
});