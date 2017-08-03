#!/usr/bin/env python

'''
human_logger
'''

import sys
import os
import argparse
import logging

this_dir = os.path.dirname(os.path.realpath(__file__))

log_file     = '%s/log.txt' % this_dir
log_format   = '%(asctime)s\t%(message)s'
limit       = 11

message     = ''
do_clear_log  = False

#
#   configure logging
#
logging.basicConfig( level=logging.INFO, filename=log_file, format=log_format, filemode='a' )

#
#   listen for options / arguments
#
parser = argparse.ArgumentParser( description='human_logger app' )
parser.add_argument( '-n', '--new', action='store', dest='message', default='', help='the new message to append to log')
parser.add_argument( '-c', '--clear', action='store_true', dest='do_clear_log', default=False, help='clear Log' )

results = parser.parse_args()

message     = results.message
do_clear_log  = results.do_clear_log

#
#   append to log
#
def log_new_entry( entry ):
    logging.info( str(entry) )

#
#   get log
#
def get_log():
    with open( log_file, 'r' ) as f:
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
if do_clear_log :
    open( log_file, 'w').close()
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