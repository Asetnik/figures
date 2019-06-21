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
                return pi() * pow( $data['radius'], 2 );
            case 'triangle':
                $a = $data['firstSide'];
                $b = $data['secondSide'];
                $c = $data['thirdSide'];
                $p = 0.5 * ($a + $b + $c);
                return sqrt($p * ($p - $a) * ($p - $b) * ($p - $c));
            case 'square':
                return pow( $data['height'], 2 );
            case 'rectangle':
                return $data['height'] * $data['width'];
            default:
                return;
        }
    }
}