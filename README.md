Reproduce [issue #13641](https://github.com/prisma/prisma/issues/13641) of prisma/prisma.

## Reproduction

- `rm -rf package-lock.json`
- `nvm install 18.3.0`
- `nvm use 18.3.0`
- spin up Postgres database running at `$DATABASE_URL`
- `npm prisma generate`
- `npm prisma db push`
- `npm prisma db seed`
