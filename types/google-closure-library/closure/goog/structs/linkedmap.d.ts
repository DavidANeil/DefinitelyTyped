/// <reference path="../../../globals.d.ts"/>

declare module 'goog:goog.structs.LinkedMap' {
    import alias = goog.structs.LinkedMap;
    export default alias;
}

declare namespace goog.structs {
    /**
     * Class for a LinkedMap datastructure, which combines O(1) map access for
     * key/value pairs with a linked list for a consistent iteration order. Sample
     * usage:
     *
     * <pre>
     * var m = new LinkedMap();
     * m.set('param1', 'A');
     * m.set('param2', 'B');
     * m.set('param3', 'C');
     * alert(m.getKeys()); // param1, param2, param3
     *
     * var c = new LinkedMap(5, true);
     * for (var i = 0; i < 10; i++) {
     *   c.set('entry' + i, false);
     * }
     * alert(c.getKeys()); // entry9, entry8, entry7, entry6, entry5
     *
     * c.set('entry5', true);
     * c.set('entry1', false);
     * alert(c.getKeys()); // entry1, entry5, entry9, entry8, entry7
     * </pre>
     *
     * @template KEY, VALUE
     */
    class LinkedMap<KEY, VALUE> extends __LinkedMap<KEY, VALUE> {}
    abstract class __LinkedMap<KEY, VALUE> {
        /**
         * @param {number=} opt_maxCount The maximum number of objects to store in the
         *     LinkedMap. If unspecified or 0, there is no maximum.
         * @param {boolean=} opt_cache When set, the LinkedMap stores items in order
         *     from most recently used to least recently used, instead of insertion
         *     order.
         * @param {function(string, VALUE)=} opt_evictionCallback Called with the
         *     removed stringified key as the first argument and value as the second
         *     argument after the key was evicted from the LRU because the max count
         *     was reached.
         */
        constructor(opt_maxCount?: number, opt_cache?: boolean, opt_evictionCallback?: (_0: string, _1: VALUE) => void);

        /**
         * The maximum number of entries to allow, or null if there is no limit.
         * @private {?number}
         */
        private maxCount_: any /*missing*/;

        /** @private @const {boolean} */
        private cache_: any /*missing*/;

        /** @private {function(string, VALUE)|undefined} */
        private evictionCallback_: any /*missing*/;

        /**
         * @private @const {!goog.structs.Map<string,
         *     goog.structs.LinkedMap.Node_<string, VALUE>>}
         */
        private map_: any /*missing*/;

        /**
         * Finds a node and updates it to be the most recently used.
         * @param {string} key The key of the node.
         * @return {goog.structs.LinkedMap.Node_<string, VALUE>} The node or null if not
         *     found.
         * @private
         */
        private findAndMoveToTop_(key: string): any;

        /**
         * Retrieves the value for a given key. If this is a caching LinkedMap, the
         * entry will become the most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found, defaults to undefined.
         * @return {VALUE} The retrieved value.
         */
        get(key: string, opt_val?: VALUE): VALUE;

        /**
         * Retrieves the value for a given key without updating the entry to be the
         * most recently used.
         * @param {string} key The key to retrieve the value for.
         * @param {VALUE=} opt_val A default value that will be returned if the key is
         *     not found.
         * @return {VALUE} The retrieved value.
         */
        peekValue(key: string, opt_val?: VALUE): VALUE;

        /**
         * Sets a value for a given key. If this is a caching LinkedMap, this entry
         * will become the most recently used.
         * @param {string} key Key with which the specified value is to be associated.
         * @param {VALUE} value Value to be associated with the specified key.
         */
        set(key: string, value: VALUE): void;

        /**
         * Returns the value of the first node without making any modifications.
         * @return {VALUE} The value of the first node or undefined if the map is empty.
         */
        peek(): VALUE;

        /**
         * Returns the value of the last node without making any modifications.
         * @return {VALUE} The value of the last node or undefined if the map is empty.
         */
        peekLast(): VALUE;

        /**
         * Removes the first node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        shift(): VALUE;

        /**
         * Removes the last node from the list and returns its value.
         * @return {VALUE} The value of the popped node, or undefined if the map was
         *     empty.
         */
        pop(): VALUE;

        /**
         * Removes a value from the LinkedMap based on its key.
         * @param {string} key The key to remove.
         * @return {boolean} True if the entry was removed, false if the key was not
         *     found.
         */
        remove(key: string): boolean;

        /**
         * Removes a node from the `LinkedMap`. It can be overridden to do
         * further cleanup such as disposing of the node value.
         * @param {!goog.structs.LinkedMap.Node_<string, VALUE>} node The node to
         *     remove.
         * @protected
         */
        protected removeNode(node: any): void;

        /**
         * @return {number} The number of items currently in the LinkedMap. Sub classes
         *     may override this to change how items are counted (e.g. to introduce
         *     per item weight). Truncation will always proceed as long as the count
         *     returned from this method is higher than the max count for this map.
         */
        getCount(): number;

        /**
         * @return {boolean} True if the cache is empty, false if it contains any items.
         */
        isEmpty(): boolean;

        /**
         * Sets a callback that fires when an entry is evicted because max entry
         * count is reached. The callback is called with the removed stringified key
         * as the first argument and value as the second argument after the key was
         * evicted from the LRU because the max count was reached.
         * @param {function(string, VALUE)} evictionCallback
         */
        setEvictionCallback(evictionCallback: (_0: string, _1: VALUE) => void): void;

