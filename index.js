const { WebClient } = require('@slack/web-api');

if (WebClient) {
  process.send("Slack WebClient is available");
} else {
  process.send("No Slack WebClient found");
}
