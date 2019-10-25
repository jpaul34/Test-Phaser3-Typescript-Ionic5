
module.exports = {

  attributes: {
    puzzle_id: {
      type: 'number',
      required: true
    },
    puzzle_name: {
      type: 'string',
      required: true,
      description: 'Nombre del rompecabezas',
      maxLength: 30,
    },
    puzzle_description: {
      type: 'string',
      required: true,
      description: 'Descripción del rompecabezas'
    },
    puzzle_urlImage: {
      type: 'string',
      required: true,
      description: 'Url con la imagen para el rompecabeza'
    },

    riddle_id: {
      model: 'riddle',
      unique: true
    }

  },

};

