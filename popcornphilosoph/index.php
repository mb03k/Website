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
    <link rel="stylesheet" href="../Style/popcornphilosoph.css">

<link href="https://fonts.googleapis.com/css2?family=LXGW+WenKai+Mono+TC:wght@300;400;700&display=swap" rel="stylesheet">

    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <!--<link rel="stylesheet" href="Style/homeScreenAnimations.css"> bereitet in der Form Design-Fehler (out-of-bildschirm)-->
</head>

<body class="gradient">
    <div>
        <?php include '../html/header.php'; ?>
        <div class="container">
            <div class="container">
                <div class="text-center m-4 p-2 bg-danger rounded" style="--bs-bg-opacity: 0.4; border: 1px solid;">
                    <h2>So weit musste es ja kommen. Ich nehme Titelvorschläge von ChatGPT an...
                        naja - ich sollte mich nicht wehren. Hier ist euer <i>PopcornPhilosoph</i></h2>
                </div>

                <div class="m-2 row d-flex justify-content-center">
                    <div class="row col-lg m-2 p-2 bg-success rounded" style="--bs-bg-opacity: .5;">
                        <span>
                            Also, was mache ich hier? Ich stelle euch Filme vor!
                            Irgendwann werde ich die Filme in einer Datenbank speichern und eine Sortierung
                            einbauen, damit ich das hier nicht mit <b>7</b> Stunden Arbeit alles
                            einzeln einfügen muss. Aber das kann noch dauern...
                            Deshalb sortiere ich die Filme nach möchtegern Genres
                        </span>
                        <span class="mt-4 p-2 bg-success rounded" style="--bs-bg-opacity: .5;">
                            Aber zuerst meine TOP-Empfehlungen:
                            <p>1. Eternal Sunshine of the Spotless mind</p>
                            <p>2. Shutter Island</p>
                            <p>3. Requiem for a Dream -> wer einen <i>sehr</i> mitreißenden Film sucht</p>
                        </span>
                    </div>

                    <div class="row col-lg m-2 p-2 bg-warning rounded" style="--bs-bg-opacity: .5;">
                        <div class="text-center">
                            <span style="font-size:1.4em;"><p style="margin:0;">⭐️⭐️⭐️</p> Sterne kommen bald <p style="margin:0;">⭐️⭐️⭐️</p></span>
                        </div>

                        <div class="text-center">
                            <span>
                                Bis dahin bitte mit x/10 genügen
                                (genau so wie eine genauere Beschreibung der Filme kommen wird [ich muss natürlich
                                meine Meinung dazu beitragen... ohne Frage])
                            </span>
                        </div>
                    </div>
                </div>
            </div>









