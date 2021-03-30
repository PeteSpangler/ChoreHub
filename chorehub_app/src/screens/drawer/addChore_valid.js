import * as Yup from "yup";

const validationSchema = Yup.object({
  owner: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters")
    .required("Required"),
  task: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters"),
  dueDate: Yup.date()
    .max(10, "Must be less than 10 characters")
    .min(3, "Must be at least 3 characters"),
  seller: Yup.string()
    .max(200, "Must be less than 200 characters")
    .min(3, "Must be at least 3 characters"),
  dateCompeleted: Yup.string()
    .max(10, "Must be less than 10 numbers")
    .min(3, "Must be more than 3 numbers"),
});

export default validationSchema;
