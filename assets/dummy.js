define("dummy/Ember CLI QUnit/tests/ember-cli-qunit/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-qunit/mixins');
    test('ember-cli-qunit/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'ember-cli-qunit/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/app", 
  ["ember","ember/resolver","ember/load-initializers","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    loadInitializers(App, config.modulePrefix);

    __exports__["default"] = App;
  });
define("dummy/controllers/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Controller.extend({
    });
  });
define("dummy/ember-cli-es5-shim/tests/ember-cli-es5-shim/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-es5-shim/mixins');
    test('ember-cli-es5-shim/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'ember-cli-es5-shim/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/ember-cli-esnext/tests/ember-cli-esnext/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-cli-esnext/mixins');
    test('ember-cli-esnext/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'ember-cli-esnext/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/ember-data/tests/ember-data/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-data/mixins');
    test('ember-data/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'ember-data/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/ember-export-application-global/tests/ember-export-application-global/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - ember-export-application-global/mixins');
    test('ember-export-application-global/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'ember-export-application-global/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/initializers/export-application-global", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;
    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("dummy/live-reload-middleware/tests/live-reload-middleware/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - live-reload-middleware/mixins');
    test('live-reload-middleware/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'live-reload-middleware/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/models/bar", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Object.extend();
  });
define("dummy/models/car", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Object.extend();
  });
define("dummy/models/foo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Object.extend();
  });
define("dummy/router", 
  ["ember","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
        this.route( 'index', { path: '/' });
        this.route( 'demo' );
    });

    __exports__["default"] = Router;
  });
define("dummy/routes/demo", 
  ["ember","sl-ember-modelize/mixins/modelize","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SlModelize = __dependency2__["default"];

    __exports__["default"] = Ember.Route.extend(SlModelize, {

        fixture: {
            foo: {
                bar: {
                    car: [
                        {
                            name: 'car1',
                            color: 'blue'
                        },
                        {
                            name: 'car2',
                            color: 'red'
                        },
                        {
                            name: 'car3',
                            color: 'black'
                        }
                    ],
                    test: 'this is a bar model'
                },
                text: 'this is a foo model'
            }
        },

        model: function(){
            this.controllerFor( 'demo' ).set( 'fixture', this.fixture );
            return this.modelize( this.fixture );
        }
    });
  });
define("dummy/sl-ember-modelize/tests/sl-ember-modelize/mixins/modelize.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - sl-ember-modelize/mixins');
    test('sl-ember-modelize/mixins/modelize.js should pass jshint', function() { 
      ok(true, 'sl-ember-modelize/mixins/modelize.js should pass jshint.'); 
    });
  });
define("dummy/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("<i class=\"fa fa-home\"></i> Home");
      }

      data.buffer.push("<br>\n<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"btn-group pull-right\">\n                <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n                    <i class=\"fa fa-reorder\"></i> <span class=\"caret\"></span>\n                </button>\n\n                <ul class=\"dropdown-menu\" role=\"menu\">\n                <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "index", options) : helperMissing.call(depth0, "link-to", "index", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\"><i class=\"fa fa-wrench\"></i> Get Started</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-modelize/blob/master/CONTRIBUTING.md\"><i class=\"fa fa-cog\"></i> Contribution Guide</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-modelize/stargazers\"><i class=\"fa fa-star\"></i> Star Our Repo</a></li>\n                <li><a href=\"https://github.com/softlayer/sl-ember-modelize/fork\"><i class=\"fa fa-code-fork\"></i> Fork Our Repo</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n\n    ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <br><br>\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <p>npm install sl-ember-modelize</p>\n            <p><a href=\"https://github.com/softlayer/sl-ember-modelize/blob/master/LICENSE.md\">MIT Licensed</a></p>\n        </div>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/templates/demo", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>Usage Demonstration</h1>\n        <p class=\"lead\">View the source code of the dummy application for syntax employed in this demo</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12\">\n        <p>The purpose of this Mixin is to take a Plain Old Javascript Object (POJO) and turn it into a series of  nested model objects.  This works for objects stored on keys and on arrays of objects stored on keys too.</p>\n\n        <p>Consider this fixture:</p>\n\n        <pre>\nfixture: {\n    foo: {\n        bar: {\n            car: [\n                {\n                    name: 'car1',\n                    color: 'blue'\n                },\n                {\n                    name: 'car2',\n                    color: 'red'\n                },\n                {\n                    name: 'car3',\n                    color: 'black'\n                }\n            ],\n            test: 'this is a bar model'\n        },\n        text: 'this is a foo model'\n    }\n}\n</pre>\n\n        <p>Passing this POJO through the <code>modelize</code> function will cause the object stored in the values for <code>foo</code>, <code>bar</code>, and the array stored on <code>car</code>, to be replaced with the models defined for those key names in the app.  <code>Modelize</code> looks up models via Ember's container, if a model is found then it is instantiated with the values from the fixture. <p>\n\n        <p>You can verify this by typing the following commands into your browser's console:</p>\n\n        <pre>\nFoo = Dummy.__container__.lookupFactory('model:foo')\nDummy.__container__.lookup('controller:application').get('model.foo') instanceof Foo\n\nBar = Dummy.__container__.lookupFactory('model:bar')\nDummy.__container__.lookup('controller:application').get('model.foo.bar') instanceof Bar\n\nCar = Dummy.__container__.lookupFactory('model:car')\nDummy.__container__.lookup('controller:application').get('model.foo.bar.car.firstObject')\n</pre>\n\n        <p>Or better yet, take a look at the tests!\n    </div>\n</div>");
      
    });
  });
