<?php

namespace App\Http\Controllers;

use App\Figure;
use App\FigureType;
use Illuminate\Http\Request;

class FiguresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $figures = Figure::orderByDesc('square')->join('figures_type', 'figures.type_id', '=', 'figures_type.id')->select('figures.id', 'square', 'type')->get();
        return response()->json($figures);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $typeId = $request->get('type_id');
        $typeName = FigureType::getTypeName($typeId);
        $data = $request->get('data');
        $figure = new Figure;
        $figure->type_id = $typeId;
        $figure->data = json_encode($data);
        $square = Figure::calcSquare($typeName, $data);
        $figure->square = $square;
        $figure->save();
        return response()->json($square);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if($figure = Figure::find($id)) {
            $figure->delete();
            return response()->json('deleted');
        } else {
            return response()->json('not deleted');
        }
    }
}