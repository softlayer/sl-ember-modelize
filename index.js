/* jshint node: true */
'use strict';

module.exports = {
  name: 'sl-ember-modelize',

  contentFor: function( type, config ) {
    var content;

    switch ( type ) {
        case 'keywords':
            content = require('./package.json')['keywords'].join( ', ' ) + ', ember, ember cli';
            break;

        case 'description':
            content = require('./package.json')['description'];
            break;
    }

    return content;
  }
};
