/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Optional, Inject } from '@angular/core';
import { FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from '../model/file-input-config.model';
export class ByteFormatPipe {
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
function ByteFormatPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    ByteFormatPipe.prototype.unit;
    /** @type {?} */
    ByteFormatPipe.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL3BpcGUvYnl0ZS1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLHlCQUF5QixFQUMxQixNQUFNLGtDQUFrQyxDQUFDO0FBSzFDLE1BQU07Ozs7SUFHSixZQUdVLE1BQXVCO1FBQXZCLFdBQU0sR0FBTixNQUFNLENBQWlCO1FBRS9CLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDL0M7Ozs7OztJQUVELFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBVTtRQUM5QixFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN6QztRQUNELE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDZDs7Ozs7O0lBRU8sV0FBVyxDQUFDLEtBQWEsRUFBRSxRQUFpQjtRQUNsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDekI7UUFDRCx1QkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsdUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNmLHVCQUFNLEVBQUUsR0FBRyxRQUFRLElBQUksQ0FBQyxDQUFDO1FBQ3pCLHVCQUFNLEtBQUssR0FBRztZQUNaLElBQUksQ0FBQyxJQUFJO1lBQ1QsR0FBRyxHQUFHLENBQUM7WUFDUCxHQUFHLEdBQUcsQ0FBQztZQUNQLEdBQUcsR0FBRyxDQUFDO1lBQ1AsR0FBRyxHQUFHLENBQUM7WUFDUCxHQUFHLEdBQUcsQ0FBQztZQUNQLEdBQUcsR0FBRyxDQUFDO1lBQ1AsR0FBRyxHQUFHLENBQUM7WUFDUCxHQUFHLEdBQUcsQ0FBQztTQUNSLENBQUM7UUFDRix1QkFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7OztZQXhDNUUsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25COzs7O1lBTkMsZUFBZSx1QkFXWixRQUFRLFlBQ1IsTUFBTSxTQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE9wdGlvbmFsLCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEZpbGVJbnB1dENvbmZpZyxcbiAgTkdYX01BVF9GSUxFX0lOUFVUX0NPTkZJR1xufSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0LWNvbmZpZy5tb2RlbCc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2J5dGVGb3JtYXQnXG59KVxuZXhwb3J0IGNsYXNzIEJ5dGVGb3JtYXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHByaXZhdGUgdW5pdDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChOR1hfTUFUX0ZJTEVfSU5QVVRfQ09ORklHKVxuICAgIHByaXZhdGUgY29uZmlnOiBGaWxlSW5wdXRDb25maWdcbiAgKSB7XG4gICAgdGhpcy51bml0ID0gY29uZmlnID8gY29uZmlnLnNpemVVbml0IDogJ0J5dGUnO1xuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnksIGFyZ3M/OiBhbnkpOiBhbnkge1xuICAgIGlmIChwYXJzZUludCh2YWx1ZSwgMTApID49IDApIHtcbiAgICAgIHZhbHVlID0gdGhpcy5mb3JtYXRCeXRlcygrdmFsdWUsICthcmdzKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBmb3JtYXRCeXRlcyhieXRlczogbnVtYmVyLCBkZWNpbWFscz86IG51bWJlcikge1xuICAgIGlmIChieXRlcyA9PT0gMCkge1xuICAgICAgcmV0dXJuICcwICcgKyB0aGlzLnVuaXQ7XG4gICAgfVxuICAgIGNvbnN0IEIgPSB0aGlzLnVuaXQuY2hhckF0KDApO1xuICAgIGNvbnN0IGsgPSAxMDI0O1xuICAgIGNvbnN0IGRtID0gZGVjaW1hbHMgfHwgMjtcbiAgICBjb25zdCBzaXplcyA9IFtcbiAgICAgIHRoaXMudW5pdCxcbiAgICAgICdLJyArIEIsXG4gICAgICAnTScgKyBCLFxuICAgICAgJ0cnICsgQixcbiAgICAgICdUJyArIEIsXG4gICAgICAnUCcgKyBCLFxuICAgICAgJ0UnICsgQixcbiAgICAgICdaJyArIEIsXG4gICAgICAnWScgKyBCXG4gICAgXTtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihNYXRoLmxvZyhieXRlcykgLyBNYXRoLmxvZyhrKSk7XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQoKGJ5dGVzIC8gTWF0aC5wb3coaywgaSkpLnRvRml4ZWQoZG0pKSArICcgJyArIHNpemVzW2ldO1xuICB9XG59XG4iXX0=