/*
    zad 9
    Dodaj do wszystkich osób o imieniu Antonio własność „hobby” o wartości „pingpong”.
*/

printjson(db.people.findOne({
    first_name : "Antonio"
}))

printjson(db.people.updateMany({
    first_name : "Antonio"
},
{
    $set: {
        hobby: "pingpong"
    }
},
false
))

printjson(db.people.findOne({
    first_name : "Antonio"
}))