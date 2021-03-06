/// <reference path="../../../globals.d.ts"/>
/// <reference path="./affinetransform.d.ts"/>

declare module 'goog:goog.math.Path' {
    import alias = goog.math.Path;
    export default alias;
}

declare module 'goog:goog.math.Path.Segment' {
    import alias = goog.math.Path.Segment;
    export default alias;
}

declare namespace goog.math {
    /**
     * Creates a path object. A path is a sequence of segments and may be open or
     * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
     * path. A path must start with a moveTo command.
     *
     * A "simple" path does not contain any arcs and may be transformed using
     * the `transform` method.
     *
     * @struct
     * @final
     */
    class Path extends __Path {}
    abstract class __Path {
        /**
         */
        constructor();

        /**
         * The segment types that constitute this path.
         * @private {!Array<goog.math.Path.Segment>}
         */
        private segments_: goog.math.Path.Segment[];

        /**
         * The number of repeated segments of the current type.
         * @type {!Array<number>}
         * @private
         */
        private count_: number[];

        /**
         * The arguments corresponding to each of the segments.
         * @type {!Array<number>}
         * @private
         */
        private arguments_: number[];

        /**
         * The coordinates of the point which closes the path (the point of the
         * last moveTo command).
         * @type {Array<number>?}
         * @private
         */
        private closePoint_: number[]|null;

        /**
         * The coordinates most recently added to the end of the path.
         * @type {Array<number>?}
         * @private
         */
        private currentPoint_: number[]|null;

        /**
         * Flag for whether this is a simple path (contains no arc segments).
         * @type {boolean}
         * @private
         */
        private simple_: boolean;

        /**
         * Returns an array of the segment types in this path, in the order of their
         * appearance. Adjacent segments of the same type are collapsed into a single
         * entry in the array. The returned array is a copy; modifications are not
         * reflected in the Path object.
         * @return {!Array<number>}
         */
        getSegmentTypes(): number[];

        /**
         * Returns an array of the number of times each segment type repeats in this
         * path, in order. The returned array is a copy; modifications are not reflected
         * in the Path object.
         * @return {!Array<number>}
         */
        getSegmentCounts(): number[];

        /**
         * Returns an array of all arguments for the segments of this path object, in
         * order. The returned array is a copy; modifications are not reflected in the
         * Path object.
         * @return {!Array<number>}
         */
        getSegmentArgs(): number[];

        /**
         * Appends another path to the end of this path.
         *
         * @param {!goog.math.Path} path The path to append.
         * @return {!goog.math.Path} This path.
         */
        appendPath(path: goog.math.Path): goog.math.Path;

        /**
         * Clears the path.
         *
         * @return {!goog.math.Path} The path itself.
         */
        clear(): goog.math.Path;

        /**
         * Adds a point to the path by moving to the specified point. Repeated moveTo
         * commands are collapsed into a single moveTo.
         *
         * @param {number} x X coordinate of destination point.
         * @param {number} y Y coordinate of destination point.
         * @return {!goog.math.Path} The path itself.
         */
        moveTo(x: number, y: number): goog.math.Path;

        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {...number} var_args The coordinates of each destination point as x, y
         *     value pairs.
         * @return {!goog.math.Path} The path itself.
         */
        lineTo(...var_args: number[]): goog.math.Path;

        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {!Array<number>} coordinates The coordinates of each
         *     destination point as x, y value pairs.
         * @return {!goog.math.Path} The path itself.
         */
        lineToFromArray(coordinates: number[]): goog.math.Path;

        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {!Array<number>|Arguments} coordinates The coordinates of each
         *     destination point as x, y value pairs.
         * @return {!goog.math.Path} The path itself.
         * @private
         */
        private lineTo_(coordinates: number[]|IArguments): goog.math.Path;

        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {...number} var_args The coordinates specifying each curve in sets of
         *     6 points: {@code [x1, y1]} the first control point, {@code [x2, y2]} the
         *     second control point and {@code [x, y]} the end point.
         * @return {!goog.math.Path} The path itself.
         */
        curveTo(...var_args: number[]): goog.math.Path;

        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {!Array<number>} coordinates The coordinates specifying
         *     each curve in sets of 6 points: {@code [x1, y1]} the first control point,
         *     {@code [x2, y2]} the second control point and {@code [x, y]} the end
         *     point.
         * @return {!goog.math.Path} The path itself.
         */
        curveToFromArray(coordinates: number[]): goog.math.Path;

        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {!Array<number>|Arguments} coordinates The coordinates specifying
         *     each curve in sets of 6 points: {@code [x1, y1]} the first control point,
         *     {@code [x2, y2]} the second control point and {@code [x, y]} the end
         *     point.
         * @return {!goog.math.Path} The path itself.
         * @private
         */
        private curveTo_(coordinates: number[]|IArguments): goog.math.Path;

