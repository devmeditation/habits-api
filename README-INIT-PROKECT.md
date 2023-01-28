![screen](./noproject/habtis-api_devmeditation.png)

# HABITS

Se você é um iniciante em Backend com NodeJS essa breve doc vai lhe ajuda a usar esse projeto.

Autor: Dev Meditation

## COMANDOS

- Inicializar o projeto

```
mkdir backend 

cd habits-api

npm i

npx prisma init --datasource-provider SQLite
```

- Criando estrutura interna do bando de dados "SQLite"
```
npx prisma migrate dev
```

OBS.: você deve responder as perguntas do migrate dev

- Populando o DB com prisma seed
```
npx prisma db seed
```

- Visualizando o conteúdo do DB
```
npx prisma studio
```

