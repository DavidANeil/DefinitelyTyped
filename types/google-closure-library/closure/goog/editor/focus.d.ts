/// <reference path="../../../globals.d.ts"/>

declare module 'goog:goog.editor.focus' {
    export = goog.editor.focus;
}

declare namespace goog.editor.focus {
    /**
     * Change focus to the given input field and set cursor to end of current text.
     * @param {Element} inputElem Input DOM element.
     */
    function focusInputField(inputElem: Element): void;
}
