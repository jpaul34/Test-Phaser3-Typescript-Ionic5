
module.exports = {

  attributes: {
    area_id: {
      type: 'number',
      required: true
    },
    area_name: {
      type: 'string',
      required: true,
      description: 'Nombre de la zona epn',
      maxLength: 30,
    },
    area_progress: {
      type: 'number',
      required: true
    },

    area_locations: {
      collection: 'location',
      via: 'area_id'
    },
        
    player_emailAddress: {
      model: 'player'
    }

  },

};

