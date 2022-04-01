<template lang="html">
    <div class="container">
        <div class="row">
            <div class="col text-left">
                <br>
                <h2 style="text-align:center">Horario de Clases</h2>
                <div class="col text-right">
                    <b-button pill variant="outline-success" :to="{name: 'NuevoHorario'}">Nuevo Horario</b-button>
                </div>
                <br>
                <div class="col-md-12">
                    <b-table striped hover :items="horarios" :fields="fields">

                        <template v-slot:cell(action)="data">
                            <b-button variant="outline-primary" :to="{ name:'EditHorario', params: {horarioId: data.item.id}}">Editar</b-button>
                            <b-button variant="outline-danger" :to="{ name:'EliminarHorario', params: {horarioId: data.item.id}}">Eliminar</b-button>
                        </template>

                    </b-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data () {
        return {
            fields: [
                {key: 'title', label: 'Día'},
                {key: 'description', label: 'Asignaturas'},
                {key: 'action', label: 'Acción a realizar'}
            ],
            horarios: []
        }
    },
    methods: {
        getHorarios () {
            const path = 'http://127.0.0.1:8000/api/v1.0/horarios/'
            axios.get(path).then((response) => {
                this.horarios = response.data
            })
            .catch((error) => {
                console.log(error)
            })
        }
    },
    //metodo para ejecutar el gethorarios
    created(){
        this.getHorarios()
    }

}
</script>

<style lang="css" scoped>
</style>
