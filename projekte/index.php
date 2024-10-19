<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matthes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu|Lora">
    <link rel="stylesheet" href="../Style/style.css">
    <link rel="stylesheet" href="../Style/header.css">
    <link rel="stylesheet" href="../Style/projects.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
</head>

<body class="gradient">
    <div>
        <?php include '../html/header.php'; ?>
        
        <div class="container">
            <div class="h1 text-center">
                <span class="my_projects_headline">
                    <p class="bg-danger rounded m-4">
                        Meine Projekte
                    </p>
                </span>
            </div>

            <div class="project_website">
                <?php include 'p_website.php'; ?>
            </div>

            <hr class="m-4" style="border-width: 0.5vh; width: 90%; margin:auto;">

            <div class="project_chess">
                <?php include 'p_schach.php'; ?>
            </div>

            <hr class="m-4" style="border-width: 0.5vh; width: 90%; margin:auto;">

            <div class="project_checkers">
                <?php include 'p_dame.php'; ?>
            </div>

            <hr class="m-4" style="border-width: 0.5vh; width: 90%; margin:auto;">

            <div class="project_calculator">
                <?php include 'p_taschenrechner.php'; ?>
            </div>

            <hr class="m-4" style="border-width: 0.5vh; width: 90%; margin:auto;">

            <div class="projekt_multimengen">
                <?php include 'p_multimengen.php'; ?>
            </div>
        </div>

        
        <?php include '../html/footer.php'; ?>

    </div>

    <script type="application/x-javascript" src="../Script/ButtonListeners/universalButtons.js"></script>
    <script type="application/x-javascript" src="../Script/ReadSpeed/readSpeed.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
