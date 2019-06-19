<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Figure_type extends Model
{
    public function figure(){
        return $this->hasMany(Figure::class);
    }

    public static function add($type) {
        $figure_type = new static;
        $figure_type->type = $type;
        return $figure_type;
    }

    public function edit($fields) {
        $this->fill($fields);
        $this->save();
    }

    public function remove()
    {
        $this->delete();
    }
}
