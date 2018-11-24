<?php

namespace App\Modelos;
class Categoria implements \JsonSerializable {
    private $id;
    private $nombre;

    public function _construct($datos = null){
        if(is_array($datos)){
            if (isset($datos['id'])) $this->id = $datos['id']; {
              $this->nombre  = $datos['nombre'];
                
            }
        }

    }
    public function jsonSerialize(){
        return [
          'id' =>(int) $this->id,
          'nombre' => $this->nombre
        ];
    }

    public function _get($propiedad){
       if (property_exists($this, $propiedad)) 
       {
           return $this ->$propiedad;
       }
    }

    public function _isset($propiedad){
        return isset($this->$propiedad;);
     }
 
}