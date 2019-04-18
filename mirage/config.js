export default function() {
  this.namespace = '/api';

  let events = [{
    type: 'events',
    id: 'grand-old-mansion',
    attributes: {
      title: 'NSK Olimpiyskiy',
        owner: 'Dinamo Kiev',
        city: 'Kiev',
        category: 'Football stadium',
        image: 'https://imgclf.112.ua/original/2018/05/30/345595.jpeg?timestamp=1527678492',
        description: 'Olympiysky National Sports Complex - a multifunctional sports arena for football matches.'
    }
  }, {
    type: 'events',
    id: 'urban-living',
    attributes: {
      title: 'Palace of Sports',
          owner: '',
          city: 'Kiev',
          category: 'Sport complex',
          image: 'http://stadiums.at.ua/_nw/331/91511401.jpg',
          description: 'Palace of Sports - sport complex in Kiev.'
    }
  }, {
    type: 'events',
    id: 'downtown-charm',
    attributes: {
      title: 'Palace of Sports Builder',
        owner: 'Chercasy Monkeys',
        city: 'Chercasy',
        category: 'Basketball stadium',
        image: 'https://baza.zruchno.com.ua/upload/3aecdc61-3468-1f87-a955-5947d37314fc_obj_img_4_c',
        description: 'Convenience is at your doorstep with this charming downtown rental. Great restaurants and active night life are within a few feet.'
    }
  }];
  
  this.get('/events', function(db, request) {
    if(request.queryParams.city !== undefined) {
      let filteredEvents = events.filter(function(i) {
        return i.attributes.city.toLowerCase().indexOf(request.queryParams.city.toLowerCase()) !== -1;
      });
      return { data: filteredEvents };
    } else {
      return { data: events };
    }
  });

  };
  
