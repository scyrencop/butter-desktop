module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "jquery": true,
        "browser": true
    },
    "globals": {
        // App
        "nw": true,
        "App": true,
        "Settings": true,
        "AdvSettings": true,
        "ScreenResolution": true,
        "Database": true,
        "detectLanguage": true,
        "Common": true,
        "indexedDB": true,
        "startupTime": true,
        "deleteFolder": true,
        "deleteCookies": true,
        "isVideo": true,
        "minimizeToTray": true,
        "promisifyDb": true,
        "db": true,
        "Promise": true,

        // Global variables
        "_": true,
        "async": true,
        "inherits": true,
        "Q": true,
        "os": true,
        "moment": true,
        "crypt": true,
        "semver": true,
        "fs": true,
        "path": true,
        "mkdirp": true,
        "rimraf": true,
        "tar": true,
        "AdmZip": true,
        "zlib": true,
        "charsetDetect": true,
        "iconv": true,
        "gui": true,
        "win": true,
        "data_path": true,
        "i18n": true,
        "url": true,
        "tls": true,
        "http": true,
        "request": true,
        "querystring": true,
        "URI": true,
        "WebTorrent": true,
        "child": true,
        "Trakt": true,

        // Third party
        "Backbone": true,
        "Mousetrap": true,
        "_": true,
        "request": true,
        "videojs": true,
        "vjs": true
    },
    "extends": "eslint:recommended",
    "rules": {
        "accessor-pairs": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "array-callback-return": "off",
        "arrow-body-style": "error",
        "arrow-parens": "off",
        "arrow-spacing": [
            "error",
            {
                "after": true,
                "before": true
            }
        ],
        "block-scoped-var": "off",
        "block-spacing": "error",
        "brace-style": [
            "error",
            "1tbs"
        ],
        "callback-return": "off",
        "camelcase": "off",
        "capitalized-comments": "off",
        "class-methods-use-this": "error",
        "comma-dangle": "off",
        "comma-spacing": "off",
        "comma-style": [
            "error",
            "last"
        ],
        "complexity": "off",
        "computed-property-spacing": [
            "error",
            "never"
        ],
        "consistent-return": "off",
        "consistent-this": "off",
        "curly": "off",
        "default-case": "off",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "off",
        "eol-last": "off",
        "eqeqeq": "off",
        "func-call-spacing": "off",
        "func-name-matching": "error",
        "func-names": [
            "error",
            "never"
        ],
        "func-style": "off",
        "generator-star-spacing": "error",
        "global-require": "off",
        "guard-for-in": "off",
        "handle-callback-err": "off",
        "id-blacklist": "error",
        "id-length": "off",
        "id-match": "error",
        "indent": "off",
        "init-declarations": "off",
        "jsx-quotes": "error",
        "key-spacing": "off",
        "keyword-spacing": "off",
        "line-comment-position": "off",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "lines-around-comment": "off",
        "lines-around-directive": "off",
        "max-depth": "off",
        "max-len": "off",
        "max-lines": "off",
        "max-nested-callbacks": "error",
        "max-params": "off",
        "max-statements": "off",
        "max-statements-per-line": "error",
        "multiline-ternary": "off",
        "new-parens": "error",
        "newline-after-var": "off",
        "newline-before-return": "off",
        "newline-per-chained-call": "off",
        "no-alert": "off",
        "no-array-constructor": "off",
        "no-await-in-loop": "error",
        "no-bitwise": "off",
        "no-caller": "error",
        "no-catch-shadow": "off",
        "no-confusing-arrow": [
            "error",
            {
                "allowParens": true
            }
        ],
        "no-constant-condition": [
            "error",
            {
                "checkLoops": false
            }
        ],
        "no-continue": "off",
        "no-console": "off",
        "no-div-regex": "error",
        "no-duplicate-imports": "error",
        "no-else-return": "off",
        "no-empty": [
            "error",
            {
                "allowEmptyCatch": true
            }
        ],
        "no-empty-function": "off",
        "no-eq-null": "off",
        "no-eval": "error",
        "no-extend-native": "off",
        "no-extra-bind": "off",
        "no-extra-label": "error",
        "no-extra-parens": "off",
        "no-floating-decimal": "error",
        "no-implicit-coercion": [
            "error",
            {
                "boolean": false,
                "number": false,
                "string": false
            }
        ],
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-inline-comments": "off",
        "no-inner-declarations": [
            "error",
            "functions"
        ],
        "no-invalid-this": "off",
        "no-iterator": "error",
        "no-label-var": "error",
        "no-labels": "error",
        "no-lone-blocks": "error",
        "no-lonely-if": "off",
        "no-loop-func": "off",
        "no-magic-numbers": "off",
        "no-mixed-operators": "off",
        "no-mixed-requires": "off",
        "no-multi-spaces": "off",
        "no-multi-str": "error",
        "no-multiple-empty-lines": "error",
        "no-native-reassign": "error",
        "no-negated-condition": "off",
        "no-negated-in-lhs": "error",
        "no-nested-ternary": "off",
        "no-new": "error",
        "no-new-func": "error",
        "no-new-object": "error",
        "no-new-require": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": "off",
        "no-path-concat": "error",
        "no-plusplus": "off",
        "no-process-env": "off",
        "no-process-exit": "error",
        "no-proto": "error",
        "no-prototype-builtins": "error",
        "no-restricted-globals": "error",
        "no-restricted-imports": "error",
        "no-restricted-modules": "error",
        "no-restricted-properties": "error",
        "no-restricted-syntax": "error",
        "no-return-assign": "off",
        "no-return-await": "error",
        "no-script-url": "error",
        "no-self-compare": "error",
        "no-sequences": "off",
        "no-shadow": "off",
        "no-shadow-restricted-names": "error",
        "no-spaced-func": "off",
        "no-sync": "off",
        "no-tabs": "off",
        "no-template-curly-in-string": "error",
        "no-ternary": "off",
        "no-throw-literal": "off",
        "no-trailing-spaces": "off",
        "no-undef-init": "error",
        "no-undefined": "off",
        "no-underscore-dangle": "off",
        "no-unmodified-loop-condition": "error",
        "no-unneeded-ternary": "off",
        "no-unused-expressions": "off",
        "no-use-before-define": "off",
        "no-useless-call": "off",
        "no-useless-computed-key": "error",
        "no-useless-concat": "error",
        "no-useless-constructor": "error",
        "no-useless-escape": "off",
        "no-useless-rename": "error",
        "no-useless-return": "off",
        "no-var": "off",
        "no-void": "error",
        "no-warning-comments": "off",
        "no-whitespace-before-property": "error",
        "no-with": "error",
        "object-curly-newline": "off",
        "object-curly-spacing": "off",
        "object-property-newline": [
            "error",
            {
                "allowMultiplePropertiesPerLine": true
            }
        ],
        "object-shorthand": "off",
        "one-var": "off",
        "one-var-declaration-per-line": "off",
        "operator-assignment": "off",
        "operator-linebreak": "off",
        "padded-blocks": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "error",
        "prefer-numeric-literals": "error",
        "prefer-reflect": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
        "quote-props": "off",
        "quotes": "off",
        "radix": "off",
        "require-await": "error",
        "require-jsdoc": "off",
        "rest-spread-spacing": "error",
        "semi": "error",
        "semi-spacing": [
            "error",
            {
                "after": true,
                "before": false
            }
        ],
        "sort-imports": "error",
        "sort-keys": "off",
        "sort-vars": "off",
        "space-before-blocks": "off",
        "space-before-function-paren": "off",
        "space-in-parens": "off",
        "space-infix-ops": "off",
        "space-unary-ops": "off",
        "spaced-comment": "off",
        "strict": "off",
        "symbol-description": "error",
        "template-curly-spacing": [
            "error",
            "never"
        ],
        "unicode-bom": [
            "error",
            "never"
        ],
        "valid-jsdoc": "off",
        "vars-on-top": "off",
        "wrap-iife": "off",
        "wrap-regex": "off",
        "yield-star-spacing": "error"
    }
};
