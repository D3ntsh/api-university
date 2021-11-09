# api-university

Iniciar el proyecto

```
docker-compose up
```

Crear Migracion
```
docker-compose exec app npm run typeorm -- -n migrationName -d src/core/migration
```

Correr Migración
```
docker-compose exec app npm run typeorm:run
```