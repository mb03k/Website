<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Lora">
    <link rel="stylesheet" href="Style/style.css">
    <link rel="stylesheet" href="Style/homestyle.css">
    <link rel="stylesheet" href="Style/header.css">
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <!--<link rel="stylesheet" href="Style/homeScreenAnimations.css"> bereitet in der Form Design-Fehler (out-of-bildschirm)-->
</head>

<body class="gradient">
    <div>
        
        <?php include 'html/header.php'; ?>

        <div class="container">
            <div class="row bg-blue text-center text-white">
                <div class="" >
                    <p class="line-1 anim-typewriter yoSoyMatthes mt-4" style="line-height:1.1em; font-weight: bold; font-size: 3.5em; margin: 0;">
                        Hallo, ich bin Matthes👋
                    </p>
                </div>
                <div class="">
                    <p class="">
                        Schlaue Menschen sagen, man sollte bei Webdesign zuerst für Handys
                        Designen, und danach für PCs. Ich sage: we dont do that here
                        <img src="Assets/we_dont_do_that_here.jpg" class="rounded" style="width:50px;">
                    </p>
                </div>
            </div>

            <br>

            <div class="row text-dark text-center" style="display:flex;align-items: center; height:100%;">
                <div class="col-md m-2 projectsContainer">
                    <div class="col p-2">
                        <div class="rowOneCurrentProjects" id="currentProjects">
                            <h1>Aktuelle Projekte</h1>
                        </div>
                        <div class="container row projectOne m-2" id="projectChess">
                            <div class="col">
                                <img class="img-fluid" src="assets/chess.png">
                            </div>
        
                            <div class="col">
                                <span>
                                    <h5>Schach
                                        <i class="bi bi-x-circle-fill" style="height:1rem; color: rgb(195, 0, 0);"></i>
                                    </h5>
                                    <p>Ein Spiel, für das ich brenne. Seit langem auf meiner To-Do-Liste</p>
                                    <p>Siehe Github README für den aktuellen Stand</p>
                                </span>
                            </div>
                        </div>

                        <hr>

                        <div class="container row projectTwo m-2" id="projectCheckers">
                            <div class="col">
                                <img class="img-fluid" src="assets/dame.png">
                            </div>
        
                            <div class="col">
                                <span>
                                    <h5>Dame
                                        <i class="bi bi-check-circle-fill" style="height:1rem; color: rgb(0, 195, 0);"></i>
                                    </h5>
                                    <p>Unser Abschlussprojekt für das Modul 'AOP II'</p>
                                </span>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="col-md m-2 projectsContainer" id="educationalPath">
                    <div class="col rowTwo p-2">
                        <div>
                            <span class="h1">Mein Bildungsweg</span><br>
                            <span class="h4">in a nutshell</span>
                        </div>
                        Grundschule<br>Hauptschule<br>Realschulabschluss<br>Ausbildung<br>
                        SIKE<br>ich mach jetzt ein Praktikum<br>Okay arbeiten ist nicht meins, ich gehe auf die FOS<br>
                        FOS war cool. Ich gehe jetzt studieren<br>Informatikstudium
                    </div>
                </div>

                <div class="col-md m-2 projectsContainer" id="aboutme">
                    <div class="col rowThree p-2">
                        <h1>Über mich</h1>
                        Ich könnte hier viel schreiben. Ich bin ein Entrepreneur. Ich bin Gott. Ich bin alles.
                        Aber nichts würde passen. Lieber leite ich dich auf den Feed weiter, auf dem ich versuche
                        mich selbst zu verstehen. Eine Art <strike>Jakobsweg</strike> Matthesweg
                    </div>
                </div>
            </div>
        </div>


        <div class="container text-center">
            <p class="m-4">
                <span>
                    Es gibt sehr viel über mich. Ich habe unglaublich viele Ideen was ich hier
                    alles 'veröffentlichen' kann (in Klammern, weil es realistisch gesehen niemanden interessieren
                    wird). Wie wäre es mit - zugegebenermaßen - einer sehr schönen Auswahl an Filmen?
                </span>
            </p>

            
            <p>
                <span>
                    Oder schau dich sonst um. Hier hast du eine Liste aller aktuell verfügbaren Seiten
                </span>
            </p>
            <div style="display: flex; justify-content: center;">
                <div class="list-group" style="width: 50%;">
                    <button type="button" class="list-group-item list-group-item-action available_sites" id="aboutme_link">Über mich</button>
                    <button type="button" class="list-group-item list-group-item-action available_sites" id="popcornphilosoph_link">Filme / Bücher</button>
                    <button type="button" class="list-group-item list-group-item-action available_sites" id="readspeed_link">Lesegeschwindigkeit</button>
                    <button type="button" class="list-group-item list-group-item-action available_sites" id="projekte_link">Projekte</button>
                    <button type="button" class="list-group-item list-group-item-action available_sites" id="faq_link">FAQ</button>
                </div>
            </div>

            <button class="btn btn-dark" id="404_link">404</button>
            <button class="btn btn-dark" id="aboutme_link"aboutme>aboutme</button>
            <button class="btn btn-dark" id="aberbitteohneinstagram_link">aboutme/aberbitteohneinstagram</button>
            +<button class="btn btn-dark" id="faq_link">faq</button>
            <button class="btn btn-dark" id="popcornphilosoph_link">popcornphilosoph</button>
            <button class="btn btn-dark" id="projekte_link">projekte</button>

            <span>Willst du etwas <a href="#" id="readspeed_button">cooles</a> sehen?</span>
        </div>

        <div class="container text-center mt-4">
            <div class="row justify-content-center">
                <div class="text-center w-75 mb-2">
                    <p class="m-0">Abschließend ein großes Dankeschön an die zwei wundervollen 
                        CSS Frameworks, durch die selbst ich eine einigermaßen okay-aussehende 
                        Website erstellen konnte:</p>
                </div>

                <p class="m-1 bootswindfont">
                    <span class="p-1 m-2 rounded bootswindhover" id="bootstrap_button">
                        Bootstrap
                        <img src="Assets/bootstrap.png" style="width:35px;">
                    </span>

                    <span class="p-1 m-2 rounded bootswindhover" id="tailwind_button">
                        Tailwind
                        <img src="Assets/tailwind.png" class="img-fluid pb-1" style="width: 2em; height: 2em;">
                    </span>
                </p>
            </div>
        </div>
        <?php include 'html/footer.php'; ?>
    </div>

    <script type="application/x-javascript" src="Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="Script/ButtonListeners/home.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
