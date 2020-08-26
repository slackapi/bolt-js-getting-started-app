const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_APP_BOLT_JS_GETTING_STARTED_TOKEN,
  signingSecret: process.env.SLACK_APP_BOLT_JS_GETTING_STARTED_SIGNING_SECRET
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();