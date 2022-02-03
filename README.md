Se creo un componente table1 donde encontramos 3 botones en la parte superior para definir que tabla se desae ver, dependiendo el boton que se escoge se trae la informacion correspondiente para la tabla, posteriormente se encuentra la tabla con 3 columnas, el nombre, el tipo y las opciones, en las opciones podemos encontrar eliminar o actualizar el superheroe.
Al seleccionar la opcion actualizar se abre un modal con la informacion del superHeroe precargada enviando al componente edit el id del superheroe a actualizar y consultando al back la informacion del superheroe desde este componente para asi ponerla precargada en el formulario, al momento de actualizar se vuelve a precargar la tabla para mostrarla actualizada y se tiene en cuenta el boton inicial para precargar la informacion correcta.
Al seleccionar la opcion de eliminar se manda el id al back y se inhabilita de la tabla de datos y alli se precarga la tabla.

La informacion se recibe ordenada.


El componente edit se puede utilizar tambien para crear super heroe ya que solo se tendria que validar si se envia el Id o no. 






