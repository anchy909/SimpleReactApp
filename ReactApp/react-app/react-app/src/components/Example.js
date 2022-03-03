import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

function Example() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div>
             <Button variant="contained">Hello World</Button>
      <br/>
      <Button variant="text">Text</Button>
      <br/>
      <Button variant="outlined">Outlined</Button>
      <br/>
      <Button
        variant="contained"
        color="secondary"
          onClick={() => {
            alert('clicked');
          }}>
          Click me
      </Button>
      <Button variant="contained" color="success">
           Success
      </Button>
      <Button variant="outlined" size="small">
          Small
        </Button>
        <Button variant="outlined" endIcon={<DeleteIcon />}>
        Delete
      </Button>

      <br/>

      <IconButton aria-label="delete" color="primary">
          <DeleteIcon />
      </IconButton>


      <Checkbox aria-label="Checkbox demo" defaultChecked color="success" />
      <Checkbox aria-label="Checkbox demo" color="default"/>

      <Box sx={{ minWidth: 120, width: 100 }}>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
                value={age}
                onChange={handleChange}
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>

          </FormControl>
      </Box>
        
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>

    <Button endIcon={<YouTubeIcon />}> YouTube </Button>


    <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>

      {/* <Typography variant="h1" component="h2">
  h1. Heading
</Typography>; */}
        </div>
    )
}

export default Example
