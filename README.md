# Testament App

## Build

```
git pull git@github.com:TestamentSoar/testament.git
```

```
cd frontend
yarn install
cd ..
```

```
docker-compose run backend python manage.py migrate
```

```
docker-compose build
docker-compose up
```

## URLs

backend: http://localhost:8000/api/v1/document  
frontend: http://localhost:3000/

