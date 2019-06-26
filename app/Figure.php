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
                return round(pi() * pow( $data['radius'], 2 ), 2);
            case 'triangle':
                $a = $data['firstSide'];
                $b = $data['secondSide'];
                $c = $data['thirdSide'];
                $p = 0.5 * ($a + $b + $c);
                return round(sqrt($p * ($p - $a) * ($p - $b) * ($p - $c)),2);
            case 'square':
                return round(pow( $data['height'], 2 ),2);
            case 'rectangle':
                return round(abs($data['secondX'] - $data['firstX'] ) * abs($data['secondY'] - $data['firstY']),2);
            default:
                return;
        }
    }
}