<!--
            <div class="justify-content-center mt-4">
                <div class="text-center">
                    <div>
                        <span class="genre_title" style="font-size:3em;">😃 Comedy</span>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 bg-success" style="--bs-bg-opacity: .9;">
                            <img src="../Assets/movies/der_diktator.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Der Diktator</div>
                            <div class="movie_stars">7/10</div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 bg-success" style="--bs-bg-opacity: .9;">
                            <img src="../Assets/movies/harold_kumar_white_castle.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Harold & Kumar - White Castle</div>
                            <div class="movie_stars">6/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 bg-success" style="--bs-bg-opacity: .8;">
                            <img src="../Assets/movies/harold_kumar_escape_from_guantanamo.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Harold & Kumar - Escape from Guantanamo Bay</div>
                            <div class="movie_stars">9/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 bg-success" style="--bs-bg-opacity: .7;">
                            <img src="../Assets/movies/harold_kumar_christmas.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Harold & Kumar - Christmas</div>
                            <div class="movie_stars">6.5/10</div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .6;">
                            <img src="../Assets/movies/ghost_movie_1.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Ghost Movie 1</div>
                            <div class="movie_stars">8/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .5;">
                            <img src="../Assets/movies/ghost_movie_2.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Ghost Movie 2</div>
                            <div class="movie_stars">8/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .4;">
                            <img src="../Assets/movies/million_ways_to_die_in_the_west.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">A Million Ways To Die In The West</div>
                            <div class="movie_stars">8/10</div>
                        </div>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .3;">
                            <img src="../Assets/movies/borat.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Borat</div>
                            <div class="movie_stars">4/10</div>
                        </div>
                        <div class="text-center movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .2;">
                            <img src="../Assets/movies/central_intelligence.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Central Intelligence</div> 
                            <div class="movie_stars">7/10</div>
                        </div>
                        <div class="text-center movie_class col-6 col-md-3 mt-3 bg-success" style="--bs-bg-opacity: .1;">
                            <img src="../Assets/movies/night_school.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Night School</div> 
                            <div class="movie_stars">6/10</div>
                        </div>
                    </div>
                </div>

                <br>
                <br>
                <hr style="border-width: 0.5vh; width: 90%; margin:auto;">
                <br>

                <div class="container text-center">
                    <div>
                        <span class="genre_title" style="font-size:3em;">😱 Action</span>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 mt-3 bg-warning" style="--bs-bg-opacity: .8;">
                            <img src="../Assets/movies/man_from_toronto.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Man from Toronto</div>
                            <div class="movie_stars">6/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-warning" style="--bs-bg-opacity: .6;">
                            <img src="../Assets/movies/lift.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Lift</div>
                            <div class="movie_stars">5/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-warning" style="--bs-bg-opacity: .4;">
                            <img src="../Assets/movies/kingsman.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Kingsman</div>
                            <div class="movie_stars">3/10</div>
                        </div>
                    </div>
                </div>

                <br>
                <br>
                <hr style="border-width: 0.5vh; width: 90%; margin:auto;">
                <br>

                <div class="container text-center">
                    <div>
                        <span class="genre_title" style="font-size:3em;">🔪 Thriller</span>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 mt-3 bg-danger" style="--bs-bg-opacity: .6;">
                            <img src="../Assets/movies/requiem_for_a_dream.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Requiem for a Dream</div>
                            <div class="movie_stars">9/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-danger" style="--bs-bg-opacity: .4;">
                            <img src="../Assets/movies/hereditary.jpg" class="img-fluid mt-2 mt-2" alt="Responsive image">
                            <div class="movie_title">Hereditary</div>
                            <div class="movie_stars">6/10</div>
                        </div>
                    </div>
                </div>

                <br>
                <br>
                <hr style="border-width: 0.5vh; width: 90%; margin:auto;">
                <br>

                <div class="container text-center">
                    <div>
                        <span class="genre_title" style="font-size:3em;">🤯 einfach schauen</span>
                    </div>

                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 mt-3 bg-info" style="--bs-bg-opacity: .7;">
                            <img src="../Assets/movies/eternal_sunshine_of_the_spotless_mind.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Eternal Sunshine of the Spotless Mind</div>
                            <div class="movie_stars">9.5/10</div>
                        </div>
                        <div class="text-center movie_class col-6 col-md-3 mt-3 bg-info" style="--bs-bg-opacity: .5;">
                            <img src="../Assets/movies/shutter_island.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Shutter Island</div>
                            <div class="movie_stars">9.5/10</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 mt-3 bg-info" style="--bs-bg-opacity: .7;">
                            <img src="../Assets/movies/inception.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Inception</div>
                            <div class="movie_stars">9/10</div>
                        </div>
                    </div>

                    <br>

                    <div class="row justify-content-center">
                    <div class="movie_class col-6 col-md-3 mt-3 bg-info" style="--bs-bg-opacity: .5;">
                            <img src="../Assets/movies/butterfly_effect.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Butterfly Effect</div>
                            <div class="movie_stars">9/10</div>
                        </div>
                        <div class="text-center movie_class col-6 col-md-3 mt-3 bg-info" style="--bs-bg-opacity: .7;">
                            <img src="../Assets/movies/truman_show.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Truman Show</div> 
                            <div class="movie_stars">8/10</div>
                        </div>
                    </div>
                </div>
            

            <br>
            <br>
            <hr style="border-width: 0.5vh; width: 90%; margin:auto;">
            <br>

            <div class="container text-center">
                <div>
                    <span class="genre_title" style="font-size:3em;">📚 Bücher</span>
                </div>

                <div class="row justify-content-center">
                    <div class="movie_class col-6 col-md-3 bg-light" style="--bs-bg-opacity: .8;">
                        <img src="../Assets/books/morbus.jpg" class="img-fluid mt-2" alt="Responsive image">
                        <div class="movie_title">Morbus</div>
                    </div>
                    <div class="movie_class col-6 col-md-3 bg-light" style="--bs-bg-opacity: .6;">
                        <img src="../Assets/books/verbrechen.jpg" class="img-fluid mt-2" alt="Responsive image">
                        <div class="movie_title">Verbrechen</div>
                    </div>
                </div>

                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="movie_class col-6 col-md-3 bg-light" style="--bs-bg-opacity: .4;">
                            <img src="../Assets/books/clean_code.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Clean Code</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 bg-light" style="--bs-bg-opacity: .3;">
                            <img src="../Assets/books/what_every_body_is_saying.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">What Every Body Is Saying</div>
                        </div>
                        <div class="movie_class col-6 col-md-3 bg-light" style="--bs-bg-opacity: .1;">
                            <img src="../Assets/books/surrounded_by_idiots.jpg" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">Surrounded by Idiots</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