define("dummy/templates/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      
      data.buffer.push("<i class=\"fa fa-cubes fa-5x\"></i>");
      }

      data.buffer.push("<div class=\"row\">\n    <div class=\"col-md-12 text-center\">\n        <h1>sl-ember-modelize</h1>\n        <p class=\"lead\">An Ember CLI Addon that provides the ability to turn a Plain Old Javascript Object (POJO) into a series of nested model objects.</p>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-4 text-center\">\n        <h3>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "demo", options) : helperMissing.call(depth0, "link-to", "demo", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h3>\n        <p><a href=\"dist\"><b>Demo</b></a></p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\"><i class=\"fa fa-book fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-modelize/blob/master/README.md\"><b>Documentation</b></a></p>\n    </div>\n    <div class=\"col-md-4 text-center\">\n        <h3><a href=\"https://github.com/softlayer/sl-ember-modelize\"><i class=\"fa fa-github fa-5x\"></i></a></h3>\n        <p><a href=\"https://github.com/softlayer/sl-ember-modelize\"><b>Available on GitHub</b></a></p>\n    </div>\n</div>");
      return buffer;
      
    });
  });
define("dummy/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("dummy/tests/controllers/demo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/demo.js should pass jshint', function() { 
      ok(true, 'controllers/demo.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/helpers');
    test('dummy/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'dummy/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests');
    test('dummy/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'dummy/tests/test-helper.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/mixins/modelize-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/mixins');
    test('dummy/tests/unit/mixins/modelize-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/mixins/modelize-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/dummy/tests/unit/routes/application-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - dummy/tests/unit/routes');
    test('dummy/tests/unit/routes/application-test.js should pass jshint', function() { 
      ok(true, 'dummy/tests/unit/routes/application-test.js should pass jshint.'); 
    });
  });
define("dummy/tests/helpers/resolver", 
  ["ember/resolver","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("dummy/tests/helpers/start-app", 
  ["ember","dummy/app","dummy/router","dummy/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var application;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        application = Application.create(attributes);
        application.setupForTesting();
        application.injectTestHelpers();
      });

      return application;
    }
  });
define("dummy/tests/models/bar.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/bar.js should pass jshint', function() { 
      ok(true, 'models/bar.js should pass jshint.'); 
    });
  });
define("dummy/tests/models/car.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/car.js should pass jshint', function() { 
      ok(true, 'models/car.js should pass jshint.'); 
    });
  });
define("dummy/tests/models/foo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/foo.js should pass jshint', function() { 
      ok(true, 'models/foo.js should pass jshint.'); 
    });
  });
define("dummy/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("dummy/tests/routes/demo.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/demo.js should pass jshint', function() { 
      ok(true, 'routes/demo.js should pass jshint.'); 
    });
  });
define("dummy/tests/test-helper", 
  ["dummy/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
define("dummy/tests/unit/mixins/modelize-test", 
  ["ember","sl-ember-modelize/mixins/modelize"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var SlModelize = __dependency2__["default"];

    var subject;

    module( 'Unit - mixins:modelize', {
        setup: function() {
            subject = Ember.Object.createWithMixins( SlModelize );
        }
    });

    test( 'it mixes in', function() {
       ok( SlModelize.detect( subject ), 'Modelize function gets mixed in' );
    });
  });
define("dummy/tests/unit/routes/application-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor( 'route:demo', 'DemoRoute', {
      // Specify the other units that are required for this test.
      needs: [ 'model:foo', 'model:bar', 'model:car' ]
    });

    test( 'Modelizes Foo', function() {
      var appRoute  = this.subject(),
          Foo       = appRoute.container.lookupFactory( 'model:foo' ),
          Bar       = appRoute.container.lookupFactory( 'model:bar' ),
          Car       = appRoute.container.lookupFactory( 'model:car' ),
          modelized = appRoute.modelize( appRoute.fixture );

      ok( modelized.foo instanceof Foo, 'modelized.foo is instance of Foo model' );
    });

    test( 'Modelizes Bar', function() {
      var appRoute  = this.subject(),
          Foo       = appRoute.container.lookupFactory( 'model:foo' ),
          Bar       = appRoute.container.lookupFactory( 'model:bar' ),
          Car       = appRoute.container.lookupFactory( 'model:car' ),
          modelized = appRoute.modelize( appRoute.fixture );

      ok( modelized.foo.get('bar') instanceof Bar, 'modelized.foo.bar is instance of Bar model' );
    });

    test( 'Modelizes Car', function() {
      var appRoute  = this.subject(),
          Foo       = appRoute.container.lookupFactory( 'model:foo' ),
          Bar       = appRoute.container.lookupFactory( 'model:bar' ),
          Car       = appRoute.container.lookupFactory( 'model:car' ),
          modelized = appRoute.modelize( appRoute.fixture );

      ok( modelized.foo.get( 'bar.car.firstObject' ) instanceof Car, 'modelized.foo.bar.car[0] is instance of Car model' );
    });
  });
/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map