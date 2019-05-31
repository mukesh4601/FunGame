import * as Auth from './AuthActions';
import * as Mobile from './MobAuthAction';
import * as zone from './ZoneActions';
export default {
    ...Auth,
    ...Mobile,
    ...zone
};