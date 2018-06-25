/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe, Optional, Inject } from '@angular/core';
import { FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from '../model/file-input-config.model';
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
export { ByteFormatPipe };
function ByteFormatPipe_tsickle_Closure_declarations() {
    /** @type {?} */
    ByteFormatPipe.prototype.unit;
    /** @type {?} */
    ByteFormatPipe.prototype.config;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnl0ZS1mb3JtYXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL3BpcGUvYnl0ZS1mb3JtYXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RSxPQUFPLEVBQ0wsZUFBZSxFQUNmLHlCQUF5QixFQUMxQixNQUFNLGtDQUFrQyxDQUFDOztJQVF4Qyx3QkFHVSxNQUF1QjtRQUF2QixXQUFNLEdBQU4sTUFBTSxDQUFpQjtRQUUvQixJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO0tBQy9DOzs7Ozs7SUFFRCxrQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QixLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztLQUNkOzs7Ozs7SUFFTyxvQ0FBVzs7Ozs7Y0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDbEQsRUFBRSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEIsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3pCO1FBQ0QscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLHFCQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDZixxQkFBTSxFQUFFLEdBQUcsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUN6QixxQkFBTSxLQUFLLEdBQUc7WUFDWixJQUFJLENBQUMsSUFBSTtZQUNULEdBQUcsR0FBRyxDQUFDO1lBQ1AsR0FBRyxHQUFHLENBQUM7WUFDUCxHQUFHLEdBQUcsQ0FBQztZQUNQLEdBQUcsR0FBRyxDQUFDO1lBQ1AsR0FBRyxHQUFHLENBQUM7WUFDUCxHQUFHLEdBQUcsQ0FBQztZQUNQLEdBQUcsR0FBRyxDQUFDO1lBQ1AsR0FBRyxHQUFHLENBQUM7U0FDUixDQUFDO1FBQ0YscUJBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7OztnQkF4QzVFLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7Ozs7Z0JBTkMsZUFBZSx1QkFXWixRQUFRLFlBQ1IsTUFBTSxTQUFDLHlCQUF5Qjs7eUJBZHJDOztTQVNhLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtLCBPcHRpb25hbCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGaWxlSW5wdXRDb25maWcsXG4gIE5HWF9NQVRfRklMRV9JTlBVVF9DT05GSUdcbn0gZnJvbSAnLi4vbW9kZWwvZmlsZS1pbnB1dC1jb25maWcubW9kZWwnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdieXRlRm9ybWF0J1xufSlcbmV4cG9ydCBjbGFzcyBCeXRlRm9ybWF0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwcml2YXRlIHVuaXQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoTkdYX01BVF9GSUxFX0lOUFVUX0NPTkZJRylcbiAgICBwcml2YXRlIGNvbmZpZzogRmlsZUlucHV0Q29uZmlnXG4gICkge1xuICAgIHRoaXMudW5pdCA9IGNvbmZpZyA/IGNvbmZpZy5zaXplVW5pdCA6ICdCeXRlJztcbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAocGFyc2VJbnQodmFsdWUsIDEwKSA+PSAwKSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZm9ybWF0Qnl0ZXMoK3ZhbHVlLCArYXJncyk7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0Qnl0ZXMoYnl0ZXM6IG51bWJlciwgZGVjaW1hbHM/OiBudW1iZXIpIHtcbiAgICBpZiAoYnl0ZXMgPT09IDApIHtcbiAgICAgIHJldHVybiAnMCAnICsgdGhpcy51bml0O1xuICAgIH1cbiAgICBjb25zdCBCID0gdGhpcy51bml0LmNoYXJBdCgwKTtcbiAgICBjb25zdCBrID0gMTAyNDtcbiAgICBjb25zdCBkbSA9IGRlY2ltYWxzIHx8IDI7XG4gICAgY29uc3Qgc2l6ZXMgPSBbXG4gICAgICB0aGlzLnVuaXQsXG4gICAgICAnSycgKyBCLFxuICAgICAgJ00nICsgQixcbiAgICAgICdHJyArIEIsXG4gICAgICAnVCcgKyBCLFxuICAgICAgJ1AnICsgQixcbiAgICAgICdFJyArIEIsXG4gICAgICAnWicgKyBCLFxuICAgICAgJ1knICsgQlxuICAgIF07XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IoTWF0aC5sb2coYnl0ZXMpIC8gTWF0aC5sb2coaykpO1xuICAgIHJldHVybiBwYXJzZUZsb2F0KChieXRlcyAvIE1hdGgucG93KGssIGkpKS50b0ZpeGVkKGRtKSkgKyAnICcgKyBzaXplc1tpXTtcbiAgfVxufVxuIl19