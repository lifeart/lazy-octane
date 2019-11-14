import Component from '@glimmer/component';
import { setComponentTemplate } from '@ember/component';
import { hbs } from 'ember-cli-htmlbars';

class LazyHelloWoldComponent extends Component {
    constructor() {
        super(...arguments);
        import('lazy-octane/lazy-components/hello-world').then((Klass)=>{
            console.log(Klass);
        });
    }
}

export default setComponentTemplate(hbs`<div>ASYNC!</div>`, LazyHelloWoldComponent);