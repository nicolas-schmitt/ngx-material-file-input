/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
export var FileValidator;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3IvZmlsZS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sS0FBVyxhQUFhO0FBQTlCLFdBQWlCLGFBQWE7Ozs7Ozs7O0lBUzFCLHdCQUErQixLQUFhO1FBQ3hDLE1BQU0sQ0FBQyxVQUFDLE9BQXdCO1lBQzVCLHFCQUFNLElBQUksR0FBRyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsbUJBQUMsT0FBTyxDQUFDLEtBQWtCLEVBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksRUFBTixDQUFNLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFLLE9BQUEsR0FBRyxHQUFHLENBQUMsRUFBUCxDQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvSCxxQkFBTSxTQUFTLEdBQUcsS0FBSyxJQUFJLElBQUksQ0FBQztZQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixjQUFjLEVBQUU7b0JBQ1osVUFBVSxFQUFFLElBQUk7b0JBQ2hCLE9BQU8sRUFBRSxLQUFLO2lCQUNqQjthQUNKLENBQUM7U0FDTCxDQUFBO0tBQ0o7SUFYZSw0QkFBYyxpQkFXN0IsQ0FBQTtHQXBCWSxhQUFhLEtBQWIsYUFBYSxRQXFCN0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0b3JGbiwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgRmlsZUlucHV0IH0gZnJvbSAnLi4vbW9kZWwvZmlsZS1pbnB1dC5tb2RlbCc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgRmlsZVZhbGlkYXRvciB7XG5cbiAgICAvKipcbiAgICAgKiBGdW5jdGlvbiB0byBjb250cm9sIGNvbnRlbnQgb2YgZmlsZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBieXRlcyBtYXggbnVtYmVyIG9mIGJ5dGVzIGFsbG93ZWRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zXG4gICAgICovXG4gICAgZXhwb3J0IGZ1bmN0aW9uIG1heENvbnRlbnRTaXplKGJ5dGVzOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XG4gICAgICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzaXplID0gY29udHJvbCAmJiBjb250cm9sLnZhbHVlID8gKGNvbnRyb2wudmFsdWUgYXMgRmlsZUlucHV0KS5maWxlcy5tYXAoZiA9PiBmLnNpemUpLnJlZHVjZSgoYWNjLCBpKSA9PiBhY2MgKyBpLCAwKSA6IDA7XG4gICAgICAgICAgICBjb25zdCBjb25kaXRpb24gPSBieXRlcyA+PSBzaXplO1xuICAgICAgICAgICAgcmV0dXJuIGNvbmRpdGlvbiA/IG51bGwgOiB7XG4gICAgICAgICAgICAgICAgbWF4Q29udGVudFNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0dWFsU2l6ZTogc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgbWF4U2l6ZTogYnl0ZXNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19