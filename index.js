const { Console } = require('console');
const logger = new Console({ stdout: process.stdout, stderr: process.stderr });

const colors = {
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    green: '\x1b[32m',
    white: '\x1b[37m'
};

const defaults = {
    log: styleBuilder(colors.white),
    info: styleBuilder(colors.blue),
    error: styleBuilder(colors.red),
    warn: styleBuilder(colors.yellow),
    success: styleBuilder(colors.green)
};

function loggerBuilder(loggerFn, styleFn) {
    return (data, ...params) => {
        loggerFn(styleFn(data, ...params));
    };
}

function styleBuilder(color) {
    return (data, ...params) =>
        `${color}${data} ${[...params].map(p => `${p} `).join('')}\x1b[0m`;
}

module.exports = function(options) {
    if (process.argv.some(arg => arg == '--no-color')) {
        return;
    }

    const style = Object.assign({}, defaults, options);

    console.log = loggerBuilder(logger.log, style.log);
    console.info = loggerBuilder(logger.info, style.info);
    console.warn = loggerBuilder(logger.warn, style.warn);
    console.error = loggerBuilder(logger.error, style.error);
    console.success = loggerBuilder(logger.log, style.success);
};
