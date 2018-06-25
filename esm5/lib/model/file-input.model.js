/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The files to be uploaded
 */
var /**
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
 * The files to be uploaded
 */
export { FileInput };
function FileInput_tsickle_Closure_declarations() {
    /** @type {?} */
    FileInput.prototype._fileNames;
    /** @type {?} */
    FileInput.prototype._files;
    /** @type {?} */
    FileInput.prototype.delimiter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pbnB1dC5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1tYXRlcmlhbC1maWxlLWlucHV0LyIsInNvdXJjZXMiOlsibGliL21vZGVsL2ZpbGUtaW5wdXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7QUFBQTtJQUdFLG1CQUFvQixNQUFjLEVBQVUsU0FBd0I7b0RBQUE7UUFBaEQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWU7UUFDbEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQU8sSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3hFO0lBRUQsc0JBQUksNEJBQUs7Ozs7UUFBVDtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQztTQUMxQjs7O09BQUE7SUFFRCxzQkFBSSxnQ0FBUzs7OztRQUFiO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDeEI7OztPQUFBO29CQWhCSDtJQWlCQyxDQUFBOzs7O0FBZEQscUJBY0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBmaWxlcyB0byBiZSB1cGxvYWRlZFxuICovXG5leHBvcnQgY2xhc3MgRmlsZUlucHV0IHtcbiAgcHJpdmF0ZSBfZmlsZU5hbWVzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfZmlsZXM6IEZpbGVbXSwgcHJpdmF0ZSBkZWxpbWl0ZXI6IHN0cmluZyA9ICcsICcpIHtcbiAgICB0aGlzLl9maWxlTmFtZXMgPSB0aGlzLl9maWxlcy5tYXAoKGY6IEZpbGUpID0+IGYubmFtZSkuam9pbihkZWxpbWl0ZXIpO1xuICB9XG5cbiAgZ2V0IGZpbGVzKCkge1xuICAgIHJldHVybiB0aGlzLl9maWxlcyB8fCBbXTtcbiAgfVxuXG4gIGdldCBmaWxlTmFtZXMoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZmlsZU5hbWVzO1xuICB9XG59XG4iXX0=