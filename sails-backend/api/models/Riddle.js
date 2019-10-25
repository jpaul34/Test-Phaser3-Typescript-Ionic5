
module.exports = {

  attributes: {
    riddle_id: {
      type: 'number',
      required: true
    },
    riddle_text: {
      type: 'string',
      required: true,
      description: 'Texto de la adivinaza',
      maxLength: 30,
    },
    riddle_urlImage: {
      type: 'string',
      required: true,
      description: 'Url de la imagen para la adivinanza'
    },
    riddle_answer: {
      type: 'string',
      required: true,
      description: 'Respuesta de la adivinanza'
    },
    riddle_urlAnswerSilhouette: {
      type: 'string',
      required: true,
      description: 'Url de la imagen con la silueta de la respuesta'
    },

    puzzle_id: {
      model: 'puzzle',
      unique: true
    }

  },

};

