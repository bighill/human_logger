#!/usr/bin/env python

'''
human_logger
'''

import logging
import sys
import argparse

logFile     = 'log.txt'
logFormat   = '%(asctime)s\t%(message)s'
limit       = 11

message     = ''
doClearLog  = False

#
#   configure logging
#
logging.basicConfig( level=logging.INFO, filename=logFile, format=logFormat, filemode='a' )

#
#   listen for options / arguments
#
parser = argparse.ArgumentParser( description='human_logger app' )
parser.add_argument( '-n', '--new', action='store', dest='message', default='', help='the new message to append to log')
parser.add_argument( '-c', '--clear', action='store_true', dest='doClearLog', default=False, help='clear Log' )

results = parser.parse_args()

message     = results.message
doClearLog  = results.doClearLog

#
#   append to log
#
def log_new_entry( entry ):
    logging.info( str(entry) )

#
#   get log
#
def get_log():
    with open( logFile, 'r' ) as f:
        entries = f.readlines()
    return entries[-limit:]

#
#   prettify
#
def format_output():
    entries = ''
    for entry in get_log():
        entries += entry
    return entries

#
#   clear log
#
if doClearLog :
    open( logFile, 'w').close()
    print( 'The log has been cleared.' )

#
#   log new entry
#
else :
    if ( len(message) > 0 ) :
        log_new_entry( message )

#
#   always display log
#
print ( format_output() )