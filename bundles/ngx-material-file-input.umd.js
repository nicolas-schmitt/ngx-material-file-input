(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/material'), require('@angular/cdk/a11y'), require('@angular/cdk/coercion'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-material-file-input', ['exports', '@angular/core', '@angular/forms', '@angular/material', '@angular/cdk/a11y', '@angular/cdk/coercion', 'rxjs'], factory) :
    (factory((global['ngx-material-file-input'] = {}),global.ng.core,global.ng.forms,global.ng.material,global.ng.cdk.a11y,global.ng.cdk.coercion,global.rxjs));
}(this, (function (exports,core,forms,material,a11y,coercion,rxjs) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    /**
     * Optional token to provide custom configuration to the module
     */
    var /** @type {?} */ NGX_MAT_FILE_INPUT_CONFIG = new core.InjectionToken('ngx-mat-file-input.config');
    /**
     * Provide additional configuration to dynamically customize the module injection
     */
    var /**
     * Provide additional configuration to dynamically customize the module injection
     */ FileInputConfig = (function () {
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
    var /**
     * The files to be uploaded
     */ FileInput = (function () {
        function FileInput(_files, delimiter) {
            if (delimiter === void 0) {
                delimiter = ', ';
            }
            this._files = _files;
            this.delimiter = delimiter;
            this._fileNames = this._files.map(function (f) { return f.name; }).join(delimiter);
        }
        Object.defineProperty(FileInput.prototype, "files", {
            get: /**
             * @return {?}
             */ function () {
                return this._files || [];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInput.prototype, "fileNames", {
            get: /**
             * @return {?}
             */ function () {
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
    var FileInputComponent = (function () {
        /**
         * @see https://angular.io/api/forms/ControlValueAccessor
         */
        function FileInputComponent(ngControl, fm, _elementRef, _renderer) {
            var _this = this;
            this.ngControl = ngControl;
            this.fm = fm;
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this.stateChanges = new rxjs.Subject();
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
             */ function () {
                return this.empty ? null : new FileInput(this._elementRef.nativeElement.value || []);
            },
            set: /**
             * @param {?} fileInput
             * @return {?}
             */ function (fileInput) {
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
             */ function () {
                return this._placeholder;
            },
            set: /**
             * @param {?} plh
             * @return {?}
             */ function (plh) {
                this._placeholder = plh;
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "empty", {
            get: /**
             * @return {?}
             */ function () {
                return !this._elementRef.nativeElement.value || this._elementRef.nativeElement.value.length === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "shouldLabelFloat", {
            get: /**
             * @return {?}
             */ function () {
                return this.focused || !this.empty || this.valuePlaceholder !== undefined;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "required", {
            get: /**
             * @return {?}
             */ function () {
                return this._required;
            },
            set: /**
             * @param {?} req
             * @return {?}
             */ function (req) {
                this._required = coercion.coerceBooleanProperty(req);
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "isDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this.disabled;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "disabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._elementRef.nativeElement.disabled;
            },
            set: /**
             * @param {?} dis
             * @return {?}
             */ function (dis) {
                this.setDisabledState(coercion.coerceBooleanProperty(dis));
                this.stateChanges.next();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FileInputComponent.prototype, "errorState", {
            get: /**
             * @return {?}
             */ function () {
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
                if (((event.target)).tagName.toLowerCase() !== 'input' && !this.disabled) {
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
                this.multiple = coercion.coerceBooleanProperty(this.multiple);
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
             */ function () {
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
            { type: core.Component, args: [{
                        // tslint:disable-next-line:component-selector
                        selector: 'ngx-mat-file-input',
                        template: "<input #input id=\"md-input-file\" type=\"file\" [attr.multiple]=\"multiple? '' : null\">\n<span class=\"filename\">{{ fileNames }}</span>\n",
                        styles: [":host{display:inline-block}:host:not(.file-input-disabled){cursor:pointer}input{width:0;height:0;opacity:0;overflow:hidden;position:absolute;z-index:-1}.filename{display:inline-block}"],
                        providers: [{ provide: material.MatFormFieldControl, useExisting: FileInputComponent }]
                    },] },
        ];
        /** @nocollapse */
        FileInputComponent.ctorParameters = function () {
            return [
                { type: forms.NgControl, decorators: [{ type: core.Optional }, { type: core.Self }] },
                { type: a11y.FocusMonitor },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        FileInputComponent.propDecorators = {
            autofilled: [{ type: core.Input }],
            valuePlaceholder: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            id: [{ type: core.HostBinding }],
            describedBy: [{ type: core.HostBinding, args: ['attr.aria-describedby',] }],
            value: [{ type: core.Input }],
            placeholder: [{ type: core.Input }],
            shouldLabelFloat: [{ type: core.HostBinding, args: ['class.mat-form-field-should-float',] }],
            required: [{ type: core.Input }],
            isDisabled: [{ type: core.HostBinding, args: ['class.file-input-disabled',] }],
            disabled: [{ type: core.Input }],
            errorState: [{ type: core.Input }],
            change: [{ type: core.HostListener, args: ['change', ['$event'],] }],
            blur: [{ type: core.HostListener, args: ['focusout',] }]
        };
        return FileInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var ByteFormatPipe = (function () {
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
            { type: core.Pipe, args: [{
                        name: 'byteFormat'
                    },] },
        ];
        /** @nocollapse */
        ByteFormatPipe.ctorParameters = function () {
            return [
                { type: FileInputConfig, decorators: [{ type: core.Optional }, { type: core.Inject, args: [NGX_MAT_FILE_INPUT_CONFIG,] }] }
            ];
        };
        return ByteFormatPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var MaterialFileInputModule = (function () {
        function MaterialFileInputModule() {
        }
        MaterialFileInputModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [FileInputComponent, ByteFormatPipe],
                        providers: [a11y.FocusMonitor],
                        exports: [FileInputComponent, ByteFormatPipe]
                    },] },
        ];
        return MaterialFileInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
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
                var /** @type {?} */ size = control && control.value ? ((control.value)).files.map(function (f) { return f.size; }).reduce(function (acc, i) { return acc + i; }, 0) : 0;
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
    })(exports.FileValidator || (exports.FileValidator = {}));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.NGX_MAT_FILE_INPUT_CONFIG = NGX_MAT_FILE_INPUT_CONFIG;
    exports.MaterialFileInputModule = MaterialFileInputModule;
    exports.ByteFormatPipe = ByteFormatPipe;
    exports.FileInput = FileInput;
    exports.ɵb = FileInputComponent;
    exports.ɵa = FileInputConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvbW9kZWwvZmlsZS1pbnB1dC1jb25maWcubW9kZWwudHMiLCJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0L2xpYi9tb2RlbC9maWxlLWlucHV0Lm1vZGVsLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvZmlsZS1pbnB1dC9maWxlLWlucHV0LmNvbXBvbmVudC50cyIsIm5nOi8vbmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQvbGliL3BpcGUvYnl0ZS1mb3JtYXQucGlwZS50cyIsIm5nOi8vbmd4LW1hdGVyaWFsLWZpbGUtaW5wdXQvbGliL21hdGVyaWFsLWZpbGUtaW5wdXQubW9kdWxlLnRzIiwibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC9saWIvdmFsaWRhdG9yL2ZpbGUtdmFsaWRhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogT3B0aW9uYWwgdG9rZW4gdG8gcHJvdmlkZSBjdXN0b20gY29uZmlndXJhdGlvbiB0byB0aGUgbW9kdWxlXG4gKi9cbmV4cG9ydCBjb25zdCBOR1hfTUFUX0ZJTEVfSU5QVVRfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEZpbGVJbnB1dENvbmZpZz4oXG4gICduZ3gtbWF0LWZpbGUtaW5wdXQuY29uZmlnJ1xuKTtcblxuLyoqXG4gKiBQcm92aWRlIGFkZGl0aW9uYWwgY29uZmlndXJhdGlvbiB0byBkeW5hbWljYWxseSBjdXN0b21pemUgdGhlIG1vZHVsZSBpbmplY3Rpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZpbGVJbnB1dENvbmZpZyB7XG4gIC8qKlxuICAgKiBVbml0IHVzZWQgd2l0aCB0aGUgQnl0ZUZvcm1hdFBpcGUsIGRlZmF1bHQgdmFsdWUgaXMgKkJ5dGUqLlxuICAgKiBUaGUgZmlyc3QgbGV0dGVyIGlzIHVzZWQgZm9yIHRoZSBzaG9ydCBub3RhdGlvbi5cbiAgICovXG4gIHNpemVVbml0OiBzdHJpbmc7XG59XG4iLCIvKipcbiAqIFRoZSBmaWxlcyB0byBiZSB1cGxvYWRlZFxuICovXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0IHtcbiAgcHJpdmF0ZSBfZmlsZU5hbWVzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsZXM6IEZpbGVbXSwgcHJpdmF0ZSBkZWxpbWl0ZXI6IHN0cmluZyA9ICcsICcpIHtcbiAgICB0aGlzLl9maWxlTmFtZXMgPSB0aGlzLl9maWxlcy5tYXAoKGY6IEZpbGUpID0+IGYubmFtZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZ2V0IGZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlcyB8fCBbXTtcbiAgfVxuXG4gIGdldCBmaWxlTmFtZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZU5hbWVzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGaWxlSW5wdXQgfSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWZpbGUtaW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCAjaW5wdXQgaWQ9XCJtZC1pbnB1dC1maWxlXCIgdHlwZT1cImZpbGVcIiBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZT8gJycgOiBudWxsXCI+XG48c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+e3sgZmlsZU5hbWVzIH19PC9zcGFuPlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0Om5vdCguZmlsZS1pbnB1dC1kaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXJ9aW5wdXR7d2lkdGg6MDtoZWlnaHQ6MDtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTF9LmZpbGVuYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrfWBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBGaWxlSW5wdXRDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgTWF0Rm9ybUZpZWxkQ29udHJvbDxGaWxlSW5wdXQ+LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcblxuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2ZpbGUtaW5wdXQnO1xuXG4gIEBJbnB1dCgpIGF1dG9maWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgbmd4LW1hdC1maWxlLWlucHV0LSR7RmlsZUlucHV0Q29tcG9uZW50Lm5leHRJZCsrfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogRmlsZUlucHV0IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZW1wdHkgPyBudWxsIDogbmV3IEZpbGVJbnB1dCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgW10pO1xuICB9XG4gIHNldCB2YWx1ZShmaWxlSW5wdXQ6IEZpbGVJbnB1dCB8IG51bGwpIHtcbiAgICBpZiAoZmlsZUlucHV0KSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZUlucHV0LmZpbGVzKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGgpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsaDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuICF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0JylcbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eSB8fCB0aGlzLnZhbHVlUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maWxlLWlucHV0LWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpczogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmVycm9ycyAhPT0gbnVsbCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0JyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL0NvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICAgIGZtLm1vbml0b3IoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG9iaik7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIGNoYW5nZShldmVudDogYW55KSB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgaWYgKGZpbGVMaXN0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGVMaXN0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ldyBGaWxlSW5wdXQoZmlsZUFycmF5KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgYmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh0aGlzLm11bHRpcGxlKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmZpbGVOYW1lcyA6IHRoaXMudmFsdWVQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGaWxlSW5wdXRDb25maWcsXG4gIE5HWF9NQVRfRklMRV9JTlBVVF9DT05GSUdcbn0gZnJvbSAnLi4vbW9kZWwvZmlsZS1pbnB1dC1jb25maWcubW9kZWwnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdieXRlRm9ybWF0J1xufSlcbmV4cG9ydCBjbGFzcyBCeXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTkdYX01BVF9GSUxFX0lOUFVUX0NPTkZJRylcbiAgICBwcml2YXRlIGNvbmZpZzogRmlsZUlucHV0Q29uZmlnXG4gICkge1xuICAgIHRoaXMudW5pdCA9IGNvbmZpZyA/IGNvbmZpZy5zaXplVW5pdCA6ICdCeXRlJztcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAocGFyc2VJbnQodmFsdWUsIDEwKSA+PSAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0Qnl0ZXMoK3ZhbHVlLCArYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlciwgZGVjaW1hbHM/OiBudW1iZXIpIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCAnICsgdGhpcy51bml0O1xuICAgIH1cbiAgICBjb25zdCBCID0gdGhpcy51bml0LmNoYXJBdCgwKTtcbiAgICBjb25zdCBrID0gMTAyNDtcbiAgICBjb25zdCBkbSA9IGRlY2ltYWxzIHx8IDI7XG4gICAgY29uc3Qgc2l6ZXMgPSBbXG4gICAgICB0aGlzLnVuaXQsXG4gICAgICAnSycgKyBCLFxuICAgICAgJ00nICsgQixcbiAgICAgICdHJyArIEIsXG4gICAgICAnVCcgKyBCLFxuICAgICAgJ1AnICsgQixcbiAgICAgICdFJyArIEIsXG4gICAgICAnWicgKyBCLFxuICAgICAgJ1knICsgQlxuICAgIF07XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKGRtKSkgKyAnICcgKyBzaXplc1tpXTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBGaWxlSW5wdXRDb21wb25lbnQgfSBmcm9tICcuL2ZpbGUtaW5wdXQvZmlsZS1pbnB1dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQnl0ZUZvcm1hdFBpcGUgfSBmcm9tICcuL3BpcGUvYnl0ZS1mb3JtYXQucGlwZSc7XG5pbXBvcnQgeyBGaWxlSW5wdXRDb25maWcgfSBmcm9tICcuL21vZGVsL2ZpbGUtaW5wdXQtY29uZmlnLm1vZGVsJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbRmlsZUlucHV0Q29tcG9uZW50LCBCeXRlRm9ybWF0UGlwZV0sXG4gIHByb3ZpZGVyczogW0ZvY3VzTW9uaXRvcl0sXG4gIGV4cG9ydHM6IFtGaWxlSW5wdXRDb21wb25lbnQsIEJ5dGVGb3JtYXRQaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEZpbGVJbnB1dE1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgVmFsaWRhdG9yRm4sIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEZpbGVJbnB1dCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwnO1xuXG5leHBvcnQgbmFtZXNwYWNlIEZpbGVWYWxpZGF0b3Ige1xuXG4gICAgLyoqXG4gICAgICogRnVuY3Rpb24gdG8gY29udHJvbCBjb250ZW50IG9mIGZpbGVzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYnl0ZXMgbWF4IG51bWJlciBvZiBieXRlcyBhbGxvd2VkXG4gICAgICpcbiAgICAgKiBAcmV0dXJuc1xuICAgICAqL1xuICAgIGV4cG9ydCBmdW5jdGlvbiBtYXhDb250ZW50U2l6ZShieXRlczogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xuICAgICAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IGNvbnRyb2wgJiYgY29udHJvbC52YWx1ZSA/IChjb250cm9sLnZhbHVlIGFzIEZpbGVJbnB1dCkuZmlsZXMubWFwKGYgPT4gZi5zaXplKS5yZWR1Y2UoKGFjYywgaSkgPT4gYWNjICsgaSwgMCkgOiAwO1xuICAgICAgICAgICAgY29uc3QgY29uZGl0aW9uID0gYnl0ZXMgPj0gc2l6ZTtcbiAgICAgICAgICAgIHJldHVybiBjb25kaXRpb24gPyBudWxsIDoge1xuICAgICAgICAgICAgICAgIG1heENvbnRlbnRTaXplOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbFNpemU6IHNpemUsXG4gICAgICAgICAgICAgICAgICAgIG1heFNpemU6IGJ5dGVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJJbmplY3Rpb25Ub2tlbiIsIlN1YmplY3QiLCJjb2VyY2VCb29sZWFuUHJvcGVydHkiLCJDb21wb25lbnQiLCJNYXRGb3JtRmllbGRDb250cm9sIiwiTmdDb250cm9sIiwiT3B0aW9uYWwiLCJTZWxmIiwiRm9jdXNNb25pdG9yIiwiRWxlbWVudFJlZiIsIlJlbmRlcmVyMiIsIklucHV0IiwiSG9zdEJpbmRpbmciLCJIb3N0TGlzdGVuZXIiLCJQaXBlIiwiSW5qZWN0IiwiTmdNb2R1bGUiLCJGaWxlVmFsaWRhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUtBLHlCQUFhLHlCQUF5QixHQUFHLElBQUlBLG1CQUFjLENBQ3pELDJCQUEyQixDQUM1QixDQUFDOzs7O0FBS0Y7O1FBQUE7Ozs4QkFaQTtRQWtCQzs7Ozs7Ozs7O0FDZkQ7O1FBQUE7UUFHRSxtQkFBb0IsTUFBYyxFQUFVLFNBQXdCOztnQ0FBQTs7WUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtZQUFVLGNBQVMsR0FBVCxTQUFTLENBQWU7WUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEdBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN4RTtRQUVELHNCQUFJLDRCQUFLOzs7Z0JBQVQ7Z0JBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQzthQUMxQjs7O1dBQUE7UUFFRCxzQkFBSSxnQ0FBUzs7O2dCQUFiO2dCQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUN4Qjs7O1dBQUE7d0JBaEJIO1FBaUJDOzs7Ozs7QUNqQkQ7Ozs7UUEyR0UsNEJBR1MsU0FBb0IsRUFDbkIsSUFDQSxhQUNBO1lBTlYsaUJBZUM7WUFa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