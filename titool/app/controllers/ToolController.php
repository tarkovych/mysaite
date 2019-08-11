<?php 

class ToolController extends Controller
{

    public $customer = [1,2]; 


    public function AgeAction()
    {
      
      
        $this->setView();
        $this->renderLayout();
        
    }


}