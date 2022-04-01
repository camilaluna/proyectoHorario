import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Bienvenida from '@/components/Horario/Bienvenida'

import NuevoHorario from '@/components/Horario/NuevoHorario'
import ListHorario from '@/components/Horario/ListHorario'
import EditHorario from '@/components/Horario/EditHorario'
import EliminarHorario from '@/components/Horario/EliminarHorario'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/horarios',
      name: 'ListHorario',
      component: ListHorario
    },
    {
      path: '/horarios/nuevo',
      name: 'NuevoHorario',
      component: NuevoHorario
    },
    {
      path: '/bienvenida',
      name: 'Bienvenida',
      component: Bienvenida
    },
    {
      path: '/horarios/:horarioId/edit',
      name: 'EditHorario',
      component: EditHorario
    },
    {
      path: '/horarios/:horarioId/eliminar',
      name: 'EliminarHorario',
      component: EliminarHorario
    }
  ],
  mode: 'history'
})
