
module.exports = {

  attributes: {
    powerup_detail_id: {
      type: 'number',
      required: true,
      unique: true
    },
    powerup_name: {
      type: 'string',
      required: true,
      description: 'Nombre del powerup',
      maxLength: 30,
    },
    powerup_description: {
      type: 'string',
      required: true,
      description: 'Descripción del powerup',
      maxLength: 30,
    },
    powerup_urlImage: {
      type: 'string',
      required: true,
      description: 'Url de la imagen del logro',
    },

    powerup_id: {
      model: 'powerup',
      unique: true
    }

  },

};

