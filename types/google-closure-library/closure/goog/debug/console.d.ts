/// <reference path="../../../globals.d.ts"/>
/// <reference path="./formatter.d.ts"/>
/// <reference path="./logrecord.d.ts"/>

declare module 'goog:goog.debug.Console' {
    import alias = goog.debug.Console;
    export default alias;
}

declare namespace goog.debug {
    /**
     * Create and install a log handler that logs to window.console if available
     */
    class Console extends __Console {}
    abstract class __Console {
        /**
         */
        constructor();

        /**
         * Formatter for formatted output.
         * @type {!goog.debug.TextFormatter}
         * @private
         */
        private formatter_: goog.debug.TextFormatter;

        /**
         * Loggers that we shouldn't output.
         * @type {!Object<boolean>}
         * @private
         */
        private filteredLoggers_: {[key: string]: boolean};

        /**
         * Returns the text formatter used by this console
         * @return {!goog.debug.TextFormatter} The text formatter.
         */
        getFormatter(): goog.debug.TextFormatter;

        /**
         * Sets whether we are currently capturing logger output.
         * @param {boolean} capturing Whether to capture logger output.
         */
        setCapturing(capturing: boolean): void;

        /**
         * Adds a log record.
         * @param {goog.debug.LogRecord} logRecord The log entry.
         */
        addLogRecord(logRecord: goog.debug.LogRecord): void;

        /**
         * Adds a logger name to be filtered.
         * @param {string} loggerName the logger name to add.
         */
        addFilter(loggerName: string): void;

        /**
         * Removes a logger name to be filtered.
         * @param {string} loggerName the logger name to remove.
         */
        removeFilter(loggerName: string): void;
    }
}

declare namespace goog.debug.Console {
    /**
     * Global console logger instance
     * @type {goog.debug.Console}
     */
    let instance: goog.debug.Console;

    /**
     * Sets the console to which to log.
     * @param {!Object} console The console to which to log.
     */
    function setConsole(console: Object): void;

    /**
     * Install the console and start capturing if "Debug=true" is in the page URL
     */
    function autoInstall(): void;

    /**
     * Show an alert with all of the captured debug information.
     * Information is only captured if console is not available
     */
    function show(): void;
}
