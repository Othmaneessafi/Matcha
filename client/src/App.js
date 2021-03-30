import React, {useEffect}  from 'react';
import Routes from './Routes/Routes';
import Alert from './components/shared/Alert'
import './App.css'
import socket from './socketConn';
import {NewNotif, GetNotif, OpenNotifSuccess} from './actions/notifAction';

function App(props) {
  useEffect(() => {
    props.store.dispatch(GetNotif());
    const handleNotif = (data) => {
      props.store.dispatch(NewNotif(data));
    }
    const handleOpenNotif = () => {
      props.store.dispatch(OpenNotifSuccess());
    }
    socket.on('new_notif', handleNotif);
    socket.on('openedNotif', handleOpenNotif);
  }, [])
  const handlerFunc =  () =>  {
    props.store.dispatch({type: "REJOIN_ROOM"});
  }
  socket.on('connect', handlerFunc)
  return (
    <div className="App">
      <Alert />
      <Routes />
    </div>
  );
}
export default App;