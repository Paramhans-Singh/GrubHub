import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Success({message}) {
  return (
      <Alert severity="success" style={{display: 'felx', justifyContent: 'center'}}>
        <AlertTitle>Message</AlertTitle>
        {message}
      </Alert>
  );
}