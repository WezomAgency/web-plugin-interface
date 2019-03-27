'use strict';

/**
 * @module WebPluginInterface
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
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

	get defaults () {
		return {};
	}
}
