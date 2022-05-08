// GitHub: @AleGV258

const ExplorerService = require("../../lib/services/ExplorerService");

describe("Unit Tests for ExplorerService class", () => {
    const explorers = [
        {
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }
    ];

    test("ExplorerService in Node", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode).toEqual([
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            }
        ]);
    });

    test("ExplorerService in Node Length", () => {
        const explorersInNodeLength = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(explorersInNodeLength).toBe(2);
    });

    test("ExplorerService Username", () => {
        const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(explorersUsernamesByMission).toEqual(["ajolonauta1", "ajolonauta2"]);
    });

    test("ExplorerService Stack", () => {
        const explorersByStack = ExplorerService.getExplorerStacks(explorers, "javascript");
        expect(explorersByStack).toEqual([
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            }
        ]);
    });
});

// npm test test/services/ExplorerService.test.js



