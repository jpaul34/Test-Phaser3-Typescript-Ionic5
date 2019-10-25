
module.exports = {

  attributes: {
    answer_id: {
      type: 'number',
      required: true
    },
    answer_question: {
      type: 'string',
      required: true,
      description: 'Respuesta de la pregunta',
      maxLength: 30,
    },
    answer_urlImage: {
      type: 'string',
      required: true,
      description: 'Url de la imagen de la respuesta',
    },

    question_id: {
      model: 'question',
      unique: true
    }
  },

};

