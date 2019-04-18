import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        filterByCity(param) {
            if (param !== '') {
                return this.store
                    .query('event', { city: param}).then((results) => {
                        return {query: param, results: results};
                    });
            } else {
                return this.store
                    .findAll('event').then((results) => {
                        return {query: param, results: results};
                    });
            }
        }
    }
});
