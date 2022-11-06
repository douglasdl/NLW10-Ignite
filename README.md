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
npm i zod
npm i short-unique-id
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

Generade the seed (dummy data)
```sh
npx prisma db seed
```

Test HTTP routes:
- [Postman]()
- [Insomnia]()
- [Hoppscotch]()

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
npm i axios
```

Install development dependencies
```sh
npm install -D tailwindcss postcss autoprefixer
```

Create the Tailwind configuration file
```sh
npx tailwindcss init -p
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
npm install --save phosphor-react-native
```

Install development dependencies
```sh
npm i react-native-svg-transformer
```

Install Expo dependencies
```sh
npx expo install react-native-svg@12.1.1
npx expo install react-native-safe-area-context@3.3.2
npx expo install expo-font @expo-google-fonts/roboto
npx expo install expo-auth-session expo-random
npx expo install expo-web-browser
```

Log to your Expo account
```sh
npx expo whoami
npx expo login
```

## VS Code Extensions

- [Prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)


- [Native Base](https://nativebase.io/)
- [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [Web Browser](https://docs.expo.dev/versions/v46.0.0/sdk/webbrowser/)
- [Google Cloud Auth](https://console.cloud.google.com/)

## Layout
- [Figma](https://www.figma.com/file/Ld9q6mt8Rsg7982IzL5DK6/Bolão-da-Copa?node-id=0%3A1)