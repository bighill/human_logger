# human_logger #

This `human_logger` project is a personal hobby project to explore various frameworks, languages, and methods that I find interesting. Building this is a learning exercise and hopefully proves useful as a reference for future projects. The `human_logger` app has a simple set of guiding principals that are recreated in various languages and frameworks for use in CLI, browsers, and various apps.

## Features / Guidlines ##

The goal of each `human_logger` project is to use varying methods to produce these fundemental features:
* Provide an interface that a human may use to manually append entries to a log.
* The result and UX should be similar to (or at least stylistically similar to) *nix log files.
* Each log entries consists of a timestamp and a message.
* Each log entry persists as either one line of a text file or one item of an array.
* Every action that is not an error should return/display the most log recent entries.
* There should always be an option to clear the log storage.
* Rather than a full CRUD system, `human_logger` requires only __Create__, __Read__, and __Delete All__.

## The Sub-Projects ##

### CLI ###
* [Bash Script](./bash)