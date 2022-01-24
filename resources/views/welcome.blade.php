<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="{{asset('css/app.css')}}">
</head>

<body class="antialiased">
    <h3>showing inside blade file = {{$title}}</h3>
    <h3>this name is inside array= {{ $info['firstname']}}</h3>
    @foreach ($info as $item)
    {{$item}}
    @endforeach
    <div class="d-flex flex-row justify-content-center align-items-center">
        <div class="row">
            <h3>Sending data from controller to vue file</h3>
            <div class="col-md-12" id="app">
                <div class="">
                    <example-component :vuex="5" :bts="'My journey with Vue in laravel'" :foo="{'3':' three','2': 'two'}" :title="{{$title}}" :info="{{json_encode($info)}}" :value={{json_encode($value)}} />
                </div>
            </div>
        </div>
    </div>
    <script src=" {{asset('js/app.js')}}">
    </script>
</body>

</html>
