/// <reference path="../../../globals.d.ts"/>
/// <reference path="./message.d.ts"/>

declare module 'goog:proto2.TestDefaultParent' {
    import alias = proto2.TestDefaultParent;
    export default alias;
}

declare module 'goog:proto2.TestDefaultChild' {
    import alias = proto2.TestDefaultChild;
    export default alias;
}

declare module 'goog:proto2.TestAllTypes' {
    import alias = proto2.TestAllTypes;
    export default alias;
}

declare module 'goog:proto2.TestAllTypes.RepeatedGroup' {
    import alias = proto2.TestAllTypes.RepeatedGroup;
    export default alias;
}

declare module 'goog:proto2.TestAllTypes.OptionalGroup' {
    import alias = proto2.TestAllTypes.OptionalGroup;
    export default alias;
}

declare module 'goog:proto2.TestAllTypes.NestedMessage' {
    import alias = proto2.TestAllTypes.NestedMessage;
    export default alias;
}

declare module 'goog:proto2.TestAllTypes.NestedEnum' {
    import alias = proto2.TestAllTypes.NestedEnum;
    export default alias;
}

declare namespace goog {
    /*
     */
}

declare namespace proto2 {
    /**
     * Message TestAllTypes.
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestAllTypes extends __TestAllTypes {}
    abstract class __TestAllTypes extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the optional_int32 field.
         * @return {?number} The value.
         */
        getOptionalInt32(): number|null;

        /**
         * Gets the value of the optional_int32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt32OrDefault(): number;

        /**
         * Sets the value of the optional_int32 field.
         * @param {number} value The value.
         */
        setOptionalInt32(value: number): void;

        /**
         * @return {boolean} Whether the optional_int32 field has a value.
         */
        hasOptionalInt32(): boolean;

        /**
         * @return {number} The number of values in the optional_int32 field.
         */
        optionalInt32Count(): number;

        /**
         * Clears the values in the optional_int32 field.
         */
        clearOptionalInt32(): void;

        /**
         * Gets the value of the optional_int64 field.
         * @return {?string} The value.
         */
        getOptionalInt64(): string|null;

        /**
         * Gets the value of the optional_int64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalInt64OrDefault(): string;

        /**
         * Sets the value of the optional_int64 field.
         * @param {string} value The value.
         */
        setOptionalInt64(value: string): void;

        /**
         * @return {boolean} Whether the optional_int64 field has a value.
         */
        hasOptionalInt64(): boolean;

        /**
         * @return {number} The number of values in the optional_int64 field.
         */
        optionalInt64Count(): number;

        /**
         * Clears the values in the optional_int64 field.
         */
        clearOptionalInt64(): void;

        /**
         * Gets the value of the optional_uint32 field.
         * @return {?number} The value.
         */
        getOptionalUint32(): number|null;

        /**
         * Gets the value of the optional_uint32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalUint32OrDefault(): number;

        /**
         * Sets the value of the optional_uint32 field.
         * @param {number} value The value.
         */
        setOptionalUint32(value: number): void;

        /**
         * @return {boolean} Whether the optional_uint32 field has a value.
         */
        hasOptionalUint32(): boolean;

        /**
         * @return {number} The number of values in the optional_uint32 field.
         */
        optionalUint32Count(): number;

        /**
         * Clears the values in the optional_uint32 field.
         */
        clearOptionalUint32(): void;

        /**
         * Gets the value of the optional_uint64 field.
         * @return {?string} The value.
         */
        getOptionalUint64(): string|null;

        /**
         * Gets the value of the optional_uint64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalUint64OrDefault(): string;

        /**
         * Sets the value of the optional_uint64 field.
         * @param {string} value The value.
         */
        setOptionalUint64(value: string): void;

        /**
         * @return {boolean} Whether the optional_uint64 field has a value.
         */
        hasOptionalUint64(): boolean;

        /**
         * @return {number} The number of values in the optional_uint64 field.
         */
        optionalUint64Count(): number;

        /**
         * Clears the values in the optional_uint64 field.
         */
        clearOptionalUint64(): void;

        /**
         * Gets the value of the optional_sint32 field.
         * @return {?number} The value.
         */
        getOptionalSint32(): number|null;

        /**
         * Gets the value of the optional_sint32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalSint32OrDefault(): number;

        /**
         * Sets the value of the optional_sint32 field.
         * @param {number} value The value.
         */
        setOptionalSint32(value: number): void;

        /**
         * @return {boolean} Whether the optional_sint32 field has a value.
         */
        hasOptionalSint32(): boolean;

        /**
         * @return {number} The number of values in the optional_sint32 field.
         */
        optionalSint32Count(): number;

        /**
         * Clears the values in the optional_sint32 field.
         */
        clearOptionalSint32(): void;

        /**
         * Gets the value of the optional_sint64 field.
         * @return {?string} The value.
         */
        getOptionalSint64(): string|null;

        /**
         * Gets the value of the optional_sint64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalSint64OrDefault(): string;

        /**
         * Sets the value of the optional_sint64 field.
         * @param {string} value The value.
         */
        setOptionalSint64(value: string): void;

        /**
         * @return {boolean} Whether the optional_sint64 field has a value.
         */
        hasOptionalSint64(): boolean;

        /**
         * @return {number} The number of values in the optional_sint64 field.
         */
        optionalSint64Count(): number;

        /**
         * Clears the values in the optional_sint64 field.
         */
        clearOptionalSint64(): void;

        /**
         * Gets the value of the optional_fixed32 field.
         * @return {?number} The value.
         */
        getOptionalFixed32(): number|null;

        /**
         * Gets the value of the optional_fixed32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalFixed32OrDefault(): number;

        /**
         * Sets the value of the optional_fixed32 field.
         * @param {number} value The value.
         */
        setOptionalFixed32(value: number): void;

        /**
         * @return {boolean} Whether the optional_fixed32 field has a value.
         */
        hasOptionalFixed32(): boolean;

        /**
         * @return {number} The number of values in the optional_fixed32 field.
         */
        optionalFixed32Count(): number;

        /**
         * Clears the values in the optional_fixed32 field.
         */
        clearOptionalFixed32(): void;

        /**
         * Gets the value of the optional_fixed64 field.
         * @return {?string} The value.
         */
        getOptionalFixed64(): string|null;

