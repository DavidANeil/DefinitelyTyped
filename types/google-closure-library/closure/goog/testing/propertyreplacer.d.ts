/// <reference path="../../../globals.d.ts"/>

declare namespace goog.testing {
    /**
     * Helper class for stubbing out variables and object properties for unit tests.
     * This class can change the value of some variables before running the test
     * cases, and to reset them in the tearDown phase.
     * See googletest.StubOutForTesting as an analogy in Python:
     * http://protobuf.googlecode.com/svn/trunk/python/stubout.py
     *
     * Example usage:
     *
     *     var stubs = new goog.testing.PropertyReplacer();
     *
     *     function setUp() {
     *       // Mock functions used in all test cases.
     *       stubs.replace(Math, 'random', function() {
     *         return 4;  // Chosen by fair dice roll. Guaranteed to be random.
     *       });
     *     }
     *
     *     function tearDown() {
     *       stubs.reset();
     *     }
     *
     *     function testThreeDice() {
     *       // Mock a constant used only in this test case.
     *       stubs.set(goog.global, 'DICE_COUNT', 3);
     *       assertEquals(12, rollAllDice());
     *     }
     *
     * Constraints on altered objects:
     * <ul>
     *   <li>DOM subclasses aren't supported.
     *   <li>The value of the objects' constructor property must either be equal to
     *       the real constructor or kept untouched.
     * </ul>
     *
     * Code compiled with property renaming may need to use
     * `goog.reflect.objectProperty` instead of simply naming the property to
     * replace.
     *
     * @final
     */
    class PropertyReplacer extends __PropertyReplacer {}
    abstract class __PropertyReplacer {
        /**
         */
        constructor();

        /**
         * Stores the values changed by the set() method in chronological order.
         * Its items are objects with 3 fields: 'object', 'key', 'value'. The
         * original value for the given key in the given object is stored under the
         * 'value' key.
         * @type {Array<{ object: ?, key: string, value: ? }>}
         * @private
         */
        private original_: {object: any; key: string; value: any}[];

        /**
         * Adds or changes a value in an object while saving its original state.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to change the value for.
         * @param {*} value The new value to set.
         * @throws {Error} In case of trying to set a read-only property.
         */
        set(obj: Object|Function, key: string, value: any): void;

        /**
         * Changes an existing value in an object to another one of the same type while
         * saving its original state. The advantage of `replace` over {@link #set}
         * is that `replace` protects against typos and erroneously passing tests
         * after some members have been renamed during a refactoring.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to change the value for. It has to be present
         *     either in `obj` or in its prototype chain.
         * @param {*} value The new value to set.
         * @param {boolean=} opt_allowNullOrUndefined By default, this method requires
         *     `value` to match the type of the existing value, as determined by
         *     {@link goog.typeOf}. Setting opt_allowNullOrUndefined to `true`
         *     allows an existing value to be replaced by `null` or
               `undefined`, or vice versa.
         * @throws {Error} In case of missing key or type mismatch.
         */
        replace(obj: Object|Function, key: string, value: any, opt_allowNullOrUndefined?: boolean): void;

        /**
         * Builds an object structure for the provided namespace path.  Doesn't
         * overwrite those prefixes of the path that are already objects or functions.
         * @param {string} path The path to create or alter, e.g. 'goog.ui.Menu'.
         * @param {*} value The value to set.
         */
        setPath(path: string, value: any): void;

        /**
         * Deletes the key from the object while saving its original value.
         * @param {Object|Function} obj The JavaScript or native object or function to
         *     alter. See the constraints in the class description.
         * @param {string} key The key to delete.
         */
        remove(obj: Object|Function, key: string): void;

        /**
         * Restore the original state of key in an object.
         * @param {!Object|!Function} obj The JavaScript or native object whose state
         *     should be restored.
         * @param {string} key The key to restore the original value for.
         * @throws {Error} In case the object/key pair hadn't been modified earlier.
         */
        restore(obj: Object|Function, key: string): void;

        /**
         * Resets all changes made by goog.testing.PropertyReplacer.prototype.set.
         */
        reset(): void;
    }
}

declare namespace goog.testing.PropertyReplacer {
}
