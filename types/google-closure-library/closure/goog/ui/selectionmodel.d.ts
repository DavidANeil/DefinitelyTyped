/// <reference path="../../../globals.d.ts"/>
/// <reference path="../events/eventtarget.d.ts"/>

declare module 'goog:goog.ui.SelectionModel' {
    import alias = goog.ui.SelectionModel;
    export default alias;
}

declare namespace goog.ui {
    /**
     * Single-selection model.  Dispatches a {@link goog.events.EventType.SELECT}
     * event when a selection is made.
     * @extends {goog.events.EventTarget}
     */
    class SelectionModel extends __SelectionModel {}
    abstract class __SelectionModel extends goog.events.__EventTarget {
        /**
         * @param {Array<Object>=} opt_items Array of items; defaults to empty.
         */
        constructor(opt_items?: Object[]);

        /**
         * Array of items controlled by the selection model.  If the items support
         * the `setSelected(Boolean)` interface, they will be (de)selected
         * as needed.
         * @type {!Array<Object>}
         * @private
         */
        private items_: Object[];

        /**
         * The currently selected item (null if none).
         * @type {Object}
         * @private
         */
        private selectedItem_: Object;

        /**
         * Selection handler function.  Called with two arguments (the item to be
         * selected or deselected, and a Boolean indicating whether the item is to
         * be selected or deselected).
         * @type {Function}
         * @private
         */
        private selectionHandler_: Function;

        /**
         * Returns the selection handler function used by the selection model to change
         * the internal selection state of items under its control.
         * @return {Function} Selection handler function (null if none).
         */
        getSelectionHandler(): Function;

        /**
         * Sets the selection handler function to be used by the selection model to
         * change the internal selection state of items under its control.  The
         * function must take two arguments:  an item and a Boolean to indicate whether
         * the item is to be selected or deselected.  Selection handler functions are
         * only needed if the items in the selection model don't natively support the
         * `setSelected(Boolean)` interface.
         * @param {Function} handler Selection handler function.
         */
        setSelectionHandler(handler: Function): void;

        /**
         * Returns the number of items controlled by the selection model.
         * @return {number} Number of items.
         */
        getItemCount(): number;

        /**
         * Returns the 0-based index of the given item within the selection model, or
         * -1 if no such item is found.
         * @param {Object|undefined} item Item to look for.
         * @return {number} Index of the given item (-1 if none).
         */
        indexOfItem(item: Object|undefined): number;

        /**
         * @return {Object|undefined} The first item, or undefined if there are no items
         *     in the model.
         */
        getFirst(): Object|undefined;

        /**
         * @return {Object|undefined} The last item, or undefined if there are no items
         *     in the model.
         */
        getLast(): Object|undefined;

        /**
         * Returns the item at the given 0-based index.
         * @param {number} index Index of the item to return.
         * @return {Object} Item at the given index (null if none).
         */
        getItemAt(index: number): Object;

        /**
         * Bulk-adds items to the selection model.  This is more efficient than calling
         * {@link #addItem} for each new item.
         * @param {Array<Object>|undefined} items New items to add.
         */
        addItems(items: Object[]|undefined): void;

        /**
         * Adds an item at the end of the list.
         * @param {Object} item Item to add.
         */
        addItem(item: Object): void;

        /**
         * Adds an item at the given index.
         * @param {Object} item Item to add.
         * @param {number} index Index at which to add the new item.
         */
        addItemAt(item: Object, index: number): void;

        /**
         * Removes the given item (if it exists).  Dispatches a `SELECT` event if
         * the removed item was the currently selected item.
         * @param {Object} item Item to remove.
         */
        removeItem(item: Object): void;

        /**
         * Removes the item at the given index.
         * @param {number} index Index of the item to remove.
         */
        removeItemAt(index: number): void;

        /**
         * @return {Object} The currently selected item, or null if none.
         */
        getSelectedItem(): Object;

        /**
         * @return {!Array<Object>} All items in the selection model.
         */
        getItems(): Object[];

        /**
         * Selects the given item, deselecting any previously selected item, and
         * dispatches a `SELECT` event.
         * @param {Object} item Item to select (null to clear the selection).
         */
        setSelectedItem(item: Object): void;

        /**
         * @return {number} The 0-based index of the currently selected item, or -1
         *     if none.
         */
        getSelectedIndex(): number;

        /**
         * Selects the item at the given index, deselecting any previously selected
         * item, and dispatches a `SELECT` event.
         * @param {number} index Index to select (-1 to clear the selection).
         */
        setSelectedIndex(index: number): void;

        /**
         * Clears the selection model by removing all items from the selection.
         */
        clear(): void;

        /**
         * Private helper; selects or deselects the given item based on the value of
         * the `select` argument.  If a selection handler has been registered
         * (via {@link #setSelectionHandler}, calls it to update the internal selection
         * state of the item.  Otherwise, attempts to call `setSelected(Boolean)`
         * on the item itself, provided the object supports that interface.
         * @param {Object} item Item to select or deselect.
         * @param {boolean} select If true, the object will be selected; if false, it
         *     will be deselected.
         * @private
         */
        private selectItem_(item: Object, select: boolean): void;
    }
}
