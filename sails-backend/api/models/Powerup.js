
module.exports = {

  attributes: {
    powerup_id: {
      type: 'number',
      required: true
    },
    powerup_quantity: {
      type: 'number',
      required: true
    },

    powerup_detail_id: {
      model: 'powerupDetail',
      unique: true      
    },
    
    player_emailAddress: {
      model: 'player'
    }

  },

};

