'use strict';

/**
 * @module examples/index
 * @description Initialize all factories
 * @author OlegDutchenko <dutchenko.o.dev@gmail.com>
 * @version 0.0.1
 */

// ----------------------------------------
// Imports
// ----------------------------------------

import $ from 'jquery';
import 'custom-jquery-methods/fn/has-inited-key'; // optional
import { SomeJqueryPluginAbstract } from './abstract-class';
import * as factory from './factory';

// ----------------------------------------
// Private
// ----------------------------------------

/**
 * @param {jQuery} $container
 * @param {string} key
 * @return {SomeJqueryPluginAbstract}
 * @private
 */
function _create ($container, key) {
	const {
		Factory,
		settings: clientSettings = {},
		props: clientProps = {}
	} = $container.data(key) || {};

	if (Factory in factory) {
		return new factory[Factory]($container, clientSettings, clientProps);
	}
	return new SomeJqueryPluginAbstract($container, clientSettings, clientProps);
}

// ----------------------------------------
// Exports
// ----------------------------------------

/**
 * @param {jQuery} $containers
 */
export function initialize ($containers) {
	$containers.each((i, container) => {
		const $container = $(container);

		// optional action
		// avoid duplicated initializing
		if ($container.hasInitedKey('someJqueryPluginIsInitialized')) {
			return true;
		}

		const instance = _create($container, 'initialize-some-jquery-plugin');
		instance.initialize();
	});
}
