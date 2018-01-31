db_host=$1
db_port=$2
db_name=$3
db_user=$4
db_password=$5
echo "START!"
echo "parameters ${db_host} ${db_port} ${db_name} ${db_user} ${db_password}"
echo "parameters $1 $2"

function wait_postgres {
    echo "Waiting postgres to run on ${db_host} ${db_port}..."

#    while ! psql -h ${db_host} -U "postgres" -c "SELECT datname FROM pg_database LIMIT 1" >&/dev/null;
    while ! psql -h ${db_host} -U "postgres" -p ${db_port} -c "SELECT datname FROM pg_database LIMIT 1";
    do
      sleep 2
    done

    echo "Postgres launched"
}


if [[ ${db_host} == postgres* ]] ;
then
    wait_postgres
fi


wait_postgres


psql -h ${db_host} -U "postgres" -p ${db_port} -c "drop database ${db_name}"
psql -h ${db_host} -U "postgres" -p ${db_port} -c "create database ${db_name}"
psql -h ${db_host} -U "postgres" -p ${db_port} -c "create user ${db_user} with password '${db_password}'"
psql -h ${db_host} -U "postgres" -p ${db_port} -c "grant all privileges on database ${db_name} to ${db_user}"


echo "END!"
psql -q -h ${db_host} -p ${db_port} -U ${db_user} -d ${db_name} -f "init.sql"
