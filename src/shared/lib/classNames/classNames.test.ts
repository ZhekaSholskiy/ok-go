import {classNames} from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames(['className'])).toBe('className');
    });
    test('with multiple params', () => {
        const resultClass = 'class1 class2';
        expect(classNames(['class1', 'class2', ''])).toBe(resultClass);
    });
    test('with mods', () => {
        const resultClass = 'class1 class2 green';
        expect(classNames(['class1', 'class2', ''], {
            green: true,
        })).toBe(resultClass);
    });
    test('with mods false', () => {
        const resultClass = 'class1 class2 green';
        expect(classNames(['class1', 'class2', ''], {
            green: true,
            red: false,
        })).toBe(resultClass);
    });
    test('with mods undefined', () => {
        const resultClass = 'class1 class2 green';
        expect(classNames(['class1', 'class2', ''], {
            green: true,
            red: false,
            yellow: undefined,
        })).toBe(resultClass);
    });
});
