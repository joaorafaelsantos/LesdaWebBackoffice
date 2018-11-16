/**
 * @author João Santos <up201809187@fe.up.pt>
 */

const sum = require('../utils/sum');

test('adds 1 + 2 to equal 3', () => {
   expect(sum(1, 2)).toBe(3)
});