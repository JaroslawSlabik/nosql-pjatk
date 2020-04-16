/*
    zad 10
    Usuń u wszystkich osób o zawodzie „Editor” własność „email”.
*/

printjson(db.people.findOne({
    job : "Editor"
}))

printjson(db.people.updateMany({
    job : "Editor"
},
{
    $unset: {
        email: ""
    }
},
false
))

printjson(db.people.findOne({
    job : "Editor"
}))