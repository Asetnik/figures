<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Figure extends Model
{
    protected $fillable = ['type_id', 'data'];

    public function type() {
        return $this->hasOne(Figure_type::class);
    }

    public static function add($fields) {
        $figure = new static;
        $figure->fill($fields);
        $figure->setSquare();
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

    public function setSquare() {
        $type = $this->type()->type;
        $data = $this->data;
        $this->square = calcSquare($type, $data);
    }

    public function calcSquare($type, $data) {
        switch ($type){
            case 'circle':
                return pow($data->radius, 2) * pi();
            default:
                return;
        }
    }
}