/// <reference path="../../../globals.d.ts"/>

declare module 'goog:goog.async.run' {
    export = goog.async.run;
}

declare namespace goog.async {
    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    function run<THIS>(callback: (this: THIS) => void, opt_context?: THIS): void;
}

declare namespace goog.async.run {
    /**
     * Forces goog.async.run to use nextTick instead of Promise.
     *
     * This should only be done in unit tests. It's useful because MockClock
     * replaces nextTick, but not the browser Promise implementation, so it allows
     * Promise-based code to be tested with MockClock.
     *
     * However, we also want to run promises if the MockClock is no longer in
     * control so we schedule a backup "setTimeout" to the unmocked timeout if
     * provided.
     *
     * @param {function(function())=} opt_realSetTimeout
     */
    function forceNextTick(opt_realSetTimeout?: (_0: () => void) => void): void;

    /**
     * Reset the work queue. Only available for tests in debug mode.
     */
    function resetQueue(): void;

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    function processWorkQueue(): void;
}
