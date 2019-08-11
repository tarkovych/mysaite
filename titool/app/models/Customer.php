<?php

/**
 * Class User
 */
class Customer extends Model
{

    /**
     * @return string
     */
    function __construct()
    {
        $this->table_name = "customer";
    }

}