# web-plugin-interface

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/WezomAgency/web-plugin-interface/blob/master/LICENSE)
[![npm](https://img.shields.io/badge/npm-install-orange.svg)](https://www.npmjs.com/package/web-plugin-interface)
[![Javascript Style Guide](https://img.shields.io/badge/code_style-wezom_relax-red.svg)](https://github.com/WezomAgency/eslint-config-wezom-relax#readme)

---

A simple interface for implementing abstract factories.  
These factories allow you to remove routine work, as well as to simplify the preparation and initialization of most web plug-ins: sliders, carousels, pop-up windows, etc.

Although in JavaScript, interfaces are not yet implemented by means of the syntax of the language, but we can follow the basic principles `Interface ⇒ Abstract ⇒ Factory`.

When creating an abstraction, we must implement all the methods and properties of the interface. Which are initially empty and have no logic and code. 
The basis must be laid in an abstract class and brought to a final and typical concept in the classes of factories.

`WebPluginInterface` has the core methods and properties that are key to working with most web plugins.
Below is a list of these methods and properties. Then you can see an example implementation.

- `constructor()`
- `_setup()`
- `_beforeInitialize()`
- `_afterInitialize()`
- `initialize()`
- `defaults`


### `constructor()`

Here we describe the future instances.:
- get data from arguments  
- declare instance properties


### `_setup()`

`protected`

The method is designed to prepare data for initialization.  
For example, setting up future plugin options, etc.

### `_beforeInitialize()`

`protected`

It describes the actions that must be performed before initializing the plug-in.  
For example, add the CSS class `.is-ready` to the HTML element to which your plugin will be applied.

### `_afterInitialize()`

`protected`

Here we can describe the actions that should be performed after the initialization of the plugin.  
For example, add an additional handler to scroll or resize window events, which will update the parameters of your current plugin.

### `initialize()`

`public`

Directly launch your plugin.

### `defaults`

`public`

A getter that returns an object with default options, settings, or configuration for your plugin.

## Usage example

```js
import $ from 'jquery'; // for example
import 'some-jquery-plugin'; // for example
import { WebPluginInterface } from 'web-plugin-interface';

/**
* @implements WebPluginInterface
*/
export class SomeJqueryPluginAbstract extends WebPluginInterface {
    /**
     * @param {jQuery} $container
     * @param {Object} [customSettings={}]
     */
    constructor ($container, customSettings = {}) {
        super();
        this.$container = $container;
        this.customSettings = customSettings;
        this.settings = {};
        this.readyCssClass = 'is-ready';
        this.initializedCssClass = 'is-initialized';
    }

    /** @protected */
    _setup () {
        this.settings = $.extends({}, this.defaults, this.customSettings);
    }

    /** @protected */
    _beforeInitialize(){
        this.$container.addClass(this.readyCssClass);
    }

    /** @protected */
    _afterInitialize(){
        this.$container.addClass(this.initializedCssClass)
    }

    /** @public */
    initialize(){
        this.$container.someJqueryPlugin(this.settings);
    }
    
    /**
     * @public
     * @returns Object
     */
    get defaults (){
        return {
            // an example of some options of your plugin
            autoplay: false,
            speed: 500
        }
    }
}
```
