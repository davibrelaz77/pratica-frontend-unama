import{useForm} from "react-hook-form";

const { register, handleSubmit } = useForm();

<input name="ultimo_nome" ref = { register ({ pattern: /^[A-Za-z]+$/i }) } />