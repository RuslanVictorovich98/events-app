import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    description: DS.attr()
});
