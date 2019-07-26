# colorce

Terminal highlighting as simple as it should be.

![Console Color](https://i.imgur.com/Da53488.png)

# Install

```
$ npm install colorce
```

# Usage

Simply import and invoke the module at the top of your main script.

```js
require('colorce')();

console.error('This is an error'); // Already works!
```

You can also customize the looks by using known packages such as [chalk](https://www.npmjs.com/package/chalk) or [colors.js](https://www.npmjs.com/package/colors)

```js
const chalk = require('chalk');
const colors = require('colors');

require('colorce')({
    log: chalk.hex('#DEADED').bold,
    info: chalk.blue,
    warn: chalk.white.bgYellow,
    error: colors.red,
    success: colors.green.underline
});
```

If you want to disable color you can pass the following arguments to your application.

```js
$ node app.js --no-color
```
