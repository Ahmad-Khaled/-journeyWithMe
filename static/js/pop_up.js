<button id="my-button">Click me!</button>

<div id="my-modal" style="display:none;">
  <p>Hello, world!</p>
</div>

<script>
  $('#my-button').click(function() {
    $('#my-modal').show();
  });
</script>
