// GitHub: @AleGV258

const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersLength = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersLength});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsername = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, usernames: explorersUsername});
});

app.get("/v1/fizzbuzz/:score", (request, response) => {
    const score = request.params.score;
    const fizzbuzzScore = ExplorerController.getExplorersFizzbuzz(score);
    response.json({score: request.params.score, trick: fizzbuzzScore});
});

app.get("/v1/explorers/stack/:nameStack", (request, response) => {
    const stackName = request.params.nameStack;
    const explorerStack = ExplorerController.getExplorerByStack(stackName);
    response.json({stack: request.params.nameStack, explorers: explorerStack});
});

app.listen(port, () => {
    console.log(`Fizzbuzz API in localhost: ${port}`);
});

// node lib/server.js
// npm run server
