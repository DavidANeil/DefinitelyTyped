/// <reference path="../../../globals.d.ts"/>
/// <reference path="./containerrenderer.d.ts"/>
/// <reference path="./menu.d.ts"/>

declare namespace goog.ui {
    /**
     * Default renderer for {@link goog.ui.Menu}s, based on {@link
     * goog.ui.ContainerRenderer}.
     * @extends {goog.ui.ContainerRenderer}
     */
    class MenuRenderer extends __MenuRenderer {}
    abstract class __MenuRenderer extends goog.ui.__ContainerRenderer {
        /**
         * @param {string=} opt_ariaRole Optional ARIA role used for the element.
         */
        constructor(opt_ariaRole?: string);

        /**
         * Returns whether the given element is contained in the menu's DOM.
         * @param {goog.ui.Menu} menu The menu to test.
         * @param {Element} element The element to test.
         * @return {boolean} Whether the given element is contained in the menu.
         */
        containsElement(menu: goog.ui.Menu, element: Element): boolean;
    }
}

declare namespace goog.ui.MenuRenderer {
    /**
     * Default CSS class to be applied to the root element of toolbars rendered
     * by this renderer.
     * @type {string}
     */
    let CSS_CLASS: string;
}
