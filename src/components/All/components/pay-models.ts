export interface Server {
  id: string;
  name: string;
}

export interface TopMenuData {
  selectedServer: Server;
  amount: number;
  email: string;
}