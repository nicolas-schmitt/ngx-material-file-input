/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input, ElementRef, HostBinding, Renderer2, HostListener, Optional, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material';
import { FocusMonitor } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Subject } from 'rxjs';
import { FileInput } from '../model/file-input.model';
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
export { FileInputComponent };
function FileInputComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    FileInputComponent.nextId;
    /** @type {?} */
    FileInputComponent.prototype.stateChanges;
    /** @type {?} */
    FileInputComponent.prototype.focused;
    /** @type {?} */
    FileInputComponent.prototype.controlType;
    /** @type {?} */
    FileInputComponent.prototype.autofilled;
    /** @type {?} */
    FileInputComponent.prototype._placeholder;
    /** @type {?} */
    FileInputComponent.prototype._required;
    /** @type {?} */
    FileInputComponent.prototype.valuePlaceholder;
    /** @type {?} */
    FileInputComponent.prototype.multiple;
    /** @type {?} */
    FileInputComponent.prototype.id;
    /** @type {?} */
    FileInputComponent.prototype.describedBy;
    /** @type {?} */
    FileInputComponent.prototype._onChange;
    /** @type {?} */
    FileInputComponent.prototype._onTouched;
    /** @type {?} */
    FileInputComponent.prototype.ngControl;
    /** @type {?} */
    FileInputComponent.prototype.fm;
    /** @type {?} */
    FileInputComponent.prototype._elementRef;
    /** @type {?} */
    FileInputComponent.prototype._renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFpR3BEOztPQUVHO0lBQ0gsNEJBR1MsU0FBb0IsRUFDbkIsSUFDQSxhQUNBO1FBTlYsaUJBZUM7UUFaUSxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLE9BQUUsR0FBRixFQUFFO1FBQ0YsZ0JBQVcsR0FBWCxXQUFXO1FBQ1gsY0FBUyxHQUFULFNBQVM7NEJBNUZKLElBQUksT0FBTyxFQUFRO3VCQUN4QixLQUFLOzJCQUNELFlBQVk7MEJBRUssS0FBSzt5QkFHaEIsS0FBSztrQkFLTCx3QkFBc0Isa0JBQWtCLENBQUMsTUFBTSxFQUFJOzJCQUNuQixFQUFFO3lCQTBGbEMsVUFBQyxDQUFNLEtBQU87MEJBQ2IsZUFBUTtRQVYzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7WUFD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QjtvQkFDOUIsUUFBUSxFQUFFLDhJQUVYO29CQUNDLE1BQU0sRUFBRSxDQUFDLHlMQUF5TCxDQUFDO29CQUNuTSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQztpQkFDL0U7Ozs7Z0JBaEI4QixTQUFTLHVCQTJHbkMsUUFBUSxZQUNSLElBQUk7Z0JBMUdBLFlBQVk7Z0JBSGMsVUFBVTtnQkFBMEIsU0FBUzs7OzZCQXlCN0UsS0FBSzttQ0FLTCxLQUFLOzJCQUNMLEtBQUs7cUJBRUwsV0FBVzs4QkFDWCxXQUFXLFNBQUMsdUJBQXVCO3dCQU1uQyxLQUFLOzhCQVdMLEtBQUs7bUNBYUwsV0FBVyxTQUFDLG1DQUFtQzsyQkFLL0MsS0FBSzs2QkFTTCxXQUFXLFNBQUMsMkJBQTJCOzJCQUl2QyxLQUFLOzZCQVNMLEtBQUs7eUJBZ0RMLFlBQVksU0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7dUJBYWpDLFlBQVksU0FBQyxVQUFVOzs2QkF4SjFCOztTQWtCYSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEVsZW1lbnRSZWYsIE9uRGVzdHJveSwgSG9zdEJpbmRpbmcsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPcHRpb25hbCwgU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5pbXBvcnQgeyBGaWxlSW5wdXQgfSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICduZ3gtbWF0LWZpbGUtaW5wdXQnLFxuICB0ZW1wbGF0ZTogYDxpbnB1dCAjaW5wdXQgaWQ9XCJtZC1pbnB1dC1maWxlXCIgdHlwZT1cImZpbGVcIiBbYXR0ci5tdWx0aXBsZV09XCJtdWx0aXBsZT8gJycgOiBudWxsXCI+XG48c3BhbiBjbGFzcz1cImZpbGVuYW1lXCI+e3sgZmlsZU5hbWVzIH19PC9zcGFuPlxuYCxcbiAgc3R5bGVzOiBbYDpob3N0e2Rpc3BsYXk6aW5saW5lLWJsb2NrfTpob3N0Om5vdCguZmlsZS1pbnB1dC1kaXNhYmxlZCl7Y3Vyc29yOnBvaW50ZXJ9aW5wdXR7d2lkdGg6MDtoZWlnaHQ6MDtvcGFjaXR5OjA7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6LTF9LmZpbGVuYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrfWBdLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE1hdEZvcm1GaWVsZENvbnRyb2wsIHVzZUV4aXN0aW5nOiBGaWxlSW5wdXRDb21wb25lbnQgfV1cbn0pXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0Q29tcG9uZW50IGltcGxlbWVudHMgTWF0Rm9ybUZpZWxkQ29udHJvbDxGaWxlSW5wdXQ+LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBzdGF0aWMgbmV4dElkID0gMDtcblxuICBzdGF0ZUNoYW5nZXMgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBmb2N1c2VkID0gZmFsc2U7XG4gIGNvbnRyb2xUeXBlID0gJ2ZpbGUtaW5wdXQnO1xuXG4gIEBJbnB1dCgpIGF1dG9maWxsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9wbGFjZWhvbGRlcjogc3RyaW5nO1xuICBwcml2YXRlIF9yZXF1aXJlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHZhbHVlUGxhY2Vob2xkZXI6IHN0cmluZztcbiAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG5cbiAgQEhvc3RCaW5kaW5nKCkgaWQgPSBgbmd4LW1hdC1maWxlLWlucHV0LSR7RmlsZUlucHV0Q29tcG9uZW50Lm5leHRJZCsrfWA7XG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWRlc2NyaWJlZGJ5JykgZGVzY3JpYmVkQnkgPSAnJztcblxuICBzZXREZXNjcmliZWRCeUlkcyhpZHM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5kZXNjcmliZWRCeSA9IGlkcy5qb2luKCcgJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgdmFsdWUoKTogRmlsZUlucHV0IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuZW1wdHkgPyBudWxsIDogbmV3IEZpbGVJbnB1dCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgW10pO1xuICB9XG4gIHNldCB2YWx1ZShmaWxlSW5wdXQ6IEZpbGVJbnB1dCB8IG51bGwpIHtcbiAgICBpZiAoZmlsZUlucHV0KSB7XG4gICAgICB0aGlzLndyaXRlVmFsdWUoZmlsZUlucHV0LmZpbGVzKTtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BsYWNlaG9sZGVyO1xuICB9XG4gIHNldCBwbGFjZWhvbGRlcihwbGgpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlciA9IHBsaDtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBnZXQgZW1wdHkoKSB7XG4gICAgcmV0dXJuICF0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgfHwgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlLmxlbmd0aCA9PT0gMDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0JylcbiAgZ2V0IHNob3VsZExhYmVsRmxvYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9jdXNlZCB8fCAhdGhpcy5lbXB0eSB8fCB0aGlzLnZhbHVlUGxhY2Vob2xkZXIgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCByZXF1aXJlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmVxdWlyZWQ7XG4gIH1cbiAgc2V0IHJlcXVpcmVkKHJlcTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVkID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHJlcSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5maWxlLWlucHV0LWRpc2FibGVkJylcbiAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQ7XG4gIH1cbiAgQElucHV0KClcbiAgZ2V0IGRpc2FibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cbiAgc2V0IGRpc2FibGVkKGRpczogYm9vbGVhbikge1xuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShjb2VyY2VCb29sZWFuUHJvcGVydHkoZGlzKSk7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IGVycm9yU3RhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMubmdDb250cm9sLmVycm9ycyAhPT0gbnVsbCAmJiB0aGlzLm5nQ29udHJvbC50b3VjaGVkO1xuICB9XG5cbiAgb25Db250YWluZXJDbGljayhldmVudDogTW91c2VFdmVudCkge1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIEVsZW1lbnQpLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2lucHV0JyAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykuZm9jdXMoKTtcbiAgICAgIHRoaXMuZm9jdXNlZCA9IHRydWU7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQHNlZSBodHRwczovL2FuZ3VsYXIuaW8vYXBpL2Zvcm1zL0NvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBTZWxmKClcbiAgICBwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wsXG4gICAgcHJpdmF0ZSBmbTogRm9jdXNNb25pdG9yLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgICBpZiAodGhpcy5uZ0NvbnRyb2wgIT0gbnVsbCkge1xuICAgICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3NvciA9IHRoaXM7XG4gICAgfVxuICAgIGZtLm1vbml0b3IoX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgdHJ1ZSkuc3Vic2NyaWJlKG9yaWdpbiA9PiB7XG4gICAgICB0aGlzLmZvY3VzZWQgPSAhIW9yaWdpbjtcbiAgICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIG9iaik7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5fb25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScsIFsnJGV2ZW50J10pXG4gIGNoYW5nZShldmVudDogYW55KSB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSBldmVudC50YXJnZXQuZmlsZXM7XG4gICAgY29uc3QgZmlsZUFycmF5ID0gW107XG4gICAgaWYgKGZpbGVMaXN0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGZpbGVBcnJheS5wdXNoKGZpbGVMaXN0W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IG5ldyBGaWxlSW5wdXQoZmlsZUFycmF5KTtcbiAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3Vzb3V0JylcbiAgYmx1cigpIHtcbiAgICB0aGlzLmZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9vblRvdWNoZWQoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGU/KGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcsIGlzRGlzYWJsZWQpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tdWx0aXBsZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh0aGlzLm11bHRpcGxlKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmaWxlTmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgPyB0aGlzLnZhbHVlLmZpbGVOYW1lcyA6IHRoaXMudmFsdWVQbGFjZWhvbGRlcjtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5mbS5zdG9wTW9uaXRvcmluZyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG59XG4iXX0=