/// <reference path="../../../../globals.d.ts"/>
/// <reference path="../../events/eventtarget.d.ts"/>
/// <reference path="../../dom/dom.d.ts"/>
/// <reference path="../../fx/animation.d.ts"/>
/// <reference path="../../positioning/positioning.d.ts"/>
/// <reference path="../../events/event.d.ts"/>

declare namespace goog.ui.ac {
    /**
     * Class for rendering the results of an auto-complete in a drop down list.
     *
     * @extends {goog.events.EventTarget}
     * @suppress {underscore}
     */
    class Renderer extends __Renderer {}
    abstract class __Renderer extends goog.events.__EventTarget {
        /**
         * @param {Element=} opt_parentNode optional reference to the parent element
         *     that will hold the autocomplete elements. goog.dom.getDocument().body
         *     will be used if this is null.
         * @param {?({renderRow}|{render})=} opt_customRenderer Custom full renderer to
         *     render each row. Should be something with a renderRow or render method.
         * @param {boolean=} opt_rightAlign Determines if the autocomplete will always
         *     be right aligned. False by default.
         * @param {boolean=} opt_useStandardHighlighting Determines if standard
         *     highlighting should be applied to each row of data. Standard highlighting
         *     bolds every matching substring for a given token in each row. True by
         *     default.
         */
        constructor(
            opt_parentNode?: Element,
            opt_customRenderer?: {renderRow: any /*missing*/}|{render: any /*missing*/}|null,
            opt_rightAlign?: boolean,
            opt_useStandardHighlighting?: boolean
        );

        /**
         * Reference to the parent element that will hold the autocomplete elements
         * @type {Element}
         * @private
         */
        private parent_: Element;

        /**
         * Dom helper for the parent element's document.
         * @type {goog.dom.DomHelper}
         * @private
         */
        private dom_: goog.dom.DomHelper;

        /**
         * Whether to reposition the autocomplete UI below the target node
         * @type {boolean}
         * @private
         */
        private reposition_: boolean;

        /**
         * Reference to the main element that controls the rendered autocomplete
         * @type {Element}
         * @private
         */
        private element_: Element;

        /**
         * The current token that has been entered
         * @type {string}
         * @private
         */
        private token_: string;

        /**
         * Array used to store the current set of rows being displayed
         * @type {Array<!Object>}
         * @private
         */
        private rows_: Object[];

        /**
         * Array of the node divs that hold each result that is being displayed.
         * @type {Array<Element>}
         * @protected
         * @suppress {underscore|visibility}
         */
        protected rowDivs_: Element[];

        /**
         * The index of the currently highlighted row
         * @type {number}
         * @protected
         * @suppress {underscore|visibility}
         */
        protected hilitedRow_: number;

        /**
         * The time that the rendering of the menu rows started
         * @type {number}
         * @protected
         * @suppress {underscore|visibility}
         */
        protected startRenderingRows_: number;

        /**
         * Store the current state for the renderer
         * @type {boolean}
         * @private
         */
        private visible_: boolean;

        /**
         * Classname for the main element.  This must be a single valid class name.
         * @type {string}
         */
        className: string;

        /**
         * Classname for row divs.  This must be a single valid class name.
         * @type {string}
         */
        rowClassName: string;

        /**
         * The old class name for active row.  This name is deprecated because its
         * name is generic enough that a typical implementation would require a
         * descendant selector.
         * Active row will have rowClassName & activeClassName &
         * legacyActiveClassName.
         * @type {string}
         * @private
         */
        private legacyActiveClassName_: string;

        /**
         * Class name for active row div.  This must be a single valid class name.
         * Active row will have rowClassName & activeClassName &
         * legacyActiveClassName.
         * @type {string}
         */
        activeClassName: string;

        /**
         * Class name for the bold tag highlighting the matched part of the text.
         * @type {string}
         */
        highlightedClassName: string;

