/**
 * Graph3d displays data in 3d.
 * Graph3d is developed in javascript as a Google Visualization Chart.
 * @constructor Graph3d
 * @param {Element} container   The DOM element in which the Graph3d will
 *                              be created. Normally a div element.
 * @param {DataSet | DataView | Array} [data]
 * @param {Object} [options]
 */
declare class Graph3d {
    constructor(container: any, data?: any | any | any, options?: any);

    /**
     * Calculate the scaling values, dependent on the range in x, y, and z direction
     */
    _setScale(): void;

    /**
     * Convert a 3D location to a 2D location on screen
     * Source: ttp://en.wikipedia.org/wiki/3D_projection
     * @param   {Point3d} point3d  A 3D point with parameters x, y, z
     * @returns {Point2d} point2d  A 2D point with parameters x, y
     */
    _convert3Dto2D(point3d: any): any;

    /**
     * Convert a 3D location its translation seen from the camera
     * Source: http://en.wikipedia.org/wiki/3D_projection
     * @param   {Point3d} point3d     A 3D point with parameters x, y, z
     * @returns {Point3d} translation A 3D point with parameters x, y, z This is
     *                                the translation of the point, seen from the
     *                                camera.
     */
    _convertPointToTranslation(point3d: any): any;

    /**
     * Convert a translation point to a point on the screen
     * @param   {Point3d} translation A 3D point with parameters x, y, z This is
     *                                the translation of the point, seen from the
     *                                camera.
     * @returns {Point2d} point2d     A 2D point with parameters x, y
     */
    _convertTranslationToScreen(translation: any): any;

    /**
     * Transfer min/max values to the Graph3d instance.
     */
    _initializeRanges(): void;

    /**
     * Return all data values as a list of Point3d objects
     * @param {vis.DataSet} data
     * @returns {Array<Object>}
     */
    getDataPoints(data: any): any[];

    /**
     * Filter the data based on the current filter
     * @param   {Array} data
     * @returns {Array} dataPoints Array with point objects which can be drawn on
     *                             screen
     */
    _getDataPoints(data: any): any;

    /**
     * Create the main frame for the Graph3d.
     * This function is executed once when a Graph3d object is created. The frame
     * contains a canvas, and this canvas contains all objects like the axis and
     * nodes.
     */
    create(): void;

    /**
     * Resize the canvas to the current size of the frame
     */
    _resizeCanvas(): void;

    /**
     * Start animation, if requested and filter present
     */
    animationStart(): void;

    /**
     * Stop animation
     */
    animationStop(): void;

    /**
     * Resize the center position based on the current values in this.xCenter
     * and this.yCenter (which are strings with a percentage or a value
     * in pixels). The center positions are the variables this.currentXCenter
     * and this.currentYCenter
     */
    _resizeCenter(): void;

    /**
     * Retrieve the current camera rotation
     * @returns {object} An object with parameters horizontal, vertical, and
     *                   distance
     */
    getCameraPosition(): any;

    /**
     * Replace the dataset of the Graph3d
     * @param {Array | DataSet | DataView} data
     */
    setData(data: any | any | any): void;

    /**
     * Update the options. Options will be merged with current options
     * @param {Object} options
     */
    setOptions(options: any): void;

    /**
     * Determine which point drawing method to use for the current graph style.
     */
    setPointDrawingMethod(): void;

    /**
     * Redraw the Graph.
     */
    redraw(): void;

    /**
     * Clear the canvas before redrawing
     */
    _redrawClear(): void;

    /**
     * Redraw the legend based on size, dot color, or surface height
     */
    _redrawLegend(): void;

    /**
     * Redraw the filter
     */
    _redrawFilter(): void;

    /**
     * Redraw the slider
     */
    _redrawSlider(): void;

    /**
     * Redraw common information
     */
    _redrawInfo(): void;

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {vis.Point3d} point3d
     * @param {string} text
     * @param {number} armAngle
     * @param {number} [yMargin=0]
     */
    drawAxisLabelX(ctx: any, point3d: any, text: string, armAngle: number, yMargin?: number): void;

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {vis.Point3d} point3d
     * @param {string} text
     * @param {number} armAngle
     * @param {number} [yMargin=0]
     */
    drawAxisLabelY(ctx: any, point3d: any, text: string, armAngle: number, yMargin?: number): void;

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {vis.Point3d} point3d
     * @param {string} text
     * @param {number} [offset=0]
     */
    drawAxisLabelZ(ctx: any, point3d: any, text: string, offset?: number): void;

