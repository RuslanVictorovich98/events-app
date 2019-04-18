import Route from '@ember/routing/route';

export default Route.extend({
    model() {
      return this.store.findAll('event');
        // return [{
        //     id: 'grand-old-mansion',
        //     title: 'NSK Olimpiyskiy',
        //     owner: 'Dinamo Kiev',
        //     city: 'Kiev',
        //     category: 'Football stadium',
        //     image: 'https://imgclf.112.ua/original/2018/05/30/345595.jpeg?timestamp=1527678492',
        //     description: 'Olympiysky National Sports Complex - a multifunctional sports arena for football matches.'
        //   }, {
        //     id: 'urban-living',
        //     title: 'Palace of Sports',
        //     owner: '',
        //     city: 'Kiev',
        //     category: 'Sport complex',
        //     image: 'http://stadiums.at.ua/_nw/331/91511401.jpg',
        //     description: 'Palace of Sports - sport complex in Kiev.'
        //   }, {
        //     id: 'downtown-charm',
        //     title: 'Palace of Sports Builder',
        //     owner: 'Chercasy Monkeys',
        //     city: 'Chercasy',
        //     category: 'Basketball stadium',
        //     image: 'https://baza.zruchno.com.ua/upload/3aecdc61-3468-1f87-a955-5947d37314fc_obj_img_4_c',
        //     description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
        //   }];
    }
});
