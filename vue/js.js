/*
|
|   js.js
|
*/

var app = new Vue({
    el: '#app',
    data: {
        log : [],
        message : '',
    },
    methods: {
        submitLogEntry : function() {
            this.addLogEntry( this.applyLogEntry )
            this.reset()
            return 'submitLogEntry()'
        },
        addLogEntry : function( cb ) {
            this.log.push({
                message     : this.message,
                timestamp   : Date(),
            })

            cb()
            return log
        },
        applyLogEntry : function() {
            this.storeLog()
        },
        reset : function() {
            var inputEl = document.getElementById( 'new-log-entry' )
            inputEl.focus()

            this.message = ''

            Vue.nextTick( scrollToBottom )

            return 'reset()'
        },
        getLog : function() {
            _log = JSON.parse( localStorage.getItem('log') )
            this.log = _log ? _log : []

            return this.log
        },
        storeLog : function() {
            localStorage.setItem( 'log', JSON.stringify(this.log) )
        },
        clearLog : function() {
            this.log = []
            this.storeLog()
        },
    },
    mounted : function() {
        this.getLog()
        this.reset()
    }
})

var scrollToBottom = function() {
    var logEl = document.getElementById( 'log' )
    logEl.scrollTop = logEl.scrollHeight
    
    return logEl.scrollTop
}