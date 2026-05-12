import { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
  MenuItem,
  Select,
  InputLabel,
  Button,
  Checkbox,
  FormGroup,
} from "@mui/material";

export default function SimpleForm() {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    country: "",
    feedback: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 400, mx: "auto", mt: 5, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5">Registration Form</Typography>

      <TextField
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
      />
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name="gender"
          value={values.gender}
          onChange={handleChange}
          row
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <InputLabel>Country</InputLabel>
        <Select
          name="country"
          value={values.country}
          label="Country"
          onChange={handleChange}
        >
          <MenuItem value="egypt">Egypt</MenuItem>
          <MenuItem value="saudi">Saudi Arabia</MenuItem>
          <MenuItem value="emarti">Emarti</MenuItem>
          <MenuItem value="london">London</MenuItem>
          <MenuItem value="german">German</MenuItem>
        </Select>
      </FormControl>
      <FormGroup>
        <FormLabel>Skills</FormLabel>
        <FormControlLabel control={<Checkbox />} label="Dart" />
        <FormControlLabel control={<Checkbox />} label="Flutter" />
        <FormControlLabel control={<Checkbox />} label="OOP" />
        <FormControlLabel control={<Checkbox />} label="API" />
      </FormGroup>
      <TextField
        label="Your Feedback"
        name="feedback"
        value={values.feedback}
        onChange={handleChange}
        multiline
        minRows={3}
        placeholder="Your Feedback"
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>

      {submitted && (
        <Typography color="success.main" textAlign="center">
          Hi {values.firstName} {values.lastName}, Registered Successfully!
        </Typography>
      )}
    </Box>
  );
}