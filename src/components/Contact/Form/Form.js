import {
  SectionForm,
  Form,
  Textarea,
  Btn,
  ErrorMessage,
  BoxInput,
  ContainerTextArea,
} from "./Form.styles";
import { useForm } from "react-hook-form";
import ModalMessageForm from "components/ModalMessageForm";

const MyForm = () => {
  const { showModal, ModalMessage, setShowModal } = ModalMessageForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = ({ name, email, phone, subject, message }) => {
    try{
      reset();
      setShowModal({ state: "true", text: "Message sent successfully" });
      console.log(name + email + phone + subject + message)
    }
    catch{
      setShowModal({ state: "false", text: "An error occurred while sending the message" });
    }
  };

  return (
    <>
      <SectionForm>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <BoxInput className="input__name">
            <input
              type="text"
              placeholder="Name"
              className={errors.name && "input__error"}
              {...register("name", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 3,
                  message: "The name must be at least 3 characters long",
                },
                maxLength: {
                  value: 20,
                  message: "Maximum characters reached",
                },
                pattern: {
                  value: /^[ a-zA-Z0]+$/,
                  message: "You can only enter letters",
                },
              })}
            />
            <ErrorMessage>{errors?.name?.message}</ErrorMessage>
          </BoxInput>
          <BoxInput className="input__phone">
            <input
              type="tel"
              className={errors.phone && "input__error"}
              placeholder="Cellphone"
              {...register("phone", {
                maxLength: {
                  value: 20,
                  message: "The maximum number of characters is 20",
                },
                minLength: {
                  value: 10,
                  message: "The minimum number of characters is 10",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "You can only enter numbers",
                },
              })}
            />
            <ErrorMessage> {errors?.phone?.message} </ErrorMessage>
          </BoxInput>
          <BoxInput className="input__email">
            <input
              className={errors.email && "input__error"}
              type="email"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 10,
                  message: "The minimum number of characters is 10",
                },
                maxLength: {
                  value: 40,
                  message: "The maximum number of characters is 40",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "You must enter a valid email address",
                },
              })}
            />
            <ErrorMessage> {errors?.email?.message} </ErrorMessage>
          </BoxInput>
          <BoxInput className="input__subject">
            <input
              type="text"
              placeholder="Subject"
              className={errors.subject && "input__error"}
              {...register("subject", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 6,
                  message: "The subject line must be at least 6 characters long",
                },
                maxLength: {
                  value: 30,
                  message: "Maximum characters reached",
                },
                pattern: {
                  value: /^[ a-zA-Z0-9]+$/,
                  message: "You can only enter letters and numbers",
                },
              })}
            />
            <ErrorMessage> {errors?.subject?.message} </ErrorMessage>
          </BoxInput>
          <ContainerTextArea>
            <Textarea
              placeholder="Message"
              className={errors.message && "input__error"}
              {...register("message", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 10,
                  message: "The message must be at least 10 characters long",
                },
                maxLength: {
                  value: 500,
                  message: "Maximum characters reached",
                },
              })}
            />
            <ErrorMessage> {errors?.message?.message} </ErrorMessage>
          </ContainerTextArea>
          <Btn type="submit">SEND MESSAGE</Btn>
        </Form>
      </SectionForm>
      {showModal && <ModalMessage />}
    </>
  );
};

export default MyForm;
