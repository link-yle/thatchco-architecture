import type { Map } from '../types/map';

class MapApi {
  getMaps(): Promise<Map[]> {
    const maps: Map[] = [
      {
        id: 1,
        image: '/static/maps/1.jpg',
        label: 'Brazil'
      },
      {
        id: 2,
        image: '/static/maps/2.jpg',
        label: 'Italy'
      },
      {
        id: 3,
        image: '/static/maps/2.jpg',
        label: 'Italy'
      },
      {
        id: 4,
        image: '/static/maps/2.jpg',
        label: 'Italy'
      },
      {
        id: 5,
        image: '/static/maps/1.jpg',
        label: 'Brazil'
      },
      {
        id: 6,
        image: '/static/maps/1.jpg',
        label: 'Brazil'
      },
    ];

    return Promise.resolve(maps);
  }
}

export const mapApi = new MapApi();
