export interface UserInfo {
  id: number;
  username: string;
}

export interface UserList {
  current_page: number;
  data: Person[];
  last_page: number;
  per_page: number;
  total: number;
}

export interface Person {
  id: number;
  phone: string;
  email: string;
  openid: string;
  uid: string;
  nickname: string;
  inviter: string;
  add_time: string;
}
