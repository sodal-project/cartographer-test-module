const { WebClient } = require('@slack/web-api');

// Check if the module is being executed as a child process
if (process.send) {
  process.send("Logging from the test module");
}

if (WebClient) {
  process.send("WebClient is available");
  process.send(WebClient);
} else {
  process.send("No WebClient found");
}
