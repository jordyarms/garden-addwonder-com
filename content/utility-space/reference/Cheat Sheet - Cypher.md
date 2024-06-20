Development in progress.

## Cypher Basics
Basic `MATCH` Pattern Structure:
```cypher
MATCH 
	(:Label {property:'value'})-[:EDGE_TYPE]->(:Label)
```
Basic Full Retrieval:
```cypher
MATCH (n) RETURN n
```
Basic `WHERE` conditionality:
```cypher
MATCH (p:Person)-[:ACTED_IN]-(m:Movie)
WHERE p.name = 'Tom Hanks'
RETURN m.title AS Movie
```
Basic `count` retrieval
```cypher
MATCH (u:User)-[:RATED]-(m:Movie)
WHERE m.title = 'Apollo 13'
RETURN count(*) AS `Number of reviewers`
```
Basic result manipulation
```cypher
MATCH (p:Person)-[:ACTED_IN]-(m:Movie)
WHERE m.title = 'Hoffa'
RETURN  p.name AS Actor, p.born as `Year Born` ORDER BY p.born DESC LIMIT 1
```

Basic transformation of property to node relationship insertion
```cypher
MATCH (a:Actor)-[r:ACTED_IN]->(m:Movie)
MERGE (l:Role {name:r.role})
MERGE (a)-[:PLAYED]->(l)
MERGE (l)-[:IN_MOVIE]->(m)
```

Basic CSV Ingestion
```cypher
LOAD CSV WITH HEADERS
FROM 'https://data.neo4j.com/importing-cypher/persons.csv' AS row
MERGE (p:Person {tmdbId: toInteger(row.person_tmdbId)})
SET
	p.imdbId = toInteger(row.person_imdbId),
	p.bornIn = row.bornIn,
	p.name = row.name,
	p.bio = row.bio,
	p.poster = row.poster,
	p.url = row.url,
	p.born = row.born,
	p.died = row.died
```

Basic Match CSV Ingestion for Edge Creation
```cypher
LOAD CSV WITH HEADERS
FROM 'https://data.neo4j.com/importing-cypher/acted_in.csv' AS row
MATCH (p:Person {tmdbId: toInteger(row.person_tmdbId)})
MATCH (m:Movie {movieId: toInteger(row.movieId)})
MERGE (p)-[r:ACTED_IN]->(m)
SET r.role = row.role
```
Batch Processing Transactions
```cypher
CALL {
  // query
} IN TRANSACTIONS [OF X ROWS]
```

Regarding Constraints
```cypher
// syntax for creating a unique constraint on a property
CREATE CONSTRAINT [constraint_name][IF NOT EXISTS] 
FOR (n:LabelName) 
REQUIRE n.propertyName IS UNIQUE

// example
CREATE CONSTRAINT Person_tmdbId IF NOT EXISTS 
FOR (x:Person) 
REQUIRE x.tmdbId IS UNIQUE

// syntax for removal
DROP CONSTRAINT [constraint_name]

// show contraints
SHOW CONSTRAINTS
```