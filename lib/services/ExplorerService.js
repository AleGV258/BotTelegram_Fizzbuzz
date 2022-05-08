// GitHub: @AleGV258

class ExplorerService {
    static filterByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInNode;
    }
    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNodeLength = explorers.filter((explorer) => explorer.mission == mission).length;
        return explorersInNodeLength;
    }
    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }
    static getExplorerStacks(explorers, stack){
        const explorersStack = explorers.filter((explorer) => explorer.stacks.includes(stack));
        return explorersStack;
    }
}

module.exports = ExplorerService;