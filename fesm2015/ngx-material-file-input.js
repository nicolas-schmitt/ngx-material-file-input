import { InjectionToken, Component, Input, ElementRef, HostBinding, Renderer2, HostListener, Optional, Self, Pipe, Inject, NgModule } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Optional token to provide custom configuration to the module
 */
const /** @type {?} */ NGX_MAT_FILE_INPUT_CONFIG = new InjectionToken('ngx-mat-file-input.config');
/**
 * Provide additional configuration to dynamically customize the module injection
 */
class FileInputConfig {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The files to be uploaded
 */
class FileInput {
    /**
     * @param {?} _files
     * @param {?=} delimiter
     */
    constructor(_files, delimiter = ', ') {
        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = this._files.map((f) => f.name).join(delimiter);
    }
    /**
     * @return {?}
     */
    get files() {
        return this._files || [];
    }
    /**
     * @return {?}
     */
    get fileNames() {
        return this._fileNames;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileInputComponent {
    /**
     * @see https://angular.io/api/forms/ControlValueAccessor
     * @param {?} ngControl
     * @param {?} fm
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(ngControl, fm, _elementRef, _renderer) {
        this.ngControl = ngControl;
        this.fm = fm;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.stateChanges = new Subject();
        this.focused = false;
        this.controlType = 'file-input';
        this.autofilled = false;
        this._required = false;
        this.id = `ngx-mat-file-input-${FileInputComponent.nextId++}`;
        this.describedBy = '';
        this._onChange = (_) => { };
        this._onTouched = () => { };
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        fm.monitor(_elementRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            this.stateChanges.next();
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    setDescribedByIds(ids) {
        this.describedBy = ids.join(' ');
    }
    /**
     * @return {?}
     */
    get value() {
        return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
    }
    /**
     * @param {?} fileInput
     * @return {?}
     */
    set value(fileInput) {
        if (fileInput) {
            this.writeValue(fileInput.files);
            this.stateChanges.next();
        }
    }
    /**
     * @return {?}
     */
    get placeholder() {
        return this._placeholder;
    }
    /**
     * @param {?} plh
     * @return {?}
     */
    set placeholder(plh) {
        this._placeholder = plh;
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get empty() {
        return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
    }
    /**
     * @return {?}
     */
    get shouldLabelFloat() {
        return this.focused || !this.empty || this.valuePlaceholder !== undefined;
    }
    /**
     * @return {?}
     */
    get required() {
        return this._required;
    }
    /**
     * @param {?} req
     * @return {?}
     */
    set required(req) {
        this._required = coerceBooleanProperty(req);
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get isDisabled() {
        return this.disabled;
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this._elementRef.nativeElement.disabled;
    }
    /**
     * @param {?} dis
     * @return {?}
     */
    set disabled(dis) {
        this.setDisabledState(coerceBooleanProperty(dis));
        this.stateChanges.next();
    }
    /**
     * @return {?}
     */
    get errorState() {
        return this.ngControl.errors !== null && this.ngControl.touched;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onContainerClick(event) {
        if ((/** @type {?} */ (event.target)).tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();
            this.focused = true;
            this.open();
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    change(event) {
        const /** @type {?} */ fileList = event.target.files;
        const /** @type {?} */ fileArray = [];
        if (fileList) {
            for (let /** @type {?} */ i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
            }
        }
        this.value = new FileInput(fileArray);
        this._onChange(this.value);
    }
    /**
     * @return {?}
     */
    blur() {
        this.focused = false;
        this._onTouched();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.multiple = coerceBooleanProperty(this.multiple);
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
        }
    }
    /**
     * @return {?}
     */
    get fileNames() {
        return this.value ? this.value.fileNames : this.valuePlaceholder;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this._elementRef.nativeElement);
    }
}
FileInputComponent.nextId = 0;
FileInputComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'ngx-mat-file-input',
                template: `<input #input id="md-input-file" type="file" [attr.multiple]="multiple? '' : null">
<span class="filename">{{ fileNames }}</span>
`,
                styles: [`:host{display:inline-block}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block}`],
                providers: [{ provide: MatFormFieldControl, useExisting: FileInputComponent }]
            },] },
];
/** @nocollapse */
FileInputComponent.ctorParameters = () => [
    { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
    { type: FocusMonitor },
    { type: ElementRef },
    { type: Renderer2 }
];
FileInputComponent.propDecorators = {
    autofilled: [{ type: Input }],
    valuePlaceholder: [{ type: Input }],
    multiple: [{ type: Input }],
    id: [{ type: HostBinding }],
    describedBy: [{ type: HostBinding, args: ['attr.aria-describedby',] }],
    value: [{ type: Input }],
    placeholder: [{ type: Input }],
    shouldLabelFloat: [{ type: HostBinding, args: ['class.mat-form-field-should-float',] }],
    required: [{ type: Input }],
    isDisabled: [{ type: HostBinding, args: ['class.file-input-disabled',] }],
    disabled: [{ type: Input }],
    errorState: [{ type: Input }],
    change: [{ type: HostListener, args: ['change', ['$event'],] }],
    blur: [{ type: HostListener, args: ['focusout',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ByteFormatPipe {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.unit = config ? config.sizeUnit : 'Byte';
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        if (parseInt(value, 10) >= 0) {
            value = this.formatBytes(+value, +args);
        }
        return value;
    }
    /**
     * @param {?} bytes
     * @param {?=} decimals
     * @return {?}
     */
    formatBytes(bytes, decimals) {
        if (bytes === 0) {
            return '0 ' + this.unit;
        }
        const /** @type {?} */ B = this.unit.charAt(0);
        const /** @type {?} */ k = 1024;
        const /** @type {?} */ dm = decimals || 2;
        const /** @type {?} */ sizes = [
            this.unit,
            'K' + B,
            'M' + B,
            'G' + B,
            'T' + B,
            'P' + B,
            'E' + B,
            'Z' + B,
            'Y' + B
        ];
        const /** @type {?} */ i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }
}
ByteFormatPipe.decorators = [
    { type: Pipe, args: [{
                name: 'byteFormat'
            },] },
];
/** @nocollapse */
ByteFormatPipe.ctorParameters = () => [
    { type: FileInputConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_FILE_INPUT_CONFIG,] }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MaterialFileInputModule {
}
MaterialFileInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [FileInputComponent, ByteFormatPipe],
                providers: [FocusMonitor],
                exports: [FileInputComponent, ByteFormatPipe]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FileValidator;
(function (FileValidator) {
    /**
     * Function to control content of files
     *
     * @param {?} bytes max number of bytes allowed
     *
     * @return {?}
     */
    function maxContentSize(bytes) {
        return (control) => {
            const /** @type {?} */ size = control && control.value ? (/** @type {?} */ (control.value)).files.map(f => f.size).reduce((acc, i) => acc + i, 0) : 0;
            const /** @type {?} */ condition = bytes >= size;
            return condition ? null : {
                maxContentSize: {
                    actualSize: size,
                    maxSize: bytes
                }
            };
        };
    }
    FileValidator.maxContentSize = maxContentSize;
})(FileValidator || (FileValidator = {}));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

export { NGX_MAT_FILE_INPUT_CONFIG, MaterialFileInputModule, ByteFormatPipe, FileValidator, FileInput, FileInputComponent as ɵb, FileInputConfig as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi9tb2RlbC9maWxlLWlucHV0LWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQvbGliL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwudHMiLCJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvcGlwZS9ieXRlLWZvcm1hdC5waXBlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvbWF0ZXJpYWwtZmlsZS1pbnB1dC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi92YWxpZGF0b3IvZmlsZS12YWxpZGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25hbCB0b2tlbiB0byBwcm92aWRlIGN1c3RvbSBjb25maWd1cmF0aW9uIHRvIHRoZSBtb2R1bGVcbiAqL1xuZXhwb3J0IGNvbnN0IE5HWF9NQVRfRklMRV9JTlBVVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48RmlsZUlucHV0Q29uZmlnPihcbiAgJ25neC1tYXQtZmlsZS1pbnB1dC5jb25maWcnXG4pO1xuXG4vKipcbiAqIFByb3ZpZGUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIHRvIGR5bmFtaWNhbGx5IGN1c3RvbWl6ZSB0aGUgbW9kdWxlIGluamVjdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFVuaXQgdXNlZCB3aXRoIHRoZSBCeXRlRm9ybWF0UGlwZSwgZGVmYXVsdCB2YWx1ZSBpcyAqQnl0ZSouXG4gICAqIFRoZSBmaXJzdCBsZXR0ZXIgaXMgdXNlZCBmb3IgdGhlIHNob3J0IG5vdGF0aW9uLlxuICAgKi9cbiAgc2l6ZVVuaXQ6IHN0cmluZztcbn1cbiIsIi8qKlxuICogVGhlIGZpbGVzIHRvIGJlIHVwbG9hZGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXQge1xuICBwcml2YXRlIF9maWxlTmFtZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWxlczogRmlsZVtdLCBwcml2YXRlIGRlbGltaXRlcjogc3RyaW5nID0gJywgJykge1xuICAgIHRoaXMuX2ZpbGVOYW1lcyA9IHRoaXMuX2ZpbGVzLm1hcCgoZjogRmlsZSkgPT4gZi5uYW1lKS5qb2luKGRlbGltaXRlcik7XG4gIH1cblxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzIHx8IFtdO1xuICB9XG5cbiAgZ2V0IGZpbGVOYW1lcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWxlTmFtZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpbGVJbnB1dCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1tYXQtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNpbnB1dCBpZD1cIm1kLWlucHV0LWZpbGVcIiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlPyAnJyA6IG51bGxcIj5cbjxzcGFuIGNsYXNzPVwiZmlsZW5hbWVcIj57eyBmaWxlTmFtZXMgfX08L3NwYW4+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3Q6bm90KC5maWxlLWlucHV0LWRpc2FibGVkKXtjdXJzb3I6cG9pbnRlcn1pbnB1dHt3aWR0aDowO2hlaWdodDowO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX0uZmlsZW5hbWV7ZGlzcGxheTppbmxpbmUtYmxvY2t9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEZpbGVJbnB1dENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBNYXRGb3JtRmllbGRDb250cm9sPEZpbGVJbnB1dD4sIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZmlsZS1pbnB1dCc7XG5cbiAgQElucHV0KCkgYXV0b2ZpbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWVQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtbWF0LWZpbGUtaW5wdXQtJHtGaWxlSW5wdXRDb21wb25lbnQubmV4dElkKyt9YDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBGaWxlSW5wdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5lbXB0eSA/IG51bGwgOiBuZXcgRmlsZUlucHV0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCBbXSk7XG4gIH1cbiAgc2V0IHZhbHVlKGZpbGVJbnB1dDogRmlsZUlucHV0IHwgbnVsbCkge1xuICAgIGlmIChmaWxlSW5wdXQpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlSW5wdXQuZmlsZXMpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHBsaCkge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxoO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5IHx8IHRoaXMudmFsdWVQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpbGUtaW5wdXQtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZXJyb3JzICE9PSBudWxsICYmIHRoaXMubmdDb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gICAgZm0ubW9uaXRvcihfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgb2JqKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICBpZiAoZmlsZUxpc3QpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3IEZpbGVJbnB1dChmaWxlQXJyYXkpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm11bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHRoaXMubXVsdGlwbGUpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsZU5hbWVzIDogdGhpcy52YWx1ZVBsYWNlaG9sZGVyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZpbGVJbnB1dENvbmZpZyxcbiAgTkdYX01BVF9GSUxFX0lOUFVUX0NPTkZJR1xufSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0LWNvbmZpZy5tb2RlbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIEJ5dGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgdW5pdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChOR1hfTUFUX0ZJTEVfSU5QVVRfQ09ORklHKVxuICAgIHByaXZhdGUgY29uZmlnOiBGaWxlSW5wdXRDb25maWdcbiAgKSB7XG4gICAgdGhpcy51bml0ID0gY29uZmlnID8gY29uZmlnLnNpemVVbml0IDogJ0J5dGUnO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmIChwYXJzZUludCh2YWx1ZSwgMTApID49IDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXRCeXRlcygrdmFsdWUsICthcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRCeXRlcyhieXRlczogbnVtYmVyLCBkZWNpbWFscz86IG51bWJlcikge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwICcgKyB0aGlzLnVuaXQ7XG4gICAgfVxuICAgIGNvbnN0IEIgPSB0aGlzLnVuaXQuY2hhckF0KDApO1xuICAgIGNvbnN0IGsgPSAxMDI0O1xuICAgIGNvbnN0IGRtID0gZGVjaW1hbHMgfHwgMjtcbiAgICBjb25zdCBzaXplcyA9IFtcbiAgICAgIHRoaXMudW5pdCxcbiAgICAgICdLJyArIEIsXG4gICAgICAnTScgKyBCLFxuICAgICAgJ0cnICsgQixcbiAgICAgICdUJyArIEIsXG4gICAgICAnUCcgKyBCLFxuICAgICAgJ0UnICsgQixcbiAgICAgICdaJyArIEIsXG4gICAgICAnWScgKyBCXG4gICAgXTtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEZpbGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCeXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZS9ieXRlLWZvcm1hdC5waXBlJztcbmltcG9ydCB7IEZpbGVJbnB1dENvbmZpZyB9IGZyb20gJy4vbW9kZWwvZmlsZS1pbnB1dC1jb25maWcubW9kZWwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGaWxlSW5wdXRDb21wb25lbnQsIEJ5dGVGb3JtYXRQaXBlXSxcbiAgcHJvdmlkZXJzOiBbRm9jdXNNb25pdG9yXSxcbiAgZXhwb3J0czogW0ZpbGVJbnB1dENvbXBvbmVudCwgQnl0ZUZvcm1hdFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRmlsZUlucHV0TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSAnLi4vbW9kZWwvZmlsZS1pbnB1dC5tb2RlbCc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgRmlsZVZhbGlkYXRvciB7XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBjb250cm9sIGNvbnRlbnQgb2YgZmlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBieXRlcyBtYXggbnVtYmVyIG9mIGJ5dGVzIGFsbG93ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1heENvbnRlbnRTaXplKGJ5dGVzOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gY29udHJvbCAmJiBjb250cm9sLnZhbHVlID8gKGNvbnRyb2wudmFsdWUgYXMgRmlsZUlucHV0KS5maWxlcy5tYXAoZiA9PiBmLnNpemUpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKSA6IDA7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBieXRlcyA+PSBzaXplO1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IG51bGwgOiB7XG4gICAgICAgICAgICAgICAgbWF4Q29udGVudFNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZTogYnl0ZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUtBLHVCQUFhLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUN6RCwyQkFBMkIsQ0FDNUIsQ0FBQzs7OztBQUtGO0NBTUM7Ozs7Ozs7OztBQ2ZEOzs7OztJQUdFLFlBQW9CLE1BQWMsRUFBVSxZQUFvQixJQUFJO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4RTs7OztJQUVELElBQUksS0FBSztRQUNQLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUM7S0FDMUI7Ozs7SUFFRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7S0FDeEI7Q0FDRjs7Ozs7O0FDakJEOzs7Ozs7OztJQTJHRSxZQUdTLFNBQW9CLEVBQ25CLElBQ0EsYUFDQTtRQUhELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUU7UUFDRixnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUzs0QkE1RkosSUFBSSxPQUFPLEVBQVE7dUJBQ3hCLEtBQUs7MkJBQ0QsWUFBWTswQkFFSyxLQUFLO3lCQUdoQixLQUFLO2tCQUtMLHNCQUFzQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRTsyQkFDbkIsRUFBRTt5QkEwRmxDLENBQUMsQ0FBTSxRQUFPOzBCQUNiLFNBQVE7UUFWM0IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsR0FBRyxJ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