/*
    zad 3
    Listę unikalnych zawodów;
*/


db.people.aggregate([
    {$group: {_id: "$job", count: {'$sum': 1}}},
    {$match: { count: {'$eq': 1}}},
    {$out : "aggregate_3"}
]);

printjson(db.aggregate_3.find().toArray());

db.aggregate_3.drop();