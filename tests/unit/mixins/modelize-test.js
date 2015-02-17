import Ember from 'ember';
import SlModelize from 'sl-ember-modelize/mixins/modelize';

var subject;

module( 'Unit - mixins:modelize', {
    beforeEach: function() {
        subject = Ember.Object.createWithMixins( SlModelize );
    }
});

test( 'it mixes in', function( assert ) {
    assert.ok( SlModelize.detect( subject ), 'Modelize function gets mixed in' );
});