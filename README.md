# human_logger

This `human_logger` project is a personal hobby project to explore various frameworks, and languages.

## Features / Guidlines

The goal of each `human_logger` project is to produce these fundemental features:

- Provide an interface that a human may use to manually append entries to a log.
- The result and UX should be similar to (or at least stylistically similar to) \*nix log files.
- Each log entries consists of a timestamp and a message.
- Each log entry persists as either one line of a text file or one item of an array.
- Every action that is not an error should return/display the most log recent entries.
- There should always be an option to clear the log storage.
- Rather than a full CRUD system, `human_logger` requires only **Create**, **Read**, and **Delete All**.

## The Sub-Projects

### CLI Apps

- [Bash Script](./bash)
- [Python Script](./python)

### Browser Apps

- [Vanilla JS](./vanillajs)
- [jQuery](./jquery)
- [Vue.js](./vue)
