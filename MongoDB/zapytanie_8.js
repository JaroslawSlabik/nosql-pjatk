/*
    zad 8
    Zastąp nazwę miasta „Moscow” przez „Moskwa” u wszystkich osób w bazie.
*/

printjson(db.people.findOne({
    "location.city" : "Moscow"
}))

printjson(db.people.updateMany(
{},
{
    $set: {
        "location.city" : "Moskwa"
    }
}
))

printjson(db.people.findOne({
    "location.city" : "Moscow"
}))

printjson(db.people.findOne({
    "location.city" : "Moskwa"
}))