        /**
         * Sets the maximum number of entries allowed in this object, truncating any
         * excess objects if necessary.
         * @param {number} maxCount The new maximum number of entries to allow.
         */
        setMaxCount(maxCount: number): void;

        /**
         * @return {!Array<string>} The list of the keys in the appropriate order for
         *     this LinkedMap.
         */
        getKeys(): string[];

        /**
         * @return {!Array<VALUE>} The list of the values in the appropriate order for
         *     this LinkedMap.
         */
        getValues(): VALUE[];

        /**
         * Tests whether a provided value is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {VALUE} value The value to check for.
         * @return {boolean} Whether the value is in the LinkedMap.
         */
        contains(value: VALUE): boolean;

        /**
         * Tests whether a provided key is currently in the LinkedMap. This does not
         * affect item ordering in cache-style LinkedMaps.
         * @param {string} key The key to check for.
         * @return {boolean} Whether the key is in the LinkedMap.
         */
        containsKey(key: string): boolean;

        /**
         * Removes all entries in this object.
         */
        clear(): void;

        /**
         * Calls a function on each item in the LinkedMap.
         *
         * @see goog.structs.forEach
         * @param {function(this:T, VALUE, KEY, goog.structs.LinkedMap<KEY, VALUE>)} f
         * @param {T=} opt_obj The value of "this" inside f.
         * @template T
         */
        forEach<T>(f: (this: T, _0: VALUE, _1: KEY, _2: goog.structs.LinkedMap<KEY, VALUE>) => void, opt_obj?: T): void;

        /**
         * Calls a function on each item in the LinkedMap and returns the results of
         * those calls in an array.
         *
         * @see goog.structs.map
         * @param {function(this:T, VALUE, KEY,
         *         goog.structs.LinkedMap<KEY, VALUE>): RESULT} f
         *     The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap.
         * @param {T=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {!Array<RESULT>} The results of the function calls for each item in
         *     the LinkedMap.
         * @template T,RESULT
         */
        map<T, RESULT>(f: (this: T, _0: VALUE, _1: KEY, _2: goog.structs.LinkedMap<KEY, VALUE>) => RESULT, opt_obj?: T):
            RESULT[];

        /**
         * Calls a function on each item in the LinkedMap and returns true if any of
         * those function calls returns a true-like value.
         *
         * @see goog.structs.some
         * @param {function(this:T, VALUE, KEY,
         *         goog.structs.LinkedMap<KEY, VALUE>):boolean} f
         *     The function to call for each item. The function takes
         *     three arguments: the value, the key, and the LinkedMap, and returns a
         *     boolean.
         * @param {T=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for at least one item in the
         *     LinkedMap.
         * @template T
         */
        some<T>(f: (this: T, _0: VALUE, _1: KEY, _2: goog.structs.LinkedMap<KEY, VALUE>) => boolean, opt_obj?: T):
            boolean;

        /**
         * Calls a function on each item in the LinkedMap and returns true only if every
         * function call returns a true-like value.
         *
         * @see goog.structs.some
         * @param {function(this:T, VALUE, KEY,
         *         goog.structs.LinkedMap<KEY, VALUE>):boolean} f
         *     The function to call for each item. The function takes
         *     three arguments: the value, the key, and the Cache, and returns a
         *     boolean.
         * @param {T=} opt_obj The object context to use as "this" for the
         *     function.
         * @return {boolean} Whether f evaluates to true for every item in the Cache.
         * @template T
         */
        every<T>(f: (this: T, _0: VALUE, _1: KEY, _2: goog.structs.LinkedMap<KEY, VALUE>) => boolean, opt_obj?: T):
            boolean;

        /**
         * Appends a node to the list. LinkedMap in cache mode adds new nodes to
         * the head of the list, otherwise they are appended to the tail. If there is a
         * maximum size, the list will be truncated if necessary.
         *
         * @param {goog.structs.LinkedMap.Node_<string, VALUE>} node The item to insert.
         * @private
         */
        private insert_(node: any): void;

        /**
         * Removes elements from the LinkedMap if the given count has been exceeded.
         * In cache mode removes nodes from the tail of the list. Otherwise removes
         * nodes from the head.
         * @param {number} count Number of elements to keep.
         * @private
         */
        private truncate_(count: number): void;

        /**
         * Removes the node from the LinkedMap if it is not the head, and returns
         * the node's value.
         * @param {!goog.structs.LinkedMap.Node_<string, VALUE>} node The item to
         *     remove.
         * @return {VALUE} The value of the popped node.
         * @private
         */
        private popNode_(node: any): VALUE;
    }
}

declare namespace goog.structs.LinkedMap {
    /**
     * Internal class for a doubly-linked list node containing a key/value pair.
     * @template KEY, VALUE
     * @private
     */
    class Node_<KEY, VALUE> extends __Node_<KEY, VALUE> {}
    abstract class __Node_<KEY, VALUE> {
        /**
         * @param {KEY} key The key.
         * @param {VALUE} value The value.
         */
        constructor(key: KEY, value: VALUE);

        /** @type {KEY} */
        key: KEY;

        /** @type {VALUE} */
        value: VALUE;

        /**
         * The next node in the list.
         * @type {!goog.structs.LinkedMap.Node_<KEY, VALUE>}
         */
        next: any;

        /**
         * The previous node in the list.
         * @type {!goog.structs.LinkedMap.Node_<KEY, VALUE>}
         */
        prev: any;

        /**
         * Causes this node to remove itself from the list.
         */
        remove(): void;
    }
}
