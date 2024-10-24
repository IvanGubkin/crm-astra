export type LoginType = {
  username: string;
  password: string;
};

export type RegisterType = {
  name: string;
  description: string;
  owner_name: string;
  owner_email: string;
  owner_phone: string;
  properties?: { [key: string]: string };
  password: string;
  pincode: string;
};

export type AddressType = {
  address: string;
  country: string;
  region: string;
  region_type: string;
  area: string;
  area_type: string;
  city: string;
  city_type: string;
  settlement: string;
  settlement_type: string;
  street: string;
  street_type: string;
  house: string;
  house_type: string;
  house_fias_id: string;
  block: string;
  block_type: string;
  floor: string;
  flat: string;
  flat_type: string;
  flat_fias_id: string;
  room?: string;
  room_type?: string;
  geo_lat?: number;
  geo_lon?: number;
  unparsed_parts?: string;
  qc?: number;
};

export type UserType = {
  name: string;
  phone: string;
  email: string;
  country?: string;
  region?: string;
  city?: string;
  address?: AddressType;
  lat?: number;
  lon?: number;
  paid: boolean;
  active: boolean;
  state: string;
  role: string;
  regdate: string;
  sms_count: number;
  comment: string;
  properties: {
    [key: string]: string;
  };
  lastconnect: string;
  lastdevicetype: string;
  lastdevicesystem: string;
  lastdevicedetails: string;
  lastip: string;
  balance: number;
  processinglimit: number;
  balancelimit: number;
  processingcount: number;
  workerpercent: number;
  lastupdatedate: string;
  profile_updated: string;
  photoloaded: boolean;
  profile_photo: string;
  pin: string;
  pintime: string;
  notify_email_enabled: boolean;
  id: string;
  categories: [
    {
      [id: string]: string;
    },
  ];
  sub_categories: [
    {
      [id: string]: string;
    },
  ];
};
