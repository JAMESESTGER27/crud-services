import { Fragment, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import ButtonGeneral from "../Button";
import Form from "../Form";
import Item from "../Item";
import "./styles.css";
const ListItem = () => {
  const {
    services,
    deleteService,
    typeSelect,
    categorys,
    setTypeSelect,
  } = useContext(GlobalContext);

  return (
    <Fragment>
      <h1 style={{ textAlign: "center" }}>Servicios</h1>
      <div className="services">
        {categorys !== undefined &&
          categorys.map((cat, i) => (
            <ButtonGeneral
              key={i}
              type="button"
              className="services__btn"
              onClick={() => setTypeSelect(cat)}
            >
              {cat}
            </ButtonGeneral>
          ))}
      </div>
      <div
        className="list_item"
        style={{
          justifyContent:
            services.length === 0 ? "center" : "start",
          gap: services.length === 0 ? "0" : "30px",
        }}
      >
        <div
          className="container_list_item"
          style={{
            height:
              services.length === 0
                ? "max-content"
                : "100%",
          }}
        >
          {services.length === 0 ? (
            <img
              src="https://media0.giphy.com/media/kEnWxubmPcriREFbi0/200w.gif?cid=82a1493b5ve9yswkwn03tszpw0ymq0pn9evq9fnxkmtvcquo&rid=200w.gif&ct=g"
              alt="gif"
              className="list_item-gif"
            />
          ) : (
            services
              .filter((service) => {
                if (typeSelect === "Todos") {
                  return true;
                }
                if (typeSelect === "Hogar") {
                  return service.category === "Hogar";
                }
                if (typeSelect === "Autos") {
                  return service.category === "Autos";
                }
                if (typeSelect === "Salud") {
                  return service.category === "Salud";
                }
                return service;
              })
              .map(({ title, description, id }) => (
                <Item
                  key={title}
                  title={title}
                  description={description}
                  id={id}
                  deleteService={deleteService}
                />
              ))
          )}
        </div>
        <Form />
      </div>
    </Fragment>
  );
};

export default ListItem;
