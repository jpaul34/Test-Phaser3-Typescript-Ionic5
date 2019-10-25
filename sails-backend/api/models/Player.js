
module.exports = {

  attributes: {
    player_name: {
      type: 'string',
      required: true,
      description: 'Primer nombre del jugador',
      maxLength: 30,
      example: 'Nombre'
    },
    player_lastName: {
      type: 'string',
      required: true,
      description: 'Primer apellido del jugador',
      maxLength: 30,
      example: 'Apellido'
    },
    player_emailAddress: {
      type: 'string',
      required: true,
      unique: true,
      isEmail: true,
      maxLength: 75,
      example: 'nombre.apellido@epn.edu.ec'
    },
    player_password: {
      type: 'string',
      required: true,
      description: 'Securely hashed representation of the user\'s login password.',
      protect: true,
      example: '2$28a8eabna301089103-13948134nad'
    },
    player_memberOf: {
      type: 'string',
      required: true,
      description: 'Primer nombre del jugador',
      maxLength: 30,
      example: 'Nombre'
    },
    player_relationshipEPN: {
      type: 'string',
      required: true,
      description: 'Primer nombre del jugador',
      maxLength: 30,
      example: 'Nombre'
    },
    player_avatarName: {
      type: 'string',
      required: true,
      description: 'nombre del avatar',
      maxLength: 30,
    },

    player_achievements: {
      collection: 'achievement',
      via: 'player_emailAddress'
    },

    player_powerups: {
      collection: 'powerup',
      via: 'player_emailAddress'
    },
    
    player_areas: {
      collection: 'area',
      via: 'player_emailAddress'
    }

  },

};

