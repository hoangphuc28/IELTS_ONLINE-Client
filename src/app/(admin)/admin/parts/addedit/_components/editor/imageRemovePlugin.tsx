import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { removeItems } from '@ckeditor/ckeditor5-engine/src/model/operation';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';

export default class ImageRemoveEventCallbackPlugin extends Plugin {
    static get requires() {
        return [ 'Widget' ];
    }

    init() {
        const editor = this.editor;

        // Listen to the model changes to detect image removal.
        editor.model.document.on( 'change', ( evt, data ) => {
            const changes = evt.changes;
            changes.forEach( change => {
                if ( change.type === 'remove' && change.item.name === 'image' ) {
                    const imageUrl = change.item.getAttribute('src');
                    this._fireImageRemovedEvent(imageUrl);
                }
            });
        });
    }

    // Fire custom event for image removed
    _fireImageRemovedEvent(imageUrl) {
        const event = new CustomEvent('image-removed', {
            detail: {
                imageUrl: imageUrl
            }
        });
        document.dispatchEvent(event);
    }
}
