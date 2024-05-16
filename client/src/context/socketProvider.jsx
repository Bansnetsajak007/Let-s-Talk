import { createContext, useMemo, useContext } from "react";
import {io} from 'socket.io-client'
import PropTypes from 'prop-types';

const SocketContext = createContext(null);

export const useSocket = () => {
    const socket = useContext(SocketContext);
    return socket;
  };

export const SocketProvider = (props) => {
    const socket = useMemo(() => io("https://letstalk-piqq.onrender.com"), []);
    return (
        <SocketContext.Provider value={socket} >
            {props.children}
        </SocketContext.Provider >
    )
}

SocketProvider.propTypes = {
    children: PropTypes.node.isRequired
};