import { useState } from "react";
import FormValidation from "./FormValidation";
import Card from "./Card";
import "./Form.css";

function Form() {
  const [formulary, setFormulary] = useState({
    rut: "",
    patente: "",
  });

  const [invalidForm, setInvalidForm] = useState(false);

  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);

  const restFormState = () => {
    setInvalidForm(false);
    setSubmittedSuccessfully(false);
  };

  const rutHandler = (event) => {
    // restFormState();
    const rut = event.target.value.trim();
    setFormulary({ ...formulary, rut });
  };

  const patenteHandler = (event) => {
    // restFormState();
    const patente = event.target.value;
    setFormulary({ ...formulary, patente });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setSubmittedSuccessfully(false);

    const { rut, patente } = formulary;

    if (rut.length < 3) {
      setInvalidForm(true);
      return;
    }

    if (patente.length < 6) {
      setInvalidForm(true);
      return;
    }

    setInvalidForm(false);
    
    setSubmittedSuccessfully(true)
  };

  return (
    <>
      <div className="formulary">
        <h2>Permiso de Circulacion</h2>
        <form action="">
          <div>
            <label htmlFor="rut">Rut</label>
            <input type="text" id="rut" onChange={rutHandler} />
          </div>
          <div>
            <label htmlFor="patente">Patente</label>
            <input type="text" id="patente" onChange={patenteHandler} />
          </div>
          <button type="submit" onClick={submitHandler}>
            Consultar
          </button>
        </form>

        {invalidForm ? <FormValidation /> : null}

        {submittedSuccessfully ? <Card formulary={formulary} /> : null}
      </div>
    </>
  );
}

export default Form;
