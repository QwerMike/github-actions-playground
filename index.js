const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
    let env = process.env;

    console.log('=========');
    console.log(env);
    console.log(env['INPUT_who-to-greet'.toUpperCase()]);    

} catch (error) {
    core.setFailed(error.message);
}
