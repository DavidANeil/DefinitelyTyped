/// <reference path="../../../globals.d.ts"/>
/// <reference path="./abstractdragdrop.d.ts"/>

declare module 'goog:goog.fx.DragDropGroup' {
    import alias = goog.fx.DragDropGroup;
    export default alias;
}

declare namespace goog.fx {
    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * multiple HTML Elements (items). All items share the same drop target(s) but
     * can be dragged individually.
     *
     * @extends {goog.fx.AbstractDragDrop}
     * @struct
     */
    class DragDropGroup extends __DragDropGroup {}
    abstract class __DragDropGroup extends goog.fx.__AbstractDragDrop {
        /**
         */
        constructor();

        /**
         * Add DragDropItem to drag object.
         *
         * @param {goog.fx.DragDropItem} item DragDropItem being added to the
         *     drag object.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         */
        addDragDropItem(item: goog.fx.DragDropItem): void;

        /**
         * Remove item from drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, that was previously added with addItem().
         */
        removeItem(element: Element|string): void;

        /**
         * Marks the supplied list of items as selected. A drag operation for any of the
         * selected items will affect all of them.
         *
         * @param {Array<goog.fx.DragDropItem>} list List of items to select or null to
         *     clear selection.
         *
         * TODO(eae): Not yet implemented.
         */
        setSelection(list: goog.fx.DragDropItem[]): void;
    }
}
