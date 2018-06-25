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
export class FileInputComponent {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi9maWxlLWlucHV0L2ZpbGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQWEsV0FBVyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0SSxPQUFPLEVBQXdCLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQVd0RCxNQUFNOzs7Ozs7OztJQXlGSixZQUdTLFNBQW9CLEVBQ25CLElBQ0EsYUFDQTtRQUhELGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDbkIsT0FBRSxHQUFGLEVBQUU7UUFDRixnQkFBVyxHQUFYLFdBQVc7UUFDWCxjQUFTLEdBQVQsU0FBUzs0QkE1RkosSUFBSSxPQUFPLEVBQVE7dUJBQ3hCLEtBQUs7MkJBQ0QsWUFBWTswQkFFSyxLQUFLO3lCQUdoQixLQUFLO2tCQUtMLHNCQUFzQixrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsRUFBRTsyQkFDbkIsRUFBRTt5QkEwRmxDLENBQUMsQ0FBTSxFQUFFLEVBQUUsSUFBRzswQkFDYixHQUFHLEVBQUUsSUFBRztRQVYzQixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUks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QVEsWUFDUixJQUFJO1lBMUdBLFlBQVk7WUFIYyxVQUFVO1lBQTBCLFNBQVM7Ozt5QkF5QjdFLEtBQUs7K0JBS0wsS0FBSzt1QkFDTCxLQUFLO2lCQUVMLFdBQVc7MEJBQ1gsV0FBVyxTQUFDLHVCQUF1QjtvQkFNbkMsS0FBSzswQkFXTCxLQUFLOytCQWFMLFdBQVcsU0FBQyxtQ0FBbUM7dUJBSy9DLEtBQUs7eUJBU0wsV0FBVyxTQUFDLDJCQUEyQjt1QkFJdkMsS0FBSzt5QkFTTCxLQUFLO3FCQWdETCxZQUFZLFNBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDO21CQWFqQyxZQUFZLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRWxlbWVudFJlZiwgT25EZXN0cm95LCBIb3N0QmluZGluZywgUmVuZGVyZXIyLCBIb3N0TGlzdGVuZXIsIE9wdGlvbmFsLCBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IEZpbGVJbnB1dCB9IGZyb20gJy4uL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ25neC1tYXQtZmlsZS1pbnB1dCcsXG4gIHRlbXBsYXRlOiBgPGlucHV0ICNpbnB1dCBpZD1cIm1kLWlucHV0LWZpbGVcIiB0eXBlPVwiZmlsZVwiIFthdHRyLm11bHRpcGxlXT1cIm11bHRpcGxlPyAnJyA6IG51bGxcIj5cbjxzcGFuIGNsYXNzPVwiZmlsZW5hbWVcIj57eyBmaWxlTmFtZXMgfX08L3NwYW4+XG5gLFxuICBzdHlsZXM6IFtgOmhvc3R7ZGlzcGxheTppbmxpbmUtYmxvY2t9Omhvc3Q6bm90KC5maWxlLWlucHV0LWRpc2FibGVkKXtjdXJzb3I6cG9pbnRlcn1pbnB1dHt3aWR0aDowO2hlaWdodDowO29wYWNpdHk6MDtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDotMX0uZmlsZW5hbWV7ZGlzcGxheTppbmxpbmUtYmxvY2t9YF0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogTWF0Rm9ybUZpZWxkQ29udHJvbCwgdXNlRXhpc3Rpbmc6IEZpbGVJbnB1dENvbXBvbmVudCB9XVxufSlcbmV4cG9ydCBjbGFzcyBGaWxlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBNYXRGb3JtRmllbGRDb250cm9sPEZpbGVJbnB1dD4sIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHN0YXRpYyBuZXh0SWQgPSAwO1xuXG4gIHN0YXRlQ2hhbmdlcyA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIGZvY3VzZWQgPSBmYWxzZTtcbiAgY29udHJvbFR5cGUgPSAnZmlsZS1pbnB1dCc7XG5cbiAgQElucHV0KCkgYXV0b2ZpbGxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX3BsYWNlaG9sZGVyOiBzdHJpbmc7XG4gIHByaXZhdGUgX3JlcXVpcmVkID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWVQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBtdWx0aXBsZTogYm9vbGVhbjtcblxuICBASG9zdEJpbmRpbmcoKSBpZCA9IGBuZ3gtbWF0LWZpbGUtaW5wdXQtJHtGaWxlSW5wdXRDb21wb25lbnQubmV4dElkKyt9YDtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtZGVzY3JpYmVkYnknKSBkZXNjcmliZWRCeSA9ICcnO1xuXG4gIHNldERlc2NyaWJlZEJ5SWRzKGlkczogc3RyaW5nW10pIHtcbiAgICB0aGlzLmRlc2NyaWJlZEJ5ID0gaWRzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCB2YWx1ZSgpOiBGaWxlSW5wdXQgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5lbXB0eSA/IG51bGwgOiBuZXcgRmlsZUlucHV0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCBbXSk7XG4gIH1cbiAgc2V0IHZhbHVlKGZpbGVJbnB1dDogRmlsZUlucHV0IHwgbnVsbCkge1xuICAgIGlmIChmaWxlSW5wdXQpIHtcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShmaWxlSW5wdXQuZmlsZXMpO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGxhY2Vob2xkZXI7XG4gIH1cbiAgc2V0IHBsYWNlaG9sZGVyKHBsaCkge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gcGxoO1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VzLm5leHQoKTtcbiAgfVxuXG4gIGdldCBlbXB0eSgpIHtcbiAgICByZXR1cm4gIXRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC52YWx1ZSB8fCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUubGVuZ3RoID09PSAwO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQnKVxuICBnZXQgc2hvdWxkTGFiZWxGbG9hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkIHx8ICF0aGlzLmVtcHR5IHx8IHRoaXMudmFsdWVQbGFjZWhvbGRlciAhPT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgZ2V0IHJlcXVpcmVkKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlZDtcbiAgfVxuICBzZXQgcmVxdWlyZWQocmVxOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmVxdWlyZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkocmVxKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmZpbGUtaW5wdXQtZGlzYWJsZWQnKVxuICBnZXQgaXNEaXNhYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZDtcbiAgfVxuICBASW5wdXQoKVxuICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5kaXNhYmxlZDtcbiAgfVxuICBzZXQgZGlzYWJsZWQoZGlzOiBib29sZWFuKSB7XG4gICAgdGhpcy5zZXREaXNhYmxlZFN0YXRlKGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eShkaXMpKTtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlcy5uZXh0KCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBnZXQgZXJyb3JTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5uZ0NvbnRyb2wuZXJyb3JzICE9PSBudWxsICYmIHRoaXMubmdDb250cm9sLnRvdWNoZWQ7XG4gIH1cblxuICBvbkNvbnRhaW5lckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgaWYgKChldmVudC50YXJnZXQgYXMgRWxlbWVudCkudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnaW5wdXQnICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXQnKS5mb2N1cygpO1xuICAgICAgdGhpcy5mb2N1c2VkID0gdHJ1ZTtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIGh0dHBzOi8vYW5ndWxhci5pby9hcGkvZm9ybXMvQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQFNlbGYoKVxuICAgIHB1YmxpYyBuZ0NvbnRyb2w6IE5nQ29udHJvbCxcbiAgICBwcml2YXRlIGZtOiBGb2N1c01vbml0b3IsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICAgIGlmICh0aGlzLm5nQ29udHJvbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yID0gdGhpcztcbiAgICB9XG4gICAgZm0ubW9uaXRvcihfZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+IHtcbiAgICAgIHRoaXMuZm9jdXNlZCA9ICEhb3JpZ2luO1xuICAgICAgdGhpcy5zdGF0ZUNoYW5nZXMubmV4dCgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfb25DaGFuZ2UgPSAoXzogYW55KSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25Ub3VjaGVkID0gKCkgPT4ge307XG5cbiAgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgb2JqKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBhbnkpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignY2hhbmdlJywgWyckZXZlbnQnXSlcbiAgY2hhbmdlKGV2ZW50OiBhbnkpIHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IGV2ZW50LnRhcmdldC5maWxlcztcbiAgICBjb25zdCBmaWxlQXJyYXkgPSBbXTtcbiAgICBpZiAoZmlsZUxpc3QpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmlsZUFycmF5LnB1c2goZmlsZUxpc3RbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gbmV3IEZpbGVJbnB1dChmaWxlQXJyYXkpO1xuICAgIHRoaXMuX29uQ2hhbmdlKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXNvdXQnKVxuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgaXNEaXNhYmxlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm11bHRpcGxlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHRoaXMubXVsdGlwbGUpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGZpbGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZSA/IHRoaXMudmFsdWUuZmlsZU5hbWVzIDogdGhpcy52YWx1ZVBsYWNlaG9sZGVyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdGF0ZUNoYW5nZXMuY29tcGxldGUoKTtcbiAgICB0aGlzLmZtLnN0b3BNb25pdG9yaW5nKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cbn1cbiJdfQ==