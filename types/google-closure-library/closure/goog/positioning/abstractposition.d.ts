/// <reference path="../../../globals.d.ts"/>
/// <reference path="./positioning.d.ts"/>
/// <reference path="../math/box.d.ts"/>
/// <reference path="../math/size.d.ts"/>

declare namespace goog.positioning {
    /**
     * Abstract position object. Encapsulates position and overflow handling.
     *
     */
    class AbstractPosition extends __AbstractPosition {}
    abstract class __AbstractPosition {
        /**
         */
        constructor();

        /**
         * Repositions the element. Abstract method, should be overloaded.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} corner Corner of the movable element that
         *     should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
         *     movableElement.
         */
        reposition(
            movableElement: Element,
            corner: goog.positioning.Corner,
            opt_margin?: goog.math.Box,
            opt_preferredSize?: goog.math.Size
        ): void;
    }
}