        /**
         * Custom full renderer
         * @type {?({renderRow}|{render})}
         * @private
         */
        private customRenderer_: {renderRow: any /*missing*/}|{render: any /*missing*/}|null;

        /**
         * Flag to indicate whether standard highlighting should be applied.
         * this is set to true if left unspecified to retain existing
         * behaviour for autocomplete clients
         * @type {boolean}
         * @private
         */
        private useStandardHighlighting_: boolean;

        /**
         * Flag to indicate whether matches should be done on whole words instead
         * of any string.
         * @type {boolean}
         * @private
         */
        private matchWordBoundary_: boolean;

        /**
         * Flag to set all tokens as highlighted in the autocomplete row.
         * @type {boolean}
         * @private
         */
        private highlightAllTokens_: boolean;

        /**
         * Determines if the autocomplete will always be right aligned
         * @type {boolean}
         * @private
         */
        private rightAlign_: boolean;

        /**
         * Whether to align with top of target field
         * @type {boolean}
         * @private
         */
        private topAlign_: boolean;

        /**
         * Duration (in msec) of fade animation when menu is shown/hidden.
         * Setting to 0 (default) disables animation entirely.
         * @type {number}
         * @private
         */
        private menuFadeDuration_: number;

        /**
         * Whether we should limit the dropdown from extending past the bottom of the
         * screen and instead show a scrollbar on the dropdown.
         * @type {boolean}
         * @private
         */
        private showScrollbarsIfTooLarge_: boolean;

        /**
         * Animation in progress, if any.
         * @type {goog.fx.Animation|undefined}
         */
        animation_: goog.fx.Animation|undefined;

        /**
         * The anchor element to position the rendered autocompleter against.
         * @type {Element}
         * @private
         */
        private anchorElement_: Element;

        /**
         * The anchor element to position the rendered autocompleter against.
         * @protected {Element|undefined}
         */
        protected target_: any /*missing*/;

        /**
         * The element on which to base the width of the autocomplete.
         * @protected {Node}
         */
        protected widthProvider_: any /*missing*/;

        /**
         * The border width of the autocomplete dropdown, only used in calculating the
         * dropdown width.
         * @private {number}
         */
        private borderWidth_: any /*missing*/;

        /**
         * A flag used to make sure we highlight only one match in the rendered row.
         * @private {boolean}
         */
        private wasHighlightedAtLeastOnce_: any /*missing*/;

        /**
         * Gets the renderer's element.
         * @return {Element} The  main element that controls the rendered autocomplete.
         */
        getElement(): Element;

        /**
         * Sets the width provider element. The provider is only used on redraw and as
         * such will not automatically update on resize.
         * @param {Node} widthProvider The element whose width should be mirrored.
         * @param {number=} opt_borderWidth The with of the border of the autocomplete,
         *     which will be subtracted from the width of the autocomplete dropdown.
         */
        setWidthProvider(widthProvider: Node, opt_borderWidth?: number): void;

        /**
         * Set whether to align autocomplete to top of target element
         * @param {boolean} align If true, align to top.
         */
        setTopAlign(align: boolean): void;

        /**
         * @return {boolean} Whether we should be aligning to the top of
         *     the target element.
         */
        getTopAlign(): boolean;

        /**
         * Set whether to align autocomplete to the right of the target element.
         * @param {boolean} align If true, align to right.
         */
        setRightAlign(align: boolean): void;

        /**
         * @return {boolean} Whether the autocomplete menu should be right aligned.
         */
        getRightAlign(): boolean;

        /**
         * @param {boolean} show Whether we should limit the dropdown from extending
         *     past the bottom of the screen and instead show a scrollbar on the
         *     dropdown.
         */
        setShowScrollbarsIfTooLarge(show: boolean): void;

        /**
         * Set whether or not standard highlighting should be used when rendering rows.
         * @param {boolean} useStandardHighlighting true if standard highlighting used.
         */
        setUseStandardHighlighting(useStandardHighlighting: boolean): void;

