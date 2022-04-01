<template>
  
  <div >
    
    <nav class="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRzFs45eRTx9eL6YiL6AeNdsn_zHgTqx9KIKAyX8jZgda0XNjcFu3w35jwx2MqihyX2VQ&usqp=CAU" height="50px" width="80px">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/horarios">
            <i class="fa fa-home"></i>
            INICIO
            </a>
        </li>
      </ul>
      
      <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="text" placeholder="Buscar" aria-label="Search">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Buscar</button>
      </form>
    </div>
  </nav>
    <div id="app">
      <router-view/>
    </div>
    </div> 
    
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #378b50;
  margin-top: 60px;
}
</style>
