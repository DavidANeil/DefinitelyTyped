/// <reference path="../../../../globals.d.ts"/>
/// <reference path="./roles.d.ts"/>
/// <reference path="./attributes.d.ts"/>

declare module 'goog:goog.a11y.aria' {
    export = goog.a11y.aria;
}

declare namespace goog.a11y.aria {
    /**
     * Sets the role of an element. If the roleName is
     * empty string or null, the role for the element is removed.
     * We encourage clients to call the goog.a11y.aria.removeRole
     * method instead of setting null and empty string values.
     * Special handling for this case is added to ensure
     * backword compatibility with existing code.
     *
     * @param {!Element} element DOM node to set role of.
     * @param {!goog.a11y.aria.Role|string} roleName role name(s).
     */
    function setRole(element: Element, roleName: goog.a11y.aria.Role|string): void;

    /**
     * Gets role of an element.
     * @param {!Element} element DOM element to get role of.
     * @return {?goog.a11y.aria.Role} ARIA Role name.
     */
    function getRole(element: Element): goog.a11y.aria.Role|null;

    /**
     * Removes role of an element.
     * @param {!Element} element DOM element to remove the role from.
     */
    function removeRole(element: Element): void;

    /**
     * Sets the state or property of an element.
     * @param {!Element} element DOM node where we set state.
     * @param {!(goog.a11y.aria.State|string)} stateName State attribute being set.
     *     Automatically adds prefix 'aria-' to the state name if the attribute is
     *     not an extra attribute.
     * @param {string|boolean|number|!Array<string>} value Value
     * for the state attribute.
     */
    function setState(element: Element, stateName: goog.a11y.aria.State|string, value: string|boolean|number|string[]):
        void;

    /**
     * Toggles the ARIA attribute of an element.
     * Meant for attributes with a true/false value, but works with any attribute.
     * If the attribute does not have a true/false value, the following rules apply:
     * A not empty attribute will be removed.
     * An empty attribute will be set to true.
     * @param {!Element} el DOM node for which to set attribute.
     * @param {!(goog.a11y.aria.State|string)} attr ARIA attribute being set.
     *     Automatically adds prefix 'aria-' to the attribute name if the attribute
     *     is not an extra attribute.
     */
    function toggleState(el: Element, attr: goog.a11y.aria.State|string): void;

    /**
     * Remove the state or property for the element.
     * @param {!Element} element DOM node where we set state.
     * @param {!goog.a11y.aria.State} stateName State name.
     */
    function removeState(element: Element, stateName: goog.a11y.aria.State): void;

    /**
     * Gets value of specified state or property.
     * @param {!Element} element DOM node to get state from.
     * @param {!goog.a11y.aria.State|string} stateName State name.
     * @return {string} Value of the state attribute.
     */
    function getState(element: Element, stateName: goog.a11y.aria.State|string): string;

    /**
     * Returns the activedescendant element for the input element by
     * using the activedescendant ARIA property of the given element.
     * @param {!Element} element DOM node to get activedescendant
     *     element for.
     * @return {?Element} DOM node of the activedescendant, if found.
     */
    function getActiveDescendant(element: Element): Element|null;

    /**
     * Sets the activedescendant ARIA property value for an element.
     * If the activeElement is not null, it should have an id set.
     * @param {!Element} element DOM node to set activedescendant ARIA property to.
     * @param {?Element} activeElement DOM node being set as activedescendant.
     */
    function setActiveDescendant(element: Element, activeElement: Element|null): void;

    /**
     * Gets the label of the given element.
     * @param {!Element} element DOM node to get label from.
     * @return {string} label The label.
     */
    function getLabel(element: Element): string;

    /**
     * Sets the label of the given element.
     * @param {!Element} element DOM node to set label to.
     * @param {string} label The label to set.
     */
    function setLabel(element: Element, label: string): void;

    /**
     * Asserts that the element has a role set if it's not an HTML element whose
     * semantics is well supported by most screen readers.
     * Only to be used internally by the ARIA library in goog.a11y.aria.*.
     * @param {!Element} element The element to assert an ARIA role set.
     * @param {!IArrayLike<string>} allowedRoles The child roles of
     * the roles.
     */
    function assertRoleIsSetInternalUtil(element: Element, allowedRoles: IArrayLike<string>): void;

    /**
     * Gets the boolean value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?boolean} Boolean value for the ARIA state value or null if
     *     the state value is not 'true', not 'false', or not set.
     */
    function getStateBoolean(element: Element, stateName: goog.a11y.aria.State|string): boolean|null;

    /**
     * Gets the number value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?number} Number value for the ARIA state value or null if
     *     the state value is not a number or not set.
     */
    function getStateNumber(element: Element, stateName: goog.a11y.aria.State|string): number|null;

    /**
     * Gets the string value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?string} String value for the ARIA state value or null if
     *     the state value is empty string or not set.
     */
    function getStateString(element: Element, stateName: goog.a11y.aria.State|string): string|null;

    /**
     * Gets array of strings value of the specified state or
     * property for the element.
     * Only to be used internally by the ARIA library in goog.a11y.aria.*.
     * @param {!Element} element DOM node to get state from.
     * @param {!goog.a11y.aria.State} stateName State name.
     * @return {!IArrayLike<string>} string Array
     *     value of the state attribute.
     */
    function getStringArrayStateInternalUtil(element: Element, stateName: goog.a11y.aria.State): IArrayLike<string>;

    /**
     * Returns true if element has an ARIA state/property, false otherwise.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {boolean}
     */
    function hasState(element: Element, stateName: goog.a11y.aria.State|string): boolean;

    /**
     * Returns whether the element has a container ARIA role.
     * Container roles are ARIA roles that use the aria-activedescendant property
     * to manage their active descendants or children. See
     * {@link http://www.w3.org/TR/wai-aria/states_and_properties
     * #aria-activedescendant} for more information.
     * @param {!Element} element
     * @return {boolean}
     */
    function isContainerRole(element: Element): boolean;
}
