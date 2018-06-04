import Session from './session';
import Guest from './guest';
import ReservedGuests from './reservedGuests'

export default {
  session: new Session(),
  guest: new Guest(),
  reservedGuests: new ReservedGuests(),
};