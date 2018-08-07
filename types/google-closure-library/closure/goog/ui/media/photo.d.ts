/// <reference path="../../../../globals.d.ts"/>
/// <reference path="./media.d.ts"/>
/// <reference path="./mediamodel.d.ts"/>

declare module 'goog:goog.ui.media.Photo' {
    import alias = goog.ui.media.Photo;
    export default alias;
}

declare namespace goog.ui.media {
    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Photo specific media
     * renderer. Provides a base class for any other renderer that wants to display
     * photos.
     *
     * This class is meant to be used as a singleton static stateless class, that
     * takes `goog.ui.media.Media` instances and renders it.
     *
     * This design is patterned after
     * http://go/closure_control_subclassing
     *
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Photo extends __Photo {}
    abstract class __Photo extends goog.ui.media.__MediaRenderer {
        /**
         */
        constructor();
    }
}

declare namespace goog.ui.media.Photo {
    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    let CSS_CLASS: string;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a photo `goog.ui.media.MediaModel`. It sets it as the data model
     * goog.ui.media.Photo renderer uses, sets the states supported by the renderer,
     * and returns a Control that binds everything together. This is what you
     * should be using for constructing Photos, except if you need finer control
     * over the configuration.
     *
     * @param {goog.ui.media.MediaModel} dataModel The photo data model.
     * @return {!goog.ui.media.Media} A goog.ui.Control subclass with the photo
     *     renderer.
     */
    function newControl(dataModel: goog.ui.media.MediaModel): goog.ui.media.Media;
}
