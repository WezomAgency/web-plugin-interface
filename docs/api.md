# WebPluginInterface API

:arrow_left: [Docs](./index.md)

#### *Table of contents*

- [`constructor()`](#constructor)
- [_~~defaults~~_](#defaults)
- [`defaultSettings`](#defaultsettings)
- [`defaultProps`](#defaultprops)
- [`_setup()`](#_setup)
- [`_beforeInitialize()`](#_beforeinitialize)
- [`_afterInitialize()`](#_afterinitialize)
- [`initialize()`](#initialize)


### `constructor()`

Here we describe the future instances.:
- get data from arguments  
- declare instance properties

### `defaults`

> since v3.0.0 property renamed to `defaultSettings`

### `defaultSettings`

_`public`_  
_**`since v3.0.0`**_

A getter that returns an object with default options, settings, or configuration for your plugin.

### `defaultProps`

_`public`_  
_**`since v3.0.0`**_

A getter that returns an object with predefined props.  
Most often this is a list of options that are not included in the list of certain options of your plugin. But you need them for individual processing your options, settings, data, etc.


### `_setup()`

_`protected`_

The method is designed to prepare data for initialization.  
For example, setting up future plugin options, etc.

### `_beforeInitialize()`

_`protected`_

It describes the actions that must be performed before initializing the plug-in.  
For example, add the CSS class `.is-ready` to the HTML element to which your plugin will be applied.

### `_afterInitialize()`

_`protected`_

Here we can describe the actions that should be performed after the initialization of the plugin.  
For example, add an additional handler to scroll or resize window events, which will update the parameters of your current plugin.

### `initialize()`

_`public`_

Directly launch your plugin.

---

:arrow_left: [Docs](./index.md) | :arrow_up: [top](#readme)

