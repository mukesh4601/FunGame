import * as Auth from './AuthActions';
import * as Mobile from './MobAuthAction';
import * as zone from './ZoneActions';
import * as newuser from './NewCustomer';
export default {
    ...Auth,
    ...Mobile,
    ...zone,
    ...newuser
};