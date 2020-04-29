/*
    zad 4
    Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości;
*/


db.people.aggregate([
    {$addFields : {bmi: { $divide:[{ $convert:{ input: "$weight", to: "double" }}, { $pow:[{$divide:[{ $convert:{ input: "$height", to: "double" }} , 100.0]}, 2]} ] }}},
    {$group : {_id: "$nationality", avgBMI: {$avg : "$bmi"}, minBMI: {$min : "$bmi"}, maxBMI: {$max : "$bmi"}}},
    {$out : "aggregate_4"}
]);

printjson(db.aggregate_4.find().toArray());

db.aggregate_4.drop();