// GitHub: @AleGV258

const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader class", () => {
    test("Create Reader object", () => {
        const reader = new Reader();
        expect(reader).toEqual({});
    });

    test("Reader File Path", () => {
        const reader = Reader.readJsonFile("explorers.json");
        expect(reader).toEqual(
            [{"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1", "score": 1, "stacks": ["javascript", "reasonML", "elm"]}, {"githubUsername": "ajolonauta2", "mission": "node", "name": "Woopa2", "score": 2, "stacks": ["javascript", "groovy", "elm"]}, {"githubUsername": "ajolonauta3", "mission": "node", "name": "Woopa3", "score": 3, "stacks": ["elixir", "groovy", "reasonML"]}, {"githubUsername": "ajolonauta4", "mission": "node", "name": "Woopa4", "score": 4, "stacks": ["javascript"]}, {"githubUsername": "ajolonauta5", "mission": "node", "name": "Woopa5", "score": 5, "stacks": ["javascript", "elixir", "elm"]}, {"githubUsername": "ajolonauta6", "mission": "java", "name": "Woopa6", "score": 6, "stacks": ["elm"]}, {"githubUsername": "ajolonauta7", "mission": "java", "name": "Woopa7", "score": 7, "stacks": []}, {"githubUsername": "ajolonauta8", "mission": "java", "name": "Woopa8", "score": 8, "stacks": ["elm"]}, {"githubUsername": "ajolonauta9", "mission": "java", "name": "Woopa9", "score": 9, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta10", "mission": "java", "name": "Woopa10", "score": 10, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta11", "mission": "node", "name": "Woopa11", "score": 11, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta12", "mission": "node", "name": "Woopa12", "score": 12, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta13", "mission": "node", "name": "Woopa13", "score": 13, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14", "mission": "node", "name": "Woopa14", "score": 14, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta15", "mission": "node", "name": "Woopa15", "score": 15, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}]
        );
    });
});

// npm test test/utils/Reader.test.js
