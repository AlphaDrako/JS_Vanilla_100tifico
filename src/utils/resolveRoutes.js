// va a pasar la ruta obtenida del valor anterior
const resolveRoutes = (route) => {
    if (route.length <= 3) {
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;