        /**
         * Gets the value of the optional_fixed64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalFixed64OrDefault(): string;

        /**
         * Sets the value of the optional_fixed64 field.
         * @param {string} value The value.
         */
        setOptionalFixed64(value: string): void;

        /**
         * @return {boolean} Whether the optional_fixed64 field has a value.
         */
        hasOptionalFixed64(): boolean;

        /**
         * @return {number} The number of values in the optional_fixed64 field.
         */
        optionalFixed64Count(): number;

        /**
         * Clears the values in the optional_fixed64 field.
         */
        clearOptionalFixed64(): void;

        /**
         * Gets the value of the optional_sfixed32 field.
         * @return {?number} The value.
         */
        getOptionalSfixed32(): number|null;

        /**
         * Gets the value of the optional_sfixed32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalSfixed32OrDefault(): number;

        /**
         * Sets the value of the optional_sfixed32 field.
         * @param {number} value The value.
         */
        setOptionalSfixed32(value: number): void;

        /**
         * @return {boolean} Whether the optional_sfixed32 field has a value.
         */
        hasOptionalSfixed32(): boolean;

        /**
         * @return {number} The number of values in the optional_sfixed32 field.
         */
        optionalSfixed32Count(): number;

        /**
         * Clears the values in the optional_sfixed32 field.
         */
        clearOptionalSfixed32(): void;

        /**
         * Gets the value of the optional_sfixed64 field.
         * @return {?string} The value.
         */
        getOptionalSfixed64(): string|null;

        /**
         * Gets the value of the optional_sfixed64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalSfixed64OrDefault(): string;

        /**
         * Sets the value of the optional_sfixed64 field.
         * @param {string} value The value.
         */
        setOptionalSfixed64(value: string): void;

        /**
         * @return {boolean} Whether the optional_sfixed64 field has a value.
         */
        hasOptionalSfixed64(): boolean;

        /**
         * @return {number} The number of values in the optional_sfixed64 field.
         */
        optionalSfixed64Count(): number;

        /**
         * Clears the values in the optional_sfixed64 field.
         */
        clearOptionalSfixed64(): void;

        /**
         * Gets the value of the optional_float field.
         * @return {?number} The value.
         */
        getOptionalFloat(): number|null;

        /**
         * Gets the value of the optional_float field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalFloatOrDefault(): number;

        /**
         * Sets the value of the optional_float field.
         * @param {number} value The value.
         */
        setOptionalFloat(value: number): void;

        /**
         * @return {boolean} Whether the optional_float field has a value.
         */
        hasOptionalFloat(): boolean;

        /**
         * @return {number} The number of values in the optional_float field.
         */
        optionalFloatCount(): number;

        /**
         * Clears the values in the optional_float field.
         */
        clearOptionalFloat(): void;

        /**
         * Gets the value of the optional_double field.
         * @return {?number} The value.
         */
        getOptionalDouble(): number|null;

        /**
         * Gets the value of the optional_double field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalDoubleOrDefault(): number;

        /**
         * Sets the value of the optional_double field.
         * @param {number} value The value.
         */
        setOptionalDouble(value: number): void;

        /**
         * @return {boolean} Whether the optional_double field has a value.
         */
        hasOptionalDouble(): boolean;

        /**
         * @return {number} The number of values in the optional_double field.
         */
        optionalDoubleCount(): number;

        /**
         * Clears the values in the optional_double field.
         */
        clearOptionalDouble(): void;

        /**
         * Gets the value of the optional_bool field.
         * @return {?boolean} The value.
         */
        getOptionalBool(): boolean|null;

        /**
         * Gets the value of the optional_bool field or the default value if not set.
         * @return {boolean} The value.
         */
        getOptionalBoolOrDefault(): boolean;

        /**
         * Sets the value of the optional_bool field.
         * @param {boolean} value The value.
         */
        setOptionalBool(value: boolean): void;

        /**
         * @return {boolean} Whether the optional_bool field has a value.
         */
        hasOptionalBool(): boolean;

        /**
         * @return {number} The number of values in the optional_bool field.
         */
        optionalBoolCount(): number;

        /**
         * Clears the values in the optional_bool field.
         */
        clearOptionalBool(): void;

        /**
         * Gets the value of the optional_string field.
         * @return {?string} The value.
         */
        getOptionalString(): string|null;

        /**
         * Gets the value of the optional_string field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalStringOrDefault(): string;

        /**
         * Sets the value of the optional_string field.
         * @param {string} value The value.
         */
        setOptionalString(value: string): void;

        /**
         * @return {boolean} Whether the optional_string field has a value.
         */
        hasOptionalString(): boolean;

        /**
         * @return {number} The number of values in the optional_string field.
         */
        optionalStringCount(): number;

        /**
         * Clears the values in the optional_string field.
         */
        clearOptionalString(): void;

        /**
         * Gets the value of the optional_bytes field.
         * @return {?string} The value.
         */
        getOptionalBytes(): string|null;

        /**
         * Gets the value of the optional_bytes field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalBytesOrDefault(): string;

        /**
         * Sets the value of the optional_bytes field.
         * @param {string} value The value.
         */
        setOptionalBytes(value: string): void;

        /**
         * @return {boolean} Whether the optional_bytes field has a value.
         */
        hasOptionalBytes(): boolean;

        /**
         * @return {number} The number of values in the optional_bytes field.
         */
        optionalBytesCount(): number;

        /**
         * Clears the values in the optional_bytes field.
         */
        clearOptionalBytes(): void;

        /**
         * Gets the value of the optionalgroup field.
         * @return {?proto2.TestAllTypes.OptionalGroup} The value.
         */
        getOptionalgroup(): proto2.TestAllTypes.OptionalGroup|null;

        /**
         * Gets the value of the optionalgroup field or the default value if not set.
         * @return {!proto2.TestAllTypes.OptionalGroup} The value.
         */
        getOptionalgroupOrDefault(): proto2.TestAllTypes.OptionalGroup;

        /**
         * Sets the value of the optionalgroup field.
         * @param {!proto2.TestAllTypes.OptionalGroup} value The value.
         */
        setOptionalgroup(value: proto2.TestAllTypes.OptionalGroup): void;

