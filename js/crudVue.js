var app = new Vue({
el:'#app',
data:{
   clave:'',
   titulo:'',
   descripcion:'',
   lista:[],
},
methods:{
    agregar:function(clave,titulo,descripcion){
        var item ={
            clave:clave,
            titulo:titulo,
            descripcion:descripcion
        }
        app.lista.push(item);
    }
}
})