/*
    zad 2
    Łączną ilość środków pozostałych na kartach kredytowych osób w bazie, w podziale na waluty;
*/


var mapFunction = function(){
    for(let index = 0; index < this.credit.length; ++index) {
        let creditCard = this.credit[index];
        emit(creditCard.currency, parseFloat(creditCard.balance));
    }
}

var reduceFunction = function(key, values){
    var result = 0.0;

    for (var idx = 0; idx < values.length; idx++) {
        result += values[idx];
    }

    return result;
}

var finalizeFunction = function(key, reducedValue){
    return reducedValue;
}


printjson(db.people.mapReduce(mapFunction, reduceFunction, {
    out: { merge: "map_reduce_2" },
    finalize: finalizeFunction
}));

printjson(db.map_reduce_2.find().toArray());

db.map_reduce_2.drop();