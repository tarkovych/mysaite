<?php

namespace application\controllers;

use application\core\Controller;

class MaineController extends Controller
{

    public function indexAction()
    {
       $this->view->render("HOME");
    }

}
