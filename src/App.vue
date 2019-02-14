<template>

  <div class="app" >  
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">VitrineShoes</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li>          
        </ul>
      </div>
    </nav>   
    <header>             
          <img src="https://www.gocolonial.com/CTAimages/females-car-orange.jpg" class="img-fluid" alt="Responsive image">              
    </header>
    <nav class="navbar navbar-light bg-light justify-content-end">      
      <form >
          <div class="form-row align-items-center">
            <div class="col-auto my-1">        
              <input class="form-control" type="search" placeholder="Procurar" aria-label="Search">          
            </div>
            <div class="col-auto my-1">        
              <button class="btn btn-primary " type="submit">Procurar</button>
            </div>
          </div>
        
      </form>
    </nav>

    <main>      
      <div class=" container">
        <br>
        <div class=" card-deck">
          <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
          <div class="card">
            <img src="" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Last updated 3 mins ago</small>
            </div>
          </div>
        </div>       
          
      </div> 
    </main>

    <footer>        
    </footer>

  </div>

</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Seja bem vindo!'
    }
  }
}
</script>

<style>

</style>
