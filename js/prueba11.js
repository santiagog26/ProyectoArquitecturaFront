url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var pedidos_cliente = []

var app2 = new Vue({
    el: '#el',
    data: {
        datos: pedidos_cliente,
        numero_orden: '',
        fecha: '',
        cliente_documento: '',
        empaquetado: '',
        domicilio: '',
        vendedor: ''
    },
    methods: {
        eliminar: function(){
            path = url + '/eliminar_cliente';
            axios.delete(path, { headers: {}, data: { documento_cliente: this.Doc } })
                .then(() => {
                    this.get_datos();
                })
                .catch((error) => {
                    console.log(error)
                    this.get_datos();
                })
            this.clear_products();
        }
    }
})