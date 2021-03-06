/// <reference path="../../../globals.d.ts"/>

declare module 'goog:goog.i18n.currency' {
    export = goog.i18n.currency;
}

declare module 'goog:goog.i18n.currency.CurrencyInfoTier2' {
    import alias = goog.i18n.currency.CurrencyInfoTier2;
    export default alias;
}

declare module 'goog:goog.i18n.currency.CurrencyInfo' {
    import alias = goog.i18n.currency.CurrencyInfo;
    export default alias;
}

declare namespace goog.i18n.currency {
    /**
     * Tests if currency is available.
     *
     * Note: If the currency is not available it might be in the tier2 currency set:
     * {@link goog.i18n.currency.CurrencyInfoTier2}. If that is the case call
     * {@link goog.i18n.currency.addTier2Support} before calling any other function
     * in this namespace.
     *
     * @param {string} currencyCode Currency code to tested.
     * @return {boolean} If the currency is available.
     */
    function isAvailable(currencyCode: string): boolean;

    /**
     * This function will add tier2 currency support. Be default, only tier1
     * (most popular currencies) are supported. If an application really needs
     * to support some of the rarely used currencies, it should call this function
     * before any other functions in this namespace.
     */
    function addTier2Support(): void;

    /**
     * Deprecated.
     * Global currency pattern always uses ISO-4217 currency code as prefix. Local
     * currency sign is added if it is different from currency code. Each currency
     * is unique in this form. The negative side is that ISO code looks weird in
     * some countries as people normally do not use it. Local currency sign
     * alleviates the problem, but also makes it a little verbose.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Global currency pattern string for given currency.
     * @deprecated Format numbers using {@link goog.i18n.NumberFormat} with
     *   {@link goog.i18n.NumberFormat.Format.CURRENCY} and
     *   {@link goog.i18n.NumberFormat.CurrencyStyle.GLOBAL}
     */
    function getGlobalCurrencyPattern(currencyCode: string): string;

    /**
     * Return global currency sign string for those applications
     * that want to handle currency sign themselves.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Global currency sign for given currency.
     */
    function getGlobalCurrencySign(currencyCode: string): string;

    /**
     * Deprecated.
     * Local currency pattern is the most frequently used pattern in currency's
     * native region. It does not care about how it is distinguished from other
     * currencies.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Local currency pattern string for given currency.
     * @deprecated Format numbers using {@link goog.i18n.NumberFormat} with
     *   {@link goog.i18n.NumberFormat.Format.CURRENCY} and
     *   {@link goog.i18n.NumberFormat.CurrencyStyle.LOCAL}
     */
    function getLocalCurrencyPattern(currencyCode: string): string;

    /**
     * Returns local currency sign string for those applications that need to
     * handle currency sign separately.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Local currency sign for given currency.
     */
    function getLocalCurrencySign(currencyCode: string): string;

    /**
     * Deprecated.
     * Portable currency pattern is a compromise between local and global. It is
     * not a mere blend or mid-way between the two. Currency sign is chosen so that
     * it looks familiar to native users. It also has enough information to
     * distinguish itself from other popular currencies in its native region.
     * In this pattern, currency sign symbols that has availability problem in
     * popular fonts are also avoided.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Portable currency pattern string for given currency.
     * @deprecated Format numbers using {@link goog.i18n.NumberFormat} with
     *   {@link goog.i18n.NumberFormat.Format.CURRENCY} and
     *   {@link goog.i18n.NumberFormat.CurrencyStyle.PORTABLE}
     */
    function getPortableCurrencyPattern(currencyCode: string): string;

    /**
     * Return portable currency sign string for those applications that need to
     * handle currency sign themselves.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Portable currency sign for given currency.
     */
    function getPortableCurrencySign(currencyCode: string): string;

    /**
     * This function returns the default currency sign's position. Some applications
     * may want to handle currency sign and currency amount separately. This
     * function can be used in such situations to correctly position the currency
     * sign relative to the amount.
     *
     * Use {@link goog.i18n.NumberFormat#isCurrencyCodeBeforeValue} for a locale
     * aware version of this API (recommended). isPrefixSignPosition() returns the
     * default currency sign's position in the currency's default locale (e.g. 'en'
     * for 'USD'), but most commonly the position is needed for the locale in which
     * the number is going to be displayed. For example, in 'fr' 10.10 USD would be
     * displayed as '10,10 $'.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {boolean} true if currency should be positioned before amount field.
     */
    function isPrefixSignPosition(currencyCode: string): boolean;

    /**
     * Modify currency pattern string by adjusting precision for given currency.
     * Standard currency pattern will have 2 digit after decimal point.
     * Examples:
     *   $#,##0.00 ->  $#,##0    (precision == 0)
     *   $#,##0.00 ->  $#,##0.0  (precision == 1)
     *   $#,##0.00 ->  $#,##0.000  (precision == 3)
     *
     * @param {string} pattern currency pattern string.
     * @param {string} currencyCode 3-letter currency code.
     * @return {string} modified currency pattern string.
     */
    function adjustPrecision(pattern: string, currencyCode: string): string;

    /**
     * Tier 1 currency information.
     *
     * The first number in the array is a combination of the precision mask and
     * other flags. The precision mask indicates how many decimal places to show for
     * the currency. Valid values are [0..7]. The position flag indicates whether
     * the currency sign should be positioned after the number. Valid values are 0
     * (before the number) or 16 (after the number). The space flag indicates
     * whether a space should be inserted between the currency sign and number.
     * Valid values are 0 (no space) and 32 (space).
     *
     * The number in the array is calculated by adding together the mask and flag
     * values. For example:
     *
     * 0: no precision (0), currency sign first (0), no space (0)
     * 2: two decimals precision (2), currency sign first (0), no space (0)
     * 18: two decimals precision (2), currency sign last (16), no space (0)
     * 50: two decimals precision (2), currency sign last (16), space (32)
     *
     * It's not recommended to read this data directly. Format numbers using
     * {@link goog.i18n.NumberFormat} with
     * {@link goog.i18n.NumberFormat.Format.CURRENCY} instead.
     *
     * @const {!Object<!Array<?>>}
     */
    const CurrencyInfo: any /*missing*/;

    /**
     * Tier 2 currency information.
     *
     * It's not recommended to read this data directly. Format numbers using
     * {@link goog.i18n.NumberFormat} with
     * {@link goog.i18n.NumberFormat.Format.CURRENCY} instead.
     *
     * @const {!Object<!Array<?>>}
     */
    const CurrencyInfoTier2: any /*missing*/;
}
