# Posts-Node.js

## Create a database mysql
### enter mysql bby terminal
```
$ mysql -u usuario -p
```
### create db
```
CREATE DATABASE "myDB"
```
## clone project
```
git clone https://github.com/EliasMoura2/Posts-Node.js.git
```
## Install dependecies
```
cd Posts-Node.js && npm i
```
## fill in environment variables in .env file
```
PORT = 3000
DB_USER = mysqlUser
DB_PASS = password
DB_NAME = nameDataBase
DB_HOST = localhost
DB_DIALECT = mysql | postgres | mariadb
```

## Run project
```
npm run dev
```

