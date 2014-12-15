import Ember from 'ember';

/**
 * @module mixins
 * @class  modelize
 */
export default Ember.Mixin.create({

    // -------------------------------------------------------------------------
    // Dependencies

    // -------------------------------------------------------------------------
    // Attributes

    // -------------------------------------------------------------------------
    // Actions

    // -------------------------------------------------------------------------
    // Events

    // -------------------------------------------------------------------------
    // Properties

    // -------------------------------------------------------------------------
    // Observers

    // -------------------------------------------------------------------------
    // Methods

    /**
     * Modelize an object by replacing keys with their corresponsding model, as found via the container
     *
     * @function modelize
     * @param    {Ember.Object} response  Plain Javascript object
     * @returns  {Ember.Object}
     */
    modelize: function ( response ) {
        Ember.keys( response ).map(function ( key ) {
            var normalizedKey,
                classProperty,
                mapArrayToClass = function ( item ) {
                    return classProperty.create( item );
                };
            if ( 'object' === typeof response[ key ] ) {
                normalizedKey = this.container.normalize( 'model:' + key );
                classProperty = this.container.lookupFactory( normalizedKey );

                if ( 'function' === typeof classProperty ) {
                    if ( Ember.isArray( response[ key ] ) ) {
                        response[ key ] = response[ key ].map( mapArrayToClass );
                    } else {
                        response[ key ] = classProperty.create( response[ key ] );
                    }
                } else if ( response[ key ] && !Ember.isArray( response[ key ] ) && !(response[ key ] instanceof Ember.Object) ) {
                    response[ key ] = Ember.Object.create( response[ key ] );
                }

                this.modelize.call( this, response[ key ] );
            }
        }, this);

        return response;
    }
});
