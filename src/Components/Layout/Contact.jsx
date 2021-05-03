import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import Button from "Components/Button/Button";
import { contactUs } from "Services";
import { toast } from "Utils/toast";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "40px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: " 20px 30px",
    borderRadius: 5,
    border: `1px solid ${theme.color.border}`,
    boxShadow: theme.shadows[2],
    "& .MuiTextField-root": {
      margin: "13px 0",
      "& input": {
        ...theme.font.s14w500,
        background: "#FFFFFF",
        borderRadius: 5,
        border: "none",
        padding: "15px 17px",
        "&::placeholder": {
          color: "#A2ABB8",
          fontSize: 15,
          verticalAlign: "middle",
        },
      },
    },
    "& button": {
      width: "100%",
    },
  },
}));

function Contact() {
  const classes = useStyles();
  const { register, handleSubmit, errors, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async data => {
    setLoading(true);
    await contactUs(data)
      .then(() => {
        toast("Thank you, we will be in touch shortly", "success");
        reset();
      })
      .catch(() => {});
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Name"
          name="name"
          helperText="This field is required"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.name}
        />
        <TextField
          label="Phone Number"
          name="phone_number"
          helperText="This field is required"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.phone_number}
        />
        <TextField
          label="Email"
          name="email"
          helperText="This field is required"
          variant="outlined"
          inputRef={register({ required: true })}
          error={errors.email}
        />
        <Button color="primary" disabled={loading}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default Contact;
