module.exports =
{ valid:
  { location:
    { type: 'Point'
    , coordinates: [ -0.439069, 51.6933176 ]
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
    {
      coordinates: [ 300, 300 ]
    }
  }
, unknown:
  { location:
    { banana: 'Hello!' }
  }
}
