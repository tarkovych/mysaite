 <link rel="stylesheet" href="<?php echo route::getBP() . DS . "css/AgeStyle.css"; ?>">
 <script src="<?php echo route::getBP() . DS . "js/age.js"; ?>"></script>


 <div class="container-fluid">

     <h2 class="m-3">Age Maker v1.0</h2>

     <div class="row m-2">
         <div class="col">
             <input type="text" class=" form-control form-control-lg myInput shadow-sm" id="qAge" placeholder="AGE" oninput='copy()'>
         </div>
         <div class="col">
             <input type="text" class="form-control form-control-lg myInput shadow-sm" id="qHxAge" placeholder="HxAGE">
         </div>
     </div>
     <textarea type="text" class=" form-control myTextArea shadow-sm" id="table" placeholder="ВОЗРАСТЫ"></textarea>
     <div class="row m-2">
         <div class="col">
             <button class="btn btn-info btn-block myButton shadow-sm" onclick="result()">START</button>
         </div>
         <div class="col">
             <button class="btn btn-secondary btn-block myButton shadow-sm" onclick="reset()">RESET</button>
         </div>
     </div>
     <!-- /////////// -->
     <div class="custom-control custom-radio row m-2">
         <input type="radio" id='roro1' name="customRadio" class="custom-control-input" checked>
         <label class="custom-control-label" for='roro1'>GRID</label>
     </div>
     <div class="custom-control custom-radio row m-2">
         <input type="radio" id='roro2' name="customRadio" class="custom-control-input">
         <label class="custom-control-label" for='roro2'>NUMERIC</label>
     </div>
     <!-- ////////////// -->
     <p onclick='saveD("Con")' id="saveCon" style="cursor:pointer" class= "m-2"></p>
     <textarea type="text" class="form-control myTextArea shadow-sm" id="Con" placeholder="CONSTRUCT"></textarea>
     <p onclick='saveD("Skip")' id="saveSkip" style="cursor:pointer" class= "m-2"></p>
     <textarea type="text" class="form-control  shadow-sm" id="Skip" placeholder="SKIPLOGIK"></textarea>


 </div>
 <style type="text/css">

 </style>