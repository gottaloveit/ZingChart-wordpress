<?php
/*
Plugin Name: Zing Charts
Plugin URI:http://www.zingchart.com/
Description: This plugin adds Zing charts to wordpress.
Author: Hamid Tavakoli
Version:1.0
Author URI: http://seodapop.com


Lisense :???
*/
function zing_activate(){
	//Probably add js liberarry
  error_log("Zing_chart activated");
}
register_activation_hook(__FILE__,"zing_activate");
function zing_deactivate(){

}
register_deactivation_hook(__FILE__,"zing_deactivate");

function zing_plot($atts,$content=null){
  STATIC $diveId = 0;
  $diveId++;
  $atts = shortcode_atts(array('type' => 'bar','xvals' => '' , 'yvals' => '',
    'height' =>'400','width' => '600'),$atts);
  return '
  <script>
  var chartData'.$diveId.'={
    "type":"'.$atts["type"] .'",
    "series": [
      { "values": ['.$atts["xvals"].'] },
      { "values": ['.$atts["yvals"].'] }
    ]
  };
  window.onload=function(){
    zingchart.render({
      id:"chartDiv'.$diveId.'",
      height:'.$atts["height"].',
      width:'.$atts["width"].',
      data:chartData'.$diveId.'
    });
  };
  </script>  
  <div id="chartDiv'.$diveId.'"></div>';
}
add_shortcode("zing","zing_plot");

function zing_admin(){
?>
  <div class="wrap">
    <?php screen_icon();?>
    <h2>Zing Chart</h2>
    <p>Welcome to Zing Chart plugin.<br>
    In order to use this plugin simply add the following shortcode to your text <br>
    [zing type="" xvals="" yvals="" height="[optional]" weidth="[optional]"]</p>
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