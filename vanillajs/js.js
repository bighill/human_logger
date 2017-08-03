/*
|
|   js.js
|
*/

var Log = []

var el = {
    form    : document.getElementById( 'new-log-form' ),
    input   : document.getElementById( 'new-log-entry'),
    log     : document.getElementById( 'log' ),
    clear   : document.getElementById( 'clear-log' ),
}

var init = function() {

    listeners()
    reset()
    getLog( updateDom )

    return 'init()'
}

var listeners = function() {

    el.form.addEventListener( 'submit', submitLogEntry )
    el.clear.addEventListener( 'click', clearLog )

    document.removeEventListener( 'DOMContentLoaded', init )
}

var reset = function() {
    el.input.value = ''
    el.input.focus()

    scrollToBottom()

    return 'reset()'
}

var scrollToBottom = function() {
    el.log.scrollTop = el.log.scrollHeight

    return el.log.scrollTop
}

var getLog = function( callback ) {
    Log = JSON.parse( localStorage.getItem('log') )
    Log = Log ? Log : []

    callback()

    return Log
}

var updateDom = function() {
    var entryDivs = Log.map( _makeEntryDiv )
    el.log.innerHTML = entryDivs.join( ' ' )

    return el.log
}

var _makeEntryDiv = function( obj ) {
    var template  ='<div>{timestamp}<span class="sep">::</span>{message}</div>'

    return _htmlize( template, obj )
}

var _htmlize = function( s, d ) {
    for( var p in d )
        s=s.replace(new RegExp('{'+p+'}','g'), d[p]);

    return s;
}

var submitLogEntry = function( ev ) {
    ev.preventDefault()

    addLogEntry( applyLogEntry )
    reset()

    return 'submitLogEntry()'
}

var addLogEntry = function( callback ) {
    Log.push({
        message     : el.input.value,
        timestamp   : Date(),
    })

    callback()

    return Log
}

var applyLogEntry = function() {
    updateDom()
    storeLog()
}

var storeLog = function() {
    localStorage.setItem( 'log', JSON.stringify(Log) )
}

var clearLog = function() {
    Log = []

    applyLogEntry()
    reset()

    return Log
}
