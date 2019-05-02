'use strict';

/**
 * @module WebPluginInterface
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
 * @version 3.0.0
 */

/**
 * @interface
 */
export class WebPluginInterface {
	constructor () { // eslint-disable-line no-useless-constructor
		// code
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

	initialize () {
		// code
	}

	get defaultSettings () {
		return {};
	}

	get defaultProps () {
		return {};
	}
}
