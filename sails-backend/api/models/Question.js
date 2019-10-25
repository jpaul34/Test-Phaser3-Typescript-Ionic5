
module.exports = {

  attributes: {
    question_id: {
      type: 'number',
      required: true
    },
    question_title: {
      type: 'string',
      required: true,
      description: 'Titulo de la pregunta',
      maxLength: 30,
    },
    question_text: {
      type: 'string',
      required: true,
      description: 'Texto de la pregunta',
    },
    question_clue: {
      type: 'string',
      required: true,
      description: 'Pista de la pregunta'
    },

    answer_id: {
      model: 'answer',
      unique: true
    }

  },

};

