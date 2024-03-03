<?php
    include ('../php/connect.php');
    $p = new Database();
    $res = $p->xemDulieu('select * from sinhvien');
    echo $res

?>