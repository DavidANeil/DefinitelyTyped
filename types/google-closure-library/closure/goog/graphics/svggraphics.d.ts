/// <reference path="../../../globals.d.ts"/>
/// <reference path="./abstractgraphics.d.ts"/>
/// <reference path="../dom/dom.d.ts"/>
/// <reference path="../events/eventhandler.d.ts"/>
/// <reference path="./element.d.ts"/>
/// <reference path="./groupelement.d.ts"/>
/// <reference path="./imageelement.d.ts"/>
/// <reference path="./path.d.ts"/>

declare module 'goog:goog.graphics.SvgGraphics' {
    import alias = goog.graphics.SvgGraphics;
    export default alias;
}

declare namespace goog.graphics {
    /**
     * A Graphics implementation for drawing using SVG.
     * @extends {goog.graphics.AbstractGraphics}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class SvgGraphics extends __SvgGraphics {}
    abstract class __SvgGraphics extends goog.graphics.__AbstractGraphics {
        /**
         * @param {string|number} width The width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The height in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {?number=} opt_coordWidth The coordinate width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight The coordinate height - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         */
        constructor(
            width: string|number,
            height: string|number,
            opt_coordWidth?: number|null,
            opt_coordHeight?: number|null,
            opt_domHelper?: goog.dom.DomHelper
        );

        /**
         * Map from def key to id of def root element.
         * Defs are global "defines" of svg that are used to share common attributes,
         * for example gradients.
         * @type {Object}
         * @private
         */
        private defs_: Object;

        /**
         * Whether to manually implement viewBox by using a coordinate transform.
         * As of 1/11/08 this is necessary for Safari 3 but not for the nightly
         * WebKit build. Apply to webkit versions < 526. 525 is the
         * last version used by Safari 3.1.
         * @type {boolean}
         * @private
         */
        private useManualViewbox_: boolean;

        /**
         * Event handler.
         * @type {goog.events.EventHandler<!goog.graphics.SvgGraphics>}
         * @private
         */
        private handler_: goog.events.EventHandler<goog.graphics.SvgGraphics>;

        /**
         * Svg element for definitions for other elements, e.g. linear gradients.
         * @type {Element}
         * @private
         */
        private defsElement_: Element;

        /**
         * Creates an SVG element. Used internally and by different SVG classes.
         * @param {string} tagName The type of element to create.
         * @param {Object=} opt_attributes Map of name-value pairs for attributes.
         * @return {!Element} The created element.
         * @private
         */
        private createSvgElement_(tagName: string, opt_attributes?: Object): Element;

        /**
         * Sets properties to an SVG element. Used internally and by different
         * SVG elements.
         * @param {Element} element The svg element.
         * @param {Object} attributes Map of name-value pairs for attributes.
         */
        setElementAttributes(element: Element, attributes: Object): void;

        /**
         * Appends an element.
         *
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         * @private
         */
        private append_(element: goog.graphics.Element, opt_group?: goog.graphics.GroupElement): void;

        /**
         * @return {string} The view box string.
         * @private
         */
        private getViewBox_(): string;

        /**
         * Sets up the view box.
         * @private
         */
        private setViewBox_(): void;

        /**
         * Updates the transform of the root element to fake a viewBox.  Should only
         * be called when useManualViewbox_ is set.
         * @private
         */
        private updateManualViewBox_(): void;

        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of the image.
         * @param {number} height Height of the image.
         * @param {string} src The source fo the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created image wrapped in a
         *     rectangle element.
         */
        drawImage(
            x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement
        ): goog.graphics.ImageElement;

        /**
         * Adds a definition of an element to the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @param {Element} defElement DOM element to add as a definition. It must
         *     have an id attribute set.
         * @return {string} The assigned id of the defElement.
         */
        addDef(defKey: string, defElement: Element): string;

        /**
         * Returns the id of a definition element.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @return {?string} The id of the found definition element or null if
         *     not found.
         */
        getDef(defKey: string): string|null;

        /**
         * Removes a definition of an elemnt from the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal they should have the same key.
         */
        removeDef(defKey: string): void;
    }
}

declare namespace goog.graphics.SvgGraphics {
    /**
     * Returns a string representation of a logical path suitable for use in
     * an SVG element.
     *
     * @param {goog.graphics.Path} path The logical path.
     * @return {string} The SVG path representation.
     * @suppress {deprecated} goog.graphics is deprecated.
     */
    function getSvgPath(path: goog.graphics.Path): string;
}
