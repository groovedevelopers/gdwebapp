import { isObservable } from 'rxjs';

export const ObservableMixin = (Base) =>
  class extends Base {
    subs;

    connectedCallback() { super.connectedCallback()
      this.subs = [];
    }

    addToSubscription(obs) {
      if (isObservable(obs)) {
        this.subs.push(obs.subscribe());
      }
    }

    disconnectedCallback() {

      this.subs.forEach((element) => {
        element.unsubscribe();
      });
console.log('i am disconnected')
      super.disconnectedCallback()
    }
  };
