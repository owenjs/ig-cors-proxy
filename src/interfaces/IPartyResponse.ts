export type airTableFieldType = 'singleLineText' | 'checkbox';

export interface prFields {
  // Internal Key
  key: string;

  // AirTable Field Type
  type: airTableFieldType;

  // AirTable Field Name
  fieldName: string;

  // Bullet point seperated key for the data in the 3rd party response JSON
  apiMap: string;

};

export type prMetaData = Array<prFields>;

export interface PartyResponse {
  // The response from the 3rd party API
  response: Array<object>;
};

export interface I3rdPartyAPI {
  // The response from the 3rd party API
  metaData: prMetaData,
  [key: string]: any
};
