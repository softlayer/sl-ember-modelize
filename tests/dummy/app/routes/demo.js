import Ember from 'ember';
import SlModelize from 'sl-ember-modelize/mixins/modelize';

export default Ember.Route.extend(SlModelize, {

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
