
module.exports = {

  attributes: {
    achievement_detail_id: {
      type: 'number',
      required: true
    },
    achievement_name: {
      type: 'string',
      required: true,
      description: 'Nombre del logro',
      maxLength: 30,
    },
    achievement_type_name: {
      type: 'string',
      required: true,
      description: 'Tipo logro: insignia, trodeo, etc',
      maxLength: 30,
    },
    achievement_urlImage: {
      type: 'string',
      required: true,
      description: 'Url de la imagen del logro',
    },

    achievement_id: {
      model: 'achievement',
      unique: true
    },

  },

};

