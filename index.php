<meta name="viewport" content="width=device-width" />
<link rel="stylesheet" href="style.css">


<?php

$currentDateTime = '22:15:00';
$DateTime = date('H:i:s');

function getMyTimeZone(){

    if($_GET['timezone'] === 'Shanghai' ) {
        date_default_timezone_set("Asia/Shanghai");
        echo "<p>".$_GET['timezone']."</p>";
    }elseif($_GET['timezone'] == 'Brazzaville'){
        date_default_timezone_set("Africa/Brazzaville");
        echo "<p>".$_GET['timezone']."</p>";
    }elseif($_GET['timezone'] === 'Brussels'){
           date_default_timezone_set("Europe/Brussels");
        echo "<p>".$_GET['timezone']."</p>";
    }
}


?>




<div class="clock">
    <div class="clock-face">
        <h1><?php echo getMyTimeZone();?></h1>
        <h3><?php echo date("d / m / Y").'<br>'.date("H:i:sa");?></h3>
        <div class="cercle"></div>
        <div class="needle hour-needle"></div>
        <div class="needle min-needle"></div>
        <div class="needle second-needle"></div>
    </div>
    <button id="btn1" onclick="changeBackgroundColor()">change background color</button>

    <form action="#" method="GET">
        <select name="timezone" id="timezone">
            <option value="">Select Country</option>
            <option value="">--------------</option>
            <option value="Brussels">Brussels</option>
            <option value="Brazzaville">Brazzaville</option>
            <option value="Shanghai">Shanghai</option>
        </select>
        <button>GetTime zone</button>

    </form>

</div>





<script src="script.js"></script>

