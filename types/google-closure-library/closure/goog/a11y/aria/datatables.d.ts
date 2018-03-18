/// <reference path="../../../../globals.d.ts"/>
/// <reference path="./attributes.d.ts"/>

declare namespace goog.a11y.aria {
    /**
     * A map that contains mapping between an ARIA state and the default value
     * for it. Note that not all ARIA states have default values.
     *
     * @type {Object<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     */
    let DefaultStateValueMap_: {[key: string]: string|boolean|number};
}

declare namespace goog.a11y.aria.datatables {
    /**
     * A method that creates a map that contains mapping between an ARIA state and
     * the default value for it. Note that not all ARIA states have default values.
     *
     * @return {!Object<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     *      The names for each of the notification methods.
     */
    function getDefaultValuesMap(): {[key: string]: string|boolean|number};
}
