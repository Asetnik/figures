<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use function PHPSTORM_META\type;

class Figure extends Model
{
    protected $fillable = ['type_id', 'data', 'square'];

    public function type() {
        return $this->hasOne(FigureType::class);
    }

    public static function add($fields) {
        $figure = new static;
        $figure->fill($fields);
        $figure->save();
        return $figure;
    }

    public function edit($fields) {
        $this->fill($fields);
        $this->save();
    }

    public function remove()
    {
        $this->delete();
    }

    public static function calcSquare($typeName, $data) {
        switch ($typeName){
            case 'circle':
                return pi() * pow( $data["radius"], 2 );
            default:
                return;
        }
    }
}