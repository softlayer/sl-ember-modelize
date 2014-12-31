
[![Latest Release](https://img.shields.io/github/release/softlayer/sl-ember-modelize.svg)](https://github.com/softlayer/sl-ember-modelize/releases) ![Ember CLI version](https://img.shields.io/badge/ember%20cli-0.1.5-orange.svg) [![License](https://img.shields.io/npm/l/sl-ember-modelize.svg)](LICENSE.md) [![Downloads](https://img.shields.io/npm/dm/sl-ember-modelize.svg)](https://www.npmjs.com/package/sl-ember-modelize)

[![Dependencies](https://img.shields.io/david/softlayer/sl-ember-modelize.svg)](https://david-dm.org/softlayer/sl-ember-modelize) [![Dev Dependencies](https://img.shields.io/david/dev/softlayer/sl-ember-modelize.svg)](https://david-dm.org/softlayer/sl-ember-modelize#info=devDependencies)

[![Build Status](https://img.shields.io/travis/softlayer/sl-ember-modelize/develop.svg)](https://travis-ci.org/softlayer/sl-ember-modelize) [![Code Climate](https://img.shields.io/codeclimate/github/softlayer/sl-ember-modelize.svg)](https://codeclimate.com/github/softlayer/sl-ember-modelize)

---

# What sl-ember-modelize is

A mixin that will take a Plain Old Javascript Object (POJO) and turn it into a series of nested model objects, based on the models registered in your application's container.  This works for objects stored on keys and on arrays of objects stored on keys too.  This mixin will:

* Recursively resolve keys (via the container) on an object and check to see if a model exists that matches that key
* Create models for keys and store the key's contents in those models

---

# Demo

## Live

[http://softlayer.github.io/sl-ember-modelize/#/demo](http://softlayer.github.io/sl-ember-modelize/#/demo)

## Development Environment

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* View the demo at http://localhost:4200

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

---

# How to use this addon in your application

## Install this addon as a Node module

```
ember install:addon sl-ember-modelize
```

## Use the mixin

Include it in your objects like so:

```javascript
import ModelizeMixin from 'sl-ember-modelize/mixins/modelize';

Ember.Object.extend( ModelizeMixin, {} );
```

You can now call `modelize` from within that object like so:

```javascript
modelizedObj = this.modelize( POJO );
```

---

# How it works

Consider this fixture:

```
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
}
```

Passing this POJO through the *modelize* function will cause the object stored in the values for *foo*, *bar*, and
the array stored on *car* to be replaced with the models defined for those key names in the app.  *Modelize* looks up
models via Ember's container and if a model is found then it is instantiated with the values from the fixture.

---

# Versioning
Employs [Semantic Versioning 2.0.0](http://semver.org/)

---

# Contribution
[See CONTRIBUTING.md](CONTRIBUTING.md)

---

# Copyright and License
sl-ember-modelize and its source files are Copyright © 2014 [SoftLayer Technologies, Inc.](http://www.softlayer.com/) The
software is [MIT Licensed](LICENSE.md)

---

# Warranty
This software is provided “as is” and without any express or implied warranties, including, without limitation, the
implied warranties of merchantability and fitness for a particular purpose.
