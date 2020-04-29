/*
    zad 5
    Średnia i łączna ilość środków na kartach kredytowych kobiet narodowości polskiej w podziale na waluty.
*/


var mapFunction = function(){

    if(this.sex == "Female" && this.nationality == "Poland")
    {
        this.credit.forEach(function(element, index, array) {

            var bal = parseFloat(element.balance);
            bal = (bal == undefined)? 0.0 : bal;

            var value = {
                count: 1,
                balance: bal,
                sumBalance: bal,
                avgBalance: bal
            };

            emit(element.currency, value);
        });
    }
}

var reduceFunction = function(key, values){
    var result = {
        count: 0,
        sumBalance: 0.0
    };

    for (var idx = 0; idx < values.length; idx++) {

        result.count += values[idx].count;
        result.sumBalance += values[idx].balance;
    }

    return result;
}

var finalizeFunction = function(key, reducedValue){
    var result = {
        avgBalance: 0.0,
        sumBalance: reducedValue.sumBalance
    };

    result.avgBalance = (reducedValue.count == 0.0)? 0.0 : (reducedValue.sumBalance / reducedValue.count);

    return result;
}

printjson(db.people.mapReduce(mapFunction, reduceFunction, {
    out: { merge: "map_reduce_5" },
    finalize: finalizeFunction
}));

printjson(db.map_reduce_5.find().toArray());

db.map_reduce_5.drop();