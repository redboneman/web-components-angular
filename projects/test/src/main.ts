import {createApplication} from '@angular/platform-browser';
import {createCustomElement} from '@angular/elements';
import {SomeComponentComponent} from './some-component/some-component.component';
import 'zone.js';

(async () => {
  const app = await createApplication({
    providers: [], // глобальные провайдеры — то, что провайдится в root.
  });

  function addCustomElement(component: any, name: string) {
    const element = createCustomElement(component, {
      injector: app.injector,
    });
    customElements.define(name, element);
  }

  addCustomElement(SomeComponentComponent, 'some-component');
})();
