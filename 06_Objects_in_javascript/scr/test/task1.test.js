const { findTitle } = require("../task1");

describe('findTitle', () => {
    test('test', () => {
        expect(true).toBe(true);
    })

    test('return arr + str js', () => {
        expect(findTitle( [{title: 'Some title1'},
            {title: 'I like JS'},
            {user: 'This obj does not have key title js'},
            {title: 'Js - is the best!'}], 'js')).toEqual([ { title: 'I like JS' }, { title: 'Js - is the best!' } ]);
    });

});