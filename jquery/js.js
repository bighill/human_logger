/*
|
|   js.js
|
*/

var Log = []

var el = {
    input   : $('#new-log-entry'),
    log     : $( '#log' ),
}

function init() {
    getLog( updateDom )
    reset()

    return "init()"
}

function submitLogEntry( ev ) {
    ev.preventDefault()

    addLogEntry( applyLogEntry )
    reset()

    return "submitLogEntry()"
}

function addLogEntry( callback ) {
    Log.push({
        message     : el.input.val(),
        timestamp   : Date(),
    })

    callback()

    return Log
}

function applyLogEntry() {
    updateDom()
    storeLog()
}

function updateDom() {
    el.log.html( '' )

    $.each( Log, function( i, v ) {
        el.log.append( entryView(v) )
    })

    return el.log
}

function entryView( obj ) {
    var sep = $( '<span/>' )
        .addClass( 'separator' )
        .text( '::' )

    return $( '<div/>' )
        .addClass( 'entry' )
        .append( obj.timestamp )
        .append( sep )
        .append( obj.message )
}

function storeLog() {
    localStorage.setItem( 'log', JSON.stringify(Log) )
}

function getLog( callback ) {
    Log = JSON.parse( localStorage.getItem('log') )
    Log = Log ? Log : []

    callback()

    return Log
}

function scrollToBottom() {
    var h = $('#log')[0].scrollHeight
    $('#log').scrollTop( h )

    return h
}

function reset() {
    scrollToBottom()
    el.input.val( '' ).focus()

    return 'reset()'
}

function clearLog() {
    Log = []

    applyLogEntry()
    reset()

    return Log
}