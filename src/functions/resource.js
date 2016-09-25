Object.assign(component, {

  resource: {

    selectClosestTo: function (entity) {
      var room = entity.room;
      var sources = room.find(FIND_SOURCES);
      var source = entity.pos.findClosestByRange(sources);

      if (!source.id) {
        return false;
      }

      return source.id;
    },

    selectSecondClosestTo: function (entity) {

      var room = entity.room;
      var sources = room.find(FIND_SOURCES);
      var exclude = entity.pos.findClosestByRange(sources);
      var source = entity.pos.findClosestByRange(sources, {
        filter: function (src) {
          return src.id != exclude.id;
        },
      });

      if (!source.id) {
        source.id = exclude.id;
      }

      return source.id;
    },

    findMiningSpots: function (entity) {
      let pos = entity.pos;
      let miningSpace = [];
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          let position = entity.room.getPositionAt(pos.x + x, pos.y + y);
          let terrain = position.lookFor(LOOK_TERRAIN)[0];
          if ( terrain == 'plain' || terrain == 'swamp' ) {
            miningSpace.push(position);
          }
        }
      }
      return miningSpace;
    }

  }

});
