<?php
require_once(plugin_dir_path(__FILE__).'chart.php');
class Zing_PieChart implements Chart_Interface {
  protected $shortCodeArray = '';
  function Zing_PieChart ($atts) {
    $this->shortCodeArray = $atts;
  }
  function JsonIt () {
    return 'Works';
  }
}