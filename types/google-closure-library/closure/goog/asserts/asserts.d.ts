/// <reference path="../../../globals.d.ts"/>
/// <reference path="../debug/error.d.ts"/>

declare module 'goog:goog.asserts' {
    export = goog.asserts;
}

declare module 'goog:goog.asserts.AssertionError' {
    import alias = goog.asserts.AssertionError;
    export default alias;
}

declare namespace goog.asserts {
    /**
     * Error object for failed assertions.
     * @extends {goog.debug.Error}
     * @final
     */
    class AssertionError extends __AssertionError {}
    abstract class __AssertionError extends goog.debug.__Error {
        /**
         * @param {string} messagePattern The pattern that was used to form message.
         * @param {!Array<*>} messageArgs The items to substitute into the pattern.
         */
        constructor(messagePattern: string, messageArgs: any[]);

        /**
         * The message pattern used to format the error message. Error handlers can
         * use this to uniquely identify the assertion.
         * @type {string}
         */
        messagePattern: string;
    }

    /**
     * The default error handler.
     * @param {!goog.asserts.AssertionError} e The exception to be handled.
     */
    function DEFAULT_ERROR_HANDLER(e: goog.asserts.AssertionError): void;

    /**
     * Sets a custom error handler that can be used to customize the behavior of
     * assertion failures, for example by turning all assertion failures into log
     * messages.
     * @param {function(!goog.asserts.AssertionError)} errorHandler
     */
    function setErrorHandler(errorHandler: (_0: goog.asserts.AssertionError) => void): void;

    /**
     * Checks if the condition evaluates to true if goog.asserts.ENABLE_ASSERTS is
     * true.
     * @template T
     * @param {T} condition The condition to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {T} The value of the condition.
     * @throws {goog.asserts.AssertionError} When the condition evaluates to false.
     */
    function assert<T>(condition: T, opt_message?: string, ...var_args: any[]): T;

    /**
     * Fails if goog.asserts.ENABLE_ASSERTS is true. This function is useful in case
     * when we want to add a check in the unreachable area like switch-case
     * statement:
     *
     * <pre>
     *  switch(type) {
     *    case FOO: doSomething(); break;
     *    case BAR: doSomethingElse(); break;
     *    default: goog.asserts.fail('Unrecognized type: ' + type);
     *      // We have only 2 types - "default:" section is unreachable code.
     *  }
     * </pre>
     *
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} Failure.
     */
    function fail(opt_message?: string, ...var_args: any[]): void;

    /**
     * Checks if the value is a number if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {number} The value, guaranteed to be a number when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a number.
     */
    function assertNumber(value: any, opt_message?: string, ...var_args: any[]): number;

    /**
     * Checks if the value is a string if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {string} The value, guaranteed to be a string when asserts enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a string.
     */
    function assertString(value: any, opt_message?: string, ...var_args: any[]): string;

    /**
     * Checks if the value is a function if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Function} The value, guaranteed to be a function when asserts
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a function.
     */
    function assertFunction(value: any, opt_message?: string, ...var_args: any[]): Function;

    /**
     * Checks if the value is an Object if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Object} The value, guaranteed to be a non-null object.
     * @throws {goog.asserts.AssertionError} When the value is not an object.
     */
    function assertObject(value: any, opt_message?: string, ...var_args: any[]): Object;

    /**
     * Checks if the value is an Array if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Array<?>} The value, guaranteed to be a non-null array.
     * @throws {goog.asserts.AssertionError} When the value is not an array.
     */
    function assertArray(value: any, opt_message?: string, ...var_args: any[]): any[];

    /**
     * Checks if the value is a boolean if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {boolean} The value, guaranteed to be a boolean when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not a boolean.
     */
    function assertBoolean(value: any, opt_message?: string, ...var_args: any[]): boolean;

    /**
     * Checks if the value is a DOM Element if goog.asserts.ENABLE_ASSERTS is true.
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @return {!Element} The value, likely to be a DOM Element when asserts are
     *     enabled.
     * @throws {goog.asserts.AssertionError} When the value is not an Element.
     */
    function assertElement(value: any, opt_message?: string, ...var_args: any[]): Element;

    /**
     * Checks if the value is an instance of the user-defined type if
     * goog.asserts.ENABLE_ASSERTS is true.
     *
     * The compiler may tighten the type returned by this function.
     *
     * @param {?} value The value to check.
     * @param {function(new: T, ...)} type A user-defined constructor.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} When the value is not an instance of
     *     type.
     * @return {T}
     * @template T
     */
    function assertInstanceof(value: any, type: any, opt_message?: string, ...var_args: any[]): void;

    /**
     * Checks whether the value is a finite number, if goog.asserts.ENABLE_ASSERTS
     * is true.
     *
     * @param {*} value The value to check.
     * @param {string=} opt_message Error message in case of failure.
     * @param {...*} var_args The items to substitute into the failure message.
     * @throws {goog.asserts.AssertionError} When the value is not a number, or is
     *     a non-finite number such as NaN, Infinity or -Infinity.
     * @return {number} The value initially passed in.
     */
    function assertFinite(value: any, opt_message?: string, ...var_args: any[]): number;

    /**
     * Checks that no enumerable keys are present in Object.prototype. Such keys
     * would break most code that use {@code for (var ... in ...)} loops.
     */
    function assertObjectPrototypeIsIntact(): void;
}
