# human_logger : bash #

This is a sub-project of the [human_logger](../../../) project written as a bash script.

## Usage ##

This is intended to be used at a standard Linux CLI

`cd human_logger/bash`

_All usage examples will display up to 11 of the most recent log entries_

### Append new entry to log ###

`./human_logger.sh helloworld`

`./human_logger.sh "hello world"`

### Display recent entries ###

`./human_logger.sh`

### Clear log ###

`./human_logger.sh -c`

## TODO ##
* long format options (like --clear to accompany short options like -c)
* help option (-h / --help)
* limit option (current default limit is 11)