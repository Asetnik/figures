<?php

namespace App\Providers;

use App\Figure;
use App\Observers\FigureObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Figure::observe(FigureObserver::class);
    }
}
