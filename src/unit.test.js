
function sum(a, b){
    return a + b;
}

describe('sum', function () {
    it('return result', () => {
        expect(sum(1,2)).toEqual(3);
    });
});

function arrayify(input = []) {
    return Array.isArray(input) 
        ? input 
        : [input];
}

 
describe('arrayify', () => {
    it('returns an empty array when given nothing', () => {
        expect(arrayify()).toEqual([])
    });

    it('returns the array-ed version of what it is given', () => {
        expect(arrayify('arrayDesFesses')).toEqual(['arrayDesFesses'])
    });

    it('returns the array if it is given an array', () => {
        expect(arrayify(['tabloz'])).toEqual(['tabloz'])
    });
});