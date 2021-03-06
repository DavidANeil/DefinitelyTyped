/// <reference path="../../../globals.d.ts"/>

declare module 'goog:goog.testing.testSuite' {
    import alias = goog.testing.testSuite;
    export default alias;
}

declare namespace goog.testing {
    /**
     * Runs the lifecycle methods (setUp, tearDown, etc.) and test* methods from
     * the given object. For use in tests that are written as JavaScript modules
     * or goog.modules.
     *
     * @param {!Object<string, function()|!Object>} obj An object with one or more
     *     test methods, and optional setUp, tearDown and getTestName methods. The
     *     object may also have nested Objects that will be treated as nested
     *     testSuites. Any additional setUp will run after parent setUps, any
     *     additional tearDown will run before parent tearDowns. The this object
     *     refers to the object that the functions were defined on, not the full
     *     testSuite object.
     * @param {!TestSuiteOptions=} opt_options Optional options object which can
     *     be used to set the sort order for running tests.
     */
    function testSuite(obj: {[key: string]: (() => void)|Object}, opt_options?: Object): void;
}
