<template>
  <body>
  <fieldset>
    <legend>Input Textboxes</legend>

    <input type="text">
    <input type="search">
    <input type="number" min="0" max="5">
    <textarea></textarea>
  </fieldset>

  <fieldset>
    <legend>Input Boxes</legend>

    <input type="checkbox" name="checkboxes">
    <label type="checkbox" name="checkboxes">option 1</label>
    <input type="checkbox" name="checkboxes">
    <label type="checkbox" name="checkboxes">option 2</label>

    <input type="radio" name="radios">
    <label type="radio" name="radios">option 1</label>
    <input type="radio" name="radios">
    <label type="radio" name="radios">option 2</label>

    <input list="input choices">
    <datalist id="input choices">
      <option value="option 1"></option>
      <option value="option 2"></option>
      <option value="option 3"></option>
      <option value="option 4"></option>
    </datalist>
  </fieldset>

  <fieldset>
    <legend>Display and Pickers</legend>
    
    <meter min="0" max="100" low="33" high="66" value="70"></meter>

    <progress></progress>

    <input type="date">
    <input type="time">
    <input type="color">
    <input type="file">

  </fieldset>
    
  <fieldset>
    <legend>Buttons</legend>

    <input type="submit">
    <input type="reset">
    <input type="button" value="Normal">
  </fieldset>
  </body>
</template>

<script>
</script>

<style>
body{
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: rgb(164, 164, 228);
}

fieldset{
  background-color: rgb(212, 212, 239);
  border-color: rgb(0, 0, 0);
  border-radius: 5px;
}
</style>