<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class Dataget extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // $categories = DB::select('select * from table1');
        // $products = DB::select('select * from table2');
        // $title2 = ['John', 'age', 'car'];
        // $info = array(
        //     'firstname' => 'Cena',
        //     'lastname' => 'From fighting',
        //     'from' => 'USA'
        // );
        $info = [
            'firstname' => 'Cena',
            'lastname' => 'From fighting in Array',
            'from' => 'USA'
        ];
        $title = 'John';
        // Declare multi-dimensional array
        $value = array(
            "name" => "GFG",
            array(
                "email" => "abc@gfg.com",
                "mobile" => "XXXXXXXXXX"
            )
        );
        $proparray =  [
            1, 2, 3, 4, 5
        ];
        // return view('welcome', ['categories' => $categories, 'products' => $products, 'title' => $title]);
        // return view('welcome')->with('data', $title);
        return view('welcome', compact('info', 'title', 'value', 'proparray'));
        // return view('welcome', ['info' => $info, 'title' => $title]);
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
}
