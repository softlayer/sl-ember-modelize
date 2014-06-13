import modelize from "sl-modelize";
import Resolver from "ember/resolver";

var expect = chai.expect;

describe( 'sl-modelize/main', function(){

    define('ModelizeTest/models/foo', [ ] , function(){  return Ember.Object.extend(); });
    define('ModelizeTest/models/bar', [ ] , function(){  return Ember.Object.extend(); });
    define('ModelizeTest/models/bat', [ ] , function(){  return Ember.Object.extend(); });

    var modelFoo = require('ModelizeTest/models/foo');
    var modelBar = require('ModelizeTest/models/bar');
    var modelBat = require('ModelizeTest/models/bat');

    var testObj = {
            foo: { test: { test2: 'blah' } },
            bar: { foo: { bat: 'clah' } },
            bat: { bar: { bat: 'blehc' } }
        };

    var testModel;

    before(function(){
        window.App = Ember.Application.extend({
            modulePrefix: "ModelizeTest",
            Resolver: Resolver,
            adapter: Ember.Object.createWithMixins( modelize, {
                container: null,
            })
        }).create();

        window.App.adapter.container = window.App.__container__;
        testModel = window.App.adapter.modelize( testObj );
    });

    describe( 'foo', function(){
        it( 'should be instanceof foo', function(){
            expect( testModel.foo ).to.be.instanceof( modelFoo );
        });
    });

    describe( 'foo.test', function(){
        it( 'should be instanceof Object', function(){
            expect( testModel.foo.test ).to.be.instanceof( Object );
        });
    });

    describe( 'bar', function(){
        it( 'should be instanceof bar', function(){
            expect( testModel.bar ).to.be.instanceof( modelBar );
        });
    });

    describe( 'bar.foo', function(){
        it( 'should be instanceof foo', function(){
            expect( testModel.bar.foo ).to.be.instanceof( modelFoo );
        });
    });

    describe( 'bar.foo.bat', function(){
        it( 'should be a string', function(){
            expect( testModel.bar.foo.bat ).to.be.a( 'string' );
        });
    });

    describe( 'bat', function(){
        it( 'should be instanceof bat', function(){
            expect( testModel.bat ).to.be.instanceof( modelBat );
        });
    });

    describe( 'bat.bar', function(){
        it( 'should be instanceof bar', function(){
            expect( testModel.bat.bar ).to.be.instanceof( modelBar );
        });
    });

});