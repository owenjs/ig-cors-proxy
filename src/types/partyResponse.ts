type airTableFieldType = 'singleLineText' | 'checkbox';

interface prFields {
  // Internal Key
  key: String;

  // AirTable Field Type
  type: airTableFieldType;

  // AirTable Field Name
  fieldName: String;

  // Bullet point seperated key for the data in the 3rd party response JSON
  apiMap: String;

};

type prMetaData = Array<prFields>;

interface PartyResponse {
  // The response from the 3rd party API
  response: Array<any>;
  metaData: prMetaData;
};
