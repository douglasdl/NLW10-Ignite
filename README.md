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

Create the project
```sh
npx create-next-app@latest --use-npm
```

Run the project
```sh
npm run dev
```

Install dependencies
```sh

```

Install development dependencies
```sh

```


## Mobile

Create the project
```sh
npx create-expo-app mobile
```
- Rename the App.js t App.tsx
- Create the tsconfig.json file

Start the project
```sh
npx expo start
```

Install dependencies
```sh
npm install native-base
```

Install development dependencies
```sh

```

Install Expo dependencies
```sh
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
npx expo install expo-font @expo-google-fonts/roboto
```

## VS Code Extensions

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)


- [Native Base](https://nativebase.io/)