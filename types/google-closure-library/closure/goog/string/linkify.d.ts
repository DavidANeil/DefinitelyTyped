/// <reference path="../../../globals.d.ts"/>
/// <reference path="../html/safehtml.d.ts"/>

declare module 'goog:goog.string.linkify' {
    export = goog.string.linkify;
}

declare namespace goog.string.linkify {
    /**
     * Takes a string of plain text and linkifies URLs and email addresses. For a
     * URL (unless opt_attributes is specified), the target of the link will be
     * _blank and it will have a rel=nofollow attribute applied to it so that links
     * created by linkify will not be of interest to search engines.
     * @param {string} text Plain text.
     * @param {!Object<string, ?goog.html.SafeHtml.AttributeValue>=} opt_attributes
     *     Attributes to add to all links created. Default are rel=nofollow and
     *     target=_blank. To clear those default attributes set rel='' and
     *     target=''.
     * @param {boolean=} opt_preserveNewlines Whether to preserve newlines with
     *     &lt;br&gt;.
     * @return {!goog.html.SafeHtml} Linkified HTML. Any text that is not part of a
     *      link will be HTML-escaped.
     */
    function linkifyPlainTextAsHtml(
        text: string,
        opt_attributes?: {[key: string]: goog.html.SafeHtml.AttributeValue|null},
        opt_preserveNewlines?: boolean
    ): goog.html.SafeHtml;

    /**
     * Gets the first URI in text.
     * @param {string} text Plain text.
     * @return {string} The first URL, or an empty string if not found.
     */
    function findFirstUrl(text: string): string;

    /**
     * Gets the first email address in text.
     * @param {string} text Plain text.
     * @return {string} The first email address, or an empty string if not found.
     */
    function findFirstEmail(text: string): string;
}
