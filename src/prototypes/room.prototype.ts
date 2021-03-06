import { _REFRESH, checkRefresh } from 'utils/refresh';
import { profile } from '../profiler/decorator';

export { }

declare global {
    interface Room {
        // sources: Source[];
        constructionSites: ConstructionSite[];
        spawns: StructureSpawn[];
        towers: StructureTower[];
        availableSpawn: StructureSpawn;
        droppedResource: Resource[];
        // minersAvailable: number;
        // upgradersAvailable: number;
        // upgradersRequired: number;
        // haulersAvailable: number;
        // haulersRequired: number;
        // buildersAvailable: number;
        hasSpawns(): boolean;
        canSpawn(): boolean;
    }

}

Object.defineProperty(Room.prototype, 'constructionSites', {
    get() {
        // If we dont have the value stored locally
        // TODO - cache construction sites
        if (!this._constructionSites) {
            // Get the construction sites and store them locally
            this._constructionSites = this.find(FIND_CONSTRUCTION_SITES);
        }
        return this._constructionSites;
    },

    configurable: true,
    enumerable: false

});

// Object.defineProperty(Room.prototype, 'sources', {
//     get() {
//         // If we dont have the value stored locally
//         // TODO - cache sources
//         if (!this._sources) {
//             // Get the sources objects from the id's in memory and store them locally
//             this._sources = this.find(FIND_SOURCES);
//         }
//         return this._sources;
//     },

//     configurable: true,
//     enumerable: false

// });

Object.defineProperty(Room.prototype, 'spawns', {
    get(): StructureSpawn[] | null {
        // If we dont have the value stored locally
        // TODO - cache spawns
        if (!this._spawns) {
            // Get the spawns objects from the id's in memory and store them locally
            this._spawns = this.find(FIND_MY_SPAWNS);
        }
        return this._spawns;
    },

    configurable: true,
    enumerable: false

});

Object.defineProperty(Room.prototype, 'towers', {
    get(): StructureSpawn[] | null {
        // If we dont have the value stored locally
        // TODO - cache towers
        if (!this._towers) {
            // Get the towers and store them locally
            this._towers = this.find(FIND_STRUCTURES, { filter: (s: Structure) => s.structureType === STRUCTURE_TOWER });
        }
        return this._towers;
    },

    configurable: true,
    enumerable: false

});

Object.defineProperty(Room.prototype, 'availableSpawn', {
    get(): StructureSpawn | undefined {
        for (const spawn of this.spawns) {
            if (!spawn.spawning) {
                return spawn;
            }
        }
        return;
    },

    configurable: true,
    enumerable: false

});

Object.defineProperty(Room.prototype, 'droppedResource', {
    get(): Resource[] | null {
        // If we dont have the value stored locally
        if (!this._droppedResource || checkRefresh(_REFRESH.droppedResource)) {
            // Get the towers and store them locally
            this._droppedResource = this.find(FIND_DROPPED_RESOURCES);
        }
        return this._droppedResource;
    },

    configurable: true,
    enumerable: false

});


Room.prototype.hasSpawns = function (): boolean {

    return this.spawns.length === 0 ? false : true;

};

Room.prototype.canSpawn = function (): boolean {

    if (this.energyAvailable < 300) {
        return false;
    }

    for (const spawn of this.spawns) {
        if (!spawn.spawning) {
            return true;
        }
    }

    return false;

};

// Room.prototype.spawnCreep = function (): void {

//     if (!this.canSpawn()) {
//         return;
//     }

//     if (this.trySpawn('miner')) { return; }
//     if (this.trySpawn('hauler')) { return; }
//     if (this.trySpawn('builder')) { return; }
//     if (this.trySpawn('upgrader')) { return; }

// };

// Room.prototype.trySpawn = function (role: string): boolean {

//     let r: CreepRequest | undefined = _.find(this.creepsNeeded, function (o: CreepRequest) { return o.creepRole === role; });
//     if (r != null) {
//         return r.actionRequest(this);
//     }

//     return false;

// };

/////
// @profile
// class CreepRequest {

//     roomName: string;
//     creepRole: string;

//     constructor(roomName: string, creepRole: string) {

//         this.roomName = roomName;
//         this.creepRole = creepRole;
//     }

//     actionRequest(room: Room): boolean {
//         // Get the spawn object
//         let s: StructureSpawn = room.availableSpawn;

//         // Check spawn is valid
//         if (_.isUndefined(s)) {
//             return false;
//         }

//         let f = this.creepFeatures(room);

//         let n = this.creepRole + Game.time;

//         switch (s.spawnCreep(f, n, { memory: { role: this.creepRole, homeRoom: room.name, workRoom: this.roomName } })) {
//             case OK:
//                 return true;
//             case ERR_NOT_OWNER:
//                 console.log('Failed to spawn ' + this.creepRole + ' - ERR_NOT_OWNER')
//                 return false;
//             case ERR_NAME_EXISTS:
//                 console.log('Failed to spawn creep ' + this.creepRole + ' - ERR_NAME_EXISTS')
//                 return false;
//             case ERR_BUSY:
//                 console.log('Failed to spawn creep ' + this.creepRole + ' - ERR_BUSY')
//                 return false;
//             case ERR_NOT_ENOUGH_ENERGY:
//                 console.log('Failed to spawn creep ' + this.creepRole + ' - ERR_NOT_ENOUGH_ENERGY')
//                 return false;
//             case ERR_INVALID_ARGS:
//                 console.log('Failed to spawn creep ' + this.creepRole + ' - ERR_INVALID_ARGS')
//                 return false;
//             case ERR_RCL_NOT_ENOUGH:
//                 console.log('Failed to spawn creep ' + this.creepRole + ' - ERR_RCL_NOT_ENOUGH')
//                 return false;
//             default:
//                 return false;
//         }

//     }

//     creepFeatures(room: Room) {

//         // WORK             100
//         // MOVE             50
//         // CARRY            50
//         // ATTACK           80
//         // RANGED_ATTACK    150
//         // HEAL             200
//         // TOUGH            10
//         // CLAIM            600

//         switch (this.creepRole) {
//             case 'hauler':
//                 if (room.energyAvailable <= 400) {
//                     return [CARRY, CARRY, CARRY, CARRY, MOVE, MOVE]
//                 } else if (room.energyAvailable <= 450) {
//                     return [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
//                 } else if (room.energyAvailable <= 500) {
//                     return [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE]
//                 } else if (room.energyAvailable <= 600) {
//                     return [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
//                 } else {
//                     return [CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE]
//                 }
//             case 'miner':
//                 if (room.energyAvailable <= 450) {
//                     return [WORK, WORK, CARRY, MOVE];
//                 } else if (room.energyAvailable <= 550) {
//                     return [WORK, WORK, WORK, CARRY, CARRY, MOVE];
//                 } else if (room.energyAvailable <= 650) {
//                     return [WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];
//                 } else {
//                     return [WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE];
//                 }
//             case 'worker':
//             case 'upgrader':
//             default:
//                 return [WORK, WORK, CARRY, MOVE];

//         }

//     }

// }
