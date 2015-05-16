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
  /* If we need to have deafult vals we have to use this otherise,user can define everything
  $atts = shortcode_atts(array('type' => 'bar','vals1' => '' , 'vals2' => '','vals3'=>'','vals4'=>'','vals5'=>'',
    'vals6'=>'','vals7'=>'','vals8'=>'','vals9'=>'','vals10'=>'','height' =>'400','width' => '600'),$atts);*/
  $valueHolders = '';  
  foreach($atts as $key => $value){
    if (!empty($value)) {
      if (strcmp($key,'type') && strcmp($key, 'height') && strcmp($key, 'width')) {
          $valueHolders .= '{ "values": ['.$value.'] },';
      }
      
    }
  }
  $valueHolders =  rtrim($valueHolders,",");
  return '
  <script>
  var chartData'.$divId.'={
    "type":"'.$atts["type"] .'",
    "series": [
      '.$valueHolders.'
    ]
  };
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
