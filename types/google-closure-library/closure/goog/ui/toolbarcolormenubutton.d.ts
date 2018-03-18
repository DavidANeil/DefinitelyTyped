/// <reference path="../../../globals.d.ts"/>
/// <reference path="./colormenubutton.d.ts"/>
/// <reference path="./controlcontent.d.ts"/>
/// <reference path="./menu.d.ts"/>
/// <reference path="./colormenubuttonrenderer.d.ts"/>
/// <reference path="../dom/dom.d.ts"/>

declare namespace goog.ui {
    /**
     * A color menu button control for a toolbar.
     *
     * @extends {goog.ui.ColorMenuButton}
     */
    class ToolbarColorMenuButton extends __ToolbarColorMenuButton {}
    abstract class __ToolbarColorMenuButton extends goog.ui.__ColorMenuButton {
        /**
         * @param {goog.ui.ControlContent} content Text caption or existing DOM
         *     structure to display as the button's caption.
         * @param {goog.ui.Menu=} opt_menu Menu to render under the button when clicked;
         *     should contain at least one {@link goog.ui.ColorPalette} if present.
         * @param {goog.ui.ColorMenuButtonRenderer=} opt_renderer Optional
         *     renderer used to render or decorate the button; defaults to
         *     {@link goog.ui.ToolbarColorMenuButtonRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         */
        constructor(
            content: goog.ui.ControlContent,
            opt_menu?: goog.ui.Menu,
            opt_renderer?: goog.ui.ColorMenuButtonRenderer,
            opt_domHelper?: goog.dom.DomHelper
        );
    }
}
