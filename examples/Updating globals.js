setProp(global, {
    Creeps: (() => Game.creeps),
    Rooms: (() => Game.rooms),
    Flags: (() => Game.flags),
    Time: (() => Game.time),
    CPU: (() => Game.cpu),
});
setProp(Structure, {
    health: ((self) => ({current: self.hits, max: self.hitsMax, percent: Math.round((self.hits/self.hitsMax)*100)})),
    memory: ((self) => {
        if (!Memory.structures) Memory.structures = {};
        if (!Memory.structures[self.id]) Memory.structures[self.id] = {
            _pos: self.pos.toObject,
            ".": 1,
        };
        return (Memory.sources[self.id]);
    }),
    _energy: ((self) => {
        let hasStore = [STRUCTURE_TERMINAL, STRUCTURE_STORAGE, STRUCTURE_CONTAINER];
        let current = hasStore.includes(self.structureType) ? self.store.energy : self.energy;
        let max = hasStore.includes(self.structureType) ? self.storeCapacity - _.sum(self.store) + current : self.energyCapacity;
        let percent = Math.round((current/max)*100);
        return ({current, max, percent});
    }),
    isStructure: ((self) => true),
    hasStorage: ((self) => !!(self.energy || self.store)),
    type: ((self) => self.structureType),
});
setFunc(Flag, {
    setText: ((self, text) => {
        let {color, pos, secondaryColor} = self;
        pos.createFlag(text, color, secondaryColor);
        Flags[text].memory = self.memory;
        self.remove();
    }),
});
setProp(Room, {
    creeps: ((self) => {
        return (_.filter(Creeps, {pos: {roomName: self.name}}));
    }),
    isRoom: (() => true),
    sources: ((self) => self.find(FIND_SOURCES)),
});
setProp(Creep, {
    health: ((self) => ({current: self.hits, max: self.hitsMax, percent: Math.round((self.hits/self.hitsMax)*100)})),
    isCreep: (() => true),
});
setFunc(Creep, {
    $take: ((self, target, ops, amt) => {
        if (target.isStructure || target.isGrave) return (self.withdraw(target, ops, amt));
        if (target.isDropped) return (self.pickup(target));
        if (target.isSource) return (self.harvest(target));
        return (false);
    }),
    $give: ((self,  ...args) => self.transfer(...args)),
    $sign: ((self, target, text) => self.signController(target || self.room.controller, text)),
    $claim: ((self, target) => self.claimController(target)),
    $hit: ((self, target) => {
        if (target.isStructure) {
            if (target.type === STRUCTURE_CONTROLLER) return (self.attackController(target));
            return (self.dismantle(target));
        }
        if (target.isCreep) return (self.attack(target));
    }),
    $heal: ((self, target) => {
        if (target.isSite) return (self.build(target));
        if (target.isStructure) return (self.repair(target));
        if (self.pos.isNearTo(target)) return (self.heal(target));
        if (self.pos.inRange(target)) return (self.rangedHeal(target));
    }),
    $upgrade: ((self, target) => self.upgradeController(target || self.room.controller)),
    $shoot: ((self, target) => {
        if (!target) return (self.rangedMassAttack());
        return (self.rangedAttack(target))
    }),
    $drop: ((self, ...args) => self.drop(...args)),
    $closeTo: ((self, target) => self.pos.inRange(target)),
    $nextTo: ((self, target) => self.pos.isNearTo(target)),
});
setProp(Source, {
    memory: ((self) => {
        if (!Memory.sources) Memory.sources = {};
        if (!Memory.sources[self.id]) Memory.sources[self.id] = {
            _pos: self.pos.toObject,
            ".": 1,
        };
        return (Memory.sources[self.id]);
    }),
    isSource: (() => true),
});
setProp(ConstructionSite, {
    isSite: (() => true),
});
setProp(RoomPosition, {
    asObject: ((self) => ({x: self.x, y: self.y, roomName: self.roomName})),
    up: ((self) => {
        let pos = self.asObject;
        pos.y--;
        return (pos.asPosition);
    }),
    down: ((self) => {
        let pos = self.asObject;
        pos.y++;
        return (pos.asPosition);
    }),
    left: ((self) => {
        let pos = self.asObject;
        pos.x--;
        return (pos.asPosition);
    }),
    right: ((self) => {
        let pos = self.asObject;
        pos.x++;
        return (pos.asPosition);
    }),
    room: ((self) => Game.rooms[self.roomName] || null),
});
setFunc(RoomPosition, {
    inRange: ((self, target) => self.inRangeTo(target, 3)),
});
setProp(Object, {
    count: ((self) => Object.keys(self).length),
    _keys: ((self) => Object.keys(self)),
    _values: ((self) => Object.values(self)),
    asPosition: ((self) => new RoomPosition(self.x, self.y, self.roomName)),
    json: ((self) => JSON.stringify(self)),
});
setProp(String, {
    json: ((self) => JSON.parse(self)),
    asFlag: ((self) => Flags[self]),
    asObject: ((self) => getID(self)),
});
setProp(Resource, {
    isDropped: (() => true),
});
setProp(Tombstone, {
    isGrave: (() => true),
});
