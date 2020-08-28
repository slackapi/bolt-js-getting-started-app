# Getting Started with ⚡️ Bolt for JavaScript
> Slack app example from 📚 [Getting started with Bolt for JavaScript tutorial][1]

## Overview

This is a Slack app built with the [Bolt for JavaScript framework][2] that showcases
responding to events and interactive buttons.

## Running locally

### 1. Setup environment variables

```zsh
# Replace with your signing secret and token
export SLACK_APP_BOLT_JS_GETTING_STARTED_SIGNING_SECRET=abcd1234567890123456789012345678
export SLACK_APP_BOLT_JS_GETTING_STARTED_TOKEN=xoxb-123456789012-123456789012-abcd12345678901234567890
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

```zsh
npm run ngrok
npm run start
```

[1]: https://slack.dev/bolt-js/tutorial/getting-started
[2]: https://slack.dev/bolt-js/
