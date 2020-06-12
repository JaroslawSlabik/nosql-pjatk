//7.
//Listę osób, które napisały scenariusz filmu, które wyreżyserowały wraz z tytułami takich filmów (koniunkcja – ten sam autor scenariusza i reżyser)
MATCH (scenarzysta:Person)-[:WROTE]->(film:Movie)<-[:DIRECTED]-(rezyser:Person) WHERE scenarzysta=rezyser RETURN scenarzysta, film, rezyser