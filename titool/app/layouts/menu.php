<nav class="navbar navbar-expand-lg navbar-dark bg-info">
  <a class="navbar-brand" href="<?php echo route::getBP().$item['path'] ;?>" >
    <img src="<?php echo route::getBP().DS.'img'.DS.'titool.png' ; ?>" width="50" height="50" class="shadow-lg  bg-white" >
  </a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
    <?php
      $menu = Helper::getMenu();
      foreach ($menu as $item) :
        ?> 
      <a class="nav-item nav-link active " href="<?php echo route::getBP().$item['path'] ;?>"><?php echo  $item['name'] ; ?><span class="sr-only">(current)</span></a>
      <?php endforeach; ?>
      

    </div>
  </div>
</nav>





