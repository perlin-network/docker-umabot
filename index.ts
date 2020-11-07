import * as awsx from "@pulumi/awsx";
import { disputerEnvironment , liquidatorEnvironment } from "./config"


let bots = new awsx.ecs.FargateService("umabot", {
    desiredCount: 1,
    taskDefinitionArgs: {
        containers: {
            liquidationBot: {
                image: "umaprotocol/protocol:latest",
                memory: 2048,
                environment: liquidatorEnvironment,
            },
            disputerBot: {
                image: "umaprotocol/protocol:latest",
                memory: 2048,
                environment: disputerEnvironment,
            }
        },
    },
});