        /**
         * @return {boolean} Whether the optionalgroup field has a value.
         */
        hasOptionalgroup(): boolean;

        /**
         * @return {number} The number of values in the optionalgroup field.
         */
        optionalgroupCount(): number;

        /**
         * Clears the values in the optionalgroup field.
         */
        clearOptionalgroup(): void;

        /**
         * Gets the value of the optional_nested_message field.
         * @return {?proto2.TestAllTypes.NestedMessage} The value.
         */
        getOptionalNestedMessage(): proto2.TestAllTypes.NestedMessage|null;

        /**
         * Gets the value of the optional_nested_message field or the default value if not set.
         * @return {!proto2.TestAllTypes.NestedMessage} The value.
         */
        getOptionalNestedMessageOrDefault(): proto2.TestAllTypes.NestedMessage;

        /**
         * Sets the value of the optional_nested_message field.
         * @param {!proto2.TestAllTypes.NestedMessage} value The value.
         */
        setOptionalNestedMessage(value: proto2.TestAllTypes.NestedMessage): void;

        /**
         * @return {boolean} Whether the optional_nested_message field has a value.
         */
        hasOptionalNestedMessage(): boolean;

        /**
         * @return {number} The number of values in the optional_nested_message field.
         */
        optionalNestedMessageCount(): number;

        /**
         * Clears the values in the optional_nested_message field.
         */
        clearOptionalNestedMessage(): void;

        /**
         * Gets the value of the optional_nested_enum field.
         * @return {?proto2.TestAllTypes.NestedEnum} The value.
         */
        getOptionalNestedEnum(): proto2.TestAllTypes.NestedEnum|null;

        /**
         * Gets the value of the optional_nested_enum field or the default value if not set.
         * @return {!proto2.TestAllTypes.NestedEnum} The value.
         */
        getOptionalNestedEnumOrDefault(): proto2.TestAllTypes.NestedEnum;

        /**
         * Sets the value of the optional_nested_enum field.
         * @param {!proto2.TestAllTypes.NestedEnum} value The value.
         */
        setOptionalNestedEnum(value: proto2.TestAllTypes.NestedEnum): void;

        /**
         * @return {boolean} Whether the optional_nested_enum field has a value.
         */
        hasOptionalNestedEnum(): boolean;

        /**
         * @return {number} The number of values in the optional_nested_enum field.
         */
        optionalNestedEnumCount(): number;

        /**
         * Clears the values in the optional_nested_enum field.
         */
        clearOptionalNestedEnum(): void;

        /**
         * Gets the value of the optional_int64_number field.
         * @return {?number} The value.
         */
        getOptionalInt64Number(): number|null;

        /**
         * Gets the value of the optional_int64_number field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt64NumberOrDefault(): number;

        /**
         * Sets the value of the optional_int64_number field.
         * @param {number} value The value.
         */
        setOptionalInt64Number(value: number): void;

        /**
         * @return {boolean} Whether the optional_int64_number field has a value.
         */
        hasOptionalInt64Number(): boolean;

        /**
         * @return {number} The number of values in the optional_int64_number field.
         */
        optionalInt64NumberCount(): number;

        /**
         * Clears the values in the optional_int64_number field.
         */
        clearOptionalInt64Number(): void;

        /**
         * Gets the value of the optional_int64_string field.
         * @return {?string} The value.
         */
        getOptionalInt64String(): string|null;

        /**
         * Gets the value of the optional_int64_string field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalInt64StringOrDefault(): string;

        /**
         * Sets the value of the optional_int64_string field.
         * @param {string} value The value.
         */
        setOptionalInt64String(value: string): void;

        /**
         * @return {boolean} Whether the optional_int64_string field has a value.
         */
        hasOptionalInt64String(): boolean;

        /**
         * @return {number} The number of values in the optional_int64_string field.
         */
        optionalInt64StringCount(): number;

        /**
         * Clears the values in the optional_int64_string field.
         */
        clearOptionalInt64String(): void;

        /**
         * Gets the value of the repeated_int32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedInt32(index: number): number|null;

        /**
         * Gets the value of the repeated_int32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedInt32OrDefault(index: number): number;

        /**
         * Adds a value to the repeated_int32 field.
         * @param {number} value The value to add.
         */
        addRepeatedInt32(value: number): void;

        /**
         * Returns the array of values in the repeated_int32 field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedInt32Array(): number[];

        /**
         * @return {boolean} Whether the repeated_int32 field has a value.
         */
        hasRepeatedInt32(): boolean;

        /**
         * @return {number} The number of values in the repeated_int32 field.
         */
        repeatedInt32Count(): number;

        /**
         * Clears the values in the repeated_int32 field.
         */
        clearRepeatedInt32(): void;

        /**
         * Gets the value of the repeated_int64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedInt64(index: number): string|null;

        /**
         * Gets the value of the repeated_int64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedInt64OrDefault(index: number): string;

        /**
         * Adds a value to the repeated_int64 field.
         * @param {string} value The value to add.
         */
        addRepeatedInt64(value: string): void;

        /**
         * Returns the array of values in the repeated_int64 field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedInt64Array(): string[];

        /**
         * @return {boolean} Whether the repeated_int64 field has a value.
         */
        hasRepeatedInt64(): boolean;

        /**
         * @return {number} The number of values in the repeated_int64 field.
         */
        repeatedInt64Count(): number;

        /**
         * Clears the values in the repeated_int64 field.
         */
        clearRepeatedInt64(): void;

        /**
         * Gets the value of the repeated_uint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedUint32(index: number): number|null;

        /**
         * Gets the value of the repeated_uint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedUint32OrDefault(index: number): number;

        /**
         * Adds a value to the repeated_uint32 field.
         * @param {number} value The value to add.
         */
        addRepeatedUint32(value: number): void;

        /**
         * Returns the array of values in the repeated_uint32 field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedUint32Array(): number[];

        /**
         * @return {boolean} Whether the repeated_uint32 field has a value.
         */
        hasRepeatedUint32(): boolean;

        /**
         * @return {number} The number of values in the repeated_uint32 field.
         */
        repeatedUint32Count(): number;

        /**
         * Clears the values in the repeated_uint32 field.
         */
        clearRepeatedUint32(): void;

