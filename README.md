# Base GraphQL

This is my starter-pack for a Node.js based GraphQL server.

## Structure

This project is structured in a modular way:

- `app`: contains a [Feathers.js](https://feathersjs.com/) application. Why Feathers? Because it's
  great for fetching data from different databases via adapters. It also has an amazing concept of
  hooks and is well-typed.
- `definitions`: contains
  [Typescript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html).
- `env`: contains environmental variables
- `named`: reexports things from type-graphql, mongoose and typegoose with nice naming. Why is it
  needed? Because they all have similar things, and it's extremely easy to get confused.
- `server`: contains an [Apollo](https://www.apollographql.com/docs/apollo-server/) server
- `utils`: contains utils
- `models`: contains both [type-graphql](https://typegraphql.com/) and
  [typegoose](https://typegoose.github.io/typegoose/) models
- `api`: contains GraphQL resolvers
