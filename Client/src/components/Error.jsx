import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function Error({error}) {
  return (
      <Alert severity="error" style={{display: 'felx', justifyContent: 'center'}}>
        <AlertTitle>Error</AlertTitle>
        {error}
      </Alert>
  );
}