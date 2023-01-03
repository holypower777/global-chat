import convertApiToDTO from './convertApiToDTO';

describe('convertApiToDTO', () => {
    describe('no manipulations must be done', () => {
        it('string to string', () => {
            const res = convertApiToDTO('test');
            expect(res).toEqual('test');
        });

        it('num to num', () => {
            const res = convertApiToDTO(1);
            expect(res).toEqual(1);
        });

        it('null to null', () => {
            const res = convertApiToDTO(null);
            expect(res).toEqual(null);
        });

        it('undefined to undefined', () => {
            const res = convertApiToDTO(undefined);
            expect(res).toEqual(undefined);
        });

        it('array of strings to array of strings', () => {
            const res = convertApiToDTO(['one', 'two', 'three']);
            expect(res).toEqual(['one', 'two', 'three']);
        });

        it('object without snakecase', () => {
            const testCase = {
                one: 'one',
                two: 'two',
            };
            const res = convertApiToDTO(testCase);
            expect(res).toEqual(testCase);
        });

        it('nested objects without snakecase', () => {
            const testCase = {
                one: 'one',
                two: {
                    three: 'three',
                },
            };
            const res = convertApiToDTO(testCase);
            expect(res).toEqual(testCase);
        });

        it('array of objects without snakecase', () => {
            const testCase = [
                {
                    one: 'one',
                    two: 'two',
                },
                {
                    one: 'one',
                    two: {
                        three: 'three',
                    },
                },
                'three',
            ];
            const res = convertApiToDTO(testCase);
            expect(res).toEqual(testCase);
        });
    });

    describe('manipulatins must be done', () => {
        it('simple object', () => {
            const res = convertApiToDTO({ hello_world: 1 });
            expect(res).toEqual({ helloWorld: 1 });
        });

        it('simple object with several fields', () => {
            const res = convertApiToDTO({ hello_world: 1, kek_lol: 2 });
            expect(res).toEqual({ helloWorld: 1, kekLol: 2 });
        });

        it('simple object with several fields, some of them camelCased', () => {
            const res = convertApiToDTO({
                hello_world: 1,
                kek_lol: 2,
                lolKek: 3,
            });
            expect(res).toEqual({ helloWorld: 1, kekLol: 2, lolKek: 3 });
        });

        it('singe depth nested object', () => {
            const res = convertApiToDTO({
                hello_world: 1,
                kek_lol: {
                    lolKek: 2,
                    not_camel_case: 3,
                },
                is_true: true,
            });
            expect(res).toEqual({
                helloWorld: 1,
                kekLol: {
                    lolKek: 2,
                    notCamelCase: 3,
                },
                isTrue: true,
            });
        });

        it('two depth nested object', () => {
            const res = convertApiToDTO({
                hello_world: 1,
                kek_lol: {
                    lolKek: 2,
                    not_camel_case: {
                        is_true: true,
                        isFalse: false,
                    },
                },
            });
            expect(res).toEqual({
                helloWorld: 1,
                kekLol: {
                    lolKek: 2,
                    notCamelCase: {
                        isTrue: true,
                        isFalse: false,
                    },
                },
            });
        });

        it('array of objects', () => {
            const res = convertApiToDTO([
                { is_true: true, is_false: false },
                { is_lol: 'lol', isKek: 'kek' },
                'o4ko',
            ]);
            expect(res).toEqual([
                { isTrue: true, isFalse: false },
                { isLol: 'lol', isKek: 'kek' },
                'o4ko',
            ]);
        });

        it('array of two depth nested objects', () => {
            const res = convertApiToDTO([
                { is_true: true, is_false: false },
                { is_lol: 'lol', isKek: 'kek' },
                {
                    kek_lol: {
                        lolKek: 2,
                        not_camel_case: {
                            is_true: true,
                            is_false: false,
                        },
                    },
                },
            ]);
            expect(res).toEqual([
                { isTrue: true, isFalse: false },
                { isLol: 'lol', isKek: 'kek' },
                {
                    kekLol: {
                        lolKek: 2,
                        notCamelCase: {
                            isTrue: true,
                            isFalse: false,
                        },
                    },
                },
            ]);
        });
    });

    describe('manipulatins must be done with dates', () => {
        it('object with dates', () => {
            const res = convertApiToDTO<{
                helloWorld: number;
                kekLol: Date;
                lolKek: Date;
            }>(
                {
                    hello_world: 1,
                    kek_lol: 2,
                    lolKek: 3,
                },
                ['kekLol', 'lolKek']
            );

            expect(res.helloWorld).toEqual(1);
            expect(res.kekLol.getFullYear()).toEqual(1970);
            expect(res.lolKek.getFullYear()).toEqual(1970);
        });

        it('array of dates objects', () => {
            const res = convertApiToDTO<Array<{ createdAt: Date }>>(
                [{ created_at: 1 }, { created_at: 1 }, { created_at: 1 }],
                ['createdAt']
            );
            expect(res[0].createdAt.getFullYear()).toEqual(1970);
            expect(res[1].createdAt.getFullYear()).toEqual(1970);
            expect(res[2].createdAt.getFullYear()).toEqual(1970);
        });
    });
});
