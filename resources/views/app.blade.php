<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="author" content="UrPuppy.com">
        <meta name="robots" content="index, follow">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Scripts -->
        @viteReactRefresh
        @vite([ 'resources/js/app.tsx', "resources/js/Pages/{$page['component']}.tsx"])
        @inertiaHead
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2165217194424630"
     crossorigin="anonymous"></script>

    </head>
    <body class="font-sans antialiased" >
        @inertia

        <script type="application/ld+json">{"@context":"https:\/\/schema.org","@type":"LocalBusiness","name":"Urpuppy.com","email":"admin@urpuppy.com","contactPoint":{"@type":"ContactPoint","areaServed":"US"},"image":"http:\/\/localhost:8000\/logo.png"}</script>

    </body>
</html>
