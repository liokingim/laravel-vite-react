<!DOCTYPE html>
<html>
<head>
    <title>Confirmation Page</title>
    @vite
</head>
<body>
    <div id="app" data-data="{{ json_encode($data) }}"></div>
    @vite('resources/js/confirm_app.jsx')
</body>
</html>