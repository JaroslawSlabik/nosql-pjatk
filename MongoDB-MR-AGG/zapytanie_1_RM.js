/*
    zad 1
    Średnią wagę i wzrost osób w bazie z podziałem na płeć (tzn. osobno mężczyzn, osobno kobiet);
*/


var mapFunction = function(){
    var key = this.sex;
    var value = {
        count: 1,
        height: parseFloat(this.height),
        weight: parseFloat(this.weight)
    };

    emit(key, value);
}

var reduceFunction = function(key, values){
    var result = {count: 0, height: 0.0, weight: 0.0};

    for (var idx = 0; idx < values.length; idx++) {
        result.count += values[idx].count;
        result.height += values[idx].height;
        result.weight += values[idx].weight;
    }

    return result;
}

var finalizeFunction = function(key, reducedValue){
    var result = {height: 0.0, weight: 0.0};

    result.height = reducedValue.height / reducedValue.count;
    result.weight = reducedValue.weight / reducedValue.count;

    return result;
}


printjson(db.people.mapReduce(mapFunction, reduceFunction, {
    out: { merge: "map_reduce_1" },
    finalize: finalizeFunction
}));

printjson(db.map_reduce_1.find().toArray());

db.map_reduce_1.drop();