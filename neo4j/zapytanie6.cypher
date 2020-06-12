//6.
//Listę aktorów (aktor = osoba, która grała przynajmniej w jednym filmie) wraz z ilością filmów, w których grali
MATCH (aktor:Person)-[move:ACTED_IN]->(:Movie) RETURN aktor, count(move) as liczba_filmow