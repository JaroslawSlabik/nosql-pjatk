/*
    zad 2
    Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty;
*/


db.people.aggregate([
    {$unwind : "$credit"},
    {$group: {_id: "$credit.currency", balanceSum: { $sum: { $convert:{ input: "$credit.balance", to: "double" }}}}},
    {$out : "aggregate_2"}
]);

printjson(db.aggregate_2.find().toArray());

db.aggregate_2.drop();