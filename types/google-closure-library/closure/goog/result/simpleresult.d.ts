/// <reference path="../../../globals.d.ts"/>
/// <reference path="./result_interface.d.ts"/>
/// <reference path="../debug/error.d.ts"/>
/// <reference path="../promise/promise.d.ts"/>

declare module 'goog:goog.result.SimpleResult' {
    import alias = goog.result.SimpleResult;
    export default alias;
}

declare module 'goog:goog.result.SimpleResult.StateError' {
    import alias = goog.result.SimpleResult.StateError;
    export default alias;
}

declare namespace goog.result {
    /**
     * A SimpleResult object is a basic implementation of the
     * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
     * or instantiated and returned by another class as a form of result. The caller
     * receiving the result could then attach handlers to be called when the result
     * is resolved(success or error).
     *
     * @implements {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class SimpleResult extends __SimpleResult {}
    abstract class __SimpleResult implements goog.result.Result {
        /**
         */
        constructor();

        /**
         * The current state of this Result.
         * @type {goog.result.Result.State}
         * @private
         */
        private state_: goog.result.Result.State;

        /**
         * The list of handlers to call when this Result is resolved.
         * @type {!Array<!goog.result.SimpleResult.HandlerEntry_>}
         * @private
         */
        private handlers_: any[];

        /**
         * The 'value' of this Result.
         * @type {*}
         * @private
         */
        private value_: any;

        /**
         * The error slug for this Result.
         * @type {*}
         * @private
         */
        private error_: any;

        /**
         * Sets the value of this Result, changing the state.
         *
         * @param {*} value The value to set for this Result.
         */
        setValue(value: any): void;

        /**
         * Sets the Result to be an error Result.
         *
         * @param {*=} opt_error Optional error slug to set for this Result.
         */
        setError(opt_error?: any): void;

        /**
         * Calls the handlers registered for this Result.
         *
         * @private
         */
        private callHandlers_(): void;

        /**
         * @return {boolean} Whether the Result is pending.
         * @private
         */
        private isPending_(): boolean;

        /**
         * Attaches handlers to be called when the value of this Result is available.
         * Handlers are called in the order they were added by wait.
         *
         * @param {function(this:T, !goog.result.Result)} handler The function called
         *     when the value is available. The function is passed the Result object as
         *     the only argument.
         * @param {T=} opt_scope Optional scope for the handler.
         * @template T
         */
        wait<T>(handler: (this: T, _0: goog.result.Result) => void, opt_scope?: T): void;

        /**
         * @return {!goog.result.Result.State} The state of this Result.
         */
        getState(): goog.result.Result.State;

        /**
         * @return {*} The value of this Result. Will return undefined if the Result is
         *     pending or was an error.
         */
        getValue(): any;

        /**
         * @return {*} The error slug for this Result. Will return undefined if the
         *     Result was a success, the error slug was not set, or if the Result is
         *     pending.
         */
        getError(): any;

        /**
         * Cancels the current Result, invoking the canceler function, if set.
         *
         * @return {boolean} Whether the Result was canceled.
         */
        cancel(): boolean;

        /**
         * @return {boolean} Whether this Result was canceled.
         */
        isCanceled(): boolean;

        readonly then: any;
    }
}

declare namespace goog.result.SimpleResult {
    /**
     * Error thrown if there is an attempt to set the value or error for this result
     * more than once.
     *
     * @extends {goog.debug.Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class StateError extends __StateError {}
    abstract class __StateError extends goog.debug.__Error {
        /**
         */
        constructor();
    }

    /**
     * Creates a SimpleResult that fires when the given promise resolves.
     * Use only during migration to Promises.
     * @param {!goog.Promise<?>} promise
     * @return {!goog.result.Result}
     */
    function fromPromise(promise: goog.Promise<any>): goog.result.Result;
}
