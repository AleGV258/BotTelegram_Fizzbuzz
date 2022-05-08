// GitHub: @AleGV258

const ExplorerService = require("../services/ExplorerService");
const FizzbuzzService = require("../services/FizzbuzzService");
const Reader = require("../utils/Reader");

class ExplorerController{
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }
    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsername;
    }
    static getExplorersAmonutByMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersLength = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersLength;
    }
    static getExplorersFizzbuzz(score){
        const fizzbuzz = FizzbuzzService.applyValidationInNumber(score);
        return fizzbuzz;
    }
    static getExplorerByStack(stack){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorerStack = ExplorerService.getExplorerStacks(explorers, stack);
        return explorerStack;
    }

    static telegramBotFizzbuzz(numberToApplyFb){
        const fizzbuzzTrick = FizzbuzzService.applyValidationInNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
        return responseBot;
    }
    static telegramBotMission(mission){
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        const responseBot = `La lista de explorer en la misión ${mission} es: \n${JSON.stringify(explorersByMission)}`;
        return responseBot;
    }
}

module.exports = ExplorerController;
