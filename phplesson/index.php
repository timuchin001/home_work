<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </title></title>
   <link rel="stylesheet" href="style.css">
</head>
<body>
   <?php
      include "output.php";
      include "output-cycle.php";
      include "counter-even.php";

      echo "<h2>Функция из output.php</h2>";
      output("h1", "Привет мир");
      output("p", "Это текст внутри тега p");

      echo "<hr>";

      echo "<h2>Функция с циклом output-cycle.php</h2>";
      outputCycle("p", "Повторяющийся текст", 5);

      echo "<hr>";

      echo "<h2>Чётные числа из массива</h2>";
      showEvenNumbers();

      ?>
</body>
</html>