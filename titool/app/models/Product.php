<?php

/**
 * Class Product
 */
class Product extends Model
{

    /**
     * Product constructor.
     */
    function __construct()
    {
        $this->table_name = "products";
        $this->id_column = "id";
    }
   
}