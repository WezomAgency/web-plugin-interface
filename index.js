'use strict';

/**
 * @module WebPluginInterface
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
 * @version 3.0.3
 */

/**
 * @interface
 */
export class WebPluginInterface {
	constructor () { // eslint-disable-line no-useless-constructor
		// code
	}

	/**
	 * @type {Object}
	 */
	get defaultSettings () {
		return {};
	}

	/**
	 * @type {Object}
	 */
	get defaultProps () {
		return {};
	}

	/**
	 * @protected
	 */
	_setup () {
		// code
	}

	/**
	 * @protected
	 */
	_beforeInitialize () {
		// code
	}

	/**
	 * @protected
	 */
	_afterInitialize () {
		// code
	}

	/**
	 * @protected
	 */
	_initialize () {
		// code
	}

	/**
	 * @public
	 */
	initialize () {
		// code
	}
}