        /**
         * @param {boolean} matchWordBoundary Determines whether matches should be
         *     higlighted only when the token matches text at a whole-word boundary.
         *     True by default.
         */
        setMatchWordBoundary(matchWordBoundary: boolean): void;

        /**
         * Set whether or not to highlight all matching tokens rather than just the
         * first.
         * @param {boolean} highlightAllTokens Whether to highlight all matching tokens
         *     rather than just the first.
         */
        setHighlightAllTokens(highlightAllTokens: boolean): void;

        /**
         * Sets the duration (in msec) of the fade animation when menu is shown/hidden.
         * Setting to 0 (default) disables animation entirely.
         * @param {number} duration Duration (in msec) of the fade animation (or 0 for
         *     no animation).
         */
        setMenuFadeDuration(duration: number): void;

        /**
         * Sets the anchor element for the subsequent call to renderRows.
         * @param {Element} anchor The anchor element.
         */
        setAnchorElement(anchor: Element): void;

        /**
         * @return {Element} The anchor element.
         * @protected
         */
        protected getAnchorElement(): Element;

        /**
         * Render the autocomplete UI
         *
         * @param {Array<!Object>} rows Matching UI rows.
         * @param {string} token Token we are currently matching against.
         * @param {Element=} opt_target Current HTML node, will position popup beneath
         *     this node.
         */
        renderRows(rows: Object[], token: string, opt_target?: Element): void;

        /**
         * Hide the object.
         */
        dismiss(): void;

        /**
         * Show the object.
         */
        show(): void;

        /**
         * Toggle the ARIA markup to add popup semantics when the target is shown and
         * to remove them when it is hidden.
         * @param {boolean} isShown Whether the menu is being shown.
         * @private
         */
        private toggleAriaMarkup_(isShown: boolean): void;

        /**
         * @return {boolean} True if the object is visible.
         */
        isVisible(): boolean;

        /**
         * Sets the 'active' class of the nth item.
         * @param {number} index Index of the item to highlight.
         */
        hiliteRow(index: number): void;

        /**
         * Removes the 'active' class from the currently selected row.
         */
        hiliteNone(): void;

        /**
         * Sets the 'active' class of the item with a given id.
         * @param {number} id Id of the row to hilight. If id is -1 then no rows get
         *     hilited.
         */
        hiliteId(id: number): void;

        /**
         * Sets CSS classes on autocomplete conatainer element.
         *
         * @param {Element} elem The container element.
         * @private
         */
        private setMenuClasses_(elem: Element): void;

        /**
         * If the main HTML element hasn't been made yet, creates it and appends it
         * to the parent.
         * @private
         */
        private maybeCreateElement_(): void;

        /**
         * Redraw (or draw if this is the first call) the rendered auto-complete drop
         * down.
         */
        redraw(): void;

        /**
         * @return {goog.positioning.Corner} The anchor corner to position the popup at.
         * @protected
         */
        protected getAnchorCorner(): goog.positioning.Corner;

        /**
         * Repositions the auto complete popup relative to the location node, if it
         * exists and the auto position has been set.
         */
        reposition(): void;

        /**
         * Sets whether the renderer should try to determine where to position the
         * drop down.
         * @param {boolean} auto Whether to autoposition the drop down.
         */
        setAutoPosition(auto: boolean): void;

        /**
         * @return {boolean} Whether the drop down will be autopositioned.
         * @protected
         */
        protected getAutoPosition(): boolean;

        /**
         * @return {Element} The target element.
         * @protected
         */
        protected getTarget(): Element;

        /**
         * Generic function that takes a row and renders a DOM structure for that row.
         *
         * Normally this will only be matching a maximum of 20 or so items.  Even with
         * 40 rows, DOM this building is fine.
         *
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @param {Node} node The node to render into.
         * @private
         */
        private renderRowContents_(row: Object, token: string, node: Node): void;

