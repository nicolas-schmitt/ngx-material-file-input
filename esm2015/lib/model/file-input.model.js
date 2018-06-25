/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The files to be uploaded
 */
export class FileInput {
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
function FileInput_tsickle_Closure_declarations() {
    /** @type {?} */
    FileInput.prototype._fileNames;
    /** @type {?} */
    FileInput.prototype._files;
    /** @type {?} */
    FileInput.prototype.delimiter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBLE1BQU07Ozs7O0lBR0osWUFBb0IsTUFBYyxFQUFVLFlBQW9CLElBQUk7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQU8sRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4RTs7OztJQUVELElBQUksS0FBSztRQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVELElBQUksU0FBUztRQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0tBQ3hCO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBmaWxlcyB0byBiZSB1cGxvYWRlZFxuICovXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0IHtcbiAgcHJpdmF0ZSBfZmlsZU5hbWVzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsZXM6IEZpbGVbXSwgcHJpdmF0ZSBkZWxpbWl0ZXI6IHN0cmluZyA9ICcsICcpIHtcbiAgICB0aGlzLl9maWxlTmFtZXMgPSB0aGlzLl9maWxlcy5tYXAoKGY6IEZpbGUpID0+IGYubmFtZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZ2V0IGZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlcyB8fCBbXTtcbiAgfVxuXG4gIGdldCBmaWxlTmFtZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZU5hbWVzO1xuICB9XG59XG4iXX0=