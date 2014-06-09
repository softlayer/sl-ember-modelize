import emberize from "emberize-model";

var expect = chai.expect;

// var app = Ember.application.extend({
//     modulePrefix: "emberizeTest",
//     resolver: resolver,
//     emberize: emberize
// });

// define('emberizeTest/model/foo', [ ] , function(){  return Ember.Object.extend(); });
// define('emberizeTest/model/bar', [ ] , function(){  return Ember.Object.extend(); });
// define('emberizeTest/model/bat', [ ] , function(){  return Ember.Object.extend(); });

// testJson = {
//     foo: { test: { string: 'blah' } },
//     bar: { foo: { bat: 'clah' } },
//     bat: { bar: { 'blehc' } }
// };


describe( 'emberize-model/main', function(){
    it( 'should be a function', function(){
        expect( emberize ).to.be.a('function');
    });
});