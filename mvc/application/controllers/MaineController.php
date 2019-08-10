<?php

namespace application\controllers;

use application\core\Controller;


class MaineController extends Controller
{

    public function indexAction()
    {
       $result =  $this->model->getNews() ; 
      $vars= [
          "news"=>$result 
      ] ;
        $this->view->render("HOME",$vars);
        

    }

}
