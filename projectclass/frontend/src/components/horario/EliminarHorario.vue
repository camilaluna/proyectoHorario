<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col">

                <h3>¿Seguro de eliminar este horario?</h3>
                <p>Título : {{ this.element.title }}</p>
                <p>Descripción : {{ this.element.description }}</p>

            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-button v-on:click="eliminarHorario" variant="danger">Eliminar</b-button>
            </div>
        </div>
        
    </div>

    

</template>

<script>

import axios from 'axios'
import swal from 'sweetalert'

export default {
    data () {
        return {
            horarioId: this.$route.params.horarioId,
            element: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        getHorario(){
            
            const path = `http://127.0.0.1:8000/api/v1.0/horarios/${this.horarioId}/`

            axios.get(path).then((response) => {

                this.element.title = response.data.title
                this.element.description = response.data.description

            })
            .catch((error) => {
                console.log(error)
            })
        },
        eliminarHorario () {
            const path = `http://127.0.0.1:8000/api/v1.0/horarios/${this.horarioId}/`

            axios.delete(path).then((response) => {
                swal("Horario eliminado exitosamente!", "", "warning")
                .then((value) => {
                location.href = '/horarios'
                });
                
            })
            .catch((error) => {
                swal("No es posible eliminar el horario", "", "error")
            })
        }
    },
    created() {
        this.getHorario()
    }

}
</script>
<style lang="css" scoped>
</style>
