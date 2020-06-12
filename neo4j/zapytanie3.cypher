//3.
//Reżyserzy filmów, w których grał Hugo Weaving
MATCH (dyrektor:Person)-[:DIRECTED]->(:Movie)<-[:ACTED_IN]-(:Person{name: "Hugo Weaving"}) RETURN dyrektor