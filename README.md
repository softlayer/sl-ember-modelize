# Sl-Modelize

## Take a object and Emberize it!

Sl-Modelize is an Ember Mixin.  Include it in your objects like so:

```javascript
Ember.Object.extend( ModelizeMixin, {});
```

You can now call `modelize` from within that object like so:

```javascript
 modelizedObj = this.modelize( pojo );
 ```

 Sl-Modelize will:

* Recursively resolve keys (via the container) on an object and check to see if a model exists that matches that key
* Create models for keys and store the key's contents in those models