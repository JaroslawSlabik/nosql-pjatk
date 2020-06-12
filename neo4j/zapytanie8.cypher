//8.
//Listę filmów, w których grał zarówno Hugo Weaving jak i Keanu Reeves
MATCH (:Person{name: "Keanu Reeves"})-[:ACTED_IN]->(filmy:Movie)<-[:ACTED_IN]-(:Person{name: "Hugo Weaving"}) RETURN filmy