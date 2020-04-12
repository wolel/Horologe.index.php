<meta name="viewport" content="width=device-width" />
<link rel="stylesheet" href="style.css">

<?php
date_default_timezone_set("Europe/Brussels");

if ($_GET['timezone'] == date_default_timezone_set("Africa/Brazzaville")){
    date_default_timezone_set("Africa/Brazzaville");
    echo "<p >". $_GET['timezone']."</p>";
}elseif ($_GET['timezone']=== date_default_timezone_set('America/Costa_Rica')){
    date_default_timezone_set('America/Costa_Rica');
    echo "<p>". $_GET['timezone']."</p>";
}
?>




<div class="clock">
    <div class="clock-face">
        <h1><?php echo date("h:i:sa");?></h1>
        <h3><?php echo date("d / m / Y");?></h3>
        <div class="cercle"></div>
        <div class="needle hour-needle"></div>
        <div class="needle min-needle"></div>
        <div class="needle second-needle"></div>
    </div>
    <button id="btn1" onclick="changeBackgroundColor()">change background color</button>

    <form action="#" method="get">
        <select name="timezone" id="timezone">
            <option value="">--Please choose an option--</option>
            <option value="Amsterdam">Amsterdam</option>
            <option value="Brazzaville">Brazzaville</option>
            <option value="Costa_Rica">Costa_Rica</option>
        </select>
        <button id="btnTimezone">GetTime zone</button>

    </form>

</div>





<script src="script.js"></script>

