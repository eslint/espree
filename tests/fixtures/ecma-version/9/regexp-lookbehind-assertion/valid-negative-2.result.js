const condtionalRegex = require("../../../../lib/conditional-regex-value");

module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 9
        }
    },
    "range": [
        0,
        9
    ],
    "body": [
        {
            "type": "ExpressionStatement",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                0,
                9
            ],
            "expression": condtionalRegex({
                "type": "Literal",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 9
                    }
                },
                "range": [
                    0,
                    9
                ],
                "raw": "/(?<!a)/u",
                "regex": {
                    "pattern": "(?<!a)",
                    "flags": "u"
                }
            })
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/(?<!a)/u",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 9
                }
            },
            "range": [
                0,
                9
            ],
            "regex": {
                "flags": "u",
                "pattern": "(?<!a)"
            }
        }
    ]
};
