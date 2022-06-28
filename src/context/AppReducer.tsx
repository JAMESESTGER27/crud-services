export default function appReducer(
  state: any,
  action: any
) {
  switch (action.type) {
    case "ADD_SERVICE":
      return {
        services: [...state.services, action.payload],
      };
    case "DELETE_SERVICE":
      return {
        services: state.services.filter(
          (service: any) => service.id !== action.payload
        ),
      };
    case "UPDATE_SERVICE":
      const updateService = action.payload;

      const updateServices = state.services.map(
        (service: any) => {
          if (service.id === updateService.id) {
            service.title = updateService.title;
            service.description = updateService.description;
            service.category = updateService.category;
          }
          return service;
        }
      );

      return {
        services: updateServices,
      };
    case "SET_TYPE_SELECTED":
      return {
        ...state,
        typeSelect: action.payload,
      };

    case "SET_TYPE_CATEGORY":
      return {
        ...state,
        categorys: action.payload,
      };

    default:
      break;
  }
}
