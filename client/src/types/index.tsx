export type Chat = {
  _id: string;
  users: Array<User>;
};

export type User = {
  _id: string;
  name: string;
  avatar: string;
  description: string;
  location: string;
  twitter: string;
};

export type Message = {
  _id: string;
  user: User;
  message: string;
  date: Date;
};

export enum NavigationItem {
  USERS,
  CHATS,
  CHANNEL,
}
