import {transformDates} from './json';

test('transformDates', ()=> {
    let data = JSON.parse(`[
        {"id": 1, "date": "2018-05-05:0:0"},
        {"id": 2, "date": "2018-06-05:0:0"}
    ]`);
    expect(transformDates(data)).toEqual([
        {'id': 1, 'date': new Date(2018, 4, 5, 0, 0, 0, 0)},
        {'id': 2, 'date': new Date(2018, 5, 5, 0, 0, 0, 0)}
    ]);
    
    data = JSON.parse(`{
        "byId": {
            "1": {"id": 1, "date": "2018-05-05:0:0"},
            "2": {"id": 2, "date": "2018-06-05:0:0"}
        },
        "all": [1, 2]
    }`);
    expect(transformDates(data, true)).toEqual({
        byId: {
            1: {"id": 1, "date": new Date(2018, 4, 5, 0, 0, 0, 0)},
            2: {"id": 2, "date": new Date(2018, 5, 5, 0, 0, 0, 0)}
        },
        all: [1, 2]
    });
});
