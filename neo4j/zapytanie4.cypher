//4.
//Wszystkie osoby, z którymi Hugo Weaving grał w tych samych filmach
MATCH (aktor:Person)-[:ACTED_IN]->(film:Movie)<-[:ACTED_IN]-(:Person{name: "Hugo Weaving"}) RETURN aktor, film