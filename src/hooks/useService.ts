import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useParams, useNavigate } from "react-router-dom";
export const useService = () => {
  const { addService, updateService, services, categorys } =
    useContext(GlobalContext);

  const params = useParams();
  const navigate = useNavigate();

  const [service, setService] = useState({
    id: "",
    title: "",
    description: "",
    category: "",
  });

  const handleChange = (e: any) => {
    if (
      e.target.name === "category" &&
      e.target.value === "none"
    ) {
      return;
    }

    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = (e: any) => {
    e.preventDefault();

    if (service.id) {
      updateService(service);
    } else {
      addService(service);
      console.log(service);
    }
    setService({
      id: "",
      title: "",
      description: "",
      category: "",
    });
    navigate("/");
  };

  useEffect(() => {
    const serviceFound = services.find(
      (service: any) => service.id === params.id
    );
    if (serviceFound) {
      setService(serviceFound);
    }
  }, [params.id, services]);

  return { service, handleChange, handleForm, categorys };
};
