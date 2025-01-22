import { ReactNode, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible({variant = 'danger', message = "", heading = ""} : {
    variant?: string,
    message?: string | ReactNode,
    heading?: string
}) {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant={variant} onClose={() => setShow(false)} dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  return (<></>)
}

export default AlertDismissible;
