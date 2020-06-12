//5.
//Wszystkie filmy osób, które grały w Matrix
MATCH (:Movie{title:"The Matrix"})<-[:ACTED_IN]-(aktor:Person)-[:ACTED_IN]->(film:Movie) RETURN film, aktor