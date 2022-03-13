export const basicNode = {
  "type": "element",
  "tagName": "h1",
  "properties": {
    "dataTarget": "original"
  },
  "children": [
    {
      "type": "text",
      "value": "Hello world",
      "position": {
        "start": {
          "line": 1,
          "column": 28,
          "offset": 27
        },
        "end": {
          "line": 1,
          "column": 39,
          "offset": 38
        }
      }
    }
  ],
  "data": {
    "position": {
      "opening": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 28,
          "offset": 27
        }
      },
      "closing": {
        "start": {
          "line": 1,
          "column": 39,
          "offset": 38
        },
        "end": {
          "line": 1,
          "column": 44,
          "offset": 43
        }
      },
      "properties": {
        "dataTarget": {
          "start": {
            "line": 1,
            "column": 5,
            "offset": 4
          },
          "end": {
            "line": 1,
            "column": 27,
            "offset": 26
          }
        }
      }
    }
  },
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 1,
      "column": 44,
      "offset": 43
    }
  }
}

export const noAttributeNode = {
  "type": "element",
  "tagName": "div",
  "properties": {},
  "children": [
    {
      "type": "text",
      "value": "An empty node",
      "position": {
        "start": {
          "line": 1,
          "column": 6,
          "offset": 5
        },
        "end": {
          "line": 1,
          "column": 19,
          "offset": 18
        }
      }
    }
  ],
  "data": {
    "position": {
      "opening": {
        "start": {
          "line": 1,
          "column": 1,
          "offset": 0
        },
        "end": {
          "line": 1,
          "column": 6,
          "offset": 5
        }
      },
      "closing": {
        "start": {
          "line": 1,
          "column": 19,
          "offset": 18
        },
        "end": {
          "line": 1,
          "column": 25,
          "offset": 24
        }
      },
      "properties": {}
    }
  },
  "position": {
    "start": {
      "line": 1,
      "column": 1,
      "offset": 0
    },
    "end": {
      "line": 1,
      "column": 25,
      "offset": 24
    }
  }
}

