Accordion for angular material. [View DEMO](https://oscar09.github.io/xmdAccordion/demo.html).

###How to install

**bower install xmdAccordion**

Add the following lines in your html:
```
<link rel="stylesheet" href="bower_components/xmdAccordion/build/xmdAccordion.css">
<script type="text/javascript" src="bower_components/xmdAccordion/build/xmdAccordion.directive.js"></script>
```
In your JS file:
```javascript
angular.module('clientApp', ['xmd.directives.xmdAccordion']);
```

##Usage
```html
<xmd-accordion label="HEADER TITLE" is-open="true" flex>
	<p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
</xmd-accordion>
```

##Attributes
* **isOpen** If "true" the accordion starts expanded.
* **label** Accordion label.
