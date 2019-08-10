<?php

namespace application\controllers;

use application\core\Controller;

class AccountController extends Controller
{
    public function before()
    {

        $this->view->layout = "custom";
    }
    public function loginAction()
    {
        // $this->view->redirect("/");
        $this->view->render("ENTER");
    }
    public function registerAction()
    {

        $this->view->render("REGISTR");
    }
}
