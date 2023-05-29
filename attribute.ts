// See https://opentelemetry.io/docs/specs/otel/common/#attribute for the rules here
type AttributeValue = string | boolean | number;
type HomogenousArray<T extends AttributeValue> = T extends boolean ? boolean[]
  : T extends never ? never
  : T[];

/**
 * Attributes are key-value pairs of any type that can be used to add additional
 * information to OpenTelemetry entities.
 */
export interface Attribute {
  key: string;
  value: AttributeValue | HomogenousArray<AttributeValue>;
}
