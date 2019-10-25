
module.exports = {

  attributes: {
    location_id: {
      type: 'number',
      required: true
    },
    location_name: {
      type: 'string',
      required: true,
      description: 'Nombre de la localización epn',
      maxLength: 30,
    },
    location_score: {
      type: 'number',
      required: true,
      description: 'Puntaje de la localización',
    },

    area_id: {
      model: 'area'
    },
    
    minigame_id: {
      model: 'minigame'
    }

  },

};

