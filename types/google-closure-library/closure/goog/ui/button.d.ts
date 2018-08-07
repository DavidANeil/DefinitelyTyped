/// <reference path="../../../globals.d.ts"/>
/// <reference path="./control.d.ts"/>
/// <reference path="./controlcontent.d.ts"/>
/// <reference path="./buttonrenderer.d.ts"/>
/// <reference path="../dom/dom.d.ts"/>

declare module 'goog:goog.ui.Button' {
    import alias = goog.ui.Button;
    export default alias;
}

declare module 'goog:goog.ui.Button.Side' {
    import alias = goog.ui.Button.Side;
    export default alias;
}

declare namespace goog.ui {
    /**
     * A button control, rendered as a native browser button by default.
     *
     * @extends {goog.ui.Control}
     */
    class Button extends __Button {}
    abstract class __Button extends goog.ui.__Control {
        /**
         * @param {goog.ui.ControlContent=} opt_content Text caption or existing DOM
         *     structure to display as the button's caption (if any).
         * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
         *     decorate the button; defaults to {@link goog.ui.NativeButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         */
        constructor(
            opt_content?: goog.ui.ControlContent,
            opt_renderer?: goog.ui.ButtonRenderer,
            opt_domHelper?: goog.dom.DomHelper
        );

        /**
         * Value associated with the button.
         * @type {*}
         * @private
         */
        private value_: any;

        /**
         * Tooltip text for the button, displayed on hover.
         * @type {string|undefined}
         * @private
         */
        private tooltip_: string|undefined;

        /**
         * Returns the value associated with the button.
         * @return {*} Button value (undefined if none).
         */
        getValue(): any;

        /**
         * Sets the value associated with the button, and updates its DOM.
         * @param {*} value New button value.
         */
        setValue(value: any): void;

        /**
         * Sets the value associated with the button.  Unlike {@link #setValue},
         * doesn't update the button's DOM.  Considered protected; to be called only
         * by renderer code during element decoration.
         * @param {*} value New button value.
         * @protected
         */
        protected setValueInternal(value: any): void;

        /**
         * Returns the tooltip for the button.
         * @return {string|undefined} Tooltip text (undefined if none).
         */
        getTooltip(): string|undefined;

        /**
         * Sets the tooltip for the button, and updates its DOM.
         * @param {string} tooltip New tooltip text.
         */
        setTooltip(tooltip: string): void;

        /**
         * Sets the tooltip for the button.  Unlike {@link #setTooltip}, doesn't update
         * the button's DOM.  Considered protected; to be called only by renderer code
         * during element decoration.
         * @param {string} tooltip New tooltip text.
         * @protected
         */
        protected setTooltipInternal(tooltip: string): void;

        /**
         * Collapses the border on one or both sides of the button, allowing it to be
         * combined with the adjancent button(s), forming a single UI componenet with
         * multiple targets.
         * @param {number} sides Bitmap of one or more {@link goog.ui.ButtonSide}s for
         *     which borders should be collapsed.
         */
        setCollapsed(sides: number): void;
    }
}

declare namespace goog.ui.Button {
    /**
     * Constants for button sides, see {@link goog.ui.Button.prototype.setCollapsed}
     * for details. Aliased from goog.ui.ButtonSide to support legacy users without
     * creating a circular dependency in {@link goog.ui.ButtonRenderer}.
     * @enum {number}
     * @deprecated use {@link goog.ui.ButtonSide} instead.
     */
    enum Side { /* goog.ui.ButtonSide */ }
}
