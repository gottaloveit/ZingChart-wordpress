<?php
/* Plugin Name: Zing Charts
 * Plugin URI:http://www.zingchart.com/
 * Description: This plugin adds Zing charts to wordpress.
 * Author: Hamid Tavakoli
 * Version:1.0
 * Author URI: http://pint.com
 * Lisense :???
 */

ini_set('display_errors', 'On');
error_reporting(E_ALL | E_STRICT);


define('ZING_PLUGIN_URL',plugin_dir_url(__FILE__));
define('ZING_PLUGIN_PATH',plugin_dir_path(__FILE__));
require_once(ZING_PLUGIN_PATH.'Zing_lib.php');
require_once(ZING_PLUGIN_PATH.'Zing_help.php');

function zing_activate() {
  //Just a place holder
}
register_activation_hook(__FILE__,"zing_activate");
function zing_deactivate() {
  //Just another place holder
}
register_deactivation_hook(__FILE__,"zing_deactivate");
function zing_plot($atts,$content=null){
  $jasonMaker = new ZingChart($atts);
  return $jasonMaker->JasonIt();  
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

function zing_admin() {
  $Help = new Zing_help();
  echo $Help->GetText();

}
function zing_admin_menu(){
  add_options_page('Zing Charts setting','Zing Chart','manage_options','Zing-chart','zing_admin');
}
add_action('admin_menu','zing_admin_menu');

function zing_loadLib(){
  wp_enqueue_script('zing_chart','http://cdn.zingchart.com/zingchart.min.js',array(),'2.1.0',TRUE);
}
add_action('wp_enqueue_scripts','zing_loadLib');