        /**
         * Gets the value of the repeated_uint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedUint64(index: number): string|null;

        /**
         * Gets the value of the repeated_uint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedUint64OrDefault(index: number): string;

        /**
         * Adds a value to the repeated_uint64 field.
         * @param {string} value The value to add.
         */
        addRepeatedUint64(value: string): void;

        /**
         * Returns the array of values in the repeated_uint64 field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedUint64Array(): string[];

        /**
         * @return {boolean} Whether the repeated_uint64 field has a value.
         */
        hasRepeatedUint64(): boolean;

        /**
         * @return {number} The number of values in the repeated_uint64 field.
         */
        repeatedUint64Count(): number;

        /**
         * Clears the values in the repeated_uint64 field.
         */
        clearRepeatedUint64(): void;

        /**
         * Gets the value of the repeated_sint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedSint32(index: number): number|null;

        /**
         * Gets the value of the repeated_sint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedSint32OrDefault(index: number): number;

        /**
         * Adds a value to the repeated_sint32 field.
         * @param {number} value The value to add.
         */
        addRepeatedSint32(value: number): void;

        /**
         * Returns the array of values in the repeated_sint32 field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedSint32Array(): number[];

        /**
         * @return {boolean} Whether the repeated_sint32 field has a value.
         */
        hasRepeatedSint32(): boolean;

        /**
         * @return {number} The number of values in the repeated_sint32 field.
         */
        repeatedSint32Count(): number;

        /**
         * Clears the values in the repeated_sint32 field.
         */
        clearRepeatedSint32(): void;

        /**
         * Gets the value of the repeated_sint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedSint64(index: number): string|null;

        /**
         * Gets the value of the repeated_sint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedSint64OrDefault(index: number): string;

        /**
         * Adds a value to the repeated_sint64 field.
         * @param {string} value The value to add.
         */
        addRepeatedSint64(value: string): void;

        /**
         * Returns the array of values in the repeated_sint64 field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedSint64Array(): string[];

        /**
         * @return {boolean} Whether the repeated_sint64 field has a value.
         */
        hasRepeatedSint64(): boolean;

        /**
         * @return {number} The number of values in the repeated_sint64 field.
         */
        repeatedSint64Count(): number;

        /**
         * Clears the values in the repeated_sint64 field.
         */
        clearRepeatedSint64(): void;

        /**
         * Gets the value of the repeated_fixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedFixed32(index: number): number|null;

        /**
         * Gets the value of the repeated_fixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedFixed32OrDefault(index: number): number;

        /**
         * Adds a value to the repeated_fixed32 field.
         * @param {number} value The value to add.
         */
        addRepeatedFixed32(value: number): void;

        /**
         * Returns the array of values in the repeated_fixed32 field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedFixed32Array(): number[];

        /**
         * @return {boolean} Whether the repeated_fixed32 field has a value.
         */
        hasRepeatedFixed32(): boolean;

        /**
         * @return {number} The number of values in the repeated_fixed32 field.
         */
        repeatedFixed32Count(): number;

        /**
         * Clears the values in the repeated_fixed32 field.
         */
        clearRepeatedFixed32(): void;

        /**
         * Gets the value of the repeated_fixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedFixed64(index: number): string|null;

        /**
         * Gets the value of the repeated_fixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedFixed64OrDefault(index: number): string;

        /**
         * Adds a value to the repeated_fixed64 field.
         * @param {string} value The value to add.
         */
        addRepeatedFixed64(value: string): void;

        /**
         * Returns the array of values in the repeated_fixed64 field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedFixed64Array(): string[];

        /**
         * @return {boolean} Whether the repeated_fixed64 field has a value.
         */
        hasRepeatedFixed64(): boolean;

        /**
         * @return {number} The number of values in the repeated_fixed64 field.
         */
        repeatedFixed64Count(): number;

        /**
         * Clears the values in the repeated_fixed64 field.
         */
        clearRepeatedFixed64(): void;

        /**
         * Gets the value of the repeated_sfixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedSfixed32(index: number): number|null;

        /**
         * Gets the value of the repeated_sfixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedSfixed32OrDefault(index: number): number;

        /**
         * Adds a value to the repeated_sfixed32 field.
         * @param {number} value The value to add.
         */
        addRepeatedSfixed32(value: number): void;

        /**
         * Returns the array of values in the repeated_sfixed32 field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedSfixed32Array(): number[];

        /**
         * @return {boolean} Whether the repeated_sfixed32 field has a value.
         */
        hasRepeatedSfixed32(): boolean;

        /**
         * @return {number} The number of values in the repeated_sfixed32 field.
         */
        repeatedSfixed32Count(): number;

        /**
         * Clears the values in the repeated_sfixed32 field.
         */
        clearRepeatedSfixed32(): void;

        /**
         * Gets the value of the repeated_sfixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedSfixed64(index: number): string|null;

        /**
         * Gets the value of the repeated_sfixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedSfixed64OrDefault(index: number): string;

        /**
         * Adds a value to the repeated_sfixed64 field.
         * @param {string} value The value to add.
         */
        addRepeatedSfixed64(value: string): void;

        /**
         * Returns the array of values in the repeated_sfixed64 field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedSfixed64Array(): string[];

        /**
         * @return {boolean} Whether the repeated_sfixed64 field has a value.
         */
        hasRepeatedSfixed64(): boolean;

        /**
         * @return {number} The number of values in the repeated_sfixed64 field.
         */
        repeatedSfixed64Count(): number;

        /**
         * Clears the values in the repeated_sfixed64 field.
         */
        clearRepeatedSfixed64(): void;

        /**
         * Gets the value of the repeated_float field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedFloat(index: number): number|null;

        /**
         * Gets the value of the repeated_float field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedFloatOrDefault(index: number): number;

        /**
         * Adds a value to the repeated_float field.
         * @param {number} value The value to add.
         */
        addRepeatedFloat(value: number): void;

        /**
         * Returns the array of values in the repeated_float field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedFloatArray(): number[];

        /**
         * @return {boolean} Whether the repeated_float field has a value.
         */
        hasRepeatedFloat(): boolean;

        /**
         * @return {number} The number of values in the repeated_float field.
         */
        repeatedFloatCount(): number;

        /**
         * Clears the values in the repeated_float field.
         */
        clearRepeatedFloat(): void;

