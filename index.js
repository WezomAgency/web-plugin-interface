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

	bootstrap () {
		// code
	}

	beforeInitialize () {
		// code
	}

	initialize () {
		// code
	}

	afterInitialize () {
		// code
	}

	get defaults () {
		return {};
	}
}
