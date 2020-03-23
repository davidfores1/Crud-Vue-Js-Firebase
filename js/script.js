var app2 = new Vue({
 el:'#event',
 data:{
    variable:'Hola'
 }
 
})

Vue.filter("Mayus",function(cadena){
   return cadena.toUpperCase();
})
var app3 = new Vue({
   el:'#votos',
   data:{
      votos:0,
      nombre:"",
      apellido:""
   },
   methods:{
    votar:function(){
       this.votos++;
       console.log("this.votos");
    }
   },
   computed:{
      nombreCompleto:function(){
       return this.nombre + " " +this.apellido;   
      }
   }
   
  })