        /**
         * Gets the value of the repeated_double field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedDouble(index: number): number|null;

        /**
         * Gets the value of the repeated_double field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedDoubleOrDefault(index: number): number;

        /**
         * Adds a value to the repeated_double field.
         * @param {number} value The value to add.
         */
        addRepeatedDouble(value: number): void;

        /**
         * Returns the array of values in the repeated_double field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedDoubleArray(): number[];

        /**
         * @return {boolean} Whether the repeated_double field has a value.
         */
        hasRepeatedDouble(): boolean;

        /**
         * @return {number} The number of values in the repeated_double field.
         */
        repeatedDoubleCount(): number;

        /**
         * Clears the values in the repeated_double field.
         */
        clearRepeatedDouble(): void;

        /**
         * Gets the value of the repeated_bool field at the index given.
         * @param {number} index The index to lookup.
         * @return {?boolean} The value.
         */
        getRepeatedBool(index: number): boolean|null;

        /**
         * Gets the value of the repeated_bool field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {boolean} The value.
         */
        getRepeatedBoolOrDefault(index: number): boolean;

        /**
         * Adds a value to the repeated_bool field.
         * @param {boolean} value The value to add.
         */
        addRepeatedBool(value: boolean): void;

        /**
         * Returns the array of values in the repeated_bool field.
         * @return {!Array<boolean>} The values in the field.
         */
        repeatedBoolArray(): boolean[];

        /**
         * @return {boolean} Whether the repeated_bool field has a value.
         */
        hasRepeatedBool(): boolean;

        /**
         * @return {number} The number of values in the repeated_bool field.
         */
        repeatedBoolCount(): number;

        /**
         * Clears the values in the repeated_bool field.
         */
        clearRepeatedBool(): void;

        /**
         * Gets the value of the repeated_string field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedString(index: number): string|null;

        /**
         * Gets the value of the repeated_string field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedStringOrDefault(index: number): string;

        /**
         * Adds a value to the repeated_string field.
         * @param {string} value The value to add.
         */
        addRepeatedString(value: string): void;

        /**
         * Returns the array of values in the repeated_string field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedStringArray(): string[];

        /**
         * @return {boolean} Whether the repeated_string field has a value.
         */
        hasRepeatedString(): boolean;

        /**
         * @return {number} The number of values in the repeated_string field.
         */
        repeatedStringCount(): number;

        /**
         * Clears the values in the repeated_string field.
         */
        clearRepeatedString(): void;

        /**
         * Gets the value of the repeated_bytes field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedBytes(index: number): string|null;

        /**
         * Gets the value of the repeated_bytes field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedBytesOrDefault(index: number): string;

        /**
         * Adds a value to the repeated_bytes field.
         * @param {string} value The value to add.
         */
        addRepeatedBytes(value: string): void;

        /**
         * Returns the array of values in the repeated_bytes field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedBytesArray(): string[];

        /**
         * @return {boolean} Whether the repeated_bytes field has a value.
         */
        hasRepeatedBytes(): boolean;

        /**
         * @return {number} The number of values in the repeated_bytes field.
         */
        repeatedBytesCount(): number;

        /**
         * Clears the values in the repeated_bytes field.
         */
        clearRepeatedBytes(): void;

        /**
         * Gets the value of the repeatedgroup field at the index given.
         * @param {number} index The index to lookup.
         * @return {?proto2.TestAllTypes.RepeatedGroup} The value.
         */
        getRepeatedgroup(index: number): proto2.TestAllTypes.RepeatedGroup|null;

        /**
         * Gets the value of the repeatedgroup field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {!proto2.TestAllTypes.RepeatedGroup} The value.
         */
        getRepeatedgroupOrDefault(index: number): proto2.TestAllTypes.RepeatedGroup;

        /**
         * Adds a value to the repeatedgroup field.
         * @param {!proto2.TestAllTypes.RepeatedGroup} value The value to add.
         */
        addRepeatedgroup(value: proto2.TestAllTypes.RepeatedGroup): void;

        /**
         * Returns the array of values in the repeatedgroup field.
         * @return {!Array<!proto2.TestAllTypes.RepeatedGroup>} The values in the field.
         */
        repeatedgroupArray(): proto2.TestAllTypes.RepeatedGroup[];

        /**
         * @return {boolean} Whether the repeatedgroup field has a value.
         */
        hasRepeatedgroup(): boolean;

        /**
         * @return {number} The number of values in the repeatedgroup field.
         */
        repeatedgroupCount(): number;

        /**
         * Clears the values in the repeatedgroup field.
         */
        clearRepeatedgroup(): void;

        /**
         * Gets the value of the repeated_nested_message field at the index given.
         * @param {number} index The index to lookup.
         * @return {?proto2.TestAllTypes.NestedMessage} The value.
         */
        getRepeatedNestedMessage(index: number): proto2.TestAllTypes.NestedMessage|null;

        /**
         * Gets the value of the repeated_nested_message field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {!proto2.TestAllTypes.NestedMessage} The value.
         */
        getRepeatedNestedMessageOrDefault(index: number): proto2.TestAllTypes.NestedMessage;

        /**
         * Adds a value to the repeated_nested_message field.
         * @param {!proto2.TestAllTypes.NestedMessage} value The value to add.
         */
        addRepeatedNestedMessage(value: proto2.TestAllTypes.NestedMessage): void;

        /**
         * Returns the array of values in the repeated_nested_message field.
         * @return {!Array<!proto2.TestAllTypes.NestedMessage>} The values in the field.
         */
        repeatedNestedMessageArray(): proto2.TestAllTypes.NestedMessage[];

        /**
         * @return {boolean} Whether the repeated_nested_message field has a value.
         */
        hasRepeatedNestedMessage(): boolean;

        /**
         * @return {number} The number of values in the repeated_nested_message field.
         */
        repeatedNestedMessageCount(): number;

        /**
         * Clears the values in the repeated_nested_message field.
         */
        clearRepeatedNestedMessage(): void;

        /**
         * Gets the value of the repeated_nested_enum field at the index given.
         * @param {number} index The index to lookup.
         * @return {?proto2.TestAllTypes.NestedEnum} The value.
         */
        getRepeatedNestedEnum(index: number): proto2.TestAllTypes.NestedEnum|null;

