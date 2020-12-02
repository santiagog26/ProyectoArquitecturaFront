url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var losdatos = []
var losdatos_usuario = []
var losdatos_clientes = []
var losdatos_productos = []

var app = new Vue({
    el: '#tabla_orden',
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
var app = new Vue({
    el: '#tabla_usuarios',
    data: {
        datos: losdatos_usuario,
    },
    created: 
    function () {
        this.usuarios();
    },
    
    methods: {
        usuarios: function () {
            axios.get(url + '/get_usuarios')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})

var app = new Vue({
    el: '#tabla_clientes',
    data: {
        datos: losdatos_clientes,
    },
    created: function () {
        this.clientes();
    },
    methods: {
        clientes: function () {
            axios.get(url + '/get_clientes')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})


var app = new Vue({
    el: '#tabla_producto',
    data: {
        datos: losdatos_productos,
    },
    created: function () {
        this.productos();
    },
    methods: {
        productos: function () {
            axios.get(url + '/get_producto')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})