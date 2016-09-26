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
      role: 'harvesterStationary',
      targetResourceId: null,
    },

  },

});

Object.assign(component, {

  harvesterStationary300: {

    body: [
      MOVE,
      WORK,
      WORK,
      CARRY,
    ],
    name: 'harvester' + _.random(1000, 1999),
    memory: {
      role: 'harvesterStationary',
      targetResourceId: null,
    },

  },

});