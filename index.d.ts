export abstract class WebPluginInterface {
	public get defaultSettings (): {[p: string]: any}
	public get defaultProps (): {[p: string]: any}
	protected _setup (): any
	protected _beforeInitialize (): any
	protected _afterInitialize (): any
	protected _initialize (): any
	public initialize (): any
}
