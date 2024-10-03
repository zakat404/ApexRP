import { FC } from "react";
import { Server, TopMenuData } from "./pay-models"
import './assets/styles/compiled-css/MenuServerDropdown.css'

interface ServerDropdownProps {
  servers: Server[];
  selectedServer: Server;
  onServerChange: (selectedServer: Server) => void;
}

const MenuServerDropdown: FC<ServerDropdownProps> = ({ servers, selectedServer, onServerChange }) => {
  return(
    <>
      <div className="selecting-serv">
        <span className="title">Выберете сервер</span>
        <select
          className="select-btn"
          value={selectedServer.id}
          onChange={(e) => {
            const selectedId = e.target.value;
            const newSelectedServer = servers.find(
              (server) => server.id === selectedId
            ) as Server;
            onServerChange(newSelectedServer);
          }}
        >
          {servers.map((server) => (
            <option className="server-select" key={server.id} value={server.id}>
              {server.name}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default MenuServerDropdown