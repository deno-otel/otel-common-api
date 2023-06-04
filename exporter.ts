export enum ExportResult {
  SUCCESS,
  FAILURE,
}

/**
 * For each signal type, there will be a corresponding exporter.
 *
 * Per the OpenTelemetry spec, none of these methods should run indefinitely. However, it is
 * up to the SDK implementer to decide how long a timeout should be.
 */
export interface Exporter<T> {
  export(signals: T[]): Promise<ExportResult>;
  shutdown(): Promise<void>;
  forceFlush(): Promise<void>;
}
