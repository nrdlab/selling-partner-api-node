/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** Packing slip information. */
export interface PackingSlip {
  /**
   * Purchase order number of the shipment that the packing slip is for.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** A Base64encoded string of the packing slip PDF. */
  content: string;
  /** The format of the file such as PDF, JPEG etc. */
  contentType?: "application/pdf";
}

/** A list of packing slips. */
export interface PackingSlipList {
  pagination?: Pagination;
  packingSlips?: PackingSlip[];
}

/** The request body for the createShippingLabels operation. */
export interface CreateShippingLabelsRequest {
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** Warehouse code of vendor. */
  shipFromParty: PartyIdentification;
  /** A list of the packages in this shipment. */
  containers?: Container[];
}

export interface SubmitShippingLabelsRequest {
  shippingLabelRequests?: ShippingLabelRequest[];
}

export interface ShippingLabelRequest {
  /**
   * Purchase order number of the order for which to create a shipping label.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** Warehouse code of vendor. */
  shipFromParty: PartyIdentification;
  /** A list of the packages in this shipment. */
  containers?: Container[];
}

/** Details of the item being shipped. */
export interface Item {
  /** Item Sequence Number for the item. This must be the same value as sent in order for a given item. */
  itemSequenceNumber: number;
  /** Buyer's Standard Identification Number (ASIN) of an item. Either buyerProductIdentifier or vendorProductIdentifier is required. */
  buyerProductIdentifier?: string;
  /** The vendor selected product identification of the item. Should be the same as was sent in the purchase order, like SKU Number. */
  vendorProductIdentifier?: string;
  /** Total item quantity shipped in this shipment. */
  shippedQuantity: ItemQuantity;
}

export interface PackedItem {
  /** Item Sequence Number for the item. This must be the same value as sent in the order for a given item. */
  itemSequenceNumber: number;
  /** Buyer's Standard Identification Number (ASIN) of an item. Either buyerProductIdentifier or vendorProductIdentifier is required. */
  buyerProductIdentifier?: string;
  /** The piece number of the item in this container. This is required when the item is split across different containers. */
  pieceNumber?: number;
  /** The vendor selected product identification of the item. Should be the same as was sent in the Purchase Order, like SKU Number. */
  vendorProductIdentifier?: string;
  /** Total item quantity packed in the container. */
  packedQuantity: ItemQuantity;
}

export interface PartyIdentification {
  /** Assigned Identification for the party. */
  partyId: string;
  /** Identification of the party by address. */
  address?: Address;
  /** Tax registration details of the entity. */
  taxRegistrationDetails?: TaxRegistrationDetails[];
}

/** Details about a shipment. */
export interface ShipmentDetails {
  /**
   * This field indicates the date of the departure of the shipment from vendor's location. Vendors are requested to send ASNs within 30 minutes of departure from their warehouse/distribution center or at least 6 hours prior to the appointment time at the Amazon destination warehouse, whichever is sooner. Shipped date mentioned in the Shipment Confirmation should not be in the future.
   * @format date-time
   */
  shippedDate: string;
  /** Indicate the shipment status. */
  shipmentStatus: "SHIPPED" | "FLOOR_DENIAL";
  /** Provide the priority of the shipment. */
  isPriorityShipment?: boolean;
  /** The vendor order number is a unique identifier generated by a vendor for their reference. */
  vendorOrderNumber?: string;
  /**
   * Date on which the shipment is expected to reach the buyer's warehouse. It needs to be an estimate based on the average transit time between the ship-from location and the destination. The exact appointment time will be provided by buyer and is potentially not known when creating the shipment confirmation.
   * @format date-time
   */
  estimatedDeliveryDate?: string;
}

/** Details for the shipment status update given by the vendor for the specific package. */
export interface StatusUpdateDetails {
  /** This is required to be provided for every package and should match with the trackingNumber sent for the shipment confirmation. */
  trackingNumber: string;
  /** Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. */
  statusCode: string;
  /** Provides a reason code for the status of the package that will provide additional information about the transportation status. */
  reasonCode: string;
  /**
   * The date and time when the shipment status was updated. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
   * @format date-time
   */
  statusDateTime: string;
  /** Address of the party. */
  statusLocationAddress: Address;
  /** Details about the estimated delivery window. */
  shipmentSchedule?: ShipmentSchedule;
}