        /**
         * Gets the value of the repeated_nested_enum field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {!proto2.TestAllTypes.NestedEnum} The value.
         */
        getRepeatedNestedEnumOrDefault(index: number): proto2.TestAllTypes.NestedEnum;

        /**
         * Adds a value to the repeated_nested_enum field.
         * @param {!proto2.TestAllTypes.NestedEnum} value The value to add.
         */
        addRepeatedNestedEnum(value: proto2.TestAllTypes.NestedEnum): void;

        /**
         * Returns the array of values in the repeated_nested_enum field.
         * @return {!Array<!proto2.TestAllTypes.NestedEnum>} The values in the field.
         */
        repeatedNestedEnumArray(): proto2.TestAllTypes.NestedEnum[];

        /**
         * @return {boolean} Whether the repeated_nested_enum field has a value.
         */
        hasRepeatedNestedEnum(): boolean;

        /**
         * @return {number} The number of values in the repeated_nested_enum field.
         */
        repeatedNestedEnumCount(): number;

        /**
         * Clears the values in the repeated_nested_enum field.
         */
        clearRepeatedNestedEnum(): void;

        /**
         * Gets the value of the repeated_int64_number field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedInt64Number(index: number): number|null;

        /**
         * Gets the value of the repeated_int64_number field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedInt64NumberOrDefault(index: number): number;

        /**
         * Adds a value to the repeated_int64_number field.
         * @param {number} value The value to add.
         */
        addRepeatedInt64Number(value: number): void;

        /**
         * Returns the array of values in the repeated_int64_number field.
         * @return {!Array<number>} The values in the field.
         */
        repeatedInt64NumberArray(): number[];

        /**
         * @return {boolean} Whether the repeated_int64_number field has a value.
         */
        hasRepeatedInt64Number(): boolean;

        /**
         * @return {number} The number of values in the repeated_int64_number field.
         */
        repeatedInt64NumberCount(): number;

        /**
         * Clears the values in the repeated_int64_number field.
         */
        clearRepeatedInt64Number(): void;

        /**
         * Gets the value of the repeated_int64_string field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedInt64String(index: number): string|null;

        /**
         * Gets the value of the repeated_int64_string field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedInt64StringOrDefault(index: number): string;

        /**
         * Adds a value to the repeated_int64_string field.
         * @param {string} value The value to add.
         */
        addRepeatedInt64String(value: string): void;

        /**
         * Returns the array of values in the repeated_int64_string field.
         * @return {!Array<string>} The values in the field.
         */
        repeatedInt64StringArray(): string[];

        /**
         * @return {boolean} Whether the repeated_int64_string field has a value.
         */
        hasRepeatedInt64String(): boolean;

        /**
         * @return {number} The number of values in the repeated_int64_string field.
         */
        repeatedInt64StringCount(): number;

        /**
         * Clears the values in the repeated_int64_string field.
         */
        clearRepeatedInt64String(): void;

        /**
         * Gets the value of the packed_int32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedInt32(index: number): number|null;

        /**
         * Gets the value of the packed_int32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedInt32OrDefault(index: number): number;

        /**
         * Adds a value to the packed_int32 field.
         * @param {number} value The value to add.
         */
        addPackedInt32(value: number): void;

        /**
         * Returns the array of values in the packed_int32 field.
         * @return {!Array<number>} The values in the field.
         */
        packedInt32Array(): number[];

        /**
         * @return {boolean} Whether the packed_int32 field has a value.
         */
        hasPackedInt32(): boolean;

        /**
         * @return {number} The number of values in the packed_int32 field.
         */
        packedInt32Count(): number;

        /**
         * Clears the values in the packed_int32 field.
         */
        clearPackedInt32(): void;

        /**
         * Gets the value of the packed_int64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedInt64(index: number): number|null;

        /**
         * Gets the value of the packed_int64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedInt64OrDefault(index: number): number;

        /**
         * Adds a value to the packed_int64 field.
         * @param {number} value The value to add.
         */
        addPackedInt64(value: number): void;

        /**
         * Returns the array of values in the packed_int64 field.
         * @return {!Array<number>} The values in the field.
         */
        packedInt64Array(): number[];

        /**
         * @return {boolean} Whether the packed_int64 field has a value.
         */
        hasPackedInt64(): boolean;

        /**
         * @return {number} The number of values in the packed_int64 field.
         */
        packedInt64Count(): number;

        /**
         * Clears the values in the packed_int64 field.
         */
        clearPackedInt64(): void;

        /**
         * Gets the value of the packed_uint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedUint32(index: number): number|null;

        /**
         * Gets the value of the packed_uint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedUint32OrDefault(index: number): number;

        /**
         * Adds a value to the packed_uint32 field.
         * @param {number} value The value to add.
         */
        addPackedUint32(value: number): void;

        /**
         * Returns the array of values in the packed_uint32 field.
         * @return {!Array<number>} The values in the field.
         */
        packedUint32Array(): number[];

        /**
         * @return {boolean} Whether the packed_uint32 field has a value.
         */
        hasPackedUint32(): boolean;

        /**
         * @return {number} The number of values in the packed_uint32 field.
         */
        packedUint32Count(): number;

        /**
         * Clears the values in the packed_uint32 field.
         */
        clearPackedUint32(): void;

        /**
         * Gets the value of the packed_uint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedUint64(index: number): number|null;

        /**
         * Gets the value of the packed_uint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedUint64OrDefault(index: number): number;

        /**
         * Adds a value to the packed_uint64 field.
         * @param {number} value The value to add.
         */
        addPackedUint64(value: number): void;

        /**
         * Returns the array of values in the packed_uint64 field.
         * @return {!Array<number>} The values in the field.
         */
        packedUint64Array(): number[];

        /**
         * @return {boolean} Whether the packed_uint64 field has a value.
         */
        hasPackedUint64(): boolean;

        /**
         * @return {number} The number of values in the packed_uint64 field.
         */
        packedUint64Count(): number;

        /**
         * Clears the values in the packed_uint64 field.
         */
        clearPackedUint64(): void;

        /**
         * Gets the value of the packed_sint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedSint32(index: number): number|null;

        /**
         * Gets the value of the packed_sint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedSint32OrDefault(index: number): number;

        /**
         * Adds a value to the packed_sint32 field.
         * @param {number} value The value to add.
         */
        addPackedSint32(value: number): void;

