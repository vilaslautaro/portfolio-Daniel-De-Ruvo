import { useState } from "react";
import { SectionForm, Form, Textarea, Btn } from "./Form.styles";

const MyForm = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <SectionForm>
            <Form>
                <input type="text" className="form-control" placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="text" className="form-control" placeholder="Cellphone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form>
            <Form>
                <input type="email" className="form-control" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="text" className="form-control" placeholder="Subject" id="address" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form>    
            <Textarea className="form-control" placeholder="Message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <Btn onClick={handleSubmit} type="submit">SEND MESSAGE</Btn> 
        </SectionForm>
    );
};

export default MyForm;