import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function MyButton() {
    return (
        <Stack spacing={2} direction="row" className='buttons'>
        <Button variant="text">Text</Button>
        <Button variant="text">Text</Button>
      </Stack>
    );
}   