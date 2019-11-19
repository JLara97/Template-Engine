// NPM Modules
const inquirer = require("inquirer");

// Local Modules
const render = require("./lib/htmlrender");
const questions = require("./lib/questions");

// Constructors
const Manager = require("./lib/constructors/Manager");
const Engineer = require("./lib/constructors/Engineer");
const Intern = require("./lib/constructors/Intern");

// Global Variables
const teamMembers = [
  // new Manager("Brent", 1, "brent@trilogyed.com", 200),
  // new Engineer("Tucker", 2, "tbeauchamp@2u.com", "tuckerbeauchamp"),
  // new Intern("Becky", 3, "becky@becky.com", "UofA"),
  // new Intern("Shelly", 4, "shelly@shelly.com", "UofA")
];
/***
 * THIS PROJECT IS NOT COMPLETE.
 * YOU WILL NEED TO BUILD YOUR HTML LAYOUTS
 * PROMPT THE USER FOR ALL OF THEIR DIFFERENT TEAM MEMBERS
 */

async function init() {
  const result = await inquirer.prompt(questions.initQuestion);

  while (result.teamQuestion) {

    const emp = await inquirer.prompt(questions.addEmployee);

    if (emp.addEmployee) {

      const member = await inquirer.prompt(questions.teamQuestion);

      if (member.addMember == "Manager") {

        const managerAns = await inquirer.prompt(questions.managerQuestions);

        teamMembers.push(new Manager(managerAns.managerName, parseInt(managerAns.managerId), managerAns.managerEmail, parseInt(managerAns.managerOffice)));
      }

      else if (member.addMember == "Engineer") {

        const engAns = await inquirer.prompt(questions.engineerQuestions)

        console.log(engAns)

        teamMembers.push(new Engineer(engAns.engName, parseInt(engAns.engId), engAns.engEmail, engAns.githubName));
      }

      else if (member.addMember == "Intern") {

        const internAns = await inquirer.prompt(questions.internQuestions);

        teamMembers.push(new Intern(internAns.internName, parseInt(internAns.internId), internAns.internEmail, internAns.internSchool));
      }

      else {
        return;
      }
    }

    else {
      render(teamMembers);
      return;
    }
  }
}

init();