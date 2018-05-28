# Embeddable React Widget

Easy creation of an embeddable widget.

## Goal

The create-react-app of embeddable widgets.

## Features

* Full ES6/ES2015 support (with Babel)
* Package fonts, css, json, javascripts together into one simple repository (with Webpack)
* No css tyling conflicts between the host page and the widget (with https://github.com/premasagar/cleanslate)
* User theming of widget
* Obfuscating of the widget code

## What is an embeddable widget?

* Usable using a simple `<script>` tag
* Configurable with code
* Themable

## Why not in an iframe?

* Interaction between the frame and the hosting page is tricky and not recommended
* You can only display content within the iframe
* iframe and content resizing is impossible
* iframe sandboxing can result in missing functionalities

## Roadmap

- [x] Widget as react app - index.html works (webpack, babel, react)
- [ ] React widget (widget builder)
- [ ] Webpack changed to output a library
- [ ] Theming support
- [ ] Obfuscation
- [ ] Storyboard and docs

# Links
* https://github.com/premasagar/cleanslate
* https://github.com/krasimir/third-party-react-widget
* https://github.com/jenyayel/js-widget
* https://github.com/anakinjay/react-widget-starter
* https://webpack.js.org/guides/author-libraries/
* https://github.com/webpack-contrib/webpack-serve
* https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
* https://github.com/facebook/create-react-app/blob/next/packages/react-scripts/config/webpack.config.prod.js
* https://github.com/webpack-contrib/purifycss-webpack
* https://medium.com/quick-code/from-zero-to-deploy-set-up-react-stack-with-webpack-3-20b57d6cb8d7
* https://medium.com/dailyjs/building-a-react-component-with-webpack-publish-to-npm-deploy-to-github-guide-6927f60b3220
* http://krasimirtsonev.com/blog/article/javascript-library-starter-using-webpack-es6
* https://github.com/javascript-obfuscator/webpack-obfuscator
* https://github.com/tsileo/embedded-js-widget
* https://thomassileo.name/blog/2014/03/27/building-an-embeddable-javascript-widget-third-party-javascript/

## Best
* https://www.robinwieruch.de/minimal-react-webpack-babel-setup/#hot-module-replacement
* https://codeburst.io/building-react-widget-libraries-using-webpack-e0a140c16ce4
* https://github.com/timarney/react-app-rewired
