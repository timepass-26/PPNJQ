/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

$("span").wrap(function(){
  return $(this).is(".foo") ? "<strong>" : "<em>";
});
/*
Exception: SyntaxError: expected expression, got '<'
@Scratchpad/5:11
*/
/*
Exception: SyntaxError: expected expression, got '<'
@Scratchpad/5:11
*/