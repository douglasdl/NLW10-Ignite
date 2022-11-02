# NLW10-Ignite

## Server
Create the project
```sh
npm init -y
```

Install dependencies
```sh
npm i fastify
npm i @fastify/cors
npm i @prisma/client
```

Install development dependencies
```sh
npm i typescript -D
npm i tsx -D
npm i prisma -D
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```

Convert from .ts to .js
```sh
npx tsc
```

Run the server
```sh
node src/server.js
```
Run the server using the script to use the tsx
```sh
npm run dev
```

Create the typescript setup (tsconfig.json)
```
npx tsc --init
```
Change the 
```json
"target": "es2016",  
```
to
```json
"target": "es2020",
```

Create the Prisma setup
```sh
npx prisma init --datasource-provider SQLite
```

After insert the table information on the schema.prisma file, run the migration:
```sh
npx prisma migrate dev
```

Open the Prisma Studio
```sh
npx prisma studio
```

Generate the ERD chart
```sh
npx prisma generate
```

## Web

Install dependencies
```sh

```

Install development dependencies
```sh

```


## Mobile

Install Expo dependencies
```sh

```

Install dependencies
```sh

```

Install development dependencies
```sh

```


## VS Cpde Extensions

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)