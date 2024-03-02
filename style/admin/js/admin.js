document.addEventListener("DOMContentLoaded",function() {
	var $ = jQuery.noConflict();
	var pluginUrl = "../wp-content/plugins/dp-wp-blocks/";
	//.edit-post-sidebar #inspector-text-control-1

	var interval = setInterval( function() {
		var label = $( 'label:contains(Additional CSS class(es))' );
		if ( label.length ) {
			var container = label.parent(),
				input = container.find( 'input' ),
				select = container.find( 'select' );
			
			if ( !select.length ) {				
				var html = `
				<div style="margin:10px 0; position:relative">
					<select class="dp-select-bootstrap-class" name="dp-select-bootstrap-class" style="width:100%">
						<option value="">Add Bootstrap class</option>
					</select>
				</div>
				`;
				$( html ).insertBefore( input );
				$('.dp-select-bootstrap-class').on('change', function() {
					var value = $(this).val();
					var input = $('.block-editor-block-inspector__advanced .components-text-control__input');
					var list = input.append(value + ' ');
					input.attr('value',list.text());
				}).change();
			}
		}
	}, 10);
});