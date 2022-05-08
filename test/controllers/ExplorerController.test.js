// GitHub: @AleGV258

const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {
    test("Create ExplorerController object", () => {
        const explorer = new ExplorerController();
        expect(explorer).toEqual({});
    });

    test("ExplorerController by Mission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        expect(explorersByMission).toEqual(
            [{"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1", "score": 1, "stacks": ["javascript", "reasonML", "elm"]}, {"githubUsername": "ajolonauta2", "mission": "node", "name": "Woopa2", "score": 2, "stacks": ["javascript", "groovy", "elm"]}, {"githubUsername": "ajolonauta3", "mission": "node", "name": "Woopa3", "score": 3, "stacks": ["elixir", "groovy", "reasonML"]}, {"githubUsername": "ajolonauta4", "mission": "node", "name": "Woopa4", "score": 4, "stacks": ["javascript"]}, {"githubUsername": "ajolonauta5", "mission": "node", "name": "Woopa5", "score": 5, "stacks": ["javascript", "elixir", "elm"]}, {"githubUsername": "ajolonauta11", "mission": "node", "name": "Woopa11", "score": 11, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta12", "mission": "node", "name": "Woopa12", "score": 12, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta13", "mission": "node", "name": "Woopa13", "score": 13, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14", "mission": "node", "name": "Woopa14", "score": 14, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta15", "mission": "node", "name": "Woopa15", "score": 15, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}]
        );
    });

    test("ExplorerController by Mission Length", () => {
        const explorersByMissionLength = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersByMissionLength).toBe(10);
    });

    test("ExplorerController by Mission Username", () => {
        const explorersByMissionUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersByMissionUsername).toEqual(
            ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]
        );
    });

    test("ExplorerController FizzBuzz", () => {
        const number1 = ExplorerController.getExplorersFizzbuzz(1);
        const number3 = ExplorerController.getExplorersFizzbuzz(3);
        const number5 = ExplorerController.getExplorersFizzbuzz(5);
        const number15 = ExplorerController.getExplorersFizzbuzz(15);
        expect(number1).toBe(1);
        expect(number3).toBe("FIZZ");
        expect(number5).toBe("BUZZ");
        expect(number15).toBe("FIZZBUZZ");
    });

    test("ExplorerController by Stack", () => {
        const explorerStack = ExplorerController.getExplorerByStack("javascript");
        expect(explorerStack).toEqual([{"name":"Woopa1","githubUsername":"ajolonauta1","score":1,"mission":"node","stacks":["javascript","reasonML","elm"]},{"name":"Woopa2","githubUsername":"ajolonauta2","score":2,"mission":"node","stacks":["javascript","groovy","elm"]},{"name":"Woopa4","githubUsername":"ajolonauta4","mission":"node","score":4,"stacks":["javascript"]},{"name":"Woopa5","githubUsername":"ajolonauta5","score":5,"mission":"node","stacks":["javascript","elixir","elm"]},{"name":"Woopa9","githubUsername":"ajolonauta9","score":9,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa10","githubUsername":"ajolonauta10","score":10,"mission":"java","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa11","githubUsername":"ajolonauta11","score":11,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa12","githubUsername":"ajolonauta12","score":12,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa13","githubUsername":"ajolonauta13","score":13,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa14","githubUsername":"ajolonauta14","score":14,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa15","githubUsername":"ajolonauta15","score":15,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]}]);
    });

    test("ExplorerController FizzBuzz Bot Telegram", () => {
        const number1 = ExplorerController.telegramBotFizzbuzz(1);
        const number3 = ExplorerController.telegramBotFizzbuzz(3);
        const number5 = ExplorerController.telegramBotFizzbuzz(5);
        const number15 = ExplorerController.telegramBotFizzbuzz(15);
        const otro = ExplorerController.telegramBotFizzbuzz("Hola");
        expect(number1).toEqual("Tu número es: 1. Validación: 1");
        expect(number3).toEqual("Tu número es: 3. Validación: FIZZ");
        expect(number5).toEqual("Tu número es: 5. Validación: BUZZ");
        expect(number15).toEqual("Tu número es: 15. Validación: FIZZBUZZ");
        expect(otro).toEqual("Tu número es: Hola. Validación: Hola");
    });

    test("ExplorerController Explorers by Mission Bot Telegram", () => {
        const explorerByMission = ExplorerController.telegramBotMission("node");
        expect(explorerByMission).toEqual('La lista de explorer en la misión node es: \n[{"name":"Woopa1","githubUsername":"ajolonauta1","score":1,"mission":"node","stacks":["javascript","reasonML","elm"]},{"name":"Woopa2","githubUsername":"ajolonauta2","score":2,"mission":"node","stacks":["javascript","groovy","elm"]},{"name":"Woopa3","githubUsername":"ajolonauta3","score":3,"mission":"node","stacks":["elixir","groovy","reasonML"]},{"name":"Woopa4","githubUsername":"ajolonauta4","mission":"node","score":4,"stacks":["javascript"]},{"name":"Woopa5","githubUsername":"ajolonauta5","score":5,"mission":"node","stacks":["javascript","elixir","elm"]},{"name":"Woopa11","githubUsername":"ajolonauta11","score":11,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa12","githubUsername":"ajolonauta12","score":12,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa13","githubUsername":"ajolonauta13","score":13,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa14","githubUsername":"ajolonauta14","score":14,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]},{"name":"Woopa15","githubUsername":"ajolonauta15","score":15,"mission":"node","stacks":["javascript","elixir","groovy","reasonML","elm"]}]');
    });
});

// npm test test/controllers/ExplorerController.test.js
