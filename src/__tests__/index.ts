import { createHash } from '../index';

describe('UpHash test suite', () => {
  it('should createHash without arguments', () => {
    createHash();
  });
  it('should createHash with algorithm', () => {
    createHash({ algorithm: 'SHA-512' });
  });
  it.each([
    [0],
    ['1'],
    [true],
    [null],
    [2n],
    [[1]],
    [new Uint8Array(2)],
    [new Date],
    [{}],
    [undefined],
  ])('should hash value %s', async (input) => {
    const hash = createHash({ algorithm: 'SHA-512' });
    const value = await hash(input);
    expect(value).toBeDefined();
  });

  it('should make the same hashes for the same data', async () => {
    const hash = createHash({ algorithm: 'SHA-512' });
    const value1 = await hash({ a: '1', b: 2, c: true });
    const value2 = await hash({ b: 2, a: '1', c: true });
    expect(value1).toBe(value2);
  });
});
