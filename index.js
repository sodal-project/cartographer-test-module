const { WebClient } = require('@slack/web-api');

// Check if the module is being executed as a child process
if (process.send) {
  process.send("Logging from the test module");
}

if (WebClient) {
  process.send("Slack WebClient is available");
} else {
  process.send("No Slack WebClient found");
}
