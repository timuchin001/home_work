<?php

function showEvenNumbers() {

   $numbers = [3, 7, 10, 4, 9, 8, 15, 20];

   for ($i = 0; $i < count($numbers); $i++) {

      if ($numbers[$i] % 2 == 0) {

            echo $numbers[$i] . "<br>";

      }

   }

}

?>