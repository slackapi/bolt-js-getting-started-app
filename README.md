# Getting Started with ⚡️ Bolt for JavaScript
> Slack app example from 📚 [Getting started with Bolt for JavaScript tutorial][1]

## Overview

This is a Slack app built with the [Bolt for JavaScript framework][2] that showcases
responding to events and interactive buttons.

## Running locally

### 1. Setup environment variables

```zsh
# Replace with your signing secret and token
export SLACK_BOT_TOKEN=<your-bot-token>
export SLACK_SIGNING_SECRET=<your-signing-secret>
```

### 2. Setup your local project

```zsh
# Clone this project onto your machine
git clone https://github.com/mwbrooks/bolt-js-getting-started-app.git

# Change into the project
cd bolt-js-getting-started-app/

# Install the dependencies
npm install
```

### 3. Start servers

[Setup ngrok][3] to create a local requests URL for development.

```zsh
npm run ngrok
npm run start
```

[1]: https://slack.dev/bolt-js/tutorial/getting-started
[2]: https://slack.dev/bolt-js/
[3]: https://slack.dev/bolt-js/tutorial/getting-started#setting-up-events