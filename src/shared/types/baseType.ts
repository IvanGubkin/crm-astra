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
  properties?: {[key: string]: string};
  password: string;
  pincode: string;
};