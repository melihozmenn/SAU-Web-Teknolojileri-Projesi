<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Ana Sayfa - Hakkımda</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link href="assets/css/style.css" rel="stylesheet">
    <title>
        <?php 

            include("user.php");

                if (($_POST["email"] == $user) and ($_POST["password"] == $pass)){
                    $_SESSION["login"] = "true";
                    $_SESSION["user"] = $user;
                    $_SESSION["pass"] = $pass;
                    $_SESSION["name"]=$name;

                    echo("Hoşgeldiniz!");

                }

                else{
                   echo "Tekrar Deneyiniz!";                       
                }

        ?>      
    </title>
</head>

<body>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Ninth navbar example">
        <div class="container-xl">
            <a class="navbar-brand" href="index.html"><img src="assets/images/logo.png" style="height:5rem ;"  ></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#dropdown-navbar"
                aria-controls="dropdown-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="dropdown-navbar">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Hakkımda</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">İletişim</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                            aria-expanded="false">Diğer Sayfalar</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="my-city.html">Şehrim</a></li>
                            <li><a class="dropdown-item" href="my-interests.html">İlgi Alanlarım</a></li>
                            <li><a class="dropdown-item" href="my-resume.html">Özgeçmişim</a></li>
                            <li><a class="dropdown-item" href="our-legacy.html">Mirasımız</a></li>
                        </ul>
                    </li>
                </ul>
                <a type="button" class="btn btn-outline-light mx-1" id="login" href="login.html">
                    <i>Giriş Yap</i></a>
            </div>
        </div>
    </nav>

    <div class="container mt-5 w-50 text-center p-5 bg-dark text-white rounded-3">
	
			<?php 

				include("user.php");


				if (($_POST["email"] == $user) and ($_POST["password"] == $pass)){
			       $_SESSION["login"] = "true";
			       $_SESSION["user"] = $user;
			       $_SESSION["pass"] = $pass;
                   $_SESSION["name"]=$name;
			       echo("$name, <br> <br> Hoşgeldiniz!");                  
                   header("Refresh: 2; url=index.html");
                   
				}
			
				else{
			        echo "Kullancı Adı veya Şifre Yanlış.<br> <br>";
			        echo "!!!TEKRAR DENEYİN!!!";
			        header("Refresh: 2; url=login.html");
			    }
			
			?>
			
    </div>

</body>

<footer class="py-3 my-4 navbar-dark bg-dark ">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
        <li class="nav-item"><a href="index.html" class="nav-link px-2 text-white">Hakkımda</a></li>
        <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-white">İletişim</a></li>
        <li class="nav-item"><a href="my-city.html" class="nav-link px-2 text-white">Şehrim</a></li>
        <li class="nav-item"><a href="my-interests.html" class="nav-link px-2 text-white">İlgi Alanlarım</a></li>
        <li class="nav-item"><a href="my-resume.html" class="nav-link px-2 text-white">Özgeçmişim</a></li>
        <li class="nav-item"><a href="our-legacy.html" class="nav-link px-2 text-white">Mirasımız</a></li>
        <li class="nav-item"><a href="login.html" class="nav-link px-2 text-white">Giriş Yap</a></li>
    </ul>
    <p class="text-center text-white">&copy; 2023 Company, Inc</p>
</footer>

<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js"
    integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.min.js"
    integrity="sha384-Y4oOpwW3duJdCWv5ly8SCFYWqFDsfob/3GkgExXKV4idmbt98QcxXYs9UoXAB7BZ"
    crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="assets/js/script.js"></script>

</html>