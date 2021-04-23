import * as Yup from "yup";

const validationSchema = Yup.object({
  owner: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),

  house: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),

  task: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),

  priority: Yup.number()
    .max(10, "Choose a number from 1 to 10")
    .min(1, "Choose a number from 1 to 10")
    .required("Required"),
});

export default validationSchema;
