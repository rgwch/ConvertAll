import {Aurelia} from 'aurelia-framework';
import 'materialize';

export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-materialize-bridge', bridge => bridge.useSelect().useCard());

    // Uncomment the line below to enable animation.
    // aurelia.use.plugin('aurelia-animator-css');

    // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
    // aurelia.use.plugin('aurelia-html-import-template-loader')

    return aurelia.start().then(() => aurelia.setRoot());
  
}
