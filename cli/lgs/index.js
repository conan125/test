const program = require("commander");
const Inquirer = require("inquirer");
(async () => {
  let { tag } = await Inquirer.prompt({
    name: "tag",
    type: "list",
    choices: [1, 2],
    message: "please choose a tag to create project",
  });
  console.log(tag)
})()
// 重名，需要强制创建的模式
program
  .command("create <app-name")
  .description("create a new project")
  .option("-f, --force", "overwrite target directory if it exists")
  .action(async (name) => {
    let { tag } = await Inquirer.prompt({
      name: "tag",
      type: "list",
      choices: [1, 2],
      message: "please choose a tag to create project",
    });
    console.log(name, tag);
    // return tag;
  });
