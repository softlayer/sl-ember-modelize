define("emberize-model",
  ["exports"],
  function(__exports__) {
    "use strict";
    __exports__["default"] = function emberize( response ) {
        var mapArrayToClass = function ( item, index, enumberable ) {
            return classProperty.create( item );
        };

        for ( var property in response ) {
            /* There appears to be an issue with the __each attribute in some ember arrays that
               causes a recursive loop that crashes the browser */
            if ( property === '__each' ) {
                continue;
            }

            if ( response.hasOwnProperty( property ) ) {
                if ( 'object' == typeof response[ property ] ) {
                    var normalizedKey = this.container.normalize( 'model:'+property );
                    var classProperty = this.container.lookupFactory( normalizedKey );

                    if ( 'function' == typeof classProperty ) {
                        if ( Ember.isArray( response[ property ] ) ) {
                            response[ property ] = response[ property ].map( mapArrayToClass );
                        } else {
                            response[ property ] = classProperty.create( response[ property ] );
                        }
                    } else if ( response[ property ] && !Ember.isArray( response[ property ] ) && !(response[ property ] instanceof Ember.Object) ) {
                        response[ property ] = Ember.Object.create( response[ property ] );
                    }

                    this.emberize.call( this, response[ property ] );
                }
            }
        }

        return response;
    }
  });