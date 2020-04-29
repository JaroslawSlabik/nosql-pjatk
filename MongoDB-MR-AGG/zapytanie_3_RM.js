/*
    zad 3
    Listę unikalnych zawodów;
*/


var mapFunction = function(){
    var key = this.job;
    var value = 1;

    emit(key, value);
}

var reduceFunction = function(key, values){
    var result = 0;

    for (var idx = 0; idx < values.length; idx++) {
        result += values[idx];
    }

    return result;
}

var finalizeFunction = function(key, reducedValue){
    return reducedValue;
}


printjson(db.people.mapReduce(mapFunction, reduceFunction, {
    out: { merge: "map_reduce_3" },
    finalize: finalizeFunction
}));

printjson(db.map_reduce_3.find({value : 1}).toArray()); // lub wykonać mapReduce na map_reduce_3

db.map_reduce_3.drop();