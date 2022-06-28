import { useService } from "../../hooks/useService";
import ButtonGeneral from "../Button";

import "./styles.css";

const Form = () => {
  const { service, handleChange, handleForm, categorys } =
    useService();

  return (
    <div
      className="container_form"
      style={{ margin: service.id && "5rem auto" }}
    >
      <form className="form" onSubmit={handleForm}>
        <div className="container__form-fields">
          <div className="container__form-title">
            <h3>Servicio</h3>
          </div>
          <div className="container__form-field-name">
            <label>Nombre</label>
            <input
              type="text"
              name="title"
              value={service.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container__form-field-description">
            <label>Descripción</label>
            <input
              type="text"
              name="description"
              value={service.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="container__form-field-category">
            <label>Elige el tipo de servicio: </label>
            <select
              name="category"
              value={service.category}
              onChange={handleChange}
            >
              <option value="none">Seleccionar</option>
              {categorys !== undefined &&
                categorys
                  .filter((btn) => btn !== "Todos")
                  .map((btn) => (
                    <option value={btn} key={btn}>
                      {btn}
                    </option>
                  ))}
            </select>
          </div>
        </div>
        <div className="container__form-btn">
          <ButtonGeneral
            type="submit"
            className="form_btn_succes"
          >
            {service.id ? "Editar" : "Grabar"}
          </ButtonGeneral>
          {service.id && (
            <ButtonGeneral
              type="submit"
              className="form_btn_cancel"
            >
              Cancel
            </ButtonGeneral>
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;
