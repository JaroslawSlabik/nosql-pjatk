/*
    zad 4
    Średnie, minimalne i maksymalne BMI (waga/wzrost^2) dla osób w bazie, w podziale na narodowości;

    TODO: Coś nie działa, kiedyś tutaj wrócę
    {
		"_id" : "Uganda",
		"value" : {
			"avgBMI" : NaN,
			"maxBMI" : 20.58589719317205,
			"minBMI" : 20.58589719317205
		}
	},
	{
		"_id" : "Ukraine",
		"value" : {
			"avgBMI" : NaN,
			"maxBMI" : undefined,
			"minBMI" : undefined
		}
	},

*/


var mapFunction = function(){
    var key = this.nationality;

    var weight = parseFloat(this.weight);
    weight = (weight == undefined)? 0.0 : weight;

    var height = parseFloat(this.height);
    height = (height == undefined)? 0.0 : (height / 100.0);

    var bmiCal = 0.0;
    if(height != 0.0 && weight != 0.0)
    {
        bmiCal = weight / (height * height);
    }

    var value = {
        count: 1,
        BMI: bmiCal,
        sumBMI: bmiCal,
        maxBMI: bmiCal,
        minBMI: bmiCal
    };

    emit(key, value);
}

var reduceFunction = function(key, values){

    var bmi = values[0].BMI;

    var result = {
        count: values[0].count,
        sumBMI: bmi,
        maxBMI: bmi,
        minBMI: bmi
    };

    for (var idx = 1; idx < values.length; idx++) {
        bmi = values[idx].BMI;

        result.count += values[idx].count;
        result.sumBMI += bmi;

        if(bmi > result.maxBMI)
            result.maxBMI = bmi;

        if(bmi < result.minBMI)
            result.minBMI = bmi;
    }

    return result;
}

var finalizeFunction = function(key, reducedValue){
    var result = {
        avgBMI: 0.0,
        maxBMI: reducedValue.maxBMI,
        minBMI: reducedValue.minBMI
    };

    result.avgBMI = (reducedValue.count == 0.0)? 0.0 : (reducedValue.sumBMI / reducedValue.count);

    return result;
}

printjson(db.people.mapReduce(mapFunction, reduceFunction, {
    out: { merge: "map_reduce_4" },
    finalize: finalizeFunction
}));

printjson(db.map_reduce_4.find().toArray());

db.map_reduce_4.drop();