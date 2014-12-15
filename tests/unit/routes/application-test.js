import {
  moduleFor,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleFor('route:application', 'ApplicationRoute', {
  // Specify the other units that are required for this test.
  needs: ['model:foo','model:bar','model:car']
});

test('Modelizes Foo', function() {
  var appRoute = this.subject(),
      Foo = appRoute.container.lookupFactory( 'model:foo' ),
      Bar = appRoute.container.lookupFactory( 'model:bar' ),
      Car = appRoute.container.lookupFactory( 'model:car' ),
      modelized = appRoute.modelize( appRoute.fixture );

  ok( modelized.foo instanceof Foo, 'modelized.foo is instance of Foo model' );
});
test('Modelizes Bar', function() {
  var appRoute = this.subject(),
      Foo = appRoute.container.lookupFactory( 'model:foo' ),
      Bar = appRoute.container.lookupFactory( 'model:bar' ),
      Car = appRoute.container.lookupFactory( 'model:car' ),
      modelized = appRoute.modelize( appRoute.fixture );

  ok( modelized.foo.get('bar') instanceof Bar, 'modelized.foo.bar is instance of Bar model' );
});
test('Modelizes Car', function() {
  var appRoute = this.subject(),
      Foo = appRoute.container.lookupFactory( 'model:foo' ),
      Bar = appRoute.container.lookupFactory( 'model:bar' ),
      Car = appRoute.container.lookupFactory( 'model:car' ),
      modelized = appRoute.modelize( appRoute.fixture );

  ok( modelized.foo.get( 'bar.car.firstObject' ) instanceof Car, 'modelized.foo.bar.car[0] is instance of Car model' );
});
test('__each is not broken', function() {
    var appRoute = this.subject(),
        Foo = appRoute.container.lookupFactory( 'model:foo' ),
        testArray = Ember.ArrayProxy.create({
            'content' : Ember.A( [{'text' : 'This is a test'}] )
        }),
        modelized = appRoute.modelize( {foo : testArray});

    ok ( modelized.foo.get( 'firstObject' ) instanceof Foo, '__each seems OK' );
});
