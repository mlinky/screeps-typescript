import { Tasks } from "creep-tasks/Tasks";
import { MyCreep } from "creeps/creep";
import { gameState } from "defs";
import { log } from "log/log";
import { profile } from "profiler/decorator";
import { Debug } from "settings";
import { MyCluster } from "state/cluster";

@profile
export class CreepHauler extends MyCreep {

    constructor(creep: Creep) {
        super(creep);
    }

    public run() {

        // log.info('Hauler running');
        if (this.creep.isIdle) {
            this.newTask();
        }

        this.creep.run()

    }

    private newTask() {

        // log.info('running newTask');
        // log.info(`Creep energy ${this.creep.carry.energy}`);
        // log.info(`Creep energy ${Game.creeps[this.name].carry.energy}`);

        if (this.creep.carry.energy > 0) {
            // Deliver energy to spawn, extension, storage
            // log.info('setting transfer');
            const t = this.findEnergyDestination(gameState.rooms[this.homeRoom]);

            if (t) {
                this.creep.task = Tasks.transfer(t);
                return;
            }

        } else {
            // Go get energy
            // log.info('setting collect');
            this.energyPickup(this.workRoom);
        }
    }

    public static required(cluster: MyCluster): number {
        // How many haulers required for the cluster
        log.debug(`Calculating required haulers for cluster ${cluster.clusterName}`, Debug.hauler)
        if (gameState.rooms[cluster.clusterName].controller) {
            log.debug(`Controller ID being tested for level is ${gameState.rooms[cluster.clusterName].controller!.id} with level ${gameState.rooms[cluster.clusterName].controller!.level()}`, Debug.hauler)
            switch (gameState.rooms[cluster.clusterName].controller!.level()) {
                case 1: {
                    return 2;
                }
                case 2: {
                    return 2;
                }
                case 3: {
                    return 3;
                }
                case 4: {
                    return 2;
                }
                case 5: {
                    return 2;
                }
                case 6: {
                    return 2;
                }
                case 7: {
                    return 2;
                }
                case 8: {
                    return 2;
                }
                default: {
                    return 3;
                }

            }
        }
        log.debug(`Invalid controller property for cluster ${cluster.clusterName}`, Debug.hauler)
        return 2;
    }
}
