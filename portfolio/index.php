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
            <div class="">Sehr geehrte Damen und Herren,
                <br>
                <br>
                je nachdem wie viel Sie bisher von meiner Website gesehen haben, muss ich hier sagen:
                <br>
                auch wenn vieles lustig erscheinen mag, kann ich auch ernst. Ich bin eine sehr ironische 
                Person in meinem privaten Umfeld. Jedoch hält mich das in keinster Weise davon ab, in
                professioneller Art und Weise mit meinen Mitmenschen umzugehen.
                Demnach möchte ich Sie in Ihrem 'privaten' Bereich meiner Website davon überzeugen.
                <br><br>
                Allem in allem möchte ich auf meiner <i>öffentlichen</i> Website etwas privatsphäre
                beibehalten. Demnach ist der weitere Zugang nur für Sie mit dem richtigen 
                Code zugänglich, den ich Ihnen in meiner Bewerbung beigefügt habe.
                Geben Sie diesen ein und werden Sie ganz einfach weitergeleitet.

                <br><br>

                Mit freundlichen Grüßen
                <br><br>
                Matthes Böttcher
                <br><br>
            </div>

            <div class="container d-flex flex-column">
                <div class="d-flex justify-content-center">
                    <input type="email" class="form-control w-25" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="4A6z...">
                </div>

                <div class="d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary w-25">Senden</button>
                </div>
            </div>
        </div>


        <div class="container">
            Footer
        </div>
    </div>

    <script type="application/x-javascript" src="../Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="../Script/ReadSpeed/readSpeed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
