import { PipeTransform } from '@angular/core';
import { FileInputConfig } from '../model/file-input-config.model';
export declare class ByteFormatPipe implements PipeTransform {
    private config;
    private unit;
    constructor(config: FileInputConfig);
    transform(value: any, args?: any): any;
    private formatBytes(bytes, decimals?);
}
