export interface UserFileData {
  handle: string;
  moralisId?: string;
  link?: string;
  image?: string;
}

export interface UserData extends UserFileData {
  imageUrl?: string;
}

export interface TeamData extends UserFileData {
  members: string[];
  imageUrl?: string;
  paymentAddresses: {
    chain: string;
    address: string;
  }[];
}

export interface PaymentAddress {
  address: string;
  chain: string;
  id: string;
}

export interface TeamCreateRequest {
  teamName: string;
  members: string[];
  polygonAddress: string;
  ethereumAddress?: string;
  link?: string;
  image?: string;
}

export interface TeamUpdateRequest {
  teamName: {
    oldValue: string;
    newValue: string;
  };
  members: {
    oldValue: string[];
    newValue: string[];
  };
  polygonAddress: {
    oldValue: string;
    newValue: string;
  };
  ethereumAddress?: {
    oldValue: string;
    newValue: string;
  };
  link?: {
    oldValue: string;
    newValue: string;
  };
  image?: string;
}
