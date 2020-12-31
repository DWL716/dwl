const program = require("commander");

const helpOption = () => {
  // 增加自己的 options
  program.option("-w --why", "a why cli");
  program.option("-d --dest <dest>", "a destination");
  program.option("-f --framework <framework>", 'your framework')

  program.on("--help", function() {
    console.log("");
    console.log("Other:");
    console.log(" other options");
  })
};


module.exports = helpOption;