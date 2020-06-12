//2.
//Wszystkie filmy, w których grał Hugo Weaving
MATCH (filmy:Movie)<-[:ACTED_IN]-(:Person{name: "Hugo Weaving"}) RETURN filmy