        /**
         * Adds a path command to close the path by connecting the
         * last point to the first point.
         *
         * @return {!goog.math.Path} The path itself.
         */
        close(): goog.math.Path;

        /**
         * Adds a path command to draw an arc centered at the point {@code (cx, cy)}
         * with radius `rx` along the x-axis and `ry` along the y-axis from
         * `startAngle` through `extent` degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * @param {number} cx X coordinate of center of ellipse.
         * @param {number} cy Y coordinate of center of ellipse.
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @param {boolean} connect If true, the starting point of the arc is connected
         *     to the current point.
         * @return {!goog.math.Path} The path itself.
         * @deprecated Use `arcTo` or `arcToAsCurves` instead.
         */
        arc(cx: number, cy: number, rx: number, ry: number, fromAngle: number, extent: number, connect: boolean):
            goog.math.Path;

        /**
         * Adds a path command to draw an arc starting at the path's current point,
         * with radius `rx` along the x-axis and `ry` along the y-axis from
         * `startAngle` through `extent` degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * This method makes the path non-simple.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.math.Path} The path itself.
         */
        arcTo(rx: number, ry: number, fromAngle: number, extent: number): goog.math.Path;

        /**
         * Same as `arcTo`, but approximates the arc using bezier curves.
        .* As a result, this method does not affect the simplified status of this path.
         * The algorithm is adapted from `java.awt.geom.ArcIterator`.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.math.Path} The path itself.
         */
        arcToAsCurves(rx: number, ry: number, fromAngle: number, extent: number): goog.math.Path;

        /**
         * Iterates over the path calling the supplied callback once for each path
         * segment. The arguments to the callback function are the segment type and
         * an array of its arguments.
         *
         * The `LINETO` and `CURVETO` arrays can contain multiple
         * segments of the same type. The number of segments is the length of the
         * array divided by the segment length (2 for lines, 6 for  curves).
         *
         * As a convenience the `ARCTO` segment also includes the end point as the
         * last two arguments: {@code rx, ry, fromAngle, extent, x, y}.
         *
         * @param {function(!goog.math.Path.Segment, !Array<number>)} callback
         *     The function to call with each path segment.
         */
        forEachSegment(callback: (_0: goog.math.Path.Segment, _1: number[]) => void): void;

        /**
         * Returns the coordinates most recently added to the end of the path.
         *
         * @return {Array<number>?} An array containing the ending coordinates of the
         *     path of the form {@code [x, y]}.
         */
        getCurrentPoint(): number[]|null;

        /**
         * @return {!goog.math.Path} A copy of this path.
         */
        clone(): goog.math.Path;

        /**
         * Returns true if this path contains no arcs. Simplified paths can be
         * created using `createSimplifiedPath`.
         *
         * @return {boolean} True if the path contains no arcs.
         */
        isSimple(): boolean;

        /**
         * Creates a transformed copy of this path. The path is simplified
         * {@see #createSimplifiedPath} prior to transformation.
         *
         * @param {!goog.math.AffineTransform} tx The transformation to perform.
         * @return {!goog.math.Path} A new, transformed path.
         */
        createTransformedPath(tx: goog.math.AffineTransform): goog.math.Path;

        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         *
         * @param {!goog.math.AffineTransform} tx The transformation to perform.
         * @return {!goog.math.Path} The path itself.
         */
        transform(tx: goog.math.AffineTransform): goog.math.Path;

        /**
         * @return {boolean} Whether the path is empty.
         */
        isEmpty(): boolean;
    }
}

declare namespace goog.math.Path {
    /**
     * Path segment types.
     * @enum {number}
     */
    enum Segment { MOVETO, LINETO, CURVETO, ARCTO, CLOSE }

    /**
     * Returns the number of points for a segment type.
     *
     * @param {number} segment The segment type.
     * @return {number} The number of points.
     */
    function getSegmentCount(segment: number): number;

    /**
     * Creates a copy of the given path, replacing `arcTo` with
     * `arcToAsCurves`. The resulting path is simplified and can
     * be transformed.
     *
     * @param {!goog.math.Path} src The path to simplify.
     * @return {!goog.math.Path} A new simplified path.
     */
    function createSimplifiedPath(src: goog.math.Path): goog.math.Path;
}
