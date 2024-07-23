import "../css/Form.css";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import Nav from "./Nav";
import { useAlertContext } from "../context/alertContext";

const Form = () => {
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      comment: ""
    },
    onSubmit: (values, { resetForm }) => {
      onOpen("success", "Thank you! Your reservation has been confirmed.");
      resetForm(); // Reset form after submission
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required'),
      lastName: Yup.string()
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      comment: Yup.string()
    }),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    formik.handleSubmit();
  }

  return (
    <div id="form">
      <Nav />
      <VStack
        justifyContent="center"
        alignItems="center"
        padding={10}>
        <Box
          className="form-box"
          border="1px solid black"
          backgroundColor="white">
          <Heading
            className="form-heading"
            as="h1"
            textAlign="center"
            marginTop={0}
            marginBottom={30}>Provide details</Heading>
          <form onSubmit={handleSubmit}>
            <VStack align="left" spacing={20}>
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel
                  className="form-label"
                  htmlFor="firstName">
                  First Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage color="red">{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.lastName && !!formik.errors.lastName}>
                <FormLabel
                  className="form-label"
                  htmlFor="lastName">
                  Last Name
                </FormLabel>
                <Input
                  id="lastName"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage color="red">{formik.errors.lastName}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel
                  className="form-label"
                  htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage color="red">{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel
                  className="form-label"
                  htmlFor="comment">Comments (Optional)</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  fontSize="large"
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  height="15vh"
                />
              </FormControl>
              <Button
                className="form-button"
                type="submit"
                width="full"
                cursor="pointer">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </div>
  )
}

export default Form;
