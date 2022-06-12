# Bsale Test by Andres Marquez

## Documentación - RESTAPI

- Listar la información de los productos y su categoria

### Estructura JSON

Al realizar una petición HTTP, el servicio retornara un JSON con la siguiente estructura:

#### Productos 

```sh
[
  {
        "id": 104,
        "name": "ABSOLUT",
        "url_image": "https://dojiw2m9tvv09.cloudfront.net/11132/product/absolut21381.png",
        "price": 8990,
        "discount": 30,
        "category": 7
    }
]
```
- "id", identificador del producto de tipo entero.
- "name", nombre del producto de tipo cadena de caracteres.
- "url_image", url de la imagen del producto de tipo cadena de caracteres.
- "price", precio del producto de tipo entero.
- "discount", descuento(%) del producto de tipo entero.
- "category", identificador de la categoria del producto de tipo entero.


#### Categorias 

```sh
[
  {
        "id": 1,
        "name": "bebida energetica"
  }
]
```
- "id", identificador del categoria de tipo entero.
- "name", nombre de la categoria de tipo cadena de caracteres.


### Metodos y endpoints

#### Dashboard de la aplicación

- [Dashboard-Bsale-Andres--Marquez](https://bsale-test-andres-marquez.herokuapp.com) - https://bsale-test-andres-marquez.herokuapp.com

#### GET lista de productos

```sh
GET  /api/products
```

#### GET lista de productos ordenados por nombre decrecientemente

```sh
GET  /api/products/order/z-a
```

#### GET lista de productos ordenados por precio ascendentemente

```sh
GET  /api/products/order/lowerprice
```

#### GET lista de productos ordenados por precio decrecientemente

```sh
GET  /api/products/order/higherprice
```

#### GET lista de productos ordenados por descuento

```sh
GET  /api/products/order/discount
```

#### GET lista de productos ordenados por categoria

```sh
GET  /api/products/category/:id
```
- Donde ':id' representaria el indentificador de la categoria

#### GET lista de productos buscados por nombre

```sh
GET  /api/products/:name
```
- Donde ':name' representaria un dato de busqueda relacionado proporcionado por el frontend

#### GET lista de categorias

```sh
GET  /api/category
```