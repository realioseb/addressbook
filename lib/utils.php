<?php
    function embed($tpl_file, $data) {
        extract($data);
        ob_start();
        include($tpl_file);
        $content = ob_get_contents();
        ob_end_clean();

        return $content;
    }
    
    $list = embed('list.php', array());