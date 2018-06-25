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
var /** @type {?} */ NGX_MAT_FILE_INPUT_CONFIG = new InjectionToken('ngx-mat-file-input.config');
/**
 * Provide additional configuration to dynamically customize the module injection
 */
var  /**
 * Provide additional configuration to dynamically customize the module injection
 */
FileInputConfig = /** @class */ (function () {
    function FileInputConfig() {
    }
    return FileInputConfig;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The files to be uploaded
 */
var  /**
 * The files to be uploaded
 */
FileInput = /** @class */ (function () {
    function FileInput(_files, delimiter) {
        if (delimiter === void 0) { delimiter = ', '; }
        this._files = _files;
        this.delimiter = delimiter;
        this._fileNames = this._files.map(function (f) { return f.name; }).join(delimiter);
    }
    Object.defineProperty(FileInput.prototype, "files", {
        get: /**
         * @return {?}
         */
        function () {
            return this._files || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInput.prototype, "fileNames", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fileNames;
        },
        enumerable: true,
        configurable: true
    });
    return FileInput;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FileInputComponent = /** @class */ (function () {
    /**
     * @see https://angular.io/api/forms/ControlValueAccessor
     */
    function FileInputComponent(ngControl, fm, _elementRef, _renderer) {
        var _this = this;
        this.ngControl = ngControl;
        this.fm = fm;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.stateChanges = new Subject();
        this.focused = false;
        this.controlType = 'file-input';
        this.autofilled = false;
        this._required = false;
        this.id = "ngx-mat-file-input-" + FileInputComponent.nextId++;
        this.describedBy = '';
        this._onChange = function (_) { };
        this._onTouched = function () { };
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        fm.monitor(_elementRef.nativeElement, true).subscribe(function (origin) {
            _this.focused = !!origin;
            _this.stateChanges.next();
        });
    }
    /**
     * @param {?} ids
     * @return {?}
     */
    FileInputComponent.prototype.setDescribedByIds = /**
     * @param {?} ids
     * @return {?}
     */
    function (ids) {
        this.describedBy = ids.join(' ');
    };
    Object.defineProperty(FileInputComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
        },
        set: /**
         * @param {?} fileInput
         * @return {?}
         */
        function (fileInput) {
            if (fileInput) {
                this.writeValue(fileInput.files);
                this.stateChanges.next();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "placeholder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} plh
         * @return {?}
         */
        function (plh) {
            this._placeholder = plh;
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "empty", {
        get: /**
         * @return {?}
         */
        function () {
            return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "shouldLabelFloat", {
        get: /**
         * @return {?}
         */
        function () {
            return this.focused || !this.empty || this.valuePlaceholder !== undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "required", {
        get: /**
         * @return {?}
         */
        function () {
            return this._required;
        },
        set: /**
         * @param {?} req
         * @return {?}
         */
        function (req) {
            this._required = coerceBooleanProperty(req);
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "isDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "disabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.disabled;
        },
        set: /**
         * @param {?} dis
         * @return {?}
         */
        function (dis) {
            this.setDisabledState(coerceBooleanProperty(dis));
            this.stateChanges.next();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileInputComponent.prototype, "errorState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.ngControl.errors !== null && this.ngControl.touched;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    FileInputComponent.prototype.onContainerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if ((/** @type {?} */ (event.target)).tagName.toLowerCase() !== 'input' && !this.disabled) {
            this._elementRef.nativeElement.querySelector('input').focus();
            this.focused = true;
            this.open();
        }
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    FileInputComponent.prototype.writeValue = /**
     * @param {?} obj
     * @return {?}
     */
    function (obj) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'value', obj);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FileInputComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    FileInputComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    FileInputComponent.prototype.change = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var /** @type {?} */ fileList = event.target.files;
        var /** @type {?} */ fileArray = [];
        if (fileList) {
            for (var /** @type {?} */ i = 0; i < fileList.length; i++) {
                fileArray.push(fileList[i]);
            }
        }
        this.value = new FileInput(fileArray);
        this._onChange(this.value);
    };
    /**
     * @return {?}
     */
    FileInputComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.focused = false;
        this._onTouched();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    FileInputComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
    };
    /**
     * @return {?}
     */
    FileInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.multiple = coerceBooleanProperty(this.multiple);
    };
    /**
     * @return {?}
     */
    FileInputComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (!this.disabled) {
            this._elementRef.nativeElement.querySelector('input').click();
        }
    };
    Object.defineProperty(FileInputComponent.prototype, "fileNames", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value ? this.value.fileNames : this.valuePlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    FileInputComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.stateChanges.complete();
        this.fm.stopMonitoring(this._elementRef.nativeElement);
    };
    FileInputComponent.nextId = 0;
    FileInputComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngx-mat-file-input',
                    template: "<input #input id=\"md-input-file\" type=\"file\" [attr.multiple]=\"multiple? '' : null\">\n<span class=\"filename\">{{ fileNames }}</span>\n",
                    styles: [":host{display:inline-block}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block}"],
                    providers: [{ provide: MatFormFieldControl, useExisting: FileInputComponent }]
                },] },
    ];
    /** @nocollapse */
    FileInputComponent.ctorParameters = function () { return [
        { type: NgControl, decorators: [{ type: Optional }, { type: Self }] },
        { type: FocusMonitor },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
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
    return FileInputComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ByteFormatPipe = /** @class */ (function () {
    function ByteFormatPipe(config) {
        this.config = config;
        this.unit = config ? config.sizeUnit : 'Byte';
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    ByteFormatPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        if (parseInt(value, 10) >= 0) {
            value = this.formatBytes(+value, +args);
        }
        return value;
    };
    /**
     * @param {?} bytes
     * @param {?=} decimals
     * @return {?}
     */
    ByteFormatPipe.prototype.formatBytes = /**
     * @param {?} bytes
     * @param {?=} decimals
     * @return {?}
     */
    function (bytes, decimals) {
        if (bytes === 0) {
            return '0 ' + this.unit;
        }
        var /** @type {?} */ B = this.unit.charAt(0);
        var /** @type {?} */ k = 1024;
        var /** @type {?} */ dm = decimals || 2;
        var /** @type {?} */ sizes = [
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
        var /** @type {?} */ i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    ByteFormatPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'byteFormat'
                },] },
    ];
    /** @nocollapse */
    ByteFormatPipe.ctorParameters = function () { return [
        { type: FileInputConfig, decorators: [{ type: Optional }, { type: Inject, args: [NGX_MAT_FILE_INPUT_CONFIG,] }] }
    ]; };
    return ByteFormatPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaterialFileInputModule = /** @class */ (function () {
    function MaterialFileInputModule() {
    }
    MaterialFileInputModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [FileInputComponent, ByteFormatPipe],
                    providers: [FocusMonitor],
                    exports: [FileInputComponent, ByteFormatPipe]
                },] },
    ];
    return MaterialFileInputModule;
}());

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
        return function (control) {
            var /** @type {?} */ size = control && control.value ? (/** @type {?} */ (control.value)).files.map(function (f) { return f.size; }).reduce(function (acc, i) { return acc + i; }, 0) : 0;
            var /** @type {?} */ condition = bytes >= size;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi9tb2RlbC9maWxlLWlucHV0LWNvbmZpZy5tb2RlbC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQvbGliL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwudHMiLCJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvcGlwZS9ieXRlLWZvcm1hdC5waXBlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvbWF0ZXJpYWwtZmlsZS1pbnB1dC5tb2R1bGUudHMiLCJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi92YWxpZGF0b3IvZmlsZS12YWxpZGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBPcHRpb25hbCB0b2tlbiB0byBwcm92aWRlIGN1c3RvbSBjb25maWd1cmF0aW9uIHRvIHRoZSBtb2R1bGVcbiAqL1xuZXhwb3J0IGNvbnN0IE5HWF9NQVRfRklMRV9JTlBVVF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48RmlsZUlucHV0Q29uZmlnPihcbiAgJ25neC1tYXQtZmlsZS1pbnB1dC5jb25maWcnXG4pO1xuXG4vKipcbiAqIFByb3ZpZGUgYWRkaXRpb25hbCBjb25maWd1cmF0aW9uIHRvIGR5bmFtaWNhbGx5IGN1c3RvbWl6ZSB0aGUgbW9kdWxlIGluamVjdGlvblxuICovXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0Q29uZmlnIHtcbiAgLyoqXG4gICAqIFVuaXQgdXNlZCB3aXRoIHRoZSBCeXRlRm9ybWF0UGlwZSwgZGVmYXVsdCB2YWx1ZSBpcyAqQnl0ZSouXG4gICAqIFRoZSBmaXJzdCBsZXR0ZXIgaXMgdXNlZCBmb3IgdGhlIHNob3J0IG5vdGF0aW9uLlxuICAgKi9cbiAgc2l6ZVVuaXQ6IHN0cmluZztcbn1cbiIsIi8qKlxuICogVGhlIGZpbGVzIHRvIGJlIHVwbG9hZGVkXG4gKi9cbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXQge1xuICBwcml2YXRlIF9maWxlTmFtZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9maWxlczogRmlsZVtdLCBwcml2YXRlIGRlbGltaXRlcjogc3RyaW5nID0gJywgJykge1xuICAgIHRoaXMuX2ZpbGVOYW1lcyA9IHRoaXMuX2ZpbGVzLm1hcCgoZjogRmlsZSkgPT4gZi5uYW1lKS5qb2luKGRlbGltaXRlcik7XG4gIH1cblxuICBnZXQgZmlsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbGVzIHx8IFtdO1xuICB9XG5cbiAgZ2V0IGZpbGVOYW1lcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9maWxlTmFtZXM7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpbGVJbnB1dCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1tYXQtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNpbnB1dCBpZD1cIm1kLWlucHV0LWZpbGVcIiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlPyAnJyA6IG51bGxcIj5cbjxzcGFuIGNsYXNzPVwiZmlsZW5hbWVcIj57eyBmaWxlTmFtZXMgfX08L3NwYW4+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3Q6bm90KC5maWxlLWlucHV0LWRpc2FibGVkKXtjdXJzb3I6cG9pbnRlcn1pbnB1dHt3aWR0aDowO2hlaWdodDowO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX0uZmlsZW5hbWV7ZGlzcGxheTppbmxpbmUtYmxvY2t9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEZpbGVJbnB1dENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBNYXRGb3JtRmllbGRDb250cm9sPEZpbGVJbnB1dD4sIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZmlsZS1pbnB1dCc7XG5cbiAgQElucHV0KCkgYXV0b2ZpbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWVQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtbWF0LWZpbGUtaW5wdXQtJHtGaWxlSW5wdXRDb21wb25lbnQubmV4dElkKyt9YDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBGaWxlSW5wdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5lbXB0eSA/IG51bGwgOiBuZXcgRmlsZUlucHV0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCBbXSk7XG4gIH1cbiAgc2V0IHZhbHVlKGZpbGVJbnB1dDogRmlsZUlucHV0IHwgbnVsbCkge1xuICAgIGlmIChmaWxlSW5wdXQpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlSW5wdXQuZmlsZXMpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHBsaCkge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxoO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5IHx8IHRoaXMudmFsdWVQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpbGUtaW5wdXQtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZXJyb3JzICE9PSBudWxsICYmIHRoaXMubmdDb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gICAgZm0ubW9uaXRvcihfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgb2JqKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICBpZiAoZmlsZUxpc3QpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3IEZpbGVJbnB1dChmaWxlQXJyYXkpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm11bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHRoaXMubXVsdGlwbGUpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsZU5hbWVzIDogdGhpcy52YWx1ZVBsYWNlaG9sZGVyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZpbGVJbnB1dENvbmZpZyxcbiAgTkdYX01BVF9GSUxFX0lOUFVUX0NPTkZJR1xufSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0LWNvbmZpZy5tb2RlbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIEJ5dGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgdW5pdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChOR1hfTUFUX0ZJTEVfSU5QVVRfQ09ORklHKVxuICAgIHByaXZhdGUgY29uZmlnOiBGaWxlSW5wdXRDb25maWdcbiAgKSB7XG4gICAgdGhpcy51bml0ID0gY29uZmlnID8gY29uZmlnLnNpemVVbml0IDogJ0J5dGUnO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmIChwYXJzZUludCh2YWx1ZSwgMTApID49IDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXRCeXRlcygrdmFsdWUsICthcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRCeXRlcyhieXRlczogbnVtYmVyLCBkZWNpbWFscz86IG51bWJlcikge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwICcgKyB0aGlzLnVuaXQ7XG4gICAgfVxuICAgIGNvbnN0IEIgPSB0aGlzLnVuaXQuY2hhckF0KDApO1xuICAgIGNvbnN0IGsgPSAxMDI0O1xuICAgIGNvbnN0IGRtID0gZGVjaW1hbHMgfHwgMjtcbiAgICBjb25zdCBzaXplcyA9IFtcbiAgICAgIHRoaXMudW5pdCxcbiAgICAgICdLJyArIEIsXG4gICAgICAnTScgKyBCLFxuICAgICAgJ0cnICsgQixcbiAgICAgICdUJyArIEIsXG4gICAgICAnUCcgKyBCLFxuICAgICAgJ0UnICsgQixcbiAgICAgICdaJyArIEIsXG4gICAgICAnWScgKyBCXG4gICAgXTtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEZpbGVJbnB1dENvbXBvbmVudCB9IGZyb20gJy4vZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCeXRlRm9ybWF0UGlwZSB9IGZyb20gJy4vcGlwZS9ieXRlLWZvcm1hdC5waXBlJztcbmltcG9ydCB7IEZpbGVJbnB1dENvbmZpZyB9IGZyb20gJy4vbW9kZWwvZmlsZS1pbnB1dC1jb25maWcubW9kZWwnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtGaWxlSW5wdXRDb21wb25lbnQsIEJ5dGVGb3JtYXRQaXBlXSxcbiAgcHJvdmlkZXJzOiBbRm9jdXNNb25pdG9yXSxcbiAgZXhwb3J0czogW0ZpbGVJbnB1dENvbXBvbmVudCwgQnl0ZUZvcm1hdFBpcGVdXG59KVxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRmlsZUlucHV0TW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSAnLi4vbW9kZWwvZmlsZS1pbnB1dC5tb2RlbCc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgRmlsZVZhbGlkYXRvciB7XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBjb250cm9sIGNvbnRlbnQgb2YgZmlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBieXRlcyBtYXggbnVtYmVyIG9mIGJ5dGVzIGFsbG93ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1heENvbnRlbnRTaXplKGJ5dGVzOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gY29udHJvbCAmJiBjb250cm9sLnZhbHVlID8gKGNvbnRyb2wudmFsdWUgYXMgRmlsZUlucHV0KS5maWxlcy5tYXAoZiA9PiBmLnNpemUpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKSA6IDA7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBieXRlcyA+PSBzaXplO1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IG51bGwgOiB7XG4gICAgICAgICAgICAgICAgbWF4Q29udGVudFNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZTogYnl0ZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUtBLHFCQUFhLHlCQUF5QixHQUFHLElBQUksY0FBYyxDQUN6RCwyQkFBMkIsQ0FDNUIsQ0FBQzs7OztBQUtGOzs7QUFBQTs7OzBCQVpBO0lBa0JDOzs7Ozs7Ozs7QUNmRDs7O0FBQUE7SUFHRSxtQkFBb0IsTUFBYyxFQUFVLFNBQXdCO29EQUFBO1FBQWhELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxjQUFTLEdBQVQsU0FBUyxDQUFlO1FBQ2xFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQyxDQUFPLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxHQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDeEU7SUFFRCxzQkFBSSw0QkFBSzs7OztRQUFUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUMxQjs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCOzs7T0FBQTtvQkFoQkg7SUFpQkM7Ozs7OztBQ2pCRDs7OztJQTJHRSw0QkFHUyxTQUFvQixFQUNuQixJQUNBLGFBQ0E7UUFOVixpQkFlQztRQVpRLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUU7UUFDRixnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUzs0QkE1RkosSUFBSSxPQUFPLEVBQVE7dUJBQ3hCLEtBQUs7MkJBQ0QsWUFBWTswQkFFSyxLQUFLO3lCQUdoQixLQUFLO2tCQUtMLHdCQUFzQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUk7MkJBQ25CLEVBQUU7eUJBMEZsQyxVQUFDLENBQU0sS0FBTzswQkFDYixlQUFRO1FBVjNCLElB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