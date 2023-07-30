<?php
// This is the PHP script that runs the bash script
$output = shell_exec('script.sh');
echo $output;
?>
