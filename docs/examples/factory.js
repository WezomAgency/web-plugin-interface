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

import { SomeJqueryPluginAbstract } from './abstract-class';

// ----------------------------------------
// Exports
// ----------------------------------------

// A
export class FactoryA extends SomeJqueryPluginAbstract {
	/**
	 * @type {Object}
	 */
	get defaultSettings () {
		return {
			autoplay: false,
			speed: 750,
			fade: true
		}
	}

	/**
	 * @type {Object}
	 */
	get defaultProps () {
		return {
			stopAutoPlayIfOutView: false
		}
	}
}


// B
export class FactoryB extends SomeJqueryPluginAbstract {
	/**
	 * @protected
	 */
	_afterInitialize () {
		super._afterInitialize();
		// individual extend
		// ...
	}

	/**
	 * @type {Object}
	 */
	get defaultSettings () {
		return {
			speed: 600
		}
	}
}

// C
// ...
