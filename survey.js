const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable :): ', (nickname) => {
  rl.question('What\'s an activity you like doing?: ', (activity) => {
    rl.question('Which meal is your favourite (eg: dinner, brunch, etc.): ', (meal) => {
      rl.question('What\'s your favourite thing to eat for that meal?: ', (thingToEat) => {
        rl.question('Which sport is your absolute favourite?: ', (sport) => {
          rl.question('What is your superpower?: ', (superpower) => {
            console.log(`${nickname} favoutrite activity is ${activity} after that ${nickname} goes to have his favourite meal: ${meal} which has ${thingToEat} then ${nickname} would go to watch ${sport} while supressing their ${superpower} superpower`)
            rl.close();
          })
        })
      })
    })
  })
});