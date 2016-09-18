var resourceSelector = require('select.resource');

module.exports = {

  task: function(creep) {
    var cMemory = creep.memory;
    // initiate
    if (!cMemory.initiated) {
      cMemory.activity = 'harvesting';
      cMemory.targetSourceId = resourceSelector.selectSecondClosestTo(creep);
      cMemory.initiated = true;
      creep.say('++RCL;');
    }

    // When full, change this creeps harvesting spot and switch to upgrading
    if (cMemory.activity == 'harvesting') {
      if (creep.carryCapacity != creep.carry.energy) {
        var targetSource = Game.getObjectById(cMemory.targetSourceId);
        if (creep.harvest(targetSource) == ERR_NOT_IN_RANGE) {
          creep.moveTo(targetSource);
        }
      } else {
        cMemory.activity = 'upgrading';
        creep.say('Upgrading!');
      }
    }

    // When done upgrading, switch to harvesting
    if (cMemory.activity == 'upgrading') {
      var controller = creep.room.controller;
      if (creep.carry.energy != 0) {
        if (creep.upgradeController(controller) == ERR_NOT_IN_RANGE) {
          creep.moveTo(controller);
        }
      } else {
        cMemory.activity = 'harvesting';
        creep.say('Crystals!');
      }
    }

  }

};
