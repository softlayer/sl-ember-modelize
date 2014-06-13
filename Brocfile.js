var filterES6Modules = require( 'broccoli-es6-module-filter' ),
    broconcat = require( 'broccoli-concat' );

module.exports = broconcat(
    filterES6Modules( 'lib', {
        moduleType : 'amd',
        anonymous : false,
        compatFix : true,
        packageName : 'sl-modelize',
        main : 'main'
    } ),
    {
        inputFiles : [ '**/*.js' ],
        outputFile : '/sl-modelize.js',
        wrapInEval : false
    }
);