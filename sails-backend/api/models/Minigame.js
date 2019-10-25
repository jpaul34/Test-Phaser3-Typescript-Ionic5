
module.exports = {

  attributes: {
    minigame_id: {
      type: 'number',
      required: true
    },
    minigame_name: {
      type: 'string',
      required: true,
      description: 'Nombre del minijuego',
      maxLength: 30,
    },
    minigame_rules: {
      type: 'string',
      required: true,
      description: 'Reglas del minijuego'
    },
    minigame_goal: {
      type: 'string',
      required: true,
      description: 'Objetivo del minijuego'
    },
    minigame_type: {
      type: 'string',
      required: true,
      description: 'Tipo de minijuego',
      maxLength: 30,
    },

    minigame_locations: {
      collection: 'location',
      via: 'minigame_id'
    },

  },

};

