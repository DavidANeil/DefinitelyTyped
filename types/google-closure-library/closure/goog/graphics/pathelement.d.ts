/// <reference path="../../../globals.d.ts"/>
/// <reference path="./strokeandfillelement.d.ts"/>
/// <reference path="./abstractgraphics.d.ts"/>
/// <reference path="./stroke.d.ts"/>
/// <reference path="./fill.d.ts"/>
/// <reference path="./path.d.ts"/>

declare module 'goog:goog.graphics.PathElement' {
    import alias = goog.graphics.PathElement;
    export default alias;
}

declare namespace goog.graphics {
    /**
     * Interface for a graphics path element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class PathElement extends __PathElement {}
    abstract class __PathElement extends goog.graphics.__StrokeAndFillElement {
        /**
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         */
        constructor(
            element: Element,
            graphics: goog.graphics.AbstractGraphics,
            stroke: goog.graphics.Stroke|null,
            fill: goog.graphics.Fill|null
        );

        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         */
        setPath(path: goog.graphics.Path): void;
    }
}
