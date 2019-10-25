
module.exports = {

  attributes: {
    achievement_id: {
      type: 'number',
      required: true
    },
    achievement_achieved: {
      type: 'boolean',
      defaultsTo: false
    },
    
    achievement_detail_id: {
      model: 'achievementDetail',
      unique: true
    },

    player_emailAddress: {
      model: 'player'
    }

  },

};