        /**
         * Goes through a node and all of its child nodes, replacing HTML text that
         * matches a token with <b>token</b>.
         * The replacement will happen on the first match or all matches depending on
         * this.highlightAllTokens_ value.
         *
         * @param {Node} node Node to match.
         * @param {string|Array<string>} tokenOrArray Token to match or array of tokens
         *     to match.  By default, only the first match will be highlighted.  If
         *     highlightAllTokens is set, then all tokens appearing at the start of a
         *     word, in whatever order and however many times, will be highlighted.
         * @private
         */
        private startHiliteMatchingText_(node: Node, tokenOrArray: string|string[]): void;

        /**
         * @param {Node} node Node to match.
         * @param {string|Array<string>} tokenOrArray Token to match or array of tokens
         *     to match.
         * @private
         */
        private hiliteMatchingText_(node: Node, tokenOrArray: string|string[]): void;

        /**
         * Transforms a token into a string ready to be put into the regular expression
         * in hiliteMatchingText_.
         * @param {string|Array<string>} tokenOrArray The token or array to get the
         *     regex string from.
         * @return {string} The regex-ready token.
         * @private
         */
        private getTokenRegExp_(tokenOrArray: string|string[]): string;

        /**
         * Render a row by creating a div and then calling row rendering callback or
         * default row handler
         *
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @return {!Element} An element with the rendered HTML.
         */
        renderRowHtml(row: Object, token: string): Element;

        /**
         * Given an event target looks up through the parents till it finds a div.  Once
         * found it will then look to see if that is one of the childnodes, if it is
         * then the index is returned, otherwise -1 is returned.
         * @param {Element} et HtmlElement.
         * @return {number} Index corresponding to event target.
         * @private
         */
        private getRowFromEventTarget_(et: Element): number;

        /**
         * Handle the click events.  These are redirected to the AutoComplete object
         * which then makes a callback to select the correct row.
         * @param {goog.events.Event} e Browser event object.
         * @private
         */
        private handleClick_(e: goog.events.Event): void;

        /**
         * Handle the mousedown event and prevent the AC from losing focus.
         * @param {goog.events.Event} e Browser event object.
         * @private
         */
        private handleMouseDown_(e: goog.events.Event): void;

        /**
         * Handle the mousing events.  These are redirected to the AutoComplete object
         * which then makes a callback to set the correctly highlighted row.  This is
         * because the AutoComplete can move the focus as well, and there is no sense
         * duplicating the code
         * @param {goog.events.Event} e Browser event object.
         * @private
         */
        private handleMouseOver_(e: goog.events.Event): void;
    }
}

declare namespace goog.ui.ac.Renderer {
    /**
     * Class allowing different implementations to custom render the autocomplete.
     * Extending classes should override the render function.
     */
    class CustomRenderer extends __CustomRenderer {}
    abstract class __CustomRenderer {
        /**
         */
        constructor();

        /**
         * Renders the autocomplete box. May be set to null.
         *
         * Because of the type, this function cannot be documented with param JSDoc.
         *
         * The function expects the following parameters:
         *
         * renderer, goog.ui.ac.Renderer: The autocomplete renderer.
         * element, Element: The main element that controls the rendered autocomplete.
         * rows, Array: The current set of rows being displayed.
         * token, string: The current token that has been entered. *
         *
         * @type {function(goog.ui.ac.Renderer, Element, Array, string)|
         *        null|undefined}
         */
        render(
            renderer: any /* jsdoc error */,
            element: any /* jsdoc error */,
            rows: any /* jsdoc error */,
            token: any /* jsdoc error */
        ): void;

        /**
         * Generic function that takes a row and renders a DOM structure for that row.
         * @param {Object} row Object representing row.
         * @param {string} token Token to highlight.
         * @param {Node} node The node to render into.
         */
        renderRow(row: Object, token: string, node: Node): void;
    }

    /**
     * The delay before mouseover events are registered, in milliseconds
     * @type {number}
     * @const
     */
    const DELAY_BEFORE_MOUSEOVER: number;
}
