import Ember from 'ember';
import SlModelize from 'sl-modelize/mixins/modelize';

var subject;

module( 'Unit - mixins:modelize', {
    setup: function() {
        subject = Ember.Object.createWithMixins( SlModelize );
    }
});

test( 'it mixes in', function() {
   ok( SlModelize.detect( subject ), 'Modelize function gets mixed in' );
});