'use strict';

/**
 * @module examples/abstract-class
 * @description Abstract class example with WebPluginInterface implementation
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
 * @version 0.0.1
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import $ from 'jquery'; // for example
import 'some-jquery-plugin'; // for example
import { WebPluginInterface } from 'web-plugin-interface';

// ----------------------------------------
// Exports
// ----------------------------------------

/**
 * @implements WebPluginInterface
 */
export class SomeJqueryPluginAbstract extends WebPluginInterface {
	/**
	 * @param {jQuery} $container
	 * @param {Object} [clientSettings={}]
	 * @param {Object} [clientProps={}]
	 */
	constructor ($container, clientSettings = {}, clientProps = {}) {
		super();
		this.$container = $container;
		this.clientSettings = clientSettings;
		this.clientProps = clientProps;
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
		this.props = $.extends({}, this.defaultProps, this.clientProps);
		this.settings = $.extends({}, this.defaultSettings, this.clientSettings);

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

	// ***********************************
	// Custom extend implemented interface
	// ***********************************

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


