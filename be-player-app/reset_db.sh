psql -c "DROP DATABASE podible_project_db"

psql -c "CREATE DATABASE podible_project_db"

sequelize db:migrate

# npm test
