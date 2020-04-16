/*
    zad 7
    Usuń z bazy osoby o wzroście przekraczającym 190.
*/

printjson(db.people.findOne({
    height : {
        $gt: "190.00"
    }
}))

printjson(db.people.remove({
    height : {
        $gt: "190.00"
    }
}))

printjson(db.people.findOne({
    height : {
        $gt: "190.00"
    }
}))