/** Tax registration details of the entity. */
export interface TaxRegistrationDetails {
  /** Tax registration type for the entity. */
  taxRegistrationType?: "VAT" | "GST";
  /** Tax registration number for the party. For example, VAT ID. */
  taxRegistrationNumber: string;
  /** Address associated with the tax registration number. */
  taxRegistrationAddress?: Address;
  /** Tax registration message that can be used for additional tax related details. */
  taxRegistrationMessages?: string;
}

/** Address of the party. */
export interface Address {
  /** The name of the person, business or institution at that address. */
  name: string;
  /** First line of the address. */
  addressLine1: string;
  /** Additional street address information, if required. */
  addressLine2?: string;
  /** Additional street address information, if required. */
  addressLine3?: string;
  /** The city where the person, business or institution is located. */
  city?: string;
  /** The county where person, business or institution is located. */
  county?: string;
  /** The district where person, business or institution is located. */
  district?: string;
  /** The state or region where person, business or institution is located. */
  stateOrRegion?: string;
  /** The postal code of that address. It contains a series of letters or digits or both, sometimes including spaces or punctuation. */
  postalCode?: string;
  /** The two digit country code in ISO 3166-1 alpha-2 format. */
  countryCode: string;
  /** The phone number of the person, business or institution located at that address. */
  phone?: string;
}

/** Details about the estimated delivery window. */
export interface ShipmentSchedule {
  /**
   * Date on which the shipment is expected to reach the customer delivery location. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
   * @format date-time
   */
  estimatedDeliveryDateTime?: string;
  /**
   * This field indicates the date and time at the start of the appointment window scheduled to deliver the shipment. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
   * @format date-time
   */
  apptWindowStartDateTime?: string;
  /**
   * This field indicates the date and time at the end of the appointment window scheduled to deliver the shipment. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00.
   * @format date-time
   */
  apptWindowEndDateTime?: string;
}

/** Physical dimensional measurements of a container. */
export interface Dimensions {
  /** The length of the container. */
  length: Decimal;
  /** The width of the container. */
  width: Decimal;
  /** The height of the container. */
  height: Decimal;
  /** The unit of measure for dimensions. */
  unitOfMeasure: "IN" | "CM";
}

/** The weight. This object is required when using the [`submitShipmentConfirmations`](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-2021-12-28-reference#submitshipmentconfirmations) operation. */
export interface Weight {
  /** The unit of measurement. */
  unitOfMeasure: "KG" | "LB";
  /** The measurement value. */
  value: Decimal;
}

/** A decimal number with no loss of precision. Useful when precision loss is unacceptable, as with currencies. Follows RFC7159 for number representation.  <br>**Pattern** : `^-?(0|([1-9]\\d*))(\\.\\d+)?([eE][+-]?\\d+)?$`. */
export type Decimal = string;

/** Details of item quantity. */
export interface ItemQuantity {
  /** Quantity of units shipped for a specific item at a shipment level. If the item is present only in certain packages or pallets within the shipment, please provide this at the appropriate package or pallet level. */
  amount: number;
  /** Unit of measure for the shipped quantity. */
  unitOfMeasure: string;
}

export interface ShippingLabelList {
  pagination?: Pagination;
  shippingLabels?: ShippingLabel[];
}

/** Details of the shipment label. */
export interface LabelData {
  /** Identifier for the package. The first package will be 001, the second 002, and so on. This number is used as a reference to refer to this package from the pallet level. */
  packageIdentifier?: string;
  /** Package tracking identifier from the shipping carrier. */
  trackingNumber?: string;
  /** Ship method to be used for shipping the order. Amazon defines Ship Method Codes indicating shipping carrier and shipment service level. Ship Method Codes are case and format sensitive. The same ship method code should returned on the shipment confirmation. Note that the Ship Method Codes are vendor specific and will be provided to each vendor during the implementation. */
  shipMethod?: string;
  /** Shipping method name for internal reference. */
  shipMethodName?: string;
  /** This field will contain the Base64encoded string of the shipment label content. */
  content: string;
}

