module.exports = {
    "type": "Program",
    "loc": {
        "start": {
            "line": 1,
            "column": 0
        },
        "end": {
            "line": 1,
            "column": 4
        }
    },
    "range": [
        0,
        4
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
                    "column": 4
                }
            },
            "range": [
                0,
                4
            ],
            "expression": {
                "type": "Literal",
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 4
                    }
                },
                "range": [
                    0,
                    4
                ],
                "value": process.versions.node >= "9.0.0" ? new RegExp(String.raw`.`, "s") : null,
                "raw": "/./s",
                "regex": {
                    "pattern": ".",
                    "flags": "s"
                }
            }
        }
    ],
    "sourceType": "script",
    "tokens": [
        {
            "type": "RegularExpression",
            "value": "/./s",
            "loc": {
                "start": {
                    "line": 1,
                    "column": 0
                },
                "end": {
                    "line": 1,
                    "column": 4
                }
            },
            "range": [
                0,
                4
            ],
            "regex": {
                "flags": "s",
                "pattern": "."
            }
        }
    ]
};