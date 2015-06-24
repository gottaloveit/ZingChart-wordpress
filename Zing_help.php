<?php
  /*
   * We have to extend the This help menu, and maybe even correct it.
   *
   */
  class Zing_help {
    private $helpText = '<div class="wrap"><h2>Zing Chart</h2>
    <p>Welcome to Zing Chart plugin.<br>
    In order to use this plugin simply add the following shortcode to your text <br>
    [zing type="" values1="" values2="" ..... height="[optional]" weidth="[optional]"]</p>
    </div>';
   
    function GetText() {
      return $this->helpText;
    }
  }
