var app = new Vue({
    el:"#app",
    data:{
        cedula:'',
        nombre:'',
        cargo:'',
        lista:[],
        txtBuscar:''
     },
    computed:{
        listaFiltrada: function(){
            var arreglo = this.lista;
            var consulta = this.txtBuscar;
    
            if(consulta!==""){
                arreglo = arreglo.filter(function(obj){
                    return(
                        obj.nombre.toLowerCase() + ' ' + obj.cargo.toLowerCase()
                    ).indexOf(consulta.toLowerCase()) > -1
                });
            }
    
            return arreglo;
        }
    
    },
    
     methods:{
         agregar:function(cedula,nombre,cargo){
            var item = {
                cedula: cedula,
                nombre:nombre,
                cargo: cargo
            }
            app.lista.push(item);
            firebase.database().ref("empleados/"+cedula).set(item);
         },
    
         eliminar:function(cedula){
            var index = app.lista.map(function(obj){
                return obj.cedula;
            }).indexOf(cedula);
    
            app.lista.splice(index,1);
    
            firebase.database().ref("empleados/"+cedula).remove();
         },
    
         listarElementos: function(){
    
            var datos = firebase.database().ref("empleados");
            datos.on("value", function(snapshot) {
                snapshot.forEach(function(childSnapshot) {
                    var childData = childSnapshot.val();
                    app.lista.push(childData);
                });
            });
         }
        },
    
        created: function()
        {
           this.listarElementos();
        }
    });