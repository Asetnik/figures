<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class FigureType extends Model
{
    public function figure(){
        return $this->hasMany(Figure::class);
    }

    public static function add($type) {
        $figureType = new static;
        $figureType->type = $type;
        return $figureType;
    }

    public function edit($fields) {
        $this->fill($fields);
        $this->save();
    }

    public function remove()
    {
        $this->delete();
    }

    public static function getTypeName($id) {
        return FigureType::find($id)->type;
    }

    protected $table = 'figures_type';
}