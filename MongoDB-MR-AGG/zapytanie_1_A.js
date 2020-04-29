/*
    zad 1
    Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet);
*/


db.people.aggregate([
    {$group: {_id: "$sex", height: { $avg: { $convert:{ input: "$height", to: "double" }}}, weight: { $avg: { $convert:{ input: "$weight", to: "double" }}}}},
    {$out : "aggregate_1"}
]);

printjson(db.aggregate_1.find().toArray());

db.aggregate_1.drop();