    /**
     * Redraw the axis
     */
    _redrawAxis(): void;

    /**
     * Draw a polygon using the passed points and fill it with the passed style and stroke.
     * @param {CanvasRenderingContext2D} ctx
     * @param {Array<vis.Point3d>} points      an array of points.
     * @param {string} [fillStyle] the fill style to set
     * @param {string} [strokeStyle] the stroke style to set
     */
    _polygon(ctx: any, points: any[], fillStyle?: string, strokeStyle?: string): void;

    /**
     * Draw all datapoints for currently selected graph style.
     */
    _redrawDataGraph(): void;

    /**
     * Store startX, startY and startOffset for mouse operations
     * @param {Event}     event     The event that occurred
     */
    _storeMousePosition(event: any): void;

    /**
     * Start a moving operation inside the provided parent element
     * @param {Event}     event     The event that occurred (required for
     *                  retrieving the  mouse position)
     */
    _onMouseDown(event: any): void;

    /**
     * Perform moving operating.
     * This function activated from within the funcion Graph.mouseDown().
     * @param {Event}   event  Well, eehh, the event
     */
    _onMouseMove(event: any): void;

    /**
     * Stop moving operating.
     * This function activated from within the funcion Graph.mouseDown().
     * @param {Event}  event   The event
     */
    _onMouseUp(event: any): void;

    /**
     * @param {Event}  event   The event
     */
    _onClick(event: any): void;

    /**
     * After having moved the mouse, a tooltip should pop up when the mouse is resting on a data point
     * @param {Event}  event   A mouse move event
     */
    _onTooltip(event: any): void;

    /**
     * Event handler for touchstart event on mobile devices
     * @param {Event}  event   The event
     */
    _onTouchStart(event: any): void;

    /**
     * Event handler for touchmove event on mobile devices
     * @param {Event}  event   The event
     */
    _onTouchMove(event: any): void;

    /**
     * Event handler for touchend event on mobile devices
     * @param {Event}  event   The event
     */
    _onTouchEnd(event: any): void;

    /**
     * Event handler for mouse wheel event, used to zoom the graph
     * Code from http://adomas.org/javascript-mouse-wheel/
     * @param {Event}  event   The event
     */
    _onWheel(event: any): void;

    /**
     * Determine if the given style has bars
     * @param   {number} style the style to check
     * @returns {boolean} true if bar style, false otherwise
     */
    hasBars(style: number): boolean;

    /**
     * Set the rotation and distance of the camera
     * @param {Object}  pos            An object with the camera position
     * @param {?Number} pos.horizontal The horizontal rotation, between 0 and 2*PI.
     *                                 Optional, can be left undefined.
     * @param {?Number} pos.vertical   The vertical rotation, between 0 and 0.5*PI.
     *                                 if vertical=0.5*PI, the graph is shown from
     *                                 the top. Optional, can be left undefined.
     * @param {?Number} pos.distance   The (normalized) distance of the camera to the
     *                                 center of the graph, a value between 0.71 and
     *                                 5.0. Optional, can be left undefined.
     */
    setCameraPosition(pos: any, pos.horizontal: any, pos.vertical: any, pos.distance: any): void;

    /**
     * Set a new size for the graph
     * @param {string} width  Width in pixels or percentage (for example '800px'
     *                        or '50%')
     * @param {string} height Height in pixels or percentage  (for example '400px'
     *                        or '30%')
     */
    setSize(width: string, height: string): void;

}

/**
 * Get the horizontal mouse position from a mouse event
 * @param   {Event}  event
 * @returns {Number} mouse x
 */
declare function getMouseX(event: any): any;

/**
 * Get the vertical mouse position from a mouse event
 * @param   {Event}  event
 * @returns {Number} mouse y
 */
declare function getMouseY(event: any): any;

