url = 'ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var losdatos = []

var app = new Vue({
    el: '#app',
    data: {
        datos: losdatos,
        numero_orden: '',
        fecha: '',
        cliente_documento: '',
        empaquetado: '',
        domicilio: '',
        vendedor: ''
    },
    created: function () {
        this.f();
    },
    methods: {
        f: function () {
            axios.get(url + '/get_pedidos')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})