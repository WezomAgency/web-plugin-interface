## Usage example

:arrow_left: [Docs](../index.md)

Abstract class example with interface implementation

```js
// some-plugin-init/abstract.js

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
     * @param {Object} [customProps={}]
     */
    constructor ($container, customSettings = {}, customProps = {}) {
        super();
        this.$container = $container;
        this.customSettings = customSettings;
        this.settings = {};
        this.props = {};
        this.readyCssClass = 'is-ready';
        this.initializedCssClass = 'is-initialized';
    }
    
    /**
     * @type {Object}
     */
    get defaultSettings () {
        return {
            // an example of some options of your plugin
            autoplay: true,
            speed: 500
        }
    }

    /**
     * @type {Object}
     */
    get defaultProps () {
        return {
            // an example of options that is native for your plugin
            stopAutoPlayIfOutView: true
        }
    }

    /**
     * @protected
     */
    _setup () {
        this.props = $.extends({}, this.defaultProps, this.customProps);
        this.settings = $.extends({}, this.defaultSettings, this.customSettings);
        
        // props example
        if (this.props.stopAutoPlayIfOutView) {
            this.settings.autoplay = this.detectIfInView;
        }
    }

    /**
     * @protected
     */
    _beforeInitialize () {
        this.$container.addClass(this.readyCssClass);
    }

    /**
     * @protected
     */
    _afterInitialize () {
        this.$container.addClass(this.initializedCssClass);
        
        // props example
        if (this.props.stopAutoPlayIfOutView) {
            this._autoplayInViewObserve();
        }
    }

    initialize () {
        this._setup();
        this._beforeInitialize();

        // fire up
        this.$container.someJqueryPlugin(this.settings);

        this._afterInitialize();
    }

    // ------------------------------
    // Custom extend implemented interface
    // ------------------------------
    
    /**
     * @type {boolean}
     */  
    get detectIfInView () {
        // your code
    }
    
    /**
     * @protected
     */
    _autoplayInViewObserve () {
        // your code
    }
}
```

---

:arrow_left: [Docs](../index.md) | :arrow_up: [top](#readme)