        /**
         * Returns the array of values in the packed_sint32 field.
         * @return {!Array<number>} The values in the field.
         */
        packedSint32Array(): number[];

        /**
         * @return {boolean} Whether the packed_sint32 field has a value.
         */
        hasPackedSint32(): boolean;

        /**
         * @return {number} The number of values in the packed_sint32 field.
         */
        packedSint32Count(): number;

        /**
         * Clears the values in the packed_sint32 field.
         */
        clearPackedSint32(): void;

        /**
         * Gets the value of the packed_sint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedSint64(index: number): number|null;

        /**
         * Gets the value of the packed_sint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedSint64OrDefault(index: number): number;

        /**
         * Adds a value to the packed_sint64 field.
         * @param {number} value The value to add.
         */
        addPackedSint64(value: number): void;

        /**
         * Returns the array of values in the packed_sint64 field.
         * @return {!Array<number>} The values in the field.
         */
        packedSint64Array(): number[];

        /**
         * @return {boolean} Whether the packed_sint64 field has a value.
         */
        hasPackedSint64(): boolean;

        /**
         * @return {number} The number of values in the packed_sint64 field.
         */
        packedSint64Count(): number;

        /**
         * Clears the values in the packed_sint64 field.
         */
        clearPackedSint64(): void;

        /**
         * Gets the value of the packed_fixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedFixed32(index: number): number|null;

        /**
         * Gets the value of the packed_fixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedFixed32OrDefault(index: number): number;

        /**
         * Adds a value to the packed_fixed32 field.
         * @param {number} value The value to add.
         */
        addPackedFixed32(value: number): void;

        /**
         * Returns the array of values in the packed_fixed32 field.
         * @return {!Array<number>} The values in the field.
         */
        packedFixed32Array(): number[];

        /**
         * @return {boolean} Whether the packed_fixed32 field has a value.
         */
        hasPackedFixed32(): boolean;

        /**
         * @return {number} The number of values in the packed_fixed32 field.
         */
        packedFixed32Count(): number;

        /**
         * Clears the values in the packed_fixed32 field.
         */
        clearPackedFixed32(): void;

        /**
         * Gets the value of the packed_fixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedFixed64(index: number): number|null;

        /**
         * Gets the value of the packed_fixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedFixed64OrDefault(index: number): number;

        /**
         * Adds a value to the packed_fixed64 field.
         * @param {number} value The value to add.
         */
        addPackedFixed64(value: number): void;

        /**
         * Returns the array of values in the packed_fixed64 field.
         * @return {!Array<number>} The values in the field.
         */
        packedFixed64Array(): number[];

        /**
         * @return {boolean} Whether the packed_fixed64 field has a value.
         */
        hasPackedFixed64(): boolean;

        /**
         * @return {number} The number of values in the packed_fixed64 field.
         */
        packedFixed64Count(): number;

        /**
         * Clears the values in the packed_fixed64 field.
         */
        clearPackedFixed64(): void;

        /**
         * Gets the value of the packed_sfixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedSfixed32(index: number): number|null;

        /**
         * Gets the value of the packed_sfixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedSfixed32OrDefault(index: number): number;

        /**
         * Adds a value to the packed_sfixed32 field.
         * @param {number} value The value to add.
         */
        addPackedSfixed32(value: number): void;

        /**
         * Returns the array of values in the packed_sfixed32 field.
         * @return {!Array<number>} The values in the field.
         */
        packedSfixed32Array(): number[];

        /**
         * @return {boolean} Whether the packed_sfixed32 field has a value.
         */
        hasPackedSfixed32(): boolean;

        /**
         * @return {number} The number of values in the packed_sfixed32 field.
         */
        packedSfixed32Count(): number;

        /**
         * Clears the values in the packed_sfixed32 field.
         */
        clearPackedSfixed32(): void;

        /**
         * Gets the value of the packed_sfixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedSfixed64(index: number): number|null;

        /**
         * Gets the value of the packed_sfixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedSfixed64OrDefault(index: number): number;

        /**
         * Adds a value to the packed_sfixed64 field.
         * @param {number} value The value to add.
         */
        addPackedSfixed64(value: number): void;

        /**
         * Returns the array of values in the packed_sfixed64 field.
         * @return {!Array<number>} The values in the field.
         */
        packedSfixed64Array(): number[];

        /**
         * @return {boolean} Whether the packed_sfixed64 field has a value.
         */
        hasPackedSfixed64(): boolean;

        /**
         * @return {number} The number of values in the packed_sfixed64 field.
         */
        packedSfixed64Count(): number;

        /**
         * Clears the values in the packed_sfixed64 field.
         */
        clearPackedSfixed64(): void;

        /**
         * Gets the value of the packed_float field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedFloat(index: number): number|null;

        /**
         * Gets the value of the packed_float field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedFloatOrDefault(index: number): number;

        /**
         * Adds a value to the packed_float field.
         * @param {number} value The value to add.
         */
        addPackedFloat(value: number): void;

        /**
         * Returns the array of values in the packed_float field.
         * @return {!Array<number>} The values in the field.
         */
        packedFloatArray(): number[];

        /**
         * @return {boolean} Whether the packed_float field has a value.
         */
        hasPackedFloat(): boolean;

        /**
         * @return {number} The number of values in the packed_float field.
         */
        packedFloatCount(): number;

        /**
         * Clears the values in the packed_float field.
         */
        clearPackedFloat(): void;

        /**
         * Gets the value of the packed_double field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getPackedDouble(index: number): number|null;

        /**
         * Gets the value of the packed_double field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getPackedDoubleOrDefault(index: number): number;

        /**
         * Adds a value to the packed_double field.
         * @param {number} value The value to add.
         */
        addPackedDouble(value: number): void;

        /**
         * Returns the array of values in the packed_double field.
         * @return {!Array<number>} The values in the field.
         */
        packedDoubleArray(): number[];

        /**
         * @return {boolean} Whether the packed_double field has a value.
         */
        hasPackedDouble(): boolean;

        /**
         * @return {number} The number of values in the packed_double field.
         */
        packedDoubleCount(): number;

        /**
         * Clears the values in the packed_double field.
         */
        clearPackedDouble(): void;

