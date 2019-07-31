<?php

namespace App\Observers;

use App\Figure;
use App\FigureType;

class FigureObserver
{
    /**
     * Handle the figure "created" event.
     *
     * @param  \App\Figure  $figure
     * @return void
     */
    public function created(Figure $figure)
    {
        //
    }

    public function creating(Figure $figure)
    {
        $typeName = FigureType::getTypeName($figure->type_id);
        $data = json_decode($figure->data);
        $figure->square = Figure::calcSquare($typeName, $data);
    }

    /**
     * Handle the figure "updated" event.
     *
     * @param  \App\Figure  $figure
     * @return void
     */
    public function updated(Figure $figure)
    {
        //
    }

    /**
     * Handle the figure "deleted" event.
     *
     * @param  \App\Figure  $figure
     * @return void
     */
    public function deleted(Figure $figure)
    {
        //
    }

    /**
     * Handle the figure "restored" event.
     *
     * @param  \App\Figure  $figure
     * @return void
     */
    public function restored(Figure $figure)
    {
        //
    }

    /**
     * Handle the figure "force deleted" event.
     *
     * @param  \App\Figure  $figure
     * @return void
     */
    public function forceDeleted(Figure $figure)
    {
        //
    }
}
