import { helper } from '@ember/component/helper';

const communityPropertyTypes = [
  'Dinamo Kiev',
  'Townhouse',
  'Apartment'
];

export function eventPropertyType([propertyType]) {
  if (communityPropertyTypes.includes(propertyType)) {
    return 'Private';
  }
  return 'Public';
}

export default helper(eventPropertyType);
