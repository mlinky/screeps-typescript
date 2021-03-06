Game.market.cancelOrder('5cbf02743b57a15ae2b51e9e')
Game.market.cancelOrder('5cbf6f9d3b57a15ae2c9877b')
Game.market.cancelOrder('5cbf71e23b57a15ae2c9fb48')
Game.market.cancelOrder('5cbf74133b57a15ae2ca6b54')
Game.market.cancelOrder('5cbf74433b57a15ae2ca753a')
Game.market.cancelOrder('5cbf74773b57a15ae2ca800a')
Game.market.cancelOrder('5cbf02743b57a15ae2b51e9e')
Game.market.cancelOrder('5cbf02743b57a15ae2b51e9e')

Game.market.createOrder(ORDER_BUY, RESOURCE_ENERGY, 0.002, 1000000, 'E28N58')
Game.market.createOrder(ORDER_SELL, RESOURCE_OXYGEN, 0.045, 19451, 'W29S59')
Game.market.createOrder(ORDER_SELL, RESOURCE_ZYNTHIUM, 0.01, 23034, 'W27S54')
Game.market.createOrder(ORDER_SELL, RESOURCE_LEMERGIUM, 0.080, 10555, 'W27S54')
Game.market.createOrder(ORDER_SELL, RESOURCE_GHODIUM, 0.16, 2000, 'W27S54')
Game.market.createOrder(ORDER_SELL, RESOURCE_CATALYZED_GHODIUM_ALKALIDE, 3, 2890, 'W27S54')


Game.market.changeOrderPrice('5cbf02743b57a15ae2b51e9e', 0.015)


Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );

storage.db['rooms.objects'].update({_id: 'your id'}, {$set: {x: 25, y: 25}});

storage.db['rooms.objects'].update({ _id: 'ff7a07728e60965' },{ $set: { level: 3 }})
storage.db['users'].update({ username: 'jtboyz' },{ $set: { gcl: 65000000000 }})

storage.db['rooms.objects'].update({type: "storage"}, {$set:{ energy: 500000}})
storage.db['rooms.objects'].update({type: "terminal"}, {$set:{ energy: 10000}})

storage.db['rooms.objects'].update({type: "container"}, {$set:{ energy: 2000}} )
storage.db['rooms.objects'].update({type: "spawn"}, {$set:{ energy: 300}} )


storage.db['rooms.objects'].update({ type: 'constructionSite', room: 'W3N7' },{ $set: { progress: 99999 }})

storage.db['rooms.objects'].update({ _id: '5fe40774411d32f' },{ $set: { level: 3 }})
storage.db['rooms.objects'].update({ _id: 'cdbf0773313f0a9' },{ $set: { level: 4 }})
storage.db['rooms.objects'].update({ _id: '1e0107719718cd8' },{ $set: { level: 5 }})
storage.db['rooms.objects'].update({ _id: '1e0107719718cd8' },{ $set: { level: 6 }})
storage.db['rooms.objects'].update({ _id: 'acd407722237839' },{ $set: { level: 7 }})
storage.db['rooms.objects'].update({ _id: '9b890773ce4ed89' },{ $set: { level: 8 }})


storage.db['rooms.objects'].find({type: "extension"})

storage.db['rooms.objects'].find({'$and': [{type: "extension"},{energyCapacity: 50}]})
storage.db['rooms.objects'].find({'$and': [{type: "extension"},{energyCapacity: { '$ne' :50}},{energyCapacity: { '$ne' :200}}]})

storage.db['rooms.objects'].update({'$and': [{type: "extension"}, {energyCapacity: 50}]},{ $set: { energy: 50}})
storage.db['rooms.objects'].update({'$and': [{type: "extension"}, {energyCapacity: 200}]},{ $set: { energy: 200}})


storage.db['rooms.objects'].find({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'rampart'}]})

storage.db['rooms.objects'].find({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : { '$ne' : 'road'}}, { 'structureType' : { '$ne' : 'extension'}}, { 'structureType' : { '$ne' : 'container'}}, { 'structureType' : { '$ne' : 'rampart'}}]})



storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'spawn'}]},{ $set: { progress: 15000 }})


storage.db['rooms.objects'].update({type: "container"}, {$set:{ energy: 2000}} )


storage.db['rooms.objects'].update({type: "spawn"}, {$set:{ energy: 300}} )
storage.db['rooms.objects'].update({'$and': [{type: "extension"}, {energyCapacity: 50}]},{ $set: { energy: 50}})
storage.db['rooms.objects'].update({'$and': [{type: "extension"}, {energyCapacity: 100}]},{ $set: { energy: 100}})
storage.db['rooms.objects'].update({'$and': [{type: "extension"}, {energyCapacity: 200}]},{ $set: { energy: 200}})
storage.db['rooms.objects'].update({type: "storage"}, {$set:{ energy: 500000}})
storage.db['rooms.objects'].update({type: "terminal"}, {$set:{ energy: 10000}})
storage.db['rooms.objects'].update({type: "tower"}, {$set:{ energy: 1000}})


storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'spawn'}]},{ $set: { progress: 15000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'rampart'}]},{ $set: { progress: 200 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'lab'}]},{ $set: { progress: 50000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'terminal'}]},{ $set: { progress: 100000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'extension'}]},{ $set: { progress: 3000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'storage'}]},{ $set: { progress: 30000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'container'}]},{ $set: { progress: 5000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'tower'}]},{ $set: { progress: 5000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'extractor'}]},{ $set: { progress: 5000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'link'}]},{ $set: { progress: 5000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'lab'}]},{ $set: { progress: 50000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'terminal'}]},{ $set: { progress: 100000 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'road'}, { 'progressTotal' : 300}]},{ $set: { progress: 300 }})
storage.db['rooms.objects'].update({ '$and': [{ 'type' : 'constructionSite'}, { 'structureType' : 'road'}, { 'progressTotal' : 1500}]},{ $set: { progress: 1500 }})
