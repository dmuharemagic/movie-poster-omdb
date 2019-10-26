import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alert } = alertContext;

  return (
    alert !== null && (
      <div className={`notification is-${alert.type} has-margin-top-2`}>
        <p>{alert.msg}</p>
      </div>
    )
  );
};

export default Alert;
