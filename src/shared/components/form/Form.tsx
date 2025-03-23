import React from "react";
import styles from "./form.module.css";

interface IFormProps {
    children: React.ReactNode;
    onSubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void
}

const Form: React.FC<IFormProps> = ({children, onSubmitHandler}) => {
    return <form className={styles.form} onSubmit={onSubmitHandler}>
        {children}
    </form>
}

export default Form;