import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
export default class LazyHelloWoldComponent extends Component {
    @tracked isLoaded = false;
    componentName = 'hello-wold'
    constructor() {
        super(...arguments);
        this.loadLazyComponent();
    }
    loadLazyComponent() {
        import('./../lazy-components/hello-world').then((Klass)=>{
            // eslint-disable-next-line no-undef
            define(`lazy-octane/components/${this.componentName}`, function() {
                return {
                    __esModule: true,
                    default: Klass
                }
            });
        });
    }
}
