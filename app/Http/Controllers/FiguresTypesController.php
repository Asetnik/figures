<?php

namespace App\Http\Controllers;

use App\Figure;
use App\FigureType;
use Illuminate\Http\Request;
use PhpParser\Node\Expr\Cast\Object_;

class FiguresTypesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $types = FigureType::all();
        return response()->json($types);
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
        //
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
        //
    }

    public function figureStatistics()
    {
        $totalSquare = Figure::all()->sum('square');
        $statistics = [];
        $typeNames = FigureType::all()->pluck('type')->toArray();
        foreach ($typeNames as $type) {
            $totalSquareType = Figure::join('figures_type', 'figures.type_id', '=', 'figures_type.id')->where('type', '=', $type)->sum('square');
            $statistics[$type] = round($totalSquareType / $totalSquare * 100, 2);
        }
        return response()->json($statistics);
    }
}
