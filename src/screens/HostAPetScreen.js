import React from 'react';
import HostAPetForm from '../components/HostAPetForm'

function HostAPetScreen({setTrigger, user}) {
  return (<div>
      <HostAPetForm setTrigger={setTrigger} user={user}/>
  </div>
  )
}

export default HostAPetScreen;
