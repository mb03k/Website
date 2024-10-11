<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css">-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Lora">
    <link rel="stylesheet" href="../Style/style.css">
    <link rel="stylesheet" href="../Style/header.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <!--<link rel="stylesheet" href="Style/homeScreenAnimations.css"> bereitet in der Form Design-Fehler (out-of-bildschirm)-->
</head>

<body class="gradient">
    <div>
        <?php include '../html/header.php'; ?>
        <div class="container">
            <h1>So weit musste es ja kommen. Ich nehme Titelvorschläge von ChatGPT an...
                naja - ich sollte mich nicht wehren. Hier ist euer <i>PopcornPhilosoph</i></h1>

            <span>
                Also, was mache ich hier? Ich stelle euch Filme vor!
                Genauer gesagt meine Liste an Filmen die ich u.A. gesehen habe, oder sehen möchte...
                Los gehts!
            </span>
        </div>

        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/butterfly_effect.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Butterfly Effect</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/borat.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Borat</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/eternal_sunshine_of_the_spotless_mind.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Eternal Sunshine of the Spotless Mind</div>
                </div>
            </div>

            <div class="row justify-content-center mb-4">
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/ghost_movie_1.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Ghost Movie 1</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/ghost_movie_2.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Ghost Movie 2</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/hereditary.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Hereditary</div>
                </div>
            </div>
            <div class="row justify-content-center mb-4">
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/harold_kumar_white_castle.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Harold & Kumar - White Castle</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/harold_kumar_escape_from_guantanamo.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Harold & Kumar - Escape from Guantanamo Bay</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/harold_kumar_christmas.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Harold & Kumar - Christmas</div>
                </div>
            </div>
            <div class="row justify-content-center mb-4">
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/inception.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Inception</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/kingsman.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Kingsman</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/lift.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Lift</div>
                </div>
            </div>
            <div class="row justify-content-center mb-4">
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/man_from_toronto.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Man from Toronto</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/million_ways_to_die_in_the_west.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Million Ways To Die In The West</div>
                </div>
                <div class="col-6 col-md-3">
                    <img src="../Assets/movies/requiem_for_a_dream.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Requiem for a Dream</div>
                </div>
            </div>
            <div class="row justify-content-center mb-4">
                <div class="text-center col-6 col-md-3">
                    <img src="../Assets/movies/shutter_island.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Shutter Island</div>
                </div>
                <div class="text-center col-6 col-md-3">
                    <img src="../Assets/movies/truman_show.jpg" class="img-fluid hi" alt="Responsive image">
                    <div class="">Truman Show</div>
                </div>
            </div>
        </div>

        
        
        <?php include '../html/footer.php'; ?>

    </div>

    <script type="application/x-javascript" src="../Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="../Script/ReadSpeed/readSpeed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