        /**
         * Gets the value of the packed_bool field at the index given.
         * @param {number} index The index to lookup.
         * @return {?boolean} The value.
         */
        getPackedBool(index: number): boolean|null;

        /**
         * Gets the value of the packed_bool field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {boolean} The value.
         */
        getPackedBoolOrDefault(index: number): boolean;

        /**
         * Adds a value to the packed_bool field.
         * @param {boolean} value The value to add.
         */
        addPackedBool(value: boolean): void;

        /**
         * Returns the array of values in the packed_bool field.
         * @return {!Array<boolean>} The values in the field.
         */
        packedBoolArray(): boolean[];

        /**
         * @return {boolean} Whether the packed_bool field has a value.
         */
        hasPackedBool(): boolean;

        /**
         * @return {number} The number of values in the packed_bool field.
         */
        packedBoolCount(): number;

        /**
         * Clears the values in the packed_bool field.
         */
        clearPackedBool(): void;
    }

    /**
     * Message TestDefaultParent.
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestDefaultParent extends __TestDefaultParent {}
    abstract class __TestDefaultParent extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the child field.
         * @return {?proto2.TestDefaultChild} The value.
         */
        getChild(): proto2.TestDefaultChild|null;

        /**
         * Gets the value of the child field or the default value if not set.
         * @return {!proto2.TestDefaultChild} The value.
         */
        getChildOrDefault(): proto2.TestDefaultChild;

        /**
         * Sets the value of the child field.
         * @param {!proto2.TestDefaultChild} value The value.
         */
        setChild(value: proto2.TestDefaultChild): void;

        /**
         * @return {boolean} Whether the child field has a value.
         */
        hasChild(): boolean;

        /**
         * @return {number} The number of values in the child field.
         */
        childCount(): number;

        /**
         * Clears the values in the child field.
         */
        clearChild(): void;
    }

    /**
     * Message TestDefaultChild.
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestDefaultChild extends __TestDefaultChild {}
    abstract class __TestDefaultChild extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the foo field.
         * @return {?boolean} The value.
         */
        getFoo(): boolean|null;

        /**
         * Gets the value of the foo field or the default value if not set.
         * @return {boolean} The value.
         */
        getFooOrDefault(): boolean;

        /**
         * Sets the value of the foo field.
         * @param {boolean} value The value.
         */
        setFoo(value: boolean): void;

        /**
         * @return {boolean} Whether the foo field has a value.
         */
        hasFoo(): boolean;

        /**
         * @return {number} The number of values in the foo field.
         */
        fooCount(): number;

        /**
         * Clears the values in the foo field.
         */
        clearFoo(): void;
    }
}

declare namespace proto2.TestAllTypes {
    /**
     * Message NestedMessage.
     * @extends {goog.proto2.Message}
     * @final
     */
    class NestedMessage extends __NestedMessage {}
    abstract class __NestedMessage extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the b field.
         * @return {?number} The value.
         */
        getB(): number|null;

        /**
         * Gets the value of the b field or the default value if not set.
         * @return {number} The value.
         */
        getBOrDefault(): number;

        /**
         * Sets the value of the b field.
         * @param {number} value The value.
         */
        setB(value: number): void;

        /**
         * @return {boolean} Whether the b field has a value.
         */
        hasB(): boolean;

        /**
         * @return {number} The number of values in the b field.
         */
        bCount(): number;

        /**
         * Clears the values in the b field.
         */
        clearB(): void;

        /**
         * Gets the value of the c field.
         * @return {?number} The value.
         */
        getC(): number|null;

        /**
         * Gets the value of the c field or the default value if not set.
         * @return {number} The value.
         */
        getCOrDefault(): number;

        /**
         * Sets the value of the c field.
         * @param {number} value The value.
         */
        setC(value: number): void;

        /**
         * @return {boolean} Whether the c field has a value.
         */
        hasC(): boolean;

        /**
         * @return {number} The number of values in the c field.
         */
        cCount(): number;

        /**
         * Clears the values in the c field.
         */
        clearC(): void;
    }

    /**
     * Message OptionalGroup.
     * @extends {goog.proto2.Message}
     * @final
     */
    class OptionalGroup extends __OptionalGroup {}
    abstract class __OptionalGroup extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the a field.
         * @return {?number} The value.
         */
        getA(): number|null;

        /**
         * Gets the value of the a field or the default value if not set.
         * @return {number} The value.
         */
        getAOrDefault(): number;

        /**
         * Sets the value of the a field.
         * @param {number} value The value.
         */
        setA(value: number): void;

        /**
         * @return {boolean} Whether the a field has a value.
         */
        hasA(): boolean;

        /**
         * @return {number} The number of values in the a field.
         */
        aCount(): number;

        /**
         * Clears the values in the a field.
         */
        clearA(): void;
    }

    /**
     * Message RepeatedGroup.
     * @extends {goog.proto2.Message}
     * @final
     */
    class RepeatedGroup extends __RepeatedGroup {}
    abstract class __RepeatedGroup extends goog.proto2.__Message {
        /**
         */
        constructor();

        /**
         * Gets the value of the a field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getA(index: number): number|null;

        /**
         * Gets the value of the a field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getAOrDefault(index: number): number;

        /**
         * Adds a value to the a field.
         * @param {number} value The value to add.
         */
        addA(value: number): void;

        /**
         * Returns the array of values in the a field.
         * @return {!Array<number>} The values in the field.
         */
        aArray(): number[];

        /**
         * @return {boolean} Whether the a field has a value.
         */
        hasA(): boolean;

        /**
         * @return {number} The number of values in the a field.
         */
        aCount(): number;

        /**
         * Clears the values in the a field.
         */
        clearA(): void;
    }

    /**
     * Enumeration NestedEnum.
     * @enum {number}
     */
    enum NestedEnum { FOO, OOF, BAR, BAZ }

    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}

declare namespace proto2.TestAllTypes.NestedMessage {
    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}

declare namespace proto2.TestAllTypes.OptionalGroup {
    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}

declare namespace proto2.TestAllTypes.RepeatedGroup {
    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}

declare namespace proto2.TestDefaultParent {
    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}

declare namespace proto2.TestDefaultChild {
    /** @nocollapse */
    var getDescriptor: any /*missing*/;
}
