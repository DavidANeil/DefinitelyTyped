/// <reference path="../../../../globals.d.ts"/>
/// <reference path="./w3crange.d.ts"/>

declare namespace goog.dom.browserrange {
    /**
     * The constructor for Gecko specific browser ranges.
     * @extends {goog.dom.browserrange.W3cRange}
     * @final
     */
    class GeckoRange extends __GeckoRange {}
    abstract class __GeckoRange extends goog.dom.browserrange.__W3cRange {
        /**
         * @param {Range} range The range object.
         */
        constructor(range: Range);
    }
}

declare namespace goog.dom.browserrange.GeckoRange {
    /**
     * Creates a range object that selects the given node's text.
     * @param {Node} node The node to select.
     * @return {!goog.dom.browserrange.GeckoRange} A Gecko range wrapper object.
     */
    function createFromNodeContents(node: Node): goog.dom.browserrange.GeckoRange;

    /**
     * Creates a range object that selects between the given nodes.
     * @param {Node} startNode The node to start with.
     * @param {number} startOffset The offset within the node to start.
     * @param {Node} endNode The node to end with.
     * @param {number} endOffset The offset within the node to end.
     * @return {!goog.dom.browserrange.GeckoRange} A wrapper object.
     */
    function createFromNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number):
        goog.dom.browserrange.GeckoRange;
}
