import React, { useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);

  const { alerts } = alertContext;

  return (
    alerts.length > 0 &&
    alerts.map(alert => (
      <div className={`notification is-${alert.type} has-margin-top-2`}>
        <p>{alert.msg}</p>
      </div>
    ))
  );
};

export default Alert;
