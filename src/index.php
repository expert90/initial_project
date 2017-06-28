<?php
  $clientServer = 'http://' . $_SERVER['SERVER_NAME'] . ':3000';
?>
<!DOCTYPE html>
<html>
  <head>
    <title>Angular QuickStart</title>
    <base href="/">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Polyfill(s) for older browsers -->
    <script src="<?php echo $clientServer; ?>/node_modules/core-js/client/shim.min.js"></script>

    <script src="<?php echo $clientServer; ?>/node_modules/zone.js/dist/zone.js"></script> 
    <script src="<?php echo $clientServer; ?>/node_modules/systemjs/dist/system.src.js"></script>  

    <script src="<?php echo $clientServer; ?>/systemjs.config.js"></script>
    
    <link rel="stylesheet" type="text/css" href="<?php echo $clientServer; ?>/node_modules/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="<?php echo $clientServer; ?>/node_modules/primeng/resources/themes/omega/theme.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $clientServer; ?>/node_modules/primeng/resources/primeng.min.css" />
    <link rel="stylesheet" type="text/css" href="<?php echo $clientServer; ?>/node_modules/font-awesome/css/font-awesome.min.css" />
    <style type="text/css">
      
    </style>

    <script>
      System.import('main.js').catch(function(err){ console.error.bind(console); });
    </script>
  </head>

  <body>

    <my-app class="main">
      <router-outlet>
        <div class="login center-block vertical-center">
          <div class="container">
            Loading...
          </div>
        </div>
      </router-outlet>
    </my-app>

    <footer class="footer">
      <p>Copyright &copy; 2015 siemplify All rights reserved</p>
    </footer>

  </body>
</html>
