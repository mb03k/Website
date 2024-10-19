<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Website</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Lora">
    <link rel="stylesheet" href="../Style/style.css">
    <link rel="stylesheet" href="../Style/header.css">
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>

<body class="gradient">
    <div>
        <?php include '../html/header.php'; ?>

        <div class="container">
            <h2 class="text-light" style='margin-top:10px; line-height:0.95em; font-size: 4em; font-family: "Bebas Neue", sans-serif; font-weight: 400; font-style: normal;'>
                Texte schneller lesen können... aber wie?!
            </h2>

            <h2 class="text-light">
                Finde es heraus: gib einfach einen etwas längeren Text ein und lass ihn dir anzeigen
            </h2>

            <textarea class="textarea form-control" id="input_text_readspeed" rows="6">Das ist eine Geschichte. Sie geht über Hoffnung. Als ich klein war, hatte ich nämlich einen Traum: schneller als jeder lesen zu können. Leider konnte ich es nie. Aber gut. Ich habe auch nie freiwillig gelesen. Aber jetzt lese ich sogar! Es gibt echt gute Bücher... bspw. war mein letztes Buch 'Verbrechen' von Ferdinand von Schirach. Sehr gut geschrieben. So wie dieser Text. Nur ein Scherz. Ich wünschte ich könnte mich auch so flüssig formulieren. Auf der anderen Seite sitze ich aber gerade hier: in Leipzig an einem Samstag um 16:43, schreibe diesen Text, während ich Musik höre und mein Mitbewohner gerade schläft. Warum sage ich das alles? Keine Ahnung. Das hat keinen Sinn. Aber es füllt den Text, den du gerade (hoffentlich) schneller lesen kannst :)</textarea>

            <div class="d-flex justify-content-center">
                <button class="btn btn-success" id="get_input_text_button">Anzeigen</button>
            </div>

            <br>
            <br>

            <h3 class="text-light">Dein Text - den du (hoffentlich) schneller lesen kannst:</h3>

            <div class="bg-light text-center" style="border-radius:10px;">
                <p class="text-dark h" id="upspeadedText"></p>

                <div class="spinner-border text-success" id="upspeadedText_spinner" style="margin:0.2em;width: 2rem; height: 2rem;" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            
            <br>

            <button class="btn btn-dark" id="how_it_works_button">Wie funktioniert das?</button>

            <div id="hiw_empty">
            </div>

            <div class="bg-info p-2" id="hiw_text" style="border-radius: 10px;" hidden>
                <span class="bg-danger p-1 text-white">Wie es funktioniert</span>
                <br>
                <span class="text-white">
                    Ich kann mich nicht mehr genau an die Begründung erinnern. Aber sie ging ansatzweise folgendermaßen:
                    A: Das Gehirn kann die Wörter durch die dick geschriebenen Anfangsbuchstaben besser trennen / auseinanderhalten.
                    B: Dieses auseinanderhalten hilft demnach u.A. dabei, die dick geschriebenen Buchstaben direkt zu identifizieren
                    und die Bedeutung des Wortes, ohne es ganz lesen zu müssen, schneller zu verstehen 
                </span>

                <br>

                <button class="btn btn-dark" id="hiw_technical_button">Achso, wie es technisch funktioniert?</button>
                <div id="hiw_technical_empty"></div>
                <div class="text-white" id="hiw_technical_text" hidden>
                    <span>
                        Ich habe es mir relativ leicht gemacht... <a href="https://github.com/mb03k/Website/blob/main/Script/ReadSpeed/readSpeed.js" target="_blank">hier</a> kannst du den Quellcode ansehen
                        <br>
                        Mein Ansatz ist, dass man alle Wörter aufteilt und jedes Wort in einem Array (genauer: ArrayList<String>)
                        speichert. Das getan, läuft man in einer For-Each Schleife die gesamten Wörter durch. Bei jedem Durchlauf wird
                        die Länge des Wortes angeschaut und damit berechnet, bis wohin der dick-geschriebene Text gehen soll (es sollen
                        67% der Buchstaben dick sein). Nach dieser 
                        Berechnung läuft man in zwei weiteren For-Schleifen das Wort durch. Die erste For-Schleife setzt ein &ltb&gt an den Anfang
                        (für den dick-geschriebenen Text) und geht
                        so weit, bis man nicht mehr dick schreiben muss, setzt ein &lt/b&gt und speichert jeden Charakter in einem weiteren Array ab. 
                        Sobald diese Schleife durch ist, fängt die zweite an. Diese nimmt nur noch die restlichen Buchstaben 
                        des Wortes und fügt sie hinzu
                        <br>
                        Danach fügt man diesen Array zu einem String zusammen und schreibt diesen in das DOM
                    </span>
                </div>
            </div>

        </div>
        
        <?php include '../html/footer.php'; ?>

    </div>

    <script type="application/x-javascript" src="../Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="../Script/ButtonListeners/readSpeed.js"></script>
    <script type="application/x-javascript" src="../Script/ReadSpeed/readSpeed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
