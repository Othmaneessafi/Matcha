db-migrate db:drop matcha --config ./config/database.json
db-migrate db:create matcha --config ./config/database.json
db-migrate up --config ./config/dev.json