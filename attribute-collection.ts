import { Attribute } from "./attribute.ts";

/**
 * A collection of attributes. This implementation ensures the uniqueness of
 * Attribute keys by overwriting any pre-existing Attribute if there is a a duplicate key.
 */
export abstract class AttributeCollection {
  private attributes: Map<Attribute["key"], Attribute> = new Map();

  constructor() {}

  /**
   * Sets an attribute, given the key and value separately
   */
  setAttribute(key: Attribute["key"], value: Attribute["value"]): void {
    this.attributes.set(key, { key, value });
  }

  /**
   * Adds a pre-created Attribute to the collection
   */
  addAttribute(attribute: Attribute) {
    this.setAttribute(attribute.key, attribute.value);
  }

  /**
   * Adds an array of pre-created Attributes to the collection
   */
  addAttributes(attribute: Attribute[]) {
    attribute.forEach((attr) => this.addAttribute(attr));
  }

  /**
   * Returns an array of all the Attributes in the collection
   * The order of the array us unspecified
   */
  getAttributes(): Attribute[] {
    return Array.from(this.attributes.values());
  }

  /**
   * Returns an Attribute from the collection, given a key; returns null if the key does not exist
   */
  getAttribute(key: Attribute["key"]): Attribute | null {
    return this.attributes.get(key) ?? null;
  }
}
