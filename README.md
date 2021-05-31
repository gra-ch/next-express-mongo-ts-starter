# Next.js TypeScript MongoDB Express Starter

## Getting started

1. Clone this repository and open it

```bash
git clone https://github.com/gra-ch/next-express-mongo-ts-starter your-next-project
cd your-next-project
```

2. Install dependencies

```bash
yarn
```

3. Launch the dev mode

```bash
yarn dev
```

4. To view the project open `http://localhost:3000`.

5. Here we go!

## What's preconfigured?

The intent of this starter is to be really slim so it's not a nightmare to remove or change stuff, that's why there are just a few things preconfigured:

- TypeScript
- MongoDB
- Express server
- ESLint
- Prettier
- A few yarn scripts
- Some folder structure

## Scripts

- `yarn dev`. Runs the project in dev mode, which means that it won't check types and will restart with every change you make.
- `yarn build`. Compiles the project.
- `yarn start`. Runs the compiled program. Remember to execute `yarn build` before attempting to launch the program.
- `yarn typecheck`. Checks the typings of the project. Gets executed before trying to create a new commit but you can also run it manually.
- `yarn format`. Runs Prettier. Format all documents.
- `yarn lint`. Runs ESLint. You can append `--fix` in order to fix autofixable issues.

## Contributing

1. Fork this repository;
2. Create your branch: `git checkout -b my-new-feature`;
3. Commit your changes: `git commit -m 'Add some feature'`;
4. Push to the branch: `git push origin my-new-feature`.

**After your pull request is merged**, you can safely delete your branch.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more information.

---

Made with ♥ by Grace Cheng
