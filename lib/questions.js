
const initQuestion = [
    {
        type: "confirm",
        message: "Would you like to create a team?",
        name: "teamQuestion"
    }
];

const teamQuestion = [
    {
        type: "checkbox",
        message: "What team member would you like to add?",
        name: "addMember",
        choices: ["Manager", "Engineer", "Intern" , "None"]
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "What is the name of the manager?",
        name: "managerName"
    },
    {
        type: "input",
        message: "What is their ID number?",
        name: "mangaerId"
    },
    {
        type: "input",
        message: "What is their email?",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "What is their office number?",
        name: "managerOffice"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "What is the name of the engineer?",
        name: "engName"
    },
    {
        type: "input",
        message: "What is their ID number?",
        name: "engId"
    },
    {
        type: "input",
        message: "What is their email?",
        name: "engEmail"
    },
    {
        type: "input",
        message: "What is their Github username?",
        name: "engGithub"
    }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the name of the intern?",
        name: "internName"
    },
    {
        type: "input",
        message: "What is their ID number?",
        name: "internId"
    },
    {
        type: "input",
        message: "What is their email?",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What is their office number?",
        name: "internOffice"
    }
];

module.exports = {
    initQuestion: initQuestion,
    teamQuestion: teamQuestion,
    managerQuestions: managerQuestions,
    engineerQuestions: engineerQuestions,
    internQuestions: internQuestions
};