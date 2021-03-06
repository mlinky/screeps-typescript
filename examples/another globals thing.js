global.getID = (function(id) {
    return (Game.getObjectById(id));
});
global.setFunc = (function(A, B) {
    Object.keys(B).forEach(function(N) {
        if (!A.prototype[N]) A.prototype[N] = (function(...args) { return B[N](this, ...args); });
    });
});
global.zip = require("lz-compress");
global.setProp = (function(A, B) {
    Object.keys(B).forEach(function(N) {
        if (typeof(A) === "object") {
            Object.defineProperty(A, N, {
                get: (function() { return (B[N](this)); }),
                enumerable: false,
                configurable: true
            });
        } else {
            Object.defineProperty(A.prototype, N, {
                get: (function() { return (B[N](this)); }),
                enumerable: false,
                configurable: true
            });
        }
    });
});
global.Ensure = (function(A, B) {
    for (const N in B) {
        if (A[N] === undefined) {
            A[N] = B[N];
        }
    }
});
Ensure(global, {
	GREEN, COLOR_GREEN,
	CYAN: COLOR_CYAN,
	BLUE: COLOR_BLUE,
	PURPLE: COLOR_PURPLE,
	YELOW: COLOR_YELLOW,
	BROWN: COLOR_BROWN,
	WHITE: COLOR_WHITE,
	GREY: COLOR_GREY,
	RED: COLOR_RED,
	ENERGY: RESOURCE_ENERGY,
	POWER: RESOURCE_POWER,
	//
	HYDROGEN: RESOURCE_HYDROGEN,
	OXYGEN: RESOURCE_OXYGEN,
	UTRIUM: RESOURCE_UTRIUM,
	LEMERGIUM: RESOURCE_LEMERGIUM,
	KEANIUM: RESOURCE_KEANIUM,
	ZYNTHIUM: RESOURCE_ZYNTHIUM,
	CATALYST: RESOURCE_CATALYST,
	GHODIUM: RESOURCE_GHODIUM,
	HYDROXIDE: RESOURCE_HYDROXIDE,
	ZYNTHIUM_KEANITE: RESOURCE_ZYNTHIUM_KEANITE,
	UTRIUM_LEMERGITE: RESOURCE_UTRIUM_LEMERGITE,
	UTRIUM_HYDRIDE: RESOURCE_UTRIUM_HYDRIDE,
	//
	SPAWN: STRUCTURE_SPAWN,
	LAB: STRUCTURE_LAB,
	EXTENSION: STRUCTURE_EXTENSION,
	ROAD: STRUCTURE_ROAD,
	EXTRACTOR: STRUCTURE_EXTRACTOR,
	NUKER: STRUCTURE_NUKER,
	SILO: STRUCTURE_NUKER,
	CONTAINER: STRUCTURE_CONTAINER,
	TOWER: STRUCTURE_TOWER,
	OBSERVER: STRUCTURE_OBSERVER,
	LINK: STRUCTURE_LINK,
	PORTAL: STRUCTURE_PORTAL,
	CWALL: STRUCTURE_WALL,
	RAMPART: STRUCTURE_RAMPART,
	POWER_BANK: STRUCTURE_POWRR_BANK,
	POWER_SPAWN: STRUCTURE_POWER_SPAWN,
	STORAGE: STRUCTURE_STORAGE,
	SELL: ORDER_SELL,
	BUY: ORDER_BUY,
});
