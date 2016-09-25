Object.assign(component, {

  harvesterStationary: {

    body: [
      MOVE,
      WORK,
      WORK,
      WORK,
      WORK,
      CARRY,
      CARRY,
      CARRY
    ],
    name: 'harvester' + _.random(1000, 1999),
    memory: {
      role: 'harvester',
      subrole: 'stationairy',
      targetResourceId: null,
    },

  },

});