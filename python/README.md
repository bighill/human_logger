# human_logger : python #

This is a sub-project of the [human_logger](../../../) project written as a python script.

## Requirements ##

Python 2 or 3

## Usage ##

This is intended to be used at a standard Linux CLI

`cd human_logger/python`

_All usage examples will display up to 11 of the most recent log entries_

### Append new entry to log ###
_New entry uses option `-n` or `--new`_

`./human_logger.py -n helloworld`

`./human_logger.py -n "hello world"`

### Display recent entries ###

`./human_logger.py`

### Clear log ###
_Clear log uses option `-c` or `--clear`_

`./human_logger.py -c`

### Display help ###
_Help uses option `-h` or `--help`_

`./human_logger.py -h`

## Incorrect usage ##
_Incorrect usage will display usage hints and reason for error_

```python
$ python human_logger.py breakin stuff
usage: human_logger.py [-h] [-n MESSAGE] [-c]
human_logger.py: error: unrecognized arguments: breakin stuff
```

## TODO ##
* limit option (current default limit is 11)