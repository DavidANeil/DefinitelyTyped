/// <reference path="../../../../globals.d.ts"/>
/// <reference path="./matcher.d.ts"/>

declare module 'goog:goog.labs.testing.AnythingMatcher' {
    import alias = goog.labs.testing.AnythingMatcher;
    export default alias;
}

declare namespace goog.labs.testing {
    /**
     * The Anything matcher. Matches all possible inputs.
     *
     * @implements {goog.labs.testing.Matcher}
     * @final
     */
    class AnythingMatcher extends __AnythingMatcher {}
    abstract class __AnythingMatcher implements goog.labs.testing.Matcher {
        /**
         */
        constructor();

        /**
         * Determines whether a value matches the constraints of the match.
         *
         * @param {*} value The object to match.
         * @return {boolean} Whether the input value matches this matcher.
         */
        matches(value: any): boolean;

        /**
         * Describes why the matcher failed.
         *
         * @param {*} value The value that didn't match.
         * @param {string=} opt_description A partial description to which the reason
         *     will be appended.
         *
         * @return {string} Description of why the matcher failed.
         */
        describe(value: any, opt_description?: string): string;
    }
}
