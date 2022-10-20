import { compressNumbers } from '../compressNumbers';

describe('The compressNumbers function', () => {
    describe('Given a number input', () => {
        it('Compresses the numbers', () => {
            const res = compressNumbers(12234);
            expect(res).toBe('11221314');
        });
        it('Compresses the numbers', () => {
            const res = compressNumbers(0);
            expect(res).toBe('10');
        });
        it('Compresses the numbers', () => {
            const res = compressNumbers(1e9);
            expect(res).toBe('1190');
        });
    });

    describe('When given wrong inputs', () => {
        it('returns error', () => {
            const res = compressNumbers('a');
            expect(res).toBe('wrong input');
        });
        it('returns an error', () => {
            const res = compressNumbers(null);
            expect(res).toBe('wrong input');
        });
        it('returns an error', () => {
            const res = compressNumbers(undefined);
            expect(res).toBe('wrong input');
        });
    });
});
