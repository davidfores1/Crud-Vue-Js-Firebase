Vue.component('mi-primer-componente',{
    props:['msg'],
    template:'<div class="alert alert-primary" role="alert"><button type="button" class="btn btn-info" style="margin:10px" v-on:click="saludar(msg)">click</button>{{msg}}</div>',
    methods:{
        saludar:function(valor) {
            alert("Hola " + valor)
        }
    }
});

var app1 = new Vue({
    el:"#app",
    data:{
     
    }
})