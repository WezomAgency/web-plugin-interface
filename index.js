'use strict';

/**
 * @module WebPluginInterface
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
 */

/**
 * @interface
 */
export class WebPluginInterface {
	constructor () {
		console.log('implement abstract constructor');
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
