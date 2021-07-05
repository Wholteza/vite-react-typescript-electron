/* eslint-disable no-undef */
module.exports = {
    "env": {
        "browser": false,
        "node": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": 12,
        "sourceType": "common"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};
