const { WebClient } = require('@slack/web-api');

console.log("Logging from the test module");

if (WebClient) {
  console.log("WebClient is available");
  console.log(WebClient);
} else {
  console.log("No WebClient found");
}
