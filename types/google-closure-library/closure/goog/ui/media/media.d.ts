/// <reference path="../../../../globals.d.ts"/>
/// <reference path="../control.d.ts"/>
/// <reference path="./mediamodel.d.ts"/>
/// <reference path="../controlrenderer.d.ts"/>
/// <reference path="../../dom/dom.d.ts"/>

declare namespace goog.ui.media {
    /**
     * Provides the control mechanism of media types.
     *
     * @extends {goog.ui.Control}
     * @final
     */
    class Media extends __Media {}
    abstract class __Media extends goog.ui.__Control {
        /**
         * @param {goog.ui.media.MediaModel} dataModel The data model to be used by the
         *     renderer.
         * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
         *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         */
        constructor(
            dataModel: goog.ui.media.MediaModel,
            opt_renderer?: goog.ui.ControlRenderer,
            opt_domHelper?: goog.dom.DomHelper
        );

        /**
         * The media data model used on the renderer.
         *
         * @type {goog.ui.media.MediaModel}
         * @private
         */
        private dataModel_: goog.ui.media.MediaModel;

        /**
         * Sets the media model to be used on the renderer.
         * @param {goog.ui.media.MediaModel} dataModel The media model the renderer
         *     should use.
         */
        setDataModel(dataModel: goog.ui.media.MediaModel): void;

        /**
         * Gets the media model renderer is using.
         * @return {goog.ui.media.MediaModel} The media model being used.
         */
        getDataModel(): goog.ui.media.MediaModel;
    }

    /**
     * Base class of all media renderers. Provides the common renderer functionality
     * of medias.
     *
     * The current common functionality shared by Medias is to have an outer frame
     * that gets highlighted on mouse hover.
     *
     * TODO(user): implement more common UI behavior, as needed.
     *
     * NOTE(user): I am not enjoying how the subclasses are changing their state
     * through setState() ... maybe provide abstract methods like
     * goog.ui.media.MediaRenderer.prototype.preview = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.play = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.minimize = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.maximize = goog.abstractMethod;
     * and call them on this parent class setState ?
     *
     * @extends {goog.ui.ControlRenderer}
     */
    class MediaRenderer extends __MediaRenderer {}
    abstract class __MediaRenderer extends goog.ui.__ControlRenderer {
        /**
         */
        constructor();

        /**
         * Returns a renamable CSS class name for a numbered thumbnail. The default
         * implementation generates the class names goog-ui-media-thumbnail0,
         * goog-ui-media-thumbnail1, and the generic goog-ui-media-thumbnailn.
         * Subclasses can override this method when their media requires additional
         * specific class names (Applications are supposed to know how many thumbnails
         * media will have).
         *
         * @param {number} index The thumbnail index.
         * @return {string} CSS class name.
         * @protected
         */
        protected getThumbnailCssName(index: number): string;
    }
}
