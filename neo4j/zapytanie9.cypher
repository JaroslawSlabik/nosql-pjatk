//9.
//Uzupełnienie bazy danych o film Captain America: The First Avenger wraz z uzupełnieniem informacji o reżyserze, scenarzystach i odtwórcach głównych ról (w oparciu o skrócone informacje z IMDB - http://www.imdb.com/title/tt0458339/) + zapytanie pokazujące dodany do bazy film wraz odtwórcami głównych ról, scenarzystą i reżyserem

CREATE (Movie{title : "Captain America: The First Avenger", released : 2011})

CREATE (Person{name : "Joe Johnston", born : 1950})
CREATE (Person{name : "Christopher Markus", born : 1970})
CREATE (Person{name : "Stephen McFeely", born : 1969})
CREATE (Person{name : "Chris Evans", born : 1981})
CREATE (Person{name : "Samuel L. Jackson", born : 1948})

MATCH (CA:Movie{title : "Captain America: The First Avenger"}), (JJ:Person{name : "Joe Johnston"}), (CM:Person{name : "Christopher Markus"}), (SMF:Person{name : "Stephen McFeely"}), (HW:Person{name : "Hugo Weaving"}), (CE:Person{name : "Chris Evans"}), (SLJ:Person{name : "Samuel L. Jackson"})
WITH
CREATE
(JJ)-[:`DIRECTED`]->(CA),
(CM)-[:`WROTE`]->(CA),
(SMF)-[:`WROTE`]->(CA),
(HW)-[:`ACTED_IN`]->(CA),
(CE)-[:`ACTED_IN`]->(CA),
(SLJ)-[:`ACTED_IN`]->(CA)
//Nie działa:
//Sugerowałem sie przykładem z dokumentacji: https://neo4j.com/docs/cypher-manual/current/clauses/match/ (3.1.4.1. Relationship types with uncommon characters)
//MATCH (charlie:Person { name: 'Charlie Sheen' }),(rob:Person { name: 'Rob Reiner' })
//CREATE (rob)-[:`TYPE INCLUDING A SPACE`]->(charlie)

MATCH (ludzie:Person)-[:WROTE|:ACTED_IN|:DIRECTED]->(film:Movie{title:"Captain America: The First Avenger"}) return ludzie, film