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
    console.log(
      `Name: ${name} Email: ${email} Phone: ${phone} Subject: ${subject} Message: ${message}`
    );
    setShowModal({ state: "true", text: "Mensaje enviado correctamente" });
    reset();
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
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Maximo de caracteres alcanzado",
                },
                pattern: {
                  value: /^[ a-zA-Z0]+$/,
                  message: "Solo podes ingresar letras",
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
                  message: "El maximo de caracteres es 20",
                },
                minLength: {
                  value: 10,
                  message: "El minimo de caracteres es 10",
                },
                pattern: {
                  value: /^\d+$/,
                  message: "Solo podes ingresar numeros",
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
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 10,
                  message: "El minimo de caracteres es 10",
                },
                maxLength: {
                  value: 40,
                  message: "El maximo de caracteres es 40",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Debe introducir un email valido",
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
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 6,
                  message: "El asunto debe tener al menos 6 caracteres",
                },
                maxLength: {
                  value: 30,
                  message: "Maximo de caracteres alcanzado",
                },
                pattern: {
                  value: /^[ a-zA-Z0-9]+$/,
                  message: "Solo podes ingresar letras y numeros",
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
                  message: "El campo es requerido",
                },
                minLength: {
                  value: 10,
                  message: "El mensaje debe tener al menos 10 caracteres",
                },
                maxLength: {
                  value: 500,
                  message: "Maximo de caracteres alcanzado",
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