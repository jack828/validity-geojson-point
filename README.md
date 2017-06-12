# Validity-GeoJSON-Point

A validity style validator for GeoJSON Points

## Installation

```
npm install --save validity-geojson-point
```

## Usage

This module is designed to be used with [Schemata](https://npmjs.com/schemata):

```javascript
var validateGeojson = require('./validator')
  , schemata = require('schemata')

  , schema = schemata(
    { location:
      { type: Object
      , validators: { all: [ validateGeojson ] }
      }
    }
  )

schema.validate(
  { location:
    { type: 'Point'
    , coordinates: [ -0.439069, 51.6933176 ]
    }
  }
, function (err, errors) {
  // errors = {}
})

schema.validate(
  { location:
    { type: 'Dinosaur'
    , foo: 'bar'
    }
  }
, function (err, errors) {
  // errors = { location: 'Location must be a valid GeoJson Point' }
})
```

