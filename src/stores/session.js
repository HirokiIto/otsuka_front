import { observable, action } from 'mobx';
import { firebase } from '../utils/firebase'

export default class Session {
  @observable user = null;
  @observable drawer = false; // side menuが開いているかどうか

  @action.bound
  setUser(authUser) {
    this.user = authUser;
  }

  @action.bound
  async checkLogin() {
    /*
     * { uid, displayName } = authUser
     */
    await new Promise(resolve => {
      firebase.auth.onAuthStateChanged(authUser => {
        authUser
          ? this.user = authUser
          : this.user = null;
        resolve();
      });
    });
  }

  @action.bound
  toggleDrawer() {
    this.drawer = !this.drawer
  }

}