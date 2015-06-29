<?php
/*
 * This is a general class for charts 
 * For now line, bar, and area will be based on this class
 */

require_once(plugin_dir_path(__FILE__).'Chart_interface.php');
class chart {
	protected $shortCodeArray = '';
	function Chart($inputArray) {
		$this->shortCodeArray = $inputArray;
	}
	function JsonIt() {
		STATIC $divId = 0;
    $divId++;
    $legend ='';
    $data = '';
    $valueHolders = '';  
    $itISCsv = FALSE;
    foreach($this->shortCodeArray as $key => $value) {
      if (!empty($value)) {
        if (!strncmp($key, 'values', 6)) {
            $valueHolders .= '{ "values": ['.$value.'] },';
        }
      }
      /*if (!strcmp($key, 'text')) {
        $valueHolders .= '"text":'.
      }*/
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
      "type":"'.$this->shortCodeArray["type"] .'",'.
      $legend.$data.
    '};
    </script> 
    <div id="chartDiv'.$divId.'"></div>';
	}
}

?>