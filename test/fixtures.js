module.exports =
{ valid:
  { location:
    { type: 'Point'
    , coordinates: [ -0.439069, 51.6933176 ]
    }
  }
, validZeroZero:
  { location:
    { type: 'Point'
    , coordinates: [ 0, 0 ]
    }
  }
, invalidNoType:
  { location:
    {
      coordinates: [ -0.439069, 51.6933176 ]
    }
  }
, invalidMissingCoords:
  { location:
    {
      type: 'Point'
    }
  }
, invalidWrongType:
  { location:
    { type: 'Square'
    , coordinates: [ -0.439069, 51.6933176 ]
    }
  }
, invalidOob:
  { location:
    { type: 'Point'
    , coordinates: [ 300, 300 ]
    }
  }
, invalidObjects:
  {
    location:
    { type: 'Point'
    , coordinates: [ { a: 1 }, { b: 2 } ]
    }
  }
, unknown:
  { location:
    { banana: 'Hello!' }
  }
}
