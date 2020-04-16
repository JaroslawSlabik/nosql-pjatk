/*
    zad 6
    Dodaj siebie do bazy, zgodnie z formatem danych użytych dla
    innych osób (dane dotyczące karty kredytowej, adresu
    zamieszkania i wagi mogą być fikcyjne).
*/

printjson(db.people.insert({
    sex : "Male",
    first_name : "Jarosław",
    last_name : "Słabik",
    job : "programista",
    email : "s20833@pjwstk.edu.pl",
    location : {
        city : "Warszawa",
        address : {
            streetname : "Kamienia",
            streetnumber : "20"
        }
    },
    description : "NULL",
    height : "180.00",
    weight : "90.00",
    birth_date : "1995-01-18T18:00:00Z",
    nationality : "Poland",
    credit : [
        {
            "type" : "diners-club-carte-blanche",
            "number" : "6475706164757061",
            "currency" : "PLN",
            "balance" : "-1000000"
        }
    ]
}))

printjson(db.people.findOne({
    first_name : "Jarosław",
    last_name : "Słabik"
}))