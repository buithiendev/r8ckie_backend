"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const development = {
    mongodb: {
        host: process.env.DEVELOPMENT_MONGDB_HOST || '',
    },
};
const production = {
    mongodb: {
        host: process.env.PRODUCTION_MONGDB_HOST || '',
    },
};
const configs = { development, production };
exports.default = configs;
//# sourceMappingURL=database.config.js.map