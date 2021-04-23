import * as Yup from "yup";

// remember to add validation for image/boolean values bruh

const validationSchema = Yup.object({
  isCompleted: Yup.bool().required("Required"),
});

export default validationSchema;
