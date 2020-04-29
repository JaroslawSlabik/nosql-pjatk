/*
    zad 5
    Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty.
*/


db.people.aggregate([
    {$match: {sex : "Female", nationality: "Poland"}},
    {$unwind : "$credit"},
    {$group: {_id: "$credit.currency", balanceSum: { $sum: { $convert:{ input: "$credit.balance", to: "double" }}}, balanceAvg: { $avg: { $convert:{ input: "$credit.balance", to: "double" }}}}},
    {$out : "aggregate_5"}
]);

printjson(db.aggregate_5.find().toArray());

db.aggregate_5.drop();