import Landing from './components/Landing';
import About from './components/About';
import Checkin from './containers/Checkin';
import Account from './containers/Account';
import Calendar from './containers/Account/Calendar';
import Security from './containers/Account/Security';
import GuestHistory from './containers/Account/GuestHistory';
import Signup from './components/AuthWithFirebase/Signup';
import Signin from './components/AuthWithFirebase/Signin';
import PasswordForget from './components/AuthWithFirebase/PasswordForget';

export const LANDING = '/';
export const CHECK_IN = '/checkin';
export const ABOUT = '/about';
export const ACCOUNT = '/account';
export const CALENDAR = '/account/calendar';
export const SECURITY = '/account/security';
export const GUESTHISTORY = '/account/guesthistory';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const PASSWORD_FORGET = '/pw-forget';

const routes = [
  {
    path: '/',
    exact: true,
    component: Landing
  },
  {
    path: '/checkin',
    exact: true,
    component: Checkin
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/account',
    exact: true,
    component: Account
  },
  {
    path: '/account/calendar',
    exact: true,
    component: Calendar
  },
  {
    path: '/account/security',
    exact: true,
    component: Security
  },
  {
    path: '/account/guesthistory',
    exact: true,
    component: GuestHistory
  },
  {
    path: '/signup',
    exact: true,
    component: Signup
  },
  {
    path: '/signin',
    exact: true,
    component: Signin
  },
  {
    path: '/pw-forget',
    exact: true,
    component: PasswordForget
  },

];

export default routes;