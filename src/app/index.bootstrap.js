'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';
import '!!file-loader?name=[name]!../assets/CNAME';

// vendor files
import "./index.vendor";

// main App module
import "./index.module";

import "../assets/styles/sass/index.scss";

angular.element(document).ready(() => {
  angular.bootstrap(document, ['retina-admin'], {
    strictDi: true
  });
});
