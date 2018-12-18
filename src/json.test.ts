import {normalize, transformDates,
        transformNormalizedDates} from './json';

test('normalize', ()=> {
    let data = JSON.parse(`[
        {"id": 1, "name": "Bill"},
        {"id": 2, "name": "Steve"},
        {"id": 5, "name": "Bob"}
    ]`);
    expect(normalize(data)).toEqual({
        byId: {
            1: {'id': 1, 'name': 'Bill'},
            2: {'id': 2, 'name': 'Steve'},
            5: {'id': 5, 'name': 'Bob'}
        },
        all: [1, 2, 5]
    });
});

test('transformDates', ()=> {
    let data = JSON.parse(`[
        {"id": 1, "date": "2018-05-05:0:0"},
        {"id": 2, "date": "2018-06-05:0:0"}
    ]`);
    expect(transformDates(data)).toEqual([
        {'id': 1, 'date': new Date(2018, 4, 5, 0, 0, 0, 0)},
        {'id': 2, 'date': new Date(2018, 5, 5, 0, 0, 0, 0)}
    ]);
});

test('transformNormalizedDates', ()=> {
    let data = JSON.parse(`{
        "byId": {
            "1": {"id": 1, "date": "2018-05-05:0:0"},
            "2": {"id": 2, "date": "2018-06-05:0:0"}
        },
        "all": [1, 2]
    }`);
    expect(transformNormalizedDates(data)).toEqual({
        byId: {
            1: {'id': 1, 'date': new Date(2018, 4, 5, 0, 0, 0, 0)},
            2: {'id': 2, 'date': new Date(2018, 5, 5, 0, 0, 0, 0)}
        },
        all: [1, 2]
    });
});
