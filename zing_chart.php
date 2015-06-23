<?php
/*
Plugin Name: Zing Charts
Plugin URI:http://www.zingchart.com/
Description: This plugin adds Zing charts to wordpress.
Author: Hamid Tavakoli
Version:1.0
Author URI: http://pint.com


Lisense :???
*/
function zing_activate(){
  //Just a place holder
}
register_activation_hook(__FILE__,"zing_activate");
function zing_deactivate(){
  //Just another place holder
}
register_deactivation_hook(__FILE__,"zing_deactivate");

function zing_plot($atts,$content=null){
  STATIC $divId = 0;
  $divId++;
  $legend ='';
  $data = '';
  $valueHolders = '';  
  $itISCsv = FALSE;
  foreach($atts as $key => $value) {
    if (!empty($value)) {
      if (!strncmp($key, 'values', 6)) {
          $valueHolders .= '{ "values": ['.$value.'] },';
      }
    }
    
    if (!strcmp($key, 'plot')) {
      $data .= '"plot":{'.$value.'},';
    }
    if(!strcmp($key,'legend')) { 
     $legend ='legend:'. $value.',';
    }
    if (!strcmp($key, 'csv')) {
      $itISCsv = TRUE;
      $data .= '"csv":{'.$value.'}';
    }
    if (!strcmp($key, "plotarea")) {
      $data .= '"plotarea":{'.$value.'},';
    }
    if(!strcmp($key, "scaler")) {
      $data .= '"scale-r":{'.$value.'},';
    }
    if(!strcmp($key, 'title')) {
      $data .= '"title":{'.$value .'},';
    }
    if(!strcmp($key, 'subtitle')) {
      $data .= '"subtitle":{'.$value .'},';
    }
    if (!strcmp($key, 'labels')) {
      $data .= '"labels":[{'.$value.'}],';
    }
  }
  $valueHolders =  '"series": ['.rtrim($valueHolders,",").']';
  if (!$itISCsv) {
     $data .= $valueHolders;
  }
  return '
  <script>
  var chartData'.$divId.'={
    "type":"'.$atts["type"] .'",'.
    $legend.$data.
  '};
  </script> 
  <div id="chartDiv'.$divId.'"></div>';  
}
add_shortcode("zing","zing_plot");

function zing_window_onload($content){
  $windowLoader = '';
  $objectLoop   = '';
  if(is_feed()) {
    return $content;
  }
  for($i =1; $i<= 10;$i++) {
            $objectLoop .= 'zingchart.render({';
            $objectLoop .= 'id:"chartDiv'.$i.'",';
            $objectLoop .= 'height: 600,';
            $objectLoop .= 'width: 400,';
            $objectLoop .= 'data:chartData'.$i.'});';       
  }  
  $windowLoader = '
    <script>
      window.onload=function(){'.
        $objectLoop
      .'};
    </script>';
  return $content.$windowLoader;
}
add_action('the_content','zing_window_onload');

function zing_admin(){
?>
  <div class="wrap">
    <?php screen_icon();?>
    <h2>Zing Chart</h2>
    <p>Welcome to Zing Chart plugin.<br>
    In order to use this plugin simply add the following shortcode to your text <br>
    [zing type="" values1="" values2="" ..... height="[optional]" weidth="[optional]"]</p>
  </div>
<?php
}
function zing_admin_menu(){
  add_options_page('Zing Charts setting','Zing Chart','manage_options','Zing-chart','zing_admin');
}
add_action('admin_menu','zing_admin_menu');

function zing_loadLib(){
  wp_enqueue_script('zing_chart','http://cdn.zingchart.com/zingchart.min.js',array(),'2.1.0',TRUE);
}
add_action('wp_enqueue_scripts','zing_loadLib');