export interface ShippingLabel {
  /**
   * This field will contain the Purchase Order Number for this order.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** Warehouse code of vendor. */
  shipFromParty: PartyIdentification;
  /** Format of the label. */
  labelFormat: "PNG" | "ZPL";
  /** Provides the details of the packages in this shipment. */
  labelData: LabelData[];
}

export interface SubmitShipmentConfirmationsRequest {
  shipmentConfirmations?: ShipmentConfirmation[];
}

export interface ShipmentConfirmation {
  /**
   * Purchase order number corresponding to the shipment.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** Shipment information. */
  shipmentDetails: ShipmentDetails;
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** Warehouse code of vendor. */
  shipFromParty: PartyIdentification;
  /** Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package. */
  items: Item[];
  /** Provide the details of the items in this shipment. If any of the item details field is common at a package or a pallet level, then provide them at the corresponding package. */
  containers?: Container[];
}

export interface SubmitShipmentStatusUpdatesRequest {
  /** @minItems 1 */
  shipmentStatusUpdates?: ShipmentStatusUpdate[];
}

export interface ShipmentStatusUpdate {
  /**
   * Purchase order number of the shipment for which to update the shipment status.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** ID of the selling party or vendor. */
  sellingParty: PartyIdentification;
  /** Warehouse code of vendor. */
  shipFromParty: PartyIdentification;
  /** Provide the details about the status of the shipment at that particular point of time. */
  statusUpdateDetails: StatusUpdateDetails;
}

export interface CustomerInvoiceList {
  pagination?: Pagination;
  customerInvoices?: CustomerInvoice[];
}

export interface Pagination {
  /** A generated string used to pass information to your next request. If NextToken is returned, pass the value of NextToken to the next request. If NextToken is not returned, there are no more order items to return. */
  nextToken?: string;
}

export interface CustomerInvoice {
  /**
   * The purchase order number for this order.
   * @pattern ^[a-zA-Z0-9]+$
   */
  purchaseOrderNumber: string;
  /** The Base64encoded customer invoice. */
  content: string;
}

export interface TransactionReference {
  /** GUID to identify this transaction. This value can be used with the Transaction Status API to return the status of this transaction. */
  transactionId?: string;
}

/** A list of error responses returned when a request is unsuccessful. */
export interface ErrorList {
  errors: Error[];
}

/** Error response returned when the request is unsuccessful. */
export interface Error {
  /** An error code that identifies the type of error that occurred. */
  code: string;
  /** A message that describes the error condition. */
  message: string;
  /** Additional details that can help the caller understand or fix the issue. */
  details?: string;
}

export interface Container {
  /** The type of container. */
  containerType: "Carton" | "Pallet";
  /** The container identifier. */
  containerIdentifier: string;
  /** The tracking number. */
  trackingNumber?: string;
  /** The manifest identifier. */
  manifestId?: string;
  /** The date of the manifest. */
  manifestDate?: string;
  /** The shipment method. This property is required when calling the submitShipmentConfirmations operation, and optional otherwise. */
  shipMethod?: string;
  /** SCAC code required for NA VOC vendors only. */
  scacCode?: string;
  /** Carrier required for EU VOC vendors only. */
  carrier?: string;
  /** An integer that must be submitted for multi-box shipments only, where one item may come in separate packages. */
  containerSequenceNumber?: number;
  /** Physical dimensional measurements of a container. */
  dimensions?: Dimensions;
  /** The weight. This object is required when using the [`submitShipmentConfirmations`](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-2021-12-28-reference#submitshipmentconfirmations) operation. */
  weight?: Weight;
  /** A list of packed items. */
  packedItems: PackedItem[];
}
