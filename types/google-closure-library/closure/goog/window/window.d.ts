/// <reference path="../../../globals.d.ts"/>
/// <reference path="../html/safeurl.d.ts"/>

declare module 'goog:goog.window' {
    export = goog.window;
}

declare namespace goog.window {
    /**
     * Default height for popup windows
     * @type {number}
     */
    let DEFAULT_POPUP_HEIGHT: number;

    /**
     * Default width for popup windows
     * @type {number}
     */
    let DEFAULT_POPUP_WIDTH: number;

    /**
     * Default target for popup windows
     * @type {string}
     */
    let DEFAULT_POPUP_TARGET: string;

    /**
     * Opens a new window.
     *
     * @param {goog.html.SafeUrl|string|Object|null} linkRef If an Object with an 'href'
     *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'
     *     is used, otherwise its toString method is called. Note that if a
     *     string|Object is used, it will be sanitized with SafeUrl.sanitize().
     *
     * @param {?Object=} opt_options supports the following options:
     *  'target': (string) target (window name). If null, linkRef.target will
     *          be used.
     *  'width': (number) window width.
     *  'height': (number) window height.
     *  'top': (number) distance from top of screen
     *  'left': (number) distance from left of screen
     *  'toolbar': (boolean) show toolbar
     *  'scrollbars': (boolean) show scrollbars
     *  'location': (boolean) show location
     *  'statusbar': (boolean) show statusbar
     *  'menubar': (boolean) show menubar
     *  'resizable': (boolean) resizable
     *  'noreferrer': (boolean) whether to attempt to remove the referrer header
     *      from the request headers. Does this by opening a blank window that
     *      then redirects to the target url, so users may see some flickering.
     *
     * @param {?Window=} opt_parentWin Parent window that should be used to open the
     *                 new window.
     *
     * @return {?Window} Returns the window object that was opened. This returns
     *                  null if a popup blocker prevented the window from being
     *                  opened. In case when a new window is opened in a different
     *                  browser sandbox (such as iOS standalone mode), the returned
     *                  object is a emulated Window object that functions as if
     *                  a cross-origin window has been opened.
     */
    function open(
        linkRef: goog.html.SafeUrl|string|Object|null, opt_options?: Object|null, opt_parentWin?: Window|null
    ): Window|null;

    /**
     * Opens a new window without any real content in it.
     *
     * This can be used to get around popup blockers if you need to open a window
     * in response to a user event, but need to do asynchronous work to determine
     * the URL to open, and then set the URL later.
     *
     * Example usage:
     *
     * var newWin = goog.window.openBlank('Loading...');
     * setTimeout(
     *     function() {
     *       newWin.location.href = 'http://www.google.com';
     *     }, 100);
     *
     * @param {string=} opt_message String to show in the new window. This string
     *     will be HTML-escaped to avoid XSS issues.
     * @param {?Object=} opt_options Options to open window with.
     *     {@see goog.window.open for exact option semantics}.
     * @param {?Window=} opt_parentWin Parent window that should be used to open the
     *                 new window.
     * @return {?Window} Returns the window object that was opened. This returns
     *                  null if a popup blocker prevented the window from being
     *                  opened.
     */
    function openBlank(opt_message?: string, opt_options?: Object|null, opt_parentWin?: Window|null): Window|null;

    /**
     * Raise a help popup window, defaulting to "Google standard" size and name.
     *
     * (If your project is using GXPs, consider using {@link PopUpLink.gxp}.)
     *
     * @param {?goog.html.SafeUrl|string|?Object} linkRef If an Object with an 'href'
     *     attribute (such as HTMLAnchorElement) is passed then the value of 'href'
     *     is used, otherwise  otherwise its toString method is called. Note that
     *     if a string|Object is used, it will be sanitized with SafeUrl.sanitize().
     *
     * @param {?Object=} opt_options Options to open window with.
     *     {@see goog.window.open for exact option semantics}
     *     Additional wrinkles to the options:
     *     - if 'target' field is null, linkRef.target will be used. If *that's*
     *     null, the default is "google_popup".
     *     - if 'width' field is not specified, the default is 690.
     *     - if 'height' field is not specified, the default is 500.
     *
     * @return {boolean} true if the window was not popped up, false if it was.
     */
    function popup(linkRef: goog.html.SafeUrl|null|string|Object|null, opt_options?: Object|null): boolean;
}
