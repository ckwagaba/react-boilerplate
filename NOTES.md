I migrated this project from my ubuntu machine to an ubuntu workspace on c9.io

`yarn` could not install modules, complaining that

error ts-loader@4.4.2: The engine "node" is incompatible with this module. Expected version ">=6.11.5".
error Found incompatible module
info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.

I googled and found a solution on Github: `https://github.com/gilbarbara/react-joyride/issues/131`

Turns out ignoring engines with this command solved it for me!

`yarn --ignore-engines`