-->

<?php 

        $data_path = [
            "../Assets/json/comedy.json",
            "../Assets/json/action.json",
            "../Assets/json/thriller.json",
            "../Assets/json/horror.json",
            "../Assets/json/just_watch.json",
            "../Assets/json/books.json"
        ];

        $movie_genre = [
            "😃 Comedy",
            "😱 Action",
            "🔪 Thriller",
            "👻 Horror",
            "🤯 Einfach schauen",
            "📚 Bücher"
        ];

        $bg_color = [
            "bg-success",
            "bg-warning",
            "bg-danger",
            "bg-dark",
            "bg-info",
            "bg-light"
        ];

        for ($i=0; $i<count($data_path); $i++) {
            echo ('<div class="text-center">
                        <div>
                            <span class="genre_title" style="font-size:3em;">'.$movie_genre[$i].'</span>
                        </div>
            ');

            $jsonDatei = $data_path[$i];
            $jsonInhalt = file_get_contents($jsonDatei);

            $movies = json_decode($jsonInhalt, true); 
            
            if (json_last_error() === JSON_ERROR_NONE) {
                printMovies($movies, $bg_color[$i]);
                echo('<hr class="m-4" style="border-width: 0.5vh; width: 90%; margin:auto;">');
            } else {
                echo "Fehler beim öffnen der JSON-Datei: " . json_last_error_msg();
            }
            echo("</div>");
        }


            function printMovies($movies, $bg_color) {
                // calculation to put every third div in class row
                $div_counter = 0;
                $ending_div_counter = 0;
                
                foreach ($movies as $movie) {
                    if ($ending_div_counter == 3) {
                        echo('</div>');
                        $ending_div_counter = 0;
                    }

                    if ($div_counter % 3 == 0) {
                        echo('<div class="row justify-content-center">');
                    }
                    echo('
                        <div class="movie_class col-6 col-md-3 mt-3 '.$bg_color.'" style="--bs-bg-opacity: '.$movie["bg_opacity"].'">
                            <img src="'.$movie["path"].'" class="img-fluid mt-2" alt="Responsive image">
                            <div class="movie_title">'.$movie["name"].'</div>
                            <div class="movie_stars">'.$movie["rating"].'</div>
                        </div>
                    ');
                    
                    $div_counter++;
                    $ending_div_counter++;
                }
            }

        ?>
    </div>

    <?php include '../html/footer.php'; ?>

    <script type="application/x-javascript" src="../Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="../Script/ReadSpeed/readSpeed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

<style>
    
</style>
</html>