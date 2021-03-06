url = 'http://ec2-54-236-54-145.compute-1.amazonaws.com:5000';
var losdatos = []
var losdatos_usuario = []
var losdatos_clientes = []
var losdatos_productos = []
var losdatos_comentarios = []

var app = new Vue({
    el: '#tabla_orden',
    data: {
        datos: losdatos,
        numero_orden: '',
        fecha: '',
        cliente_documento: '',
        empaquetado: '',
        domicilio: '',
        vendedor: '',
        ord: ''
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
        },
        f_c: function (u) {
            axios.get(url + '/get_pedidos_cliente/' + u.cliente_documento)
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        },
        eliminar_orden: function(){
            path = url + '/eliminar_pedido';
            axios.delete(path, { headers: {}, data: { numero_orden: this.ord } })
                .then(() => {
                    
                })
                .catch((error) => {
                    console.log(error)
                })
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

var app = new Vue({
    el: '#tabla_comentarios',
    data: {
        datos: losdatos_comentarios,
    },
    created: function () {
        this.comentarios();
    },
    methods: {
        comentarios: function () {
            axios.get(url + '/get_comentarios')
                .then(response => {
                    this.datos = response.data.results;
                    console.log('Get list users', this.datos);
                })
                .catch(error => console.error(error));
        }
    }
})