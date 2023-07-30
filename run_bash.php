<?php
// This is the PHP script that runs the bash script
$output = shell_exec('/path/to/bash/script.sh');
echo $output;
?>
