This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

## ✋🏻 Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Next.js](https://nextjs.org/)

## Installation

Clone the repository, and install the dependencies by running the following commands:

```sh
  $ git clone https://github.com/ilovemochi/met-care
```

```sh
  $ cd met-care
```

```sh
 $ git checkout develop
```

```sh
 $ git pull origin develop
```

```sh
 $ npm install
```

## Running the application

Access the project folder and run the following command:

```bash
npm run dev
```

To run the tests, type the following command in the terminal:

```sh
npm run test
```

Open [http://localhost:3000](http://localhost:3000) on your browser to see the result.

## Coding Conventions

- Interfaces for React Components have to be named (ComponentName)Props
  - e.g - Component `const App = ({text}) => <div>{text}</div>`
  - e.g - Interface `interface AppProps { text: string }`
- All other Interfaces should be CamelCase version of the name of the function or object
- Only add the prefix I if there is no other Choice
  - e.g - Function `addStyles() => {}`
  - e.g - Interface `interface AddStyles {}`
- Do not use the type any, opt for unknown.
- Limit the use of classes but instead opt for pure single purpose functions.
- Rely on composability to deal with complexity
- Prefer Async/Await syntax over .chain with then.catch
- Separation of concerns in React
  - Defer logic to hooks and HOCs
  - Page state should be stored in a context API
  - Local state should be stored in component
  - Keep components as simple as possible so they can be more modular

## How to make a Commit

To make a commit must be used a following rule:

`git commit -m "*type*: commit-message"`

- Where type is: [ `build`, `chore`, `ci`, `docs`, `feat`, `fix`, `perf`, `refactor`, `revert`, `style`, `test` ]
- And commit-message must be written in lower-case.
  - e.g - ``` git commit -m"chore: set up eslint" ```

## How to Contribute

- Fetch/Pull the Develop Branch
- Create a Branch based on your issue name
  - e.g - Branch name is task/mc-(number)
  - e.g - Branch name is bug/mc-(number)
- Once done push your branch to origin and submit a PR to the Develop branch for review
  - e.g - ``` git push origin task/mc-(number) ```

