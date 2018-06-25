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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS12YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtbWF0ZXJpYWwtZmlsZS1pbnB1dC8iLCJzb3VyY2VzIjpbImxpYi92YWxpZGF0b3IvZmlsZS12YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUdBLE1BQU0sS0FBVyxhQUFhO0FBQTlCLFdBQWlCLGFBQWE7Ozs7Ozs7O0lBUzFCLHdCQUErQixLQUFhO1FBQ3hDLE1BQU0sQ0FBQyxDQUFDLE9BQXdCLEVBQTBCLEVBQUU7WUFDeEQsdUJBQU0sSUFBSSxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxtQkFBQyxPQUFPLENBQUMsS0FBa0IsRUFBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ILHVCQUFNLFNBQVMsR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO1lBQ2hDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGNBQWMsRUFBRTtvQkFDWixVQUFVLEVBQUUsSUFBSTtvQkFDaEIsT0FBTyxFQUFFLEtBQUs7aUJBQ2pCO2FBQ0osQ0FBQztTQUNMLENBQUE7S0FDSjtJQVhlLDRCQUFjLGlCQVc3QixDQUFBO0dBcEJZLGFBQWEsS0FBYixhQUFhLFFBcUI3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRvckZuLCBBYnN0cmFjdENvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBGaWxlSW5wdXQgfSBmcm9tICcuLi9tb2RlbC9maWxlLWlucHV0Lm1vZGVsJztcblxuZXhwb3J0IG5hbWVzcGFjZSBGaWxlVmFsaWRhdG9yIHtcblxuICAgIC8qKlxuICAgICAqIEZ1bmN0aW9uIHRvIGNvbnRyb2wgY29udGVudCBvZiBmaWxlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGJ5dGVzIG1heCBudW1iZXIgb2YgYnl0ZXMgYWxsb3dlZFxuICAgICAqXG4gICAgICogQHJldHVybnNcbiAgICAgKi9cbiAgICBleHBvcnQgZnVuY3Rpb24gbWF4Q29udGVudFNpemUoYnl0ZXM6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcbiAgICAgICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBjb250cm9sICYmIGNvbnRyb2wudmFsdWUgPyAoY29udHJvbC52YWx1ZSBhcyBGaWxlSW5wdXQpLmZpbGVzLm1hcChmID0+IGYuc2l6ZSkucmVkdWNlKChhY2MsIGkpID0+IGFjYyArIGksIDApIDogMDtcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbiA9IGJ5dGVzID49IHNpemU7XG4gICAgICAgICAgICByZXR1cm4gY29uZGl0aW9uID8gbnVsbCA6IHtcbiAgICAgICAgICAgICAgICBtYXhDb250ZW50U2l6ZToge1xuICAgICAgICAgICAgICAgICAgICBhY3R1YWxTaXplOiBzaXplLFxuICAgICAgICAgICAgICAgICAgICBtYXhTaXplOiBieXRlc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=