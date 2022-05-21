/* eslint-disable max-nested-callbacks */
import splitIntoColumns from './split-into-columns';

describe('Split into chunks', () => {
    describe('split check ignoring corner cases', () => {
        describe('1 column', () => {
            it('[21, 3, 3, 13, 1]', () => {
                const columns = splitIntoColumns([21, 3, 3, 13, 1], 1);

                expect(columns).toEqual([[21, 3, 3, 13, 1]]);
            });
        });

        describe('2 columns', () => {
            it('[21, 3, 3, 13, 1]', () => {
                const columns = splitIntoColumns([21, 3, 3, 13, 1], 2);

                expect(columns).toEqual([[21], [3, 3, 13, 1]]);
            });

            it('[4, 4, 5, 8, 4, 3]', () => {
                const columns = splitIntoColumns([4, 4, 5, 8, 4, 3], 2);

                expect(columns).toEqual([[4, 4, 5], [8, 4, 3]]);
            });
        });

        describe('3 columns', () => {
            it('[1, 2, 1, 2, 1]', () => {
                const columns = splitIntoColumns([1, 2, 1, 2, 1], 3);

                expect(columns).toEqual([[1, 2], [1, 2], [1]]);
            });

            it('[4, 2, 4, 3, 3, 5, 1, 1]', () => {
                const columns = splitIntoColumns([4, 2, 4, 3, 3, 5, 1, 1], 3);

                expect(columns).toEqual([[4, 2, 4], [3, 3], [5, 1, 1]]);
            });

            it('[21, 3, 3, 13, 1]', () => {
                const columns = splitIntoColumns([21, 3, 3, 13, 1], 3);

                expect(columns).toEqual([[21], [3, 3], [13, 1]]);
            });

            it('[4, 4, 5, 8, 4, 3]', () => {
                const columns = splitIntoColumns([4, 4, 5, 8, 4, 3], 3);

                expect(columns).toEqual([[4, 4], [5, 8], [4, 3]]);
            });
        });

        describe('4 columns', () => {
            it('[1, 2, 1, 2, 1]', () => {
                const columns = splitIntoColumns([1, 2, 1, 2, 1], 4);

                expect(columns).toEqual([[1], [2], [1], [2, 1]]);
            });

            it('[1, 2, 1, 2, 1]', () => {
                const columns = splitIntoColumns([4, 2, 4, 3, 3, 5, 1, 1], 4);

                expect(columns).toEqual([[4, 2], [4], [3, 3], [5, 1, 1]]);
            });
        });

        describe('6 columns', () => {
            it('[1, 1, 2, 1, 1, 1, 1, 1]', () => {
                const columns = splitIntoColumns([1, 1, 2, 1, 1, 1, 1, 1], 6);

                expect(columns).toEqual([[1, 1], [2], [1], [1, 1], [1], [1]]);
            });
        });
    });

    describe('corner cases', () => {
        it('empty array', () => {
            const columns = splitIntoColumns([], 4);

            expect(columns).toEqual([]);
        });

        it('split into 4 columns, but only 3 passed', () => {
            const columns = splitIntoColumns([3, 4, 1], 4);

            expect(columns).toEqual([[3], [4], [1]]);
        });

        it('similar values', () => {
            const columns = splitIntoColumns([5, 5, 5, 5, 5], 5);

            expect(columns).toEqual([[5], [5], [5], [5], [5]]);
        });
    });

    describe('RazDva search bug, FR-1', () => {
        it('should not return undefined', () => {
            const columns = splitIntoColumns([1, 1, 1, 1, 1, 1, 1, 1], 5);

            expect(columns).toEqual([[1, 1], [1, 1], [1], [1, 1], [1]]);
        });
    });
});
