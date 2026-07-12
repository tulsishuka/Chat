export interface IMessage {
  _id: string;
  username: string;
  message: string;
  createdAt: string;
  updatedAt?: string;
}

export interface ISendMessage {
  username: string;
  message: string;
}

export interface IMessageResponse {
  success: boolean;
  data: IMessage;
}

export interface IMessagesResponse {
  success: boolean;
  count: number;
  data: IMessage[];
}