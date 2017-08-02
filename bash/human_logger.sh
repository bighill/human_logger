#!/bin/bash

###
#
#   human_logger
#
###

THIS_PATH="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
INPUT=$1
DO_CLEAR_LOG=false

TIMESTAMP=`date`
ENTRY="${TIMESTAMP}\t${INPUT}"
LOGFILE="${THIS_PATH}/log.txt"
LIMIT=11

#
#   listen for options
#
while getopts ":c" opt; do
    case $opt in
    c)
        DO_CLEAR_LOG=true
        ;;
    \?)
        echo "Invalid option: -$OPTARG" >&2
        ;;
    esac
done

#
#   clear log
#
if [ "$DO_CLEAR_LOG" = true ]
then
    echo '' > $LOGFILE
    echo 'The log has been cleared.'
fi

#
#   append to log
#
if [ -n "$INPUT" ] && [ "$DO_CLEAR_LOG" = false ];
then
    echo -e $ENTRY >> $LOGFILE
fi

#
#   always tail the log
#
tail -n $LIMIT $LOGFILE